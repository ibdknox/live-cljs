goog.provide('coding.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('coding.client.util');
goog.require('coding.client.core');
goog.require('coding.client.editor');
goog.require('waltz.state');
goog.require('waltz.transition');
goog.require('monet.canvas');
goog.require('monet.geometry');
coding.client.main.$body = jayq.core.$.call(null,"﷐'body");
coding.client.main.app = waltz.state.machine.call(null,"﷐'app");
waltz.state.add_transition.call(null,coding.client.core.app,"﷐'submitting",(function (){
waltz.state.set.call(null,coding.client.core.app,"﷐'submitting");
return coding.client.main.transition.call(null,coding.client.editor.state,"﷐'submit");
}));
waltz.state.add_transition.call(null,coding.client.core.app,"﷐'executing",(function (v){
eval.call(null,v);
return coding.client.main.update_history.call(null);
}));
jayq.core.bind.call(null,jayq.core.$.call(null,"form"),"﷐'submit",(function (e){
e.preventDefault();
return coding.client.main.transition.call(null,coding.client.core.app,"﷐'submitting");
}));
coding.client.main.canvas = monet.canvas.init.call(null,jayq.core.$.call(null,"﷐'#canvas").get(0));
monet.canvas.add_entity.call(null,coding.client.main.canvas,"﷐'background",monet.canvas.entity.call(null,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y","﷐'w","﷐'h"],{"﷐'x":0,"﷐'y":0,"﷐'w":600,"﷐'h":650}),null,(function (ctx,me){
return monet.canvas.rect.call(null,monet.canvas.fill_style.call(null,ctx,"#222"),me);
})));
coding.client.main.update_player = (function update_player(me){
return me;
});
coding.client.main.draw_player = (function draw_player(ctx,me){
return monet.canvas.circle.call(null,monet.canvas.fill_style.call(null,ctx,"#888"),me);
});
monet.canvas.add_entity.call(null,coding.client.main.canvas,"﷐'player",monet.canvas.entity.call(null,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y","﷐'r"],{"﷐'x":30,"﷐'y":500,"﷐'r":15}),(function (me){
return coding.client.main.update_player.call(null,me);
}),(function (ctx,me){
return coding.client.main.draw_player.call(null,ctx,me);
})));
coding.client.main.draw_block = (function draw_block(ctx,me){
return monet.canvas.stroke.call(null,monet.canvas.rect.call(null,monet.canvas.stroke_width.call(null,monet.canvas.stroke_style.call(null,monet.canvas.fill_style.call(null,ctx,"#143"),"#175"),2),me));
});
coding.client.main.blocks = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
coding.client.main.make_block = (function make_block(r,c){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.deref.call(null,coding.client.main.blocks).call(null,cljs.core.Vector.fromArray([r,c])))))
{var x__458393 = (40 * r);
var y__458394 = (40 * c);

return cljs.core.swap_BANG_.call(null,coding.client.main.blocks,cljs.core.assoc,cljs.core.Vector.fromArray([r,c]),cljs.core.ObjMap.fromObject(["﷐'x","﷐'y","﷐'w","﷐'h","﷐'type"],{"﷐'x":x__458393,"﷐'y":y__458394,"﷐'w":40,"﷐'h":40,"﷐'type":"﷐'block"}));
} else
{return cljs.core.swap_BANG_.call(null,coding.client.main.blocks,cljs.core.dissoc,cljs.core.Vector.fromArray([r,c]));
}
});
monet.canvas.add_entity.call(null,coding.client.main.canvas,"﷐'blocks",monet.canvas.entity.call(null,cljs.core.ObjMap.fromObject([],{}),null,(function (ctx,me){
var G__458395__458396 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,coding.client.main.blocks)));

if(cljs.core.truth_(G__458395__458396))
{var b__458397 = cljs.core.first.call(null,G__458395__458396);
var G__458395__458398 = G__458395__458396;

while(true){
coding.client.main.draw_block.call(null,ctx,b__458397);
var temp__3698__auto____458399 = cljs.core.next.call(null,G__458395__458398);

if(cljs.core.truth_(temp__3698__auto____458399))
{var G__458395__458400 = temp__3698__auto____458399;

{
var G__458401 = cljs.core.first.call(null,G__458395__458400);
var G__458402 = G__458395__458400;
b__458397 = G__458401;
G__458395__458398 = G__458402;
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
})));
coding.client.main.history_count = 100;
coding.client.main.history = cljs.core.array.call(null);
coding.client.main.original_history_point = null;
coding.client.main.update_history = (function update_history(){
if(cljs.core.truth_(cljs.core.deref.call(null,"﷐'updating?".call(null,coding.client.main.canvas))))
{return null;
} else
{(coding.client.main.history[0] = goog.object.unsafeClone.call(null,coding.client.main.original_history_point));
var old__458403 = coding.client.main.history;
var new_history__458404 = cljs.core.array.call(null);

coding.client.main.history = new_history__458404;
var cur__458405 = 0;
var prev_dude__458406 = null;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,(cur__458405 < coding.client.main.history_count))))
{("﷐'entities".call(null,coding.client.main.canvas)["﷐'player"] = prev_dude__458406);
} else
{var entry__458407 = (old__458403[cur__458405]);
var entry__458408 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,entry__458407))?cljs.core.apply.call(null,cljs.core.hash_map,entry__458407):entry__458407);
var entities__458409 = cljs.core.get.call(null,entry__458408,"﷐'entities");
var input__458410 = cljs.core.get.call(null,entry__458408,"﷐'input");
var dude__458412 = (function (){var or__3548__auto____458411 = prev_dude__458406;

if(cljs.core.truth_(or__3548__auto____458411))
{return or__3548__auto____458411;
} else
{return (entities__458409["﷐'player"]);
}
})();

