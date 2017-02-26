(ns user
  (:require [mount.core :as mount]
            [krypto.figwheel :refer [start-fw stop-fw cljs]]
            krypto.core))

(defn start []
  (mount/start-without #'krypto.core/http-server
                       #'krypto.core/repl-server))

(defn stop []
  (mount/stop-except #'krypto.core/http-server
                     #'krypto.core/repl-server))

(defn restart []
  (stop)
  (start))


