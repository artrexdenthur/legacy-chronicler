!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/packs/",r(r.s=182)}({0:function(e,t,r){"use strict";e.exports=r(38)},1:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},10:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,i=a(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(i[f]=r[f]);if(n){c=n(r);for(var s=0;s<c.length;s++)u.call(r,c[s])&&(i[c[s]]=r[c[s]])}}return i}},18:function(e,t){(function(t){e.exports=t}).call(this,{})},182:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r(0),o=r.n(n),u=r(31);function a(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a.Title,{className:"bg-light text-center"},o.a.createElement("h2",null,"How to Use")),o.a.createElement(u.a.Body,null,"Go to the Adjectives and Nouns tag to view and add to the respective lists; the button to add more words is at the bottom of each list."),o.a.createElement(u.a.Body,null,"Go to the Concepts tag and click on an Adjective and a Noun to use the Conceptualize button, combining them into a new Concept"),o.a.createElement(u.a.Body,null,'Click the "Random Concept" button to generate a concept from your list!'))}},2:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},20:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){var r=void 0===t?{}:t,n=r.propTypes,u=r.defaultProps,a=r.allowFallback,c=void 0!==a&&a,i=r.displayName,l=void 0===i?e.name||e.displayName:i,f=function(t,r){return e(t,r)};return Object.assign(o.default.forwardRef||!c?o.default.forwardRef(f):function(e){return f(e,null)},{displayName:l,propTypes:n,defaultProps:u})};var n,o=(n=r(0))&&n.__esModule?n:{default:n}},3:function(e,t,r){var n;function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){"use strict";var u={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===n)for(var i in r)u.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):"object"===o(r(18))&&r(18)?void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n):window.classNames=a}()},31:function(e,t,r){"use strict";var n=r(1),o=r(2),u=r(3),a=r.n(u),c=r(0),i=r.n(c),l=r(4),f=r(9),s=function(e){return i.a.forwardRef((function(t,r){return i.a.createElement("div",Object(n.a)({},t,{ref:r,className:a()(t.className,e)}))}))},p=r(45),d=i.a.forwardRef((function(e,t){var r=e.bsPrefix,u=e.className,c=e.variant,f=e.as,s=void 0===f?"img":f,p=Object(o.a)(e,["bsPrefix","className","variant","as"]),d=Object(l.b)(r,"card-img");return i.a.createElement(s,Object(n.a)({ref:t,className:a()(c?d+"-"+c:d,u)},p))}));d.displayName="CardImg",d.defaultProps={variant:null};var y=d,b=s("h5"),m=s("h6"),v=Object(f.a)("card-body"),h=i.a.forwardRef((function(e,t){var r=e.bsPrefix,u=e.className,f=e.bg,s=e.text,d=e.border,y=e.body,b=e.children,m=e.as,h=void 0===m?"div":m,g=Object(o.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(l.b)(r,"card"),O=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return i.a.createElement(p.a.Provider,{value:O},i.a.createElement(h,Object(n.a)({ref:t},g,{className:a()(u,j,f&&"bg-"+f,s&&"text-"+s,d&&"border-"+d)}),y?i.a.createElement(v,null,b):b))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=y,h.Title=Object(f.a)("card-title",{Component:b}),h.Subtitle=Object(f.a)("card-subtitle",{Component:m}),h.Body=v,h.Link=Object(f.a)("card-link",{Component:"a"}),h.Text=Object(f.a)("card-text",{Component:"p"}),h.Header=Object(f.a)("card-header"),h.Footer=Object(f.a)("card-footer"),h.ImgOverlay=Object(f.a)("card-img-overlay");t.a=h},38:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=r(10),u="function"===typeof Symbol&&Symbol.for,a=u?Symbol.for("react.element"):60103,c=u?Symbol.for("react.portal"):60106,i=u?Symbol.for("react.fragment"):60107,l=u?Symbol.for("react.strict_mode"):60108,f=u?Symbol.for("react.profiler"):60114,s=u?Symbol.for("react.provider"):60109,p=u?Symbol.for("react.context"):60110,d=u?Symbol.for("react.forward_ref"):60112,y=u?Symbol.for("react.suspense"):60113,b=u?Symbol.for("react.suspense_list"):60120,m=u?Symbol.for("react.memo"):60115,v=u?Symbol.for("react.lazy"):60116;u&&Symbol.for("react.fundamental"),u&&Symbol.for("react.responder");var h="function"===typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function S(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||j}function x(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||j}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!==n(e)&&"function"!==typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=S.prototype;var _=w.prototype=new x;_.constructor=w,o(_,S.prototype),_.isPureReactComponent=!0;var P={current:null},C={suspense:null},E={current:null},k=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var n=void 0,o={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:E.current}}function $(e){return"object"===n(e)&&null!==e&&e.$$typeof===a}var A=/\/+/g,M=[];function I(e,t,r,n){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function U(e,t,r){return null==e?0:function e(t,r,o,u){var i=n(t);"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return o(u,t,""===r?"."+B(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var s=r+B(i=t[f],f);l+=e(i,s,o,u)}else if(null===t||"object"!==n(t)?s=null:s="function"===typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"===typeof s)for(t=s.call(t),f=0;!(i=t.next()).done;)l+=e(i=i.value,s=r+B(i,f++),o,u);else if("object"===i)throw o=""+t,g(Error(31),"[object Object]"===o?"object with keys {"+Object.keys(t).join(", ")+"}":o,"");return l}(e,"",t,r)}function B(e,t){return"object"===n(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(A,"$&/")+"/"),U(e,q,t=I(t,u,n,o)),T(t)}function H(){var e=P.current;if(null===e)throw g(Error(321));return e}var D={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;U(e,F,t=I(null,null,t,r)),T(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:S,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,r){return H().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,r){return H().useReducer(e,t,r)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:i,Profiler:f,StrictMode:l,Suspense:y,unstable_SuspenseList:b,createElement:R,cloneElement:function(e,t,r){if(null===e||void 0===e)throw g(Error(267),e);var n=void 0,u=o({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,l=E.current),void 0!==t.key&&(c=""+t.key);var f=void 0;for(n in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)k.call(t,n)&&!N.hasOwnProperty(n)&&(u[n]=void 0===t[n]&&void 0!==f?f[n]:t[n])}if(1===(n=arguments.length-2))u.children=r;else if(1<n){f=Array(n);for(var s=0;s<n;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:a,type:e.type,key:c,ref:i,props:u,_owner:l}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=C.suspense;C.suspense=void 0===t?null:t;try{e()}finally{C.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentBatchConfig:C,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:o}},V={default:D},z=V&&D||V;e.exports=z.default||z},39:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(n,(function(e,t){return t.toUpperCase()}))};var n=/-(.)/g;e.exports=t.default},4:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return f}));var n=r(1),o=r(20),u=r.n(o),a=r(0),c=r.n(a),i=c.a.createContext({});i.Consumer,i.Provider;function l(e,t){var r=Object(a.useContext)(i);return e||r[t]||t}function f(e,t){"string"===typeof t&&(t={prefix:t});var r=e.prototype&&e.prototype.isReactComponent,o=t,a=o.prefix,i=o.forwardRefAs,f=void 0===i?r?"ref":"innerRef":i;return u()((function(t,r){var o=Object(n.a)({},t);o[f]=r;var u=l(o.bsPrefix,a);return c.a.createElement(e,Object(n.a)({},o,{bsPrefix:u}))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},45:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=o.a.createContext(null)},9:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(1),o=r(2),u=r(3),a=r.n(u),c=r(0),i=r.n(c),l=r(39),f=r.n(l),s=r(4),p=function(e){return e[0].toUpperCase()+f()(e).slice(1)};function d(e,t){var r=void 0===t?{}:t,u=r.displayName,c=void 0===u?p(e):u,l=r.Component,f=void 0===l?"div":l,d=r.defaultProps,y=i.a.forwardRef((function(t,r){var u=t.className,c=t.bsPrefix,l=t.as,p=void 0===l?f:l,d=Object(o.a)(t,["className","bsPrefix","as"]),y=Object(s.b)(c,e);return i.a.createElement(p,Object(n.a)({ref:r,className:a()(u,y)},d))}));return y.defaultProps=d,y.displayName=c,y}}});
//# sourceMappingURL=Instructions-a56a3af6c499c4e9809e.js.map