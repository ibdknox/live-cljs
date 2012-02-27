goog.provide('monet.core');
goog.require('cljs.core');
monet.core.animation_frame = (function (){var or__3548__auto____460462 = window.requestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____460462))
{return or__3548__auto____460462;
} else
{var or__3548__auto____460463 = window.webkitRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____460463))
{return or__3548__auto____460463;
} else
{var or__3548__auto____460464 = window.mozRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____460464))
{return or__3548__auto____460464;
} else
{var or__3548__auto____460465 = window.oRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____460465))
{return or__3548__auto____460465;
} else
{var or__3548__auto____460466 = window.msRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____460466))
{return or__3548__auto____460466;
} else
{return (function (callback){
return setTimeout.call(null,callback,17);
});
}
}
}
}
}
})();
