(ns coding.client.debug)

(def debug? true)

(defn debug-log [& vs]
  (when debug?
    (.log js/console (apply str vs))))
