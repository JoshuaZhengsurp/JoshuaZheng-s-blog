import{r as U}from"./react-dom-964dd389.js";import"./hoist-non-react-statics-3f8ebaa8.js";import{r as u}from"./react-e928f451.js";import"./react-is-e5978b8b.js";import{w as D}from"./use-sync-external-store-c496049e.js";function L(e){e()}let E=L;const M=e=>E=e,H=()=>E,m=Symbol.for("react-redux-context"),v=typeof globalThis!="undefined"?globalThis:{};function T(){var e;if(!u.createContext)return{};const n=(e=v[m])!=null?e:v[m]=new Map;let r=n.get(u.createContext);return r||(r=u.createContext(null),n.set(u.createContext,r)),r}const a=T();function h(e=a){return function(){return u.useContext(e)}}const k=h(),V=()=>{throw new Error("uSES not initialized!")};let N=V;const $=e=>{N=e},z=(e,n)=>e===n;function B(e=a){const n=e===a?k:h(e);return function(t,s={}){const{equalityFn:o=z,stabilityCheck:i=void 0,noopCheck:d=void 0}=typeof s=="function"?{equalityFn:s}:s,{store:l,subscription:c,getServerState:b,stabilityCheck:S,noopCheck:y}=n();u.useRef(!0);const p=u.useCallback({[t.name](x){return t(x)}}[t.name],[t,S,i]),f=N(c.addNestedSub,l.getState,b||l.getState,p,o);return u.useDebugValue(f),f}}const Q=B();function P(){const e=H();let n=null,r=null;return{clear(){n=null,r=null},notify(){e(()=>{let t=n;for(;t;)t.callback(),t=t.next})},get(){let t=[],s=n;for(;s;)t.push(s),s=s.next;return t},subscribe(t){let s=!0,o=r={callback:t,next:null,prev:r};return o.prev?o.prev.next=o:n=o,function(){!s||n===null||(s=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}const w={notify(){},get:()=>[]};function W(e,n){let r,t=w,s=0,o=!1;function i(x){b();const C=t.subscribe(x);let g=!1;return()=>{g||(g=!0,C(),S())}}function d(){t.notify()}function l(){f.onStateChange&&f.onStateChange()}function c(){return o}function b(){s++,r||(r=n?n.addNestedSub(l):e.subscribe(l),t=P())}function S(){s--,r&&s===0&&(r(),r=void 0,t.clear(),t=w)}function y(){o||(o=!0,b())}function p(){o&&(o=!1,S())}const f={addNestedSub:i,notifyNestedSubs:d,handleChangeWrapper:l,isSubscribed:c,trySubscribe:y,tryUnsubscribe:p,getListeners:()=>t};return f}const I=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",K=I?u.useLayoutEffect:u.useEffect;function X({store:e,context:n,children:r,serverState:t,stabilityCheck:s="once",noopCheck:o="once"}){const i=u.useMemo(()=>{const c=W(e);return{store:e,subscription:c,getServerState:t?()=>t:void 0,stabilityCheck:s,noopCheck:o}},[e,t,s,o]),d=u.useMemo(()=>e.getState(),[e]);K(()=>{const{subscription:c}=i;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),d!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[i,d]);const l=n||a;return u.createElement(l.Provider,{value:i},r)}function R(e=a){const n=e===a?k:h(e);return function(){const{store:t}=n();return t}}const _=R();function q(e=a){const n=e===a?_:R(e);return function(){return n().dispatch}}const Y=q();$(D.useSyncExternalStoreWithSelector);M(U.unstable_batchedUpdates);export{X as P,Y as a,Q as u};
