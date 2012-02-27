goog.provide('coding.client.debug');
goog.require('cljs.core');
coding.client.debug.debug_QMARK_ = true;
/**
* @param {...*} var_args
*/
coding.client.debug.debug_log = (function() { 
var debug_log__delegate = function (vs){
if(cljs.core.truth_(coding.client.debug.debug_QMARK_))
{return console.log(cljs.core.apply.call(null,cljs.core.str,vs));
} else
{return null;
}
};
var debug_log = function (var_args){
var vs = null;
if (goog.isDef(var_args)) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return debug_log__delegate.call(this, vs);
};
debug_log.cljs$lang$maxFixedArity = 0;
debug_log.cljs$lang$applyTo = (function (arglist__458350){
var vs = cljs.core.seq( arglist__458350 );;
return debug_log__delegate.call(this, vs);
});
return debug_log;
})()
;
