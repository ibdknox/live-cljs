goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____458442 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____458442))
{return or__3548__auto____458442;
} else
{var or__3548__auto____458443 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____458443))
{return or__3548__auto____458443;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__458507 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____458444 = this$;

if(cljs.core.truth_(and__3546__auto____458444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____458445 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458445))
{return or__3548__auto____458445;
} else
{var or__3548__auto____458446 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458446))
{return or__3548__auto____458446;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__458508 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____458447 = this$;

if(cljs.core.truth_(and__3546__auto____458447))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458447;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____458448 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458448))
{return or__3548__auto____458448;
} else
{var or__3548__auto____458449 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458449))
{return or__3548__auto____458449;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__458509 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____458450 = this$;

if(cljs.core.truth_(and__3546__auto____458450))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458450;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____458451 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458451))
{return or__3548__auto____458451;
} else
{var or__3548__auto____458452 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458452))
{return or__3548__auto____458452;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__458510 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____458453 = this$;

if(cljs.core.truth_(and__3546__auto____458453))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458453;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____458454 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458454))
{return or__3548__auto____458454;
} else
{var or__3548__auto____458455 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458455))
{return or__3548__auto____458455;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__458511 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____458456 = this$;

if(cljs.core.truth_(and__3546__auto____458456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____458457 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458457))
{return or__3548__auto____458457;
} else
{var or__3548__auto____458458 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458458))
{return or__3548__auto____458458;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__458512 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____458459 = this$;

if(cljs.core.truth_(and__3546__auto____458459))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458459;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____458460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458460))
{return or__3548__auto____458460;
} else
{var or__3548__auto____458461 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458461))
{return or__3548__auto____458461;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__458513 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____458462 = this$;

if(cljs.core.truth_(and__3546__auto____458462))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458462;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____458463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458463))
{return or__3548__auto____458463;
} else
{var or__3548__auto____458464 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458464))
{return or__3548__auto____458464;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__458514 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____458465 = this$;

if(cljs.core.truth_(and__3546__auto____458465))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458465;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____458466 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458466))
{return or__3548__auto____458466;
} else
{var or__3548__auto____458467 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458467))
{return or__3548__auto____458467;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__458515 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____458468 = this$;

if(cljs.core.truth_(and__3546__auto____458468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____458469 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458469))
{return or__3548__auto____458469;
} else
{var or__3548__auto____458470 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458470))
{return or__3548__auto____458470;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__458516 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____458471 = this$;

if(cljs.core.truth_(and__3546__auto____458471))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458471;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____458472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458472))
{return or__3548__auto____458472;
} else
{var or__3548__auto____458473 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458473))
{return or__3548__auto____458473;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__458517 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____458474 = this$;

if(cljs.core.truth_(and__3546__auto____458474))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458474;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____458475 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458475))
{return or__3548__auto____458475;
} else
{var or__3548__auto____458476 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458476))
{return or__3548__auto____458476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__458518 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____458477 = this$;

if(cljs.core.truth_(and__3546__auto____458477))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458477;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____458478 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458478))
{return or__3548__auto____458478;
} else
{var or__3548__auto____458479 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458479))
{return or__3548__auto____458479;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__458519 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____458480 = this$;

if(cljs.core.truth_(and__3546__auto____458480))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458480;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____458481 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458481))
{return or__3548__auto____458481;
} else
{var or__3548__auto____458482 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458482))
{return or__3548__auto____458482;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__458520 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____458483 = this$;

if(cljs.core.truth_(and__3546__auto____458483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____458484 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458484))
{return or__3548__auto____458484;
} else
{var or__3548__auto____458485 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458485))
{return or__3548__auto____458485;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__458521 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____458486 = this$;

if(cljs.core.truth_(and__3546__auto____458486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____458487 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458487))
{return or__3548__auto____458487;
} else
{var or__3548__auto____458488 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458488))
{return or__3548__auto____458488;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__458522 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____458489 = this$;

if(cljs.core.truth_(and__3546__auto____458489))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458489;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____458490 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458490))
{return or__3548__auto____458490;
} else
{var or__3548__auto____458491 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458491))
{return or__3548__auto____458491;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__458523 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____458492 = this$;

if(cljs.core.truth_(and__3546__auto____458492))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458492;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____458493 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458493))
{return or__3548__auto____458493;
} else
{var or__3548__auto____458494 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458494))
{return or__3548__auto____458494;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__458524 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____458495 = this$;

if(cljs.core.truth_(and__3546__auto____458495))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458495;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____458496 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458496))
{return or__3548__auto____458496;
} else
{var or__3548__auto____458497 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458497))
{return or__3548__auto____458497;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__458525 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____458498 = this$;

if(cljs.core.truth_(and__3546__auto____458498))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458498;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____458499 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458499))
{return or__3548__auto____458499;
} else
{var or__3548__auto____458500 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458500))
{return or__3548__auto____458500;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__458526 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____458501 = this$;

if(cljs.core.truth_(and__3546__auto____458501))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458501;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____458502 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458502))
{return or__3548__auto____458502;
} else
{var or__3548__auto____458503 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458503))
{return or__3548__auto____458503;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__458527 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____458504 = this$;

if(cljs.core.truth_(and__3546__auto____458504))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____458504;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____458505 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458505))
{return or__3548__auto____458505;
} else
{var or__3548__auto____458506 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____458506))
{return or__3548__auto____458506;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__458507.call(this,this$);
case  2 :
return _invoke__458508.call(this,this$,a);
case  3 :
return _invoke__458509.call(this,this$,a,b);
case  4 :
return _invoke__458510.call(this,this$,a,b,c);
case  5 :
return _invoke__458511.call(this,this$,a,b,c,d);
case  6 :
return _invoke__458512.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__458513.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__458514.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__458515.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__458516.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__458517.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__458518.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__458519.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__458520.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__458521.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__458522.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__458523.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__458524.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__458525.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__458526.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__458527.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____458529 = coll;

if(cljs.core.truth_(and__3546__auto____458529))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____458529;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____458530 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458530))
{return or__3548__auto____458530;
} else
{var or__3548__auto____458531 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____458531))
{return or__3548__auto____458531;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____458532 = coll;

if(cljs.core.truth_(and__3546__auto____458532))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____458532;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____458533 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458533))
{return or__3548__auto____458533;
} else
{var or__3548__auto____458534 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____458534))
{return or__3548__auto____458534;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____458535 = coll;

if(cljs.core.truth_(and__3546__auto____458535))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____458535;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____458536 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458536))
{return or__3548__auto____458536;
} else
{var or__3548__auto____458537 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____458537))
{return or__3548__auto____458537;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__458544 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____458538 = coll;

if(cljs.core.truth_(and__3546__auto____458538))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____458538;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____458539 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458539))
{return or__3548__auto____458539;
} else
{var or__3548__auto____458540 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____458540))
{return or__3548__auto____458540;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__458545 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____458541 = coll;

if(cljs.core.truth_(and__3546__auto____458541))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____458541;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____458542 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458542))
{return or__3548__auto____458542;
} else
{var or__3548__auto____458543 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____458543))
{return or__3548__auto____458543;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__458544.call(this,coll,n);
case  3 :
return _nth__458545.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____458547 = coll;

if(cljs.core.truth_(and__3546__auto____458547))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____458547;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____458548 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458548))
{return or__3548__auto____458548;
} else
{var or__3548__auto____458549 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____458549))
{return or__3548__auto____458549;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____458550 = coll;

if(cljs.core.truth_(and__3546__auto____458550))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____458550;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____458551 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458551))
{return or__3548__auto____458551;
} else
{var or__3548__auto____458552 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____458552))
{return or__3548__auto____458552;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__458559 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____458553 = o;

if(cljs.core.truth_(and__3546__auto____458553))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____458553;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____458554 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458554))
{return or__3548__auto____458554;
} else
{var or__3548__auto____458555 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____458555))
{return or__3548__auto____458555;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__458560 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____458556 = o;

if(cljs.core.truth_(and__3546__auto____458556))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____458556;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____458557 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458557))
{return or__3548__auto____458557;
} else
{var or__3548__auto____458558 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____458558))
{return or__3548__auto____458558;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__458559.call(this,o,k);
case  3 :
return _lookup__458560.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____458562 = coll;

if(cljs.core.truth_(and__3546__auto____458562))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____458562;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____458563 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458563))
{return or__3548__auto____458563;
} else
{var or__3548__auto____458564 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____458564))
{return or__3548__auto____458564;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____458565 = coll;

if(cljs.core.truth_(and__3546__auto____458565))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____458565;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____458566 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458566))
{return or__3548__auto____458566;
} else
{var or__3548__auto____458567 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____458567))
{return or__3548__auto____458567;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____458568 = coll;

if(cljs.core.truth_(and__3546__auto____458568))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____458568;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____458569 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458569))
{return or__3548__auto____458569;
} else
{var or__3548__auto____458570 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____458570))
{return or__3548__auto____458570;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____458571 = coll;

if(cljs.core.truth_(and__3546__auto____458571))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____458571;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____458572 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458572))
{return or__3548__auto____458572;
} else
{var or__3548__auto____458573 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____458573))
{return or__3548__auto____458573;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____458574 = coll;

if(cljs.core.truth_(and__3546__auto____458574))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____458574;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____458575 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458575))
{return or__3548__auto____458575;
} else
{var or__3548__auto____458576 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____458576))
{return or__3548__auto____458576;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____458577 = coll;

if(cljs.core.truth_(and__3546__auto____458577))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____458577;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____458578 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458578))
{return or__3548__auto____458578;
} else
{var or__3548__auto____458579 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____458579))
{return or__3548__auto____458579;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____458580 = coll;

if(cljs.core.truth_(and__3546__auto____458580))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____458580;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____458581 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458581))
{return or__3548__auto____458581;
} else
{var or__3548__auto____458582 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____458582))
{return or__3548__auto____458582;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____458583 = o;

if(cljs.core.truth_(and__3546__auto____458583))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____458583;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____458584 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458584))
{return or__3548__auto____458584;
} else
{var or__3548__auto____458585 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____458585))
{return or__3548__auto____458585;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____458586 = o;

if(cljs.core.truth_(and__3546__auto____458586))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____458586;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____458587 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458587))
{return or__3548__auto____458587;
} else
{var or__3548__auto____458588 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____458588))
{return or__3548__auto____458588;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____458589 = o;

if(cljs.core.truth_(and__3546__auto____458589))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____458589;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____458590 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458590))
{return or__3548__auto____458590;
} else
{var or__3548__auto____458591 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____458591))
{return or__3548__auto____458591;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____458592 = o;

if(cljs.core.truth_(and__3546__auto____458592))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____458592;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____458593 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458593))
{return or__3548__auto____458593;
} else
{var or__3548__auto____458594 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____458594))
{return or__3548__auto____458594;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__458601 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____458595 = coll;

if(cljs.core.truth_(and__3546__auto____458595))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____458595;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____458596 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458596))
{return or__3548__auto____458596;
} else
{var or__3548__auto____458597 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____458597))
{return or__3548__auto____458597;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__458602 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____458598 = coll;

if(cljs.core.truth_(and__3546__auto____458598))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____458598;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____458599 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____458599))
{return or__3548__auto____458599;
} else
{var or__3548__auto____458600 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____458600))
{return or__3548__auto____458600;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__458601.call(this,coll,f);
case  3 :
return _reduce__458602.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____458604 = o;

if(cljs.core.truth_(and__3546__auto____458604))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____458604;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____458605 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458605))
{return or__3548__auto____458605;
} else
{var or__3548__auto____458606 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____458606))
{return or__3548__auto____458606;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____458607 = o;

if(cljs.core.truth_(and__3546__auto____458607))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____458607;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____458608 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458608))
{return or__3548__auto____458608;
} else
{var or__3548__auto____458609 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____458609))
{return or__3548__auto____458609;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____458610 = o;

if(cljs.core.truth_(and__3546__auto____458610))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____458610;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____458611 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458611))
{return or__3548__auto____458611;
} else
{var or__3548__auto____458612 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____458612))
{return or__3548__auto____458612;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____458613 = o;

if(cljs.core.truth_(and__3546__auto____458613))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____458613;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____458614 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____458614))
{return or__3548__auto____458614;
} else
{var or__3548__auto____458615 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____458615))
{return or__3548__auto____458615;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____458616 = d;

if(cljs.core.truth_(and__3546__auto____458616))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____458616;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____458617 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____458617))
{return or__3548__auto____458617;
} else
{var or__3548__auto____458618 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____458618))
{return or__3548__auto____458618;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____458619 = this$;

if(cljs.core.truth_(and__3546__auto____458619))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____458619;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____458620 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458620))
{return or__3548__auto____458620;
} else
{var or__3548__auto____458621 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____458621))
{return or__3548__auto____458621;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____458622 = this$;

if(cljs.core.truth_(and__3546__auto____458622))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____458622;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____458623 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458623))
{return or__3548__auto____458623;
} else
{var or__3548__auto____458624 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____458624))
{return or__3548__auto____458624;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____458625 = this$;

if(cljs.core.truth_(and__3546__auto____458625))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____458625;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____458626 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____458626))
{return or__3548__auto____458626;
} else
{var or__3548__auto____458627 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____458627))
{return or__3548__auto____458627;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__458628 = null;
var G__458628__458629 = (function (o,k){
return null;
});
var G__458628__458630 = (function (o,k,not_found){
return not_found;
});
G__458628 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__458628__458629.call(this,o,k);
case  3 :
return G__458628__458630.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458628;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__458632 = null;
var G__458632__458633 = (function (_,f){
return f.call(null);
});
var G__458632__458634 = (function (_,f,start){
return start;
});
G__458632 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__458632__458633.call(this,_,f);
case  3 :
return G__458632__458634.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458632;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__458636 = null;
var G__458636__458637 = (function (_,n){
return null;
});
var G__458636__458638 = (function (_,n,not_found){
return not_found;
});
G__458636 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__458636__458637.call(this,_,n);
case  3 :
return G__458636__458638.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458636;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__458646 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__458640 = cljs.core._nth.call(null,cicoll,0);
var n__458641 = 1;

while(true){
if(cljs.core.truth_((n__458641 < cljs.core._count.call(null,cicoll))))
{{
var G__458650 = f.call(null,val__458640,cljs.core._nth.call(null,cicoll,n__458641));
var G__458651 = (n__458641 + 1);
val__458640 = G__458650;
n__458641 = G__458651;
continue;
}
} else
{return val__458640;
}
break;
}
}
});
var ci_reduce__458647 = (function (cicoll,f,val){
var val__458642 = val;
var n__458643 = 0;

while(true){
if(cljs.core.truth_((n__458643 < cljs.core._count.call(null,cicoll))))
{{
var G__458652 = f.call(null,val__458642,cljs.core._nth.call(null,cicoll,n__458643));
var G__458653 = (n__458643 + 1);
val__458642 = G__458652;
n__458643 = G__458653;
continue;
}
} else
{return val__458642;
}
break;
}
});
var ci_reduce__458648 = (function (cicoll,f,val,idx){
var val__458644 = val;
var n__458645 = idx;

while(true){
if(cljs.core.truth_((n__458645 < cljs.core._count.call(null,cicoll))))
{{
var G__458654 = f.call(null,val__458644,cljs.core._nth.call(null,cicoll,n__458645));
var G__458655 = (n__458645 + 1);
val__458644 = G__458654;
n__458645 = G__458655;
continue;
}
} else
{return val__458644;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__458646.call(this,cicoll,f);
case  3 :
return ci_reduce__458647.call(this,cicoll,f,val);
case  4 :
return ci_reduce__458648.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__458656 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__458669 = null;
var G__458669__458670 = (function (_,f){
var this__458657 = this;
return cljs.core.ci_reduce.call(null,this__458657.a,f,(this__458657.a[this__458657.i]),(this__458657.i + 1));
});
var G__458669__458671 = (function (_,f,start){
var this__458658 = this;
return cljs.core.ci_reduce.call(null,this__458658.a,f,start,this__458658.i);
});
G__458669 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__458669__458670.call(this,_,f);
case  3 :
return G__458669__458671.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458669;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__458659 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__458660 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__458673 = null;
var G__458673__458674 = (function (coll,n){
var this__458661 = this;
var i__458662 = (n + this__458661.i);

if(cljs.core.truth_((i__458662 < this__458661.a.length)))
{return (this__458661.a[i__458662]);
} else
{return null;
}
});
var G__458673__458675 = (function (coll,n,not_found){
var this__458663 = this;
var i__458664 = (n + this__458663.i);

if(cljs.core.truth_((i__458664 < this__458663.a.length)))
{return (this__458663.a[i__458664]);
} else
{return not_found;
}
});
G__458673 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__458673__458674.call(this,coll,n);
case  3 :
return G__458673__458675.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458673;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__458665 = this;
return (this__458665.a.length - this__458665.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__458666 = this;
return (this__458666.a[this__458666.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__458667 = this;
if(cljs.core.truth_(((this__458667.i + 1) < this__458667.a.length)))
{return (new cljs.core.IndexedSeq(this__458667.a,(this__458667.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__458668 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__458677 = null;
var G__458677__458678 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__458677__458679 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__458677 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__458677__458678.call(this,array,f);
case  3 :
return G__458677__458679.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458677;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__458681 = null;
var G__458681__458682 = (function (array,k){
return (array[k]);
});
var G__458681__458683 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__458681 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__458681__458682.call(this,array,k);
case  3 :
return G__458681__458683.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458681;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__458685 = null;
var G__458685__458686 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__458685__458687 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__458685 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__458685__458686.call(this,array,n);
case  3 :
return G__458685__458687.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458685;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____458689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____458689))
{var s__458690 = temp__3698__auto____458689;

return cljs.core._first.call(null,s__458690);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__458691 = cljs.core.next.call(null,s);
s = G__458691;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__458692 = cljs.core.seq.call(null,x);
var n__458693 = 0;

while(true){
if(cljs.core.truth_(s__458692))
{{
var G__458694 = cljs.core.next.call(null,s__458692);
var G__458695 = (n__458693 + 1);
s__458692 = G__458694;
n__458693 = G__458695;
continue;
}
} else
{return n__458693;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__458696 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__458697 = (function() { 
var G__458699__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__458700 = conj.call(null,coll,x);
var G__458701 = cljs.core.first.call(null,xs);
var G__458702 = cljs.core.next.call(null,xs);
coll = G__458700;
x = G__458701;
xs = G__458702;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__458699 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458699__delegate.call(this, coll, x, xs);
};
G__458699.cljs$lang$maxFixedArity = 2;
G__458699.cljs$lang$applyTo = (function (arglist__458703){
var coll = cljs.core.first(arglist__458703);
var x = cljs.core.first(cljs.core.next(arglist__458703));
var xs = cljs.core.rest(cljs.core.next(arglist__458703));
return G__458699__delegate.call(this, coll, x, xs);
});
return G__458699;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__458696.call(this,coll,x);
default:
return conj__458697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__458697.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__458704 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__458705 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__458704.call(this,coll,n);
case  3 :
return nth__458705.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__458707 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__458708 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__458707.call(this,o,k);
case  3 :
return get__458708.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__458711 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__458712 = (function() { 
var G__458714__delegate = function (coll,k,v,kvs){
while(true){
var ret__458710 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__458715 = ret__458710;
var G__458716 = cljs.core.first.call(null,kvs);
var G__458717 = cljs.core.second.call(null,kvs);
var G__458718 = cljs.core.nnext.call(null,kvs);
coll = G__458715;
k = G__458716;
v = G__458717;
kvs = G__458718;
continue;
}
} else
{return ret__458710;
}
break;
}
};
var G__458714 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__458714__delegate.call(this, coll, k, v, kvs);
};
G__458714.cljs$lang$maxFixedArity = 3;
G__458714.cljs$lang$applyTo = (function (arglist__458719){
var coll = cljs.core.first(arglist__458719);
var k = cljs.core.first(cljs.core.next(arglist__458719));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__458719)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__458719)));
return G__458714__delegate.call(this, coll, k, v, kvs);
});
return G__458714;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__458711.call(this,coll,k,v);
default:
return assoc__458712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__458712.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__458721 = (function (coll){
return coll;
});
var dissoc__458722 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__458723 = (function() { 
var G__458725__delegate = function (coll,k,ks){
while(true){
var ret__458720 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__458726 = ret__458720;
var G__458727 = cljs.core.first.call(null,ks);
var G__458728 = cljs.core.next.call(null,ks);
coll = G__458726;
k = G__458727;
ks = G__458728;
continue;
}
} else
{return ret__458720;
}
break;
}
};
var G__458725 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458725__delegate.call(this, coll, k, ks);
};
G__458725.cljs$lang$maxFixedArity = 2;
G__458725.cljs$lang$applyTo = (function (arglist__458729){
var coll = cljs.core.first(arglist__458729);
var k = cljs.core.first(cljs.core.next(arglist__458729));
var ks = cljs.core.rest(cljs.core.next(arglist__458729));
return G__458725__delegate.call(this, coll, k, ks);
});
return G__458725;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__458721.call(this,coll);
case  2 :
return dissoc__458722.call(this,coll,k);
default:
return dissoc__458723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__458723.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____458730 = o;

if(cljs.core.truth_((function (){var and__3546__auto____458731 = x__445__auto____458730;

if(cljs.core.truth_(and__3546__auto____458731))
{var and__3546__auto____458732 = x__445__auto____458730.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____458732))
{return cljs.core.not.call(null,x__445__auto____458730.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____458732;
}
} else
{return and__3546__auto____458731;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____458730);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__458734 = (function (coll){
return coll;
});
var disj__458735 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__458736 = (function() { 
var G__458738__delegate = function (coll,k,ks){
while(true){
var ret__458733 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__458739 = ret__458733;
var G__458740 = cljs.core.first.call(null,ks);
var G__458741 = cljs.core.next.call(null,ks);
coll = G__458739;
k = G__458740;
ks = G__458741;
continue;
}
} else
{return ret__458733;
}
break;
}
};
var G__458738 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458738__delegate.call(this, coll, k, ks);
};
G__458738.cljs$lang$maxFixedArity = 2;
G__458738.cljs$lang$applyTo = (function (arglist__458742){
var coll = cljs.core.first(arglist__458742);
var k = cljs.core.first(cljs.core.next(arglist__458742));
var ks = cljs.core.rest(cljs.core.next(arglist__458742));
return G__458738__delegate.call(this, coll, k, ks);
});
return G__458738;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__458734.call(this,coll);
case  2 :
return disj__458735.call(this,coll,k);
default:
return disj__458736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__458736.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____458743 = x;

if(cljs.core.truth_((function (){var and__3546__auto____458744 = x__445__auto____458743;

if(cljs.core.truth_(and__3546__auto____458744))
{var and__3546__auto____458745 = x__445__auto____458743.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____458745))
{return cljs.core.not.call(null,x__445__auto____458743.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____458745;
}
} else
{return and__3546__auto____458744;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____458743);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____458746 = x;

if(cljs.core.truth_((function (){var and__3546__auto____458747 = x__445__auto____458746;

if(cljs.core.truth_(and__3546__auto____458747))
{var and__3546__auto____458748 = x__445__auto____458746.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____458748))
{return cljs.core.not.call(null,x__445__auto____458746.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____458748;
}
} else
{return and__3546__auto____458747;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____458746);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____458749 = x;

if(cljs.core.truth_((function (){var and__3546__auto____458750 = x__445__auto____458749;

if(cljs.core.truth_(and__3546__auto____458750))
{var and__3546__auto____458751 = x__445__auto____458749.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____458751))
{return cljs.core.not.call(null,x__445__auto____458749.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____458751;
}
} else
{return and__3546__auto____458750;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____458749);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____458752 = x;

if(cljs.core.truth_((function (){var and__3546__auto____458753 = x__445__auto____458752;

if(cljs.core.truth_(and__3546__auto____458753))
{var and__3546__auto____458754 = x__445__auto____458752.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____458754))
{return cljs.core.not.call(null,x__445__auto____458752.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____458754;
}
} else
{return and__3546__auto____458753;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____458752);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____458755 = x;

if(cljs.core.truth_((function (){var and__3546__auto____458756 = x__445__auto____458755;

if(cljs.core.truth_(and__3546__auto____458756))
{var and__3546__auto____458757 = x__445__auto____458755.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____458757))
{return cljs.core.not.call(null,x__445__auto____458755.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____458757;
}
} else
{return and__3546__auto____458756;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____458755);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____458758 = x;

if(cljs.core.truth_((function (){var and__3546__auto____458759 = x__445__auto____458758;

if(cljs.core.truth_(and__3546__auto____458759))
{var and__3546__auto____458760 = x__445__auto____458758.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____458760))
{return cljs.core.not.call(null,x__445__auto____458758.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____458760;
}
} else
{return and__3546__auto____458759;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____458758);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____458761 = x;

if(cljs.core.truth_((function (){var and__3546__auto____458762 = x__445__auto____458761;

if(cljs.core.truth_(and__3546__auto____458762))
{var and__3546__auto____458763 = x__445__auto____458761.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____458763))
{return cljs.core.not.call(null,x__445__auto____458761.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____458763;
}
} else
{return and__3546__auto____458762;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____458761);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__458764 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__458764.push(key);
}));
return keys__458764;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____458765 = s;

if(cljs.core.truth_((function (){var and__3546__auto____458766 = x__445__auto____458765;

if(cljs.core.truth_(and__3546__auto____458766))
{var and__3546__auto____458767 = x__445__auto____458765.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____458767))
{return cljs.core.not.call(null,x__445__auto____458765.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____458767;
}
} else
{return and__3546__auto____458766;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____458765);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____458768 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____458768))
{return cljs.core.not.call(null,(function (){var or__3548__auto____458769 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____458769))
{return or__3548__auto____458769;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____458768;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____458770 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____458770))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____458770;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____458771 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____458771))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____458771;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____458772 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____458772))
{return (n == n.toFixed());
} else
{return and__3546__auto____458772;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____458773 = coll;

if(cljs.core.truth_(and__3546__auto____458773))
{var and__3546__auto____458774 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____458774))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____458774;
}
} else
{return and__3546__auto____458773;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___458779 = (function (x){
return true;
});
var distinct_QMARK___458780 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___458781 = (function() { 
var G__458783__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__458775 = cljs.core.set([y,x]);
var xs__458776 = more;

while(true){
var x__458777 = cljs.core.first.call(null,xs__458776);
var etc__458778 = cljs.core.next.call(null,xs__458776);

if(cljs.core.truth_(xs__458776))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__458775,x__458777)))
{return false;
} else
{{
var G__458784 = cljs.core.conj.call(null,s__458775,x__458777);
var G__458785 = etc__458778;
s__458775 = G__458784;
xs__458776 = G__458785;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__458783 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458783__delegate.call(this, x, y, more);
};
G__458783.cljs$lang$maxFixedArity = 2;
G__458783.cljs$lang$applyTo = (function (arglist__458786){
var x = cljs.core.first(arglist__458786);
var y = cljs.core.first(cljs.core.next(arglist__458786));
var more = cljs.core.rest(cljs.core.next(arglist__458786));
return G__458783__delegate.call(this, x, y, more);
});
return G__458783;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___458779.call(this,x);
case  2 :
return distinct_QMARK___458780.call(this,x,y);
default:
return distinct_QMARK___458781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___458781.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__458787 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__458787)))
{return r__458787;
} else
{if(cljs.core.truth_(r__458787))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__458789 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__458790 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__458788 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__458788,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__458788);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__458789.call(this,comp);
case  2 :
return sort__458790.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__458792 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__458793 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__458792.call(this,keyfn,comp);
case  3 :
return sort_by__458793.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__458795 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__458796 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__458795.call(this,f,val);
case  3 :
return reduce__458796.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__458802 = (function (f,coll){
var temp__3695__auto____458798 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____458798))
{var s__458799 = temp__3695__auto____458798;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__458799),cljs.core.next.call(null,s__458799));
} else
{return f.call(null);
}
});
var seq_reduce__458803 = (function (f,val,coll){
var val__458800 = val;
var coll__458801 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__458801))
{{
var G__458805 = f.call(null,val__458800,cljs.core.first.call(null,coll__458801));
var G__458806 = cljs.core.next.call(null,coll__458801);
val__458800 = G__458805;
coll__458801 = G__458806;
continue;
}
} else
{return val__458800;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__458802.call(this,f,val);
case  3 :
return seq_reduce__458803.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__458807 = null;
var G__458807__458808 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__458807__458809 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__458807 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__458807__458808.call(this,coll,f);
case  3 :
return G__458807__458809.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458807;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___458811 = (function (){
return 0;
});
var _PLUS___458812 = (function (x){
return x;
});
var _PLUS___458813 = (function (x,y){
return (x + y);
});
var _PLUS___458814 = (function() { 
var G__458816__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__458816 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458816__delegate.call(this, x, y, more);
};
G__458816.cljs$lang$maxFixedArity = 2;
G__458816.cljs$lang$applyTo = (function (arglist__458817){
var x = cljs.core.first(arglist__458817);
var y = cljs.core.first(cljs.core.next(arglist__458817));
var more = cljs.core.rest(cljs.core.next(arglist__458817));
return G__458816__delegate.call(this, x, y, more);
});
return G__458816;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___458811.call(this);
case  1 :
return _PLUS___458812.call(this,x);
case  2 :
return _PLUS___458813.call(this,x,y);
default:
return _PLUS___458814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___458814.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___458818 = (function (x){
return (- x);
});
var ___458819 = (function (x,y){
return (x - y);
});
var ___458820 = (function() { 
var G__458822__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__458822 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458822__delegate.call(this, x, y, more);
};
G__458822.cljs$lang$maxFixedArity = 2;
G__458822.cljs$lang$applyTo = (function (arglist__458823){
var x = cljs.core.first(arglist__458823);
var y = cljs.core.first(cljs.core.next(arglist__458823));
var more = cljs.core.rest(cljs.core.next(arglist__458823));
return G__458822__delegate.call(this, x, y, more);
});
return G__458822;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___458818.call(this,x);
case  2 :
return ___458819.call(this,x,y);
default:
return ___458820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___458820.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___458824 = (function (){
return 1;
});
var _STAR___458825 = (function (x){
return x;
});
var _STAR___458826 = (function (x,y){
return (x * y);
});
var _STAR___458827 = (function() { 
var G__458829__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__458829 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458829__delegate.call(this, x, y, more);
};
G__458829.cljs$lang$maxFixedArity = 2;
G__458829.cljs$lang$applyTo = (function (arglist__458830){
var x = cljs.core.first(arglist__458830);
var y = cljs.core.first(cljs.core.next(arglist__458830));
var more = cljs.core.rest(cljs.core.next(arglist__458830));
return G__458829__delegate.call(this, x, y, more);
});
return G__458829;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___458824.call(this);
case  1 :
return _STAR___458825.call(this,x);
case  2 :
return _STAR___458826.call(this,x,y);
default:
return _STAR___458827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___458827.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___458831 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___458832 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___458833 = (function() { 
var G__458835__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__458835 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458835__delegate.call(this, x, y, more);
};
G__458835.cljs$lang$maxFixedArity = 2;
G__458835.cljs$lang$applyTo = (function (arglist__458836){
var x = cljs.core.first(arglist__458836);
var y = cljs.core.first(cljs.core.next(arglist__458836));
var more = cljs.core.rest(cljs.core.next(arglist__458836));
return G__458835__delegate.call(this, x, y, more);
});
return G__458835;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___458831.call(this,x);
case  2 :
return _SLASH___458832.call(this,x,y);
default:
return _SLASH___458833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___458833.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___458837 = (function (x){
return true;
});
var _LT___458838 = (function (x,y){
return (x < y);
});
var _LT___458839 = (function() { 
var G__458841__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__458842 = y;
var G__458843 = cljs.core.first.call(null,more);
var G__458844 = cljs.core.next.call(null,more);
x = G__458842;
y = G__458843;
more = G__458844;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__458841 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458841__delegate.call(this, x, y, more);
};
G__458841.cljs$lang$maxFixedArity = 2;
G__458841.cljs$lang$applyTo = (function (arglist__458845){
var x = cljs.core.first(arglist__458845);
var y = cljs.core.first(cljs.core.next(arglist__458845));
var more = cljs.core.rest(cljs.core.next(arglist__458845));
return G__458841__delegate.call(this, x, y, more);
});
return G__458841;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___458837.call(this,x);
case  2 :
return _LT___458838.call(this,x,y);
default:
return _LT___458839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___458839.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___458846 = (function (x){
return true;
});
var _LT__EQ___458847 = (function (x,y){
return (x <= y);
});
var _LT__EQ___458848 = (function() { 
var G__458850__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__458851 = y;
var G__458852 = cljs.core.first.call(null,more);
var G__458853 = cljs.core.next.call(null,more);
x = G__458851;
y = G__458852;
more = G__458853;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__458850 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458850__delegate.call(this, x, y, more);
};
G__458850.cljs$lang$maxFixedArity = 2;
G__458850.cljs$lang$applyTo = (function (arglist__458854){
var x = cljs.core.first(arglist__458854);
var y = cljs.core.first(cljs.core.next(arglist__458854));
var more = cljs.core.rest(cljs.core.next(arglist__458854));
return G__458850__delegate.call(this, x, y, more);
});
return G__458850;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___458846.call(this,x);
case  2 :
return _LT__EQ___458847.call(this,x,y);
default:
return _LT__EQ___458848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___458848.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___458855 = (function (x){
return true;
});
var _GT___458856 = (function (x,y){
return (x > y);
});
var _GT___458857 = (function() { 
var G__458859__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__458860 = y;
var G__458861 = cljs.core.first.call(null,more);
var G__458862 = cljs.core.next.call(null,more);
x = G__458860;
y = G__458861;
more = G__458862;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__458859 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458859__delegate.call(this, x, y, more);
};
G__458859.cljs$lang$maxFixedArity = 2;
G__458859.cljs$lang$applyTo = (function (arglist__458863){
var x = cljs.core.first(arglist__458863);
var y = cljs.core.first(cljs.core.next(arglist__458863));
var more = cljs.core.rest(cljs.core.next(arglist__458863));
return G__458859__delegate.call(this, x, y, more);
});
return G__458859;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___458855.call(this,x);
case  2 :
return _GT___458856.call(this,x,y);
default:
return _GT___458857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___458857.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___458864 = (function (x){
return true;
});
var _GT__EQ___458865 = (function (x,y){
return (x >= y);
});
var _GT__EQ___458866 = (function() { 
var G__458868__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__458869 = y;
var G__458870 = cljs.core.first.call(null,more);
var G__458871 = cljs.core.next.call(null,more);
x = G__458869;
y = G__458870;
more = G__458871;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__458868 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458868__delegate.call(this, x, y, more);
};
G__458868.cljs$lang$maxFixedArity = 2;
G__458868.cljs$lang$applyTo = (function (arglist__458872){
var x = cljs.core.first(arglist__458872);
var y = cljs.core.first(cljs.core.next(arglist__458872));
var more = cljs.core.rest(cljs.core.next(arglist__458872));
return G__458868__delegate.call(this, x, y, more);
});
return G__458868;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___458864.call(this,x);
case  2 :
return _GT__EQ___458865.call(this,x,y);
default:
return _GT__EQ___458866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___458866.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__458873 = (function (x){
return x;
});
var max__458874 = (function (x,y){
return ((x > y) ? x : y);
});
var max__458875 = (function() { 
var G__458877__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__458877 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458877__delegate.call(this, x, y, more);
};
G__458877.cljs$lang$maxFixedArity = 2;
G__458877.cljs$lang$applyTo = (function (arglist__458878){
var x = cljs.core.first(arglist__458878);
var y = cljs.core.first(cljs.core.next(arglist__458878));
var more = cljs.core.rest(cljs.core.next(arglist__458878));
return G__458877__delegate.call(this, x, y, more);
});
return G__458877;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__458873.call(this,x);
case  2 :
return max__458874.call(this,x,y);
default:
return max__458875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__458875.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__458879 = (function (x){
return x;
});
var min__458880 = (function (x,y){
return ((x < y) ? x : y);
});
var min__458881 = (function() { 
var G__458883__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__458883 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458883__delegate.call(this, x, y, more);
};
G__458883.cljs$lang$maxFixedArity = 2;
G__458883.cljs$lang$applyTo = (function (arglist__458884){
var x = cljs.core.first(arglist__458884);
var y = cljs.core.first(cljs.core.next(arglist__458884));
var more = cljs.core.rest(cljs.core.next(arglist__458884));
return G__458883__delegate.call(this, x, y, more);
});
return G__458883;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__458879.call(this,x);
case  2 :
return min__458880.call(this,x,y);
default:
return min__458881.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__458881.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__458885 = (n % d);

return cljs.core.fix.call(null,((n - rem__458885) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__458886 = cljs.core.quot.call(null,n,d);

return (n - (d * q__458886));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__458887 = (function (){
return Math.random.call(null);
});
var rand__458888 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__458887.call(this);
case  1 :
return rand__458888.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___458890 = (function (x){
return true;
});
var _EQ__EQ___458891 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___458892 = (function() { 
var G__458894__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__458895 = y;
var G__458896 = cljs.core.first.call(null,more);
var G__458897 = cljs.core.next.call(null,more);
x = G__458895;
y = G__458896;
more = G__458897;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__458894 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__458894__delegate.call(this, x, y, more);
};
G__458894.cljs$lang$maxFixedArity = 2;
G__458894.cljs$lang$applyTo = (function (arglist__458898){
var x = cljs.core.first(arglist__458898);
var y = cljs.core.first(cljs.core.next(arglist__458898));
var more = cljs.core.rest(cljs.core.next(arglist__458898));
return G__458894__delegate.call(this, x, y, more);
});
return G__458894;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___458890.call(this,x);
case  2 :
return _EQ__EQ___458891.call(this,x,y);
default:
return _EQ__EQ___458892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___458892.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__458899 = n;
var xs__458900 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____458901 = xs__458900;

if(cljs.core.truth_(and__3546__auto____458901))
{return (n__458899 > 0);
} else
{return and__3546__auto____458901;
}
})()))
{{
var G__458902 = (n__458899 - 1);
var G__458903 = cljs.core.next.call(null,xs__458900);
n__458899 = G__458902;
xs__458900 = G__458903;
continue;
}
} else
{return xs__458900;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__458908 = null;
var G__458908__458909 = (function (coll,n){
var temp__3695__auto____458904 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____458904))
{var xs__458905 = temp__3695__auto____458904;

return cljs.core.first.call(null,xs__458905);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__458908__458910 = (function (coll,n,not_found){
var temp__3695__auto____458906 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____458906))
{var xs__458907 = temp__3695__auto____458906;

return cljs.core.first.call(null,xs__458907);
} else
{return not_found;
}
});
G__458908 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__458908__458909.call(this,coll,n);
case  3 :
return G__458908__458910.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458908;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___458912 = (function (){
return "";
});
var str_STAR___458913 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___458914 = (function() { 
var G__458916__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__458917 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__458918 = cljs.core.next.call(null,more);
sb = G__458917;
more = G__458918;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__458916 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__458916__delegate.call(this, x, ys);
};
G__458916.cljs$lang$maxFixedArity = 1;
G__458916.cljs$lang$applyTo = (function (arglist__458919){
var x = cljs.core.first(arglist__458919);
var ys = cljs.core.rest(arglist__458919);
return G__458916__delegate.call(this, x, ys);
});
return G__458916;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___458912.call(this);
case  1 :
return str_STAR___458913.call(this,x);
default:
return str_STAR___458914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___458914.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__458920 = (function (){
return "";
});
var str__458921 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__458922 = (function() { 
var G__458924__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__458924 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__458924__delegate.call(this, x, ys);
};
G__458924.cljs$lang$maxFixedArity = 1;
G__458924.cljs$lang$applyTo = (function (arglist__458925){
var x = cljs.core.first(arglist__458925);
var ys = cljs.core.rest(arglist__458925);
return G__458924__delegate.call(this, x, ys);
});
return G__458924;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__458920.call(this);
case  1 :
return str__458921.call(this,x);
default:
return str__458922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__458922.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__458926 = (function (s,start){
return s.substring(start);
});
var subs__458927 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__458926.call(this,s,start);
case  3 :
return subs__458927.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__458929 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__458930 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__458929.call(this,ns);
case  2 :
return symbol__458930.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__458932 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__458933 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__458932.call(this,ns);
case  2 :
return keyword__458933.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__458935 = cljs.core.seq.call(null,x);
var ys__458936 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__458935)))
{return cljs.core.nil_QMARK_.call(null,ys__458936);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__458936)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__458935),cljs.core.first.call(null,ys__458936))))
{{
var G__458937 = cljs.core.next.call(null,xs__458935);
var G__458938 = cljs.core.next.call(null,ys__458936);
xs__458935 = G__458937;
ys__458936 = G__458938;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__458939_SHARP_,p2__458940_SHARP_){
return cljs.core.hash_combine.call(null,p1__458939_SHARP_,cljs.core.hash.call(null,p2__458940_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__458941__458942 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__458941__458942))
{var G__458944__458946 = cljs.core.first.call(null,G__458941__458942);
var vec__458945__458947 = G__458944__458946;
var key_name__458948 = cljs.core.nth.call(null,vec__458945__458947,0,null);
var f__458949 = cljs.core.nth.call(null,vec__458945__458947,1,null);
var G__458941__458950 = G__458941__458942;

var G__458944__458951 = G__458944__458946;
var G__458941__458952 = G__458941__458950;

while(true){
var vec__458953__458954 = G__458944__458951;
var key_name__458955 = cljs.core.nth.call(null,vec__458953__458954,0,null);
var f__458956 = cljs.core.nth.call(null,vec__458953__458954,1,null);
var G__458941__458957 = G__458941__458952;

var str_name__458958 = cljs.core.name.call(null,key_name__458955);

obj[str_name__458958] = f__458956;
var temp__3698__auto____458959 = cljs.core.next.call(null,G__458941__458957);

if(cljs.core.truth_(temp__3698__auto____458959))
{var G__458941__458960 = temp__3698__auto____458959;

{
var G__458961 = cljs.core.first.call(null,G__458941__458960);
var G__458962 = G__458941__458960;
G__458944__458951 = G__458961;
G__458941__458952 = G__458962;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__458963 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__458964 = this;
return (new cljs.core.List(this__458964.meta,o,coll,(this__458964.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__458965 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__458966 = this;
return this__458966.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__458967 = this;
return this__458967.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__458968 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__458969 = this;
return this__458969.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__458970 = this;
return this__458970.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__458971 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__458972 = this;
return (new cljs.core.List(meta,this__458972.first,this__458972.rest,this__458972.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__458973 = this;
return this__458973.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__458974 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__458975 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__458976 = this;
return (new cljs.core.List(this__458976.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__458977 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__458978 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__458979 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__458980 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__458981 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__458982 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__458983 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__458984 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__458985 = this;
return this__458985.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__458986 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__458987){
var items = cljs.core.seq( arglist__458987 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__458988 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__458989 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__458990 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__458991 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__458991.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__458992 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__458993 = this;
return this__458993.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__458994 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__458994.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__458994.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__458995 = this;
return this__458995.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__458996 = this;
return (new cljs.core.Cons(meta,this__458996.first,this__458996.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__458997 = null;
var G__458997__458998 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__458997__458999 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__458997 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__458997__458998.call(this,string,f);
case  3 :
return G__458997__458999.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__458997;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__459001 = null;
var G__459001__459002 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__459001__459003 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__459001 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__459001__459002.call(this,string,k);
case  3 :
return G__459001__459003.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459001;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__459005 = null;
var G__459005__459006 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__459005__459007 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__459005 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__459005__459006.call(this,string,n);
case  3 :
return G__459005__459007.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459005;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__459009 = null;
var G__459009__459010 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__459009__459011 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__459009 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__459009__459010.call(this,this$,coll);
case  3 :
return G__459009__459011.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459009;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__459013 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__459013;
} else
{lazy_seq.x = x__459013.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__459014 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__459015 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__459016 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__459017 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__459017.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__459018 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__459019 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__459020 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__459021 = this;
return this__459021.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__459022 = this;
return (new cljs.core.LazySeq(meta,this__459022.realized,this__459022.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__459023 = cljs.core.array.call(null);

var s__459024 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__459024)))
{ary__459023.push(cljs.core.first.call(null,s__459024));
{
var G__459025 = cljs.core.next.call(null,s__459024);
s__459024 = G__459025;
continue;
}
} else
{return ary__459023;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__459026 = s;
var i__459027 = n;
var sum__459028 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____459029 = (i__459027 > 0);

if(cljs.core.truth_(and__3546__auto____459029))
{return cljs.core.seq.call(null,s__459026);
} else
{return and__3546__auto____459029;
}
})()))
{{
var G__459030 = cljs.core.next.call(null,s__459026);
var G__459031 = (i__459027 - 1);
var G__459032 = (sum__459028 + 1);
s__459026 = G__459030;
i__459027 = G__459031;
sum__459028 = G__459032;
continue;
}
} else
{return sum__459028;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__459036 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__459037 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__459038 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__459033 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__459033))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__459033),concat.call(null,cljs.core.rest.call(null,s__459033),y));
} else
{return y;
}
})));
});
var concat__459039 = (function() { 
var G__459041__delegate = function (x,y,zs){
var cat__459035 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__459034 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__459034))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__459034),cat.call(null,cljs.core.rest.call(null,xys__459034),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__459035.call(null,concat.call(null,x,y),zs);
};
var G__459041 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__459041__delegate.call(this, x, y, zs);
};
G__459041.cljs$lang$maxFixedArity = 2;
G__459041.cljs$lang$applyTo = (function (arglist__459042){
var x = cljs.core.first(arglist__459042);
var y = cljs.core.first(cljs.core.next(arglist__459042));
var zs = cljs.core.rest(cljs.core.next(arglist__459042));
return G__459041__delegate.call(this, x, y, zs);
});
return G__459041;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__459036.call(this);
case  1 :
return concat__459037.call(this,x);
case  2 :
return concat__459038.call(this,x,y);
default:
return concat__459039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__459039.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___459043 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___459044 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___459045 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___459046 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___459047 = (function() { 
var G__459049__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__459049 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__459049__delegate.call(this, a, b, c, d, more);
};
G__459049.cljs$lang$maxFixedArity = 4;
G__459049.cljs$lang$applyTo = (function (arglist__459050){
var a = cljs.core.first(arglist__459050);
var b = cljs.core.first(cljs.core.next(arglist__459050));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459050)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459050))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459050))));
return G__459049__delegate.call(this, a, b, c, d, more);
});
return G__459049;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___459043.call(this,a);
case  2 :
return list_STAR___459044.call(this,a,b);
case  3 :
return list_STAR___459045.call(this,a,b,c);
case  4 :
return list_STAR___459046.call(this,a,b,c,d);
default:
return list_STAR___459047.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___459047.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__459060 = (function (f,args){
var fixed_arity__459051 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__459051 + 1)) <= fixed_arity__459051)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__459061 = (function (f,x,args){
var arglist__459052 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__459053 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__459052,fixed_arity__459053) <= fixed_arity__459053)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__459052));
} else
{return f.cljs$lang$applyTo(arglist__459052);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__459052));
}
});
var apply__459062 = (function (f,x,y,args){
var arglist__459054 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__459055 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__459054,fixed_arity__459055) <= fixed_arity__459055)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__459054));
} else
{return f.cljs$lang$applyTo(arglist__459054);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__459054));
}
});
var apply__459063 = (function (f,x,y,z,args){
var arglist__459056 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__459057 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__459056,fixed_arity__459057) <= fixed_arity__459057)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__459056));
} else
{return f.cljs$lang$applyTo(arglist__459056);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__459056));
}
});
var apply__459064 = (function() { 
var G__459066__delegate = function (f,a,b,c,d,args){
var arglist__459058 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__459059 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__459058,fixed_arity__459059) <= fixed_arity__459059)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__459058));
} else
{return f.cljs$lang$applyTo(arglist__459058);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__459058));
}
};
var G__459066 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__459066__delegate.call(this, f, a, b, c, d, args);
};
G__459066.cljs$lang$maxFixedArity = 5;
G__459066.cljs$lang$applyTo = (function (arglist__459067){
var f = cljs.core.first(arglist__459067);
var a = cljs.core.first(cljs.core.next(arglist__459067));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459067)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459067))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459067)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459067)))));
return G__459066__delegate.call(this, f, a, b, c, d, args);
});
return G__459066;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__459060.call(this,f,a);
case  3 :
return apply__459061.call(this,f,a,b);
case  4 :
return apply__459062.call(this,f,a,b,c);
case  5 :
return apply__459063.call(this,f,a,b,c,d);
default:
return apply__459064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__459064.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__459068){
var obj = cljs.core.first(arglist__459068);
var f = cljs.core.first(cljs.core.next(arglist__459068));
var args = cljs.core.rest(cljs.core.next(arglist__459068));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___459069 = (function (x){
return false;
});
var not_EQ___459070 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___459071 = (function() { 
var G__459073__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__459073 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__459073__delegate.call(this, x, y, more);
};
G__459073.cljs$lang$maxFixedArity = 2;
G__459073.cljs$lang$applyTo = (function (arglist__459074){
var x = cljs.core.first(arglist__459074);
var y = cljs.core.first(cljs.core.next(arglist__459074));
var more = cljs.core.rest(cljs.core.next(arglist__459074));
return G__459073__delegate.call(this, x, y, more);
});
return G__459073;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___459069.call(this,x);
case  2 :
return not_EQ___459070.call(this,x,y);
default:
return not_EQ___459071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___459071.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__459075 = pred;
var G__459076 = cljs.core.next.call(null,coll);
pred = G__459075;
coll = G__459076;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____459077 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____459077))
{return or__3548__auto____459077;
} else
{{
var G__459078 = pred;
var G__459079 = cljs.core.next.call(null,coll);
pred = G__459078;
coll = G__459079;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__459080 = null;
var G__459080__459081 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__459080__459082 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__459080__459083 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__459080__459084 = (function() { 
var G__459086__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__459086 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__459086__delegate.call(this, x, y, zs);
};
G__459086.cljs$lang$maxFixedArity = 2;
G__459086.cljs$lang$applyTo = (function (arglist__459087){
var x = cljs.core.first(arglist__459087);
var y = cljs.core.first(cljs.core.next(arglist__459087));
var zs = cljs.core.rest(cljs.core.next(arglist__459087));
return G__459086__delegate.call(this, x, y, zs);
});
return G__459086;
})()
;
G__459080 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__459080__459081.call(this);
case  1 :
return G__459080__459082.call(this,x);
case  2 :
return G__459080__459083.call(this,x,y);
default:
return G__459080__459084.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459080.cljs$lang$maxFixedArity = 2;
G__459080.cljs$lang$applyTo = G__459080__459084.cljs$lang$applyTo;
return G__459080;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__459088__delegate = function (args){
return x;
};
var G__459088 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__459088__delegate.call(this, args);
};
G__459088.cljs$lang$maxFixedArity = 0;
G__459088.cljs$lang$applyTo = (function (arglist__459089){
var args = cljs.core.seq( arglist__459089 );;
return G__459088__delegate.call(this, args);
});
return G__459088;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__459093 = (function (){
return cljs.core.identity;
});
var comp__459094 = (function (f){
return f;
});
var comp__459095 = (function (f,g){
return (function() {
var G__459099 = null;
var G__459099__459100 = (function (){
return f.call(null,g.call(null));
});
var G__459099__459101 = (function (x){
return f.call(null,g.call(null,x));
});
var G__459099__459102 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__459099__459103 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__459099__459104 = (function() { 
var G__459106__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__459106 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459106__delegate.call(this, x, y, z, args);
};
G__459106.cljs$lang$maxFixedArity = 3;
G__459106.cljs$lang$applyTo = (function (arglist__459107){
var x = cljs.core.first(arglist__459107);
var y = cljs.core.first(cljs.core.next(arglist__459107));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459107)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459107)));
return G__459106__delegate.call(this, x, y, z, args);
});
return G__459106;
})()
;
G__459099 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__459099__459100.call(this);
case  1 :
return G__459099__459101.call(this,x);
case  2 :
return G__459099__459102.call(this,x,y);
case  3 :
return G__459099__459103.call(this,x,y,z);
default:
return G__459099__459104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459099.cljs$lang$maxFixedArity = 3;
G__459099.cljs$lang$applyTo = G__459099__459104.cljs$lang$applyTo;
return G__459099;
})()
});
var comp__459096 = (function (f,g,h){
return (function() {
var G__459108 = null;
var G__459108__459109 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__459108__459110 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__459108__459111 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__459108__459112 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__459108__459113 = (function() { 
var G__459115__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__459115 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459115__delegate.call(this, x, y, z, args);
};
G__459115.cljs$lang$maxFixedArity = 3;
G__459115.cljs$lang$applyTo = (function (arglist__459116){
var x = cljs.core.first(arglist__459116);
var y = cljs.core.first(cljs.core.next(arglist__459116));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459116)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459116)));
return G__459115__delegate.call(this, x, y, z, args);
});
return G__459115;
})()
;
G__459108 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__459108__459109.call(this);
case  1 :
return G__459108__459110.call(this,x);
case  2 :
return G__459108__459111.call(this,x,y);
case  3 :
return G__459108__459112.call(this,x,y,z);
default:
return G__459108__459113.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459108.cljs$lang$maxFixedArity = 3;
G__459108.cljs$lang$applyTo = G__459108__459113.cljs$lang$applyTo;
return G__459108;
})()
});
var comp__459097 = (function() { 
var G__459117__delegate = function (f1,f2,f3,fs){
var fs__459090 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__459118__delegate = function (args){
var ret__459091 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__459090),args);
var fs__459092 = cljs.core.next.call(null,fs__459090);

while(true){
if(cljs.core.truth_(fs__459092))
{{
var G__459119 = cljs.core.first.call(null,fs__459092).call(null,ret__459091);
var G__459120 = cljs.core.next.call(null,fs__459092);
ret__459091 = G__459119;
fs__459092 = G__459120;
continue;
}
} else
{return ret__459091;
}
break;
}
};
var G__459118 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__459118__delegate.call(this, args);
};
G__459118.cljs$lang$maxFixedArity = 0;
G__459118.cljs$lang$applyTo = (function (arglist__459121){
var args = cljs.core.seq( arglist__459121 );;
return G__459118__delegate.call(this, args);
});
return G__459118;
})()
;
};
var G__459117 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459117__delegate.call(this, f1, f2, f3, fs);
};
G__459117.cljs$lang$maxFixedArity = 3;
G__459117.cljs$lang$applyTo = (function (arglist__459122){
var f1 = cljs.core.first(arglist__459122);
var f2 = cljs.core.first(cljs.core.next(arglist__459122));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459122)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459122)));
return G__459117__delegate.call(this, f1, f2, f3, fs);
});
return G__459117;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__459093.call(this);
case  1 :
return comp__459094.call(this,f1);
case  2 :
return comp__459095.call(this,f1,f2);
case  3 :
return comp__459096.call(this,f1,f2,f3);
default:
return comp__459097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__459097.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__459123 = (function (f,arg1){
return (function() { 
var G__459128__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__459128 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__459128__delegate.call(this, args);
};
G__459128.cljs$lang$maxFixedArity = 0;
G__459128.cljs$lang$applyTo = (function (arglist__459129){
var args = cljs.core.seq( arglist__459129 );;
return G__459128__delegate.call(this, args);
});
return G__459128;
})()
;
});
var partial__459124 = (function (f,arg1,arg2){
return (function() { 
var G__459130__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__459130 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__459130__delegate.call(this, args);
};
G__459130.cljs$lang$maxFixedArity = 0;
G__459130.cljs$lang$applyTo = (function (arglist__459131){
var args = cljs.core.seq( arglist__459131 );;
return G__459130__delegate.call(this, args);
});
return G__459130;
})()
;
});
var partial__459125 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__459132__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__459132 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__459132__delegate.call(this, args);
};
G__459132.cljs$lang$maxFixedArity = 0;
G__459132.cljs$lang$applyTo = (function (arglist__459133){
var args = cljs.core.seq( arglist__459133 );;
return G__459132__delegate.call(this, args);
});
return G__459132;
})()
;
});
var partial__459126 = (function() { 
var G__459134__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__459135__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__459135 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__459135__delegate.call(this, args);
};
G__459135.cljs$lang$maxFixedArity = 0;
G__459135.cljs$lang$applyTo = (function (arglist__459136){
var args = cljs.core.seq( arglist__459136 );;
return G__459135__delegate.call(this, args);
});
return G__459135;
})()
;
};
var G__459134 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__459134__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__459134.cljs$lang$maxFixedArity = 4;
G__459134.cljs$lang$applyTo = (function (arglist__459137){
var f = cljs.core.first(arglist__459137);
var arg1 = cljs.core.first(cljs.core.next(arglist__459137));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459137)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459137))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459137))));
return G__459134__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__459134;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__459123.call(this,f,arg1);
case  3 :
return partial__459124.call(this,f,arg1,arg2);
case  4 :
return partial__459125.call(this,f,arg1,arg2,arg3);
default:
return partial__459126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__459126.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__459138 = (function (f,x){
return (function() {
var G__459142 = null;
var G__459142__459143 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__459142__459144 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__459142__459145 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__459142__459146 = (function() { 
var G__459148__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__459148 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459148__delegate.call(this, a, b, c, ds);
};
G__459148.cljs$lang$maxFixedArity = 3;
G__459148.cljs$lang$applyTo = (function (arglist__459149){
var a = cljs.core.first(arglist__459149);
var b = cljs.core.first(cljs.core.next(arglist__459149));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459149)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459149)));
return G__459148__delegate.call(this, a, b, c, ds);
});
return G__459148;
})()
;
G__459142 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__459142__459143.call(this,a);
case  2 :
return G__459142__459144.call(this,a,b);
case  3 :
return G__459142__459145.call(this,a,b,c);
default:
return G__459142__459146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459142.cljs$lang$maxFixedArity = 3;
G__459142.cljs$lang$applyTo = G__459142__459146.cljs$lang$applyTo;
return G__459142;
})()
});
var fnil__459139 = (function (f,x,y){
return (function() {
var G__459150 = null;
var G__459150__459151 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__459150__459152 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__459150__459153 = (function() { 
var G__459155__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__459155 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459155__delegate.call(this, a, b, c, ds);
};
G__459155.cljs$lang$maxFixedArity = 3;
G__459155.cljs$lang$applyTo = (function (arglist__459156){
var a = cljs.core.first(arglist__459156);
var b = cljs.core.first(cljs.core.next(arglist__459156));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459156)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459156)));
return G__459155__delegate.call(this, a, b, c, ds);
});
return G__459155;
})()
;
G__459150 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__459150__459151.call(this,a,b);
case  3 :
return G__459150__459152.call(this,a,b,c);
default:
return G__459150__459153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459150.cljs$lang$maxFixedArity = 3;
G__459150.cljs$lang$applyTo = G__459150__459153.cljs$lang$applyTo;
return G__459150;
})()
});
var fnil__459140 = (function (f,x,y,z){
return (function() {
var G__459157 = null;
var G__459157__459158 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__459157__459159 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__459157__459160 = (function() { 
var G__459162__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__459162 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459162__delegate.call(this, a, b, c, ds);
};
G__459162.cljs$lang$maxFixedArity = 3;
G__459162.cljs$lang$applyTo = (function (arglist__459163){
var a = cljs.core.first(arglist__459163);
var b = cljs.core.first(cljs.core.next(arglist__459163));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459163)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459163)));
return G__459162__delegate.call(this, a, b, c, ds);
});
return G__459162;
})()
;
G__459157 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__459157__459158.call(this,a,b);
case  3 :
return G__459157__459159.call(this,a,b,c);
default:
return G__459157__459160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459157.cljs$lang$maxFixedArity = 3;
G__459157.cljs$lang$applyTo = G__459157__459160.cljs$lang$applyTo;
return G__459157;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__459138.call(this,f,x);
case  3 :
return fnil__459139.call(this,f,x,y);
case  4 :
return fnil__459140.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__459166 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459164 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459164))
{var s__459165 = temp__3698__auto____459164;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__459165)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__459165)));
} else
{return null;
}
})));
});

