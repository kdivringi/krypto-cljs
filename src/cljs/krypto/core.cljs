(ns krypto.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))


(def init-state {:cards [{:id 1 :type :num :value 3}
                         {:id 2 :type :num :value 4}
                         {:id 3 :type :num :value 8}
                         {:id 4 :type :num :value 10}]
                 :board [{:id 5 :type :num :value 12}]
                 })


(defonce app-state (atom nil))

(defn read [{:keys [state]} key params]
    {:value (get @state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'krypto.core/play-card
  [{:keys [state]} _ {:keys [id]}]
  (let [st @state
        full-card (some #(and (= id (:id %)) %) (:cards st))
        new-board (conj (:board st) full-card)
        new-cards (into [] (remove (partial = full-card) (:cards st)))]
    {:action #(swap! state merge st {:cards new-cards :board new-board})}))

(defmethod mutate 'krypto.core/take-card
  [{:keys [state]} _ {:keys [id]}]
  (let [st @state
        full-card (some #(and (= id (:id %)) %) (:board st))
        new-cards (conj (:cards st) full-card)
        new-board (into [] (remove (partial = full-card) (:board st)))]
    {:action #(swap! state merge st {:board new-board :cards new-cards})}))

(defui HandCard
  static om/IQuery
  (query [this]
         '[:id :value])
  Object
  (render [this]
          (let [{:keys [id value] :as c} (om/props this)]
          (dom/li #js {:className "card"
                       :onClick
                       (fn [e]
                         (om/transact! this `[(play-card {:id ~id}) :board :cards]))}
                  value))))

(def handcard (om/factory HandCard {:keyfn :id}))

(defui Cards
  Object
  (render [this]
          (let [play-cards (om/props this)]
          (apply dom/ul #js {:className "hlist"}
                 (dom/li #js {:className "card-first"} "Cards:")
                 (map handcard play-cards)))))

(def cards-view (om/factory Cards))

(defui BoardCard
  static om/IQuery
  (query [this]
         '[:id :value])
  Object
  (render [this]
          (let [{:keys [id value] :as c} (om/props this)]
            (dom/li #js {:className "card"
                         :onClick (fn [e]
                                    (om/transact! this `[(take-card {:id ~id}) :board :cards]))}
                    value))))

(def boardcard (om/factory BoardCard {:keyfn :id}))

(defui Board
  Object
  (render [this]
          (let [board-cards (om/props this)]
            (dom/ul #js {:className "hlist"}
                    (map boardcard board-cards)))))

(def board-view (om/factory Board))

(defui ^:once App
  static om/IQuery
  (query [this]
         '[:cards :board])
  Object
  (render [this]
          (dom/div #js {:className "App"}
                   (dom/h1 #js {:className "Title"} "Krypto!")
                   (dom/p #js {:className "Lead"} "Use the cards")
                   (dom/div nil (cards-view (:cards (om/props this))))
                   (dom/div nil (board-view (:board (om/props this))))
                   )))

(def reconciler
  (om/reconciler {:state app-state
                  :parser (om/parser {:read read :mutate mutate})}))


 (defn init []
   (if (nil? @app-state)
     (let [target (gdom/getElement "app")]
       (om/add-root! reconciler App target)
       (reset! app-state init-state))
     (.forceUpdate (om/class->any reconciler App))))

