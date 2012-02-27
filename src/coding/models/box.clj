(ns coding.models.box
  (:require [noir.session :as session]
            [cljs.compiler :as comp])
  (:use [clojail.core :only [sandbox safe-read lined-reader]]
        [clojail.testers :only [secure-tester-without-def]]))

(defn ->form [s]
  (lined-reader (str "(do " s ")")))

(defn ->cljs [f]
  (binding [comp/*cljs-ns* 'coding.client.main]
    (let [form (binding [*ns* (create-ns comp/*cljs-ns*)] 
                 (read (->form f)))
          env {:context :statement :locals {}} 
          env (assoc env :ns (@comp/namespaces comp/*cljs-ns*))
          ast (comp/analyze env form)
          js (comp/emits ast)
          wrap-js (comp/emits (binding [comp/*cljs-warn-on-undeclared* false]
                                (comp/analyze env form)))]
      wrap-js)))

(time (println "DOING: " (->cljs "
(ns coding.client.main
  (:refer-clojure :exclude [val])
  (:require [coding.client.editor :as editor]
            [waltz.history :as history]
            [waltz.state :as state]
            [waltz.transition :as trans]
            [monet.geometry :as geo]
            [monet.canvas :as canvas]
            [clojure.string :as string]
            [clojure.browser.repl :as repl])
  (:use-macros [crate.macros :only [defpartial]]
               [jayq.macros :only [queue]]
               [fetch.macros :only [letrem]]
               [waltz.macros :only [defstate deftrans in out]]
               [cljs.core :only [this-as]])
  (:use [coding.client.core :only [app]]
        [coding.client.util :only [log]]
        [jayq.core :only [$ append dequeue text val bind trigger
                                     slide-up slide-down fade-in fade-out remove-class
                                     attr xhr anim]]
        [waltz.state :only [add-state set-state unset-state in? transition 
                                    add-transition
                                    state-machine transition-by-url]]
        [jayq.core :only [map->js]]))
                                 "))) 
