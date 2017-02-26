(ns krypto.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defonce app-state (atom nil))

(def static_cards [{:value 3} {:value 5} {:value 10} {:value 4} {:value 1}])

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate [{:keys [state] :as env} key params]
  (if (= 'krypto.core/play key)
    {:value nil
     :action #(let [new-board (conj (:board @state) params)
                    new-cards (remove (partial = params) (:cards @state))]
                (reset! state {:cards new-cards :board new-board})
                )}
    {:value :not-found}))

(defui ^:once Counter
  static om/IQuery
  (query [this]
         [:count])
  Object
  (render [this]
          (let [{:keys [count]} (om/props this)]
            (dom/div nil
                     (dom/p nil "Brought to you by the fine folks at Krypto!")
                     (dom/span nil (str "Count: " count))
                     (dom/button
                      #js {:onClick
                           (fn [e]
                             (om/transact! this '[(increment)]))}
                      "Click me!")))))

; I don't really want to create this but I can't find another way to specify the React Key
(defui PlayCard
  static om/IQuery
  (query [this]
         '[:value])
  Object
  (render [this]
          (let [{:keys [value] :as c} (om/props this)]
            (dom/li #js {:className "card"
                         :onClick
                         (fn [e]
                           (om/transact! this `[(play ~c)]))}
                    value))))

(def playcard (om/factory PlayCard {:keyfn :value}))

(defui Cards
  static om/IQuery
  (query [this]
         [:cards])
  Object
  (render [this]
          (apply dom/ul #js {:className "hlist"}
                 (dom/li #js {:className "card-first"} "Cards:")
                 (map playcard (om/props this)))))

(def cards (om/factory Cards))

(defui BoardCard ; Super similar to playcard except for action...
  static om/IQuery
  (query [this]
         '[:board])
  Object
  (render [this]
          (let [{:keys [value] :as c} (om/props this)]
            (dom/li #js {:className "card"
                         :onClick
                         (fn [e]
                           (om/transact! this `[remove ~c]))} value))))

(def boarditem (om/factory BoardCard {:keyfn :value}))

(defui Board
  Object
  (render [this]
          (apply dom/ul #js {:className "hlist"}
                 (map boarditem (om/props this)))))

(def boardview (om/factory Board))

(defui ^:once App
  Object
  (render [this]
          (dom/div #js {:className "App"}
                   (dom/h1 #js {:className "Title"} "Krypto!")
                   (dom/p #js {:className "Lead"} "Use the cards")
                   (dom/div nil (cards (:cards (om/props this))))
                   (dom/div nil (boardview (:board (om/props this)))))))

(defonce reconciler
  (om/reconciler {:state app-state
                  :parser (om/parser {:read read :mutate mutate})}))


(defn init []
  (if (nil? @app-state)
    (let [target (gdom/getElement "app")]
      (om/add-root! reconciler App target)
      (reset! app-state {:cards (rest static_cards) :board [(first static_cards)]}))
    (.forceUpdate (om/class->any reconciler App))))

