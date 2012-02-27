goog.provide('monet.geometry');
goog.require('cljs.core');
monet.geometry.distance = (function distance(origin,target){
var dx__460325 = ("﷐'x".call(null,target) - "﷐'x".call(null,origin));
var dy__460326 = ("﷐'y".call(null,target) - "﷐'y".call(null,origin));
var dir_x__460327 = (cljs.core.truth_(cljs.core._EQ_.call(null,0,dx__460325))?dx__460325:(dx__460325 / Math.abs.call(null,dx__460325)));
var dir_y__460328 = (cljs.core.truth_(cljs.core._EQ_.call(null,0,dy__460326))?dy__460326:(dy__460326 / Math.abs.call(null,dy__460326)));
var dist__460329 = Math.sqrt.call(null,(Math.pow.call(null,dx__460325,2) + Math.pow.call(null,dy__460326,2)));

return cljs.core.ObjMap.fromObject(["﷐'delta","﷐'dir","﷐'dist"],{"﷐'delta":cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":dx__460325,"﷐'y":dy__460326}),"﷐'dir":cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":dir_x__460327,"﷐'y":dir_y__460328}),"﷐'dist":dist__460329});
});
monet.geometry.bottom_right = (function bottom_right(p__460330){
var map__460331__460332 = p__460330;
var map__460331__460333 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__460331__460332))?cljs.core.apply.call(null,cljs.core.hash_map,map__460331__460332):map__460331__460332);
var r__460334 = cljs.core.get.call(null,map__460331__460333,"﷐'r");
var h__460335 = cljs.core.get.call(null,map__460331__460333,"﷐'h");
var w__460336 = cljs.core.get.call(null,map__460331__460333,"﷐'w");
var y__460337 = cljs.core.get.call(null,map__460331__460333,"﷐'y");
var x__460338 = cljs.core.get.call(null,map__460331__460333,"﷐'x");

if(cljs.core.truth_(r__460334))
{return cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":(x__460338 + r__460334),"﷐'y":(y__460337 + r__460334)});
} else
{return cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":(x__460338 + w__460336),"﷐'y":(y__460337 + h__460335)});
}
});
monet.geometry.top_left = (function top_left(p__460339){
var map__460340__460341 = p__460339;
var map__460340__460342 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__460340__460341))?cljs.core.apply.call(null,cljs.core.hash_map,map__460340__460341):map__460340__460341);
var r__460343 = cljs.core.get.call(null,map__460340__460342,"﷐'r");
var y__460344 = cljs.core.get.call(null,map__460340__460342,"﷐'y");
var x__460345 = cljs.core.get.call(null,map__460340__460342,"﷐'x");

if(cljs.core.truth_(r__460343))
{return cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":(x__460345 - r__460343),"﷐'y":(y__460344 - r__460343)});
} else
{return cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":x__460345,"﷐'y":y__460344});
}
});
monet.geometry.in_radius_QMARK_ = (function in_radius_QMARK_(origin,obj,radius){
var map__460346__460347 = monet.geometry.distance.call(null,origin,obj);
var map__460346__460348 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__460346__460347))?cljs.core.apply.call(null,cljs.core.hash_map,map__460346__460347):map__460346__460347);
var dist__460349 = cljs.core.get.call(null,map__460346__460348,"﷐'dist");

return (dist__460349 < radius);
});
monet.geometry.collision_QMARK_ = (function collision_QMARK_(obj,obj2){
var br__460350 = monet.geometry.bottom_right.call(null,obj);
var tl__460351 = monet.geometry.top_left.call(null,obj);
var br2__460352 = monet.geometry.bottom_right.call(null,obj2);
var tl2__460353 = monet.geometry.top_left.call(null,obj2);

var and__3546__auto____460355 = (function (){var and__3546__auto____460354 = ("﷐'y".call(null,tl__460351) < "﷐'y".call(null,br2__460352));

if(cljs.core.truth_(and__3546__auto____460354))
{return ("﷐'y".call(null,tl2__460353) < "﷐'y".call(null,br__460350));
} else
{return and__3546__auto____460354;
}
})();

if(cljs.core.truth_(and__3546__auto____460355))
{var and__3546__auto____460356 = ("﷐'x".call(null,tl__460351) < "﷐'x".call(null,br2__460352));

if(cljs.core.truth_(and__3546__auto____460356))
{return ("﷐'x".call(null,tl2__460353) < "﷐'x".call(null,br__460350));
} else
{return and__3546__auto____460356;
}
} else
{return and__3546__auto____460355;
}
});
monet.geometry.contained_QMARK_ = (function contained_QMARK_(container,obj){
var cbr__460357 = monet.geometry.bottom_right.call(null,container);
var ctl__460358 = monet.geometry.top_left.call(null,container);
var br__460359 = monet.geometry.bottom_right.call(null,obj);
var tl__460360 = monet.geometry.top_left.call(null,obj);

var and__3546__auto____460362 = (function (){var and__3546__auto____460361 = ("﷐'x".call(null,ctl__460358) < "﷐'x".call(null,tl__460360));

if(cljs.core.truth_(and__3546__auto____460361))
{return ("﷐'y".call(null,ctl__460358) < "﷐'y".call(null,tl__460360));
} else
{return and__3546__auto____460361;
}
})();

if(cljs.core.truth_(and__3546__auto____460362))
{var and__3546__auto____460363 = ("﷐'x".call(null,cbr__460357) > "﷐'x".call(null,br__460359));

if(cljs.core.truth_(and__3546__auto____460363))
{return ("﷐'y".call(null,cbr__460357) > "﷐'y".call(null,br__460359));
} else
{return and__3546__auto____460363;
}
} else
{return and__3546__auto____460362;
}
});
monet.geometry.in_bounds_QMARK_ = (function in_bounds_QMARK_(obj,x2,y2){
var br__460364 = monet.geometry.bottom_right.call(null,obj);
var tl__460365 = monet.geometry.top_left.call(null,obj);

var and__3546__auto____460367 = (function (){var and__3546__auto____460366 = ("﷐'x".call(null,tl__460365) < x2);

if(cljs.core.truth_(and__3546__auto____460366))
{return (x2 < "﷐'x".call(null,br__460364));
} else
{return and__3546__auto____460366;
}
})();

if(cljs.core.truth_(and__3546__auto____460367))
{var and__3546__auto____460368 = ("﷐'y".call(null,tl__460365) < y2);

if(cljs.core.truth_(and__3546__auto____460368))
{return (y2 < "﷐'y".call(null,br__460364));
} else
{return and__3546__auto____460368;
}
} else
{return and__3546__auto____460367;
}
});
