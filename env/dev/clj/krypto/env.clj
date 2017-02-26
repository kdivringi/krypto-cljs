(ns krypto.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [krypto.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[krypto started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[krypto has shut down successfully]=-"))
   :middleware wrap-dev})
