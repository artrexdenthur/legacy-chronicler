!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/packs/",n(n.s=51)}({51:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(e){case"all":return function(e){return e({type:"FETCH_CONCEPTS"}),Promise.all([fetch("/api/v1/concepts"),fetch("/api/v1/nouns"),fetch("/api/v1/adjectives")]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))}),(function(e){console.log(e)})).then((function(t){var n=r(t,3),o=n[0],u=n[1],c=n[2];return console.log(o),e({type:"RECEIVE_CONCEPTS",concepts:o,adjectives:c,nouns:u})}))};case"concept":case"adjective":case"noun":return function(t){return t({type:"FETCH_CONCEPTS"}),fetch("/api/v1/".concat(e,"s")).then(u).then((function(n){return console.log(n),t((r={type:"RECEIVE_CONCEPTS"},o="".concat(e,"s"),u=n,o in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r));var r,o,u}))};default:console.log("Invalid type given to fetchConcepts():",e)}}function u(e){return e.json().then((function(t){return e.ok?t:Promise.reject(t)}))}n.r(t),n.d(t,"default",(function(){return o}))}});
//# sourceMappingURL=fetchConcepts-0a76566bf77719fce5ca.js.map