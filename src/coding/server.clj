(ns coding.server
  (:gen-class)
  (:require [noir.server :as server]
            [coding.models.box :as box]
            [cljs.compiler :as comp]))

(server/load-views-ns 'coding.views)

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8074"))]
    (comp/with-core-cljs
      (server/start port {:mode mode
                          :ns 'coding}))))
