goog.provide('coding.client.editor');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('coding.client.util');
goog.require('jayq.util');
goog.require('coding.client.core');
goog.require('jayq.core');
goog.require('waltz.state');
coding.client.editor.do_submit = (function do_submit(){
return jayq.core.trigger.call(null,jayq.core.$.call(null,"﷐'form"),"﷐'submit");
});
coding.client.editor.key_bindings = cljs.core.ObjMap.fromObject(["Cmd-Enter","Ctrl-Enter"],{"Cmd-Enter":coding.client.editor.do_submit,"Ctrl-Enter":coding.client.editor.do_submit});
coding.client.editor.__GT_editor = (function __GT_editor(elem,opts){
return CodeMirror['fromTextArea'].call(null,document.getElementById(elem),jayq.util.map__GT_js.call(null,opts));
});
/**
* @param {...*} var_args
*/
coding.client.editor.make_editor = (function() { 
var make_editor__delegate = function (p__458351){
var vec__458352__458353 = p__458351;
var mode__458354 = cljs.core.nth.call(null,vec__458352__458353,0,null);

var e__458356 = coding.client.editor.__GT_editor.call(null,"codes",cljs.core.ObjMap.fromObject(["﷐'mode","﷐'lineNumbers","﷐'matchBrackets","﷐'extraKeys"],{"﷐'mode":(function (){var or__3548__auto____458355 = mode__458354;

if(cljs.core.truth_(or__3548__auto____458355))
{return or__3548__auto____458355;
} else
{return "text/x-clojure";
}
})(),"﷐'lineNumbers":false,"﷐'matchBrackets":true,"﷐'extraKeys":jayq.util.map__GT_js.call(null,coding.client.editor.key_bindings)}));

return e__458356;
};
var make_editor = function (var_args){
var p__458351 = null;
if (goog.isDef(var_args)) {
  p__458351 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return make_editor__delegate.call(this, p__458351);
};
make_editor.cljs$lang$maxFixedArity = 0;
make_editor.cljs$lang$applyTo = (function (arglist__458357){
var p__458351 = cljs.core.seq( arglist__458357 );;
return make_editor__delegate.call(this, p__458351);
});
return make_editor;
})()
;
coding.client.editor.$errors = jayq.core.$.call(null,"#errors");
coding.client.editor.error_lines = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));
coding.client.editor.state = waltz.state.machine.call(null,"﷐'editor");
coding.client.editor.editor = coding.client.editor.make_editor.call(null);
coding.client.editor.clj_submit_url = "/submit";
coding.client.editor.error_line = (function error_line(l,klass){
return coding.client.editor.editor.setLineClass(l,cljs.core.name.call(null,klass));
});
coding.client.editor.submit_code = (function submit_code(){
var codes__458358 = coding.client.editor.__GT_val.call(null,coding.client.editor.editor);
var loc__458359 = jayq.core.attr.call(null,jayq.core.$.call(null,"﷐'form"),"﷐'action");

return jayq.core.xhr.call(null,cljs.core.Vector.fromArray(["﷐'post",loc__458359]),cljs.core.ObjMap.fromObject(["﷐'codes"],{"﷐'codes":codes__458358}),(function (v){
var map__458360__458361 = cljs.core.js__GT_clj.call(null,v,"﷐'keywordize-keys",true);
var map__458360__458362 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__458360__458361))?cljs.core.apply.call(null,cljs.core.hash_map,map__458360__458361):map__458360__458361);
var exception__458363 = cljs.core.get.call(null,map__458360__458362,"﷐'exception");
var out__458364 = cljs.core.get.call(null,map__458360__458362,"﷐'out");
var result__458365 = cljs.core.get.call(null,map__458360__458362,"﷐'result");
var moves__458366 = cljs.core.get.call(null,map__458360__458362,"﷐'moves");

if(cljs.core.truth_(exception__458363))
{waltz.state.transition.call(null,coding.client.editor.state,"﷐'error",exception__458363);
} else
{}
coding.client.util.log.call(null,cljs.core.pr_str.call(null,moves__458366));
return waltz.state.transition.call(null,coding.client.core.app,"﷐'executing",v);
}));
});
coding.client.editor.__GT_val = (function __GT_val(){
return coding.client.editor.editor.getValue();
});
coding.client.editor.set_val = (function set_val(v){
return coding.client.editor.editor.setValue(v);
});
coding.client.editor.set_mode = (function set_mode(m){
return coding.client.editor.editor.setOption("mode",m);
});
coding.client.editor.set_submit_url = (function set_submit_url(u){
return jayq.core.attr.call(null,jayq.core.$.call(null,"﷐'form"),"﷐'action",u);
});
coding.client.editor.focus = (function focus(){
return coding.client.editor.editor.focus();
});
coding.client.editor.refresh = (function refresh(){
return coding.client.editor.editor.refresh();
});
var s__3008__auto____458387 = waltz.state.out_STAR_.call(null,waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (p__458367){
var map__458368__458369 = p__458367;
var map__458368__458370 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__458368__458369))?cljs.core.apply.call(null,cljs.core.hash_map,map__458368__458369):map__458368__458369);
var stack__458371 = cljs.core.get.call(null,map__458368__458370,"﷐'stack");
var message__458372 = cljs.core.get.call(null,map__458368__458370,"﷐'message");

