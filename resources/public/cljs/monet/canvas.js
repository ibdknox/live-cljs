goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
monet.canvas.get_context = (function get_context(canvas,type){
return canvas.getContext(cljs.core.name.call(null,type));
});
monet.canvas.begin_path = (function begin_path(ctx){
ctx.beginPath();
return ctx;
});
monet.canvas.close_path = (function close_path(ctx){
ctx.closePath();
return ctx;
});
monet.canvas.fill = (function fill(ctx){
ctx.fill();
return ctx;
});
monet.canvas.stroke = (function stroke(ctx){
ctx.stroke();
return ctx;
});
monet.canvas.clear_rect = (function clear_rect(ctx,p__460369){
var map__460370__460371 = p__460369;
var map__460370__460372 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__460370__460371))?cljs.core.apply.call(null,cljs.core.hash_map,map__460370__460371):map__460370__460371);
var h__460373 = cljs.core.get.call(null,map__460370__460372,"﷐'h");
var w__460374 = cljs.core.get.call(null,map__460370__460372,"﷐'w");
var y__460375 = cljs.core.get.call(null,map__460370__460372,"﷐'y");
var x__460376 = cljs.core.get.call(null,map__460370__460372,"﷐'x");

ctx.clearRect(x__460376,y__460375,w__460374,h__460373);
return ctx;
});
monet.canvas.rect = (function rect(ctx,p__460377){
var map__460378__460379 = p__460377;
var map__460378__460380 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__460378__460379))?cljs.core.apply.call(null,cljs.core.hash_map,map__460378__460379):map__460378__460379);
var h__460381 = cljs.core.get.call(null,map__460378__460380,"﷐'h");
var w__460382 = cljs.core.get.call(null,map__460378__460380,"﷐'w");
var y__460383 = cljs.core.get.call(null,map__460378__460380,"﷐'y");
var x__460384 = cljs.core.get.call(null,map__460378__460380,"﷐'x");

monet.canvas.begin_path.call(null,ctx);
ctx.rect(x__460384,y__460383,w__460382,h__460381);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
monet.canvas.circle = (function circle(ctx,p__460385){
var map__460386__460387 = p__460385;
var map__460386__460388 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__460386__460387))?cljs.core.apply.call(null,cljs.core.hash_map,map__460386__460387):map__460386__460387);
var r__460389 = cljs.core.get.call(null,map__460386__460388,"﷐'r");
var y__460390 = cljs.core.get.call(null,map__460386__460388,"﷐'y");
var x__460391 = cljs.core.get.call(null,map__460386__460388,"﷐'x");

monet.canvas.begin_path.call(null,ctx);
ctx.arc(x__460391,y__460390,r__460389,0,(Math.PI * 2),true);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
monet.canvas.text = (function text(ctx,p__460392){
var map__460393__460394 = p__460392;
var map__460393__460395 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__460393__460394))?cljs.core.apply.call(null,cljs.core.hash_map,map__460393__460394):map__460393__460394);
var y__460396 = cljs.core.get.call(null,map__460393__460395,"﷐'y");
var x__460397 = cljs.core.get.call(null,map__460393__460395,"﷐'x");
var text__460398 = cljs.core.get.call(null,map__460393__460395,"﷐'text");

