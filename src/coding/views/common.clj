(ns coding.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5 include-js]]))

(defpartial layout [& content]
  (html5
    [:head
     [:title "coding"]
     (include-css "/css/reset.css")
     (include-css "/css/default.css")
     (include-css "/css/codemirror2.css")
     (include-js "/js/codemirror2.js") 
     (include-js "/js/clojure-mode.js") 
     (include-js "/js/javascript.js") 
     (include-js "/js/jquery.js") 
     (include-js "/js/jquery.svg.anim.js") 
     ] 
    [:body
     [:div#wrapper
      content
      (include-js "/cljs/bootstrap.js")]]))

(defpartial dark-layout [& content]
  (html5
    [:head
     [:title "coding"]
     (include-css "/css/reset.css")
     (include-css "/css/defaultDark.css")
     (include-css "/css/codemirrorDark.css")
     (include-js "/js/codemirror2.js") 
     (include-js "/js/clojure-mode.js") 
     (include-js "/js/javascript.js") 
     (include-js "/js/jquery.js") 
     ] 
    [:body
     [:div#wrapper
      content
      (include-js "/cljs/bootstrap.js")]]))
