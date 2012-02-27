goog.provide('waltz.transition');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('waltz.history');
goog.require('waltz.state');
waltz.transition.exclude = (function exclude(sm,name,to_set,to_unset){
return waltz.state.add_transition.call(null,sm,name,(function() { 
var G__460293__delegate = function (args){
cljs.core.apply.call(null,waltz.state.unset,sm,to_unset,args);
return cljs.core.apply.call(null,waltz.state.set,sm,to_set,args);
};
var G__460293 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__460293__delegate.call(this, args);
};
G__460293.cljs$lang$maxFixedArity = 0;
G__460293.cljs$lang$applyTo = (function (arglist__460294){
var args = cljs.core.seq( arglist__460294 );;
return G__460293__delegate.call(this, args);
});
return G__460293;
})()
);
});
waltz.transition.by_url = (function by_url(sm){
var url__460295 = window.location.pathname;

return waltz.state.transition.call(null,sm,cljs.core.Vector.fromArray(["﷐'url",url__460295]));
});
waltz.transition.by_hash = (function by_hash(sm){
return waltz.history.listen.call(null,(function (e){
var token__460296 = e.token;
var token__460297 = (cljs.core.truth_(cljs.core._EQ_.call(null,"",token__460296))?"index":token__460296);
var type__460298 = e.type;
var navigation_QMARK___460299 = e.isNavigation;
var kw__460300 = cljs.core.keyword.call(null,cljs.core.str.call(null,"hash:",token__460297));

waltz.state.debug_log.call(null,sm,"hash keyword: ",kw__460300);
waltz.state.debug_log.call(null,sm,"hash changed: ",token__460297," :: navigation? ",navigation_QMARK___460299," :: type ",type__460298);
if(cljs.core.truth_(navigation_QMARK___460299))
{return waltz.state.transition.call(null,sm,kw__460300);
} else
{return null;
}
}));
});