return mapi__459166.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459167 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459167))
{var s__459168 = temp__3698__auto____459167;

var x__459169 = f.call(null,cljs.core.first.call(null,s__459168));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__459169)))
{return keep.call(null,f,cljs.core.rest.call(null,s__459168));
} else
{return cljs.core.cons.call(null,x__459169,keep.call(null,f,cljs.core.rest.call(null,s__459168)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__459179 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459176 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459176))
{var s__459177 = temp__3698__auto____459176;

var x__459178 = f.call(null,idx,cljs.core.first.call(null,s__459177));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__459178)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__459177));
} else
{return cljs.core.cons.call(null,x__459178,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__459177)));
}
} else
{return null;
}
})));
});

return keepi__459179.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__459224 = (function (p){
return (function() {
var ep1 = null;
var ep1__459229 = (function (){
return true;
});
var ep1__459230 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__459231 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459186 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____459186))
{return p.call(null,y);
} else
{return and__3546__auto____459186;
}
})());
});
var ep1__459232 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459187 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____459187))
{var and__3546__auto____459188 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____459188))
{return p.call(null,z);
} else
{return and__3546__auto____459188;
}
} else
{return and__3546__auto____459187;
}
})());
});
var ep1__459233 = (function() { 
var G__459235__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459189 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____459189))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____459189;
}
})());
};
var G__459235 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459235__delegate.call(this, x, y, z, args);
};
G__459235.cljs$lang$maxFixedArity = 3;
G__459235.cljs$lang$applyTo = (function (arglist__459236){
var x = cljs.core.first(arglist__459236);
var y = cljs.core.first(cljs.core.next(arglist__459236));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459236)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459236)));
return G__459235__delegate.call(this, x, y, z, args);
});
return G__459235;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__459229.call(this);
case  1 :
return ep1__459230.call(this,x);
case  2 :
return ep1__459231.call(this,x,y);
case  3 :
return ep1__459232.call(this,x,y,z);
default:
return ep1__459233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__459233.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__459225 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__459237 = (function (){
return true;
});
var ep2__459238 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459190 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____459190))
{return p2.call(null,x);
} else
{return and__3546__auto____459190;
}
})());
});
var ep2__459239 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459191 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____459191))
{var and__3546__auto____459192 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____459192))
{var and__3546__auto____459193 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____459193))
{return p2.call(null,y);
} else
{return and__3546__auto____459193;
}
} else
{return and__3546__auto____459192;
}
} else
{return and__3546__auto____459191;
}
})());
});
var ep2__459240 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459194 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____459194))
{var and__3546__auto____459195 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____459195))
{var and__3546__auto____459196 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____459196))
{var and__3546__auto____459197 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____459197))
{var and__3546__auto____459198 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____459198))
{return p2.call(null,z);
} else
{return and__3546__auto____459198;
}
} else
{return and__3546__auto____459197;
}
} else
{return and__3546__auto____459196;
}
} else
{return and__3546__auto____459195;
}
} else
{return and__3546__auto____459194;
}
})());
});
var ep2__459241 = (function() { 
var G__459243__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459199 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____459199))
{return cljs.core.every_QMARK_.call(null,(function (p1__459170_SHARP_){
var and__3546__auto____459200 = p1.call(null,p1__459170_SHARP_);

if(cljs.core.truth_(and__3546__auto____459200))
{return p2.call(null,p1__459170_SHARP_);
} else
{return and__3546__auto____459200;
}
}),args);
} else
{return and__3546__auto____459199;
}
})());
};
var G__459243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459243__delegate.call(this, x, y, z, args);
};
G__459243.cljs$lang$maxFixedArity = 3;
G__459243.cljs$lang$applyTo = (function (arglist__459244){
var x = cljs.core.first(arglist__459244);
var y = cljs.core.first(cljs.core.next(arglist__459244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459244)));
return G__459243__delegate.call(this, x, y, z, args);
});
return G__459243;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__459237.call(this);
case  1 :
return ep2__459238.call(this,x);
case  2 :
return ep2__459239.call(this,x,y);
case  3 :
return ep2__459240.call(this,x,y,z);
default:
return ep2__459241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__459241.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__459226 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__459245 = (function (){
return true;
});
var ep3__459246 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459201 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____459201))
{var and__3546__auto____459202 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____459202))
{return p3.call(null,x);
} else
{return and__3546__auto____459202;
}
} else
{return and__3546__auto____459201;
}
})());
});
var ep3__459247 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459203 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____459203))
{var and__3546__auto____459204 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____459204))
{var and__3546__auto____459205 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____459205))
{var and__3546__auto____459206 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____459206))
{var and__3546__auto____459207 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____459207))
{return p3.call(null,y);
} else
{return and__3546__auto____459207;
}
} else
{return and__3546__auto____459206;
}
} else
{return and__3546__auto____459205;
}
} else
{return and__3546__auto____459204;
}
} else
{return and__3546__auto____459203;
}
})());
});
var ep3__459248 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459208 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____459208))
{var and__3546__auto____459209 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____459209))
{var and__3546__auto____459210 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____459210))
{var and__3546__auto____459211 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____459211))
{var and__3546__auto____459212 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____459212))
{var and__3546__auto____459213 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____459213))
{var and__3546__auto____459214 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____459214))
{var and__3546__auto____459215 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____459215))
{return p3.call(null,z);
} else
{return and__3546__auto____459215;
}
} else
{return and__3546__auto____459214;
}
} else
{return and__3546__auto____459213;
}
} else
{return and__3546__auto____459212;
}
} else
{return and__3546__auto____459211;
}
} else
{return and__3546__auto____459210;
}
} else
{return and__3546__auto____459209;
}
} else
{return and__3546__auto____459208;
}
})());
});
var ep3__459249 = (function() { 
var G__459251__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459216 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____459216))
{return cljs.core.every_QMARK_.call(null,(function (p1__459171_SHARP_){
var and__3546__auto____459217 = p1.call(null,p1__459171_SHARP_);

if(cljs.core.truth_(and__3546__auto____459217))
{var and__3546__auto____459218 = p2.call(null,p1__459171_SHARP_);

if(cljs.core.truth_(and__3546__auto____459218))
{return p3.call(null,p1__459171_SHARP_);
} else
{return and__3546__auto____459218;
}
} else
{return and__3546__auto____459217;
}
}),args);
} else
{return and__3546__auto____459216;
}
})());
};
var G__459251 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459251__delegate.call(this, x, y, z, args);
};
G__459251.cljs$lang$maxFixedArity = 3;
G__459251.cljs$lang$applyTo = (function (arglist__459252){
var x = cljs.core.first(arglist__459252);
var y = cljs.core.first(cljs.core.next(arglist__459252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459252)));
return G__459251__delegate.call(this, x, y, z, args);
});
return G__459251;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__459245.call(this);
case  1 :
return ep3__459246.call(this,x);
case  2 :
return ep3__459247.call(this,x,y);
case  3 :
return ep3__459248.call(this,x,y,z);
default:
return ep3__459249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__459249.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__459227 = (function() { 
var G__459253__delegate = function (p1,p2,p3,ps){
var ps__459219 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__459254 = (function (){
return true;
});
var epn__459255 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__459172_SHARP_){
return p1__459172_SHARP_.call(null,x);
}),ps__459219);
});
var epn__459256 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__459173_SHARP_){
var and__3546__auto____459220 = p1__459173_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____459220))
{return p1__459173_SHARP_.call(null,y);
} else
{return and__3546__auto____459220;
}
}),ps__459219);
});
var epn__459257 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__459174_SHARP_){
var and__3546__auto____459221 = p1__459174_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____459221))
{var and__3546__auto____459222 = p1__459174_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____459222))
{return p1__459174_SHARP_.call(null,z);
} else
{return and__3546__auto____459222;
}
} else
{return and__3546__auto____459221;
}
}),ps__459219);
});
var epn__459258 = (function() { 
var G__459260__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____459223 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____459223))
{return cljs.core.every_QMARK_.call(null,(function (p1__459175_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__459175_SHARP_,args);
}),ps__459219);
} else
{return and__3546__auto____459223;
}
})());
};
var G__459260 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459260__delegate.call(this, x, y, z, args);
};
G__459260.cljs$lang$maxFixedArity = 3;
G__459260.cljs$lang$applyTo = (function (arglist__459261){
var x = cljs.core.first(arglist__459261);
var y = cljs.core.first(cljs.core.next(arglist__459261));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459261)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459261)));
return G__459260__delegate.call(this, x, y, z, args);
});
return G__459260;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__459254.call(this);
case  1 :
return epn__459255.call(this,x);
case  2 :
return epn__459256.call(this,x,y);
case  3 :
return epn__459257.call(this,x,y,z);
default:
return epn__459258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__459258.cljs$lang$applyTo;
return epn;
})()
};
var G__459253 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459253__delegate.call(this, p1, p2, p3, ps);
};
G__459253.cljs$lang$maxFixedArity = 3;
G__459253.cljs$lang$applyTo = (function (arglist__459262){
var p1 = cljs.core.first(arglist__459262);
var p2 = cljs.core.first(cljs.core.next(arglist__459262));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459262)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459262)));
return G__459253__delegate.call(this, p1, p2, p3, ps);
});
return G__459253;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__459224.call(this,p1);
case  2 :
return every_pred__459225.call(this,p1,p2);
case  3 :
return every_pred__459226.call(this,p1,p2,p3);
default:
return every_pred__459227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__459227.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__459302 = (function (p){
return (function() {
var sp1 = null;
var sp1__459307 = (function (){
return null;
});
var sp1__459308 = (function (x){
return p.call(null,x);
});
var sp1__459309 = (function (x,y){
var or__3548__auto____459264 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____459264))
{return or__3548__auto____459264;
} else
{return p.call(null,y);
}
});
var sp1__459310 = (function (x,y,z){
var or__3548__auto____459265 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____459265))
{return or__3548__auto____459265;
} else
{var or__3548__auto____459266 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____459266))
{return or__3548__auto____459266;
} else
{return p.call(null,z);
}
}
});
var sp1__459311 = (function() { 
var G__459313__delegate = function (x,y,z,args){
var or__3548__auto____459267 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____459267))
{return or__3548__auto____459267;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__459313 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459313__delegate.call(this, x, y, z, args);
};
G__459313.cljs$lang$maxFixedArity = 3;
G__459313.cljs$lang$applyTo = (function (arglist__459314){
var x = cljs.core.first(arglist__459314);
var y = cljs.core.first(cljs.core.next(arglist__459314));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459314)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459314)));
return G__459313__delegate.call(this, x, y, z, args);
});
return G__459313;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__459307.call(this);
case  1 :
return sp1__459308.call(this,x);
case  2 :
return sp1__459309.call(this,x,y);
case  3 :
return sp1__459310.call(this,x,y,z);
default:
return sp1__459311.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__459311.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__459303 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__459315 = (function (){
return null;
});
var sp2__459316 = (function (x){
var or__3548__auto____459268 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____459268))
{return or__3548__auto____459268;
} else
{return p2.call(null,x);
}
});
var sp2__459317 = (function (x,y){
var or__3548__auto____459269 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____459269))
{return or__3548__auto____459269;
} else
{var or__3548__auto____459270 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____459270))
{return or__3548__auto____459270;
} else
{var or__3548__auto____459271 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____459271))
{return or__3548__auto____459271;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__459318 = (function (x,y,z){
var or__3548__auto____459272 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____459272))
{return or__3548__auto____459272;
} else
{var or__3548__auto____459273 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____459273))
{return or__3548__auto____459273;
} else
{var or__3548__auto____459274 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____459274))
{return or__3548__auto____459274;
} else
{var or__3548__auto____459275 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____459275))
{return or__3548__auto____459275;
} else
{var or__3548__auto____459276 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____459276))
{return or__3548__auto____459276;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__459319 = (function() { 
var G__459321__delegate = function (x,y,z,args){
var or__3548__auto____459277 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____459277))
{return or__3548__auto____459277;
} else
{return cljs.core.some.call(null,(function (p1__459180_SHARP_){
var or__3548__auto____459278 = p1.call(null,p1__459180_SHARP_);

if(cljs.core.truth_(or__3548__auto____459278))
{return or__3548__auto____459278;
} else
{return p2.call(null,p1__459180_SHARP_);
}
}),args);
}
};
var G__459321 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459321__delegate.call(this, x, y, z, args);
};
G__459321.cljs$lang$maxFixedArity = 3;
G__459321.cljs$lang$applyTo = (function (arglist__459322){
var x = cljs.core.first(arglist__459322);
var y = cljs.core.first(cljs.core.next(arglist__459322));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459322)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459322)));
return G__459321__delegate.call(this, x, y, z, args);
});
return G__459321;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__459315.call(this);
case  1 :
return sp2__459316.call(this,x);
case  2 :
return sp2__459317.call(this,x,y);
case  3 :
return sp2__459318.call(this,x,y,z);
default:
return sp2__459319.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__459319.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__459304 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__459323 = (function (){
return null;
});
var sp3__459324 = (function (x){
var or__3548__auto____459279 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____459279))
{return or__3548__auto____459279;
} else
{var or__3548__auto____459280 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____459280))
{return or__3548__auto____459280;
} else
{return p3.call(null,x);
}
}
});
var sp3__459325 = (function (x,y){
var or__3548__auto____459281 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____459281))
{return or__3548__auto____459281;
} else
{var or__3548__auto____459282 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____459282))
{return or__3548__auto____459282;
} else
{var or__3548__auto____459283 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____459283))
{return or__3548__auto____459283;
} else
{var or__3548__auto____459284 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____459284))
{return or__3548__auto____459284;
} else
{var or__3548__auto____459285 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____459285))
{return or__3548__auto____459285;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__459326 = (function (x,y,z){
var or__3548__auto____459286 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____459286))
{return or__3548__auto____459286;
} else
{var or__3548__auto____459287 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____459287))
{return or__3548__auto____459287;
} else
{var or__3548__auto____459288 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____459288))
{return or__3548__auto____459288;
} else
{var or__3548__auto____459289 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____459289))
{return or__3548__auto____459289;
} else
{var or__3548__auto____459290 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____459290))
{return or__3548__auto____459290;
} else
{var or__3548__auto____459291 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____459291))
{return or__3548__auto____459291;
} else
{var or__3548__auto____459292 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____459292))
{return or__3548__auto____459292;
} else
{var or__3548__auto____459293 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____459293))
{return or__3548__auto____459293;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__459327 = (function() { 
var G__459329__delegate = function (x,y,z,args){
var or__3548__auto____459294 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____459294))
{return or__3548__auto____459294;
} else
{return cljs.core.some.call(null,(function (p1__459181_SHARP_){
var or__3548__auto____459295 = p1.call(null,p1__459181_SHARP_);

if(cljs.core.truth_(or__3548__auto____459295))
{return or__3548__auto____459295;
} else
{var or__3548__auto____459296 = p2.call(null,p1__459181_SHARP_);

if(cljs.core.truth_(or__3548__auto____459296))
{return or__3548__auto____459296;
} else
{return p3.call(null,p1__459181_SHARP_);
}
}
}),args);
}
};
var G__459329 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459329__delegate.call(this, x, y, z, args);
};
G__459329.cljs$lang$maxFixedArity = 3;
G__459329.cljs$lang$applyTo = (function (arglist__459330){
var x = cljs.core.first(arglist__459330);
var y = cljs.core.first(cljs.core.next(arglist__459330));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459330)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459330)));
return G__459329__delegate.call(this, x, y, z, args);
});
return G__459329;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__459323.call(this);
case  1 :
return sp3__459324.call(this,x);
case  2 :
return sp3__459325.call(this,x,y);
case  3 :
return sp3__459326.call(this,x,y,z);
default:
return sp3__459327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__459327.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__459305 = (function() { 
var G__459331__delegate = function (p1,p2,p3,ps){
var ps__459297 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__459332 = (function (){
return null;
});
var spn__459333 = (function (x){
return cljs.core.some.call(null,(function (p1__459182_SHARP_){
return p1__459182_SHARP_.call(null,x);
}),ps__459297);
});
var spn__459334 = (function (x,y){
return cljs.core.some.call(null,(function (p1__459183_SHARP_){
var or__3548__auto____459298 = p1__459183_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____459298))
{return or__3548__auto____459298;
} else
{return p1__459183_SHARP_.call(null,y);
}
}),ps__459297);
});
var spn__459335 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__459184_SHARP_){
var or__3548__auto____459299 = p1__459184_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____459299))
{return or__3548__auto____459299;
} else
{var or__3548__auto____459300 = p1__459184_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____459300))
{return or__3548__auto____459300;
} else
{return p1__459184_SHARP_.call(null,z);
}
}
}),ps__459297);
});
var spn__459336 = (function() { 
var G__459338__delegate = function (x,y,z,args){
var or__3548__auto____459301 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____459301))
{return or__3548__auto____459301;
} else
{return cljs.core.some.call(null,(function (p1__459185_SHARP_){
return cljs.core.some.call(null,p1__459185_SHARP_,args);
}),ps__459297);
}
};
var G__459338 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459338__delegate.call(this, x, y, z, args);
};
G__459338.cljs$lang$maxFixedArity = 3;
G__459338.cljs$lang$applyTo = (function (arglist__459339){
var x = cljs.core.first(arglist__459339);
var y = cljs.core.first(cljs.core.next(arglist__459339));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459339)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459339)));
return G__459338__delegate.call(this, x, y, z, args);
});
return G__459338;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__459332.call(this);
case  1 :
return spn__459333.call(this,x);
case  2 :
return spn__459334.call(this,x,y);
case  3 :
return spn__459335.call(this,x,y,z);
default:
return spn__459336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__459336.cljs$lang$applyTo;
return spn;
})()
};
var G__459331 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459331__delegate.call(this, p1, p2, p3, ps);
};
G__459331.cljs$lang$maxFixedArity = 3;
G__459331.cljs$lang$applyTo = (function (arglist__459340){
var p1 = cljs.core.first(arglist__459340);
var p2 = cljs.core.first(cljs.core.next(arglist__459340));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459340)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459340)));
return G__459331__delegate.call(this, p1, p2, p3, ps);
});
return G__459331;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__459302.call(this,p1);
case  2 :
return some_fn__459303.call(this,p1,p2);
case  3 :
return some_fn__459304.call(this,p1,p2,p3);
default:
return some_fn__459305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__459305.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__459353 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459341 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459341))
{var s__459342 = temp__3698__auto____459341;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__459342)),map.call(null,f,cljs.core.rest.call(null,s__459342)));
} else
{return null;
}
})));
});
var map__459354 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__459343 = cljs.core.seq.call(null,c1);
var s2__459344 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____459345 = s1__459343;

