var s=typeof Element!="undefined",a=typeof Map=="function",c=typeof Set=="function",i=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function u(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var f,t,n;if(Array.isArray(e)){if(f=e.length,f!=r.length)return!1;for(t=f;t--!==0;)if(!u(e[t],r[t]))return!1;return!0}var o;if(a&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(o=e.entries();!(t=o.next()).done;)if(!r.has(t.value[0]))return!1;for(o=e.entries();!(t=o.next()).done;)if(!u(t.value[1],r.get(t.value[0])))return!1;return!0}if(c&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(o=e.entries();!(t=o.next()).done;)if(!r.has(t.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(f=e.length,f!=r.length)return!1;for(t=f;t--!==0;)if(e[t]!==r[t])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof r.valueOf=="function")return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof r.toString=="function")return e.toString()===r.toString();if(n=Object.keys(e),f=n.length,f!==Object.keys(r).length)return!1;for(t=f;t--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[t]))return!1;if(s&&e instanceof Element)return!1;for(t=f;t--!==0;)if(!((n[t]==="_owner"||n[t]==="__v"||n[t]==="__o")&&e.$$typeof)&&!u(e[n[t]],r[n[t]]))return!1;return!0}return e!==e&&r!==r}var l=function(r,f){try{return u(r,f)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}};export{l as r};
