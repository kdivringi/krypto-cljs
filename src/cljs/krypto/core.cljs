(ns krypto.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))


(def static_cards [{:value 3} {:value 5} {:value 10} {:value 4} {:value 1}])

(def app-state (atom {:cards static_cards :board []}))

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate [{:keys [state] :as env} key params]
  (if (= 'krypto.core/play key)
    {:action #(let [new-board (conj (:board @state) params)
                    new-cards (into [] (remove (partial = params) (:cards @state)))]
                (reset! state {:cards new-cards :board new-board})
                )}
    {:value :not-found}))

(defn play-card [value]
  (let [new-board (conj (:board @app-state) value)
        new-cards (into [] (remove (partial = value) (:cards @app-state)))]
    (reset! app-state {:cards new-cards :board new-board})))

(defui Cards
  ;; static om/IQuery
  ;; (query [this]
  ;;        [:cards])
  Object
  (render [this]
          (let [play-cards (om/props this)]
          (apply dom/ul #js {:className "hlist"}
                 (dom/li #js {:className "card-first"} "Cards:")
                 (map (fn [card]
                        (let [{:keys [value] :as c} card]
                          (dom/li #js {:className "card"
                                       :key value
                                       :onClick
                                       (fn [e]
                                         (play-card c))}
                                  value))) play-cards)))))

(def cards (om/factory Cards))

(defui App
  Object
  (render [this]
          (dom/div #js {:className "App"}
                   (dom/h1 #js {:className "Title"} "Krypto!")
                   (dom/p #js {:className "Lead"} "Use the cards")
                   (dom/div nil (cards (:cards (om/props this))))
                                        ;(dom/div nil (boardview (:board (om/props this))))
                   )))

(def reconciler
  (om/reconciler {:state app-state}))

(defn init []
  (om/add-root! reconciler App (gdom/getElement "app")))

;; (defn init []
;;   (if (nil? @app-state)
;;     (let [target (gdom/getElement "app")]
;;       (om/add-root! reconciler App target)
;;       (reset! app-state {:cards (into [] (rest static_cards)) :board [(first static_cards)]}))
;;     (.forceUpdate (om/class->any reconciler App))))

