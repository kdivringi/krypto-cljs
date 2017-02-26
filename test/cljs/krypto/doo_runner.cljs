(ns krypto.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [krypto.core-test]))

(doo-tests 'krypto.core-test)

