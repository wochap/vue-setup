webpackJsonp([1,0],[function(e,t,o){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var n=o(3),r=u(n),s=o(9),a=u(s),f=o(10),i=u(f),d=o(52),l=o(4),p=u(l),c=o(12),_=u(c),v=o(11),x=u(v),A=o(47),M=u(A);o(36),r["default"].use(i["default"]),r["default"].use(a["default"]),(0,x["default"])(r["default"]),(0,d.sync)(p["default"],_["default"]),_["default"].start(M["default"],"#root")},,,,function(e,t,o){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(3),r=u(n),s=o(10),a=u(s),f=o(53),i=u(f),d=o(17),l=u(d);r["default"].use(a["default"]);var p=!1,c=new a["default"].Store({modules:{ajax:l["default"]},strict:p,middlewares:p?[(0,i["default"])()]:[]});t["default"]=c},,,,,,,function(e,t,o){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function n(e){e.component("app-header",s["default"]),e.component("app-footer",f["default"])}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var r=o(51),s=u(r),a=o(50),f=u(a)},function(e,t,o){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(3),r=u(n),s=o(9),a=u(s),f=o(13),i=!1;r["default"].use(a["default"]);var d=new a["default"]({hashbang:!!i,history:!i,linkActiveClass:"is-active",transitionOnLoad:!0,root:"/vue-setup"});d.map(f.routes),t["default"]=d},function(e,t,o){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var n=o(14),r=u(n),s=o(15),a=u(s);t.routes={"/":r["default"],"/404":a["default"],"*":a["default"]}},function(e,t,o){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(48),r=u(n);t["default"]={name:"Home",component:r["default"]}},function(e,t,o){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(49),r=u(n);t["default"]={name:"NotFound",component:r["default"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BEGIN_AJAX_CALL="BEGIN_AJAX_CALL",t.AJAX_CALL_ERROR="AJAX_CALL_ERROR",t.AJAX_CALL_SUCCESS="AJAX_CALL_SUCCESS"},function(e,t,o){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r,s=o(24),a=n(s),f=o(16),i=u(f),d={inProgress:0},l=(r={},(0,a["default"])(r,i.BEGIN_AJAX_CALL,function(e){e.inProgress=e.inProgress+1}),(0,a["default"])(r,i.AJAX_CALL_SUCCESS,function(e,t){e.inProgress=e.inProgress-1}),(0,a["default"])(r,i.AJAX_CALL_ERROR,function(e,t){e.inProgress=e.inProgress-1}),r);t["default"]={state:d,mutations:l}},function(e,t,o){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(4),r=u(n);t["default"]={name:"RootContainer",store:r["default"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"HomePage"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"NotFoundPage"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports=" <div> RootContainer <router-view></router-view> </div> "},function(e,t){e.exports=" <div> <app-header></app-header> HomePage <app-footer></app-footer> </div> "},function(e,t){e.exports=" <div> <app-header></app-header> NotFoundPage </div> "},function(e,t){e.exports=" <footer> AppFooter </footer> "},function(e,t){e.exports=" <header> AppHeader <nav> <ul> <li> <a v-link=\"{name: 'Home', exact: true}\">Home</a> </li> <li> <a v-link=\"{name: 'NotFound'}\">NotFound</a> </li> </ul> </nav> </header> "},function(e,t,o){var u,n;o(37),u=o(18),n=o(42),e.exports=u||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var u,n;o(38),u=o(19),n=o(43),e.exports=u||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var u,n;o(39),u=o(20),n=o(44),e.exports=u||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var u,n;o(40),u=o(21),n=o(45),e.exports=u||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var u,n;o(41),u=o(22),n=o(46),e.exports=u||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}]);
//# sourceMappingURL=app.383479fff1f27c82d2ae.js.map