if(cljs.core.truth_(and__3546__auto____459345))
{return s2__459344;
} else
{return and__3546__auto____459345;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__459343),cljs.core.first.call(null,s2__459344)),map.call(null,f,cljs.core.rest.call(null,s1__459343),cljs.core.rest.call(null,s2__459344)));
} else
{return null;
}
})));
});
var map__459355 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__459346 = cljs.core.seq.call(null,c1);
var s2__459347 = cljs.core.seq.call(null,c2);
var s3__459348 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____459349 = s1__459346;

if(cljs.core.truth_(and__3546__auto____459349))
{var and__3546__auto____459350 = s2__459347;

if(cljs.core.truth_(and__3546__auto____459350))
{return s3__459348;
} else
{return and__3546__auto____459350;
}
} else
{return and__3546__auto____459349;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__459346),cljs.core.first.call(null,s2__459347),cljs.core.first.call(null,s3__459348)),map.call(null,f,cljs.core.rest.call(null,s1__459346),cljs.core.rest.call(null,s2__459347),cljs.core.rest.call(null,s3__459348)));
} else
{return null;
}
})));
});
var map__459356 = (function() { 
var G__459358__delegate = function (f,c1,c2,c3,colls){
var step__459352 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__459351 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__459351)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__459351),step.call(null,map.call(null,cljs.core.rest,ss__459351)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__459263_SHARP_){
return cljs.core.apply.call(null,f,p1__459263_SHARP_);
}),step__459352.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__459358 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__459358__delegate.call(this, f, c1, c2, c3, colls);
};
G__459358.cljs$lang$maxFixedArity = 4;
G__459358.cljs$lang$applyTo = (function (arglist__459359){
var f = cljs.core.first(arglist__459359);
var c1 = cljs.core.first(cljs.core.next(arglist__459359));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459359)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459359))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459359))));
return G__459358__delegate.call(this, f, c1, c2, c3, colls);
});
return G__459358;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__459353.call(this,f,c1);
case  3 :
return map__459354.call(this,f,c1,c2);
case  4 :
return map__459355.call(this,f,c1,c2,c3);
default:
return map__459356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__459356.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____459360 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459360))
{var s__459361 = temp__3698__auto____459360;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__459361),take.call(null,(n - 1),cljs.core.rest.call(null,s__459361)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__459364 = (function (n,coll){
while(true){
var s__459362 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____459363 = (n > 0);

if(cljs.core.truth_(and__3546__auto____459363))
{return s__459362;
} else
{return and__3546__auto____459363;
}
})()))
{{
var G__459365 = (n - 1);
var G__459366 = cljs.core.rest.call(null,s__459362);
n = G__459365;
coll = G__459366;
continue;
}
} else
{return s__459362;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__459364.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__459367 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__459368 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__459367.call(this,n);
case  2 :
return drop_last__459368.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__459370 = cljs.core.seq.call(null,coll);
var lead__459371 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__459371))
{{
var G__459372 = cljs.core.next.call(null,s__459370);
var G__459373 = cljs.core.next.call(null,lead__459371);
s__459370 = G__459372;
lead__459371 = G__459373;
continue;
}
} else
{return s__459370;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__459376 = (function (pred,coll){
while(true){
var s__459374 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____459375 = s__459374;

if(cljs.core.truth_(and__3546__auto____459375))
{return pred.call(null,cljs.core.first.call(null,s__459374));
} else
{return and__3546__auto____459375;
}
})()))
{{
var G__459377 = pred;
var G__459378 = cljs.core.rest.call(null,s__459374);
pred = G__459377;
coll = G__459378;
continue;
}
} else
{return s__459374;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__459376.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459379 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459379))
{var s__459380 = temp__3698__auto____459379;

return cljs.core.concat.call(null,s__459380,cycle.call(null,s__459380));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__459381 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__459382 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__459381.call(this,n);
case  2 :
return repeat__459382.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__459384 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__459385 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__459384.call(this,n);
case  2 :
return repeatedly__459385.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__459391 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__459387 = cljs.core.seq.call(null,c1);
var s2__459388 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____459389 = s1__459387;

if(cljs.core.truth_(and__3546__auto____459389))
{return s2__459388;
} else
{return and__3546__auto____459389;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__459387),cljs.core.cons.call(null,cljs.core.first.call(null,s2__459388),interleave.call(null,cljs.core.rest.call(null,s1__459387),cljs.core.rest.call(null,s2__459388))));
} else
{return null;
}
})));
});
var interleave__459392 = (function() { 
var G__459394__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__459390 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__459390)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__459390),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__459390)));
} else
{return null;
}
})));
};
var G__459394 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__459394__delegate.call(this, c1, c2, colls);
};
G__459394.cljs$lang$maxFixedArity = 2;
G__459394.cljs$lang$applyTo = (function (arglist__459395){
var c1 = cljs.core.first(arglist__459395);
var c2 = cljs.core.first(cljs.core.next(arglist__459395));
var colls = cljs.core.rest(cljs.core.next(arglist__459395));
return G__459394__delegate.call(this, c1, c2, colls);
});
return G__459394;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__459391.call(this,c1,c2);
default:
return interleave__459392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__459392.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__459398 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____459396 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____459396))
{var coll__459397 = temp__3695__auto____459396;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__459397),cat.call(null,cljs.core.rest.call(null,coll__459397),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__459398.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__459399 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__459400 = (function() { 
var G__459402__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__459402 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__459402__delegate.call(this, f, coll, colls);
};
G__459402.cljs$lang$maxFixedArity = 2;
G__459402.cljs$lang$applyTo = (function (arglist__459403){
var f = cljs.core.first(arglist__459403);
var coll = cljs.core.first(cljs.core.next(arglist__459403));
var colls = cljs.core.rest(cljs.core.next(arglist__459403));
return G__459402__delegate.call(this, f, coll, colls);
});
return G__459402;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__459399.call(this,f,coll);
default:
return mapcat__459400.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__459400.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459404 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459404))
{var s__459405 = temp__3698__auto____459404;

var f__459406 = cljs.core.first.call(null,s__459405);
var r__459407 = cljs.core.rest.call(null,s__459405);

if(cljs.core.truth_(pred.call(null,f__459406)))
{return cljs.core.cons.call(null,f__459406,filter.call(null,pred,r__459407));
} else
{return filter.call(null,pred,r__459407);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__459409 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__459409.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__459408_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__459408_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__459416 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__459417 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459410 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459410))
{var s__459411 = temp__3698__auto____459410;

var p__459412 = cljs.core.take.call(null,n,s__459411);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__459412))))
{return cljs.core.cons.call(null,p__459412,partition.call(null,n,step,cljs.core.drop.call(null,step,s__459411)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__459418 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459413 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459413))
{var s__459414 = temp__3698__auto____459413;

var p__459415 = cljs.core.take.call(null,n,s__459414);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__459415))))
{return cljs.core.cons.call(null,p__459415,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__459414)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__459415,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__459416.call(this,n,step);
case  3 :
return partition__459417.call(this,n,step,pad);
case  4 :
return partition__459418.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__459424 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__459425 = (function (m,ks,not_found){
var sentinel__459420 = cljs.core.lookup_sentinel;
var m__459421 = m;
var ks__459422 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__459422))
{var m__459423 = cljs.core.get.call(null,m__459421,cljs.core.first.call(null,ks__459422),sentinel__459420);

if(cljs.core.truth_((sentinel__459420 === m__459423)))
{return not_found;
} else
{{
var G__459427 = sentinel__459420;
var G__459428 = m__459423;
var G__459429 = cljs.core.next.call(null,ks__459422);
sentinel__459420 = G__459427;
m__459421 = G__459428;
ks__459422 = G__459429;
continue;
}
}
} else
{return m__459421;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__459424.call(this,m,ks);
case  3 :
return get_in__459425.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__459430,v){
var vec__459431__459432 = p__459430;
var k__459433 = cljs.core.nth.call(null,vec__459431__459432,0,null);
var ks__459434 = cljs.core.nthnext.call(null,vec__459431__459432,1);

if(cljs.core.truth_(ks__459434))
{return cljs.core.assoc.call(null,m,k__459433,assoc_in.call(null,cljs.core.get.call(null,m,k__459433),ks__459434,v));
} else
{return cljs.core.assoc.call(null,m,k__459433,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__459435,f,args){
var vec__459436__459437 = p__459435;
var k__459438 = cljs.core.nth.call(null,vec__459436__459437,0,null);
var ks__459439 = cljs.core.nthnext.call(null,vec__459436__459437,1);

if(cljs.core.truth_(ks__459439))
{return cljs.core.assoc.call(null,m,k__459438,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__459438),ks__459439,f,args));
} else
{return cljs.core.assoc.call(null,m,k__459438,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__459438),args));
}
};
var update_in = function (m,p__459435,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__459435, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__459440){
var m = cljs.core.first(arglist__459440);
var p__459435 = cljs.core.first(cljs.core.next(arglist__459440));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459440)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459440)));
return update_in__delegate.call(this, m, p__459435, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__459441 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__459468 = null;
var G__459468__459469 = (function (coll,k){
var this__459442 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__459468__459470 = (function (coll,k,not_found){
var this__459443 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__459468 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459468__459469.call(this,coll,k);
case  3 :
return G__459468__459470.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459468;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__459444 = this;
var new_array__459445 = cljs.core.aclone.call(null,this__459444.array);

(new_array__459445[k] = v);
return (new cljs.core.Vector(this__459444.meta,new_array__459445));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__459472 = null;
var G__459472__459473 = (function (coll,k){
var this__459446 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__459472__459474 = (function (coll,k,not_found){
var this__459447 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__459472 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459472__459473.call(this,coll,k);
case  3 :
return G__459472__459474.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459472;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__459448 = this;
var new_array__459449 = cljs.core.aclone.call(null,this__459448.array);

new_array__459449.push(o);
return (new cljs.core.Vector(this__459448.meta,new_array__459449));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__459476 = null;
var G__459476__459477 = (function (v,f){
var this__459450 = this;
return cljs.core.ci_reduce.call(null,this__459450.array,f);
});
var G__459476__459478 = (function (v,f,start){
var this__459451 = this;
return cljs.core.ci_reduce.call(null,this__459451.array,f,start);
});
G__459476 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__459476__459477.call(this,v,f);
case  3 :
return G__459476__459478.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459476;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__459452 = this;
if(cljs.core.truth_((this__459452.array.length > 0)))
{var vector_seq__459453 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__459452.array.length)))
{return cljs.core.cons.call(null,(this__459452.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__459453.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__459454 = this;
return this__459454.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__459455 = this;
var count__459456 = this__459455.array.length;

if(cljs.core.truth_((count__459456 > 0)))
{return (this__459455.array[(count__459456 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__459457 = this;
if(cljs.core.truth_((this__459457.array.length > 0)))
{var new_array__459458 = cljs.core.aclone.call(null,this__459457.array);

new_array__459458.pop();
return (new cljs.core.Vector(this__459457.meta,new_array__459458));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__459459 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__459460 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__459461 = this;
return (new cljs.core.Vector(meta,this__459461.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__459462 = this;
return this__459462.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__459480 = null;
var G__459480__459481 = (function (coll,n){
var this__459463 = this;
if(cljs.core.truth_((function (){var and__3546__auto____459464 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____459464))
{return (n < this__459463.array.length);
} else
{return and__3546__auto____459464;
}
})()))
{return (this__459463.array[n]);
} else
{return null;
}
});
var G__459480__459482 = (function (coll,n,not_found){
var this__459465 = this;
if(cljs.core.truth_((function (){var and__3546__auto____459466 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____459466))
{return (n < this__459465.array.length);
} else
{return and__3546__auto____459466;
}
})()))
{return (this__459465.array[n]);
} else
{return not_found;
}
});
G__459480 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__459480__459481.call(this,coll,n);
case  3 :
return G__459480__459482.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459480;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__459467 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__459467.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__459484){
var args = cljs.core.seq( arglist__459484 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__459485 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__459507 = null;
var G__459507__459508 = (function (coll,k){
var this__459486 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__459507__459509 = (function (coll,k,not_found){
var this__459487 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__459507 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459507__459508.call(this,coll,k);
case  3 :
return G__459507__459509.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459507;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__459488 = this;
var v_pos__459489 = (this__459488.start + key);

return (new cljs.core.Subvec(this__459488.meta,cljs.core._assoc.call(null,this__459488.v,v_pos__459489,val),this__459488.start,((this__459488.end > (v_pos__459489 + 1)) ? this__459488.end : (v_pos__459489 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__459511 = null;
var G__459511__459512 = (function (coll,k){
var this__459490 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__459511__459513 = (function (coll,k,not_found){
var this__459491 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__459511 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459511__459512.call(this,coll,k);
case  3 :
return G__459511__459513.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459511;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__459492 = this;
return (new cljs.core.Subvec(this__459492.meta,cljs.core._assoc_n.call(null,this__459492.v,this__459492.end,o),this__459492.start,(this__459492.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__459515 = null;
var G__459515__459516 = (function (coll,f){
var this__459493 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__459515__459517 = (function (coll,f,start){
var this__459494 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__459515 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__459515__459516.call(this,coll,f);
case  3 :
return G__459515__459517.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459515;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__459495 = this;
var subvec_seq__459496 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__459495.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__459495.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__459496.call(null,this__459495.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__459497 = this;
return (this__459497.end - this__459497.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__459498 = this;
return cljs.core._nth.call(null,this__459498.v,(this__459498.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__459499 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__459499.start,this__459499.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__459499.meta,this__459499.v,this__459499.start,(this__459499.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__459500 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__459501 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__459502 = this;
return (new cljs.core.Subvec(meta,this__459502.v,this__459502.start,this__459502.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__459503 = this;
return this__459503.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__459519 = null;
var G__459519__459520 = (function (coll,n){
var this__459504 = this;
return cljs.core._nth.call(null,this__459504.v,(this__459504.start + n));
});
var G__459519__459521 = (function (coll,n,not_found){
var this__459505 = this;
return cljs.core._nth.call(null,this__459505.v,(this__459505.start + n),not_found);
});
G__459519 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__459519__459520.call(this,coll,n);
case  3 :
return G__459519__459521.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459519;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__459506 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__459506.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__459523 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__459524 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__459523.call(this,v,start);
case  3 :
return subvec__459524.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__459526 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__459527 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__459528 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__459529 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__459529.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__459530 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__459531 = this;
return cljs.core._first.call(null,this__459531.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__459532 = this;
var temp__3695__auto____459533 = cljs.core.next.call(null,this__459532.front);

if(cljs.core.truth_(temp__3695__auto____459533))
{var f1__459534 = temp__3695__auto____459533;

return (new cljs.core.PersistentQueueSeq(this__459532.meta,f1__459534,this__459532.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__459532.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__459532.meta,this__459532.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__459535 = this;
return this__459535.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__459536 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__459536.front,this__459536.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__459537 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__459538 = this;
if(cljs.core.truth_(this__459538.front))
{return (new cljs.core.PersistentQueue(this__459538.meta,(this__459538.count + 1),this__459538.front,cljs.core.conj.call(null,(function (){var or__3548__auto____459539 = this__459538.rear;

if(cljs.core.truth_(or__3548__auto____459539))
{return or__3548__auto____459539;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__459538.meta,(this__459538.count + 1),cljs.core.conj.call(null,this__459538.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__459540 = this;
var rear__459541 = cljs.core.seq.call(null,this__459540.rear);

if(cljs.core.truth_((function (){var or__3548__auto____459542 = this__459540.front;

if(cljs.core.truth_(or__3548__auto____459542))
{return or__3548__auto____459542;
} else
{return rear__459541;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__459540.front,cljs.core.seq.call(null,rear__459541)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__459543 = this;
return this__459543.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__459544 = this;
return cljs.core._first.call(null,this__459544.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__459545 = this;
if(cljs.core.truth_(this__459545.front))
{var temp__3695__auto____459546 = cljs.core.next.call(null,this__459545.front);

if(cljs.core.truth_(temp__3695__auto____459546))
{var f1__459547 = temp__3695__auto____459546;

return (new cljs.core.PersistentQueue(this__459545.meta,(this__459545.count - 1),f1__459547,this__459545.rear));
} else
{return (new cljs.core.PersistentQueue(this__459545.meta,(this__459545.count - 1),cljs.core.seq.call(null,this__459545.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__459548 = this;
return cljs.core.first.call(null,this__459548.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__459549 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__459550 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__459551 = this;
return (new cljs.core.PersistentQueue(meta,this__459551.count,this__459551.front,this__459551.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__459552 = this;
return this__459552.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__459553 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__459554 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__459555 = array.length;

var i__459556 = 0;

while(true){
if(cljs.core.truth_((i__459556 < len__459555)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__459556]))))
{return i__459556;
} else
{{
var G__459557 = (i__459556 + incr);
i__459556 = G__459557;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___459559 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___459560 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____459558 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____459558))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____459558;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___459559.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___459560.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__459563 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__459584 = null;
var G__459584__459585 = (function (coll,k){
var this__459564 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__459584__459586 = (function (coll,k,not_found){
var this__459565 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__459565.strobj,(this__459565.strobj[k]),not_found);
});
G__459584 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459584__459585.call(this,coll,k);
case  3 :
return G__459584__459586.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459584;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__459566 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__459567 = goog.object.clone.call(null,this__459566.strobj);
var overwrite_QMARK___459568 = new_strobj__459567.hasOwnProperty(k);

(new_strobj__459567[k] = v);
if(cljs.core.truth_(overwrite_QMARK___459568))
{return (new cljs.core.ObjMap(this__459566.meta,this__459566.keys,new_strobj__459567));
} else
{var new_keys__459569 = cljs.core.aclone.call(null,this__459566.keys);

new_keys__459569.push(k);
return (new cljs.core.ObjMap(this__459566.meta,new_keys__459569,new_strobj__459567));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__459566.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__459570 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__459570.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__459588 = null;
var G__459588__459589 = (function (coll,k){
var this__459571 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__459588__459590 = (function (coll,k,not_found){
var this__459572 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__459588 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459588__459589.call(this,coll,k);
case  3 :
return G__459588__459590.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459588;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__459573 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__459574 = this;
if(cljs.core.truth_((this__459574.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__459562_SHARP_){
return cljs.core.vector.call(null,p1__459562_SHARP_,(this__459574.strobj[p1__459562_SHARP_]));
}),this__459574.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__459575 = this;
return this__459575.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__459576 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__459577 = this;
return (new cljs.core.ObjMap(meta,this__459577.keys,this__459577.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__459578 = this;
return this__459578.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__459579 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__459579.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__459580 = this;
if(cljs.core.truth_((function (){var and__3546__auto____459581 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____459581))
{return this__459580.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____459581;
}
})()))
{var new_keys__459582 = cljs.core.aclone.call(null,this__459580.keys);
var new_strobj__459583 = goog.object.clone.call(null,this__459580.strobj);

new_keys__459582.splice(cljs.core.scan_array.call(null,1,k,new_keys__459582),1);
cljs.core.js_delete.call(null,new_strobj__459583,k);
return (new cljs.core.ObjMap(this__459580.meta,new_keys__459582,new_strobj__459583));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__459593 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__459625 = null;
var G__459625__459626 = (function (coll,k){
var this__459594 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__459625__459627 = (function (coll,k,not_found){
var this__459595 = this;
var bucket__459596 = (this__459595.hashobj[cljs.core.hash.call(null,k)]);
var i__459597 = (cljs.core.truth_(bucket__459596)?cljs.core.scan_array.call(null,2,k,bucket__459596):null);

if(cljs.core.truth_(i__459597))
{return (bucket__459596[(i__459597 + 1)]);
} else
{return not_found;
}
});
G__459625 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459625__459626.call(this,coll,k);
case  3 :
return G__459625__459627.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459625;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__459598 = this;
var h__459599 = cljs.core.hash.call(null,k);
var bucket__459600 = (this__459598.hashobj[h__459599]);

if(cljs.core.truth_(bucket__459600))
{var new_bucket__459601 = cljs.core.aclone.call(null,bucket__459600);
var new_hashobj__459602 = goog.object.clone.call(null,this__459598.hashobj);

(new_hashobj__459602[h__459599] = new_bucket__459601);
var temp__3695__auto____459603 = cljs.core.scan_array.call(null,2,k,new_bucket__459601);

if(cljs.core.truth_(temp__3695__auto____459603))
{var i__459604 = temp__3695__auto____459603;

(new_bucket__459601[(i__459604 + 1)] = v);
return (new cljs.core.HashMap(this__459598.meta,this__459598.count,new_hashobj__459602));
} else
{new_bucket__459601.push(k,v);
return (new cljs.core.HashMap(this__459598.meta,(this__459598.count + 1),new_hashobj__459602));
}
} else
{var new_hashobj__459605 = goog.object.clone.call(null,this__459598.hashobj);

(new_hashobj__459605[h__459599] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__459598.meta,(this__459598.count + 1),new_hashobj__459605));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__459606 = this;
var bucket__459607 = (this__459606.hashobj[cljs.core.hash.call(null,k)]);
var i__459608 = (cljs.core.truth_(bucket__459607)?cljs.core.scan_array.call(null,2,k,bucket__459607):null);

if(cljs.core.truth_(i__459608))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__459629 = null;
var G__459629__459630 = (function (coll,k){
var this__459609 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__459629__459631 = (function (coll,k,not_found){
var this__459610 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__459629 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459629__459630.call(this,coll,k);
case  3 :
return G__459629__459631.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459629;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__459611 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__459612 = this;
if(cljs.core.truth_((this__459612.count > 0)))
{var hashes__459613 = cljs.core.js_keys.call(null,this__459612.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__459592_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__459612.hashobj[p1__459592_SHARP_])));
}),hashes__459613);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__459614 = this;
return this__459614.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__459615 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__459616 = this;
return (new cljs.core.HashMap(meta,this__459616.count,this__459616.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__459617 = this;
return this__459617.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__459618 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__459618.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__459619 = this;
var h__459620 = cljs.core.hash.call(null,k);
var bucket__459621 = (this__459619.hashobj[h__459620]);
var i__459622 = (cljs.core.truth_(bucket__459621)?cljs.core.scan_array.call(null,2,k,bucket__459621):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__459622)))
{return coll;
} else
{var new_hashobj__459623 = goog.object.clone.call(null,this__459619.hashobj);

if(cljs.core.truth_((3 > bucket__459621.length)))
{cljs.core.js_delete.call(null,new_hashobj__459623,h__459620);
} else
{var new_bucket__459624 = cljs.core.aclone.call(null,bucket__459621);

new_bucket__459624.splice(i__459622,2);
(new_hashobj__459623[h__459620] = new_bucket__459624);
}
return (new cljs.core.HashMap(this__459619.meta,(this__459619.count - 1),new_hashobj__459623));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__459633 = ks.length;

var i__459634 = 0;
var out__459635 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__459634 < len__459633)))
{{
var G__459636 = (i__459634 + 1);
var G__459637 = cljs.core.assoc.call(null,out__459635,(ks[i__459634]),(vs[i__459634]));
i__459634 = G__459636;
out__459635 = G__459637;
continue;
}
} else
{return out__459635;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__459638 = cljs.core.seq.call(null,keyvals);
var out__459639 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__459638))
{{
var G__459640 = cljs.core.nnext.call(null,in$__459638);
var G__459641 = cljs.core.assoc.call(null,out__459639,cljs.core.first.call(null,in$__459638),cljs.core.second.call(null,in$__459638));
in$__459638 = G__459640;
out__459639 = G__459641;
continue;
}
} else
{return out__459639;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__459642){
var keyvals = cljs.core.seq( arglist__459642 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__459643_SHARP_,p2__459644_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____459645 = p1__459643_SHARP_;

if(cljs.core.truth_(or__3548__auto____459645))
{return or__3548__auto____459645;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__459644_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__459646){
var maps = cljs.core.seq( arglist__459646 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__459649 = (function (m,e){
var k__459647 = cljs.core.first.call(null,e);
var v__459648 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__459647)))
{return cljs.core.assoc.call(null,m,k__459647,f.call(null,cljs.core.get.call(null,m,k__459647),v__459648));
} else
{return cljs.core.assoc.call(null,m,k__459647,v__459648);
}
});
var merge2__459651 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__459649,(function (){var or__3548__auto____459650 = m1;

if(cljs.core.truth_(or__3548__auto____459650))
{return or__3548__auto____459650;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__459651,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__459652){
var f = cljs.core.first(arglist__459652);
var maps = cljs.core.rest(arglist__459652);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__459654 = cljs.core.ObjMap.fromObject([],{});
var keys__459655 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__459655))
{var key__459656 = cljs.core.first.call(null,keys__459655);
var entry__459657 = cljs.core.get.call(null,map,key__459656,"﷐'user/not-found");

{
var G__459658 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__459657,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__459654,key__459656,entry__459657):ret__459654);
var G__459659 = cljs.core.next.call(null,keys__459655);
ret__459654 = G__459658;
keys__459655 = G__459659;
continue;
}
} else
{return ret__459654;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__459660 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__459675 = null;
var G__459675__459676 = (function (coll,v){
var this__459661 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__459675__459677 = (function (coll,v,not_found){
var this__459662 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__459662.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__459675 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__459675__459676.call(this,coll,v);
case  3 :
return G__459675__459677.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459675;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__459679 = null;
var G__459679__459680 = (function (coll,k){
var this__459663 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__459679__459681 = (function (coll,k,not_found){
var this__459664 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__459679 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__459679__459680.call(this,coll,k);
case  3 :
return G__459679__459681.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459679;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__459665 = this;
return (new cljs.core.Set(this__459665.meta,cljs.core.assoc.call(null,this__459665.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__459666 = this;
return cljs.core.keys.call(null,this__459666.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__459667 = this;
return (new cljs.core.Set(this__459667.meta,cljs.core.dissoc.call(null,this__459667.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__459668 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__459669 = this;
var and__3546__auto____459670 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____459670))
{var and__3546__auto____459671 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____459671))
{return cljs.core.every_QMARK_.call(null,(function (p1__459653_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__459653_SHARP_);
}),other);
} else
{return and__3546__auto____459671;
}
} else
{return and__3546__auto____459670;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__459672 = this;
return (new cljs.core.Set(meta,this__459672.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__459673 = this;
return this__459673.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__459674 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__459674.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__459684 = cljs.core.seq.call(null,coll);
var out__459685 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__459684))))
{{
var G__459686 = cljs.core.rest.call(null,in$__459684);
var G__459687 = cljs.core.conj.call(null,out__459685,cljs.core.first.call(null,in$__459684));
in$__459684 = G__459686;
out__459685 = G__459687;
continue;
}
} else
{return out__459685;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__459688 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____459689 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____459689))
{var e__459690 = temp__3695__auto____459689;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__459690));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__459688,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__459683_SHARP_){
var temp__3695__auto____459691 = cljs.core.find.call(null,smap,p1__459683_SHARP_);

if(cljs.core.truth_(temp__3695__auto____459691))
{var e__459692 = temp__3695__auto____459691;

return cljs.core.second.call(null,e__459692);
} else
{return p1__459683_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__459700 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__459693,seen){
while(true){
var vec__459694__459695 = p__459693;
var f__459696 = cljs.core.nth.call(null,vec__459694__459695,0,null);
var xs__459697 = vec__459694__459695;

var temp__3698__auto____459698 = cljs.core.seq.call(null,xs__459697);

if(cljs.core.truth_(temp__3698__auto____459698))
{var s__459699 = temp__3698__auto____459698;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__459696)))
{{
var G__459701 = cljs.core.rest.call(null,s__459699);
var G__459702 = seen;
p__459693 = G__459701;
seen = G__459702;
continue;
}
} else
{return cljs.core.cons.call(null,f__459696,step.call(null,cljs.core.rest.call(null,s__459699),cljs.core.conj.call(null,seen,f__459696)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__459700.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__459703 = cljs.core.Vector.fromArray([]);
var s__459704 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__459704)))
{{
var G__459705 = cljs.core.conj.call(null,ret__459703,cljs.core.first.call(null,s__459704));
var G__459706 = cljs.core.next.call(null,s__459704);
ret__459703 = G__459705;
s__459704 = G__459706;
continue;
}
} else
{return cljs.core.seq.call(null,ret__459703);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____459707 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____459707))
{return or__3548__auto____459707;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__459708 = x.lastIndexOf("/");

if(cljs.core.truth_((i__459708 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__459708 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____459709 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____459709))
{return or__3548__auto____459709;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__459710 = x.lastIndexOf("/");

if(cljs.core.truth_((i__459710 > -1)))
{return cljs.core.subs.call(null,x,2,i__459710);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__459713 = cljs.core.ObjMap.fromObject([],{});
var ks__459714 = cljs.core.seq.call(null,keys);
var vs__459715 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____459716 = ks__459714;

if(cljs.core.truth_(and__3546__auto____459716))
{return vs__459715;
} else
{return and__3546__auto____459716;
}
})()))
{{
var G__459717 = cljs.core.assoc.call(null,map__459713,cljs.core.first.call(null,ks__459714),cljs.core.first.call(null,vs__459715));
var G__459718 = cljs.core.next.call(null,ks__459714);
var G__459719 = cljs.core.next.call(null,vs__459715);
map__459713 = G__459717;
ks__459714 = G__459718;
vs__459715 = G__459719;
continue;
}
} else
{return map__459713;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__459722 = (function (k,x){
return x;
});
var max_key__459723 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__459724 = (function() { 
var G__459726__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__459711_SHARP_,p2__459712_SHARP_){
return max_key.call(null,k,p1__459711_SHARP_,p2__459712_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__459726 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459726__delegate.call(this, k, x, y, more);
};
G__459726.cljs$lang$maxFixedArity = 3;
G__459726.cljs$lang$applyTo = (function (arglist__459727){
var k = cljs.core.first(arglist__459727);
var x = cljs.core.first(cljs.core.next(arglist__459727));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459727)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459727)));
return G__459726__delegate.call(this, k, x, y, more);
});
return G__459726;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__459722.call(this,k,x);
case  3 :
return max_key__459723.call(this,k,x,y);
default:
return max_key__459724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__459724.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__459728 = (function (k,x){
return x;
});
var min_key__459729 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__459730 = (function() { 
var G__459732__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__459720_SHARP_,p2__459721_SHARP_){
return min_key.call(null,k,p1__459720_SHARP_,p2__459721_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__459732 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459732__delegate.call(this, k, x, y, more);
};
G__459732.cljs$lang$maxFixedArity = 3;
G__459732.cljs$lang$applyTo = (function (arglist__459733){
var k = cljs.core.first(arglist__459733);
var x = cljs.core.first(cljs.core.next(arglist__459733));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459733)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459733)));
return G__459732__delegate.call(this, k, x, y, more);
});
return G__459732;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__459728.call(this,k,x);
case  3 :
return min_key__459729.call(this,k,x,y);
default:
return min_key__459730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__459730.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__459736 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__459737 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459734 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459734))
{var s__459735 = temp__3698__auto____459734;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__459735),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__459735)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__459736.call(this,n,step);
case  3 :
return partition_all__459737.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459739 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459739))
{var s__459740 = temp__3698__auto____459739;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__459740))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__459740),take_while.call(null,pred,cljs.core.rest.call(null,s__459740)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__459741 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__459742 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__459758 = null;
var G__459758__459759 = (function (rng,f){
var this__459743 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__459758__459760 = (function (rng,f,s){
var this__459744 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__459758 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__459758__459759.call(this,rng,f);
case  3 :
return G__459758__459760.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459758;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__459745 = this;
var comp__459746 = (cljs.core.truth_((this__459745.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__459746.call(null,this__459745.start,this__459745.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__459747 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__459747.end - this__459747.start) / this__459747.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__459748 = this;
return this__459748.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__459749 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__459749.meta,(this__459749.start + this__459749.step),this__459749.end,this__459749.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__459750 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__459751 = this;
return (new cljs.core.Range(meta,this__459751.start,this__459751.end,this__459751.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__459752 = this;
return this__459752.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__459762 = null;
var G__459762__459763 = (function (rng,n){
var this__459753 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__459753.start + (n * this__459753.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____459754 = (this__459753.start > this__459753.end);

if(cljs.core.truth_(and__3546__auto____459754))
{return cljs.core._EQ_.call(null,this__459753.step,0);
} else
{return and__3546__auto____459754;
}
})()))
{return this__459753.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__459762__459764 = (function (rng,n,not_found){
var this__459755 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__459755.start + (n * this__459755.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____459756 = (this__459755.start > this__459755.end);

if(cljs.core.truth_(and__3546__auto____459756))
{return cljs.core._EQ_.call(null,this__459755.step,0);
} else
{return and__3546__auto____459756;
}
})()))
{return this__459755.start;
} else
{return not_found;
}
}
});
G__459762 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__459762__459763.call(this,rng,n);
case  3 :
return G__459762__459764.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__459762;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__459757 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__459757.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__459766 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__459767 = (function (end){
return range.call(null,0,end,1);
});
var range__459768 = (function (start,end){
return range.call(null,start,end,1);
});
var range__459769 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__459766.call(this);
case  1 :
return range__459767.call(this,start);
case  2 :
return range__459768.call(this,start,end);
case  3 :
return range__459769.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459771 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459771))
{var s__459772 = temp__3698__auto____459771;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__459772),take_nth.call(null,n,cljs.core.drop.call(null,n,s__459772)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459774 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459774))
{var s__459775 = temp__3698__auto____459774;

var fst__459776 = cljs.core.first.call(null,s__459775);
var fv__459777 = f.call(null,fst__459776);
var run__459778 = cljs.core.cons.call(null,fst__459776,cljs.core.take_while.call(null,(function (p1__459773_SHARP_){
return cljs.core._EQ_.call(null,fv__459777,f.call(null,p1__459773_SHARP_));
}),cljs.core.next.call(null,s__459775)));

return cljs.core.cons.call(null,run__459778,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__459778),s__459775))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__459793 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____459789 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____459789))
{var s__459790 = temp__3695__auto____459789;

return reductions.call(null,f,cljs.core.first.call(null,s__459790),cljs.core.rest.call(null,s__459790));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__459794 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____459791 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____459791))
{var s__459792 = temp__3698__auto____459791;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__459792)),cljs.core.rest.call(null,s__459792));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__459793.call(this,f,init);
case  3 :
return reductions__459794.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__459797 = (function (f){
return (function() {
var G__459802 = null;
var G__459802__459803 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__459802__459804 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__459802__459805 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__459802__459806 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__459802__459807 = (function() { 
var G__459809__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__459809 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459809__delegate.call(this, x, y, z, args);
};
G__459809.cljs$lang$maxFixedArity = 3;
G__459809.cljs$lang$applyTo = (function (arglist__459810){
var x = cljs.core.first(arglist__459810);
var y = cljs.core.first(cljs.core.next(arglist__459810));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459810)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459810)));
return G__459809__delegate.call(this, x, y, z, args);
});
return G__459809;
})()
;
G__459802 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__459802__459803.call(this);
case  1 :
return G__459802__459804.call(this,x);
case  2 :
return G__459802__459805.call(this,x,y);
case  3 :
return G__459802__459806.call(this,x,y,z);
default:
return G__459802__459807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459802.cljs$lang$maxFixedArity = 3;
G__459802.cljs$lang$applyTo = G__459802__459807.cljs$lang$applyTo;
return G__459802;
})()
});
var juxt__459798 = (function (f,g){
return (function() {
var G__459811 = null;
var G__459811__459812 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__459811__459813 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__459811__459814 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__459811__459815 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__459811__459816 = (function() { 
var G__459818__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__459818 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459818__delegate.call(this, x, y, z, args);
};
G__459818.cljs$lang$maxFixedArity = 3;
G__459818.cljs$lang$applyTo = (function (arglist__459819){
var x = cljs.core.first(arglist__459819);
var y = cljs.core.first(cljs.core.next(arglist__459819));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459819)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459819)));
return G__459818__delegate.call(this, x, y, z, args);
});
return G__459818;
})()
;
G__459811 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__459811__459812.call(this);
case  1 :
return G__459811__459813.call(this,x);
case  2 :
return G__459811__459814.call(this,x,y);
case  3 :
return G__459811__459815.call(this,x,y,z);
default:
return G__459811__459816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459811.cljs$lang$maxFixedArity = 3;
G__459811.cljs$lang$applyTo = G__459811__459816.cljs$lang$applyTo;
return G__459811;
})()
});
var juxt__459799 = (function (f,g,h){
return (function() {
var G__459820 = null;
var G__459820__459821 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__459820__459822 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__459820__459823 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__459820__459824 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__459820__459825 = (function() { 
var G__459827__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__459827 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459827__delegate.call(this, x, y, z, args);
};
G__459827.cljs$lang$maxFixedArity = 3;
G__459827.cljs$lang$applyTo = (function (arglist__459828){
var x = cljs.core.first(arglist__459828);
var y = cljs.core.first(cljs.core.next(arglist__459828));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459828)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459828)));
return G__459827__delegate.call(this, x, y, z, args);
});
return G__459827;
})()
;
G__459820 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__459820__459821.call(this);
case  1 :
return G__459820__459822.call(this,x);
case  2 :
return G__459820__459823.call(this,x,y);
case  3 :
return G__459820__459824.call(this,x,y,z);
default:
return G__459820__459825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459820.cljs$lang$maxFixedArity = 3;
G__459820.cljs$lang$applyTo = G__459820__459825.cljs$lang$applyTo;
return G__459820;
})()
});
var juxt__459800 = (function() { 
var G__459829__delegate = function (f,g,h,fs){
var fs__459796 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__459830 = null;
var G__459830__459831 = (function (){
return cljs.core.reduce.call(null,(function (p1__459779_SHARP_,p2__459780_SHARP_){
return cljs.core.conj.call(null,p1__459779_SHARP_,p2__459780_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__459796);
});
var G__459830__459832 = (function (x){
return cljs.core.reduce.call(null,(function (p1__459781_SHARP_,p2__459782_SHARP_){
return cljs.core.conj.call(null,p1__459781_SHARP_,p2__459782_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__459796);
});
var G__459830__459833 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__459783_SHARP_,p2__459784_SHARP_){
return cljs.core.conj.call(null,p1__459783_SHARP_,p2__459784_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__459796);
});
var G__459830__459834 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__459785_SHARP_,p2__459786_SHARP_){
return cljs.core.conj.call(null,p1__459785_SHARP_,p2__459786_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__459796);
});
var G__459830__459835 = (function() { 
var G__459837__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__459787_SHARP_,p2__459788_SHARP_){
return cljs.core.conj.call(null,p1__459787_SHARP_,cljs.core.apply.call(null,p2__459788_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__459796);
};
var G__459837 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459837__delegate.call(this, x, y, z, args);
};
G__459837.cljs$lang$maxFixedArity = 3;
G__459837.cljs$lang$applyTo = (function (arglist__459838){
var x = cljs.core.first(arglist__459838);
var y = cljs.core.first(cljs.core.next(arglist__459838));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459838)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459838)));
return G__459837__delegate.call(this, x, y, z, args);
});
return G__459837;
})()
;
G__459830 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__459830__459831.call(this);
case  1 :
return G__459830__459832.call(this,x);
case  2 :
return G__459830__459833.call(this,x,y);
case  3 :
return G__459830__459834.call(this,x,y,z);
default:
return G__459830__459835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__459830.cljs$lang$maxFixedArity = 3;
G__459830.cljs$lang$applyTo = G__459830__459835.cljs$lang$applyTo;
return G__459830;
})()
};
var G__459829 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__459829__delegate.call(this, f, g, h, fs);
};
G__459829.cljs$lang$maxFixedArity = 3;
G__459829.cljs$lang$applyTo = (function (arglist__459839){
var f = cljs.core.first(arglist__459839);
var g = cljs.core.first(cljs.core.next(arglist__459839));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459839)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__459839)));
return G__459829__delegate.call(this, f, g, h, fs);
});
return G__459829;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__459797.call(this,f);
case  2 :
return juxt__459798.call(this,f,g);
case  3 :
return juxt__459799.call(this,f,g,h);
default:
return juxt__459800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__459800.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__459841 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__459844 = cljs.core.next.call(null,coll);
coll = G__459844;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__459842 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____459840 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____459840))
{return (n > 0);
} else
{return and__3546__auto____459840;
}
})()))
{{
var G__459845 = (n - 1);
var G__459846 = cljs.core.next.call(null,coll);
n = G__459845;
coll = G__459846;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__459841.call(this,n);
case  2 :
return dorun__459842.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__459847 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__459848 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__459847.call(this,n);
case  2 :
return doall__459848.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__459850 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__459850),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__459850),1)))
{return cljs.core.first.call(null,matches__459850);
} else
{return cljs.core.vec.call(null,matches__459850);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__459851 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__459851)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__459851),1)))
{return cljs.core.first.call(null,matches__459851);
} else
{return cljs.core.vec.call(null,matches__459851);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__459852 = cljs.core.re_find.call(null,re,s);
var match_idx__459853 = s.search(re);
var match_str__459854 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__459852))?cljs.core.first.call(null,match_data__459852):match_data__459852);
var post_match__459855 = cljs.core.subs.call(null,s,(match_idx__459853 + cljs.core.count.call(null,match_str__459854)));

if(cljs.core.truth_(match_data__459852))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__459852,re_seq.call(null,re,post_match__459855));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__459856_SHARP_){
return print_one.call(null,p1__459856_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____459857 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____459857))
{var and__3546__auto____459861 = (function (){var x__445__auto____459858 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____459859 = x__445__auto____459858;

if(cljs.core.truth_(and__3546__auto____459859))
{var and__3546__auto____459860 = x__445__auto____459858.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____459860))
{return cljs.core.not.call(null,x__445__auto____459858.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____459860;
}
} else
{return and__3546__auto____459859;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____459858);
}
})();

if(cljs.core.truth_(and__3546__auto____459861))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____459861;
}
} else
{return and__3546__auto____459857;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____459862 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____459863 = x__445__auto____459862;

if(cljs.core.truth_(and__3546__auto____459863))
{var and__3546__auto____459864 = x__445__auto____459862.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____459864))
{return cljs.core.not.call(null,x__445__auto____459862.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____459864;
}
} else
{return and__3546__auto____459863;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____459862);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__459865 = cljs.core.first.call(null,objs);
var sb__459866 = (new goog.string.StringBuffer());

var G__459867__459868 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__459867__459868))
{var obj__459869 = cljs.core.first.call(null,G__459867__459868);
var G__459867__459870 = G__459867__459868;

while(true){
if(cljs.core.truth_((obj__459869 === first_obj__459865)))
{} else
{sb__459866.append(" ");
}
var G__459871__459872 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__459869,opts));

if(cljs.core.truth_(G__459871__459872))
{var string__459873 = cljs.core.first.call(null,G__459871__459872);
var G__459871__459874 = G__459871__459872;

while(true){
sb__459866.append(string__459873);
var temp__3698__auto____459875 = cljs.core.next.call(null,G__459871__459874);

if(cljs.core.truth_(temp__3698__auto____459875))
{var G__459871__459876 = temp__3698__auto____459875;

{
var G__459879 = cljs.core.first.call(null,G__459871__459876);
var G__459880 = G__459871__459876;
string__459873 = G__459879;
G__459871__459874 = G__459880;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____459877 = cljs.core.next.call(null,G__459867__459870);

if(cljs.core.truth_(temp__3698__auto____459877))
{var G__459867__459878 = temp__3698__auto____459877;

{
var G__459881 = cljs.core.first.call(null,G__459867__459878);
var G__459882 = G__459867__459878;
obj__459869 = G__459881;
G__459867__459870 = G__459882;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__459866);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__459883 = cljs.core.first.call(null,objs);

var G__459884__459885 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__459884__459885))
{var obj__459886 = cljs.core.first.call(null,G__459884__459885);
var G__459884__459887 = G__459884__459885;

while(true){
if(cljs.core.truth_((obj__459886 === first_obj__459883)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__459888__459889 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__459886,opts));

if(cljs.core.truth_(G__459888__459889))
{var string__459890 = cljs.core.first.call(null,G__459888__459889);
var G__459888__459891 = G__459888__459889;

while(true){
cljs.core.string_print.call(null,string__459890);
var temp__3698__auto____459892 = cljs.core.next.call(null,G__459888__459891);

if(cljs.core.truth_(temp__3698__auto____459892))
{var G__459888__459893 = temp__3698__auto____459892;

{
var G__459896 = cljs.core.first.call(null,G__459888__459893);
var G__459897 = G__459888__459893;
string__459890 = G__459896;
G__459888__459891 = G__459897;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____459894 = cljs.core.next.call(null,G__459884__459887);

if(cljs.core.truth_(temp__3698__auto____459894))
{var G__459884__459895 = temp__3698__auto____459894;

{
var G__459898 = cljs.core.first.call(null,G__459884__459895);
var G__459899 = G__459884__459895;
obj__459886 = G__459898;
G__459884__459887 = G__459899;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__459900){
var objs = cljs.core.seq( arglist__459900 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__459901){
var objs = cljs.core.seq( arglist__459901 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__459902){
var objs = cljs.core.seq( arglist__459902 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__459903){
var objs = cljs.core.seq( arglist__459903 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__459904){
var objs = cljs.core.seq( arglist__459904 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__459905 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__459905,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____459906 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____459906))
{var nspc__459907 = temp__3698__auto____459906;

return cljs.core.str.call(null,nspc__459907,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____459908 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____459908))
{var nspc__459909 = temp__3698__auto____459908;

return cljs.core.str.call(null,nspc__459909,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__459910 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__459910,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__459911 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__459912 = this;
var G__459913__459914 = cljs.core.seq.call(null,this__459912.watches);

if(cljs.core.truth_(G__459913__459914))
{var G__459916__459918 = cljs.core.first.call(null,G__459913__459914);
var vec__459917__459919 = G__459916__459918;
var key__459920 = cljs.core.nth.call(null,vec__459917__459919,0,null);
var f__459921 = cljs.core.nth.call(null,vec__459917__459919,1,null);
var G__459913__459922 = G__459913__459914;

var G__459916__459923 = G__459916__459918;
var G__459913__459924 = G__459913__459922;

while(true){
var vec__459925__459926 = G__459916__459923;
var key__459927 = cljs.core.nth.call(null,vec__459925__459926,0,null);
var f__459928 = cljs.core.nth.call(null,vec__459925__459926,1,null);
var G__459913__459929 = G__459913__459924;

f__459928.call(null,key__459927,this$,oldval,newval);
var temp__3698__auto____459930 = cljs.core.next.call(null,G__459913__459929);

if(cljs.core.truth_(temp__3698__auto____459930))
{var G__459913__459931 = temp__3698__auto____459930;

{
var G__459938 = cljs.core.first.call(null,G__459913__459931);
var G__459939 = G__459913__459931;
G__459916__459923 = G__459938;
G__459913__459924 = G__459939;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__459932 = this;
return this$.watches = cljs.core.assoc.call(null,this__459932.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__459933 = this;
return this$.watches = cljs.core.dissoc.call(null,this__459933.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__459934 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__459934.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__459935 = this;
return this__459935.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__459936 = this;
return this__459936.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__459937 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__459946 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__459947 = (function() { 
var G__459949__delegate = function (x,p__459940){
var map__459941__459942 = p__459940;
var map__459941__459943 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__459941__459942))?cljs.core.apply.call(null,cljs.core.hash_map,map__459941__459942):map__459941__459942);
var validator__459944 = cljs.core.get.call(null,map__459941__459943,"﷐'validator");
var meta__459945 = cljs.core.get.call(null,map__459941__459943,"﷐'meta");

return (new cljs.core.Atom(x,meta__459945,validator__459944,null));
};
var G__459949 = function (x,var_args){
var p__459940 = null;
if (goog.isDef(var_args)) {
  p__459940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__459949__delegate.call(this, x, p__459940);
};
G__459949.cljs$lang$maxFixedArity = 1;
G__459949.cljs$lang$applyTo = (function (arglist__459950){
var x = cljs.core.first(arglist__459950);
var p__459940 = cljs.core.rest(arglist__459950);
return G__459949__delegate.call(this, x, p__459940);
});
return G__459949;
})()
;
atom = function(x,var_args){
var p__459940 = var_args;
switch(arguments.length){
case  1 :
return atom__459946.call(this,x);
default:
return atom__459947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__459947.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____459951 = a.validator;

if(cljs.core.truth_(temp__3698__auto____459951))
{var validate__459952 = temp__3698__auto____459951;

if(cljs.core.truth_(validate__459952.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__459953 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__459953,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___459954 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___459955 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___459956 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___459957 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___459958 = (function() { 
var G__459960__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__459960 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__459960__delegate.call(this, a, f, x, y, z, more);
};
G__459960.cljs$lang$maxFixedArity = 5;
G__459960.cljs$lang$applyTo = (function (arglist__459961){
var a = cljs.core.first(arglist__459961);
var f = cljs.core.first(cljs.core.next(arglist__459961));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__459961)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459961))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459961)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__459961)))));
return G__459960__delegate.call(this, a, f, x, y, z, more);
});
return G__459960;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___459954.call(this,a,f);
case  3 :
return swap_BANG___459955.call(this,a,f,x);
case  4 :
return swap_BANG___459956.call(this,a,f,x,y);
case  5 :
return swap_BANG___459957.call(this,a,f,x,y,z);
default:
return swap_BANG___459958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___459958.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__459962){
var iref = cljs.core.first(arglist__459962);
var f = cljs.core.first(cljs.core.next(arglist__459962));
var args = cljs.core.rest(cljs.core.next(arglist__459962));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__459963 = (function (){
return gensym.call(null,"G__");
});
var gensym__459964 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__459963.call(this);
case  1 :
return gensym__459964.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__459966 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__459966.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__459967 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__459967.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__459967.state,this__459967.f);
}
return cljs.core.deref.call(null,this__459967.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__459968){
var body = cljs.core.seq( arglist__459968 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__459969__459970 = options;
var map__459969__459971 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__459969__459970))?cljs.core.apply.call(null,cljs.core.hash_map,map__459969__459970):map__459969__459970);
var keywordize_keys__459972 = cljs.core.get.call(null,map__459969__459971,"﷐'keywordize-keys");
var keyfn__459973 = (cljs.core.truth_(keywordize_keys__459972)?cljs.core.keyword:cljs.core.str);
var f__459979 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____459978 = (function iter__459974(s__459975){
return (new cljs.core.LazySeq(null,false,(function (){
var s__459975__459976 = s__459975;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__459975__459976)))
{var k__459977 = cljs.core.first.call(null,s__459975__459976);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__459973.call(null,k__459977),thisfn.call(null,(x[k__459977]))]),iter__459974.call(null,cljs.core.rest.call(null,s__459975__459976)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____459978.call(null,cljs.core.js_keys.call(null,x));
})());
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

return f__459979.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__459980){
var x = cljs.core.first(arglist__459980);
var options = cljs.core.rest(arglist__459980);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__459981 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__459985__delegate = function (args){
var temp__3695__auto____459982 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__459981),args);

if(cljs.core.truth_(temp__3695__auto____459982))
{var v__459983 = temp__3695__auto____459982;

return v__459983;
} else
{var ret__459984 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__459981,cljs.core.assoc,args,ret__459984);
return ret__459984;
}
};
var G__459985 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__459985__delegate.call(this, args);
};
G__459985.cljs$lang$maxFixedArity = 0;
G__459985.cljs$lang$applyTo = (function (arglist__459986){
var args = cljs.core.seq( arglist__459986 );;
return G__459985__delegate.call(this, args);
});
return G__459985;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__459988 = (function (f){
while(true){
var ret__459987 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__459987)))
{{
var G__459991 = ret__459987;
f = G__459991;
continue;
}
} else
{return ret__459987;
}
break;
}
});
var trampoline__459989 = (function() { 
var G__459992__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__459992 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__459992__delegate.call(this, f, args);
};
G__459992.cljs$lang$maxFixedArity = 1;
G__459992.cljs$lang$applyTo = (function (arglist__459993){
var f = cljs.core.first(arglist__459993);
var args = cljs.core.rest(arglist__459993);
return G__459992__delegate.call(this, f, args);
});
return G__459992;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__459988.call(this,f);
default:
return trampoline__459989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__459989.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__459994 = (function (){
return rand.call(null,1);
});
var rand__459995 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__459994.call(this);
case  1 :
return rand__459995.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__459997 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__459997,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__459997,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___460006 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___460007 = (function (h,child,parent){
var or__3548__auto____459998 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____459998))
{return or__3548__auto____459998;
} else
{var or__3548__auto____459999 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____459999))
{return or__3548__auto____459999;
} else
{var and__3546__auto____460000 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____460000))
{var and__3546__auto____460001 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____460001))
{var and__3546__auto____460002 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____460002))
{var ret__460003 = true;
var i__460004 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____460005 = cljs.core.not.call(null,ret__460003);

if(cljs.core.truth_(or__3548__auto____460005))
{return or__3548__auto____460005;
} else
{return cljs.core._EQ_.call(null,i__460004,cljs.core.count.call(null,parent));
}
})()))
{return ret__460003;
} else
{{
var G__460009 = isa_QMARK_.call(null,h,child.call(null,i__460004),parent.call(null,i__460004));
var G__460010 = (i__460004 + 1);
ret__460003 = G__460009;
i__460004 = G__460010;
continue;
}
}
break;
}
} else
{return and__3546__auto____460002;
}
} else
{return and__3546__auto____460001;
}
} else
{return and__3546__auto____460000;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___460006.call(this,h,child);
case  3 :
return isa_QMARK___460007.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__460011 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__460012 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__460011.call(this,h);
case  2 :
return parents__460012.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__460014 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__460015 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__460014.call(this,h);
case  2 :
return ancestors__460015.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__460017 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__460018 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__460017.call(this,h);
case  2 :
return descendants__460018.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__460028 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__460029 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__460023 = "﷐'parents".call(null,h);
var td__460024 = "﷐'descendants".call(null,h);
var ta__460025 = "﷐'ancestors".call(null,h);
var tf__460026 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____460027 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__460023.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__460025.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__460025.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__460023,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__460026.call(null,"﷐'ancestors".call(null,h),tag,td__460024,parent,ta__460025),"﷐'descendants":tf__460026.call(null,"﷐'descendants".call(null,h),parent,ta__460025,tag,td__460024)});
})());

if(cljs.core.truth_(or__3548__auto____460027))
{return or__3548__auto____460027;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__460028.call(this,h,tag);
case  3 :
return derive__460029.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__460035 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__460036 = (function (h,tag,parent){
var parentMap__460031 = "﷐'parents".call(null,h);
var childsParents__460032 = (cljs.core.truth_(parentMap__460031.call(null,tag))?cljs.core.disj.call(null,parentMap__460031.call(null,tag),parent):cljs.core.set([]));
var newParents__460033 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__460032))?cljs.core.assoc.call(null,parentMap__460031,tag,childsParents__460032):cljs.core.dissoc.call(null,parentMap__460031,tag));
var deriv_seq__460034 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__460020_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__460020_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__460020_SHARP_),cljs.core.second.call(null,p1__460020_SHARP_)));
}),cljs.core.seq.call(null,newParents__460033)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__460031.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__460021_SHARP_,p2__460022_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__460021_SHARP_,p2__460022_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__460034));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__460035.call(this,h,tag);
case  3 :
return underive__460036.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__460038 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____460040 = (cljs.core.truth_((function (){var and__3546__auto____460039 = xprefs__460038;

if(cljs.core.truth_(and__3546__auto____460039))
{return xprefs__460038.call(null,y);
} else
{return and__3546__auto____460039;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____460040))
{return or__3548__auto____460040;
} else
{var or__3548__auto____460042 = (function (){var ps__460041 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__460041) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__460041),prefer_table)))
{} else
{}
{
var G__460045 = cljs.core.rest.call(null,ps__460041);
ps__460041 = G__460045;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____460042))
{return or__3548__auto____460042;
} else
{var or__3548__auto____460044 = (function (){var ps__460043 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__460043) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__460043),y,prefer_table)))
{} else
{}
{
var G__460046 = cljs.core.rest.call(null,ps__460043);
ps__460043 = G__460046;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____460044))
{return or__3548__auto____460044;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____460047 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____460047))
{return or__3548__auto____460047;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__460056 = cljs.core.reduce.call(null,(function (be,p__460048){
var vec__460049__460050 = p__460048;
var k__460051 = cljs.core.nth.call(null,vec__460049__460050,0,null);
var ___460052 = cljs.core.nth.call(null,vec__460049__460050,1,null);
var e__460053 = vec__460049__460050;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__460051)))
{var be2__460055 = (cljs.core.truth_((function (){var or__3548__auto____460054 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____460054))
{return or__3548__auto____460054;
} else
{return cljs.core.dominates.call(null,k__460051,cljs.core.first.call(null,be),prefer_table);
}
})())?e__460053:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__460055),k__460051,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__460051," and ",cljs.core.first.call(null,be2__460055),", and neither is preferred")));
}
return be2__460055;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__460056))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__460056));
return cljs.core.second.call(null,best_entry__460056);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____460057 = mf;

