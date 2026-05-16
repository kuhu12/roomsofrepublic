(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var fu={exports:{}},Za={},pu={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),bp=Symbol.for("react.portal"),vp=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Sp=Symbol.for("react.profiler"),Cp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),kp=Symbol.for("react.suspense"),_p=Symbol.for("react.memo"),Ap=Symbol.for("react.lazy"),vh=Symbol.iterator;function Ip(e){return e===null||typeof e!="object"?null:(e=vh&&e[vh]||e["@@iterator"],typeof e=="function"?e:null)}var mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yu=Object.assign,gu={};function lo(e,t,n){this.props=e,this.context=t,this.refs=gu,this.updater=n||mu}lo.prototype.isReactComponent={};lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bu(){}bu.prototype=lo.prototype;function hl(e,t,n){this.props=e,this.context=t,this.refs=gu,this.updater=n||mu}var cl=hl.prototype=new bu;cl.constructor=hl;yu(cl,lo.prototype);cl.isPureReactComponent=!0;var wh=Array.isArray,vu=Object.prototype.hasOwnProperty,ul={current:null},wu={key:!0,ref:!0,__self:!0,__source:!0};function Su(e,t,n){var o,i={},a=null,r=null;if(t!=null)for(o in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(a=""+t.key),t)vu.call(t,o)&&!wu.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),h=0;h<s;h++)l[h]=arguments[h+2];i.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)i[o]===void 0&&(i[o]=s[o]);return{$$typeof:hi,type:e,key:a,ref:r,props:i,_owner:ul.current}}function Lp(e,t){return{$$typeof:hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function Tp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sh=/\/+/g;function wr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tp(""+e.key):t.toString(36)}function Oi(e,t,n,o,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case hi:case bp:r=!0}}if(r)return r=e,i=i(r),e=o===""?"."+wr(r,0):o,wh(i)?(n="",e!=null&&(n=e.replace(Sh,"$&/")+"/"),Oi(i,t,n,"",function(h){return h})):i!=null&&(dl(i)&&(i=Lp(i,n+(!i.key||r&&r.key===i.key?"":(""+i.key).replace(Sh,"$&/")+"/")+e)),t.push(i)),1;if(r=0,o=o===""?".":o+":",wh(e))for(var s=0;s<e.length;s++){a=e[s];var l=o+wr(a,s);r+=Oi(a,t,n,l,i)}else if(l=Ip(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=o+wr(a,s++),r+=Oi(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function bi(e,t,n){if(e==null)return e;var o=[],i=0;return Oi(e,o,"","",function(a){return t.call(n,a,i++)}),o}function Mp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},Bi={transition:null},Hp={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:ul};function Cu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:bi,forEach:function(e,t,n){bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bi(e,function(){t++}),t},toArray:function(e){return bi(e,function(t){return t})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=lo;z.Fragment=vp;z.Profiler=Sp;z.PureComponent=hl;z.StrictMode=wp;z.Suspense=kp;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hp;z.act=Cu;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=yu({},e.props),i=e.key,a=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,r=ul.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)vu.call(t,l)&&!wu.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){s=Array(l);for(var h=0;h<l;h++)s[h]=arguments[h+2];o.children=s}return{$$typeof:hi,type:e.type,key:i,ref:a,props:o,_owner:r}};z.createContext=function(e){return e={$$typeof:Pp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cp,_context:e},e.Consumer=e};z.createElement=Su;z.createFactory=function(e){var t=Su.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:xp,render:e}};z.isValidElement=dl;z.lazy=function(e){return{$$typeof:Ap,_payload:{_status:-1,_result:e},_init:Mp}};z.memo=function(e,t){return{$$typeof:_p,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=t}};z.unstable_act=Cu;z.useCallback=function(e,t){return He.current.useCallback(e,t)};z.useContext=function(e){return He.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return He.current.useDeferredValue(e)};z.useEffect=function(e,t){return He.current.useEffect(e,t)};z.useId=function(){return He.current.useId()};z.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return He.current.useMemo(e,t)};z.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};z.useRef=function(e){return He.current.useRef(e)};z.useState=function(e){return He.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return He.current.useTransition()};z.version="18.3.1";pu.exports=z;var Ie=pu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=Ie,Ep=Symbol.for("react.element"),jp=Symbol.for("react.fragment"),Gp=Object.prototype.hasOwnProperty,Fp=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Up={key:!0,ref:!0,__self:!0,__source:!0};function Pu(e,t,n){var o,i={},a=null,r=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(r=t.ref);for(o in t)Gp.call(t,o)&&!Up.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:Ep,type:e,key:a,ref:r,props:i,_owner:Fp.current}}Za.Fragment=jp;Za.jsx=Pu;Za.jsxs=Pu;fu.exports=Za;var E=fu.exports,xu={exports:{}},Je={},ku={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,H){var S=A.length;A.push(H);e:for(;0<S;){var _=S-1>>>1,G=A[_];if(0<i(G,H))A[_]=H,A[S]=G,S=_;else break e}}function n(A){return A.length===0?null:A[0]}function o(A){if(A.length===0)return null;var H=A[0],S=A.pop();if(S!==H){A[0]=S;e:for(var _=0,G=A.length,D=G>>>1;_<D;){var K=2*(_+1)-1,_e=A[K],fe=K+1,Ee=A[fe];if(0>i(_e,S))fe<G&&0>i(Ee,_e)?(A[_]=Ee,A[fe]=S,_=fe):(A[_]=_e,A[K]=S,_=K);else if(fe<G&&0>i(Ee,S))A[_]=Ee,A[fe]=S,_=fe;else break e}}return H}function i(A,H){var S=A.sortIndex-H.sortIndex;return S!==0?S:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var r=Date,s=r.now();e.unstable_now=function(){return r.now()-s}}var l=[],h=[],c=1,d=null,u=3,p=!1,b=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var H=n(h);H!==null;){if(H.callback===null)o(h);else if(H.startTime<=A)o(h),H.sortIndex=H.expirationTime,t(l,H);else break;H=n(h)}}function v(A){if(g=!1,y(A),!b)if(n(l)!==null)b=!0,de(P);else{var H=n(h);H!==null&&se(v,H.startTime-A)}}function P(A,H){b=!1,g&&(g=!1,m(I),I=-1),p=!0;var S=u;try{for(y(H),d=n(l);d!==null&&(!(d.expirationTime>H)||A&&!B());){var _=d.callback;if(typeof _=="function"){d.callback=null,u=d.priorityLevel;var G=_(d.expirationTime<=H);H=e.unstable_now(),typeof G=="function"?d.callback=G:d===n(l)&&o(l),y(H)}else o(l);d=n(l)}if(d!==null)var D=!0;else{var K=n(h);K!==null&&se(v,K.startTime-H),D=!1}return D}finally{d=null,u=S,p=!1}}var C=!1,k=null,I=-1,U=5,L=-1;function B(){return!(e.unstable_now()-L<U)}function N(){if(k!==null){var A=e.unstable_now();L=A;var H=!0;try{H=k(!0,A)}finally{H?$():(C=!1,k=null)}}else C=!1}var $;if(typeof f=="function")$=function(){f(N)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,V=F.port2;F.port1.onmessage=N,$=function(){V.postMessage(null)}}else $=function(){w(N,0)};function de(A){k=A,C||(C=!0,$())}function se(A,H){I=w(function(){A(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){b||p||(b=!0,de(P))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(u){case 1:case 2:case 3:var H=3;break;default:H=u}var S=u;u=H;try{return A()}finally{u=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var S=u;u=A;try{return H()}finally{u=S}},e.unstable_scheduleCallback=function(A,H,S){var _=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?_+S:_):S=_,A){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=S+G,A={id:c++,callback:H,priorityLevel:A,startTime:S,expirationTime:G,sortIndex:-1},S>_?(A.sortIndex=S,t(h,A),n(l)===null&&A===n(h)&&(g?(m(I),I=-1):g=!0,se(v,S-_))):(A.sortIndex=G,t(l,A),b||p||(b=!0,de(P))),A},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(A){var H=u;return function(){var S=u;u=H;try{return A.apply(this,arguments)}finally{u=S}}}})(_u);ku.exports=_u;var Dp=ku.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=Ie,Ve=Dp;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Au=new Set,Ro={};function xn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Ro[e]=t,e=0;e<t.length;e++)Au.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=Object.prototype.hasOwnProperty,qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},Ph={};function Rp(e){return os.call(Ph,e)?!0:os.call(Ch,e)?!1:qp.test(e)?Ph[e]=!0:(Ch[e]=!0,!1)}function Op(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bp(e,t,n,o){if(t===null||typeof t>"u"||Op(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,o,i,a,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=r}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var fl=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fl,pl);Se[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fl,pl);Se[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fl,pl);Se[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,t,n,o){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bp(t,n,i,o)&&(n=null),o||i===null?Rp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Nt=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),is=Symbol.for("react.profiler"),Iu=Symbol.for("react.provider"),Lu=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),as=Symbol.for("react.suspense"),rs=Symbol.for("react.suspense_list"),bl=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Tu=Symbol.for("react.offscreen"),xh=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=xh&&e[xh]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Sr;function xo(e){if(Sr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sr=t&&t[1]||""}return`
`+Sr+e}var Cr=!1;function Pr(e,t){if(!e||Cr)return"";Cr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var o=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){o=h}e.call(t.prototype)}else{try{throw Error()}catch(h){o=h}e()}}catch(h){if(h&&o&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),a=o.stack.split(`
`),r=i.length-1,s=a.length-1;1<=r&&0<=s&&i[r]!==a[s];)s--;for(;1<=r&&0<=s;r--,s--)if(i[r]!==a[s]){if(r!==1||s!==1)do if(r--,s--,0>s||i[r]!==a[s]){var l=`
`+i[r].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=r&&0<=s);break}}}finally{Cr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xo(e):""}function $p(e){switch(e.tag){case 5:return xo(e.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return e=Pr(e.type,!1),e;case 11:return e=Pr(e.type.render,!1),e;case 1:return e=Pr(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case Ln:return"Portal";case is:return"Profiler";case yl:return"StrictMode";case as:return"Suspense";case rs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lu:return(e.displayName||"Context")+".Consumer";case Iu:return(e._context.displayName||"Context")+".Provider";case gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bl:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}function Vp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(t);case 8:return t===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wp(e){var t=Mu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){o=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(r){o=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=Wp(e))}function Hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Mu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kh(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nu(e,t){t=t.checked,t!=null&&ml(e,"checked",t,!1)}function hs(e,t){Nu(e,t);var n=Qt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cs(e,t.type,n):t.hasOwnProperty("defaultValue")&&cs(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _h(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cs(e,t,n){(t!=="number"||ca(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ko=Array.isArray;function Rn(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ah(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(ko(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function Eu(e,t){var n=Qt(t.value),o=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Ih(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jp=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(e){Jp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),No[t]=No[e]})});function Fu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||No.hasOwnProperty(e)&&No[e]?(""+t).trim():t+"px"}function Uu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Fu(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Xp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fs(e,t){if(t){if(Xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ps(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ms=null;function vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ys=null,On=null,Bn=null;function Lh(e){if(e=di(e)){if(typeof ys!="function")throw Error(x(280));var t=e.stateNode;t&&(t=or(t),ys(e.stateNode,e.type,t))}}function Du(e){On?Bn?Bn.push(e):Bn=[e]:On=e}function zu(){if(On){var e=On,t=Bn;if(Bn=On=null,Lh(e),t)for(e=0;e<t.length;e++)Lh(t[e])}}function qu(e,t){return e(t)}function Ru(){}var xr=!1;function Ou(e,t,n){if(xr)return e(t,n);xr=!0;try{return qu(e,t,n)}finally{xr=!1,(On!==null||Bn!==null)&&(Ru(),zu())}}function Bo(e,t){var n=e.stateNode;if(n===null)return null;var o=or(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var gs=!1;if(It)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){gs=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{gs=!1}function Qp(e,t,n,o,i,a,r,s,l){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(c){this.onError(c)}}var Eo=!1,ua=null,da=!1,bs=null,Kp={onError:function(e){Eo=!0,ua=e}};function Zp(e,t,n,o,i,a,r,s,l){Eo=!1,ua=null,Qp.apply(Kp,arguments)}function Yp(e,t,n,o,i,a,r,s,l){if(Zp.apply(this,arguments),Eo){if(Eo){var h=ua;Eo=!1,ua=null}else throw Error(x(198));da||(da=!0,bs=h)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Th(e){if(kn(e)!==e)throw Error(x(188))}function em(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Th(i),e;if(a===o)return Th(i),t;a=a.sibling}throw Error(x(188))}if(n.return!==o.return)n=i,o=a;else{for(var r=!1,s=i.child;s;){if(s===n){r=!0,n=i,o=a;break}if(s===o){r=!0,o=i,n=a;break}s=s.sibling}if(!r){for(s=a.child;s;){if(s===n){r=!0,n=a,o=i;break}if(s===o){r=!0,o=a,n=i;break}s=s.sibling}if(!r)throw Error(x(189))}}if(n.alternate!==o)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function $u(e){return e=em(e),e!==null?Vu(e):null}function Vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vu(e);if(t!==null)return t;e=e.sibling}return null}var Wu=Ve.unstable_scheduleCallback,Mh=Ve.unstable_cancelCallback,tm=Ve.unstable_shouldYield,nm=Ve.unstable_requestPaint,ce=Ve.unstable_now,om=Ve.unstable_getCurrentPriorityLevel,wl=Ve.unstable_ImmediatePriority,Ju=Ve.unstable_UserBlockingPriority,fa=Ve.unstable_NormalPriority,im=Ve.unstable_LowPriority,Xu=Ve.unstable_IdlePriority,Ya=null,yt=null;function am(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:lm,rm=Math.log,sm=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(rm(e)/sm|0)|0}var Ci=64,Pi=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pa(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,r=n&268435455;if(r!==0){var s=r&~i;s!==0?o=_o(s):(a&=r,a!==0&&(o=_o(a)))}else r=n&~i,r!==0?o=_o(r):a!==0&&(o=_o(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&i)&&(i=o&-o,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-lt(t),i=1<<n,o|=e[n],t&=~i;return o}function hm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var r=31-lt(a),s=1<<r,l=i[r];l===-1?(!(s&n)||s&o)&&(i[r]=hm(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qu(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function kr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-lt(n),a=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~a}}function Sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-lt(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var X=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zu,Cl,Yu,ed,td,ws=!1,xi=[],Rt=null,Ot=null,Bt=null,$o=new Map,Vo=new Map,Ft=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(t.pointerId)}}function po(e,t,n,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=di(t),t!==null&&Cl(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fm(e,t,n,o,i){switch(t){case"focusin":return Rt=po(Rt,e,t,n,o,i),!0;case"dragenter":return Ot=po(Ot,e,t,n,o,i),!0;case"mouseover":return Bt=po(Bt,e,t,n,o,i),!0;case"pointerover":var a=i.pointerId;return $o.set(a,po($o.get(a)||null,e,t,n,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Vo.set(a,po(Vo.get(a)||null,e,t,n,o,i)),!0}return!1}function nd(e){var t=ln(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=Bu(n),t!==null){e.blockedOn=t,td(e.priority,function(){Yu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);ms=o,n.target.dispatchEvent(o),ms=null}else return t=di(n),t!==null&&Cl(t),e.blockedOn=n,!1;t.shift()}return!0}function Nh(e,t,n){$i(e)&&n.delete(t)}function pm(){ws=!1,Rt!==null&&$i(Rt)&&(Rt=null),Ot!==null&&$i(Ot)&&(Ot=null),Bt!==null&&$i(Bt)&&(Bt=null),$o.forEach(Nh),Vo.forEach(Nh)}function mo(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,pm)))}function Wo(e){function t(i){return mo(i,e)}if(0<xi.length){mo(xi[0],e);for(var n=1;n<xi.length;n++){var o=xi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Rt!==null&&mo(Rt,e),Ot!==null&&mo(Ot,e),Bt!==null&&mo(Bt,e),$o.forEach(t),Vo.forEach(t),n=0;n<Ft.length;n++)o=Ft[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)nd(n),n.blockedOn===null&&Ft.shift()}var $n=Nt.ReactCurrentBatchConfig,ma=!0;function mm(e,t,n,o){var i=X,a=$n.transition;$n.transition=null;try{X=1,Pl(e,t,n,o)}finally{X=i,$n.transition=a}}function ym(e,t,n,o){var i=X,a=$n.transition;$n.transition=null;try{X=4,Pl(e,t,n,o)}finally{X=i,$n.transition=a}}function Pl(e,t,n,o){if(ma){var i=Ss(e,t,n,o);if(i===null)jr(e,t,o,ya,n),Hh(e,o);else if(fm(i,e,t,n,o))o.stopPropagation();else if(Hh(e,o),t&4&&-1<dm.indexOf(e)){for(;i!==null;){var a=di(i);if(a!==null&&Zu(a),a=Ss(e,t,n,o),a===null&&jr(e,t,o,ya,n),a===i)break;i=a}i!==null&&o.stopPropagation()}else jr(e,t,o,null,n)}}var ya=null;function Ss(e,t,n,o){if(ya=null,e=vl(o),e=ln(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ya=e,null}function od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(om()){case wl:return 1;case Ju:return 4;case fa:case im:return 16;case Xu:return 536870912;default:return 16}default:return 16}}var Dt=null,xl=null,Vi=null;function id(){if(Vi)return Vi;var e,t=xl,n=t.length,o,i="value"in Dt?Dt.value:Dt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var r=n-e;for(o=1;o<=r&&t[n-o]===i[a-o];o++);return Vi=i.slice(e,1<o?1-o:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Eh(){return!1}function Xe(e){function t(n,o,i,a,r){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ki:Eh,this.isPropagationStopped=Eh,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Xe(ho),ui=re({},ho,{view:0,detail:0}),gm=Xe(ui),_r,Ar,yo,er=re({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yo&&(yo&&e.type==="mousemove"?(_r=e.screenX-yo.screenX,Ar=e.screenY-yo.screenY):Ar=_r=0,yo=e),_r)},movementY:function(e){return"movementY"in e?e.movementY:Ar}}),jh=Xe(er),bm=re({},er,{dataTransfer:0}),vm=Xe(bm),wm=re({},ui,{relatedTarget:0}),Ir=Xe(wm),Sm=re({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=Xe(Sm),Pm=re({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xm=Xe(Pm),km=re({},ho,{data:0}),Gh=Xe(km),_m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Im[e])?!!t[e]:!1}function _l(){return Lm}var Tm=re({},ui,{key:function(e){if(e.key){var t=_m[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_l,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mm=Xe(Tm),Hm=re({},er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=Xe(Hm),Nm=re({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_l}),Em=Xe(Nm),jm=re({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gm=Xe(jm),Fm=re({},er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Um=Xe(Fm),Dm=[9,13,27,32],Al=It&&"CompositionEvent"in window,jo=null;It&&"documentMode"in document&&(jo=document.documentMode);var zm=It&&"TextEvent"in window&&!jo,ad=It&&(!Al||jo&&8<jo&&11>=jo),Uh=" ",Dh=!1;function rd(e,t){switch(e){case"keyup":return Dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function qm(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(Dh=!0,Uh);case"textInput":return e=t.data,e===Uh&&Dh?null:e;default:return null}}function Rm(e,t){if(Mn)return e==="compositionend"||!Al&&rd(e,t)?(e=id(),Vi=xl=Dt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ad&&t.locale!=="ko"?null:t.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Om[e.type]:t==="textarea"}function ld(e,t,n,o){Du(o),t=ga(t,"onChange"),0<t.length&&(n=new kl("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Go=null,Jo=null;function Bm(e){vd(e,0)}function tr(e){var t=En(e);if(Hu(t))return e}function $m(e,t){if(e==="change")return t}var hd=!1;if(It){var Lr;if(It){var Tr="oninput"in document;if(!Tr){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Tr=typeof qh.oninput=="function"}Lr=Tr}else Lr=!1;hd=Lr&&(!document.documentMode||9<document.documentMode)}function Rh(){Go&&(Go.detachEvent("onpropertychange",cd),Jo=Go=null)}function cd(e){if(e.propertyName==="value"&&tr(Jo)){var t=[];ld(t,Jo,e,vl(e)),Ou(Bm,t)}}function Vm(e,t,n){e==="focusin"?(Rh(),Go=t,Jo=n,Go.attachEvent("onpropertychange",cd)):e==="focusout"&&Rh()}function Wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tr(Jo)}function Jm(e,t){if(e==="click")return tr(t)}function Xm(e,t){if(e==="input"||e==="change")return tr(t)}function Qm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Qm;function Xo(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!os.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bh(e,t){var n=Oh(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(){for(var e=window,t=ca();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ca(e.document)}return t}function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Km(e){var t=dd(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ud(n.ownerDocument.documentElement,n)){if(o!==null&&Il(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=Bh(n,a);var r=Bh(n,o);i&&r&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zm=It&&"documentMode"in document&&11>=document.documentMode,Hn=null,Cs=null,Fo=null,Ps=!1;function $h(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ps||Hn==null||Hn!==ca(o)||(o=Hn,"selectionStart"in o&&Il(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fo&&Xo(Fo,o)||(Fo=o,o=ga(Cs,"onSelect"),0<o.length&&(t=new kl("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Hn)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},Mr={},fd={};It&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function nr(e){if(Mr[e])return Mr[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fd)return Mr[e]=t[n];return e}var pd=nr("animationend"),md=nr("animationiteration"),yd=nr("animationstart"),gd=nr("transitionend"),bd=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){bd.set(e,t),xn(t,[e])}for(var Hr=0;Hr<Vh.length;Hr++){var Nr=Vh[Hr],Ym=Nr.toLowerCase(),ey=Nr[0].toUpperCase()+Nr.slice(1);en(Ym,"on"+ey)}en(pd,"onAnimationEnd");en(md,"onAnimationIteration");en(yd,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(gd,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Wh(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Yp(o,t,void 0,e),e.currentTarget=null}function vd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var r=o.length-1;0<=r;r--){var s=o[r],l=s.instance,h=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Wh(i,s,h),a=l}else for(r=0;r<o.length;r++){if(s=o[r],l=s.instance,h=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Wh(i,s,h),a=l}}}if(da)throw e=bs,da=!1,bs=null,e}function ee(e,t){var n=t[Is];n===void 0&&(n=t[Is]=new Set);var o=e+"__bubble";n.has(o)||(wd(t,e,2,!1),n.add(o))}function Er(e,t,n){var o=0;t&&(o|=4),wd(n,e,o,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Ai]){e[Ai]=!0,Au.forEach(function(n){n!=="selectionchange"&&(ty.has(n)||Er(n,!1,e),Er(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Er("selectionchange",!1,t))}}function wd(e,t,n,o){switch(od(t)){case 1:var i=mm;break;case 4:i=ym;break;default:i=Pl}n=i.bind(null,t,n,e),i=void 0,!gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function jr(e,t,n,o,i){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var r=o.tag;if(r===3||r===4){var s=o.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(r===4)for(r=o.return;r!==null;){var l=r.tag;if((l===3||l===4)&&(l=r.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;r=r.return}for(;s!==null;){if(r=ln(s),r===null)return;if(l=r.tag,l===5||l===6){o=a=r;continue e}s=s.parentNode}}o=o.return}Ou(function(){var h=a,c=vl(n),d=[];e:{var u=bd.get(e);if(u!==void 0){var p=kl,b=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":p=Mm;break;case"focusin":b="focus",p=Ir;break;case"focusout":b="blur",p=Ir;break;case"beforeblur":case"afterblur":p=Ir;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Em;break;case pd:case md:case yd:p=Cm;break;case gd:p=Gm;break;case"scroll":p=gm;break;case"wheel":p=Um;break;case"copy":case"cut":case"paste":p=xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fh}var g=(t&4)!==0,w=!g&&e==="scroll",m=g?u!==null?u+"Capture":null:u;g=[];for(var f=h,y;f!==null;){y=f;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,m!==null&&(v=Bo(f,m),v!=null&&g.push(Ko(f,v,y)))),w)break;f=f.return}0<g.length&&(u=new p(u,b,null,n,c),d.push({event:u,listeners:g}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==ms&&(b=n.relatedTarget||n.fromElement)&&(ln(b)||b[Lt]))break e;if((p||u)&&(u=c.window===c?c:(u=c.ownerDocument)?u.defaultView||u.parentWindow:window,p?(b=n.relatedTarget||n.toElement,p=h,b=b?ln(b):null,b!==null&&(w=kn(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(p=null,b=h),p!==b)){if(g=jh,v="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(g=Fh,v="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?u:En(p),y=b==null?u:En(b),u=new g(v,f+"leave",p,n,c),u.target=w,u.relatedTarget=y,v=null,ln(c)===h&&(g=new g(m,f+"enter",b,n,c),g.target=y,g.relatedTarget=w,v=g),w=v,p&&b)t:{for(g=p,m=b,f=0,y=g;y;y=An(y))f++;for(y=0,v=m;v;v=An(v))y++;for(;0<f-y;)g=An(g),f--;for(;0<y-f;)m=An(m),y--;for(;f--;){if(g===m||m!==null&&g===m.alternate)break t;g=An(g),m=An(m)}g=null}else g=null;p!==null&&Jh(d,u,p,g,!1),b!==null&&w!==null&&Jh(d,w,b,g,!0)}}e:{if(u=h?En(h):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var P=$m;else if(zh(u))if(hd)P=Xm;else{P=Wm;var C=Vm}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(P=Jm);if(P&&(P=P(e,h))){ld(d,P,n,c);break e}C&&C(e,u,h),e==="focusout"&&(C=u._wrapperState)&&C.controlled&&u.type==="number"&&cs(u,"number",u.value)}switch(C=h?En(h):window,e){case"focusin":(zh(C)||C.contentEditable==="true")&&(Hn=C,Cs=h,Fo=null);break;case"focusout":Fo=Cs=Hn=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,$h(d,n,c);break;case"selectionchange":if(Zm)break;case"keydown":case"keyup":$h(d,n,c)}var k;if(Al)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Mn?rd(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(ad&&n.locale!=="ko"&&(Mn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Mn&&(k=id()):(Dt=c,xl="value"in Dt?Dt.value:Dt.textContent,Mn=!0)),C=ga(h,I),0<C.length&&(I=new Gh(I,e,null,n,c),d.push({event:I,listeners:C}),k?I.data=k:(k=sd(n),k!==null&&(I.data=k)))),(k=zm?qm(e,n):Rm(e,n))&&(h=ga(h,"onBeforeInput"),0<h.length&&(c=new Gh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:h}),c.data=k))}vd(d,t)})}function Ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ga(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Bo(e,n),a!=null&&o.unshift(Ko(e,a,i)),a=Bo(e,t),a!=null&&o.push(Ko(e,a,i))),e=e.return}return o}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jh(e,t,n,o,i){for(var a=t._reactName,r=[];n!==null&&n!==o;){var s=n,l=s.alternate,h=s.stateNode;if(l!==null&&l===o)break;s.tag===5&&h!==null&&(s=h,i?(l=Bo(n,a),l!=null&&r.unshift(Ko(n,l,s))):i||(l=Bo(n,a),l!=null&&r.push(Ko(n,l,s)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var ny=/\r\n?/g,oy=/\u0000|\uFFFD/g;function Xh(e){return(typeof e=="string"?e:""+e).replace(ny,`
`).replace(oy,"")}function Ii(e,t,n){if(t=Xh(t),Xh(e)!==t&&n)throw Error(x(425))}function ba(){}var xs=null,ks=null;function _s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var As=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(e){return Qh.resolve(null).then(e).catch(ry)}:As;function ry(e){setTimeout(function(){throw e})}function Gr(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),Wo(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);Wo(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var co=Math.random().toString(36).slice(2),mt="__reactFiber$"+co,Zo="__reactProps$"+co,Lt="__reactContainer$"+co,Is="__reactEvents$"+co,sy="__reactListeners$"+co,ly="__reactHandles$"+co;function ln(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kh(e);e!==null;){if(n=e[mt])return n;e=Kh(e)}return t}e=n,n=e.parentNode}return null}function di(e){return e=e[mt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function or(e){return e[Zo]||null}var Ls=[],jn=-1;function tn(e){return{current:e}}function te(e){0>jn||(e.current=Ls[jn],Ls[jn]=null,jn--)}function Y(e,t){jn++,Ls[jn]=e.current,e.current=t}var Kt={},ke=tn(Kt),De=tn(!1),yn=Kt;function Kn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function va(){te(De),te(ke)}function Zh(e,t,n){if(ke.current!==Kt)throw Error(x(168));Y(ke,t),Y(De,n)}function Sd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(x(108,Vp(e)||"Unknown",i));return re({},n,o)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,yn=ke.current,Y(ke,e),Y(De,De.current),!0}function Yh(e,t,n){var o=e.stateNode;if(!o)throw Error(x(169));n?(e=Sd(e,t,yn),o.__reactInternalMemoizedMergedChildContext=e,te(De),te(ke),Y(ke,e)):te(De),Y(De,n)}var xt=null,ir=!1,Fr=!1;function Cd(e){xt===null?xt=[e]:xt.push(e)}function hy(e){ir=!0,Cd(e)}function nn(){if(!Fr&&xt!==null){Fr=!0;var e=0,t=X;try{var n=xt;for(X=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}xt=null,ir=!1}catch(i){throw xt!==null&&(xt=xt.slice(e+1)),Wu(wl,nn),i}finally{X=t,Fr=!1}}return null}var Gn=[],Fn=0,Sa=null,Ca=0,Qe=[],Ke=0,gn=null,kt=1,_t="";function an(e,t){Gn[Fn++]=Ca,Gn[Fn++]=Sa,Sa=e,Ca=t}function Pd(e,t,n){Qe[Ke++]=kt,Qe[Ke++]=_t,Qe[Ke++]=gn,gn=e;var o=kt;e=_t;var i=32-lt(o)-1;o&=~(1<<i),n+=1;var a=32-lt(t)+i;if(30<a){var r=i-i%5;a=(o&(1<<r)-1).toString(32),o>>=r,i-=r,kt=1<<32-lt(t)+i|n<<i|o,_t=a+e}else kt=1<<a|n<<i|o,_t=e}function Ll(e){e.return!==null&&(an(e,1),Pd(e,1,0))}function Tl(e){for(;e===Sa;)Sa=Gn[--Fn],Gn[Fn]=null,Ca=Gn[--Fn],Gn[Fn]=null;for(;e===gn;)gn=Qe[--Ke],Qe[Ke]=null,_t=Qe[--Ke],Qe[Ke]=null,kt=Qe[--Ke],Qe[Ke]=null}var $e=null,Be=null,ne=!1,at=null;function xd(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Be=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:kt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Be=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ms(e){if(ne){var t=Be;if(t){var n=t;if(!ec(e,t)){if(Ts(e))throw Error(x(418));t=$t(n.nextSibling);var o=$e;t&&ec(e,t)?xd(o,n):(e.flags=e.flags&-4097|2,ne=!1,$e=e)}}else{if(Ts(e))throw Error(x(418));e.flags=e.flags&-4097|2,ne=!1,$e=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Li(e){if(e!==$e)return!1;if(!ne)return tc(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_s(e.type,e.memoizedProps)),t&&(t=Be)){if(Ts(e))throw kd(),Error(x(418));for(;t;)xd(e,t),t=$t(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=$e?$t(e.stateNode.nextSibling):null;return!0}function kd(){for(var e=Be;e;)e=$t(e.nextSibling)}function Zn(){Be=$e=null,ne=!1}function Ml(e){at===null?at=[e]:at.push(e)}var cy=Nt.ReactCurrentBatchConfig;function go(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var o=n.stateNode}if(!o)throw Error(x(147,e));var i=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(r){var s=i.refs;r===null?delete s[a]:s[a]=r},t._stringRef=a,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Ti(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function _d(e){function t(m,f){if(e){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function o(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Xt(m,f),m.index=0,m.sibling=null,m}function a(m,f,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,f,y,v){return f===null||f.tag!==6?(f=Br(y,m.mode,v),f.return=m,f):(f=i(f,y),f.return=m,f)}function l(m,f,y,v){var P=y.type;return P===Tn?c(m,f,y.props.children,v,y.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===jt&&nc(P)===f.type)?(v=i(f,y.props),v.ref=go(m,f,y),v.return=m,v):(v=ea(y.type,y.key,y.props,null,m.mode,v),v.ref=go(m,f,y),v.return=m,v)}function h(m,f,y,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=$r(y,m.mode,v),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,v,P){return f===null||f.tag!==7?(f=fn(y,m.mode,v,P),f.return=m,f):(f=i(f,y),f.return=m,f)}function d(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Br(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vi:return y=ea(f.type,f.key,f.props,null,m.mode,y),y.ref=go(m,null,f),y.return=m,y;case Ln:return f=$r(f,m.mode,y),f.return=m,f;case jt:var v=f._init;return d(m,v(f._payload),y)}if(ko(f)||uo(f))return f=fn(f,m.mode,y,null),f.return=m,f;Ti(m,f)}return null}function u(m,f,y,v){var P=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:s(m,f,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vi:return y.key===P?l(m,f,y,v):null;case Ln:return y.key===P?h(m,f,y,v):null;case jt:return P=y._init,u(m,f,P(y._payload),v)}if(ko(y)||uo(y))return P!==null?null:c(m,f,y,v,null);Ti(m,y)}return null}function p(m,f,y,v,P){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(y)||null,s(f,m,""+v,P);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vi:return m=m.get(v.key===null?y:v.key)||null,l(f,m,v,P);case Ln:return m=m.get(v.key===null?y:v.key)||null,h(f,m,v,P);case jt:var C=v._init;return p(m,f,y,C(v._payload),P)}if(ko(v)||uo(v))return m=m.get(y)||null,c(f,m,v,P,null);Ti(f,v)}return null}function b(m,f,y,v){for(var P=null,C=null,k=f,I=f=0,U=null;k!==null&&I<y.length;I++){k.index>I?(U=k,k=null):U=k.sibling;var L=u(m,k,y[I],v);if(L===null){k===null&&(k=U);break}e&&k&&L.alternate===null&&t(m,k),f=a(L,f,I),C===null?P=L:C.sibling=L,C=L,k=U}if(I===y.length)return n(m,k),ne&&an(m,I),P;if(k===null){for(;I<y.length;I++)k=d(m,y[I],v),k!==null&&(f=a(k,f,I),C===null?P=k:C.sibling=k,C=k);return ne&&an(m,I),P}for(k=o(m,k);I<y.length;I++)U=p(k,m,I,y[I],v),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?I:U.key),f=a(U,f,I),C===null?P=U:C.sibling=U,C=U);return e&&k.forEach(function(B){return t(m,B)}),ne&&an(m,I),P}function g(m,f,y,v){var P=uo(y);if(typeof P!="function")throw Error(x(150));if(y=P.call(y),y==null)throw Error(x(151));for(var C=P=null,k=f,I=f=0,U=null,L=y.next();k!==null&&!L.done;I++,L=y.next()){k.index>I?(U=k,k=null):U=k.sibling;var B=u(m,k,L.value,v);if(B===null){k===null&&(k=U);break}e&&k&&B.alternate===null&&t(m,k),f=a(B,f,I),C===null?P=B:C.sibling=B,C=B,k=U}if(L.done)return n(m,k),ne&&an(m,I),P;if(k===null){for(;!L.done;I++,L=y.next())L=d(m,L.value,v),L!==null&&(f=a(L,f,I),C===null?P=L:C.sibling=L,C=L);return ne&&an(m,I),P}for(k=o(m,k);!L.done;I++,L=y.next())L=p(k,m,I,L.value,v),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?I:L.key),f=a(L,f,I),C===null?P=L:C.sibling=L,C=L);return e&&k.forEach(function(N){return t(m,N)}),ne&&an(m,I),P}function w(m,f,y,v){if(typeof y=="object"&&y!==null&&y.type===Tn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case vi:e:{for(var P=y.key,C=f;C!==null;){if(C.key===P){if(P=y.type,P===Tn){if(C.tag===7){n(m,C.sibling),f=i(C,y.props.children),f.return=m,m=f;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===jt&&nc(P)===C.type){n(m,C.sibling),f=i(C,y.props),f.ref=go(m,C,y),f.return=m,m=f;break e}n(m,C);break}else t(m,C);C=C.sibling}y.type===Tn?(f=fn(y.props.children,m.mode,v,y.key),f.return=m,m=f):(v=ea(y.type,y.key,y.props,null,m.mode,v),v.ref=go(m,f,y),v.return=m,m=v)}return r(m);case Ln:e:{for(C=y.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=$r(y,m.mode,v),f.return=m,m=f}return r(m);case jt:return C=y._init,w(m,f,C(y._payload),v)}if(ko(y))return b(m,f,y,v);if(uo(y))return g(m,f,y,v);Ti(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=Br(y,m.mode,v),f.return=m,m=f),r(m)):n(m,f)}return w}var Yn=_d(!0),Ad=_d(!1),Pa=tn(null),xa=null,Un=null,Hl=null;function Nl(){Hl=Un=xa=null}function El(e){var t=Pa.current;te(Pa),e._currentValue=t}function Hs(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){xa=e,Hl=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(xa===null)throw Error(x(308));Un=e,xa.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var hn=null;function jl(e){hn===null?hn=[e]:hn.push(e)}function Id(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,jl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,o)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,R&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Tt(e,n)}return i=o.interleaved,i===null?(t.next=t,jl(o)):(t.next=i.next,i.next=t),o.interleaved=t,Tt(e,n)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Sl(e,n)}}function oc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ka(e,t,n,o){var i=e.updateQueue;Gt=!1;var a=i.firstBaseUpdate,r=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,h=l.next;l.next=null,r===null?a=h:r.next=h,r=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==r&&(s===null?c.firstBaseUpdate=h:s.next=h,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;r=0,c=h=l=null,s=a;do{var u=s.lane,p=s.eventTime;if((o&u)===u){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,g=s;switch(u=t,p=n,g.tag){case 1:if(b=g.payload,typeof b=="function"){d=b.call(p,d,u);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=g.payload,u=typeof b=="function"?b.call(p,d,u):b,u==null)break e;d=re({},d,u);break e;case 2:Gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=i.effects,u===null?i.effects=[s]:u.push(s))}else p={eventTime:p,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(h=c=p,l=d):c=c.next=p,r|=u;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;u=s,s=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=h,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do r|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);vn|=r,e.lanes=r,e.memoizedState=d}}function ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(x(191,i));i.call(o)}}}var fi={},gt=tn(fi),Yo=tn(fi),ei=tn(fi);function cn(e){if(e===fi)throw Error(x(174));return e}function Fl(e,t){switch(Y(ei,t),Y(Yo,e),Y(gt,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ds(t,e)}te(gt),Y(gt,t)}function eo(){te(gt),te(Yo),te(ei)}function Td(e){cn(ei.current);var t=cn(gt.current),n=ds(t,e.type);t!==n&&(Y(Yo,e),Y(gt,n))}function Ul(e){Yo.current===e&&(te(gt),te(Yo))}var ie=tn(0);function _a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ur=[];function Dl(){for(var e=0;e<Ur.length;e++)Ur[e]._workInProgressVersionPrimary=null;Ur.length=0}var Xi=Nt.ReactCurrentDispatcher,Dr=Nt.ReactCurrentBatchConfig,bn=0,ae=null,pe=null,ge=null,Aa=!1,Uo=!1,ti=0,uy=0;function Ce(){throw Error(x(321))}function zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function ql(e,t,n,o,i,a){if(bn=a,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?my:yy,e=n(o,i),Uo){a=0;do{if(Uo=!1,ti=0,25<=a)throw Error(x(301));a+=1,ge=pe=null,t.updateQueue=null,Xi.current=gy,e=n(o,i)}while(Uo)}if(Xi.current=Ia,t=pe!==null&&pe.next!==null,bn=0,ge=pe=ae=null,Aa=!1,t)throw Error(x(300));return e}function Rl(){var e=ti!==0;return ti=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ae.memoizedState=ge=e:ge=ge.next=e,ge}function tt(){if(pe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ae.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(x(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ae.memoizedState=ge=e:ge=ge.next=e}return ge}function ni(e,t){return typeof t=="function"?t(e):t}function zr(e){var t=tt(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var o=pe,i=o.baseQueue,a=n.pending;if(a!==null){if(i!==null){var r=i.next;i.next=a.next,a.next=r}o.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,o=o.baseState;var s=r=null,l=null,h=a;do{var c=h.lane;if((bn&c)===c)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),o=h.hasEagerState?h.eagerState:e(o,h.action);else{var d={lane:c,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(s=l=d,r=o):l=l.next=d,ae.lanes|=c,vn|=c}h=h.next}while(h!==null&&h!==a);l===null?r=o:l.next=s,ut(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseState=r,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ae.lanes|=a,vn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qr(e){var t=tt(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do a=e(a,r.action),r=r.next;while(r!==i);ut(a,t.memoizedState)||(Fe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function Md(){}function Hd(e,t){var n=ae,o=tt(),i=t(),a=!ut(o.memoizedState,i);if(a&&(o.memoizedState=i,Fe=!0),o=o.queue,Ol(jd.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,oi(9,Ed.bind(null,n,o,i,t),void 0,null),be===null)throw Error(x(349));bn&30||Nd(n,t,i)}return i}function Nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,o){t.value=n,t.getSnapshot=o,Gd(t)&&Fd(e)}function jd(e,t,n){return n(function(){Gd(t)&&Fd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Fd(e){var t=Tt(e,1);t!==null&&ht(t,e,1,-1)}function ac(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=py.bind(null,ae,e),[t.memoizedState,e]}function oi(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Ud(){return tt().memoizedState}function Qi(e,t,n,o){var i=pt();ae.flags|=e,i.memoizedState=oi(1|t,n,void 0,o===void 0?null:o)}function ar(e,t,n,o){var i=tt();o=o===void 0?null:o;var a=void 0;if(pe!==null){var r=pe.memoizedState;if(a=r.destroy,o!==null&&zl(o,r.deps)){i.memoizedState=oi(t,n,a,o);return}}ae.flags|=e,i.memoizedState=oi(1|t,n,a,o)}function rc(e,t){return Qi(8390656,8,e,t)}function Ol(e,t){return ar(2048,8,e,t)}function Dd(e,t){return ar(4,2,e,t)}function zd(e,t){return ar(4,4,e,t)}function qd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){return n=n!=null?n.concat([e]):null,ar(4,4,qd.bind(null,t,e),n)}function Bl(){}function Od(e,t){var n=tt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&zl(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Bd(e,t){var n=tt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&zl(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function $d(e,t,n){return bn&21?(ut(n,t)||(n=Qu(),ae.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function dy(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var o=Dr.transition;Dr.transition={};try{e(!1),t()}finally{X=n,Dr.transition=o}}function Vd(){return tt().memoizedState}function fy(e,t,n){var o=Jt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Wd(e))Jd(t,n);else if(n=Id(e,t,n,o),n!==null){var i=Me();ht(n,e,o,i),Xd(n,t,o)}}function py(e,t,n){var o=Jt(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wd(e))Jd(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,s=a(r,n);if(i.hasEagerState=!0,i.eagerState=s,ut(s,r)){var l=t.interleaved;l===null?(i.next=i,jl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Id(e,t,i,o),n!==null&&(i=Me(),ht(n,e,o,i),Xd(n,t,o))}}function Wd(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Jd(e,t){Uo=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xd(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Sl(e,n)}}var Ia={readContext:et,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},my={readContext:et,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4194308,4,qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qi(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=pt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=fy.bind(null,ae,e),[o.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:ac,useDebugValue:Bl,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=ac(!1),t=e[0];return e=dy.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ae,i=pt();if(ne){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),be===null)throw Error(x(349));bn&30||Nd(o,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,rc(jd.bind(null,o,a,e),[e]),o.flags|=2048,oi(9,Ed.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=pt(),t=be.identifierPrefix;if(ne){var n=_t,o=kt;n=(o&~(1<<32-lt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yy={readContext:et,useCallback:Od,useContext:et,useEffect:Ol,useImperativeHandle:Rd,useInsertionEffect:Dd,useLayoutEffect:zd,useMemo:Bd,useReducer:zr,useRef:Ud,useState:function(){return zr(ni)},useDebugValue:Bl,useDeferredValue:function(e){var t=tt();return $d(t,pe.memoizedState,e)},useTransition:function(){var e=zr(ni)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Hd,useId:Vd,unstable_isNewReconciler:!1},gy={readContext:et,useCallback:Od,useContext:et,useEffect:Ol,useImperativeHandle:Rd,useInsertionEffect:Dd,useLayoutEffect:zd,useMemo:Bd,useReducer:qr,useRef:Ud,useState:function(){return qr(ni)},useDebugValue:Bl,useDeferredValue:function(e){var t=tt();return pe===null?t.memoizedState=e:$d(t,pe.memoizedState,e)},useTransition:function(){var e=qr(ni)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Hd,useId:Vd,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ns(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rr={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Me(),i=Jt(e),a=At(o,i);a.payload=t,n!=null&&(a.callback=n),t=Vt(e,a,i),t!==null&&(ht(t,e,i,o),Ji(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Me(),i=Jt(e),a=At(o,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Vt(e,a,i),t!==null&&(ht(t,e,i,o),Ji(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),o=Jt(e),i=At(n,o);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,o),t!==null&&(ht(t,e,o,n),Ji(t,e,o))}};function sc(e,t,n,o,i,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,r):t.prototype&&t.prototype.isPureReactComponent?!Xo(n,o)||!Xo(i,a):!0}function Qd(e,t,n){var o=!1,i=Kt,a=t.contextType;return typeof a=="object"&&a!==null?a=et(a):(i=ze(t)?yn:ke.current,o=t.contextTypes,a=(o=o!=null)?Kn(e,i):Kt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rr,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function lc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&rr.enqueueReplaceState(t,t.state,null)}function Es(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Gl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=et(a):(a=ze(t)?yn:ke.current,i.context=Kn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ns(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&rr.enqueueReplaceState(i,i.state,null),ka(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function to(e,t){try{var n="",o=t;do n+=$p(o),o=o.return;while(o);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Rr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function js(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var by=typeof WeakMap=="function"?WeakMap:Map;function Kd(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ta||(Ta=!0,$s=o),js(e,t)},n}function Zd(e,t,n){n=At(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){js(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){js(e,t),typeof o!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function hc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new by;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=Hy.bind(null,e,t,n),t.then(e,e))}function cc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uc(e,t,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var vy=Nt.ReactCurrentOwner,Fe=!1;function Le(e,t,n,o){t.child=e===null?Ad(t,null,n,o):Yn(t,e.child,n,o)}function dc(e,t,n,o,i){n=n.render;var a=t.ref;return Vn(t,i),o=ql(e,t,n,o,a,i),n=Rl(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ne&&n&&Ll(t),t.flags|=1,Le(e,t,o,i),t.child)}function fc(e,t,n,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!Zl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Yd(e,t,a,o,i)):(e=ea(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(r,o)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=Xt(a,o),e.ref=t.ref,e.return=t,t.child=e}function Yd(e,t,n,o,i){if(e!==null){var a=e.memoizedProps;if(Xo(a,o)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=o=a,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return Gs(e,t,n,o,i)}function ef(e,t,n){var o=t.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(zn,Oe),Oe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(zn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,Y(zn,Oe),Oe|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,Y(zn,Oe),Oe|=o;return Le(e,t,i,n),t.child}function tf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,o,i){var a=ze(n)?yn:ke.current;return a=Kn(t,a),Vn(t,i),n=ql(e,t,n,o,a,i),o=Rl(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ne&&o&&Ll(t),t.flags|=1,Le(e,t,n,i),t.child)}function pc(e,t,n,o,i){if(ze(n)){var a=!0;wa(t)}else a=!1;if(Vn(t,i),t.stateNode===null)Ki(e,t),Qd(t,n,o),Es(t,n,o,i),o=!0;else if(e===null){var r=t.stateNode,s=t.memoizedProps;r.props=s;var l=r.context,h=n.contextType;typeof h=="object"&&h!==null?h=et(h):(h=ze(n)?yn:ke.current,h=Kn(t,h));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function";d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==o||l!==h)&&lc(t,r,o,h),Gt=!1;var u=t.memoizedState;r.state=u,ka(t,o,r,i),l=t.memoizedState,s!==o||u!==l||De.current||Gt?(typeof c=="function"&&(Ns(t,n,c,o),l=t.memoizedState),(s=Gt||sc(t,n,s,o,u,l,h))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),r.props=o,r.state=l,r.context=h,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Ld(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:ot(t.type,s),r.props=h,d=t.pendingProps,u=r.context,l=n.contextType,typeof l=="object"&&l!==null?l=et(l):(l=ze(n)?yn:ke.current,l=Kn(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||u!==l)&&lc(t,r,o,l),Gt=!1,u=t.memoizedState,r.state=u,ka(t,o,r,i);var b=t.memoizedState;s!==d||u!==b||De.current||Gt?(typeof p=="function"&&(Ns(t,n,p,o),b=t.memoizedState),(h=Gt||sc(t,n,h,o,u,b,l)||!1)?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,b,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,b,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=b),r.props=o,r.state=b,r.context=l,o=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),o=!1)}return Fs(e,t,n,o,a,i)}function Fs(e,t,n,o,i,a){tf(e,t);var r=(t.flags&128)!==0;if(!o&&!r)return i&&Yh(t,n,!1),Mt(e,t,a);o=t.stateNode,vy.current=t;var s=r&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&r?(t.child=Yn(t,e.child,null,a),t.child=Yn(t,null,s,a)):Le(e,t,s,a),t.memoizedState=o.state,i&&Yh(t,n,!0),t.child}function nf(e){var t=e.stateNode;t.pendingContext?Zh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zh(e,t.context,!1),Fl(e,t.containerInfo)}function mc(e,t,n,o,i){return Zn(),Ml(i),t.flags|=256,Le(e,t,n,o),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function of(e,t,n){var o=t.pendingProps,i=ie.current,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ie,i&1),e===null)return Ms(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=o.children,e=o.fallback,a?(o=t.mode,a=t.child,r={mode:"hidden",children:r},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=r):a=hr(r,o,0,null),e=fn(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ds(n),t.memoizedState=Us,e):$l(t,r));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return wy(e,t,r,o,s,i,n);if(a){a=o.fallback,r=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:o.children};return!(r&1)&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=Xt(i,l),o.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Xt(s,a):(a=fn(a,r,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,r=e.child.memoizedState,r=r===null?Ds(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},a.memoizedState=r,a.childLanes=e.childLanes&~n,t.memoizedState=Us,o}return a=e.child,e=a.sibling,o=Xt(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function $l(e,t){return t=hr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mi(e,t,n,o){return o!==null&&Ml(o),Yn(t,e.child,null,n),e=$l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wy(e,t,n,o,i,a,r){if(n)return t.flags&256?(t.flags&=-257,o=Rr(Error(x(422))),Mi(e,t,r,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,i=t.mode,o=hr({mode:"visible",children:o.children},i,0,null),a=fn(a,i,r,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&Yn(t,e.child,null,r),t.child.memoizedState=Ds(r),t.memoizedState=Us,a);if(!(t.mode&1))return Mi(e,t,r,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var s=o.dgst;return o=s,a=Error(x(419)),o=Rr(a,o,void 0),Mi(e,t,r,o)}if(s=(r&e.childLanes)!==0,Fe||s){if(o=be,o!==null){switch(r&-r){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|r)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Tt(e,i),ht(o,e,i,-1))}return Kl(),o=Rr(Error(x(421))),Mi(e,t,r,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ny.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Be=$t(i.nextSibling),$e=t,ne=!0,at=null,e!==null&&(Qe[Ke++]=kt,Qe[Ke++]=_t,Qe[Ke++]=gn,kt=e.id,_t=e.overflow,gn=t),t=$l(t,o.children),t.flags|=4096,t)}function yc(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Hs(e.return,t,n)}function Or(e,t,n,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=i)}function af(e,t,n){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(Le(e,t,o.children,n),o=ie.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Y(ie,o),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_a(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Or(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_a(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Or(t,!0,n,null,a);break;case"together":Or(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sy(e,t,n){switch(t.tag){case 3:nf(t),Zn();break;case 5:Td(t);break;case 1:ze(t.type)&&wa(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;Y(Pa,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Y(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?of(e,t,n):(Y(ie,ie.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);Y(ie,ie.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return af(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ie,ie.current),o)break;return null;case 22:case 23:return t.lanes=0,ef(e,t,n)}return Mt(e,t,n)}var rf,zs,sf,lf;rf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zs=function(){};sf=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,cn(gt.current);var a=null;switch(n){case"input":i=ls(e,i),o=ls(e,o),a=[];break;case"select":i=re({},i,{value:void 0}),o=re({},o,{value:void 0}),a=[];break;case"textarea":i=us(e,i),o=us(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ba)}fs(n,o);var r;n=null;for(h in i)if(!o.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var s=i[h];for(r in s)s.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ro.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in o){var l=o[h];if(s=i!=null?i[h]:void 0,o.hasOwnProperty(h)&&l!==s&&(l!=null||s!=null))if(h==="style")if(s){for(r in s)!s.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in l)l.hasOwnProperty(r)&&s[r]!==l[r]&&(n||(n={}),n[r]=l[r])}else n||(a||(a=[]),a.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&ee("scroll",e),a||s===l||(a=[])):(a=a||[]).push(h,l))}n&&(a=a||[]).push("style",n);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};lf=function(e,t,n,o){n!==o&&(t.flags|=4)};function bo(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Cy(e,t,n){var o=t.pendingProps;switch(Tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return ze(t.type)&&va(),Pe(t),null;case 3:return o=t.stateNode,eo(),te(De),te(ke),Dl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Js(at),at=null))),zs(e,t),Pe(t),null;case 5:Ul(t);var i=cn(ei.current);if(n=t.type,e!==null&&t.stateNode!=null)sf(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(x(166));return Pe(t),null}if(e=cn(gt.current),Li(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[mt]=t,o[Zo]=a,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",o),ee("close",o);break;case"iframe":case"object":case"embed":ee("load",o);break;case"video":case"audio":for(i=0;i<Ao.length;i++)ee(Ao[i],o);break;case"source":ee("error",o);break;case"img":case"image":case"link":ee("error",o),ee("load",o);break;case"details":ee("toggle",o);break;case"input":kh(o,a),ee("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},ee("invalid",o);break;case"textarea":Ah(o,a),ee("invalid",o)}fs(n,a),i=null;for(var r in a)if(a.hasOwnProperty(r)){var s=a[r];r==="children"?typeof s=="string"?o.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ii(o.textContent,s,e),i=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ii(o.textContent,s,e),i=["children",""+s]):Ro.hasOwnProperty(r)&&s!=null&&r==="onScroll"&&ee("scroll",o)}switch(n){case"input":wi(o),_h(o,a,!0);break;case"textarea":wi(o),Ih(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=ba)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{r=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=r.createElement(n,{is:o.is}):(e=r.createElement(n),n==="select"&&(r=e,o.multiple?r.multiple=!0:o.size&&(r.size=o.size))):e=r.createElementNS(e,n),e[mt]=t,e[Zo]=o,rf(e,t,!1,!1),t.stateNode=e;e:{switch(r=ps(n,o),n){case"dialog":ee("cancel",e),ee("close",e),i=o;break;case"iframe":case"object":case"embed":ee("load",e),i=o;break;case"video":case"audio":for(i=0;i<Ao.length;i++)ee(Ao[i],e);i=o;break;case"source":ee("error",e),i=o;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=o;break;case"details":ee("toggle",e),i=o;break;case"input":kh(e,o),i=ls(e,o),ee("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=re({},o,{value:void 0}),ee("invalid",e);break;case"textarea":Ah(e,o),i=us(e,o),ee("invalid",e);break;default:i=o}fs(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Uu(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gu(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oo(e,l):typeof l=="number"&&Oo(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ro.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ee("scroll",e):l!=null&&ml(e,a,l,r))}switch(n){case"input":wi(e),_h(e,o,!1);break;case"textarea":wi(e),Ih(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Qt(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Rn(e,!!o.multiple,a,!1):o.defaultValue!=null&&Rn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ba)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)lf(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(x(166));if(n=cn(ei.current),cn(gt.current),Li(t)){if(o=t.stateNode,n=t.memoizedProps,o[mt]=t,(a=o.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Ii(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[mt]=t,t.stateNode=o}return Pe(t),null;case 13:if(te(ie),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Be!==null&&t.mode&1&&!(t.flags&128))kd(),Zn(),t.flags|=98560,a=!1;else if(a=Li(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(x(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(x(317));a[mt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),a=!1}else at!==null&&(Js(at),at=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?me===0&&(me=3):Kl())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return eo(),zs(e,t),e===null&&Qo(t.stateNode.containerInfo),Pe(t),null;case 10:return El(t.type._context),Pe(t),null;case 17:return ze(t.type)&&va(),Pe(t),null;case 19:if(te(ie),a=t.memoizedState,a===null)return Pe(t),null;if(o=(t.flags&128)!==0,r=a.rendering,r===null)if(o)bo(a,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=_a(e),r!==null){for(t.flags|=128,bo(a,!1),o=r.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,r=a.alternate,r===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,a.type=r.type,e=r.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ie,ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&ce()>no&&(t.flags|=128,o=!0,bo(a,!1),t.lanes=4194304)}else{if(!o)if(e=_a(r),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!ne)return Pe(t),null}else 2*ce()-a.renderingStartTime>no&&n!==1073741824&&(t.flags|=128,o=!0,bo(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(n=a.last,n!==null?n.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ce(),t.sibling=null,n=ie.current,Y(ie,o?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Ql(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Oe&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Py(e,t){switch(Tl(t),t.tag){case 1:return ze(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return eo(),te(De),te(ke),Dl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(te(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ie),null;case 4:return eo(),null;case 10:return El(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var Hi=!1,xe=!1,xy=typeof WeakSet=="function"?WeakSet:Set,T=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){le(e,t,o)}else n.current=null}function qs(e,t,n){try{n()}catch(o){le(e,t,o)}}var gc=!1;function ky(e,t){if(xs=ma,e=dd(),Il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,s=-1,l=-1,h=0,c=0,d=e,u=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(s=r+i),d!==a||o!==0&&d.nodeType!==3||(l=r+o),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===e)break t;if(u===n&&++h===i&&(s=r),u===a&&++c===o&&(l=r),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},ma=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var g=b.memoizedProps,w=b.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?g:ot(t.type,g),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){le(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return b=gc,gc=!1,b}function Do(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&qs(t,n,a)}i=i.next}while(i!==o)}}function sr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Zo],delete t[Is],delete t[sy],delete t[ly])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cf(e){return e.tag===5||e.tag===3||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ba));else if(o!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}function Bs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}var ve=null,it=!1;function Et(e,t,n){for(n=n.child;n!==null;)uf(e,t,n),n=n.sibling}function uf(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 5:xe||Dn(n,t);case 6:var o=ve,i=it;ve=null,Et(e,t,n),ve=o,it=i,ve!==null&&(it?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(it?(e=ve,n=n.stateNode,e.nodeType===8?Gr(e.parentNode,n):e.nodeType===1&&Gr(e,n),Wo(e)):Gr(ve,n.stateNode));break;case 4:o=ve,i=it,ve=n.stateNode.containerInfo,it=!0,Et(e,t,n),ve=o,it=i;break;case 0:case 11:case 14:case 15:if(!xe&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,r=a.destroy;a=a.tag,r!==void 0&&(a&2||a&4)&&qs(n,t,r),i=i.next}while(i!==o)}Et(e,t,n);break;case 1:if(!xe&&(Dn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){le(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(xe=(o=xe)||n.memoizedState!==null,Et(e,t,n),xe=o):Et(e,t,n);break;default:Et(e,t,n)}}function vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xy),t.forEach(function(o){var i=Ey.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var a=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 5:ve=s.stateNode,it=!1;break e;case 3:ve=s.stateNode.containerInfo,it=!0;break e;case 4:ve=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(ve===null)throw Error(x(160));uf(a,r,i),ve=null,it=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(h){le(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)df(t,e),t=t.sibling}function df(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),ft(e),o&4){try{Do(3,e,e.return),sr(3,e)}catch(g){le(e,e.return,g)}try{Do(5,e,e.return)}catch(g){le(e,e.return,g)}}break;case 1:nt(t,e),ft(e),o&512&&n!==null&&Dn(n,n.return);break;case 5:if(nt(t,e),ft(e),o&512&&n!==null&&Dn(n,n.return),e.flags&32){var i=e.stateNode;try{Oo(i,"")}catch(g){le(e,e.return,g)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,r=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Nu(i,a),ps(s,r);var h=ps(s,a);for(r=0;r<l.length;r+=2){var c=l[r],d=l[r+1];c==="style"?Uu(i,d):c==="dangerouslySetInnerHTML"?Gu(i,d):c==="children"?Oo(i,d):ml(i,c,d,h)}switch(s){case"input":hs(i,a);break;case"textarea":Eu(i,a);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Rn(i,!!a.multiple,p,!1):u!==!!a.multiple&&(a.defaultValue!=null?Rn(i,!!a.multiple,a.defaultValue,!0):Rn(i,!!a.multiple,a.multiple?[]:"",!1))}i[Zo]=a}catch(g){le(e,e.return,g)}}break;case 6:if(nt(t,e),ft(e),o&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){le(e,e.return,g)}}break;case 3:if(nt(t,e),ft(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(t.containerInfo)}catch(g){le(e,e.return,g)}break;case 4:nt(t,e),ft(e);break;case 13:nt(t,e),ft(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Jl=ce())),o&4&&vc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(h=xe)||c,nt(t,e),xe=h):nt(t,e),ft(e),o&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(d=T=c;T!==null;){switch(u=T,p=u.child,u.tag){case 0:case 11:case 14:case 15:Do(4,u,u.return);break;case 1:Dn(u,u.return);var b=u.stateNode;if(typeof b.componentWillUnmount=="function"){o=u,n=u.return;try{t=o,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(g){le(o,n,g)}}break;case 5:Dn(u,u.return);break;case 22:if(u.memoizedState!==null){Sc(d);continue}}p!==null?(p.return=u,T=p):Sc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,h?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,r=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Fu("display",r))}catch(g){le(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=h?"":d.memoizedProps}catch(g){le(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:nt(t,e),ft(e),o&4&&vc(e);break;case 21:break;default:nt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cf(n)){var o=n;break e}n=n.return}throw Error(x(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Oo(i,""),o.flags&=-33);var a=bc(e);Bs(e,a,i);break;case 3:case 4:var r=o.stateNode.containerInfo,s=bc(e);Os(e,s,r);break;default:throw Error(x(161))}}catch(l){le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _y(e,t,n){T=e,ff(e)}function ff(e,t,n){for(var o=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&o){var r=i.memoizedState!==null||Hi;if(!r){var s=i.alternate,l=s!==null&&s.memoizedState!==null||xe;s=Hi;var h=xe;if(Hi=r,(xe=l)&&!h)for(T=i;T!==null;)r=T,l=r.child,r.tag===22&&r.memoizedState!==null?Cc(i):l!==null?(l.return=r,T=l):Cc(i);for(;a!==null;)T=a,ff(a),a=a.sibling;T=i,Hi=s,xe=h}wc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):wc(e)}}function wc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||sr(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!xe)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ic(t,a,o);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ic(t,r,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var c=h.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}xe||t.flags&512&&Rs(t)}catch(u){le(t,t.return,u)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Sc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Cc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sr(4,t)}catch(l){le(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(l){le(t,i,l)}}var a=t.return;try{Rs(t)}catch(l){le(t,a,l)}break;case 5:var r=t.return;try{Rs(t)}catch(l){le(t,r,l)}}}catch(l){le(t,t.return,l)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Ay=Math.ceil,La=Nt.ReactCurrentDispatcher,Vl=Nt.ReactCurrentOwner,Ye=Nt.ReactCurrentBatchConfig,R=0,be=null,ue=null,we=0,Oe=0,zn=tn(0),me=0,ii=null,vn=0,lr=0,Wl=0,zo=null,Ge=null,Jl=0,no=1/0,Pt=null,Ta=!1,$s=null,Wt=null,Ni=!1,zt=null,Ma=0,qo=0,Vs=null,Zi=-1,Yi=0;function Me(){return R&6?ce():Zi!==-1?Zi:Zi=ce()}function Jt(e){return e.mode&1?R&2&&we!==0?we&-we:cy.transition!==null?(Yi===0&&(Yi=Qu()),Yi):(e=X,e!==0||(e=window.event,e=e===void 0?16:od(e.type)),e):1}function ht(e,t,n,o){if(50<qo)throw qo=0,Vs=null,Error(x(185));ci(e,n,o),(!(R&2)||e!==be)&&(e===be&&(!(R&2)&&(lr|=n),me===4&&Ut(e,we)),qe(e,o),n===1&&R===0&&!(t.mode&1)&&(no=ce()+500,ir&&nn()))}function qe(e,t){var n=e.callbackNode;cm(e,t);var o=pa(e,e===be?we:0);if(o===0)n!==null&&Mh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Mh(n),t===1)e.tag===0?hy(Pc.bind(null,e)):Cd(Pc.bind(null,e)),ay(function(){!(R&6)&&nn()}),n=null;else{switch(Ku(o)){case 1:n=wl;break;case 4:n=Ju;break;case 16:n=fa;break;case 536870912:n=Xu;break;default:n=fa}n=Sf(n,pf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pf(e,t){if(Zi=-1,Yi=0,R&6)throw Error(x(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var o=pa(e,e===be?we:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Ha(e,o);else{t=o;var i=R;R|=2;var a=yf();(be!==e||we!==t)&&(Pt=null,no=ce()+500,dn(e,t));do try{Ty();break}catch(s){mf(e,s)}while(!0);Nl(),La.current=a,R=i,ue!==null?t=0:(be=null,we=0,t=me)}if(t!==0){if(t===2&&(i=vs(e),i!==0&&(o=i,t=Ws(e,i))),t===1)throw n=ii,dn(e,0),Ut(e,o),qe(e,ce()),n;if(t===6)Ut(e,o);else{if(i=e.current.alternate,!(o&30)&&!Iy(i)&&(t=Ha(e,o),t===2&&(a=vs(e),a!==0&&(o=a,t=Ws(e,a))),t===1))throw n=ii,dn(e,0),Ut(e,o),qe(e,ce()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(x(345));case 2:rn(e,Ge,Pt);break;case 3:if(Ut(e,o),(o&130023424)===o&&(t=Jl+500-ce(),10<t)){if(pa(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=As(rn.bind(null,e,Ge,Pt),t);break}rn(e,Ge,Pt);break;case 4:if(Ut(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var r=31-lt(o);a=1<<r,r=t[r],r>i&&(i=r),o&=~a}if(o=i,o=ce()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ay(o/1960))-o,10<o){e.timeoutHandle=As(rn.bind(null,e,Ge,Pt),o);break}rn(e,Ge,Pt);break;case 5:rn(e,Ge,Pt);break;default:throw Error(x(329))}}}return qe(e,ce()),e.callbackNode===n?pf.bind(null,e):null}function Ws(e,t){var n=zo;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Ha(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Js(t)),e}function Js(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Iy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],a=i.getSnapshot;i=i.value;try{if(!ut(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Wl,t&=~lr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),o=1<<n;e[n]=-1,t&=~o}}function Pc(e){if(R&6)throw Error(x(327));Wn();var t=pa(e,0);if(!(t&1))return qe(e,ce()),null;var n=Ha(e,t);if(e.tag!==0&&n===2){var o=vs(e);o!==0&&(t=o,n=Ws(e,o))}if(n===1)throw n=ii,dn(e,0),Ut(e,t),qe(e,ce()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ge,Pt),qe(e,ce()),null}function Xl(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(no=ce()+500,ir&&nn())}}function wn(e){zt!==null&&zt.tag===0&&!(R&6)&&Wn();var t=R;R|=1;var n=Ye.transition,o=X;try{if(Ye.transition=null,X=1,e)return e()}finally{X=o,Ye.transition=n,R=t,!(R&6)&&nn()}}function Ql(){Oe=zn.current,te(zn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iy(n)),ue!==null)for(n=ue.return;n!==null;){var o=n;switch(Tl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&va();break;case 3:eo(),te(De),te(ke),Dl();break;case 5:Ul(o);break;case 4:eo();break;case 13:te(ie);break;case 19:te(ie);break;case 10:El(o.type._context);break;case 22:case 23:Ql()}n=n.return}if(be=e,ue=e=Xt(e.current,null),we=Oe=t,me=0,ii=null,Wl=lr=vn=0,Ge=zo=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,a=n.pending;if(a!==null){var r=a.next;a.next=i,o.next=r}n.pending=o}hn=null}return e}function mf(e,t){do{var n=ue;try{if(Nl(),Xi.current=Ia,Aa){for(var o=ae.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Aa=!1}if(bn=0,ge=pe=ae=null,Uo=!1,ti=0,Vl.current=null,n===null||n.return===null){me=1,ii=t,ue=null;break}e:{var a=e,r=n.return,s=n,l=t;if(t=we,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var u=c.alternate;u?(c.updateQueue=u.updateQueue,c.memoizedState=u.memoizedState,c.lanes=u.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=cc(r);if(p!==null){p.flags&=-257,uc(p,r,s,a,t),p.mode&1&&hc(a,h,t),t=p,l=h;var b=t.updateQueue;if(b===null){var g=new Set;g.add(l),t.updateQueue=g}else b.add(l);break e}else{if(!(t&1)){hc(a,h,t),Kl();break e}l=Error(x(426))}}else if(ne&&s.mode&1){var w=cc(r);if(w!==null){!(w.flags&65536)&&(w.flags|=256),uc(w,r,s,a,t),Ml(to(l,s));break e}}a=l=to(l,s),me!==4&&(me=2),zo===null?zo=[a]:zo.push(a),a=r;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Kd(a,l,t);oc(a,m);break e;case 1:s=l;var f=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Wt===null||!Wt.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=Zd(a,s,t);oc(a,v);break e}}a=a.return}while(a!==null)}bf(n)}catch(P){t=P,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function yf(){var e=La.current;return La.current=Ia,e===null?Ia:e}function Kl(){(me===0||me===3||me===2)&&(me=4),be===null||!(vn&268435455)&&!(lr&268435455)||Ut(be,we)}function Ha(e,t){var n=R;R|=2;var o=yf();(be!==e||we!==t)&&(Pt=null,dn(e,t));do try{Ly();break}catch(i){mf(e,i)}while(!0);if(Nl(),R=n,La.current=o,ue!==null)throw Error(x(261));return be=null,we=0,me}function Ly(){for(;ue!==null;)gf(ue)}function Ty(){for(;ue!==null&&!tm();)gf(ue)}function gf(e){var t=wf(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?bf(e):ue=t,Vl.current=null}function bf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Py(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ue=null;return}}else if(n=Cy(n,t,Oe),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);me===0&&(me=5)}function rn(e,t,n){var o=X,i=Ye.transition;try{Ye.transition=null,X=1,My(e,t,n,o)}finally{Ye.transition=i,X=o}return null}function My(e,t,n,o){do Wn();while(zt!==null);if(R&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(um(e,a),e===be&&(ue=be=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,Sf(fa,function(){return Wn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ye.transition,Ye.transition=null;var r=X;X=1;var s=R;R|=4,Vl.current=null,ky(e,n),df(n,e),Km(ks),ma=!!xs,ks=xs=null,e.current=n,_y(n),nm(),R=s,X=r,Ye.transition=a}else e.current=n;if(Ni&&(Ni=!1,zt=e,Ma=i),a=e.pendingLanes,a===0&&(Wt=null),am(n.stateNode),qe(e,ce()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ta)throw Ta=!1,e=$s,$s=null,e;return Ma&1&&e.tag!==0&&Wn(),a=e.pendingLanes,a&1?e===Vs?qo++:(qo=0,Vs=e):qo=0,nn(),null}function Wn(){if(zt!==null){var e=Ku(Ma),t=Ye.transition,n=X;try{if(Ye.transition=null,X=16>e?16:e,zt===null)var o=!1;else{if(e=zt,zt=null,Ma=0,R&6)throw Error(x(331));var i=R;for(R|=4,T=e.current;T!==null;){var a=T,r=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var h=s[l];for(T=h;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Do(8,c,a)}var d=c.child;if(d!==null)d.return=c,T=d;else for(;T!==null;){c=T;var u=c.sibling,p=c.return;if(hf(c),c===h){T=null;break}if(u!==null){u.return=p,T=u;break}T=p}}}var b=a.alternate;if(b!==null){var g=b.child;if(g!==null){b.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}T=a}}if(a.subtreeFlags&2064&&r!==null)r.return=a,T=r;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Do(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,T=m;break e}T=a.return}}var f=e.current;for(T=f;T!==null;){r=T;var y=r.child;if(r.subtreeFlags&2064&&y!==null)y.return=r,T=y;else e:for(r=f;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:sr(9,s)}}catch(P){le(s,s.return,P)}if(s===r){T=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,T=v;break e}T=s.return}}if(R=i,nn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ya,e)}catch{}o=!0}return o}finally{X=n,Ye.transition=t}}return!1}function xc(e,t,n){t=to(n,t),t=Kd(e,t,1),e=Vt(e,t,1),t=Me(),e!==null&&(ci(e,1,t),qe(e,t))}function le(e,t,n){if(e.tag===3)xc(e,e,n);else for(;t!==null;){if(t.tag===3){xc(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wt===null||!Wt.has(o))){e=to(n,e),e=Zd(t,e,1),t=Vt(t,e,1),e=Me(),t!==null&&(ci(t,1,e),qe(t,e));break}}t=t.return}}function Hy(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(we&n)===n&&(me===4||me===3&&(we&130023424)===we&&500>ce()-Jl?dn(e,0):Wl|=n),qe(e,t)}function vf(e,t){t===0&&(e.mode&1?(t=Pi,Pi<<=1,!(Pi&130023424)&&(Pi=4194304)):t=1);var n=Me();e=Tt(e,t),e!==null&&(ci(e,t,n),qe(e,n))}function Ny(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vf(e,n)}function Ey(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(x(314))}o!==null&&o.delete(t),vf(e,n)}var wf;wf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,Sy(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ne&&t.flags&1048576&&Pd(t,Ca,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ki(e,t),e=t.pendingProps;var i=Kn(t,ke.current);Vn(t,n),i=ql(null,t,o,e,i,n);var a=Rl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(o)?(a=!0,wa(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gl(t),i.updater=rr,t.stateNode=i,i._reactInternals=t,Es(t,o,e,n),t=Fs(null,t,o,!0,a,n)):(t.tag=0,ne&&a&&Ll(t),Le(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=Gy(o),e=ot(o,e),i){case 0:t=Gs(null,t,o,e,n);break e;case 1:t=pc(null,t,o,e,n);break e;case 11:t=dc(null,t,o,e,n);break e;case 14:t=fc(null,t,o,ot(o.type,e),n);break e}throw Error(x(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ot(o,i),Gs(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ot(o,i),pc(e,t,o,i,n);case 3:e:{if(nf(t),e===null)throw Error(x(387));o=t.pendingProps,a=t.memoizedState,i=a.element,Ld(e,t),ka(t,o,null,n);var r=t.memoizedState;if(o=r.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=to(Error(x(423)),t),t=mc(e,t,o,n,i);break e}else if(o!==i){i=to(Error(x(424)),t),t=mc(e,t,o,n,i);break e}else for(Be=$t(t.stateNode.containerInfo.firstChild),$e=t,ne=!0,at=null,n=Ad(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),o===i){t=Mt(e,t,n);break e}Le(e,t,o,n)}t=t.child}return t;case 5:return Td(t),e===null&&Ms(t),o=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,r=i.children,_s(o,i)?r=null:a!==null&&_s(o,a)&&(t.flags|=32),tf(e,t),Le(e,t,r,n),t.child;case 6:return e===null&&Ms(t),null;case 13:return of(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Yn(t,null,o,n):Le(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ot(o,i),dc(e,t,o,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,a=t.memoizedProps,r=i.value,Y(Pa,o._currentValue),o._currentValue=r,a!==null)if(ut(a.value,r)){if(a.children===i.children&&!De.current){t=Mt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){r=a.child;for(var l=s.firstContext;l!==null;){if(l.context===o){if(a.tag===1){l=At(-1,n&-n),l.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var c=h.pending;c===null?l.next=l:(l.next=c.next,c.next=l),h.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Hs(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)r=a.type===t.type?null:a.child;else if(a.tag===18){if(r=a.return,r===null)throw Error(x(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Hs(r,n,t),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,Vn(t,n),i=et(i),o=o(i),t.flags|=1,Le(e,t,o,n),t.child;case 14:return o=t.type,i=ot(o,t.pendingProps),i=ot(o.type,i),fc(e,t,o,i,n);case 15:return Yd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ot(o,i),Ki(e,t),t.tag=1,ze(o)?(e=!0,wa(t)):e=!1,Vn(t,n),Qd(t,o,i),Es(t,o,i,n),Fs(null,t,o,!0,e,n);case 19:return af(e,t,n);case 22:return ef(e,t,n)}throw Error(x(156,t.tag))};function Sf(e,t){return Wu(e,t)}function jy(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,o){return new jy(e,t,n,o)}function Zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gy(e){if(typeof e=="function")return Zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gl)return 11;if(e===bl)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ea(e,t,n,o,i,a){var r=2;if(o=e,typeof e=="function")Zl(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Tn:return fn(n.children,i,a,t);case yl:r=8,i|=8;break;case is:return e=Ze(12,n,t,i|2),e.elementType=is,e.lanes=a,e;case as:return e=Ze(13,n,t,i),e.elementType=as,e.lanes=a,e;case rs:return e=Ze(19,n,t,i),e.elementType=rs,e.lanes=a,e;case Tu:return hr(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Iu:r=10;break e;case Lu:r=9;break e;case gl:r=11;break e;case bl:r=14;break e;case jt:r=16,o=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ze(r,n,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function fn(e,t,n,o){return e=Ze(7,e,o,t),e.lanes=n,e}function hr(e,t,n,o){return e=Ze(22,e,o,t),e.elementType=Tu,e.lanes=n,e.stateNode={isHidden:!1},e}function Br(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function $r(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fy(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kr(0),this.expirationTimes=kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kr(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yl(e,t,n,o,i,a,r,s,l){return e=new Fy(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ze(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gl(a),e}function Uy(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Cf(e){if(!e)return Kt;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ze(n))return Sd(e,n,t)}return t}function Pf(e,t,n,o,i,a,r,s,l){return e=Yl(n,o,!0,e,i,a,r,s,l),e.context=Cf(null),n=e.current,o=Me(),i=Jt(n),a=At(o,i),a.callback=t??null,Vt(n,a,i),e.current.lanes=i,ci(e,i,o),qe(e,o),e}function cr(e,t,n,o){var i=t.current,a=Me(),r=Jt(i);return n=Cf(n),t.context===null?t.context=n:t.pendingContext=n,t=At(a,r),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Vt(i,t,r),e!==null&&(ht(e,i,r,a),Ji(e,i,r)),r}function Na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eh(e,t){kc(e,t),(e=e.alternate)&&kc(e,t)}function Dy(){return null}var xf=typeof reportError=="function"?reportError:function(e){console.error(e)};function th(e){this._internalRoot=e}ur.prototype.render=th.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));cr(e,t,null,null)};ur.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){cr(null,e,null,null)}),t[Lt]=null}};function ur(e){this._internalRoot=e}ur.prototype.unstable_scheduleHydration=function(e){if(e){var t=ed();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&nd(e)}};function nh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function zy(e,t,n,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var h=Na(r);a.call(h)}}var r=Pf(t,o,e,0,null,!1,!1,"",_c);return e._reactRootContainer=r,e[Lt]=r.current,Qo(e.nodeType===8?e.parentNode:e),wn(),r}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var s=o;o=function(){var h=Na(l);s.call(h)}}var l=Yl(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=l,e[Lt]=l.current,Qo(e.nodeType===8?e.parentNode:e),wn(function(){cr(t,l,n,o)}),l}function fr(e,t,n,o,i){var a=n._reactRootContainer;if(a){var r=a;if(typeof i=="function"){var s=i;i=function(){var l=Na(r);s.call(l)}}cr(t,r,e,i)}else r=zy(n,t,e,i,o);return Na(r)}Zu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_o(t.pendingLanes);n!==0&&(Sl(t,n|1),qe(t,ce()),!(R&6)&&(no=ce()+500,nn()))}break;case 13:wn(function(){var o=Tt(e,1);if(o!==null){var i=Me();ht(o,e,1,i)}}),eh(e,1)}};Cl=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Me();ht(t,e,134217728,n)}eh(e,134217728)}};Yu=function(e){if(e.tag===13){var t=Jt(e),n=Tt(e,t);if(n!==null){var o=Me();ht(n,e,t,o)}eh(e,t)}};ed=function(){return X};td=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};ys=function(e,t,n){switch(t){case"input":if(hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=or(o);if(!i)throw Error(x(90));Hu(o),hs(o,i)}}}break;case"textarea":Eu(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}};qu=Xl;Ru=wn;var qy={usingClientEntryPoint:!1,Events:[di,En,or,Du,zu,Xl]},vo={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ry={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{Ya=Ei.inject(Ry),yt=Ei}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(t))throw Error(x(200));return Uy(e,t,null,n)};Je.createRoot=function(e,t){if(!nh(e))throw Error(x(299));var n=!1,o="",i=xf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yl(e,1,!1,null,null,n,!1,o,i),e[Lt]=t.current,Qo(e.nodeType===8?e.parentNode:e),new th(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=$u(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return wn(e)};Je.hydrate=function(e,t,n){if(!dr(t))throw Error(x(200));return fr(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!nh(e))throw Error(x(405));var o=n!=null&&n.hydratedSources||null,i=!1,a="",r=xf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=Pf(t,null,e,1,n??null,i,!1,a,r),e[Lt]=t.current,Qo(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ur(t)};Je.render=function(e,t,n){if(!dr(t))throw Error(x(200));return fr(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!dr(e))throw Error(x(40));return e._reactRootContainer?(wn(function(){fr(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};Je.unstable_batchedUpdates=Xl;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!dr(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return fr(e,t,n,!1,o)};Je.version="18.3.1-next-f1338f8080-20240426";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),xu.exports=Je;var Oy=xu.exports,_f,Ac=Oy;_f=Ac.createRoot,Ac.hydrateRoot;function ta(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function By(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Af(e){let t,n,o;e.length!==2?(t=ta,n=(s,l)=>ta(e(s),l),o=(s,l)=>e(s)-l):(t=e===ta||e===By?e:$y,n=e,o=e);function i(s,l,h=0,c=s.length){if(h<c){if(t(l,l)!==0)return c;do{const d=h+c>>>1;n(s[d],l)<0?h=d+1:c=d}while(h<c)}return h}function a(s,l,h=0,c=s.length){if(h<c){if(t(l,l)!==0)return c;do{const d=h+c>>>1;n(s[d],l)<=0?h=d+1:c=d}while(h<c)}return h}function r(s,l,h=0,c=s.length){const d=i(s,l,h,c-1);return d>h&&o(s[d-1],l)>-o(s[d],l)?d-1:d}return{left:i,center:r,right:a}}function $y(){return 0}function Vy(e){return e===null?NaN:+e}const Wy=Af(ta),Jy=Wy.right;Af(Vy).center;const Xy=Math.sqrt(50),Qy=Math.sqrt(10),Ky=Math.sqrt(2);function Ea(e,t,n){const o=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(o)),a=o/Math.pow(10,i),r=a>=Xy?10:a>=Qy?5:a>=Ky?2:1;let s,l,h;return i<0?(h=Math.pow(10,-i)/r,s=Math.round(e*h),l=Math.round(t*h),s/h<e&&++s,l/h>t&&--l,h=-h):(h=Math.pow(10,i)*r,s=Math.round(e/h),l=Math.round(t/h),s*h<e&&++s,l*h>t&&--l),l<s&&.5<=n&&n<2?Ea(e,t,n*2):[s,l,h]}function Zy(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const o=t<e,[i,a,r]=o?Ea(t,e,n):Ea(e,t,n);if(!(a>=i))return[];const s=a-i+1,l=new Array(s);if(o)if(r<0)for(let h=0;h<s;++h)l[h]=(a-h)/-r;else for(let h=0;h<s;++h)l[h]=(a-h)*r;else if(r<0)for(let h=0;h<s;++h)l[h]=(i+h)/-r;else for(let h=0;h<s;++h)l[h]=(i+h)*r;return l}function Xs(e,t,n){return t=+t,e=+e,n=+n,Ea(e,t,n)[2]}function Yy(e,t,n){t=+t,e=+e,n=+n;const o=t<e,i=o?Xs(t,e,n):Xs(e,t,n);return(o?-1:1)*(i<0?1/-i:i)}function eg(e,t){let n;for(const o of e)o!=null&&(n<o||n===void 0&&o>=o)&&(n=o);return n}function tg(e,t){let n;for(const o of e)o!=null&&(n>o||n===void 0&&o>=o)&&(n=o);return n}var ng={value:()=>{}};function If(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new na(n)}function na(e){this._=e}function og(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",i=n.indexOf(".");if(i>=0&&(o=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}na.prototype=If.prototype={constructor:na,on:function(e,t){var n=this._,o=og(e+"",n),i,a=-1,r=o.length;if(arguments.length<2){for(;++a<r;)if((i=(e=o[a]).type)&&(i=ig(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++a<r;)if(i=(e=o[a]).type)n[i]=Ic(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Ic(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new na(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),o=0,i,a;o<i;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(a=this._[e],o=0,i=a.length;o<i;++o)a[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],i=0,a=o.length;i<a;++i)o[i].value.apply(t,n)}};function ig(e,t){for(var n=0,o=e.length,i;n<o;++n)if((i=e[n]).name===t)return i.value}function Ic(e,t,n){for(var o=0,i=e.length;o<i;++o)if(e[o].name===t){e[o]=ng,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var Qs="http://www.w3.org/1999/xhtml";const Lc={svg:"http://www.w3.org/2000/svg",xhtml:Qs,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function pr(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Lc.hasOwnProperty(t)?{space:Lc[t],local:e}:e}function ag(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Qs&&t.documentElement.namespaceURI===Qs?t.createElement(e):t.createElementNS(n,e)}}function rg(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Lf(e){var t=pr(e);return(t.local?rg:ag)(t)}function sg(){}function oh(e){return e==null?sg:function(){return this.querySelector(e)}}function lg(e){typeof e!="function"&&(e=oh(e));for(var t=this._groups,n=t.length,o=new Array(n),i=0;i<n;++i)for(var a=t[i],r=a.length,s=o[i]=new Array(r),l,h,c=0;c<r;++c)(l=a[c])&&(h=e.call(l,l.__data__,c,a))&&("__data__"in l&&(h.__data__=l.__data__),s[c]=h);return new We(o,this._parents)}function hg(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function cg(){return[]}function Tf(e){return e==null?cg:function(){return this.querySelectorAll(e)}}function ug(e){return function(){return hg(e.apply(this,arguments))}}function dg(e){typeof e=="function"?e=ug(e):e=Tf(e);for(var t=this._groups,n=t.length,o=[],i=[],a=0;a<n;++a)for(var r=t[a],s=r.length,l,h=0;h<s;++h)(l=r[h])&&(o.push(e.call(l,l.__data__,h,r)),i.push(l));return new We(o,i)}function Mf(e){return function(){return this.matches(e)}}function Hf(e){return function(t){return t.matches(e)}}var fg=Array.prototype.find;function pg(e){return function(){return fg.call(this.children,e)}}function mg(){return this.firstElementChild}function yg(e){return this.select(e==null?mg:pg(typeof e=="function"?e:Hf(e)))}var gg=Array.prototype.filter;function bg(){return Array.from(this.children)}function vg(e){return function(){return gg.call(this.children,e)}}function wg(e){return this.selectAll(e==null?bg:vg(typeof e=="function"?e:Hf(e)))}function Sg(e){typeof e!="function"&&(e=Mf(e));for(var t=this._groups,n=t.length,o=new Array(n),i=0;i<n;++i)for(var a=t[i],r=a.length,s=o[i]=[],l,h=0;h<r;++h)(l=a[h])&&e.call(l,l.__data__,h,a)&&s.push(l);return new We(o,this._parents)}function Nf(e){return new Array(e.length)}function Cg(){return new We(this._enter||this._groups.map(Nf),this._parents)}function ja(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}ja.prototype={constructor:ja,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Pg(e){return function(){return e}}function xg(e,t,n,o,i,a){for(var r=0,s,l=t.length,h=a.length;r<h;++r)(s=t[r])?(s.__data__=a[r],o[r]=s):n[r]=new ja(e,a[r]);for(;r<l;++r)(s=t[r])&&(i[r]=s)}function kg(e,t,n,o,i,a,r){var s,l,h=new Map,c=t.length,d=a.length,u=new Array(c),p;for(s=0;s<c;++s)(l=t[s])&&(u[s]=p=r.call(l,l.__data__,s,t)+"",h.has(p)?i[s]=l:h.set(p,l));for(s=0;s<d;++s)p=r.call(e,a[s],s,a)+"",(l=h.get(p))?(o[s]=l,l.__data__=a[s],h.delete(p)):n[s]=new ja(e,a[s]);for(s=0;s<c;++s)(l=t[s])&&h.get(u[s])===l&&(i[s]=l)}function _g(e){return e.__data__}function Ag(e,t){if(!arguments.length)return Array.from(this,_g);var n=t?kg:xg,o=this._parents,i=this._groups;typeof e!="function"&&(e=Pg(e));for(var a=i.length,r=new Array(a),s=new Array(a),l=new Array(a),h=0;h<a;++h){var c=o[h],d=i[h],u=d.length,p=Ig(e.call(c,c&&c.__data__,h,o)),b=p.length,g=s[h]=new Array(b),w=r[h]=new Array(b),m=l[h]=new Array(u);n(c,d,g,w,m,p,t);for(var f=0,y=0,v,P;f<b;++f)if(v=g[f]){for(f>=y&&(y=f+1);!(P=w[y])&&++y<b;);v._next=P||null}}return r=new We(r,o),r._enter=s,r._exit=l,r}function Ig(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Lg(){return new We(this._exit||this._groups.map(Nf),this._parents)}function Tg(e,t,n){var o=this.enter(),i=this,a=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?a.remove():n(a),o&&i?o.merge(i).order():i}function Mg(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,i=n.length,a=o.length,r=Math.min(i,a),s=new Array(i),l=0;l<r;++l)for(var h=n[l],c=o[l],d=h.length,u=s[l]=new Array(d),p,b=0;b<d;++b)(p=h[b]||c[b])&&(u[b]=p);for(;l<i;++l)s[l]=n[l];return new We(s,this._parents)}function Hg(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],i=o.length-1,a=o[i],r;--i>=0;)(r=o[i])&&(a&&r.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(r,a),a=r);return this}function Ng(e){e||(e=Eg);function t(d,u){return d&&u?e(d.__data__,u.__data__):!d-!u}for(var n=this._groups,o=n.length,i=new Array(o),a=0;a<o;++a){for(var r=n[a],s=r.length,l=i[a]=new Array(s),h,c=0;c<s;++c)(h=r[c])&&(l[c]=h);l.sort(t)}return new We(i,this._parents).order()}function Eg(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function jg(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Gg(){return Array.from(this)}function Fg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],i=0,a=o.length;i<a;++i){var r=o[i];if(r)return r}return null}function Ug(){let e=0;for(const t of this)++e;return e}function Dg(){return!this.node()}function zg(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var i=t[n],a=0,r=i.length,s;a<r;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function qg(e){return function(){this.removeAttribute(e)}}function Rg(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Og(e,t){return function(){this.setAttribute(e,t)}}function Bg(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function $g(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Vg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Wg(e,t){var n=pr(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?Rg:qg:typeof t=="function"?n.local?Vg:$g:n.local?Bg:Og)(n,t))}function Ef(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Jg(e){return function(){this.style.removeProperty(e)}}function Xg(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Qg(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Kg(e,t,n){return arguments.length>1?this.each((t==null?Jg:typeof t=="function"?Qg:Xg)(e,t,n??"")):oo(this.node(),e)}function oo(e,t){return e.style.getPropertyValue(t)||Ef(e).getComputedStyle(e,null).getPropertyValue(t)}function Zg(e){return function(){delete this[e]}}function Yg(e,t){return function(){this[e]=t}}function eb(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function tb(e,t){return arguments.length>1?this.each((t==null?Zg:typeof t=="function"?eb:Yg)(e,t)):this.node()[e]}function jf(e){return e.trim().split(/^|\s+/)}function ih(e){return e.classList||new Gf(e)}function Gf(e){this._node=e,this._names=jf(e.getAttribute("class")||"")}Gf.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Ff(e,t){for(var n=ih(e),o=-1,i=t.length;++o<i;)n.add(t[o])}function Uf(e,t){for(var n=ih(e),o=-1,i=t.length;++o<i;)n.remove(t[o])}function nb(e){return function(){Ff(this,e)}}function ob(e){return function(){Uf(this,e)}}function ib(e,t){return function(){(t.apply(this,arguments)?Ff:Uf)(this,e)}}function ab(e,t){var n=jf(e+"");if(arguments.length<2){for(var o=ih(this.node()),i=-1,a=n.length;++i<a;)if(!o.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?ib:t?nb:ob)(n,t))}function rb(){this.textContent=""}function sb(e){return function(){this.textContent=e}}function lb(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function hb(e){return arguments.length?this.each(e==null?rb:(typeof e=="function"?lb:sb)(e)):this.node().textContent}function cb(){this.innerHTML=""}function ub(e){return function(){this.innerHTML=e}}function db(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function fb(e){return arguments.length?this.each(e==null?cb:(typeof e=="function"?db:ub)(e)):this.node().innerHTML}function pb(){this.nextSibling&&this.parentNode.appendChild(this)}function mb(){return this.each(pb)}function yb(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function gb(){return this.each(yb)}function bb(e){var t=typeof e=="function"?e:Lf(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function vb(){return null}function wb(e,t){var n=typeof e=="function"?e:Lf(e),o=t==null?vb:typeof t=="function"?t:oh(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function Sb(){var e=this.parentNode;e&&e.removeChild(this)}function Cb(){return this.each(Sb)}function Pb(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function xb(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function kb(e){return this.select(e?xb:Pb)}function _b(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Ab(e){return function(t){e.call(this,t,this.__data__)}}function Ib(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function Lb(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++o]=a;++o?t.length=o:delete this.__on}}}function Tb(e,t,n){return function(){var o=this.__on,i,a=Ab(t);if(o){for(var r=0,s=o.length;r<s;++r)if((i=o[r]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},o?o.push(i):this.__on=[i]}}function Mb(e,t,n){var o=Ib(e+""),i,a=o.length,r;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,h=s.length,c;l<h;++l)for(i=0,c=s[l];i<a;++i)if((r=o[i]).type===c.type&&r.name===c.name)return c.value}return}for(s=t?Tb:Lb,i=0;i<a;++i)this.each(s(o[i],t,n));return this}function Df(e,t,n){var o=Ef(e),i=o.CustomEvent;typeof i=="function"?i=new i(t,n):(i=o.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function Hb(e,t){return function(){return Df(this,e,t)}}function Nb(e,t){return function(){return Df(this,e,t.apply(this,arguments))}}function Eb(e,t){return this.each((typeof t=="function"?Nb:Hb)(e,t))}function*jb(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],i=0,a=o.length,r;i<a;++i)(r=o[i])&&(yield r)}var zf=[null];function We(e,t){this._groups=e,this._parents=t}function pi(){return new We([[document.documentElement]],zf)}function Gb(){return this}We.prototype=pi.prototype={constructor:We,select:lg,selectAll:dg,selectChild:yg,selectChildren:wg,filter:Sg,data:Ag,enter:Cg,exit:Lg,join:Tg,merge:Mg,selection:Gb,order:Hg,sort:Ng,call:jg,nodes:Gg,node:Fg,size:Ug,empty:Dg,each:zg,attr:Wg,style:Kg,property:tb,classed:ab,text:hb,html:fb,raise:mb,lower:gb,append:bb,insert:wb,remove:Cb,clone:kb,datum:_b,on:Mb,dispatch:Eb,[Symbol.iterator]:jb};function St(e){return typeof e=="string"?new We([[document.querySelector(e)]],[document.documentElement]):new We([[e]],zf)}function ah(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function qf(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function mi(){}var ai=.7,Ga=1/ai,Jn="\\s*([+-]?\\d+)\\s*",ri="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",bt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Fb=/^#([0-9a-f]{3,8})$/,Ub=new RegExp(`^rgb\\(${Jn},${Jn},${Jn}\\)$`),Db=new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`),zb=new RegExp(`^rgba\\(${Jn},${Jn},${Jn},${ri}\\)$`),qb=new RegExp(`^rgba\\(${bt},${bt},${bt},${ri}\\)$`),Rb=new RegExp(`^hsl\\(${ri},${bt},${bt}\\)$`),Ob=new RegExp(`^hsla\\(${ri},${bt},${bt},${ri}\\)$`),Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ah(mi,Sn,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Mc,formatHex:Mc,formatHex8:Bb,formatHsl:$b,formatRgb:Hc,toString:Hc});function Mc(){return this.rgb().formatHex()}function Bb(){return this.rgb().formatHex8()}function $b(){return Rf(this).formatHsl()}function Hc(){return this.rgb().formatRgb()}function Sn(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Fb.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Nc(t):n===3?new Ue(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?ji(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?ji(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Ub.exec(e))?new Ue(t[1],t[2],t[3],1):(t=Db.exec(e))?new Ue(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=zb.exec(e))?ji(t[1],t[2],t[3],t[4]):(t=qb.exec(e))?ji(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Rb.exec(e))?Gc(t[1],t[2]/100,t[3]/100,1):(t=Ob.exec(e))?Gc(t[1],t[2]/100,t[3]/100,t[4]):Tc.hasOwnProperty(e)?Nc(Tc[e]):e==="transparent"?new Ue(NaN,NaN,NaN,0):null}function Nc(e){return new Ue(e>>16&255,e>>8&255,e&255,1)}function ji(e,t,n,o){return o<=0&&(e=t=n=NaN),new Ue(e,t,n,o)}function Vb(e){return e instanceof mi||(e=Sn(e)),e?(e=e.rgb(),new Ue(e.r,e.g,e.b,e.opacity)):new Ue}function Ks(e,t,n,o){return arguments.length===1?Vb(e):new Ue(e,t,n,o??1)}function Ue(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}ah(Ue,Ks,qf(mi,{brighter(e){return e=e==null?Ga:Math.pow(Ga,e),new Ue(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ai:Math.pow(ai,e),new Ue(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ue(pn(this.r),pn(this.g),pn(this.b),Fa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ec,formatHex:Ec,formatHex8:Wb,formatRgb:jc,toString:jc}));function Ec(){return`#${un(this.r)}${un(this.g)}${un(this.b)}`}function Wb(){return`#${un(this.r)}${un(this.g)}${un(this.b)}${un((isNaN(this.opacity)?1:this.opacity)*255)}`}function jc(){const e=Fa(this.opacity);return`${e===1?"rgb(":"rgba("}${pn(this.r)}, ${pn(this.g)}, ${pn(this.b)}${e===1?")":`, ${e})`}`}function Fa(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function pn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function un(e){return e=pn(e),(e<16?"0":"")+e.toString(16)}function Gc(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new st(e,t,n,o)}function Rf(e){if(e instanceof st)return new st(e.h,e.s,e.l,e.opacity);if(e instanceof mi||(e=Sn(e)),!e)return new st;if(e instanceof st)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,i=Math.min(t,n,o),a=Math.max(t,n,o),r=NaN,s=a-i,l=(a+i)/2;return s?(t===a?r=(n-o)/s+(n<o)*6:n===a?r=(o-t)/s+2:r=(t-n)/s+4,s/=l<.5?a+i:2-a-i,r*=60):s=l>0&&l<1?0:r,new st(r,s,l,e.opacity)}function Jb(e,t,n,o){return arguments.length===1?Rf(e):new st(e,t,n,o??1)}function st(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}ah(st,Jb,qf(mi,{brighter(e){return e=e==null?Ga:Math.pow(Ga,e),new st(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ai:Math.pow(ai,e),new st(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,i=2*n-o;return new Ue(Vr(e>=240?e-240:e+120,i,o),Vr(e,i,o),Vr(e<120?e+240:e-120,i,o),this.opacity)},clamp(){return new st(Fc(this.h),Gi(this.s),Gi(this.l),Fa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Fa(this.opacity);return`${e===1?"hsl(":"hsla("}${Fc(this.h)}, ${Gi(this.s)*100}%, ${Gi(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Fc(e){return e=(e||0)%360,e<0?e+360:e}function Gi(e){return Math.max(0,Math.min(1,e||0))}function Vr(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const rh=e=>()=>e;function Xb(e,t){return function(n){return e+n*t}}function Qb(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function Kb(e){return(e=+e)==1?Of:function(t,n){return n-t?Qb(t,n,e):rh(isNaN(t)?n:t)}}function Of(e,t){var n=t-e;return n?Xb(e,n):rh(isNaN(e)?t:e)}const Ua=function e(t){var n=Kb(t);function o(i,a){var r=n((i=Ks(i)).r,(a=Ks(a)).r),s=n(i.g,a.g),l=n(i.b,a.b),h=Of(i.opacity,a.opacity);return function(c){return i.r=r(c),i.g=s(c),i.b=l(c),i.opacity=h(c),i+""}}return o.gamma=e,o}(1);function Zb(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),i;return function(a){for(i=0;i<n;++i)o[i]=e[i]*(1-a)+t[i]*a;return o}}function Yb(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ev(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,i=new Array(o),a=new Array(n),r;for(r=0;r<o;++r)i[r]=sh(e[r],t[r]);for(;r<n;++r)a[r]=t[r];return function(s){for(r=0;r<o;++r)a[r]=i[r](s);return a}}function tv(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function rt(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function nv(e,t){var n={},o={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=sh(e[i],t[i]):o[i]=t[i];return function(a){for(i in n)o[i]=n[i](a);return o}}var Zs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Wr=new RegExp(Zs.source,"g");function ov(e){return function(){return e}}function iv(e){return function(t){return e(t)+""}}function Bf(e,t){var n=Zs.lastIndex=Wr.lastIndex=0,o,i,a,r=-1,s=[],l=[];for(e=e+"",t=t+"";(o=Zs.exec(e))&&(i=Wr.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[r]?s[r]+=a:s[++r]=a),(o=o[0])===(i=i[0])?s[r]?s[r]+=i:s[++r]=i:(s[++r]=null,l.push({i:r,x:rt(o,i)})),n=Wr.lastIndex;return n<t.length&&(a=t.slice(n),s[r]?s[r]+=a:s[++r]=a),s.length<2?l[0]?iv(l[0].x):ov(t):(t=l.length,function(h){for(var c=0,d;c<t;++c)s[(d=l[c]).i]=d.x(h);return s.join("")})}function sh(e,t){var n=typeof t,o;return t==null||n==="boolean"?rh(t):(n==="number"?rt:n==="string"?(o=Sn(t))?(t=o,Ua):Bf:t instanceof Sn?Ua:t instanceof Date?tv:Yb(t)?Zb:Array.isArray(t)?ev:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?nv:rt)(e,t)}function av(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var Uc=180/Math.PI,Ys={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function $f(e,t,n,o,i,a){var r,s,l;return(r=Math.sqrt(e*e+t*t))&&(e/=r,t/=r),(l=e*n+t*o)&&(n-=e*l,o-=t*l),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,l/=s),e*o<t*n&&(e=-e,t=-t,l=-l,r=-r),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*Uc,skewX:Math.atan(l)*Uc,scaleX:r,scaleY:s}}var Fi;function rv(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Ys:$f(t.a,t.b,t.c,t.d,t.e,t.f)}function sv(e){return e==null||(Fi||(Fi=document.createElementNS("http://www.w3.org/2000/svg","g")),Fi.setAttribute("transform",e),!(e=Fi.transform.baseVal.consolidate()))?Ys:(e=e.matrix,$f(e.a,e.b,e.c,e.d,e.e,e.f))}function Vf(e,t,n,o){function i(h){return h.length?h.pop()+" ":""}function a(h,c,d,u,p,b){if(h!==d||c!==u){var g=p.push("translate(",null,t,null,n);b.push({i:g-4,x:rt(h,d)},{i:g-2,x:rt(c,u)})}else(d||u)&&p.push("translate("+d+t+u+n)}function r(h,c,d,u){h!==c?(h-c>180?c+=360:c-h>180&&(h+=360),u.push({i:d.push(i(d)+"rotate(",null,o)-2,x:rt(h,c)})):c&&d.push(i(d)+"rotate("+c+o)}function s(h,c,d,u){h!==c?u.push({i:d.push(i(d)+"skewX(",null,o)-2,x:rt(h,c)}):c&&d.push(i(d)+"skewX("+c+o)}function l(h,c,d,u,p,b){if(h!==d||c!==u){var g=p.push(i(p)+"scale(",null,",",null,")");b.push({i:g-4,x:rt(h,d)},{i:g-2,x:rt(c,u)})}else(d!==1||u!==1)&&p.push(i(p)+"scale("+d+","+u+")")}return function(h,c){var d=[],u=[];return h=e(h),c=e(c),a(h.translateX,h.translateY,c.translateX,c.translateY,d,u),r(h.rotate,c.rotate,d,u),s(h.skewX,c.skewX,d,u),l(h.scaleX,h.scaleY,c.scaleX,c.scaleY,d,u),h=c=null,function(p){for(var b=-1,g=u.length,w;++b<g;)d[(w=u[b]).i]=w.x(p);return d.join("")}}}var lv=Vf(rv,"px, ","px)","deg)"),hv=Vf(sv,", ",")",")"),io=0,Io=0,wo=0,Wf=1e3,Da,Lo,za=0,Cn=0,mr=0,si=typeof performance=="object"&&performance.now?performance:Date,Jf=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function lh(){return Cn||(Jf(cv),Cn=si.now()+mr)}function cv(){Cn=0}function qa(){this._call=this._time=this._next=null}qa.prototype=Xf.prototype={constructor:qa,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?lh():+n)+(t==null?0:+t),!this._next&&Lo!==this&&(Lo?Lo._next=this:Da=this,Lo=this),this._call=e,this._time=n,el()},stop:function(){this._call&&(this._call=null,this._time=1/0,el())}};function Xf(e,t,n){var o=new qa;return o.restart(e,t,n),o}function uv(){lh(),++io;for(var e=Da,t;e;)(t=Cn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--io}function Dc(){Cn=(za=si.now())+mr,io=Io=0;try{uv()}finally{io=0,fv(),Cn=0}}function dv(){var e=si.now(),t=e-za;t>Wf&&(mr-=t,za=e)}function fv(){for(var e,t=Da,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Da=n);Lo=e,el(o)}function el(e){if(!io){Io&&(Io=clearTimeout(Io));var t=e-Cn;t>24?(e<1/0&&(Io=setTimeout(Dc,e-si.now()-mr)),wo&&(wo=clearInterval(wo))):(wo||(za=si.now(),wo=setInterval(dv,Wf)),io=1,Jf(Dc))}}function zc(e,t,n){var o=new qa;return t=t==null?0:+t,o.restart(i=>{o.stop(),e(i+t)},t,n),o}var pv=If("start","end","cancel","interrupt"),mv=[],Qf=0,qc=1,tl=2,oa=3,Rc=4,nl=5,ia=6;function yr(e,t,n,o,i,a){var r=e.__transition;if(!r)e.__transition={};else if(n in r)return;yv(e,n,{name:t,index:o,group:i,on:pv,tween:mv,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:Qf})}function hh(e,t){var n=dt(e,t);if(n.state>Qf)throw new Error("too late; already scheduled");return n}function wt(e,t){var n=dt(e,t);if(n.state>oa)throw new Error("too late; already running");return n}function dt(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function yv(e,t,n){var o=e.__transition,i;o[t]=n,n.timer=Xf(a,0,n.time);function a(h){n.state=qc,n.timer.restart(r,n.delay,n.time),n.delay<=h&&r(h-n.delay)}function r(h){var c,d,u,p;if(n.state!==qc)return l();for(c in o)if(p=o[c],p.name===n.name){if(p.state===oa)return zc(r);p.state===Rc?(p.state=ia,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[c]):+c<t&&(p.state=ia,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[c])}if(zc(function(){n.state===oa&&(n.state=Rc,n.timer.restart(s,n.delay,n.time),s(h))}),n.state=tl,n.on.call("start",e,e.__data__,n.index,n.group),n.state===tl){for(n.state=oa,i=new Array(u=n.tween.length),c=0,d=-1;c<u;++c)(p=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(i[++d]=p);i.length=d+1}}function s(h){for(var c=h<n.duration?n.ease.call(null,h/n.duration):(n.timer.restart(l),n.state=nl,1),d=-1,u=i.length;++d<u;)i[d].call(e,c);n.state===nl&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=ia,n.timer.stop(),delete o[t];for(var h in o)return;delete e.__transition}}function gv(e,t){var n=e.__transition,o,i,a=!0,r;if(n){t=t==null?null:t+"";for(r in n){if((o=n[r]).name!==t){a=!1;continue}i=o.state>tl&&o.state<nl,o.state=ia,o.timer.stop(),o.on.call(i?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[r]}a&&delete e.__transition}}function bv(e){return this.each(function(){gv(this,e)})}function vv(e,t){var n,o;return function(){var i=wt(this,e),a=i.tween;if(a!==n){o=n=a;for(var r=0,s=o.length;r<s;++r)if(o[r].name===t){o=o.slice(),o.splice(r,1);break}}i.tween=o}}function wv(e,t,n){var o,i;if(typeof n!="function")throw new Error;return function(){var a=wt(this,e),r=a.tween;if(r!==o){i=(o=r).slice();for(var s={name:t,value:n},l=0,h=i.length;l<h;++l)if(i[l].name===t){i[l]=s;break}l===h&&i.push(s)}a.tween=i}}function Sv(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=dt(this.node(),n).tween,i=0,a=o.length,r;i<a;++i)if((r=o[i]).name===e)return r.value;return null}return this.each((t==null?vv:wv)(n,e,t))}function ch(e,t,n){var o=e._id;return e.each(function(){var i=wt(this,o);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return dt(i,o).value[t]}}function Kf(e,t){var n;return(typeof t=="number"?rt:t instanceof Sn?Ua:(n=Sn(t))?(t=n,Ua):Bf)(e,t)}function Cv(e){return function(){this.removeAttribute(e)}}function Pv(e){return function(){this.removeAttributeNS(e.space,e.local)}}function xv(e,t,n){var o,i=n+"",a;return function(){var r=this.getAttribute(e);return r===i?null:r===o?a:a=t(o=r,n)}}function kv(e,t,n){var o,i=n+"",a;return function(){var r=this.getAttributeNS(e.space,e.local);return r===i?null:r===o?a:a=t(o=r,n)}}function _v(e,t,n){var o,i,a;return function(){var r,s=n(this),l;return s==null?void this.removeAttribute(e):(r=this.getAttribute(e),l=s+"",r===l?null:r===o&&l===i?a:(i=l,a=t(o=r,s)))}}function Av(e,t,n){var o,i,a;return function(){var r,s=n(this),l;return s==null?void this.removeAttributeNS(e.space,e.local):(r=this.getAttributeNS(e.space,e.local),l=s+"",r===l?null:r===o&&l===i?a:(i=l,a=t(o=r,s)))}}function Iv(e,t){var n=pr(e),o=n==="transform"?hv:Kf;return this.attrTween(e,typeof t=="function"?(n.local?Av:_v)(n,o,ch(this,"attr."+e,t)):t==null?(n.local?Pv:Cv)(n):(n.local?kv:xv)(n,o,t))}function Lv(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Tv(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Mv(e,t){var n,o;function i(){var a=t.apply(this,arguments);return a!==o&&(n=(o=a)&&Tv(e,a)),n}return i._value=t,i}function Hv(e,t){var n,o;function i(){var a=t.apply(this,arguments);return a!==o&&(n=(o=a)&&Lv(e,a)),n}return i._value=t,i}function Nv(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=pr(e);return this.tween(n,(o.local?Mv:Hv)(o,t))}function Ev(e,t){return function(){hh(this,e).delay=+t.apply(this,arguments)}}function jv(e,t){return t=+t,function(){hh(this,e).delay=t}}function Gv(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Ev:jv)(t,e)):dt(this.node(),t).delay}function Fv(e,t){return function(){wt(this,e).duration=+t.apply(this,arguments)}}function Uv(e,t){return t=+t,function(){wt(this,e).duration=t}}function Dv(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Fv:Uv)(t,e)):dt(this.node(),t).duration}function zv(e,t){if(typeof t!="function")throw new Error;return function(){wt(this,e).ease=t}}function qv(e){var t=this._id;return arguments.length?this.each(zv(t,e)):dt(this.node(),t).ease}function Rv(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;wt(this,e).ease=n}}function Ov(e){if(typeof e!="function")throw new Error;return this.each(Rv(this._id,e))}function Bv(e){typeof e!="function"&&(e=Mf(e));for(var t=this._groups,n=t.length,o=new Array(n),i=0;i<n;++i)for(var a=t[i],r=a.length,s=o[i]=[],l,h=0;h<r;++h)(l=a[h])&&e.call(l,l.__data__,h,a)&&s.push(l);return new Ht(o,this._parents,this._name,this._id)}function $v(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,i=n.length,a=Math.min(o,i),r=new Array(o),s=0;s<a;++s)for(var l=t[s],h=n[s],c=l.length,d=r[s]=new Array(c),u,p=0;p<c;++p)(u=l[p]||h[p])&&(d[p]=u);for(;s<o;++s)r[s]=t[s];return new Ht(r,this._parents,this._name,this._id)}function Vv(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Wv(e,t,n){var o,i,a=Vv(t)?hh:wt;return function(){var r=a(this,e),s=r.on;s!==o&&(i=(o=s).copy()).on(t,n),r.on=i}}function Jv(e,t){var n=this._id;return arguments.length<2?dt(this.node(),n).on.on(e):this.each(Wv(n,e,t))}function Xv(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Qv(){return this.on("end.remove",Xv(this._id))}function Kv(e){var t=this._name,n=this._id;typeof e!="function"&&(e=oh(e));for(var o=this._groups,i=o.length,a=new Array(i),r=0;r<i;++r)for(var s=o[r],l=s.length,h=a[r]=new Array(l),c,d,u=0;u<l;++u)(c=s[u])&&(d=e.call(c,c.__data__,u,s))&&("__data__"in c&&(d.__data__=c.__data__),h[u]=d,yr(h[u],t,n,u,h,dt(c,n)));return new Ht(a,this._parents,t,n)}function Zv(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Tf(e));for(var o=this._groups,i=o.length,a=[],r=[],s=0;s<i;++s)for(var l=o[s],h=l.length,c,d=0;d<h;++d)if(c=l[d]){for(var u=e.call(c,c.__data__,d,l),p,b=dt(c,n),g=0,w=u.length;g<w;++g)(p=u[g])&&yr(p,t,n,g,u,b);a.push(u),r.push(c)}return new Ht(a,r,t,n)}var Yv=pi.prototype.constructor;function ew(){return new Yv(this._groups,this._parents)}function tw(e,t){var n,o,i;return function(){var a=oo(this,e),r=(this.style.removeProperty(e),oo(this,e));return a===r?null:a===n&&r===o?i:i=t(n=a,o=r)}}function Zf(e){return function(){this.style.removeProperty(e)}}function nw(e,t,n){var o,i=n+"",a;return function(){var r=oo(this,e);return r===i?null:r===o?a:a=t(o=r,n)}}function ow(e,t,n){var o,i,a;return function(){var r=oo(this,e),s=n(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(e),oo(this,e))),r===l?null:r===o&&l===i?a:(i=l,a=t(o=r,s))}}function iw(e,t){var n,o,i,a="style."+t,r="end."+a,s;return function(){var l=wt(this,e),h=l.on,c=l.value[a]==null?s||(s=Zf(t)):void 0;(h!==n||i!==c)&&(o=(n=h).copy()).on(r,i=c),l.on=o}}function aw(e,t,n){var o=(e+="")=="transform"?lv:Kf;return t==null?this.styleTween(e,tw(e,o)).on("end.style."+e,Zf(e)):typeof t=="function"?this.styleTween(e,ow(e,o,ch(this,"style."+e,t))).each(iw(this._id,e)):this.styleTween(e,nw(e,o,t),n).on("end.style."+e,null)}function rw(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function sw(e,t,n){var o,i;function a(){var r=t.apply(this,arguments);return r!==i&&(o=(i=r)&&rw(e,r,n)),o}return a._value=t,a}function lw(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,sw(e,t,n??""))}function hw(e){return function(){this.textContent=e}}function cw(e){return function(){var t=e(this);this.textContent=t??""}}function uw(e){return this.tween("text",typeof e=="function"?cw(ch(this,"text",e)):hw(e==null?"":e+""))}function dw(e){return function(t){this.textContent=e.call(this,t)}}function fw(e){var t,n;function o(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&dw(i)),t}return o._value=e,o}function pw(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,fw(e))}function mw(){for(var e=this._name,t=this._id,n=Yf(),o=this._groups,i=o.length,a=0;a<i;++a)for(var r=o[a],s=r.length,l,h=0;h<s;++h)if(l=r[h]){var c=dt(l,t);yr(l,e,n,h,r,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Ht(o,this._parents,e,n)}function yw(){var e,t,n=this,o=n._id,i=n.size();return new Promise(function(a,r){var s={value:r},l={value:function(){--i===0&&a()}};n.each(function(){var h=wt(this,o),c=h.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(l)),h.on=t}),i===0&&a()})}var gw=0;function Ht(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function Yf(){return++gw}var Ct=pi.prototype;Ht.prototype={constructor:Ht,select:Kv,selectAll:Zv,selectChild:Ct.selectChild,selectChildren:Ct.selectChildren,filter:Bv,merge:$v,selection:ew,transition:mw,call:Ct.call,nodes:Ct.nodes,node:Ct.node,size:Ct.size,empty:Ct.empty,each:Ct.each,on:Jv,attr:Iv,attrTween:Nv,style:aw,styleTween:lw,text:uw,textTween:pw,remove:Qv,tween:Sv,delay:Gv,duration:Dv,ease:qv,easeVarying:Ov,end:yw,[Symbol.iterator]:Ct[Symbol.iterator]};function bw(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var vw={time:null,delay:0,duration:250,ease:bw};function ww(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Sw(e){var t,n;e instanceof Ht?(t=e._id,e=e._name):(t=Yf(),(n=vw).time=lh(),e=e==null?null:e+"");for(var o=this._groups,i=o.length,a=0;a<i;++a)for(var r=o[a],s=r.length,l,h=0;h<s;++h)(l=r[h])&&yr(l,e,t,h,r,n||ww(l,t));return new Ht(o,this._parents,e,t)}pi.prototype.interrupt=bv;pi.prototype.transition=Sw;function Cw(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Ra(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),o=e.slice(0,n);return[o.length>1?o[0]+o.slice(2):o,+e.slice(n+1)]}function ao(e){return e=Ra(Math.abs(e)),e?e[1]:NaN}function Pw(e,t){return function(n,o){for(var i=n.length,a=[],r=0,s=e[0],l=0;i>0&&s>0&&(l+s+1>o&&(s=Math.max(1,o-l)),a.push(n.substring(i-=s,i+s)),!((l+=s+1)>o));)s=e[r=(r+1)%e.length];return a.reverse().join(t)}}function xw(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var kw=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Oa(e){if(!(t=kw.exec(e)))throw new Error("invalid format: "+e);var t;return new uh({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Oa.prototype=uh.prototype;function uh(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}uh.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function _w(e){e:for(var t=e.length,n=1,o=-1,i;n<t;++n)switch(e[n]){case".":o=i=n;break;case"0":o===0&&(o=n),i=n;break;default:if(!+e[n])break e;o>0&&(o=0);break}return o>0?e.slice(0,o)+e.slice(i+1):e}var Ba;function Aw(e,t){var n=Ra(e,t);if(!n)return Ba=void 0,e.toPrecision(t);var o=n[0],i=n[1],a=i-(Ba=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,r=o.length;return a===r?o:a>r?o+new Array(a-r+1).join("0"):a>0?o.slice(0,a)+"."+o.slice(a):"0."+new Array(1-a).join("0")+Ra(e,Math.max(0,t+a-1))[0]}function Oc(e,t){var n=Ra(e,t);if(!n)return e+"";var o=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+o:o.length>i+1?o.slice(0,i+1)+"."+o.slice(i+1):o+new Array(i-o.length+2).join("0")}const Bc={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Cw,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Oc(e*100,t),r:Oc,s:Aw,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function $c(e){return e}var Vc=Array.prototype.map,Wc=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Iw(e){var t=e.grouping===void 0||e.thousands===void 0?$c:Pw(Vc.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",o=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?$c:xw(Vc.call(e.numerals,String)),r=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function h(d,u){d=Oa(d);var p=d.fill,b=d.align,g=d.sign,w=d.symbol,m=d.zero,f=d.width,y=d.comma,v=d.precision,P=d.trim,C=d.type;C==="n"?(y=!0,C="g"):Bc[C]||(v===void 0&&(v=12),P=!0,C="g"),(m||p==="0"&&b==="=")&&(m=!0,p="0",b="=");var k=(u&&u.prefix!==void 0?u.prefix:"")+(w==="$"?n:w==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():""),I=(w==="$"?o:/[%p]/.test(C)?r:"")+(u&&u.suffix!==void 0?u.suffix:""),U=Bc[C],L=/[defgprs%]/.test(C);v=v===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function B(N){var $=k,F=I,V,de,se;if(C==="c")F=U(N)+F,N="";else{N=+N;var A=N<0||1/N<0;if(N=isNaN(N)?l:U(Math.abs(N),v),P&&(N=_w(N)),A&&+N==0&&g!=="+"&&(A=!1),$=(A?g==="("?g:s:g==="-"||g==="("?"":g)+$,F=(C==="s"&&!isNaN(N)&&Ba!==void 0?Wc[8+Ba/3]:"")+F+(A&&g==="("?")":""),L){for(V=-1,de=N.length;++V<de;)if(se=N.charCodeAt(V),48>se||se>57){F=(se===46?i+N.slice(V+1):N.slice(V))+F,N=N.slice(0,V);break}}}y&&!m&&(N=t(N,1/0));var H=$.length+N.length+F.length,S=H<f?new Array(f-H+1).join(p):"";switch(y&&m&&(N=t(S+N,S.length?f-F.length:1/0),S=""),b){case"<":N=$+N+F+S;break;case"=":N=$+S+N+F;break;case"^":N=S.slice(0,H=S.length>>1)+$+N+F+S.slice(H);break;default:N=S+$+N+F;break}return a(N)}return B.toString=function(){return d+""},B}function c(d,u){var p=Math.max(-8,Math.min(8,Math.floor(ao(u)/3)))*3,b=Math.pow(10,-p),g=h((d=Oa(d),d.type="f",d),{suffix:Wc[8+p/3]});return function(w){return g(b*w)}}return{format:h,formatPrefix:c}}var Ui,ep,tp;Lw({thousands:",",grouping:[3],currency:["$",""]});function Lw(e){return Ui=Iw(e),ep=Ui.format,tp=Ui.formatPrefix,Ui}function Tw(e){return Math.max(0,-ao(Math.abs(e)))}function Mw(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ao(t)/3)))*3-ao(Math.abs(e)))}function Hw(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,ao(t)-ao(e))+1}function Nw(e){var t=0,n=e.children,o=n&&n.length;if(!o)t=1;else for(;--o>=0;)t+=n[o].value;e.value=t}function Ew(){return this.eachAfter(Nw)}function jw(e,t){let n=-1;for(const o of this)e.call(t,o,++n,this);return this}function Gw(e,t){for(var n=this,o=[n],i,a,r=-1;n=o.pop();)if(e.call(t,n,++r,this),i=n.children)for(a=i.length-1;a>=0;--a)o.push(i[a]);return this}function Fw(e,t){for(var n=this,o=[n],i=[],a,r,s,l=-1;n=o.pop();)if(i.push(n),a=n.children)for(r=0,s=a.length;r<s;++r)o.push(a[r]);for(;n=i.pop();)e.call(t,n,++l,this);return this}function Uw(e,t){let n=-1;for(const o of this)if(e.call(t,o,++n,this))return o}function Dw(e){return this.eachAfter(function(t){for(var n=+e(t.data)||0,o=t.children,i=o&&o.length;--i>=0;)n+=o[i].value;t.value=n})}function zw(e){return this.eachBefore(function(t){t.children&&t.children.sort(e)})}function qw(e){for(var t=this,n=Rw(t,e),o=[t];t!==n;)t=t.parent,o.push(t);for(var i=o.length;e!==n;)o.splice(i,0,e),e=e.parent;return o}function Rw(e,t){if(e===t)return e;var n=e.ancestors(),o=t.ancestors(),i=null;for(e=n.pop(),t=o.pop();e===t;)i=e,e=n.pop(),t=o.pop();return i}function Ow(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t}function Bw(){return Array.from(this)}function $w(){var e=[];return this.eachBefore(function(t){t.children||e.push(t)}),e}function Vw(){var e=this,t=[];return e.each(function(n){n!==e&&t.push({source:n.parent,target:n})}),t}function*Ww(){var e=this,t,n=[e],o,i,a;do for(t=n.reverse(),n=[];e=t.pop();)if(yield e,o=e.children)for(i=0,a=o.length;i<a;++i)n.push(o[i]);while(n.length)}function dh(e,t){e instanceof Map?(e=[void 0,e],t===void 0&&(t=Qw)):t===void 0&&(t=Xw);for(var n=new $a(e),o,i=[n],a,r,s,l;o=i.pop();)if((r=t(o.data))&&(l=(r=Array.from(r)).length))for(o.children=r,s=l-1;s>=0;--s)i.push(a=r[s]=new $a(r[s])),a.parent=o,a.depth=o.depth+1;return n.eachBefore(Zw)}function Jw(){return dh(this).eachBefore(Kw)}function Xw(e){return e.children}function Qw(e){return Array.isArray(e)?e[1]:null}function Kw(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function Zw(e){var t=0;do e.height=t;while((e=e.parent)&&e.height<++t)}function $a(e){this.data=e,this.depth=this.height=0,this.parent=null}$a.prototype=dh.prototype={constructor:$a,count:Ew,each:jw,eachAfter:Fw,eachBefore:Gw,find:Uw,sum:Dw,sort:zw,path:qw,ancestors:Ow,descendants:Bw,leaves:$w,links:Vw,copy:Jw,[Symbol.iterator]:Ww};function Jr(e){for(var t=-1,n=e.length,o,i=e[n-1],a=0;++t<n;)o=i,i=e[t],a+=o[1]*i[0]-o[0]*i[1];return a/2}function np(e){for(var t=-1,n=e.length,o=0,i=0,a,r=e[n-1],s,l=0;++t<n;)a=r,r=e[t],l+=s=a[0]*r[1]-r[0]*a[1],o+=(a[0]+r[0])*s,i+=(a[1]+r[1])*s;return l*=3,[o/l,i/l]}function Yw(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function e1(e){return function(){return e}}function t1(e){return+e}var Jc=[0,1];function qt(e){return e}function ol(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:e1(isNaN(t)?NaN:.5)}function n1(e,t){var n;return e>t&&(n=e,e=t,t=n),function(o){return Math.max(e,Math.min(t,o))}}function o1(e,t,n){var o=e[0],i=e[1],a=t[0],r=t[1];return i<o?(o=ol(i,o),a=n(r,a)):(o=ol(o,i),a=n(a,r)),function(s){return a(o(s))}}function i1(e,t,n){var o=Math.min(e.length,t.length)-1,i=new Array(o),a=new Array(o),r=-1;for(e[o]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++r<o;)i[r]=ol(e[r],e[r+1]),a[r]=n(t[r],t[r+1]);return function(s){var l=Jy(e,s,1,o)-1;return a[l](i[l](s))}}function a1(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function r1(){var e=Jc,t=Jc,n=sh,o,i,a,r=qt,s,l,h;function c(){var u=Math.min(e.length,t.length);return r!==qt&&(r=n1(e[0],e[u-1])),s=u>2?i1:o1,l=h=null,d}function d(u){return u==null||isNaN(u=+u)?a:(l||(l=s(e.map(o),t,n)))(o(r(u)))}return d.invert=function(u){return r(i((h||(h=s(t,e.map(o),rt)))(u)))},d.domain=function(u){return arguments.length?(e=Array.from(u,t1),c()):e.slice()},d.range=function(u){return arguments.length?(t=Array.from(u),c()):t.slice()},d.rangeRound=function(u){return t=Array.from(u),n=av,c()},d.clamp=function(u){return arguments.length?(r=u?!0:qt,c()):r!==qt},d.interpolate=function(u){return arguments.length?(n=u,c()):n},d.unknown=function(u){return arguments.length?(a=u,d):a},function(u,p){return o=u,i=p,c()}}function s1(e,t,n,o){var i=Yy(e,t,n),a;switch(o=Oa(o??",f"),o.type){case"s":{var r=Math.max(Math.abs(e),Math.abs(t));return o.precision==null&&!isNaN(a=Mw(i,r))&&(o.precision=a),tp(o,r)}case"":case"e":case"g":case"p":case"r":{o.precision==null&&!isNaN(a=Hw(i,Math.max(Math.abs(e),Math.abs(t))))&&(o.precision=a-(o.type==="e"));break}case"f":case"%":{o.precision==null&&!isNaN(a=Tw(i))&&(o.precision=a-(o.type==="%")*2);break}}return ep(o)}function l1(e){var t=e.domain;return e.ticks=function(n){var o=t();return Zy(o[0],o[o.length-1],n??10)},e.tickFormat=function(n,o){var i=t();return s1(i[0],i[i.length-1],n??10,o)},e.nice=function(n){n==null&&(n=10);var o=t(),i=0,a=o.length-1,r=o[i],s=o[a],l,h,c=10;for(s<r&&(h=r,r=s,s=h,h=i,i=a,a=h);c-- >0;){if(h=Xs(r,s,n),h===l)return o[i]=r,o[a]=s,t(o);if(h>0)r=Math.floor(r/h)*h,s=Math.ceil(s/h)*h;else if(h<0)r=Math.ceil(r*h)/h,s=Math.floor(s*h)/h;else break;l=h}return e},e}function Xc(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function h1(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function c1(e){return e<0?-e*e:e*e}function u1(e){var t=e(qt,qt),n=1;function o(){return n===1?e(qt,qt):n===.5?e(h1,c1):e(Xc(n),Xc(1/n))}return t.exponent=function(i){return arguments.length?(n=+i,o()):n},l1(t)}function op(){var e=u1(r1());return e.copy=function(){return a1(e,op()).exponent(e.exponent())},Yw.apply(e,arguments),e}function d1(){return op.apply(null,arguments).exponent(.5)}function To(e,t,n){this.k=e,this.x=t,this.y=n}To.prototype={constructor:To,scale:function(e){return e===1?this:new To(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new To(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};To.prototype;function aa(e){for(var t=-1,n=e.length,o,i=e[n-1],a=0;++t<n;)o=i,i=e[t],a+=o[1]*i[0]-o[0]*i[1];return a/2}function f1(e){for(var t=-1,n=e.length,o=0,i=0,a,r=e[n-1],s,l=0;++t<n;)a=r,r=e[t],l+=s=a[0]*r[1]-r[0]*a[1],o+=(a[0]+r[0])*s,i+=(a[1]+r[1])*s;return l*=3,[o/l,i/l]}function ip(e,t){for(var n=e.length,o=e[n-1],i=t[0],a=t[1],r=o[0],s=o[1],l,h,c=!1,d=0;d<n;++d)o=e[d],l=o[0],h=o[1],h>a!=s>a&&i<(r-l)*(a-h)/(s-h)+l&&(c=!c),r=l,s=h;return c}var ro=0,Mo=0,So=0,ap=1e3,Va,Ho,Wa=0,Pn=0,gr=0,li=typeof performance=="object"&&performance.now?performance:Date,rp=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function sp(){return Pn||(rp(p1),Pn=li.now()+gr)}function p1(){Pn=0}function il(){this._call=this._time=this._next=null}il.prototype=lp.prototype={constructor:il,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?sp():+n)+(t==null?0:+t),!this._next&&Ho!==this&&(Ho?Ho._next=this:Va=this,Ho=this),this._call=e,this._time=n,al()},stop:function(){this._call&&(this._call=null,this._time=1/0,al())}};function lp(e,t,n){var o=new il;return o.restart(e,t,n),o}function m1(){sp(),++ro;for(var e=Va,t;e;)(t=Pn-e._time)>=0&&e._call.call(null,t),e=e._next;--ro}function Qc(){Pn=(Wa=li.now())+gr,ro=Mo=0;try{m1()}finally{ro=0,g1(),Pn=0}}function y1(){var e=li.now(),t=e-Wa;t>ap&&(gr-=t,Wa=e)}function g1(){for(var e,t=Va,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Va=n);Ho=e,al(o)}function al(e){if(!ro){Mo&&(Mo=clearTimeout(Mo));var t=e-Pn;t>24?(e<1/0&&(Mo=setTimeout(Qc,e-li.now()-gr)),So&&(So=clearInterval(So))):(So||(Wa=li.now(),So=setInterval(y1,ap)),ro=1,rp(Qc))}}var b1={value:()=>{}};function hp(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new ra(n)}function ra(e){this._=e}function v1(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",i=n.indexOf(".");if(i>=0&&(o=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}ra.prototype=hp.prototype={constructor:ra,on:function(e,t){var n=this._,o=v1(e+"",n),i,a=-1,r=o.length;if(arguments.length<2){for(;++a<r;)if((i=(e=o[a]).type)&&(i=w1(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++a<r;)if(i=(e=o[a]).type)n[i]=Kc(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Kc(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new ra(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),o=0,i,a;o<i;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(a=this._[e],o=0,i=a.length;o<i;++o)a[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],i=0,a=o.length;i<a;++i)o[i].value.apply(t,n)}};function w1(e,t){for(var n=0,o=e.length,i;n<o;++n)if((i=e[n]).name===t)return i.value}function Kc(e,t,n){for(var o=0,i=e.length;o<i;++o)if(e[o].name===t){e[o]=b1,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}function Zc(e,t){let n,o;for(const i of e)i!=null&&(n===void 0?i>=i&&(n=o=i):(n>i&&(n=i),o<i&&(o=i)));return[n,o]}function S1(e,t,n){return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])}function C1(e,t){return e[0]-t[0]||e[1]-t[1]}function Yc(e){const t=e.length,n=[0,1];let o=2,i;for(i=2;i<t;++i){for(;o>1&&S1(e[n[o-2]],e[n[o-1]],e[i])<=0;)--o;n[o++]=i}return n.slice(0,o)}function P1(e){if((n=e.length)<3)return null;var t,n,o=new Array(n),i=new Array(n);for(t=0;t<n;++t)o[t]=[+e[t][0],+e[t][1],t];for(o.sort(C1),t=0;t<n;++t)i[t]=[o[t][0],-o[t][1]];var a=Yc(o),r=Yc(i),s=r[0]===a[0],l=r[r.length-1]===a[a.length-1],h=[];for(t=a.length-1;t>=0;--t)h.push(e[o[a[t]][2]]);for(t=+s;t<r.length-l;++t)h.push(e[o[r[t]][2]]);return h}function x1(e){for(var t=-1,n=e.length,o=e[n-1],i,a,r=o[0],s=o[1],l=0;++t<n;)i=r,a=s,o=e[t],r=o[0],s=o[1],i-=r,a-=s,l+=Math.hypot(i,a);return l}var Zt=1e-10;function sa(e){return e<=Zt&&e>=-Zt}function so(e,t){return e.x*t.x+e.y*t.y+e.z*t.z}function eu(e,t){return sa(e.x*t.y-e.y*t.x)&&sa(e.y*t.z-e.z*t.y)&&sa(e.z*t.x-e.x*t.z)}function k1(e){var t,n,o,i,a,r,s,l;if(o=e[e.length-2],i=e[e.length-1],a=e[0],r=Di(o,i),s=Di(i,a),n=Xr(r,s),t=Math.sign(n),o=i,i=a,a=e[1],r=s,s=Di(i,a),n=Xr(r,s),Math.sign(n)===t){for(l=2;l<e.length-1;l++)if(o=i,i=a,a=e[l],r=s,s=Di(i,a),n=Xr(r,s),Math.sign(n)!==t)return;return t}}function Di(e,t){return[t[0]-e[0],t[1]-e[1]]}function Xr(e,t){return e[0]*t[1]-e[1]*t[0]}function _1(e,t){this.face=e,this.vert=t,this.nextf=null,this.prevf=null,this.nextv=null,this.prevv=null}function on(e){this.forFace=e,this.head=null}on.prototype.add=function(e){this.head===null?this.head=e:this.forFace?(this.head.prevv=e,e.nextv=this.head,this.head=e):(this.head.prevf=e,e.nextf=this.head,this.head=e)};on.prototype.isEmpty=function(){return this.head===null};on.prototype.fill=function(e){if(!this.forFace){var t=this.head;do e.push(t.face),t.face.marked=!0,t=t.nextf;while(t!==null)}};on.prototype.removeAll=function(){if(this.forFace){var e=this.head;do e.prevf===null?e.nextf===null?e.vert.conflicts.head=null:(e.nextf.prevf=null,e.vert.conflicts.head=e.nextf):(e.nextf!=null&&(e.nextf.prevf=e.prevf),e.prevf.nextf=e.nextf),e=e.nextv,e!=null&&(e.prevv=null);while(e!=null)}else{var e=this.head;do e.prevv==null?e.nextv==null?e.face.conflicts.head=null:(e.nextv.prevv=null,e.face.conflicts.head=e.nextv):(e.nextv!=null&&(e.nextv.prevv=e.prevv),e.prevv.nextv=e.nextv),e=e.nextf,e!=null&&(e.prevf=null);while(e!=null)}};on.prototype.getVertices=function(){for(var e=[],t=this.head;t!==null;)e.push(t.vert),t=t.nextv;return e};function ct(e,t,n,o,i,a){this.x=e,this.y=t,this.weight=Zt,this.index=0,this.conflicts=new on(!1),this.neighbours=null,this.nonClippedPolygon=null,this.polygon=null,this.originalObject=null,this.isDummy=!1,i!==void 0&&(this.originalObject=i),a!=null&&(this.isDummy=a),o!=null&&(this.weight=o),n!=null?this.z=n:this.z=this.projectZ(this.x,this.y,this.weight)}ct.prototype.projectZ=function(e,t,n){return e*e+t*t-n};ct.prototype.setWeight=function(e){this.weight=e,this.z=this.projectZ(this.x,this.y,this.weight)};ct.prototype.subtract=function(e){return new ct(e.x-this.x,e.y-this.y,e.z-this.z)};ct.prototype.crossproduct=function(e){return new ct(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)};ct.prototype.equals=function(e){return this.x===e.x&&this.y===e.y&&this.z===e.z};function fh(e){var t=e.verts[0],n=e.verts[1],o=e.verts[2];this.a=t.y*(n.z-o.z)+n.y*(o.z-t.z)+o.y*(t.z-n.z),this.b=t.z*(n.x-o.x)+n.z*(o.x-t.x)+o.z*(t.x-n.x),this.c=t.x*(n.y-o.y)+n.x*(o.y-t.y)+o.x*(t.y-n.y),this.d=-1*(t.x*(n.y*o.z-o.y*n.z)+n.x*(o.y*t.z-t.y*o.z)+o.x*(t.y*n.z-n.y*t.z))}fh.prototype.getNormZPlane=function(){return[-1*(this.a/this.c),-1*(this.b/this.c),-1*(this.d/this.c)]};fh.prototype.getDualPointMappedToPlane=function(){var e=this.getNormZPlane(),t=new A1(e[0]/2,e[1]/2);return t};function A1(e,t){this.x=e,this.y=t}function ph(e,t,n){this.x=e,this.y=t,this.z=n}ph.prototype.negate=function(){this.x*=-1,this.y*=-1,this.z*=-1};ph.prototype.normalize=function(){var e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);e>0&&(this.x/=e,this.y/=e,this.z/=e)};function Xn(e,t,n){this.next=null,this.prev=null,this.twin=null,this.orig=e,this.dest=t,this.iFace=n}Xn.prototype.isHorizon=function(){return this.twin!==null&&!this.iFace.marked&&this.twin.iFace.marked};Xn.prototype.findHorizon=function(e){if(this.isHorizon()){if(e.length>0&&this===e[0])return;e.push(this),this.next.findHorizon(e)}else this.twin!==null&&this.twin.next.findHorizon(e)};Xn.prototype.isEqual=function(e,t){return this.orig.equals(e)&&this.dest.equals(t)||this.orig.equals(t)&&this.dest.equals(e)};function mn(e){this.message=e,this.stack=new Error().stack}mn.prototype.name="d3WeightedVoronoiError";mn.prototype=new Error;function Te(e,t,n,o){this.conflicts=new on(!0),this.verts=[e,t,n],this.marked=!1;var i=e.subtract(t).crossproduct(t.subtract(n));this.normal=new ph(-i.x,-i.y,-i.z),this.normal.normalize(),this.createEdges(),this.dualPoint=null,o!=null&&this.orient(o)}Te.prototype.getDualPoint=function(){if(this.dualPoint==null){var e=new fh(this);this.dualPoint=e.getDualPointMappedToPlane()}return this.dualPoint};Te.prototype.isVisibleFromBelow=function(){return this.normal.z<-14259414393190911e-25};Te.prototype.createEdges=function(){this.edges=[],this.edges[0]=new Xn(this.verts[0],this.verts[1],this),this.edges[1]=new Xn(this.verts[1],this.verts[2],this),this.edges[2]=new Xn(this.verts[2],this.verts[0],this),this.edges[0].next=this.edges[1],this.edges[0].prev=this.edges[2],this.edges[1].next=this.edges[2],this.edges[1].prev=this.edges[0],this.edges[2].next=this.edges[0],this.edges[2].prev=this.edges[1]};Te.prototype.orient=function(e){if(!(so(this.normal,e)<so(this.normal,this.verts[0]))){var t=this.verts[1];this.verts[1]=this.verts[2],this.verts[2]=t,this.normal.negate(),this.createEdges()}};Te.prototype.getEdge=function(e,t){for(var n=0;n<3;n++)if(this.edges[n].isEqual(e,t))return this.edges[n];return null};Te.prototype.link=function(e,t,n){if(e instanceof Te){var o=e.getEdge(t,n);if(o===null)throw new mn("when linking, twin is null");var i=this.getEdge(t,n);if(i===null)throw new mn("when linking, twin is null");o.twin=i,i.twin=o}else{var o=e,i=this.getEdge(o.orig,o.dest);o.twin=i,i.twin=o}};Te.prototype.conflict=function(e){return so(this.normal,e)>so(this.normal,this.verts[0])+Zt};Te.prototype.getHorizon=function(){for(var e=0;e<3;e++)if(this.edges[e].twin!==null&&this.edges[e].twin.isHorizon())return this.edges[e];return null};Te.prototype.removeConflict=function(){this.conflicts.removeAll()};function vt(){this.points=[],this.facets=[],this.created=[],this.horizon=[],this.visible=[],this.current=0}vt.prototype.init=function(e,t){this.points=[];for(var n=0;n<t.length;n++)this.points[n]=new ct(t[n].x,t[n].y,t[n].z,null,t[n],!1);this.points=this.points.concat(e)};vt.prototype.permutate=function(){for(var e=this.points.length,t=e-1;t>0;t--){var n=Math.floor(Math.random()*t),o=this.points[n];o.index=t;var i=this.points[t];i.index=n,this.points.splice(n,1,i),this.points.splice(t,1,o)}};vt.prototype.prep=function(){if(this.points.length<=3)throw new mn("Less than 4 points");for(var e=0;e<this.points.length;e++)this.points[e].index=e;var t,n,o,i,a,r,s,l;t=this.points[0],n=this.points[1],o=i=null;for(var e=2;e<this.points.length;e++)if(!(eu(t,this.points[e])&&eu(n,this.points[e]))){o=this.points[e],o.index=2,this.points[2].index=e,this.points.splice(e,1,this.points[2]),this.points.splice(2,1,o);break}if(o===null)throw new mn("Not enough non-planar Points (v2 is null)");l=new Te(t,n,o);for(var e=3;e<this.points.length;e++)if(!sa(so(l.normal,l.verts[0])-so(l.normal,this.points[e]))){i=this.points[e],i.index=3,this.points[3].index=e,this.points.splice(e,1,this.points[3]),this.points.splice(3,1,i);break}if(i===null)throw new mn("Not enough non-planar Points (v3 is null)");l.orient(i),a=new Te(t,o,i,n),r=new Te(t,n,i,o),s=new Te(n,o,i,t),this.addFacet(l),this.addFacet(a),this.addFacet(r),this.addFacet(s),l.link(a,t,o),l.link(r,t,n),l.link(s,n,o),a.link(r,t,i),a.link(s,o,i),r.link(s,i,n),this.current=4;for(var h,e=this.current;e<this.points.length;e++)h=this.points[e],l.conflict(h)&&this.addConflict(l,h),a.conflict(h)&&this.addConflict(a,h),r.conflict(h)&&this.addConflict(r,h),s.conflict(h)&&this.addConflict(s,h)},vt.prototype.addConflicts=function(e,t,n){var o=e.conflicts.getVertices(),i=t.conflicts.getVertices(),a=[],r,s,l,h;for(l=h=0;l<o.length||h<i.length;)l<o.length&&h<i.length?(r=o[l],s=i[h],r.index===s.index?(a.push(r),l++,h++):r.index>s.index?(a.push(r),l++):(a.push(s),h++)):l<o.length?a.push(o[l++]):a.push(i[h++]);for(var l=a.length-1;l>=0;l--)r=a[l],n.conflict(r)&&this.addConflict(n,r)};vt.prototype.addConflict=function(e,t){var n=new _1(e,t);e.conflicts.add(n),t.conflicts.add(n)};vt.prototype.removeConflict=function(e){e.removeConflict();var t=e.index;if(e.index=-1,t===this.facets.length-1){this.facets.splice(this.facets.length-1,1);return}if(!(t>=this.facets.length||t<0)){var n=this.facets.splice(this.facets.length-1,1);n[0].index=t,this.facets.splice(t,1,n[0])}};vt.prototype.addFacet=function(e){e.index=this.facets.length,this.facets.push(e)};vt.prototype.compute=function(){for(this.prep();this.current<this.points.length;){var e=this.points[this.current];if(e.conflicts.isEmpty()){this.current++;continue}this.created=[],this.horizon=[],this.visible=[],e.conflicts.fill(this.visible);for(var t,n=0;n<this.visible.length;n++)if(t=this.visible[n].getHorizon(),t!==null){t.findHorizon(this.horizon);break}for(var o=null,i=null,a=0;a<this.horizon.length;a++){var r=this.horizon[a],s=new Te(e,r.orig,r.dest,r.twin.next.dest);s.conflicts=new on(!0),this.addFacet(s),this.created.push(s),this.addConflicts(r.iFace,r.twin.iFace,s),s.link(r),o!==null&&s.link(o,e,r.orig),o=s,i===null&&(i=s)}if(i!==null&&o!==null&&o.link(i,e,this.horizon[0].orig),this.created.length!=0){for(var l=0;l<this.visible.length;l++)this.removeConflict(this.visible[l]);this.current++,this.created=[]}}return this.facets};vt.prototype.clear=function(){this.points=[],this.facets=[],this.created=[],this.horizon=[],this.visible=[],this.current=0};function I1(e,t){for(var n,o=nu(t),i=-1,a=e.length-nu(e),r,s,l=e[a-1],h,c,d,u;++i<a;){for(n=t.slice(),t.length=0,h=e[i],c=n[(s=n.length-o)-1],r=-1;++r<s;)d=n[r],Qr(d,l,h)?(Qr(c,l,h)||(u=tu(c,d,l,h),isFinite(u[0])&&t.push(u)),t.push(d)):Qr(c,l,h)&&(u=tu(c,d,l,h),isFinite(u[0])&&t.push(u)),c=d;o&&t.push(t[0]),l=h}return t}function Qr(e,t,n){return(n[0]-t[0])*(e[1]-t[1])<(n[1]-t[1])*(e[0]-t[0])}function tu(e,t,n,o){var i=e[0],a=n[0],r=t[0]-i,s=o[0]-a,l=e[1],h=n[1],c=t[1]-l,d=o[1]-h,u=(s*(l-h)-d*(i-a))/(d*r-s*c);return[i+u*r,l+u*c]}function nu(e){var t=e[0],n=e[e.length-1];return!(t[0]-n[0]||t[1]-n[1])}function L1(e){var t=[],n=e,o=e.dest,i=o.originalObject,a=[];do{n=n.twin.prev;var r=n.orig.originalObject;r.isDummy||a.push(r);var s=n.iFace;s.isVisibleFromBelow()&&t.push(s)}while(n!==e);return i.neighbours=a,t}function T1(e,t,n){var o=new vt;o.clear(),o.init(t,e);for(var i=o.compute(e),a=[],r=[],s=i.length,l=0;l<s;l++){var h=i[l];if(h.isVisibleFromBelow())for(var c=0;c<3;c++){var d=h.edges[c],u=d.dest,p=u.originalObject;if(!r[u.index]){if(r[u.index]=!0,p.isDummy)continue;for(var b=L1(d),g=[],w=null,m=null,f=1,y=1,v=0;v<b.length;v++){var P=b[v].getDualPoint(),C=P.x,k=P.y;w!==null&&(f=w-C,y=m-k,f<0&&(f=-f),y<0&&(y=-y)),(f>Zt||y>Zt)&&(g.push([C,k]),w=C,m=k)}if(p.nonClippedPolygon=g.reverse(),!p.isDummy&&x1(p.nonClippedPolygon)>0){var I=I1(n,p.nonClippedPolygon);p.polygon=I,I.site=p,I.length>0&&a.push(I)}}}}return a}function M1(){var e=function(l){return l.x},t=function(l){return l.y},n=function(l){return l.weight},o=[[0,0],[0,1],[1,1],[1,0]],i=[[0,0],[1,1]],a=[1,1];function r(l){var h;return h=l.map(function(c){return new ct(e(c),t(c),null,n(c),c,!1)}),T1(h,s(),o)}r.x=function(l){return arguments.length?(e=l,r):e},r.y=function(l){return arguments.length?(t=l,r):t},r.weight=function(l){return arguments.length?(n=l,r):n},r.clip=function(l){var h,c,d;return arguments.length?(c=Zc(l.map(function(u){return u[0]})),d=Zc(l.map(function(u){return u[1]})),h=k1(l),h===void 0?o=P1(l):h===1?o=l.reverse():o=l,i=[[c[0],d[0]],[c[1],d[1]]],a=[c[1]-c[0],d[1]-d[0]],r):o},r.extent=function(l){return arguments.length?(o=[l[0],[l[0][0],l[1][1]],l[1],[l[1][0],l[0][1]]],i=l,a=[l[1][0]-l[0][0],l[1][1]-l[0][1]],r):i},r.size=function(l){return arguments.length?(o=[[0,0],[0,l[1]],[l[0],l[1]],[l[0],0]],i=[[0,0],l],a=l,r):a};function s(){var l,h,c,d,u,p,b,g,w,m,f=[],y=[];l=i[0][0],h=i[1][0],c=i[0][1],d=i[1][1],u=h-l,p=d-c,b=l-u,g=h+u,w=c-p,m=d+p,f[0]=[b,w],f[1]=[b,m],f[2]=[g,m],f[3]=[g,w];for(var v=0;v<4;v++)y.push(new ct(f[v][0],f[v][1],null,Zt,new ct(f[v][0],f[v][1],null,Zt,null,!0),!0));return y}return r}function _n(){this.growthChangesLength=cp,this.totalAvailableArea=NaN,this.lastAreaError=NaN,this.lastGrowth=NaN,this.growthChanges=[],this.growthChangeWeights=mh(this.growthChangesLength),this.growthChangeWeightsSum=yh(this.growthChangeWeights)}var cp=10;function H1(e,t){return e>=t?1:-1}function mh(e){for(var t=3,n=1,o=1,i=t,a=[],r=0;r<e;r++)a.push(i),i-=n,i<o&&(i=o);return a}function yh(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return t}_n.prototype.reset=function(){return this.lastAreaError=NaN,this.lastGrowth=NaN,this.growthChanges=[],this.growthChangesLength=cp,this.growthChangeWeights=mh(this.growthChangesLength),this.growthChangeWeightsSum=yh(this.growthChangeWeights),this.totalAvailableArea=NaN,this};_n.prototype.clear=function(){return this.lastAreaError=NaN,this.lastGrowth=NaN,this.growthChanges=[],this};_n.prototype.length=function(e){return arguments.length?(parseInt(e)>0?(this.growthChangesLength=Math.floor(parseInt(e)),this.growthChangeWeights=mh(this.growthChangesLength),this.growthChangeWeightsSum=yh(this.growthChangeWeights)):console.warn("FlickeringMitigation.length() accepts only positive integers; unable to handle "+e),this):this.growthChangesLength};_n.prototype.totalArea=function(e){return arguments.length?(parseFloat(e)>0?this.totalAvailableArea=parseFloat(e):console.warn("FlickeringMitigation.totalArea() accepts only positive numbers; unable to handle "+e),this):this.totalAvailableArea};_n.prototype.add=function(e){var t,n;return t=this.lastAreaError,this.lastAreaError=e,isNaN(t)||(n=this.lastGrowth,this.lastGrowth=H1(this.lastAreaError,t)),isNaN(n)||this.growthChanges.unshift(this.lastGrowth!=n),this.growthChanges.length>this.growthChangesLength&&this.growthChanges.pop(),this};_n.prototype.ratio=function(){var e=0,t;if(this.growthChanges.length<this.growthChangesLength||this.lastAreaError>this.totalAvailableArea/10)return 0;for(var n=0;n<this.growthChangesLength;n++)this.growthChanges[n]&&(e+=this.growthChangeWeights[n]);return t=e/this.growthChangeWeightsSum,t};function N1(){var e,t,n,o,i,a,r,s;function l(c,d,u,p){var b=!1,g,w;for(e!==p.clip()&&(e=p.clip(),t=p.extent(),b=!0),b&&h(),g=n+r*p.prng()(),w=i+s*p.prng()();!ip(e,[g,w]);)g=n+r*p.prng()(),w=i+s*p.prng()();return[g,w]}function h(){n=t[0][0],o=t[1][0],i=t[0][1],a=t[1][1],r=o-n,s=a-i}return l}function E1(){var e,t,n,o,i;function a(s,l,h,c){var d=!1;return e!==c.clip()&&(e=c.clip(),d|=!0),t!==h&&(t=h,d|=!0),d&&r(),i}function r(){n=t.length,o=aa(e),i=o/n/2}return a}function qn(e){this.message=e,this.stack=new Error().stack}qn.prototype.name="d3VoronoiMapError";qn.prototype=new Error;function ou(e){var t=.01,n=50,o=.01,i=Math.random,a=N1(),r=E1(),s=1e-10,l=function(M){return M.weight},h=t,c=n,d=o,u=i,p=a,b=r,g=M1(),w=new _n,m=!0,f,y,v,P,C,k,I,U,L,B=lp(A),N=hp("tick","end");const $=1,F=1e3;var V;function de(M){return Math.pow(M,2)}function se(M,Z){return de(Z.x-M.x)+de(Z.y-M.y)}L={tick:H,restart:function(){return B.restart(A),L},stop:function(){return B.stop(),L},weight:function(M){return arguments.length?(l=M,m=!0,L):l},convergenceRatio:function(M){return arguments.length?(h=M,m=!0,L):h},maxIterationCount:function(M){return arguments.length?(c=M,L):c},minWeightRatio:function(M){return arguments.length?(d=M,m=!0,L):d},clip:function(M){return arguments.length?(g.clip(M),m=!0,L):g.clip()},extent:function(M){return arguments.length?(g.extent(M),m=!0,L):g.extent()},size:function(M){return arguments.length?(g.size(M),m=!0,L):g.size()},prng:function(M){return arguments.length?(u=M,m=!0,L):u},initialPosition:function(M){return arguments.length?(p=M,m=!0,L):p},initialWeight:function(M){return arguments.length?(b=M,m=!0,L):b},state:function(){return m&&S(),{ended:U,iterationCount:P,convergenceRatio:k/y,polygons:C}},on:function(M,Z){return arguments.length===1?N.on(M):(N.on(M,Z),L)}};function A(){H(),N.call("tick",L),U&&(B.stop(),N.call("end",L))}function H(){U||(m&&S(),C=D(C,w.ratio()),P++,k=gi(C),w.add(k),I=k<v,U=I||P>=c)}function S(){gp(),f=e.length,y=Math.abs(aa(g.clip())),v=h*y,w.clear().totalArea(y),P=0,I=!1,C=_(e,L),U=!1,m=!1}function _(M,Z){var Q=M.reduce(function(J,oe){return Math.max(J,l(oe))},-1/0),O=Q*d,q,W;return q=M.map(function(J,oe,he){return{index:oe,weight:Math.max(l(J),O),initialPosition:p(J,oe,he,Z),initialWeight:b(J,oe,he,Z),originalData:J}}),W=G(q,Z),V(W),g(W)}function G(M,Z){var Q=M.reduce(function(q,W){return q+=W.weight},0),O;return M.map(function(q,W,J){return O=q.initialPosition,ip(g.clip(),O)||(O=a(q,W,J,Z)),{index:q.index,targetedArea:y*q.weight/Q,data:q,x:O[0],y:O[1],weight:q.initialWeight}})}function D(M,Z){var Q;if(K(M,Z),Q=M.map(function(O){return O.site.originalObject}),M=g(Q),M.length<f)throw new qn("at least 1 site has no area, which is not supposed to arise");if(_e(M,Z),Q=M.map(function(O){return O.site.originalObject}),M=g(Q),M.length<f)throw new qn("at least 1 site has no area, which is not supposed to arise");return M}function K(M,Z){var Q=[],O=.5,q,W,J,oe,he,ye,Ae;q=O*Z,W=1-q;for(var vr=0;vr<f;vr++)J=M[vr],oe=J.site.originalObject,he=f1(J),ye=he[0]-oe.x,Ae=he[1]-oe.y,ye*=W,Ae*=W,oe.x+=ye,oe.y+=Ae,Q.push(oe);V(Q)}function _e(M,Z){var Q=[],O=.1,q,W,J,oe,he,ye;q=O*Z;for(var Ae=0;Ae<f;Ae++)W=M[Ae],J=W.site.originalObject,oe=aa(W),he=J.targetedArea/oe,he=Math.max(he,1-O+q),he=Math.min(he,1+O-q),ye=J.weight*he,ye=Math.max(ye,s),J.weight=ye,Q.push(J);V(Q)}function fe(M){var Z=0,Q,O,q,W,J,oe,he;do{if(Z>F)throw new qn("handleOverweighted0 is looping too much");Q=!1;for(var ye=0;ye<f;ye++){O=M[ye];for(var Ae=ye+1;Ae<f;Ae++)if(q=M[Ae],O.weight>q.weight?(W=O,J=q):(W=q,J=O),oe=se(O,q),oe<W.weight-J.weight){he=oe+J.weight/2,he=Math.max(he,s),W.weight=he,Q=!0,Z++;break}if(Q)break}}while(Q)}function Ee(M){var Z=0,Q,O,q,W,J,oe,he;do{if(Z>F)throw new qn("handleOverweighted1 is looping too much");Q=!1;for(var ye=0;ye<f;ye++){O=M[ye];for(var Ae=ye+1;Ae<f;Ae++)if(q=M[Ae],O.weight>q.weight?(W=O,J=q):(W=q,J=O),oe=se(O,q),oe<W.weight-J.weight){he=W.weight-J.weight-oe,J.weight+=he+s,Q=!0,Z++;break}if(Q)break}}while(Q)}function gi(M){for(var Z=0,Q,O,q,W=0;W<f;W++)Q=M[W],O=Q.site.originalObject,q=aa(Q),Z+=Math.abs(O.targetedArea-q);return Z}function gp(){switch($){case 0:V=fe;break;case 1:V=Ee;break;default:console.error("unknown 'handleOverweighted' variant; using variant #1"),V=fe}}return L}function j1(){var e=.01,t=50,n=.01,o=Math.random,i=[[0,0],[0,1],[1,1],[1,0]],a=[[0,0],[1,1]],r=[1,1],s=e,l=t,h=n,c=o,d=[{weight:1},{weight:1}],u=ou(d).stop();function p(g){b(i,g)}p.convergenceRatio=function(g){return arguments.length?(s=g,p):s},p.maxIterationCount=function(g){return arguments.length?(l=g,p):l},p.minWeightRatio=function(g){return arguments.length?(h=g,p):h},p.clip=function(g){return arguments.length?(u.clip(g),i=u.clip(),a=u.extent(),r=u.size(),p):i},p.extent=function(g){return arguments.length?(u.extent(g),i=u.clip(),a=u.extent(),r=u.size(),p):a},p.size=function(g){return arguments.length?(u.size(g),i=u.clip(),a=u.extent(),r=u.size(),p):r},p.prng=function(g){return arguments.length?(c=g,p):c};function b(g,w){var m;if(w.polygon=g,w.height!=0){m=ou(w.children).clip(g).weight(function(y){return y.value}).convergenceRatio(s).maxIterationCount(l).minWeightRatio(h).prng(c).stop();for(var f=m.state();!f.ended;)m.tick(),f=m.state();f.polygons.forEach(function(y){b(y,y.site.originalObject.data.originalData)})}}return p}function Kr(e,t,n){if(e&&e.length){const[o,i]=t,a=Math.PI/180*n,r=Math.cos(a),s=Math.sin(a);for(const l of e){const[h,c]=l;l[0]=(h-o)*r-(c-i)*s+o,l[1]=(h-o)*s+(c-i)*r+i}}}function G1(e,t){return e[0]===t[0]&&e[1]===t[1]}function F1(e,t,n,o=1){const i=n,a=Math.max(t,.1),r=e[0]&&e[0][0]&&typeof e[0][0]=="number"?[e]:e,s=[0,0];if(i)for(const h of r)Kr(h,s,i);const l=function(h,c,d){const u=[];for(const f of h){const y=[...f];G1(y[0],y[y.length-1])||y.push([y[0][0],y[0][1]]),y.length>2&&u.push(y)}const p=[];c=Math.max(c,.1);const b=[];for(const f of u)for(let y=0;y<f.length-1;y++){const v=f[y],P=f[y+1];if(v[1]!==P[1]){const C=Math.min(v[1],P[1]);b.push({ymin:C,ymax:Math.max(v[1],P[1]),x:C===v[1]?v[0]:P[0],islope:(P[0]-v[0])/(P[1]-v[1])})}}if(b.sort((f,y)=>f.ymin<y.ymin?-1:f.ymin>y.ymin?1:f.x<y.x?-1:f.x>y.x?1:f.ymax===y.ymax?0:(f.ymax-y.ymax)/Math.abs(f.ymax-y.ymax)),!b.length)return p;let g=[],w=b[0].ymin,m=0;for(;g.length||b.length;){if(b.length){let f=-1;for(let y=0;y<b.length&&!(b[y].ymin>w);y++)f=y;b.splice(0,f+1).forEach(y=>{g.push({s:w,edge:y})})}if(g=g.filter(f=>!(f.edge.ymax<=w)),g.sort((f,y)=>f.edge.x===y.edge.x?0:(f.edge.x-y.edge.x)/Math.abs(f.edge.x-y.edge.x)),(d!==1||m%c==0)&&g.length>1)for(let f=0;f<g.length;f+=2){const y=f+1;if(y>=g.length)break;const v=g[f].edge,P=g[y].edge;p.push([[Math.round(v.x),w],[Math.round(P.x),w]])}w+=d,g.forEach(f=>{f.edge.x=f.edge.x+d*f.edge.islope}),m++}return p}(r,a,o);if(i){for(const h of r)Kr(h,s,-i);(function(h,c,d){const u=[];h.forEach(p=>u.push(...p)),Kr(u,c,d)})(l,s,-i)}return l}function yi(e,t){var n;const o=t.hachureAngle+90;let i=t.hachureGap;i<0&&(i=4*t.strokeWidth),i=Math.round(Math.max(i,.1));let a=1;return t.roughness>=1&&(((n=t.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(a=i),F1(e,i,o,a||1)}class gh{constructor(t){this.helper=t}fillPolygons(t,n){return this._fillPolygons(t,n)}_fillPolygons(t,n){const o=yi(t,n);return{type:"fillSketch",ops:this.renderLines(o,n)}}renderLines(t,n){const o=[];for(const i of t)o.push(...this.helper.doubleLineOps(i[0][0],i[0][1],i[1][0],i[1][1],n));return o}}function br(e){const t=e[0],n=e[1];return Math.sqrt(Math.pow(t[0]-n[0],2)+Math.pow(t[1]-n[1],2))}class U1 extends gh{fillPolygons(t,n){let o=n.hachureGap;o<0&&(o=4*n.strokeWidth),o=Math.max(o,.1);const i=yi(t,Object.assign({},n,{hachureGap:o})),a=Math.PI/180*n.hachureAngle,r=[],s=.5*o*Math.cos(a),l=.5*o*Math.sin(a);for(const[h,c]of i)br([h,c])&&r.push([[h[0]-s,h[1]+l],[...c]],[[h[0]+s,h[1]-l],[...c]]);return{type:"fillSketch",ops:this.renderLines(r,n)}}}class D1 extends gh{fillPolygons(t,n){const o=this._fillPolygons(t,n),i=Object.assign({},n,{hachureAngle:n.hachureAngle+90}),a=this._fillPolygons(t,i);return o.ops=o.ops.concat(a.ops),o}}class z1{constructor(t){this.helper=t}fillPolygons(t,n){const o=yi(t,n=Object.assign({},n,{hachureAngle:0}));return this.dotsOnLines(o,n)}dotsOnLines(t,n){const o=[];let i=n.hachureGap;i<0&&(i=4*n.strokeWidth),i=Math.max(i,.1);let a=n.fillWeight;a<0&&(a=n.strokeWidth/2);const r=i/4;for(const s of t){const l=br(s),h=l/i,c=Math.ceil(h)-1,d=l-c*i,u=(s[0][0]+s[1][0])/2-i/4,p=Math.min(s[0][1],s[1][1]);for(let b=0;b<c;b++){const g=p+d+b*i,w=u-r+2*Math.random()*r,m=g-r+2*Math.random()*r,f=this.helper.ellipse(w,m,a,a,n);o.push(...f.ops)}}return{type:"fillSketch",ops:o}}}class q1{constructor(t){this.helper=t}fillPolygons(t,n){const o=yi(t,n);return{type:"fillSketch",ops:this.dashedLine(o,n)}}dashedLine(t,n){const o=n.dashOffset<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashOffset,i=n.dashGap<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashGap,a=[];return t.forEach(r=>{const s=br(r),l=Math.floor(s/(o+i)),h=(s+i-l*(o+i))/2;let c=r[0],d=r[1];c[0]>d[0]&&(c=r[1],d=r[0]);const u=Math.atan((d[1]-c[1])/(d[0]-c[0]));for(let p=0;p<l;p++){const b=p*(o+i),g=b+o,w=[c[0]+b*Math.cos(u)+h*Math.cos(u),c[1]+b*Math.sin(u)+h*Math.sin(u)],m=[c[0]+g*Math.cos(u)+h*Math.cos(u),c[1]+g*Math.sin(u)+h*Math.sin(u)];a.push(...this.helper.doubleLineOps(w[0],w[1],m[0],m[1],n))}}),a}}class R1{constructor(t){this.helper=t}fillPolygons(t,n){const o=n.hachureGap<0?4*n.strokeWidth:n.hachureGap,i=n.zigzagOffset<0?o:n.zigzagOffset,a=yi(t,n=Object.assign({},n,{hachureGap:o+i}));return{type:"fillSketch",ops:this.zigzagLines(a,i,n)}}zigzagLines(t,n,o){const i=[];return t.forEach(a=>{const r=br(a),s=Math.round(r/(2*n));let l=a[0],h=a[1];l[0]>h[0]&&(l=a[1],h=a[0]);const c=Math.atan((h[1]-l[1])/(h[0]-l[0]));for(let d=0;d<s;d++){const u=2*d*n,p=2*(d+1)*n,b=Math.sqrt(2*Math.pow(n,2)),g=[l[0]+u*Math.cos(c),l[1]+u*Math.sin(c)],w=[l[0]+p*Math.cos(c),l[1]+p*Math.sin(c)],m=[g[0]+b*Math.cos(c+Math.PI/4),g[1]+b*Math.sin(c+Math.PI/4)];i.push(...this.helper.doubleLineOps(g[0],g[1],m[0],m[1],o),...this.helper.doubleLineOps(m[0],m[1],w[0],w[1],o))}}),i}}const je={};class O1{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const B1=0,Zr=1,iu=2,zi={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Yr(e,t){return e.type===t}function bh(e){const t=[],n=function(r){const s=new Array;for(;r!=="";)if(r.match(/^([ \t\r\n,]+)/))r=r.substr(RegExp.$1.length);else if(r.match(/^([aAcChHlLmMqQsStTvVzZ])/))s[s.length]={type:B1,text:RegExp.$1},r=r.substr(RegExp.$1.length);else{if(!r.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];s[s.length]={type:Zr,text:`${parseFloat(RegExp.$1)}`},r=r.substr(RegExp.$1.length)}return s[s.length]={type:iu,text:""},s}(e);let o="BOD",i=0,a=n[i];for(;!Yr(a,iu);){let r=0;const s=[];if(o==="BOD"){if(a.text!=="M"&&a.text!=="m")return bh("M0,0"+e);i++,r=zi[a.text],o=a.text}else Yr(a,Zr)?r=zi[o]:(i++,r=zi[a.text],o=a.text);if(!(i+r<n.length))throw new Error("Path data ended short");for(let l=i;l<i+r;l++){const h=n[l];if(!Yr(h,Zr))throw new Error("Param not a number: "+o+","+h.text);s[s.length]=+h.text}if(typeof zi[o]!="number")throw new Error("Bad segment: "+o);{const l={key:o,data:s};t.push(l),i+=r,a=n[i],o==="M"&&(o="L"),o==="m"&&(o="l")}}return t}function up(e){let t=0,n=0,o=0,i=0;const a=[];for(const{key:r,data:s}of e)switch(r){case"M":a.push({key:"M",data:[...s]}),[t,n]=s,[o,i]=s;break;case"m":t+=s[0],n+=s[1],a.push({key:"M",data:[t,n]}),o=t,i=n;break;case"L":a.push({key:"L",data:[...s]}),[t,n]=s;break;case"l":t+=s[0],n+=s[1],a.push({key:"L",data:[t,n]});break;case"C":a.push({key:"C",data:[...s]}),t=s[4],n=s[5];break;case"c":{const l=s.map((h,c)=>c%2?h+n:h+t);a.push({key:"C",data:l}),t=l[4],n=l[5];break}case"Q":a.push({key:"Q",data:[...s]}),t=s[2],n=s[3];break;case"q":{const l=s.map((h,c)=>c%2?h+n:h+t);a.push({key:"Q",data:l}),t=l[2],n=l[3];break}case"A":a.push({key:"A",data:[...s]}),t=s[5],n=s[6];break;case"a":t+=s[5],n+=s[6],a.push({key:"A",data:[s[0],s[1],s[2],s[3],s[4],t,n]});break;case"H":a.push({key:"H",data:[...s]}),t=s[0];break;case"h":t+=s[0],a.push({key:"H",data:[t]});break;case"V":a.push({key:"V",data:[...s]}),n=s[0];break;case"v":n+=s[0],a.push({key:"V",data:[n]});break;case"S":a.push({key:"S",data:[...s]}),t=s[2],n=s[3];break;case"s":{const l=s.map((h,c)=>c%2?h+n:h+t);a.push({key:"S",data:l}),t=l[2],n=l[3];break}case"T":a.push({key:"T",data:[...s]}),t=s[0],n=s[1];break;case"t":t+=s[0],n+=s[1],a.push({key:"T",data:[t,n]});break;case"Z":case"z":a.push({key:"Z",data:[]}),t=o,n=i}return a}function dp(e){const t=[];let n="",o=0,i=0,a=0,r=0,s=0,l=0;for(const{key:h,data:c}of e){switch(h){case"M":t.push({key:"M",data:[...c]}),[o,i]=c,[a,r]=c;break;case"C":t.push({key:"C",data:[...c]}),o=c[4],i=c[5],s=c[2],l=c[3];break;case"L":t.push({key:"L",data:[...c]}),[o,i]=c;break;case"H":o=c[0],t.push({key:"L",data:[o,i]});break;case"V":i=c[0],t.push({key:"L",data:[o,i]});break;case"S":{let d=0,u=0;n==="C"||n==="S"?(d=o+(o-s),u=i+(i-l)):(d=o,u=i),t.push({key:"C",data:[d,u,...c]}),s=c[0],l=c[1],o=c[2],i=c[3];break}case"T":{const[d,u]=c;let p=0,b=0;n==="Q"||n==="T"?(p=o+(o-s),b=i+(i-l)):(p=o,b=i);const g=o+2*(p-o)/3,w=i+2*(b-i)/3,m=d+2*(p-d)/3,f=u+2*(b-u)/3;t.push({key:"C",data:[g,w,m,f,d,u]}),s=p,l=b,o=d,i=u;break}case"Q":{const[d,u,p,b]=c,g=o+2*(d-o)/3,w=i+2*(u-i)/3,m=p+2*(d-p)/3,f=b+2*(u-b)/3;t.push({key:"C",data:[g,w,m,f,p,b]}),s=d,l=u,o=p,i=b;break}case"A":{const d=Math.abs(c[0]),u=Math.abs(c[1]),p=c[2],b=c[3],g=c[4],w=c[5],m=c[6];d===0||u===0?(t.push({key:"C",data:[o,i,w,m,w,m]}),o=w,i=m):(o!==w||i!==m)&&(fp(o,i,w,m,d,u,p,b,g).forEach(function(f){t.push({key:"C",data:f})}),o=w,i=m);break}case"Z":t.push({key:"Z",data:[]}),o=a,i=r}n=h}return t}function Co(e,t,n){return[e*Math.cos(n)-t*Math.sin(n),e*Math.sin(n)+t*Math.cos(n)]}function fp(e,t,n,o,i,a,r,s,l,h){const c=(d=r,Math.PI*d/180);var d;let u=[],p=0,b=0,g=0,w=0;if(h)[p,b,g,w]=h;else{[e,t]=Co(e,t,-c),[n,o]=Co(n,o,-c);const $=(e-n)/2,F=(t-o)/2;let V=$*$/(i*i)+F*F/(a*a);V>1&&(V=Math.sqrt(V),i*=V,a*=V);const de=i*i,se=a*a,A=de*se-de*F*F-se*$*$,H=de*F*F+se*$*$,S=(s===l?-1:1)*Math.sqrt(Math.abs(A/H));g=S*i*F/a+(e+n)/2,w=S*-a*$/i+(t+o)/2,p=Math.asin(parseFloat(((t-w)/a).toFixed(9))),b=Math.asin(parseFloat(((o-w)/a).toFixed(9))),e<g&&(p=Math.PI-p),n<g&&(b=Math.PI-b),p<0&&(p=2*Math.PI+p),b<0&&(b=2*Math.PI+b),l&&p>b&&(p-=2*Math.PI),!l&&b>p&&(b-=2*Math.PI)}let m=b-p;if(Math.abs(m)>120*Math.PI/180){const $=b,F=n,V=o;b=l&&b>p?p+120*Math.PI/180*1:p+120*Math.PI/180*-1,u=fp(n=g+i*Math.cos(b),o=w+a*Math.sin(b),F,V,i,a,r,0,l,[b,$,g,w])}m=b-p;const f=Math.cos(p),y=Math.sin(p),v=Math.cos(b),P=Math.sin(b),C=Math.tan(m/4),k=4/3*i*C,I=4/3*a*C,U=[e,t],L=[e+k*y,t-I*f],B=[n+k*P,o-I*v],N=[n,o];if(L[0]=2*U[0]-L[0],L[1]=2*U[1]-L[1],h)return[L,B,N].concat(u);{u=[L,B,N].concat(u);const $=[];for(let F=0;F<u.length;F+=3){const V=Co(u[F][0],u[F][1],c),de=Co(u[F+1][0],u[F+1][1],c),se=Co(u[F+2][0],u[F+2][1],c);$.push([V[0],V[1],de[0],de[1],se[0],se[1]])}return $}}const $1={randOffset:function(e,t){return j(e,t)},randOffsetWithRange:function(e,t,n){return Ja(e,t,n)},ellipse:function(e,t,n,o,i){const a=mp(n,o,i);return rl(e,t,i,a).opset},doubleLineOps:function(e,t,n,o,i){return Yt(e,t,n,o,i,!0)}};function pp(e,t,n,o,i){return{type:"path",ops:Yt(e,t,n,o,i)}}function la(e,t,n){const o=(e||[]).length;if(o>2){const i=[];for(let a=0;a<o-1;a++)i.push(...Yt(e[a][0],e[a][1],e[a+1][0],e[a+1][1],n));return t&&i.push(...Yt(e[o-1][0],e[o-1][1],e[0][0],e[0][1],n)),{type:"path",ops:i}}return o===2?pp(e[0][0],e[0][1],e[1][0],e[1][1],n):{type:"path",ops:[]}}function V1(e,t,n,o,i){return function(a,r){return la(a,!0,r)}([[e,t],[e+n,t],[e+n,t+o],[e,t+o]],i)}function au(e,t){if(e.length){const n=typeof e[0][0]=="number"?[e]:e,o=qi(n[0],1*(1+.2*t.roughness),t),i=t.disableMultiStroke?[]:qi(n[0],1.5*(1+.22*t.roughness),lu(t));for(let a=1;a<n.length;a++){const r=n[a];if(r.length){const s=qi(r,1*(1+.2*t.roughness),t),l=t.disableMultiStroke?[]:qi(r,1.5*(1+.22*t.roughness),lu(t));for(const h of s)h.op!=="move"&&o.push(h);for(const h of l)h.op!=="move"&&i.push(h)}}return{type:"path",ops:o.concat(i)}}return{type:"path",ops:[]}}function mp(e,t,n){const o=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),i=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*o)),a=2*Math.PI/i;let r=Math.abs(e/2),s=Math.abs(t/2);const l=1-n.curveFitting;return r+=j(r*l,n),s+=j(s*l,n),{increment:a,rx:r,ry:s}}function rl(e,t,n,o){const[i,a]=hu(o.increment,e,t,o.rx,o.ry,1,o.increment*Ja(.1,Ja(.4,1,n),n),n);let r=Xa(i,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[s]=hu(o.increment,e,t,o.rx,o.ry,1.5,0,n),l=Xa(s,null,n);r=r.concat(l)}return{estimatedPoints:a,opset:{type:"path",ops:r}}}function ru(e,t,n,o,i,a,r,s,l){const h=e,c=t;let d=Math.abs(n/2),u=Math.abs(o/2);d+=j(.01*d,l),u+=j(.01*u,l);let p=i,b=a;for(;p<0;)p+=2*Math.PI,b+=2*Math.PI;b-p>2*Math.PI&&(p=0,b=2*Math.PI);const g=2*Math.PI/l.curveStepCount,w=Math.min(g/2,(b-p)/2),m=cu(w,h,c,d,u,p,b,1,l);if(!l.disableMultiStroke){const f=cu(w,h,c,d,u,p,b,1.5,l);m.push(...f)}return r&&(s?m.push(...Yt(h,c,h+d*Math.cos(p),c+u*Math.sin(p),l),...Yt(h,c,h+d*Math.cos(b),c+u*Math.sin(b),l)):m.push({op:"lineTo",data:[h,c]},{op:"lineTo",data:[h+d*Math.cos(p),c+u*Math.sin(p)]})),{type:"path",ops:m}}function su(e,t){const n=dp(up(bh(e))),o=[];let i=[0,0],a=[0,0];for(const{key:r,data:s}of n)switch(r){case"M":a=[s[0],s[1]],i=[s[0],s[1]];break;case"L":o.push(...Yt(a[0],a[1],s[0],s[1],t)),a=[s[0],s[1]];break;case"C":{const[l,h,c,d,u,p]=s;o.push(...W1(l,h,c,d,u,p,a,t)),a=[u,p];break}case"Z":o.push(...Yt(a[0],a[1],i[0],i[1],t)),a=[i[0],i[1]]}return{type:"path",ops:o}}function es(e,t){const n=[];for(const o of e)if(o.length){const i=t.maxRandomnessOffset||0,a=o.length;if(a>2){n.push({op:"move",data:[o[0][0]+j(i,t),o[0][1]+j(i,t)]});for(let r=1;r<a;r++)n.push({op:"lineTo",data:[o[r][0]+j(i,t),o[r][1]+j(i,t)]})}}return{type:"fillPath",ops:n}}function In(e,t){return function(n,o){let i=n.fillStyle||"hachure";if(!je[i])switch(i){case"zigzag":je[i]||(je[i]=new U1(o));break;case"cross-hatch":je[i]||(je[i]=new D1(o));break;case"dots":je[i]||(je[i]=new z1(o));break;case"dashed":je[i]||(je[i]=new q1(o));break;case"zigzag-line":je[i]||(je[i]=new R1(o));break;default:i="hachure",je[i]||(je[i]=new gh(o))}return je[i]}(t,$1).fillPolygons(e,t)}function lu(e){const t=Object.assign({},e);return t.randomizer=void 0,e.seed&&(t.seed=e.seed+1),t}function yp(e){return e.randomizer||(e.randomizer=new O1(e.seed||0)),e.randomizer.next()}function Ja(e,t,n,o=1){return n.roughness*o*(yp(n)*(t-e)+e)}function j(e,t,n=1){return Ja(-e,e,t,n)}function Yt(e,t,n,o,i,a=!1){const r=a?i.disableMultiStrokeFill:i.disableMultiStroke,s=sl(e,t,n,o,i,!0,!1);if(r)return s;const l=sl(e,t,n,o,i,!0,!0);return s.concat(l)}function sl(e,t,n,o,i,a,r){const s=Math.pow(e-n,2)+Math.pow(t-o,2),l=Math.sqrt(s);let h=1;h=l<200?1:l>500?.4:-.0016668*l+1.233334;let c=i.maxRandomnessOffset||0;c*c*100>s&&(c=l/10);const d=c/2,u=.2+.2*yp(i);let p=i.bowing*i.maxRandomnessOffset*(o-t)/200,b=i.bowing*i.maxRandomnessOffset*(e-n)/200;p=j(p,i,h),b=j(b,i,h);const g=[],w=()=>j(d,i,h),m=()=>j(c,i,h),f=i.preserveVertices;return r?g.push({op:"move",data:[e+(f?0:w()),t+(f?0:w())]}):g.push({op:"move",data:[e+(f?0:j(c,i,h)),t+(f?0:j(c,i,h))]}),r?g.push({op:"bcurveTo",data:[p+e+(n-e)*u+w(),b+t+(o-t)*u+w(),p+e+2*(n-e)*u+w(),b+t+2*(o-t)*u+w(),n+(f?0:w()),o+(f?0:w())]}):g.push({op:"bcurveTo",data:[p+e+(n-e)*u+m(),b+t+(o-t)*u+m(),p+e+2*(n-e)*u+m(),b+t+2*(o-t)*u+m(),n+(f?0:m()),o+(f?0:m())]}),g}function qi(e,t,n){if(!e.length)return[];const o=[];o.push([e[0][0]+j(t,n),e[0][1]+j(t,n)]),o.push([e[0][0]+j(t,n),e[0][1]+j(t,n)]);for(let i=1;i<e.length;i++)o.push([e[i][0]+j(t,n),e[i][1]+j(t,n)]),i===e.length-1&&o.push([e[i][0]+j(t,n),e[i][1]+j(t,n)]);return Xa(o,null,n)}function Xa(e,t,n){const o=e.length,i=[];if(o>3){const a=[],r=1-n.curveTightness;i.push({op:"move",data:[e[1][0],e[1][1]]});for(let s=1;s+2<o;s++){const l=e[s];a[0]=[l[0],l[1]],a[1]=[l[0]+(r*e[s+1][0]-r*e[s-1][0])/6,l[1]+(r*e[s+1][1]-r*e[s-1][1])/6],a[2]=[e[s+1][0]+(r*e[s][0]-r*e[s+2][0])/6,e[s+1][1]+(r*e[s][1]-r*e[s+2][1])/6],a[3]=[e[s+1][0],e[s+1][1]],i.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}}else o===3?(i.push({op:"move",data:[e[1][0],e[1][1]]}),i.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):o===2&&i.push(...sl(e[0][0],e[0][1],e[1][0],e[1][1],n,!0,!0));return i}function hu(e,t,n,o,i,a,r,s){const l=[],h=[];if(s.roughness===0){e/=4,h.push([t+o*Math.cos(-e),n+i*Math.sin(-e)]);for(let c=0;c<=2*Math.PI;c+=e){const d=[t+o*Math.cos(c),n+i*Math.sin(c)];l.push(d),h.push(d)}h.push([t+o*Math.cos(0),n+i*Math.sin(0)]),h.push([t+o*Math.cos(e),n+i*Math.sin(e)])}else{const c=j(.5,s)-Math.PI/2;h.push([j(a,s)+t+.9*o*Math.cos(c-e),j(a,s)+n+.9*i*Math.sin(c-e)]);const d=2*Math.PI+c-.01;for(let u=c;u<d;u+=e){const p=[j(a,s)+t+o*Math.cos(u),j(a,s)+n+i*Math.sin(u)];l.push(p),h.push(p)}h.push([j(a,s)+t+o*Math.cos(c+2*Math.PI+.5*r),j(a,s)+n+i*Math.sin(c+2*Math.PI+.5*r)]),h.push([j(a,s)+t+.98*o*Math.cos(c+r),j(a,s)+n+.98*i*Math.sin(c+r)]),h.push([j(a,s)+t+.9*o*Math.cos(c+.5*r),j(a,s)+n+.9*i*Math.sin(c+.5*r)])}return[h,l]}function cu(e,t,n,o,i,a,r,s,l){const h=a+j(.1,l),c=[];c.push([j(s,l)+t+.9*o*Math.cos(h-e),j(s,l)+n+.9*i*Math.sin(h-e)]);for(let d=h;d<=r;d+=e)c.push([j(s,l)+t+o*Math.cos(d),j(s,l)+n+i*Math.sin(d)]);return c.push([t+o*Math.cos(r),n+i*Math.sin(r)]),c.push([t+o*Math.cos(r),n+i*Math.sin(r)]),Xa(c,null,l)}function W1(e,t,n,o,i,a,r,s){const l=[],h=[s.maxRandomnessOffset||1,(s.maxRandomnessOffset||1)+.3];let c=[0,0];const d=s.disableMultiStroke?1:2,u=s.preserveVertices;for(let p=0;p<d;p++)p===0?l.push({op:"move",data:[r[0],r[1]]}):l.push({op:"move",data:[r[0]+(u?0:j(h[0],s)),r[1]+(u?0:j(h[0],s))]}),c=u?[i,a]:[i+j(h[p],s),a+j(h[p],s)],l.push({op:"bcurveTo",data:[e+j(h[p],s),t+j(h[p],s),n+j(h[p],s),o+j(h[p],s),c[0],c[1]]});return l}function Po(e){return[...e]}function uu(e,t=0){const n=e.length;if(n<3)throw new Error("A curve must have at least three points.");const o=[];if(n===3)o.push(Po(e[0]),Po(e[1]),Po(e[2]),Po(e[2]));else{const i=[];i.push(e[0],e[0]);for(let s=1;s<e.length;s++)i.push(e[s]),s===e.length-1&&i.push(e[s]);const a=[],r=1-t;o.push(Po(i[0]));for(let s=1;s+2<i.length;s++){const l=i[s];a[0]=[l[0],l[1]],a[1]=[l[0]+(r*i[s+1][0]-r*i[s-1][0])/6,l[1]+(r*i[s+1][1]-r*i[s-1][1])/6],a[2]=[i[s+1][0]+(r*i[s][0]-r*i[s+2][0])/6,i[s+1][1]+(r*i[s][1]-r*i[s+2][1])/6],a[3]=[i[s+1][0],i[s+1][1]],o.push(a[1],a[2],a[3])}}return o}function ha(e,t){return Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)}function J1(e,t,n){const o=ha(t,n);if(o===0)return ha(e,t);let i=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/o;return i=Math.max(0,Math.min(1,i)),ha(e,sn(t,n,i))}function sn(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n]}function ll(e,t,n,o){const i=o||[];if(function(s,l){const h=s[l+0],c=s[l+1],d=s[l+2],u=s[l+3];let p=3*c[0]-2*h[0]-u[0];p*=p;let b=3*c[1]-2*h[1]-u[1];b*=b;let g=3*d[0]-2*u[0]-h[0];g*=g;let w=3*d[1]-2*u[1]-h[1];return w*=w,p<g&&(p=g),b<w&&(b=w),p+b}(e,t)<n){const s=e[t+0];i.length?(a=i[i.length-1],r=s,Math.sqrt(ha(a,r))>1&&i.push(s)):i.push(s),i.push(e[t+3])}else{const l=e[t+0],h=e[t+1],c=e[t+2],d=e[t+3],u=sn(l,h,.5),p=sn(h,c,.5),b=sn(c,d,.5),g=sn(u,p,.5),w=sn(p,b,.5),m=sn(g,w,.5);ll([l,u,g,m],0,n,i),ll([m,w,b,d],0,n,i)}var a,r;return i}function X1(e,t){return Qa(e,0,e.length,t)}function Qa(e,t,n,o,i){const a=i||[],r=e[t],s=e[n-1];let l=0,h=1;for(let c=t+1;c<n-1;++c){const d=J1(e[c],r,s);d>l&&(l=d,h=c)}return Math.sqrt(l)>o?(Qa(e,t,h+1,o,a),Qa(e,h,n,o,a)):(a.length||a.push(r),a.push(s)),a}function ts(e,t=.15,n){const o=[],i=(e.length-1)/3;for(let a=0;a<i;a++)ll(e,3*a,t,o);return n&&n>0?Qa(o,0,o.length,n):o}const Re="none";class Ka{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,n,o){return{shape:t,sets:n||[],options:o||this.defaultOptions}}line(t,n,o,i,a){const r=this._o(a);return this._d("line",[pp(t,n,o,i,r)],r)}rectangle(t,n,o,i,a){const r=this._o(a),s=[],l=V1(t,n,o,i,r);if(r.fill){const h=[[t,n],[t+o,n],[t+o,n+i],[t,n+i]];r.fillStyle==="solid"?s.push(es([h],r)):s.push(In([h],r))}return r.stroke!==Re&&s.push(l),this._d("rectangle",s,r)}ellipse(t,n,o,i,a){const r=this._o(a),s=[],l=mp(o,i,r),h=rl(t,n,r,l);if(r.fill)if(r.fillStyle==="solid"){const c=rl(t,n,r,l).opset;c.type="fillPath",s.push(c)}else s.push(In([h.estimatedPoints],r));return r.stroke!==Re&&s.push(h.opset),this._d("ellipse",s,r)}circle(t,n,o,i){const a=this.ellipse(t,n,o,o,i);return a.shape="circle",a}linearPath(t,n){const o=this._o(n);return this._d("linearPath",[la(t,!1,o)],o)}arc(t,n,o,i,a,r,s=!1,l){const h=this._o(l),c=[],d=ru(t,n,o,i,a,r,s,!0,h);if(s&&h.fill)if(h.fillStyle==="solid"){const u=Object.assign({},h);u.disableMultiStroke=!0;const p=ru(t,n,o,i,a,r,!0,!1,u);p.type="fillPath",c.push(p)}else c.push(function(u,p,b,g,w,m,f){const y=u,v=p;let P=Math.abs(b/2),C=Math.abs(g/2);P+=j(.01*P,f),C+=j(.01*C,f);let k=w,I=m;for(;k<0;)k+=2*Math.PI,I+=2*Math.PI;I-k>2*Math.PI&&(k=0,I=2*Math.PI);const U=(I-k)/f.curveStepCount,L=[];for(let B=k;B<=I;B+=U)L.push([y+P*Math.cos(B),v+C*Math.sin(B)]);return L.push([y+P*Math.cos(I),v+C*Math.sin(I)]),L.push([y,v]),In([L],f)}(t,n,o,i,a,r,h));return h.stroke!==Re&&c.push(d),this._d("arc",c,h)}curve(t,n){const o=this._o(n),i=[],a=au(t,o);if(o.fill&&o.fill!==Re)if(o.fillStyle==="solid"){const r=au(t,Object.assign(Object.assign({},o),{disableMultiStroke:!0,roughness:o.roughness?o.roughness+o.fillShapeRoughnessGain:0}));i.push({type:"fillPath",ops:this._mergedShape(r.ops)})}else{const r=[],s=t;if(s.length){const l=typeof s[0][0]=="number"?[s]:s;for(const h of l)h.length<3?r.push(...h):h.length===3?r.push(...ts(uu([h[0],h[0],h[1],h[2]]),10,(1+o.roughness)/2)):r.push(...ts(uu(h),10,(1+o.roughness)/2))}r.length&&i.push(In([r],o))}return o.stroke!==Re&&i.push(a),this._d("curve",i,o)}polygon(t,n){const o=this._o(n),i=[],a=la(t,!0,o);return o.fill&&(o.fillStyle==="solid"?i.push(es([t],o)):i.push(In([t],o))),o.stroke!==Re&&i.push(a),this._d("polygon",i,o)}path(t,n){const o=this._o(n),i=[];if(!t)return this._d("path",i,o);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const a=o.fill&&o.fill!=="transparent"&&o.fill!==Re,r=o.stroke!==Re,s=!!(o.simplification&&o.simplification<1),l=function(c,d,u){const p=dp(up(bh(c))),b=[];let g=[],w=[0,0],m=[];const f=()=>{m.length>=4&&g.push(...ts(m,d)),m=[]},y=()=>{f(),g.length&&(b.push(g),g=[])};for(const{key:P,data:C}of p)switch(P){case"M":y(),w=[C[0],C[1]],g.push(w);break;case"L":f(),g.push([C[0],C[1]]);break;case"C":if(!m.length){const k=g.length?g[g.length-1]:w;m.push([k[0],k[1]])}m.push([C[0],C[1]]),m.push([C[2],C[3]]),m.push([C[4],C[5]]);break;case"Z":f(),g.push([w[0],w[1]])}if(y(),!u)return b;const v=[];for(const P of b){const C=X1(P,u);C.length&&v.push(C)}return v}(t,1,s?4-4*(o.simplification||1):(1+o.roughness)/2),h=su(t,o);if(a)if(o.fillStyle==="solid")if(l.length===1){const c=su(t,Object.assign(Object.assign({},o),{disableMultiStroke:!0,roughness:o.roughness?o.roughness+o.fillShapeRoughnessGain:0}));i.push({type:"fillPath",ops:this._mergedShape(c.ops)})}else i.push(es(l,o));else i.push(In(l,o));return r&&(s?l.forEach(c=>{i.push(la(c,!1,o))}):i.push(h)),this._d("path",i,o)}opsToPath(t,n){let o="";for(const i of t.ops){const a=typeof n=="number"&&n>=0?i.data.map(r=>+r.toFixed(n)):i.data;switch(i.op){case"move":o+=`M${a[0]} ${a[1]} `;break;case"bcurveTo":o+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":o+=`L${a[0]} ${a[1]} `}}return o.trim()}toPaths(t){const n=t.sets||[],o=t.options||this.defaultOptions,i=[];for(const a of n){let r=null;switch(a.type){case"path":r={d:this.opsToPath(a),stroke:o.stroke,strokeWidth:o.strokeWidth,fill:Re};break;case"fillPath":r={d:this.opsToPath(a),stroke:Re,strokeWidth:0,fill:o.fill||Re};break;case"fillSketch":r=this.fillSketch(a,o)}r&&i.push(r)}return i}fillSketch(t,n){let o=n.fillWeight;return o<0&&(o=n.strokeWidth/2),{d:this.opsToPath(t),stroke:n.fill||Re,strokeWidth:o,fill:Re}}_mergedShape(t){return t.filter((n,o)=>o===0||n.op!=="move")}}class Q1{constructor(t,n){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new Ka(n)}draw(t){const n=t.sets||[],o=t.options||this.getDefaultOptions(),i=this.ctx,a=t.options.fixedDecimalPlaceDigits;for(const r of n)switch(r.type){case"path":i.save(),i.strokeStyle=o.stroke==="none"?"transparent":o.stroke,i.lineWidth=o.strokeWidth,o.strokeLineDash&&i.setLineDash(o.strokeLineDash),o.strokeLineDashOffset&&(i.lineDashOffset=o.strokeLineDashOffset),this._drawToContext(i,r,a),i.restore();break;case"fillPath":{i.save(),i.fillStyle=o.fill||"";const s=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(i,r,a,s),i.restore();break}case"fillSketch":this.fillSketch(i,r,o)}}fillSketch(t,n,o){let i=o.fillWeight;i<0&&(i=o.strokeWidth/2),t.save(),o.fillLineDash&&t.setLineDash(o.fillLineDash),o.fillLineDashOffset&&(t.lineDashOffset=o.fillLineDashOffset),t.strokeStyle=o.fill||"",t.lineWidth=i,this._drawToContext(t,n,o.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,n,o,i="nonzero"){t.beginPath();for(const a of n.ops){const r=typeof o=="number"&&o>=0?a.data.map(s=>+s.toFixed(o)):a.data;switch(a.op){case"move":t.moveTo(r[0],r[1]);break;case"bcurveTo":t.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);break;case"lineTo":t.lineTo(r[0],r[1])}}n.type==="fillPath"?t.fill(i):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,n,o,i,a){const r=this.gen.line(t,n,o,i,a);return this.draw(r),r}rectangle(t,n,o,i,a){const r=this.gen.rectangle(t,n,o,i,a);return this.draw(r),r}ellipse(t,n,o,i,a){const r=this.gen.ellipse(t,n,o,i,a);return this.draw(r),r}circle(t,n,o,i){const a=this.gen.circle(t,n,o,i);return this.draw(a),a}linearPath(t,n){const o=this.gen.linearPath(t,n);return this.draw(o),o}polygon(t,n){const o=this.gen.polygon(t,n);return this.draw(o),o}arc(t,n,o,i,a,r,s=!1,l){const h=this.gen.arc(t,n,o,i,a,r,s,l);return this.draw(h),h}curve(t,n){const o=this.gen.curve(t,n);return this.draw(o),o}path(t,n){const o=this.gen.path(t,n);return this.draw(o),o}}const Ri="http://www.w3.org/2000/svg";class K1{constructor(t,n){this.svg=t,this.gen=new Ka(n)}draw(t){const n=t.sets||[],o=t.options||this.getDefaultOptions(),i=this.svg.ownerDocument||window.document,a=i.createElementNS(Ri,"g"),r=t.options.fixedDecimalPlaceDigits;for(const s of n){let l=null;switch(s.type){case"path":l=i.createElementNS(Ri,"path"),l.setAttribute("d",this.opsToPath(s,r)),l.setAttribute("stroke",o.stroke),l.setAttribute("stroke-width",o.strokeWidth+""),l.setAttribute("fill","none"),o.strokeLineDash&&l.setAttribute("stroke-dasharray",o.strokeLineDash.join(" ").trim()),o.strokeLineDashOffset&&l.setAttribute("stroke-dashoffset",`${o.strokeLineDashOffset}`);break;case"fillPath":l=i.createElementNS(Ri,"path"),l.setAttribute("d",this.opsToPath(s,r)),l.setAttribute("stroke","none"),l.setAttribute("stroke-width","0"),l.setAttribute("fill",o.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||l.setAttribute("fill-rule","evenodd");break;case"fillSketch":l=this.fillSketch(i,s,o)}l&&a.appendChild(l)}return a}fillSketch(t,n,o){let i=o.fillWeight;i<0&&(i=o.strokeWidth/2);const a=t.createElementNS(Ri,"path");return a.setAttribute("d",this.opsToPath(n,o.fixedDecimalPlaceDigits)),a.setAttribute("stroke",o.fill||""),a.setAttribute("stroke-width",i+""),a.setAttribute("fill","none"),o.fillLineDash&&a.setAttribute("stroke-dasharray",o.fillLineDash.join(" ").trim()),o.fillLineDashOffset&&a.setAttribute("stroke-dashoffset",`${o.fillLineDashOffset}`),a}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,n){return this.gen.opsToPath(t,n)}line(t,n,o,i,a){const r=this.gen.line(t,n,o,i,a);return this.draw(r)}rectangle(t,n,o,i,a){const r=this.gen.rectangle(t,n,o,i,a);return this.draw(r)}ellipse(t,n,o,i,a){const r=this.gen.ellipse(t,n,o,i,a);return this.draw(r)}circle(t,n,o,i){const a=this.gen.circle(t,n,o,i);return this.draw(a)}linearPath(t,n){const o=this.gen.linearPath(t,n);return this.draw(o)}polygon(t,n){const o=this.gen.polygon(t,n);return this.draw(o)}arc(t,n,o,i,a,r,s=!1,l){const h=this.gen.arc(t,n,o,i,a,r,s,l);return this.draw(h)}curve(t,n){const o=this.gen.curve(t,n);return this.draw(o)}path(t,n){const o=this.gen.path(t,n);return this.draw(o)}}var Z1={canvas:(e,t)=>new Q1(e,t),svg:(e,t)=>new K1(e,t),generator:e=>new Ka(e),newSeed:()=>Ka.newSeed()};const Y1={word_count:85},eS=[{part:"Part I: The Union and its Territory",part_number:"I",article_count:4,word_count:395,articles:[{article:"1",title:"Name and territory of the Union",description:`(1) India, that is Bharat, shall be a Union of States.

 

(2) The States and the territories thereof shall be as specified in the First Schedule.

 

(3) The territory of India shall comprise —

(a) the territories of the States;

(b) the Union territories specified in the First Schedule; and

(c) such other territories as may be acquired.`,word_count:58},{article:"2",title:"Admission or establishment of new States",description:"Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit.",word_count:21},{article:"3",title:"Formation of new States and alteration of areas, boundaries or names of existing States",description:`Parliament may by law—

(a) form a new State by separation of territory from any State or by uniting two or more States or parts of States or by uniting any territory to a part of any State;

(b) increase the area of any State;

(c) diminish the area of any State;

(d) alter the boundaries of any State;

(e) alter the name of any State:

 

Provided that no Bill for the purpose shall be introduced in either House of Parliament except on the recommendation of the President and unless, where the proposal contained in the Bill affects the area, boundaries or name of any of the States, the Bill has been referred by the President to the Legislature of that State for expressing its views thereon within such period as may be specified in the reference or within such further period as the President may allow and the period so specified or allowed has expired.

 

Explanation I.—In this article, in clauses (a) to (e), "State'' includes a Union territory, but in the proviso, "State'' does not include a Union territory.

 

Explanation II.—The power conferred on Parliament by clause (a) includes the power to form a new State or Union territory by uniting a part of any State or Union territory to any other State or Union territory.`,word_count:218},{article:"4",title:"Laws made under articles 2 and 3 to provide for the amendment of the First and the Fourth Schedules and supplemental, incidental and consequential matters",description:`(1) Any law referred to in article 2 or article 3 shall contain such provisions for the amendment of the First Schedule and the Fourth Schedule as may be necessary to give effect to the provisions of the law and may also contain such supplemental, incidental and consequential provisions (including provisions as to representation in Parliament and in the Legislature or Legislatures of the State or States affected by such law) as Parliament may deem necessary.

 

(2) No such law as aforesaid shall be deemed to be an amendment of this Constitution for the purposes of article 368.`,word_count:98}]},{part:"Part II: Citizenship",part_number:"II",article_count:7,word_count:632,articles:[{article:"5",title:"Citizenship at the commencement of the Constitution",description:`At the commencement of this Constitution, every person who has his domicile in the territory of India and —

       

        (a) who was born in the territory of India; or

        (b) either of whose parents was born in the territory of India; or

        (c) who has been ordinarily resident in the territory of India for not less than five years immediately preceding such commencement,

 

shall be a citizen of India.`,word_count:69},{article:"6",title:"Rights of citizenship of certain persons who have migrated to India from Pakistan",description:`Notwithstanding anything in article 5, a person who has migrated to the territory of India from the territory now included in Pakistan shall be deemed to be a citizen of India at the commencement of this Constitution if —

 

      (a) he or either of his parents or any of his grandparents was born in India as defined in the Government of India Act, 1935 (as originally enacted); and

   

      (b)  (i) in the case where such person has so migrated before the nineteenth day of July, 1948, he has been ordinarily resident in the territory of India since the date of his migration, or

         

            (ii) in the case where such person has so migrated on or after the nineteenth day of July, 1948, he has been registered as a citizen of India by an officer appointed in that behalf by the Government      of the Dominion of India on an application made by him therefor to such officer before the commencement of this Constitution in the form and manner prescribed by that Government:

 

Provided that no person shall be so registered unless he has been resident in the territory of India for at least six months immediately preceding the date of his application.`,word_count:201},{article:"7",title:"Rights of citizenship of certain migrants to Pakistan",description:`Notwithstanding anything in articles 5 and 6, a person who has after the first day of March, 1947, migrated from the territory of India to the territory now included in Pakistan shall not be deemed to be a citizen of India:

 

Provided that nothing in this article shall apply to a person who, after having so migrated to the territory now included in Pakistan, has returned to the territory of India under a permit for resettlement or permanent return issued by or under the authority of any law and every such person shall for the purposes of clause (b) of article 6 be deemed to have migrated to the territory of India after the nineteenth day of July, 1948.`,word_count:119},{article:"8",title:"Rights of citizenship of certain persons of Indian origin residing outside India",description:"Notwithstanding anything in article 5, any person who or either of whose parents or any of whose grandparents was born in India as defined in the Government of India Act, 1935 (as originally enacted), and who is ordinarily residing in any country outside India as so defined shall be deemed to be a citizen of India if he has been registered as a citizen of India by the diplomatic or consular representative of India in the country where he is for the time being residing on an application made by him therefor to such diplomatic or consular representative, whether before or after the commencement of this Constitution, in the form and manner prescribed by the Government of the Dominion of India or the Government of India",word_count:126},{article:"9",title:"Persons voluntarily acquiring citizenship of a foreign State not to be citizens",description:"No person shall be a citizen of India by virtue of article 5, or be deemed to be a citizen of India by virtue of article 6 or article 8, if he has voluntarily acquired the citizenship of any foreign State.",word_count:41},{article:"10",title:"Continuance of the rights of citizenship",description:"Every person who is or is deemed to be a citizen of India under any of the foregoing provisions of this Part shall, subject to the provisions of any law that may be made by Parliament, continue to be such citizen.",word_count:41},{article:"11",title:"Parliament to regulate the right of citizenship by law",description:"Nothing in the foregoing provisions of this Part shall derogate from the power of Parliament to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to citizenship",word_count:35}]},{part:"Part III: Fundamental Rights",part_number:"III",article_count:30,word_count:4263,articles:[{article:"12",title:"Definitions",description:"In this Part, unless the context otherwise requires, “the State’’ includes the Government and Parliament of India and the Government and the Legislature of each of the States and all local or other authorities within the territory of India or under the control of the Government of India",word_count:48},{article:"13",title:"Laws inconsistent with or in derogation of the fundamental rights",description:`(1) All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void.

 

(2) The State shall not make any law which takes away or abridges the rights conferred by this Part and any law made in contravention of this clause shall, to the extent of the contravention, be void.

 

(3) In this article, unless the context otherwise requires,—

       (a) “law” includes any Ordinance, order, bye-law, rule, regulation, notification, custom or usage having in the territory of India the force of law;

       (b) “laws in force” includes laws passed or made by a Legislature or other competent authority in the territory of India before the commencement of this Constitution and not previously repealed, notwithstanding that any such law or any part thereof may not be then in operation either at all or in particular areas. 

 

(4) Nothing in this article shall apply to any amendment of this Constitution made under article 368`,word_count:178},{article:"14",title:"Equality before law",description:"The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",word_count:24},{article:"15",title:"Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth",description:`(1) The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.

 

(2) No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to—

     (a) access to shops, public restaurants, hotels and places of public entertainment; or

     (b) the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.

 

(3) Nothing in this article shall prevent the State from making any special provision for women and children.

 

(4) Nothing in this article or in clause (2) of article 29 shall prevent the State from making any special provision for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes and the Scheduled Tribes.

 

(5) Nothing in this article or in sub-clause (g) of clause (1) of article 19 shall prevent the State from making any special provision, by law, for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes or the Scheduled Tribes in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30.

 

(6) Nothing in this article or sub-clause (g) of clause (1) of article 19 or clause (2) of article 29 shall prevent the State from making,—

     (a) any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5); and

     (b) any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5) in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30, which in the case of reservation would be in addition to the existing reservations and subject to a maximum of ten per cent. of the total seats in each category.

     Explanation.—For the purposes of this article and article 16, "economically weaker sections" shall be such as may be notified by the State from time to time on the basis of family income and other indicators of economic disadvantage.`,word_count:427},{article:"16",title:"Equality of opportunity in matters of public employment",description:`(1) There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.

 

(2) No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State.

 

(3) Nothing in this article shall prevent Parliament from making any law prescribing, in regard to a class or classes of employment or appointment to an office under the Government of, or any local or other authority within, a State or Union territory, any requirement as to residence within that State or Union territory] prior to such employment or appointment.

 

(4) Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any backward class of citizens which, in the opinion of the State, is not adequately represented in the services under the State.

 

(4A) Nothing in this article shall prevent the State from making any provision for reservation in matters of promotion, with consequential seniority, to any class] or classes of posts in the services under the State in favour of the Scheduled Castes and the Scheduled Tribes which, in the opinion of the State, are not adequately represented in the services under the State.

 

(4B) Nothing in this article shall prevent the State from considering any unfilled vacancies of a year which are reserved for being filled up in that year in accordance with any provision for reservation made under clause (4) or clause (4A) as a separate class of vacancies to be filled up in any succeeding year or years and such class of vacancies shall not be considered together with the vacancies of the year in which they are being filled up for determining the ceiling of fifty per cent. reservation on total number of vacancies of that year.

 

(5) Nothing in this article shall affect the operation of any law which provides that the incumbent of an office in connection with the affairs of any religious or denominational institution or any member of the governing body thereof shall be a person professing a particular religion or belonging to a particular denomination.

 

(6) Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any economically weaker sections of citizens other than the classes mentioned in clause (4), in addition to the existing reservation and subject to a maximum of ten per cent. of the posts in each category.`,word_count:435},{article:"17",title:"Abolition of Untouchability",description:"“Untouchability” is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of “Untouchability” shall be an offence punishable in accordance with law.",word_count:29},{article:"18",title:"Abolition of titles",description:`(1) No title, not being a military or academic distinction, shall be conferred by the State.

 

(2) No citizen of India shall accept any title from any foreign State.

 

(3) No person who is not a citizen of India shall, while he holds any office of profit or trust under the State, accept without the consent of the President any title from any foreign State.

 

(4) No person holding any office of profit or trust under the State shall, without the consent of the President, accept any present, emolument, or office of any kind from or under any foreign State.`,word_count:100},{article:"19",title:"Protection of certain rights regarding freedom of speech, etc",description:`(1) All citizens shall have the right—

      (a) to freedom of speech and expression;

      (b) to assemble peaceably and without arms;

      (c) to form associations or unions;

      (d) to move freely throughout the territory of India;

      (e) to reside and settle in any part of the territory of India;

      (g) to practise any profession, or to carry on any occupation, trade or business.

 

(2) Nothing in sub-clause (a) of clause (1) shall affect the operation of any existing law, or prevent the State from making any law, in so far as such law imposes reasonable restrictions on the exercise of the right conferred by the said sub-clause in the interests of the sovereignty and integrity of India,] the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation or incitement to an offence.

 

 (3) Nothing in sub-clause (b) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order, reasonable restrictions on the exercise of the right conferred by the said sub-clause.

 

(4) Nothing in sub-clause (c) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty andintegrity of India or] public order or morality, reasonable restrictions on the exercise of the right conferred by the said sub-clause.

 

(5) Nothing in 1 [sub-clauses (d) and (e) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, reasonable restrictions on the exercise of any of the rights conferred by the said sub-clauses either in the interests of the general public or for the protection of the interests of any Scheduled Tribe.

 

(6) Nothing in sub-clause (g) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the general public, reasonable restrictions on the exercise of the right conferred by the said sub-clause, and, in particular, nothing in the said sub-clause shall affect the operation of any existing law in so far as it relates to, or prevent the State from making any law relating to,—

         (i) the professional or technical qualifications necessary for practising any profession or carrying on any occupation, trade or business, or

         (ii) the carrying on by the State, or by a corporation owned or controlled by the State, of any trade, business, industry or service, whether to the exclusion, complete or partial, of citizens or otherwise.`,word_count:471},{article:"20",title:"Protection in respect of conviction for offences",description:`(1) No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the Act charged as an offence, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission of the offence.

 

(2) No person shall be prosecuted and punished for the same offence more than once.

 

(3) No person accused of any offence shall be compelled to be a witness against himself.`,word_count:89},{article:"21",title:"Protection of life and personal liberty",description:"No person shall be deprived of his life or personal liberty except according to procedure established by law.",word_count:18},{article:"22",title:"Protection against arrest and detention in certain cases",description:`(1) No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice.

 

(2) Every person who is arrested and detained in custody shall be produced before the nearest magistrate within a period of twenty-four hours of such arrest excluding the time necessary for the journey from the place of arrest to the court of the magistrate and no such person shall be detained in custody beyond the said period without the authority of a magistrate.

 

(3) Nothing in clauses (1) and (2) shall apply—

 

(a) to any person who for the time being is an enemy alien; or

(b) to any person who is arrested or detained under any law providing for preventive detention.

 

(4) No law providing for preventive detention shall authorise the detention of a person for a longer period than three months unless—

 

(a) an Advisory Board consisting of persons who are, or have been, or are qualified to be appointed as, Judges of a High Court has reported before the expiration of the said period of three months that there is in its opinion sufficient cause for such detention:

Provided that nothing in this sub-clause shall authorise the detention of any person beyond the maximum period prescribed by any law made by Parliament under sub-clause (b) of clause (7); or

(b) such person is detained in accordance with the provisions of any law made by Parliament under subclauses (a) and (b) of clause (7).

 

(5) When any person is detained in pursuance of an order made under any law providing for preventive detention, the authority making the order shall, as soon as may be, communicate to such person the grounds on which the order has been made and shall afford him the earliest opportunity of making a representation against the order.

 

(6) Nothing in clause (5) shall require the authority making any such order as is referred to in that clause to disclose facts which such authority considers to be against the public interest to disclose.

 

(7) Parliament may by law prescribe—


(a) the circumstances under which, and the class or classes of cases in which, a person may be detained for a period longer than three months under any law providing for preventive detention without obtaining the opinion of an Advisory Board in accordance with the provisions of sub-clause (a) of clause (4);

(b) the maximum period for which any person may in any class or classes of cases be detained under any law providing for preventive detention; and

(c) the procedure to be followed by an Advisory Board in an inquiry under sub-clause (a) of clause (4).`,word_count:466},{article:"23",title:"Prohibition of traffic in human beings and forced labour",description:`(1) Traffic in human beings and begar and other similar forms of forced labour are prohibited and any contravention of this provision shall be an offence punishable in accordance with law.

 

(2) Nothing in this article shall prevent the State from imposing compulsory service for public purposes, and in imposing such service the State shall not make any discrimination on grounds only of religion, race, caste or class or any of them`,word_count:72},{article:"24",title:"Prohibition of employment of children in factories, etc",description:"No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment",word_count:25},{article:"25",title:"Freedom of conscience and free profession, practice and propagation of religion",description:`(1) Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion.

 

(2) Nothing in this article shall affect the operation of any existing law or prevent the State from making any law—

(a) regulating or restricting any economic, financial, political or other secular activity which may be associated with religious practice;

(b) providing for social welfare and reform or the throwing open of Hindu religious institutions of a public character to all classes and sections of Hindus.

 

Explanation I.—The wearing and carrying of kirpans shall be deemed to be included in the profession of the Sikh religion.

 

Explanation II.—In sub-clause (b) of clause (2), the reference to Hindus shall be construed as including a reference to persons professing the Sikh, Jaina or Buddhist religion, and the reference to Hindu religious institutions shall be construed accordingly.`,word_count:159},{article:"26",title:"Freedom to manage religious affairs",description:`Subject to public order, morality and health, every religious denomination or any section thereof shall have the right—

(a) to establish and maintain institutions for religious and charitable purposes;

(b) to manage its own affairs in matters of religion;

(c) to own and acquire movable and immovable property; and

(d) to administer such property in accordance with law.`,word_count:58},{article:"27",title:"Freedom as to payment of taxes for promotion of any particular religion",description:"No person shall be compelled to pay any taxes, the proceeds of which are specifically appropriated in payment of expenses for the promotion or maintenance of any particular religion or religious denomination",word_count:32},{article:"28",title:"Freedom as to attendance at religious instruction or religious worship in certain educational institutions",description:`(1) No religious instruction shall be provided in any educational institution wholly maintained out of State funds.

 

(2) Nothing in clause (1) shall apply to an educational institution which is administered by the State but has been established under any endowment or trust which requires that religious instruction shall be imparted in such institution.

 

(3) No person attending any educational institution recognised by the State or receiving aid out of State funds shall be required to take part in any religious instruction that may be imparted in such institution or to attend any religious worship that may be conducted in such institution or in any premises attached thereto unless such person or, if such person is a minor, his guardian has given his consent thereto.`,word_count:125},{article:"29",title:"Protection of interests of minorities",description:`(1) Any section of the citizens residing in the territory of India or any part thereof having a distinct language, script or culture of its own shall have the right to conserve the same.

 

(2) No citizen shall be denied admission into any educational institution maintained by the State or receiving aid out of State funds on grounds only of religion, race, caste, language or any of them.`,word_count:68},{article:"30",title:"Right of minorities to establish and administer educational institutions",description:`(1) All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice.

 

(1A) In making any law providing for the compulsory acquisition of any property of an educational institution established and administered by a minority referred to in clause (1), the State shall ensure that the amount fixed by or determined under such law for the acquisition of such property is such as would not restrict or abrogate the right guaranteed under that clause.

 

(2) The State shall not, in granting aid to educational institutions, discriminate against any educational institution on the ground that it is under the management of a minority, whether based on religion or language.`,word_count:118},{article:"31",title:"Compulsory acquisition of property",description:"[Compulsory acquisition of property.] Rep. by the Constitution (Forty-fourth Amendment) Act, 1978, s. 6 (w.e.f. 20-6-1979).",word_count:16},{article:"32",title:"Remedies for enforcement of rights conferred by this Part",description:`(1) The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.

 

(2) The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, whichever may be appropriate, for the enforcement of any of the rights conferred by this Part.

 

(3) Without prejudice to the powers conferred on the Supreme Court by clauses (1) and (2), Parliament may by law empower any other court to exercise within the local limits of its jurisdiction all or any of the powers exercisable by the Supreme Court under clause (2).

 

(4) The right guaranteed by this article shall not be suspended except as otherwise provided for by this Constitution.`,word_count:133},{article:"33",title:"Power of Parliament to modify the rights conferred by this Part in their application to Forces, etc",description:`Parliament may, by law, determine to what extent any of the rights conferred by this Part shall, in their application to,—

(a) the members of the Armed Forces; or

(b) the members of the Forces charged with the maintenance of public order; or

(c) persons employed in any bureau or other organisation established by the State for purposes of intelligence or counter intelligence; or

(d) person employed in, or in connection with, the telecommunication systems set up for the purposes of any Force, bureau or organisation referred to in clauses (a) to (c),

 

be restricted or abrogated so as to ensure the proper discharge of their duties and the maintenance of discipline among them.`,word_count:114},{article:"34",title:"Restriction on rights conferred by this Part while martial law is in force in any area",description:"Notwithstanding anything in the foregoing provisions of this Part, Parliament may by law indemnify any person in the service of the Union or of a State or any other person in respect of any act done by him in connection with the maintenance or restoration of order in any area within the territory of India where martial law was in force or validate any sentence passed, punishment inflicted, forfeiture ordered or other act done under martial law in such area.",word_count:80},{article:"35",title:"Legislation to give effect to the provisions of this Part",description:`Notwithstanding anything in this Constitution,—

(a) Parliament shall have, and the Legislature of a State shall not have, power to make laws—

(i) with respect to any of the matters which under clause (3) of article 16, clause (3) of article 32, article 33 and article 34 may be provided for by law made by Parliament; and

(ii) for prescribing punishment for those acts which are declared to be offences under this Part;

(b) any law in force immediately before the commencement of this Constitution in the territory of India with respect to any of the matters referred to in sub-clause (i) of clause (a) or providing for punishment for any act referred to in sub-clause (ii) of that clause shall, subject to the terms thereof and to any adaptations and modifications that may be made therein under article 372, continue in force until altered or repealed or amended by Parliament.

 

Explanation.—In this article, the expression “law in force” has the same meaning as in article 372.`,word_count:167},{article:"21A",title:"Right to education",description:"The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.",word_count:29},{article:"31A",title:"Saving of laws providing for acquisition of estates, etc",description:`(1) Notwithstanding anything contained in article 13, no law providing for—

(a) the acquisition by the State of any estate or of any rights therein or the extinguishment or modification of any such rights, or

(b) the taking over of the management of any property by the State for a limited period either in the public interest or in order to secure the proper management of the property, or

(c) the amalgamation of two or more corporations either in the public interest or in order to secure the proper management of any of the corporations, or

(d) the extinguishment or modification of any rights of managing agents, secretaries and treasurers, managing directors, directors or managers of corporations, or of any voting rights of shareholders thereof, or

(e) the extinguishment or modification of any rights accruing by virtue of any agreement, lease or licence for the purpose of searching for, or winning, any mineral or mineral oil, or the premature termination or cancellation of any such agreement, lease or licence,

 

shall be deemed to be void on the ground that it is inconsistent with, or takes away or abridges any of the rights conferred by [article 14 or article 19:

 

Provided that where such law is a law made by the Legislature of a State, the provisions of this article shall not apply thereto unless such law, having been reserved for the consideration of the President, has received his assent:

Provided further that where any law makes any provision for the acquisition by the State of any estate and where any land comprised therein is held by a person under his personal cultivation, it shall not be lawful for the State to acquire any portion of such land as is within the ceiling limit applicable to him under any law for the time being in force or any building or structure standing thereon or appurtenant thereto, unless the law relating to the acquisition of such land, building or structure, provides for payment of compensation at a rate which shall not be less than the market value thereof.

 

(2) In this article,—

(a) the expression ''estate'' shall, in relation to any local area, have the same meaning as that expression or its local equivalent has in the existing law relating to land tenures in force in that area and shall also include—

(i) any jagir, inam or muafi or other similar grant and in the States of Tamil Nadu and Kerala, any janmam right;

(ii) any land held under ryotwari settlement;

(iii) any land held or let for purposes of agriculture or for purposes ancillary thereto, including waste land, forest land, land for pasture or sites of buildings and other structures occupied by cultivators of land, agricultural labourers and village artisans;

(b) the expression ''rights'', in relation to an estate, shall include any rights vesting in a proprietor, subproprietor, under-proprietor, tenure-holder, 1 [raiyat, under-raiyat] or other intermediary and any rights or privileges in respect of land revenue.`,word_count:495},{article:"31B",title:"Validation of certain Acts and Regulations",description:"Without prejudice to the generality of the provisions contained in article 31A, none of the Acts and Regulations specified in the Ninth Schedule nor any of the provisions thereof shall be deemed to be void, or ever to have become void, on the ground that such Act, Regulation or provision is inconsistent with, or takes away or abridges any of the rights conferred by, any provisions of this Part, and notwithstanding any judgment, decree or order of any court or Tribunal to the contrary, each of the said Acts and Regulations shall, subject to the power of any competent Legislature to repeal or amend it, continue in force.",word_count:108},{article:"31C",title:"Saving of laws giving effect to certain directive principles",description:`Notwithstanding anything contained in article 13, no law giving effect to the policy of the State towards securing 4 [all or any of the principles laid down in Part IV] shall be deemed to be void on the ground that it is inconsistent with, or takes away or abridges any of the rights conferred by article 14 or article 19 and no law containing a declaration that it is for giving effect to such policy shall be called in question in any court on the ground that it does not give effect to such policy:

 

Provided that where such law is made by the Legislature of a State, the provisions of this article shall not apply thereto unless such law, having been reserved for the consideration of the President, has received his assent.`,word_count:133},{article:"31D",title:"Saving of laws in respect of anti-national activities",description:"[Saving of laws in respect of anti-national activities.] Rep. by the Constitution (Forty-third Amendment) Act, 1977, s. 2 (w.e.f. 13-4-1978).",word_count:20},{article:"32A",title:"Constitutional validity of State laws not to be considered in proceedings under article 32",description:"[Constitutional validity of State laws not to be considered in proceedings under article 32.] Rep. by the Constitution (Forty-third Amendment) Act, 1977, s. 3 (w.e.f. 13-4-1978).",word_count:26}]},{part:"Part IV: Directive Principles of State Policy",part_number:"IV",article_count:20,word_count:896,articles:[{article:"36",title:"Definition",description:"In this Part, unless the context otherwise requires, “the State” has the same meaning as in Part III.",word_count:18},{article:"37",title:"Application of the principles contained in this Part",description:"The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws.",word_count:44},{article:"38",title:"State to secure a social order for the promotion of welfare of the people",description:`(1)The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life.

 

(2) The State shall, in particular, strive to minimise the inequalities in income, and endeavour to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different areas or engaged in different vocations.`,word_count:81},{article:"39",title:"Certain principles of policy to be followed by the State",description:`The State shall, in particular, direct its policy towards securing—

(a) that the citizens, men and women equally, have the right to an adequate means of livelihood;

 

(b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;

 

(c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment;

 

(d) that there is equal pay for equal work for both men and women;

 

(e) that the health and strength of workers, men and women, and the tender age of children are not abused and that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength;

 

(f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment.`,word_count:162},{article:"39A",title:"Equal justice and free legal aid",description:"The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes or in any other way, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.",word_count:57},{article:"40",title:"Organisation of village panchayats",description:"The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government.",word_count:30},{article:"41",title:"Right to work, to education and to public assistance in certain cases",description:"The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in cases of unemployment, old age, sickness and disablement, and in other cases of undeserved want.",word_count:43},{article:"42",title:"Provision for just and humane conditions of work and maternity relief",description:"The State shall make provision for securing just and humane conditions of work and for maternity relief.",word_count:17},{article:"43",title:"Living wage, etc, for workers",description:"The State shall endeavour to secure, by suitable legislation or economic organisation or in any other way, to all workers, agricultural, industrial or otherwise, work, a living wage, conditions of work ensuring a decent standard of life and full enjoyment of leisure and social and cultural opportunities and, in particular, the State shall endeavour to promote cottage industries on an individual or co-operative basis in rural areas.",word_count:67},{article:"43A",title:"Participation of workers in management of industries",description:"The State shall take steps, by suitable legislation or in any other way, to secure the participation of workers in the management of undertakings, establishments or other organisations engaged in any industry.",word_count:32},{article:"43B",title:"Promotion of co-operative societies",description:"The State shall endeavour to promote voluntary formation, autonomous functioning, democratic control and professional management of co-operative societies.",word_count:18},{article:"44",title:"Uniform civil code for the citizens",description:"The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India.",word_count:18},{article:"45",title:"Provision for free and compulsory education for children",description:"The State shall endeavour to provide, within a period of ten years from the commencement of this Constitution, for free and compulsory education for all children until they complete the age of fourteen years.",word_count:34},{article:"46",title:"Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes and other weaker sections",description:"The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation.",word_count:42},{article:"47",title:"Duty of the State to raise the level of nutrition and the standard of living and to improve public health",description:"The State shall regard the raising of the level of nutrition and the standard of living of its people and the improvement of public health as among its primary duties and, in particular, the State shall endeavour to bring about prohibition of the consumption except for medicinal purposes of intoxicating drinks and of drugs which are injurious to health.",word_count:59},{article:"48",title:"Organisation of agriculture and animal husbandry",description:"The State shall endeavour to organise agriculture and animal husbandry on modern and scientific lines and shall, in particular, take steps for preserving and improving the breeds, and prohibiting the slaughter, of cows and calves and other milch and draught cattle",word_count:41},{article:"48A",title:"Protection and improvement of environment and safeguarding of forests and wild life",description:"The State shall endeavour to protect and improve the environment and to safeguard the forests and wild life of the country.",word_count:21},{article:"49",title:"Protection of monuments and places and objects of national importance",description:"It shall be the obligation of the State to protect every monument or place or object of artistic or historic interest, declared by or [under law made by Parliament] to be of national importance, from spoliation, disfigurement, destruction, removal, disposal or export, as the case may be.",word_count:47},{article:"50",title:"Separation of judiciary from executive",description:"The State shall take steps to separate the judiciary from the executive in the public services of the State.",word_count:19},{article:"51",title:"Promotion of international peace and security",description:`The State shall endeavour to—

 

(a) promote international peace and security;

 

(b) maintain just and honourable relations between nations;

 

(c) foster respect for international law and treaty obligations in the dealings of organized peoples with one another; and

 

(d) encourage settlement of international disputes by arbitration`,word_count:46}]},{part:"Part IVA: Fundamental Duties",part_number:"IVA",article_count:1,word_count:217,articles:[{article:"51A",title:"Fundamental duties",description:`It shall be the duty of every citizen of India—

 

(a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem;

 

(b) to cherish and follow the noble ideals which inspired our national struggle for freedom;

 

c) to uphold and protect the sovereignty, unity and integrity of India;

 

(d) to defend the country and render national service when called upon to do so;

 

(e) to promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic and regional or sectional diversities; to renounce practices derogatory to the dignity of women;

 

(f) to value and preserve the rich heritage of our composite culture;

 

(g) to protect and improve the natural environment including forests, lakes, rivers and wild life, and to have compassion for living creatures;

 

(h) to develop the scientific temper, humanism and the spirit of inquiry and reform;

 

(i) to safeguard public property and to abjure violence;

 

(j) to strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement;

 

(k) who is a parent or guardian to provide opportunities for education to his child or, as the case may be, ward between the age of six and fourteen years.`,word_count:217}]},{part:"Part V: The Union",part_number:"V",article_count:102,word_count:14532,articles:[{article:"52",title:"The President of India",description:"There shall be a President of India.",word_count:7},{article:"53",title:"Executive power of the Union",description:`(1) The executive power of the Union shall be vested in the President and shall be exercised by him either directly or through officers subordinate to him in accordance with this Constitution.

 

(2) Without prejudice to the generality of the foregoing provision, the supreme command of the Defence Forces of the Union shall be vested in the President and the exercise thereof shall be regulated by law.

 

(3) Nothing in this article shall—

 

(a) be deemed to transfer to the President any functions conferred by any existing law on the Government of any State or other authority; or

 

(b) prevent Parliament from conferring by law functions on authorities other than the President.`,word_count:112},{article:"54",title:"Election of President",description:`The President shall be elected by the members of an electoral college consisting of—

 

(a) the elected members of both Houses of Parliament; and

 

(b) the elected members of the Legislative Assemblies of the States.

 

Explanation.—In this article and in article 55, ''State'' includes the National Capital Territory of Delhi and the Union territory of Pondicherry`,word_count:56},{article:"55",title:"Manner of election of President",description:`(1) As far as practicable, there shall be uniformity in the scale of representation of the different States at the election of the President.

 

(2) For the purpose of securing such uniformity among the States inter se as well as parity between the States as a whole and the Union, the number of votes which each elected member of Parliament and of the Legislative Assembly of each State is entitled to cast at such election shall be determined in the following manner:—

 

(a) every elected member of the Legislative Assembly of a State shall have as many votes as there are multiples of one thousand in the quotient obtained by dividing the population of the State by the total number of the elected members of the Assembly;

 

(b) if, after taking the said multiples of one thousand, the remainder is not less than five hundred, then the vote of each member referred to in sub-clause (a) shall be further increased by one;

 

(c) each elected member of either House of Parliament shall have such number of votes as may be obtained by dividing the total number of votes assigned to the members of the Legislative Assemblies of the States under sub-clauses (a) and (b) by the total number of the elected members of both Houses of Parliament, fractions exceeding onehalf being counted as one and other fractions being disregarded.

 

(3) The election of the President shall be held in accordance with the system of proportional representation by means of the single transferable vote and the voting at such election shall be by secret ballot.

 

Explanation.—In this article, the expression ''population'' means the population as ascertained at the last preceding census of which the relevant figures have been published: Provided that the reference in this Explanation to the last preceding census of which the relevant figures have been published shall, until the relevant figures for the first census taken after the year 1 [2026] have been published, be construed as a reference to the 1971 census.`,word_count:335},{article:"56",title:"Term of office of President",description:`(1) The President shall hold office for a term of five years from the date on which he enters upon his office:

 

Provided that—

 

(a) the President may, by writing under his hand addressed to the Vice-President, resign his office;

 

(b) the President may, for violation of the Constitution, be removed from office by impeachment in the manner provided in article 61;

 

(c) the President shall, notwithstanding the expiration of his term, continue to hold office until his successor enters upon his office.

 

(2) Any resignation addressed to the Vice-President under clause (a) of the proviso to clause (1) shall forthwith be communicated by him to the Speaker of the House of the People.`,word_count:114},{article:"57",title:"Eligibility for re-election",description:"A person who holds, or who has held, office as President shall, subject to the other provisions of this Constitution, be eligible for re-election to that office.",word_count:27},{article:"58",title:"Qualifications for election as President",description:`(1) No person shall be eligible for election as President unless he—

 

(a) is a citizen of India,

 

(b) has completed the age of thirty-five years, and

 

(c) is qualified for election as a member of the House of the People.

 

(2) A person shall not be eligible for election as President if he holds any office of profit under the Government of India or the Government of any State or under any local or other authority subject to the control of any of the said Governments.

 

Explanation.—For the purposes of this article, a person shall not be deemed to hold any office of profit by reason only that he is the President or Vice-President of the Union or the Governor of any State or is a Minister either for the Union or for any State`,word_count:136},{article:"59",title:"Conditions of President's office",description:`(1) The President shall not be a member of either House of Parliament or of a House of the Legislature of any State, and if a member of either House of Parliament or of a House of the Legislature of any State be elected President, he shall be deemed to have vacated his seat in that House on the date on which he enters upon his office as President.

 

(2) The President shall not hold any other office of profit.

 

(3) The President shall be entitled without payment of rent to the use of his official residences and shall be also entitled to such emoluments, allowances and privileges as may be determined by Parliament by law and, until provision in that behalf is so made, such emoluments, allowances and privileges as are specified in the Second Schedule.

 

(4) The emoluments and allowances of the President shall not be diminished during his term of office.`,word_count:154},{article:"60",title:"Oath or affirmation by the President",description:`Every President and every person acting as President or discharging the functions of the President shall, before entering upon his office, make and subscribe in the presence of the Chief Justice of India or, in his absence, the senior-most Judge of the Supreme Court available, an oath or affirmation in the following form, that is to say —

 

"I, A.B., do swear in the name of God / solemnly affirm that I will faithfully execute the office of President (or discharge the functions of the President) of India and will to the best of my ability preserve, protect and defend theConstitution and the law and that I will devote myself to the service and well-being of the people of India”.`,word_count:120},{article:"61",title:"Procedure for impeachment of the President",description:`(1) When a President is to be impeached for violation of the Constitution, the charge shall be preferred by either House of Parliament.

 

(2) No such charge shall be preferred unless—

 

(a) the proposal to prefer such charge is contained in a resolution which has been moved after at least fourteen days' notice in writing signed by not less than one-fourth of the total number of members of the House has been given of their intention to move the resolution, and

 

(b) such resolution has been passed by a majority of not less than two-thirds of the total membership of the House.

 

(3) When a charge has been so preferred by either House of Parliament, the other House shall investigate the charge or cause the charge to be investigated and the President shall have the right to appear and to be represented at such investigation.

 

(4) If as a result of the investigation a resolution is passed by a majority of not less than two-thirds of the total membership of the House by which the charge was investigated or caused to be investigated, declaring that the charge preferred against the President has been sustained, such resolution shall have the effect of removing the President from his office as from the date on which the resolution is so passed.`,word_count:218},{article:"62",title:"Time of holding election to fill vacancy in the office of President and the term of office of person elected to fill casual vacancy",description:`(1) An election to fill a vacancy caused by the expiration of the term of office of President shall be completed before the expiration of the term.

 

(2) An election to fill a vacancy in the office of President occurring by reason of his death, resignation or removal, or otherwise shall be held as soon as possible after, and in no case later than six months from, the date of occurrence of the vacancy; and the person elected to fill the vacancy shall, subject to the provisions of article 56, be entitled to hold office for the full term of five years from the date on which he enters upon his office.`,word_count:112},{article:"63",title:"The Vice-President of India",description:"There shall be a Vice-President of India.",word_count:7},{article:"64",title:"The Vice-President to be ex officio Chairman of the Council of States",description:`The Vice-President shall be ex officio Chairman of the Council of States and shall not hold any other office of profit:

 

Provided that during any period when the VicePresident acts as President or discharges the functions of the President under article 65, he shall not perform the duties of the office of Chairman of the Council of States and shall not be entitled to any salary or allowance payable to the Chairman of the Council of States under article 97.`,word_count:80},{article:"65",title:"The Vice-President to act as President or to discharge his functions during casual vacancies in the office, or during the absence, of President",description:`(1) In the event of the occurrence of any vacancy in the office of the President by reason of his death, resignation or removal, or otherwise, the Vice-President shall act as President until the date on which a new President elected in accordance with the provisions of this Chapter to fill such vacancy enters upon his office.

 

(2) When the President is unable to discharge his functions owing to absence, illness or any other cause, the Vice-President shall discharge his functions until the date on which the President resumes his duties.

 

(3) The Vice-President shall, during, and in respect of, the period while he is so acting as, or discharging the functions of, President, have all the powers and immunities of the President and be entitled to such emoluments, allowances and privileges as may be determined by Parliament by law and, until provision in that behalf is so made, such emoluments, allowances and privileges as are specified in the Second Schedule.`,word_count:161},{article:"66",title:"Election of Vice - President",description:`(1) The Vice-President shall be elected by the members of an electoral college consisting of the members of both Houses of Parliament in accordance with the system of proportional representation by means of the single transferable vote and the voting at such election shall be by secret ballot.

 

(2) The Vice-President shall not be a member of either House of Parliament or of a House of the Legislature of any State, and if a member of either House of Parliament or of a House of the Legislature of any State be elected Vice-President, he shall be deemed to have vacated his seat in that House on the date on which he enters upon his office as Vice-President.

 

(3) No person shall be eligible for election as VicePresident unless he —

 

(a) is a citizen of India;

 

(b) has completed the age of thirty-five years; and

 

(c) is qualified for election as a member of the Council of States

 

(4) A person shall not be eligible for election as Vice-President if he holds any office of profit under the Government of India or the Government of any State or under any local or other authority subject to the control of any of the said Governments.

 

Explanation.— For the purposes of this article, a person shall not be deemed to hold any office of profit by reason only that he is the President or Vice-President of the Union or the Governor of any State or is a Minister either for the Union or for any State.`,word_count:254},{article:"67",title:"Term of office of Vice-President",description:`The Vice-President shall hold office for a term of five years from the date on which he enters upon his office:

 

Provided that —

 

(a) a Vice-President may, by writing under his hand addressed to the President, resign his office;

 

(b) a Vice-President may be removed from his office by a resolution of the Council of States passed by a majority of all the then members of the Council and agreed to by the House of the People; but no resolution for the purpose of this clause shall be moved unless at least fourteen days' notice has been given of the intention to move the resolution;

 

(c) a Vice-President shall, notwithstanding the expiration of his term, continue to hold office until his successor enters upon his office.`,word_count:127},{article:"68",title:"Time of holding election to fill vacancy in the office of Vice-President and the term of office of person elected to fill casual vacancy",description:`(1) An election to fill a vacancy caused by the expiration of the term of office of Vice-President shall be completed before the expiration of the term.

 

(2) An election to fill a vacancy in the office of VicePresident occurring by reason of his death, resignation or removal, or otherwise shall be held as soon as possible after the occurrence of the vacancy, and the person elected to fill the vacancy shall, subject to the provisions of article 67, be entitled to hold office for the full term of five years from the date on which he enters upon his office.`,word_count:101},{article:"69",title:"Oath or affirmation by the Vice-President",description:`Every Vice-President shall, before entering upon his office, make and subscribe before the President, or some person appointed in that behalf by him, an oath or affirmation in the following form, that is to say —

 

“I, A.B., do swear in the name of God / solemnly affirm that I will bear true faith and allegiance to the Constitution of India as by law established and that I will faithfully discharge the duty upon which I am about to enter.”`,word_count:80},{article:"70",title:"Discharge of President's functions in other contingencies",description:"Parliament may make such provisions as it thinks fit for the discharge of the functions of the President in any contingency not provided for in this Chapter.",word_count:27},{article:"71",title:"Matters relating to, or connected with, the election of a President or Vice-President",description:`(1) All doubts and disputes arising out of or in connection with the election of a President or Vice - President shall be inquired into and decided by the Supreme Court whose decision shall be final.

 

(2) If the election of a person as President or Vice - President is declared void by the Supreme Court, acts done by him in the exercise and performance of the powers and duties of the office of President or Vice - President, as the case may be, on or before the date of the decision of the Supreme Court shall not be invalidated by reason of that declaration.

 

(3) Subject to the provisions of this Constitution, Parliament may by law regulate any matter relating to or connected with the election of a President or Vice - President.

 

(4) The election of a person as President or Vice - President shall not be called in question on the ground of the existence of any vacancy for whatever reason among the members of the electoral college electing him`,word_count:173},{article:"72",title:"Power of President to grant pardons, etc, and to suspend, remit or commute sentences in certain cases",description:`(1) The President shall have the power to grant pardons, reprieves, respites or remissions of punishment or to suspend, remit or commute the sentence of any person convicted of any offence —

 

(a) in all cases where the punishment or sentence is by a Court Martial;

 

(b) in all cases where the punishment or sentence is for an offence against any law relating to a matter to which the executive power of the Union extends;

 

(c) in all cases where the sentence is a sentence of death.

 

(2) Nothing in sub-clause (a) of clause (1) shall affect the power conferred by law on any officer of the Armed Forces of the Union to suspend, remit or commute a sentence passed by a Court Martial.

 

(3) Nothing in sub-clause (c) of clause (1) shall affect the power to suspend, remit or commute a sentence of death exercisable by the Governor of a State under any law for the time being in force.`,word_count:161},{article:"73",title:"Extent of executive power of the Union",description:`(1) Subject to the provisions of this Constitution, the executive power of the Union shall extend —

 

(a) to the matters with respect to which Parliament has power to make laws; and

 

(b) to the exercise of such rights, authority and jurisdiction as are exercisable by the Government of India by virtue of any treaty or agreement:

 

Provided that the executive power referred to in subclause (a) shall not, save as expressly provided in this Constitution or in any law made by Parliament, extend in any State to matters with respect to which the Legislature of the State has also power to make laws.

 

(2) Until otherwise provided by Parliament, a State and any officer or authority of a State may, notwithstanding anything in this article, continue to exercise in matters with respect to which Parliament has power to make laws for that State such executive power or functions as the State or officer or authority thereof could exercise immediately before the commencement of this Constitution.`,word_count:166},{article:"74",title:"Council of Ministers to aid and advise President",description:`(1) There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice:

 

Provided that the President may require the Council of Ministers to reconsider such advice, either generally or otherwise, and the President shall act in accordance with the advice tendered after such reconsideration.

 

 (2) The question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court.`,word_count:92},{article:"75",title:"Other provisions as to Ministers",description:`(1) The Prime Minister shall be appointed by the President and the other Ministers shall be appointed by the President on the advice of the Prime Minister.

 

(1A) The total number of Ministers, including the Prime Minister, in the Council of Ministers shall not exceed fifteen per cent. of the total number of members of the House of the People.

 

(1B) A member of either House of Parliament belonging to any political party who is disqualified for being a member of that House under paragraph 2 of the Tenth Schedule shall also be disqualified to be appointed as a Minister under clause (1) for duration of the period commencing from the date of his disqualification till the date on which the term of his office as such member would expire or where he contests any election to either House of Parliament before the expiry of such period, till the date on which he is declared elected, whichever is earlier.

 

(2) The Ministers shall hold office during the pleasure of the President.

 

(3) The Council of Ministers shall be collectively responsible to the House of the People.

 

(4) Before a Minister enters upon his office, the President shall administer to him the oaths of office and of secrecy according to the forms set out for the purpose in the Third Schedule.

 

(5) A Minister who for any period of six consecutive months is not a member of either House of Parliament shall at the expiration of that period cease to be a Minister.

 

(6) The salaries and allowances of Ministers shall be such as Parliament may from time to time by law determine and, until Parliament so determines, shall be as specified in the Second Schedule.`,word_count:285},{article:"76",title:"Attorney-General for India",description:`(1) The President shall appoint a person who is qualified to be appointed a Judge of the Supreme Court to be Attorney-General for India.

 

(2) It shall be the duty of the Attorney-General to give advice to the Government of India upon such legal matters, and to perform such other duties of a legal character, as may from time to time be referred or assigned to him by the President, and to discharge the functions conferred on him by or under this Constitution or any other law for the time being in force.

 

(3) In the performance of his duties the AttorneyGeneral shall have right of audience in all courts in the territory of India.

 

(4) The Attorney-General shall hold office during the pleasure of the President, and shall receive such remuneration as the President may determine.`,word_count:137},{article:"77",title:"Conduct of business of the Government of India",description:`(1) All executive action of the Government of India shall be expressed to be taken in the name of the President.

 

(2) Orders and other instruments made and executed in the name of the President shall be authenticated in such manner as may be specified in rules to be made by the President, and the validity of an order or instrument which is so authenticated shall not be called in question on the ground that it is not an order or instrument made or executed by the President.

 

(3) The President shall make rules for the more convenient transaction of the business of the Government of India, and for the allocation among Ministers of the said business.`,word_count:117},{article:"78",title:"Duties of Prime Minister as respects the furnishing of information to the President, etc",description:`It shall be the duty of the Prime Minister —

 

(a) to communicate to the President all decisions of the Council of Ministers relating to the administration of the affairs of the Union and proposals for legislation;

 

(b) to furnish such information relating to the administration of the affairs of the Union and proposals for legislation as the President may call for; and

 

(c) if the President so requires, to submit for the consideration of the Council of Ministers any matter on which a decision has been taken by a Minister but which has not been considered by the Council.`,word_count:100},{article:"79",title:"Constitution of Parliament",description:"There shall be a Parliament for the Union which shall consist of the President and two Houses to be known respectively as the Council of States and the House of the People.",word_count:32},{article:"80",title:"Composition of the Council of States",description:`The Council of States] shall consist of —

 

(a) twelve members to be nominated by the President in accordance with the provisions of clause (3); and

 

(b) not more than two hundred and thirty-eight representatives of the States and of the Union territories.

 

(2) The allocation of seats in the Council of States to be filled by representatives of the States and of the Union territories] shall be in accordance with the provisions in that behalf contained in the Fourth Schedule.

 

(3) The members to be nominated by the President under sub-clause (a) of clause (1) shall consist of persons having special knowledge or practical experience in respect of such matters as the following, namely:-

 

Literature, science, art and social service.

 

(4) The representatives of each State  in the Council of States shall be elected by the elected members of the Legislative Assembly of the State in accordance with the system of proportional representation by means of the single transferable vote.

 

(5) The representatives of the Union territories in the Council of States shall be chosen in such manner as Parliament may by law prescribe.`,word_count:185},{article:"81",title:"Composition of the House of the People",description:`(1) Subject to the provisions of article, the House of the People shall consist of —

 

(a) not more than 4 [five hundred and thirty members] chosen by direct election from territorial constituencies in the States, and

 

(b) not more than 5 [twenty members] to represent the Union territories, chosen in such manner as Parliament may by law provide.

 

(2) For the purposes of sub-clause (a) of clause (1),—

 

(a) there shall be allotted to each State a number of seats in the House of the People in such manner that the ratio between that number and the population of the State is, so far as practicable, the same for all States; and

 

(b) each State shall be divided into territorial constituencies in such manner that the ratio between the population of each constituency and the number of seats allotted to it is, so far as practicable, the same throughout the State:

 

Provided that the provisions of sub-clause (a) of this clause shall not be applicable for the purpose of allotment of seats in the House of the People to any State so long as the population of that State does not exceed six millions.

 

(3) In this article, the expression “population” means the population as ascertained at the last preceding census of which the relevant figures have been published:

 

Provided that the reference in this clause to the last preceding census of which the relevant figures have been published shall, until the relevant figures for the first census taken after the year 2026 have been published, be construed,—

 

(i) for the purposes of sub-clause (a) of clause (2) and the proviso to that clause, as a reference to the 1971 census; and

 

(ii) for the purposes of sub-clause (b) of clause (2) as a reference to the 2001 census.`,word_count:300},{article:"82",title:"Readjustment after each census",description:`Upon the completion of each census, the allocation of seats in the House of the People to the States and the division of each State into territorial constituencies shall be readjusted by such authority and in such manner as Parliament may by law determine:

 

Provided that such readjustment shall not affect representation in the House of the People until the dissolution of the then existing House:

 

Provided further that such readjustment shall take effect from such date as the President may, by order, specify and until such readjustment takes effect, any election to the House may be held on the basis of the territorial constituencies existing before such readjustment:

 

Provided also that until the relevant figures for the first census taken after the year 2026 have been published, it shall not be necessary to readjust - 

 

(i) the allocation of seats in the House of People to the States as readjusted on the basis of the 1971 census; and

 

(ii) the division of each State into territorial constituencies as may be readjusted on the basis of the 2001 census,

 

under this article.`,word_count:182},{article:"83",title:"Duration of Houses of Parliament",description:`(1) The Council of States shall not be subject to dissolution, but as nearly as possible one-third of the members thereof shall retire as soon as may be on the expiration of every second year in accordance with the provisions made in that behalf by Parliament by law.

 

(2) The House of the People, unless sooner dissolved, shall continue for five years from the date appointed for its first meeting and no longer and the expiration of the said period of five years shall operate as a dissolution of the House:

 

Provided that the said period may, while a Proclamation of Emergency is in operation, be extended by Parliament by law for a period not exceeding one year at a time and not extending in any case beyond a period of six months after the Proclamation has ceased to operate.`,word_count:140},{article:"84",title:"Qualification for membership of Parliament",description:`A person shall not be qualified to be chosen to fill a seat in Parliament unless he —

 

(a) is a citizen of India, and makes and subscribes before some person authorised in that behalf by the Election Commission an oath or affirmation according to the form set out for the purpose in the Third Schedule;

 

(b) is, in the case of a seat in the Council of States, not less than thirty years of age and, in the case of a seat in the House of the People, not less than twenty-five years of age; and

 

(c) possesses such other qualifications as may be prescribed in that behalf by or under any law made by Parliament.`,word_count:117},{article:"85",title:"Sessions of Parliament, prorogation and dissolution",description:`(1) The President shall from time to time summon each House of Parliament to meet at such time and place as he thinks fit, but six months shall not intervene between its last sitting in one session and the date appointed for its first sitting in the next session.

 

(2) The President may from time to time —

 

(a) prorogue the Houses or either House;

 

(b) dissolve the House of the People.`,word_count:72},{article:"86",title:"Right of President to address and send messages to Houses",description:`(1) The President may address either House of Parliament or both Houses assembled together, and for that purpose require the attendance of members.

 

(2) The President may send messages to either House of Parliament, whether with respect to a Bill then pending in Parliament or otherwise, and a House to which any message is so sent shall with all convenient despatch consider any matter required by the message to be taken into consideration`,word_count:73},{article:"87",title:"Special address by the President",description:`(1) At the commencement of the first session after each general election to the House of the People and at the commencement of the first session of each year the President shall address both Houses of Parliament assembled together and inform Parliament of the causes of its summons.

 

(2) Provision shall be made by the rules regulating the procedure of either House for the allotment of time for discussion of the matters referred to in such address.`,word_count:77},{article:"88",title:"Rights of Ministers and Attorney General as respects Houses",description:"Every Minister and the Attorney-General of India shall have the right to speak in, and otherwise to take part in the proceedings of, either House, any joint sitting of the Houses, and any committee of Parliament of which he may be named a member, but shall not by virtue of this article be entitled to vote.",word_count:56},{article:"89",title:"The Chairman and Deputy Chairman of the Council of States",description:`(1) The Vice-President of India shall be ex officio Chairman of the Council of States.

 

(2) The Council of States shall, as soon as may be, choose a member of the Council to be Deputy Chairman thereof and, so often as the office of Deputy Chairman becomes vacant, the Council shall choose another member to be Deputy Chairman thereof.`,word_count:59},{article:"90",title:"Vacation and resignation of, and removal from, the office of Deputy Chairman",description:`A member holding office as Deputy Chairman of the Council of States —

 

(a) shall vacate his office if he ceases to be a member of the Council;

 

(b) may at any time, by writing under his hand addressed to the Chairman, resign his office; and

 

(c) may be removed from his office by a resolution of the Council passed by a majority of all the then members of the Council:

 

Provided that no resolution for the purpose of clause (c) shall be moved unless at least fourteen days’ notice has been given of the intention to move the resolution.`,word_count:100},{article:"91",title:"Power of the Deputy Chairman or other person to perform the duties of the office of, or to act as, Chairman",description:`(1) While the office of Chairman is vacant, or during any period when the Vice-President is acting as, or discharging the functions of, President, the duties of the office shall be performed by the Deputy Chairman, or, if the office of Deputy Chairman is also vacant, by such member of the Council of States as the President may appoint for the purpose.

 

(2) During the absence of the Chairman from any sitting of the Council of States the Deputy Chairman, or, if he is also absent, such person as may be determined by the rules of procedure of the Council, or, if no such person is present, such other person as may be determined by the Council, shall act as Chairman.`,word_count:121},{article:"92",title:"The Chairman or the Deputy Chairman not to preside while a resolution for his removal from office is under consideration",description:`(1) At any sitting of the Council of States, while any resolution for the removal of the Vice-President from his office is under consideration, the Chairman, or while any resolution for the removal of the Deputy Chairman from his office is under consideration, the Deputy Chairman, shall not, though he is present, preside, and the provisions of clause (2) of article 91 shall apply in relation to every such sitting as they apply in relation to a sitting from which the Chairman, or, as the case may be, the Deputy Chairman, is absent.

 

(2) The Chairman shall have the right to speak in, and otherwise to take part in the proceedings of, the Council of States while any resolution for the removal of the Vice-President from his office is under consideration in the Council, but, notwithstanding anything in article 100, shall not be entitled to vote at all on such resolution or on any other matter during such proceedings.`,word_count:159},{article:"93",title:"The Speaker and Deputy Speaker of the House of the People",description:"The House of the People shall, as soon as may be, choose two members of the House to be respectively Speaker and Deputy Speaker thereof and, so often as the office of Speaker or Deputy Speaker becomes vacant, the House shall choose another member to be Speaker or Deputy Speaker, as the case may be.",word_count:55},{article:"94",title:"Vacation and resignation of, and removal from, the offices of Speaker and Deputy Speaker",description:`A member holding office as Speaker or Deputy Speaker of the House of the People —

 

(a) shall vacate his office if he ceases to be a member of the House of the People;

 

(b) may at any time, by writing under his hand addressed, if such member is the Speaker, to the Deputy Speaker, and if such member is the Deputy Speaker, to the Speaker, resign his office; and

 

(c) may be removed from his office by a resolution of the House of the People passed by a majority of all the then members of the House:

 

Provided that no resolution for the purpose of clause (c) shall be moved unless at least fourteen days' notice has been given of the intention to move the resolution: Provided further that, whenever the House of the People is dissolved, the Speaker shall not vacate his office until immediately before the first meeting of the House of the People after the dissolution.`,word_count:160},{article:"95",title:"Power of the Deputy Speaker or other person to perform the duties of the office of, or to act as, Speaker",description:`(1) While the office of Speaker is vacant, the duties of the office shall be performed by the Deputy Speaker or, if the office of Deputy Speaker is also vacant, by such member of the House of the People as the President may appoint for the purpose.

 

(2) During the absence of the Speaker from any sitting of the House of the People the Deputy Speaker or, if he is also absent, such person as may be determined by the rules of procedure of the House, or, if no such person is present, such other person as may be determined by the House, shall act as Speaker.`,word_count:107},{article:"96",title:"The Speaker or the Deputy Speaker not to preside while a resolution for his removal from office is under consideration",description:`(1) At any sitting of the House of the People, while any resolution for the removal of the Speaker from his office is under consideration, the Speaker, or while any resolution for the removal of the Deputy Speaker from his office is under consideration, the Deputy Speaker, shall not, though he is present, preside, and the provisions of clause (2) of article 95 shall apply in relation to every such sitting as they apply in relation to a sitting from which the Speaker, or, as the case may be, the Deputy Speaker, is absent.

 

(2) The Speaker shall have the right to speak in, and otherwise to take part in the proceedings of, the House of the People while any resolution for his removal from office is under consideration in the House and shall, notwithstanding anything in article 100, be entitled to vote only in the first instance on such resolution or on any other matter during such proceedings but not in the case of an equality of votes`,word_count:169},{article:"97",title:"Salaries and allowances of the Chairman and Deputy Chairman and the Speaker and Deputy Speaker",description:"There shall be paid to the Chairman and the Deputy Chairman of the Council of States, and to the Speaker and the Deputy Speaker of the House of the People, such salaries and allowances as may be respectively fixed by Parliament by law and, until provision in that behalf is so made, such salaries and allowances as are specified in the Second Schedule.",word_count:63},{article:"98",title:"Secretariat of Parliament",description:`(1) Each House of Parliament shall have a separate secretarial staff:

 

Provided that nothing in this clause shall be construed as preventing the creation of posts common to both Houses of Parliament.

 

(2) Parliament may by law regulate the recruitment, and the conditions of service of persons appointed, to the secretarial staff of either House of Parliament.

 

(3) Until provision is made by Parliament under clause (2), the President may, after consultation with the Speaker of the House of the People or the Chairman of the Council of States, as the case may be, make rules regulating the recruitment, and the conditions of service of persons appointed, to the secretarial staff of the House of the People or the Council of States, and any rules so made shall have effect subject to the provisions of any law made under the said clause.`,word_count:142},{article:"99",title:"Oath or affirmation by members",description:"Every member of either House of Parliament shall, before taking his seat, make and subscribe before the President, or some person appointed in that behalf by him, an oath or affirmation according to the form set out for the purpose in the Third Schedule.",word_count:44},{article:"100",title:"Voting in Houses, power of Houses to act notwithstanding vacancies and quorum",description:`(1) Save as otherwise provided in this Constitution, all questions at any sitting of either House or joint sitting of the Houses shall be determined by a majority of votes of the members present and voting, other than the Speaker or person acting as Chairman or Speaker.

 

The Chairman or Speaker, or person acting as such, shall not vote in the first instance, but shall have and exercise a casting vote in the case of an equality of votes.

 

(2) Either House of Parliament shall have power to act notwithstanding any vacancy in the membership thereof, and any proceedings in Parliament shall be valid notwithstanding that it is discovered subsequently that some person who was not entitled so to do sat or voted or otherwise took part in the proceedings.

 

(3) Until Parliament by law otherwise provides, the quorum to constitute a meeting of either House of Parliament shall be one-tenth of the total number of members of the House. (4) If at any time during a meeting of a House there is no quorum, it shall be the duty of the Chairman or Speaker, or person acting as such, either to adjourn the House or to suspend the meeting until there is a quorum.`,word_count:205},{article:"101",title:"Vacation of seats",description:`(1) No person shall be a member of both Houses of Parliament and provision shall be made by Parliament by law for the vacation by a person who is chosen a member of both Houses of his seat in one House or the other.

 

(2) No person shall be a member both of Parliament and of a House of the Legislature of a State and if a person is chosen a member both of Parliament and of a House of the Legislature of a State, then, at the expiration of such period as may be specified in rules made by the President, that person's seat in Parliament shall become vacant, unless he has previously resigned his seat in the Legislature of the State.

 

(3) If a member of either House of Parliament —

 

(a) becomes subject to any of the disqualifications mentioned in clause (1) or clause (2) of article 102, or 5

 

(b) resigns his seat by writing under his hand addressed to the Chairman or the Speaker, as the case may be, and his resignation is accepted by the Chairman or the Speaker, as the case may be, his seat shall thereupon become vacant:

 

his seat shall thereupon become vacant:

 

Provided that in the case of any resignation referred to in sub-clause (b), if from information received or otherwise and after making such inquiry as he thinks fit, the Chairman or the Speaker, as the case may be, is satisfied that such resignation is not voluntary or genuine, he shall not accept such resignation.

 

(4) If for a period of sixty days a member of either House of Parliament is without permission of the House absent from all meetings thereof, the House may declare his seat vacant:

 

Provided that in computing the said period of sixty days no account shall be taken of any period during which the House is prorogued or is adjourned for more than four consecutive days.`,word_count:322},{article:"102",title:"Disqualifications for membership",description:`(1) A person shall be disqualified for being chosen as, and for being, a member of either House of Parliament —

 

(a) if he holds any office of profit under the Government of India or the Government of any State, other than an office declared by Parliament by law not to disqualify its holder;

 

(b) if he is of unsound mind and stands so declared by a competent court;

 

(c) if he is an undischarged insolvent;

 

(d) if he is not a citizen of India, or has voluntarily acquired the citizenship of a foreign State, or is under any acknowledgment of allegiance or adherence to a foreign State;

 

(e) if he is so disqualified by or under any law made by Parliament.

 

Explanation.— For the purposes of this clause] a person shall not be deemed to hold an office of profit under the Government of India or the Government of any State by reason only that he is a Minister either for the Union or for such State.

 

(2) A person shall be disqualified for being a member of either House of Parliament if he is so disqualified under the Tenth Schedule.`,word_count:192},{article:"103",title:"Decision on questions as to disqualifications of members",description:`(1) If any question arises as to whether a member of either House of Parliament has become subject to any of the disqualifications mentioned in clause (1) of article 102, the question shall be referred for the decision of the President and his decision shall be final.

 

(2) Before giving any decision on any such question, the President shall obtain the opinion of the Election Commission and shall act according to such opinion.`,word_count:73},{article:"104",title:"Penalty for sitting and voting before making oath or affirmation under article 99 or when not qualified or when disqualified",description:"If a person sits or votes as a member of either House of Parliament before he has complied with the requirements of article 99, or when he knows that he is not qualified or that he is disqualified for membership thereof, or that he is prohibited from so doing by the provisions of any law made by Parliament, he shall be liable in respect of each day on which he so sits or votes to a penalty of five hundred rupees to be recovered as a debt due to the Union.",word_count:91},{article:"105",title:"Powers, privileges, etc, of the Houses of Parliament and of the members and committees thereof",description:`(1) Subject to the provisions of this Constitution and to the rules and standing orders regulating the procedure of Parliament, there shall be freedom of speech in Parliament.

 

(2) No member of Parliament shall be liable to any proceedings in any court in respect of any thing said or any vote given by him in Parliament or any committee thereof, and no person shall be so liable in respect of the publication by or under the authority of either House of Parliament of any report, paper, votes or proceedings.

 

(3) In other respects, the powers, privileges and immunities of each House of Parliament, and of the members and the committees of each House, shall be such as may from time to time be defined by Parliament by law, and, until so defined, shall be those of that House and of its members and committees immediately before the coming into force of section 15 of the Constitution (Forty-fourth Amendment) Act, 1978.

 

(4) The provisions of clauses (1), (2) and (3) shall apply in relation to persons who by virtue of this Constitution have the right to speak in, and otherwise to take part in the proceedings of, a House of Parliament or any committee thereof as they apply in relation to members of Parliament.`,word_count:213},{article:"106",title:"Salaries and allowances of members",description:"Members of either House of Parliament shall be entitled to receive such salaries and allowances as may from time to time be determined by Parliament by law and, until provision in that respect is so made, allowances at such rates and upon such conditions as were immediately before the commencement of this Constitution applicable in the case of members of the Constituent Assembly of the Dominion of India.",word_count:68},{article:"107",title:"Provisions as to introduction and passing of Bills",description:`(1) Subject to the provisions of articles 109 and 117 with respect to Money Bills and other financial Bills, a Bill may originate in either House of Parliament.

 

(2) Subject to the provisions of articles 108 and 109, a Bill shall not be deemed to have been passed by the Houses of Parliament unless it has been agreed to by both Houses, either without amendment or with such amendments only as are agreed to by both Houses.

 

(3) A Bill pending in Parliament shall not lapse by reason of the prorogation of the Houses.

 

(4) A Bill pending in the Council of States which has not been passed by the House of the People shall not lapse on a dissolution of the House of the People.

 

(5) A Bill which is pending in the House of the People, or which having been passed by the House of the People is pending in the Council of States, shall, subject to the provisions of article 108, lapse on a dissolution of the House of the People.`,word_count:174},{article:"108",title:"Joint sitting of both Houses in certain cases",description:`(1) If after a Bill has been passed by one House and transmitted to the other House —

 

(a) the Bill is rejected by the other House; or

 

(b) the Houses have finally disagreed as to the amendments to be made in the Bill; or

 

(c) more than six months elapse from the date of the reception of the Bill by the other House without the Bill being passed by it,

 

the President may, unless the Bill has elapsed by reason of a dissolution of the House of the People, notify to the Houses by message if they are sitting or by public notification if they are not sitting, his intention to summon them to meet in a joint sitting for the purpose of deliberating and voting on the Bill:

 

Provided that nothing in this clause shall apply to a Money Bill.

 

(2) In reckoning any such period of six months as is referred to in clause (1), no account shall be taken of any period during which the House referred to in sub-clause (c) of that clause is prorogued or adjourned for more than four consecutive days.

 

(3) Where the President has under clause (1) notified his intention of summoning the Houses to meet in a joint sitting, neither House shall proceed further with the Bill, but the President may at any time after the date of his notification summon the Houses to meet in a joint sitting for the purpose specified in the notification and, if he does so, the Houses shall meet accordingly.

 

(4) If at the joint sitting of the two Houses the Bill, with such amendments, if any, as are agreed to in joint sitting, is passed by a majority of the total number of members of both Houses present and voting, it shall be deemed for the purposes of this Constitution to have been passed by both Houses:

 

Provided that at a joint sitting —

 

(a) if the Bill, having been passed by one House, has not been passed by the other House with amendments and returned to the House in which it originated, no amendment shall be proposed to the Bill other than such amendments (if any) as are made necessary by the delay in the passage of the Bill;

 

(b) if the Bill has been so passed and returned, only such amendments as aforesaid shall be proposed to the Bill and such other amendments as are relevant to the matters with respect to which the Houses have not agreed;

 

and the decision of the person presiding as to the amendments which are admissible under this clause shall be final.

 

(5) A joint sitting may be held under this article and a Bill passed thereat, notwithstanding that a dissolution of the House of the People has intervened since the President notified his intention to summon the Houses to meet therein.`,word_count:477},{article:"109",title:"Special procedure in respect of Money Bills",description:`(1) A Money Bill shall not be introduced in the Council of States.

 

(2) After a Money Bill has been passed by the House of the People it shall be transmitted to the Council of States for its recommendations and the Council of States shall within a period of fourteen days from the date of its receipt of the Bill return the Bill to the House of the People with its recommendations and the House of the People may thereupon either accept or reject all or any of the recommendations of the Council of States.

 

(3) If the House of the People accepts any of the recommendations of the Council of States, the Money Bill shall be deemed to have been passed by both Houses with the amendments recommended by the Council of States and accepted by the House of the People.

 

(4) If the House of the People does not accept any of the recommendations of the Council of States, the Money Bill shall be deemed to have been passed by both Houses in the form in which it was passed by the House of the People without any of the amendments recommended by the Council of States.

 

(5) If a Money Bill passed by the House of the People and transmitted to the Council of States for its recommendations is not returned to the House of the People within the said period of fourteen days, it shall be deemed to have been passed by both Houses at the expiration of the said period in the form in which it was passed by the House of the People.`,word_count:269},{article:"110",title:"Definition of “Money Bills”",description:`(1) For the purposes of this Chapter, a Bill shall be deemed to be a Money Bill if it contains only provisions dealing with all or any of the following matters, namely :—

 

(a) the imposition, abolition, remission, alteration or regulation of any tax;

 

(b) the regulation of the borrowing of money or the giving of any guarantee by the Government of India, or the amendment of the law with respect to any financial obligations undertaken or to be undertaken by the Government of India;

 

(c) the custody of the Consolidated Fund or the Contingency Fund of India, the payment of moneys into or the withdrawal of moneys from any such Fund;

 

(d) the appropriation of moneys out of the Consolidated Fund of India;

 

(e) the declaring of any expenditure to be expenditure charged on the Consolidated Fund of India or the increasing of the amount of any such expenditure;

 

(f) the receipt of money on account of the Consolidated Fund of India or the public account of India or the custody or issue of such money or the audit of the accounts of the Union or of a State; or

 

(g) any matter incidental to any of the matters specified in sub-clauses (a) to (f).

 

(2) A Bill shall not be deemed to be a Money Bill by reason only that it provides for the imposition of fines or other pecuniary penalties, or for the demand or payment of fees for licences or fees for services rendered, or by reason that it provides for the imposition, abolition, remission, alteration or regulation of any tax by any local authority or body for local purposes.

 

(3) If any question arises whether a Bill is a Money Bill or not, the decision of the Speaker of the House of the People thereon shall be final.

 

(4) There shall be endorsed on every Money Bill when it is transmitted to the Council of States under article 109, and when it is presented to the President for assent under article 111, the certificate of the Speaker of the House of the People signed by him that it is a Money Bill.`,word_count:357},{article:"111",title:"Assent to Bills",description:`When a Bill has been passed by the Houses of Parliament, it shall be presented to the President, and the President shall declare either that he assents to the Bill, or that he withholds assent therefrom:

 

      Provided that the President may, as soon as possible after the presentation to him of a Bill for assent, return the Bill if it is not a Money Bill to the Houses with a message requesting that they will reconsider the Bill or any specified provisions thereof and, in particular, will consider the desirability of introducing any such amendments as he may recommend in his message, and when a Bill is so returned, the Houses shall reconsider the Bill accordingly, and if the Bill is passed again by the Houses with or without amendment and presented to the President for assent, the President shall not withhold assent therefrom.`,word_count:144},{article:"112",title:"Annual financial statement",description:`(1) The President shall in respect of every financial year cause to be laid before both the Houses of Parliament a statement of the estimated receipts and expenditure of the Government of India for that year, in this Part referred to as the “annual financial statement”.

 

(2) The estimates of expenditure embodied in the annual financial statement shall show separately —

 

(a) the sums required to meet expenditure described by this Constitution as expenditure charged upon the Consolidated Fund of India; and

 

(b) the sums required to meet other expenditure proposed to be made from the Consolidated Fund of India,

 

and shall distinguish expenditure on revenue account from other expenditure.

 

(3) The following expenditure shall be expenditure charged on the Consolidated Fund of India — 

 

(a) the emoluments and allowances of the President and other expenditure relating to his office;

 

(b) the salaries and allowances of the Chairman and the Deputy Chairman of the Council of States and the Speaker and the Deputy Speaker of the House of the People;

 

(c) debt charges for which the Government of India is liable including interest, sinking fund charges and redemption charges, and other expenditure relating to the raising of loans and the service and redemption of debt;

 

(d) (i) the salaries, allowances and pensions payable to or in respect of Judges of the Supreme Court;

 

(ii) the pensions payable to or in respect of Judges of the Federal Court;

 

(iii) the pensions payable to or in respect of Judges of any High Court which exercises jurisdiction in relation to any area included in the territory of India or which at any time before the commencement of this Constitution exercised jurisdiction in relation to any area included in a Governor's Province of the Dominion of India;

 

(e) the salary, allowances and pension payable to or in respect of the Comptroller and Auditor-General of India;

 

(f) any sums required to satisfy any judgment, decree or award of any court or arbitral tribunal;

 

(g) any other expenditure declared by this Constitution or by Parliament by law to be so charged.`,word_count:345},{article:"113",title:"Procedure in Parliament with respect to estimates",description:`(1) So much of the estimates as relates to expenditure charged upon the Consolidated Fund of India shall not be submitted to the vote of Parliament, but nothing in this clause shall be construed as preventing the discussion in either House of Parliament of any of those estimates.

 

(2) So much of the said estimates as relates to other expenditure shall be submitted in the form of demands for grants to the House of the People, and the House of the People shall have power to assent, or to refuse to assent, to any demand, or to assent to any demand subject to a reduction of the amount specified therein.

 

(3) No demand for a grant shall be made except on the recommendation of the President.`,word_count:126},{article:"114",title:"Appropriation Bills",description:`(1) As soon as may be after the grants under article 113 have been made by the House of the People, there shall be introduced a Bill to provide for the appropriation out of the Consolidated Fund of India of all moneys required to meet —

 

(a) the grants so made by the House of the People; and

 

(b) the expenditure charged on the Consolidated Fund of India but not exceeding in any case the amount shown in the statement previously laid before Parliament.

 

(2) No amendment shall be proposed to any such Bill in either House of Parliament which will have the effect of varying the amount or altering the destination of any grant so made or of varying the amount of any expenditure charged on the Consolidated Fund of India, and the decision of the person presiding as to whether an amendment is inadmissible under this clause shall be final.

 

(3) Subject to the provisions of articles 115 and 116, no money shall be withdrawn from the Consolidated Fund of India except under appropriation made by law passed in accordance with the provisions of this article.`,word_count:188},{article:"115",title:"Supplementary, additional or excess grants",description:`(1) The President shall —

 

(a) if the amount authorised by any law made in accordance with the provisions of article 114 to be expended for a particular service for the current financial year is found to be insufficient for the purposes of that year or when a need has arisen during the current financial year for supplementary or additional expenditure upon some new service not contemplated in the annual financial statement for that year, or

 

(b) if any money has been spent on any service during a financial year in excess of the amount granted for that service and for that year,

 

cause to be laid before both the Houses of Parliament another statement showing the estimated amount of that expenditure or cause to be presented to the House of the People a demand for such excess, as the case may be.

 

(2) The provisions of articles 112, 113 and 114 shall have effect in relation to any such statement and expenditure or demand and also to any law to be made authorising the appropriation of moneys out of the Consolidated Fund of India to meet such expenditure or the grant in respect of such demand as they have effect in relation to the annual financial statement and the expenditure mentioned therein or to a demand for a grant and the law to be made for the authorisation of appropriation of moneys out of the Consolidated Fund of India to meet such expenditure or grant.`,word_count:246},{article:"116",title:"Votes on account, votes of credit and exceptional grants",description:`(1) Notwithstanding anything in the foregoing provisions of this Chapter, the House of the People shall have power —

 

(a) to make any grant in advance in respect of the estimated expenditure for a part of any financial year pending the completion of the procedure prescribed in article 113 for the voting of such grant and the passing of the law in accordance with the provisions of article 114 in relation to that expenditure;

 

(b) to make a grant for meeting an unexpected demand upon the resources of India when on account of the magnitude or the indefinite character of the service the demand cannot be stated with the details ordinarily given in an annual financial statement;

 

(c) to make an exceptional grant which forms no part of the current service of any financial year;

 

and Parliament shall have power to authorise by law the withdrawal of moneys from the Consolidated Fund of India for the purposes for which the said grants are made.

 

(2) The provisions of articles 113 and 114 shall have effect in relation to the making of any grant under clause (1) and to any law to be made under that clause as they have effect in relation to the making of a grant with regard to any expenditure mentioned in the annual financial statement and the law to be made for the authorisation of appropriation of moneys out of the Consolidated Fund of India to meet such expenditure.`,word_count:243},{article:"117",title:"Special provisions as to financial Bills",description:`(1) A Bill or amendment making provision for any of the matters specified in sub-clauses (a) to (f) of clause (1) of article 110 shall not be introduced or moved except on the recommendation of the President and a Bill making such provision shall not be introduced in the Council of States:

 

Provided that no recommendation shall be required under this clause for the moving of an amendment making provision for the reduction or abolition of any tax.

 

(2) A Bill or amendment shall not be deemed to make provision for any of the matters aforesaid by reason only that it provides for the imposition of fines or other pecuniary penalties, or for the demand or payment of fees for licences or fees for services rendered, or by reason that it provides for the imposition, abolition, remission, alteration or regulation of any tax by any local authority or body for local purposes.

 

(3) A Bill which, if enacted and brought into operation, would involve expenditure from the Consolidated Fund of India shall not be passed by either House of Parliament unless the President has recommended to that House the consideration of the Bill.`,word_count:193},{article:"118",title:"Rules of procedure",description:`(1) Each House of Parliament may make rules for regulating, subject to the provisions of this Constitution, its procedure and the conduct of its business.

 

(2) Until rules are made under clause (1), the rules of procedure and standing orders in force immediately before the commencement of this Constitution with respect to the Legislature of the Dominion of India shall have effect in relation to Parliament subject to such modifications and adaptations as may be made therein by the Chairman of the Council of States or the Speaker of the House of the People, as the case may be.

 

(3) The President, after consultation with the Chairman of the Council of States and the Speaker of the House of the People, may make rules as to the procedure with respect to joint sittings of, and communications between, the two Houses.

 

(4) At a joint sitting of the two Houses the Speaker of the House of the People, or in his absence such person as may be determined by rules of procedure made under clause (3), shall preside.`,word_count:177},{article:"119",title:"Regulation by law of procedure in Parliament in relation to financial business",description:"Parliament may, for the purpose of the timely completion of financial business, regulate by law the procedure of, and the conduct of business in, each House of Parliament in relation to any financial matter or to any Bill for the appropriation of moneys out of the Consolidated Fund of India, and, if and so far as any provision of any law so made is inconsistent with any rule made by a House of Parliament under clause (1) of article 118 or with any rule or standing order having effect in relation to Parliament under clause (2) of that article, such provision shall prevail.",word_count:103},{article:"120",title:"Language to be used in Parliament",description:`(1) Notwithstanding anything in Part XVII, but subject to the provisions of article 348, business in Parliament shall be transacted in Hindi or in English:

 

       Provided that the Chairman of the Council of States or Speaker of the House of the People, or person acting as such, as the case may be, may permit any member who cannot adequately express himself in Hindi or in English to address the House in his mother-tongue.

 

(2) Unless Parliament by law otherwise provides, this article shall, after the expiration of a period of fifteen years from the commencement of this Constitution, have effect as if the words "or in English" were omitted therefrom.`,word_count:110},{article:"121",title:"Restriction on discussion in Parliament",description:"No discussion shall take place in Parliament with respect to the conduct of any Judge of the Supreme Court or of a High Court in the discharge of his duties except upon a motion for presenting an address to the President praying for the removal of the Judge as hereinafter provided.",word_count:51},{article:"122",title:"Courts not to inquire into proceedings of Parliament",description:`(1) The validity of any proceedings in Parliament shall not be called in question on the ground of any alleged irregularity of procedure.

 

(2) No officer or member of Parliament in whom powers are vested by or under this Constitution for regulating procedure or the conduct of business, or for maintaining order, in Parliament shall be subject to the jurisdiction of any court in respect of the exercise by him of those powers.`,word_count:73},{article:"123",title:"Power of President to promulgate Ordinances during recess of Parliament",description:`(1) If at any time, except when both Houses of Parliament are in session, the President is satisfied that circumstances exist which render it necessary for him to take immediate action, he may promulgate such Ordinances as the circumstances appear to him to require.

 

(2) An Ordinance promulgated under this article shall have the same force and effect as an Act of Parliament, but every such Ordinance —

 

(a) shall be laid before both Houses of Parliament and shall cease to operate at the expiration of six weeks from the reassembly of Parliament, or, if before the expiration of that period resolutions disapproving it are passed by both Houses, upon the passing of the second of those resolutions; and

 

(b) may be withdrawn at any time by the President.

 

      Explanation.—Where the Houses of Parliament are summoned to reassemble on different dates, the period of six weeks shall be reckoned from the later of those dates for the purposes of this clause.

 

(3) If and so far as an Ordinance under this article makes any provision which Parliament would not under this Constitution be competent to enact, it shall be void.`,word_count:190},{article:"124",title:"Establishment and constitution of Supreme Court",description:`(1) There shall be a Supreme Court of India consisting of a Chief Justice of India and, until Parliament by law prescribes a larger number, of not more than seven other Judges.

 

(2) Every Judge of the Supreme Court shall be appointed by the President by warrant under his hand and seal after consultation with such of the Judges of the Supreme Court and of the High Courts in the States as the President may deem necessary for the purpose and shall hold office until he attains the age of sixty-five years:

 

     Provided that in the case of appointment of a Judge other than the Chief Justice, the Chief Justice of India shall always be consulted:

 

Provided further that — 

(a) a Judge may, by writing under his hand addressed to the President, resign his office;

 

(b) a Judge may be removed from his office in the manner provided in clause (4).

 

(2A) The age of a Judge of the Supreme Court shall be determined by such authority and in such manner as Parliament may by law provide.

 

(3) A person shall not be qualified for appointment as a Judge of the Supreme Court unless he is a citizen of India and —

 

(a) has been for at least five years a Judge of a High Court or of two or more such Courts in succession; or

 

(b) has been for at least ten years an advocate of a High Court or of two or more such Courts in succession; or

 

(c) is, in the opinion of the President, a distinguished jurist.

 

Explanation I.—In this clause "High Court'' means a High Court which exercises, or which at any time before the commencement of this Constitution exercised, jurisdiction in any part of the territory of India.

 

Explanation II.—In computing for the purpose of this clause the period during which a person has been an advocate, any period during which a person has held judicial office not inferior to that of a district judge after he became an advocate shall be included.

 

(4) A Judge of the Supreme Court shall not be removed from his office except by an order of the President passed after an address by each House of Parliament supported by a majority of the total membership of that House and by a majority of not less than two - thirds of the members of that House present and voting has been presented to the President in the same session for such removal on the ground of proved misbehaviour or incapacity.

 

(5) Parliament may by law regulate the procedure for the presentation of an address and for the investigation and proof of the misbehaviour or incapacity of a Judge under clause (4).

 

(6) Every person appointed to be a Judge of the Supreme Court shall, before he enters upon his office, make and subscribe before the President, or some person appointed in that behalf by him, an oath or affirmation according to the form set out for the purpose in the Third Schedule.

 

(7) No person who has held office as a Judge of the Supreme Court shall plead or act in any court or before any authority within the territory of India.`,word_count:534},{article:"125",title:"Salaries, etc, of Judges",description:`(1) There shall be paid to the Judges of the Supreme Court such salaries as may be determined by Parliament by law and, until provision in that behalf is so made, such salaries as are specified in the Second Schedule.

 

(2) Every Judge shall be entitled to such privileges and allowances and to such rights in respect of leave of absence and pension as may from time to time be determined by or under law made by Parliament and, until so determined, to such privileges, allowances and rights as are specified in the Second Schedule:

 

     Provided that neither the privileges nor the allowances of a Judge nor his rights in respect of leave of absence or pension shall be varied to his disadvantage after his appointment.`,word_count:126},{article:"126",title:"Appointment of acting Chief Justice",description:"When the office of Chief Justice of India is vacant or when the Chief Justice is, by reason of absence or otherwise, unable to perform the duties of his office, the duties of the office shall be performed by such one of the other Judges of the Court as the President may appoint for the purpose.",word_count:56},{article:"127",title:"Appointment of ad hoc Judges",description:`(1) If at any time there should not be a quorum of the Judges of the Supreme Court available to hold or continue any session of the Court, the Chief Justice of India may, with the previous consent of the President and after consultation with the Chief Justice of the High Court concerned, request in writing the attendance at the sittings of the Court, as an ad hoc Judge, for such period as may be necessary, of a Judge of a High Court duly qualified for appointment as a Judge of the Supreme Court to be designated by the Chief Justice of India.   

 

(2) It shall be the duty of the Judge who has been so designated, in priority to other duties of his office, to attend the sittings of the Supreme Court at the time and for the period for which his attendance is required, and while so attending he shall have all the jurisdiction, powers and privileges, and shall discharge the duties, of a Judge of the Supreme Court.`,word_count:171},{article:"128",title:"Attendance of retired Judges at sittings of the Supreme Court",description:`Notwithstanding anything in this Chapter, the Chief Justice of India may at any time, with the previous consent of the President, request any person who has held the office of a Judge of the Supreme Court or of the Federal Court or who has held the office of a Judge of a High Court and is duly qualified for appointment as a Judge of the Supreme Court] to sit and act as a Judge of the Supreme Court, and every such person so requested shall, while so sitting and acting, be entitled to such allowances as the President may by order determine and have all the jurisdiction, powers and privileges of, but shall not otherwise be deemed to be, a Judge of that Court:

 

    Provided that nothing in this article shall be deemed to require any such person as aforesaid to sit and act as a Judge of that Court unless he consents so to do.`,word_count:156},{article:"129",title:"Supreme Court to be a court of record",description:"The Supreme Court shall be a court of record and shall have all the powers of such a court including the power to punish for contempt of itself.",word_count:28},{article:"130",title:"Seat of Supreme Court",description:"The Supreme Court shall sit in Delhi or in such other place or places, as the Chief Justice of India may, with the approval of the President, from time to time, appoint.",word_count:32},{article:"131",title:"Original jurisdiction of the Supreme Court",description:`Subject to the provisions of this Constitution, the Supreme Court shall, to the exclusion of any other court, have original jurisdiction in any dispute —

 

(a) between the Government of India and one or more States; or

 

(b) between the Government of India and any State or States on one side and one or more other States on the other; or

 

 (c) between two or more States, if and in so far as the dispute involves any question (whether of law or fact) on which the existence or extent of a legal right depends:

 

       Provided that the said jurisdiction shall not extend to a dispute arising out of any treaty, agreement, covenant, engagement, sanad or other similar instrument which, having been entered into or executed before the commencement of this Constitution, continues in operation after such commencement, or which provides that the said jurisdiction shall not extend to such a dispute.`,word_count:151},{article:"132",title:"Appellate jurisdiction of Supreme Court in appeals from High Courts in certain cases",description:`(1) An appeal shall lie to the Supreme Court from any judgment, decree or final order of a High Court in the territory of India, whether in a civil, criminal or other proceeding, if the High Court certifies under article 134A that the case involves a substantial question of law as to the interpretation of this Constitution.

 

(3) Where such a certificate is given, any party in the case may appeal to the Supreme Court on the ground that any such question as aforesaid has been wrongly decided.

 

Explanation.—For the purposes of this article, the expression “final order” includes an order deciding an issue which, if decided in favour of the appellant, would be sufficient for the final disposal of the case.`,word_count:122},{article:"133",title:"Appellate jurisdiction of Supreme Court in appeals from High Courts in regard to civil matters",description:`(1) An appeal shall lie to the Supreme Court from any judgment, decree or final order in a civil proceeding of a High Court in the territory of India if the High Court certifies under article 134A—

 

(a) that the case involves a substantial question of law of general importance; and

 

(b) that in the opinion of the High Court the said question needs to be decided by the Supreme Court.

 

(2) Notwithstanding anything in article 132, any party appealing to the Supreme Court under clause (1) may urge as one of the grounds in such appeal that a substantial question of law as to the interpretation of this Constitution has been wrongly decided.

 

(3) Notwithstanding anything in this article, no appeal shall, unless Parliament by law otherwise provides, lie to the Supreme Court from the judgment, decree or final order of one Judge of a High Court.`,word_count:148},{article:"134",title:"Appellate jurisdiction of Supreme Court in regard to criminal matters",description:`(1) An appeal shall lie to the Supreme Court from any judgment, final order or sentence in a criminal proceeding of a High Court in the territory of India if the High Court —

 

(a) has on appeal reversed an order of acquittal of an accused person and sentenced him to death; or

 

(b) has withdrawn for trial before itself any case from any court subordinate to its authority and has in such trial convicted the accused person and sentenced him to death; or

 

(c) certifies under article 134A] that the case is a fit one for appeal to the Supreme Court:

 

Provided that an appeal under sub-clause (c) shall lie subject to such provisions as may be made in that behalf under clause (1) of article 145 and to such conditions as the High Court may establish or require.

 

(2) Parliament may by law confer on the Supreme Court any further powers to entertain and hear appeals from any judgment, final order or sentence in a criminal proceeding of a High Court in the territory of India subject to such conditions and limitations as may be specified in such law.`,word_count:191},{article:"135",title:"Jurisdiction and powers of the Federal Court under existing law to be exercisable by the Supreme Court",description:"Until Parliament by law otherwise provides, the Supreme Court shall also have jurisdiction and powers with respect to any matter to which the provisions of article 133 or article 134 do not apply if jurisdiction and powers in relation to that matter were exercisable by the Federal Court immediately before the commencement of this Constitution under any existing law.",word_count:59},{article:"136",title:"Special leave to appeal by the Supreme Court",description:`(1) Notwithstanding anything in this Chapter, the Supreme Court may, in its discretion, grant special leave to appeal from any judgment, decree, determination, sentence or order in any cause or matter passed or made by any court or tribunal in the territory of India.

 

(2) Nothing in clause (1) shall apply to any judgment, determination, sentence or order passed or made by any court or tribunal constituted by or under any law relating to the Armed Forces.`,word_count:77},{article:"137",title:"Review of judgments or orders by the Supreme Court",description:"Subject to the provisions of any law made by Parliament or any rules made under article 145, the Supreme Court shall have power to review any judgment pronounced or order made by it.",word_count:33},{article:"138",title:"Enlargement of the jurisdiction of the Supreme Court",description:`(1) The Supreme Court shall have such further jurisdiction and powers with respect to any of the matters in the Union List as Parliament may by law confer.

 

(2) The Supreme Court shall have such further jurisdiction and powers with respect to any matter as the Government of India and the Government of any State may by special agreement confer, if Parliament by law provides for the exercise of such jurisdiction and powers by the Supreme Court.`,word_count:77},{article:"139",title:"Conferment on the Supreme Court of powers to issue certain writs",description:"Parliament may by law confer on the Supreme Court power to issue directions, orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, or any of them, for any purposes other than those mentioned in clause (2) of article 32.",word_count:47},{article:"140",title:"Ancillary powers of Supreme Court",description:"Parliament may by law make provision for conferring upon the Supreme Court such supplemental powers not inconsistent with any of the provisions of this Constitution as may appear to be necessary or desirable for the purpose of enabling the Court more effectively to exercise the jurisdiction conferred upon it by or under this Constitution.",word_count:54},{article:"141",title:"Law declared by Supreme Court to be binding on all courts",description:"The law declared by the Supreme Court shall be binding on all courts within the territory of India.",word_count:18},{article:"142",title:"Enforcement of decrees and orders of Supreme Court and orders as to discovery, etc",description:`(1) The Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it, and any decree so passed order so made shall be enforceable throughout the territory of India in such manner as may be prescribed by or under any law made by Parliament and, until provision in that behalf is so made, in such manner as the President may by order prescribe.

 

(2) Subject to the provisions of any law made in this behalf by Parliament, the Supreme Court shall, as respects the whole of the territory of India, have all and every power to make any order for the purpose of securing the attendance of any person, the discovery or production of any documents, or the investigation or punishment of any contempt of itself.`,word_count:146},{article:"143",title:"Power of President to consult Supreme Court",description:`(1) If at any time it appears to the President that a question of law or fact has arisen, or is likely to arise, which is of such a nature and of such public importance that it is expedient to obtain the opinion of the Supreme Court upon it, he may refer the question to that Court for consideration and the Court may, after such hearing as it thinks fit, report to the President its opinion thereon.

 

(2) The President may, notwithstanding anything in the proviso to article 131, refer a dispute of the kind mentioned in the said proviso to the Supreme Court for opinion and the Supreme Court shall, after such hearing as it thinks fit, report to the President its opinion thereon.`,word_count:125},{article:"144",title:"Civil and judicial authorities to act in aid of the Supreme Court",description:"All authorities, civil and judicial, in the territory of India shall act in aid of the Supreme Court.",word_count:18},{article:"145",title:"Rules of Court, etc",description:`(1) Subject to the provisions of any law made by Parliament, the Supreme Court may from time to time, with the approval of the President, make rules for regulating generally the practice and procedure of the Court including —

 

(a) rules as to the persons practising before the Court;

 

(b) rules as to the procedure for hearing appeals and other matters pertaining to appeals including the time within which appeals to the Court are to be entered;

 

(c) rules as to the proceedings in the Court for the enforcement of any of the rights conferred by Part III;

 

(cc) rules as to the proceedings in the Court under article 139A;

 

(d) rules as to the entertainment of appeals under sub-clause (c) of clause (1) of article 134;

 

(e) rules as to the conditions subject to which any judgment pronounced or order made by the Court may be reviewed and the procedure for such review including the time within which applications to the Court for such review are to be entered;

 

(f) rules as to the costs of and incidental to any proceedings in the Court and as to the fees to be charged in respect of proceedings therein;

 

(g) rules as to the granting of bail;

 

(h) rules as to stay of proceedings;

 

(i) rules providing for the summary determination of any appeal which appears to the Court to be frivolous or vexatious or brought for the purpose of delay;

 

(j) rules as to the procedure for inquiries referred to in clause (1) of article 317.

 

(2) Subject to the provisions of clause (3), rules made under this article may fix the minimum number of Judges who are to sit for any purpose, and may provide for the powers of single Judges and Division Courts.

 

(3)The minimum number] of Judges who are to sit for the purpose of deciding any case involving a substantial question of law as to the interpretation of this Constitution or for the purpose of hearing any reference under article 143 shall be five:

 

              Provided that, where the Court hearing an appeal under any of the provisions of this Chapter other than article 132 consists of less than five Judges and in the course of the hearing of the appeal the Court is satisfied that the appeal involves a substantial question of law as to the interpretation of this Constitution the determination of which is necessary for the disposal of the appeal, such Court shall refer the question for opinion to a Court constituted as required by this clause for the purpose of deciding any case involving such a question and shall on receipt of the opinion dispose of the appeal in conformity with such opinion.

 

(4) No judgment shall be delivered by the Supreme Court save in open Court, and no report shall be made under article 143 save in accordance with an opinion also delivered in open Court.

 

(5) No judgment and no such opinion shall be delivered by the Supreme Court save with the concurrence of a majority of the Judges present at the hearing of the case, but nothing in this clause shall be deemed to prevent a Judge who does not concur from delivering a dissenting judgment or opinion.`,word_count:538},{article:"146",title:"Officers and servants and the expenses of the Supreme Court",description:`(1) Appointments of officers and servants of the Supreme Court shall be made by the Chief Justice of India or such other Judge or officer of the Court as he may direct:

 

      Provided that the President may by rule require that in such cases as may be specified in the rule, no person not already attached to the Court shall be appointed to any office connected with the Court, save after consultation with the Union Public Service Commission.

 

(2) Subject to the provisions of any law made by Parliament, the conditions of service of officers and servants of the Supreme Court shall be such as may be prescribed by rules made by the Chief Justice of India or by some other Judge or officer of the Court authorised by the Chief Justice of India to make rules for the purpose:

 

     Provided that the rules made under this clause shall, so far as they relate to salaries, allowances, leave or pensions, require the approval of the President.

 

(3) The administrative expenses of the Supreme Court, including all salaries, allowances and pensions payable to or in respect of the officers and servants of the Court, shall be charged upon the Consolidated Fund of India, and any fees or other moneys taken by the Court shall form part of that Fund.`,word_count:218},{article:"147",title:"Interpretation",description:"In this Chapter and in Chapter V of Part VI, references to any substantial question of law as to the interpretation of this Constitution shall be construed as including references to any substantial question of law as to the interpretation of the Government of India Act, 1935 (including any enactment amending or supplementing that Act), or of any Order in Council or order made thereunder, or of the Indian Independence Act, 1947, or of any order made thereunder.",word_count:78},{article:"148",title:"Comptroller and Auditor-General of India",description:`(1) There shall be a Comptroller and Auditor-General of India who shall be appointed by the President by warrant under his hand and seal and shall only be removed from office in like manner and on the like grounds as a Judge of the Supreme Court.

 

(2) Every person appointed to be the Comptroller and Auditor-General of India shall, before he enters upon his office, make and subscribe before the President, or some person appointed in that behalf by him, an oath or affirmation according to the form set out for the purpose in the Third Schedule.

 

(3) The salary and other conditions of service of the Comptroller and Auditor-General shall be such as may be determined by Parliament by law and, until they are so determined, shall be as specified in the Second Schedule:

 

    Provided that neither the salary of a Comptroller and Auditor-General nor his rights in respect of leave of absence, pension or age of retirement shall be varied to his disadvantage after his appointment.

 

(4) The Comptroller and Auditor-General shall not be eligible for further office either under the Government of India or under the Government of any State after he has ceased to hold his office.

 

(5) Subject to the provisions of this Constitution and of any law made by Parliament, the conditions of service of persons serving in the Indian Audit and Accounts Department and the administrative powers of the Comptroller and Auditor-General shall be such as may be prescribed by rules made by the President after consultation with the Comptroller and Auditor-General.

 

(6) The administrative expenses of the office of the Comptroller and Auditor-General, including all salaries, allowances and pensions payable to or in respect of the persons serving in that office, shall be charged upon the Consolidated Fund of India.`,word_count:298},{article:"149",title:"Duties and powers of the Comptroller and Auditor-General",description:"The Comptroller and Auditor-General shall perform such duties and exercise such powers in relation to the accounts of the Union and of the States and of any other authority or body as may be prescribed by or under any law made by Parliament and, until provision in that behalf is so made, shall perform such duties and exercise such powers in relation to the accounts of the Union and of the States as were conferred on or exercisable by the Auditor-General of India immediately before the commencement of this Constitution in relation to the accounts of the Dominion of India and of the Provinces respectively",word_count:105},{article:"150",title:"Form of accounts of the Union and of the States",description:"The accounts of the Union and of the States shall be kept in such form as the President may, on the advice of the Comptroller and Auditor-General of India, prescribe.",word_count:30},{article:"151",title:"Audit reports",description:`(1) The reports of the Comptroller and Auditor-General of India relating to the accounts of the Union shall be submitted to the President, who shall cause them to be laid before each House of Parliament.

 

(2) The reports of the Comptroller and Auditor-General of India relating to the accounts of a State shall be submitted to the Governor of the State, who shall cause them to be laid before the Legislature of the State.`,word_count:74},{article:"134A",title:"Certificate for appeal to the Supreme Court",description:`Every High Court, passing or making a judgment, decree, final order, or sentence, referred to in clause (1) of article 132 or clause (1) of article 133, or clause (1) of article 134, —

 

(a) may, if it deems fit so to do, on its own motion; and

 

(b) shall, if an oral application is made, by or on behalf of the party aggrieved, immediately after the passing or making of such judgment, decree, final order or sentence,

 

determine, as soon as may be after such passing or making, the question whether a certificate of the nature referred to in clause (1) of article 132, or clause (1) of article 133 or, as the case may be, sub-clause (c) of clause (1) of article 134, may be given in respect of that case.`,word_count:133},{article:"139A",title:"Transfer of certain cases",description:`(1) Where cases involving the same or substantially the same questions of law are pending before the Supreme Court and one or more High Courts or before two or more High Courts and the Supreme Court is satisfied on its own motion or on an application made by the Attorney-General of India or by a party to any such case that such questions are substantial questions of general importance, the Supreme Court may withdraw the case or cases pending before the High Court or the High Courts and dispose of all the cases itself:

 

          Provided that the Supreme Court may after determining the said questions of law return any case so withdrawn together with a copy of its judgment on such questions to the High Court from which the case has been withdrawn, and the High Court shall on receipt thereof, proceed to dispose of the case in conformity with such judgment.

 

(2) The Supreme Court may, if it deems it expedient so to do for the ends of justice, transfer any case, appeal or other proceedings pending before any High Court to any other High Court.`,word_count:187}]},{part:"Part VI: The States",part_number:"VI",article_count:87,word_count:12906,articles:[{article:"152",title:"Definition",description:"In this Part, unless the context otherwise requires, the expression “State” does not include the State of Jammu and Kashmir.",word_count:20},{article:"153",title:"Governors of States",description:`There shall be a Governor for each State:

 

Provided that nothing in this article shall prevent the appointment of the same person as Governor for two or more States.`,word_count:29},{article:"154",title:"Executive power of State",description:`(1) The executive power of the State shall be vested in the Governor and shall be exercised by him either directly or through officers subordinate to him in accordance with this Constitution.

 

(2) Nothing in this article shall —

 

(a) be deemed to transfer to the Governor any functions conferred by any existing law on any other authority; or

 

(b) prevent Parliament or the Legislature of the State from conferring by law functions on any authority subordinate to the Governor.`,word_count:80},{article:"155",title:"Appointment of Governor",description:"The Governor of a State shall be appointed by the President by warrant under his hand and seal.",word_count:18},{article:"156",title:"Term of office of Governor",description:`(1) The Governor shall hold office during the pleasure of the President.

 

(2) The Governor may, by writing under his hand addressed to the President, resign his office.

 

(3) Subject to the foregoing provisions of this article, a Governor shall hold office for a term of five years from the date on which he enters upon his office:

 

    Provided that a Governor shall, notwithstanding the expiration of his term, continue to hold office until his successor enters upon his office.`,word_count:80},{article:"157",title:"Qualifications for appointment as Governor",description:"No person shall be eligible for appointment as Governor unless he is a citizen of India and has completed the age of thirty-five years.",word_count:24},{article:"158",title:"Conditions of Governor's office",description:`(1) The Governor shall not be a member of either House of Parliament or of a House of the Legislature of any State specified in the First Schedule, and if a member of either House of Parliament or of a House of the Legislature of any such State be appointed Governor, he shall be deemed to have vacated his seat in that House on the date on which he enters upon his office as Governor.

 

(2) The Governor shall not hold any other office of profit.

 

(3) The Governor shall be entitled without payment of rent to the use of his official residences and shall be also entitled to such emoluments, allowances and privileges as may be determined by Parliament by law and, until provision in that behalf is so made, such emoluments, allowances and privileges as are specified in the Second Schedule. 

 

(3A) Where the same person is appointed as Governor of two or more States, the emoluments and allowances payable to the Governor shall be allocated among the States in such proportion as the President may by order determine.]

 

(4) The emoluments and allowances of the Governor shall not be diminished during his term of office.`,word_count:198},{article:"159",title:"Oath or affirmation by the Governor",description:`Every Governor and every person discharging the functions of the Governor shall, before entering upon his office, make and subscribe in the presence of the Chief Justice of the High Court exercising jurisdiction in relation to the State, or, in his absence, the seniormost Judge of that Court available, an oath or affirmation in the following form, that is to say —

 

 “I, A. B., do swear in the name of God that I will faithfully execute the office of Governor (or discharge the functions of the Governor) of .............(name of the State) and will to the best of my ability preserve,     protect  and defend the Constitution and the law and that I will devote myself to the service and well-being of the people of ..………(name of the State).”`,word_count:129},{article:"160",title:"Discharge of the functions of the Governor in certain contingencies",description:"The President may make such provision as he thinks fit for the discharge of the functions of the Governor of a State in any contingency not provided for in this Chapter.",word_count:31},{article:"161",title:"Power of Governor to grant pardons, etc, and to suspend, remit or commute sentences in certain cases",description:"The Governor of a State shall have the power to grant pardons, reprieves, respites or remissions of punishment or to suspend, remit or commute the sentence of any person convicted of any offence against any law relating to a matter to which the executive power of the State extends.",word_count:49},{article:"162",title:"Extent of executive power of State",description:`Subject to the provisions of this Constitution, the executive power of a State shall extend to the matters with respect to which the Legislature of the State has power to make laws:

 

   Provided that in any matter with respect to which the Legislature of a State and Parliament have power to make laws, the executive power of the State shall be subject to, and limited by, the executive power expressly conferred by this Constitution or by any law made by Parliament upon the Union or authorities thereof.`,word_count:87},{article:"163",title:"Council of Ministers to aid and advise Governor",description:`(1) There shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Governor in the exercise of his functions, except in so far as he is by or under this Constitution required to exercise his functions or any of them in his discretion.

 

(2) If any question arises whether any matter is or is not a matter as respects which the Governor is by or under this Constitution required to act in his discretion, the decision of the Governor in his discretion shall be final, and the validity of anything done by the Governor shall not be called in question on the ground that he ought or ought not to have acted in his discretion. 

 

(3) The question whether any, and if so what, advice was tendered by Ministers to the Governor shall not be inquired into in any court.`,word_count:148},{article:"164",title:"Other provisions as to Ministers",description:`(1) The Chief Minister shall be appointed by the Governor and the other Ministers shall be appointed by the Governor on the advice of the Chief Minister, and the Ministers shall hold office during the pleasure of the Governor:

 

   Provided that in the States of 1 [Chhattisgarh, Jharkhand], Madhya Pradesh and Orissa, there shall be a Minister in charge of tribal welfare who may in addition be in charge of the welfare of the Scheduled Castes and backward classes or any other work.

 

(1A) The total number of Ministers, including the Chief Minister, in the Council of Ministers in a State shall not exceed fifteen per cent. of the total number of members of the Legislative Assembly of that State: Provided that the number of Ministers, including the Chief Minister in a State shall not be less than twelve:

 

   Provided further that where the total number of Ministers including the Chief Minister in the Council of Ministers in any State at the commencement of the Constitution (Ninety-first Amendment) Act, 2003 exceeds the said fifteen per cent. or the number specified in the first proviso, as the case may be, then the total number of Ministers in that State shall be brought in conformity with the provisions of this clause within six months from such date as the President may by public notification appoint.

 

(1B) A member of the Legislative Assembly of a State or either House of the Legislature of a State having Legislative Council belonging to any political party who is disqualified for being a member of that House under paragraph 2 of the Tenth Schedule shall also be disqualified to be appointed as a Minister under clause (1) for duration of the period commencing from the date of his disqualification till the date on which the term of his office as such member would expire or where he contests any election to the Legislative Assembly of a State or either House of the Legislature of a State having Legislative Council, as the case may be, before the expiry of such period, till the date on which he is declared elected, whichever is earlier.

 

(2) The Council of Ministers shall be collectively responsible to the Legislative Assembly of the State.

 

(3) Before a Minister enters upon his office, the Governor shall administer to him the oaths of office and of secrecy according to the forms set out for the purpose in the Third Schedule.

 

(4) A Minister who for any period of six consecutive months is not a member of the Legislature of the State shall at the expiration of that period cease to be a Minister.

 

(5) The salaries and allowances of Ministers shall be such as the Legislature of the State may from time to time by law determine and, until the Legislature of the State so determines, shall be as specified in the Second Schedule.`,word_count:479},{article:"165",title:"Advocate-General for the State",description:`(1) The Governor of each State shall appoint a person who is qualified to be appointed a Judge of a High Court to be Advocate-General for the State.

 

(2) It shall be the duty of the Advocate-General to give advice to the Government of the State upon such legal matters, and to perform such other duties of a legal character, as may from time to time be referred or assigned to him by the Governor, and to discharge the functions conferred on him by or under this Constitution or any other law for the time being in force.

 

(3) The Advocate-General shall hold office during the pleasure of the Governor, and shall receive such remuneration as the Governor may determine.`,word_count:120},{article:"166",title:"Conduct of business of the Government of a State",description:`(1) All executive action of the Government of a State shall be expressed to be taken in the name of the Governor.

 

(2) Orders and other instruments made and executed in the name of the Governor shall be authenticated in such manner as may be specified in rules to be made by the Governor, and the validity of an order or instrument which is so authenticated shall not be called in question on the ground that it is not an order or instrument made or executed by the Governor.

 

(3) The Governor shall make rules for the more convenient transaction of the business of the Government of the State, and for the allocation among Ministers of the said business in so far as it is not business with respect to which the Governor is by or under this Constitution required to act in his discretion.`,word_count:145},{article:"167",title:"Duties of Chief Minister as respects the furnishing of information to Governor, etc",description:`It shall be the duty of the Chief Minister of each State —

 

(a) to communicate to the Governor of the State all decisions of the Council of Ministers relating to the administration of the affairs of the State and proposals for legislation;

 

(b) to furnish such information relating to the administration of the affairs of the State and proposals for legislation as the Governor may call for; and

 

(c) if the Governor so requires, to submit for the consideration of the Council of Ministers any matter on which a decision has been taken by a Minister but which has not been considered by the Council.`,word_count:106},{article:"168",title:"Constitution of Legislatures in States",description:`(1) For every State there shall be a Legislature which shall consist of the Governor, and —

 

(a) in the States of Andhra Pradesh, Bihar, Madhya Pradesh, Maharashtra, Karnataka, and Uttar Pradesh, two Houses;

 

(b) in other States, one House.

 

(2) Where there are two Houses of the Legislature of a State, one shall be known as the Legislative Council and the other as the Legislative Assembly, and where there is only one House, it shall be known as the Legislative Assembly.`,word_count:82},{article:"169",title:"Abolition or creation of Legislative Councils in States",description:`(1) Notwithstanding anything in article 168, Parliament may by law provide for the abolition of the Legislative Council of a State having such a Council or for the creation of such a Council in a State having no such Council, if the Legislative Assembly of the State passes a resolution to that effect by a majority of the total membership of the Assembly and by a majority of not less than two-thirds of the members of the Assembly present and voting.

 

(2) Any law referred to in clause (1) shall contain such provisions for the amendment of this Constitution as may be necessary to give effect to the provisions of the law and may also contain such supplemental, incidental and consequential provisions as Parliament may deem necessary.

 

(3) No such law as aforesaid shall be deemed to be an amendment of this Constitution for the purposes of article 368.`,word_count:149},{article:"170",title:"Composition of the Legislative Assemblies",description:`(1) Subject to the provisions of article 333, the Legislative Assembly of each State shall consist of not more than five hundred, and not less than sixty, members chosen by direct election from territorial constituencies in the State.

 

(2) For the purposes of clause (1), each State shall be divided into territorial constituencies in such manner that the ratio between the population of each constituency and the number of seats allotted to it shall, so far as practicable, be the same throughout the State.

Explanation.—In this clause, the expression “population” means the population as ascertained at the last preceding census of which the relevant figures have been published:

Provided that the reference in this Explanation to the last preceding census of which the relevant figures have been published published shall, until the relevant figures for the first census taken after the year 2026 have been published, be construed as a reference to the 2001 census. 

 

(3) Upon the completion of each census, the total number of seats in the Legislative Assembly of each State and the division of each State into territorial constituencies shall be readjusted by such authority and in such manner as Parliament may by law determine:

Provided that such readjustment shall not affect representation in the Legislative Assembly until the dissolution of the then existing Assembly: 

Provided further that such readjustment shall take effect from such date as the President may, by order, specify and until such readjustment takes effect, any election to the Legislative Assembly may be held on the basis of the territorial constituencies existing before such readjustment:

Provided also that until the relevant figures for the first census taken after the year 2026 have been published, it shall not be necessary to readjust— (i) the total number of seats in the Legislative Assembly of each State as readjusted on the basis of the 1971 census; and (ii) the division of such State into territorial constituencies as may be readjusted on the basis of the 2001 census, under this clause.`,word_count:335},{article:"171",title:"Composition of the Legislative Councils",description:`(1) The total number of members in the Legislative Council of a State having such a Council shall not exceed one-third of the total number of members in the Legislative Assembly of that State:

 

   Provided that the total number of members in the Legislative Council of a State shall in no case be less than forty.

 

(2) Until Parliament by law otherwise provides, the composition of the Legislative Council of a State shall be as provided in clause (3).

 

(3) Of the total number of members of the Legislative Council of a State —

 

(a) as nearly as may be, one-third shall be elected by electorates consisting of members of municipalities, district boards and such other local authorities in the State as Parliament may by law specify;

 

(b) as nearly as may be, one-twelfth shall be elected by electorates consisting of persons residing in the State who have been for at least three years graduates of any university in the territory of India or have been for at least three years in possession of qualifications prescribed by or under any law made by Parliament as equivalent to that of a graduate of any such university;

 

(c) as nearly as may be, one-twelfth shall be elected by electorates consisting of persons who have been for at least three years engaged in teaching in such educational institutions within the State, not lower in standard than that of a secondary school, as may be prescribed by or under any law made by Parliament;

 

(d) as nearly as may be, one-third shall be elected by the members of the Legislative Assembly of the State from amongst persons who are not members of the Assembly;

 

(e) the remainder shall be nominated by the Governor in accordance with the provisions of clause (5).

 

(4) The members to be elected under sub-clauses ( a), ( b) and ( c) of clause (3) shall be chosen in such territorial constituencies as may be prescribed by or under any law made by Parliament, and the elections under the said sub-clauses and under sub-clause ( d) of the said clause shall be held in accordance with the system of proportional representation by means of the single transferable vote.

 

(5) The members to be nominated by the Governor under sub-clause ( e) of clause (3) shall consist of persons having special knowledge or practical experience in respect of such matters as the following, namely: — Literature, science, art, co-operative movement and social service.`,word_count:412},{article:"172",title:"Duration of State Legislatures",description:`(1) Every Legislative Assembly of every State, unless sooner dissolved, shall continue for five years from the date appointed for its first meeting and no longer and the expiration of the said period of 1 [five years] shall operate as a dissolution of the Assembly: Provided that the said period may, while a Proclamation of Emergency is in operation, be extended by Parliament by law for a period not exceeding one year at a time and not extending in any case beyond a period of six months after the Proclamation has ceased to operate.

 

(2) The Legislative Council of a State shall not be subject to dissolution, but as nearly as possible one-third of the members thereof shall retire as soon as may be on the expiration of every second year in accordance with the provisions made in that behalf by Parliament by law.`,word_count:144},{article:"173",title:"Qualification for membership of the State Legislature",description:`A person shall not be qualified to be chosen to fill a seat in the Legislature of a State unless he —

 

(a) is a citizen of India, and makes and subscribes before some person authorised in that behalf by the Election Commission an oath or affirmation according to the form set out for the purpose in the Third Schedule; 

 

(b) is, in the case of a seat in the Legislative Assembly, not less than twenty-five years of age and, in the case of a seat in the Legislative Council, not less than thirty years of age; and

 

(c) possesses such other qualifications as may be prescribed in that behalf by or under any law made by Parliament.`,word_count:118},{article:"174",title:"Sessions of the State Legislature, prorogation and dissolution",description:`(1) The Governor shall from time to time summon the House or each House of the Legislature of the State to meet at such time and place as he thinks fit, but six months shall not intervene between its last sitting in one session and the date appointed for its first sitting in the next session.

 

(2) The Governor may from time to time —

 

(a) prorogue the House or either House;

 

(b) dissolve the Legislative Assembly.`,word_count:77},{article:"175",title:"Right of Governor to address and send messages to the House or Houses",description:`(1) The Governor may address the Legislative Assembly or, in the case of a State having a Legislative Council, either House of the Legislature of the State, or both Houses assembled together, and may for that purpose require the attendance of members.

 

(2) The Governor may send messages to the House or Houses of the Legislature of the State, whether with respect to a Bill then pending in the Legislature or otherwise, and a House to which any message is so sent shall with all convenient despatch consider any matter required by the message to be taken into consideration.`,word_count:99},{article:"176",title:"Special address by the Governor",description:`(1) At the commencement of the first session after each general election to the Legislative Assembly and at the commencement of the first session of each year, the Governor shall address the Legislative Assembly or, in the case of a State having a Legislative Council, both Houses assembled together and inform the Legislature of the causes of its summons.

 

(2) Provision shall be made by the rules regulating the procedure of the House or either House for the allotment of time for discussion of the matters referred to in such address.`,word_count:91},{article:"177",title:"Rights of Ministers and Advocate General as respects the Houses",description:"Every Minister and the Advocate-General for a State shall have the right to speak in, and otherwise to take part in the proceedings of, the Legislative Assembly of the State or, in the case of a State having a Legislative Council, both Houses, and to speak in, and otherwise to take part in the proceedings of, any committee of the Legislature of which he may be named a member, but shall not, by virtue of this article, be entitled to vote.",word_count:81},{article:"178",title:"The Speaker and Deputy Speaker of the Legislative Assembly",description:"Every Legislative Assembly of a State shall, as soon as may be, choose two members of the Assembly to be respectively Speaker and Deputy Speaker thereof and, so often as the office of Speaker or Deputy Speaker becomes vacant, the Assembly shall choose another member to be Speaker or Deputy Speaker, as the case may be.",word_count:56},{article:"179",title:"Vacation and resignation of, and removal from, the offices of Speaker and Deputy Speaker",description:`A member holding office as Speaker or Deputy Speaker of an Assembly —

 

(a) shall vacate his office if he ceases to be a member of the Assembly;

 

(b) may at any time by writing under his hand addressed, if such member is the Speaker, to the Deputy Speaker, and if such member is the Deputy Speaker, to the Speaker, resign his office; and

 

(c) may be removed from his office by a resolution of the Assembly passed by a majority of all the then members of the Assembly:

 

    Provided that no resolution for the purpose of clause (c) shall be moved unless at least fourteen days' notice has been given of the intention to move the resolution:

 

    Provided further that, whenever the Assembly is dissolved, the Speaker shall not vacate his office until immediately before the first meeting of the Assembly after the dissolution.`,word_count:145},{article:"180",title:"Power of the Deputy Speaker or other person to perform the duties of the office of, or to act as, Speaker",description:`(1) While the office of Speaker is vacant, the duties of the office shall be performed by the Deputy Speaker or, if the office of Deputy Speaker is also vacant, by such member of the Assembly as the Governor may appoint for the purpose.

 

(2) During the absence of the Speaker from any sitting of the Assembly the Deputy Speaker or, if he is also absent, such person as may be determined by the rules of procedure of the Assembly, or, if no such person is present, such other person as may be determined by the Assembly, shall act as Speaker.`,word_count:101},{article:"181",title:"The Speaker or the Deputy Speaker not to preside while a resolution for his removal from office is under consideration",description:`(1) At any sitting of the Legislative Assembly, while any resolution for the removal of the Speaker from his office is under consideration, the Speaker, or while any resolution for the removal of the Deputy Speaker, from his office is under consideration, the Deputy Speaker, shall not, though he is present, preside, and the provisions of clause (2) of article 180 shall apply in relation to every such sitting as they apply in relation to a sitting from which the Speaker or, as the case may be, the Deputy Speaker, is absent.

 

(2) The Speaker shall have the right to speak in, and otherwise to take part in the proceedings of, the Legislative Assembly while any resolution for his removal from office is under consideration in the Assembly and shall, notwithstanding anything in article 189, be entitled to vote only in the first instance on such resolution or on any other matter during such proceedings but not in the case of an equality of votes.`,word_count:165},{article:"182",title:"The Chairman and Deputy Chairman of the Legislative Council",description:"The Legislative Council of every State having such Council shall, as soon as may be, choose two members of the Council to be respectively Chairman and Deputy Chairman thereof and, so often as the office of Chairman or Deputy Chairman becomes vacant, the Council shall choose another member to be Chairman or Deputy Chairman, as the case may be.",word_count:59},{article:"183",title:"Vacation and resignation of, and removal from, the offices of Chairman and Deputy Chairman",description:`A member holding office as Chairman or Deputy Chairman of a Legislative Council —

 

(a) shall vacate his office if he ceases to be a member of the Council;

 

(b) may at any time by writing under his hand addressed, if such member is the Chairman, to the Deputy Chairman, and if such member is the Deputy Chairman, to the Chairman, resign his office; and

 

(c) may be removed from his office by a resolution of the Council passed by a majority of all the then members of the Council:

 

   Provided that no resolution for the purpose of clause (c) shall be moved unless at least fourteen days' notice has been given of the intention to move the resolution.`,word_count:119},{article:"184",title:"Power of the Deputy Chairman or other person to perform the duties of the office of, or to act as, Chairman",description:`(1) While the office of Chairman is vacant, the duties of the office shall be performed by the Deputy Chairman or, if the office of Deputy Chairman is also vacant, by such member of the Council as the Governor may appoint for the purpose.

 

(2) During the absence of the Chairman from any sitting of the Council the Deputy Chairman or, if he is also absent, such person as may be determined by the rules of procedure of the Council, or, if no such person is present, such other person as may be determined by the Council, shall act as Chairman.`,word_count:101},{article:"185",title:"The Chairman or the Deputy Chairman not to preside while a resolution for his removal from office is under consideration",description:`(1) At any sitting of the Legislative Council, while any resolution for the removal of the Chairman from his office is under consideration, the Chairman, or while any resolution for the removal of the Deputy Chairman from his office is under consideration, the Deputy Chairman, shall not, though he is present, preside, and the provisions of clause (2) of article 184 shall apply in relation to every such sitting as they apply in relation to a sitting from which the Chairman or, as the case may be, the Deputy Chairman is absent.

 

(2) The Chairman shall have the right to speak in, and otherwise to take part in the proceedings of, the Legislative Council while any resolution for his removal from office is under consideration in the Council and shall, notwithstanding anything in article 189, be entitled to vote only in the first instance on such resolution or on any other matter during such proceedings but not in the case of an equality of votes.`,word_count:165},{article:"186",title:"Salaries and allowances of the Speaker and Deputy Speaker and the Chairman and Deputy Chairman",description:"There shall be paid to the Speaker and the Deputy Speaker of the Legislative Assembly, and to the Chairman and the Deputy Chairman of the Legislative Council, such salaries and allowances as may be respectively fixed by the Legislature of the State by law and, until provision in that behalf is so made, such salaries and allowances as are specified in the Second Schedule.",word_count:64},{article:"187",title:"Secretariat of State Legislature",description:`(1) The House or each House of the Legislature of a State shall have a separate secretarial staff: Provided that nothing in this clause shall, in the case of the Legislature of a State having a Legislative Council, be construed as preventing the creation of posts common to both Houses of such Legislature.

 

(2) The Legislature of a State may by law regulate the recruitment, and the conditions of service of persons appointed, to the secretarial staff of the House or Houses of the Legislature of the State.

 

(3) Until provision is made by the Legislature of the State under clause (2), the Governor may, after consultation with the Speaker of the Legislative Assembly or the Chairman of the Legislative Council, as the case may be, make rules regulating the recruitment, and the conditions of service of persons appointed, to the secretarial staff of the Assembly or the Council, and any rules so made shall have effect subject to the provisions of any law made under the said clause.`,word_count:169},{article:"188",title:"Oath or affirmation by members",description:"Every member of the Legislative Assembly or the Legislative Council of a State shall, before taking his seat, make and subscribe before the Governor, or some person appointed in that behalf by him, an oath or affirmation according to the form set out for the purpose in the Third Schedule.",word_count:50},{article:"189",title:"Voting in Houses, power of Houses to act notwithstanding vacancies and quorum",description:`(1) Save as otherwise provided in this Constitution, all questions at any sitting of a House of the Legislature of a State shall be determined by a majority of votes of the members present and voting, other than the Speaker or Chairman, or person acting as such. The Speaker or Chairman, or person acting as such, shall not vote in the first instance, but shall have and exercise a casting vote in the case of an equality of votes.

 

(2) A House of the Legislature of a State shall have power to act notwithstanding any vacancy in the membership thereof, and any proceedings in the Legislature of a State shall be valid notwithstanding that it is discovered subsequently that some person who was not entitled so to do sat or voted or otherwise took part in the proceedings.

 

(3) Until the Legislature of the State by law otherwise provides, the quorum to constitute a meeting of a House of the Legislature of a State shall be ten members or onetenth of the total number of members of the House, whichever is greater.

 

(4) If at any time during a meeting of the Legislative Assembly or the Legislative Council of a State there is no quorum, it shall be the duty of the Speaker or Chairman, or person acting as such, either to adjourn the House or to suspend the meeting until there is a quorum.`,word_count:235},{article:"190",title:"Vacation of seats",description:`(1) No person shall be a member of both Houses of the Legislature of a State and provision shall be made by the Legislature of the State by law for the vacation by a person who is chosen a member of both Houses of his seat in one house or the other.

 

(2) No person shall be a member of the Legislatures of two or more States specified in the First Schedule and if a person is chosen a member of the Legislatures of two or more such States, then, at the expiration of such period as may be specified in rules1 made by the President, that person's seat in the Legislatures of all such States shall become vacant, unless he has previously resigned his seat in the Legislatures of all but one of the States.

 

(3) If a member of a House of the Legislature of a State — 

 

(a) becomes subject to any of the disqualifications mentioned in clause (1) or clause (2) of article 191; or

 

(b) resigns his seat by writing under his hand addressed to the speaker or the Chairman, as the case may be, and his resignation is accepted by the Speaker or the Chairman, as the case may be, 

 

his seat shall thereupon become vacant:

 

   Provided that in the case of any resignation referred to in sub-clause (b), if from information received or otherwise and after making such inquiry as he thinks fit, the Speaker or the Chairman, as the case may be, is satisfied that such resignation is not voluntary or genuine, he shall not accept such resignation. 

 

(4) If for a period of sixty days a member of a House of the Legislature of a State is without permission of the House absent from all meetings thereof, the House may declare his seat vacant:

 

   Provided that in computing the said period of sixty days no account shall be taken of any period during which the House is prorogued or is adjourned for more than four consecutive days.`,word_count:336},{article:"191",title:"Disqualifications for membership",description:`(1) A person shall be disqualified for being chosen as, and for being, a member of the Legislative Assembly or Legislative Council of a State —

 

(a) if he holds any office of profit under the Government of India or the Government of any State specified in the First Schedule, other than an office declared by the Legislature of the State by law not to disqualify its holder;

 

(b) if he is of unsound mind and stands so declared by a competent court; 

 

(c) if he is an undischarged insolvent;

 

(d) if he is not a citizen of India, or has voluntarily acquired the citizenship of a foreign State, or is under any acknowledgment of allegiance or adherence to a foreign State;

 

(e) if he is so disqualified by or under any law made by Parliament.

 

   Explanation. — For the purposes of this clause, a person shall not be deemed to hold an office of profit under the Government of India or the Government of any State specified in the First Schedule by reason only that he is a Minister either for the Union or for such State.

 

(2) A person shall be disqualified for being a member of the Legislative Assembly or Legislative Council of a State if he is so disqualified under the Tenth Schedule.`,word_count:217},{article:"192",title:"Decision on questions as to disqualifications of members",description:`(1) If any question arises as to whether a member of a House of the Legislature of a State has become subject to any of the disqualifications mentioned in clause (1) of article 191, the question shall be referred for the decision of the Governor and his decision shall be final.

 

(2) Before giving any decision on any such question, the Governor shall obtain the opinion of the Election Commission and shall act according to such opinion.`,word_count:77},{article:"193",title:"Penalty for sitting and voting before making oath or affirmation under article 188 or when not qualified or when disqualified",description:"If a person sits or votes as a member of the Legislative Assembly or the Legislative Council of a State before he has complied with the requirements of article 188, or when he knows that he is not qualified or that he is disqualified for membership thereof, or that he is prohibited from so doing by the provisions of any law made by Parliament or the Legislature of the State, he shall be liable in respect of each day on which he so sits or votes to a penalty of five hundred rupees to be recovered as a debt due to the State.",word_count:103},{article:"194",title:"Powers, privileges, etc, of the Houses of Legislatures and of the members and committees thereof",description:`(1) Subject to the provisions of this Constitution and to the rules and standing orders regulating the procedure of the Legislature, there shall be freedom of speech in the Legislature of every State.

 

(2) No member of the Legislature of a State shall be liable to any proceedings in any court in respect of anything said or any vote given by him in the Legislature or any committee thereof, and no person shall be so liable in respect of the publication by or under the authority of a House of such a Legislature of any report, paper, votes or proceedings.

 

(3) In other respects, the powers, privileges and immunities of a House of the Legislature of a State, and of the members and the committees of a House of such Legislature, shall be such as may from time to time be defined by the Legislature by law, and, until so defined, shall be those of that House and of its members and committees immediately before the coming into force of section 26 of the Constitution (Forty-fourth Amendment) Act, 1978.

 

(4) The provisions of clauses (1), (2) and (3) shall apply in relation to persons who by virtue of this Constitution have the right to speak in, and otherwise to take part in the proceedings of, a House of the Legislature of a State or any committee thereof as they apply in relation to members of that Legislature.`,word_count:237},{article:"195",title:"Salaries and allowances of members",description:"Members of the Legislative Assembly and the Legislative Council of a State shall be entitled to receive such salaries and allowances as may from time to time be determined, by the Legislature of the State by law and, until provision in that respect is so made, salaries and allowances at such rates and upon such conditions as were immediately before the commencement of this Constitution applicable in the case of members of the Legislative Assembly of the corresponding Province.",word_count:79},{article:"196",title:"Provisions as to introduction and passing of Bills",description:`(1) Subject to the provisions of articles 198 and 207 with respect to Money Bills and other financial Bills, a Bill may originate in either House of the Legislature of a State which has a Legislative Council.

 

(2) Subject to the provisions of articles 197 and 198, a Bill shall not be deemed to have been passed by the Houses of the Legislature of a State having a Legislative Council unless it has been agreed to by both Houses, either without amendment or with such amendments only as are agreed to by both Houses.

 

(3) A Bill pending in the Legislature of a State shall not lapse by reason of the prorogation of the House or Houses thereof.

 

(4) A Bill pending in the Legislative Council of a State which has not been passed by the Legislative Assembly shall not lapse on a dissolution of the Assembly.

 

(5) A Bill which is pending in the Legislative Assembly of a State, or which having been passed by the Legislative Assembly is pending in the Legislative Council, shall lapse on a dissolution of the Assembly.`,word_count:183},{article:"197",title:"Restriction on powers of Legislative Council as to Bills other than Money Bills",description:`(1) If after a Bill has been passed by the Legislative Assembly of a State having a Legislative Council and transmitted to the Legislative Council —

 

(a) the Bill is rejected by the Council; or

 

(b) more than three months elapse from the date on which the Bill is laid before the Council without the Bill being passed by it; or

 

(c) the Bill is passed by the Council with amendments to which the Legislative Assembly does not agree;

 

the Legislative Assembly may, subject to the rules regulating its procedure, pass the Bill again in the same or in any subsequent session with or without such amendments, if any, as have been made, suggested or agreed to by the Legislative Council and then transmit the Bill as so passed to the Legislative Council.

 

(2) If after a Bill has been so passed for the second time by the Legislative Assembly and transmitted to the Legislative Council —

 

(a) the Bill is rejected by the Council; or

 

(b) more than one month elapses from the date on which the Bill is laid before the Council without the Bill being passed by it; or

 

(c) the Bill is passed by the Council with amendments to which the Legislative Assembly does not agree;

 

the Bill shall be deemed to have been passed by the Houses of the Legislature of the State in the form in which it was passed by the Legislative Assembly for the second time with such amendments, if any, as have been made or suggested by the Legislative Council and agreed to by the Legislative Assembly.

 

(3) Nothing in this article shall apply to a Money Bill.`,word_count:277},{article:"198",title:"Special procedure in respect of Money Bills",description:`(1) A Money Bill shall not be introduced in a Legislative Council.

 

(2) After a Money Bill has been passed by the Legislative Assembly of a State having a Legislative Council, it shall be transmitted to the Legislative Council for its recommendations, and the Legislative Council shall within a period of fourteen days from the date of its receipt of the Bill return the Bill to the Legislative Assembly with its recommendations, and the Legislative Assembly may thereupon either accept or reject all or any of the recommendations of the Legislative Council.

 

(3) If the Legislative Assembly accepts any of the recommendations of the Legislative Council, the Money Bill shall be deemed to have been passed by both Houses with the amendments recommended by the Legislative Council and accepted by the Legislative Assembly.

 

(4) If the Legislative Assembly does not accept any of the recommendations of the Legislative Council, the Money Bill shall be deemed to have been passed by both Houses in the form in which it was passed by the Legislative Assembly without any of the amendments recommended by the Legislative Council.

 

(5) If a Money Bill passed by the Legislative Assembly and transmitted to the Legislative Council for its recommendations is not returned to the Legislative Assembly within the said period of fourteen days, it shall be deemed to have been passed by both Houses at the expiration of the said period in the form in which it was passed by the Legislative Assembly.`,word_count:247},{article:"199",title:"Definition of “Money Bills”",description:`(1) For the purposes of this Chapter, a Bill shall be deemed to be a Money Bill if it contains only provisions dealing with all or any of the following matters, namely: —

 

(a) the imposition, abolition, remission, alteration or regulation of any tax;

 

(b) the regulation of the borrowing of money or the giving of any guarantee by the State, or the amendment of the law with respect to any financial obligations undertaken or to be undertaken by the State;

 

(c) the custody of the Consolidated Fund or the Contingency Fund of the State, the payment of moneys into or the withdrawal of moneys from any such Fund;

 

(d) the appropriation of moneys out of the Consolidated Fund of the State;

 

(e) the declaring of any expenditure to be expenditure charged on the Consolidated Fund of the State, or the increasing of the amount of any such expenditure; 

 

(f) the receipt of money on account of the Consolidated Fund of the State or the public account of the State or the custody or issue of such money; or

 

(g) any matter incidental to any of the matters specified in sub-clauses (a) to (f).

 

(2) A Bill shall not be deemed to be a Money Bill by reason only that it provides for the imposition of fines or other pecuniary penalties, or for the demand or payment of fees for licences or fees for services rendered, or by reason that it provides for the imposition, abolition, remission, alteration or regulation of any tax by any local authority or body for local purposes.

 

(3) If any question arises whether a Bill introduced in the Legislature of a State which has a Legislative Council is a Money Bill or not, the decision of the Speaker of the Legislative Assembly of such State thereon shall be final.

 

(4) There shall be endorsed on every Money Bill when it is transmitted to the Legislative Council under article 198, and when it is presented to the Governor for assent under article 200, the certificate of the Speaker of the Legislative Assembly signed by him that it is a Money Bill.`,word_count:355},{article:"200",title:"Assent to Bills",description:`When a Bill has been passed by the Legislative Assembly of a State or, in the case of a State having a Legislative Council, has been passed by both Houses of the Legislature of the State, it shall be presented to the Governor and the Governor shall declare either that he assents to the Bill or that he withholds assent therefrom or that he reserves the Bill for the consideration of the President:

 

   Provided that the Governor may, as soon as possible after the presentation to him of the Bill for assent, return the Bill if it is not a Money Bill together with a message requesting that the House or Houses will reconsider the Bill or any specified provisions thereof and, in particular, will consider the desirability of introducing any such amendments as he may recommend in his message and, when a Bill is so returned, the House or Houses shall reconsider the Bill accordingly, and if the Bill is passed again by the House or Houses with or without amendment and presented to the Governor for assent, the Governor shall not withhold assent therefrom:

 

   Provided further that the Governor shall not assent to, but shall reserve for the consideration of the President, any Bill which in the opinion of the Governor would, if it became law, so derogate from the powers of the High Court as to endanger the position which that Court is by this Constitution designed to fill.`,word_count:242},{article:"201",title:"Bills reserved for consideration",description:`When a Bill is reserved by a Governor for the consideration of the President, the President shall declare either that he assents to the Bill or that he withholds assent therefrom:

 

   Provided that, where the Bill is not a Money Bill, the President may direct the Governor to return the Bill to the House or, as the case may be, the Houses of the Legislature of the State together with such a message as is mentioned in the first proviso to article 200 and, when a Bill is so returned, the House or Houses shall reconsider it accordingly within a period of six months from the date of receipt of such message and, if it is again passed by the House or Houses with or without amendment, it shall be presented again to the President for his consideration.`,word_count:138},{article:"202",title:"Annual financial statement",description:`(1) The Governor shall in respect of every financial year cause to be laid before the House or Houses of the Legislature of the State a statement of the estimated receipts and expenditure of the State for that year, in this Part referred to as the "annual financial statement".

 

(2) The estimates of expenditure embodied in the annual financial statement shall show separately —

 

(a) the sums required to meet expenditure described by this Constitution as expenditure charged upon the Consolidated Fund of the State; and 

 

(b) the sums required to meet other expenditure proposed to be made from the Consolidated Fund of the State; and shall distinguish expenditure on revenue account from other expenditure.

 

(3) The following expenditure shall be expenditure charged on the Consolidated Fund of each State —

 

(a) the emoluments and allowances of the Governor and other expenditure relating to his office;

 

(b) the salaries and allowances of the Speaker and the Deputy Speaker of the Legislative Assembly and, in the case of a State having a Legislative Council, also of the Chairman and the Deputy Chairman of the Legislative Council;

 

(c) debt charges for which the State is liable including interest, sinking fund charges and redemption charges, and other expenditure relating to the raising of loans and the service and redemption of debt;

 

(d) expenditure in respect of the salaries and allowances of Judges of any High Court;

 

(e) any sums required to satisfy any judgment, decree or award of any court or arbitral tribunal;

 

(f) any other expenditure declared by this Constitution, or by the Legislature of the State by law, to be so charged.`,word_count:271},{article:"203",title:"Procedure in Legislature with respect to estimates",description:`(1) So much of the estimates as relates to expenditure charged upon the Consolidated Fund of a State shall not be submitted to the vote of the Legislative Assembly, but nothing in this clause shall be construed as preventing the discussion in the Legislature of any of those estimates.

 

(2) So much of the said estimates as relates to other expenditure shall be submitted in the form of demands for grants to the Legislative Assembly, and the Legislative Assembly shall have power to assent, or to refuse to assent, to any demand, or to assent to any demand subject to a reduction of the amount specified therein.

 

(3) No demand for a grant shall be made except on the recommendation of the Governor.`,word_count:123},{article:"204",title:"Appropriation Bills",description:`(1) As soon as may be after the grants under article 203 have been made by the Assembly, there shall be introduced a Bill to provide for the appropriation out of the Consolidated Fund of the State of all moneys required to meet —

 

(a) the grants so made by the Assembly; and

 

(b) the expenditure charged on the Consolidated Fund of the State but not exceeding in any case the amount shown in the statement previously laid before the House or Houses.

 

(2) No amendment shall be proposed to any such Bill in the House or either House of the Legislature of the State which will have the effect of varying the amount or altering the destination of any grant so made or of varying the amount of any expenditure charged on the Consolidated Fund of the State, and the decision of the person presiding as to whether an amendment is inadmissible under this clause shall be final.

 

(3) Subject to the provisions of articles 205 and 206, no money shall be withdrawn from the Consolidated Fund of the State except under appropriation made by law passed in accordance with the provisions of this article.`,word_count:196},{article:"205",title:"Supplementary, additional or excess grants",description:`(1) The Governor shall —

 

(a) if the amount authorised by any law made in accordance with the provisions of article 204 to be expended for a particular service for the current financial year is found to be insufficient for the purposes of that year or when a need has arisen during the current financial year for supplementary or additional expenditure upon some new service not contemplated in the annual financial statement for that year, or

 

(b) if any money has been spent on any service during a financial year in excess of the amount granted for that service and for that year,

 

cause to be laid before the House or the Houses of the Legislature of the State another statement showing the estimated amount of that expenditure or cause to be presented to the Legislative Assembly of the State a demand for such excess, as the case may be.

 

(2) The provisions of articles 202, 203 and 204 shall have effect in relation to any such statement and expenditure or demand and also to any law to be made authorising the appropriation of moneys out of the Consolidated Fund of the State to meet such expenditure or the grant in respect of such demand as they have effect in relation to the annual financial statement and the expenditure mentioned therein or to a demand for a grant and the law to be made for the authorisation of appropriation of moneys out of the Consolidated Fund of the State to meet such expenditure or grant.`,word_count:255},{article:"206",title:"Votes on account, votes of credit and exceptional grants",description:`(1) Notwithstanding anything in the foregoing provisions of this Chapter, the Legislative Assembly of a State shall have power —

 

(a) to make any grant in advance in respect of the estimated expenditure for a part of any financial year pending the completion of the procedure prescribed in article 203 for the voting of such grant and the passing of the law in accordance with the provisions of article 204 in relation to that expenditure;

 

(b) to make a grant for meeting an unexpected demand upon the resources of the State when on account of the magnitude or the indefinite character of the service the demand cannot be stated with the details ordinarily given in an annual financial statement;

 

(c) to make an exceptional grant which forms no part of the current service of any financial year; and the Legislature of the State shall have power to authorise by law the withdrawal of moneys from the Consolidated Fund of the State for the purposes for which the said grants are made.

 

(2) The provisions of articles 203 and 204 shall have effect in relation to the making of any grant under clause (1) and to any law to be made under that clause as they have effect in relation to the making of a grant with regard to any expenditure mentioned in the annual financial statement and the law to be made for the authorisation of appropriation of moneys out of the Consolidated Fund of the State to meet such expenditure.`,word_count:251},{article:"207",title:"Special provisions as to financial Bills",description:`(1) A Bill or amendment making provision for any of the matters specified in sub-clauses (a) to (f) of clause (1) of article 199 shall not be introduced or moved except on the recommendation of the Governor, and a Bill making such provision shall not be introduced in a Legislative Council:

 

   Provided that no recommendation shall be required under this clause for the moving of an amendment making provision for the reduction or abolition of any tax.

 

(2) A Bill or amendment shall not be deemed to make provision for any of the matters aforesaid by reason only that it provides for the imposition of fines or other pecuniary penalties, or for the demand or payment of fees for licences or fees for services rendered, or by reason that it provides for the imposition, abolition, remission, alteration or regulation of any tax by any local authority or body for local purposes.

 

(3) A Bill which, if enacted and brought into operation, would involve expenditure from the Consolidated Fund of a State shall not be passed by a House of the Legislature of the State unless the Governor has recommended to that House the consideration of the Bill.`,word_count:197},{article:"208",title:"Rules of procedure",description:`(1) A House of the Legislature of a State may make rules for regulating, subject to the provisions of this Constitution, its procedure and the conduct of its business.

 

(2) Until rules are made under clause (1), the rules of procedure and standing orders in force immediately before the commencement of this Constitution with respect to the Legislature for the corresponding Province shall have effect in relation to the Legislature of the State subject to such modifications and adaptations as may be made therein by the Speaker of the Legislative Assembly, or the Chairman of the Legislative Council, as the case may be.

 

(3) In a State having a Legislative Council the Governor, after consultation with the Speaker of the Legislative Assembly and the Chairman of the Legislative Council, may make rules as to the procedure with respect to communications between the two Houses.`,word_count:144},{article:"209",title:"Regulation by law of procedure in the Legislature of the State in relation to financial business",description:"The Legislature of a State may, for the purpose of the timely completion of financial business, regulate by law the procedure of, and the conduct of business in, the House or Houses of the Legislature of the State in relation to any financial matter or to any Bill for the appropriation of moneys out of the Consolidated Fund of the State, and, if and so far as any provision of any law so made is inconsistent with any rule made by the House or either House of the Legislature of the State under clause (1) of article 208 or with any rule or standing order having effect in relation to the Legislature of the State under clause (2) of that article, such provision shall prevail.",word_count:125},{article:"210",title:"Language to be used in the Legislature",description:`(1) Notwithstanding anything in Part XVII, but subject to the provisions of article 348, business in the Legislature of a State shall be transacted in the official language or languages of the State or in Hindi or in English: Provided that the Speaker of the Legislative Assembly or Chairman of the Legislative Council, or person acting as such, as the case may be, may permit any member who cannot adequately express himself in any of the languages aforesaid to address the House in his mothertongue.

 

(2) Unless the Legislature of the State by law otherwise provides, this article shall, after the expiration of a period of fifteen years from the commencement of this Constitution, have effect as if the words “or in English” were omitted therefrom:

 

   Provided that in relation to the Legislatures of the States of Himachal Pradesh, Manipur, Meghalaya and Tripura this clause shall have effect as if for the words “fifteen years” occurring therein, the words “twenty-five years” were substituted:

 

   Provided further that in relation to the Legislatures of the States of Arunachal Pradesh, Goa and Mizoram, this clause shall have effect as if for the words “fifteen years” occurring therein, the words “forty years” were substituted.`,word_count:200},{article:"211",title:"Restriction on discussion in the Legislature",description:"No discussion shall take place in the Legislature of a State with respect to the conduct of any Judge of the Supreme Court or of a High Court in the discharge of his duties.",word_count:34},{article:"212",title:"Courts not to inquire into proceedings of the Legislature",description:`(1) The validity of any proceedings in the Legislature of a State shall not be called in question on the ground of any alleged irregularity of procedure.

 

(2) No officer or member of the Legislature of a State in whom powers are vested by or under this Constitution for regulating procedure or the conduct of business, or for maintaining order, in the Legislature shall be subject to the jurisdiction of any court in respect of the exercise by him of those powers.`,word_count:82},{article:"213",title:"Power of Governor to promulgate Ordinances during recess of Legislature",description:`(1) If at any time, except when the Legislative Assembly of a State is in session, or where there is a Legislative Council in a State, except when both Houses of the Legislature are in session, the Governor is satisfied that circumstances exist which render it necessary for him to take immediate action, he may promulgate such Ordinances as the circumstances appear to him to require:

 

   Provided that the Governor shall not, without instructions from the President, promulgate any such Ordinance if —

 

(a) a Bill containing the same provisions would under this Constitution have required the previous sanction of the President for the introduction thereof into the Legislature; or

 

(b) he would have deemed it necessary to reserve a Bill containing the same provisions for the consideration of the President; or

 

(c) an Act of the Legislature of the State containing the same provisions would under this Constitution have been invalid unless, having been reserved for the consideration of the President, it had received the assent of the President.

 

(2) An Ordinance promulgated under this article shall have the same force and effect as an Act of the Legislature of the State assented to by the Governor, but every such Ordinance —

 

(a) shall be laid before the Legislative Assembly of the State, or where there is a Legislative Council in the State, before both the Houses, and shall cease to operate at the expiration of six weeks from the reassembly of the Legislature, or if before the expiration of that period a resolution disapproving it is passed by the Legislative Assembly and agreed to by the Legislative Council, if any, upon the passing of the resolution or, as the case may be, on the resolution being agreed to by the Council; and

 

(b) may be withdrawn at any time by the Governor.

 

   Explanation — Where the Houses of the Legislature of a State having a Legislative Council are summoned to reassemble on different dates, the period of six weeks shall be reckoned from the later of those dates for the purposes of this clause.

 

(3) If and so far as an Ordinance under this article makes any provision which would not be valid if enacted in an Act of the Legislature of the State assented to by the Governor, it shall be void:

 

   Provided that, for the purposes of the provisions of this Constitution relating to the effect of an Act of the Legislature of a State which is repugnant to an Act of Parliament or an existing law with respect to a matter enumerated in the Concurrent List, an Ordinance promulgated under this article in pursuance of instructions from the President shall be deemed to be an Act of the Legislature of the State which has been reserved for the consideration of the President and assented to by him.`,word_count:472},{article:"214",title:"High Courts for States",description:"There shall be a High Court for each State.",word_count:9},{article:"215",title:"High Courts to be courts of record",description:"Every High Court shall be a court of record and shall have all the powers of such a court including the power to punish for contempt of itself.",word_count:28},{article:"216",title:"Constitution of High Courts",description:"Every High Court shall consist of a Chief Justice and such other Judges as the President may from time to time deem it necessary to appoint.",word_count:26},{article:"217",title:"Appointment and conditions of the office of a Judge of a High Court",description:`(1) Every Judge of a High Court shall be appointed by the President by warrant under his hand and seal after consultation with the Chief Justice of India, the Governor of the State, and, in the case of appointment of a Judge other than the Chief Justice, the Chief Justice of the High Court, and shall hold office, in the case of an additional or acting Judge, as provided in article 224, and in any other case, until he attains the age of sixty two years:

 

   Provided that —

 

(a) a Judge may, by writing under his hand addressed to the President, resign his office;

 

(b) a Judge may be removed from his office by the President in the manner provided in clause (4) of article 124 for the removal of a Judge of the Supreme Court;

 

(c) the office of a Judge shall be vacated by his being appointed by the President to be a Judge of the Supreme Court or by his being transferred by the President to any other High Court within the territory of India.

 

(2) A person shall not be qualified for appointment as a Judge of a High Court unless he is a citizen of India and —

 

(a) has for at least ten years held a judicial office in the territory of India; or

 

(b) has for at least ten years been an advocate of a High Court 3 or of two or more such Courts in succession; 

 

   Explanation. — For the purposes of this clause —

(a) in computing the period during which a person has held judicial office in the territory of India, there shall be included any period, after he has held any judicial office, during which the person has been an advocate of a High Court or has held the office of a member of a tribunal or any post, under the Union or a State, requiring special knowledge of law;   

 

(aa) in computing the period during which a person has been an advocate of a High Court, there shall be included any period during which the person has held judicial office or the office of a member of a tribunal or any post, under the Union or a State, requiring special knowledge of law after he became an advocate;

 

(b) in computing the period during which a person has held judicial office in the territory of India or been an advocate of a High Court, there shall be included any period before the commencement of this Constitution during which he has held judicial office in any area which was comprised before the fifteenth day of August, 1947, within India as defined by the Government of India Act, 1935, or has been an advocate of any High Court in any such area, as the case may be. 

 

(3) If any question arises as to the age of a Judge of a High Court, the question shall be decided by the President after consultation with the Chief Justice of India and the decision of the President shall be final.`,word_count:509},{article:"218",title:"Application of certain provisions relating to Supreme Court to High Courts",description:"The provisions of clauses (4) and (5) of article 124 shall apply in relation to a High Court as they apply in relation to the Supreme Court with the substitution of references to the High Court for references to the Supreme Court.",word_count:42},{article:"219",title:"Oath or affirmation by Judges of High Courts",description:"Every person appointed to be a Judge of a High Court shall, before he enters upon his office, make and subscribe before the Governor of the State, or some person appointed in that behalf by him, an oath or affirmation according to the form set out for the purpose in the Third Schedule.",word_count:53},{article:"220",title:"Restriction on practice after being a permanent Judge",description:`No person who, after the commencement of this Constitution, has held office as a permanent Judge of a High Court shall plead or act in any court or before any authority in India except the Supreme Court and the other High Courts.

Explanation — In this article, the expression “High Court” does not include a High Court for a State specified in Part B of the First Schedule as it existed before the commencement of the Constitution (Seventh Amendment) Act, 1956.`,word_count:81},{article:"221",title:"Salaries, etc, of Judges",description:`(1) There shall be paid to the Judges of each High Court such salaries as may be determined by Parliament by law and, until provision in that behalf is so made, such salaries as are specified in the Second Schedule.

 

(2) Every Judge shall be entitled to such allowances and to such rights in respect of leave of absence and pension as may from time to time be determined by or under law made by Parliament and, until so determined, to such allowances and rights as are specified in the Second Schedule:

 

   Provided that neither the allowances of a Judge nor his rights in respect of leave of absence or pension shall be varied to his disadvantage after his appointment.`,word_count:120},{article:"222",title:"Transfer of a Judge from one High Court to another",description:`(1) The President may, after consultation with the Chief Justice of India, transfer a Judge from one High Court to any other High Court.

 

(2) When a Judge has been or is so transferred, he shall, during the period he serves, after the commencement of the Constitution (Fifteenth Amendment) Act, 1963, as a Judge of the other High Court, be entitled to receive in addition to his salary such compensatory allowance as may be determined by Parliament by law and, until so determined, such compensatory allowance as the President may by order fix.`,word_count:93},{article:"223",title:"Appointment of acting Chief Justice",description:"When the office of Chief Justice of a High Court is vacant or when any such Chief Justice is, by reason of absence or otherwise, unable to perform the duties of his office, the duties of the office shall be performed by such one of the other Judges of the Court as the President may appoint for the purpose.",word_count:59},{article:"224",title:"Appointment of additional and acting Judges",description:`(1) If by reason of any temporary increase in the business of a High Court or by reason of arrears of work therein, it appears to the President that the number of the Judges of that Court should be for the time being increased, the President may appoint duly qualified persons to be additional Judges of the Court for such period not exceeding two years as he may specify.

 

(2) When any Judge of a High Court other than the Chief Justice is by reason of absence or for any other reason unable to perform the duties of his office or is appointed to act temporarily as Chief Justice, the President may appoint a duly qualified person to act as a Judge of that Court until the permanent Judge has resumed his duties.

 

(3) No person appointed as an additional or acting Judge of a High Court shall hold office after attaining the age of sixty-two years.`,word_count:157},{article:"225",title:"Jurisdiction of existing High Courts",description:`Subject to the provisions of this Constitution and to the provisions of any law of the appropriate Legislature made by virtue of powers conferred on that Legislature by this Constitution, the jurisdiction of, and the law administered in, any existing High Court, and the respective powers of the Judges thereof in relation to the administration of justice in the Court, including any power to make rules of Court and to regulate the sittings of the Court and of members thereof sitting alone or in Division Courts, shall be the same as immediately before the commencement of this Constitution:

 

   Provided that any restriction to which the exercise of original jurisdiction by any of the High Courts with respect to any matter concerning the revenue or concerning any act ordered or done in the collection thereof was subject immediately before the commencement of this Constitution shall no longer apply to the exercise of such jurisdiction.`,word_count:153},{article:"226",title:"Power of High Courts to issue certain writs",description:`(1) Notwithstanding anything in article 32, every High Court shall have power, throughout the territories in relation to which it exercises jurisdiction, to issue to any person or authority, including in appropriate cases, any Government, within those territories directions, orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, or any of them, for the enforcement of any of the rights conferred by Part III and for any other purpose.

 

(2) The power conferred by clause (1) to issue directions, orders or writs to any Government, authority or person may also be exercised by any High Court exercising jurisdiction in relation to the territories within which the cause of action, wholly or in part, arises for the exercise of such power, notwithstanding that the seat of such Government or authority or the residence of such person is not within those territories.

 

(3) Where any party against whom an interim order, whether by way of injunction or stay or in any other manner, is made on, or in any proceedings relating to, a petition under clause (1), without —

 

(a) furnishing to such party copies of such petition and all documents in support of the plea for such interim order; and

 

(b) giving such party an opportunity of being heard,

 

makes an application to the High Court for the vacation of such order and furnishes a copy of such application to the party in whose favour such order has been made or the counsel of such party, the High Court shall dispose of the application within a period of two weeks from the date on which it is received or from the date on which the copy of such application is so furnished, whichever is later, or where the High Court is closed on the last day of that period, before the expiry of the next day afterwards on which the High Court is open; and if the application is not so disposed of, the interim order shall, on the expiry of that period, or, as the case may be, the expiry of the said next day, stand vacated.

 

(4) The power conferred on a High Court by this article shall not be in derogation of the power conferred on the Supreme Court by clause (2) of article 32.`,word_count:385},{article:"227",title:"Power of superintendence over all courts by the High Court",description:`(1) Every High Court shall have superintendence over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction.

 

(2) Without prejudice to the generality of the foregoing provision, the High Court may —

 

(a) call for returns from such courts;

 

(b) make and issue general rules and prescribe forms for regulating the practice and proceedings of such courts; and 

 

(c) prescribe forms in which books, entries and accounts shall be kept by the officers of any such courts.

 

(3) The High Court may also settle tables of fees to be allowed to the sheriff and all clerks and officers of such courts and to attorneys, advocates and pleaders practising therein:

 

   Provided that any rules made, forms prescribed or tables settled under clause (2) or clause (3) shall not be inconsistent with the provision of any law for the time being in force, and shall require the previous approval of the Governor.

 

(4) Nothing in this article shall be deemed to confer on a High Court powers of superintendence over any court or tribunal constituted by or under any law relating to the Armed Forces.`,word_count:188},{article:"228",title:"Transfer of certain cases to High Court",description:`If the High Court is satisfied that a case pending in a court subordinate to it involves a substantial question of law as to the interpretation of this Constitution the determination of which is necessary for the disposal of the case, it shall withdraw the case and may — 

 

(a) either dispose of the case itself, or

 

(b) determine the said question of law and return the case to the court from which the case has been so withdrawn together with a copy of its judgment on such question, and the said court shall on receipt thereof proceed to dispose of the case in conformity with such judgment.`,word_count:108},{article:"229",title:"Officers and servants and the expenses of High Courts",description:`(1) Appointments of officers and servants of a High Court shall be made by the Chief Justice of the Court or such other Judge or officer of the Court as he may direct:

 

   Provided that the Governor of the State may by rule require that in such cases as may be specified in the rule no person not already attached to the Court shall be appointed to any office connected with the Court save after consultation with the State Public Service Commission.

 

(2) Subject to the provisions of any law made by the Legislature of the State, the conditions of service of officers and servants of a High Court shall be such as may be prescribed by rules made by the Chief Justice of the Court or by some other Judge or officer of the Court authorised by the Chief Justice to make rules for the purpose:

 

   Provided that the rules made under this clause shall, so far as they relate to salaries, allowances, leave or pensions, require the approval of the Governor of the State.

 

(3) The administrative expenses of a High Court, including all salaries, allowances and pensions payable to or in respect of the officers and servants of the Court, shall be charged upon the Consolidated Fund of the State, and any fees or other moneys taken by the Court shall form part of that Fund.`,word_count:229},{article:"230",title:"Extension of jurisdiction of High Courts to Union territories",description:`(1) Parliament may by law extend the jurisdiction of a High Court to, or exclude the jurisdiction of a High Court from, any Union territory.

 

(2) Where the High Court of a State exercises jurisdiction in relation to a Union territory, —

 

(a) nothing in this Constitution shall be construed as empowering the Legislature of the State to increase, restrict or abolish that jurisdiction; and

 

(b) the reference in article 227 to the Governor shall, in relation to any rules, forms or tables for subordinate courts in that territory, be construed as a reference to the President.`,word_count:97},{article:"231",title:"Establishment of a common High Court for two or more States",description:`(1) Notwithstanding anything contained in the preceding provisions of this Chapter, Parliament may by law establish a common High Court for two or more States or for two or more States and a Union territory.

 

(2) In relation to any such High Court, —

 

(a) the reference in article 217 to the Governor of the State shall be construed as a reference to the Governors of all the States in relation to which the High Court exercises jurisdiction; 

 

(b) the reference in article 227 to the Governor shall, in relation to any rules, forms or tables for subordinate courts, be construed as a reference to the Governor of the State in which the subordinate courts are situate; and

 

(c) the references in articles 219 and 229 to the State shall be construed as a reference to the State in which the High Court has its principal seat:

 

   Provided that if such principal seat is in a Union territory, the references in articles 219 and 229 to the Governor, Public Service Commission, Legislature and Consolidated Fund of the State shall be construed respectively as references to the President, Union Public Service Commission, Parliament and Consolidated Fund of India.`,word_count:197},{article:"233",title:"Appointment of district judges",description:`(1) Appointments of persons to be, and the posting and promotion of, district judges in any State shall be made by the Governor of the State in consultation with the High Court exercising jurisdiction in relation to such State.

 

(2) A person not already in the service of the Union or of the State shall only be eligible to be appointed a district judge if he has been for not less than seven years an advocate or a pleader and is recommended by the High Court for appointment.`,word_count:88},{article:"234",title:"Recruitment of persons other than district judges to the judicial service",description:"Appointments of persons other than district judges to the judicial service of a State shall be made by the Governor of the State in accordance with rules made by him in that behalf after consultation with the State Public Service Commission and with the High Court exercising jurisdiction in relation to such State.",word_count:53},{article:"235",title:"Control over subordinate courts",description:"The control over district courts and courts subordinate thereto including the posting and promotion of, and the grant of leave to, persons belonging to the judicial service of a State and holding any post inferior to the post of district judge shall be vested in the High Court, but nothing in this article shall be construed as taking away from any such person any right of appeal which he may have under the law regulating the conditions of his service or as authorising the High Court to deal with him otherwise than in accordance with the conditions of his service prescribed under such law.",word_count:104},{article:"236",title:"Interpretation",description:`In this Chapter —

 

(a) the expression "district judge" includes judge of a city civil court, additional district judge, joint district judge, assistant district judge, chief judge of a small cause court, chief presidency magistrate, additional chief presidency magistrate, sessions judge, additional sessions judge and assistant sessions Judge;

 

(b) the expression “judicial service” means a service consisting exclusively of persons intended to fill the post of district judge and other civil judicial posts inferior to the post of district judge.`,word_count:80},{article:"237",title:"Application of the provisions of this Chapter to certain class or classes of magistrates",description:"The Governor may by public notification direct that the foregoing provisions of this Chapter and any rules made thereunder shall with effect from such date as may be fixed by him in that behalf apply in relation to any class or classes of magistrates in the State as they apply in relation to persons appointed to the judicial service of the State subject to such exceptions and modifications as may be specified in the notification.",word_count:75},{article:"224A",title:"Appointment of retired Judges at sittings of High Courts",description:`Notwithstanding anything in this Chapter, the Chief Justice of a High Court for any State may at any time, with the previous consent of the President, request any person who has held the office of a Judge of that Court or of any other High Court to sit and act as a Judge of the High Court for that State, and every such person so requested shall, while so sitting and acting, be entitled to such allowances as the President may by order determine and have all the jurisdiction, powers and privileges of, but shall not otherwise be deemed to be, a Judge of that High Court:

 

Provided that nothing in this article shall be deemed to require any such person as aforesaid to sit and act as a Judge of that High Court unless he consents so to do.`,word_count:140},{article:"233A",title:"Validation of appointments of, and judgments, etc, delivered by, certain district judges",description:`Notwithstanding any judgment, decree or order of any court, —

 

(a) (i) no appointment of any person already in the judicial service of a State or of any person who has been for not less than seven years an advocate or a pleader, to be a district judge in that State, and

 

(ii) no posting, promotion or transfer of any such person as a district judge,

 

made at any time before the commencement of the Constitution (Twentieth Amendment) Act, 1966, otherwise than in accordance with the provisions of article 233 or article 235 shall be deemed to be illegal or void or ever to have become illegal or void by reason only of the fact that such appointment, posting, promotion or transfer was not made in accordance with the said provisions;

 

(b) no jurisdiction exercised, no judgment, decree, sentence or order passed or made, and no other act or proceeding done or taken, before the commencement of the Constitution (Twentieth Amendment) Act, 1966 by, or before, any person appointed, posted, promoted or transferred as a district judge in any State otherwise than in accordance with the provisions of article 233 or article 235 shall be deemed to be illegal or invalid or ever to have become illegal or invalid by reason only of the fact that such appointment, posting, promotion or transfer was not made in accordance with the said provisions.`,word_count:231}]},{part:"Part VIII: Union Territories",part_number:"VIII",article_count:7,word_count:1930,articles:[{article:"239",title:"Administration of Union territories",description:`(1) Save as otherwise provided by Parliament by law, every Union territory shall be administered by the President acting, to such extent as he thinks fit, through an administrator to be appointed by him with such designation as he may specify.

 

(2) Notwithstanding anything contained in Part VI, the President may appoint the Governor of a State as the administrator of an adjoining Union territory, and where a Governor is so appointed, he shall exercise his functions as such administrator independently of his Council of Ministers.`,word_count:86},{article:"240",title:"Power of President to make regulations for certain Union territories",description:`(1) The President may make regulations for the peace, progress and good government of the Union territory of —

 

(a) the Andaman and Nicobar Islands;

 

(b) Lakshadweep;

 

(c) Dadra and Nagar Haveli;

 

(d) Daman and Diu;

 

(e) Puducherry;

 

   Provided that when any body is created under article 239A to function as a Legislature for the Union territory of Puducherry, the President shall not make any regulation for the peace, progress and good government of that Union territory with effect from the date appointed for the first meeting of the Legislature

 

   Provided further that whenever the body functioning as a Legislature for the Union territory of Puducherry is dissolved, or the functioning of that body as such Legislature remains suspended on account of any  action taken under any such law as is referred to in clause (1) of article 239A, the President may, during the period of such dissolution or suspension, make regulations for the peace, progress and good          government of that Union territory.

 

(2) Any regulation so made may repeal or amend any Act made by Parliament or any other law]which is for the time being applicable to the Union territory and, when promulgated by the President, shall have the same force and effect as an Act of Parliament which applies to that territory.`,word_count:214},{article:"241",title:"High Courts for Union territories",description:`(1) Parliament may by law constitute a High Court for a Union territory or declare any court in any such territory to be a High Court for all or any of the purposes of this Constitution.

 

(2) The provisions of Chapter V of Part VI shall apply in relation to every High Court referred to in clause (1) as they apply in relation to a High Court referred to in article 214 subject to such modifications or exceptions as Parliament may by law provide.

 

(3) Subject to the provisions of this Constitution and to the provisions of any law of the appropriate Legislature made by virtue of powers conferred on that Legislature by or under this Constitution, every High Court exercising jurisdiction immediately before the commencement of the Constitution (Seventh Amendment) Act, 1956, in relation to any Union territory shall continue to exercise such jurisdiction in relation to that territory after such commencement.

 

(4) Nothing in this article derogates from the power of Parliament to extend or exclude the jurisdiction of a High Court for a State to, or from, any Union territory or part thereof.`,word_count:186},{article:"239A",title:"Creation of local Legislatures or Council of Ministers or both for certain Union territories",description:`(1) Parliament may by law create for the Union territory of Puducherry —

 

(a) a body, whether elected or partly nominated and partly elected, to function as a Legislature for the Union territory, or

 

(b) a Council of Ministers,

 

or both with such constitution, powers and functions, in each case, as may be specified in the law.

 

(2) Any such law as is referred to in clause (1) shall not be deemed to be an amendment of this Constitution for the purposes of article 368 notwithstanding that it contains any provision which amends or has the effect of amending this Constitution`,word_count:101},{article:"239AA",title:"Special provisions with respect to Delhi",description:`(1) As from the date of commencement of the Constitution (Sixty-ninth Amendment) Act, 1991, the Union territory of Delhi shall be called the National Capital Territory of Delhi (hereafter in this Part referred to as the National Capital Territory) and the administrator thereof appointed under article 239 shall be designated as the Lieutenant Governor.

 

(2) (a) There shall be a Legislative Assembly for the National Capital Territory and the seats in such Assembly shall be filled by members chosen by direct election from territorial constituencies in the National Capital Territory.

 

(b) The total number of seats in the Legislative Assembly, the number of seats reserved for Scheduled Castes, the division of the National Capital Territory into territorial constituencies (including the basis for such division) and all other matters relating to the functioning of the Legislative Assembly shall be regulated by law made by Parliament.

 

(c) The provisions of articles 324 to 327 and 329 shall apply in relation to the National Capital Territory, the Legislative Assembly of the National Capital Territory and the members thereof as they apply, in relation to a State, the Legislative Assembly of a State and the members thereof respectively; and any reference in articles 326 and 329 to “appropriate Legislature” shall be deemed to be a reference to Parliament.

 

(3) (a) Subject to the provisions of this Constitution, the Legislative Assembly shall have power to make laws for the whole or any part of the National Capital Territory with respect to any of the matters enumerated in the State List or in the Concurrent List in so far as any such matter is applicable to Union territories except matters with respect to Entries 1, 2 and 18 of the State List and Entries 64, 65 and 66 of that List in so far as they relate to the said Entries 1, 2 and 18.

 

(b) Nothing in sub-clause (a) shall derogate from the powers of Parliament under this Constitution to make laws with respect to any matter for a Union territory or any part thereof.

 

(c) If any provision of a law made by the Legislative Assembly with respect to any matter is repugnant to any provision of a law made by Parliament with respect to that matter, whether passed before or after the law made by the Legislative Assembly, or of an earlier law, other than a law made by the Legislative Assembly, then, in either case, the law made by Parliament, or, as the case may be, such earlier law, shall prevail and the law made by the Legislative Assembly shall, to the extent of the repugnancy, be void:

 

   Provided that if any such law made by the Legislative Assembly has been reserved for the consideration of the President and has received his assent, such law shall prevail in the National Capital Territory:

 

   Provided further that nothing in this sub-clause shall prevent Parliament from enacting at any time any law with respect to the same matter including a law adding to, amending, varying or repealing the law so made by the Legislative Assembly.

 

(4) There shall be a Council of Ministers consisting of not more than ten per cent. of the total number of members in the Legislative Assembly, with the Chief Minister at the head to aid and advise the Lieutenant Governor in the exercise of his functions in relation to matters with respect to which the Legislative Assembly has power to make laws, except in so far as he is, by or under any law, required to act in his discretion:

 

Provided that in the case of difference of opinion between the Lieutenant Governor and his Ministers on any matter, the Lieutenant Governor shall refer it to the President for decision and act according to the decision given thereon by the President and pending such decision it shall be competent for the Lieutenant Governor in any case where the matter, in his opinion, is so urgent that it is necessary for him to take immediate action, to take such action or to give such direction in the matter as he deems necessary.

 

(5) The Chief Minister shall be appointed by the President and other Ministers shall be appointed by the President on the advice of the Chief Minister and the Ministers shall hold office during the pleasure of the President.

 

(6) The Council of Ministers shall be collectively responsible to the Legislative Assembly.

 

(7) (a) Parliament may, by law, make provisions for giving effect to, or supplementing the provisions contained in the foregoing clauses and for all matters incidental or consequential thereto.

 

(b) Any such law as is referred to in sub-clause (a) shall not be deemed to be an amendment of this Constitution for the purposes of article 368 notwithstanding that it contains any provision which amends or has the effect of amending, this Constitution.

 

(8) The provisions of article 239B shall, so far as may be, apply in relation to the National Capital Territory, the Lieutenant Governor and the Legislative Assembly, as they apply in relation to the Union territory of Puducherry, the administrator and its Legislature, respectively; and any reference in that article to “clause (1) of article 239A” shall be deemed to be a reference to this article or article 239AB, as the case may be.`,word_count:879},{article:"239AB",title:"Provision in case of failure of constitutional machinery",description:`If the President, on receipt of a report from the Lieutenant Governor or otherwise, is satisfied —

 

(a) that a situation has arisen in which the administration of the National Capital Territory cannot be carried on in accordance with the provisions of article 239AA or of any law made in pursuance of that article; or

 

(b) that for the proper administration of the National Capital Territory it is necessary or expedient so to do,

 

the President may by order suspend the operation of any provision of article 239AA or of all or any of the provisions of any law made in pursuance of that article for such period and subject to such conditions as may be specified in such law and make such incidental and consequential provisions as may appear to him to be necessary or expedient for administering the National Capital Territory in accordance with the provisions of article 239 and article 239AA.`,word_count:154},{article:"239B",title:"Power of administrator to promulgate Ordinances during recess of Legislature",description:`(1) If at any time, except when the Legislature of the Union territory of Puducherry is in session, the administrator thereof is satisfied that circumstances exist which render it necessary for him to take immediate action, he may promulgate such Ordinances as the circumstances appear to him to require:

 

   Provided that no such Ordinance shall be promulgated by the administrator except after obtaining instructions from the President in that behalf:

 

   Provided further that whenever the said Legislature is dissolved, or its functioning remains suspended on account of any action taken under any such law as is referred to in clause (1) of article 239A, the administrator shall not promulgate any Ordinance during the period of such dissolution or suspension.

 

(2) An Ordinance promulgated under this article in pursuance of instructions from the President shall be deemed to be an Act of the Legislature of the Union territory which has been duly enacted after complying with the provisions in that behalf contained in any such law as is referred to in clause (1) of article 239A, but every such Ordinance —

 

(a) shall be laid before the Legislature of the Union territory and shall cease to operate at the expiration of six weeks from the reassembly of the Legislature or if, before the expiration of that period, a resolution disapproving it is passed by the Legislature, upon the passing of the resolution; and

 

(b) may be withdrawn at any time by the administrator after obtaining instructions from the President in that behalf.

 

(3) If and so far as an Ordinance under this article makes any provision which would not be valid if enacted in an Act of the Legislature of the Union territory made after complying with the provisions in that behalf contained in any such law as is referred to in clause (1) of article 239A, it shall be void.`,word_count:310}]},{part:"Part IX: Panchayats",part_number:"IX",article_count:16,word_count:2730,articles:[{article:"243",title:"Definitions",description:`In this Part, unless the context otherwise requires, —

 

(a) “district” means a district in a State;

 

(b) “Gram Sabha” means a body consisting of persons registered in the electoral rolls relating to a village comprised within the area of Panchayat at the village level;

 

(c) “intermediate level” means a level between the village and district levels specified by the Governor of a State by public notification to be the intermediate level for the purposes of this Part;

 

(d) “Panchayat” means an institution (by whatever name called) of self-government constituted under article 243B, for the rural areas;

 

(e) “Panchayat area” means the territorial area of a Panchayat; (f) “population” means the population as ascertained at the last preceding census of which the relevant figures have been published;

 

(g) “village” means a village specified by the Governor by public notification to be a village for the purposes of this Part and includes a group of villages so specified.`,word_count:157},{article:"243A",title:"Gram Sabha",description:"A Gram Sabha may exercise such powers and perform such functions at the village level as the Legislature of a State may, by law, provide.",word_count:25},{article:"243B",title:"Constitution of Panchayats",description:`(1) There shall be constituted in every State, Panchayats at the village, intermediate and district levels in accordance with the provisions of this Part.

 

(2) Notwithstanding anything in clause (1), Panchayats at the intermediate level may not be constituted in a State having a population not exceeding twenty lakhs.`,word_count:49},{article:"243C",title:"Composition of Panchayats",description:`(1) Subject to the provisions of this Part, the Legislature of a State may, by law, make provisions with respect to the composition of Panchayats:

 

   Provided that the ratio between the population of the territorial area of a Panchayat at any level and the number of seats in such Panchayat to be filled by election shall, so far as practicable, be the same throughout the State.

 

(2) All the seats in a Panchayat shall be filled by persons chosen by direct election from territorial constituencies in the Panchayat area and, for this purpose, each Panchayat area shall be divided into territorial constituencies in such manner that the ratio between the population of each constituency and the number of seats allotted to it shall, so far as practicable, be the same throughout the Panchayat area.

 

(3) The Legislature of a State may, by law, provide for the representation —

 

(a) of the Chairpersons of the Panchayats at the village level, in the Panchayats at the intermediate level or, in the case of a State not having Panchayats at the intermediate level, in the Panchayats at the district level;

 

(b) of the Chairpersons of the Panchayats at the intermediate level, in the Panchayats at the district level;

 

(c) of the members of the House of the People and the members of the Legislative Assembly of the State representing constituencies which comprise wholly or partly a Panchayat area at a level other than the village level, in such Panchayat;

 

(d) of the members of the Council of States and the members of the Legislative Council of the State, where they are registered as electors within —

(i) a Panchayat area at the intermediate level, in Panchayat at the intermediate level;

 

(ii) a Panchayat area at the district level, in Panchayat at the district level.

 

(4) The Chairperson of a Panchayat and other members of a Panchayat whether or not chosen by direct election from territorial constituencies in the Panchayat area shall have the right to vote in the meetings of the Panchayats.

 

(5) The Chairperson of —

 

(a) a panchayat at the village level shall be elected in such manner as the Legislature of a State may, by law, provide; and

 

(b) a Panchayat at the intermediate level or district level shall be elected by, and from amongst, the elected members thereof.`,word_count:389},{article:"243D",title:"Reservation of seats",description:`(1) Seats shall be reserved for —

 

(a) the Scheduled Castes; and

 

(b) the Scheduled Tribes,

 

in every Panchayat and the number of seats so reserved shall bear, as nearly as may be, the same proportion to the total number of seats to be filled by direct election in that Panchayat as the population of the Scheduled Castes in that Panchayat area or of the Scheduled Tribes in that Panchayat area bears to the total population of that area and such seats may be allotted by rotation to different constituencies in a Panchayat.

 

(2) Not less than one-third of the total number of seats reserved under clause (1) shall be reserved for women belonging to the Scheduled Castes or, as the case may be, the Scheduled Tribes.

 

(3) Not less than one-third (including the number of seats reserved for women belonging to the Scheduled Castes and the Scheduled Tribes) of the total number of seats to be filled by direct election in every Panchayat shall be reserved for women and such seats may be allotted by rotation to different constituencies in a Panchayat.

 

(4) The offices of the Chairpersons in the Panchayats at the village or any other level shall be reserved for the Scheduled Castes, the Scheduled Tribes and women in such manner as the Legislature of a State may, by law, provide:

 

   Provided that the number of offices of Chairpersons reserved for the Scheduled Castes and the Scheduled Tribes in the Panchayats at each level in any State shall bear, as nearly as may be, the same proportion to the total number of such offices in the Panchayats at each level as the population of the Scheduled Castes in the State or of the Scheduled Tribes in the State bears to the total population of the State:

 

   Provided further that not less than one-third of the total number of offices of Chairpersons in the Panchayats at each level shall be reserved for women:

 

   Provided also that the number of offices reserved under this clause shall be allotted by rotation to different Panchayats at each level.

 

(5) The reservation of seats under clauses (1) and (2) and the reservation of offices of Chairpersons (other than the reservation for women) under clause (4) shall cease to have effect on the expiration of the period specified in article 334.

 

(6) Nothing in this Part shall prevent the Legislature of a State from making any provision for reservation of seats in any Panchayat or offices of Chairpersons in the Panchayats at any level in favour of backward class of citizens.`,word_count:428},{article:"243E",title:"Duration of Panchayats, etc",description:`(1) Every Panchayat, unless sooner dissolved under any law for the time being in force, shall continue for five years from the date appointed for its first meeting and no longer.

 

(2) No amendment of any law for the time being in force shall have the effect of causing dissolution of a Panchayat at any level, which is functioning immediately before such amendment, till the expiration of its duration specified in clause (1).

 

(3) An election to constitute a Panchayat shall be completed —

 

(a) before the expiry of its duration specified in clause (1);

 

(b) before the expiration of a period of six months from the date of its dissolution:

 

   Provided that where the remainder of the period for which the dissolved Panchayat would have continued is less than six months, it shall not be necessary to hold any election under this clause for constituting the Panchayat for such period.

 

(4) A Panchayat constituted upon the dissolution of a Panchayat before the expiration of its duration shall continue only for the remainder of the period for which the dissolved Panchayat would have continued under clause (1) had it not been so dissolved.`,word_count:193},{article:"243F",title:"Disqualifications for membership",description:`(1) A person shall be disqualified for being chosen as, and for being, a member of a Panchayat —

 

(a) if he is so disqualified by or under any law for the time being in force for the purposes of elections to the Legislature of the State concerned: Provided that no person shall be disqualified on the ground that he is less than twenty-five years of age, if he has attained the age of twenty-one years;

 

(b) if he is so disqualified by or under any law made by the Legislature of the State.

 

(2) If any question arises as to whether a member of a Panchayat has become subject to any of the disqualifications mentioned in clause (1), the question shall be referred for the decision of such authority and in such manner as the Legislature of a State may, by law, provide.`,word_count:144},{article:"243G",title:"Powers, authority and responsibilities of Panchayats",description:`Subject to the provisions of this Constitution, the Legislature of a State may, by law, endow the Panchayats with such powers and authority as may be necessary to enable them to function as institutions of self-government and such law may contain provisions for the devolution of powers and responsibilities upon Panchayats at the appropriate level, subject to such conditions as may be specified therein, with respect to —

 

(a) the preparation of plans for economic development and social justice;

 

(b) the implementation of schemes for economic development and social justice as may be entrusted to them including those in relation to the matters listed in the Eleventh Schedule.`,word_count:108},{article:"243H",title:"Powers to impose taxes by, and Funds of, the Panchayats",description:`The Legislature of a State may, by law, —

 

(a) authorise a Panchayat to levy, collect and appropriate such taxes, duties, tolls and fees in accordance with such procedure and subject to such limits;

 

(b) assign to a Panchayat such taxes, duties, tolls and fees levied and collected by the State Government for such purposes and subject to such conditions and limits;

 

(c) provide for making such grants-in-aid to the Panchayats from the Consolidated Fund of the State; and

 

(d) provide for constitution of such Funds for crediting all moneys received, respectively, by or on behalf of the Panchayats and also for the withdrawal of such moneys therefrom,

 

as may be specified in the law.`,word_count:115},{article:"243I",title:"Constitution of Finance Commission to review financial position",description:`(1) The Governor of a State shall, as soon as may be within one year from the commencement of the Constitution (Seventy-third Amendment) Act, 1992, and thereafter at the expiration of every fifth year, constitute a Finance Commission to review the financial position of the Panchayats and to make recommendations to the Governor as to —

 

(a) the principles which should govern —

 

(i) the distribution between the State and the Panchayats of the net proceeds of the taxes, duties, tolls and fees leviable by the State, which may be divided between them under this Part and the allocation between the Panchayats at all levels of their respective shares of such proceeds;

 

(ii) the determination of the taxes, duties, tolls and fees which may be assigned to, or appropriated by, the Panchayats; (iii) the grants-in-aid to the Panchayats from the Consolidated Fund of the State;

 

(b) the measures needed to improve the financial position of the Panchayats;

 

(c) any other matter referred to the Finance Commission by the Governor in the interests of sound finance of the Panchayats.

 

(2) The Legislature of a State may, by law, provide for the composition of the Commission, the qualifications which shall be requisite for appointment as members thereof and the manner in which they shall be selected.

 

(3) The Commission shall determine their procedure and shall have such powers in the performance of their functions as the Legislature of the State may, by law, confer on them.

 

(4) The Governor shall cause every recommendation made by the Commission under this article together with an explanatory memorandum as to the action taken thereon to be laid before the Legislature of the State.`,word_count:278},{article:"243J",title:"Audit of accounts of Panchayats",description:"The Legislature of a State may, by law, make provisions with respect to the maintenance of accounts by the Panchayats and the auditing of such accounts.",word_count:26},{article:"243K",title:"Elections to the Panchayats",description:`(1) The superintendence, direction and control of the preparation of electoral rolls for, and the conduct of, all elections to the Panchayats shall be vested in a State Election Commission consisting of a State Election Commissioner to be appointed by the Governor.

 

(2) Subject to the provisions of any law made by the Legislature of a State, the conditions of service and tenure of office of the State Election Commissioner shall be such as the Governor may by rule determine:

 

   Provided that the State Election Commissioner shall not be removed from his office except in like manner and on the like grounds as a Judge of a High Court and the conditions of service of the State Election Commissioner shall not be varied to his disadvantage after his appointment.

 

(3) The Governor of a State shall, when so requested by the State Election Commission, make available to the State Election Commission such staff as may be necessary for the discharge of the functions conferred on the State Election Commission by clause (1).

 

(4) Subject to the provisions of this Constitution, the Legislature of a State may, by law, make provision with respect to all matters relating to, or in connection with, elections to the Panchayats.`,word_count:205},{article:"243L",title:"Application to Union territories",description:`The provisions of this Part shall apply to the Union territories and shall, in their application to a Union territory, have effect as if the references to the Governor of a State were references to the Administrator of the Union territory appointed under article 239 and references to the Legislature or the Legislative Assembly of a State were references, in relation to a Union territory having a Legislative Assembly, to that Legislative Assembly:

 

   Provided that the President may, by public notification, direct that the provisions of this Part shall apply to any Union territory or part thereof subject to such exceptions and modifications as he may specify in the notification.`,word_count:110},{article:"243M",title:"Part not to apply to certain areas",description:`(1) Nothing in this Part shall apply to the Scheduled Areas referred to in clause (1), and the tribal areas referred to in clause (2), of article 244.

 

(2) Nothing in this Part shall apply to —

 

(a) the States of Nagaland, Meghalaya and Mizoram; 

 

(b) the hill areas in the State of Manipur for which District Councils exist under any law for the time being in force.

 

(3) Nothing in this Part —

 

(a) relating to Panchayats at the district level shall apply to the hill areas of the District of Darjeeling in the State of West Bengal for which Darjeeling Gorkha Hill Council exists under any law for the time being in force;

 

(b) shall be construed to affect the functions and powers of the Darjeeling Gorkha Hill Council constituted under such law.

 

(3A) Nothing in article 243D, relating to reservation of seats for the Scheduled Castes, shall apply to the State of Arunachal Pradesh. 

 

(4) Notwithstanding anything in this Constitution, —

 

(a) the Legislature of a State referred to in subclause (a) of clause (2) may, by law, extend this part to that State, except the areas, if any, referred to in clause (1), if the Legislative Assembly of that State passes a resolution to that effect by a majority of the total membership of that House and by a majority of not less than two-thirds of the members of that House present and voting;

 

(b) Parliament may, by law, extend the provisions of this Part to the Scheduled Areas and the tribal areas referred to in clause (1) subject to such exceptions and modifications as may be specified in such law, and no such law shall be deemed to be an amendment of this Constitution for the purposes of article 368.`,word_count:295},{article:"243N",title:"Continuance of existing laws and Panchayats",description:`Notwithstanding anything in this Part, any provision of any law relating to Panchayats in force in a State immediately before the commencement of the Constitution (Seventy-third Amendment) Act, 1992, which is inconsistent with the provisions of this Part, shall continue to be in force until amended or repealed by a competent Legislature or other competent authority or until the expiration of one year from such commencement, whichever is earlier:

 

   Provided that all the Panchayats existing immediately before such commencement shall continue till the expiration of their duration, unless sooner dissolved by a resolution passed to that effect by the Legislative Assembly of that State or, in the case of a State having a Legislative Council, by each House of the Legislature of that State.`,word_count:124},{article:"243O",title:"Bar to interference by courts in electoral matters",description:`Notwithstanding anything in this Constitution, —

 

(a) the validity of any law relating to the delimitation of constituencies or the allotment of seats to such constituencies, made or purporting to be made under article 243K, shall not be called in question in any court;

 

(b) no election to any Panchayat shall be called in question except by an election petition presented to such authority and in such manner as is provided for by or under any law made by the Legislature of a State.`,word_count:84}]},{part:"Part IXA: Municipalities",part_number:"IXA",article_count:18,word_count:2917,articles:[{article:"243P",title:"Definitions",description:`In this Part, unless the context otherwise requires, —

 

(a) “Committee” means a Committee constituted under article 243S;

 

(b) “district” means a district in a State;

 

(c) “Metropolitan area” means an area having a population of ten lakhs or more, comprised in one or more districts and consisting of two or more Municipalities or Panchayats or other contiguous areas, specified by the Governor by public notification to be a Metropolitan area for the purposes of this Part;

 

(d) “Municipal area” means the territorial area of a Municipality as is notified by the Governor;

 

(e) “Municipality” means an institution of selfgovernment constituted under article 243Q;

 

(f) “Panchayat” means a Panchayat constituted under article 243B;

 

(g) “population” means the population as ascertained at the last preceding census of which the relevant figures have been published.`,word_count:133},{article:"243Q",title:"Constitution of Municipalities",description:`(1) There shall be constituted in every State, —

 

(a) a Nagar Panchayat (by whatever name called) for a transitional area, that is to say, an area in transition from a rural area to an urban area;

 

(b) a Municipal Council for a smaller urban area; and

 

(c) a Municipal Corporation for a larger urban area, in accordance with the provisions of this Part:

 

   Provided that a Municipality under this clause may not be constituted in such urban area or part thereof as the Governor may, having regard to the size of the area and the municipal services being provided or proposed to be provided by an industrial establishment in that area and such other factors as he may deem fit, by public notification, specify to be an industrial township.

 

(2) In this article, “a transitional area”, “a smaller urban area” or “a larger urban area” means such area as the Governor may, having regard to the population of the area, the density of the population therein, the revenue generated for local administration, the percentage of employment in non-agricultural activities, the economic importance or such other factors as he may deem fit, specify by public notification for the purposes of this Part`,word_count:202},{article:"243R",title:"Composition of Municipalities",description:`(1) Save as provided in clause (2), all the seats in a Municipality shall be filled by persons chosen by direct election from the territorial constituencies in the Municipal area and for this purpose each Municipal area shall be divided into territorial constituencies to be known as wards.

 

(2) The Legislature of a State may, by law, provide —

 

(a) for the representation in a Municipality of —

 

(i) persons having special knowledge or experience in Municipal administration;

 

(ii) the members of the House of the People and the members of the Legislative Assembly of the State representing constituencies which comprise wholly or partly the Municipal area;

 

(iii) the members of the Council of States and the members of the Legislative Council of the State registered as electors within the Municipal area;

 

(iv) the Chairpersons of the Committees constituted under clause (5) of article 243S: 

 

   Provided that the persons referred to in paragraph (i) shall not have the right to vote in the meetings of the Municipality;

 

(b) the manner of election of the Chairperson of a Municipality`,word_count:178},{article:"243S",title:"Constitution and composition of Wards Committees, etc",description:`(1) There shall be constituted Wards Committees, consisting of one or more wards, within the territorial area of a Municipality having a population of three lakhs or more.

 

(2) The Legislature of a State may, by law, make provision with respect to —

 

(a) the composition and the territorial area of a Wards Committee;

 

(b) the manner in which the seats in a Wards Committee shall be filled.

 

(3) A member of a Municipality representing a ward within the territorial area of the Wards Committee shall be a member of that Committee.

 

(4) Where a Wards Committee consists of —

 

(a) one ward, the member representing that ward in the Municipality; or

 

(b) two or more wards, one of the members representing such wards in the Municipality elected by the members of the Wards Committee, shall be the Chairperson of that Committee.

 

(5) Nothing in this article shall be deemed to prevent the Legislature of a State from making any provision for the constitution of Committees in addition to the Wards Committees.`,word_count:172},{article:"243T",title:"Reservation of seats",description:`(1) Seats shall be reserved for the Scheduled Castes and the Scheduled Tribes in every Municipality and the number of seats so reserved shall bear, as nearly as may be, the same proportion to the total number of seats to be filled by direct election in that Municipality as the population of the Scheduled Castes in the Municipal area or of the Scheduled Tribes in the Municipal area bears to the total population of that area and such seats may be allotted by rotation to different constituencies in a Municipality.

 

(2) Not less than one-third of the total number of seats reserved under clause (1) shall be reserved for women belonging to the Scheduled Castes or, as the case may be, the Scheduled Tribes.

 

(3) Not less than one-third (including the number of seats reserved for women belonging to the Scheduled Castes and the Scheduled Tribes) of the total number of seats to be filled by direct election in every Municipality shall be reserved for women and such seats may be allotted by rotation to different constituencies in a Municipality.

 

(4) The offices of Chairpersons in the Municipalities shall be reserved for the Scheduled Castes, the Scheduled Tribes and women in such manner as the Legislature of a State may, by law, provide.

 

(5) The reservation of seats under clauses (1) and (2) and the reservation of offices of Chairpersons (other than the reservation for women) under clause (4) shall cease to have effect on the expiration of the period specified in article 334.

 

(6) Nothing in this Part shall prevent the Legislature of a State from making any provision for reservation of seats in any Municipality or offices of Chairpersons in the Municipalities in favour of backward class of citizens.`,word_count:291},{article:"243U",title:"Duration of Municipalities, etc",description:`(1) Every Municipality, unless sooner dissolved under any law for the time being in force, shall continue for five years from the date appointed for its first meeting and no longer:

 

   Provided that a Municipality shall be given a reasonable opportunity of being heard before its dissolution.

 

(2) No amendment of any law for the time being in force shall have the effect of causing dissolution of a Municipality at any level, which is functioning immediately before such amendment, till the expiration of its duration specified in clause (1). 

 

(3) An election to constitute a Municipality shall be completed, —

 

(a) before the expiry of its duration specified in clause (1);

 

(b) before the expiration of a period of six months from the date of its dissolution:

 

   Provided that where the remainder of the period for which the dissolved Municipality would have continued is less than six months, it shall not be necessary to hold any election under this clause for constituting the Municipality for such period.

 

(4) A Municipality constituted upon the dissolution of a Municipality before the expiration of its duration shall continue only for the remainder of the period for which the dissolved Municipality would have continued under clause (1) had it not been so dissolved.`,word_count:209},{article:"243V",title:"Disqualifications for membership",description:`(1) A person shall be disqualified for being chosen as, and for being, a member of a Municipality —

 

(a) if he is so disqualified by or under any law for the time being in force for the purposes of elections to the Legislature of the State concerned:

 

   Provided that no person shall be disqualified on the ground that he is less than twenty-five years of age, if he has attained the age of twenty-one years;

 

(b) if he is so disqualified by or under any law made by the Legislature of the State.

 

(2) If any question arises as to whether a member of a Municipality has become subject to any of the disqualifications mentioned in clause (1), the question shall be referred for the decision of such authority and in such manner as the Legislature of a State may, by law, provide.`,word_count:144},{article:"243W",title:"Powers, authority and responsibilities of Municipalities, etc",description:`Subject to the provisions of this Constitution, the Legislature of a State may, by law, endow —

 

(a) the Municipalities with such powers and authority as may be necessary to enable them to function as institutions of self-government and such law may contain provisions for the devolution of powers and responsibilities upon Municipalities, subject to such conditions as may be specified therein, with respect to —

 

(i) the preparation of plans for economic development and social justice;

 

(ii) the performance of functions and the implementation of schemes as may be entrusted to them including those in relation to the matters listed in the Twelfth Schedule;

 

(b) the Committees with such powers and authority as may be necessary to enable them to carry out the responsibilities conferred upon them including those in relation to the matters listed in the Twelfth Schedule.`,word_count:140},{article:"243X",title:"Power to impose taxes by, and Funds of, the Municipalities",description:`The Legislature of a State may, by law, —

 

(a) authorise a Municipality to levy, collect and appropriate such taxes, duties, tolls and fees in accordance with such procedure and subject to such limits;

 

(b) assign to a Municipality such taxes, duties, tolls and fees levied and collected by the State Government for such purposes and subject to such conditions and limits;

 

(c) provide for making such grants-in-aid to the Municipalities from the Consolidated Fund of the State; and

 

(d) provide for constitution of such Funds for crediting all moneys received, respectively, by or on behalf of the Municipalities and also for the withdrawal of such moneys therefrom,

 

as may be specified in the law.`,word_count:115},{article:"243Y",title:"Finance Commission",description:`(1) The Finance Commission constituted under article 243-I shall also review the financial position of the Municipalities and make recommendations to the Governor as to —

 

(a) the principles which should govern—

 

(i) the distribution between the State and the Municipalities of the net proceeds of the taxes, duties, tolls and fees leviable by the State, which may be divided between them under this Part and the allocation between the Municipalities at all levels of their respective shares of such proceeds;

 

(ii) the determination of the taxes, duties, tolls and fees which may be assigned to, or appropriated by, the Municipalities;

 

(iii) the grants-in-aid to the Municipalities from the Consolidated Fund of the State;

 

(b) the measures needed to improve the financial position of the Municipalities;

 

(c) any other matter referred to the Finance Commission by the Governor in the interests of sound finance of the Municipalities.

 

(2) The Governor shall cause every recommendation made by the Commission under this article together with an explanatory memorandum as to the action taken thereon to be laid before the Legislature of the State.`,word_count:181},{article:"243Z",title:"Audit of accounts of Municipalities",description:"The Legislature of a State may, by law, make provisions with respect to the maintenance of accounts by the Municipalities and the auditing of such accounts.",word_count:26},{article:"243ZA",title:"Elections to the Municipalities",description:`(1) The superintendence, direction and control of the preparation of electoral rolls for, and the conduct of, all elections to the Municipalities shall be vested in the State Election Commission referred to in article 243K.

 

(2) Subject to the provisions of this Constitution, the Legislature of a State may, by law, make provision with respect to all matters relating to, or in connection with, elections to the Municipalities.`,word_count:68},{article:"243ZB",title:"Application to Union territories",description:`The provisions of this Part shall apply to the Union territories and shall, in their application to a Union territory, have effect as if the references to the Governor of a State were references to the Administrator of the Union territory appointed under article 239 and references to the Legislature or the Legislative Assembly of a State were references in relation to a Union territory having a Legislative Assembly, to that Legislative Assembly:

 

   Provided that the President may, by public notification, direct that the provisions of this Part shall apply to any Union territory or part thereof subject to such exceptions and modifications as he may specify in the notification.`,word_count:110},{article:"243ZC",title:"Part not to apply to certain areas",description:`(1) Nothing in this Part shall apply to the Scheduled Areas referred to in clause (1), and the tribal areas referred to in clause (2), of article 244.

 

(2) Nothing in this Part shall be construed to affect the functions and powers of the Darjeeling Gorkha Hill Council constituted under any law for the time being in force for the hill areas of the district of Darjeeling in the State of West Bengal.

 

(3) Notwithstanding anything in this Constitution, Parliament may, by law, extend the provisions of this Part to the Scheduled Areas and the tribal areas referred to in clause (1) subject to such exceptions and modifications as may be specified in such law, and no such law shall be deemed to be an amendment of this Constitution for the purposes of article 368.`,word_count:135},{article:"243ZD",title:"Committee for district planning",description:`(1) There shall be constituted in every State at the district level a District Planning Committee to consolidate the plans prepared by the Panchayats and the Municipalities in the district and to prepare a draft development plan for the district as a whole.

 

(2) The Legislature of a State may, by law, make provision with respect to —

 

(a) the composition of the District Planning Committees;

 

(b) the manner in which the seats in such Committees shall be filled:

 

   Provided that not less than four-fifths of the total number of members of such Committee shall be elected by, and from amongst, the elected members of the Panchayat at the district level and of the Municipalities in the district in proportion to the ratio between the population of the rural areas and of the urban areas in the district;

 

(c) the functions relating to district planning which may be assigned to such Committees;

 

(d) the manner in which the Chairpersons of such Committees shall be chosen.

 

(3) Every District Planning Committee shall, in preparing the draft development plan, —

 

(a) have regard to —

 

(i) matters of common interest between the Panchayats and the Municipalities including spatial planning, sharing of water and other physical and natural resources, the integrated development of infrastructure and environmental conservation;

 

(ii) the extent and type of available resources whether financial or otherwise;

 

(b) consult such institutions and organisations as the Governor may, by order, specify.

 

(4) The Chairperson of every District Planning Committee shall forward the development plan, as recommended by such Committee, to the Government of the State.`,word_count:263},{article:"243ZE",title:"Committee for Metropolitan planning",description:`(1) There shall be constituted in every Metropolitan area a Metropolitan Planning Committee to prepare a draft development plan for the Metropolitan area as a whole.

 

(2) The Legislature of a State may, by law, make provision with respect to —

 

(a) the composition of the Metropolitan Planning Committees;

 

(b) the manner in which the seats in such Committees shall be filled:

 

   Provided that not less than two-thirds of the members of such Committee shall be elected by, and from amongst, the elected members of the Municipalities and Chairpersons of the Panchayats in the Metropolitan area in proportion to the ratio between the population of the Municipalities and of the Panchayats in that area;

 

(c) the representation in such Committees of the Government of India and the Government of the State and of such organisations and Institutions as may be deemed necessary for carrying out the functions assigned to such Committees;

 

(d) the functions relating to planning and coordination for the Metropolitan area which may be assigned to such Committees;

 

(e) the manner in which the Chairpersons of such Committees shall be chosen.

 

(3) Every Metropolitan Planning Committee shall, in preparing the draft development plan, —

 

(a) have regard to —

 

(i) the plans prepared by the Municipalities and the Panchayats in the Metropolitan area;

 

(ii) matters of common interest between the Municipalities and the Panchayats, including co-ordinated spatial planning of the area, sharing of water and other physical and natural resources, the integrated development of infrastructure and environmental conservation;

 

(iii) the overall objectives and priorities set by the Government of India and the Government of the State;

 

(iv) the extent and nature of investments likely to be made in the Metropolitan area by agencies of the Government of India and of the Government of the State and other available resources whether financial or otherwise;

 

(b) consult such institutions and organisations as the Governor may, by order, specify.

 

(4) The Chairperson of every Metropolitan Planning Committee shall forward the development plan, as recommended by such Committee, to the Government of the State.`,word_count:342},{article:"243ZF",title:"Continuance of existing laws and Municipalities",description:`Notwithstanding anything in this Part, any provision of any law relating to Municipalities in force in a State immediately before the commencement of the Constitution (Seventy-fourth Amendment) Act, 1992, which is inconsistent with the provisions of this Part, shall continue to be in force until amended or repealed by a competent Legislature or other competent authority or until the expiration of one year from such commencement, whichever is earlier:

 

   Provided that all the Municipalities existing immediately before such commencement shall continue till the expiration of their duration, unless sooner dissolved by a resolution passed to that effect by the Legislative Assembly of that State or, in the case of a State having a Legislative Council, by each House of the Legislature of that State.`,word_count:124},{article:"243ZG",title:"Bar to interference by courts in electoral matters",description:`Notwithstanding anything in this Constitution, —

 

(a) the validity of any law relating to the delimitation of constituencies or the allotment of seats to such constituencies, made or purporting to be made under article 243ZA shall not be called in question in any court;

 

(b) no election to any Municipality shall be called in question except by an election petition presented to such authority and in such manner as is provided for by or under any law made by the Legislature of a State.`,word_count:84}]},{part:"Part IXB: Co-operative Societies",part_number:"IXB",article_count:13,word_count:1907,articles:[{article:"243ZH",title:"Definitions",description:`In this Part, unless the context otherwise requires,—

 

(a) "authorised person" means a person referred to as such in article 243ZQ;

 

(b) "board" means the board of directors or the governing body of a co-operative society, by whatever name called, to which the direction and control of the management of the affairs of a society is entrusted to;

 

(c) "co-operative society" means a society registered or deemed to be registered under any law relating to co-operative societies for the time being in force in any State;

 

(d) "multi-State co-operative society" means a society with objects not confined to one State and registered or deemed to be registered under any law for the time being in force relating to such cooperatives;

 

(e) "Office bearer" means a President, Vice-President, Chairperson, Vice-Chairperson, Secretary or Treasurer, of a co-operative society and includes any other person to be elected by the board of any cooperative society;

 

(f) "Registrar" means the Central Registrar appointed by the Central Government in relation to the multi-State co-operative societies and the Registrar for co-operative societies appointed by the State Government under the law made by the Legislature of a State in relation to co-operative societies;

 

(g) "State Act" means any law made by the Legislature of a State;

 

(h) "State level co-operative society" means a co-operative society having its area of operation extending to the whole of a State and defined as such in any law made by the Legislature of a State.`,word_count:243},{article:"243ZI",title:"Incorporation of co-operative societies",description:"Subject to the provisions of this Part, the Legislature of a State may, by law, make provisions with respect to the incorporation, regulation and winding up of co-operative societies based on the principles of voluntary formation, democratic membercontrol, member-economic participation and autonomous functioning.",word_count:43},{article:"243ZJ",title:"Number and term of members of board and its office bearers",description:`(1) The board shall consist of such number of directors as may be provided by the Legislature of a State, by law:

 

Provided that the maximum number of directors of a co-operative society shall not exceed twenty-one:

 

Provided further that the Legislature of a State shall, by law, provide for the reservation of one seat for the Scheduled Castes or the Scheduled Tribes and two seats for women on board of every co-operative society consisting of individuals as members and having members from such class of category of persons.

 

(2) The term of office of elected members of the board and its office bearers shall be five years from the date of election and the term of office bearers shall be coterminous with the term of the board:Provided that the board may fill a casual vacancy on the board by nomination out of the same class of members in respect of which the casual vacancy has arisen, if the term of office of the board is less than half of its original term.

 

(3) The Legislature of a State shall, by law, make provisions for co-option of persons to be members of the board having experience in the field of banking, management, finance or specialisation in any other field relating to the objects and activities undertaken by the co-operative society, as members of the board of such society:

 

Provided that the number of such co-opted members shall not exceed two in addition to twenty-one directors specified in the first proviso to clause (1):

 

Provided further that such co-opted members shall not have the right to vote in any election of the cooperative society in their capacity as such member or to be eligible to be elected as office bearers of the board:

 

Provided also that the functional directors of a co-operative society shall also be the members of the board and such members shall be excluded for the purpose of counting the total number of directors specified in the first proviso to clause (1).`,word_count:334},{article:"243ZK",title:"Election of members of board",description:`(1) Notwithstanding anything contained in any law made by the Legislature of a State, the election of a board shall be conducted before the expiry of the term of the board so as to ensure that the newly elected members of the board assume office immediately on the expiry of the term of the office of members of the outgoing board.

 

(2) The superintendence, direction and control of the preparation of electoral rolls for, and the conduct of, all elections to a co-operative society shall vest in such an authority or body, as may be provided by the Legislature of a State, by law:

 

Provided that the Legislature of a State may, by law, provide for the procedure and guidelines for the conduct of such elections.`,word_count:126},{article:"243ZL",title:"Supersession and suspension of board and interim management",description:`(1) Notwithstanding anything contained in any law for the time being in force, no board shall be superseded or kept under supersession for a period exceeding six months:

 

Provided that the board may be superseded or kept under suspension in a case—

 

(i) of its persistent default; or

 

(ii) of negligence in the performance of its duties; or

 

(iii) the board has committed any act prejudicial to the interests of the co-operative society or its members; or

 

(iv) there is stalemate in the constitution or functions of the board; or (v) the authority or body as provided by the Legislature of a State, by law, under clause (2) of article 243ZK, has failed to conduct elections in accordance with the provisions of the State Act:

 

Provided further that the board of any such co-operative society shall not be superseded or kept under suspension where there is no Government shareholding or loan or financial assistance or any guarantee by the Government:

 

Provided also that in case of a co-operative society carrying on the business of banking, the provisions of the Banking Regulation Act, 1949 shall also apply:

 

Provided also that in case of a co-operative society, other than a multi- State co-operative society, carrying on the business of banking, the provisions of this clause shall have the effect as if for the words ―six months‖, the words "one year" had been substituted.

 

(2) In case of supersession of a board, the administrator appointed to manage the affairs of such cooperative society shall arrange for conduct of elections within the period specified in clause (1) and hand over the management to the elected board.

 

(3) The Legislature of a State may, by law, make provisions for the conditions of service of the administrator.`,word_count:291},{article:"243ZM",title:"Audit of accounts of co-operative societies",description:`(1) The Legislature of a State may, by law, make provisions with respect to the maintenance of accounts by the co-operative societies and the auditing of such accounts at least once in each financial year. 

 

(2) The Legislature of a State shall, by law, lay down the minimum qualifications and experience of auditors and auditing firms that shall be eligible for auditing accounts of the co-operative societies.

 

(3) Every co-operative society shall cause to be audited by an auditor or auditing firms referred to in clause (2) appointed by the general body of the co-operative society:

 

Provided that such auditors or auditing firms shall be appointed from a panel approved by a State Government or an authority authorised by the State Government in this behalf.

 

(4) The accounts of every co-operative society shall be audited within six months of the close of the financial year to which such accounts relate.

 

(5) The audit report of the accounts of an apex co-operative society, as may be defined by the State Act, shall be laid before the State Legislature in the manner, as may be provided by the State Legislature, by law.`,word_count:190},{article:"243ZN",title:"Convening of general body meetings",description:"The Legislature of a State may, by law, make provisions that the annual general body meeting of every co-operative society shall be convened within a period of six months of close of the financial year to transact the business as may be provided in such law.",word_count:46},{article:"243ZO",title:"Right of a member to get information",description:`(1) The Legislature of a State may, by law, provide for access to every member of a co-operative society to the books, information and accounts of the cooperative society kept in regular transaction of its business with such members.

 

(2) The Legislature of a State may, by law, make provisions to ensure the participation of members of the management of the co-operative society providing minimum requirement of attending meetings by the members and utilising the minimum level of services as may be provided in such law.

 

(3) The Legislature of a State may, by law, provide for co-operative education and training for its members.`,word_count:104},{article:"243ZP",title:"Returns",description:`(1) Every co-operative society shall file returns, within six months of the close of every financial year, to the authority designated by the State Government including the following matters, namely:—

 

(a) annual report of its activities;

 

(b) its audited statement of accounts;

 

(c) plan for surplus disposal as approved by the general body of the co-operative society;

 

(d) list of amendments to the bye-laws of the co-operative society, if any; (e) declaration regarding date of holding of its general body meeting and conduct of elections when due; and

 

(f) any other information required by the Registrar in pursuance of any of the provisions of the State Act.`,word_count:107},{article:"243ZQ",title:"Offences and Penalties",description:`(1) The Legislature of a State may, by law, make provisions for the offences relating to the co-operative societies and penalties for such offences.

 

(2) A law made by the Legislature of a State under clause (1) shall include the commission of the following act or omission as offences, namely:-

 

(a) a co-operative society or an officer or member thereof wilfully makes a false return or furnishes false information, or any person wilfully not furnishes any information required from him by a person authorised in this behalf under the provisions of the State Act;

 

(b) any person wilfully or without any reasonable excuse disobeys any summons, requisition or lawful written order issued under the provisions of the State Act;

 

(c) any employer who, without sufficient cause, fails to pay to a co-operative society amount deducted by him from its employee within a period of fourteen days from the date on which such deduction is made;

 

(d) any officer or custodian who wilfully fails to handover custody of books, accounts, documents, records, cash, security and other property belonging to a co-operative society of which he is an officer or custodian, to an authorised person; and

 

(e) whoever, before, during or after the election of members of the board or office bearers, adopts any corrupt practice.`,word_count:214},{article:"243ZR",title:"Application to multi-State co-operative societies",description:'The provisions of this Part shall apply to the multi-State co-operative societies subject to the modification that any reference to "Legislature of a State", "State Act" or State Government" shall be construed as a reference to "Parliament", "Central Act" or "the Central Government" respectively.',word_count:44},{article:"243ZS",title:"Application to Union territories",description:`The provisions of this Part shall apply to the Union territories and shall, in their application to a Union territory, having no Legislative Assembly as if the references to the Legislature of a State were a reference to the administrator thereof appointed under article 239 and, in relation to a Union territory having a Legislative Assembly, to that Legislative Assembly:

 

Provided that the President may, by notification in the Official Gazette, direct that the provisions of this Part shall not apply to any Union territory or part thereof as he may specify in the notification.`,word_count:95},{article:"243ZT",title:"Continuance of existing laws",description:"Notwithstanding anything in this Part, any provision of any law relating to co-operative societies in force in a State immediately before the commencement of the Constitution (Ninety-seventh Amendment) Act, 2011, which is inconsistent with the provisions of this Part, shall continue to be in force until amended or repealed by a competent Legislature or other competent authority or until the expiration of one year from such commencement, whichever is less.",word_count:70}]},{part:"Part X: Scheduled & Tribal Areas",part_number:"X",article_count:2,word_count:406,articles:[{article:"244",title:"Administration of Scheduled Areas and Tribal Areas",description:`(1) The provisions of the Fifth Schedule shall apply to the administration and control of the Scheduled Areas and Scheduled Tribes in any State other than the States of Assam, Meghalaya, Tripura and Mizoram.

 

(2) The provisions of the Sixth Schedule shall apply to the administration of the tribal areas in the States of Assam Meghalaya, Tripura and Mizoram.`,word_count:59},{article:"244A",title:"Formation of an autonomous State comprising certain tribal areas in Assam and creation of local Legislature or Council of Ministers or both therefor",description:`(1) Notwithstanding anything in this Constitution, Parliament may, by law, form within the State of Assam an autonomous State (comprising whether wholly or in part) all or any of the tribal areas specified in Part I of the table appended to paragraph 20 of the Sixth Schedule and create therefor —

 

(a) a body, whether elected or partly nominated and partly elected, to function as a Legislature for the autonomous State, or

 

(b) a Council of Ministers,

 

or both with such constitution, powers and functions, in each case, as may be specified in the law.

 

(2) Any such law as is referred to in clause (1) may, in particular, —

 

(a) specify the matters enumerated in the State List or the Concurrent List with respect to which the Legislature of the autonomous State shall have power to make laws for the whole or any part thereof, whether to the exclusion of the Legislature of the State of Assam or otherwise;

 

(b) define the matters with respect to which the executive power of the autonomous State shall extend;

 

(c) provide that any tax levied by the State of Assam shall be assigned to the autonomous State in so far as the proceeds thereof are attributable to the autonomous State;

 

(d) provide that any reference to a State in any article of this Constitution shall be construed as including a reference to the autonomous State; and

 

(e) make such supplemental, incidental and consequential provisions as may be deemed necessary.

 

(3) An amendment of any such law as aforesaid in so far as such amendment relates to any of the matters specified in sub-clause (a) or sub-clause (b) of clause (2) shall have no effect unless the amendment is passed in each House of Parliament by not less than two-thirds of the members present and voting.

 

(4) Any such law as is referred to in this article shall not be deemed to be an amendment of this Constitution for the purposes of article 368 notwithstanding that it contains any provision which amends or has the effect of amending this Constitution.`,word_count:347}]},{part:"Part XI: Relations between Union and States",part_number:"XI",article_count:20,word_count:2422,articles:[{article:"245",title:"Extent of laws made by Parliament and by the Legislatures of States",description:`(1) Subject to the provisions of this Constitution, Parliament may make laws for the whole or any part of the territory of India, and the Legislature of a State may make laws for the whole or any part of the State.

 

(2) No law made by Parliament shall be deemed to be invalid on the ground that it would have extra-territorial operation.`,word_count:62},{article:"246",title:"Subject-matter of laws made by Parliament and by the Legislatures of States",description:`(1) Notwithstanding anything in clauses (2) and (3), Parliament has exclusive power to make laws with respect to any of the matters enumerated in List I in the Seventh Schedule (in this Constitution referred to as the “Union List”).

 

(2) Notwithstanding anything in clause (3), Parliament, and, subject to clause (1), the Legislature of any State also, have power to make laws with respect to any of the matters enumerated in List III in the Seventh Schedule (in this Constitution referred to as the “Concurrent List”).

 

(3) Subject to clauses (1) and (2), the Legislature of any State has exclusive power to make laws for such State or any part thereof with respect to any of the matters enumerated in List II in the Seventh Schedule (in this Constitution referred to as the “State List”).

 

(4) Parliament has power to make laws with respect to any matter for any part of the territory of India not included in a State notwithstanding that such matter is a matter enumerated in the State List.`,word_count:172},{article:"247",title:"Power of Parliament to provide for the establishment of certain additional courts",description:"Notwithstanding anything in this Chapter, Parliament may by law provide for the establishment of any additional courts for the better administration of laws made by Parliament or of any existing laws with respect to a matter enumerated in the Union List.",word_count:41},{article:"248",title:"Residuary powers of legislation",description:`(1) Parliament has exclusive power to make any law with respect to any matter not enumerated in the Concurrent List or State List.

 

(2) Such power shall include the power of making any law imposing a tax not mentioned in either of those Lists.`,word_count:44},{article:"249",title:"Power of Parliament to legislate with respect to a matter in the State List in the national interest",description:`(1) Notwithstanding anything in the foregoing provisions of this Chapter, if the Council of States has declared by resolution supported by not less than twothirds of the members present and voting that it is necessary or expedient in the national interest that Parliament should make laws with respect to any matter enumerated in the State List specified in the resolution, it shall be lawful for Parliament to make laws for the whole or any part of the territory of India with respect to that matter while the resolution remains in force.

 

(2) A resolution passed under clause (1) shall remain in force for such period not exceeding one year as may be specified therein:

 

   Provided that, if and so often as a resolution approving the continuance in force of any such resolution is passed in the manner provided in clause (1), such resolution shall continue in force for a further period of one year from the date on which under this clause it would otherwise have ceased to be in force.

 

(3) A law made by Parliament which Parliament would not but for the passing of a resolution under clause (1) have been competent to make shall, to the extent of the incompetency, cease to have effect on the expiration of a period of six months after the resolution has ceased to be in force, except as respects things done or omitted to be done before the expiration of the said period.`,word_count:242},{article:"250",title:"Power of Parliament to legislate with respect to any matter in the State List if a Proclamation of Emergency is in operation",description:`(1) Notwithstanding anything in this Chapter, Parliament shall, while a Proclamation of Emergency is in operation, have power to make laws for the whole or any part of the territory of India with respect to any of the matters enumerated in the State List.

 

(2) A law made by Parliament which Parliament would not but for the issue of a Proclamation of Emergency have been competent to make shall, to the extent of the incompetency, cease to have effect on the expiration of a period of six months after the Proclamation has ceased to operate, except as respects things done or omitted to be done before the expiration of the said period.`,word_count:112},{article:"251",title:"Inconsistency between laws made by Parliament under articles 249 and 250 and laws made by the Legislatures of States",description:"Nothing in articles 249 and 250 shall restrict the power of the Legislature of a State to make any law which under this Constitution it has power to make, but if any provision of a law made by the Legislature of a State is repugnant to any provision of a law made by Parliament which Parliament has under either of the said articles power to make, the law made by Parliament, whether passed before or after the law made by the Legislature of the State, shall prevail, and the law made by the Legislature of the State shall to the extent of the repugnancy, but so long only as the law made by Parliament continues to have effect, be inoperative.",word_count:120},{article:"252",title:"Power of Parliament to legislate for two or more States by consent and adoption of such legislation by",description:`(1) If it appears to the Legislatures of two or more States to be desirable that any of the matters with respect to which Parliament has no power to make laws for the States except as provided in articles 249 and 250 should be regulated in such States by Parliament by law, and if resolutions to that effect are passed by all the Houses of the Legislatures of those States, it shall be lawful for Parliament to pass an Act for regulating that matter accordingly, and any Act so passed shall apply to such States and to any other State by which it is adopted afterwards by resolution passed in that behalf by the House or, where there are two Houses, by each of the Houses of the Legislature of that State.

 

(2) Any Act so passed by Parliament may be amended or repealed by an Act of Parliament passed or adopted in like manner but shall not, as respects any State to which it applies, be amended or repealed by an Act of the Legislature of that State.`,word_count:179},{article:"253",title:"Legislation for giving effect to international agreements",description:"Notwithstanding anything in the foregoing provisions of this Chapter, Parliament has power to make any law for the whole or any part of the territory of India for implementing any treaty, agreement or convention with any other country or countries or any decision made at any international conference, association or other body",word_count:52},{article:"254",title:"Inconsistency between laws made by Parliament and laws made by the Legislatures of States",description:`(1) If any provision of a law made by the Legislature of a State is repugnant to any provision of a law made by Parliament which Parliament is competent to enact, or to any provision of an existing law with respect to one of the matters enumerated in the Concurrent List, then, subject to the provisions of clause (2), the law made by Parliament, whether passed before or after the law made by the Legislature of such State, or, as the case may be, the existing law, shall prevail and the law made by the Legislature of the State shall, to the extent of the repugnancy, be void.

 

(2) Where a law made by the Legislature of a State with respect to one of the matters enumerated in the Concurrent List contains any provision repugnant to the provisions of an earlier law made by Parliament or an existing law with respect to that matter, then, the law so made by the Legislature of such State shall, if it has been reserved for the consideration of the President and has received his assent, prevail in that State:

 

   Provided that nothing in this clause shall prevent Parliament from enacting at any time any law with respect to the same matter including a law adding to, amending, varying or repealing the law so made by the Legislature of the State.`,word_count:227},{article:"255",title:"Requirements as to recommendations and previous sanctions to be regarded as matters of procedure only",description:`No Act of Parliament or of the Legislature of a State and no provision in any such Act, shall be invalid by reason only that some recommendation or previous sanction required by this Constitution was not given, if assent to that Act was given —

 

(a) where the recommendation required was that of the Governor, either by the Governor or by the President;

 

(b) where the recommendation required was that of the Rajpramukh, either by the Rajpramukh or by the President;

 

(c) where the recommendation or previous sanction required was that of the President, by the President.`,word_count:97},{article:"256",title:"Obligation of States and the Union",description:"The executive power of every State shall be so exercised as to ensure compliance with the laws made by Parliament and any existing laws which apply in that State, and the executive power of the Union shall extend to the giving of such directions to a State as may appear to the Government of India to be necessary for that purpose.",word_count:61},{article:"257",title:"Control of the Union over States in certain cases",description:`(1) The executive power of every State shall be so exercised as not to impede or prejudice the exercise of the executive power of the Union, and the executive power of the Union shall extend to the giving of such directions to a State as may appear to the Government of India to be necessary for that purpose.

 

(2) The executive power of the Union shall also extend to the giving of directions to a State as to the construction and maintenance of means of communication declared in the direction to be of national or military importance:

 

   Provided that nothing in this clause shall be taken as restricting the power of Parliament to declare highways or waterways to be national highways or national waterways or the power of the Union with respect to the highways or waterways so declared or the power of the Union to construct and maintain means of communication as part of its functions with respect to naval, military and air force works.

 

(3) The executive power of the Union shall also extend to the giving of directions to a State as to the measures to be taken for the protection of the railways within the State.

 

(4) Where in carrying out any direction given to a State under clause (2) as to the construction or maintenance of any means of communication or under clause (3) as to the measures to be taken for the protection of any railway, costs have been incurred in excess of those which would have been incurred in the discharge of the normal duties of the State if such direction had not been given, there shall be paid by the Government of India to the State such sum as may be agreed, or, in default of agreement, as may be determined by an arbitrator appointed by the Chief Justice of India, in respect of the extra costs so incurred by the State.`,word_count:320},{article:"258",title:"Power of the Union to confer powers, etc, on States in certain cases",description:`(1) Notwithstanding anything in this Constitution, the President may, with the consent of the Government of a State, entrust either conditionally or unconditionally to that Government or to its officers functions in relation to any matter to which the executive power of the Union extends.

 

(2) A law made by Parliament which applies in any State may, notwithstanding that it relates to a matter with respect to which the Legislature of the State has no power to make laws, confer powers and impose duties, or authorise the conferring of powers and the imposition of duties, upon the State or officers and authorities thereof.

 

(3) Where by virtue of this article powers and duties have been conferred or imposed upon a State or officers or authorities thereof, there shall be paid by the Government of India to the State such sum as may be agreed, or, in default of agreement, as may be determined by an arbitrator appointed by the Chief Justice of India, in respect of any extra costs of administration incurred by the State in connection with the exercise of those powers and duties.`,word_count:185},{article:"260",title:"Jurisdiction of the Union in relation to territories outside India",description:"The Government of India may by agreement with the Government of any territory not being part of the territory of India undertake any executive, legislative or judicial functions vested in the Government of such territory, but every such agreement shall be subject to, and governed by, any law relating to the exercise of foreign jurisdiction for the time being in force.",word_count:61},{article:"261",title:"Public acts, records and judicial proceedings",description:`(1) Full faith and credit shall be given throughout the territory of India to public acts, records and judicial proceedings of the Union and of every State.

 

(2) The manner in which and the conditions under which the acts, records and proceedings referred to in clause (1) shall be proved and the effect thereof determined shall be as provided by law made by Parliament.

 

(3) Final judgments or orders delivered or passed by civil courts in any part of the territory of India shall be capable of execution anywhere within that territory according to law.`,word_count:95},{article:"262",title:"Adjudication of disputes relating to waters of interState rivers or river valleys",description:`(1) Parliament may by law provide for the adjudication of any dispute or complaint with respect to the use, distribution or control of the waters of, or in, any inter-State river or river valley.

 

(2) Notwithstanding anything in this Constitution, Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute or complaint as is referred to in clause (1).`,word_count:72},{article:"263",title:"Provisions with respect to an inter-State Council",description:`If at any time it appears to the President that the public interests would be served by the establishment of a Council charged with the duty of —

 

(a) inquiring into and advising upon disputes which may have arisen between States;

 

(b) investigating and discussing subjects in which some or all of the States, or the Union and one or more of the States, have a common interest; or

 

(c) making recommendations upon any such subject and, in particular, recommendations for the better co-ordination of policy and action with respect to that subject, it shall be lawful for the President by order to establish such a Council, and to define the nature of the duties to be performed by it and its organisation and procedure.`,word_count:125},{article:"246A",title:"Special provision with respect to goods and services tax",description:`(1) Notwithstanding anything contained in articles 246 and 254, Parliament, and, subject to clause (2), the Legislature of every State, have power to make laws with respect to goods and services tax imposed by the Union or by such State.

(2) Parliament has exclusive power to make laws with respect to goods and services tax where the supply of goods, or of services, or both takes place in the course of inter-State trade or commerce.

Explanation.—The provisions of this article, shall, in respect of goods and services tax referred to in clause (5) of article 279A, take effect from the date recommended by the Goods and Services Tax Council.]`,word_count:109},{article:"258A",title:"Power of the States to entrust functions to the Union",description:"Notwithstanding anything in this Constitution, the Governor of a State may, with the consent of the Government of India, entrust either conditionally or unconditionally to that Government or to its officers functions in relation to any matter to which the executive power of the State extends.",word_count:46}]},{part:"Part XII: Finance, Property & Contracts",part_number:"XII",article_count:39,word_count:6466,articles:[{article:"264",title:"Interpretation",description:"In this Part, “Finance Commission” means a Finance Commission constituted under article 280.",word_count:13},{article:"265",title:"Taxes not to be imposed save by authority of law",description:"No tax shall be levied or collected except by authority of law.",word_count:12},{article:"266",title:"Consolidated Funds and public accounts of India and of the States",description:`(1) Subject to the provisions of article 267 and to the provisions of this Chapter with respect to the assignment of the whole or part of the net proceeds of certain taxes and duties to States, all revenues received by the Government of India, all loans raised by that Government by the issue of treasury bills, loans or ways and means advances and all moneys received by that Government in repayment of loans shall form one consolidated fund to be entitled “the Consolidated Fund of India”, and all revenues received by the Government of a State, all loans raised by that Government by the issue of treasury bills, loans or ways and means advances and all moneys received by that Government in repayment of loans shall form one consolidated fund to be entitled “the Consolidated Fund of the State”.

 

(2) All other public moneys received by or on behalf of the Government of India or the Government of a State shall be credited to the public account of India or the public account of the State, as the case may be.

 

(3) No moneys out of the Consolidated Fund of India or the Consolidated Fund of a State shall be appropriated except in accordance with law and for the purposes and in the manner provided in this Constitution.`,word_count:218},{article:"267",title:"Contingency Fund",description:`(1) Parliament may by law establish a Contingency Fund in the nature of an imprest to be entitled “the Contingency Fund of India” into which shall be paid from time to time such sums as may be determined by such law, and the said Fund shall be placed at the disposal of the President to enable advances to be made by him out of such Fund for the purposes of meeting unforeseen expenditure pending authorisation of such expenditure by Parliament by law under article 115 or article 116.

 

(2) The Legislature of a State may by law establish a Contingency Fund in the nature of an imprest to be entitled “the Contingency Fund of the State” into which shall be paid from time to time such sums as may be determined by such law, and the said Fund shall be placed at the disposal of the Governor of the State to enable advances to be made by him out of such Fund for the purposes of meeting unforeseen expenditure pending authorisation of such expenditure by the Legislature of the State by law under article 205 or article 206.`,word_count:188},{article:"268",title:"Duties levied by the Union but collected and appropriated by the States",description:`(1) Such stamp duties and such duties of excise on medicinal and toilet preparations as are mentioned in the Union List shall be levied by the Government of India but shall be collected,—

 

(a) in the case where such duties are leviable within any Union territory, by the Government of India, and

 

(b) in other cases, by the States within which such duties are respectively leviable.

 

(2) The proceeds in any financial year of any such duty leviable within any State shall not form part of the Consolidated Fund of India, but shall be assigned to that State.`,word_count:98},{article:"268A",title:"Service tax levied by Union and collected and appropriated by the Union and the States",description:`(1) Taxes on services shall be levied by the Government of India and such tax shall be collected and appropriated by the Government of India and the States in the manner provided in clause (2).

 

(2) The proceeds in any financial year of any such tax levied in accordance with the provisions of clause (1) shall be —

 

(a) collected by the Government of India and the States;

 

(b) appropriated by the Government of India and the States,

 

in accordance with such principles of collection and appropriation as may be formulated by Parliament by law.`,word_count:95},{article:"269",title:"Taxes levied and collected by the Union but assigned to the States",description:`(1) Taxes on the sale or purchase of goods and taxes on the consignment of goods shall be levied and collected by the Government of India but shall be assigned and shall be deemed to have been assigned to the States on or after the 1st day of April, 1996 in the manner provided in clause (2).

 

Explanation. — For the purposes of this clause, —

 

(a) the expression “taxes on the sale or purchase of goods” shall mean taxes on sale or purchase of goods other than newspapers, where such sale or purchase takes place in the course of inter-State trade or commerce;

 

(b) the expression “taxes on the consignment of goods” shall mean taxes on the consignment of goods (whether the consignment is to the person making it or to any other person), where such consignment takes place in the course of inter-State trade or commerce.

 

(2) The net proceeds in any financial year of any such tax, except in so far as those proceeds represent proceeds attributable to Union territories, shall not form part of the Consolidated Fund of India, but shall be assigned to the States within which that tax is leviable in that year, and shall be distributed among those States in accordance with such principles of distribution as may be formulated by Parliament by law. 

 

(3) Parliament may by law formulate principles for determining when a sale or purchase of, or consignment of, goods] takes place in the course of inter-State trade or commerce.`,word_count:250},{article:"269A",title:"Levy and collection of goods and services tax in course of inter-State trade or commerce",description:`(1) Goods and services tax on supplies in the course of inter-State trade or commerce shall be levied and collected by the Government of India and such tax shall be apportioned between the Union and the States in the manner as may be provided by Parliament by law on the recommendations of the Goods and Services Tax Council.

 

Explanation.—For the purposes of this clause, supply of goods, or of services, or both in the course of import into the territory of India shall be deemed to be supply of goods, or of services, or both in the course of inter-State trade or commerce.

 

(2) The amount apportioned to a State under clause (1) shall not form part of the Consolidated Fund of India.

 

(3) Where an amount collected as tax levied under clause (1) has been used for payment of the tax levied by a State under article 246A, such amount shall not form part of the Consolidated Fund of India.

 

(4) Where an amount collected as tax levied by a State under article 246A has been used for payment of the tax levied under clause (1), such amount shall not form part of the Consolidated Fund of the State.

 

(5) Parliament may, by law, formulate the principles for determining the place of supply, and when a supply of goods, or of services, or both takes place in the course of inter-State trade or commerce.`,word_count:235},{article:"270",title:"Taxes levied and distributed between the Union and the States",description:`(1) All taxes and duties referred to in the Union List, except the duties and taxes referred to in articles 268 and 269, respectively, surcharge on taxes and duties referred to in article 271 and any cess levied for specific purposes under any law made by Parliament shall be levied and collected by the Government of India and shall be distributed between the Union and the States in the manner provided in clause (2).

 

 

(2) Such percentage, as may be prescribed, of the net proceeds of any such tax or duty in any financial year shall not form part of the Consolidated Fund of India, but shall be assigned to the States within which that tax or duty is leviable in that year, and shall be distributed among those States in such manner and from such time as may be prescribed in the manner provided in clause (3).

 

(3) In this article, “prescribed” means, —

 

(i) until a Finance Commission has been constituted, prescribed by the President by order, and

 

(ii) after a Finance Commission has been constituted, prescribed by the President by order after considering the recommendations of the Finance Commission.`,word_count:192},{article:"271",title:"Surcharge on certain duties and taxes for purposes of the Union",description:"Notwithstanding anything in articles 269 and 270, Parliament may at any time increase any of the duties or taxes referred to in those articles by a surcharge for purposes of the Union and the whole proceeds of any such surcharge shall form part of the Consolidated Fund of India.",word_count:49},{article:"273",title:"Grants in lieu of export duty on jute and jute products",description:`(1) There shall be charged on the Consolidated Fund of India in each year as grants-in-aid of the revenues of the States of Assam, Bihar, Orissa and West Bengal, in lieu of assignment of any share of the net proceeds in each year of export duty on jute and jute products to those States, such sums as may be prescribed.

 

(2) The sums so prescribed shall continue to be charged on the Consolidated Fund of India so long as any export duty on jute or jute products continues to be levied by the Government of India or until the expiration of ten years from the commencement of this Constitution whichever is earlier.

 

(3) In this article, the expression “prescribed” has the same meaning as in article 270.`,word_count:127},{article:"274",title:"Prior recommendation of President required to Bills affecting taxation in which States are interested",description:`(1) No Bill or amendment which imposes or varies any tax or duty in which States are interested, or which varies the meaning of the expression “agricultural income” as defined for the purposes of the enactments relating to Indian income-tax, or which affects the principles on which under any of the foregoing provisions of this Chapter moneys are or may be distributable to States, or which imposes any such surcharge for the purposes of the Union as is mentioned in the foregoing provisions of this Chapter, shall be introduced or moved in either House of Parliament except on the recommendation of the President.

 

(2) In this article, the expression “tax or duty in which States are interested” means —

 

(a) a tax or duty the whole or part of the net proceeds whereof are assigned to any State; or

 

(b) a tax or duty by reference to the net proceeds whereof sums are for the time being payable out of the Consolidated Fund of India to any State.`,word_count:168},{article:"275",title:"Grants from the Union to certain States",description:`(1) Such sums as Parliament may by law provide shall be charged on the Consolidated Fund of India in each year as grants-in-aid of the revenues of such States as Parliament may determine to be in need of assistance, and different sums may be fixed for different States:

 

   Provided that there shall be paid out of the Consolidated Fund of India as grants-in-aid of the revenues of a State such capital and recurring sums as may be necessary to enable that State to meet the costs of such schemes of development as may be undertaken by the State with the approval of the Government of India for the purpose of promoting the welfare of the Scheduled Tribes in that State or raising the level of administration of the Scheduled Areas therein to that of the administration of the rest of the areas of that State:

 

   Provided further that there shall be paid out of the Consolidated Fund of India as grants-in-aid of the revenues of the State of Assam sums, capital and recurring, equivalent to —

 

(a) the average excess of expenditure over the revenues during the two years immediately preceding the commencement of this Constitution in respect of the administration of the tribal areas specified in Part I of the table appended to paragraph 20 of the Sixth Schedule; and

 

(b) the costs of such schemes of development as may be undertaken by that State with the approval of the Government of India for the purpose of raising the level of administration of the said areas to that of the administration of the rest of the areas of that State.

 

(1A) On and from the formation of the autonomous State under article 244A, —

 

(i) any sums payable under clause (a) of the second proviso to clause (1) shall, if the autonomous State comprises all the tribal areas referred to therein, be paid to the autonomous State, and, if the autonomous State comprises only some of those tribal areas, be apportioned between the State of Assam and the autonomous State as the President may, by order, specify;

 

 

(ii) there shall be paid out of the Consolidated Fund of India as grants-in-aid of the revenues of the autonomous State sums, capital and recurring, equivalent to the costs of such schemes of development as may be undertaken by the autonomous State with the approval of the Government of India for the purpose of raising the level of administration of that State to that of the administration of the rest of the State of Assam.

 

(2) Until provision is made by Parliament under clause (1), the powers conferred on Parliament under that clause shall be exercisable by the President by order and any order made by the President under this clause shall have effect subject to any provision so made by Parliament:

 

   Provided that after a Finance Commission has been constituted no order shall be made under this clause by the President except after considering the recommendations of the Finance Commission.`,word_count:499},{article:"276",title:"Taxes on professions, trades, callings and employments",description:`(1) Notwithstanding anything in article 246, no law of the Legislature of a State relating to taxes for the benefit of the State or of a municipality, district board, local board or other local authority therein in respect of professions, trades, callings or employments shall be invalid on the ground that it relates to a tax on income.

 

(2) The total amount payable in respect of any one person to the State or to any one municipality, district board, local board or other local authority in the State by way of taxes on professions, trades, callings and employments shall not exceed 1 [two thousand and five hundred rupees] per annum.

 

(3) The power of the Legislature of a State to make laws as aforesaid with respect to taxes on professions, trades, callings and employments shall not be construed as limiting in any way the power of Parliament to make laws with respect to taxes on income accruing from or arising out of professions, trades, callings and employments.`,word_count:167},{article:"277",title:"Savings",description:"Any taxes, duties, cesses or fees which, immediately before the commencement of this Constitution, were being lawfully levied by the Government of any State or by any municipality or other local authority or body for the purposes of the State, municipality, district or other local area may, notwithstanding that those taxes, duties, cesses or fees are mentioned in the Union List, continue to be levied and to be applied to the same purposes until provision to the contrary is made by Parliament by law.",word_count:84},{article:"279",title:"Calculation of “net proceeds”, etc",description:`(1) In the foregoing provisions of this Chapter, “net proceeds” means in relation to any tax or duty the proceeds thereof reduced by the cost of collection, and for the purposes of those provisions the net proceeds of any tax or duty, or of any part of any tax or duty, in or attributable to any area shall be ascertained and certified by the Comptroller and Auditor-General of India, whose certificate shall be final.

 

(2) Subject as aforesaid, and to any other express provision of this Chapter, a law made by Parliament or an order of the President may, in any case where under this Part the proceeds of any duty or tax are, or may be, assigned to any State, provide for the manner in which the proceeds are to be calculated, for the time from or at which and the manner in which any payments are to be made, for the making of adjustments between one financial year and another, and for any other incidental or ancillary matters.`,word_count:170},{article:"279A",title:"Goods and Services Tax Council",description:`(1) The President shall, within sixty days from the date of commencement of the Constitution (One Hundred and First Amendment) Act, 2016, by order, constitute a Council to be called the Goods and Services Tax Council.

(2) The Goods and Services Tax Council shall consist of the following members, namely:—
(a) the Union Finance Minister — Chairperson;
(b) the Union Minister of State in charge of Revenue or Finance — Member;
(c) the Minister in charge of Finance or Taxation or any other Minister nominated by each State Government — Members.

(3) The Members of the Goods and Services Tax Council referred to in sub-clause (c) of clause (2) shall, as soon as may be, choose one amongst themselves to be the Vice-Chairperson of the Council for such period as they may decide.

(4) The Goods and Services Tax Council shall make recommendations to the Union and the States on—
(a) the taxes, cesses and surcharges levied by the Union, the States and the local bodies which may be subsumed in the goods and services tax;
(b) the goods and services that may be subjected to, or exempted from the goods and services tax;
(c) model Goods and Services Tax Laws, principles of levy, apportionment of Goods and Services Tax levied on supplies in the course of inter-State trade or commerce under article 269A and the principles that govern the place of supply;
(d) the threshold limit of turnover below which goods and services may be exempted from goods and services tax;
(e) the rates including floor rates with bands of goods and services tax;
(f) any special rate or rates for a specified period, to raise additional resources during any natural calamity or disaster;
(g) special provision with respect to the States of Arunachal Pradesh, Assam, Jammu and Kashmir, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, Himachal Pradesh and Uttarakhand; and
(h) any other matter relating to the goods and services tax, as the Council may decide.

(5) The Goods and Services Tax Council shall recommend the date on which the goods and services tax be levied on petroleum crude, high speed diesel, motor spirit (commonly known as petrol), natural gas and aviation turbine fuel.

(6) While discharging the functions conferred by this article, the Goods and Services Tax Council shall be guided by the need for a harmonised structure of goods and services tax and for the development of a harmonised national market for goods and services.

(7) One half of the total number of Members of the Goods and Services Tax Council shall constitute the quorum at its meetings.

(8) The Goods and Services Tax Council shall determine the procedure in the performance of its functions.

(9) Every decision of the Goods and Services Tax Council made at a meeting shall be by a majority of not less than three-fourths of the weighted votes of the members present and voting in accordance with the following principles, namely:—
(a) the vote of the Central Government shall have a weightage of one-third of the total votes cast, and
(b) the votes of all the State Governments taken together shall have a weightage of two-thirds of the total votes cast, in that meeting.

(10) No act or proceedings of the Goods and Services Tax Council shall be invalid merely by reason of—
(a) any vacancy in, or any defect in the constitution of, the Council; or
(b) any defect in the appointment of a person as a Member of the Council; or
(c) any procedural irregularity of the Council not affecting the merits of the case.

(11) The Parliament may, by law, provide for the establishment of a mechanism for the adjudication of disputes—
(a) between the Government of India and one or more States; or
(b) between the Government of India and any State or States on one side and one or more other States on the other side; or
(c) between two or more States, arising out of the recommendations of the Goods and Services Tax Council or implementation thereof.`,word_count:671},{article:"280",title:"Finance Commission",description:`(1) The President shall, within two years from the commencement of this Constitution and thereafter at the expiration of every fifth year or at such earlier time as the President considers necessary, by order constitute a Finance Commission which shall consist of a Chairman and four other members to be appointed by the President.

 

(2) Parliament may by law determine the qualifications which shall be requisite for appointment as members of the Commission and the manner in which they shall be selected.

 

(3) It shall be the duty of the Commission to make recommendations to the President as to —

 

(a) the distribution between the Union and the States of the net proceeds of taxes which are to be, or may be, divided between them under this Chapter and the allocation between the States of the respective shares of such proceeds;

 

(b) the principles which should govern the grantsin-aid of the revenues of the States out of the Consolidated Fund of India;

 

(bb) the measures needed to augment the Consolidated Fund of a State to supplement the resources of the Panchayats in the State on the basis of the recommendations made by the Finance Commission of the State; 

 

(c) the measures needed to augment the Consolidated Fund of a State to supplement the resources of the Municipalities in the State on the basis of the recommendations made by the Finance Commission of the State;

 

(d) any other matter referred to the Commission by the President in the interests of sound finance.

 

(4) The Commission shall determine their procedure and shall have such powers in the performance of their functions as Parliament may by law confer on them.`,word_count:277},{article:"281",title:"Recommendations of the Finance Commission",description:"The President shall cause every recommendation made by the Finance Commission under the provisions of this Constitution together with an explanatory memorandum as to the action taken thereon to be laid before each House of Parliament.",word_count:36},{article:"282",title:"Expenditure defrayable by the Union or a State out of its revenues",description:"The Union or a State may make any grants for any public purpose, notwithstanding that the purpose is not one with respect to which Parliament or the Legislature of the State, as the case may be, may make laws.",word_count:39},{article:"283",title:"Custody, etc, of Consolidated Funds, Contingency Funds and moneys credited to the public accounts",description:`(1) The custody of the Consolidated Fund of India and the Contingency Fund of India, the payment of moneys into such Funds, the withdrawal of moneys therefrom, the custody of public moneys other than those credited to such Funds received by or on behalf of the Government of India, their payment into the public account of India and the withdrawal of moneys from such account and all other matters connected with or ancillary to matters aforesaid shall be regulated by law made by Parliament, and, until provision in that behalf is so made, shall be regulated by rules made by the President.

 

(2) The custody of the Consolidated Fund of a State and the Contingency Fund of a State, the payment of moneys into such Funds, the withdrawal of moneys therefrom, the custody of public moneys other than those credited to such Funds received by or on behalf of the Government of the State, their payment into the public account of the State and the withdrawal of moneys from such account and all other matters connected with or ancillary to matters aforesaid shall be regulated by law made by the Legislature of the State, and, until provision in that behalf is so made, shall be regulated by rules made by the Governor of the State.`,word_count:215},{article:"284",title:"Custody of suitors’ deposits and other moneys received by public servants and courts",description:`All moneys received by or deposited with —

 

(a) any officer employed in connection with the affairs of the Union or of a State in his capacity as such, other than revenues or public moneys raised or received by the Government of India or the Government of the State, as the case may be, or

 

(b) any court within the territory of India to the credit of any cause, matter, account or persons, shall be paid into the public account of India or the public account of State, as the case may be.`,word_count:93},{article:"285",title:"Exemption of property of the Union from State taxation",description:`(1) The property of the Union shall, save in so far as Parliament may by law otherwise provide, be exempt from all taxes imposed by a State or by any authority within a State.

 

(2) Nothing in clause (1) shall, until Parliament by law otherwise provides, prevent any authority within a State from levying any tax on any property of the Union to which such property was immediately before the commencement of this Constitution liable or treated as liable, so long as that tax continues to be levied in that State.`,word_count:91},{article:"286",title:"Restrictions as to imposition of tax on the sale or purchase of goods",description:`(1) No law of a State shall impose, or authorise the imposition of, a tax on the sale or purchase of goods where such sale or purchase takes place —

 

(a) outside the State; or

 

(b) in the course of the import of the goods into, or export of the goods out of, the territory of India.

 

(2) Parliament may by law formulate principles for determining when a sale or purchase of goods takes place in any of the ways mentioned in clause (1).

 

(3) Any law of a State shall, in so far as it imposes, or authorises the imposition of, —

 

(a) a tax on the sale or purchase of goods declared by Parliament by law to be of special importance in inter-State trade or commerce; or

 

(b) a tax on the sale or purchase of goods, being a tax of the nature referred to in sub-clause (b), subclause (c) or sub-clause (d) of clause (29A) of article 366,

 

be subject to such restrictions and conditions in regard to the system of levy, rates and other incidents of the tax as Parliament may by law specify.`,word_count:188},{article:"287",title:"Exemption from taxes on electricity",description:`Save in so far as Parliament may by law otherwise provide, no law of a State shall impose, or authorise the imposition of, a tax on the consumption or sale of electricity (whether produced by a Government or other persons) which is —

 

(a) consumed by the Government of India, or sold to the Government of India for consumption by that Government; or

 

(b) consumed in the construction, maintenance or operation of any railway by the Government of India or a railway company operating that railway, or sold to that Government or any such railway company for consumption in the construction, maintenance or operation of any railway,

 

and any such law imposing, or authorising the imposition of, a tax on the sale of electricity shall secure that the price of electricity sold to the Government of India for consumption by that Government, or to any such railway company as aforesaid for consumption in the construction, maintenance or operation of any railway, shall be less by the amount of the tax than the price charged to other consumers of a substantial quantity of electricity.`,word_count:183},{article:"288",title:"Exemption from taxation by States in respect of water or electricity in certain cases",description:`(1) Save in so far as the President may by order otherwise provide, no law of a State in force immediately before the commencement of this Constitution shall impose, or authorise the imposition of, a tax in respect of any water or electricity stored, generated, consumed, distributed or sold by any authority established by any existing law or any law made by Parliament for regulating or developing any inter-State river or river-valley.

 

   Explanation. — The expression “law of a State in force” in this clause shall include a law of a State passed or made before the commencement of this Constitution and not previously repealed, notwithstanding that it or parts of it may not be then in operation either at all or in particular areas.

 

(2) The Legislature of a State may by law impose, or authorise the imposition of, any such tax as is mentioned in clause (1), but no such law shall have any effect unless it has, after having been reserved for the consideration of the President, received his assent; and if any such law provides for the fixation of the rates and other incidents of such tax by means of rules or orders to be made under the law by any authority, the law shall provide for the previous consent of the President being obtained to the making of any such rule or order.`,word_count:228},{article:"289",title:"Exemption of property and income of a State from Union taxation",description:`(1) The property and income of a State shall be exempt from Union taxation.

 

(2) Nothing in clause (1) shall prevent the Union from imposing, or authorising the imposition of, any tax to such extent, if any, as Parliament may by law provide in respect of a trade or business of any kind carried on by, or on behalf of, the Government of a State, or any operations connected therewith, or any property used or occupied for the purposes of such trade or business, or any income accruing or arising in connection therewith.

 

(3) Nothing in clause (2) shall apply to any trade or business, or to any class of trade or business, which Parliament may by law declare to be incidental to the ordinary functions of Government.`,word_count:128},{article:"290",title:"Adjustment in respect of certain expenses and pensions",description:`Where under the provisions of this Constitution the expenses of any court or Commission, or the pension payable to or in respect of a person who has served before the commencement of this Constitution under the Crown in India or after such commencement in connection with the affairs of the Union or of a State, are charged on the Consolidated Fund of India or the Consolidated Fund of a State, then, if —

 

(a) in the case of a charge on the Consolidated Fund of India, the court or Commission serves any of the separate needs of a State, or the person has served wholly or in part in connection with the affairs of a State; or

 

(b) in the case of a charge on the Consolidated Fund of a State, the court or Commission serves any of the separate needs of the Union or another State, or the person has served wholly or in part in connection with the affairs of the Union or another State,

 

there shall be charged on and paid out of the Consolidated Fund of the State or, as the case may be, the Consolidated Fund of India or the Consolidated Fund of the other State, such contribution in respect of the expenses or pension as may be agreed, or as may in default of agreement be determined by an arbitrator to be appointed by the Chief Justice of India.`,word_count:235},{article:"290A",title:"Annual payment to certain Devaswom Funds",description:"A sum of forty-six lakhs and fifty thousand rupees shall be charged on, and paid out of, the Consolidated Fund of the State of Kerala every year to the Travancore Devaswom Fund; and a sum of thirteen lakhs and fifty thousand rupees shall be charged on, and paid out of, the Consolidated Fund of the State of Tamil Nadu every year to the Devaswom Fund established in that State for the maintenance of Hindu temples and shrines in the territories transferred to that State on the 1st day of November, 1956, from the State of Travancore-Cochin.",word_count:96},{article:"292",title:"Borrowing by the Government of India",description:"The executive power of the Union extends to borrowing upon the security of the Consolidated Fund of India within such limits, if any, as may from time to time be fixed by Parliament by law and to the giving of guarantees within such limits, if any, as may be so fixed.",word_count:51},{article:"293",title:"Borrowing by States",description:`(1) Subject to the provisions of this article, the executive power of a State extends to borrowing within the territory of India upon the security of the Consolidated Fund of the State within such limits, if any, as may from time to time be fixed by the Legislature of such State by law and to the giving of guarantees within such limits, if any, as may be so fixed.

 

(2) The Government of India may, subject to such conditions as may be laid down by or under any law made by Parliament, make loans to any State or, so long as any limits fixed under article 292 are not exceeded, give guarantees in respect of loans raised by any State, and any sums required for the purpose of making such loans shall be charged on the Consolidated Fund of India.

 

(3) A State may not without the consent of the Government of India raise any loan if there is still outstanding any part of a loan which has been made to the State by the Government of India or by its predecessor Government, or in respect of which a guarantee has been given by the Government of India or by its predecessor Government.

 

(4) A consent under clause (3) may be granted subject to such conditions, if any, as the Government of India may think fit to impose.`,word_count:228},{article:"294",title:"Succession to property, assets, rights, liabilities and obligations in certain cases",description:`As from the commencement of this Constitution —

 

(a) all property and assets which immediately before such commencement were vested in His Majesty for the purposes of the Government of the Dominion of India and all property and assets which immediately before such commencement were vested in His Majesty for the purposes of the Government of each Governor’s Province shall vest respectively in the Union and the corresponding State, and

 

(b) all rights, liabilities and obligations of the Government of the Dominion of India and of the Government of each Governor’s Province, whether arising out of any contract or otherwise, shall be the rights, liabilities and obligations respectively of the Government of India and the Government of each corresponding State,

 

subject to any adjustment made or to be made by reason of the creation before the commencement of this Constitution of the Dominion of Pakistan or of the Provinces of West Bengal, East Bengal, West Punjab and East Punjab.`,word_count:159},{article:"295",title:"Succession to property, assets, rights, liabilities and obligations in other cases",description:`(1) As from the commencement of this Constitution —

 

(a) all property and assets which immediately before such commencement were vested in any Indian State corresponding to a State specified in Part B of the First Schedule shall vest in the Union, if the purposes for which such property and assets were held immediately before such commencement will thereafter be purposes of the Union relating to any of the matters enumerated in the Union List, and

 

(b) all rights, liabilities and obligations of the Government of any Indian State corresponding to a State specified in Part B of the First Schedule, whether arising out of any contract or otherwise, shall be the rights, liabilities and obligations of the Government of India, if the purposes for which such rights were acquired or liabilities or obligations were incurred before such commencement will thereafter be purposes of the Government of India relating to any of the matters enumerated in the Union List,

 

subject to any agreement entered into in that behalf by the Government of India with the Government of that State.

 

(2) Subject as aforesaid, the Government of each State specified in Part B of the First Schedule shall, as from the commencement of this Constitution, be the successor of the Government of the corresponding Indian State as regards all property and assets and all rights, liabilities and obligations, whether arising out of any contract or otherwise, other than those referred to in clause (1).`,word_count:243},{article:"296",title:"Property accruing by escheat or lapse or as bona vacantia",description:`Subject as hereinafter provided, any property in the territory of India which, if this Constitution had not come into operation, would have accrued to His Majesty or, as the case may be, to the Ruler of an Indian State by escheat or lapse, or as bona vacantia for want of a rightful owner, shall, if it is property situate in a State, vest in such State, and shall, in any other case, vest in the Union:

 

   Provided that any property which at the date when it would have so accrued to His Majesty or to the Ruler of an Indian State was in the possession or under the control of the Government of India or the Government of a State shall, according as the purposes for which it was then used or held were purposes of the Union or of a State, vest in the Union or in that State.

 

   Explanation. — In this article, the expressions “Ruler” and “Indian State” have the same meanings as in article 363.`,word_count:169},{article:"297",title:"Things of value within territorial waters or continental shelf and resources of the exclusive economic zone to vest in the Union",description:`(1) All lands, minerals and other things of value underlying the ocean within the territorial waters, or the continental shelf, or the exclusive economic zone, of India shall vest in the Union and be held for the purposes of the Union.

 

(2) All other resources of the exclusive economic zone of India shall also vest in the Union and be held for the purposes of the Union.

 

(3) The limits of the territorial waters, the continental shelf, the exclusive economic zone, and other maritime zones, of India shall be such as may be specified, from time to time, by or under any law made by Parliament.`,word_count:106},{article:"298",title:"Power to carry on trade, etc",description:`The executive power of the Union and of each State shall extend to the carrying on of any trade or business and to the acquisition, holding and disposal of property and the making of contracts for any purpose: Provided that —

 

(a) the said executive power of the Union shall, in so far as such trade or business or such purpose is not one with respect to which Parliament may make laws, be subject in each State to legislation by the State; and

 

(b) the said executive power of each State shall, in so far as such trade or business or such purpose is not one with respect to which the State Legislature may make laws, be subject to legislation by Parliament.`,word_count:122},{article:"299",title:"Contracts",description:`(1) All contracts made in the exercise of the executive power of the Union or of a State shall be expressed to be made by the President, or by the Governor of the State, as the case may be, and all such contracts and all assurances of property made in the exercise of that power shall be executed on behalf of the President or the Governor by such persons and in such manner as he may direct or authorise.

 

(2) Neither the President nor the Governor shall be personally liable in respect of any contract or assurance made or executed for the purposes of this Constitution, or for the purposes of any enactment relating to the Government of India heretofore in force, nor shall any person making or executing any such contract or assurance on behalf of any of them be personally liable in respect thereof.`,word_count:146},{article:"300",title:"Suits and proceedings",description:`(1) The Government of India may sue or be sued by the name of the Union of India and the Government of a State may sue or be sued by the name of the State and may, subject to any provisions which may be made by Act of Parliament or of the Legislature of such State enacted by virtue of powers conferred by this Constitution, sue or be sued in relation to their respective affairs in the like cases as the Dominion of India and the corresponding Provinces or the corresponding Indian States might have sued or been sued if this Constitution had not been enacted. 

 

(2) If at the commencement of this Constitution —

 

(a) any legal proceedings are pending to which the Dominion of India is a party, the Union of India shall be deemed to be substituted for the Dominion in those proceedings; and (

 

b) any legal proceedings are pending to which a Province or an Indian State is a party, the corresponding State shall be deemed to be substituted for the Province or the Indian State in those proceedings.`,word_count:184},{article:"300A",title:"Persons not to be deprived of property save by authority of law",description:"No person shall be deprived of his property save by authority of law.",word_count:13}]},{part:"Part XIII: Trade & Commerce within India",part_number:"XIII",article_count:6,word_count:431,articles:[{article:"301",title:"Freedom of trade, commerce and intercourse",description:"Subject to the other provisions of this Part, trade, commerce and intercourse throughout the territory of India shall be free.",word_count:20},{article:"302",title:"Power of Parliament to impose restrictions on trade, commerce and intercourse",description:"Parliament may by law impose such restrictions on the freedom of trade, commerce or intercourse between one State and another or within any part of the territory of India as may be required in the public interest.",word_count:37},{article:"303",title:"Restrictions on the legislative powers of the Union and of the States with regard to trade and commerce",description:`(1) Notwithstanding anything in article 302, neither Parliament nor the Legislature of a State shall have power to make any law giving, or authorising the giving of, any preference to one State over another, or making, or authorising the making of, any discrimination between one State and another, by virtue of any entry relating to trade and commerce in any of the Lists in the Seventh Schedule.

 

(2) Nothing in clause (1) shall prevent Parliament from making any law giving, or authorising the giving of, any preference or making, or authorising the making of, any discrimination if it is declared by such law that it is necessary to do so for the purpose of dealing with a situation arising from scarcity of goods in any part of the territory of India.`,word_count:131},{article:"304",title:"Restrictions on trade, commerce and intercourse among States",description:`Notwithstanding anything in article 301 or article 303, the Legislature of a State may by law —

 

(a) impose on goods imported from other States 1 [or the Union territories] any tax to which similar goods manufactured or produced in that State are subject, so, however, as not to discriminate between goods so imported and goods so manufactured or produced; and

 

(b) impose such reasonable restrictions on the freedom of trade, commerce or intercourse with or within that State as may be required in the public interest:

 

   Provided that no Bill or amendment for the purposes of clause (b) shall be introduced or moved in the Legislature of a State without the previous sanction of the President`,word_count:117},{article:"305",title:"Saving of existing laws and laws providing for State monopolies",description:"Nothing in articles 301 and 303 shall affect the provisions of any existing law except in so far as the President may by order otherwise direct; and nothing in article 301 shall affect the operation of any law made before the commencement of the Constitution (Fourth Amendment) Act, 1955, in so far as it relates to, or prevent Parliament or the Legislature of a State from making any law relating to, any such matter as is referred to in subclause (ii) of clause (6) of article 19.",word_count:87},{article:"307",title:"Appointment of authority for carrying out the purposes of articles 301 to 304",description:"Parliament may by law appoint such authority as it considers appropriate for carrying out the purposes of articles 301, 302, 303 and 304, and confer on the authority so appointed such powers and such duties as it thinks necessary.",word_count:39}]},{part:"Part XIV: Services under Union and States",part_number:"XIV",article_count:15,word_count:3040,articles:[{article:"308",title:"Interpretation",description:"In this Part, unless the context otherwise requires, the expression “State” does not include the State of Jammu and Kashmir.",word_count:20},{article:"309",title:"Recruitment and conditions of service of persons serving the Union or a State",description:`Subject to the provisions of this Constitution, Acts of the appropriate Legislature may regulate the recruitment, and conditions of service of persons appointed, to public services and posts in connection with the affairs of the Union or of any State:

 

   Provided that it shall be competent for the President or such person as he may direct in the case of services and posts in connection with the affairs of the Union, and for the Governor of a State or such person as he may direct in the case of services and posts in connection with the affairs of the State, to make rules regulating the recruitment, and the conditions of service of persons appointed, to such services and posts until provision in that behalf is made by or under an Act of the appropriate Legislature under this article, and any rules so made shall have effect subject to the provisions of any such Act.`,word_count:154},{article:"310",title:"Tenure of office of persons serving the Union or a State",description:`(1) Except as expressly provided by this Constitution, every person who is a member of a defence service or of a civil service of the Union or of an all-India service or holds any post connected with defence or any civil post under the Union holds office during the pleasure of the President, and every person who is a member of a civil service of a State or holds any civil post under a State holds office during the pleasure of the Governor of the State.

 

(2) Notwithstanding that a person holding a civil post under the Union or a State holds office during the pleasure of the President or, as the case may be, of the Governor of the State, any contract under which a person, not being a member of a defence service or of an all-India service or of a civil service of the Union or a State, is appointed under this Constitution to hold such a post may, if the President or the Governor, as the case may be, deems it necessary in order to secure the services of a person having special qualifications, provide for the payment to him of compensation, if before the expiration of an agreed period that post is abolished or he is, for reasons not connected with any misconduct on his part, required to vacate that post.`,word_count:226},{article:"311",title:"Dismissal, removal or reduction in rank of persons employed in civil capacities under the Union or a State",description:`(1) No person who is a member of a civil service of the Union or an all-India service or a civil service of a State or holds a civil post under the Union or a State shall be dismissed or removed by an authority subordinate to that by which he was appointed.

 

(2) No such person as aforesaid shall be dismissed or removed or reduced in rank except after an inquiry in which he has been informed of the charges against him and given a reasonable opportunity of being heard in respect of those charges:

 

   Provided that where it is proposed after such inquiry, to impose upon him any such penalty, such penalty may be imposed on the basis of the evidence adduced during such inquiry and it shall not be necessary to give such person any opportunity of making representation on the penalty proposed:

 

   Provided further that this clause shall not apply — 

 

(a) where a person is dismissed or removed or reduced in rank on the ground of conduct which has led to his conviction on a criminal charge; or

 

(b) where the authority empowered to dismiss or remove a person or to reduce him in rank is satisfied that for some reason, to be recorded by that authority in writing, it is not reasonably practicable to hold such inquiry; or

 

(c) where the President or the Governor, as the case may be, is satisfied that in the interest of the security of the State it is not expedient to hold such inquiry.

 

(3) If, in respect of any such person as aforesaid, a question arises whether it is reasonably practicable to hold such inquiry as is referred to in clause (2), the decision thereon of the authority empowered to dismiss or remove such person or to reduce him in rank shall be final.`,word_count:306},{article:"312",title:"All-India services",description:`(1) Notwithstanding anything in Chapter VI of Part VI or Part XI, if the Council of States has declared by resolution supported by not less than two-thirds of the members present and voting that it is necessary or expedient in the national interest so to do, Parliament may by law provide for the creation of one or more all India services (including an all-India judicial service) common to the Union and the States, and, subject to the other provisions of this Chapter, regulate the recruitment, and the conditions of service of persons appointed, to any such service.

 

(2) The services known at the commencement of this Constitution as the Indian Administrative Service and the Indian Police Service shall be deemed to be services created by Parliament under this article.

 

(3) The all-India judicial service referred to in clause (1) shall not include any post inferior to that of a district judge as defined in article 236.

 

(4) The law providing for the creation of the all-India judicial service aforesaid may contain such provisions for the amendment of Chapter VI of Part VI as may be necessary for giving effect to the provisions of that law and no such law shall be deemed to be an amendment of this Constitution for the purposes of article 368.`,word_count:215},{article:"313",title:"Transitional provisions",description:"Until other provision is made in this behalf under this Constitution, all the laws in force immediately before the commencement of this Constitution and applicable to any public service or any post which continues to exist after the commencement of this Constitution, as an allIndia service or as service or post under the Union or a State shall continue in force so far as consistent with the provisions of this Constitution.",word_count:71},{article:"315",title:"Public Service Commissions for the Union and for the States",description:`(1) Subject to the provisions of this article, there shall be a Public Service Commission for the Union and a Public Service Commission for each State.

 

(2) Two or more States may agree that there shall be one Public Service Commission for that group of States, and if a resolution to that effect is passed by the House or, where there are two Houses, by each House of the Legislature of each of those States, Parliament may by law provide for the appointment of a Joint State Public Service Commission (referred to in this Chapter as Joint Commission) to serve the needs of those States.

 

(3) Any such law as aforesaid may contain such incidental and consequential provisions as may be necessary or desirable for giving effect to the purposes of the law.

 

(4) The Public Service Commission for the Union, if requested so to do by the Governor of a State, may, with the approval of the President, agree to serve all or any of the needs of the State.

 

(5) References in this Constitution to the Union Public Service Commission or a State Public Service Commission shall, unless the context otherwise requires, be construed as references to the Commission serving the needs of the Union or, as the case may be, the State as respects the particular matter in question.`,word_count:222},{article:"316",title:"Appointment and term of office of members",description:`(1) The Chairman and other members of a Public Service Commission shall be appointed, in the case of the Union Commission or a Joint Commission, by the President, and in the case of a State Commission, by the Governor of the State:

 

    Provided that as nearly as may be one-half of the members of every Public Service Commission shall be persons who at the dates of their respective appointments have held office for at least ten years either under the Government of India or under the Government of a State, and in computing the said period of ten years any period before the commencement of this Constitution during which a person has held office under the Crown in India or under the Government of an Indian State shall be included.

 

(1A) If the office of the Chairman of the Commission becomes vacant or if any such Chairman is by reason of absence or for any other reason unable to perform the duties of his office, those duties shall, until some person appointed under clause (1) to the vacant office has entered on the duties thereof or, as the case may be, until the Chairman has resumed his duties, be performed by such one of the other members of the Commission as the President, in the case of the Union Commission or a Joint Commission, and the Governor of the State in the case of a State Commission, may appoint for the purpose.

 

(2) A member of a Public Service Commission shall hold office for a term of six years from the date on which he enters upon his office or until he attains, in the case of the Union Commission, the age of sixty-five years, and in the case of a State Commission or a Joint Commission, the age of sixty-two years, whichever is earlier:

 

   Provided that —

 

(a) a member of a Public Service Commission may, by writing under his hand addressed, in the case of the Union Commission or a Joint Commission, to the President, and in the case of a State Commission, to the Governor of the State, resign his office;

 

(b) a member of a Public Service Commission may be removed from his office in the manner provided in clause (1) or clause (3) of article 317.

 

(3) A person who holds office as a member of a Public Service Commission shall, on the expiration of his term of office, be ineligible for re-appointment to that office.`,word_count:411},{article:"317",title:"Removal and suspension of a member of a Public Service Commission",description:`(1) Subject to the provisions of clause (3), the Chairman or any other member of a Public Service Commission shall only be removed from his office by order of the President on the ground of misbehaviour after the Supreme Court, on reference being made to it by the President, has, on inquiry held in accordance with the procedure prescribed in that behalf under article 145, reported that the Chairman or such other member, as the case may be, ought on any such ground to be removed.

 

(2) The President, in the case of the Union Commission or a Joint Commission, and the Governor in the case of a State Commission, may suspend from office the Chairman or any other member of the Commission in respect of whom a reference has been made to the Supreme Court under clause (1) until the President has passed orders on receipt of the report of the Supreme Court on such reference.

 

(3) Notwithstanding anything in clause (1), the President may by order remove from office the Chairman or any other member of a Public Service Commission if the Chairman or such other member, as the case may be, —

 

(a) is adjudged an insolvent; or

 

(b) engages during his term of office in any paid employment outside the duties of his office; or

 

(c) is, in the opinion of the President, unfit to continue in office by reason of infirmity of mind or body.

 

(4) If the Chairman or any other member of a Public Service Commission is or becomes in any way concerned or interested in any contract or agreement made by or on behalf of the Government of India or the Government of a State or participates in any way in the profit thereof or in any benefit or emolument arising therefrom otherwise than as a member and in common with the other members of an incorporated company, he shall, for the purposes of clause (1), be deemed to be guilty of misbehaviour.`,word_count:331},{article:"318",title:"Power to make regulations as to conditions of service of members and staff of the Commission",description:`In the case of the Union Commission or a Joint Commission, the President and, in the case of a State Commission, the Governor of the State may by regulations —

 

(a) determine the number of members of the Commission and their conditions of service; and

 

(b) make provision with respect to the number of members of the staff of the Commission and their conditions of service:

 

   Provided that the conditions of service of a member of a Public Service Commission shall not be varied to his disadvantage after his appointment.`,word_count:90},{article:"319",title:"Prohibition as to the holding of offices by members of Commission on ceasing to be such members",description:`On ceasing to hold office —

 

(a) the Chairman of the Union Public Service Commission shall be ineligible for further employment either under the Government of India or under the Government of a State;

 

(b) the Chairman of a State Public Service Commission shall be eligible for appointment as the Chairman or any other member of the Union Public Service Commission or as the Chairman of any other State Public Service Commission, but not for any other employment either under the Government of India or under the Government of a State;

 

(c) a member other than the Chairman of the Union Public Service Commission shall be eligible for appointment as the Chairman of the Union Public Service Commission, or as the Chairman of a State Public Service Commission, but not for any other employment either under the Government of India or under the Government of a State;

 

(d) a member other than the Chairman of a State Public Service Commission shall be eligible for appointment as the Chairman or any other member of the Union Public Service Commission or as the Chairman of that or any other State Public Service Commission, but not for any other employment either under the Government of India or under the Government of a State.`,word_count:210},{article:"321",title:"Power to extend functions of Public Service Commissions",description:"An Act made by Parliament or, as the case may be, the Legislature of a State may provide for the exercise of additional functions by the Union Public Service Commission or the State Public Service Commission as respects the services of the Union or the State and also as respects the services of any local authority or other body corporate constituted by law or of any public institution.",word_count:68},{article:"322",title:"Expenses of Public Service Commissions",description:"The expenses of the Union or a State Public Service Commission, including any salaries, allowances and pensions payable to or in respect of the members or staff of the Commission, shall be charged on the Consolidated Fund of India or, as the case may be, the Consolidated Fund of the State.",word_count:51},{article:"323",title:"Reports of Public Service Commissions",description:`(1) It shall be the duty of the Union Commission to present annually to the President a report as to the work done by the Commission and on receipt of such report the President shall cause a copy thereof together with a memorandum explaining, as respects the cases, if any, where the advice of the Commission was not accepted, the reasons for such non-acceptance to be laid before each House of Parliament.

 

(2) It shall be the duty of a State Commission to present annually to the Governor of the State a report as to the work done by the Commission, and it shall be the duty of a Joint Commission to present annually to the Governor of each of the States the needs of which are served by the Joint Commission a report as to the work done by the Commission in relation to that State, and in either case the Governor, shall, on receipt of such report, cause a copy thereof together with a memorandum explaining, as respects the cases, if any, where the advice of the Commission was not accepted, the reasons for such non-acceptance to be laid before the Legislature of the State.`,word_count:197},{article:"312A",title:"Power of Parliament to vary or revoke conditions of service of officers of certain services",description:`(1) Parliament may by law —

 

(a) vary or revoke, whether prospectively or retrospectively, the conditions of services as respects remuneration, leave and pension and the rights as respects disciplinary matters of persons who, having been appointed by the Secretary of State or Secretary of State in Council to a civil service of the Crown in India before the commencement of this Constitution, continue on and after the commencement of the Constitution (Twenty-eighth Amendment) Act, 1972, to serve under the Government of India or of a State in any service or post;

 

(b) vary or revoke, whether prospectively or retrospectively, the conditions of service as respects pension of persons who, having been appointed by the Secretary of State or Secretary of State in Council to a civil service of the Crown in India before the commencement of this Constitution, retired or otherwise ceased to be in service at any time before the commencement of the Constitution (Twentyeighth Amendment) Act, 1972:

 

   Provided that in the case of any such person who is holding or has held the office of the Chief Justice or other Judge of the Supreme Court or a High Court, the Comptroller and Auditor-General of India, the Chairman or other member of the Union or a State Public Service Commission or the Chief Election Commissioner, nothing in sub-clause (a) or sub-clause (b) shall be construed as empowering Parliament to vary or revoke, after his appointment to such post, the conditions of his service to his disadvantage except in so far as such conditions of service are applicable to him by reason of his being a person appointed by the Secretary of State or Secretary of State in Council to a civil service of the Crown in India.

 

(2) Except to the extent provided for by Parliament by law under this article, nothing in this article shall affect the power of any Legislature or other authority under any other provision of this Constitution to regulate the conditions of service of persons referred to in clause (1).

 

(3) Neither the Supreme Court nor any other court shall have jurisdiction in —

 

(a) any dispute arising out of any provision of, or any endorsement on, any covenant, agreement or other similar instrument which was entered into or executed by any person referred to in clause (1), or arising out of any letter issued to such person, in relation to his appointment to any civil service of the Crown in India or his continuance in service under the Government of the Dominion of India or a Province thereof;

 

(b) any dispute in respect of any right, liability or obligation under article 314 as originally enacted.

 

(4) The provisions of this article shall have effect notwithstanding anything in article 314 as originally enacted or in any other provision of this Constitution.`,word_count:468}]},{part:"Part XIVA: Tribunals",part_number:"XIVA",article_count:2,word_count:854,articles:[{article:"323A",title:"Administrative tribunals",description:`(1) Parliament may, by law, provide for the adjudication or trial by administrative tribunals of disputes and complaints with respect to recruitment and conditions of service of persons appointed to public services and posts in connection with the affairs of the Union or of any State or of any local or other authority within the territory of India or under the control of the Government of India or of any corporation owned or controlled by the Government.

 

(2) A law made under clause (1) may —

 

(a) provide for the establishment of an administrative tribunal for the Union and a separate administrative tribunal for each State or for two or more States;

 

(b) specify the jurisdiction, powers (including the power to punish for contempt) and authority which may be exercised by each of the said tribunals;

 

(c) provide for the procedure (including provisions as to limitation and rules of evidence) to be followed by the said tribunals;

 

(d) exclude the jurisdiction of all courts, except the jurisdiction of the Supreme Court under article 136, with respect to the disputes or complaints referred to in clause (1);

 

(e) provide for the transfer to each such administrative tribunal of any cases pending before any court or other authority immediately before the establishment of such tribunal as would have been within the jurisdiction of such tribunal if the causes of action on which such suits or proceedings are based had arisen after such establishment;

 

(f) repeal or amend any order made by the President under clause (3) of article 371D;

 

(g) contain such supplemental, incidental and consequential provisions (including provisions as to fees) as Parliament may deem necessary for the effective functioning of, and for the speedy disposal of cases by, and the enforcement of the orders of, such tribunals.

 

(3) The provisions of this article shall have effect notwithstanding anything in any other provision of this Constitution or in any other law for the time being in force.`,word_count:326},{article:"323B",title:"Tribunals for other matters",description:`(1) The appropriate Legislature may, by law, provide for the adjudication or trial by tribunals of any disputes, complaints, or offences with respect to all or any of the matters specified in clause (2) with respect to which such Legislature has power to make laws.

 

(2) The matters referred to in clause (1) are the following, namely: —

 

(a) levy, assessment, collection and enforcement of any tax;

 

(b) foreign exchange, import and export across customs frontiers;

 

(c) industrial and labour disputes;

 

(d) land reforms by way of acquisition by the State of any estate as defined in article 31A or of any rights therein or the extinguishment or modification of any such rights or by way of ceiling on agricultural land or in any other way;

 

(e) ceiling on urban property;

 

(f) elections to either House of Parliament or the House or either House of the Legislature of a State, but excluding the matters referred to in article 329 and article 329A;

 

(g) production, procurement, supply and distribution of food-stuffs (including edible oilseeds and oils) and such other goods as the President may, by public notification, declare to be essential goods for the purpose of this article and control of prices of such goods;

 

(h) rent, its regulation and control and tenancy issues including the right, title and interest of landlords and tenants;

 

(i) offences against laws with respect to any of the matters specified in sub-clauses (a) to (h) and fees in respect of any of those matters;

 

(j) any matter incidental to any of the matters specified in sub-clauses (a) to (i).

 

(3) A law made under clause (1) may —

 

(a) provide for the establishment of a hierarchy of tribunals;

 

(b) specify the jurisdiction, powers (including the power to punish for contempt) and authority which may be exercised by each of the said tribunals;

 

(c) provide for the procedure (including provisions as to limitation and rules of evidence) to be followed by the said tribunals;

 

(d) exclude the jurisdiction of all courts, except the jurisdiction of the Supreme Court under article 136, with respect to all or any of the matters falling within the jurisdiction of the said tribunals;

 

(e) provide for the transfer to each such tribunal of any cases pending before any court or any other authority immediately before the establishment of such tribunal as would have been within the jurisdiction of such tribunal if the causes of action on which such suits or proceedings are based had arisen after such establishment;

 

(f) contain such supplemental, incidental and consequential provisions (including provisions as to fees) as the appropriate Legislature may deem necessary for the effective functioning of, and for the speedy disposal of cases by, and the enforcement of the orders of, such tribunals.

 

(4) The provisions of this article shall have effect notwithstanding anything in any other provision of this Constitution or in any other law for the time being in force.

 

   Explanation. — In this article, “appropriate Legislature”, in relation to any matter, means Parliament or, as the case may be, a State Legislature competent to make laws with respect to such matter in accordance with the provisions of Part XI.`,word_count:528}]},{part:"Part XV: Elections",part_number:"XV",article_count:6,word_count:810,articles:[{article:"324",title:"Superintendence, direction and control of elections to be vested in an Election Commission",description:`(1) The superintendence, direction and control of the preparation of the electoral rolls for, and the conduct of, all elections to Parliament and to the Legislature of every State and of elections to the offices of President and Vice-President held under this Constitution shall be vested in a Commission (referred to in this Constitution as the Election Commission).

 

(2) The Election Commission shall consist of the Chief Election Commissioner and such number of other Election Commissioners, if any, as the President may from time to time fix and the appointment of the Chief Election Commissioner and other Election Commissioners shall, subject to the provisions of any law made in that behalf by Parliament, be made by the President.

 

(3) When any other Election Commissioner is so appointed the Chief Election Commissioner shall act as the Chairman of the Election Commission.

 

(4) Before each general election to the House of the People and to the Legislative Assembly of each State, and before the first general election and thereafter before each biennial election to the Legislative Council of each State having such Council, the President may also appoint after consultation with the Election Commission such Regional Commissioners as he may consider necessary to assist the Election Commission in the performance of the functions conferred on the Commission by clause (1).

 

(5) Subject to the provisions of any law made by Parliament, the conditions of service and tenure of office of the Election Commissioners and the Regional Commissioners shall be such as the President may by rule determine: 

 

   Provided that the Chief Election Commissioner shall not be removed from his office except in like manner and on the like grounds as a Judge of the Supreme Court and the conditions of service of the Chief Election Commissioner shall not be varied to his disadvantage after his appointment:

 

   Provided further that any other Election Commissioner or a Regional Commissioner shall not be removed from office except on the recommendation of the Chief Election Commissioner.

 

(6) The President, or the Governor of a State, shall, when so requested by the Election Commission, make available to the Election Commission or to a Regional Commissioner such staff as may be necessary for the discharge of the functions conferred on the Election Commission by clause (1).`,word_count:378},{article:"325",title:"No person to be ineligible for inclusion in, or to claim to be included in a special, electoral roll on grounds of religion, race, caste or sex",description:"There shall be one general electoral roll for every territorial constituency for election to either House of Parliament or to the House or either House of the Legislature of a State and no person shall be ineligible for inclusion in any such roll or claim to be included in any special electoral roll for any such constituency on grounds only of religion, race, caste, sex or any of them.",word_count:69},{article:"326",title:"Elections to the House of the People and to the Legislative Assemblies of States to be on the basis of adult suffrage",description:"The elections to the House of the People and to the Legislative Assembly of every State shall be on the basis of adult suffrage; that is to say, every person who is a citizen of India and who is not less than  [eighteen years] of age on such date as may be fixed in that behalf by or under any law made by the appropriate Legislature and is not otherwise disqualified under this Constitution or any law made by the appropriate Legislature on the ground of non-residence, unsoundness of mind, crime or corrupt or illegal practice, shall be entitled to be registered as a voter at any such election.",word_count:109},{article:"327",title:"Power of Parliament to make provision with respect to elections to Legislatures",description:"Subject to the provisions of this Constitution, Parliament may from time to time by law make provision with respect to all matters relating to, or in connection with, elections to either House of Parliament or to the House or either House of the Legislature of a State including the preparation of electoral rolls, the delimitation of constituencies and all other matters necessary for securing the due constitution of such House or Houses.",word_count:72},{article:"328",title:"Power of Legislature of a State to make provision with respect to elections to such Legislature",description:"Subject to the provisions of this Constitution and in so far as provision in that behalf is not made by Parliament, the Legislature of a State may from time to time by law make provision with respect to all matters relating to, or in connection with, the elections to the House or either House of the Legislature of the State including the preparation of electoral rolls and all other matters necessary for securing the due constitution of such House or Houses.",word_count:81},{article:"329",title:"Bar to interference by courts in electoral matters",description:`Notwithstanding anything in this Constitution — 

 

(a) the validity of any law relating to the delimitation of constituencies or the allotment of seats to such constituencies, made or purporting to be made under article 327 or article 328, shall not be called in question in any court;

 

(b) no election to either House of Parliament or to the House or either House of the Legislature of a State shall be called in question except by an election petition presented to such authority and in such manner as may be provided for by or under any law made by the appropriate Legislature.`,word_count:101}]},{part:"Part XVI: Special Provisions",part_number:"XVI",article_count:21,word_count:4489,articles:[{article:"330",title:"Reservation of seats for Scheduled Castes and Scheduled Tribes in the House of the People",description:`(1) Seats shall be reserved in the House of the People for —

 

(a) the Scheduled Castes;

 

(b) the Scheduled Tribes except the Scheduled Tribes in the autonomous districts of Assam; and

 

(c) the Scheduled Tribes in the autonomous districts of Assam.

 

(2) The number of seats reserved in any State or Union territory for the Scheduled Castes or the Scheduled Tribes under clause (1) shall bear, as nearly as may be, the same proportion to the total number of seats allotted to that State 2 [or Union territory] in the House of the People as the population of the Scheduled Castes in the State or Union territory or of the Scheduled Tribes in the State or Union territory or part of the State or Union territory, as the case may be, in respect of which seats are so reserved, bears to the total population of the State or Union territory.

 

(3) Notwithstanding anything contained in clause (2), the number of seats reserved in the House of the People for the Scheduled Tribes in the autonomous districts of Assam shall bear to the total number of seats allotted to that State a proportion not less than the population of the Scheduled Tribes in the said autonomous districts bears to the total population of the State.

 

Explanation —In this article and in article 332, the expression “population” means the population as ascertained at the last preceding census of which the relevant figures have been published:

 

    Provided that the reference in this Explanation to the last preceding census of which the relevant figures have been published shall, until the relevant figures for the first census taken after the year 2026 have been published, be construed as a reference to the 2001 census.`,word_count:290},{article:"330A",title:"Reservation of seats for women in House of the People",description:`(1) Seats shall be reserved for women in the House of the People.

(2) The seats reserved for women in the House of the People under clause (1) shall be allocated to the States and Union territories in the manner prescribed by Parliament by law, provided that the total number of seats reserved for women shall not be less than one-third of the total number of seats in the House of the People.

(3) The reserved seats shall be allotted by rotation to different constituencies in a State or Union territory and such rotation of reserved seats shall be determined in such manner as Parliament may by law provide.

(4) The reservation of seats for women under this article shall cease to have effect on the expiration of a period as specified under article 334A from the date of commencement of the Constitution (One Hundred and Sixth Amendment) Act, 2023.`,word_count:150},{article:"331",title:"Representation of the Anglo-Indian Community in the House of the People",description:"Notwithstanding anything in article 81, the President may, if he is of opinion that the Anglo-Indian community is not adequately represented in the House of the People, nominate not more than two members of that community to the House of the People.",word_count:42},{article:"332",title:"Reservation of seats for Scheduled Castes and Scheduled Tribes in the Legislative Assemblies of the States",description:`(1) Seats shall be reserved for the Scheduled Castes and the Scheduled Tribes, except the Scheduled Tribes in the autonomous districts of Assam, in the Legislative Assembly of every State.

 

(2) Seats shall be reserved also for the autonomous districts in the Legislative Assembly of the State of Assam.

 

(3) The number of seats reserved for the Scheduled Castes or the Scheduled Tribes in the Legislative Assembly of any State under clause (1) shall bear, as nearly as may be, the same proportion to the total number of seats in the Assembly as the population of the Scheduled Castes in the State or of the Scheduled Tribes in the State or part of the State, as the case may be, in respect of which seats are so reserved, bears to the total population of the State.

 

(3A) Notwithstanding anything contained in clause (3), until the taking effect, under article 170, of the readjustment, on the basis of the first census after the year 2026, of the number of seats in the Legislative Assemblies of the States of Arunachal Pradesh, Meghalaya, Mizoram and Nagaland, the seats which shall be reserved for the Scheduled Tribes in the Legislative Assembly of any such State shall be,—

 

(a) if all the seats in the Legislative Assembly of such State in existence on the date of coming into force of the Constitution (Fifty-seventh Amendment) Act, 1987 (hereafter in this clause referred to as the existing Assembly) are held by members of the Scheduled Tribes, all the seats except one;

 

(b) in any other case, such number of seats as bears to the total number of seats, a proportion not less than the number (as on the said date) of members belonging to the Scheduled Tribes in the existing Assembly bears to the total number of seats in the existing Assembly.

 

(3B) Notwithstanding anything contained in clause (3), until the re-adjustment, under article 170, takes effect on the basis of the first census after the year 2026, of the number of seats in the Legislative Assembly of the State of Tripura, the seats which shall be reserved for the Scheduled Tribes in the Legislative Assembly shall be, such number of seats as bears to the total number of seats, a proportion not less than the number, as on the date of coming into force of the Constitution (Seventysecond Amendment) Act, 1992, of members belonging to the Scheduled Tribes in the Legislative Assembly in existence on the said date bears to the total number of seats in that Assembly.

 

(4) The number of seats reserved for an autonomous district in the Legislative Assembly of the State of Assam shall bear to the total number of seats in that Assembly a proportion not less than the population of the district bears to the total population of the State.

 

(5) The constituencies for the seats reserved for any autonomous district of Assam shall not comprise any area outside that district.

 

(6) No person who is not a member of a Scheduled Tribe of any autonomous district of the State of Assam shall be eligible for election to the Legislative Assembly of the State from any constituency of that district

 

     Provided that for elections to the Legislative Assembly of the State of Assam, the representation of the Scheduled Tribes and non-Scheduled Tribes in the constituencies included in the Bodoland Territorial Areas District, so notified, and existing prior to the constitution of Bodoland Territorial Areas District, shall be maintained.`,word_count:578},{article:"332A",title:"Reservation of seats for women in Legislative Assemblies of States",description:`(1) Seats shall be reserved for women in the Legislative Assembly of every State.

(2) The seats reserved for women in the Legislative Assembly of a State under clause (1) shall not be less than one-third of the total number of seats in the Legislative Assembly of that State.

(3) The reserved seats shall be allotted by rotation to different constituencies in a State, and such rotation of reserved seats shall be determined in such manner as Parliament may by law provide.

(4) The reservation of seats for women under this article shall cease to have effect on the expiration of a period as specified under article 334A from the date of commencement of the Constitution (One Hundred and Sixth Amendment) Act, 2023.`,word_count:123},{article:"333",title:"Representation of the Anglo-Indian community in the Legislative Assemblies of the States",description:"Notwithstanding anything in article 170, the Governor of a State may, if he is of opinion that the Anglo-Indian community needs representation in the Legislative Assembly of the State and is not adequately represented therein, nominate one member of that community to the Assembly.",word_count:44},{article:"334",title:"Reservation of seats and special representation to cease after certain period",description:`Notwithstanding anything in the foregoing provisions of this Part, the provisions of this Constitution relating to —

 

(a) the reservation of seats for the Scheduled Castes and the Scheduled Tribes in the House of the People and in the Legislative Assemblies of the States; and

 

(b) the representation of the Anglo-Indian community in the House of the People and in the Legislative Assemblies of the States by nomination,

 

shall cease to have effect on the expiration of a period of eighty years in respect of clause (a) and seventy years in respect of clause (b) from the commencement of this Constitution:

 

    Provided that nothing in this article shall affect any representation in the House of the People or in the Legislative Assembly of a State until the dissolution of the then existing House or Assembly, as the case may be.`,word_count:140},{article:"334A",title:"Duration of reservation of seats for women under articles 330A and 332A",description:`(1) Notwithstanding anything contained in articles 330A and 332A, the reservation of seats for women in the House of the People and in the Legislative Assemblies of States shall cease to have effect on the expiration of a period of fifteen years from the date of commencement of the Constitution (One Hundred and Sixth Amendment) Act, 2023.

(2) Nothing in this article shall affect any representation in the House of the People or in the Legislative Assembly of any State until the dissolution of the then existing House or Assembly, as the case may be.`,word_count:95},{article:"335",title:"Claims of Scheduled Castes and Scheduled Tribes to services and posts",description:`The claims of the members of the Scheduled Castes and the Scheduled Tribes shall be taken into consideration, consistently with the maintenance of efficiency of administration, in the making of appointments to services and posts in connection with the affairs of the Union or of a State:

 

     Provided that nothing in this article shall prevent in making of any provision in favour of the members of the Scheduled Castes and the Scheduled Tribes for relaxation in qualifying marks in any examination or lowering the standards of evaluation, for reservation in matters of promotion to any class or classes of services or posts in connection with the affairs of the Union or of a State.`,word_count:114},{article:"336",title:"Special provision for Anglo-Indian community in certain services",description:`(1) During the first two years after the commencement of this Constitution, appointments of members of the Anglo-Indian community to posts in the railway, customs, postal and telegraph services of the Union shall be made on the same basis as immediately before the fifteenth day of August, 1947.

 

During every succeeding period of two years, the number of posts reserved for the members of the said community in the said services shall, as nearly as possible, be less by ten per cent. than the numbers so reserved during the immediately preceding period of two years:

 

     Provided that at the end of ten years from the commencement of this Constitution all such reservations shall cease.

 

(2) Nothing in clause (1) shall bar the appointment of members of the Anglo-Indian community to posts other than, or in addition to, those reserved for the community under that clause if such members are found qualified for appointment on merit as compared with the members of other communities.`,word_count:163},{article:"337",title:"Special provision with respect to educational grants for the benefit of Anglo-Indian community",description:`During the first three financial years after the commencement of this Constitution, the same grants, if any, shall be made by the Union and by each State for the benefit of the Anglo-Indian community in respect of education as were made in the financial year ending on the thirty-first day of March, 1948.

 

During every succeeding period of three years the grants may be less by ten per cent. than those for the immediately preceding period of three years :

 

     Provided that at the end of ten years from the commencement of this Constitution such grants, to the extent to which they are a special concession to the AngloIndian community, shall cease:

 

     Provided further that no educational institution shall be entitled to receive any grant under this article unless at least forty per cent. of the annual admissions therein are made available to members of communities other than the Anglo-Indian community.`,word_count:151},{article:"338",title:"National Commission for Scheduled Castes",description:`(1) There shall be a Commission for the Scheduled Castes to be known as the National Commission for the Scheduled Castes.

 

(2) Subject to the provisions of any law made in this behalf by Parliament, the Commission shall consist of a Chairperson, Vice-Chairperson and three other Members and the conditions of service and tenure of office of the Chairperson, Vice-Chairperson and other Members so appointed shall be such as the President may by rule determine.

 

(3) The Chairperson, Vice-Chairperson and other Members of the Commission shall be appointed by the President by warrant under his hand and seal.

 

(4) The Commission shall have the power to regulate its own procedure.

 

(5) It shall be the duty of the Commission —

 

(a) to investigate and monitor all matters relating to the safeguards provided for the Scheduled Castes under this Constitution or under any other law for the time being in force or under any order of the Government and to evaluate the working of such safeguards;

 

(b) to inquire into specific complaints with respect to the deprivation of rights and safeguards of the Scheduled Castes;

 

(c) to participate and advise on the planning process of socio-economic development of the Scheduled Castes and to evaluate the progress of their development under the Union and any State;

 

(d) to present to the President, annually and at such other times as the Commission may deem fit, reports upon the working of those safeguards;

 

(e) to make in such reports recommendations as to the measures that should be taken by the Union or any State for the effective implementation of those safeguards and other measures for the protection, welfare and socio-economic development of the Scheduled Castes; and

 

(f) to discharge such other functions in relation to the protection, welfare and development and advancement of the Scheduled Castes as the President may, subject to the provisions of any law made by Parliament, by rule specify.

 

(6) The President shall cause all such reports to be laid before each House of Parliament along with a memorandum explaining the action taken or proposed to be taken on the recommendations relating to the Union and the reasons for the non-acceptance, if any, of any of such recommendations.

 

(7) Where any such report, or any part thereof, relates to any matter with which any State Government is concerned, a copy of such report shall be forwarded to the Governor of the State who shall cause it to be laid before the Legislature of the State along with a memorandum explaining the action taken or proposed to be taken on the recommendations relating to the State and the reasons for the non-acceptance, if any, of any of such recommendations.

 

(8) The Commission shall, while investigating any matter referred to in sub-clause (a) or inquiring into any complaint referred to in sub-clause (b) of clause (5), have all the powers of a civil court trying a suit and in particular in respect of the following matters, namely :—

 

(a) summoning and enforcing the attendance of any person from any part of India and examining him on oath;

 

(b) requiring the discovery and production of any document;

 

(c) receiving evidence on affidavits;

 

(d) requisitioning any public record or copy thereof from any court or office;

 

(e) issuing commissions for the examination of witnesses and documents;

 

(f) any other matter which the President may, by rule, determine.

 

(9) The Union and every State Government shall consult the Commission on all major policy matters affecting Scheduled Castes.

 

(10) In this article, references to the Scheduled Castes shall be construed as including references to such other backward classes as the President may, on receipt of the report of a Commission appointed under clause (1) of article 340, by order specify and also to the Anglo-Indian community.`,word_count:630},{article:"338A",title:"National Commission for Scheduled Tribes",description:`(1) There shall be a Commission for the Scheduled Tribes to be known as the National Commission for the Scheduled Tribes.

 

(2) Subject to the provisions of any law made in this behalf by Parliament, the Commission shall consist of a Chairperson, Vice-Chairperson and three other Members and the conditions of service and tenure of office of the Chairperson, Vice-Chairperson and other Members so appointed shall be such as the President by rule determine.

 

(3) The Chairperson, Vice-Chairperson and other Members of the Commission shall be appointed by the President by warrant under his hand and seal.

 

(4) The Commission shall have the power to regulate its own procedure. (5) It shall be the duty of the Commission —

 

(a) to investigate and monitor all matters relating to the safeguards provided for the Scheduled Tribes under this Constitution or under any other law for the time being in force or under any order of the Government and to evaluate the working of such safeguards;

 

(b) to inquire into specific complaints with respect to the deprivation of rights and safeguards of the Scheduled Tribes;

 

(c) to participate and advise on the planning process of socio-economic development of the Scheduled Tribes and to evaluate the progress of their development under the Union and any State;

 

(d) to present to the President, annually and at such other times as the Commission may deem fit, reports upon the working of those safeguards;

 

(e) to make in such reports recommendations as to the measures that should be taken by the Union or any State for the effective implementation of those safeguards and other measures for the protection, welfare and socio-economic development of the Scheduled Tribes; and

 

(f) to discharge such other functions in relation to the protection, welfare and development and advancement of the Scheduled Tribes as the President may, subject to the provisions of any law made by Parliament, by rule specify.

 

(6) The President shall cause all such reports to be laid before each House of Parliament along with a memorandum explaining the action taken or proposed to be taken on the recommendations relating to the Union and the reasons for the non-acceptance, if any, of any of such recommendations.

 

(7) Where any such report, or any part thereof, relates to any matter with which any State Government is concerned, a copy of such report shall be forwarded to the Governor of the State who shall cause it to be laid before the Legislature of the State along with a memorandum explaining the action taken or proposed to be taken on the recommendations relating to the State and the reasons for the non-acceptance, if any, of any of such recommendations.

 

(8) The Commission shall, while investigating any matter referred to in sub-clause (a) or inquiring into any complaint referred to in sub-clause (b) of clause (5), have all the powers of a civil court trying a suit and in particular in respect of the following matters, namely: —

 

(a) summoning and enforcing the attendance of any person from any part of India and examining him on oath;

 

(b) requiring the discovery and production of any document;

 

(c) receiving evidence on affidavits;

 

(d) requisitioning any public record or copy thereof from any court or office;

 

(e) issuing commissions for the examination of witnesses and documents;

 

(f) any other matter which the President may, by rule, determine.

 

(9) The Union and every State Government shall consult the Commission on all major policy matters affecting Scheduled Tribes.`,word_count:581},{article:"338B",title:"National Commission for Backward Classes",description:`(1) There shall be a Commission for the socially and educationally backward classes to be known as the National Commission for Backward Classes.

(2) Subject to the provisions of any law made in this behalf by Parliament, the Commission shall consist of a Chairperson, Vice-Chairperson and three other Members and the conditions of service and tenure of office of the Chairperson, Vice-Chairperson and other Members so appointed shall be such as the President may by rule determine.

(3) The Chairperson, Vice-Chairperson and other Members of the Commission shall be appointed by the President by warrant under his hand and seal.

(4) The Commission shall have the power to regulate its own procedure.

(5) It shall be the duty of the Commission—
(a) to investigate and monitor all matters relating to the safeguards provided for the socially and educationally backward classes under this Constitution or under any other law for the time being in force or under any order of the Government and to evaluate the working of such safeguards;
(b) to inquire into specific complaints with respect to the deprivation of rights and safeguards of the socially and educationally backward classes;
(c) to participate and advise on the socio-economic development of the socially and educationally backward classes and to evaluate the progress of their development under the Union and any State;
(d) to present to the President, annually and at such other times as the Commission may deem fit, reports upon the working of those safeguards;
(e) to make in such reports recommendations as to the measures that should be taken by the Union or any State for the effective implementation of those safeguards and other measures for the protection, welfare and socio-economic development of the socially and educationally backward classes; and
(f) to discharge such other functions in relation to the protection, welfare and development and advancement of the socially and educationally backward classes as the President may, subject to the provisions of any law made by Parliament, by rule specify.

(6) The President shall cause all such reports to be laid before each House of Parliament along with a memorandum explaining the action taken or proposed to be taken on the recommendations relating to the Union and the reasons for the non-acceptance, if any, of any of such recommendations.

(7) Where any such report, or any part thereof, relates to any matter with which any State Government is concerned, a copy of such report shall be forwarded to the State Government which shall cause it to be laid before the Legislature of the State along with a memorandum explaining the action taken or proposed to be taken on the recommendations relating to the State and the reasons for the non-acceptance, if any, of any of such recommendations.

(8) The Commission shall, while investigating any matter referred to in sub-clause (a) or inquiring into any complaint referred to in sub-clause (b) of clause (5), have all the powers of a civil court trying a suit and in particular in respect of the following matters, namely:—
(a) summoning and enforcing the attendance of any person from any part of India and examining him on oath;
(b) requiring the discovery and production of any document;
(c) receiving evidence on affidavits;
(d) requisitioning any public record or copy thereof from any court or office;
(e) issuing commissions for the examination of witnesses and documents;
(f) any other matter which the President may, by rule, determine.

(9) The Union and every State Government shall consult the Commission on all major policy matters affecting the socially and educationally backward classes.`,word_count:596},{article:"339",title:"Control of the Union over the administration of Scheduled Areas and the welfare of Scheduled Tribes",description:`(1) The President may at any time and shall, at the expiration of ten years from the commencement of this Constitution by order appoint a Commission to report on the administration of the Scheduled Areas and the welfare of the Scheduled Tribes in the States .

 

  The order may define the composition, powers and procedure of the Commission and may contain such incidental or ancillary provisions as the President may consider necessary or desirable.

 

(2) The executive power of the Union shall extend to the giving of directions to a State as to the drawing up and execution of schemes specified in the direction to be essential for the welfare of the Scheduled Tribes in the State.`,word_count:117},{article:"340",title:"Appointment of a Commission to investigate the conditions of backward classes",description:`(1) The President may by order appoint a Commission consisting of such persons as he thinks fit to investigate the conditions of socially and educationally backward classes within the territory of India and the difficulties under which they labour and to make recommendations as to the steps that should be taken by the Union or any State to remove such difficulties and to improve their condition and as to the grants that should be made for the purpose by the Union or any State and the conditions subject to which such grants should be made, and the order appointing such Commission shall define the procedure to be followed by the Commission.

 

(2) A Commission so appointed shall investigate the matters referred to them and present to the President a report setting out the facts as found by them and making such recommendations as they think proper.

 

(3) The President shall cause a copy of the report so presented together with a memorandum explaining the action taken thereon to be laid before each House of Parliament.`,word_count:175},{article:"341",title:"Scheduled Castes",description:`(1) The President 2 [may with respect to any State 3 [or Union territory], and where it is a State, after consultation with the Governor thereof, by public notification, specify the castes, races or tribes or parts of or groups within castes, races or tribes which shall for the purposes of this Constitution be deemed to be Scheduled Castes in relation to that State 2[or Union territory, as the case may be.

 

(2) Parliament may by law include in or exclude from the list of Scheduled Castes specified in a notification issued under clause (1) any caste, race or tribe or part of or group within any caste, race or tribe, but save as aforesaid a notification issued under the said clause shall not be varied by any subsequent notification.`,word_count:130},{article:"342",title:"Scheduled Tribes",description:`(1) The President may with respect to any State or Union territory, and where it is a State 4, after consultation with the Governor thereof, by public notification6 , specify the tribes or tribal communities or parts of or groups within tribes or tribal communities which shall for the purposes of this Constitution be deemed to be Scheduled Tribes in relation to that State or Union territory, as the case may be.

 

(2) Parliament may by law include in or exclude from the list of Scheduled Tribes specified in a notification issued under clause (1) any tribe or tribal community or part of or group within any tribe or tribal community, but save as aforesaid a notification issued under the said clause shall not be varied by any subsequent notification.`,word_count:130},{article:"342A",title:"Socially and educationally backward classes",description:`(1) The President may with respect to any State or Union territory, and where it is a State, after consultation with the Governor thereof, by public notification, specify the socially and educationally backward classes which shall for the purposes of this Constitution be deemed to be socially and educationally backward classes in relation to that State or Union territory, as the case may be.

(2) Parliament may by law include in or exclude from the Central List of socially and educationally backward classes specified in a notification issued under clause (1) any socially and educationally backward class.`,word_count:97},{article:"350A",title:"Facilities for instruction in mother-tongue at primary stage",description:"It shall be the endeavour of every State and of every local authority within the State to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups; and the President may issue such directions to any State as he considers necessary or proper for securing the provision of such facilities.",word_count:61},{article:"350B",title:"Special Officer for linguistic minorities",description:`(1) There shall be a Special Officer for linguistic minorities to be appointed by the President.

 

(2) It shall be the duty of the Special Officer to investigate all matters relating to the safeguards provided for linguistic minorities under this Constitution and report to the President upon those matters at such intervals as the President may direct, and the President shall cause all such reports to be laid before each House of Parliament, and sent to the Governments of the States concerned.`,word_count:82}]},{part:"Part XVII: Official Language",part_number:"XVII",article_count:9,word_count:1307,articles:[{article:"343",title:"Official language of the Union",description:`(1) The official language of the Union shall be Hindi in Devanagari script.

The form of numerals to be used for the official purposes of the Union shall be the international form of Indian numerals.

 

(2) Notwithstanding anything in clause (1), for a period of fifteen years from the commencement of this Constitution, the English language shall continue to be used for all the official purposes of the Union for which it was being used immediately before such commencement:

 

   Provided that the President may, during the said period, by order authorise the use of the Hindi language in addition to the English language and of the Devanagari form of numerals in addition to the international form of Indian numerals for any of the official purposes of the Union.

 

(3) Notwithstanding anything in this article, Parliament may by law provide for the use, after the said period of fifteen years, of —

 

(a) the English language, or

 

(b) the Devanagari form of numerals,

 

for such purposes as may be specified in the law.`,word_count:172},{article:"344",title:"Commission and Committee of Parliament on official language",description:`(1) The President shall, at the expiration of five years from the commencement of this Constitution and thereafter at the expiration of ten years from such commencement, by order constitute a Commission which shall consist of a Chairman and such other members representing the different languages specified in the Eighth Schedule as the President may appoint, and the order shall define the procedure to be followed by the Commission.

 

(2) It shall be the duty of the Commission to make recommendations to the President as to —

 

(a) the progressive use of the Hindi language for the official purposes of the Union;

 

(b) restrictions on the use of the English language for all or any of the official purposes of the Union;

 

(c) the language to be used for all or any of the purposes mentioned in article 348;

 

(d) the form of numerals to be used for any one or more specified purposes of the Union;

 

(e) any other matter referred to the Commission by the President as regards the official language of the Union and the language for communication between the Union and a State or between one State and another and their use.

 

(3) In making their recommendations under clause (2), the Commission shall have due regard to the industrial, cultural and scientific advancement of India, and the just claims and the interests of persons belonging to the non-Hindi speaking areas in regard to the public services.

 

(4) There shall be constituted a Committee consisting of thirty members, of whom twenty shall be members of the House of the People and ten shall be members of the Council of States to be elected respectively by the members of the House of the People and the members of the Council of States in accordance with the system of proportional representation by means of the single transferable vote.

 

(5) It shall be the duty of the Committee to examine the recommendations of the Commission constituted under clause (1) and to report to the President their opinion thereon.

 

(6) Notwithstanding anything in article 343, the President may, after consideration of the report referred to in clause (5), issue directions in accordance with the whole or any part of that report.`,word_count:370},{article:"345",title:"Official language or languages of a State",description:`Subject to the provisions of articles 346 and 347, the Legislature of a State may by law adopt any one or more of the languages in use in the State or Hindi as the language or languages to be used for all or any of the official purposes of that State:

 

   Provided that, until the Legislature of the State otherwise provides by law, the English language shall continue to be used for those official purposes within the State for which it was being used immediately before the commencement of this Constitution.`,word_count:91},{article:"346",title:"Official language for communication between one State and another or between a State and the Union",description:`The language for the time being authorised for use in the Union for official purposes shall be the official language for communication between one State and another State and between a State and the Union:

 

   Provided that if two or more States agree that the Hindi language should be the official language for communication between such States, that language may be used for such communication.`,word_count:65},{article:"347",title:"Special provision relating to language spoken by a section of the population of a State",description:"On a demand being made in that behalf the President may, if he is satisfied that a substantial proportion of the population of a State desire the use of any language spoken by them to be recognised by that State, direct that such language shall also be officially recognised throughout that State or any part thereof for such purpose as he may specify.",word_count:63},{article:"348",title:"Language to be used in the Supreme Court and in the High Courts and for Acts, Bills, etc",description:`(1) Notwithstanding anything in the foregoing provisions of this Part, until Parliament by law otherwise provides —

 

(a) all proceedings in the Supreme Court and in every High Court,

 

(b) the authoritative texts —

 

(i) of all Bills to be introduced or amendments thereto to be moved in either House of Parliament or in the House or either House of the Legislature of a State,

 

(ii) of all Acts passed by Parliament or the Legislature of a State and of all Ordinances promulgated by the President or the Governor of a State, and

 

(iii) of all orders, rules, regulations and bye-laws issued under this Constitution or under any law made by Parliament or the Legislature of a State,

 

shall be in the English language.

 

(2) Notwithstanding anything in sub-clause (a) of clause (1), the Governor of a State may, with the previous consent of the President, authorise the use of the Hindi language, or any other language used for any official purposes of the State, in proceedings in the High Court having its principal seat in that State: Provided that nothing in this clause shall apply to any judgment, decree or order passed or made by such High Court.

 

(3) Notwithstanding anything in sub-clause (b) of clause (1), where the Legislature of a State has prescribed any language other than the English language for use in Bills introduced in, or Acts passed by, the Legislature of the State or in Ordinances promulgated by the Governor of the State or in any order, rule, regulation or bye-law referred to in paragraph (iii) of that sub-clause, a translation of the same in the English language published under the authority of the Governor of the State in the Official Gazette of that State shall be deemed to be the authoritative text thereof in the English language under this article.`,word_count:306},{article:"349",title:"Special procedure for enactment of certain laws relating to language",description:"During the period of fifteen years from the commencement of this Constitution, no Bill or amendment making provision for the language to be used for any of the purposes mentioned in clause (1) of article 348 shall be introduced or moved in either House of Parliament without the previous sanction of the President, and the President shall not give his sanction to the introduction of any such Bill or the moving of any such amendment except after he has taken into consideration the recommendations of the Commission constituted under clause (1) of article 344 and the report of the Committee constituted under clause (4) of that article.",word_count:107},{article:"350",title:"Language to be used in representations for redress of grievances",description:"Every person shall be entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State, as the case may be.",word_count:44},{article:"351",title:"Directive for development of the Hindi language",description:"It shall be the duty of the Union to promote the spread of the Hindi language, to develop it so that it may serve as a medium of expression for all the elements of the composite culture of India and to secure its enrichment by assimilating without interfering with its genius, the forms, style and expressions used in Hindustani and in the other languages of India specified in the Eighth Schedule, and by drawing, wherever necessary or desirable, for its vocabulary, primarily on Sanskrit and secondarily on other languages.",word_count:89}]},{part:"Part XVIII: Emergency Provisions",part_number:"XVIII",article_count:9,word_count:3538,articles:[{article:"352",title:"Proclamation of Emergency",description:`(1) If the President is satisfied that a grave emergency exists whereby the security of India or of any part of the territory thereof is threatened, whether by war or external aggression or armed rebellion, he may, by Proclamation, make a declaration to that effect in respect of the whole of India or of such part of the territory thereof as may be specified in the Proclamation.

 

   Explanation. — A Proclamation of Emergency declaring that the security of India or any part of the territory thereof is threatened by war or by external aggression or by armed rebellion may be made before the actual occurrence of war or of any such aggression or rebellion, if the President is satisfied that there is imminent danger thereof. 

 

(2) A Proclamation issued under clause (1) may be varied or revoked by a subsequent Proclamation.

 

(3) The President shall not issue a Proclamation under clause (1) or a Proclamation varying such Proclamation unless the decision of the Union Cabinet (that is to say, the Council consisting of the Prime Minister and other Ministers of Cabinet rank appointed under article 75) that such a Proclamation may be issued has been communicated to him in writing.

 

(4) Every Proclamation issued under this article shall be laid before each House of Parliament and shall, except where it is a Proclamation revoking a previous Proclamation, cease to operate at the expiration of one month unless before the expiration of that period it has been approved by resolutions of both Houses of Parliament:

 

   Provided that if any such Proclamation (not being a Proclamation revoking a previous Proclamation) is issued at a time when the House of the People has been dissolved, or the dissolution of the House of the People takes place during the period of one month referred to in this clause, and if a resolution approving the Proclamation has been passed by the Council of States, but no resolution with respect to such Proclamation has been passed by the House of the People before the expiration of that period, the Proclamation shall cease to operate at the expiration of thirty days from the date on which the House of the People first sits after its reconstitution, unless before the expiration of the said period of thirty days a resolution approving the Proclamation has been also passed by the House of the People.

 

(5) A Proclamation so approved shall, unless revoked, cease to operate on the expiration of a period of six months from the date of the passing of the second of the resolutions approving the Proclamation under clause (4):

 

   Provided that if and so often as a resolution approving the continuance in force of such a Proclamation is passed by both Houses of Parliament the Proclamation shall, unless revoked, continue in force for a further period of six months from the date on which it would otherwise have ceased to operate under this clause:

 

   Provided further that if the dissolution of the House of the People takes place during any such period of six months and a resolution approving the continuance in force of such Proclamation has been passed by the Council of States but no resolution with respect to the continuance in force of such Proclamation has been passed by the House of the People during the said period, the Proclamation shall cease to operate at the expiration of thirty days from the date on which the House of the People first sits after its reconstitution unless before the expiration of the said period of thirty days, a resolution approving the continuance in force of the Proclamation has been also passed by the House of the People.

 

(6) For the purposes of clauses (4) and (5), a resolution may be passed by either House of Parliament only by a majority of the total membership of that House and by a majority of not less than two-thirds of the Members of that House present and voting.

 

(7) Notwithstanding anything contained in the foregoing clauses, the President shall revoke a Proclamation issued under clause (1) or a Proclamation varying such Proclamation if the House of the People passes a resolution disapproving, or, as the case may be, disapproving the continuance in force of, such Proclamation.

 

(8) Where a notice in writing signed by not less than one-tenth of the total number of members of the House of the People has been given, of their intention to move a resolution for disapproving, or, as the case may be, for disapproving the continuance in force of, a Proclamation issued under clause (1) or a Proclamation varying such Proclamation, —

 

(a) to the Speaker, if the House is in session; or

 

(b) to the President, if the House is not in session,

 

a special sitting of the House shall be held within fourteen days from the date on which such notice is received by the Speaker, or, as the case may be, by the President, for the purpose of considering such resolution.

 

(9) The power conferred on the President by this article shall include the power to issue different Proclamations on different grounds, being war or external aggression or armed rebellion or imminent danger of war or external aggression or armed rebellion, whether or not there is a Proclamation already issued by the President under clause (1) and such Proclamation is in operation.`,word_count:893},{article:"353",title:"Effect of Proclamation of Emergency",description:`While a Proclamation of Emergency is in operation, then —

 

(a) notwithstanding anything in this Constitution, the executive power of the Union shall extend to the giving of directions to any State as to the manner in which the executive power thereof is to be exercised;

 

(b) the power of Parliament to make laws with respect to any matter shall include power to make laws conferring powers and imposing duties, or authorising the conferring of powers and the imposition of duties, upon the Union or officers and authorities of the Union as respects that matter, notwithstanding that it is one which is not enumerated in the Union List:

 

   Provided that where a Proclamation of Emergency is in operation only in any part of the territory of India, —

 

(i) the executive power of the Union to give directions under clause (a), and

 

(ii) the power of Parliament to make laws under clause (b),

 

shall also extend to any State other than a State in which or in any part of which the Proclamation of Emergency is in operation if and in so far as the security of India or any part of the territory thereof is threatened by activities in or in relation to the part of the territory of India in which the Proclamation of Emergency is in operation.`,word_count:220},{article:"354",title:"Application of provisions relating to distribution of revenues while a Proclamation of Emergency is in operation",description:`(1) The President may, while a Proclamation of Emergency is in operation, by order direct that all or any of the provisions of articles 268 to 279 shall for such period, not extending in any case beyond the expiration of the financial year in which such Proclamation ceases to operate, as may be specified in the order, have effect subject to such exceptions or modifications as he thinks fit.

 

(2) Every order made under clause (1) shall, as soon as may be after it is made, be laid before each House of Parliament.`,word_count:93},{article:"355",title:"Duty of the Union to protect States against external aggression and internal disturbance",description:"It shall be the duty of the Union to protect every State against external aggression and internal disturbance and to ensure that the Government of every State is carried on in accordance with the provisions of this Constitution",word_count:38},{article:"356",title:"Provisions in case of failure of constitutional machinery in States",description:`(1) If the President, on receipt of a report from the Governor of a State or otherwise, is satisfied that a situation has arisen in which the Government of the State cannot be carried on in accordance with the provisions of this Constitution, the President may by Proclamation —

 

(a) assume to himself all or any of the functions of the Government of the State and all or any of the powers vested in or exercisable by the Governor or any body or authority in the State other than the Legislature of the State;

 

(b) declare that the powers of the Legislature of the State shall be exercisable by or under the authority of Parliament;

 

(c) make such incidental and consequential provisions as appear to the President to be necessary or desirable for giving effect to the objects of the Proclamation, including provisions for suspending in whole or in part the operation of any provisions of this Constitution relating to any body or authority in the State:

 

   Provided that nothing in this clause shall authorise the President to assume to himself any of the powers vested in or exercisable by a High Court, or to suspend in whole or in part the operation of any provision of this Constitution relating to High Courts.

 

(2) Any such Proclamation may be revoked or varied by a subsequent Proclamation.

 

(3) Every Proclamation under this article shall be laid before each House of Parliament and shall, except where it is a Proclamation revoking a previous Proclamation, cease to operate at the expiration of two months unless before the expiration of that period it has been approved by resolutions of both Houses of Parliament:

 

   Provided that if any such Proclamation (not being a Proclamation revoking a previous Proclamation) is issued at a time when the House of the People is dissolved or the dissolution of the House of the People takes place during the period of two months referred to in this clause, and if a resolution approving the Proclamation has been passed by the Council of States, but no resolution with respect to such Proclamation has been passed by the House of the People before the expiration of that period, the Proclamation shall cease to operate at the expiration of thirty days from the date on which the House of the People first sits after its reconstitution unless before the expiration of the said period of thirty days a resolution approving the Proclamation has been also passed by the House of the People.

 

(4) A Proclamation so approved shall, unless revoked, cease to operate on the expiration of a period of six months from the date of issue of the Proclamation:

 

   Provided that if and so often as a resolution approving the continuance in force of such a Proclamation is passed by both Houses of Parliament, the Proclamation shall, unless revoked, continue in force for a further period of six months from the date on which under this clause it would otherwise have ceased to operate, but no such Proclamation shall in any case remain in force for more than three years:

 

   Provided further that if the dissolution of the House of the People takes place during any such period of six months and a resolution approving the continuance in force of such Proclamation has been passed by the Council of States, but no resolution with respect to the continuance in force of such Proclamation has been passed by the House of the People during the said period, the Proclamation shall cease to operate at the expiration of thirty days from the date on which the House of the People first sits after its reconstitution unless before the expiration of the said period of thirty days a resolution approving the continuance in force of the Proclamation has been also passed by the House of the People:

 

   Provided also that in the case of the Proclamation issued under clause (1) on the 11th day of May, 1987 with respect to the State of Punjab, the reference in the first proviso to this clause to “three years” shall be construed as a reference to five years.

 

(5) Notwithstanding anything contained in clause (4), a resolution with respect to the continuance in force of a Proclamation approved under clause (3) for any period beyond the expiration of one year from the date of issue of such Proclamation shall not be passed by either House of Parliament unless —

 

(a) a Proclamation of Emergency is in operation, in the whole of India or, as the case may be, in the whole or any part of the State, at the time of the passing of such resolution, and

 

(b) the Election Commission certifies that the continuance in force of the Proclamation approved under clause (3) during the period specified in such resolution is necessary on account of difficulties in holding general elections to the Legislative Assembly of the State concerned:

 

   Provided that nothing in this clause shall apply to the Proclamation issued under clause (1) on the 11th day of May, 1987 with respect to the State of Punjab.`,word_count:850},{article:"357",title:"Exercise of legislative powers under Proclamation issued under article 356",description:`(1) Where by a Proclamation issued under clause (1) of article 356, it has been declared that the powers of the Legislature of the State shall be exercisable by or under the authority of Parliament, it shall be competent —

 

(a) for Parliament to confer on the President the power of the Legislature of the State to make laws, and to authorise the President to delegate, subject to such conditions as he may think fit to impose, the power so conferred to any other authority to be specified by him in that behalf;

 

(b) for Parliament, or for the President or other authority in whom such power to make laws is vested under sub-clause (a), to make laws conferring powers and imposing duties, or authorising the conferring of powers and the imposition of duties, upon the Union or officers and authorities thereof;

 

(c) for the President to authorise when the House of the People is not in session expenditure from the Consolidated Fund of the State pending the sanction of such expenditure by Parliament.

 

(2) Any law made in exercise of the power of the Legislature of the State by Parliament or the President or other authority referred to in sub-clause (a) of clause (1) which Parliament or the President or such other authority would not, but for the issue of a Proclamation under article 356, have been competent to make shall, after the Proclamation has ceased to operate, continue in force until altered or repealed or amended by a competent Legislature or other authority.`,word_count:255},{article:"358",title:"Suspension of provisions of article 19 during emergencies",description:`(1) While a Proclamation of Emergency declaring that the security of India or any part of the territory thereof is threatened by war or by external aggression is in operation, nothing in article 19 shall restrict the power of the State as defined in Part III to make any law or to take any executive action which the State would but for the provisions contained in that Part be competent to make or to take, but any law so made shall, to the extent of the incompetency, cease to have effect as soon as the Proclamation ceases to operate, except as respects things done or omitted to be done before the law so ceases to have effect:

 

   Provided that where such Proclamation of Emergency is in operation only in any part of the territory of India, any such law may be made, or any such executive action may be taken, under this article in relation to or in any State or Union territory in which or in any part of which the Proclamation of Emergency is not in operation, if and in so far as the security of India or any part of the territory thereof is threatened by activities in or in relation to the part of the territory of India in which the Proclamation of Emergency is in operation.

 

(2) Nothing in clause (1) shall apply —

 

(a) to any law which does not contain a recital to the effect that such law is in relation to the Proclamation of Emergency in operation when it is made; or

 

(b) to any executive action taken otherwise than under a law containing such a recital.`,word_count:275},{article:"359",title:"Suspension of the enforcement of the rights conferred by Part III during emergencies",description:`(1) Where a Proclamation of Emergency is in operation, the President may by order declare that the right to move any court for the enforcement of such of the rights conferred by Part III (except articles 20 and 21) as may be mentioned in the order and all proceedings pending in any court for the enforcement of the rights so mentioned shall remain suspended for the period during which the Proclamation is in force or for such shorter period as may be specified in the order.

 

(1A) While an order made under clause (1) mentioning any of the rights conferred by Part III (except articles 20 and 21) is in operation, nothing in that Part conferring those rights shall restrict the power of the State as defined in the said Part to make any law or to take any executive action which the State would but for the provisions contained in that Part be competent to make or to take, but any law so made shall, to the extent of the incompetency, cease to have effect as soon as the order aforesaid ceases to operate, except as respects things done or omitted to be done before the law so ceases to have effect:

 

   Provided that where a Proclamation of Emergency is in operation only in any part of the territory of India, any such law may be made, or any such executive action may be taken, under this article in relation to or in any State or Union territory in which or in any part of which the Proclamation of Emergency is not in operation, if and in so far as the security of India or any part of the territory thereof is threatened by activities in or in relation to the part of the territory of India in which the Proclamation of Emergency is in operation.

 

(1B) Nothing in clause (1A) shall apply —

 

(a) to any law which does not contain a recital to the effect that such law is in relation to the Proclamation of Emergency in operation when it is made; or

 

(b) to any executive action taken otherwise than under a law containing such a recital.(

 

(2) An order made as aforesaid may extend to the whole or any part of the territory of India:

 

   Provided that where a Proclamation of Emergency is in operation only in a part of the territory of India, any such order shall not extend to any other part of the territory of India unless the President, being satisfied that the security of India or any part of the territory thereof is threatened by activities in or in relation to the part of the territory of India in which the Proclamation of Emergency is in operation, considers such extension to be necessary. 

 

(3) Every order made under clause (1) shall, as soon as may be after it is made, be laid before each House of Parliament.`,word_count:486},{article:"360",title:"Provisions as to financial emergency",description:`(1) If the President is satisfied that a situation has arisen whereby the financial stability or credit of India or of any part of the territory thereof is threatened, he may by a Proclamation make a declaration to that effect.

 

(2) A Proclamation issued under clause (1) —

 

(a) may be revoked or varied by a subsequent Proclamation; 

 

(b) shall be laid before each House of Parliament;

 

(c) shall cease to operate at the expiration of two months, unless before the expiration of that period it has been approved by resolutions of both Houses of Parliament:

 

   Provided that if any such Proclamation is issued at a time when the House of the People has been dissolved or the dissolution of the House of the People takes place during the period of two months referred to in subclause (c), and if a resolution approving the Proclamation has been passed by the Council of States, but no resolution with respect to such Proclamation has been passed by the House of the People before the expiration of that period, the Proclamation shall cease to operate at the expiration of thirty days from the date on which the House of the People first sits after its reconstitution unless before the expiration of the said period of thirty days a resolution approving the Proclamation has been also passed by the House of the People. 

 

(3) During the period any such Proclamation as is mentioned in clause (1) is in operation, the executive authority of the Union shall extend to the giving of directions to any State to observe such canons of financial propriety as may be specified in the directions, and to the giving of such other directions as the President may deem necessary and adequate for the purpose.

 

(4) Notwithstanding anything in this Constitution —

 

(a) any such direction may include —

 

(i) a provision requiring the reduction of salaries and allowances of all or any class of persons serving in connection with the affairs of a State;

 

(ii) a provision requiring all Money Bills or other Bills to which the provisions of article 207 apply to be reserved for the consideration of the President after they are passed by the Legislature of the State; 

 

(b) it shall be competent for the President during the period any Proclamation issued under this article is in operation to issue directions for the reduction of salaries and allowances of all or any class of persons serving in connection with the affairs of the Union including the Judges of the Supreme Court and the High Courts.`,word_count:428}]},{part:"Part XIX: Miscellaneous",part_number:"XIX",article_count:9,word_count:2634,articles:[{article:"361",title:"Protection of President and Governors and Rajpramukhs",description:`(1) The President, or the Governor or Rajpramukh of a State, shall not be answerable to any court for the exercise and performance of the powers and duties of his office or for any act done or purporting to be done by him in the exercise and performance of those powers and duties:

 

   Provided that the conduct of the President may be brought under review by any court, tribunal or body appointed or designated by either House of Parliament for the investigation of a charge under article 61:

 

   Provided further that nothing in this clause shall be construed as restricting the right of any person to bring appropriate proceedings against the Government of India or the Government of a State.

 

(2) No criminal proceedings whatsoever shall be instituted or continued against the President, or the Governor of a State, in any court during his term of office.

 

(3) No process for the arrest or imprisonment of the President, or the Governor of a State, shall issue from any court during his term of office.

 

(4) No civil proceedings in which relief is claimed against the President, or the Governor of a State, shall be instituted during his term of office in any court in respect of any act done or purporting to be done by him in his personal capacity, whether before or after he entered upon his office as President, or as Governor of such State, until the expiration of two months next after notice in writing has been delivered to the President or the Governor, as the case may be, or left at his office stating the nature of the proceedings, the cause of action therefor, the name, description and place of residence of the party by whom such proceedings are to be instituted and the relief which he claims.`,word_count:302},{article:"363",title:"Bar to interference by courts in disputes arising out of certain treaties, agreements, etc",description:`(1) Notwithstanding anything in this Constitution but subject to the provisions of article 143, neither the Supreme Court nor any other court shall have jurisdiction in any dispute arising out of any provision of a treaty, agreement, covenant, engagement, sanad or other similar instrument which was entered into or executed before the commencement of this Constitution by any Ruler of an Indian State and to which the Government of the Dominion of India or any of its predecessor Governments was a party and which has or has been continued in operation after such commencement, or in any dispute in respect of any right accruing under or any liability or obligation arising out of any of the provisions of this Constitution relating to any such treaty, agreement, covenant, engagement, sanad or other similar instrument.

 

(2) In this article —

 

(a) “Indian State” means any territory recognised before the commencement of this Constitution by His Majesty or the Government of the Dominion of India as being such a State; and

 

(b) “Ruler” includes the Prince, Chief or other person recognised before such commencement by His Majesty or the Government of the Dominion of India as the Ruler of any Indian State.`,word_count:199},{article:"364",title:"Special provisions as to major ports and aerodromes",description:`(1) Notwithstanding anything in this Constitution, the President may by public notification direct that as from such date as may be specified in the notification —

 

(a) any law made by Parliament or by the Legislature of a State shall not apply to any major port or aerodrome or shall apply thereto subject to such exceptions or modifications as may be specified in the notification, or

 

(b) any existing law shall cease to have effect in any major port or aerodrome except as respects things done or omitted to be done before the said date, or shall in its application to such port or aerodrome have effect subject to such exceptions or modifications as may be specified in the notification.

 

(2) In this article —

 

(a) “major port” means a port declared to be a major port by or under any law made by Parliament or any existing law and includes all areas for the time being included within the limits of such port;

 

(b) “aerodrome” means aerodrome as defined for the purposes of the enactments relating to airways, aircraft and air navigation.`,word_count:183},{article:"365",title:"Effect of failure to comply with, or to give effect to, directions given by the Union",description:"Where any State has failed to comply with, or to give effect to, any directions given in the exercise of the executive power of the Union under any of the provisions of this Constitution, it shall be lawful for the President to hold that a situation has arisen in which the Government of the State cannot be carried on in accordance with the provisions of this Constitution.",word_count:67},{article:"366",title:"Definitions",description:`In this Constitution, unless the context otherwise requires, the following expressions have the meanings hereby respectively assigned to them, that is to say —

 

(1) “agricultural income” means agricultural income as defined for the purposes of the enactments relating to Indian income-tax;

 

(2) “an Anglo-Indian” means a person whose father or any of whose other male progenitors in the male line is or was of European descent but who is domiciled within the territory of India and is or was born within such territory of parents habitually resident therein and not established there for temporary purposes only;

 

(3) “article” means an article of this Constitution;

 

(4) “borrow” includes the raising of money by the grant of annuities, and “loan” shall be construed accordingly; 

 

(5) “clause” means a clause of the article in which the expression occurs;

 

(6) “corporation tax” means any tax on income, so far as that tax is payable by companies and is a tax in the case of which the following conditions are fulfilled: —

 

(a) that it is not chargeable in respect of agricultural income;

 

(b) that no deduction in respect of the tax paid by companies is, by any enactments which may apply to the tax, authorised to be made from dividends payable by the companies to individuals;

 

(c) that no provision exists for taking the tax so paid into account in computing for the purposes of Indian income-tax the total income of individuals receiving such dividends, or in computing the Indian income-tax payable by, or refundable to, such individuals;

 

(7) “corresponding Province”, “corresponding Indian State” or “corresponding State” means in cases of doubt such Province, Indian State or State as may be determined by the President to be the corresponding Province, the corresponding Indian State or the corresponding State, as the case may be, for the particular purpose in question;

 

(8) “debt” includes any liability in respect of any obligation to repay capital sums by way of annuities and any liability under any guarantee, and “debt charges” shall be construed accordingly;

 

(9) “estate duty” means a duty to be assessed on or by reference to the principal value, ascertained in accordance with such rules as may be prescribed by or under laws made by Parliament or the Legislature of a State relating to the duty, of all property passing upon death or deemed, under the provisions of the said laws, so to pass;

 

(10) “existing law” means any law, Ordinance, order, bye-law, rule or regulation passed or made before the commencement of this Constitution by any Legislature, authority or person having power to make such a law, Ordinance, order, bye-law, rule or regulation;

 

(11) “Federal Court” means the Federal Court constituted under the Government of India Act, 1935;

 

(12) “goods” includes all materials, commodities, and articles;

 

(13) “guarantee” includes any obligation undertaken before the commencement of this Constitution to make payments in the event of the profits of an undertaking falling short of a specified amount;

 

(14) “High Court” means any Court which is deemed for the purposes of this Constitution to be a High Court for any State and includes —

 

(a) any Court in the territory of India constituted or reconstituted under this Constitution as a High Court, and 

 

(b) any other Court in the territory of India which may be declared by Parliament by law to be a High Court for all or any of the purposes of this Constitution;

 

(15) “Indian State” means any territory which the Government of the Dominion of India recognised as such a State;

 

(16) “Part” means a Part of this Constitution;

 

(17) “pension” means a pension, whether contributory or not, of any kind whatsoever payable to or in respect of any person, and includes retired pay so payable; a gratuity so payable and any sum or sums so payable by way of the return, with or without interest thereon or any other addition thereto, of subscriptions to a provident fund;

 

(18) “Proclamation of Emergency” means a Proclamation issued under clause (1) of article 352;

 

(19) “public notification” means a notification in the Gazette of India, or, as the case may be, the Official Gazette of a State;

 

(20) “railway” does not include —

 

(a) a tramway wholly within a municipal area, or

 

(b) any other line of communication wholly situate in one State and declared by Parliament by law not to be a railway; 

 

(22) “Ruler” means the Prince, Chief or other person who, at any time before the commencement of the Constitution (Twenty-sixth Amendment) Act, 1971, was recognised by the President as the Ruler of an Indian State or any person who, at any time before such commencement, was recognised by the President as the successor of such Ruler;

 

(23) “Schedule” means a Schedule to this Constitution;

 

(24) “Scheduled Castes” means such castes, races or tribes or parts of or groups within such castes, races or tribes as are deemed under article 341 to be Scheduled Castes for the purposes of this Constitution;

 

(25) “Scheduled Tribes” means such tribes or tribal communities or parts of or groups within such tribes or tribal communities as are deemed under article 342 to be Scheduled Tribes for the purposes of this Constitution;

 

(26) “securities” includes stock;

 

(27) “sub-clause” means a sub-clause of the clause in which the expression occurs;

 

(28) “taxation” includes the imposition of any tax or impost, whether general or local or special, and “tax” shall be construed accordingly;

 

(29) “tax on income” includes a tax in the nature of an excess profits tax;

 

(29A) “tax on the sale or purchase of goods” includes —

 

(a) a tax on the transfer, otherwise than in pursuance of a contract, of property in any goods for cash, deferred payment or other valuable consideration;

 

(b) a tax on the transfer of property in goods (whether as goods or in some other form) involved in the execution of a works contract;

 

(c) a tax on the delivery of goods on hirepurchase or any system of payment by instalments;

 

(d) a tax on the transfer of the right to use any goods for any purpose (whether or not for a specified period) for cash, deferred payment or other valuable consideration;

 

(e) a tax on the supply of goods by any unincorporated association or body of persons to a member thereof for cash, deferred payment or other valuable consideration; 

 

(f) a tax on the supply, by way of or as part of any service or in any other manner whatsoever, of goods, being food or any other article for human consumption or any drink (whether or not intoxicating), where such supply or service, is for cash, deferred payment or other valuable consideration,

 

and such transfer, delivery or supply of any goods shall be deemed to be a sale of those goods by the person making the transfer, delivery or supply and a purchase of those goods by the person to whom such transfer, delivery or supply is made;

 

(30) “Union territory” means any Union territory specified in the First Schedule and includes any other territory comprised within the territory of India but not specified in that Schedule.`,word_count:1186},{article:"367",title:"Interpretation",description:`(1) Unless the context otherwise requires, the General Clauses Act, 1897, shall, subject to any adaptations and modifications that may be made therein under article 372, apply for the interpretation of this Constitution as it applies for the interpretation of an Act of the Legislature of the Dominion of India.

 

(2) Any reference in this Constitution to Acts or laws of, or made by, Parliament, or to Acts or laws of, or made by, the Legislature of a State, shall be construed as including a reference to an Ordinance made by the President or, to an Ordinance made by a Governor, as the case may be.

 

(3) For the purposes of this Constitution “foreign State” means any State other than India:

 

   Provided that, subject to the provisions of any law made by Parliament, the President may by order declare any State not to be a foreign State for such purposes as may be specified in the order.`,word_count:157},{article:"361A",title:"Protection of publication of proceedings of Parliament and State Legislatures",description:`(1) No person shall be liable to any proceedings, civil or criminal, in any court in respect of the publication in a newspaper of a substantially true report of any proceedings of either House of Parliament or the Legislative Assembly, or, as the case may be, either House of the Legislature, of a State, unless the publication is proved to have been made with malice:

 

   Provided that nothing in this clause shall apply to the publication of any report of the proceedings of a secret sitting of either House of Parliament or the Legislative Assembly, or, as the case may be, either House of the Legislature, of a State.

 

(2) Clause (1) shall apply in relation to reports or matters broadcast by means of wireless telegraphy as part of any programme or service provided by means of a broadcasting station as it applies in relation to reports or matters published in a newspaper.

 

   Explanation. — In this article, “newspaper” includes a news agency report containing material for publication in a newspaper .`,word_count:172},{article:"361B",title:"Disqualification for appointment on remunerative political post",description:`A member of a House belonging to any political party who is disqualified for being a member of the House under paragraph 2 of the Tenth Schedule shall also be disqualified to hold any remunerative political post for duration of the period commencing from the date of his disqualification till the date on which the term of his office as such member would expire or till the date on which he contests an election to a House and is declared elected, whichever is earlier.

 

Explanation. — For the purposes of this article, —

 

(a) the expression “House” has the meaning assigned to it in clause (a) of paragraph 1 of the Tenth Schedule; 

 

(b) the expression “remunerative political post” means any office —

 

(i) under the Government of India or the Government of a State where the salary or remuneration for such office is paid out of the public revenue of the Government of India or the Government of the State, as the case may be; or

 

(ii) under a body, whether incorporated or not, which is wholly or partially owned by the Government of India or the Government of a State and the salary or remuneration for such office is paid by such body,

 

except where such salary or remuneration paid is compensatory in nature.`,word_count:216},{article:"363A",title:"Recognition granted to Rulers of Indian States to cease and privy purses to be abolished",description:`Notwithstanding anything in this Constitution or in any law for the time being in force —

 

(a) the Prince, Chief or other person who, at any time before the commencement of the Constitution (Twenty-sixth Amendment) Act, 1971, was recognised by the President as the Ruler of an Indian State or any person who, at any time before such commencement, was recognised by the President as the successor of such ruler shall, on and from such commencement, cease to be recognised as such Ruler or the successor of such Ruler;

 

(b) on and from the commencement of the Constitution (Twenty-sixth Amendment) Act, 1971, privy purse is abolished and all rights, liabilities and obligations in respect of privy purse are extinguished and accordingly the Ruler or, as the case may be, the successor of such Ruler, referred to in clause (a) or any other person shall not be paid any sum as privy purse.`,word_count:152}]},{part:"Part XX: Amendment of the Constitution",part_number:"XX",article_count:1,word_count:341,articles:[{article:"368",title:"Power of Parliament to amend the Constitution and procedure therefor",description:`(1) Notwithstanding anything in this Constitution, Parliament may in exercise of its constituent power amend by way of addition, variation or repeal any provision of this Constitution in accordance with the procedure laid down in this article.

 

(2) An amendment of this Constitution may be initiated only by the introduction of a Bill for the purpose in either House of Parliament, and when the Bill is passed in each House by a majority of the total membership of that House and by a majority of not less than two-thirds of the members of that House present and voting, it shall be presented to the President who shall give his assent to the Bill and thereupon] the Constitution shall stand amended in accordance with the terms of the Bill:

 

   Provided that if such amendment seeks to make any change in —

 

(a) article 54, article 55, article 73, article 162 or article 241, or

 

(b) Chapter IV of Part V, Chapter V of Part VI, or Chapter I of Part XI, or

 

(c) any of the Lists in the Seventh Schedule, or

 

(d) the representation of States in Parliament, or

 

(e) the provisions of this article,

 

the amendment shall also require to be ratified by the Legislatures of not less than one-half of the States by resolutions to that effect passed by those Legislatures before the Bill making provision for such amendment is presented to the President for assent.

 

(3) Nothing in article 13 shall apply to any amendment made under this article.

 

(4) No amendment of this Constitution (including the provisions of Part III) made or purporting to have been made under this article [whether before or after the commencement of section 55 of the Constitution (Fortysecond Amendment) Act, 1976] shall be called in question in any court on any ground.

 

(5) For the removal of doubts, it is hereby declared that there shall be no limitation whatever on the constituent power of Parliament to amend by way of addition, variation or repeal the provisions of this Constitution under this article.`,word_count:341}]},{part:"Part XXI: Temporary & Special Provisions",part_number:"XXI",article_count:23,word_count:6533,articles:[{article:"369",title:"Temporary power to Parliament to make laws with respect to certain matters in the State List as if they were matters in the Concurrent List",description:`Notwithstanding anything in this Constitution, Parliament shall, during a period of five years from the commencement of this Constitution, have power to make laws with respect to the following matters as if they were enumerated in the Concurrent List, namely: —

 

(a) trade and commerce within a State in, and the production, supply and distribution of, cotton and woollen textiles, raw cotton (including ginned cotton and unginned cotton or kapas), cotton seed, paper (including newsprint), food-stuffs (including edible oilseeds and oil), cattle fodder (including oil-cakes and other concentrates), coal (including coke and derivatives of coal), iron, steel and mica;

 

(b) offences against laws with respect to any of the matters mentioned in clause (a), jurisdiction and powers of all courts except the Supreme Court with respect to any of those matters, and fees in respect of any of those matters but not including fees taken in any court;

 

but any law made by Parliament, which Parliament would not but for the provisions of this article have been competent to make, shall, to the extent of the incompetency, cease to have effect on the expiration of the said period, except as respects things done or omitted to be done before the expiration thereof.`,word_count:202},{article:"370",title:"Temporary provisions with respect to the State of Jammu and Kashmir",description:"Article 370, which granted special autonomy to the state of Jammu and Kashmir, was abrogated on August 5, 2019. This marked a significant constitutional change, as the state was reorganized into two Union Territories: Jammu & Kashmir (with a legislative assembly) and Ladakh (without a legislative assembly). The special provisions and autonomy previously enjoyed by Jammu and Kashmir under this article are no longer applicable, ensuring uniform application of the Indian Constitution across the entire region.",word_count:76},{article:"371",title:"Special provision with respect to the States of Maharashtra and Gujarat",description:`(2) Notwithstanding anything in this Constitution, the President may by order made with respect to the State of Maharashtra or Gujarat], provide for any special responsibility of the Governor for —

 

(a) the establishment of separate development boards for Vidarbha, Marathwada, and the rest of Maharashtra or, as the case may be, Saurashtra, Kutch and the rest of Gujarat with the provision that a report on the working of each of these boards will be placed each year before the State Legislative Assembly;

 

(b) the equitable allocation of funds for developmental expenditure over the said areas, subject to the requirements of the State as a whole; and

 

(c) an equitable arrangement providing adequate facilities for technical education and vocational training, and adequate opportunities for employment in services under the control of the State Government, in respect of all the said areas, subject to the requirements of the State as a whole.`,word_count:151},{article:"372",title:"Continuance in force of existing laws and their adaptation",description:`(1) Notwithstanding the repeal by this Constitution of the enactments referred to in article 395 but subject to the other provisions of this Constitution, all the law in force in the territory of India immediately before the commencement of this Constitution shall continue in force therein until altered or repealed or amended by a competent Legislature or other competent authority.

 

(2) For the purpose of brining the provisions of any law in force in the territory of India into accord with the provisions of this Constitution, the President may by order1 make such adaptations and modifications of such law, whether by way of repeal or amendment, as may be necessary or expedient, and provide that the law shall, as from such date as may be specified in the order, have effect subject to the adaptations and modifications so made, and any such adaptation or modification shall not be questioned in any court of law.

 

(3) Nothing in clause (2) shall be deemed —

 

(a) to empower the President to make any adaptation or modification of any law after the expiration of three years from the commencement of this Constitution; or

 

(b) to prevent any competent Legislature or other competent authority from repealing or amending any law adapted or modified by the President under the said clause.

 

   Explanation I. — The expression “law in force” in this article shall include a law passed or made by a Legislature or other competent authority in the territory of India before the commencement of this Constitution and not previously repealed, notwithstanding that it or parts of it may not be then in operation either at all or in particular areas.

 

   Explanation II. — Any law passed or made by a Legislature or other competent authority in the territory of India which immediately before the commencement of this Constitution had extra-territorial effect as well as effect in the territory of India shall, subject to any such adaptations and modifications as aforesaid, contiue to have such extra-territorial effect. 

 

Explanation III. — Nothing in this article shall be construed as continuing any temporary law in force beyond the date fixed for its expiration or the date on which it would have expired if this Constitution had not come into force.

 

Explanation IV. — An Ordinance promulgated by the Governor of a Province under section 88 of the Government of India Act, 1935, and in force immediately before the commencement of this Constitution shall, unless withdrawn by the Governor of the corresponding State earlier, cease to operate at the expiration of six weeks from the first meeting after such commencement of the Legislative Assembly of that State functioning under clause (1) of article 382, and nothing in this article shall be construed as continuing any such Ordinance in force beyond the said period.`,word_count:465},{article:"373",title:"Power of President to make order in respect of persons under preventive detention in certain cases",description:"Until provision is made by Parliament under clause (7) of article 22, or until the expiration of one year from the commencement of this Constitution, whichever is earlier, the said article shall have effect as if for any reference to Parliament in clauses (4) and (7) thereof there were substituted a reference to the President and for any reference to any law made by Parliament in those clauses there were substituted a reference to an order made by the President.",word_count:80},{article:"374",title:"Provisions as to Judges of the Federal Court and proceedings pending in the Federal Court or before His Majesty in Council",description:`(1) The Judges of the Federal Court holding office immediately before the commencement of this Constitution shall, unless they have elected otherwise, become on such commencement the Judges of the Supreme Court and shall thereupon be entitled to such salaries and allowances and to such rights in respect of leave of absence and pension as are provided for under article 125 in respect of the Judges of the Supreme Court.

 

(2) All suits, appeals and proceedings, civil or criminal, pending in the Federal Court at the commencement of this Constitution shall stand removed to the Supreme Court, and the Supreme Court shall have jurisdiction to hear and determine the same, and the judgments and orders of the Federal Court delivered or made before the commencement of this Constitution shall have the same force and effect as if they had been delivered or made by the Supreme Court.

 

(3) Nothing in this Constitution shall operate to invalidate the exercise of jurisdiction by His Majesty in Council to dispose of appeals and petitions from, or in respect of, any judgment, decree or order of any court within the territory of India in so far as the exercise of such jurisdiction is authorised by law, and any order of His Majesty in Council made on any such appeal or petition after the commencement of this Constitution shall for all purposes have effect as if it were an order or decree made by the Supreme Court in the exercise of the jurisdiction conferred on such Court by this Constitution.

 

(4) On and from the commencement of this Constitution the jurisdiction of the authority functioning as the Privy Council in a State specified in Part B of the First Schedule to entertain and dispose of appeals and petitions from or in respect of any judgment, decree or order of any court within that State shall cease, and all appeals and other proceedings pending before the said authority at such commencement shall be transferred to, and disposed of by, the Supreme Court.

 

(5) Further provision may be made by Parliament by law to give effect to the provisions of this article.`,word_count:355},{article:"375",title:"Courts, authorities and officers to continue to function subject to the provisions of the Constitution",description:"All courts of civil, criminal and revenue jurisdiction, all authorities and all officers, judicial, executive and ministerial, throughout the territory of India, shall continue to exercise their respective functions subject to the provisions of this Constitution.",word_count:36},{article:"376",title:"Provisions as to Judges of High Courts",description:`(1) Notwithstanding anything in clause (2) of article 217, the Judges of a High Court in any Province holding office immediately before the commencement of this Constitution shall, unless they have elected otherwise, become on such commencement the Judges of the High Court in the corresponding State, and shall thereupon be entitled to such salaries and allowances and to such rights in respect of leave of absence and pension as are provided for under article 221 in respect of the Judges of such High Court. Any such Judge shall, notwithstanding that he is not a citizen of India, be eligible for appointment as Chief Justice of such High Court, or as Chief Justice or other Judge of any other High Court. 

 

(2) The Judges of a High Court in any Indian State corresponding to any State specified in Part B of the First Schedule holding office immediately before the commencement of this Constitution shall, unless they have elected otherwise, become on such commencement the Judges of the High Court in the State so specified and shall, notwithstanding anything in clauses (1) and (2) of article 217 but subject to the proviso to clause (1) of that article, continue to hold office until the expiration of such period as the President may by order determine.

 

(3) In this article, the expression “Judge” does not include an acting Judge or an additional Judge.`,word_count:231},{article:"377",title:"Provisions as to Comptroller and Auditor-General of India",description:"The Auditor-General of India holding office immediately before the commencement of this Constitution shall, unless he has elected otherwise, become on such commencement the Comptroller and Auditor-General of India and shall thereupon be entitled to such salaries and to such rights in respect of leave of absence and pension as are provided for under clause (3) of article 148 in respect of the Comptroller and Auditor-General of India and be entitled to continue to hold office until the expiration of his term of office as determined under the provisions which were applicable to him immediately before such commencement.",word_count:98},{article:"378",title:"Provisions as to Public Service Commissions",description:`(1) The members of the Public Service Commission for the Dominion of India holding office immediately before the commencement of this Constitution shall, unless they have elected otherwise, become on such commencement the members of the Public Service Commission for the Union and shall, notwithstanding anything in clauses (1) and (2) of article 316 but subject to the proviso to clause (2) of that article, continue to hold office until the expiration of their term of office as determined under the rules which were applicable immediately before such commencement to such members.

 

(2) The members of a Public Service Commission of a Province or of a Public Service Commission serving the needs of a group of Provinces holding office immediately before the commencement of this Constitution shall, unless they have elected otherwise, become on such commencement the members of the Public Service Commission for the corresponding State or the members of the Joint State Public Service Commission serving the needs of the corresponding States, as the case may be, and shall, notwithstanding anything in clauses (1) and (2) of article 316 but subject to the proviso to clause (2) of that article, continue to hold office until the expiration of their term of office as determined under the rules which were applicable immediately before such commencement to such members.`,word_count:219},{article:"392",title:"Power of the President to remove difficulties",description:`(1) The President may, for the purpose of removing any difficulties, particularly in relation to the transition from the provisions of the Government of India Act, 1935, to the provisions of this Constitution, by order direct that this Constitution shall, during such period as may be specified in the order, have effect subject to such adaptations, whether by way of modification, addition or omission, as he may deem to be necessary or expedient:

 

   Provided that no such order shall be made after the first meeting of Parliament duly constituted under Chapter II of Part V.

 

(2) Every order made under clause (1) shall be laid before Parliament.

 

(3) The powers conferred on the President by this article, by article 324, by clause (3) of article 367 and by article 391 shall, before the commencement of this Constitution, be exercisable by the Governor-General of the Dominion of India.`,word_count:147},{article:"371A",title:"Special provision with respect to the State of Nagaland",description:`(1) Notwithstanding anything in this Constitution, —

 

(a) no Act of Parliament in respect of —

 

(i) religious or social practices of the Nagas,

 

(ii) Naga customary law and procedure,

 

(iii) administration of civil and criminal justice involving decisions according to Naga customary law,

 

(iv) ownership and transfer of land and its resources, shall apply to the State of Nagaland unless the Legislative Assembly of Nagaland by a resolution so decides;

 

(b) the Governor of Nagaland shall have special responsibility with respect to law and order in the State of Nagaland for so long as in his opinion internal disturbances occurring in the Naga Hills-Tuensang Area immediately before the formation of that State continue therein or in any part thereof and in the discharge of his functions in relation thereto the Governor shall, after consulting the Council of Ministers, exercise his individual judgment as to the action to be taken:

 

   Provided that if any question arises whether any matter is or is not a matter as respects which the Governor is under this sub-clause required to act in the exercise of his individual judgment, the decision of the Governor in his discretion shall be final, and the validity of anything done by the Governor shall not be called in question on the ground that he ought or ought not to have acted in the exercise of his individual judgment:

 

   Provided further that if the President on receipt of a report from the Governor or otherwise is satisfied that it is no longer necessary for the Governor to have special responsibility with respect to law and order in the State of Nagaland, he may by order direct that the Governor shall cease to have such responsibility with effect from such date as may be specified in the order;

 

(c) in making his recommendation with respect to any demand for a grant, the Governor of Nagaland shall ensure that any money provided by the Government of India out of the Consolidated Fund of India for any specific service or purpose is included in the demand for a grant relating to that service or purpose and not in any other demand;

 

(d) as from such date as the Governor of Nagaland may by public notification in this behalf specify, there shall be established a regional council for the Tuensang district consisting of thirty-five members and the Governor shall in his discretion make rules providing for—

 

(i) the composition of the regional council and the manner in which the members of the regional council shall be chosen: 

 

   Provided that the Deputy Commissioner of the Tuensang district shall be the Chairman ex officio of the regional council and the Vice-Chairman of the regional council shall be elected by the members thereof from amongst themselves;

 

(ii) the qualifications for being chosen as, and for being, members of the regional council;

 

(iii) the term of office of, and the salaries and allowances, if any, to be paid to members of, the regional council;

 

(iv) the procedure and conduct of business of the regional council;

 

(v) the appointment of officers and staff of the regional council and their conditions of services; and

 

(vi) any other matter in respect of which it is necessary to make rules for the constitution and proper functioning of the regional council.

 

(2) Notwithstanding anything in this Constitution, for a period of ten years from the date of the formation of the State of Nagaland or for such further period as the Governor may, on the recommendation of the regional council, by public notification specify in this behalf, —

 

(a) the administration of the Tuensang district shall be carried on by the Governor;

 

(b) where any money is provided by the Government of India to the Government of Nagaland to meet the requirements of the State of Nagaland as a whole, the Governor shall in his discretion arrange for an equitable allocation of that money between the Tuensang district and the rest of the State; 

 

(c) no Act of the Legislature of Nagaland shall apply to Tuensang district unless the Governor, on the recommendation of the regional council, by public notification so directs and the Governor in giving such direction with respect to any such Act may direct that the Act shall in its application to the Tuensang district or any part thereof have effect subject to such exceptions or modifications as the Governor may specify on the recommendation of the regional council:

 

   Provided that any direction given under this sub-clause may be given so as to have retrospective effect;

 

(d) the Governor may make regulations for the peace, progress and good Government of the Tuensang district and any regulations so made may repeal or amend with retrospective effect, if necessary, any Act of Parliament or any other law which is for the time being applicable to that district;

 

(e)

 

(i) one of the members representing the Tuensang district in the Legislative Assembly of Nagaland shall be appointed Minister for Tuensang affairs by the Governor on the advice of the Chief Minister and the Chief Minister in tendering his advice shall act on the recommendation of the majority of the members as aforesaid ;

 

(ii) the Minister for Tuensang affairs shall deal with, and have direct access to the Governor on, all matters relating to the Tuensang district but he shall keep the Chief Minister informed about the same; 

 

(f) notwithstanding anything in the foregoing provisions of this clause, the final decision on all matters relating to the Tuensang district shall be made by the Governor in his discretion;

 

(g) in articles 54 and 55 and clause (4) of article 80, references to the elected members of the Legislative Assembly of a State or to each such member shall include references to the members or member of the Legislative Assembly of Nagaland elected by the regional council established under this article;

 

(h) in article 170 —

 

(i) clause (1) shall, in relation to the Legislative Assembly of Nagaland, have effect as if for the word “sixty”, the word “forty-six” had been substituted;

 

(ii) in the said clause, the reference to direct election from territorial constituencies in the State shall include election by the members of the regional council established under this article;

 

(iii) in clauses (2) and (3), references to territorial constituencies shall mean references to territorial constituencies in the Kohima and Mokokchung districts.

 

(3) If any difficulty arises in giving effect to any of the foregoing provisions of this article, the President may by order do anything (including any adaptation or modification of any other article) which appears to him to be necessary for the purpose of removing that difficulty:

 

   Provided that no such order shall be made after the expiration of three years from the date of the formation of the State of Nagaland.

 

   Explanation. — In this article, the Kohima, Mokokchung and Tuensang districts shall have the same meanings as in the State of Nagaland Act, 1962.`,word_count:1156},{article:"371B",title:"Special provision with respect to the State of Assam",description:"Notwithstanding anything in this Constitution, the President may, by order made with respect to the State of Assam, provide for the constitution and functions of a committee of the Legislative Assembly of the State consisting of members of that Assembly elected from the tribal areas specified in 2 [Part I] of the table appended to paragraph 20 of the Sixth Schedule and such number of other members of that Assembly as may be specified in the order and for the modifications to be made in the rules of procedure of that Assembly for the constitution and proper functioning of such committee.",word_count:101},{article:"371C",title:"Special provision with respect to the State of Manipur",description:`(1) Notwithstanding anything in this Constitution, the President may, by order made with respect to the State of Manipur, provide for the constitution and functions of a committee of the Legislative Assembly of the State consisting of members of that Assembly elected from the Hill Areas of that State, for the modifications to be made in the rules of business of the Government and in the rules of procedure of the Legislative Assembly of the State and for any special responsibility of the Governor in order to secure the proper functioning of such committee.

 

(2) The Governor shall annually, or whenever so required by the President, make a report to the President regarding the administration of the Hill Areas in the State of Manipur and the executive power of the Union shall extend to the giving of directions to the State as to the administration of the said areas.

 

   Explanation.—In this article, the expression “Hill Areas” means such areas as the President may, by order, declare to be Hill areas.`,word_count:170},{article:"371D",title:"Special provisions with respect to the State of Andhra Pradesh",description:`(1) The President may by order made with respect to the State of Andhra Pradesh provide, having regard to the requirements of the State as a whole, for equitable opportunities and facilities for the people belonging to different parts of the State, in the matter of public employment and in the matter of education, and different provisions may be made for various parts of the State.

 

(2) An order made under clause (1) may, in particular, —

 

(a) require the State Government to organise any class or classes of posts in a civil service of, or any class or classes of civil posts under, the State into different local cadres for different parts of the State and allot in accordance with such principles and procedure as may be specified in the order the persons holding such posts to the local cadres so organised;

 

(b) specify any part or parts of the State which shall be regarded as the local area —

 

(i) for direct recruitment to posts in any local cadre (whether organised in pursuance of an order under this article or constituted otherwise) under the State Government;

 

(ii) for direct recruitment to posts in any cadre under any local authority within the State; and

 

(iii) for the purposes of admission to any University within the State or to any other educational institution which is subject to the control of the State Government;

 

(c) specify the extent to which, the manner in which and the conditions subject to which, preference or reservation shall be given or made —

 

(i) in the matter of direct recruitment to posts in any such cadre referred to in sub-clause (b) as may be specified in this behalf in the order; 

 

(ii) in the matter of admission to any such University or other educational institution referred to in sub-clause (b) as may be specified in this behalf in the order,

 

to or in favour of candidates who have resided or studied for any period specified in the order in the local area in respect of such cadre, University or other educational institution, as the case may be.

 

(3) The President may, by order, provide for the constitution of an Administrative Tribunal for the State of Andhra Pradesh to exercise such jurisdiction, powers and authority [including any jurisdiction, power and authority which immediately before the commencement of the Constitution (Thirty-second Amendment) Act, 1973, was exercisable by any court (other than the Supreme Court) or by any tribunal or other authority] as may be specified in the order with respect to the following matters, namely: —

 

(a) appointment, allotment or promotion to such class or classes of posts in any civil service of the State, or to such class or classes of civil posts under the State, or to such class or classes of posts under the control of any local authority within the State, as may be specified in the order;

 

(b) seniority of persons appointed, allotted or promoted to such class or classes of posts in any civil service of the State, or to such class or classes of civil posts under the State, or to such class or classes of posts under the control of any local authority within the State, as may be specified in the order;

 

(c) such other conditions of service of persons appointed, allotted or promoted to such class or classes of posts in any civil service of the State or to such class or classes of civil posts under the State or to such class or classes of posts under the control of any local authority within the State, as may be specified in the order. 

 

(4) An order made under clause (3) may —

 

(a) authorise the Administrative Tribunal to receive representations for the redress of grievances relating to any matter within its jurisdiction as the President may specify in the order and to make such orders thereon as the Administrative Tribunal deems fit;

 

(b) contain such provisions with respect to the powers and authorities and procedure of the Administrative Tribunal (including provisions with respect to the powers of the Administrative Tribunal to punish for contempt of itself) as the President may deem necessary;

 

(c) provide for the transfer to the Administrative Tribunal of such classes of proceedings, being proceedings relating to matters within its jurisdiction and pending before any court (other than the Supreme Court) or tribunal or other authority immediately before the commencement of such order, as may be specified in the order;

 

(d) contain such supplemental, incidental and consequential provisions (including provisions as to fees and as to limitation, evidence or for the application of any law for the time being in force subject to any exceptions or modifications) as the President may deem necessary.

 

(5) The Order of the Administrative Tribunal finally disposing of any case shall become effective upon its confirmation by the State Government or on the expiry of three months from the date on which the order is made, whichever is earlier:

 

   Provided that the State Government may, by special order made in writing and for reasons to be specified therein, modify or annul any order of the Administrative Tribunal before it becomes effective and in such a case, the order of the Administrative Tribunal shall have effect only in such modified form or be of no effect, as the case may be.

 

(6) Every special order made by the State Government under the proviso to clause (5) shall be laid, as soon as may be after it is made, before both Houses of the State Legislature.

 

(7) The High Court for the State shall not have any powers of superintendence over the Administrative Tribunal and no court (other than the Supreme Court) or tribunal shall exercise any jurisdiction, power or authority in respect of any matter subject to the jurisdiction, power or authority of, or in relation to, the Administrative Tribunal.

 

(8) If the President is satisfied that the continued existence of the Administrative Tribunal is not necessary, the President may by order abolish the Administrative Tribunal and make such provisions in such order as he may deem fit for the transfer and disposal of cases pending before the Tribunal immediately before such abolition.

 

(9) Notwithstanding any judgment, decree or order of any court, tribunal or other authority, —

 

(a) no appointment, posting, promotion or transfer of any person —

 

(i) made before the 1st day of November, 1956, to any post under the Government of, or any local authority within, the State of Hyderabad as it existed before that date; or

 

(ii) made before the commencement of the Constitution (Thirty-second Amendment) Act, 1973, to any post under the Government of, or any local or other authority within, the State of Andhra Pradesh; and 

 

(b) no action taken or thing done by or before any person referred to in sub-clause (a),

 

shall be deemed to be illegal or void or ever to have become illegal or void merely on the ground that the appointment, posting, promotion or transfer of such person was not made in accordance with any law, then in force, providing for any requirement as to residence within the State of Hyderabad or, as the case may be, within any part of the State of Andhra Pradesh, in respect of such appointment, posting, promotion or transfer.

 

(10) The provisions of this article and of any order made by the President thereunder shall have effect notwithstanding anything in any other provision of this Constitution or in any other law for the time being in force.`,word_count:1256},{article:"371E",title:"Establishment of Central University in Andhra Pradesh",description:"Parliament may by law provide for the establishment of a University in the State of Andhra Pradesh.",word_count:17},{article:"371F",title:"Special provisions with respect to the State of Sikkim",description:`Notwithstanding anything in this Constitution, —

 

(a) the Legislative Assembly of the State of Sikkim shall consist of not less than thirty members;

 

(b) as from the date of commencement of the Constitution (Thirty-sixth Amendment) Act, 1975 (hereafter in this article referred to as the appointed day) —

 

(i) the Assembly for Sikkim formed as a result of the elections held in Sikkim in April, 1974 with thirty-two members elected in the said elections (hereinafter referred to as the sitting members) shall be deemed to be the Legislative Assembly of the State of Sikkim duly constituted under this Constitution; 

 

(ii) the sitting members shall be deemed to be the members of the Legislative Assembly of the State of Sikkim duly elected under this Constitution; and

 

(iii) the said Legislative Assembly of the State of Sikkim shall exercise the powers and perform the functions of the Legislative Assembly of a State under this Constitution;

 

(c) in the case of the Assembly deemed to be the Legislative Assembly of the State of Sikkim under clause (b), the references to the period of five years, in clause (1) of article 172 shall be construed as references to a period of four years and the said period of four years shall be deemed to commence from the appointed day;

 

(d) until other provisions are made by Parliament by law, there shall be allotted to the State of Sikkim one seat in the House of the People and the State of Sikkim shall form one parliamentary constituency to be called the parliamentary constituency for Sikkim;

 

(e) the representative of the State of Sikkim in the House of the People in existence on the appointed day shall be elected by the members of the Legislative Assembly of the State of Sikkim;

 

(f) Parliament may, for the purpose of protecting the rights and interests of the different sections of the population of Sikkim make provision for the number of seats in the Legislative Assembly of the State of Sikkim which may be filled by candidates belonging to such sections and for the delimitation of the assembly constituencies from which candidates belonging to such sections alone may stand for election to the Legislative Assembly of the State of Sikkim;

 

(g) the Governor of Sikkim shall have special responsibility for peace and for an equitable arrangement for ensuring the social and economic advancement of different sections of the population of Sikkim and in the discharge of his special responsibility under this clause, the Governor of Sikkim shall, subject to such directions as the President may, from time to time, deem fit to issue, act in his discretion;

 

(h) all property and assets (whether within or outside the territories comprised in the State of Sikkim) which immediately before the appointed day were vested in the Government of Sikkim or in any other authority or in any person for the purposes of the Government of Sikkim shall, as from the appointed day, vest in the Government of the State of Sikkim;

 

(i) the High Court functioning as such immediately before the appointed day in the territories comprised in the State of Sikkim shall, on and from the appointed day, be deemed to be the High Court for the State of Sikkim;

 

(j) all courts of civil, criminal and revenue jurisdiction, all authorities and all officers, judicial, executive and ministerial, throughout the territory of the State of Sikkim shall continue on and from the appointed day to exercise their respective functions subject to the provisions of this Constitution;

 

(k) all laws in force immediately before the appointed day in the territories comprised in the State of Sikkim or any part thereof shall continue to be in force therein until amended or repealed by a competent Legislature or other competent authority; 

 

(l) for the purpose of facilitating the application of any such law as is referred to in clause (k) in relation to the administration of the State of Sikkim and for the purpose of bringing the provisions of any such law into accord with the provisions of this Constitution, the President may, within two years from the appointed day, by order, make such adaptations and modifications of the law, whether by way of repeal or amendment, as may be necessary or expedient, and thereupon, every such law shall have effect subject to the adaptations and modifications so made, and any such adaptation or modification shall not be questioned in any court of law;

 

(m) neither the Supreme Court nor any other court shall have jurisdiction in respect of any dispute or other matter arising out of any treaty, agreement, engagement or other similar instrument relating to Sikkim which was entered into or executed before the appointed day and to which the Government of India or any of its predecessor Governments was a party, but nothing in this clause shall be construed to derogate from the provisions of article 143;

 

(n) the President may, by public notification, extend with such restrictions or modifications as he thinks fit to the State of Sikkim any enactment which is in force in a State in India at the date of the notification;

 

(o) if any difficulty arises in giving effect to any of the foregoing provisions of this article, the President may, by order, do anything (including any adaptation or modification of any other article) which appears to him to be necessary for the purpose of removing that difficulty:

 

   Provided that no such order shall be made after the expiry of two years from the appointed day;

 

(p) all things done and all actions taken in or in relation to the State of Sikkim or the territories comprised therein during the period commencing on the appointed day and ending immediately before the date on which the Constitution (Thirty-sixth Amendment) Act, 1975, receives the assent of the President shall, in so far as they are in conformity with the provisions of this Constitution as amended by the Constitution (Thirty-sixth Amendment) Act, 1975, be deemed for all purposes to have been validly done or taken under this Constitution as so amended.`,word_count:1013},{article:"371G",title:"Special provision with respect to the State of Mizoram",description:`Notwithstanding anything in this Constitution, —

 

(a) no Act of Parliament in respect of —

 

(i) religious or social practices of the Mizos,

 

(ii) Mizo customary law and procedure,

 

(iii) administration of civil and criminal justice involving decisions according to Mizo customary law,

 

(iv) ownership and transfer of land,

 

shall apply to the State of Mizoram unless the Legislative Assembly of the State of Mizoram by a resolution so decides:

 

   Provided that nothing in this clause shall apply to any Central Act in force in the Union territory of Mizoram immediately before the commencement of the Constitution (Fifty-third Amendment) Act, 1986;

 

(b) the Legislative Assembly of the State of Mizoram shall consist of not less than forty members.`,word_count:118},{article:"371H",title:"Special provision with respect to the State of Arunachal Pradesh",description:`Notwithstanding anything in this Constitution, —

 

(a) the Governor of Arunachal Pradesh shall have special responsibility with respect to law and order in the State of Arunachal Pradesh and in the discharge of his functions in relation thereto, the Governor shall, after consulting the Council of Ministers, exercise his individual judgment as to the action to be taken:

 

   Provided that if any question arises whether any matter is or is not a matter as respects which the Governor is under this clause required to act in the exercise of his individual judgment, the decision of the Governor in his discretion shall be final, and the validity of anything done by the Governor shall not be called in question on the ground that he ought or ought not to have acted in the exercise of his individual judgment:

 

   Provided further that if the President on receipt of a report from the Governor or otherwise is satisfied that it is no longer necessary for the Governor to have special responsibility with respect to law and order in the State of Arunachal Pradesh, he may by order direct that the Governor shall cease to have such responsibility with effect from such date as may be specified in the order;

 

(b) the Legislative Assembly of the State of Arunachal Pradesh shall consist of not less than thirty members.`,word_count:224},{article:"371I",title:"Special provision with respect to the State of Goa",description:"Notwithstanding anything in this Constitution, the Legislative Assembly of the State of Goa shall consist of not less than thirty members.",word_count:21},{article:"372A",title:"Power of the President to adapt laws",description:`(1) For the purposes of bringing the provisions of any law in force in India or in any part thereof, immediately before the commencement of the Constitution (Seventh Amendment) Act, 1956, into accord with the provisions of this Constitution as amended by that Act, the President may by order made before the first day of November, 1957, make such adaptations and modifications of the law, whether by way of repeal or amendment, as may be necessary or expedient, and provide that the law shall, as from such date as may be specified in the order, have effect subject to the adaptations and modifications so made, and any such adaptation or modification shall not be questioned in any court of law.

 

(2) Nothing in clause (1) shall be deemed to prevent a competent Legislature or other competent authority from repealing or amending any law adapted or modified by the President under the said clause.`,word_count:153},{article:"378A",title:"Special provision as to duration of Andhra Pradesh Legislative Assembly",description:"Notwithstanding anything contained in article 172, the Legislative Assembly of the State of Andhra Pradesh as constituted under the provisions of sections 28 and 29 of the States Reorganisation Act, 1956, shall, unless sooner dissolved, continue for a period of five years from the date referred to in the said section 29 and no longer and the expiration of the said period shall operate as a dissolution of that Legislative Assembly.",word_count:71},{article:"394A",title:"Authoritative text in the Hindi language",description:`(1) The President shall cause to be published under his authority, —

 

(a) the translation of this Constitution in the Hindi language, signed by the members of the Constituent Assembly, with such modifications as may be necessary to bring it in conformity with the language, style and terminology adopted in the authoritative texts of Central Acts in the Hindi language, and incorporating therein all the amendments of this Constitution made before such publication; and

 

(b) the translation in the Hindi language of every amendment of this Constitution made in the English language.

 

(2) The translation of this Constitution and of every amendment thereof published under clause (1) shall be construed to have the same meaning as the original thereof and if any difficulty arises in so construing any part of such translation, the President shall cause the same to be revised suitably.

 

(3) The translation of this Constitution and of every amendment thereof published under this article shall be deemed to be, for all purposes, the authoritative text thereof in the Hindi language.]`,word_count:173}]},{part:"Part XXII: Short Title & Commencement",part_number:"XXII",article_count:3,word_count:103,articles:[{article:"393",title:"Short title",description:"This Constitution may be called the Constitution of India.",word_count:9},{article:"394",title:"Commencement",description:"This article and articles 5, 6, 7, 8, 9, 60, 324, 366, 367, 379, 380, 388, 391, 392 and 393 shall come into force at once, and the remaining provisions of this Constitution shall come into force on the twenty-sixth day of January, 1950, which day is referred to in this Constitution as the commencement of this Constitution.",word_count:58},{article:"395",title:"Repeals",description:"The Indian Independence Act, 1947, and the Government of India Act, 1935, together with all enactments amending or supplementing the latter Act, but not including the Abolition of Privy Council Jurisdiction Act, 1949, are hereby repealed.",word_count:36}]}],tS=[{schedule_number:1,title:"States and Union Territories",description:"Lists the States and Union Territories of India and their territories as defined in Articles 1 and 4",word_count:1644},{schedule_number:2,title:"Salaries of President, Governors, Judges, etc.",description:"Provisions relating to emoluments, allowances, privileges of President, Governors, Speaker, Deputy Speaker, Chairman and Deputy Chairman of Parliament, Judges of Supreme Court and High Courts, and Comptroller and Auditor-General",word_count:1893},{schedule_number:3,title:"Forms of Oaths and Affirmations",description:"Forms of oaths or affirmations for Ministers, candidates for election to Parliament, Members of Parliament, Judges of Supreme Court and High Courts, and Comptroller and Auditor-General",word_count:931},{schedule_number:4,title:"Allocation of Seats in Rajya Sabha",description:"Allocation of seats in the Council of States (Rajya Sabha) to States and Union Territories",word_count:188},{schedule_number:5,title:"Administration of Scheduled Areas and Scheduled Tribes",description:"Provisions relating to the administration and control of Scheduled Areas and Scheduled Tribes",word_count:1059},{schedule_number:6,title:"Administration of Tribal Areas in North-Eastern States",description:"Provisions relating to the administration of tribal areas in the States of Assam, Meghalaya, Tripura and Mizoram through autonomous District Councils and Regional Councils",word_count:10540},{schedule_number:7,title:"Union, State and Concurrent Lists",description:"Division of powers between Union and States through three lists - Union List (97 subjects), State List (66 subjects), and Concurrent List (47 subjects)",word_count:3890},{schedule_number:8,title:"Official Languages",description:"List of 22 official languages recognized by the Constitution of India",word_count:52},{schedule_number:9,title:"Acts and Regulations Protected from Judicial Review",description:"Contains 284 Acts related to land reforms and other laws that cannot be challenged in courts on grounds of violation of Fundamental Rights",word_count:4737},{schedule_number:10,title:"Anti-Defection Provisions",description:"Provisions relating to disqualification of members of Parliament and State Legislatures on grounds of defection",word_count:1669},{schedule_number:11,title:"Powers of Panchayats",description:"List of 29 subjects on which Panchayats may be given powers and responsibilities",word_count:181},{schedule_number:12,title:"Powers of Municipalities",description:"List of 18 subjects on which Municipalities may be given powers and responsibilities",word_count:155}],ns={preamble:Y1,parts:eS,schedules:tS},nS="https://www.constitutionofindia.net/articles/preamble/",oS={1:"https://www.constitutionofindia.net/schedules/i-the-states/",2:"https://www.constitutionofindia.net/schedules/a-provisions-as-to-the-president-and-the-governors-of-states/",3:"https://www.constitutionofindia.net/schedules/forms-of-oaths-or-affirmations/",4:"https://www.constitutionofindia.net/schedules/allocation-of-seats-in-the-council-of-states/",5:"https://www.constitutionofindia.net/schedules/fifth-schedule/",6:"https://www.constitutionofindia.net/schedules/sixth-schedule/",7:"https://www.constitutionofindia.net/schedules/list-i-union-list/",8:"https://www.constitutionofindia.net/schedules/eighth-schedule/",9:"https://www.constitutionofindia.net/schedules/ninth-schedule/",10:"https://www.constitutionofindia.net/schedules/tenth-schedule/",11:"https://www.constitutionofindia.net/schedules/eleventh-schedule/",12:"https://www.constitutionofindia.net/schedules/twelfth-schedule/"};function iS(e,t){const n=t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();return`https://www.constitutionofindia.net/articles/article-${e.toLowerCase()}-${n}/`}function du(e,t){if(e.length<3)return"";const n=e.length,o=[];for(let i=0;i<n;i++){const a=e[(i-1+n)%n],r=e[i],s=e[(i+1)%n],l=[a[0]-r[0],a[1]-r[1]],h=[s[0]-r[0],s[1]-r[1]],c=Math.sqrt(l[0]*l[0]+l[1]*l[1]),d=Math.sqrt(h[0]*h[0]+h[1]*h[1]),u=Math.min(c,d)/2,p=Math.min(t,u),b=[l[0]/c,l[1]/c],g=[h[0]/d,h[1]/d],w=[r[0]+b[0]*p,r[1]+b[1]*p],m=[r[0]+g[0]*p,r[1]+g[1]*p];i===0?o.push(`M ${w[0]},${w[1]}`):o.push(`L ${w[0]},${w[1]}`),o.push(`Q ${r[0]},${r[1]} ${m[0]},${m[1]}`)}return o.push("Z"),o.join(" ")}function aS(e,t){const n=np(e);return e.map(o=>{const i=o[0]-n[0],a=o[1]-n[1],r=Math.sqrt(i*i+a*a);if(r===0)return o;const s=Math.max(0,(r-t)/r);return[n[0]+i*s,n[1]+a*s]})}const rS=()=>{const e=Ie.useRef(null),t=Ie.useRef(null),[n,o]=Ie.useState({width:0,height:0}),[i,a]=Ie.useState({visible:!1,x:0,y:0,content:{title:"",words:0,description:"",category:"",partName:"",link:""}}),[r,s]=Ie.useState(-1),[l,h]=Ie.useState(!1),c=Ie.useRef(null),d=Ie.useRef([]),u=Ie.useCallback(p=>{var w,m;if(!d.current.length)return;const b=d.current.length;let g=r;switch(p.key){case"ArrowRight":case"ArrowDown":p.preventDefault(),g=r<b-1?r+1:0;break;case"ArrowLeft":case"ArrowUp":p.preventDefault(),g=r>0?r-1:b-1;break;case"Home":p.preventDefault(),g=0;break;case"End":p.preventDefault(),g=b-1;break;case"Escape":p.preventDefault(),g=-1,a(f=>({...f,visible:!1})),h(!1),e.current&&St(e.current).selectAll(".hatch-fill").remove();break;default:return}if(s(g),g>=0&&d.current[g]){const f=d.current[g],y=((w=f.parent)==null?void 0:w.data.shortName)||((m=f.parent)==null?void 0:m.data.name)||"";a({visible:!0,x:0,y:0,content:{title:f.data.name,words:f.value||0,description:f.data.description||"",category:f.data.category||"",partName:y,link:f.data.link||""}})}},[r]);return Ie.useEffect(()=>{if(!t.current)return;const p=new ResizeObserver(b=>{for(const g of b){const{width:w,height:m}=g.contentRect;o({width:w,height:m})}});return p.observe(t.current),()=>p.disconnect()},[]),Ie.useEffect(()=>{if(!e.current||n.width===0||n.height===0)return;const p=n.width,b=n.height,g={name:"Constitution of India",children:[{name:"Preamble",category:"Preamble",children:[{name:"Preamble",shortName:"Preamble",category:"Preamble",value:ns.preamble.word_count,description:"The introductory statement of the Constitution",link:nS}]},{name:"Parts",category:"Parts",children:ns.parts.map(S=>({name:S.part,shortName:`Part ${S.part_number}`,category:"Parts",children:S.articles.map(_=>({name:`Article ${_.article}: ${_.title}`,shortName:_.article,category:"Parts",value:_.word_count,description:_.title,link:iS(_.article,_.title)}))}))},{name:"Schedules",category:"Schedules",children:ns.schedules.map(S=>({name:`Schedule ${S.schedule_number}: ${S.title}`,shortName:`${S.schedule_number}`,category:"Schedules",value:S.word_count,description:S.title,link:oS[S.schedule_number]||""}))}]};St(e.current).selectAll("*").remove();const w=St(e.current).attr("width",p).attr("height",b).attr("viewBox",`0 0 ${p} ${b}`).style("background-color","transparent").on("mouseleave",()=>{h(S=>(S||(St(e.current).selectAll(".hatch-fill").remove(),a(_=>({..._,visible:!1}))),S))}),m=Z1.svg(e.current),f=w.append("g").attr("class","hatch-overlay"),y=dh(g).sum(S=>S.value||0).sort((S,_)=>(_.value||0)-(S.value||0)),v=0,P=0,C=0,k=[[v,P],[p-v,P],[p-v,b-C],[v,b-C]];j1().clip(k)(y);const U=9,L={1:6,2:4,3:1.8},B={1:0,2:2,3:1},N=(S,_,G)=>{if(G<=0||S.length<3)return S;const D=np(_);return S.map(K=>{const _e=K[0]-D[0],fe=K[1]-D[1],Ee=Math.sqrt(_e*_e+fe*fe);if(Ee===0)return K;const gi=Math.max(0,Ee-G);return[D[0]+_e/Ee*gi,D[1]+fe/Ee*gi]})},$=y.descendants().filter(S=>S.depth>=1&&S.children);w.append("g").attr("class","group-outlines").selectAll("path").data($).join("path").attr("d",S=>{let _=S.polygon,G=S.parent;for(;G&&G.depth>=1;){const D=G.polygon,K=L[G.depth]||0;D&&K>0&&(_=N(_,D,K)),G=G.parent}return _.length<3?"":du(_,U)}).attr("fill","transparent").attr("stroke","#fff").attr("stroke-width",S=>B[S.depth]||1).attr("opacity",.92);const F=S=>{let _=S.polygon;const G=[];let D=S.parent;for(;D&&D.depth>=1;)G.unshift({node:D,depth:D.depth}),D=D.parent;for(const _e of G){const fe=_e.node.polygon,Ee=L[_e.depth]||0;fe&&Ee>0&&(_=N(_,fe,Ee))}const K=L[S.depth]||0;return K>0&&_.length>=3&&(_=aS(_,K)),_};y.leaves().forEach(S=>{S.paddedPolygon=F(S)});const V=w.append("g").attr("class","cells").selectAll("path").data(y.leaves()).join("path").attr("d",S=>{const _=S.paddedPolygon;return _.length<3?"":du(_,U)}).attr("fill","transparent").attr("stroke","#fff").attr("stroke-width",S=>B[S.depth]||1).attr("opacity",0).style("pointer-events","all").style("cursor","pointer");V.transition().duration(1200).attr("opacity",.92);const de=S=>{var D;f.selectAll(".hatch-fill").remove();const _=S.paddedPolygon,G=m.polygon(_,{fill:"rgba(255, 255, 255, 0.8)",fillStyle:"hachure",hachureAngle:45,hachureGap:2,strokeWidth:.8,stroke:"rgba(255, 255, 255, 0.8)",roughness:1.5});(D=f.node())==null||D.appendChild(G),St(G).attr("class","hatch-fill").style("pointer-events","none")};V.attr("data-name",S=>S.data.name).on("mouseenter",function(S,_){const G=(B[_.depth]||1)+1;St(this).transition().duration(200).attr("opacity",1).attr("stroke-width",G),de(_),w.selectAll(".labels text").filter(D=>D.data.name===_.data.name).transition().duration(200).attr("opacity",0),h(D=>{var K,_e;if(!D){const fe=((K=_.parent)==null?void 0:K.data.shortName)||((_e=_.parent)==null?void 0:_e.data.name)||"";a({visible:!0,x:0,y:0,content:{title:_.data.name,words:_.value||0,description:_.data.description||"",category:_.data.category||"",partName:fe,link:_.data.link||""}})}return D})}).on("mouseleave",function(S,_){const G=B[_.depth]||1;St(this).transition().duration(200).attr("opacity",.92).attr("stroke-width",G),w.selectAll(".labels text").filter(D=>D.data.name===_.data.name).transition().duration(200).attr("opacity",1),h(D=>(D||a(K=>({...K,visible:!1})),D))}).on("click",function(S,_){var D,K;de(_);const G=((D=_.parent)==null?void 0:D.data.shortName)||((K=_.parent)==null?void 0:K.data.name)||"";a({visible:!0,x:0,y:0,content:{title:_.data.name,words:_.value||0,description:_.data.description||"",category:_.data.category||"",partName:G,link:_.data.link||""}}),h(!0)});const se=y.leaves();d.current=se;const A=se.map(S=>{const _=S.polygon;return Math.abs(Jr(_))}),H=d1().domain([tg(A)||0,eg(A)||1]).range([12,30]);w.append("g").attr("class","labels").selectAll("text").data(se).join("text").attr("text-anchor","middle").attr("transform",S=>`translate(${S.polygon.site.x}, ${S.polygon.site.y})`).style("pointer-events","none").attr("font-size",S=>{const _=S.polygon,G=Math.abs(Jr(_));return H(G)+"px"}).attr("font-family","Inter, sans-serif").attr("font-weight","200").attr("fill","#fff").attr("opacity",0).style("text-shadow","0 1px 3px rgba(0,0,0,0.5)").text(S=>{const _=S.polygon,G=Math.abs(Jr(_));return S.data.shortName==="Preamble"||G<2200?"":S.data.shortName||""}).transition().duration(600).attr("opacity",1),c.current=V},[n]),Ie.useEffect(()=>{if(!e.current||!c.current)return;const p=St(e.current);if(p.selectAll(".cells path").attr("stroke-width",1).classed("focused",!1),r>=0&&d.current[r]){const b=d.current[r];p.selectAll(".cells path").filter(g=>g===b).attr("stroke-width",3).classed("focused",!0)}},[r]),E.jsxs("div",{className:"day1-container",children:[E.jsx("a",{href:"#data-table",className:"skip-link",children:"Skip to data table"}),E.jsxs("div",{className:"day1-header",children:[E.jsxs("div",{className:"day1-title-block",children:[E.jsx("p",{className:"day1-label",children:"Constitution of India"}),E.jsxs("h1",{className:"day1-title",children:["The Rooms of",E.jsx("br",{}),"the Republic"]}),E.jsx("p",{className:"day1-subtitle",children:"The world's longest sovereign constitution, rendered clause by clause, with each cell scaled by word count."}),E.jsxs("div",{className:"day1-stats",children:[E.jsxs("div",{className:"day1-stat",children:[E.jsx("span",{className:"day1-stat-label",children:"Words"}),E.jsx("span",{className:"day1-stat-value",children:"146,385"})]}),E.jsxs("div",{className:"day1-stat",children:[E.jsx("span",{className:"day1-stat-label",children:"Parts"}),E.jsx("span",{className:"day1-stat-value",children:"25"})]}),E.jsxs("div",{className:"day1-stat",children:[E.jsx("span",{className:"day1-stat-label",children:"Articles"}),E.jsx("span",{className:"day1-stat-value",children:"470"})]}),E.jsxs("div",{className:"day1-stat",children:[E.jsx("span",{className:"day1-stat-label",children:"Schedules"}),E.jsx("span",{className:"day1-stat-value",children:"12"})]})]}),E.jsx("p",{className:"day1-keyboard-hint",children:"Click a cell to pin the tooltip. Press Escape to clear."})]}),E.jsx("div",{className:"day1-info-panel",role:"region","aria-label":"Selected article details","aria-live":"polite","aria-atomic":"true",children:i.visible?E.jsxs("div",{className:`day1-info-content ${l?"pinned":""}`,children:[l&&E.jsx("button",{className:"day1-info-close",onClick:()=>{h(!1),a(p=>({...p,visible:!1})),e.current&&St(e.current).selectAll(".hatch-fill").remove()},"aria-label":"Close tooltip",children:"×"}),E.jsxs("div",{className:"day1-info-category",children:[i.content.category.toUpperCase(),i.content.partName&&i.content.partName.toUpperCase()!==i.content.category.toUpperCase()&&E.jsxs(E.Fragment,{children:[" · ",i.content.partName.toUpperCase()]}),i.content.title.includes(":")&&E.jsxs(E.Fragment,{children:[" · ",i.content.title.split(":")[0].toUpperCase()]})]}),E.jsx("div",{className:"day1-info-title",children:i.content.title.includes(":")?i.content.title.split(":").slice(1).join(":").trim():i.content.title}),E.jsxs("div",{className:"day1-info-stats",children:[E.jsxs("div",{className:"day1-info-stat",children:[E.jsx("span",{className:"day1-info-stat-label",children:"Words"}),E.jsx("span",{className:"day1-info-stat-value",children:i.content.words.toLocaleString()})]}),E.jsxs("div",{className:"day1-info-stat",children:[E.jsx("span",{className:"day1-info-stat-label",children:"% of Total"}),E.jsxs("span",{className:"day1-info-stat-value",children:[(i.content.words/146385*100).toFixed(1),"%"]})]})]}),E.jsx("div",{className:"day1-info-description",children:i.content.description}),i.content.link&&E.jsx("a",{href:i.content.link,target:"_blank",rel:"noopener noreferrer",className:"day1-info-link",children:"Read Full Text →"}),E.jsxs("span",{className:"sr-only",children:[i.content.title,", ",i.content.words.toLocaleString()," words,",(i.content.words/146385*100).toFixed(1)," percent of total constitution.",i.content.description]})]}):E.jsx("div",{className:"day1-info-panel-empty",children:"Hover a cell →"})})]}),E.jsxs("div",{className:"day1-chart-container",ref:t,tabIndex:0,role:"application","aria-label":"Interactive treemap of the Constitution of India. Use arrow keys to navigate between articles.","aria-describedby":"chart-description",onKeyDown:u,children:[E.jsx("span",{id:"chart-description",className:"sr-only",children:"Voronoi treemap visualization showing all 470 articles of the Indian Constitution. Each cell represents an article, sized by word count. Navigate with arrow keys, press Escape to clear selection."}),E.jsx("svg",{ref:e,role:"img","aria-label":"Constitution of India treemap showing 470 articles across 25 parts and 12 schedules, with cell sizes representing word count"})]})]})};function sS(){return E.jsx("div",{style:{height:"100%",width:"100%"},children:E.jsx(rS,{})})}_f(document.getElementById("root")).render(E.jsx(Ie.StrictMode,{children:E.jsx(sS,{})}));
