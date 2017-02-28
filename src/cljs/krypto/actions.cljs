(ns krypto.actions
  (:require [om.next :as om]))

                                        ;---------- Helpers ----------

(defn retrieve-by-id [id loc]
  (some #(and (= id (:id %)) %) loc))

(defn next-free-id [loc & locs]
  (let [everything (conj locs loc)]
    (+ 1 (apply max (flatten
                     (map
                     (fn [col] (map :id col)) everything))))))

 
;---------- Protocols -----------
(defmulti calculate :type)

(defmethod calculate :num
  [card]
  (:value card))

(defmethod calculate :op
  [{:keys [value]}]
  (value {:plus + :minus - :times * :divide /}))


(defn add-board ; No operator precedence
  ([brd]
   (if (= 0 (count brd))
     0
     (add-board (rest brd) (calculate (first brd)))))
  ([brd current]
  (let [len (count brd)]
    (cond
      (= len 0) current
      (odd? len) (add-board (butlast brd) current)
      :else
      (let [one (calculate (first brd))
            two (calculate (second brd))
            new-current (one current two)
            others (rest (rest brd))]
        (recur others new-current))))))

(defmulti display :type)

(defmethod display :num
  [{:keys [value]}]
  value)

(defmethod display :op
  [card]
  ((:value card) {:plus "+" :minus "-" :times "*" :divide "/"}))

(defmethod display :default ; For whatever reason I keep getting erros in the console log about this?
  [something]
  nil)


                                        ;---------------- Actions -----------------

(defn read [{:keys [state]} key params]
    {:value (get @state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'krypto.core/play-card
  [{:keys [state]} _ {:keys [id]}]
  ; The board must be empty or the last item on the board must be an :op
  (let [st @state]
    (if (or (= 0 (count (:board st)))  (= :op (:type (last (:board st)))))
      (let [full-card (retrieve-by-id id (:cards st))
            new-board (conj (:board st) full-card)
            new-cards (into [] (remove (partial = full-card) (:cards st)))]
        (if (nil? full-card) {:action #(identity 1)}
            {:action #(swap! state merge st {:cards new-cards :board new-board})}))
      {:action #(identity 1)}))) ; Does it cause errors if you don't return something here?

(defmethod mutate 'krypto.core/take-card
  [{:keys [state]} _ {:keys [id]}]
  (let [st @state
        full-card (retrieve-by-id id (:board st))]
    (if (= (last (:board st)) full-card) ; Can only remove last card from board
      (let [new-cards (if (not= (:type full-card) :op)
                        (conj (:cards st) full-card)
                        (:cards st))
            new-board (into [] (remove (partial = full-card) (:board st)))]
        {:action #(swap! state merge st {:board new-board :cards new-cards})})
      {:action #(identity 1)})))

(defmethod mutate 'krypto.core/play-op
  [{:keys [state]} _ {:keys [op]}]
  (let [st @state]
    (if (and (not= 0 (count (:board st))) (not= :op (:type (last (:board st)))))
      (let [new-card {:id (next-free-id (:board st) (:cards st))
                      :type :op
                      :value op}
        new-board (conj (:board st) new-card)]
        {:action #(swap! state merge st {:board new-board})})
      {:action #(identity 1)})))

;; (defn add-board)

;; (defn next-free-id)

;; new game

;; Reset