ctx.fillText(text__460398,x__460397,y__460396);
return ctx;
});
monet.canvas.font_style = (function font_style(ctx,font){
ctx.font = font;
return ctx;
});
monet.canvas.fill_style = (function fill_style(ctx,color){
ctx.fillStyle = color;
return ctx;
});
monet.canvas.stroke_style = (function stroke_style(ctx,color){
ctx.strokeStyle = color;
return ctx;
});
monet.canvas.stroke_width = (function stroke_width(ctx,w){
ctx.lineWidth = w;
return ctx;
});
monet.canvas.move_to = (function move_to(ctx,x,y){
ctx.moveTo(x,y);
return ctx;
});
monet.canvas.line_to = (function line_to(ctx,x,y){
ctx.lineTo(x,y);
return ctx;
});
monet.canvas.alpha = (function alpha(ctx,a){
ctx.globalAlpha = a;
return ctx;
});
monet.canvas.save = (function save(ctx){
ctx.save();
return ctx;
});
monet.canvas.restore = (function restore(ctx){
ctx.restore();
return ctx;
});
monet.canvas.add_entity = (function add_entity(mc,k,ent){
return ("﷐'entities".call(null,mc)[k] = ent);
});
monet.canvas.remove_entity = (function remove_entity(mc,k){
return cljs.core.js_delete.call(null,"﷐'entities".call(null,mc),k);
});
monet.canvas.get_entity = (function get_entity(mc,k){
return "﷐'value".call(null,("﷐'entities".call(null,mc)[k]));
});
/**
* @param {...*} var_args
*/
monet.canvas.update_entity = (function() { 
var update_entity__delegate = function (mc,k,func,extra){
var cur__460399 = ("﷐'entities".call(null,mc)[k]);
var res__460400 = cljs.core.apply.call(null,func,cur__460399,extra);

return ("﷐'entities".call(null,mc)[k] = res__460400);
};
var update_entity = function (mc,k,func,var_args){
var extra = null;
if (goog.isDef(var_args)) {
  extra = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_entity__delegate.call(this, mc, k, func, extra);
};
update_entity.cljs$lang$maxFixedArity = 3;
update_entity.cljs$lang$applyTo = (function (arglist__460401){
var mc = cljs.core.first(arglist__460401);
var k = cljs.core.first(cljs.core.next(arglist__460401));
var func = cljs.core.first(cljs.core.next(cljs.core.next(arglist__460401)));
var extra = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__460401)));
return update_entity__delegate.call(this, mc, k, func, extra);
});
return update_entity;
})()
;
monet.canvas.clear_BANG_ = (function clear_BANG_(mc){
var ks__460402 = cljs.core.js_keys.call(null,"﷐'entities".call(null,mc));

var G__460403__460404 = cljs.core.seq.call(null,ks__460402);

if(cljs.core.truth_(G__460403__460404))
{var k__460405 = cljs.core.first.call(null,G__460403__460404);
var G__460403__460406 = G__460403__460404;

while(true){
monet.canvas.remove_entity.call(null,mc,k__460405);
var temp__3698__auto____460407 = cljs.core.next.call(null,G__460403__460406);

if(cljs.core.truth_(temp__3698__auto____460407))
{var G__460403__460408 = temp__3698__auto____460407;

{
var G__460409 = cljs.core.first.call(null,G__460403__460408);
var G__460410 = G__460403__460408;
k__460405 = G__460409;
G__460403__460406 = G__460410;
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
monet.canvas.entity = (function entity(v,update,draw){
return cljs.core.ObjMap.fromObject(["﷐'value","﷐'draw","﷐'update"],{"﷐'value":v,"﷐'draw":draw,"﷐'update":update});
});
monet.canvas.attr = (function attr(e,a){
return e.getAttribute(a);
});
monet.canvas.force_update = (function force_update(p__460411){
var mc__460412 = p__460411;
var mc__460413 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,mc__460412))?cljs.core.apply.call(null,cljs.core.hash_map,mc__460412):mc__460412);
var entities__460414 = cljs.core.get.call(null,mc__460413,"﷐'entities");

var ks__460415 = cljs.core.js_keys.call(null,entities__460414);
var cnt__460416 = ks__460415.length;

var i__460417 = 0;

while(true){
if(cljs.core.truth_((i__460417 < cnt__460416)))
{var k__460418 = (ks__460415[i__460417]);
var ent__460419 = (entities__460414[k__460418]);
var ent__460420 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,ent__460419))?cljs.core.apply.call(null,cljs.core.hash_map,ent__460419):ent__460419);
var value__460421 = cljs.core.get.call(null,ent__460420,"﷐'value");
var update__460422 = cljs.core.get.call(null,ent__460420,"﷐'update");

if(cljs.core.truth_(update__460422))
{var updated__460426 = (function (){var or__3548__auto____460425 = (function (){try{return update__460422.call(null,value__460421);
}catch (e460423){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e460423)))
{var e__460424 = e460423;

return value__460421;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e460423;
} else
{return null;
}
}
}})();

if(cljs.core.truth_(or__3548__auto____460425))
{return or__3548__auto____460425;
} else
{return value__460421;
}
})();

if(cljs.core.truth_((entities__460414[k__460418])))
{(entities__460414[k__460418] = cljs.core.assoc.call(null,ent__460420,"﷐'value",updated__460426));
} else
{}
} else
{}
{
var G__460427 = (i__460417 + 1);
i__460417 = G__460427;
continue;
}
} else
{return null;
}
break;
}
});
monet.canvas.draw_loop = (function draw_loop(p__460428){
var mc__460429 = p__460428;
var mc__460430 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,mc__460429))?cljs.core.apply.call(null,cljs.core.hash_map,mc__460429):mc__460429);
var entities__460431 = cljs.core.get.call(null,mc__460430,"﷐'entities");
var active__460432 = cljs.core.get.call(null,mc__460430,"﷐'active");
var ctx__460433 = cljs.core.get.call(null,mc__460430,"﷐'ctx");
var updating_QMARK___460434 = cljs.core.get.call(null,mc__460430,"﷐'updating?");
var canvas__460435 = cljs.core.get.call(null,mc__460430,"﷐'canvas");

