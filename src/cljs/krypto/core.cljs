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
  (if (= 'increment key)
    {:value {:keys [:count]}
     :action #(swap! state update-in [:count] inc)}
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

(defui ^:once App
  Object
  (render [this]
          (dom/div {:className "App"}
                   (dom/h1 {:className "Title"} "Krypto!")
                   (dom/p {:className "Lead"} "Use the cards")
                   (dom/p nil (apply str (map :value (:cards (om/props this))))))))

(defonce reconciler
  (om/reconciler {:state app-state
                  :parser (om/parser {:read read :mutate mutate})}))


(defn init []
  (if (nil? @app-state)
    (let [target (gdom/getElement "app")]
      (om/add-root! reconciler App target)
      (reset! app-state {:cards static_cards :board []}))
    (.forceUpdate (om/class->any reconciler App))))

