"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[728],{728:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n,a=r(165),c=r(861),i=r(439),s=r(791),o=r(689),u=r(635),p=r(184),h=function(t){var e=t.name,r=void 0===e?"":e,n=t.character,a=void 0===n?"":n,c=t.profile_path,i=void 0===c?"":c;return(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500".concat(i):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r,height:"150",width:"100"}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("p",{children:a})]})},f=r(168),Z=r(867).ZP.ul(n||(n=(0,f.Z)(["\n  color: white;\n"]))),l=function(){var t=(0,o.UO)().movieId,e=(0,s.useState)([]),r=(0,i.Z)(e,2),n=r[0],f=r[1],l=(0,s.useState)("fetch"),d=(0,i.Z)(l,2),v=d[0],w=d[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.credits(t);case 3:r=e.sent,f(r),w("finish"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),console.log(t),"finish"===v&&(0,p.jsx)("div",{children:n.length>0?(0,p.jsx)(Z,{children:n.map((function(t){var e=t.character,r=t.name,n=t.id,a=t.profile_path;return(0,p.jsx)("li",{children:(0,p.jsx)(h,{name:r,character:e,profile_path:a})},n)}))}):(0,p.jsx)("p",{children:"We don't have cast for this movie"})})}},635:function(t,e,r){var n=r(165),a=r(861),c=r(144),i=r(671),s=r(274),o=r(359),u=r(243),p=(0,o.Z)("URL"),h=(0,o.Z)("API_KEY"),f=(0,o.Z)("TRAND"),Z=(0,o.Z)("DETAILS"),l=(0,o.Z)("CREDITS"),d=(0,o.Z)("REVIEWS"),v=(0,o.Z)("SEARCH"),w=(0,c.Z)((function t(){var e=this;(0,i.Z)(this,t),Object.defineProperty(this,p,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,h,{writable:!0,value:"89c7dfceaf9e376cdb680a771d381668"}),Object.defineProperty(this,f,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,Z,{writable:!0,value:"movie/"}),Object.defineProperty(this,l,{writable:!0,value:"/credits"}),Object.defineProperty(this,d,{writable:!0,value:"/reviews"}),Object.defineProperty(this,v,{writable:!0,value:"search/movie"}),this.trand=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,s.Z)(e,p)[p]).concat((0,s.Z)(e,f)[f],"?api_key=").concat((0,s.Z)(e,h)[h]));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)}))),this.details=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,s.Z)(e,p)[p]).concat((0,s.Z)(e,Z)[Z]).concat(r,"?api_key=").concat((0,s.Z)(e,h)[h]));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.credits=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,s.Z)(e,p)[p]).concat((0,s.Z)(e,Z)[Z]).concat(r).concat((0,s.Z)(e,l)[l],"?api_key=").concat((0,s.Z)(e,h)[h]));case 2:return a=t.sent,t.abrupt("return",a.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.reviews=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,s.Z)(e,p)[p]).concat((0,s.Z)(e,Z)[Z]).concat(r).concat((0,s.Z)(e,d)[d],"?api_key=").concat((0,s.Z)(e,h)[h]));case 2:return a=t.sent,t.abrupt("return",a.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.search=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,s.Z)(e,p)[p]).concat((0,s.Z)(e,v)[v],"?api_key=").concat((0,s.Z)(e,h)[h],"&query=").concat(r));case 2:return a=t.sent,t.abrupt("return",a.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),b=new w;e.Z=b}}]);
//# sourceMappingURL=728.cda8e53d.chunk.js.map