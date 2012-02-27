(ns coding.client.editor
  (:refer-clojure :exclude [val])
  (:require [waltz.state :as state])
  (:use-macros [waltz.macros :only [defstate deftrans in out]])
  (:use [coding.client.core :only [app]]
        [waltz.state :only [transition]]
        [jayq.core :only [$ append queue text val bind trigger 
                          slide-up slide-down attr xhr]]
        [coding.client.util :only [log]]
        [jayq.util :only [map->js]]))


;;*********************************************************
;; Events
;;*********************************************************

(defn do-submit []
  (trigger ($ :form) :submit))

;;*********************************************************
;; Creating
;;*********************************************************

(def key-bindings {"Cmd-Enter" do-submit
                   "Ctrl-Enter" do-submit}) 

(defn ->editor [elem opts]
  (js/CodeMirror.fromTextArea (.getElementById js/document elem)
                              (map->js opts)))

(defn make-editor [& [mode]]
  (let [e (->editor "codes" {:mode (or mode "text/x-clojure")
                             :lineNumbers false
                             :matchBrackets true
                             :extraKeys (map->js key-bindings)})]
    e))

;;*********************************************************
;; elems
;;*********************************************************

(def $errors ($ "#errors"))
(def error-lines (atom []))
(def state (state/machine :editor))
(def editor (make-editor))

(def clj-submit-url "/submit")

;;*********************************************************
;; Errors
;;*********************************************************

(defn error-line [l klass]
  (.setLineClass editor l (name klass)))

;;*********************************************************
;; Submitting
;;*********************************************************

(defn submit-code []
  (let [codes (->val editor)
        loc (attr ($ :form) :action)]
    (xhr [:post loc] {:codes codes} 
         (fn [v]
           (let [{:keys [moves result out exception]} (js->clj v :keywordize-keys true)]
             (when exception
               (transition state :error exception))
             (log (pr-str moves))
             (transition app :executing v))))))

;;*********************************************************
;; Params
;;*********************************************************

(defn ->val []
  (. editor (getValue)))

(defn set-val [v]
  (. editor (setValue v)))

(defn- set-mode [m]
  (.setOption editor "mode" m))

(defn- set-submit-url [u]
  (attr ($ :form) :action u))

(defn- focus []
  (.focus editor))

(defn refresh []
  (.refresh editor))

;;*********************************************************
;; States
;;
;;*********************************************************

(defstate state :error
  (in (fn [{:keys [message stack]}]
        (reset! error-lines (map (comp dec :line) (filter :line stack)))
        (when-let [lines (seq @error-lines)]
          (error-line (first lines) :error-source)
          (doseq [l (rest lines)]
            (error-line l :error-stack)))
        (text $errors message)
        (slide-down $errors)))
  (out (fn []
         (slide-up $errors "fast" (fn []
                                    (hide $errors)))
         (doseq [l @error-lines]
           (.setLineClass editor l nil))
         (reset! error-lines []))))

(defstate state :clojure
  (in (fn []
        (set-mode "text/x-clojure")
        (set-submit-url clj-submit-url)
        (set-val "
;; Click the right pane to focus the game:
;;   - Arrow keys move you left and right
;;   - Space makes you jump
;;   - Clicking the canvas will place a block
;;   - s pauses the game and show you a history of what you did.
;; change how the game works, see how it affects the history :)

(defn gravity [{:keys [vy y] :as me}]
  (let [g 0.5
        vy (or vy 0)
        neue-vy (+ vy g)
        dir (if (< neue-vy 0) :up :down)
        moved (update-in me [:y] + neue-vy)]
    (if-let [block (colliding? moved)]
      (let [block-edge (if (= dir :up)
                          (+ (:y block) (:h block) (:r me))
                          (- (:y block) (:r me)))]
        (assoc me :y block-edge
                :jumping (= dir :up)
                :vy 0))
      (-> moved
          (assoc :vy neue-vy)))))

(defn jump [me]
  (let [speed -10]
    (if (and (input? :space)
              (and (not (:jumping me)) (zero? (:vy me))))
      (assoc me :vy speed
              :jumping true)
      me)))

(defn move [me]
  (let [speed 5
        vx (cond
             (input? :left) (- speed)
             (input? :right) speed
             :else 0)
        moved (update-in me [:x] + vx)]
    (if (zero? vx) 
      me
      (if-let [block (colliding? moved)]
        (let [block-edge (if (< vx 0)
                           (+ (:x block) (:w block) (:r me))
                           (- (:x block) (:r me)))]

          (assoc me :x block-edge))
        moved))))

(defn reset [me]
  (if (> (:y me) 650)
    (-> me
        (assoc :x 30)
        (assoc :y 30)
        (assoc :vy 0))
    me))

(defn update-player [me]
  (-> me
      (gravity)
      (move)
      (jump)
      (reset)
      ))

(defn draw-player [ctx me]
  (-> ctx
      (canvas/fill-style \"#449\")
      (canvas/stroke-style \"#68d\")
      (canvas/stroke-width 2)
      (canvas/circle me)
      (canvas/stroke)))")
        (submit-code))))

(deftrans state :clean []
  (state/unset state :error))

(deftrans state :set-language [lang]
  (transition state :clean)
  (state/set state lang))

(deftrans state :submit []
  (state/unset state :error)
  (submit-code))

(deftrans state :error [ex]
  (state/set state :error ex))

(transition state :set-language :clojure)

(.setOption editor "onChange"
            (fn [ed delta]
              (submit-code))) 
