import{b as W,h as Te,g as ce,e as X,c as E,d as $e,f as et}from"./@babel-5ecd552a.js";import{r as t}from"./react-e928f451.js";import{c as Y}from"./classnames-9c02366a.js";import{l as tt,H as At,K as Q,i as Bt,e as zt,m as Dt,A as at}from"./rc-util-4d7ee22f.js";import{C as Kt}from"./rc-motion-19ec1687.js";import{R as Ke}from"./rc-resize-observer-5ae9b312.js";import{D as $t}from"./rc-dropdown-2e5cf4d5.js";import{E as Ot,M as Wt}from"./rc-menu-ff5f7e1f.js";const ke=t.createContext(null);var ft=t.forwardRef(function(e,a){var n=e.prefixCls,i=e.className,o=e.style,r=e.id,s=e.active,c=e.tabKey,l=e.children;return t.createElement("div",{id:r&&"".concat(r,"-panel-").concat(c),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":r&&"".concat(r,"-tab-").concat(c),"aria-hidden":!s,style:o,className:Y(n,s&&"".concat(n,"-active"),i),ref:a},l)}),Ut=["key","forceRender","style","className","destroyInactiveTabPane"];function Vt(e){var a=e.id,n=e.activeKey,i=e.animated,o=e.tabPosition,r=e.destroyInactiveTabPane,s=t.useContext(ke),c=s.prefixCls,l=s.tabs,m=i.tabPane,b="".concat(c,"-tabpane");return t.createElement("div",{className:Y("".concat(c,"-content-holder"))},t.createElement("div",{className:Y("".concat(c,"-content"),"".concat(c,"-content-").concat(o),W({},"".concat(c,"-content-animated"),m))},l.map(function(u){var y=u.key,v=u.forceRender,S=u.style,I=u.className,D=u.destroyInactiveTabPane,N=Te(u,Ut),M=y===n;return t.createElement(Kt,ce({key:y,visible:M,forceRender:v,removeOnLeave:!!(r||D),leavedClassName:"".concat(b,"-hidden")},i.tabPaneMotion),function(A,H){var $=A.style,g=A.className;return t.createElement(ft,ce({},N,{prefixCls:b,id:a,tabKey:y,animated:m,active:M,style:X(X({},S),$),className:Y(I,g),ref:H}))})})))}var Ft=function(a){var n=a.activeTabOffset,i=a.horizontal,o=a.rtl,r=a.indicatorSize,s=t.useState(),c=E(s,2),l=c[0],m=c[1],b=t.useRef(),u=function(S){return typeof r=="function"?r(S):typeof r=="number"?r:S};function y(){tt.cancel(b.current)}return t.useEffect(function(){var v={};return n&&(i?(o?(v.right=n.right+n.width/2,v.transform="translateX(50%)"):(v.left=n.left+n.width/2,v.transform="translateX(-50%)"),v.width=u(n.width)):(v.top=n.top+n.height/2,v.transform="translateY(-50%)",v.height=u(n.height))),y(),b.current=tt(function(){m(v)}),y},[n,i,o,r]),{style:l}},nt={width:0,height:0,left:0,top:0};function Ht(e,a,n){return t.useMemo(function(){for(var i,o=new Map,r=a.get((i=e[0])===null||i===void 0?void 0:i.key)||nt,s=r.left+r.width,c=0;c<e.length;c+=1){var l=e[c].key,m=a.get(l);if(!m){var b;m=a.get((b=e[c-1])===null||b===void 0?void 0:b.key)||nt}var u=o.get(l)||X({},m);u.right=s-u.left-u.width,o.set(l,u)}return o},[e.map(function(i){return i.key}).join("_"),a,n])}function rt(e,a){var n=t.useRef(e),i=t.useState({}),o=E(i,2),r=o[1];function s(c){var l=typeof c=="function"?c(n.current):c;l!==n.current&&a(l,n.current),n.current=l,r({})}return[n.current,s]}var Gt=.1,ot=.01,xe=20,it=Math.pow(.995,xe);function Xt(e,a){var n=t.useState(),i=E(n,2),o=i[0],r=i[1],s=t.useState(0),c=E(s,2),l=c[0],m=c[1],b=t.useState(0),u=E(b,2),y=u[0],v=u[1],S=t.useState(),I=E(S,2),D=I[0],N=I[1],M=t.useRef();function A(p){var x=p.touches[0],T=x.screenX,d=x.screenY;r({x:T,y:d}),window.clearInterval(M.current)}function H(p){if(o){p.preventDefault();var x=p.touches[0],T=x.screenX,d=x.screenY;r({x:T,y:d});var C=T-o.x,k=d-o.y;a(C,k);var B=Date.now();m(B),v(B-l),N({x:C,y:k})}}function $(){if(o&&(r(null),N(null),D)){var p=D.x/y,x=D.y/y,T=Math.abs(p),d=Math.abs(x);if(Math.max(T,d)<Gt)return;var C=p,k=x;M.current=window.setInterval(function(){if(Math.abs(C)<ot&&Math.abs(k)<ot){window.clearInterval(M.current);return}C*=it,k*=it,a(C*xe,k*xe)},xe)}}var g=t.useRef();function L(p){var x=p.deltaX,T=p.deltaY,d=0,C=Math.abs(x),k=Math.abs(T);C===k?d=g.current==="x"?x:T:C>k?(d=x,g.current="x"):(d=T,g.current="y"),a(-d,-d)&&p.preventDefault()}var K=t.useRef(null);K.current={onTouchStart:A,onTouchMove:H,onTouchEnd:$,onWheel:L},t.useEffect(function(){function p(C){K.current.onTouchStart(C)}function x(C){K.current.onTouchMove(C)}function T(C){K.current.onTouchEnd(C)}function d(C){K.current.onWheel(C)}return document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",T,{passive:!1}),e.current.addEventListener("touchstart",p,{passive:!1}),e.current.addEventListener("wheel",d),function(){document.removeEventListener("touchmove",x),document.removeEventListener("touchend",T)}},[])}function vt(e){var a=t.useState(0),n=E(a,2),i=n[0],o=n[1],r=t.useRef(0),s=t.useRef();return s.current=e,At(function(){var c;(c=s.current)===null||c===void 0||c.call(s)},[i]),function(){r.current===i&&(r.current+=1,o(r.current))}}function Yt(e){var a=t.useRef([]),n=t.useState({}),i=E(n,2),o=i[1],r=t.useRef(typeof e=="function"?e():e),s=vt(function(){var l=r.current;a.current.forEach(function(m){l=m(l)}),a.current=[],r.current=l,o({})});function c(l){a.current.push(l),s()}return[r.current,c]}var ct={width:0,height:0,left:0,top:0,right:0};function _t(e,a,n,i,o,r,s){var c=s.tabs,l=s.tabPosition,m=s.rtl,b,u,y;return["top","bottom"].includes(l)?(b="width",u=m?"right":"left",y=Math.abs(n)):(b="height",u="top",y=-n),t.useMemo(function(){if(!c.length)return[0,0];for(var v=c.length,S=v,I=0;I<v;I+=1){var D=e.get(c[I].key)||ct;if(D[u]+D[b]>y+a){S=I-1;break}}for(var N=0,M=v-1;M>=0;M-=1){var A=e.get(c[M].key)||ct;if(A[u]<y){N=M+1;break}}return N>=S?[0,0]:[N,S]},[e,a,i,o,r,y,l,c.map(function(v){return v.key}).join("_"),m])}function st(e){var a;return e instanceof Map?(a={},e.forEach(function(n,i){a[i]=n})):a=e,JSON.stringify(a)}var jt="TABS_DQ";function mt(e){return String(e).replace(/"/g,jt)}function bt(e,a,n,i){return!(!n||i||e===!1||e===void 0&&(a===!1||a===null))}function Qt(e,a){var n=e.prefixCls,i=e.editable,o=e.locale,r=e.style;return!i||i.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(n,"-nav-add"),style:r,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(c){i.onEdit("add",{event:c})}},i.addIcon||"+")}const pt=t.forwardRef(Qt);var lt=t.forwardRef(function(e,a){var n=e.position,i=e.prefixCls,o=e.extra;if(!o)return null;var r,s={};return $e(o)==="object"&&!t.isValidElement(o)?s=o:s.right=o,n==="right"&&(r=s.right),n==="left"&&(r=s.left),r?t.createElement("div",{className:"".concat(i,"-extra-content"),ref:a},r):null});function Zt(e,a){var n=e.prefixCls,i=e.id,o=e.tabs,r=e.locale,s=e.mobile,c=e.moreIcon,l=c===void 0?"More":c,m=e.moreTransitionName,b=e.style,u=e.className,y=e.editable,v=e.tabBarGutter,S=e.rtl,I=e.removeAriaLabel,D=e.onTabClick,N=e.getPopupContainer,M=e.popupClassName,A=t.useState(!1),H=E(A,2),$=H[0],g=H[1],L=t.useState(null),K=E(L,2),p=K[0],x=K[1],T="".concat(i,"-more-popup"),d="".concat(n,"-dropdown"),C=p!==null?"".concat(T,"-").concat(p):null,k=r==null?void 0:r.dropdownAriaLabel;function B(h,w){h.preventDefault(),h.stopPropagation(),y.onEdit("remove",{key:w,event:h})}var q=t.createElement(Ot,{onClick:function(w){var U=w.key,G=w.domEvent;D(U,G),g(!1)},prefixCls:"".concat(d,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":C,selectedKeys:[p],"aria-label":k!==void 0?k:"expanded dropdown"},o.map(function(h){var w=h.closable,U=h.disabled,G=h.closeIcon,V=h.key,_=h.label,Z=bt(w,G,y,U);return t.createElement(Wt,{key:V,id:"".concat(T,"-").concat(V),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(V),disabled:U},t.createElement("span",null,_),Z&&t.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(d,"-menu-item-remove"),onClick:function(J){J.stopPropagation(),B(J,V)}},G||y.removeIcon||"×"))}));function se(h){for(var w=o.filter(function(Z){return!Z.disabled}),U=w.findIndex(function(Z){return Z.key===p})||0,G=w.length,V=0;V<G;V+=1){U=(U+h+G)%G;var _=w[U];if(!_.disabled){x(_.key);return}}}function ae(h){var w=h.which;if(!$){[Q.DOWN,Q.SPACE,Q.ENTER].includes(w)&&(g(!0),h.preventDefault());return}switch(w){case Q.UP:se(-1),h.preventDefault();break;case Q.DOWN:se(1),h.preventDefault();break;case Q.ESC:g(!1);break;case Q.SPACE:case Q.ENTER:p!==null&&D(p,h);break}}t.useEffect(function(){var h=document.getElementById(C);h&&h.scrollIntoView&&h.scrollIntoView(!1)},[p]),t.useEffect(function(){$||x(null)},[$]);var O=W({},S?"marginRight":"marginLeft",v);o.length||(O.visibility="hidden",O.order=1);var ne=Y(W({},"".concat(d,"-rtl"),S)),de=s?null:t.createElement($t,{prefixCls:d,overlay:q,trigger:["hover"],visible:o.length?$:!1,transitionName:m,onVisibleChange:g,overlayClassName:Y(ne,M),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:N},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:O,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(i,"-more"),"aria-expanded":$,onKeyDown:ae},l));return t.createElement("div",{className:Y("".concat(n,"-nav-operations"),u),style:b,ref:a},de,t.createElement(pt,{prefixCls:n,locale:r,editable:y}))}const qt=t.memo(t.forwardRef(Zt),function(e,a){return a.tabMoving});function Jt(e){var a,n=e.prefixCls,i=e.id,o=e.active,r=e.tab,s=r.key,c=r.label,l=r.disabled,m=r.closeIcon,b=e.closable,u=e.renderWrapper,y=e.removeAriaLabel,v=e.editable,S=e.onClick,I=e.onFocus,D=e.style,N="".concat(n,"-tab"),M=bt(b,m,v,l);function A(g){l||S(g)}function H(g){g.preventDefault(),g.stopPropagation(),v.onEdit("remove",{key:s,event:g})}var $=t.createElement("div",{key:s,"data-node-key":mt(s),className:Y(N,(a={},W(a,"".concat(N,"-with-remove"),M),W(a,"".concat(N,"-active"),o),W(a,"".concat(N,"-disabled"),l),a)),style:D,onClick:A},t.createElement("div",{role:"tab","aria-selected":o,id:i&&"".concat(i,"-tab-").concat(s),className:"".concat(N,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(s),"aria-disabled":l,tabIndex:l?null:0,onClick:function(L){L.stopPropagation(),A(L)},onKeyDown:function(L){[Q.SPACE,Q.ENTER].includes(L.which)&&(L.preventDefault(),A(L))},onFocus:I},c),M&&t.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(N,"-remove"),onClick:function(L){L.stopPropagation(),H(L)}},m||v.removeIcon||"×"));return u?u($):$}var ea=function(a,n){var i=a.offsetWidth,o=a.offsetHeight,r=a.offsetTop,s=a.offsetLeft,c=a.getBoundingClientRect(),l=c.width,m=c.height,b=c.x,u=c.y;return Math.abs(l-i)<1?[l,m,b-n.x,u-n.y]:[i,o,s,r]},ue=function(a){var n=a.current||{},i=n.offsetWidth,o=i===void 0?0:i,r=n.offsetHeight,s=r===void 0?0:r;if(a.current){var c=a.current.getBoundingClientRect(),l=c.width,m=c.height;if(Math.abs(l-o)<1)return[l,m]}return[o,s]},Ee=function(a,n){return a[n?0:1]};function ta(e,a){var n,i=t.useContext(ke),o=i.prefixCls,r=i.tabs,s=e.className,c=e.style,l=e.id,m=e.animated,b=e.activeKey,u=e.rtl,y=e.extra,v=e.editable,S=e.locale,I=e.tabPosition,D=e.tabBarGutter,N=e.children,M=e.onTabClick,A=e.onTabScroll,H=e.indicatorSize,$=t.useRef(),g=t.useRef(),L=t.useRef(),K=t.useRef(),p=t.useRef(),x=t.useRef(),T=t.useRef(),d=I==="top"||I==="bottom",C=rt(0,function(P,f){d&&A&&A({direction:P>f?"left":"right"})}),k=E(C,2),B=k[0],q=k[1],se=rt(0,function(P,f){!d&&A&&A({direction:P>f?"top":"bottom"})}),ae=E(se,2),O=ae[0],ne=ae[1],de=t.useState([0,0]),h=E(de,2),w=h[0],U=h[1],G=t.useState([0,0]),V=E(G,2),_=V[0],Z=V[1],be=t.useState([0,0]),J=E(be,2),Re=J[0],Pe=J[1],Ne=t.useState([0,0]),fe=E(Ne,2),we=fe[0],R=fe[1],re=Yt(new Map),le=E(re,2),ht=le[0],yt=le[1],pe=Ht(r,ht,_[0]),Ie=Ee(w,d),ve=Ee(_,d),Me=Ee(Re,d),Oe=Ee(we,d),We=Ie<ve+Me,j=We?Ie-Oe:Ie-Me,St="".concat(o,"-nav-operations-hidden"),ee=0,oe=0;d&&u?(ee=0,oe=Math.max(0,ve-j)):(ee=Math.min(0,j-ve),oe=0);function Le(P){return P<ee?ee:P>oe?oe:P}var Ue=t.useRef(),gt=t.useState(),Ve=E(gt,2),he=Ve[0],Fe=Ve[1];function Ae(){Fe(Date.now())}function Be(){window.clearTimeout(Ue.current)}Xt(K,function(P,f){function z(F,ie){F(function(te){var ge=Le(te+ie);return ge})}return We?(d?z(q,P):z(ne,f),Be(),Ae(),!0):!1}),t.useEffect(function(){return Be(),he&&(Ue.current=window.setTimeout(function(){Fe(0)},100)),Be},[he]);var Ct=_t(pe,j,d?B:O,ve,Me,Oe,X(X({},e),{},{tabs:r})),He=E(Ct,2),Et=He[0],xt=He[1],Ge=Bt(function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b,f=pe.get(P)||{width:0,height:0,left:0,right:0,top:0};if(d){var z=B;u?f.right<B?z=f.right:f.right+f.width>B+j&&(z=f.right+f.width-j):f.left<-B?z=-f.left:f.left+f.width>-B+j&&(z=-(f.left+f.width-j)),ne(0),q(Le(z))}else{var F=O;f.top<-O?F=-f.top:f.top+f.height>-O+j&&(F=-(f.top+f.height-j)),q(0),ne(Le(F))}}),ye={};I==="top"||I==="bottom"?ye[u?"marginRight":"marginLeft"]=D:ye.marginTop=D;var Xe=r.map(function(P,f){var z=P.key;return t.createElement(Jt,{id:l,prefixCls:o,key:z,tab:P,style:f===0?void 0:ye,closable:P.closable,editable:v,active:z===b,renderWrapper:N,removeAriaLabel:S==null?void 0:S.removeAriaLabel,onClick:function(ie){M(z,ie)},onFocus:function(){Ge(z),Ae(),K.current&&(u||(K.current.scrollLeft=0),K.current.scrollTop=0)}})}),Ye=function(){return yt(function(){var f,z=new Map,F=(f=p.current)===null||f===void 0?void 0:f.getBoundingClientRect();return r.forEach(function(ie){var te,ge=ie.key,Je=(te=p.current)===null||te===void 0?void 0:te.querySelector('[data-node-key="'.concat(mt(ge),'"]'));if(Je){var Nt=ea(Je,F),Ce=E(Nt,4),wt=Ce[0],It=Ce[1],Mt=Ce[2],Lt=Ce[3];z.set(ge,{width:wt,height:It,left:Mt,top:Lt})}}),z})};t.useEffect(function(){Ye()},[r.map(function(P){return P.key}).join("_")]);var Se=vt(function(){var P=ue($),f=ue(g),z=ue(L);U([P[0]-f[0]-z[0],P[1]-f[1]-z[1]]);var F=ue(T);Pe(F);var ie=ue(x);R(ie);var te=ue(p);Z([te[0]-F[0],te[1]-F[1]]),Ye()}),Tt=r.slice(0,Et),kt=r.slice(xt+1),_e=[].concat(et(Tt),et(kt)),je=pe.get(b),Rt=Ft({activeTabOffset:je,horizontal:d,rtl:u,indicatorSize:H}),Pt=Rt.style;t.useEffect(function(){Ge()},[b,ee,oe,st(je),st(pe),d]),t.useEffect(function(){Se()},[u]);var Qe=!!_e.length,me="".concat(o,"-nav-wrap"),ze,De,Ze,qe;return d?u?(De=B>0,ze=B!==oe):(ze=B<0,De=B!==ee):(Ze=O<0,qe=O!==ee),t.createElement(Ke,{onResize:Se},t.createElement("div",{ref:zt(a,$),role:"tablist",className:Y("".concat(o,"-nav"),s),style:c,onKeyDown:function(){Ae()}},t.createElement(lt,{ref:g,position:"left",extra:y,prefixCls:o}),t.createElement(Ke,{onResize:Se},t.createElement("div",{className:Y(me,(n={},W(n,"".concat(me,"-ping-left"),ze),W(n,"".concat(me,"-ping-right"),De),W(n,"".concat(me,"-ping-top"),Ze),W(n,"".concat(me,"-ping-bottom"),qe),n)),ref:K},t.createElement(Ke,{onResize:Se},t.createElement("div",{ref:p,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(B,"px, ").concat(O,"px)"),transition:he?"none":void 0}},Xe,t.createElement(pt,{ref:T,prefixCls:o,locale:S,editable:v,style:X(X({},Xe.length===0?void 0:ye),{},{visibility:Qe?"hidden":null})}),t.createElement("div",{className:Y("".concat(o,"-ink-bar"),W({},"".concat(o,"-ink-bar-animated"),m.inkBar)),style:Pt}))))),t.createElement(qt,ce({},e,{removeAriaLabel:S==null?void 0:S.removeAriaLabel,ref:x,prefixCls:o,tabs:_e,className:!Qe&&St,tabMoving:!!he})),t.createElement(lt,{ref:L,position:"right",extra:y,prefixCls:o})))}const ut=t.forwardRef(ta);var aa=["renderTabBar"],na=["label","key"];function ra(e){var a=e.renderTabBar,n=Te(e,aa),i=t.useContext(ke),o=i.tabs;if(a){var r=X(X({},n),{},{panes:o.map(function(s){var c=s.label,l=s.key,m=Te(s,na);return t.createElement(ft,ce({tab:c,key:l,tabKey:l},m))})});return a(r,ut)}return t.createElement(ut,n)}function oa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},a;return e===!1?a={inkBar:!1,tabPane:!1}:e===!0?a={inkBar:!0,tabPane:!1}:a=X({inkBar:!0},$e(e)==="object"?e:{}),a.tabPaneMotion&&a.tabPane===void 0&&(a.tabPane=!0),!a.tabPaneMotion&&a.tabPane&&(a.tabPane=!1),a}var ia=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],dt=0;function ca(e,a){var n,i=e.id,o=e.prefixCls,r=o===void 0?"rc-tabs":o,s=e.className,c=e.items,l=e.direction,m=e.activeKey,b=e.defaultActiveKey,u=e.editable,y=e.animated,v=e.tabPosition,S=v===void 0?"top":v,I=e.tabBarGutter,D=e.tabBarStyle,N=e.tabBarExtraContent,M=e.locale,A=e.moreIcon,H=e.moreTransitionName,$=e.destroyInactiveTabPane,g=e.renderTabBar,L=e.onChange,K=e.onTabClick,p=e.onTabScroll,x=e.getPopupContainer,T=e.popupClassName,d=e.indicatorSize,C=Te(e,ia),k=t.useMemo(function(){return(c||[]).filter(function(R){return R&&$e(R)==="object"&&"key"in R})},[c]),B=l==="rtl",q=oa(y),se=t.useState(!1),ae=E(se,2),O=ae[0],ne=ae[1];t.useEffect(function(){ne(Dt())},[]);var de=at(function(){var R;return(R=k[0])===null||R===void 0?void 0:R.key},{value:m,defaultValue:b}),h=E(de,2),w=h[0],U=h[1],G=t.useState(function(){return k.findIndex(function(R){return R.key===w})}),V=E(G,2),_=V[0],Z=V[1];t.useEffect(function(){var R=k.findIndex(function(le){return le.key===w});if(R===-1){var re;R=Math.max(0,Math.min(_,k.length-1)),U((re=k[R])===null||re===void 0?void 0:re.key)}Z(R)},[k.map(function(R){return R.key}).join("_"),w,_]);var be=at(null,{value:i}),J=E(be,2),Re=J[0],Pe=J[1];t.useEffect(function(){i||(Pe("rc-tabs-".concat(dt)),dt+=1)},[]);function Ne(R,re){K==null||K(R,re);var le=R!==w;U(R),le&&(L==null||L(R))}var fe={id:Re,activeKey:w,animated:q,tabPosition:S,rtl:B,mobile:O},we=X(X({},fe),{},{editable:u,locale:M,moreIcon:A,moreTransitionName:H,tabBarGutter:I,onTabClick:Ne,onTabScroll:p,extra:N,style:D,panes:null,getPopupContainer:x,popupClassName:T,indicatorSize:d});return t.createElement(ke.Provider,{value:{tabs:k,prefixCls:r}},t.createElement("div",ce({ref:a,id:i,className:Y(r,"".concat(r,"-").concat(S),(n={},W(n,"".concat(r,"-mobile"),O),W(n,"".concat(r,"-editable"),u),W(n,"".concat(r,"-rtl"),B),n),s)},C),t.createElement(ra,ce({},we,{renderTabBar:g})),t.createElement(Vt,ce({destroyInactiveTabPane:$},fe,{animated:q}))))}var pa=t.forwardRef(ca);export{pa as F};
