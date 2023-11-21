import{r as c,R as v}from"./react-e928f451.js";import{R as T,u as b,a as F}from"./react-router-0a5ed7d1.js";import{c as P}from"./@remix-run-42b1b5a4.js";/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function h(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,t)=>{let s=e[t];return a.concat(Array.isArray(s)?s.map(r=>[t,r]):[[t,s]])},[]))}function U(e,a){let t=h(e);return a&&a.forEach((s,r)=>{t.has(r)||a.getAll(r).forEach(n=>{t.append(r,n)})}),t}const y="startTransition",S=v[y];function w(e){let{basename:a,children:t,future:s,window:r}=e,n=c.useRef();n.current==null&&(n.current=P({window:r,v5Compat:!0}));let o=n.current,[u,i]=c.useState({action:o.action,location:o.location}),{v7_startTransition:l}=s||{},f=c.useCallback(m=>{l&&S?S(()=>i(m)):i(m)},[i,l]);return c.useLayoutEffect(()=>o.listen(f),[o,f]),c.createElement(T,{basename:a,children:t,location:u.location,navigationType:u.action,navigator:o})}var R;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(R||(R={}));var p;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(p||(p={}));function E(e){let a=c.useRef(h(e)),t=c.useRef(!1),s=b(),r=c.useMemo(()=>U(s.search,t.current?null:a.current),[s.search]),n=F(),o=c.useCallback((u,i)=>{const l=h(typeof u=="function"?u(r):u);t.current=!0,n("?"+l,i)},[n,r]);return[r,o]}export{w as H,E as u};
