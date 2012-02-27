(ns coding.client.main
  (:refer-clojure :exclude [val])
  (:require [coding.client.editor :as editor]
            [waltz.state :as state]
            [waltz.transition :as trans]
            [monet.canvas :as canvas]
            [monet.geometry :as geo])
  (:use-macros [waltz.macros :only [defstate deftrans in out]]
               [cljs.core :only [this-as]])
  (:use [coding.client.core :only [app]]
        [coding.client.util :only [log]]
        [jayq.core :only [$ append bind ]]))

(def $body ($ :body))

(def app (state/machine :app))

(deftrans app :submitting [] 
  (state/set app :submitting)
  (transition editor/state :submit))

(deftrans app :executing [v]
  (js/eval v)
  (update-history))

(bind ($ "form") :submit
      (fn [e]
        (.preventDefault e)
        (transition app :submitting)))

(def canvas (canvas/init (.get ($ :#canvas) 0)))

(canvas/add-entity canvas :background
                   (canvas/entity {:x 0 :y 0 :w 600 :h 650}
                                  nil ;;update function
                                  (fn [ctx me]
                                    (-> ctx
                                        (canvas/fill-style "#222")
                                        (canvas/rect me)))))

(defn update-player [me]
  me)

(defn draw-player [ctx me]
  (-> ctx
      (canvas/fill-style "#888")
      (canvas/circle me)))

(canvas/add-entity canvas :player
                   (canvas/entity {:x 30 :y 500 :r 15}
                                  (fn [me]
                                    (update-player me))
                                  (fn [ctx me]
                                    (draw-player ctx me))))

(defn draw-block [ctx me]
  (-> ctx
      (canvas/fill-style "#143")
      (canvas/stroke-style "#175")
      (canvas/stroke-width 2)
      (canvas/rect me)
      (canvas/stroke)))

(def blocks (atom {}))

(defn make-block [r c]
  (if-not (@blocks [r c])
    (let [x (* 40 r)
          y (* 40 c)]
      (swap! blocks assoc [r c] {:x x :y y :w 40 :h 40 :type :block}))
    (swap! blocks dissoc [r c])))

(canvas/add-entity canvas :blocks 
                   (canvas/entity {}
                                  nil
                                  (fn [ctx me]
                                    (doseq [b (vals @blocks)]
                                      (draw-block ctx b)))))

(def history-count 100)
(def history (array))
(def original-history-point nil)

(defn update-history []
  ;; get the first history point
  (when-not @(:updating? canvas)
    (aset history 0 (goog.object/unsafeClone original-history-point)) 
    (let [old history
          new-history (array)]
      (set! history new-history)
      (loop [cur 0 
             prev-dude nil]
        (if-not (< cur history-count)
          (aset (:entities canvas) :player prev-dude) 
          (let [{:keys [input entities] :as entry} (aget old cur) 
                dude (or prev-dude (aget entities :player))]
            (reset! inputs input)
            (let [neue-value (update-player (:value dude))
                  neue (assoc dude :value neue-value)]
              (aset entities :player neue)
              (.push new-history entry)
              (recur (inc cur) neue)))))
      (reset! inputs {})
      )))

(canvas/add-entity canvas :recorder
                   (canvas/entity {}
                                  (fn [me]
                                    ;;every tick record the state of the
                                    ;;entities and the current input
                                    (.push history {:input @inputs :entities (goog.object/clone (:entities canvas))})
                                    (when (> (alength history) history-count)
                                      (.splice history 0 1))
                                    me)
                                  (fn [ctx me]
                                    (when-not @(:updating? canvas)
                                      (canvas/save ctx)
                                      (canvas/alpha ctx 0.5)
                                      (doseq [cur (range 0 history-count 5)]
                                        (let [{:keys [entities input]} (aget history cur)
                                              dude (aget entities :player)]
                                          (draw-player ctx (:value dude)))) 
                                      (canvas/restore ctx)))))

(defn colliding? [me]
  (let [blocks (vals @blocks)]
    (first (filter #(geo/collision? me %) blocks))))

(make-block 0 14)
(make-block 1 14)
(make-block 2 14)
(make-block 5 14)
(make-block 6 14)
(make-block 7 14)

(defn ->40th [v]
  (Math/floor (/ v 40)))

(defn coords->block [x y]
  (make-block (->40th x) (->40th y)))

(def inputs (atom {}))
(def ->key {37 :left
            39 :right
            32 :space
            83 :s})

(defn input? [k]
  (@inputs k))

(defn pause-game []
  (if @(:updating? canvas)
    (do
      (canvas/stop-updating canvas)
      (set! original-history-point (aget history 0)))
    (canvas/start-updating canvas)))

(bind ($ :#canvas) :keydown
      (fn [e]
        (when-let [k (->key (.-keyCode e))]
          (if (= k :s)
            (pause-game)
            (swap! inputs assoc k true)))))

(bind ($ :#canvas) :keyup
      (fn [e]
        (when-let [k (->key (.-keyCode e))]
          (swap! inputs assoc k false))))

(bind ($ :#canvas) :focus
      (fn [e]
        (this-as me
          (set! (.-focused me) true))))

(bind ($ :#canvas) :blur
      (fn [e]
        (this-as me
          (set! (.-focused me) false))))

(bind ($ :#canvas) :mousedown
      (fn [e]
        (this-as me
          (when (.-focused me)
            (coords->block (.-offsetX e) (.-offsetY e))
            (update-history)))))
