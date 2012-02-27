goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__460160 = cljs.core.js_obj.call(null);

var G__460161__460162 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__460161__460162))
{var G__460164__460166 = cljs.core.first.call(null,G__460161__460162);
var vec__460165__460167 = G__460164__460166;
var k__460168 = cljs.core.nth.call(null,vec__460165__460167,0,null);
var v__460169 = cljs.core.nth.call(null,vec__460165__460167,1,null);
var G__460161__460170 = G__460161__460162;

var G__460164__460171 = G__460164__460166;
var G__460161__460172 = G__460161__460170;

while(true){
var vec__460173__460174 = G__460164__460171;
var k__460175 = cljs.core.nth.call(null,vec__460173__460174,0,null);
var v__460176 = cljs.core.nth.call(null,vec__460173__460174,1,null);
var G__460161__460177 = G__460161__460172;

(out__460160[cljs.core.name.call(null,k__460175)] = v__460176);
var temp__3698__auto____460178 = cljs.core.next.call(null,G__460161__460177);

if(cljs.core.truth_(temp__3698__auto____460178))
{var G__460161__460179 = temp__3698__auto____460178;

{
var G__460180 = cljs.core.first.call(null,G__460161__460179);
var G__460181 = G__460161__460179;
G__460164__460171 = G__460180;
G__460161__460172 = G__460181;
continue;
}
} else
{}
break;
}
} else
{}
return out__460160;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__460182 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__460182);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__460183){
var v = cljs.core.first(arglist__460183);
var text = cljs.core.rest(arglist__460183);
return log__delegate.call(this, v, text);
});
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__460184){
var vec__460185__460186 = p__460184;
var k__460187 = cljs.core.nth.call(null,vec__460185__460186,0,null);
var v__460188 = cljs.core.nth.call(null,vec__460185__460186,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__460187),clj__GT_js.call(null,v__460188));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
