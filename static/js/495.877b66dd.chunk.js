"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[495],{495:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r,a,c,i=n(165),o=n(861),s=n(439),u=n(791),p=n(635),Z=n(689),f=n(168),d=n(867),h=n(87).Link,l=(0,d.ZP)(h)(r||(r=(0,f.Z)(["\n  color: white;\n  text-decoration: none;\n  font-size: 18px;\n\n  &:hover {\n    color: #eac645;\n  }\n"]))),v=d.ZP.li(a||(a=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),w=n(184),b=function(t){var e=t.movies,n=void 0===e?[]:e,r=(0,Z.TH)();return(0,w.jsx)("ul",{children:n.map((function(t){var e=t.title,n=t.id;return(0,w.jsx)(v,{children:(0,w.jsx)(l,{to:"movies/".concat(n),state:{from:r},children:e})},n)}))})},x=d.ZP.main(c||(c=(0,f.Z)(["\n  color: white;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-left: 60px;\n"]))),m=function(){var t=(0,u.useState)([]),e=(0,s.Z)(t,2),n=e[0],r=e[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,i.Z)().mark((function t(){var e;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.Z.trand();case 3:e=t.sent,r(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,w.jsxs)(x,{children:[(0,w.jsx)("h1",{children:"Trending today"}),(0,w.jsx)(b,{movies:n})]})}},635:function(t,e,n){var r=n(165),a=n(861),c=n(144),i=n(671),o=n(274),s=n(359),u=n(243),p=(0,s.Z)("URL"),Z=(0,s.Z)("API_KEY"),f=(0,s.Z)("TRAND"),d=(0,s.Z)("DETAILS"),h=(0,s.Z)("CREDITS"),l=(0,s.Z)("REVIEWS"),v=(0,s.Z)("SEARCH"),w=(0,c.Z)((function t(){var e=this;(0,i.Z)(this,t),Object.defineProperty(this,p,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,Z,{writable:!0,value:"89c7dfceaf9e376cdb680a771d381668"}),Object.defineProperty(this,f,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,d,{writable:!0,value:"movie/"}),Object.defineProperty(this,h,{writable:!0,value:"/credits"}),Object.defineProperty(this,l,{writable:!0,value:"/reviews"}),Object.defineProperty(this,v,{writable:!0,value:"search/movie"}),this.trand=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,o.Z)(e,p)[p]).concat((0,o.Z)(e,f)[f],"?api_key=").concat((0,o.Z)(e,Z)[Z]));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)}))),this.details=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,o.Z)(e,p)[p]).concat((0,o.Z)(e,d)[d]).concat(n,"?api_key=").concat((0,o.Z)(e,Z)[Z]));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.credits=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,o.Z)(e,p)[p]).concat((0,o.Z)(e,d)[d]).concat(n).concat((0,o.Z)(e,h)[h],"?api_key=").concat((0,o.Z)(e,Z)[Z]));case 2:return a=t.sent,t.abrupt("return",a.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.reviews=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,o.Z)(e,p)[p]).concat((0,o.Z)(e,d)[d]).concat(n).concat((0,o.Z)(e,l)[l],"?api_key=").concat((0,o.Z)(e,Z)[Z]));case 2:return a=t.sent,t.abrupt("return",a.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.search=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat((0,o.Z)(e,p)[p]).concat((0,o.Z)(e,v)[v],"?api_key=").concat((0,o.Z)(e,Z)[Z],"&query=").concat(n));case 2:return a=t.sent,t.abrupt("return",a.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),b=new w;e.Z=b}}]);
//# sourceMappingURL=495.877b66dd.chunk.js.map