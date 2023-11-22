(function(){"use strict";var t={9113:function(t,n,e){var o=e(9242),r=e(3396),i=e(4870),c=e(3835);const a={style:{display:"flex","flex-direction":"column"}};var s={__name:"App",setup(t){function n(t){console.log(t)}const e=o(n,1e3);function o(t,n){let e=null,o=!0;return function(){o?(t.apply(this,arguments),o=!1):(e&&clearTimeout(e),e=setTimeout((()=>{t.apply(this,arguments)}),n))}}function s(){if(!c.k.checkQPAAPexist)return;let t="Name,Age,Email\nJohn Doe,25,johndoe@example.com\nJane Smith,30,janesmith@example.com\nTom Johnson,35,tomjohnson@example.com";c.k.sendToAssistant({format:"csv",type:"original",consumer:"bugfix",data:t})}function u(){if(!c.k.checkQPAAPexist)return;let t=JSON.stringify({data:"Name",format:"csv",type:"chart",consumer:"input"});c.k.sendToAssistant({data:t,format:"json",type:"chart",consumer:"bugfix"})}function f(){if(!c.k.checkQPAAPexist)return;let t="Name,Age,Email\nJohn Doe,25,johndoe@example.com\nJane Smith,30,janesmith@example.com\nTom Johnson,35,tomjohnson@example.com";c.k.sendToAssistant({data:t,format:"csv",type:"original",consumer:"input"})}function l(){if(!c.k.checkQPAAPexist)return;let t=JSON.stringify({data:"Name,Age,City\nJohn,25,New York\nJane,30,San Francisco",format:"csv",type:"chart",consumer:"input"});c.k.sendToAssistant({data:t,format:"json",type:"chart",consumer:"input"})}function m(){c.k.setPrompt({type:"prompt",data:[{title:"你好",content:"好的"},{title:"你好",content:"不好"}]})}function p(){c.k.setPrompt({type:"question",data:[{title:"帮助我归因这个性能缺陷并给出解决方案",content:"帮助我归因这个性能缺陷并给出解决方案"},{title:"帮助我分析这段数据趋势中的异常并进行归因",content:"帮助我分析这段数据趋势中的异常并进行归因"}]})}return(t,n)=>((0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("button",{ref:"chartRef",onClick:s}," 发送csv到线索",512),(0,r._)("button",{ref:"chartRef",onClick:u}," 发送json到线索",512),(0,r._)("button",{ref:"chartRef",onClick:l}," 发送json输入框",512),(0,r._)("button",{ref:"chartRef",onClick:f}," 发送csv输入框",512),(0,r._)("button",{ref:"chartRef",onClick:m}," 发送提示词",512),(0,r._)("button",{ref:"chartRef",onClick:p}," 发送问题示例",512),(0,r._)("textarea",{onInput:n[0]||(n[0]=t=>(0,i.SU)(e)(10))},null,32)]))}};const u=s;var f=u,l=e(2483);const m={style:{display:"flex","flex-direction":"column"}},p=(0,r._)("textarea",null,null,-1);var h={__name:"result",setup(t){function n(){if(!c.k.checkQPAAPexist)return;let t="Name,Age,Email\nJohn Doe,25,johndoe@example.com\nJane Smith,30,janesmith@example.com\nTom Johnson,35,tomjohnson@example.com";c.k.sendToAssistant({data:t,format:"csv",type:"original",consumer:"clues"})}function e(){if(!c.k.checkQPAAPexist)return;let t=JSON.stringify({data:"Name",format:"csv",type:"chart",consumer:"input"});c.k.sendToAssistant({data:t,format:"json",type:"chart",consumer:"clues"})}function o(){if(!c.k.checkQPAAPexist)return;let t="Name,Age,Email\nJohn Doe,25,johndoe@example.com\nJane Smith,30,janesmith@example.com\nTom Johnson,35,tomjohnson@example.com";c.k.sendToAssistant({data:t,format:"csv",type:"original",consumer:"input"})}function i(){if(!c.k.checkQPAAPexist)return;let t=JSON.stringify({data:"Name,Age,City\nJohn,25,New York\nJane,30,San Francisco",format:"csv",type:"chart",consumer:"input"});c.k.sendToAssistant({data:t,format:"json",type:"chart",consumer:"input"})}function a(){c.k.setPrompt({type:"prompt",data:[{title:"你好",content:"好的"},{title:"你好",content:"不好"}]})}function s(){c.k.setPrompt({type:"question",data:[{title:"帮助我归因这个性能缺陷并给出解决方案",content:"帮助我归因这个性能缺陷并给出解决方案"},{title:"帮助我分析这段数据趋势中的异常并进行归因",content:"帮助我分析这段数据趋势中的异常并进行归因"}]})}return(t,c)=>((0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("button",{ref:"chartRef",onClick:n}," 发送csv到线索",512),(0,r._)("button",{ref:"chartRef",onClick:e}," 发送json到线索",512),(0,r._)("button",{ref:"chartRef",onClick:i}," 发送json输入框",512),(0,r._)("button",{ref:"chartRef",onClick:o}," 发送csv输入框",512),(0,r._)("button",{ref:"chartRef",onClick:a}," 发送提示词",512),(0,r._)("button",{ref:"chartRef",onClick:s}," 发送问题示例",512),p]))}};const d=h;var k=d,v={__name:"index",setup(t){return(t,n)=>((0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(k)]))}};const y=v;var x=y;const A=[{path:"/",component:x}],g=(0,l.p7)({history:(0,l.r5)(),routes:A});var b=g;(0,o.ri)(f).use(b).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var c=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],i=t[f][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||c>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(a=!1,i<c&&(c=i));if(a){t.splice(f--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,c=o[0],a=o[1],s=o[2],u=0;if(c.some((function(n){return 0!==t[n]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(s)var f=s(e)}for(n&&n(o);u<c.length;u++)i=c[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(f)},o=self["webpackChunkvue3cli"]=self["webpackChunkvue3cli"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9113)}));o=e.O(o)})();
//# sourceMappingURL=app.c2d18a1b.js.map