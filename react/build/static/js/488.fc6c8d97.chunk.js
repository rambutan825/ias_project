"use strict";(self.webpackChunkias_jsx_react=self.webpackChunkias_jsx_react||[]).push([[488],{488:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(5861),r=n(5671),i=n(3144),c=n(136),u=n(7277),o=n(7757),f=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;if((0,r.Z)(this,n),e=t.call(this),"undefined"===typeof createImageBitmap)throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if("undefined"===typeof document&&"undefined"===typeof OffscreenCanvas)throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");return e}return(0,i.Z)(n,[{key:"decode",value:function(){var e=(0,a.Z)(o.mark((function e(t,n){var a,r,i,c;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Blob([n]),e.next=3,createImageBitmap(a);case 3:return r=e.sent,"undefined"!==typeof document?((i=document.createElement("canvas")).width=r.width,i.height=r.height):i=new OffscreenCanvas(r.width,r.height),(c=i.getContext("2d")).drawImage(r,0,0),e.abrupt("return",c.getImageData(0,0,r.width,r.height).data.buffer);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(n(4286).Z)}}]);