cljs.core.reset_BANG_.call(null,coding.client.main.inputs,input__458410);
var neue_value__458413 = coding.client.main.update_player.call(null,"﷐'value".call(null,dude__458412));
var neue__458414 = cljs.core.assoc.call(null,dude__458412,"﷐'value",neue_value__458413);

(entities__458409["﷐'player"] = neue__458414);
new_history__458404.push(entry__458408);
{
var G__458415 = (cur__458405 + 1);
var G__458416 = neue__458414;
cur__458405 = G__458415;
prev_dude__458406 = G__458416;
continue;
}
}
break;
}
return cljs.core.reset_BANG_.call(null,coding.client.main.inputs,cljs.core.ObjMap.fromObject([],{}));
}
});
monet.canvas.add_entity.call(null,coding.client.main.canvas,"﷐'recorder",monet.canvas.entity.call(null,cljs.core.ObjMap.fromObject([],{}),(function (me){
coding.client.main.history.push(cljs.core.ObjMap.fromObject(["﷐'input","﷐'entities"],{"﷐'input":cljs.core.deref.call(null,coding.client.main.inputs),"﷐'entities":goog.object.clone.call(null,"﷐'entities".call(null,coding.client.main.canvas))}));
if(cljs.core.truth_((coding.client.main.history.length > coding.client.main.history_count)))
{coding.client.main.history.splice(0,1);
} else
{}
return me;
}),(function (ctx,me){
if(cljs.core.truth_(cljs.core.deref.call(null,"﷐'updating?".call(null,coding.client.main.canvas))))
{return null;
} else
{monet.canvas.save.call(null,ctx);
monet.canvas.alpha.call(null,ctx,0.5);
var G__458418__458419 = cljs.core.seq.call(null,cljs.core.range.call(null,0,coding.client.main.history_count,5));

if(cljs.core.truth_(G__458418__458419))
{var cur__458420 = cljs.core.first.call(null,G__458418__458419);
var G__458418__458421 = G__458418__458419;

while(true){
var map__458422__458423 = (coding.client.main.history[cur__458420]);
var map__458422__458424 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__458422__458423))?cljs.core.apply.call(null,cljs.core.hash_map,map__458422__458423):map__458422__458423);
var input__458425 = cljs.core.get.call(null,map__458422__458424,"﷐'input");
var entities__458426 = cljs.core.get.call(null,map__458422__458424,"﷐'entities");
var dude__458427 = (entities__458426["﷐'player"]);

coding.client.main.draw_player.call(null,ctx,"﷐'value".call(null,dude__458427));
var temp__3698__auto____458428 = cljs.core.next.call(null,G__458418__458421);

if(cljs.core.truth_(temp__3698__auto____458428))
{var G__458418__458429 = temp__3698__auto____458428;

{
var G__458430 = cljs.core.first.call(null,G__458418__458429);
var G__458431 = G__458418__458429;
cur__458420 = G__458430;
G__458418__458421 = G__458431;
continue;
}
} else
{}
break;
}
} else
{}
return monet.canvas.restore.call(null,ctx);
}
})));
coding.client.main.colliding_QMARK_ = (function colliding_QMARK_(me){
var blocks__458432 = cljs.core.vals.call(null,cljs.core.deref.call(null,coding.client.main.blocks));

return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__458417_SHARP_){
return monet.geometry.collision_QMARK_.call(null,me,p1__458417_SHARP_);
}),blocks__458432));
});
coding.client.main.make_block.call(null,0,14);
coding.client.main.make_block.call(null,1,14);
coding.client.main.make_block.call(null,2,14);
coding.client.main.make_block.call(null,5,14);
coding.client.main.make_block.call(null,6,14);
coding.client.main.make_block.call(null,7,14);
coding.client.main.__GT_40th = (function __GT_40th(v){
return Math.floor.call(null,(v / 40));
});
coding.client.main.coords__GT_block = (function coords__GT_block(x,y){
return coding.client.main.make_block.call(null,coding.client.main.__GT_40th.call(null,x),coding.client.main.__GT_40th.call(null,y));
});
coding.client.main.inputs = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
coding.client.main.__GT_key = cljs.core.HashMap.fromArrays([37,39,32,83],["﷐'left","﷐'right","﷐'space","﷐'s"]);
coding.client.main.input_QMARK_ = (function input_QMARK_(k){
return cljs.core.deref.call(null,coding.client.main.inputs).call(null,k);
});
coding.client.main.pause_game = (function pause_game(){
if(cljs.core.truth_(cljs.core.deref.call(null,"﷐'updating?".call(null,coding.client.main.canvas))))
{monet.canvas.stop_updating.call(null,coding.client.main.canvas);
return coding.client.main.original_history_point = (coding.client.main.history[0]);
} else
{return monet.canvas.start_updating.call(null,coding.client.main.canvas);
}
});
jayq.core.bind.call(null,jayq.core.$.call(null,"﷐'#canvas"),"﷐'keydown",(function (e){
var temp__3698__auto____458433 = coding.client.main.__GT_key.call(null,e.keyCode);

if(cljs.core.truth_(temp__3698__auto____458433))
{var k__458434 = temp__3698__auto____458433;

if(cljs.core.truth_(cljs.core._EQ_.call(null,k__458434,"﷐'s")))
{return coding.client.main.pause_game.call(null);
} else
{return cljs.core.swap_BANG_.call(null,coding.client.main.inputs,cljs.core.assoc,k__458434,true);
}
} else
{return null;
}
}));
jayq.core.bind.call(null,jayq.core.$.call(null,"﷐'#canvas"),"﷐'keyup",(function (e){
var temp__3698__auto____458435 = coding.client.main.__GT_key.call(null,e.keyCode);

if(cljs.core.truth_(temp__3698__auto____458435))
{var k__458436 = temp__3698__auto____458435;

return cljs.core.swap_BANG_.call(null,coding.client.main.inputs,cljs.core.assoc,k__458436,false);
} else
{return null;
}
}));
jayq.core.bind.call(null,jayq.core.$.call(null,"﷐'#canvas"),"﷐'focus",(function (e){
var me__458437 = this;

return me__458437.focused = true;
}));
jayq.core.bind.call(null,jayq.core.$.call(null,"﷐'#canvas"),"﷐'blur",(function (e){
var me__458438 = this;

return me__458438.focused = false;
}));
jayq.core.bind.call(null,jayq.core.$.call(null,"﷐'#canvas"),"﷐'mousedown",(function (e){
var me__458439 = this;

if(cljs.core.truth_(me__458439.focused))
{coding.client.main.coords__GT_block.call(null,e.offsetX,e.offsetY);
return coding.client.main.update_history.call(null);
} else
{return null;
}
}));