cljs.core.reset_BANG_.call(null,coding.client.editor.error_lines,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.dec,"﷐'line"),cljs.core.filter.call(null,"﷐'line",stack__458371)));
var temp__3698__auto____458373 = cljs.core.seq.call(null,cljs.core.deref.call(null,coding.client.editor.error_lines));

if(cljs.core.truth_(temp__3698__auto____458373))
{var lines__458374 = temp__3698__auto____458373;

coding.client.editor.error_line.call(null,cljs.core.first.call(null,lines__458374),"﷐'error-source");
var G__458375__458376 = cljs.core.seq.call(null,cljs.core.rest.call(null,lines__458374));

if(cljs.core.truth_(G__458375__458376))
{var l__458377 = cljs.core.first.call(null,G__458375__458376);
var G__458375__458378 = G__458375__458376;

while(true){
coding.client.editor.error_line.call(null,l__458377,"﷐'error-stack");
var temp__3698__auto____458379 = cljs.core.next.call(null,G__458375__458378);

if(cljs.core.truth_(temp__3698__auto____458379))
{var G__458375__458380 = temp__3698__auto____458379;

{
var G__458388 = cljs.core.first.call(null,G__458375__458380);
var G__458389 = G__458375__458380;
l__458377 = G__458388;
G__458375__458378 = G__458389;
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
jayq.core.text.call(null,coding.client.editor.$errors,message__458372);
return jayq.core.slide_down.call(null,coding.client.editor.$errors);
})),(function (){
jayq.core.slide_up.call(null,coding.client.editor.$errors,"fast",(function (){
return coding.client.editor.hide.call(null,coding.client.editor.$errors);
}));
var G__458381__458382 = cljs.core.seq.call(null,cljs.core.deref.call(null,coding.client.editor.error_lines));

if(cljs.core.truth_(G__458381__458382))
{var l__458383 = cljs.core.first.call(null,G__458381__458382);
var G__458381__458384 = G__458381__458382;

while(true){
coding.client.editor.editor.setLineClass(l__458383,null);
var temp__3698__auto____458385 = cljs.core.next.call(null,G__458381__458384);

if(cljs.core.truth_(temp__3698__auto____458385))
{var G__458381__458386 = temp__3698__auto____458385;

{
var G__458390 = cljs.core.first.call(null,G__458381__458386);
var G__458391 = G__458381__458386;
l__458383 = G__458390;
G__458381__458384 = G__458391;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.reset_BANG_.call(null,coding.client.editor.error_lines,cljs.core.Vector.fromArray([]));
}));

waltz.state.add_state.call(null,coding.client.editor.state,"﷐'error",s__3008__auto____458387);
var s__3008__auto____458392 = waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (){
coding.client.editor.set_mode.call(null,"text/x-clojure");
coding.client.editor.set_submit_url.call(null,coding.client.editor.clj_submit_url);
coding.client.editor.set_val.call(null,"\n;; Click the right pane to focus the game:\n;;   - Arrow keys move you left and right\n;;   - Space makes you jump\n;;   - Clicking the canvas will place a block\n;;   - s pauses the game and show you a history of what you did.\n;; change how the game works, see how it affects the history :)\n\n(defn gravity [{:keys [vy y] :as me}]\n  (let [g 0.5\n        vy (or vy 0)\n        neue-vy (+ vy g)\n        dir (if (< neue-vy 0) :up :down)\n        moved (update-in me [:y] + neue-vy)]\n    (if-let [block (colliding? moved)]\n      (let [block-edge (if (= dir :up)\n                          (+ (:y block) (:h block) (:r me))\n                          (- (:y block) (:r me)))]\n        (assoc me :y block-edge\n                :jumping (= dir :up)\n                :vy 0))\n      (-> moved\n          (assoc :vy neue-vy)))))\n\n(defn jump [me]\n  (let [speed -10]\n    (if (and (input? :space)\n              (and (not (:jumping me)) (zero? (:vy me))))\n      (assoc me :vy speed\n              :jumping true)\n      me)))\n\n(defn move [me]\n  (let [speed 5\n        vx (cond\n             (input? :left) (- speed)\n             (input? :right) speed\n             :else 0)\n        moved (update-in me [:x] + vx)]\n    (if (zero? vx) \n      me\n      (if-let [block (colliding? moved)]\n        (let [block-edge (if (< vx 0)\n                           (+ (:x block) (:w block) (:r me))\n                           (- (:x block) (:r me)))]\n\n          (assoc me :x block-edge))\n        moved))))\n\n(defn reset [me]\n  (if (> (:y me) 650)\n    (-> me\n        (assoc :x 30)\n        (assoc :y 30)\n        (assoc :vy 0))\n    me))\n\n(defn update-player [me]\n  (-> me\n      (gravity)\n      (move)\n      (jump)\n      (reset)\n      ))\n\n(defn draw-player [ctx me]\n  (-> ctx\n      (canvas/fill-style \"#449\")\n      (canvas/stroke-style \"#68d\")\n      (canvas/stroke-width 2)\n      (canvas/circle me)\n      (canvas/stroke)))");
return coding.client.editor.submit_code.call(null);
}));

waltz.state.add_state.call(null,coding.client.editor.state,"﷐'clojure",s__3008__auto____458392);
waltz.state.add_transition.call(null,coding.client.editor.state,"﷐'clean",(function (){
return waltz.state.unset.call(null,coding.client.editor.state,"﷐'error");
}));
waltz.state.add_transition.call(null,coding.client.editor.state,"﷐'set-language",(function (lang){
waltz.state.transition.call(null,coding.client.editor.state,"﷐'clean");
return waltz.state.set.call(null,coding.client.editor.state,lang);
}));
waltz.state.add_transition.call(null,coding.client.editor.state,"﷐'submit",(function (){
waltz.state.unset.call(null,coding.client.editor.state,"﷐'error");
return coding.client.editor.submit_code.call(null);
}));
waltz.state.add_transition.call(null,coding.client.editor.state,"﷐'error",(function (ex){
return waltz.state.set.call(null,coding.client.editor.state,"﷐'error",ex);
}));
waltz.state.transition.call(null,coding.client.editor.state,"﷐'set-language","﷐'clojure");
coding.client.editor.editor.setOption("onChange",(function (ed,delta){
return coding.client.editor.submit_code.call(null);
}));
