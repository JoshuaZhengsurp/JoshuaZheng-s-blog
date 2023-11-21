import{c as x}from"./classnames-9c02366a.js";import{r as y,a as c}from"./react-e928f451.js";import{e as b,b as _,g as ue,d as ce,h as de,c as le,f as Ce}from"./@babel-5ecd552a.js";import{A as Ee,y as Se}from"./rc-util-4d7ee22f.js";function O(e){return!!(e.addonBefore||e.addonAfter)}function re(e){return!!(e.prefix||e.suffix||e.allowClear)}function se(e,n,r,d){if(r){var a=n;if(n.type==="click"){var l=e.cloneNode(!0);a=Object.create(n,{target:{value:l},currentTarget:{value:l}}),l.value="",r(a);return}if(d!==void 0){a=Object.create(n,{target:{value:e},currentTarget:{value:e}}),e.type!=="file"&&(e.value=d),r(a);return}r(a)}}function we(e,n){if(e){e.focus(n);var r=n||{},d=r.cursor;if(d){var a=e.value.length;switch(d){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}}var Ne=function(n){var r,d,a=n.inputElement,l=n.prefixCls,A=n.prefix,R=n.suffix,j=n.addonBefore,C=n.addonAfter,I=n.className,K=n.style,q=n.disabled,J=n.readOnly,L=n.focused,W=n.triggerFocus,h=n.allowClear,B=n.value,Z=n.handleReset,$=n.hidden,u=n.classes,i=n.classNames,D=n.dataAttrs,m=n.styles,f=n.components,ee=(f==null?void 0:f.affixWrapper)||"span",Q=(f==null?void 0:f.groupWrapper)||"span",ne=(f==null?void 0:f.wrapper)||"span",p=(f==null?void 0:f.groupAddon)||"span",M=y.useRef(null),s=function(g){var w;(w=M.current)!==null&&w!==void 0&&w.contains(g.target)&&(W==null||W())},z=function(){var g;if(!h)return null;var w=!q&&!J&&B,V="".concat(l,"-clear-icon"),Y=ce(h)==="object"&&h!==null&&h!==void 0&&h.clearIcon?h.clearIcon:"✖";return c.createElement("span",{onClick:Z,onMouseDown:function(ae){return ae.preventDefault()},className:x(V,(g={},_(g,"".concat(V,"-hidden"),!w),_(g,"".concat(V,"-has-suffix"),!!R),g)),role:"button",tabIndex:-1},Y)},P=y.cloneElement(a,{value:B,hidden:$,className:x((r=a.props)===null||r===void 0?void 0:r.className,!re(n)&&!O(n)&&I)||null,style:b(b({},(d=a.props)===null||d===void 0?void 0:d.style),!re(n)&&!O(n)?K:{})});if(re(n)){var E,S="".concat(l,"-affix-wrapper"),U=x(S,(E={},_(E,"".concat(S,"-disabled"),q),_(E,"".concat(S,"-focused"),L),_(E,"".concat(S,"-readonly"),J),_(E,"".concat(S,"-input-with-clear-btn"),R&&h&&B),E),!O(n)&&I,u==null?void 0:u.affixWrapper,i==null?void 0:i.affixWrapper),G=(R||h)&&c.createElement("span",{className:x("".concat(l,"-suffix"),i==null?void 0:i.suffix),style:m==null?void 0:m.suffix},z(),R);P=c.createElement(ee,ue({className:U,style:b(b({},O(n)?void 0:K),m==null?void 0:m.affixWrapper),hidden:!O(n)&&$,onClick:s},D==null?void 0:D.affixWrapper,{ref:M}),A&&c.createElement("span",{className:x("".concat(l,"-prefix"),i==null?void 0:i.prefix),style:m==null?void 0:m.prefix},A),y.cloneElement(a,{value:B,hidden:null}),G)}if(O(n)){var X="".concat(l,"-group"),T="".concat(X,"-addon"),H=x("".concat(l,"-wrapper"),X,u==null?void 0:u.wrapper),te=x("".concat(l,"-group-wrapper"),I,u==null?void 0:u.group);return c.createElement(Q,{className:te,style:K,hidden:$},c.createElement(ne,{className:H},j&&c.createElement(p,{className:T},j),y.cloneElement(P,{hidden:null}),C&&c.createElement(p,{className:T},C)))}return P},be=["show"];function Re(e,n){return y.useMemo(function(){var r={};n&&(r.show=ce(n)==="object"&&n.formatter?n.formatter:!!n),r=b(b({},r),e);var d=r,a=d.show,l=de(d,be);return b(b({},l),{},{show:!!a,showFormatter:typeof a=="function"?a:void 0,strategy:l.strategy||function(A){return A.length}})},[e,n])}var Ie=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],De=y.forwardRef(function(e,n){var r=e.autoComplete,d=e.onChange,a=e.onFocus,l=e.onBlur,A=e.onPressEnter,R=e.onKeyDown,j=e.prefixCls,C=j===void 0?"rc-input":j,I=e.disabled,K=e.htmlSize,q=e.className,J=e.maxLength,L=e.suffix,W=e.showCount,h=e.count,B=e.type,Z=B===void 0?"text":B,$=e.classes,u=e.classNames,i=e.styles,D=e.onCompositionStart,m=e.onCompositionEnd,f=de(e,Ie),ee=y.useState(!1),Q=le(ee,2),ne=Q[0],p=Q[1],M=c.useRef(!1),s=y.useRef(null),z=function(t){s.current&&we(s.current,t)},P=Ee(e.defaultValue,{value:e.value}),E=le(P,2),S=E[0],U=E[1],G=S==null?"":String(S),X=c.useState(null),T=le(X,2),H=T[0],te=T[1],v=Re(h,W),g=v.max||J,w=v.strategy(G),V=!!g&&w>g;y.useImperativeHandle(n,function(){return{focus:z,blur:function(){var t;(t=s.current)===null||t===void 0||t.blur()},setSelectionRange:function(t,N,F){var k;(k=s.current)===null||k===void 0||k.setSelectionRange(t,N,F)},select:function(){var t;(t=s.current)===null||t===void 0||t.select()},input:s.current}}),y.useEffect(function(){p(function(o){return o&&I?!1:o})},[I]);var Y=function(t,N){var F=N;if(!M.current&&v.exceedFormatter&&v.max&&v.strategy(N)>v.max&&(F=v.exceedFormatter(N,{max:v.max}),N!==F)){var k,oe;te([((k=s.current)===null||k===void 0?void 0:k.selectionStart)||0,((oe=s.current)===null||oe===void 0?void 0:oe.selectionEnd)||0])}U(F),s.current&&se(s.current,t,d,F)};c.useEffect(function(){if(H){var o;(o=s.current)===null||o===void 0||o.setSelectionRange.apply(o,Ce(H))}},[H]);var ie=function(t){Y(t,t.target.value)},ae=function(t){M.current=!1,Y(t,t.currentTarget.value),m==null||m(t)},fe=function(t){A&&t.key==="Enter"&&A(t),R==null||R(t)},ve=function(t){p(!0),a==null||a(t)},me=function(t){p(!1),l==null||l(t)},ge=function(t){U(""),z(),s.current&&se(s.current,t,d)},he=V&&"".concat(C,"-out-of-range"),xe=function(){var t=Se(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]);return c.createElement("input",ue({autoComplete:r},t,{onChange:ie,onFocus:ve,onBlur:me,onKeyDown:fe,className:x(C,_({},"".concat(C,"-disabled"),I),u==null?void 0:u.input),style:i==null?void 0:i.input,ref:s,size:K,type:Z,onCompositionStart:function(F){M.current=!0,D==null||D(F)},onCompositionEnd:ae}))},ye=function(){var t=Number(g)>0;if(L||v.show){var N=v.showFormatter?v.showFormatter({value:G,count:w,maxLength:g}):"".concat(w).concat(t?" / ".concat(g):"");return c.createElement(c.Fragment,null,v.show&&c.createElement("span",{className:x("".concat(C,"-show-count-suffix"),_({},"".concat(C,"-show-count-has-suffix"),!!L),u==null?void 0:u.count),style:b({},i==null?void 0:i.count)},N),L)}return null};return c.createElement(Ne,ue({},f,{prefixCls:C,className:x(q,he),inputElement:xe(),handleReset:ge,value:G,focused:ne,triggerFocus:z,suffix:ye(),disabled:I,classes:$,classNames:u,styles:i}))});export{Ne as B,De as I,se as r,Re as u};
