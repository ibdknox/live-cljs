goog.provide('waltz.state');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
waltz.state.debug_log = (function() { 
var debug_log__delegate = function (sm,v,vs){
if(cljs.core.truth_((function (){var and__3546__auto____460098 = console;

if(cljs.core.truth_(and__3546__auto____460098))
{return cljs.core.deref.call(null,sm).call(null,"﷐'debug");
} else
{return and__3546__auto____460098;
}
})()))
{var s__460099 = cljs.core.apply.call(null,cljs.core.str,waltz.state.get_name.call(null,sm)," :: ",v,vs);

return console.log(s__460099);
} else
{return null;
}
};
var debug_log = function (sm,v,var_args){
var vs = null;
if (goog.isDef(var_args)) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return debug_log__delegate.call(this, sm, v, vs);
};
debug_log.cljs$lang$maxFixedArity = 2;
debug_log.cljs$lang$applyTo = (function (arglist__460100){
var sm = cljs.core.first(arglist__460100);
var v = cljs.core.first(cljs.core.next(arglist__460100));
var vs = cljs.core.rest(cljs.core.next(arglist__460100));
return debug_log__delegate.call(this, sm, v, vs);
});
return debug_log;
})()
;
waltz.state.__GT_coll = (function __GT_coll(v){
if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,v)))
{return v;
} else
{return cljs.core.Vector.fromArray([v]);
}
});
waltz.state.state_STAR_ = (function state_STAR_(){
return cljs.core.ObjMap.fromObject(["﷐'in","﷐'out","﷐'constraints"],{"﷐'in":cljs.core.Vector.fromArray([]),"﷐'out":cljs.core.Vector.fromArray([]),"﷐'constraints":cljs.core.Vector.fromArray([])});
});
/**
* @param {...*} var_args
*/
waltz.state.machine = (function() { 
var machine__delegate = function (p__460101){
var vec__460102__460103 = p__460101;
var n__460104 = cljs.core.nth.call(null,vec__460102__460103,0,null);

return cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["﷐'debug","﷐'name","﷐'current","﷐'states","﷐'transitions"],{"﷐'debug":true,"﷐'name":cljs.core.name.call(null,n__460104),"﷐'current":cljs.core.set([]),"﷐'states":cljs.core.ObjMap.fromObject([],{}),"﷐'transitions":cljs.core.ObjMap.fromObject([],{})}));
};
var machine = function (var_args){
var p__460101 = null;
if (goog.isDef(var_args)) {
  p__460101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return machine__delegate.call(this, p__460101);
};
machine.cljs$lang$maxFixedArity = 0;
machine.cljs$lang$applyTo = (function (arglist__460105){
var p__460101 = cljs.core.seq( arglist__460105 );;
return machine__delegate.call(this, p__460101);
});
return machine;
})()
;
waltz.state.get_name = (function get_name(sm){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'name"]));
});
waltz.state.get_in_sm = (function get_in_sm(sm,ks){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sm),ks);
});
waltz.state.assoc_sm = (function assoc_sm(sm,ks,v){
return cljs.core.swap_BANG_.call(null,sm,(function (p1__460106_SHARP_){
return cljs.core.assoc_in.call(null,p1__460106_SHARP_,ks,v);
}));
});
/**
* @param {...*} var_args
*/
waltz.state.update_sm = (function() { 
var update_sm__delegate = function (sm,fntail){
return cljs.core.swap_BANG_.call(null,sm,(function (p1__460107_SHARP_){
return cljs.core.apply.call(null,cljs.core.update_in,p1__460107_SHARP_,fntail);
}));
};
var update_sm = function (sm,var_args){
var fntail = null;
if (goog.isDef(var_args)) {
  fntail = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return update_sm__delegate.call(this, sm, fntail);
};
update_sm.cljs$lang$maxFixedArity = 1;
update_sm.cljs$lang$applyTo = (function (arglist__460108){
var sm = cljs.core.first(arglist__460108);
var fntail = cljs.core.rest(arglist__460108);
return update_sm__delegate.call(this, sm, fntail);
});
return update_sm;
})()
;
waltz.state.current = (function current(sm){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'current"]));
});
waltz.state.in_QMARK_ = (function in_QMARK_(sm,state){
return waltz.state.current.call(null,sm).call(null,state);
});
waltz.state.has_state_QMARK_ = (function has_state_QMARK_(sm,state){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",state]));
});
waltz.state.has_transition_QMARK_ = (function has_transition_QMARK_(sm,trans){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'transitions",trans]));
});
waltz.state.add_state = (function add_state(sm,name,v){
return waltz.state.assoc_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",name]),v);
});
waltz.state.add_transition = (function add_transition(sm,name,v){
return waltz.state.assoc_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'transitions",name]),v);
});
waltz.state.in_STAR_ = (function in_STAR_(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["﷐'in"]),cljs.core.conj,fn);
});
waltz.state.out_STAR_ = (function out_STAR_(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["﷐'out"]),cljs.core.conj,fn);
});
waltz.state.constraint = (function constraint(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["﷐'constraint"]),cljs.core.conj,fn);
});
waltz.state.can_transition_QMARK_ = (function can_transition_QMARK_(sm,state){
var trans__460110 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",state,"﷐'constraints"]));

if(cljs.core.truth_(trans__460110))
{return cljs.core.every_QMARK_.call(null,(function (p1__460109_SHARP_){
return p1__460109_SHARP_.call(null,state);
}),trans__460110);
} else
{return true;
}
});
/**
* @param {...*} var_args
*/
waltz.state.set = (function() { 
var set__delegate = function (sm,states,context){
var G__460111__460112 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__460111__460112))
{var state__460113 = cljs.core.first.call(null,G__460111__460112);
var G__460111__460114 = G__460111__460112;

while(true){
if(cljs.core.truth_(waltz.state.can_transition_QMARK_.call(null,sm,state__460113)))
{var cur_in__460115 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",state__460113,"﷐'in"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'current"]),cljs.core.conj,state__460113);
waltz.state.debug_log.call(null,sm,"(set ",cljs.core.str.call(null,state__460113),") -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_in__460115)))
{waltz.state.debug_log.call(null,sm,"(in ",cljs.core.str.call(null,state__460113),")");
var G__460116__460117 = cljs.core.seq.call(null,cur_in__460115);

if(cljs.core.truth_(G__460116__460117))
{var func__460118 = cljs.core.first.call(null,G__460116__460117);
var G__460116__460119 = G__460116__460117;

while(true){
cljs.core.apply.call(null,func__460118,context);
var temp__3698__auto____460120 = cljs.core.next.call(null,G__460116__460119);

if(cljs.core.truth_(temp__3698__auto____460120))
{var G__460116__460121 = temp__3698__auto____460120;

{
var G__460124 = cljs.core.first.call(null,G__460116__460121);
var G__460125 = G__460116__460121;
func__460118 = G__460124;
G__460116__460119 = G__460125;
continue;
}
} else
{}
break;
}
} else
{}
} else
{}
} else
{}
var temp__3698__auto____460122 = cljs.core.next.call(null,G__460111__460114);

if(cljs.core.truth_(temp__3698__auto____460122))
{var G__460111__460123 = temp__3698__auto____460122;

{
var G__460126 = cljs.core.first.call(null,G__460111__460123);
var G__460127 = G__460111__460123;
state__460113 = G__460126;
G__460111__460114 = G__460127;
continue;
}
} else
{}
break;
}
} else
{}
return sm;
};
var set = function (sm,states,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set__delegate.call(this, sm, states, context);
};
set.cljs$lang$maxFixedArity = 2;
set.cljs$lang$applyTo = (function (arglist__460128){
var sm = cljs.core.first(arglist__460128);
var states = cljs.core.first(cljs.core.next(arglist__460128));
var context = cljs.core.rest(cljs.core.next(arglist__460128));
return set__delegate.call(this, sm, states, context);
});
return set;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.unset = (function() { 
var unset__delegate = function (sm,states,context){
var G__460129__460130 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__460129__460130))
{var state__460131 = cljs.core.first.call(null,G__460129__460130);
var G__460129__460132 = G__460129__460130;

while(true){
if(cljs.core.truth_(waltz.state.in_QMARK_.call(null,sm,state__460131)))
{var cur_out__460133 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",state__460131,"﷐'out"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'current"]),cljs.core.disj,state__460131);
waltz.state.debug_log.call(null,sm,"(unset ",cljs.core.str.call(null,state__460131,")")," -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_out__460133)))
{waltz.state.debug_log.call(null,sm,"(out ",cljs.core.str.call(null,state__460131),")");
var G__460134__460135 = cljs.core.seq.call(null,cur_out__460133);

if(cljs.core.truth_(G__460134__460135))
{var func__460136 = cljs.core.first.call(null,G__460134__460135);
var G__460134__460137 = G__460134__460135;

while(true){
cljs.core.apply.call(null,func__460136,context);
var temp__3698__auto____460138 = cljs.core.next.call(null,G__460134__460137);

if(cljs.core.truth_(temp__3698__auto____460138))
{var G__460134__460139 = temp__3698__auto____460138;

{
var G__460142 = cljs.core.first.call(null,G__460134__460139);
var G__460143 = G__460134__460139;
func__460136 = G__460142;
G__460134__460137 = G__460143;
continue;
}
} else
{}
break;
}
} else
{}
} else
{}
} else
{}
var temp__3698__auto____460140 = cljs.core.next.call(null,G__460129__460132);

if(cljs.core.truth_(temp__3698__auto____460140))
{var G__460129__460141 = temp__3698__auto____460140;

{
var G__460144 = cljs.core.first.call(null,G__460129__460141);
var G__460145 = G__460129__460141;
state__460131 = G__460144;
G__460129__460132 = G__460145;
continue;
}
} else
{}
break;
}
} else
{}
return sm;
};
var unset = function (sm,states,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unset__delegate.call(this, sm, states, context);
};
unset.cljs$lang$maxFixedArity = 2;
unset.cljs$lang$applyTo = (function (arglist__460146){
var sm = cljs.core.first(arglist__460146);
var states = cljs.core.first(cljs.core.next(arglist__460146));
var context = cljs.core.rest(cljs.core.next(arglist__460146));
return unset__delegate.call(this, sm, states, context);
});
return unset;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.set_ex = (function() { 
var set_ex__delegate = function (sm,to_unset,to_set,context){
cljs.core.apply.call(null,waltz.state.unset,sm,to_unset,context);
return cljs.core.apply.call(null,waltz.state.set,sm,to_set,context);
};
var set_ex = function (sm,to_unset,to_set,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return set_ex__delegate.call(this, sm, to_unset, to_set, context);
};
set_ex.cljs$lang$maxFixedArity = 3;
set_ex.cljs$lang$applyTo = (function (arglist__460147){
var sm = cljs.core.first(arglist__460147);
var to_unset = cljs.core.first(cljs.core.next(arglist__460147));
var to_set = cljs.core.first(cljs.core.next(cljs.core.next(arglist__460147)));
var context = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__460147)));
return set_ex__delegate.call(this, sm, to_unset, to_set, context);
});
return set_ex;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.transition = (function() { 
var transition__delegate = function (sm,ts,context){
var G__460148__460149 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,ts));

if(cljs.core.truth_(G__460148__460149))
{var trans__460150 = cljs.core.first.call(null,G__460148__460149);
var G__460148__460151 = G__460148__460149;

while(true){
var temp__3698__auto____460152 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'transitions",trans__460150]));

if(cljs.core.truth_(temp__3698__auto____460152))
{var t__460153 = temp__3698__auto____460152;

var res__460154 = cljs.core.apply.call(null,t__460153,context);

waltz.state.debug_log.call(null,sm,"(trans ",cljs.core.str.call(null,trans__460150),") -> ",cljs.core.boolean$.call(null,res__460154)," :: context ",cljs.core.pr_str.call(null,context));
} else
{}
var temp__3698__auto____460155 = cljs.core.next.call(null,G__460148__460151);

if(cljs.core.truth_(temp__3698__auto____460155))
{var G__460148__460156 = temp__3698__auto____460155;

{
var G__460157 = cljs.core.first.call(null,G__460148__460156);
var G__460158 = G__460148__460156;
trans__460150 = G__460157;
G__460148__460151 = G__460158;
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
};
var transition = function (sm,ts,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return transition__delegate.call(this, sm, ts, context);
};
transition.cljs$lang$maxFixedArity = 2;
transition.cljs$lang$applyTo = (function (arglist__460159){
var sm = cljs.core.first(arglist__460159);
var ts = cljs.core.first(cljs.core.next(arglist__460159));
var context = cljs.core.rest(cljs.core.next(arglist__460159));
return transition__delegate.call(this, sm, ts, context);
});
return transition;
})()
;
waltz.state.set_debug = (function set_debug(sm,dbg){
return waltz.state.assoc_sm.call(null,sm,"﷐'debug",dbg);
});
