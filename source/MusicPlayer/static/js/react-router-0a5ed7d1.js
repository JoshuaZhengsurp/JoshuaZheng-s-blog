import{r as n}from"./react-e928f451.js";import{i as v,g as B,r as I,j as y,A as L,p as O,s as F,m as T,a as w}from"./@remix-run-42b1b5a4.js";/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},E.apply(this,arguments)}const N=n.createContext(null),_=n.createContext(null),P=n.createContext(null),b=n.createContext(null),C=n.createContext({outlet:null,matches:[],isDataRoute:!1}),M=n.createContext(null);function x(){return n.useContext(b)!=null}function U(){return x()||v(!1),n.useContext(b).location}function j(t){n.useContext(P).static||n.useLayoutEffect(t)}function k(){let{isDataRoute:t}=n.useContext(C);return t?Z():A()}function A(){x()||v(!1);let t=n.useContext(N),{basename:e,navigator:r}=n.useContext(P),{matches:o}=n.useContext(C),{pathname:l}=U(),a=JSON.stringify(B(o).map(i=>i.pathnameBase)),c=n.useRef(!1);return j(()=>{c.current=!0}),n.useCallback(function(i,u){if(u===void 0&&(u={}),!c.current)return;if(typeof i=="number"){r.go(i);return}let d=I(i,JSON.parse(a),l,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:y([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,a,l,t])}function ee(t,e){return W(t,e)}function W(t,e,r){x()||v(!1);let{navigator:o}=n.useContext(P),{matches:l}=n.useContext(C),a=l[l.length-1],c=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let i=U(),u;if(e){var d;let f=typeof e=="string"?O(e):e;s==="/"||(d=f.pathname)!=null&&d.startsWith(s)||v(!1),u=f}else u=i;let h=u.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",p=T(t,{pathname:g}),m=Q(p&&p.map(f=>Object.assign({},f,{params:Object.assign({},c,f.params),pathname:y([s,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?s:y([s,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,r);return e&&m?n.createElement(b.Provider,{value:{location:E({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:L.Pop}},m):m}function q(){let t=Y(),e=w(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},e),r?n.createElement("pre",{style:l},r):null,a)}const z=n.createElement(q,null);class G extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?n.createElement(C.Provider,{value:this.props.routeContext},n.createElement(M.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K(t){let{routeContext:e,match:r,children:o}=t,l=n.useContext(N);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(C.Provider,{value:e},o)}function Q(t,e,r){var o;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var l;if((l=r)!=null&&l.errors)t=r.matches;else return null}let a=t,c=(o=r)==null?void 0:o.errors;if(c!=null){let s=a.findIndex(i=>i.route.id&&(c==null?void 0:c[i.route.id]));s>=0||v(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,i,u)=>{let d=i.route.id?c==null?void 0:c[i.route.id]:null,h=null;r&&(h=i.route.errorElement||z);let g=e.concat(a.slice(0,u+1)),p=()=>{let m;return d?m=h:i.route.Component?m=n.createElement(i.route.Component,null):i.route.element?m=i.route.element:m=s,n.createElement(K,{match:i,routeContext:{outlet:s,matches:g,isDataRoute:r!=null},children:m})};return r&&(i.route.ErrorBoundary||i.route.errorElement||u===0)?n.createElement(G,{location:r.location,revalidation:r.revalidation,component:h,error:d,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var D=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D||{}),R=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(R||{});function S(t){let e=n.useContext(N);return e||v(!1),e}function V(t){let e=n.useContext(_);return e||v(!1),e}function X(t){let e=n.useContext(C);return e||v(!1),e}function J(t){let e=X(),r=e.matches[e.matches.length-1];return r.route.id||v(!1),r.route.id}function Y(){var t;let e=n.useContext(M),r=V(R.UseRouteError),o=J(R.UseRouteError);return e||((t=r.errors)==null?void 0:t[o])}function Z(){let{router:t}=S(D.UseNavigateStable),e=J(R.UseNavigateStable),r=n.useRef(!1);return j(()=>{r.current=!0}),n.useCallback(function(l,a){a===void 0&&(a={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,E({fromRouteId:e},a)))},[t,e])}function te(t){let{to:e,replace:r,state:o,relative:l}=t;x()||v(!1);let{matches:a}=n.useContext(C),{pathname:c}=U(),s=k(),i=I(e,B(a).map(d=>d.pathnameBase),c,l==="path"),u=JSON.stringify(i);return n.useEffect(()=>s(JSON.parse(u),{replace:r,state:o,relative:l}),[s,u,l,r,o]),null}function re(t){let{basename:e="/",children:r=null,location:o,navigationType:l=L.Pop,navigator:a,static:c=!1}=t;x()&&v(!1);let s=e.replace(/^\/*/,"/"),i=n.useMemo(()=>({basename:s,navigator:a,static:c}),[s,a,c]);typeof o=="string"&&(o=O(o));let{pathname:u="/",search:d="",hash:h="",state:g=null,key:p="default"}=o,m=n.useMemo(()=>{let f=F(u,s);return f==null?null:{location:{pathname:f,search:d,hash:h,state:g,key:p},navigationType:l}},[s,u,d,h,g,p,l]);return m==null?null:n.createElement(P.Provider,{value:i},n.createElement(b.Provider,{children:r,value:m}))}new Promise(()=>{});export{te as N,re as R,k as a,ee as b,U as u};