if(cljs.core.truth_(and__3546__auto____460057))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____460057;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____460058 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____460058))
{return or__3548__auto____460058;
} else
{var or__3548__auto____460059 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____460059))
{return or__3548__auto____460059;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____460060 = mf;

if(cljs.core.truth_(and__3546__auto____460060))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____460060;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____460061 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____460061))
{return or__3548__auto____460061;
} else
{var or__3548__auto____460062 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____460062))
{return or__3548__auto____460062;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____460063 = mf;

if(cljs.core.truth_(and__3546__auto____460063))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____460063;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____460064 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____460064))
{return or__3548__auto____460064;
} else
{var or__3548__auto____460065 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____460065))
{return or__3548__auto____460065;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____460066 = mf;

if(cljs.core.truth_(and__3546__auto____460066))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____460066;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____460067 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____460067))
{return or__3548__auto____460067;
} else
{var or__3548__auto____460068 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____460068))
{return or__3548__auto____460068;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____460069 = mf;

if(cljs.core.truth_(and__3546__auto____460069))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____460069;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____460070 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____460070))
{return or__3548__auto____460070;
} else
{var or__3548__auto____460071 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____460071))
{return or__3548__auto____460071;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____460072 = mf;

if(cljs.core.truth_(and__3546__auto____460072))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____460072;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____460073 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____460073))
{return or__3548__auto____460073;
} else
{var or__3548__auto____460074 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____460074))
{return or__3548__auto____460074;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____460075 = mf;

if(cljs.core.truth_(and__3546__auto____460075))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____460075;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____460076 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____460076))
{return or__3548__auto____460076;
} else
{var or__3548__auto____460077 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____460077))
{return or__3548__auto____460077;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____460078 = mf;

if(cljs.core.truth_(and__3546__auto____460078))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____460078;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____460079 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____460079))
{return or__3548__auto____460079;
} else
{var or__3548__auto____460080 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____460080))
{return or__3548__auto____460080;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__460081 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__460082 = cljs.core._get_method.call(null,mf,dispatch_val__460081);

if(cljs.core.truth_(target_fn__460082))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__460081)));
}
return cljs.core.apply.call(null,target_fn__460082,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__460083 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__460084 = this;
cljs.core.swap_BANG_.call(null,this__460084.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__460084.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__460084.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__460084.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__460085 = this;
cljs.core.swap_BANG_.call(null,this__460085.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__460085.method_cache,this__460085.method_table,this__460085.cached_hierarchy,this__460085.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__460086 = this;
cljs.core.swap_BANG_.call(null,this__460086.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__460086.method_cache,this__460086.method_table,this__460086.cached_hierarchy,this__460086.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__460087 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__460087.cached_hierarchy),cljs.core.deref.call(null,this__460087.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__460087.method_cache,this__460087.method_table,this__460087.cached_hierarchy,this__460087.hierarchy);
}
var temp__3695__auto____460088 = cljs.core.deref.call(null,this__460087.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____460088))
{var target_fn__460089 = temp__3695__auto____460088;

return target_fn__460089;
} else
{var temp__3695__auto____460090 = cljs.core.find_and_cache_best_method.call(null,this__460087.name,dispatch_val,this__460087.hierarchy,this__460087.method_table,this__460087.prefer_table,this__460087.method_cache,this__460087.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____460090))
{var target_fn__460091 = temp__3695__auto____460090;

return target_fn__460091;
} else
{return cljs.core.deref.call(null,this__460087.method_table).call(null,this__460087.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__460092 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__460092.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__460092.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__460092.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__460092.method_cache,this__460092.method_table,this__460092.cached_hierarchy,this__460092.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__460093 = this;
return cljs.core.deref.call(null,this__460093.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__460094 = this;
return cljs.core.deref.call(null,this__460094.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__460095 = this;
return cljs.core.do_dispatch.call(null,mf,this__460095.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__460096__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__460096 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__460096__delegate.call(this, _, args);
};
G__460096.cljs$lang$maxFixedArity = 1;
G__460096.cljs$lang$applyTo = (function (arglist__460097){
var _ = cljs.core.first(arglist__460097);
var args = cljs.core.rest(arglist__460097);
return G__460096__delegate.call(this, _, args);
});
return G__460096;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
