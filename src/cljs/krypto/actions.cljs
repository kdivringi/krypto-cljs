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

(defn add-board
  ([brd]
  (add-board brd 0))
  ([brd current]
  (let [len (count brd)]
    (cond
      (= len 0) current
      (= len 1) (+ current (calculate (first brd)))
      (even? len) (add-board (butlast brd))
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


                                        ;---------------- Actions -----------------

(defn read [{:keys [state]} key params]
    {:value (get @state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'krypto.core/play-card
  [{:keys [state]} _ {:keys [id]}]
  ; The board must be empty or the last item on the board must be an :op
  (when (or (= 0 (count (:board @state))) ) ;(= :op (:type (last (:board @state)))))
    (let [st @state
        full-card (retrieve-by-id id (:cards st))
        new-board (conj (:board st) full-card)
        new-cards (into [] (remove (partial = full-card) (:cards st)))]
      {:action #(swap! state merge st {:cards new-cards :board new-board})})))

(defmethod mutate 'krypto.core/take-card
  [{:keys [state]} _ {:keys [id]}]
  (let [st @state
        full-card (retrieve-by-id id (:board st))]
    (when (= (last (:board st)) full-card) ; Can only remove last card from board
      (let [new-cards (if (not= (:type full-card) :op)
                        (conj (:cards st) full-card)
                        (:cards st))
            new-board (into [] (remove (partial = full-card) (:board st)))]
    {:action #(swap! state merge st {:board new-board :cards new-cards})}))))

(defmethod mutate 'krypto.core/play-op
  [{:keys [state]} _ {:keys [op]}]
  (let [st @state]
    (when (not= :op (:type (last (:board st))))
      (let [new-card {:id (next-free-id (:board st) (:cards st))
                      :type :op
                      :value op}
        new-board (conj (:board st) new-card)]
    {:action #(swap! state merge st {:board new-board})}))))

;; (defn add-board)

;; (defn next-free-id)

;; new game

;; Reset
