(ns coding.client.core
  (:require [waltz.state :as state]))

(set! *print-fn* #(.log js/console %))

(def app (state/machine :app))

