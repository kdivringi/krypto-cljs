(ns krypto.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def init-data
  {:list/one [{:name "John" :points 0}
              {:name "Mary" :points 0}
              {:name "Bob"  :points 0}]
   :list/two [{:name "Mary" :points 0 :age 27}
              {:name "Gwen" :points 0}
              {:name "Jeff" :points 0}]})

;; -----------------------------------------------------------------------------
;; Parsing

(defmulti read om/dispatch)

(defn get-people [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(defmethod read :list/one
  [{:keys [state] :as env} key params]
  {:value (get-people state key)})

(defmethod read :list/two
  [{:keys [state] :as env} key params]
  {:value (get-people state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'points/increment
  [{:keys [state]} _ {:keys [name]}]
  {:action
   (fn []
     (swap! state update-in
       [:person/by-name name :points]
       inc))})

(defmethod mutate 'points/decrement
  [{:keys [state]} _ {:keys [name]}]
  {:action
   (fn []
     (swap! state update-in
       [:person/by-name name :points]
       #(let [n (dec %)] (if (neg? n) 0 n))))})

;; -----------------------------------------------------------------------------
;; Components

(defui Person
  static om/Ident
  (ident [this {:keys [name]}]
    [:person/by-name name])
  static om/IQuery
  (query [this]
    '[:name :points :age])
  Object
  (render [this]
    (println "Render Person" (-> this om/props :name))
    (let [{:keys [points name] :as props} (om/props this)]
      (dom/li nil
        (dom/label nil (str name ", points: " points))
        (dom/button
          #js {:onClick
               (fn [e]
                 (om/transact! this
                   `[(points/increment ~props)]))}
          "+")
        (dom/button
          #js {:onClick
               (fn [e]
                 (om/transact! this
                   `[(points/decrement ~props)]))}
          "-")))))

(def person (om/factory Person {:keyfn :name}))

(defui ListView
  Object
  (render [this]
    (println "Render ListView" (-> this om/path first))
    (let [list (om/props this)]
      (apply dom/ul nil
        (map person list)))))

(def list-view (om/factory ListView))

(defui RootView
  static om/IQuery
  (query [this]
    (let [subquery (om/get-query Person)]
      `[{:list/one ~subquery} {:list/two ~subquery}]))
  Object
  (render [this]
    (println "Render RootView")
    (let [{:keys [list/one list/two]} (om/props this)]
      (apply dom/div nil
        [(dom/h2 nil "List A")
         (list-view one)
         (dom/h2 nil "List B")
         (list-view two)]))))

(def reconciler
  (om/reconciler
    {:state  init-data
     :parser (om/parser {:read read :mutate mutate})}))

(def static_cards [{:value 3} {:value 5} {:value 10} {:value 4} {:value 1}])

(def app-state (atom {:cards static_cards :board []}))

;; (defn read [{:keys [state] :as env} key params]
;;   (let [st @state]
;;     {:value (key st)}))


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

;; (def reconciler
;;   (om/reconciler {:state app-state}))

(defn init []
  (om/add-root! reconciler RootView (gdom/getElement "app")))

;; (defn init []
;;   (if (nil? @app-state)
;;     (let [target (gdom/getElement "app")]
;;       (om/add-root! reconciler App target)
;;       (reset! app-state {:cards (into [] (rest static_cards)) :board [(first static_cards)]}))
;;     (.forceUpdate (om/class->any reconciler App))))

