var S=Object.defineProperty;var h=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(e,o,s)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,d=(e,o)=>{for(var s in o||(o={}))D.call(o,s)&&y(e,s,o[s]);if(h)for(var s of h(o))I.call(o,s)&&y(e,s,o[s]);return e};import{u as U}from"./devlop-bf234217.js";import{j as f}from"./react-e928f451.js";import{u as F}from"./unified-e1d13cf7.js";import{r as M}from"./remark-parse-12475208.js";import{r as V}from"./remark-rehype-a61a3ac0.js";import{V as q}from"./vfile-80b5a5e0.js";import{v as A}from"./unist-util-visit-69cf1090.js";import{t as J}from"./hast-util-to-jsx-runtime-1643a316.js";import{u}from"./html-url-attributes-cc94b481.js";const K="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",k=[],b={allowDangerousHtml:!0},L=/^(https?|ircs?|mailto|xmpp)$/i,$=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function re(e){const o=e.allowedElements,s=e.allowElement,a=e.children||"",i=e.className,O=e.components,p=e.disallowedElements,v=e.rehypePlugins||k,x=e.remarkPlugins||k,E=e.remarkRehypeOptions?d(d({},e.remarkRehypeOptions),b):b,P=e.skipHtml,j=e.unwrapDisallowed,T=e.urlTransform||z,g=F().use(M).use(x).use(V,E).use(v),c=new q;typeof a=="string"&&(c.value=a);for(const r of $)Object.hasOwn(e,r.from)&&U("Unexpected `"+r.from+"` prop, "+(r.to?"use `"+r.to+"` instead":"remove it")+" (see <"+K+"#"+r.id+"> for more info)");const N=g.parse(c);let m=g.runSync(N,c);return i&&(m={type:"element",tagName:"div",properties:{className:i},children:m.type==="root"?m.children:[m]}),A(m,R),J(m,{Fragment:f.Fragment,components:O,ignoreInvalidStyle:!0,jsx:f.jsx,jsxs:f.jsxs,passKeys:!0,passNode:!0});function R(r,l,n){if(r.type==="raw"&&n&&typeof l=="number")return P?n.children.splice(l,1):n.children[l]={type:"text",value:r.value},l;if(r.type==="element"){let t;for(t in u)if(Object.hasOwn(u,t)&&Object.hasOwn(r.properties,t)){const H=r.properties[t],w=u[t];(w===null||w.includes(r.tagName))&&(r.properties[t]=T(String(H||""),t,r))}}if(r.type==="element"){let t=o?!o.includes(r.tagName):p?p.includes(r.tagName):!1;if(!t&&s&&typeof l=="number"&&(t=!s(r,l,n)),t&&n&&typeof l=="number")return j&&r.children?n.children.splice(l,1,...r.children):n.children.splice(l,1),l}}}function z(e){const o=e.indexOf(":"),s=e.indexOf("?"),a=e.indexOf("#"),i=e.indexOf("/");return o<0||i>-1&&o>i||s>-1&&o>s||a>-1&&o>a||L.test(e.slice(0,o))?e:""}export{re as M};