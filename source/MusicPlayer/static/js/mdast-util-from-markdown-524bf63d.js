import{d as Fe}from"./micromark-util-decode-numeric-character-reference-e471f84f.js";import{d as Be}from"./micromark-util-decode-string-c1ef5903.js";import{n as T}from"./micromark-util-normalize-identifier-dfdf0387.js";import{d as Re}from"./decode-named-character-reference-29ded5ae.js";import{p as Ce,a as He,b as Le}from"./micromark-6aafee49.js";import{s as I}from"./unist-util-stringify-position-7b16d8bf.js";import{t as ze}from"./mdast-util-to-string-bfd41500.js";const M={}.hasOwnProperty;function _e(o,s,l){return typeof s!="string"&&(l=s,s=void 0),Pe(l)(Ce(He(l).document().write(Le()(o,s,!0))))}function Pe(o){const s={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(P),autolinkProtocol:p,autolinkEmail:p,atxHeading:r(H),blockQuote:r(ke),characterEscape:p,characterReference:p,codeFenced:r(C),codeFencedFenceInfo:h,codeFencedFenceMeta:h,codeIndented:r(C,h),codeText:r(me,h),codeTextData:p,data:p,codeFlowValue:p,definition:r(xe),definitionDestinationString:h,definitionLabelString:h,definitionTitleString:h,emphasis:r(ye),hardBreakEscape:r(L),hardBreakTrailing:r(L),htmlFlow:r(z,h),htmlFlowData:p,htmlText:r(z,h),htmlTextData:p,image:r(be),label:h,link:r(P),listItem:r(Se),listItemValue:U,listOrdered:r(O,N),listUnordered:r(O),paragraph:r(we),reference:he,referenceString:h,resourceDestinationString:h,resourceTitleString:h,setextHeading:r(H),strong:r(Ie),thematicBreak:r(Ee)},exit:{atxHeading:c(),atxHeadingSequence:X,autolink:c(),autolinkEmail:ge,autolinkProtocol:pe,blockQuote:c(),characterEscapeValue:g,characterReferenceMarkerHexadecimal:R,characterReferenceMarkerNumeric:R,characterReferenceValue:fe,codeFenced:c(W),codeFencedFence:A,codeFencedFenceInfo:_,codeFencedFenceMeta:j,codeFlowValue:g,codeIndented:c($),codeText:c(ie),codeTextData:g,data:g,definition:c(),definitionDestinationString:K,definitionLabelString:G,definitionTitleString:J,emphasis:c(),hardBreakEscape:c(B),hardBreakTrailing:c(B),htmlFlow:c(te),htmlFlowData:g,htmlText:c(ne),htmlTextData:g,image:c(se),label:ce,labelText:re,lineEnding:ee,link:c(ae),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ue,resourceDestinationString:oe,resourceTitleString:le,resource:de,setextHeading:c(v),setextHeadingLineSequence:Z,setextHeadingText:Y,strong:c(),thematicBreak:c()}};V(s,(o||{}).mdastExtensions||[]);const l={};return d;function d(e){let t={type:"root",children:[]};const n={stack:[t],tokenStack:[],config:s,enter:E,exit:F,buffer:h,resume:q,data:l},i=[];let a=-1;for(;++a<e.length;)if(e[a][1].type==="listOrdered"||e[a][1].type==="listUnordered")if(e[a][0]==="enter")i.push(a);else{const f=i.pop();a=Q(e,f,a)}for(a=-1;++a<e.length;){const f=s[e[a][0]];M.call(f,e[a][1].type)&&f[e[a][1].type].call(Object.assign({sliceSerialize:e[a][2].sliceSerialize},n),e[a][1])}if(n.tokenStack.length>0){const f=n.tokenStack[n.tokenStack.length-1];(f[1]||D).call(n,void 0,f[0])}for(t.position={start:x(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:x(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},a=-1;++a<s.transforms.length;)t=s.transforms[a](t)||t;return t}function Q(e,t,n){let i=t-1,a=-1,f=!1,y,k,S,w;for(;++i<=n;){const u=e[i];switch(u[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{u[0]==="enter"?a++:a--,w=void 0;break}case"lineEndingBlank":{u[0]==="enter"&&(y&&!w&&!a&&!S&&(S=i),w=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:w=void 0}if(!a&&u[0]==="enter"&&u[1].type==="listItemPrefix"||a===-1&&u[0]==="exit"&&(u[1].type==="listUnordered"||u[1].type==="listOrdered")){if(y){let b=i;for(k=void 0;b--;){const m=e[b];if(m[1].type==="lineEnding"||m[1].type==="lineEndingBlank"){if(m[0]==="exit")continue;k&&(e[k][1].type="lineEndingBlank",f=!0),m[1].type="lineEnding",k=b}else if(!(m[1].type==="linePrefix"||m[1].type==="blockQuotePrefix"||m[1].type==="blockQuotePrefixWhitespace"||m[1].type==="blockQuoteMarker"||m[1].type==="listItemIndent"))break}S&&(!k||S<k)&&(y._spread=!0),y.end=Object.assign({},k?e[k][1].start:u[1].end),e.splice(k||i,0,["exit",y,u[2]]),i++,n++}if(u[1].type==="listItemPrefix"){const b={type:"listItem",_spread:!1,start:Object.assign({},u[1].start),end:void 0};y=b,e.splice(i,0,["enter",b,u[2]]),i++,n++,S=void 0,w=!0}}}return e[t][1]._spread=f,n}function r(e,t){return n;function n(i){E.call(this,e(i),i),t&&t.call(this,i)}}function h(){this.stack.push({type:"fragment",children:[]})}function E(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:x(t.start),end:void 0}}function c(e){return t;function t(n){e&&e.call(this,n),F.call(this,n)}}function F(e,t){const n=this.stack.pop(),i=this.tokenStack.pop();if(i)i[0].type!==e.type&&(t?t.call(this,e,i[0]):(i[1]||D).call(this,e,i[0]));else throw new Error("Cannot close `"+e.type+"` ("+I({start:e.start,end:e.end})+"): it’s not open");n.position.end=x(e.end)}function q(){return ze(this.stack.pop())}function N(){this.data.expectingFirstListItemValue=!0}function U(e){if(this.data.expectingFirstListItemValue){const t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function _(){const e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function j(){const e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function A(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function W(){const e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function $(){const e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,"")}function G(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=T(this.sliceSerialize(e)).toLowerCase()}function J(){const e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function K(){const e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function X(e){const t=this.stack[this.stack.length-1];if(!t.depth){const n=this.sliceSerialize(e).length;t.depth=n}}function Y(){this.data.setextHeadingSlurpLineEnding=!0}function Z(e){const t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function v(){this.data.setextHeadingSlurpLineEnding=void 0}function p(e){const n=this.stack[this.stack.length-1].children;let i=n[n.length-1];(!i||i.type!=="text")&&(i=Te(),i.position={start:x(e.start),end:void 0},n.push(i)),this.stack.push(i)}function g(e){const t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=x(e.end)}function ee(e){const t=this.stack[this.stack.length-1];if(this.data.atHardBreak){const n=t.children[t.children.length-1];n.position.end=x(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&s.canContainEols.includes(t.type)&&(p.call(this,e),g.call(this,e))}function B(){this.data.atHardBreak=!0}function te(){const e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){const e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ie(){const e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ae(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function se(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function re(e){const t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=Be(t),n.identifier=T(t).toLowerCase()}function ce(){const e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,n.type==="link"){const i=e.children;n.children=i}else n.alt=t}function oe(){const e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function le(){const e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function de(){this.data.inReference=void 0}function he(){this.data.referenceType="collapsed"}function ue(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=T(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"}function R(e){this.data.characterReferenceType=e.type}function fe(e){const t=this.sliceSerialize(e),n=this.data.characterReferenceType;let i;n?(i=Fe(t,n==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):i=Re(t);const a=this.stack.pop();a.value+=i,a.position.end=x(e.end)}function pe(e){g.call(this,e);const t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function ge(e){g.call(this,e);const t=this.stack[this.stack.length-1];t.url="mailto:"+this.sliceSerialize(e)}function ke(){return{type:"blockquote",children:[]}}function C(){return{type:"code",lang:null,meta:null,value:""}}function me(){return{type:"inlineCode",value:""}}function xe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ye(){return{type:"emphasis",children:[]}}function H(){return{type:"heading",depth:0,children:[]}}function L(){return{type:"break"}}function z(){return{type:"html",value:""}}function be(){return{type:"image",title:null,url:"",alt:null}}function P(){return{type:"link",title:null,url:"",children:[]}}function O(e){return{type:"list",ordered:e.type==="listOrdered",start:null,spread:e._spread,children:[]}}function Se(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}function we(){return{type:"paragraph",children:[]}}function Ie(){return{type:"strong",children:[]}}function Te(){return{type:"text",value:""}}function Ee(){return{type:"thematicBreak"}}}function x(o){return{line:o.line,column:o.column,offset:o.offset}}function V(o,s){let l=-1;for(;++l<s.length;){const d=s[l];Array.isArray(d)?V(o,d):Oe(o,d)}}function Oe(o,s){let l;for(l in s)if(M.call(s,l))switch(l){case"canContainEols":{const d=s[l];d&&o[l].push(...d);break}case"transforms":{const d=s[l];d&&o[l].push(...d);break}case"enter":case"exit":{const d=s[l];d&&Object.assign(o[l],d);break}}}function D(o,s){throw o?new Error("Cannot close `"+o.type+"` ("+I({start:o.start,end:o.end})+"): a different token (`"+s.type+"`, "+I({start:s.start,end:s.end})+") is open"):new Error("Cannot close document, a token (`"+s.type+"`, "+I({start:s.start,end:s.end})+") is still open")}export{_e as f};
