(ns krypto.core
  (:require [goog.dom :as gdom]
            [goog.string :as gstring]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [krypto.actions :as actions]))


(def init-state {:cards [{:id 1 :type :num :value 3}
                         {:id 2 :type :num :value 4}
                         {:id 3 :type :num :value 8}
                         {:id 4 :type :num :value 10}]
                 :board [{:id 5 :type :num :value 12}]
                 })


(defonce app-state (atom nil))

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
                  (actions/display c)))))

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
                    (actions/display c)))))

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
                   (dom/ul #js {:className "Ops"}
                            (map (fn [optype, symbol]
                                   (dom/li #js {:className "btn"
                                                :onClick (fn [e]
                                                           (om/transact! this
                                                                         `[(play-op {:op ~optype}) :board :cards]))}
                                           (gstring/unescapeEntities symbol)))
                                '(:plus :minus :times :divide)
                                '("+" "&minus;" "&times;" "&divide;")))
                   (dom/div nil (cards-view (:cards (om/props this))))
                   (dom/div nil (board-view (:board (om/props this))))
                   )))

(def reconciler
  (om/reconciler {:state app-state
                  :parser (om/parser {:read actions/read :mutate actions/mutate})}))


 (defn init []
   (if (nil? @app-state)
     (let [target (gdom/getElement "app")]
       (om/add-root! reconciler App target)
       (reset! app-state init-state))
     (.forceUpdate (om/class->any reconciler App))))