monet.canvas.clear_rect.call(null,ctx__460433,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y","﷐'w","﷐'h"],{"﷐'x":0,"﷐'y":0,"﷐'w":monet.canvas.attr.call(null,canvas__460435,"width"),"﷐'h":monet.canvas.attr.call(null,canvas__460435,"height")}));
if(cljs.core.truth_(cljs.core.deref.call(null,active__460432)))
{var ks__460436 = cljs.core.js_keys.call(null,entities__460431);
var cnt__460437 = ks__460436.length;

var i__460438 = 0;

while(true){
if(cljs.core.truth_((i__460438 < cnt__460437)))
{var k__460439 = (ks__460436[i__460438]);
var ent__460440 = (entities__460431[k__460439]);
var ent__460441 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,ent__460440))?cljs.core.apply.call(null,cljs.core.hash_map,ent__460440):ent__460440);
var value__460442 = cljs.core.get.call(null,ent__460441,"﷐'value");
var update__460443 = cljs.core.get.call(null,ent__460441,"﷐'update");
var draw__460444 = cljs.core.get.call(null,ent__460441,"﷐'draw");

if(cljs.core.truth_((function (){var and__3546__auto____460445 = update__460443;

if(cljs.core.truth_(and__3546__auto____460445))
{return cljs.core.deref.call(null,updating_QMARK___460434);
} else
{return and__3546__auto____460445;
}
})()))
{var updated__460449 = (function (){var or__3548__auto____460448 = (function (){try{return update__460443.call(null,value__460442);
}catch (e460446){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e460446)))
{var e__460447 = e460446;

console.log(e__460447);
return value__460442;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e460446;
} else
{return null;
}
}
}})();

if(cljs.core.truth_(or__3548__auto____460448))
{return or__3548__auto____460448;
} else
{return value__460442;
}
})();

if(cljs.core.truth_((entities__460431[k__460439])))
{(entities__460431[k__460439] = cljs.core.assoc.call(null,ent__460441,"﷐'value",updated__460449));
} else
{}
} else
{}
if(cljs.core.truth_(draw__460444))
{try{draw__460444.call(null,ctx__460433,"﷐'value".call(null,(entities__460431[k__460439])));
}catch (e460450){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e460450)))
{var e__460451 = e460450;

console.log(e__460451);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e460450;
} else
{}
}
}} else
{}
{
var G__460452 = (i__460438 + 1);
i__460438 = G__460452;
continue;
}
} else
{}
break;
}
return monet.core.animation_frame.call(null,(function (){
return draw_loop.call(null,mc__460430);
}));
} else
{return null;
}
});
monet.canvas.monet_canvas = (function monet_canvas(elem,context_type){
var ct__460454 = (function (){var or__3548__auto____460453 = context_type;

if(cljs.core.truth_(or__3548__auto____460453))
{return or__3548__auto____460453;
} else
{return "2d";
}
})();
var ctx__460455 = monet.canvas.get_context.call(null,elem,ct__460454);

return cljs.core.ObjMap.fromObject(["﷐'canvas","﷐'ctx","﷐'entities","﷐'updating?","﷐'active"],{"﷐'canvas":elem,"﷐'ctx":ctx__460455,"﷐'entities":cljs.core.js_obj.call(null),"﷐'updating?":cljs.core.atom.call(null,true),"﷐'active":cljs.core.atom.call(null,true)});
});
/**
* @param {...*} var_args
*/
monet.canvas.init = (function() { 
var init__delegate = function (canvas,p__460456){
var vec__460457__460458 = p__460456;
var context_type__460459 = cljs.core.nth.call(null,vec__460457__460458,0,null);

var mc__460460 = monet.canvas.monet_canvas.call(null,canvas,context_type__460459);

monet.canvas.draw_loop.call(null,mc__460460);
return mc__460460;
};
var init = function (canvas,var_args){
var p__460456 = null;
if (goog.isDef(var_args)) {
  p__460456 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return init__delegate.call(this, canvas, p__460456);
};
init.cljs$lang$maxFixedArity = 1;
init.cljs$lang$applyTo = (function (arglist__460461){
var canvas = cljs.core.first(arglist__460461);
var p__460456 = cljs.core.rest(arglist__460461);
return init__delegate.call(this, canvas, p__460456);
});
return init;
})()
;
monet.canvas.stop = (function stop(mc){
return cljs.core.reset_BANG_.call(null,"﷐'active".call(null,mc),false);
});
monet.canvas.stop_updating = (function stop_updating(mc){
return cljs.core.reset_BANG_.call(null,"﷐'updating?".call(null,mc),false);
});
monet.canvas.start_updating = (function start_updating(mc){
return cljs.core.reset_BANG_.call(null,"﷐'updating?".call(null,mc),true);
});
monet.canvas.restart = (function restart(mc){
cljs.core.reset_BANG_.call(null,"﷐'active".call(null,mc),true);
monet.canvas.update_loop.call(null,mc);
return monet.canvas.draw_loop.call(null,mc);
});
