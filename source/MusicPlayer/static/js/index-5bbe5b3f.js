var le=Object.defineProperty,oe=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var K=(t,s,i)=>s in t?le(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,b=(t,s)=>{for(var i in s||(s={}))de.call(s,i)&&K(t,i,s[i]);if(W)for(var i of W(s))me.call(s,i)&&K(t,i,s[i]);return t},T=(t,s)=>oe(t,ce(s));var q=(t,s,i)=>new Promise((c,a)=>{var n=u=>{try{o(i.next(u))}catch(p){a(p)}},l=u=>{try{o(i.throw(u))}catch(p){a(p)}},o=u=>u.done?c(u.value):Promise.resolve(u.value).then(n,l);o((i=i.apply(t,s)).next())});import{r,j as e,a as ue}from"./react-e928f451.js";import{c as he}from"./react-dom-964dd389.js";import{_ as y}from"./react-syntax-highlighter-9a881ac9.js";import{b as pe,N as xe,a as ee}from"./react-router-0a5ed7d1.js";import{S as te,A as w,R as fe,C as ge,a as H,b as X,m as B,T as je,M as ve}from"./antd-edb12fc6.js";import{S as ye,a as Ne,P as Se,b as se,c as Le,R as ke,V as Ce,H as _e,M as Ie,F as be,T as Pe,L as Ee,d as Te,e as we}from"./react-feather-51ae0066.js";import{u as Re,a as Oe,P as Me}from"./react-redux-e07b158c.js";import{c as R,a as Ae}from"./@reduxjs-38ac89bd.js";import{a as ze}from"./axios-58d265d6.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./react-is-e5978b8b.js";import{U as De,G as Ve,l as Ue}from"./@ant-design-d3804d39.js";import{p as qe,a as He,d as Fe,P as $e}from"./redux-persist-45ccd600.js";import{c as Be}from"./redux-ff3a5f57.js";import{H as Qe}from"./react-router-dom-801af91f.js";import"./@babel-5ecd552a.js";import"./scheduler-052770cf.js";import"./refractor-8f7d0ae4.js";import"./hastscript-6ca0c2af.js";import"./xtend-2b056f5a.js";import"./hast-util-parse-selector-27b18edd.js";import"./parse-entities-cad81707.js";import"./character-entities-legacy-47250ac4.js";import"./character-reference-invalid-465f121e.js";import"./is-decimal-ed65f812.js";import"./is-hexadecimal-c2d19e00.js";import"./is-alphanumerical-02ed39b7.js";import"./is-alphabetical-6a186f20.js";import"./@remix-run-42b1b5a4.js";import"./rc-util-4d7ee22f.js";import"./classnames-9c02366a.js";import"./rc-resize-observer-5ae9b312.js";import"./resize-observer-polyfill-b51b3958.js";import"./rc-motion-19ec1687.js";import"./rc-tooltip-49e836bc.js";import"./@rc-component-a5574673.js";import"./rc-menu-ff5f7e1f.js";import"./rc-overflow-82c0e3e3.js";import"./rc-tabs-e2caeb24.js";import"./rc-dropdown-2e5cf4d5.js";import"./rc-select-cc8ec0f3.js";import"./rc-virtual-list-8b4988e1.js";import"./rc-input-a6089296.js";import"./rc-textarea-d72cf32f.js";import"./rc-field-form-9fdc82dc.js";import"./async-validator-774c2804.js";import"./rc-dialog-07bd4cbe.js";import"./rc-pagination-749cce65.js";import"./@ctrl-03fa0c70.js";import"./throttle-debounce-87e7e444.js";import"./rc-notification-97a32b98.js";import"./rc-slider-feeb3226.js";import"./rc-picker-07511ab1.js";import"./prop-types-3c0fe216.js";import"./use-sync-external-store-c496049e.js";import"./immer-71561b24.js";import"./redux-thunk-ef899f4c.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();const Ge=r.lazy(()=>y(()=>import("./index-a1c40fe9.js"),["./index-a1c40fe9.js","./react-e928f451.js","./@babel-5ecd552a.js","./Mk-Table-a8144b10.js","./react-redux-e07b158c.js","./react-dom-964dd389.js","./scheduler-052770cf.js","./hoist-non-react-statics-3f8ebaa8.js","./react-is-e5978b8b.js","./use-sync-external-store-c496049e.js","./antd-edb12fc6.js","./rc-util-4d7ee22f.js","./@ant-design-d3804d39.js","./@emotion-c0b5c018.js","./stylis-fad5b415.js","./classnames-9c02366a.js","./resize-observer-polyfill-b51b3958.js","./@ctrl-03fa0c70.js","./rc-resize-observer-5ae9b312.js","./rc-motion-19ec1687.js","./rc-tooltip-49e836bc.js","./@rc-component-a5574673.js","./rc-menu-ff5f7e1f.js","./rc-overflow-82c0e3e3.js","./rc-tabs-e2caeb24.js","./rc-dropdown-2e5cf4d5.js","./rc-select-cc8ec0f3.js","./rc-virtual-list-8b4988e1.js","./rc-input-a6089296.js","./rc-textarea-d72cf32f.js","./rc-field-form-9fdc82dc.js","./async-validator-774c2804.js","./rc-dialog-07bd4cbe.js","./rc-pagination-749cce65.js","./throttle-debounce-87e7e444.js","./rc-notification-97a32b98.js","./rc-slider-feeb3226.js","./rc-picker-07511ab1.js","./react-feather-51ae0066.js","./prop-types-3c0fe216.js","..\\css\\Mk-Table-29433a01.css","./react-router-0a5ed7d1.js","./@remix-run-42b1b5a4.js","./react-syntax-highlighter-9a881ac9.js","./refractor-8f7d0ae4.js","./hastscript-6ca0c2af.js","./xtend-2b056f5a.js","./hast-util-parse-selector-27b18edd.js","./parse-entities-cad81707.js","./character-entities-legacy-47250ac4.js","./character-reference-invalid-465f121e.js","./is-decimal-ed65f812.js","./is-hexadecimal-c2d19e00.js","./is-alphanumerical-02ed39b7.js","./is-alphabetical-6a186f20.js","./@reduxjs-38ac89bd.js","./immer-71561b24.js","./redux-ff3a5f57.js","./redux-thunk-ef899f4c.js","./axios-58d265d6.js","./redux-persist-45ccd600.js","./react-router-dom-801af91f.js"],import.meta.url)),We=r.lazy(()=>y(()=>import("./index-7a3fda01.js"),["./index-7a3fda01.js","./react-e928f451.js","./@babel-5ecd552a.js","./antd-edb12fc6.js","./rc-util-4d7ee22f.js","./react-is-e5978b8b.js","./react-dom-964dd389.js","./scheduler-052770cf.js","./@ant-design-d3804d39.js","./@emotion-c0b5c018.js","./stylis-fad5b415.js","./classnames-9c02366a.js","./resize-observer-polyfill-b51b3958.js","./@ctrl-03fa0c70.js","./rc-resize-observer-5ae9b312.js","./rc-motion-19ec1687.js","./rc-tooltip-49e836bc.js","./@rc-component-a5574673.js","./rc-menu-ff5f7e1f.js","./rc-overflow-82c0e3e3.js","./rc-tabs-e2caeb24.js","./rc-dropdown-2e5cf4d5.js","./rc-select-cc8ec0f3.js","./rc-virtual-list-8b4988e1.js","./rc-input-a6089296.js","./rc-textarea-d72cf32f.js","./rc-field-form-9fdc82dc.js","./async-validator-774c2804.js","./rc-dialog-07bd4cbe.js","./rc-pagination-749cce65.js","./throttle-debounce-87e7e444.js","./rc-notification-97a32b98.js","./rc-slider-feeb3226.js","./rc-picker-07511ab1.js","./react-feather-51ae0066.js","./prop-types-3c0fe216.js","./react-syntax-highlighter-9a881ac9.js","./refractor-8f7d0ae4.js","./hastscript-6ca0c2af.js","./xtend-2b056f5a.js","./hast-util-parse-selector-27b18edd.js","./parse-entities-cad81707.js","./character-entities-legacy-47250ac4.js","./character-reference-invalid-465f121e.js","./is-decimal-ed65f812.js","./is-hexadecimal-c2d19e00.js","./is-alphanumerical-02ed39b7.js","./is-alphabetical-6a186f20.js","./react-router-0a5ed7d1.js","./@remix-run-42b1b5a4.js","./react-redux-e07b158c.js","./hoist-non-react-statics-3f8ebaa8.js","./use-sync-external-store-c496049e.js","./@reduxjs-38ac89bd.js","./immer-71561b24.js","./redux-ff3a5f57.js","./redux-thunk-ef899f4c.js","./axios-58d265d6.js","./redux-persist-45ccd600.js","./react-router-dom-801af91f.js","..\\css\\index-c4f7cdb3.css"],import.meta.url)),Ke=r.lazy(()=>y(()=>import("./index-eb48baf9.js"),["./index-eb48baf9.js","./react-e928f451.js","./@babel-5ecd552a.js","./react-router-0a5ed7d1.js","./@remix-run-42b1b5a4.js","./antd-edb12fc6.js","./rc-util-4d7ee22f.js","./react-is-e5978b8b.js","./react-dom-964dd389.js","./scheduler-052770cf.js","./@ant-design-d3804d39.js","./@emotion-c0b5c018.js","./stylis-fad5b415.js","./classnames-9c02366a.js","./resize-observer-polyfill-b51b3958.js","./@ctrl-03fa0c70.js","./rc-resize-observer-5ae9b312.js","./rc-motion-19ec1687.js","./rc-tooltip-49e836bc.js","./@rc-component-a5574673.js","./rc-menu-ff5f7e1f.js","./rc-overflow-82c0e3e3.js","./rc-tabs-e2caeb24.js","./rc-dropdown-2e5cf4d5.js","./rc-select-cc8ec0f3.js","./rc-virtual-list-8b4988e1.js","./rc-input-a6089296.js","./rc-textarea-d72cf32f.js","./rc-field-form-9fdc82dc.js","./async-validator-774c2804.js","./rc-dialog-07bd4cbe.js","./rc-pagination-749cce65.js","./throttle-debounce-87e7e444.js","./rc-notification-97a32b98.js","./rc-slider-feeb3226.js","./rc-picker-07511ab1.js","./react-syntax-highlighter-9a881ac9.js","./refractor-8f7d0ae4.js","./hastscript-6ca0c2af.js","./xtend-2b056f5a.js","./hast-util-parse-selector-27b18edd.js","./parse-entities-cad81707.js","./character-entities-legacy-47250ac4.js","./character-reference-invalid-465f121e.js","./is-decimal-ed65f812.js","./is-hexadecimal-c2d19e00.js","./is-alphanumerical-02ed39b7.js","./is-alphabetical-6a186f20.js","./react-feather-51ae0066.js","./prop-types-3c0fe216.js","./react-redux-e07b158c.js","./hoist-non-react-statics-3f8ebaa8.js","./use-sync-external-store-c496049e.js","./@reduxjs-38ac89bd.js","./immer-71561b24.js","./redux-ff3a5f57.js","./redux-thunk-ef899f4c.js","./axios-58d265d6.js","./redux-persist-45ccd600.js","./react-router-dom-801af91f.js","..\\css\\index-335921e3.css"],import.meta.url)),Xe=r.lazy(()=>y(()=>import("./index-c7a147ba.js"),["./index-c7a147ba.js","./react-e928f451.js","./@babel-5ecd552a.js"],import.meta.url)),Ye=r.lazy(()=>y(()=>import("./index-4378ada6.js"),["./index-4378ada6.js","./react-e928f451.js","./@babel-5ecd552a.js","./axios-58d265d6.js","./react-markdown-77106ab8.js","./devlop-bf234217.js","./unified-e1d13cf7.js","./bail-0fe607cf.js","./extend-c466a15e.js","./is-plain-obj-4f87c5a3.js","./trough-77adad87.js","./vfile-80b5a5e0.js","./vfile-message-a7754db5.js","./unist-util-stringify-position-7b16d8bf.js","./remark-parse-12475208.js","./mdast-util-from-markdown-524bf63d.js","./micromark-util-decode-numeric-character-reference-e471f84f.js","./micromark-util-decode-string-c1ef5903.js","./decode-named-character-reference-29ded5ae.js","./micromark-util-normalize-identifier-dfdf0387.js","./micromark-6aafee49.js","./micromark-util-combine-extensions-34ef5cdc.js","./micromark-util-chunked-6f054bfc.js","./micromark-factory-space-7c69a47f.js","./micromark-util-character-b13c1ebf.js","./micromark-core-commonmark-7227f472.js","./micromark-util-classify-character-8bfe3112.js","./micromark-util-resolve-all-8a85a8df.js","./micromark-util-subtokenize-d9357da7.js","./micromark-factory-destination-8c1ab20d.js","./micromark-factory-label-9d51794b.js","./micromark-factory-title-a0fb8f99.js","./micromark-factory-whitespace-b9177f0f.js","./micromark-util-html-tag-name-eaa6d7c0.js","./mdast-util-to-string-bfd41500.js","./remark-rehype-a61a3ac0.js","./mdast-util-to-hast-41271c75.js","./@ungap-d56ab8cf.js","./micromark-util-sanitize-uri-0f35eecd.js","./unist-util-position-bb1bbaf7.js","./trim-lines-00010efb.js","./unist-util-visit-69cf1090.js","./unist-util-visit-parents-7c0a8d5b.js","./unist-util-is-7e122464.js","./hast-util-to-jsx-runtime-1643a316.js","./comma-separated-tokens-9ede81e8.js","./property-information-6ae95972.js","./space-separated-tokens-748f5767.js","./style-to-object-5fccd028.js","./inline-style-parser-e2a37bce.js","./hast-util-whitespace-675c549c.js","./html-url-attributes-cc94b481.js","./antd-edb12fc6.js","./rc-util-4d7ee22f.js","./react-is-e5978b8b.js","./react-dom-964dd389.js","./scheduler-052770cf.js","./@ant-design-d3804d39.js","./@emotion-c0b5c018.js","./stylis-fad5b415.js","./classnames-9c02366a.js","./resize-observer-polyfill-b51b3958.js","./@ctrl-03fa0c70.js","./rc-resize-observer-5ae9b312.js","./rc-motion-19ec1687.js","./rc-tooltip-49e836bc.js","./@rc-component-a5574673.js","./rc-menu-ff5f7e1f.js","./rc-overflow-82c0e3e3.js","./rc-tabs-e2caeb24.js","./rc-dropdown-2e5cf4d5.js","./rc-select-cc8ec0f3.js","./rc-virtual-list-8b4988e1.js","./rc-input-a6089296.js","./rc-textarea-d72cf32f.js","./rc-field-form-9fdc82dc.js","./async-validator-774c2804.js","./rc-dialog-07bd4cbe.js","./rc-pagination-749cce65.js","./throttle-debounce-87e7e444.js","./rc-notification-97a32b98.js","./rc-slider-feeb3226.js","./rc-picker-07511ab1.js","./react-syntax-highlighter-9a881ac9.js","./refractor-8f7d0ae4.js","./hastscript-6ca0c2af.js","./xtend-2b056f5a.js","./hast-util-parse-selector-27b18edd.js","./parse-entities-cad81707.js","./character-entities-legacy-47250ac4.js","./character-reference-invalid-465f121e.js","./is-decimal-ed65f812.js","./is-hexadecimal-c2d19e00.js","./is-alphanumerical-02ed39b7.js","./is-alphabetical-6a186f20.js","..\\css\\index-7f72a9cb.css"],import.meta.url)),Ze=r.lazy(()=>y(()=>import("./index-545ed258.js"),["./index-545ed258.js","./react-e928f451.js","./@babel-5ecd552a.js"],import.meta.url)),Je=r.lazy(()=>y(()=>import("./index-3224fcb2.js"),["./index-3224fcb2.js","./react-e928f451.js","./@babel-5ecd552a.js","..\\css\\index-f396c35f.css"],import.meta.url)),et=r.lazy(()=>y(()=>import("./index-894b289d.js"),["./index-894b289d.js","./react-e928f451.js","./@babel-5ecd552a.js","./react-router-dom-801af91f.js","./react-router-0a5ed7d1.js","./@remix-run-42b1b5a4.js","./Mk-Table-a8144b10.js","./react-redux-e07b158c.js","./react-dom-964dd389.js","./scheduler-052770cf.js","./hoist-non-react-statics-3f8ebaa8.js","./react-is-e5978b8b.js","./use-sync-external-store-c496049e.js","./antd-edb12fc6.js","./rc-util-4d7ee22f.js","./@ant-design-d3804d39.js","./@emotion-c0b5c018.js","./stylis-fad5b415.js","./classnames-9c02366a.js","./resize-observer-polyfill-b51b3958.js","./@ctrl-03fa0c70.js","./rc-resize-observer-5ae9b312.js","./rc-motion-19ec1687.js","./rc-tooltip-49e836bc.js","./@rc-component-a5574673.js","./rc-menu-ff5f7e1f.js","./rc-overflow-82c0e3e3.js","./rc-tabs-e2caeb24.js","./rc-dropdown-2e5cf4d5.js","./rc-select-cc8ec0f3.js","./rc-virtual-list-8b4988e1.js","./rc-input-a6089296.js","./rc-textarea-d72cf32f.js","./rc-field-form-9fdc82dc.js","./async-validator-774c2804.js","./rc-dialog-07bd4cbe.js","./rc-pagination-749cce65.js","./throttle-debounce-87e7e444.js","./rc-notification-97a32b98.js","./rc-slider-feeb3226.js","./rc-picker-07511ab1.js","./react-feather-51ae0066.js","./prop-types-3c0fe216.js","..\\css\\Mk-Table-29433a01.css","./react-syntax-highlighter-9a881ac9.js","./refractor-8f7d0ae4.js","./hastscript-6ca0c2af.js","./xtend-2b056f5a.js","./hast-util-parse-selector-27b18edd.js","./parse-entities-cad81707.js","./character-entities-legacy-47250ac4.js","./character-reference-invalid-465f121e.js","./is-decimal-ed65f812.js","./is-hexadecimal-c2d19e00.js","./is-alphanumerical-02ed39b7.js","./is-alphabetical-6a186f20.js","./@reduxjs-38ac89bd.js","./immer-71561b24.js","./redux-ff3a5f57.js","./redux-thunk-ef899f4c.js","./axios-58d265d6.js","./redux-persist-45ccd600.js","..\\css\\index-ddc33658.css"],import.meta.url)),tt=r.lazy(()=>y(()=>import("./index-7162bea5.js"),["./index-7162bea5.js","./react-e928f451.js","./@babel-5ecd552a.js","./react-router-dom-801af91f.js","./react-router-0a5ed7d1.js","./@remix-run-42b1b5a4.js","./react-player-5748c27b.js","./load-script-d550e3b0.js","./deepmerge-728e666b.js","./memoize-one-608279f8.js","./react-fast-compare-82a97d22.js","./prop-types-3c0fe216.js","./antd-edb12fc6.js","./rc-util-4d7ee22f.js","./react-is-e5978b8b.js","./react-dom-964dd389.js","./scheduler-052770cf.js","./@ant-design-d3804d39.js","./@emotion-c0b5c018.js","./stylis-fad5b415.js","./classnames-9c02366a.js","./resize-observer-polyfill-b51b3958.js","./@ctrl-03fa0c70.js","./rc-resize-observer-5ae9b312.js","./rc-motion-19ec1687.js","./rc-tooltip-49e836bc.js","./@rc-component-a5574673.js","./rc-menu-ff5f7e1f.js","./rc-overflow-82c0e3e3.js","./rc-tabs-e2caeb24.js","./rc-dropdown-2e5cf4d5.js","./rc-select-cc8ec0f3.js","./rc-virtual-list-8b4988e1.js","./rc-input-a6089296.js","./rc-textarea-d72cf32f.js","./rc-field-form-9fdc82dc.js","./async-validator-774c2804.js","./rc-dialog-07bd4cbe.js","./rc-pagination-749cce65.js","./throttle-debounce-87e7e444.js","./rc-notification-97a32b98.js","./rc-slider-feeb3226.js","./rc-picker-07511ab1.js","./react-syntax-highlighter-9a881ac9.js","./refractor-8f7d0ae4.js","./hastscript-6ca0c2af.js","./xtend-2b056f5a.js","./hast-util-parse-selector-27b18edd.js","./parse-entities-cad81707.js","./character-entities-legacy-47250ac4.js","./character-reference-invalid-465f121e.js","./is-decimal-ed65f812.js","./is-hexadecimal-c2d19e00.js","./is-alphanumerical-02ed39b7.js","./is-alphabetical-6a186f20.js","./react-feather-51ae0066.js","./react-redux-e07b158c.js","./hoist-non-react-statics-3f8ebaa8.js","./use-sync-external-store-c496049e.js","./@reduxjs-38ac89bd.js","./immer-71561b24.js","./redux-ff3a5f57.js","./redux-thunk-ef899f4c.js","./axios-58d265d6.js","./redux-persist-45ccd600.js","..\\css\\index-6b7d167e.css"],import.meta.url)),st=r.lazy(()=>y(()=>import("./index-fc5b7f88.js"),["./index-fc5b7f88.js","./react-e928f451.js","./@babel-5ecd552a.js","./react-router-dom-801af91f.js","./react-router-0a5ed7d1.js","./@remix-run-42b1b5a4.js","./Mk-Table-a8144b10.js","./react-redux-e07b158c.js","./react-dom-964dd389.js","./scheduler-052770cf.js","./hoist-non-react-statics-3f8ebaa8.js","./react-is-e5978b8b.js","./use-sync-external-store-c496049e.js","./antd-edb12fc6.js","./rc-util-4d7ee22f.js","./@ant-design-d3804d39.js","./@emotion-c0b5c018.js","./stylis-fad5b415.js","./classnames-9c02366a.js","./resize-observer-polyfill-b51b3958.js","./@ctrl-03fa0c70.js","./rc-resize-observer-5ae9b312.js","./rc-motion-19ec1687.js","./rc-tooltip-49e836bc.js","./@rc-component-a5574673.js","./rc-menu-ff5f7e1f.js","./rc-overflow-82c0e3e3.js","./rc-tabs-e2caeb24.js","./rc-dropdown-2e5cf4d5.js","./rc-select-cc8ec0f3.js","./rc-virtual-list-8b4988e1.js","./rc-input-a6089296.js","./rc-textarea-d72cf32f.js","./rc-field-form-9fdc82dc.js","./async-validator-774c2804.js","./rc-dialog-07bd4cbe.js","./rc-pagination-749cce65.js","./throttle-debounce-87e7e444.js","./rc-notification-97a32b98.js","./rc-slider-feeb3226.js","./rc-picker-07511ab1.js","./react-feather-51ae0066.js","./prop-types-3c0fe216.js","..\\css\\Mk-Table-29433a01.css","./react-syntax-highlighter-9a881ac9.js","./refractor-8f7d0ae4.js","./hastscript-6ca0c2af.js","./xtend-2b056f5a.js","./hast-util-parse-selector-27b18edd.js","./parse-entities-cad81707.js","./character-entities-legacy-47250ac4.js","./character-reference-invalid-465f121e.js","./is-decimal-ed65f812.js","./is-hexadecimal-c2d19e00.js","./is-alphanumerical-02ed39b7.js","./is-alphabetical-6a186f20.js","./@reduxjs-38ac89bd.js","./immer-71561b24.js","./redux-ff3a5f57.js","./redux-thunk-ef899f4c.js","./axios-58d265d6.js","./redux-persist-45ccd600.js","..\\css\\index-521fb74e.css"],import.meta.url)),v=t=>e.jsx(r.Suspense,{fallback:e.jsx(te,{}),children:e.jsx(t,{})}),it=[{path:"/",element:e.jsx(xe,{to:"/home"})},{path:"/home",element:v(Ge)},{path:"/movie",element:v(Xe),meta:{title:"MV"}},{path:"/chat",element:v(Ye),meta:{title:"AI"}},{path:"/ml",element:v(Ke),meta:{title:"乐库"}},{path:"/mini",element:v(We),meta:{title:"迷你播放器"}},{path:"/theme",element:v(Ze),meta:{title:"主题"}},{path:"/test",element:v(Je),meta:{title:"测试"}},{path:"/search",element:v(et),meta:{title:"搜索"}},{path:"/moviedetails",element:v(tt),meta:{title:"电影详情"}},{path:"/playlist",element:v(st),meta:{title:"歌单详情"}}],nt=()=>pe(it),rt=r.createContext({isPlaying:!1,currentTime:0,duration:0,lyricList:[],currentLine:-1,lineHeights:0,volume:70,song:{},seek:()=>{},handlePlayPauseClick:()=>{},handleNextClick:()=>{},handlePrevClick:()=>{},handleLoopClick:()=>{},handleShuffleClick:()=>{},handleVolume:()=>{}}),ie=rt,Y=t=>{const s=Math.floor(t/60).toString().padStart(2,"0"),i=Math.floor(t%60).toString().padStart(2,"0");return`${s}:${i}`},Rs=t=>{let s=parseInt(t/1e3/60),i=parseInt(t/1e3%60);return s<10&&(s="0"+s),i<10&&(i="0"+i),s+":"+i};function Os(t){return new Date(t).toLocaleString()}function at(){var h,j;const{isPlaying:t,duration:s,currentTime:i,song:c,handlePlayPauseClick:a,seek:n,handleLoopClick:l,handlePrevClick:o,handleNextClick:u,handleShuffleClick:p,lyricList:g,currentLine:m}=r.useContext(ie);function f(_){n(_)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mk-box",children:[e.jsx("div",{className:"song-info",children:e.jsxs("div",{className:"flex",children:[e.jsx(w,{shape:"square",size:70,src:c.cover}),e.jsxs("div",{className:"flex flex-col justify-center flex-1  ml-5",children:[e.jsx("div",{className:"title",children:c.title}),e.jsx("div",{className:"des",children:c.singer})]})]})}),e.jsx("div",{className:"w-full flex items-center justify-center",children:e.jsx("div",{className:"w-full px-5",children:e.jsx(fe,{children:e.jsxs(ge,{theme:{components:{Slider:{trackBg:"#000",trackHoverBg:"#000"}}},children:[e.jsx(H,{span:6,children:e.jsx("div",{className:"player_left",children:g.length>0?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{children:(h=g[m])==null?void 0:h.lrc}),e.jsx("span",{children:(j=g[m])==null?void 0:j.tlyric})]}):e.jsx(te,{className:"flex item-center h-full"})})}),e.jsx(H,{span:12,children:e.jsxs("div",{className:"player_center",children:[e.jsxs("div",{className:"player_btn",children:[e.jsx("div",{onClick:p,children:e.jsx(ye,{size:20})}),e.jsx("div",{onClick:o,children:e.jsx(Ne,{size:20})}),e.jsx("div",{onClick:a,children:t?e.jsx(Se,{size:35}):e.jsx(se,{size:35})}),e.jsx("div",{onClick:u,children:e.jsx(Le,{size:20})}),e.jsx("div",{onClick:l,children:e.jsx(ke,{size:20})})]}),e.jsxs("div",{className:"player_slider",children:[e.jsx("span",{children:Y(i)}),e.jsx("div",{className:"w-full px-10",children:e.jsx(X,{value:i,onChange:f,max:s,disabled:!1})}),e.jsx("span",{children:Y(s)})]})]})}),e.jsx(H,{span:6,children:e.jsxs("div",{className:"player_right",children:[e.jsx(Ce,{}),e.jsx("div",{className:"ml-5 w-120",children:e.jsx(X,{defaultValue:30,max:100,disabled:!1})})]})})]})})})})]})})}const ne=R({name:"player",initialState:{currentTime:0,duration:0,count:0,songs:[{id:"27591651",title:"Intro AE 86",singer:"陈光荣",album:"頭文字[イニシャル]D THE MOVIE SOUND TUNE",cover:"http://p4.music.126.net/9KeyafHLjadqSQTRS_tN5Q==/5741649720318487.jpg",src:"http://music.163.com/song/media/outer/url?id=27591651.mp3",time:149e3,mv:""},{id:"409872504",title:"Ninelie",singer:"Aimer",album:"ninelie EP",cover:"http://p3.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg",src:"http://music.163.com/song/media/outer/url?id=409872504.mp3",time:260675,mv:""}],historcontent:[],currentIndex:0,isPlaying:!1,animationPlayState:"paused",currentLyricIndex:-1,isLooping:!1,isShuffling:!1},reducers:{updateSongs(t,s){t.songs[t.currentIndex]=Object.assign(t.songs[t.currentIndex],b({},s))},setCurrentIndex(t,s){t.currentIndex=s.payload},addSongs(t,s){let i=t.songs.length-1;t.songs=t.songs.concat(s.payload),t.currentIndex=i+1},setPlaying:(t,s)=>{t.isPlaying=s.payload},setLooping:(t,s)=>{t.isLooping=s.payload},setShuffling:(t,s)=>{t.isShuffling=s.payload},playNext:t=>{if(t.isShuffling){let s=t.currentIndex;for(;s===t.currentIndex;)s=Math.floor(Math.random()*t.songs.length);t.currentIndex=s}else t.currentIndex=(t.currentIndex+1)%t.songs.length;t.isPlaying=!0},playPrevious:t=>{if(t.isShuffling){let s=t.currentIndex;for(;s===t.currentIndex;)s=Math.floor(Math.random()*t.songs.length);t.currentIndex=s}else t.currentIndex=(t.currentIndex-1+t.songs.length)%t.songs.length;t.isPlaying=!0}}}),{updateSongs:Ms,setCurrentIndex:As,addSongs:zs,setPlaying:F,playNext:lt,playPrevious:ot,setLooping:ct,setShuffling:dt}=ne.actions,mt=ne.reducer,O=ze.create({baseURL:"https://www.xiangzi77.tk/",timeout:1e4,withCredentials:!0});O.interceptors.request.use(t=>(t.params=T(b({},t.params),{timestamp:Date.now()}),t),t=>Promise.reject(t));O.interceptors.response.use(t=>t.data,t=>Promise.reject(t));const S=(t,s)=>O.get(t,{params:s}),$=(t,s)=>O.post(t,s),Z=t=>t?t.split(`
`).map(i=>{const c=i.match(/^\[(\d{2}):(\d{2}\.\d{2,3})\](.*)/);if(c){const a=parseInt(c[1]),n=parseFloat(c[2]),l=c[3].trim();return{time:a*60+n,text:l}}else return null}).filter(i=>i!==null):void 0,ut=(t,s)=>{const i=Z(t||""),c=Z(s||""),a={},n={};i.forEach(o=>{a[o.time]=o.text}),c&&c.forEach(o=>{n[o.time]=o.text});const l=[];for(let o=0;o<i.length;o++){const u=i[o],p=n[u.time]||"",g={time:u.time,lrc:u.text,tlyric:p};l.push(g)}return l},ht=()=>{const{songs:t,currentIndex:s,isLooping:i,isShuffling:c,isPlaying:a}=Re(x=>x.player),n=Oe(),[l]=r.useState(new Audio(t[s].src)),[o,u]=r.useState(0),[p,g]=r.useState(0),[m,f]=r.useState(70),[h,j]=r.useState([]),[_,P]=r.useState(-1),[M,E]=r.useState(144);r.useEffect(()=>(l.addEventListener("ended",()=>I()),l.addEventListener("timeupdate",()=>d()),l.addEventListener("loadedmetadata",()=>L()),()=>{l.removeEventListener("ended",()=>I()),l.removeEventListener("timeupdate",()=>d()),l.removeEventListener("loadedmetadata",()=>L()),n(F(!1))}),[l]),r.useEffect(()=>{l.src=t[s].src,j([]),S("/lyric",{id:t[s].id}).then(x=>{var Q,G;const U=ut((Q=x.lrc)==null?void 0:Q.lyric,(G=x.tlyric)==null?void 0:G.lyric);j(U)})},[s]),r.useEffect(()=>{a?l.play():l.pause()},[a,s]),r.useEffect(()=>{D()},[o]);function d(){u(l.currentTime||0)}function L(){g(l.duration||0)}function I(){i?(l.currentTime=0,l.play(),n(F(!1))):k()}function N(){n(F(!a))}function k(){n(lt())}function C(){n(ot())}function A(){B.success("循环播放"),n(ct(!i))}function z(){B.success("随机播放"),n(dt(!c))}function D(){if(h){for(let x=0;x<h.length;x++)if(x===h.length-1||o<h[x+1].time){P(x);break}if(h.length>0){const U=(_-4)*-20;E(U)}}}const V=x=>{l.currentTime=x},ae=x=>{l.volume=x/100,f(x)};return{isPlaying:a,currentTime:o,duration:p,lyricList:h,currentLine:_,lineHeights:M,song:t[s],seek:V,handlePlayPauseClick:N,handlePrevClick:C,handleLoopClick:A,handleShuffleClick:z,handleNextClick:k,handleVolume:ae,volume:m}},J=[{title:"Apps",children:[{path:"/home",title:"Home",icon:e.jsx(_e,{className:"text-2xl"})},{path:"/ml",title:"Music library",icon:e.jsx(Ie,{className:"text-2xl"})},{path:"/movie",title:"Movie",icon:e.jsx(be,{className:"text-2xl"})},{path:"/mini",title:"Mini Player",icon:e.jsx(Pe,{className:"text-2xl"})},{path:"/chat",title:"AI",icon:e.jsx(se,{className:"text-2xl"})},{path:"/theme",title:"Theme",icon:e.jsx(Ee,{className:"text-2xl"})},{path:"/test",title:"Test",icon:e.jsx(Te,{className:"text-2xl"})}]}];function pt({modelValue:t,onModelValue:s,onLogin:i}){const[c,a]=r.useState("qrcode"),[n,l]=r.useState({phone:"",captcha:""}),[o,u]=r.useState(""),[p,g]=r.useState({message:"Wait to scan code...",avatarUrl:"",nickname:""}),[m,f]=r.useState(60),[h,j]=r.useState(!1);r.useEffect(()=>{if(c!=="qrcode"||!t)return;const d=()=>q(this,null,function*(){let N=localStorage.getItem("unikey")||"";if(!N){const{data:C}=yield S("/login/qr/key");N=C.unikey,localStorage.setItem("unikey",N)}const{data:k}=yield S(`/login/qr/create?key=${N}&qrimg=true`);u(k.qrimg)}),L=()=>q(this,null,function*(){const N={800:"Qr code expired",801:"Wait to scan code...",802:"verify",803:"Authorized login successful"};let k=localStorage.getItem("unikey")||"";const{code:C,nickname:A,avatarUrl:z}=yield S(`/login/qr/check?key=${k}`);let D=N[C];if(g({message:D,nickname:A,avatarUrl:z}),C===800){const{data:V}=yield S("/login/qr/key");k=V.unikey,localStorage.setItem("unikey",k)}else C==802?console.log("授权中"):C==803&&(i(!0),s(!1))});d();const I=setInterval(L,5e3);return()=>{clearInterval(I)}},[c,t]);const _=()=>{j(!0),f(60)};r.useEffect(()=>{let d;return h&&(d=setInterval(()=>{f(L=>L-1)},1e3)),()=>{clearInterval(d)}},[h]),r.useEffect(()=>{m===0&&j(!1)},[m]);const P=(d,L)=>{d.preventDefault(),L==="captcha"&&$("/captcha/verify",{phone:n.phone,captcha:n.captcha}).then(({data:I})=>{I?$("/login/cellphone",{phone:n.phone,captcha:n.captcha}).then(({data:N})=>{i(!0),s(!1)}):B.info("验证码错误")})};function M(){$("/captcha/sent",{phone:n.phone}).then(({data:d})=>{d&&_()})}const E=d=>{a(d.toLowerCase())};return e.jsx(e.Fragment,{children:t&&e.jsxs("div",{className:"login",children:[e.jsx("div",{className:"popup-container",onClick:()=>s(!1)}),e.jsx("div",{className:"popup-content",children:e.jsxs("div",{className:`container ${c!=="qrcode"?"right-panel-active":""}`,id:"container",children:[e.jsx("div",{className:"form-container sign-up-container",children:e.jsxs("form",{onSubmit:d=>P(d,"captcha"),children:[e.jsx("h1",{style:{color:"#000"},children:"Create Account"}),e.jsxs("div",{className:"social-container",children:[e.jsx("a",{href:"#",className:"social",children:e.jsx("i",{className:"fab fa-facebook-f"})}),e.jsx("a",{href:"#",className:"social",children:e.jsx("i",{className:"fab fa-google-plus-g"})}),e.jsx("a",{href:"#",className:"social",children:e.jsx("i",{className:"fab fa-linkedin-in"})})]}),e.jsx("span",{style:{color:"#000"},children:"or use your email for registration"}),e.jsxs("div",{className:"mx-20",children:[e.jsx("input",{value:n.phone,onChange:d=>l(T(b({},n),{phone:d.target.value})),placeholder:"phone"}),e.jsxs("div",{className:"captcha-box",children:[e.jsx("input",{value:n.captcha,onChange:d=>l(T(b({},n),{captcha:d.target.value})),placeholder:"captcha"}),e.jsx("button",{onClick:M,disabled:h,children:h?`${m}`:"Captcha"})]})]}),e.jsx("button",{type:"submit",children:"Login"})]})}),e.jsx("div",{className:"form-container sign-in-container",children:e.jsxs("form",{onSubmit:d=>P(d,"qrcode"),children:[e.jsx("h1",{style:{color:"#000"},children:"Sign in"}),e.jsxs("div",{className:"social-container",children:[e.jsx("a",{href:"#",className:"social",children:e.jsx("i",{className:"fab fa-facebook-f"})}),e.jsx("a",{href:"#",className:"social",children:e.jsx("i",{className:"fab fa-google-plus-g"})}),e.jsx("a",{href:"#",className:"social",children:e.jsx("i",{className:"fab fa-linkedin-in"})})]}),e.jsx("span",{style:{color:"#000"},children:"or use QR Code"}),e.jsxs("div",{className:"mx-20",children:[e.jsx("img",{src:o,alt:"",width:200,height:200}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"mb-10",children:p.message}),p.avatarUrl&&e.jsx(w,{className:"mb-10",src:p.avatarUrl}),e.jsx("span",{children:p.nickname})]})]})]})}),e.jsx("div",{className:"overlay-container",children:e.jsxs("div",{className:"overlay",children:[e.jsxs("div",{className:"overlay-panel overlay-left",children:[e.jsx("h1",{children:"Welcome Back!"}),e.jsx("p",{children:"Go log in using the QR code"}),e.jsx("button",{className:"ghost",id:"signIn",onClick:()=>E("qrcode"),children:"QR code login"})]}),e.jsxs("div",{className:"overlay-panel overlay-right",children:[e.jsx("h1",{children:"Hello, Friend!"}),e.jsx("p",{children:"Login with verification code and travel with us"}),e.jsx("button",{className:"ghost",id:"signUp",onClick:()=>E("captcha"),children:"Verification code login"})]})]})})]})})]})})}function xt(){const t=ee(),[s,i]=r.useState(null),[c,a]=r.useState(!1);function n(m){const f=J[0].children[m].path;t(f)}r.useEffect(()=>{S("login/status").then(({data:m})=>{i(m.profile)})},[]);const[l,o]=r.useState(!1),u=()=>{o(!0)},p=()=>{o(!1),S("/logout").then(m=>{S("login/status").then(({data:f})=>{i(f.profile)})})};function g(){S("login/status").then(({data:m})=>{i(m.profile)})}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"left-side",children:[e.jsx("div",{className:"side-wrapper",children:e.jsx("div",{className:"menu-circle"})}),e.jsx("div",{className:"side-wrapper",children:e.jsxs("div",{className:"user",children:[e.jsx("div",{children:s?e.jsx(w,{size:65,src:s.avatarUrl}):e.jsx(w,{size:65,icon:e.jsx(De,{})})}),e.jsxs("div",{className:"username",children:[s?e.jsx("span",{children:s.nickname}):e.jsx("span",{onClick:()=>a(!0),children:" LogIn"}),e.jsx(je,{icon:e.jsx(Ve,{}),color:"#000",style:{cursor:"pointer"},children:e.jsx("a",{href:"https://github.com/JoshuaZhengsurp/",target:"_blank",rel:"noreferrer",children:"GitHub"})})]})]})}),J.map((m,f)=>e.jsxs("div",{className:"side-wrapper",children:[e.jsx("div",{className:"side-title",children:m.title}),m.children.map((h,j)=>e.jsx("div",{className:"side-menu",onClick:()=>n(j),children:e.jsxs("div",{className:"controls",children:[h.icon,h.title]})},j))]},f)),s&&e.jsxs("div",{className:"side-wrapper",children:[e.jsx("div",{className:"side-title",children:"User Settings"}),e.jsx("div",{className:"side-menu",onClick:u,children:e.jsxs("div",{className:"controls",children:[e.jsx(we,{}),e.jsx("span",{children:"Log out"})]})})]})]}),e.jsx(ve,{title:"Log out",visible:l,onOk:p,onCancel:()=>o(!1),children:e.jsx("p",{children:"Are you sure you want out？"})}),e.jsx(pt,{modelValue:c,onModelValue:m=>a(m),onLogin:g})]})}function ft(){const t=ht(),s=ee();function i(){s(-1)}return e.jsxs(ie.Provider,{value:t,children:[e.jsx("div",{className:"video-bg",children:e.jsx("video",{width:"320",height:"240",autoPlay:!0,loop:!0,muted:!0,children:e.jsx("source",{src:"https://assets.codepen.io/3364143/7btrrd.mp4",type:"video/mp4"})})}),e.jsxs("div",{className:"app",children:[e.jsxs("div",{className:"wrapper",children:[e.jsx(xt,{}),e.jsxs("div",{className:"flex flex-col app-main",children:[e.jsx(nt,{}),e.jsx("div",{className:"float",onClick:i,children:e.jsxs("div",{className:"button-f",children:[e.jsx(Ue,{}),"Back"]})})]})]}),e.jsx(at,{})]}),e.jsx("div",{className:"overlay-app"})]})}function gt(){return e.jsx(e.Fragment,{children:e.jsx(ft,{})})}const jt=R({name:"counter",initialState:{count:0},reducers:{addCount(t){t.count++},decreaseCount(t){t.count--},addTonum(t,s){t.count=s.payload}}}),vt=jt.reducer,yt=R({name:"channel",initialState:{channelList:[]},reducers:{setChannels(t,s){t.channelList=s.payload}}}),Nt=yt.reducer,St=R({name:"global",initialState:{sideIdx:0},reducers:{setSideIdx(t,s){t.sideIdx=s.payload}}}),Lt=St.reducer,kt={key:"root",storage:Fe},Ct=qe(kt,Be({counter:vt,channel:Nt,player:mt,global:Lt})),re=Ae({middleware:t=>t({serializableCheck:!1}),reducer:Ct}),_t=He(re);he.createRoot(document.getElementById("root")).render(e.jsx(ue.StrictMode,{children:e.jsx(Qe,{children:e.jsx(Me,{store:re,children:e.jsx($e,{loading:null,persistor:_t,children:e.jsx(gt,{})})})})}));export{ie as M,Rs as a,zs as b,Y as f,S as h,F as s,Os as t};
