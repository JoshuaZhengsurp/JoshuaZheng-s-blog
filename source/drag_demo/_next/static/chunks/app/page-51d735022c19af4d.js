(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1511:function(e,t,o){Promise.resolve().then(o.bind(o,4319))},4319:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r}});var n=o(8903),l=o(617),a=o(1655);let s=()=>{let e;(0,l.useEffect)(()=>{(e=new a.ZP(document.body,{target:document.getElementById("moveable"),container:document.body,draggable:!0,resizable:!0,scalable:!0,rotatable:!0,warpable:!0,pinchable:!0,origin:!0,keepRatio:!0,edge:!1,throttleDrag:0,throttleResize:0,throttleScale:0,throttleRotate:0})).on("dragStart",e=>{let{target:t,clientX:o,clientY:n}=e;console.log("onDragStart",t)}).on("drag",e=>{let{target:t,transform:o,left:n,top:l,right:a,bottom:s,beforeDelta:r,beforeDist:c,delta:i,dist:d,clientX:g,clientY:u}=e;console.log("onDrag left, top",n,l),t.style.left="".concat(n,"px"),t.style.top="".concat(l,"px")}).on("dragEnd",e=>{let{target:t,isDrag:o,clientX:n,clientY:l}=e;console.log("onDragEnd",t,o)}),e.on("scaleStart",e=>{let{target:t,clientX:o,clientY:n}=e;console.log("onScaleStart",t)}).on("scale",e=>{let{target:t,scale:o,dist:n,delta:l,transform:a,clientX:s,clientY:r}=e;console.log("onScale scale",o),t.style.transform=a}).on("scaleEnd",e=>{let{target:t,isDrag:o,clientX:n,clientY:l}=e;console.log("onScaleEnd",t,o)}),e.on("resizeStart",e=>{let{target:t,clientX:o,clientY:n}=e;console.log("onResizeStart",t)}).on("resize",e=>{let{target:t,width:o,height:n,dist:l,delta:a,clientX:s,clientY:r}=e;console.log("onResize",t),a[0]&&(t.style.width="".concat(o,"px")),a[1]&&(t.style.height="".concat(n,"px"))}).on("resizeEnd",e=>{let{target:t,isDrag:o,clientX:n,clientY:l}=e;console.log("onResizeEnd",t,o)}),e.on("rotateStart",e=>{let{target:t,clientX:o,clientY:n}=e;console.log("onRotateStart",t)}).on("rotate",e=>{let{target:t,beforeDelta:o,delta:n,dist:l,transform:a,clientX:s,clientY:r}=e;console.log("onRotate",l),t.style.transform=a}).on("rotateEnd",e=>{let{target:t,isDrag:o,clientX:n,clientY:l}=e;console.log("onRotateEnd",t,o)})},[]),(0,l.useEffect)(()=>{console.log("useEffect"),e&&e.updateRect()})};function r(){return s(),(0,n.jsx)("div",{className:"w-[100vw] h-[100vh]",children:(0,n.jsx)("div",{className:"target",id:"moveable",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"red",width:"50px",height:"50px"}})})}}},function(e){e.O(0,[575,321,306,89,744],function(){return e(e.s=1511)}),_N_E=e.O()}]);