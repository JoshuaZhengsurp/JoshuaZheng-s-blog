var k=Object.defineProperty,C=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var j=(t,e,o)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,l=(t,e)=>{for(var o in e||(e={}))f.call(e,o)&&j(t,o,e[o]);if(c)for(var o of c(e))S.call(e,o)&&j(t,o,e[o]);return t},b=(t,e)=>C(t,N(e));var w=(t,e)=>{var o={};for(var r in t)f.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&c)for(var r of c(t))e.indexOf(r)<0&&S.call(t,r)&&(o[r]=t[r]);return o};import{r as p,j as m}from"./react-e928f451.js";import{a as M}from"./axios-58d265d6.js";import{M as E}from"./react-markdown-77106ab8.js";import{c as D,d as T,I}from"./antd-edb12fc6.js";import{S as L,x as P}from"./react-syntax-highlighter-9a881ac9.js";import"./@babel-5ecd552a.js";import"./devlop-bf234217.js";import"./unified-e1d13cf7.js";import"./bail-0fe607cf.js";import"./extend-c466a15e.js";import"./is-plain-obj-4f87c5a3.js";import"./trough-77adad87.js";import"./vfile-80b5a5e0.js";import"./vfile-message-a7754db5.js";import"./unist-util-stringify-position-7b16d8bf.js";import"./remark-parse-12475208.js";import"./mdast-util-from-markdown-524bf63d.js";import"./micromark-util-decode-numeric-character-reference-e471f84f.js";import"./micromark-util-decode-string-c1ef5903.js";import"./decode-named-character-reference-29ded5ae.js";import"./micromark-util-normalize-identifier-dfdf0387.js";import"./micromark-6aafee49.js";import"./micromark-util-combine-extensions-34ef5cdc.js";import"./micromark-util-chunked-6f054bfc.js";import"./micromark-factory-space-7c69a47f.js";import"./micromark-util-character-b13c1ebf.js";import"./micromark-core-commonmark-7227f472.js";import"./micromark-util-classify-character-8bfe3112.js";import"./micromark-util-resolve-all-8a85a8df.js";import"./micromark-util-subtokenize-d9357da7.js";import"./micromark-factory-destination-8c1ab20d.js";import"./micromark-factory-label-9d51794b.js";import"./micromark-factory-title-a0fb8f99.js";import"./micromark-factory-whitespace-b9177f0f.js";import"./micromark-util-html-tag-name-eaa6d7c0.js";import"./mdast-util-to-string-bfd41500.js";import"./remark-rehype-a61a3ac0.js";import"./mdast-util-to-hast-41271c75.js";import"./@ungap-d56ab8cf.js";import"./micromark-util-sanitize-uri-0f35eecd.js";import"./unist-util-position-bb1bbaf7.js";import"./trim-lines-00010efb.js";import"./unist-util-visit-69cf1090.js";import"./unist-util-visit-parents-7c0a8d5b.js";import"./unist-util-is-7e122464.js";import"./hast-util-to-jsx-runtime-1643a316.js";import"./comma-separated-tokens-9ede81e8.js";import"./property-information-6ae95972.js";import"./space-separated-tokens-748f5767.js";import"./style-to-object-5fccd028.js";import"./inline-style-parser-e2a37bce.js";import"./hast-util-whitespace-675c549c.js";import"./html-url-attributes-cc94b481.js";import"./rc-util-4d7ee22f.js";import"./react-is-e5978b8b.js";import"./react-dom-964dd389.js";import"./scheduler-052770cf.js";import"./@ant-design-d3804d39.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";import"./classnames-9c02366a.js";import"./resize-observer-polyfill-b51b3958.js";import"./@ctrl-03fa0c70.js";import"./rc-resize-observer-5ae9b312.js";import"./rc-motion-19ec1687.js";import"./rc-tooltip-49e836bc.js";import"./@rc-component-a5574673.js";import"./rc-menu-ff5f7e1f.js";import"./rc-overflow-82c0e3e3.js";import"./rc-tabs-e2caeb24.js";import"./rc-dropdown-2e5cf4d5.js";import"./rc-select-cc8ec0f3.js";import"./rc-virtual-list-8b4988e1.js";import"./rc-input-a6089296.js";import"./rc-textarea-d72cf32f.js";import"./rc-field-form-9fdc82dc.js";import"./async-validator-774c2804.js";import"./rc-dialog-07bd4cbe.js";import"./rc-pagination-749cce65.js";import"./throttle-debounce-87e7e444.js";import"./rc-notification-97a32b98.js";import"./rc-slider-feeb3226.js";import"./rc-picker-07511ab1.js";import"./refractor-8f7d0ae4.js";import"./hastscript-6ca0c2af.js";import"./xtend-2b056f5a.js";import"./hast-util-parse-selector-27b18edd.js";import"./parse-entities-cad81707.js";import"./character-entities-legacy-47250ac4.js";import"./character-reference-invalid-465f121e.js";import"./is-decimal-ed65f812.js";import"./is-hexadecimal-c2d19e00.js";import"./is-alphanumerical-02ed39b7.js";import"./is-alphabetical-6a186f20.js";const R={code(h){var a=h,{node:t,inline:e,className:o,children:r}=a,s=w(a,["node","inline","className","children"]);const n=/language-(\w+)/.exec(o||"");return!e&&n?m.jsx(L,l({children:String(r).replace(/\n$/,""),style:P,language:n[1],PreTag:"div"},s)):m.jsx("code",b(l({className:o},s),{children:r}))}},vo=()=>{const[t,e]=p.useState([{id:Math.random(),text:"hello world",timestamp:new Date().getTime(),sender:"robot"}]),[o,r]=p.useState(""),[s,h]=p.useState(""),[a,n]=p.useState([]),[u,v]=p.useState("gpt-3.5-turbo"),x=()=>{if(o.trim()!==""){const i={id:Math.random(),text:o,timestamp:new Date().getTime(),sender:"me"};M.get("https://kmapi-6bd1.onrender.com/chat",{params:{kw:o,model:u}}).then(d=>{h(d.data.choices[0].message.content)}),e([...t,i]),r("")}};p.useEffect(()=>{if(s){const i={id:Math.random(),text:s,timestamp:new Date().getTime(),sender:"robot"};e([...t,i])}},[s]),p.useEffect(()=>{M.get("https://kmapi-6bd1.onrender.com/models").then(({data:i})=>{const d=i.data.map(g=>({value:g.id,label:g.id}));n(d)})},[]);const y=()=>{x()};return m.jsxs("div",{className:"chat-app",children:[m.jsx("div",{className:"messages",children:t.map(i=>m.jsxs("div",{className:`message ${i.sender==="me"?"my-message":"other-message"}`,children:[i.sender==="robot"&&m.jsxs("div",{className:"flex items-center",children:[m.jsx("img",{src:"1.png",className:"mr-5",alt:""}),m.jsx("p",{children:"robot"})]}),m.jsxs("div",{className:"message-bubble",children:[m.jsx(E,{children:i.text,components:R}),m.jsx("div",{className:"timestamp",children:new Date(i.timestamp).toLocaleString()})]})]},i.id))}),m.jsxs(D.Compact,{children:[m.jsx(T,{value:u,onSelect:i=>v(i),options:a,style:{width:"200px",height:"auto"}}),m.jsx(I,{value:o,onChange:i=>r(i.target.value),placeholder:"在这里输入消息...",style:{width:"100%"},onPressEnter:y}),m.jsx("button",{onClick:x,children:"发送"})]})]})};export{vo as default};
