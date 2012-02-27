goog.provide('waltz.history');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.History');
goog.require('goog.history.Html5History');
waltz.history.create_history = (function create_history(){
var h__460301 = (cljs.core.truth_(goog.history.Html5History.isSupported.call(null))?(new goog.history.Html5History()):(new goog.History()));

h__460301.setEnabled(true);
return h__460301;
});
waltz.history.history = waltz.history.create_history.call(null);
waltz.history.set = (function set(token){
return waltz.history.history.setToken(cljs.core.name.call(null,token));
});
waltz.history.get = (function get(){
var t__460302 = waltz.history.history.getToken();

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",t__460302)))
{return null;
} else
{return cljs.core.keyword.call(null,t__460302);
}
});
waltz.history.listen = (function listen(callback){
return clojure.browser.event.listen.call(null,waltz.history.history,"navigate",callback);
});
