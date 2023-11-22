import{j as t,r as i}from"./react-e928f451.js";import{u as T}from"./react-router-dom-801af91f.js";import{M as E}from"./Mk-Table-a8144b10.js";import{a as f}from"./react-router-0a5ed7d1.js";import{h as v}from"./index-5bbe5b3f.js";import{e as K,C as U,P as A}from"./antd-edb12fc6.js";import"./@babel-5ecd552a.js";import"./@remix-run-42b1b5a4.js";import"./react-redux-e07b158c.js";import"./react-dom-964dd389.js";import"./scheduler-052770cf.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./react-is-e5978b8b.js";import"./use-sync-external-store-c496049e.js";import"./react-feather-51ae0066.js";import"./prop-types-3c0fe216.js";import"./react-syntax-highlighter-9a881ac9.js";import"./refractor-8f7d0ae4.js";import"./hastscript-6ca0c2af.js";import"./xtend-2b056f5a.js";import"./hast-util-parse-selector-27b18edd.js";import"./parse-entities-cad81707.js";import"./character-entities-legacy-47250ac4.js";import"./character-reference-invalid-465f121e.js";import"./is-decimal-ed65f812.js";import"./is-hexadecimal-c2d19e00.js";import"./is-alphanumerical-02ed39b7.js";import"./is-alphabetical-6a186f20.js";import"./@reduxjs-38ac89bd.js";import"./immer-71561b24.js";import"./redux-ff3a5f57.js";import"./redux-thunk-ef899f4c.js";import"./axios-58d265d6.js";import"./@ant-design-d3804d39.js";import"./rc-util-4d7ee22f.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";import"./classnames-9c02366a.js";import"./resize-observer-polyfill-b51b3958.js";import"./@ctrl-03fa0c70.js";import"./redux-persist-45ccd600.js";import"./rc-resize-observer-5ae9b312.js";import"./rc-motion-19ec1687.js";import"./rc-tooltip-49e836bc.js";import"./@rc-component-a5574673.js";import"./rc-menu-ff5f7e1f.js";import"./rc-overflow-82c0e3e3.js";import"./rc-tabs-e2caeb24.js";import"./rc-dropdown-2e5cf4d5.js";import"./rc-select-cc8ec0f3.js";import"./rc-virtual-list-8b4988e1.js";import"./rc-input-a6089296.js";import"./rc-textarea-d72cf32f.js";import"./rc-field-form-9fdc82dc.js";import"./async-validator-774c2804.js";import"./rc-dialog-07bd4cbe.js";import"./rc-pagination-749cce65.js";import"./throttle-debounce-87e7e444.js";import"./rc-notification-97a32b98.js";import"./rc-slider-feeb3226.js";import"./rc-picker-07511ab1.js";function b(r,o){const a={songs:[],songCount:0};switch(console.log(o),r){case"1":a.songs=o.songs.map(s=>{const e=s.ar.map(c=>c.name).join(",");return{cover:s.al.picUrl,title:s.name,singer:e,album:s.al.name,time:s.dt,id:s.id,mv:s.mv}}),a.songCount=o.songCount;break;case"2":a.songs=o.albums,a.songCount=o.albumCount;break;case"3":a.songs=o.artists,a.songCount=o.artistCount;break;case"4":a.songs=o.playlists,a.songCount=o.playlistCount;break;case"5":a.songs=o.userprofiles,a.songCount=o.userprofileCount;break;case"6":a.songs=o.mvs,a.songCount=o.mvCount;break;case"7":a.songs=o.songs.map(s=>{const e=s.ar.map(c=>c.name).join(",");return{cover:s.al.picUrl,title:s.name,singer:e,album:s.al.name,time:s.dt,id:s.id,mv:s.mv}});break;case"8":a.songs=o.data,a.songCount=o.count;break}return a}function D(r){return{1:"/moviedetails",2:"/playlist",3:100,4:"/playlist",5:1002,6:1004,7:"/moviedetails",8:"/moviedetails"}[r]}function z({data:r}){return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"content-section mt-10",children:[t.jsx("div",{className:"content-section-title",children:"Album"}),t.jsx(E,{data:r,style:{maxHeight:"55vh"}})]})})}function p({data:r,idx:o}){const a=f();function s(e){console.log(o);const c=D(o);a(c+`?id=${e.id||e.videoId}`)}return t.jsx(t.Fragment,{children:t.jsx("div",{className:"apps-card",children:r.map((e,c)=>t.jsxs("div",{className:"app-card",onClick:()=>s(e),children:[t.jsx("span",{children:t.jsx("img",{src:e.picUrl||e.coverImgUrl||e.avatarUrl||e.cover+"?param=430y430"})}),t.jsx("div",{className:"app-card__subtext textoverflow",children:e.name||e.nickname||e.title})]},e.id))})})}const F={1:1,2:10,3:100,4:1e3,5:1002,6:1004,7:1006};function Lt(){const r=f(),[o]=T(),[a,s]=i.useState(1),[e,c]=i.useState("1"),g=o.get("keyword"),[j,y]=i.useState(""),[C,h]=i.useState(0),[d,k]=i.useState(1),[m,u]=i.useState([]),S=[{key:"1",label:"单曲",children:t.jsx(z,{data:m})},{key:"2",label:"专辑",children:t.jsx(p,{data:m,idx:e})},{key:"3",label:"歌手",children:t.jsx(p,{data:m,idx:e})},{key:"4",label:"歌单",children:t.jsx(p,{data:m,idx:e})},{key:"5",label:"用户",children:t.jsx(p,{data:m,idx:e})},{key:"6",label:"MV",children:t.jsx(p,{data:m,idx:e})},{key:"8",label:"动漫",children:t.jsx(p,{data:m,idx:e})}];i.useEffect(()=>{x()},[a]),i.useEffect(()=>{x()},[g]),i.useEffect(()=>{x()},[d]);function x(){u([]),h(0),e=="8"?v("/video/search",{name:g,from:d,size:30}).then(n=>{const l=b(e,n);u(l.songs),h(l.songCount)}):v("/cloudsearch",{keywords:g,type:a,offset:(d-1)*30,limit:30}).then(({result:n})=>{const l=b(e,n);u(l.songs),h(l.songCount)})}function N(n){k(n)}const P=n=>{n.key==="Enter"&&r(`/search?keyword=${encodeURIComponent(j)}`)},w=n=>{y(n.target.value)},M=n=>{s(F[n]),c(n)};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"search-box",children:t.jsx("div",{className:"search-bar",style:{maxWidth:"50%"},children:t.jsx("input",{type:"text",onChange:w,placeholder:"Search",onKeyDown:P})})}),t.jsxs("div",{className:"wrap",children:[t.jsx(K,{activeKey:e,items:S,onChange:M}),m.length!=0&&t.jsx("div",{className:"Pagination",children:t.jsx(U,{theme:{components:{Pagination:{itemActiveBg:"transparent"}}},children:t.jsx(A,{showSizeChanger:!1,current:d,total:C,pageSize:30,onChange:N})})})]})]})}export{Lt as default};