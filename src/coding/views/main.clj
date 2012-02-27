(ns coding.views.main
  (:require [coding.views.common :as common]
            [coding.models.box :as box]
            [noir.response :as resp])
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.page-helpers :only [link-to image]]
        [hiccup.form-helpers :only [form-to hidden-field text-field text-area submit-button]]
        [hiccup.core :only [html]]))

;;*********************************************************
;; Partials
;;*********************************************************



(defpartial editor [loc code]
  [:div#editor
   (form-to [:post loc]
            (text-area "codes" code)
            [:div#errors])])

;;*********************************************************
;; Pages
;;*********************************************************

(defpartial interface []
  [:div#interface
   (editor "/submit" "")
   [:canvas#canvas {:width 600 :height 650 :tabindex 1}]])

(defpage "/" []
  (common/dark-layout
    (interface)))

(defpage [:post "/submit"] {:keys [codes]}
  (let [res (time 
              (try 
                (box/->cljs codes)
                (catch Exception e
                  (.printStackTrace e)
                  "")))]
    (println res)
    res))
