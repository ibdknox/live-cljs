goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{return cljs.core.str.call(null,"[crateGroup=",jayq.core.crate_meta.call(null,sel),"]");
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("﷐'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__460189){
var vec__460190__460191 = p__460189;
var context__460192 = cljs.core.nth.call(null,vec__460190__460191,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__460192)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__460192);
}
};
var $ = function (sel,var_args){
var p__460189 = null;
if (goog.isDef(var_args)) {
  p__460189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__460189);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__460193){
var sel = cljs.core.first(arglist__460193);
var p__460189 = cljs.core.rest(arglist__460193);
return $__delegate.call(this, sel, p__460189);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__460195 = null;
var G__460195__460196 = (function (this$,k){
var or__3548__auto____460194 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____460194))
{return or__3548__auto____460194;
} else
{return null;
}
});
var G__460195__460197 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__460195 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__460195__460196.call(this,this$,k);
case  3 :
return G__460195__460197.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__460195;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__460199 = null;
var G__460199__460200 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__460199__460201 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__460199 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__460199__460200.call(this,_,k);
case  3 :
return G__460199__460201.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__460199;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__460203){
var vec__460204__460205 = p__460203;
var v__460206 = cljs.core.nth.call(null,vec__460204__460205,0,null);

var a__460207 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__460206)))
{return $elem.attr(a__460207);
} else
{return $elem.attr(a__460207,v__460206);
}
};
var attr = function ($elem,a,var_args){
var p__460203 = null;
if (goog.isDef(var_args)) {
  p__460203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__460203);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__460208){
var $elem = cljs.core.first(arglist__460208);
var a = cljs.core.first(cljs.core.next(arglist__460208));
var p__460203 = cljs.core.rest(cljs.core.next(arglist__460208));
return attr__delegate.call(this, $elem, a, p__460203);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__460209){
var vec__460210__460211 = p__460209;
var v__460212 = cljs.core.nth.call(null,vec__460210__460211,0,null);

var k__460213 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__460212)))
{return $elem.data(k__460213);
} else
{return $elem.data(k__460213,v__460212);
}
};
var data = function ($elem,k,var_args){
var p__460209 = null;
if (goog.isDef(var_args)) {
  p__460209 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__460209);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__460214){
var $elem = cljs.core.first(arglist__460214);
var k = cljs.core.first(cljs.core.next(arglist__460214));
var p__460209 = cljs.core.rest(cljs.core.next(arglist__460214));
return data__delegate.call(this, $elem, k, p__460209);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__460215 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__460215);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__460216 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__460216);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__460217){
var vec__460218__460219 = p__460217;
var speed__460220 = cljs.core.nth.call(null,vec__460218__460219,0,null);
var on_finish__460221 = cljs.core.nth.call(null,vec__460218__460219,1,null);

return $elem.hide(speed__460220,on_finish__460221);
};
var hide = function ($elem,var_args){
var p__460217 = null;
if (goog.isDef(var_args)) {
  p__460217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__460217);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__460222){
var $elem = cljs.core.first(arglist__460222);
var p__460217 = cljs.core.rest(arglist__460222);
return hide__delegate.call(this, $elem, p__460217);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__460223){
var vec__460224__460225 = p__460223;
var speed__460226 = cljs.core.nth.call(null,vec__460224__460225,0,null);
var on_finish__460227 = cljs.core.nth.call(null,vec__460224__460225,1,null);

return $elem.show(speed__460226,on_finish__460227);
};
var show = function ($elem,var_args){
var p__460223 = null;
if (goog.isDef(var_args)) {
  p__460223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__460223);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__460228){
var $elem = cljs.core.first(arglist__460228);
var p__460223 = cljs.core.rest(arglist__460228);
return show__delegate.call(this, $elem, p__460223);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__460229){
var vec__460230__460231 = p__460229;
var speed__460232 = cljs.core.nth.call(null,vec__460230__460231,0,null);
var on_finish__460233 = cljs.core.nth.call(null,vec__460230__460231,1,null);

return $elem.fadeOut(speed__460232,on_finish__460233);
};
var fade_out = function ($elem,var_args){
var p__460229 = null;
if (goog.isDef(var_args)) {
  p__460229 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__460229);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__460234){
var $elem = cljs.core.first(arglist__460234);
var p__460229 = cljs.core.rest(arglist__460234);
return fade_out__delegate.call(this, $elem, p__460229);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__460235){
var vec__460236__460237 = p__460235;
var speed__460238 = cljs.core.nth.call(null,vec__460236__460237,0,null);
var on_finish__460239 = cljs.core.nth.call(null,vec__460236__460237,1,null);

return $elem.fadeIn(speed__460238,on_finish__460239);
};
var fade_in = function ($elem,var_args){
var p__460235 = null;
if (goog.isDef(var_args)) {
  p__460235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__460235);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__460240){
var $elem = cljs.core.first(arglist__460240);
var p__460235 = cljs.core.rest(arglist__460240);
return fade_in__delegate.call(this, $elem, p__460235);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__460241){
var vec__460242__460243 = p__460241;
var speed__460244 = cljs.core.nth.call(null,vec__460242__460243,0,null);
var on_finish__460245 = cljs.core.nth.call(null,vec__460242__460243,1,null);

return $elem.slideUp(speed__460244,on_finish__460245);
};
var slide_up = function ($elem,var_args){
var p__460241 = null;
if (goog.isDef(var_args)) {
  p__460241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__460241);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__460246){
var $elem = cljs.core.first(arglist__460246);
var p__460241 = cljs.core.rest(arglist__460246);
return slide_up__delegate.call(this, $elem, p__460241);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__460247){
var vec__460248__460249 = p__460247;
var speed__460250 = cljs.core.nth.call(null,vec__460248__460249,0,null);
var on_finish__460251 = cljs.core.nth.call(null,vec__460248__460249,1,null);

return $elem.slideDown(speed__460250,on_finish__460251);
};
var slide_down = function ($elem,var_args){
var p__460247 = null;
if (goog.isDef(var_args)) {
  p__460247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__460247);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__460252){
var $elem = cljs.core.first(arglist__460252);
var p__460247 = cljs.core.rest(arglist__460252);
return slide_down__delegate.call(this, $elem, p__460247);
});
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__460253){
var vec__460254__460255 = p__460253;
var v__460256 = cljs.core.nth.call(null,vec__460254__460255,0,null);

if(cljs.core.truth_(v__460256))
{return $elem.val(v__460256);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__460253 = null;
if (goog.isDef(var_args)) {
  p__460253 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__460253);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__460257){
var $elem = cljs.core.first(arglist__460257);
var p__460253 = cljs.core.rest(arglist__460257);
return val__delegate.call(this, $elem, p__460253);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__460258,content,callback){
var vec__460259__460260 = p__460258;
var method__460261 = cljs.core.nth.call(null,vec__460259__460260,0,null);
var uri__460262 = cljs.core.nth.call(null,vec__460259__460260,1,null);

var params__460263 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'type","﷐'data","﷐'success"],{"﷐'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__460261)),"﷐'data":jayq.util.map__GT_js.call(null,content),"﷐'success":callback}));

return jQuery.ajax(uri__460262,params__460263);
});
