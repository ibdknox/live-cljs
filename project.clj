(defproject coding "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir "1.3.0-alpha7"]
                 [congomongo "0.1.7"]
                 [org.clojure/clojurescript "0.0-971"]
                 [ibdknox/clojail "0.5.2"]
                 ]
  :cljsbuild {:repl-listen-port 9001
              :builds
              [{:source-path "src",
                :compiler
                {:output-dir "resources/public/cljs/",
                 :output-to "resources/public/cljs/bootstrap.js",
                 :optimizations :simple,
                 :externs ["checkouts/jayq/resources/externs/jquery.js"
                           "resources/externs/codemirror.js"],
                 :pretty-print true}}]}
  :main coding.server)

