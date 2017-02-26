(ns krypto.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[krypto started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[krypto has shut down successfully]=-"))
   :middleware identity})
