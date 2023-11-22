var R=Object.defineProperty,U=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var C=(t,e,n)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))B.call(e,n)&&C(t,n,e[n]);if(b)for(var n of b(e))L.call(e,n)&&C(t,n,e[n]);return t},A=(t,e)=>U(t,F(e));var I=(t,e)=>{var n={};for(var r in t)B.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&b)for(var r of b(t))e.indexOf(r)<0&&L.call(t,r)&&(n[r]=t[r]);return n};import{s as k}from"./@ungap-d56ab8cf.js";import{n as N}from"./micromark-util-sanitize-uri-0f35eecd.js";import{p as T,a as H,b as M}from"./unist-util-position-bb1bbaf7.js";import{t as q}from"./trim-lines-00010efb.js";import{v as j}from"./unist-util-visit-69cf1090.js";function z(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function E(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function V(t,e){const n=e.value?e.value+`
`:"",r={};e.lang&&(r.className=["language-"+e.lang]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return e.meta&&(l.data={meta:e.meta}),t.patch(e,l),l=t.applyData(e,l),l={type:"element",tagName:"pre",properties:{},children:[l]},t.patch(e,l),l}function _(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function $(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function G(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),l=N(r.toLowerCase()),o=t.footnoteOrder.indexOf(r);let a,p=t.footnoteCounts.get(r);p===void 0?(p=0,t.footnoteOrder.push(r),a=t.footnoteOrder.length):a=o+1,p+=1,t.footnoteCounts.set(r,p);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+l,id:n+"fnref-"+l+(p>1?"-"+p:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};t.patch(e,u);const y={type:"element",tagName:"sup",properties:{},children:[u]};return t.patch(e,y),t.applyData(e,y)}function J(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function K(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function S(t,e){const n=e.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const l=t.all(e),o=l[0];o&&o.type==="text"?o.value="["+o.value:l.unshift({type:"text",value:"["});const a=l[l.length-1];return a&&a.type==="text"?a.value+=r:l.push({type:"text",value:r}),l}function Q(t,e){const n=String(e.identifier).toUpperCase(),r=t.definitionById.get(n);if(!r)return S(t,e);const l={src:N(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(l.title=r.title);const o={type:"element",tagName:"img",properties:l,children:[]};return t.patch(e,o),t.applyData(e,o)}function W(t,e){const n={src:N(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,r),t.applyData(e,r)}function X(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,r),t.applyData(e,r)}function Y(t,e){const n=String(e.identifier).toUpperCase(),r=t.definitionById.get(n);if(!r)return S(t,e);const l={href:N(r.url||"")};r.title!==null&&r.title!==void 0&&(l.title=r.title);const o={type:"element",tagName:"a",properties:l,children:t.all(e)};return t.patch(e,o),t.applyData(e,o)}function Z(t,e){const n={href:N(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}function ee(t,e,n){const r=t.all(e),l=n?te(n):O(e),o={},a=[];if(typeof e.checked=="boolean"){const i=r[0];let c;i&&i.type==="element"&&i.tagName==="p"?c=i:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let p=-1;for(;++p<r.length;){const i=r[p];(l||p!==0||i.type!=="element"||i.tagName!=="p")&&a.push({type:"text",value:`
`}),i.type==="element"&&i.tagName==="p"&&!l?a.push(...i.children):a.push(i)}const u=r[r.length-1];u&&(l||u.type!=="element"||u.tagName!=="p")&&a.push({type:"text",value:`
`});const y={type:"element",tagName:"li",properties:o,children:a};return t.patch(e,y),t.applyData(e,y)}function te(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let r=-1;for(;!e&&++r<n.length;)e=O(n[r])}return e}function O(t){const e=t.spread;return e==null?t.children.length>1:e}function ne(t,e){const n={},r=t.all(e);let l=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++l<r.length;){const a=r[l];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(r,!0)};return t.patch(e,o),t.applyData(e,o)}function re(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function le(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function ie(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function ae(t,e){const n=t.all(e),r=n.shift(),l=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:t.wrap([r],!0)};t.patch(e.children[0],a),l.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},p=T(e.children[1]),u=H(e.children[e.children.length-1]);p&&u&&(a.position={start:p,end:u}),l.push(a)}const o={type:"element",tagName:"table",properties:{},children:t.wrap(l,!0)};return t.patch(e,o),t.applyData(e,o)}function oe(t,e,n){const r=n?n.children:void 0,o=(r?r.indexOf(e):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,p=a?a.length:e.children.length;let u=-1;const y=[];for(;++u<p;){const c=e.children[u],h={},f=a?a[u]:void 0;f&&(h.align=f);let s={type:"element",tagName:o,properties:h,children:[]};c&&(s.children=t.all(c),t.patch(c,s),s=t.applyData(c,s)),y.push(s)}const i={type:"element",tagName:"tr",properties:{},children:t.wrap(y,!0)};return t.patch(e,i),t.applyData(e,i)}function pe(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function ce(t,e){const n={type:"text",value:q(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function se(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const ue={blockquote:z,break:E,code:V,delete:_,emphasis:$,footnoteReference:G,heading:J,html:K,imageReference:Q,image:W,inlineCode:X,linkReference:Y,link:Z,listItem:ee,list:ne,paragraph:re,root:le,strong:ie,table:ae,tableCell:pe,tableRow:oe,text:ce,thematicBreak:se,toml:w,yaml:w,definition:w,footnoteDefinition:w};function w(){}function he(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function fe(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function ye(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||he,r=t.options.footnoteBackLabel||fe,l=t.options.footnoteLabel||"Footnotes",o=t.options.footnoteLabelTagName||"h2",a=t.options.footnoteLabelProperties||{className:["sr-only"]},p=[];let u=-1;for(;++u<t.footnoteOrder.length;){const y=t.footnoteById.get(t.footnoteOrder[u]);if(!y)continue;const i=t.all(y),c=String(y.identifier).toUpperCase(),h=N(c.toLowerCase());let f=0;const s=[],d=t.footnoteCounts.get(c);for(;d!==void 0&&++f<=d;){s.length>0&&s.push({type:"text",value:" "});let m=typeof n=="string"?n:n(u,f);typeof m=="string"&&(m={type:"text",value:m}),s.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+h+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,f),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const g=i[i.length-1];if(g&&g.type==="element"&&g.tagName==="p"){const m=g.children[g.children.length-1];m&&m.type==="text"?m.value+=" ":g.children.push({type:"text",value:" "}),g.children.push(...s)}else i.push(...s);const x={type:"element",tagName:"li",properties:{id:e+"fn-"+h},children:t.wrap(i,!0)};t.patch(y,x),p.push(x)}if(p.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:A(v({},k(a)),{id:"footnote-label"}),children:[{type:"text",value:l}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(p,!0)},{type:"text",value:`
`}]}}const D={}.hasOwnProperty,me={};function de(t,e){const n=e||me,r=new Map,l=new Map,o=new Map,a=v(v({},ue),n.handlers),p={all:y,applyData:Ne,definitionById:r,footnoteById:l,footnoteCounts:o,footnoteOrder:[],handlers:a,one:u,options:n,patch:ge,wrap:be};return j(t,function(i){if(i.type==="definition"||i.type==="footnoteDefinition"){const c=i.type==="definition"?r:l,h=String(i.identifier).toUpperCase();c.has(h)||c.set(h,i)}}),p;function u(i,c){const h=i.type,f=p.handlers[h];if(D.call(p.handlers,h)&&f)return f(p,i,c);if(p.options.passThrough&&p.options.passThrough.includes(h)){if("children"in i){const d=i,{children:g}=d,x=I(d,["children"]),m=k(x);return m.children=p.all(i),m}return k(i)}return(p.options.unknownHandler||xe)(p,i,c)}function y(i){const c=[];if("children"in i){const h=i.children;let f=-1;for(;++f<h.length;){const s=p.one(h[f],i);if(s){if(f&&h[f-1].type==="break"&&(!Array.isArray(s)&&s.type==="text"&&(s.value=P(s.value)),!Array.isArray(s)&&s.type==="element")){const d=s.children[0];d&&d.type==="text"&&(d.value=P(d.value))}Array.isArray(s)?c.push(...s):c.push(s)}}}return c}}function ge(t,e){t.position&&(e.position=M(t))}function Ne(t,e){let n=e;if(t&&t.data){const r=t.data.hName,l=t.data.hChildren,o=t.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,k(o)),"children"in n&&n.children&&l!==null&&l!==void 0&&(n.children=l)}return n}function xe(t,e){const n=e.data||{},r="value"in e&&!(D.call(n,"hProperties")||D.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}function be(t,e){const n=[];let r=-1;for(e&&n.push({type:"text",value:`
`});++r<t.length;)r&&n.push({type:"text",value:`
`}),n.push(t[r]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function P(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function Le(t,e){const n=de(t,e),r=n.one(t,void 0),l=ye(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return l&&o.children.push({type:"text",value:`
`},l),o}export{Le as t};