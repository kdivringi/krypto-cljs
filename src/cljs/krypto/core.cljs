(ns krypto.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def init-state {:cards [{:id 1 :type :num :value 3}
                         {:id 2 :type :num :value 4}
                         {:id 3 :type :num :value 8}
                         {:id 4 :type :num :value 10}]
                 :board [{:id 5 :type :num :value 12}]
                 })


(def app-state (atom init-state))

(defn read [{:keys [state query-root]} key params]
  (let [st @state
        app-root (om/app-root reconciler)
        norm-data (om/tree->db app-root st true)
        result (om/db->tree [query-root] st norm-data)]
    {:value result}))

(defmulti mutate om/dispatch)

(defmethod mutate 'krypto.core/play-card
  [{:keys [state] :as env} {:keys [id] :as keys} params]
  (let [full-card (get-in state [:card/by-id id])
        new-board (conj (:board @state) full-card)
        new-cards (into [] (remove (partial = full-card) (:cards @state)))]
    (reset! app-state {:cards new-cards :board new-board})))


(defui HandCard
  static om/Ident
  (ident [this {:keys [id]}]
         [:card/by-id id])
  static om/IQuery
  (query [this]
         '[:id :value])
  Object
  (render [this]
          (let [{:keys [id value] :as c} (om/props this)]
          (dom/li #js {:className "card"
                       :onClick
                       (fn [e]
                         (om/transact! this `[(play-card {:id ~id}) [:board] [:cards]]))}
                  value))))

; ???
(def handcard (om/factory HandCard {:keyfn :id}))

(defui Cards
  Object
  (render [this]
          (let [play-cards (om/props this)]
          (apply dom/ul #js {:className "hlist"}
                 (dom/li #js {:className "card-first"} "Cards:")
                 (map handcard play-cards)))))

(def cards-view (om/factory Cards))

(defui App
  static om/IQuery
  (query [this]
         (let [subquery (om/get-query HandCard)]
           `[{:cards ~subquery}]))
  Object
  (render [this]
          (dom/div #js {:className "App"}
                   (dom/h1 #js {:className "Title"} "Krypto!")
                   (dom/p #js {:className "Lead"} "Use the cards")
                   (dom/div nil (cards-view (:cards (om/props this))))
                                        ;(dom/div nil (boardview (:board (om/props this))))
                   )))

(def reconciler
  (om/reconciler {:state init-state
                  :parser (om/parser {:read read :mutate mutate})}))

(defn init []
  (om/add-root! reconciler App (gdom/getElement "app")))

;; (defn init []
;;   (if (nil? @app-state)
;;     (let [target (gdom/getElement "app")]
;;       (om/add-root! reconciler App target)
;;       (reset! app-state {:cards (into [] (rest static_cards)) :board [(first static_cards)]}))
;;     (.forceUpdate (om/class->any reconciler App))))

