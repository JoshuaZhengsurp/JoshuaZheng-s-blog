import{r as s,j as t}from"./react-e928f451.js";import{u as f}from"./react-router-dom-801af91f.js";import{h as y}from"./index-5bbe5b3f.js";import{R as v}from"./react-player-5748c27b.js";import{R as N,a as p,B as a,f as P}from"./antd-edb12fc6.js";import{o as g,H as S,F as k,M as O,U as b}from"./@ant-design-d3804d39.js";import"./@babel-5ecd552a.js";import"./react-router-0a5ed7d1.js";import"./@remix-run-42b1b5a4.js";import"./react-dom-964dd389.js";import"./scheduler-052770cf.js";import"./react-syntax-highlighter-9a881ac9.js";import"./refractor-8f7d0ae4.js";import"./hastscript-6ca0c2af.js";import"./xtend-2b056f5a.js";import"./hast-util-parse-selector-27b18edd.js";import"./parse-entities-cad81707.js";import"./character-entities-legacy-47250ac4.js";import"./character-reference-invalid-465f121e.js";import"./is-decimal-ed65f812.js";import"./is-hexadecimal-c2d19e00.js";import"./is-alphanumerical-02ed39b7.js";import"./is-alphabetical-6a186f20.js";import"./react-feather-51ae0066.js";import"./prop-types-3c0fe216.js";import"./react-redux-e07b158c.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./react-is-e5978b8b.js";import"./use-sync-external-store-c496049e.js";import"./@reduxjs-38ac89bd.js";import"./immer-71561b24.js";import"./redux-ff3a5f57.js";import"./redux-thunk-ef899f4c.js";import"./axios-58d265d6.js";import"./redux-persist-45ccd600.js";import"./rc-util-4d7ee22f.js";import"./classnames-9c02366a.js";import"./rc-resize-observer-5ae9b312.js";import"./resize-observer-polyfill-b51b3958.js";import"./rc-motion-19ec1687.js";import"./rc-tooltip-49e836bc.js";import"./@rc-component-a5574673.js";import"./rc-menu-ff5f7e1f.js";import"./rc-overflow-82c0e3e3.js";import"./rc-tabs-e2caeb24.js";import"./rc-dropdown-2e5cf4d5.js";import"./rc-select-cc8ec0f3.js";import"./rc-virtual-list-8b4988e1.js";import"./rc-input-a6089296.js";import"./rc-textarea-d72cf32f.js";import"./rc-field-form-9fdc82dc.js";import"./async-validator-774c2804.js";import"./rc-dialog-07bd4cbe.js";import"./rc-pagination-749cce65.js";import"./@ctrl-03fa0c70.js";import"./throttle-debounce-87e7e444.js";import"./rc-notification-97a32b98.js";import"./rc-slider-feeb3226.js";import"./rc-picker-07511ab1.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";import"./load-script-d550e3b0.js";import"./deepmerge-728e666b.js";import"./memoize-one-608279f8.js";import"./react-fast-compare-82a97d22.js";function qt(){const[l]=f(),c=l.get("id"),[e,n]=s.useState(!1),[d,h]=s.useState(""),[r,j]=s.useState({}),[o,x]=s.useState([]);s.useEffect(()=>{y("/video/chapter",{id:c}).then(({data:i})=>{j(i),x(i.chapterList)})},[]);function m(i){h(i),n(!0)}return t.jsx(t.Fragment,{children:Object.keys(r).length>0?t.jsxs("div",{className:"wrap",children:[!e&&t.jsxs(N,{children:[t.jsx(p,{span:6,children:t.jsxs("div",{className:"cover",children:[t.jsx("img",{src:r.cover,alt:""}),t.jsx("div",{className:"mt-10",children:t.jsx(a,{type:"primary",block:!0,onClick:()=>m(o[0].chapterPath),children:"Play"})})]})}),t.jsx(p,{span:18,children:t.jsxs("div",{className:"details ml-10",children:[t.jsxs("h2",{children:[t.jsx(g,{})," ",r.title,"back"]}),t.jsxs("p",{className:"des",children:[t.jsx(S,{})," ",r.region]}),t.jsxs("p",{className:"des",children:[t.jsx(k,{})," ",r.releaseTime]}),t.jsxs("p",{className:"des",children:[t.jsx(O,{})," ",r.descs]}),t.jsxs("p",{children:[t.jsx(b,{})," ",r.director]})]})})]}),e&&t.jsx(v,{width:"100%",height:500,url:d,playing:!0,controls:!0}),t.jsx("div",{className:"flex mt-20 chapterList",children:o.map((i,u)=>t.jsx("div",{className:"chapter-items",onClick:()=>m(i.chapterPath),children:t.jsx(a,{type:"primary",children:i.title})},u))})]}):t.jsx(P,{})})}export{qt as default};
