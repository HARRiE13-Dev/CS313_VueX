(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{358:function(t,e,n){"use strict";var r=n(388),o=n(389);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},388:function(t,e,n){"use strict";var r=n(4),o=n(18),c=n(107),l=n(43),f=n(227),d=n(226),v=n(225),y=n(24),h=n(12),O=n(160),j=n(108),m=n(163);t.exports=function(t,e,n){var w=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),S=w?"set":"add",C=o[t],k=C&&C.prototype,_=C,P={},E=function(t){var e=k[t];l(k,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!y(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return x&&!y(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!y(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof C||!(x||k.forEach&&!h((function(){(new C).entries().next()})))))_=n.getConstructor(e,t,w,S),f.REQUIRED=!0;else if(c(t,!0)){var z=new _,D=z[S](x?{}:-0,1)!=z,N=h((function(){z.has(1)})),B=O((function(t){new C(t)})),F=!x&&h((function(){for(var t=new C,e=5;e--;)t[S](e,e);return!t.has(-0)}));B||((_=e((function(e,n){v(e,_,t);var r=m(new C,e,_);return null!=n&&d(n,r[S],r,w),r}))).prototype=k,k.constructor=_),(N||F)&&(E("delete"),E("has"),w&&E("get")),(F||D)&&E(S),x&&k.clear&&delete k.clear}return P[t]=_,r({global:!0,forced:_!=C},P),j(_,t),x||n.setStrong(_,t,w),_}},389:function(t,e,n){"use strict";var r=n(35).f,o=n(87),c=n(229),l=n(88),f=n(225),d=n(226),v=n(161),y=n(162),h=n(30),O=n(227).fastKey,j=n(76),m=j.set,w=j.getterFor;t.exports={getConstructor:function(t,e,n,v){var y=t((function(t,r){f(t,y,e),m(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),null!=r&&d(r,t[v],t,n)})),j=w(e),x=function(t,e,n){var r,o,c=j(t),l=S(t,e);return l?l.value=n:(c.last=l={index:o=O(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),h?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},S=function(t,e){var n,r=j(t),o=O(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(y.prototype,{clear:function(){for(var t=j(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,h?t.size=0:this.size=0},delete:function(t){var e=j(this),n=S(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),h?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=j(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(y.prototype,n?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),h&&r(y.prototype,"size",{get:function(){return j(this).size}}),y},setStrong:function(t,e,n){var r=e+" Iterator",o=w(e),c=w(r);v(t,e,(function(t,e){m(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),y(e)}}},394:function(t,e,n){"use strict";n.r(e);var r={},o=n(77),c=n(106),l=n.n(c),f=(n(10),n(7),n(8),n(46),n(135),n(86),n(358),n(23),n(13),n(14),n(11),n(17),n(33),n(50),n(69),n(70),n(9),n(51),n(2)),d=(n(228),n(0)),v=n(73),y=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=["sm","md","lg","xl"],m=j.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=j.reduce((function(t,e){return t["offset"+Object(y.t)(e)]={type:[String,Number],default:null},t}),{}),x=j.reduce((function(t,e){return t["order"+Object(y.t)(e)]={type:[String,Number],default:null},t}),{}),S={col:Object.keys(m),offset:Object.keys(w),order:Object.keys(x)};function C(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var k=new Map,_=d.a.extend({name:"v-col",functional:!0,props:O(O(O(O({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=k.get(o);return l||function(){var t,e;for(e in l=[],S)S[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&l.push(o)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},Object(f.a)(t,"col-".concat(n.cols),n.cols),Object(f.a)(t,"offset-".concat(n.offset),n.offset),Object(f.a)(t,"order-".concat(n.order),n.order),Object(f.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),k.set(o,l)}(),t(n.tag,Object(v.a)(data,{class:l}),r)}});n(27),n(59);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=["sm","md","lg","xl"],D=["start","end","center"];function N(t,e){return z.reduce((function(n,r){return n[t+Object(y.t)(r)]=e(),n}),{})}var B=function(t){return[].concat(D,["baseline","stretch"]).includes(t)},F=N("align",(function(){return{type:String,default:null,validator:B}})),M=function(t){return[].concat(D,["space-between","space-around"]).includes(t)},R=N("justify",(function(){return{type:String,default:null,validator:M}})),L=function(t){return[].concat(D,["space-between","space-around","stretch"]).includes(t)},G=N("alignContent",(function(){return{type:String,default:null,validator:L}})),I={align:Object.keys(F),justify:Object.keys(R),alignContent:Object.keys(G)},J={align:"align",justify:"justify",alignContent:"align-content"};function V(t,e,n){var r=J[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var W=new Map,$=d.a.extend({name:"v-row",functional:!0,props:E(E(E({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:B}},F),{},{justify:{type:String,default:null,validator:M}},R),{},{alignContent:{type:String,default:null,validator:L}},G),render:function(t,e){var n=e.props,data=e.data,r=e.children,o="";for(var c in n)o+=String(n[c]);var l=W.get(o);return l||function(){var t,e;for(e in l=[],I)I[e].forEach((function(t){var r=n[t],o=V(e,t,r);o&&l.push(o)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(f.a)(t,"align-".concat(n.align),n.align),Object(f.a)(t,"justify-".concat(n.justify),n.justify),Object(f.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),W.set(o,l)}(),t(n.tag,Object(v.a)(data,{staticClass:"row",class:l}),r)}}),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[e("v-col",{attrs:{justify:"center",align:"center"}},[e("h1",{staticClass:"text-uppercase"},[this._v("Fast Tracking Service")])])],1)],1),this._v(" "),e("br"),this._v(" "),this._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"section-heading"},[t._v("Services")])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-md-4"},[n("span",{staticClass:"mdi mdi-cart mdi-48px"}),t._v(" "),n("h3",{staticClass:"my-3"},[t._v("E-Commerce")])]),t._v(" "),n("div",{staticClass:"col-md-4"},[n("span",{staticClass:"mdi mdi-truck-fast mdi-48px"}),t._v(" "),n("h3",{staticClass:"my-3"},[t._v("fast service")])]),t._v(" "),n("div",{staticClass:"col-md-4"},[n("span",{staticClass:"mdi mdi-package-variant mdi-48px"}),t._v(" "),n("h3",{staticClass:"my-3"},[t._v("Service Rates")])])])])}],!1,null,null,null);e.default=component.exports;l()(component,{VCol:_,VRow:$})}}]);