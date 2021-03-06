(ns krypto.actions
  (:require [om.next :as om]))

                                        ;---------- Helpers ----------

(defn retrieve-by-id [id loc]
  (some #(and (= id (:id %)) %) loc))

(defn next-free-id [st]
  (let [everything [(:board st) (:cards st) [(:goal st)]]]
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


(defn add-board ; No operator precedence, so sue me
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

(defmethod calculate :paren
  [{:keys [value]}]
  (add-board value))

(defmulti display :type)

(defmethod display :num
  [{:keys [value]}]
  value)

(defmethod display :op
  [card]
  ((:value card) {:plus "+" :minus "-" :times "*" :divide "/"}))

(defmethod display :paren
  [{:keys [value]}]
  (str "(" (apply str (map display value)) ")"))

(defmethod display :default ; For whatever reason I keep getting erros in the console log about this?
  [something]
  nil)


                                        ;---------------- Actions -----------------

(defn read [{:keys [state]} key params]
    {:value (get @state key)})

(defmulti mutate om/dispatch)

; I'm not certain why but it seems I need to check these predicates in the UI anonymous functions
(defn can-play? [state]
  "The board must be empty or the last item on the board must be an :op"
  (let [st @state]
    (or (= 0 (count (:board st)))  (= :op (:type (last (:board st)))))))

(defmethod mutate 'krypto.core/play-card
  [{:keys [state]} _ {:keys [id]}]
  (let [st @state
        full-card (retrieve-by-id id (:cards st))
        new-board (conj (:board st) full-card)
        new-cards (into [] (remove (partial = full-card) (:cards st)))]
    {:action #(swap! state merge st {:cards new-cards :board new-board})}))

(defn can-take? [state id]
  "Can only remove last card from board"
  (let [st @state
        full-card (retrieve-by-id id (:board st))]
    (= (last (:board st)) full-card)
  ))

(defmethod mutate 'krypto.core/take-card
  [{:keys [state]} _ {:keys [id]}]
  (let [st @state
        full-card (retrieve-by-id id (:board st))
        new-cards (if (not= (:type full-card) :op)
                        (conj (:cards st) full-card)
                        (:cards st))
        new-board (into [] (remove (partial = full-card) (:board st)))]
        {:action #(swap! state merge st {:board new-board :cards new-cards})}))

(defmethod mutate 'krypto.core/play-op ; This doesn't have issues, not implementing the predicate atm
  [{:keys [state]} _ {:keys [op]}]
  (let [st @state]
    (if (and (not= 0 (count (:board st))) (not= :op (:type (last (:board st)))))
      (let [new-card {:id (next-free-id st)
                      :type :op
                      :value op}
        new-board (conj (:board st) new-card)]
        {:action #(swap! state merge st {:board new-board})})
      {:action #(identity 1)})))

(defmethod mutate 'krypto.core/make-paren
  [{:keys [state]} _ _]
  (let [st @state
        new-board []
        new-card {:id (next-free-id st)
                  :type :paren
                  :value (:board st)}
        new-cards (conj (:cards st) new-card)
        new-parens (conj (:parens st) new-card)]
    {:action #(swap! state merge st {:board new-board :cards new-cards :parens new-parens})}))

(defmethod mutate 'krypto.core/remove-paren
  [{:keys [state]} _ {:keys [id]}]
  (if (some #(= id (:id %)) (:board @state))
    {:action #(identity 1)}
    (let [st @state
        full-card (retrieve-by-id id (:parens st))
        new-cards (into [] (concat
                   (remove #(= % full-card) (:cards st))
                   (remove #(= :op (:type %)) (:value full-card))))
        new-parens (into [] (butlast (:parens st)))]
      {:action #(swap! state merge st {:cards new-cards :parens new-parens})})
    ))

;; (defn add-board)

;; (defn next-free-id)

;; new game

;; Reset
