(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ie(){}const _h=t=>t;function Eh(t){return t()}function vc(){return Object.create(null)}function rt(t){t.forEach(Eh)}function Ka(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _g(t){return Object.keys(t).length===0}function Eg(t,...e){if(t==null)return Ie;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ut(t,e,n){t.$$.on_destroy.push(Eg(e,n))}function lt(t,e,n){return t.set(n),e}const Ih=typeof window<"u";let Ig=Ih?()=>window.performance.now():()=>Date.now(),za=Ih?t=>requestAnimationFrame(t):Ie;const Wn=new Set;function Th(t){Wn.forEach(e=>{e.c(t)||(Wn.delete(e),e.f())}),Wn.size!==0&&za(Th)}function Tg(t){let e;return Wn.size===0&&za(Th),{promise:new Promise(n=>{Wn.add(e={c:t,f:n})}),abort(){Wn.delete(e)}}}function p(t,e){t.appendChild(e)}function Sh(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Sg(t){const e=v("style");return Cg(Sh(t),e),e.sheet}function Cg(t,e){return p(t.head||t,e),e.sheet}function J(t,e,n){t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function fi(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function re(t){return document.createTextNode(t)}function A(){return re(" ")}function Wa(){return re("")}function j(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function tr(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ch(t){let e;return{p(...n){e=n,e.forEach(s=>t.push(s))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function hr(t){return t===""?null:+t}function kg(t){return Array.from(t.childNodes)}function Ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ge(t,e){t.value=e??""}function Ag(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function dr(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Pg(t){for(const e of t.options)if(!e.disabled)return e}function kh(t){const e=t.querySelector(":checked")||Pg(t);return e&&e.__value}function zi(t,e,n){t.classList[n?"add":"remove"](e)}function Ah(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}const fr=new Map;let pr=0;function Dg(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ng(t,e){const n={stylesheet:Sg(e),rules:{}};return fr.set(t,n),n}function wc(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let w=0;w<=1;w+=l){const C=e+(n-e)*r(w);c+=w*100+`%{${o(C,1-C)}}
`}const u=c+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Dg(u)}_${a}`,d=Sh(t),{stylesheet:g,rules:m}=fr.get(d)||Ng(d,t);m[h]||(m[h]=!0,g.insertRule(`@keyframes ${h} ${u}`,g.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${h} ${s}ms linear ${i}ms 1 both`,pr+=1,h}function Rg(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),pr-=i,pr||Og())}function Og(){za(()=>{pr||(fr.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&W(e)}),fr.clear())})}let zs;function Ms(t){zs=t}function Ph(){if(!zs)throw new Error("Function called outside component initialization");return zs}function Dh(t){Ph().$$.on_mount.push(t)}function ps(){const t=Ph();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Ah(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Lg(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const jn=[],bc=[];let Gn=[];const _c=[],Mg=Promise.resolve();let ta=!1;function Ug(){ta||(ta=!0,Mg.then(Nh))}function Ht(t){Gn.push(t)}const Po=new Set;let Vn=0;function Nh(){if(Vn!==0)return;const t=zs;do{try{for(;Vn<jn.length;){const e=jn[Vn];Vn++,Ms(e),xg(e.$$)}}catch(e){throw jn.length=0,Vn=0,e}for(Ms(null),jn.length=0,Vn=0;bc.length;)bc.pop()();for(let e=0;e<Gn.length;e+=1){const n=Gn[e];Po.has(n)||(Po.add(n),n())}Gn.length=0}while(jn.length);for(;_c.length;)_c.pop()();ta=!1,Po.clear(),Ms(t)}function xg(t){if(t.fragment!==null){t.update(),rt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ht)}}function Fg(t){const e=[],n=[];Gn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Gn=e}let Cs;function Vg(){return Cs||(Cs=Promise.resolve(),Cs.then(()=>{Cs=null})),Cs}function Do(t,e,n){t.dispatchEvent(Ah(`${e?"intro":"outro"}${n}`))}const nr=new Set;let Ft;function Ws(){Ft={r:0,c:[],p:Ft}}function Gs(){Ft.r||rt(Ft.c),Ft=Ft.p}function ye(t,e){t&&t.i&&(nr.delete(t),t.i(e))}function ke(t,e,n,s){if(t&&t.o){if(nr.has(t))return;nr.add(t),Ft.c.push(()=>{nr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Bg={duration:0};function ns(t,e,n,s){const i={direction:"both"};let r=e(t,n,i),o=s?0:1,a=null,l=null,c=null;function u(){c&&Rg(t,c)}function h(g,m){const y=g.b-o;return m*=Math.abs(y),{a:o,b:g.b,d:y,duration:m,start:g.start,end:g.start+m,group:g.group}}function d(g){const{delay:m=0,duration:y=300,easing:w=_h,tick:C=Ie,css:T}=r||Bg,P={start:Ig()+m,b:g};g||(P.group=Ft,Ft.r+=1),a||l?l=P:(T&&(u(),c=wc(t,o,g,y,m,w,T)),g&&C(0,1),a=h(P,y),Ht(()=>Do(t,g,"start")),Tg(S=>{if(l&&S>l.start&&(a=h(l,y),l=null,Do(t,a.b,"start"),T&&(u(),c=wc(t,o,a.b,a.duration,0,w,r.css))),a){if(S>=a.end)C(o=a.b,1-o),Do(t,a.b,"end"),l||(a.b?u():--a.group.r||rt(a.group.c)),a=null;else if(S>=a.start){const k=S-a.start;o=a.a+a.d*w(k/a.duration),C(o,1-o)}}return!!(a||l)}))}return{run(g){Ka(r)?Vg().then(()=>{r=r(i),d(g)}):d(g)},end(){u(),a=l=null}}}function It(t){t&&t.c()}function mt(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Ht(()=>{const o=t.$$.on_mount.map(Eh).filter(Ka);t.$$.on_destroy?t.$$.on_destroy.push(...o):rt(o),t.$$.on_mount=[]}),r.forEach(Ht)}function yt(t,e){const n=t.$$;n.fragment!==null&&(Fg(n.after_update),rt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function jg(t,e){t.$$.dirty[0]===-1&&(jn.push(t),Ug(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function kt(t,e,n,s,i,r,o,a=[-1]){const l=zs;Ms(t);const c=t.$$={fragment:null,ctx:[],props:r,update:Ie,not_equal:i,bound:vc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:vc(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...g)=>{const m=g.length?g[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&jg(t,h)),d}):[],c.update(),u=!0,rt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=kg(e.target);c.fragment&&c.fragment.l(h),h.forEach(W)}else c.fragment&&c.fragment.c();e.intro&&ye(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),Nh()}Ms(l)}class At{$destroy(){yt(this,1),this.$destroy=Ie}$on(e,n){if(!Ka(n))return Ie;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!_g(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bn=[];function gs(t,e=Ie){let n;const s=new Set;function i(a){if(_t(t,a)&&(t=a,n)){const l=!Bn.length;for(const c of s)c[1](),Bn.push(c,t);if(l){for(let c=0;c<Bn.length;c+=2)Bn[c][0](Bn[c+1]);Bn.length=0}}}function r(a){i(a(t))}function o(a,l=Ie){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||Ie),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const No=gs({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),na=gs(""),sa=gs(""),Us=gs(""),Dt=gs(""),As=gs(null);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new $g;const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $g extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(t){const e=Rh(t);return Oh.encodeByteArray(e,!0)},gr=function(t){return Hg(t).replace(/\./g,"")},Lh=function(t){try{return Oh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=()=>Kg().__FIREBASE_DEFAULTS__,Wg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lh(t[1]);return e&&JSON.parse(e)},Ga=()=>{try{return zg()||Wg()||Gg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mh=t=>{var e,n;return(n=(e=Ga())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qg=t=>{const e=Mh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Yg=()=>{var t;return(t=Ga())===null||t===void 0?void 0:t.config},Uh=t=>{var e;return(e=Ga())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gr(JSON.stringify(n)),gr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function em(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nm(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sm(){try{return typeof indexedDB=="object"}catch{return!1}}function im(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rm,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?om(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,s)}}function om(t,e){return t.replace(am,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const am=/\{\$([^}]+)}/g;function lm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ec(r)&&Ec(o)){if(!mr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ec(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cm(t,e){const n=new um(t,e);return n.subscribe.bind(n)}class um{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ro),i.error===void 0&&(i.error=Ro),i.complete===void 0&&(i.complete=Ro);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ro(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pm(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fm(t){return t===wn?void 0:t}function pm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const mm={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},ym=ue.INFO,vm={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},wm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=vm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=ym,this._logHandler=wm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const bm=(t,e)=>e.some(n=>t instanceof n);let Ic,Tc;function _m(){return Ic||(Ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Em(){return Tc||(Tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xh=new WeakMap,ia=new WeakMap,Fh=new WeakMap,Oo=new WeakMap,Ya=new WeakMap;function Im(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(sn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xh.set(n,t)}).catch(()=>{}),Ya.set(e,t),e}function Tm(t){if(ia.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ia.set(t,e)}let ra={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sm(t){ra=t(ra)}function Cm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lo(this),e,...n);return Fh.set(s,e.sort?e.sort():[e]),sn(s)}:Em().includes(t)?function(...e){return t.apply(Lo(this),e),sn(xh.get(this))}:function(...e){return sn(t.apply(Lo(this),e))}}function km(t){return typeof t=="function"?Cm(t):(t instanceof IDBTransaction&&Tm(t),bm(t,_m())?new Proxy(t,ra):t)}function sn(t){if(t instanceof IDBRequest)return Im(t);if(Oo.has(t))return Oo.get(t);const e=km(t);return e!==t&&(Oo.set(t,e),Ya.set(e,t)),e}const Lo=t=>Ya.get(t);function Am(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=sn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Pm=["get","getKey","getAll","getAllKeys","count"],Dm=["put","add","delete","clear"],Mo=new Map;function Sc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mo.get(e))return Mo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Dm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Pm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Mo.set(e,r),r}Sm(t=>({...t,get:(e,n,s)=>Sc(e,n)||t.get(e,n,s),has:(e,n)=>!!Sc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oa="@firebase/app",Cc="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Qa("@firebase/app"),Om="@firebase/app-compat",Lm="@firebase/analytics-compat",Mm="@firebase/analytics",Um="@firebase/app-check-compat",xm="@firebase/app-check",Fm="@firebase/auth",Vm="@firebase/auth-compat",Bm="@firebase/database",jm="@firebase/database-compat",qm="@firebase/functions",$m="@firebase/functions-compat",Hm="@firebase/installations",Km="@firebase/installations-compat",zm="@firebase/messaging",Wm="@firebase/messaging-compat",Gm="@firebase/performance",Qm="@firebase/performance-compat",Ym="@firebase/remote-config",Xm="@firebase/remote-config-compat",Jm="@firebase/storage",Zm="@firebase/storage-compat",ey="@firebase/firestore",ty="@firebase/firestore-compat",ny="firebase",sy="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="[DEFAULT]",iy={[oa]:"fire-core",[Om]:"fire-core-compat",[Mm]:"fire-analytics",[Lm]:"fire-analytics-compat",[xm]:"fire-app-check",[Um]:"fire-app-check-compat",[Fm]:"fire-auth",[Vm]:"fire-auth-compat",[Bm]:"fire-rtdb",[jm]:"fire-rtdb-compat",[qm]:"fire-fn",[$m]:"fire-fn-compat",[Hm]:"fire-iid",[Km]:"fire-iid-compat",[zm]:"fire-fcm",[Wm]:"fire-fcm-compat",[Gm]:"fire-perf",[Qm]:"fire-perf-compat",[Ym]:"fire-rc",[Xm]:"fire-rc-compat",[Jm]:"fire-gcs",[Zm]:"fire-gcs-compat",[ey]:"fire-fst",[ty]:"fire-fst-compat","fire-js":"fire-js",[ny]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Map,la=new Map;function ry(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(la.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;la.set(e,t);for(const n of yr.values())ry(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rn=new pi("app","Firebase",oy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=sy;function Vh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:aa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=Yg()),!n)throw rn.create("no-options");const r=yr.get(i);if(r){if(mr(n,r.options)&&mr(s,r.config))return r;throw rn.create("duplicate-app",{appName:i})}const o=new gm(i);for(const l of la.values())o.addComponent(l);const a=new ay(n,s,o);return yr.set(i,a),a}function Bh(t=aa){const e=yr.get(t);if(!e&&t===aa)return Vh();if(!e)throw rn.create("no-app",{appName:t});return e}function on(t,e,n){var s;let i=(s=iy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}ss(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebase-heartbeat-database",cy=1,Qs="firebase-heartbeat-store";let Uo=null;function jh(){return Uo||(Uo=Am(ly,cy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qs)}}}).catch(t=>{throw rn.create("idb-open",{originalErrorMessage:t.message})})),Uo}async function uy(t){try{return(await jh()).transaction(Qs).objectStore(Qs).get(qh(t))}catch(e){if(e instanceof Yt)An.warn(e.message);else{const n=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function kc(t,e){try{const s=(await jh()).transaction(Qs,"readwrite");return await s.objectStore(Qs).put(e,qh(t)),s.done}catch(n){if(n instanceof Yt)An.warn(n.message);else{const s=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(s.message)}}}function qh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=1024,dy=30*24*60*60*1e3;class fy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ac();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=dy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ac(),{heartbeatsToSend:n,unsentEntries:s}=py(this._heartbeatsCache.heartbeats),i=gr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ac(){return new Date().toISOString().substring(0,10)}function py(t,e=hy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Pc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sm()?im().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pc(t){return gr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){ss(new kn("platform-logger",e=>new Nm(e),"PRIVATE")),ss(new kn("heartbeat",e=>new fy(e),"PRIVATE")),on(oa,Cc,t),on(oa,Cc,"esm2017"),on("fire-js","")}my("");function Ja(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function $h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yy=$h,Hh=new pi("auth","Firebase",$h());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=new Qa("@firebase/auth");function sr(t,...e){Dc.logLevel<=ue.ERROR&&Dc.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Za(t,...e)}function Rt(t,...e){return Za(t,...e)}function vy(t,e,n){const s=Object.assign(Object.assign({},yy()),{[e]:n});return new pi("auth","Firebase",s).create(e,{appName:t.name})}function Za(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hh.create(t,...e)}function B(t,e,...n){if(!t)throw Za(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function Kt(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Map;function Bt(t){Kt(t instanceof Function,"Expected a class definition");let e=Nc.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(mr(r,e??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function by(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _y(){return Rc()==="http:"||Rc()==="https:"}function Rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_y()||em()||"connection"in navigator)?navigator.onLine:!0}function Iy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zg()||tm()}get(){return Ey()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new yi(3e4,6e4);function vi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wi(t,e,n,s,i={}){return zh(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=gi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Kh.fetch()(Wh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function zh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ty),e);try{const i=new Cy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw vy(t,u,c);Tt(t,u)}}catch(i){if(i instanceof Yt)throw i;Tt(t,"internal-error",{message:String(i)})}}async function bi(t,e,n,s,i={}){const r=await wi(t,e,n,s,i);return"mfaPendingCredential"in r&&Tt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Wh(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?el(t.config,i):`${t.config.apiScheme}://${i}`}class Cy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),Sy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Rt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(t,e){return wi(t,"POST","/v1/accounts:delete",e)}async function Ay(t,e){return wi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Py(t,e=!1){const n=xe(t),s=await n.getIdToken(e),i=tl(s);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:xs(xo(i.auth_time)),issuedAtTime:xs(xo(i.iat)),expirationTime:xs(xo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xo(t){return Number(t)*1e3}function tl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lh(n);return i?JSON.parse(i):(sr("Failed to decode base64 JWT payload"),null)}catch(i){return sr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dy(t){const e=tl(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yt&&Ny(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ny({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ys(t,Ay(n,{idToken:s}));B(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?My(r.providerUserInfo):[],a=Ly(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Gh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Oy(t){const e=xe(t);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ly(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function My(t){return t.map(e=>{var{providerId:n}=e,s=Ja(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uy(t,e){const n=await zh(t,{},async()=>{const s=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Wh(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Kh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Uy(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Xs;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ja(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ry(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Py(this,e)}reload(){return Oy(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await vr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ys(this,ky(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:S,isAnonymous:k,providerData:D,stsTokenManager:F}=n;B(P&&F,e,"internal-error");const Y=Xs.fromJSON(this.name,F);B(typeof P=="string",e,"internal-error"),Xt(h,e.name),Xt(d,e.name),B(typeof S=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),Xt(g,e.name),Xt(m,e.name),Xt(y,e.name),Xt(w,e.name),Xt(C,e.name),Xt(T,e.name);const R=new Tn({uid:P,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:k,photoURL:m,phoneNumber:g,tenantId:y,stsTokenManager:Y,createdAt:C,lastLoginAt:T});return D&&Array.isArray(D)&&(R.providerData=D.map(G=>Object.assign({},G))),w&&(R._redirectEventId=w),R}static async _fromIdTokenResponse(e,n,s=!1){const i=new Xs;i.updateFromServerResponse(n);const r=new Tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await vr(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qh.type="NONE";const Oc=Qh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class Qn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ir(this.userKey,i.apiKey,r),this.fullPersistenceKey=ir("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Qn(Bt(Oc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Bt(Oc);const o=ir(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Tn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Qn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Qn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ed(e))return"Blackberry";if(td(e))return"Webos";if(nl(e))return"Safari";if((e.includes("chrome/")||Xh(e))&&!e.includes("edge/"))return"Chrome";if(Zh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yh(t=Ye()){return/firefox\//i.test(t)}function nl(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xh(t=Ye()){return/crios\//i.test(t)}function Jh(t=Ye()){return/iemobile/i.test(t)}function Zh(t=Ye()){return/android/i.test(t)}function ed(t=Ye()){return/blackberry/i.test(t)}function td(t=Ye()){return/webos/i.test(t)}function Vr(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xy(t=Ye()){var e;return Vr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fy(){return nm()&&document.documentMode===10}function nd(t=Ye()){return Vr(t)||Zh(t)||td(t)||ed(t)||/windows phone/i.test(t)||Jh(t)}function Vy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t,e=[]){let n;switch(t){case"Browser":n=Lc(Ye());break;case"Worker":n=`${Lc(Ye())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mc(this),this.idTokenSubscription=new Mc(this),this.beforeStateQueue=new By(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function _i(t){return xe(t)}class Mc{constructor(e){this.auth=e,this.observer=null,this.addObserver=cm(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function qy(t,e,n){const s=_i(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=id(e),{host:o,port:a}=$y(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Hy()}function id(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $y(t){const e=id(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Uc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Uc(o)}}}function Uc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function Ky(t,e){return wi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(t,e){return bi(t,"POST","/v1/accounts:signInWithPassword",vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",vi(t,e))}async function Gy(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends sl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Js(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Js(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return zy(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wy(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ky(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gy(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t,e){return bi(t,"POST","/v1/accounts:signInWithIdp",vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="http://localhost";class Pn extends sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ja(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Pn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Yn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}buildRequest(){const e={requestUri:Qy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xy(t){const e=Ps(Ds(t)).link,n=e?Ps(Ds(e)).deep_link_id:null,s=Ps(Ds(t)).deep_link_id;return(s?Ps(Ds(s)).link:null)||s||n||e||t}class il{constructor(e){var n,s,i,r,o,a;const l=Ps(Ds(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Yy((i=l.mode)!==null&&i!==void 0?i:null);B(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Xy(e);try{return new il(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return Js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=il.parseLink(n);return B(s,"argument-error"),Js._fromEmailAndCode(e,s.code,s.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends rd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ei{constructor(){super("facebook.com")}static credential(e){return Pn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zt.credential(n,s)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ei{constructor(){super("github.com")}static credential(e){return Pn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ei{constructor(){super("twitter.com")}static credential(e,n){return Pn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return tn.credential(n,s)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(t,e){return bi(t,"POST","/v1/accounts:signUp",vi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Tn._fromIdTokenResponse(e,s,i),o=xc(s);return new Dn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=xc(s);return new Dn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function xc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Yt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,wr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new wr(e,n,s,i)}}function od(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wr._fromErrorAndOperation(t,r,e,s):r})}async function Zy(t,e,n=!1){const s=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ys(t,od(s,i,e,t),n);B(r.idToken,s,"internal-error");const o=tl(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),Dn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Tt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t,e,n=!1){const s="signIn",i=await od(t,s,e),r=await Dn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function tv(t,e){return ad(_i(t),e)}async function nv(t,e,n){const s=_i(t),i=await Jy(s,{returnSecureToken:!0,email:e,password:n}),r=await Dn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function Fc(t,e,n){return tv(xe(t),ms.credential(e,n))}function sv(t,e,n,s){return xe(t).onIdTokenChanged(e,n,s)}function iv(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function rv(t){return xe(t).signOut()}const br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(){const t=Ye();return nl(t)||Vr(t)}const av=1e3,lv=10;class cd extends ld{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ov()&&Vy(),this.fallbackToPolling=nd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Fy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cd.type="LOCAL";const cv=cd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends ld{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ud.type="SESSION";const hd=ud;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Br(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await uv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Br.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=rl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function dv(t){Ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function fv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gv(){return dd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="firebaseLocalStorageDb",mv=1,_r="firebaseLocalStorage",pd="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jr(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function yv(){const t=indexedDB.deleteDatabase(fd);return new Ii(t).toPromise()}function ua(){const t=indexedDB.open(fd,mv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_r,{keyPath:pd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_r)?e(s):(s.close(),await yv(),e(await ua()))})})}async function Vc(t,e,n){const s=jr(t,!0).put({[pd]:e,value:n});return new Ii(s).toPromise()}async function vv(t,e){const n=jr(t,!1).get(e),s=await new Ii(n).toPromise();return s===void 0?null:s.value}function Bc(t,e){const n=jr(t,!0).delete(e);return new Ii(n).toPromise()}const wv=800,bv=3;class gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Br._getInstance(gv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fv(),!this.activeServiceWorker)return;this.sender=new hv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await Vc(e,br,"1"),await Bc(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=jr(i,!1).getAll();return new Ii(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gd.type="LOCAL";const _v=gd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Iv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Rt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Ev().appendChild(s)})}function Tv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t,e){return e?Bt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cv(t){return ad(t.auth,new ol(t),t.bypassAuthState)}function kv(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),ev(n,new ol(t),t.bypassAuthState)}async function Av(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Zy(n,new ol(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cv;case"linkViaPopup":case"linkViaRedirect":return Av;case"reauthViaPopup":case"reauthViaRedirect":return kv;default:Tt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new yi(2e3,1e4);class Kn extends md{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Pv.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="pendingRedirect",rr=new Map;class Nv extends md{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const s=await Rv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rv(t,e){const n=Mv(e),s=Lv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Ov(t,e){rr.set(t._key(),e)}function Lv(t){return Bt(t._redirectPersistence)}function Mv(t){return ir(Dv,t.config.apiKey,t.name)}async function Uv(t,e,n=!1){const s=_i(t),i=Sv(s,e),o=await new Nv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=10*60*1e3;class Fv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!yd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xv&&this.cachedEventUids.clear(),this.cachedEventUids.has(jc(e))}saveEventToCache(e){this.cachedEventUids.add(jc(e)),this.lastProcessedEventTime=Date.now()}}function jc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(t,e={}){return wi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qv=/^https?/;async function $v(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bv(t);for(const n of e)try{if(Hv(n))return}catch{}Tt(t,"unauthorized-domain")}function Hv(t){const e=ca(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!qv.test(n))return!1;if(jv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new yi(3e4,6e4);function qc(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zv(t){return new Promise((e,n)=>{var s,i,r;function o(){qc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qc(),n(Rt(t,"network-request-failed"))},timeout:Kv.get()})}if(!((i=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ot().gapi)===null||r===void 0)&&r.load)o();else{const a=Tv("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},Iv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw or=null,e})}let or=null;function Wv(t){return or=or||zv(t),or}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new yi(5e3,15e3),Qv="__/auth/iframe",Yv="emulator/auth/iframe",Xv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zv(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?el(e,Yv):`https://${t.config.authDomain}/${Qv}`,s={apiKey:e.apiKey,appName:t.name,v:mi},i=Jv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${gi(s).slice(1)}`}async function ew(t){const e=await Wv(t),n=Ot().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Zv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=Ot().setTimeout(()=>{r(o)},Gv.get());function l(){Ot().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nw=500,sw=600,iw="_blank",rw="http://localhost";class $c{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ow(t,e,n,s=nw,i=sw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ye().toLowerCase();n&&(a=Xh(c)?iw:n),Yh(c)&&(e=e||rw,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(xy(c)&&a!=="_self")return aw(e||"",a),new $c(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new $c(h)}function aw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="__/auth/handler",cw="emulator/auth/handler";function Hc(t,e,n,s,i,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:mi,eventId:i};if(e instanceof rd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ei){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${uw(t)}?${gi(a).slice(1)}`}function uw({config:t}){return t.emulator?el(t,cw):`https://${t.authDomain}/${lw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="webStorageSupport";class hw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hd,this._completeRedirectFn=Uv,this._overrideRedirectResult=Ov}async _openPopup(e,n,s,i){var r;Kt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Hc(e,n,s,ca(),i);return ow(e,o,rl())}async _openRedirect(e,n,s,i){return await this._originValidation(e),dv(Hc(e,n,s,ca(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ew(e),s=new Fv(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fo,{type:Fo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Fo];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$v(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nd()||nl()||Vr()}}const dw=hw;var Kc="@firebase/auth",zc="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gw(t){ss(new kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{B(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sd(t)},u=new jy(a,l,c);return by(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ss(new kn("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(s=>new fw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Kc,zc,pw(t)),on(Kc,zc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=5*60,yw=Uh("authIdTokenMaxAge")||mw;let Wc=null;const vw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yw)return;const i=n==null?void 0:n.token;Wc!==i&&(Wc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ww(t=Bh()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wy(t,{popupRedirectResolver:dw,persistence:[_v,cv,hd]}),s=Uh("authTokenSyncURL");if(s){const r=vw(s);iv(n,r,()=>r(n.currentUser)),sv(n,o=>r(o))}const i=Mh("auth");return i&&qy(n,`http://${i}`),n}gw("Browser");var bw="firebase",_w="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(bw,_w,"app");var Ew=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,al=al||{},$=Ew||self;function Er(){}function qr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ti(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Iw(t){return Object.prototype.hasOwnProperty.call(t,Vo)&&t[Vo]||(t[Vo]=++Tw)}var Vo="closure_uid_"+(1e9*Math.random()>>>0),Tw=0;function Sw(t,e,n){return t.call.apply(t.bind,arguments)}function Cw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ge=Sw:Ge=Cw,Ge.apply(null,arguments)}function Gi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function pn(){this.s=this.s,this.o=this.o}var kw=0;pn.prototype.s=!1;pn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),kw!=0)&&Iw(this)};pn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ll(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Gc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qr(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Aw=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Er,e),$.removeEventListener("test",Er,e)}catch{}return t}();function Ir(t){return/^[\s\xa0]*$/.test(t)}var Qc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Bo(t,e){return t<e?-1:t>e?1:0}function $r(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Nt(t){return $r().indexOf(t)!=-1}function cl(t){return cl[" "](t),t}cl[" "]=Er;function Pw(t){var e=Rw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Dw=Nt("Opera"),is=Nt("Trident")||Nt("MSIE"),wd=Nt("Edge"),ha=wd||is,bd=Nt("Gecko")&&!($r().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge"))&&!(Nt("Trident")||Nt("MSIE"))&&!Nt("Edge"),Nw=$r().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge");function _d(){var t=$.document;return t?t.documentMode:void 0}var Tr;e:{var jo="",qo=function(){var t=$r();if(bd)return/rv:([^\);]+)(\)|;)/.exec(t);if(wd)return/Edge\/([\d\.]+)/.exec(t);if(is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Nw)return/WebKit\/(\S+)/.exec(t);if(Dw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qo&&(jo=qo?qo[1]:""),is){var $o=_d();if($o!=null&&$o>parseFloat(jo)){Tr=String($o);break e}}Tr=jo}var Rw={};function Ow(){return Pw(function(){let t=0;const e=Qc(String(Tr)).split("."),n=Qc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Bo(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Bo(i[2].length==0,r[2].length==0)||Bo(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var da;if($.document&&is){var Yc=_d();da=Yc||parseInt(Tr,10)||void 0}else da=void 0;var Lw=da;function Zs(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bd){e:{try{cl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Mw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zs.X.h.call(this)}}qe(Zs,Qe);var Mw={2:"touch",3:"pen",4:"mouse"};Zs.prototype.h=function(){Zs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Si="closure_listenable_"+(1e6*Math.random()|0),Uw=0;function xw(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Uw,this.ba=this.ea=!1}function Hr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ul(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ed(t){const e={};for(const n in t)e[n]=t[n];return e}const Xc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Id(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Xc.length;r++)n=Xc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Kr(t){this.src=t,this.g={},this.h=0}Kr.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=pa(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new xw(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function fa(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=vd(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Hr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pa(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var hl="closure_lm_"+(1e6*Math.random()|0),Ho={};function Td(t,e,n,s,i){if(s&&s.once)return Cd(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Td(t,e[r],n,s,i);return null}return n=pl(n),t&&t[Si]?t.N(e,n,Ti(s)?!!s.capture:!!s,i):Sd(t,e,n,!1,s,i)}function Sd(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ti(i)?!!i.capture:!!i,a=fl(t);if(a||(t[hl]=a=new Kr(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Fw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Aw||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ad(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fw(){function t(n){return e.call(t.src,t.listener,n)}const e=Vw;return t}function Cd(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Cd(t,e[r],n,s,i);return null}return n=pl(n),t&&t[Si]?t.O(e,n,Ti(s)?!!s.capture:!!s,i):Sd(t,e,n,!0,s,i)}function kd(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)kd(t,e[r],n,s,i);else s=Ti(s)?!!s.capture:!!s,n=pl(n),t&&t[Si]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=pa(r,n,s,i),-1<n&&(Hr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=fl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pa(e,n,s,i)),(n=-1<t?e[t]:null)&&dl(n))}function dl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Si])fa(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ad(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=fl(e))?(fa(n,t),n.h==0&&(n.src=null,e[hl]=null)):Hr(t)}}}function Ad(t){return t in Ho?Ho[t]:Ho[t]="on"+t}function Vw(t,e){if(t.ba)t=!0;else{e=new Zs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&dl(t),t=n.call(s,e)}return t}function fl(t){return t=t[hl],t instanceof Kr?t:null}var Ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function pl(t){return typeof t=="function"?t:(t[Ko]||(t[Ko]=function(e){return t.handleEvent(e)}),t[Ko])}function Fe(){pn.call(this),this.i=new Kr(this),this.P=this,this.I=null}qe(Fe,pn);Fe.prototype[Si]=!0;Fe.prototype.removeEventListener=function(t,e,n,s){kd(this,t,e,n,s)};function Be(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var i=e;e=new Qe(s,t),Id(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Qi(o,s,!0,e)&&i}if(o=e.g=t,i=Qi(o,s,!0,e)&&i,i=Qi(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Qi(o,s,!1,e)&&i}Fe.prototype.M=function(){if(Fe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Hr(n[s]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Fe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&fa(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var gl=$.JSON.stringify;function Bw(){var t=Nd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jw{constructor(){this.h=this.g=null}add(e,n){const s=Pd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Pd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qw,t=>t.reset());class qw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $w(t){$.setTimeout(()=>{throw t},0)}function Dd(t,e){ga||Hw(),ma||(ga(),ma=!0),Nd.add(t,e)}var ga;function Hw(){var t=$.Promise.resolve(void 0);ga=function(){t.then(Kw)}}var ma=!1,Nd=new jw;function Kw(){for(var t;t=Bw();){try{t.h.call(t.g)}catch(n){$w(n)}var e=Pd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ma=!1}function zr(t,e){Fe.call(this),this.h=t||1,this.g=e||$,this.j=Ge(this.lb,this),this.l=Date.now()}qe(zr,Fe);L=zr.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Be(this,"tick"),this.ca&&(ml(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ml(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){zr.X.M.call(this),ml(this),delete this.g};function yl(t,e,n){if(typeof t=="function")n&&(t=Ge(t,n));else if(t&&typeof t.handleEvent=="function")t=Ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Rd(t){t.g=yl(()=>{t.g=null,t.i&&(t.i=!1,Rd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zw extends pn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Rd(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(t){pn.call(this),this.h=t,this.g={}}qe(ei,pn);var Jc=[];function Od(t,e,n,s){Array.isArray(n)||(n&&(Jc[0]=n.toString()),n=Jc);for(var i=0;i<n.length;i++){var r=Td(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ld(t){ul(t.g,function(e,n){this.g.hasOwnProperty(n)&&dl(e)},t),t.g={}}ei.prototype.M=function(){ei.X.M.call(this),Ld(this)};ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wr(){this.g=!0}Wr.prototype.Aa=function(){this.g=!1};function Ww(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Gw(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function zn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Yw(t,n)+(s?" "+s:"")})}function Qw(t,e){t.info(function(){return"TIMEOUT: "+e})}Wr.prototype.info=function(){};function Yw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gl(n)}catch{return e}}var Mn={},Zc=null;function Gr(){return Zc=Zc||new Fe}Mn.Pa="serverreachability";function Md(t){Qe.call(this,Mn.Pa,t)}qe(Md,Qe);function ti(t){const e=Gr();Be(e,new Md(e))}Mn.STAT_EVENT="statevent";function Ud(t,e){Qe.call(this,Mn.STAT_EVENT,t),this.stat=e}qe(Ud,Qe);function tt(t){const e=Gr();Be(e,new Ud(e,t))}Mn.Qa="timingevent";function xd(t,e){Qe.call(this,Mn.Qa,t),this.size=e}qe(xd,Qe);function Ci(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Qr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Fd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function vl(){}vl.prototype.h=null;function eu(t){return t.h||(t.h=t.i())}function Vd(){}var ki={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function wl(){Qe.call(this,"d")}qe(wl,Qe);function bl(){Qe.call(this,"c")}qe(bl,Qe);var ya;function Yr(){}qe(Yr,vl);Yr.prototype.g=function(){return new XMLHttpRequest};Yr.prototype.i=function(){return{}};ya=new Yr;function Ai(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ei(this),this.O=Xw,t=ha?125:void 0,this.T=new zr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Bd}function Bd(){this.i=null,this.g="",this.h=!1}var Xw=45e3,va={},Sr={};L=Ai.prototype;L.setTimeout=function(t){this.O=t};function wa(t,e,n){t.K=1,t.v=Jr(zt(e)),t.s=n,t.P=!0,jd(t,null)}function jd(t,e){t.F=Date.now(),Pi(t),t.A=zt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Qd(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Bd,t.g=yf(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zw(Ge(t.La,t,t.g),t.N)),Od(t.S,t.g,"readystatechange",t.ib),e=t.H?Ed(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ti(),Ww(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&jt(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const u=jt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||ha||this.g&&(this.h.h||this.g.fa()||iu(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ti(3):ti(2)),Xr(this);var n=this.g.aa();this.Y=n;t:if(qd(this)){var s=iu(this.g);t="";var i=s.length,r=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Fs(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Gw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ir(a)){var c=a;break t}}c=null}if(n=c)zn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ba(this,n);else{this.i=!1,this.o=3,tt(12),bn(this),Fs(this);break e}}this.P?($d(this,u,o),ha&&this.i&&u==3&&(Od(this.S,this.T,"tick",this.hb),this.T.start())):(zn(this.j,this.m,o,null),ba(this,o)),u==4&&bn(this),this.i&&!this.I&&(u==4?ff(this.l,this):(this.i=!1,Pi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),bn(this),Fs(this)}}}catch{}finally{}};function qd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function $d(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Jw(t,n),i==Sr){e==4&&(t.o=4,tt(14),s=!1),zn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==va){t.o=4,tt(15),zn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else zn(t.j,t.m,i,null),ba(t,i);qd(t)&&i!=Sr&&i!=va&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),kl(e),e.K=!0,tt(11))):(zn(t.j,t.m,n,"[Invalid Chunked Response]"),bn(t),Fs(t))}L.hb=function(){if(this.g){var t=jt(this.g),e=this.g.fa();this.C<e.length&&(Xr(this),$d(this,t,e),this.i&&t!=4&&Pi(this))}};function Jw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Sr:(n=Number(e.substring(n,s)),isNaN(n)?va:(s+=1,s+n>e.length?Sr:(e=e.substr(s,n),t.C=s+n,e)))}L.cancel=function(){this.I=!0,bn(this)};function Pi(t){t.V=Date.now()+t.O,Hd(t,t.O)}function Hd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ci(Ge(t.gb,t),e)}function Xr(t){t.B&&($.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Qw(this.j,this.A),this.K!=2&&(ti(),tt(17)),bn(this),this.o=2,Fs(this)):Hd(this,this.V-t)};function Fs(t){t.l.G==0||t.I||ff(t.l,t)}function bn(t){Xr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ml(t.T),Ld(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ba(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_a(n.h,t))){if(!t.J&&_a(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ar(n),to(n);else break e;Cl(n),tt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ci(Ge(n.cb,n),6e3));if(1>=Jd(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else _n(n,11)}else if((t.J||n.g==t)&&Ar(n),!Ir(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(_l(r,r.h),r.h=null))}if(s.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,be(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=mf(s,s.H?s.ka:null,s.V),o.J){Zd(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Xr(a),Pi(a)),s.g=o}else hf(s);0<n.i.length&&no(n)}else c[0]!="stop"&&c[0]!="close"||_n(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?_n(n,7):Sl(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ti(4)}catch{}}function Zw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function eb(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Kd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=eb(t),s=Zw(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var zd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Sn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Sn){this.h=e!==void 0?e:t.h,Cr(this,t.j),this.s=t.s,this.g=t.g,kr(this,t.m),this.l=t.l,e=t.i;var n=new ni;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),tu(this,n),this.o=t.o}else t&&(n=String(t).match(zd))?(this.h=!!e,Cr(this,n[1]||"",!0),this.s=Ns(n[2]||""),this.g=Ns(n[3]||"",!0),kr(this,n[4]),this.l=Ns(n[5]||"",!0),tu(this,n[6]||"",!0),this.o=Ns(n[7]||"")):(this.h=!!e,this.i=new ni(null,this.h))}Sn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,nu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,nu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?ib:sb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,ob)),t.join("")};function zt(t){return new Sn(t)}function Cr(t,e,n){t.j=n?Ns(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tu(t,e,n){e instanceof ni?(t.i=e,ab(t.i,t.h)):(n||(e=Rs(e,rb)),t.i=new ni(e,t.h))}function be(t,e,n){t.i.set(e,n)}function Jr(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ns(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nu=/[#\/\?@]/g,sb=/[#\?:]/g,ib=/[#\?]/g,rb=/[#\?@]/g,ob=/#/g;function ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gn(t){t.g||(t.g=new Map,t.h=0,t.i&&tb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=ni.prototype;L.add=function(t,e){gn(this),this.i=null,t=ys(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wd(t,e){gn(t),e=ys(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Gd(t,e){return gn(t),e=ys(t,e),t.g.has(e)}L.forEach=function(t,e){gn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};L.oa=function(){gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};L.W=function(t){gn(this);let e=[];if(typeof t=="string")Gd(this,t)&&(e=e.concat(this.g.get(ys(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return gn(this),this.i=null,t=ys(this,t),Gd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Qd(t,e,n){Wd(t,e),0<n.length&&(t.i=null,t.g.set(ys(t,e),ll(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ys(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ab(t,e){e&&!t.j&&(gn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Wd(this,s),Qd(this,i,n))},t)),t.j=e}var lb=class{constructor(e,n){this.h=e,this.g=n}};function Yd(t){this.l=t||cb,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cb=10;function Xd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jd(t){return t.h?1:t.g?t.g.size:0}function _a(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _l(t,e){t.g?t.g.add(e):t.h=e}function Zd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yd.prototype.cancel=function(){if(this.i=ef(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ef(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ll(t.i)}function El(){}El.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};El.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function ub(){this.g=new El}function hb(t,e,n){const s=n||"";try{Kd(t,function(i,r){let o=i;Ti(i)&&(o=gl(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function db(t,e){const n=new Wr;if($.Image){const s=new Image;s.onload=Gi(Yi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Gi(Yi,n,s,"TestLoadImage: error",!1,e),s.onabort=Gi(Yi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Gi(Yi,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Yi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Di(t){this.l=t.ac||null,this.j=t.jb||!1}qe(Di,vl);Di.prototype.g=function(){return new Zr(this.l,this.j)};Di.prototype.i=function(t){return function(){return t}}({});function Zr(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Il,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Zr,Fe);var Il=0;L=Zr.prototype;L.open=function(t,e){if(this.readyState!=Il)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,si(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=Il};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tf(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function tf(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ni(this):si(this),this.readyState==3&&tf(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,Ni(this))};L.Ua=function(t){this.g&&(this.response=t,Ni(this))};L.ga=function(){this.g&&Ni(this)};function Ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,si(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fb=$.JSON.parse;function Te(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nf,this.K=this.L=!1}qe(Te,Fe);var nf="",pb=/^https?$/i,gb=["POST","PUT"];L=Te.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ya.g(),this.C=this.u?eu(this.u):eu(ya),this.g.onreadystatechange=Ge(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){su(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=vd(gb,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{of(this),0<this.B&&((this.K=mb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ge(this.qa,this)):this.A=yl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){su(this,r)}};function mb(t){return is&&Ow()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof al<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function su(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sf(t),eo(t)}function sf(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),eo(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),eo(this,!0)),Te.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?rf(this):this.fb())};L.fb=function(){rf(this)};function rf(t){if(t.h&&typeof al<"u"&&(!t.C[1]||jt(t)!=4||t.aa()!=2)){if(t.v&&jt(t)==4)yl(t.Ha,0,t);else if(Be(t,"readystatechange"),jt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(zd)[1]||null;if(!i&&$.self&&$.self.location){var r=$.self.location.protocol;i=r.substr(0,r.length-1)}s=!pb.test(i?i.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",sf(t)}}finally{eo(t)}}}}function eo(t,e){if(t.g){of(t);const n=t.g,s=t.C[0]?Er:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch{}}}function of(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function jt(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fb(e)}};function iu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function af(t){let e="";return ul(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Tl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=af(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function lf(t){this.Ca=0,this.i=[],this.j=new Wr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ks("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ks("baseRetryDelayMs",5e3,t),this.bb=ks("retryDelaySeedMs",1e4,t),this.$a=ks("forwardChannelMaxRetries",2,t),this.ta=ks("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Yd(t&&t.concurrentRequestLimit),this.Fa=new ub,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=lf.prototype;L.ma=8;L.G=1;function Sl(t){if(cf(t),t.G==3){var e=t.U++,n=zt(t.F);be(n,"SID",t.I),be(n,"RID",e),be(n,"TYPE","terminate"),Ri(t,n),e=new Ai(t,t.j,e,void 0),e.K=2,e.v=Jr(zt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=yf(e.l,null),e.g.da(e.v)),e.F=Date.now(),Pi(e)}gf(t)}function to(t){t.g&&(kl(t),t.g.cancel(),t.g=null)}function cf(t){to(t),t.u&&($.clearTimeout(t.u),t.u=null),Ar(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function no(t){Xd(t.h)||t.m||(t.m=!0,Dd(t.Ja,t),t.C=0)}function yb(t,e){return Jd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ci(Ge(t.Ja,t,e),pf(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ai(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Ed(r),Id(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=uf(this,i,e),n=zt(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),Ri(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(af(r)))+"&"+e:this.o&&Tl(n,this.o,r)),_l(this.h,i),this.Ya&&be(n,"TYPE","init"),this.O?(be(n,"$req",e),be(n,"SID","null"),i.Z=!0,wa(i,n,null)):wa(i,n,e),this.G=2}}else this.G==3&&(t?ru(this,t):this.i.length==0||Xd(this.h)||ru(this))};function ru(t,e){var n;e?n=e.m:n=t.U++;const s=zt(t.F);be(s,"SID",t.I),be(s,"RID",n),be(s,"AID",t.T),Ri(t,s),t.o&&t.s&&Tl(s,t.o,t.s),n=new Ai(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=uf(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),_l(t.h,n),wa(n,s,e)}function Ri(t,e){t.ia&&ul(t.ia,function(n,s){be(e,s,n)}),t.l&&Kd({},function(n,s){be(e,s,n)})}function uf(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ge(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{hb(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function hf(t){t.g||t.u||(t.Z=1,Dd(t.Ia,t),t.A=0)}function Cl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ci(Ge(t.Ia,t),pf(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,df(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ci(Ge(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),to(this),df(this))};function kl(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function df(t){t.g=new Ai(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=zt(t.sa);be(e,"RID","rpc"),be(e,"SID",t.I),be(e,"CI",t.L?"0":"1"),be(e,"AID",t.T),be(e,"TYPE","xmlhttp"),Ri(t,e),t.o&&t.s&&Tl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Jr(zt(e)),n.s=null,n.P=!0,jd(n,t)}L.cb=function(){this.v!=null&&(this.v=null,to(this),Cl(this),tt(19))};function Ar(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function ff(t,e){var n=null;if(t.g==e){Ar(t),kl(t),t.g=null;var s=2}else if(_a(t.h,e))n=e.D,Zd(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Gr(),Be(s,new xd(s,n)),no(t)}else hf(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&yb(t,e)||s==2&&Cl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:_n(t,5);break;case 4:_n(t,10);break;case 3:_n(t,6);break;default:_n(t,2)}}}function pf(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function _n(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ge(t.kb,t);n||(n=new Sn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Cr(n,"https"),Jr(n)),db(n.toString(),s)}else tt(2);t.G=0,t.l&&t.l.va(e),gf(t),cf(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function gf(t){if(t.G=0,t.la=[],t.l){const e=ef(t.h);(e.length!=0||t.i.length!=0)&&(Gc(t.la,e),Gc(t.la,t.i),t.h.i.length=0,ll(t.i),t.i.length=0),t.l.ua()}}function mf(t,e,n){var s=n instanceof Sn?zt(n):new Sn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),kr(s,s.m);else{var i=$.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Sn(null,void 0);s&&Cr(r,s),e&&(r.g=e),i&&kr(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&be(s,n,e),be(s,"VER",t.ma),Ri(t,s),s}function yf(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Te(new Di({jb:!0})):new Te(t.ra),e.Ka(t.H),e}function vf(){}L=vf.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function Pr(){if(is&&!(10<=Number(Lw)))throw Error("Environmental error: no available transport.")}Pr.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){Fe.call(this),this.g=new lf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ir(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ir(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}qe(ft,Fe);ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=mf(t,null,t.V),no(t)};ft.prototype.close=function(){Sl(this.g)};ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gl(t),t=n);e.i.push(new lb(e.ab++,t)),e.G==3&&no(e)};ft.prototype.M=function(){this.g.l=null,delete this.j,Sl(this.g),delete this.g,ft.X.M.call(this)};function wf(t){wl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(wf,wl);function bf(){bl.call(this),this.status=1}qe(bf,bl);function vs(t){this.g=t}qe(vs,vf);vs.prototype.xa=function(){Be(this.g,"a")};vs.prototype.wa=function(t){Be(this.g,new wf(t))};vs.prototype.va=function(t){Be(this.g,new bf)};vs.prototype.ua=function(){Be(this.g,"b")};Pr.prototype.createWebChannel=Pr.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;Qr.NO_ERROR=0;Qr.TIMEOUT=8;Qr.HTTP_ERROR=6;Fd.COMPLETE="complete";Vd.EventType=ki;ki.OPEN="a";ki.CLOSE="b";ki.ERROR="c";ki.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;Te.prototype.listenOnce=Te.prototype.O;Te.prototype.getLastError=Te.prototype.Oa;Te.prototype.getLastErrorCode=Te.prototype.Ea;Te.prototype.getStatus=Te.prototype.aa;Te.prototype.getResponseJson=Te.prototype.Sa;Te.prototype.getResponseText=Te.prototype.fa;Te.prototype.send=Te.prototype.da;Te.prototype.setWithCredentials=Te.prototype.Ka;var vb=function(){return new Pr},wb=function(){return Gr()},zo=Qr,bb=Fd,_b=Mn,ou={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Eb=Di,Xi=Vd,Ib=Te;const au="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Qa("@firebase/firestore");function lu(){return Nn.logLevel}function U(t,...e){if(Nn.logLevel<=ue.DEBUG){const n=e.map(Al);Nn.debug(`Firestore (${ws}): ${t}`,...n)}}function Wt(t,...e){if(Nn.logLevel<=ue.ERROR){const n=e.map(Al);Nn.error(`Firestore (${ws}): ${t}`,...n)}}function Ea(t,...e){if(Nn.logLevel<=ue.WARN){const n=e.map(Al);Nn.warn(`Firestore (${ws}): ${t}`,...n)}}function Al(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function ve(t,e){t||q()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class Sb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cb{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new an;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new an,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new an)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new _f(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new He(e)}}class kb{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=He.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ve(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ab{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new kb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Db{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.A=n.token,new Pb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Nb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Re(0,0))}static max(){return new z(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(),s===void 0?s=e.length-n:s>e.length-n&&q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends ii{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const Rb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ii{construct(e,n,s){return new ze(e,n,s)}static isValidIdentifier(e){return Rb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new N(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new N(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(we.fromString(e))}static fromName(e){return new x(we.fromString(e).popFirst(5))}static empty(){return new x(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new we(e.slice()))}}function Ob(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new cn(i,x.empty(),e)}function Lb(t){return new cn(t.readTime,t.key,-1)}class cn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new cn(z.min(),x.empty(),-1)}static max(){return new cn(z.max(),x.empty(),-1)}}function Mb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=x.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Ub)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(i=>i?I.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new I((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new I((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Li(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Pl.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ri{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Un(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function If(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){return t==null}function Dr(t){return t===0&&1/t==-1/0}function Vb(t){return typeof t=="number"&&Number.isInteger(t)&&!Dr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new Bb("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const jb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function un(t){if(ve(!!t),typeof t=="string"){let e=0;const n=jb.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sf(t){const e=t.mapValue.fields.__previous_value__;return Tf(e)?Sf(e):e}function oi(t){const e=un(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tf(t)?4:qb(t)?9007199254740991:10:q()}function Mt(t,e){if(t===e)return!0;const n=Rn(t);if(n!==Rn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oi(t).isEqual(oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=un(s.timestampValue),o=un(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return os(s.bytesValue).isEqual(os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Pe(s.doubleValue),o=Pe(i.doubleValue);return r===o?Dr(r)===Dr(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(cu(r)!==cu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Mt(r[a],o[a])))return!1;return!0}(t,e);default:return q()}}function ai(t,e){return(t.values||[]).find(n=>Mt(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=Rn(t),s=Rn(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Pe(i.integerValue||i.doubleValue),a=Pe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return uu(t.timestampValue,e.timestampValue);case 4:return uu(oi(t),oi(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,r){const o=os(i),a=os(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=he(o[l],a[l]);if(c!==0)return c}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=he(Pe(i.latitude),Pe(r.latitude));return o!==0?o:he(Pe(i.longitude),Pe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=as(o[l],a[l]);if(c)return c}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ji.mapValue&&r===Ji.mapValue)return 0;if(i===Ji.mapValue)return 1;if(r===Ji.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=he(a[u],c[u]);if(h!==0)return h;const d=as(o[a[u]],l[c[u]]);if(d!==0)return d}return he(a.length,c.length)}(t.mapValue,e.mapValue);default:throw q()}}function uu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=un(t),s=un(e),i=he(n.seconds,s.seconds);return i!==0?i:he(n.nanos,s.nanos)}function ls(t){return Ia(t)}function Ia(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=un(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,x.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ia(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ia(s.fields[a])}`;return r+"}"}(t.mapValue):q();var e,n}function hu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ta(t){return!!t&&"integerValue"in t}function Dl(t){return!!t&&"arrayValue"in t}function du(t){return!!t&&"nullValue"in t}function fu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ar(t){return!!t&&"mapValue"in t}function Vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Un(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Vs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.position=e,this.inclusive=n}}function pu(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=x.comparator(x.fromName(o.referenceValue),n.key):s=as(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function gu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{}class De extends Cf{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Hb(e,n,s):n==="array-contains"?new Wb(e,s):n==="in"?new Gb(e,s):n==="not-in"?new Qb(e,s):n==="array-contains-any"?new Yb(e,s):new De(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Kb(e,s):new zb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&Rn(this.value)===Rn(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class St extends Cf{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new St(e,n)}matches(e){return kf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function kf(t){return t.op==="and"}function Af(t){return $b(t)&&kf(t)}function $b(t){for(const e of t.filters)if(e instanceof St)return!1;return!0}function Sa(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(Af(t))return t.filters.map(e=>Sa(e)).join(",");{const e=t.filters.map(n=>Sa(n)).join(",");return`${t.op}(${e})`}}function Pf(t,e){return t instanceof De?function(n,s){return s instanceof De&&n.op===s.op&&n.field.isEqual(s.field)&&Mt(n.value,s.value)}(t,e):t instanceof St?function(n,s){return s instanceof St&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Pf(r,s.filters[o]),!0):!1}(t,e):void q()}function Df(t){return t instanceof De?function(e){return`${e.field.canonicalString()} ${e.op} ${ls(e.value)}`}(t):t instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Df).join(" ,")+"}"}(t):"Filter"}class Hb extends De{constructor(e,n,s){super(e,n,s),this.key=x.fromName(s.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kb extends De{constructor(e,n){super(e,"in",n),this.keys=Nf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zb extends De{constructor(e,n){super(e,"not-in",n),this.keys=Nf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>x.fromName(s.referenceValue))}class Wb extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dl(n)&&ai(n.arrayValue,this.value)}}class Gb extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class Qb extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ai(this.value.arrayValue,n)}}class Yb extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ai(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zi(this.root,e,this.comparator,!0)}}class Zi{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ve.RED,this.left=i??Ve.EMPTY,this.right=r??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mu(this.data.getIterator())}getIteratorFrom(e){return new mu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class mu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new ht([])}unionWith(e){let n=new Oe(ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ar(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(n)}setAll(e){let n=ze.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Vs(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ar(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ar(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Un(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new it(Vs(this.value))}}function Rf(t){const e=[];return Un(t.fields,(n,s)=>{const i=new ze([n]);if(ar(s)){const r=Rf(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ke(e,0,z.min(),z.min(),z.min(),it.empty(),0)}static newFoundDocument(e,n,s,i){return new Ke(e,1,n,z.min(),s,i,0)}static newNoDocument(e,n){return new Ke(e,2,n,z.min(),z.min(),it.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,z.min(),z.min(),it.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function yu(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Jb(t,e,n,s,i,r,o)}function Nl(t){const e=Q(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Sa(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),so(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ls(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ls(s)).join(",")),e._t=n}return e._t}function Rl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Pf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gu(t.startAt,e.startAt)&&gu(t.endAt,e.endAt)}function Ca(t){return x.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Zb(t,e,n,s,i,r,o,a){return new bs(t,e,n,s,i,r,o,a)}function Ol(t){return new bs(t)}function vu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ll(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function io(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Of(t){return t.collectionGroup!==null}function Jn(t){const e=Q(t);if(e.wt===null){e.wt=[];const n=io(e),s=Ll(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Xn(n)),e.wt.push(new Xn(ze.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xn(ze.keyField(),r))}}}return e.wt}function Gt(t){const e=Q(t);if(!e.gt)if(e.limitType==="F")e.gt=yu(e.path,e.collectionGroup,Jn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Jn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Xn(r.field,o))}const s=e.endAt?new Nr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Nr(e.startAt.position,e.startAt.inclusive):null;e.gt=yu(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function ka(t,e){e.getFirstInequalityField(),io(t);const n=t.filters.concat([e]);return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Aa(t,e,n){return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ro(t,e){return Rl(Gt(t),Gt(e))&&t.limitType===e.limitType}function Lf(t){return`${Nl(Gt(t))}|lt:${t.limitType}`}function Pa(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Df(s)).join(", ")}]`),so(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ls(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ls(s)).join(",")),`Target(${n})`}(Gt(t))}; limitType=${t.limitType})`}function oo(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):x.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Jn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=pu(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Jn(n),s)||n.endAt&&!function(i,r,o){const a=pu(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Jn(n),s))}(t,e)}function e_(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Mf(t){return(e,n)=>{let s=!1;for(const i of Jn(t)){const r=t_(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function t_(t,e,n){const s=t.field.isKeyField()?x.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?as(a,l):q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(e)?"-0":e}}function xf(t){return{integerValue:""+t}}function n_(t,e){return Vb(e)?xf(e):Uf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this._=void 0}}function s_(t,e,n){return t instanceof Rr?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof li?Vf(t,e):t instanceof ci?Bf(t,e):function(s,i){const r=Ff(s,i),o=wu(r)+wu(s.It);return Ta(r)&&Ta(s.It)?xf(o):Uf(s.Tt,o)}(t,e)}function i_(t,e,n){return t instanceof li?Vf(t,e):t instanceof ci?Bf(t,e):n}function Ff(t,e){return t instanceof Or?Ta(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Rr extends ao{}class li extends ao{constructor(e){super(),this.elements=e}}function Vf(t,e){const n=jf(e);for(const s of t.elements)n.some(i=>Mt(i,s))||n.push(s);return{arrayValue:{values:n}}}class ci extends ao{constructor(e){super(),this.elements=e}}function Bf(t,e){let n=jf(e);for(const s of t.elements)n=n.filter(i=>!Mt(i,s));return{arrayValue:{values:n}}}class Or extends ao{constructor(e,n){super(),this.Tt=e,this.It=n}}function wu(t){return Pe(t.integerValue||t.doubleValue)}function jf(t){return Dl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function r_(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof li&&s instanceof li||n instanceof ci&&s instanceof ci?rs(n.elements,s.elements,Mt):n instanceof Or&&s instanceof Or?Mt(n.It,s.It):n instanceof Rr&&s instanceof Rr}(t.transform,e.transform)}class o_{constructor(e,n){this.version=e,this.transformResults=n}}class vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lo{}function qf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ml(t.key,vt.none()):new Mi(t.key,t.data,vt.none());{const n=t.data,s=it.empty();let i=new Oe(ze.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new mn(t.key,s,new ht(i.toArray()),vt.none())}}function a_(t,e,n){t instanceof Mi?function(s,i,r){const o=s.value.clone(),a=_u(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof mn?function(s,i,r){if(!lr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=_u(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll($f(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,s){return t instanceof Mi?function(i,r,o,a){if(!lr(i.precondition,r))return o;const l=i.value.clone(),c=Eu(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof mn?function(i,r,o,a){if(!lr(i.precondition,r))return o;const l=Eu(i.fieldTransforms,a,r),c=r.data;return c.setAll($f(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return lr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function l_(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Ff(s.transform,i||null);r!=null&&(n===null&&(n=it.empty()),n.set(s.field,r))}return n||null}function bu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&rs(n,s,(i,r)=>r_(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mi extends lo{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mn extends lo{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function $f(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function _u(t,e,n){const s=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,i_(o,a,n[i]))}return s}function Eu(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,s_(r,o,e))}return s}class Ml extends lo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class c_ extends lo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ae;function h_(t){switch(t){default:return q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Hf(t){if(t===void 0)return Wt("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ae.OK:return E.OK;case Ae.CANCELLED:return E.CANCELLED;case Ae.UNKNOWN:return E.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return E.INTERNAL;case Ae.UNAVAILABLE:return E.UNAVAILABLE;case Ae.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ae.NOT_FOUND:return E.NOT_FOUND;case Ae.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ae.ABORTED:return E.ABORTED;case Ae.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ae.DATA_LOSS:return E.DATA_LOSS;default:return q()}}(ae=Ae||(Ae={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Un(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return If(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new Le(x.comparator);function Qt(){return d_}const Kf=new Le(x.comparator);function Os(...t){let e=Kf;for(const n of t)e=e.insert(n.key,n);return e}function zf(t){let e=Kf;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function En(){return js()}function Wf(){return js()}function js(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const f_=new Le(x.comparator),p_=new Oe(x.comparator);function se(...t){let e=p_;for(const n of t)e=e.add(n);return e}const g_=new Oe(he);function Gf(){return g_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new co(z.min(),i,Gf(),Qt(),se())}}class Ui{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ui(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Qf{constructor(e,n){this.targetId=e,this.Rt=n}}class Yf{constructor(e,n,s=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Iu{constructor(){this.bt=0,this.vt=Su(),this.Pt=Xe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=se(),n=se(),s=se();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:q()}}),new Ui(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Su()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class m_{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Qt(),this.Kt=Tu(),this.Gt=new Oe(he)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(Ca(r))if(s===0){const o=new x(r.path);this.zt(n,o,Ke.newNoDocument(o,z.min()))}else ve(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Ca(a.target)){const l=new x(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Ke.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=se();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new co(e,n,this.Gt,this.Ut,s);return this.Ut=Qt(),this.Kt=Tu(),this.Gt=new Oe(he),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Iu,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Oe(he),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Iu),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Tu(){return new Le(x.comparator)}function Su(){return new Le(x.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),v_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),w_=(()=>({and:"AND",or:"OR"}))();class b_{constructor(e,n){this.databaseId=e,this.yt=n}}function Lr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xf(t,e){return t.yt?e.toBase64():e.toUint8Array()}function __(t,e){return Lr(t,e.toTimestamp())}function Lt(t){return ve(!!t),z.fromTimestamp(function(e){const n=un(e);return new Re(n.seconds,n.nanos)}(t))}function Ul(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jf(t){const e=we.fromString(t);return ve(np(e)),e}function Da(t,e){return Ul(t.databaseId,e.path)}function Wo(t,e){const n=Jf(e);if(n.get(1)!==t.databaseId.projectId)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new x(Zf(n))}function Na(t,e){return Ul(t.databaseId,e)}function E_(t){const e=Jf(t);return e.length===4?we.emptyPath():Zf(e)}function Ra(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zf(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cu(t,e,n){return{name:Da(t,e),fields:n.value.mapValue.fields}}function I_(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(ve(c===void 0||typeof c=="string"),Xe.fromBase64String(c||"")):(ve(c===void 0||c instanceof Uint8Array),Xe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?E.UNKNOWN:Hf(l.code);return new N(c,l.message||"")}(o);n=new Yf(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Wo(t,s.document.name),r=Lt(s.document.updateTime),o=s.document.createTime?Lt(s.document.createTime):z.min(),a=new it({mapValue:{fields:s.document.fields}}),l=Ke.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new cr(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Wo(t,s.document),r=s.readTime?Lt(s.readTime):z.min(),o=Ke.newNoDocument(i,r),a=s.removedTargetIds||[];n=new cr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Wo(t,s.document),r=s.removedTargetIds||[];n=new cr([],r,i,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new u_(i),o=s.targetId;n=new Qf(o,r)}}return n}function T_(t,e){let n;if(e instanceof Mi)n={update:Cu(t,e.key,e.value)};else if(e instanceof Ml)n={delete:Da(t,e.key)};else if(e instanceof mn)n={update:Cu(t,e.key,e.data),updateMask:O_(e.fieldMask)};else{if(!(e instanceof c_))return q();n={verify:Da(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Rr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof li)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ci)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Or)return{fieldPath:r.field.canonicalString(),increment:o.It};throw q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:__(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function S_(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Lt(s.updateTime):Lt(i);return r.isEqual(z.min())&&(r=Lt(i)),new o_(r,s.transformResults||[])}(n,e))):[]}function C_(t,e){return{documents:[Na(t,e.path)]}}function k_(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Na(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Na(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return tp(St.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:qn(u.field),direction:D_(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||so(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function A_(t){let e=E_(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=ep(u);return h instanceof St&&Af(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Xn($n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,so(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Nr(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Nr(d,h)}(n.endAt)),Zb(e,i,o,r,a,"F",l,c)}function P_(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ep(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$n(e.unaryFilter.field);return De.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=$n(e.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$n(e.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$n(e.unaryFilter.field);return De.create(r,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(e){return De.create($n(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(n=>ep(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(t):q()}function D_(t){return y_[t]}function N_(t){return v_[t]}function R_(t){return w_[t]}function qn(t){return{fieldPath:t.canonicalString()}}function $n(t){return ze.fromServerFormat(t.fieldPath)}function tp(t){return t instanceof De?function(e){if(e.op==="=="){if(fu(e.value))return{unaryFilter:{field:qn(e.field),op:"IS_NAN"}};if(du(e.value))return{unaryFilter:{field:qn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fu(e.value))return{unaryFilter:{field:qn(e.field),op:"IS_NOT_NAN"}};if(du(e.value))return{unaryFilter:{field:qn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(e.field),op:N_(e.op),value:e.value}}}(t):t instanceof St?function(e){const n=e.getFilters().map(s=>tp(s));return n.length===1?n[0]:{compositeFilter:{op:R_(e.op),filters:n}}}(t):q()}function O_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function np(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&a_(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Bs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Bs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Wf();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=qf(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,s)=>bu(n,s))&&rs(this.baseMutations,e.baseMutations,(n,s)=>bu(n,s))}}class xl{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ve(e.mutations.length===s.length);let i=f_;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new xl(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,s,i,r=z.min(),o=z.min(),a=Xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.oe=e}}function x_(t){const e=A_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Aa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.Ze=new V_}addToCollectionParentIndex(e,n){return this.Ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(cn.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class V_{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Oe(we.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Oe(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new cs(0)}static Sn(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Bs(s.mutation,i,ht.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const i=En();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Os();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=En();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Qt();const o=js(),a=js();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof mn)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Bs(u.mutation,c,u.mutation.getFieldMask(),Re.now())):o.set(c.key,ht.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new j_(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=js();let i=new Le((o,a)=>o-a),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||ht.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Wf();u.forEach(d=>{if(!r.has(d)){const g=qf(n.get(d),s.get(d));g!==null&&h.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return x.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Of(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):I.resolve(En());let a=-1,l=r;return o.next(c=>I.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,se())).next(u=>({batchId:a,changes:zf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new x(n)).next(s=>{let i=Os();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Os();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(c,u){return new bs(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ke.newInvalidDocument(c)))});let o=Os();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Bs(c.mutation,l,ht.empty(),Re.now()),oo(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return I.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Lt(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:x_(s.bundledQuery),readTime:Lt(s.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.overlays=new Le(x.comparator),this.ss=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=En();return I.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const i=En(),r=n.length+1,o=new x(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Le((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=En(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=En(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return I.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new M_(n,s));let r=this.ss.get(n);r===void 0&&(r=se(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.rs=new Oe(Me.os),this.us=new Oe(Me.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Me(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Me(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new x(new we([])),s=new Me(n,e),i=new Me(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new x(new we([])),s=new Me(n,e),i=new Me(n,e+1);let r=se();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Me(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Me{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return x.comparator(e.key,n.key)||he(e.gs,n.gs)}static cs(e,n){return he(e.gs,n.gs)||x.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Oe(Me.os)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new L_(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Me(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return I.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),I.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Oe(he);return n.forEach(i=>{const r=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),I.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;x.isDocumentKey(r)||(r=r.child(""));const o=new Me(new x(r),0);let a=new Oe(he);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),I.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return I.forEach(n.mutations,i=>{const r=new Me(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Me(n,0),i=this.ps.firstAfterOrEqual(s);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.Rs=e,this.docs=new Le(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let s=Qt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ke.newInvalidDocument(i))}),I.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Qt();const o=n.path,a=new x(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Mb(Lb(u),s)<=0||(i.has(u.key)||oo(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return I.resolve(r)}getAllFromCollectionGroup(e,n,s,i){q()}bs(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new W_(this)}getSize(e){return I.resolve(this.size)}}class W_ extends B_{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.persistence=e,this.vs=new _s(n=>Nl(n),Rl),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Fl,this.targetCount=0,this.Ss=cs.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),I.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.xn(n),I.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(r).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Pl(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new G_(this),this.indexManager=new F_,this.remoteDocumentCache=function(s){return new z_(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new U_(n),this.Os=new $_(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new K_(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const i=new Y_(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return I.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Y_ extends xb{constructor(e){super(),this.currentSequenceNumber=e}}class Vl{constructor(e){this.persistence=e,this.Bs=new Fl,this.Ls=null}static qs(e){return new Vl(e)}get Us(){if(this.Ls)return this.Ls;throw q()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),I.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Us,s=>{const i=x.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,z.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return I.or([()=>I.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=se(),i=se();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Bl(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(vu(n))return I.resolve(null);let s=Gt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Aa(n,null,"F"),s=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=se(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,Aa(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return vu(n)||i.isEqual(z.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(lu()<=ue.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pa(n)),this.qi(e,o,n,Ob(i,-1)))})}Bi(e,n){let s=new Oe(Mf(e));return n.forEach((i,r)=>{oo(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return lu()<=ue.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Pa(n)),this.Oi.getDocumentsMatchingQuery(e,n,cn.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Le(he),this.Gi=new _s(r=>Nl(r),Rl),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q_(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Z_(t,e,n,s){return new J_(t,e,n,s)}async function sp(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=se();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function e0(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=I.resolve();return h.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(m=>{const y=l.docVersions.get(g);ve(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function ip(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function t0(t,e){const n=Q(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),i=i.insert(h,g),function(m,y,w){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,g,u)&&a.push(n.Ns.updateTargetData(r,g))});let l=Qt(),c=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(n0(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual(z.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return I.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function n0(t,e,n){let s=se(),i=se();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Qt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function s0(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function i0(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,I.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Cn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Oa(t,e,n){const s=Q(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Li(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function ku(t,e,n){const s=Q(t);let i=z.min(),r=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Q(a),h=u.Gi.get(c);return h!==void 0?I.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,Gt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?r:se())).next(a=>(r0(s,e_(e),a),{documents:a,Yi:r})))}function r0(t,e,n){let s=t.Qi.get(e)||z.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Au{constructor(){this.activeTargetIds=Gf()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o0{constructor(){this.Ur=new Au,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Au,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);U("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw Ea("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ws,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=l0[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Ib;a.setWithCredentials(!0),a.listenOnce(bb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case zo.NO_ERROR:const c=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(c)),r(c);break;case zo.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new N(E.DEADLINE_EXCEEDED,"Request time out"));break;case zo.HTTP_ERROR:const u=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(d.status);o(new N(g,d.message))}else o(new N(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(E.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=vb(),o=wb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Eb({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");U("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new c0({Yr:m=>{h?U("Connection","Not sending because WebChannel is closed:",m):(u||(U("Connection","Opening WebChannel transport."),c.open(),u=!0),U("Connection","WebChannel sending:",m),c.send(m))},Zr:()=>c.close()}),g=(m,y,w)=>{m.listen(y,C=>{try{w(C)}catch(T){setTimeout(()=>{throw T},0)}})};return g(c,Xi.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(c,Xi.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.oo())}),g(c,Xi.EventType.ERROR,m=>{h||(h=!0,Ea("Connection","WebChannel transport errored:",m),d.oo(new N(E.UNAVAILABLE,"The operation could not be completed")))}),g(c,Xi.EventType.MESSAGE,m=>{var y;if(!h){const w=m.data[0];ve(!!w);const C=w,T=C.error||((y=C[0])===null||y===void 0?void 0:y.error);if(T){U("Connection","WebChannel received error:",T);const P=T.status;let S=function(D){const F=Ae[D];if(F!==void 0)return Hf(F)}(P),k=T.message;S===void 0&&(S=E.INTERNAL,k="Unknown error status: "+P+" with message "+T.message),h=!0,d.oo(new N(S,k)),c.close()}else U("Connection","WebChannel received:",w),d.uo(w)}}),g(o,_b.STAT_EVENT,m=>{m.stat===ou.PROXY?U("Connection","Detected buffering proxy"):m.stat===ou.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Go(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){return new b_(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new rp(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new N(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h0 extends op{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=I_(this.Tt,e),s=function(i){if(!("targetChange"in i))return z.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?z.min():r.readTime?Lt(r.readTime):z.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Ra(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ca(a)?{documents:C_(i,a)}:{query:k_(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Xf(i,r.resumeToken):r.snapshotVersion.compareTo(z.min())>0&&(o.readTime=Lr(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=P_(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Ra(this.Tt),n.removeTarget=e,this.qo(n)}}class d0 extends op{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=S_(e.writeResults,e.commitTime),s=Lt(e.commitTime);return this.listener.eu(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Ra(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>T_(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(E.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(E.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class p0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Wt(n),this.cu=!1):U("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{xn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Q(a);l.mu.add(4),await xi(l),l.pu.set("Unknown"),l.mu.delete(4),await ho(l)}(this))})}),this.pu=new p0(s,i)}}async function ho(t){if(xn(t))for(const e of t.gu)await e(!0)}async function xi(t){for(const e of t.gu)await e(!1)}function ap(t,e){const n=Q(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),$l(n)?ql(n):Es(n).Mo()&&jl(n,e))}function lp(t,e){const n=Q(t),s=Es(n);n.wu.delete(e),s.Mo()&&cp(n,e),n.wu.size===0&&(s.Mo()?s.Bo():xn(n)&&n.pu.set("Unknown"))}function jl(t,e){t.Iu.Ft(e.targetId),Es(t).Jo(e)}function cp(t,e){t.Iu.Ft(e),Es(t).Yo(e)}function ql(t){t.Iu=new m_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Es(t).start(),t.pu.au()}function $l(t){return xn(t)&&!Es(t).Oo()&&t.wu.size>0}function xn(t){return Q(t).mu.size===0}function up(t){t.Iu=void 0}async function m0(t){t.wu.forEach((e,n)=>{jl(t,e)})}async function y0(t,e){up(t),$l(t)?(t.pu.fu(e),ql(t)):t.pu.set("Unknown")}async function v0(t,e,n){if(t.pu.set("Online"),e instanceof Yf&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mr(t,s)}else if(e instanceof cr?t.Iu.Qt(e):e instanceof Qf?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(z.min()))try{const s=await ip(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Xe.EMPTY_BYTE_STRING,l.snapshotVersion)),cp(i,a);const c=new Cn(l.target,a,1,l.sequenceNumber);jl(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Mr(t,s)}}async function Mr(t,e,n){if(!Li(e))throw e;t.mu.add(1),await xi(t),t.pu.set("Offline"),n||(n=()=>ip(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ho(t)})}function hp(t,e){return e().catch(n=>Mr(t,n,e))}async function fo(t){const e=Q(t),n=hn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;w0(e);)try{const i=await s0(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,b0(e,i)}catch(i){await Mr(e,i)}dp(e)&&fp(e)}function w0(t){return xn(t)&&t._u.length<10}function b0(t,e){t._u.push(e);const n=hn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function dp(t){return xn(t)&&!hn(t).Oo()&&t._u.length>0}function fp(t){hn(t).start()}async function _0(t){hn(t).su()}async function E0(t){const e=hn(t);for(const n of t._u)e.tu(n.mutations)}async function I0(t,e,n){const s=t._u.shift(),i=xl.from(s,e,n);await hp(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fo(t)}async function T0(t,e){e&&hn(t).Xo&&await async function(n,s){if(i=s.code,h_(i)&&i!==E.ABORTED){const r=n._u.shift();hn(n).$o(),await hp(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await fo(n)}var i}(t,e),dp(t)&&fp(t)}async function Du(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=xn(n);n.mu.add(3),await xi(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ho(n)}async function S0(t,e){const n=Q(t);e?(n.mu.delete(2),await ho(n)):e||(n.mu.add(2),await xi(n),n.pu.set("Unknown"))}function Es(t){return t.Tu||(t.Tu=function(e,n,s){const i=Q(e);return i.ru(),new h0(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:m0.bind(null,t),no:y0.bind(null,t),Ho:v0.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),$l(t)?ql(t):t.pu.set("Unknown")):(await t.Tu.stop(),up(t))})),t.Tu}function hn(t){return t.Eu||(t.Eu=function(e,n,s){const i=Q(e);return i.ru(),new d0(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:_0.bind(null,t),no:T0.bind(null,t),nu:E0.bind(null,t),eu:I0.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await fo(t)):(await t.Eu.stop(),t._u.length>0&&(U("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Hl(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kl(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),Li(t))return new N(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||x.comparator(n.key,s.key):(n,s)=>x.comparator(n.key,s.key),this.keyedMap=Os(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Zn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Zn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.Au=new Le(x.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):q():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class us{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Zn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ro(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.bu=void 0,this.listeners=[]}}class k0{constructor(){this.queries=new _s(e=>Lf(e),ro),this.onlineState="Unknown",this.vu=new Set}}async function pp(t,e){const n=Q(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new C0),i)try{r.bu=await n.onListen(s)}catch(o){const a=Kl(o,`Initialization of query '${Pa(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&zl(n)}async function gp(t,e){const n=Q(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function A0(t,e){const n=Q(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&zl(n)}function P0(t,e,n){const s=Q(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function zl(t){t.vu.forEach(e=>{e.next()})}class mp{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new us(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.key=e}}class vp{constructor(e){this.key=e}}class D0{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=se(),this.mutatedKeys=se(),this.ju=Mf(e),this.zu=new Zn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Nu,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),g=oo(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?m!==y&&(s.track({type:3,doc:g}),w=!0):this.Yu(d,g)||(s.track({type:2,doc:g}),w=!0,(l&&this.ju(g,l)>0||c&&this.ju(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),w=!0):d&&!g&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(g?(o=o.add(g),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return g(h)-g(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new us(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Nu,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=se(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new vp(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new yp(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=se();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return us.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class N0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class R0{constructor(e){this.key=e,this.ic=!1}}class O0{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new _s(a=>Lf(a),ro),this.uc=new Map,this.cc=new Set,this.ac=new Le(x.comparator),this.hc=new Map,this.lc=new Fl,this.fc={},this.dc=new Map,this._c=cs.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function L0(t,e){const n=H0(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await i0(n.localStore,Gt(e));n.isPrimaryClient&&ap(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await M0(n,e,s,a==="current",o.resumeToken)}return i}async function M0(t,e,n,s,i){t.mc=(h,d,g)=>async function(m,y,w,C){let T=y.view.Hu(w);T.Li&&(T=await ku(m.localStore,y.query,!1).then(({documents:k})=>y.view.Hu(k,T)));const P=C&&C.targetChanges.get(y.targetId),S=y.view.applyChanges(T,m.isPrimaryClient,P);return Ou(m,y.targetId,S.tc),S.snapshot}(t,h,d,g);const r=await ku(t.localStore,e,!0),o=new D0(e,r.Yi),a=o.Hu(r.documents),l=Ui.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Ou(t,n,c.tc);const u=new N0(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function U0(t,e){const n=Q(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!ro(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Oa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),lp(n.remoteStore,s.targetId),La(n,s.targetId)}).catch(Oi)):(La(n,s.targetId),await Oa(n.localStore,s.targetId,!0))}async function x0(t,e,n){const s=K0(t);try{const i=await function(r,o){const a=Q(r),l=Re.now(),c=o.reduce((d,g)=>d.add(g.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Qt(),m=se();return a.ji.getEntries(d,c).next(y=>{g=y,g.forEach((w,C)=>{C.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{u=y;const w=[];for(const C of o){const T=l_(C,u.get(C.key).overlayedDocument);T!=null&&w.push(new mn(C.key,T,Rf(T.value.mapValue),vt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:zf(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new Le(he)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Fi(s,i.changes),await fo(s.remoteStore)}catch(i){const r=Kl(i,"Failed to persist write");n.reject(r)}}async function wp(t,e){const n=Q(t);try{const s=await t0(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?ve(o.ic):i.removedDocuments.size>0&&(ve(o.ic),o.ic=!1))}),await Fi(n,s,e)}catch(s){await Oi(s)}}function Ru(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Q(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&zl(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function F0(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new Le(x.comparator);o=o.insert(r,Ke.newNoDocument(r,z.min()));const a=se().add(r),l=new co(z.min(),new Map,new Oe(he),o,a);await wp(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),Wl(s)}else await Oa(s.localStore,e,!1).then(()=>La(s,e,n)).catch(Oi)}async function V0(t,e){const n=Q(t),s=e.batch.batchId;try{const i=await e0(n.localStore,e);_p(n,s,null),bp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fi(n,i)}catch(i){await Oi(i)}}async function B0(t,e,n){const s=Q(t);try{const i=await function(r,o){const a=Q(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ve(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);_p(s,e,n),bp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fi(s,i)}catch(i){await Oi(i)}}function bp(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function _p(t,e,n){const s=Q(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function La(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Ep(t,s)})}function Ep(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(lp(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Wl(t))}function Ou(t,e,n){for(const s of n)s instanceof yp?(t.lc.addReference(s.key,e),j0(t,s)):s instanceof vp?(U("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Ep(t,s.key)):q()}function j0(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.cc.add(s),Wl(t))}function Wl(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new x(we.fromString(e)),s=t._c.next();t.hc.set(s,new R0(n)),t.ac=t.ac.insert(n,s),ap(t.remoteStore,new Cn(Gt(Ol(n.path)),s,2,Pl.at))}}async function Fi(t,e,n){const s=Q(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Bl.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=Q(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(l,h=>I.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Li(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);c.Ki=c.Ki.insert(h,m)}}}(s.localStore,r))}async function q0(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await sp(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new N(E.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fi(n,s.Wi)}}function $0(t,e){const n=Q(t),s=n.hc.get(e);if(s&&s.ic)return se().add(s.key);{let i=se();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function H0(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F0.bind(null,e),e.rc.Ho=A0.bind(null,e.eventManager),e.rc.gc=P0.bind(null,e.eventManager),e}function K0(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=V0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B0.bind(null,e),e}class z0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=uo(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Z_(this.persistence,new X_,e.initialUser,this.Tt)}Tc(e){return new Q_(Vl.qs,this.Tt)}Ic(e){return new o0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class W0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ru(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=q0.bind(null,this.syncEngine),await S0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new k0}createDatastore(e){const n=uo(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new u0(i));var i;return function(r,o,a,l){return new f0(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Ru(this.syncEngine,a,0),o=Pu.C()?new Pu:new a0,new g0(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new O0(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await xi(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=Ef.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{U("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(U("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Kl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Q0(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await sp(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Y0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await X0(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Du(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Du(e.remoteStore,r)),t.onlineComponents=e}async function X0(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await Q0(t,new z0)),t.offlineComponents}async function Tp(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await Y0(t,new W0)),t.onlineComponents}function J0(t){return Tp(t).then(e=>e.syncEngine)}async function Ma(t){const e=await Tp(t),n=e.eventManager;return n.onListen=L0.bind(null,e.syncEngine),n.onUnlisten=U0.bind(null,e.syncEngine),n}function Z0(t,e,n={}){const s=new an;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Ip({next:h=>{r.enqueueAndForget(()=>gp(i,u)),h.fromCache&&a.source==="server"?l.reject(new N(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new mp(o,c,{includeMetadataChanges:!0,Ou:!0});return pp(i,u)}(await Ma(t),t.asyncQueue,e,n,s)),s.promise}const Lu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e,n){if(!n)throw new N(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eE(t,e,n,s){if(e===!0&&s===!0)throw new N(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mu(t){if(!x.isDocumentKey(t))throw new N(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uu(t){if(x.isDocumentKey(t))throw new N(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function po(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=po(t);throw new N(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,eE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Tb;switch(n.type){case"gapi":const s=n.client;return new Ab(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Lu.get(e);n&&(U("ComponentProvider","Removing Datastore"),Lu.delete(e),n.terminate())}(this),Promise.resolve()}}function tE(t,e,n,s={}){var i;const r=(t=wt(t,go))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Ea("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=He.MOCK_USER;else{o=Jg(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new N(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new He(l)}t._authCredentials=new Sb(new _f(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class yn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yn(this.firestore,e,this._query)}}class ln extends yn{constructor(e,n,s){super(e,n,Ol(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new x(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function ct(t,e,...n){if(t=xe(t),Sp("collection","path",e),t instanceof go){const s=we.fromString(e,...n);return Uu(s),new ln(t,null,s)}{if(!(t instanceof nt||t instanceof ln))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Uu(s),new ln(t.firestore,null,s)}}function qt(t,e,...n){if(t=xe(t),arguments.length===1&&(e=Ef.R()),Sp("doc","path",e),t instanceof go){const s=we.fromString(e,...n);return Mu(s),new nt(t,null,new x(s))}{if(!(t instanceof nt||t instanceof ln))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Mu(s),new nt(t.firestore,t instanceof ln?t.converter:null,new x(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new rp(this,"async_queue_retry"),this.Hc=()=>{const n=Go();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Go();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Go();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new an;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Li(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Wt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Hl.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&q()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Fu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class dn extends go{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new nE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cp(this),this._firestoreClient.terminate()}}function sE(t,e){const n=typeof t=="object"?t:Bh(),s=typeof t=="string"?t:e||"(default)",i=Xa(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Qg("firestore");r&&tE(i,...r)}return i}function Gl(t){return t._firestoreClient||Cp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cp(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Fb(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new G0(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(Xe.fromBase64String(e))}catch(n){throw new N(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=/^__.*__$/;class rE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new mn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mi(e,this.data,n,this.fieldTransforms)}}class kp{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new mn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ap(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Xl{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ur(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Ap(this.ra)&&iE.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class oE{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||uo(e)}wa(e,n,s,i=!1){return new Xl({ra:e,methodName:n,_a:s,path:ze.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function yo(t){const e=t._freezeSettings(),n=uo(t._databaseId);return new oE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pp(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Jl("Data must be an object, but it was:",o,s);const a=Dp(s,o);let l,c;if(r.merge)l=new ht(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Ua(e,h,n);if(!o.contains(d))throw new N(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Rp(u,d)||u.push(d)}l=new ht(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new rE(new it(a),l,c)}class vo extends Ql{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vo}}function aE(t,e,n,s){const i=t.wa(1,e,n);Jl("Data must be an object, but it was:",i,s);const r=[],o=it.empty();Un(s,(l,c)=>{const u=Zl(e,l,n);c=xe(c);const h=i.ha(u);if(c instanceof vo)r.push(u);else{const d=Vi(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new ht(r);return new kp(o,a,i.fieldTransforms)}function lE(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[Ua(e,s,n)],l=[i];if(r.length%2!=0)throw new N(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ua(e,r[d])),l.push(r[d+1]);const c=[],u=it.empty();for(let d=a.length-1;d>=0;--d)if(!Rp(c,a[d])){const g=a[d];let m=l[d];m=xe(m);const y=o.ha(g);if(m instanceof vo)c.push(g);else{const w=Vi(m,y);w!=null&&(c.push(g),u.set(g,w))}}const h=new ht(c);return new kp(u,h,o.fieldTransforms)}function cE(t,e,n,s=!1){return Vi(n,t.wa(s?4:3,e))}function Vi(t,e){if(Np(t=xe(t)))return Jl("Unsupported field value:",e,t),Dp(t,e);if(t instanceof Ql)return function(n,s){if(!Ap(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Vi(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return n_(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Re.fromDate(n);return{timestampValue:Lr(s.Tt,i)}}if(n instanceof Re){const i=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Lr(s.Tt,i)}}if(n instanceof Yl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hs)return{bytesValue:Xf(s.Tt,n._byteString)};if(n instanceof nt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ul(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${po(n)}`)}(t,e)}function Dp(t,e){const n={};return If(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Un(t,(s,i)=>{const r=Vi(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Np(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Yl||t instanceof hs||t instanceof nt||t instanceof Ql)}function Jl(t,e,n){if(!Np(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=po(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Ua(t,e,n){if((e=xe(e))instanceof mo)return e._internalPath;if(typeof e=="string")return Zl(t,e);throw Ur("Field path arguments must be of type string or ",t,!1,void 0,n)}const uE=new RegExp("[~\\*/\\[\\]]");function Zl(t,e,n){if(e.search(uE)>=0)throw Ur(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mo(...e.split("."))._internalPath}catch{throw Ur(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ur(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new N(E.INVALID_ARGUMENT,a+t+l)}function Rp(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hE extends Op{data(){return super.data()}}function wo(t,e){return typeof e=="string"?Zl(t,e):e instanceof mo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ec{}class Mp extends ec{}function qs(t,e,...n){let s=[];e instanceof ec&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof tc).length,o=i.filter(a=>a instanceof bo).length;if(r>1||r>0&&o>0)throw new N(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class bo extends Mp{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new bo(e,n,s)}_apply(e){const n=this._parse(e);return Up(e._query,n),new yn(e.firestore,e.converter,ka(e._query,n))}_parse(e){const n=yo(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Bu(u,c);const d=[];for(const g of u)d.push(Vu(a,i,g));h={arrayValue:{values:d}}}else h=Vu(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Bu(u,c),h=cE(o,r,u,c==="in"||c==="not-in");return De.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xa(t,e,n){const s=e,i=wo("where",t);return bo._create(i,s,n)}class tc extends ec{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:St.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Up(r,a),r=ka(r,a)}(e._query,n),new yn(e.firestore,e.converter,ka(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nc extends Mp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new nc(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new N(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Xn(i,r);return function(a,l){if(Ll(a)===null){const c=io(a);c!==null&&xp(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new yn(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new bs(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Qo(t,e="asc"){const n=e,s=wo("orderBy",t);return nc._create(s,n)}function Vu(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new N(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Of(e)&&n.indexOf("/")!==-1)throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(we.fromString(n));if(!x.isDocumentKey(s))throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return hu(t,new x(s))}if(n instanceof nt)return hu(t,n._key);throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${po(n)}.`)}function Bu(t,e){if(!Array.isArray(t)||t.length===0)throw new N(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Up(t,e){if(e.isInequality()){const s=io(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new N(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Ll(t);r!==null&&xp(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xp(t,e,n){if(!n.isEqual(e))throw new N(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dE{convertValue(e,n="none"){switch(Rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const s={};return Un(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Yl(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Sf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const n=un(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);ve(np(s));const i=new ri(s.get(1),s.get(3)),r=new x(s.popFirst(5));return i.isEqual(n)||Wt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vp extends Op{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(wo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ur extends Vp{data(e={}){return super.data(e)}}class Bp{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ls(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ur(this._firestore,this._userDataWriter,s.key,s,new Ls(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ur(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ls(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ur(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ls(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:fE(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class sc extends dE{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function jp(t){t=wt(t,yn);const e=wt(t.firestore,dn),n=Gl(e),s=new sc(e);return Lp(t._query),Z0(n,t._query).then(i=>new Bp(e,s,t,i))}function Yo(t,e,n){t=wt(t,nt);const s=wt(t.firestore,dn),i=Fp(t.converter,e,n);return _o(s,[Pp(yo(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,vt.none())])}function ic(t,e,n,...s){t=wt(t,nt);const i=wt(t.firestore,dn),r=yo(i);let o;return o=typeof(e=xe(e))=="string"||e instanceof mo?lE(r,"updateDoc",t._key,e,n,s):aE(r,"updateDoc",t._key,e),_o(i,[o.toMutation(t._key,vt.exists(!0))])}function Fa(t){return _o(wt(t.firestore,dn),[new Ml(t._key,vt.none())])}function Va(t,e){const n=wt(t.firestore,dn),s=qt(t),i=Fp(t.converter,e);return _o(n,[Pp(yo(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,vt.exists(!1))]).then(()=>s)}function Xo(t,...e){var n,s,i;t=xe(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Fu(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Fu(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof nt)c=wt(t.firestore,dn),u=Ol(t._key.path),l={next:h=>{e[o]&&e[o](pE(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=wt(t,yn);c=wt(h.firestore,dn),u=h._query;const d=new sc(c);l={next:g=>{e[o]&&e[o](new Bp(c,d,h,g))},error:e[o+1],complete:e[o+2]},Lp(t._query)}return function(h,d,g,m){const y=new Ip(m),w=new mp(d,y,g);return h.asyncQueue.enqueueAndForget(async()=>pp(await Ma(h),w)),()=>{y.Pc(),h.asyncQueue.enqueueAndForget(async()=>gp(await Ma(h),w))}}(Gl(c),u,a,l)}function _o(t,e){return function(n,s){const i=new an;return n.asyncQueue.enqueueAndForget(async()=>x0(await J0(n),s,i)),i.promise}(Gl(t),e)}function pE(t,e,n){const s=n.docs.get(e._key),i=new sc(t);return new Vp(t,i,e._key,s,new Ls(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ws=n})(mi),ss(new kn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new dn(new Cb(n.getProvider("auth-internal")),new Db(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),on(au,"3.8.4",t),on(au,"3.8.4","esm2017")})();const gE={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},qp=Vh(gE),Ue=sE(qp),Hn=ww(qp);function mE(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,m,y,w,C,T,P,S,k,D,F,Y,R,G,te,O,H,M,Z,ee,Se,_e,ie,oe,Ce,pe,at,xt,b,K,ce,$e,V,fe,Ne,gt,Pt,ko,Ao,yc;return{c(){e=v("div"),n=v("h5"),n.textContent="Iniciar sesión",s=A(),i=v("form"),r=v("label"),r.textContent="Correo electrónico:",o=A(),a=v("input"),l=A(),c=v("label"),c.textContent="Contraseña:",u=A(),h=v("input"),d=A(),g=v("div"),g.innerHTML='<button type="submit">Iniciar sesión</button>',m=A(),y=v("div"),w=re(t[6]),C=A(),T=v("div"),P=v("h5"),P.textContent="Crear user",S=A(),k=v("form"),D=v("label"),D.textContent="Correo electrónico:",F=A(),Y=v("input"),R=A(),G=v("label"),G.textContent="Contraseña:",te=A(),O=v("input"),H=A(),M=v("div"),M.innerHTML='<button type="submit">crear User</button>',Z=A(),ee=v("div"),Se=re(t[6]),_e=A(),ie=v("div"),oe=v("h5"),oe.textContent="Borrar cuenta",Ce=A(),pe=v("form"),at=v("label"),at.textContent="Correo electrónico:",xt=A(),b=v("input"),K=A(),ce=v("label"),ce.textContent="Contraseña:",$e=A(),V=v("input"),fe=A(),Ne=v("div"),Ne.innerHTML='<button type="submit">delete User</button>',gt=A(),Pt=v("div"),ko=re(t[6]),f(r,"class","form-label svelte-1n7r5k9"),f(r,"for","liemail"),f(a,"class","form-control svelte-1n7r5k9"),f(a,"id","liemail"),f(a,"type","email"),a.required=!0,f(c,"class","form-label svelte-1n7r5k9"),f(c,"for","lipassword"),f(h,"class","form-control svelte-1n7r5k9"),f(h,"id","lipassword"),f(h,"type","password"),h.required=!0,f(g,"class","p-3 m-3"),f(y,"id","mensaje-error"),f(e,"class","p-3 border"),f(D,"class","form-label svelte-1n7r5k9"),f(D,"for","cemail"),f(Y,"class","form-control svelte-1n7r5k9"),f(Y,"id","cemail"),f(Y,"type","email"),Y.required=!0,f(G,"class","form-label svelte-1n7r5k9"),f(G,"for","cpassword"),f(O,"class","form-control svelte-1n7r5k9"),f(O,"id","cpassword"),f(O,"type","password"),O.required=!0,f(M,"class","p-3 m-3"),f(ee,"id","mensaje-error"),f(T,"class","p-3 border"),f(at,"for","demail"),f(at,"class","form-label svelte-1n7r5k9"),f(b,"class","form-control custom-input svelte-1n7r5k9"),f(b,"id","demail"),f(b,"type","email"),b.required=!0,f(ce,"for","dpassword"),f(ce,"class","form-label svelte-1n7r5k9"),f(V,"class","form-control svelte-1n7r5k9"),f(V,"type","password"),V.required=!0,f(Ne,"class","p-3 m-3"),f(Pt,"id","mensaje-error"),f(ie,"class","p-3 border")},m(me,et){J(me,e,et),p(e,n),p(e,s),p(e,i),p(i,r),p(i,o),p(i,a),ge(a,t[0]),p(i,l),p(i,c),p(i,u),p(i,h),ge(h,t[1]),p(i,d),p(i,g),p(e,m),p(e,y),p(y,w),J(me,C,et),J(me,T,et),p(T,P),p(T,S),p(T,k),p(k,D),p(k,F),p(k,Y),ge(Y,t[2]),p(k,R),p(k,G),p(k,te),p(k,O),ge(O,t[3]),p(k,H),p(k,M),p(T,Z),p(T,ee),p(ee,Se),J(me,_e,et),J(me,ie,et),p(ie,oe),p(ie,Ce),p(ie,pe),p(pe,at),p(pe,xt),p(pe,b),ge(b,t[4]),p(pe,K),p(pe,ce),p(pe,$e),p(pe,V),ge(V,t[5]),p(pe,fe),p(pe,Ne),p(ie,gt),p(ie,Pt),p(Pt,ko),Ao||(yc=[j(a,"input",t[12]),j(h,"input",t[13]),j(i,"submit",tr(t[9])),j(Y,"input",t[14]),j(O,"input",t[15]),j(k,"submit",tr(t[8])),j(b,"input",t[16]),j(V,"input",t[17]),j(pe,"submit",tr(t[11]))],Ao=!0)},p(me,et){et&1&&a.value!==me[0]&&ge(a,me[0]),et&2&&h.value!==me[1]&&ge(h,me[1]),et&64&&Ee(w,me[6]),et&4&&Y.value!==me[2]&&ge(Y,me[2]),et&8&&O.value!==me[3]&&ge(O,me[3]),et&64&&Ee(Se,me[6]),et&16&&b.value!==me[4]&&ge(b,me[4]),et&32&&V.value!==me[5]&&ge(V,me[5]),et&64&&Ee(ko,me[6])},d(me){me&&W(e),me&&W(C),me&&W(T),me&&W(_e),me&&W(ie),Ao=!1,rt(yc)}}}function yE(t){let e,n,s,i,r;return{c(){e=v("button"),e.textContent="cerrar sesion",n=A(),s=v("p"),s.textContent=`bienvenido ${Hn.currentUser.email}`,Ag(s,"font-size","x-small")},m(o,a){J(o,e,a),J(o,n,a),J(o,s,a),i||(r=j(e,"click",t[10]),i=!0)},p:Ie,d(o){o&&W(e),o&&W(n),o&&W(s),i=!1,r()}}}function vE(t){let e;function n(r,o){return r[7]?yE:mE}let s=n(t),i=s(t);return{c(){e=v("main"),i.c(),f(e,"class","svelte-1n7r5k9")},m(r,o){J(r,e,o),i.m(e,null)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e,null)))},i:Ie,o:Ie,d(r){r&&W(e),i.d()}}}function wE(t,e,n){let s;ut(t,As,D=>n(7,s=D));const i=ps();let r="",o="",a="",l="",c="",u="",h="";const d=async()=>{nv(Hn,a,l).then(D=>{D.user}).catch(D=>{n(6,h=D.message)})};async function g(){try{const D=await Fc(Hn,r,o);lt(As,s=D.user,s),console.log(D),i("loginSuccess",D.user)}catch(D){console.error("Error al iniciar sesión:",D.message),n(6,h=D.message)}}function m(){lt(As,s=null,s),rv(Hn).then(()=>{console.log("Se ha cerrado sesión correctamente.")}).catch(D=>{console.error("Error al cerrar sesión:",D.message)}),console.log(As)}async function y(){try{await Fc(Hn,c,u),await Hn.currentUser.delete(),console.log("Cuenta eliminada correctamente.")}catch(D){console.error("Error al eliminar la cuenta:",D.message)}}function w(){r=this.value,n(0,r)}function C(){o=this.value,n(1,o)}function T(){a=this.value,n(2,a)}function P(){l=this.value,n(3,l)}function S(){c=this.value,n(4,c)}function k(){u=this.value,n(5,u)}return[r,o,a,l,c,u,h,s,d,g,m,y,w,C,T,P,S,k]}class $p extends At{constructor(e){super(),kt(this,e,wE,vE,_t,{})}}let $s=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}-${o}-${s}-${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function ju(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function qu(t){let e,n=t[12].plan+"",s;return{c(){e=v("option"),s=re(n),e.__value=t[14],e.value=e.__value},m(i,r){J(i,e,r),p(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&Ee(s,n)},d(i){i&&W(e)}}}function bE(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=qu(ju(t,a,c));return{c(){e=v("div"),n=v("input"),s=A(),i=v("select");for(let c=0;c<l.length;c+=1)l[c].c();f(n,"type","checkbox"),f(n,"name","CheckBoxParticular"),f(n,"id","CheckBoxParticular"),f(i,"name","plan"),f(i,"id","plan"),f(i,"class","svelte-1de4xhy"),t[1]===void 0&&Ht(()=>t[8].call(i)),zi(i,"SelectPlanVisible",t[0]),zi(i,"SelectPlanHidden",t[3]),f(e,"id","selectPlanContainer"),f(e,"class","svelte-1de4xhy")},m(c,u){J(c,e,u),p(e,n),n.checked=t[0],p(e,s),p(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);dr(i,t[1]),r||(o=[j(n,"change",t[7]),j(n,"change",t[4]),j(i,"change",t[8]),j(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=ju(c,a,h);l[h]?l[h].p(d,u):(l[h]=qu(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&dr(i,c[1]),u&1&&zi(i,"SelectPlanVisible",c[0]),u&8&&zi(i,"SelectPlanHidden",c[3])},i:Ie,o:Ie,d(c){c&&W(e),fi(l,c),r=!1,rt(o)}}}function _E(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=y=>{n(0,r=y)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=y=>{var w=y.target.checked;l(w),c()},h=ps(),d=y=>{n(1,o=parseInt(y.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function g(){r=this.checked,n(0,r)}function m(){o=kh(this),n(1,o)}return t.$$set=y=>{"planes"in y&&n(2,s=y.planes),"planSeleccionado"in y&&n(6,i=y.planSeleccionado),"SelectPlanVisible"in y&&n(0,r=y.SelectPlanVisible),"indicePlan"in y&&n(1,o=y.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,g,m]}class EE extends At{constructor(e){super(),kt(this,e,_E,bE,_t,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}var IE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function TE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hp={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(IE,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(w){w.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(w){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),g=i("y",this.options),m=this.options.position=="left"?d:"-"+d,y=this.options.gravity=="toastify-top"?g:"-"+g;o.style.transform="translate("+m+","+y+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var g=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+g):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+g):(c[h].style[u]=a[u]+"px",a[u]+=d+g)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Hp);var SE=Hp.exports;const In=TE(SE),Kp="SweetAlert2:",CE=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},rc=t=>t.charAt(0).toUpperCase()+t.slice(1),pt=t=>Array.prototype.slice.call(t),ot=t=>{console.warn(`${Kp} ${typeof t=="object"?t.join(" "):t}`)},Fn=t=>{console.error(`${Kp} ${t}`)},$u=[],kE=t=>{$u.includes(t)||($u.push(t),ot(t))},AE=(t,e)=>{kE(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},Eo=t=>typeof t=="function"?t():t,oc=t=>t&&typeof t.toPromise=="function",Bi=t=>oc(t)?t.toPromise():Promise.resolve(t),ac=t=>t&&Promise.resolve(t)===t,es={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},PE=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],DE={},NE=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],zp=t=>Object.prototype.hasOwnProperty.call(es,t),Wp=t=>PE.indexOf(t)!==-1,Ba=t=>DE[t],RE=t=>{zp(t)||ot(`Unknown parameter "${t}"`)},OE=t=>{NE.includes(t)&&ot(`The parameter "${t}" is incompatible with toasts`)},LE=t=>{Ba(t)&&AE(t,Ba(t))},ME=t=>{!t.backdrop&&t.allowOutsideClick&&ot('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)RE(e),t.toast&&OE(e),LE(e)},UE="swal2-",Gp=t=>{const e={};for(const n in t)e[t[n]]=UE+t[n];return e},_=Gp(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Hs=Gp(["success","warning","info","question","error"]),Je=()=>document.body.querySelector(`.${_.container}`),ji=t=>{const e=Je();return e?e.querySelector(t):null},Et=t=>ji(`.${t}`),de=()=>Et(_.popup),qi=()=>Et(_.icon),Qp=()=>Et(_.title),xr=()=>Et(_["html-container"]),Yp=()=>Et(_.image),Xp=()=>Et(_["progress-steps"]),Io=()=>Et(_["validation-message"]),Ct=()=>ji(`.${_.actions} .${_.confirm}`),fn=()=>ji(`.${_.actions} .${_.deny}`),xE=()=>Et(_["input-label"]),Is=()=>ji(`.${_.loader}`),On=()=>ji(`.${_.actions} .${_.cancel}`),$i=()=>Et(_.actions),Jp=()=>Et(_.footer),To=()=>Et(_["timer-progress-bar"]),lc=()=>Et(_.close),FE=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,cc=()=>{const t=pt(de().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=pt(de().querySelectorAll(FE)).filter(n=>n.getAttribute("tabindex")!=="-1");return CE(t.concat(e)).filter(n=>dt(n))},uc=()=>$t(document.body,_.shown)&&!$t(document.body,_["toast-shown"])&&!$t(document.body,_["no-backdrop"]),So=()=>de()&&$t(de(),_.toast),VE=()=>de().hasAttribute("data-loading"),ts={previousBodyPadding:null},We=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");pt(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),pt(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},$t=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},BE=(t,e)=>{pt(t.classList).forEach(n=>{!Object.values(_).includes(n)&&!Object.values(Hs).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},bt=(t,e,n)=>{if(BE(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return ot(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);le(t,e.customClass[n])}},hc=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${_.popup} > .${_[e]}`);case"checkbox":return t.querySelector(`.${_.popup} > .${_.checkbox} input`);case"radio":return t.querySelector(`.${_.popup} > .${_.radio} input:checked`)||t.querySelector(`.${_.popup} > .${_.radio} input:first-child`);case"range":return t.querySelector(`.${_.popup} > .${_.range} input`);default:return t.querySelector(`.${_.popup} > .${_.input}`)}},Zp=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},eg=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},le=(t,e)=>{eg(t,e,!0)},Ut=(t,e)=>{eg(t,e,!1)},nn=(t,e)=>{const n=pt(t.childNodes);for(let s=0;s<n.length;s++)if($t(n[s],e))return n[s]},Ks=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},je=(t,e="flex")=>{t.style.display=e},Ze=t=>{t.style.display="none"},Hu=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Co=(t,e,n)=>{e?je(t,n):Ze(t)},dt=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),jE=()=>!dt(Ct())&&!dt(fn())&&!dt(On()),Ku=t=>t.scrollHeight>t.clientHeight,tg=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},dc=(t,e=!1)=>{const n=To();dt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},qE=()=>{const t=To(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},ng=()=>typeof window>"u"||typeof document>"u",$E=100,X={},HE=()=>{X.previousActiveElement&&X.previousActiveElement.focus?(X.previousActiveElement.focus(),X.previousActiveElement=null):document.body&&document.body.focus()},KE=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;X.restoreFocusTimeout=setTimeout(()=>{HE(),e()},$E),window.scrollTo(n,s)}),zE=`
 <div aria-labelledby="${_.title}" aria-describedby="${_["html-container"]}" class="${_.popup}" tabindex="-1">
   <button type="button" class="${_.close}"></button>
   <ul class="${_["progress-steps"]}"></ul>
   <div class="${_.icon}"></div>
   <img class="${_.image}" />
   <h2 class="${_.title}" id="${_.title}"></h2>
   <div class="${_["html-container"]}" id="${_["html-container"]}"></div>
   <input class="${_.input}" />
   <input type="file" class="${_.file}" />
   <div class="${_.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${_.select}"></select>
   <div class="${_.radio}"></div>
   <label for="${_.checkbox}" class="${_.checkbox}">
     <input type="checkbox" />
     <span class="${_.label}"></span>
   </label>
   <textarea class="${_.textarea}"></textarea>
   <div class="${_["validation-message"]}" id="${_["validation-message"]}"></div>
   <div class="${_.actions}">
     <div class="${_.loader}"></div>
     <button type="button" class="${_.confirm}"></button>
     <button type="button" class="${_.deny}"></button>
     <button type="button" class="${_.cancel}"></button>
   </div>
   <div class="${_.footer}"></div>
   <div class="${_["timer-progress-bar-container"]}">
     <div class="${_["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),WE=()=>{const t=Je();return t?(t.remove(),Ut([document.documentElement,document.body],[_["no-backdrop"],_["toast-shown"],_["has-column"]]),!0):!1},vn=()=>{X.currentInstance.resetValidationMessage()},GE=()=>{const t=de(),e=nn(t,_.input),n=nn(t,_.file),s=t.querySelector(`.${_.range} input`),i=t.querySelector(`.${_.range} output`),r=nn(t,_.select),o=t.querySelector(`.${_.checkbox} input`),a=nn(t,_.textarea);e.oninput=vn,n.onchange=vn,r.onchange=vn,o.onchange=vn,a.oninput=vn,s.oninput=()=>{vn(),i.value=s.value},s.onchange=()=>{vn(),s.nextSibling.value=s.value}},QE=t=>typeof t=="string"?document.querySelector(t):t,YE=t=>{const e=de();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},XE=t=>{window.getComputedStyle(t).direction==="rtl"&&le(Je(),_.rtl)},JE=t=>{const e=WE();if(ng()){Fn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=_.container,e&&le(n,_["no-transition"]),We(n,zE);const s=QE(t.target);s.appendChild(n),YE(t),XE(s),GE()},fc=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?ZE(t,e):t&&We(e,t)},ZE=(t,e)=>{t.jquery?eI(e,t):We(e,t.toString())},eI=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ui=(()=>{if(ng())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),tI=()=>{const t=document.createElement("div");t.className=_["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},nI=(t,e)=>{const n=$i(),s=Is();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Ze(n):je(n),bt(n,e,"actions"),sI(n,s,e),We(s,e.loaderHtml),bt(s,e,"loader")};function sI(t,e,n){const s=Ct(),i=fn(),r=On();Jo(s,"confirm",n),Jo(i,"deny",n),Jo(r,"cancel",n),iI(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function iI(t,e,n,s){if(!s.buttonsStyling)return Ut([t,e,n],_.styled);le([t,e,n],_.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,le(t,_["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,le(e,_["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,le(n,_["default-outline"]))}function Jo(t,e,n){Co(t,n[`show${rc(e)}Button`],"inline-block"),We(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=_[e],bt(t,n,`${e}Button`),le(t,n[`${e}ButtonClass`])}function rI(t,e){typeof e=="string"?t.style.background=e:e||le([document.documentElement,document.body],_["no-backdrop"])}function oI(t,e){e in _?le(t,_[e]):(ot('The "position" parameter is not valid, defaulting to "center"'),le(t,_.center))}function aI(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in _&&le(t,_[n])}}const lI=(t,e)=>{const n=Je();n&&(rI(n,e.backdrop),oI(n,e.position),aI(n,e.grow),bt(n,e,"container"))},ne={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},cI=["input","file","range","select","radio","checkbox","textarea"],uI=(t,e)=>{const n=de(),s=ne.innerParams.get(t),i=!s||e.input!==s.input;cI.forEach(r=>{const o=_[r],a=nn(n,o);fI(r,e.inputAttributes),a.className=o,i&&Ze(a)}),e.input&&(i&&hI(e),pI(e))},hI=t=>{if(!st[t.input])return Fn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=sg(t.input),n=st[t.input](e,t);je(n),setTimeout(()=>{Zp(n)})},dI=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},fI=(t,e)=>{const n=hc(de(),t);if(n){dI(n);for(const s in e)n.setAttribute(s,e[s])}},pI=t=>{const e=sg(t.input);t.customClass&&le(e,t.customClass.input)},pc=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Hi=(t,e,n)=>{if(n.inputLabel){t.id=_.input;const s=document.createElement("label"),i=_["input-label"];s.setAttribute("for",t.id),s.className=i,le(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},sg=t=>{const e=_[t]?_[t]:_.input;return nn(de(),e)},st={};st.text=st.email=st.password=st.number=st.tel=st.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:ac(e.inputValue)||ot(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Hi(t,t,e),pc(t,e),t.type=e.input,t);st.file=(t,e)=>(Hi(t,t,e),pc(t,e),t);st.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Hi(n,t,e),t};st.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");We(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Hi(t,t,e),t};st.radio=t=>(t.textContent="",t);st.checkbox=(t,e)=>{const n=hc(de(),"checkbox");n.value="1",n.id=_.checkbox,n.checked=!!e.inputValue;const s=t.querySelector("span");return We(s,e.inputPlaceholder),t};st.textarea=(t,e)=>{t.value=e.inputValue,pc(t,e),Hi(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(de()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?de().style.width=`${r}px`:de().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const gI=(t,e)=>{const n=xr();bt(n,e,"htmlContainer"),e.html?(fc(e.html,n),je(n,"block")):e.text?(n.textContent=e.text,je(n,"block")):Ze(n),uI(t,e)},mI=(t,e)=>{const n=Jp();Co(n,e.footer),e.footer&&fc(e.footer,n),bt(n,e,"footer")},yI=(t,e)=>{const n=lc();We(n,e.closeButtonHtml),bt(n,e,"closeButton"),Co(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},vI=(t,e)=>{const n=ne.innerParams.get(t),s=qi();if(n&&e.icon===n.icon){Wu(s,e),zu(s,e);return}if(!e.icon&&!e.iconHtml)return Ze(s);if(e.icon&&Object.keys(Hs).indexOf(e.icon)===-1)return Fn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Ze(s);je(s),Wu(s,e),zu(s,e),le(s,e.showClass.icon)},zu=(t,e)=>{for(const n in Hs)e.icon!==n&&Ut(t,Hs[n]);le(t,Hs[e.icon]),EI(t,e),wI(),bt(t,e,"icon")},wI=()=>{const t=de(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},bI=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,_I=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Wu=(t,e)=>{t.textContent="",e.iconHtml?We(t,Gu(e.iconHtml)):e.icon==="success"?We(t,bI):e.icon==="error"?We(t,_I):We(t,Gu({question:"?",warning:"!",info:"i"}[e.icon]))},EI=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Hu(t,n,"backgroundColor",e.iconColor);Hu(t,".swal2-success-ring","borderColor",e.iconColor)}},Gu=t=>`<div class="${_["icon-content"]}">${t}</div>`,II=(t,e)=>{const n=Yp();if(!e.imageUrl)return Ze(n);je(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),Ks(n,"width",e.imageWidth),Ks(n,"height",e.imageHeight),n.className=_.image,bt(n,e,"image")},TI=t=>{const e=document.createElement("li");return le(e,_["progress-step"]),We(e,t),e},SI=t=>{const e=document.createElement("li");return le(e,_["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},CI=(t,e)=>{const n=Xp();if(!e.progressSteps||e.progressSteps.length===0)return Ze(n);je(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&ot("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=TI(s);if(n.appendChild(r),i===e.currentProgressStep&&le(r,_["active-progress-step"]),i!==e.progressSteps.length-1){const o=SI(e);n.appendChild(o)}})},kI=(t,e)=>{const n=Qp();Co(n,e.title||e.titleText,"block"),e.title&&fc(e.title,n),e.titleText&&(n.innerText=e.titleText),bt(n,e,"title")},AI=(t,e)=>{const n=Je(),s=de();e.toast?(Ks(n,"width",e.width),s.style.width="100%",s.insertBefore(Is(),qi())):Ks(s,"width",e.width),Ks(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Ze(Io()),PI(s,e)},PI=(t,e)=>{t.className=`${_.popup} ${dt(t)?e.showClass.popup:""}`,e.toast?(le([document.documentElement,document.body],_["toast-shown"]),le(t,_.toast)):le(t,_.modal),bt(t,e,"popup"),typeof e.customClass=="string"&&le(t,e.customClass),e.icon&&le(t,_[`icon-${e.icon}`])},ig=(t,e)=>{AI(t,e),lI(t,e),CI(t,e),vI(t,e),II(t,e),kI(t,e),yI(t,e),gI(t,e),nI(t,e),mI(t,e),typeof e.didRender=="function"&&e.didRender(de())},Ts=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),DI=()=>{pt(document.body.children).forEach(e=>{e===Je()||e.contains(Je())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},rg=()=>{pt(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},og=["swal-title","swal-html","swal-footer"],NI=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return FI(n),Object.assign(RI(n),OI(n),LI(n),MI(n),UI(n),xI(n,og))},RI=t=>{const e={};return pt(t.querySelectorAll("swal-param")).forEach(n=>{Ln(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof es[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof es[s]=="object"&&(e[s]=JSON.parse(i))}),e},OI=t=>{const e={};return pt(t.querySelectorAll("swal-button")).forEach(n=>{Ln(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${rc(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},LI=t=>{const e={},n=t.querySelector("swal-image");return n&&(Ln(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},MI=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Ln(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},UI=t=>{const e={},n=t.querySelector("swal-input");n&&(Ln(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},pt(s).forEach(i=>{Ln(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},xI=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(Ln(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},FI=t=>{const e=og.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);pt(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&ot(`Unrecognized element <${s}>`)})},Ln=(t,e)=>{pt(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&ot([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Qu={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function VI(t){t.inputValidator||Object.keys(Qu).forEach(e=>{t.input===e&&(t.inputValidator=Qu[e])})}function BI(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(ot('Target parameter is not valid, defaulting to "body"'),t.target="body")}function jI(t){VI(t),t.showLoaderOnConfirm&&!t.preConfirm&&ot(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),BI(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),JE(t)}class qI{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const $I=()=>{ts.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(ts.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${ts.previousBodyPadding+tI()}px`)},HI=()=>{ts.previousBodyPadding!==null&&(document.body.style.paddingRight=`${ts.previousBodyPadding}px`,ts.previousBodyPadding=null)},KI=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!$t(document.body,_.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,le(document.body,_.iosfix),WI(),zI()}},zI=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&de().scrollHeight>window.innerHeight-44&&(Je().style.paddingBottom="44px")},WI=()=>{const t=Je();let e;t.ontouchstart=n=>{e=GI(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},GI=t=>{const e=t.target,n=Je();return QI(t)||YI(t)?!1:e===n||!Ku(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Ku(xr())&&xr().contains(e))},QI=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",YI=t=>t.touches&&t.touches.length>1,XI=()=>{if($t(document.body,_.iosfix)){const t=parseInt(document.body.style.top,10);Ut(document.body,_.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},ag=10,JI=t=>{const e=Je(),n=de();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;tT(e,n,t),setTimeout(()=>{ZI(e,n)},ag),uc()&&(eT(e,t.scrollbarPadding,i),DI()),!So()&&!X.previousActiveElement&&(X.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Ut(e,_["no-transition"])},lg=t=>{const e=de();if(t.target!==e)return;const n=Je();e.removeEventListener(ui,lg),n.style.overflowY="auto"},ZI=(t,e)=>{ui&&tg(e)?(t.style.overflowY="hidden",e.addEventListener(ui,lg)):t.style.overflowY="auto"},eT=(t,e,n)=>{KI(),e&&n!=="hidden"&&$I(),setTimeout(()=>{t.scrollTop=0})},tT=(t,e,n)=>{le(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),je(e,"grid"),setTimeout(()=>{le(e,n.showClass.popup),e.style.removeProperty("opacity")},ag),le([document.documentElement,document.body],_.shown),n.heightAuto&&n.backdrop&&!n.toast&&le([document.documentElement,document.body],_["height-auto"])},ds=t=>{let e=de();e||new di,e=de();const n=Is();So()?Ze(qi()):nT(e,t),je(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},nT=(t,e)=>{const n=$i(),s=Is();!e&&dt(Ct())&&(e=Ct()),je(n),e&&(Ze(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),le([t,n],_.loading)},sT=(t,e)=>{e.input==="select"||e.input==="radio"?lT(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(oc(e.inputValue)||ac(e.inputValue))&&(ds(Ct()),cT(t,e))},iT=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return rT(n);case"radio":return oT(n);case"file":return aT(n);default:return e.inputAutoTrim?n.value.trim():n.value}},rT=t=>t.checked?1:0,oT=t=>t.checked?t.value:null,aT=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,lT=(t,e)=>{const n=de(),s=i=>uT[e.input](n,ja(i),e);oc(e.inputOptions)||ac(e.inputOptions)?(ds(Ct()),Bi(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):Fn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},cT=(t,e)=>{const n=t.getInput();Ze(n),Bi(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,je(n),n.focus(),t.hideLoading()}).catch(s=>{Fn(`Error in inputValue promise: ${s}`),n.value="",je(n),n.focus(),t.hideLoading()})},uT={select:(t,e,n)=>{const s=nn(t,_.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,We(l,o),l.selected=Yu(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=nn(t,_.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=_.radio,l.value=o,Yu(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");We(u,a),u.className=_.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},ja=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=ja(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=ja(s)),e.push([n,s])}),e},Yu=(t,e)=>e&&e.toString()===t.toString();function Xu(){const t=ne.innerParams.get(this);if(!t)return;const e=ne.domCache.get(this);Ze(e.loader),So()?t.icon&&je(qi()):hT(e),Ut([e.popup,e.actions],_.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const hT=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?je(e[0],"inline-block"):jE()&&Ze(t.actions)};function dT(t){const e=ne.innerParams.get(t||this),n=ne.domCache.get(t||this);return n?hc(n.popup,e.input):null}const hi={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},fT=()=>dt(de()),cg=()=>Ct()&&Ct().click(),pT=()=>fn()&&fn().click(),gT=()=>On()&&On().click(),ug=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},mT=(t,e,n,s)=>{ug(e),n.toast||(e.keydownHandler=i=>vT(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:de(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},qa=(t,e,n)=>{const s=cc();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();de().focus()},hg=["ArrowRight","ArrowDown"],yT=["ArrowLeft","ArrowUp"],vT=(t,e,n)=>{const s=ne.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?wT(t,e,s):e.key==="Tab"?bT(e,s):[...hg,...yT].includes(e.key)?_T(e.key):e.key==="Escape"&&ET(e,s,n)))},wT=(t,e,n)=>{if(Eo(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;cg(),e.preventDefault()}},bT=(t,e)=>{const n=t.target,s=cc();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?qa(e,i,-1):qa(e,i,1),t.stopPropagation(),t.preventDefault()},_T=t=>{const e=Ct(),n=fn(),s=On();if(![e,n,s].includes(document.activeElement))return;const i=hg.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<$i().children.length;o++){if(r=r[i],!r)return;if(dt(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},ET=(t,e,n)=>{Eo(e.allowEscapeKey)&&(t.preventDefault(),n(Ts.esc))};function dg(t,e,n,s){So()?Ju(t,s):(KE(n).then(()=>Ju(t,s)),ug(X)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),uc()&&(HI(),XI(),rg()),IT()}function IT(){Ut([document.documentElement,document.body],[_.shown,_["height-auto"],_["no-backdrop"],_["toast-shown"]])}function er(t){t=kT(t);const e=hi.swalPromiseResolve.get(this),n=ST(this);this.isAwaitingPromise()?t.isDismissed||(Ki(this),e(t)):n&&e(t)}function TT(){return!!ne.awaitingPromise.get(this)}const ST=t=>{const e=de();if(!e)return!1;const n=ne.innerParams.get(t);if(!n||$t(e,n.hideClass.popup))return!1;Ut(e,n.showClass.popup),le(e,n.hideClass.popup);const s=Je();return Ut(s,n.showClass.backdrop),le(s,n.hideClass.backdrop),AT(t,e,n),!0};function CT(t){const e=hi.swalPromiseReject.get(this);Ki(this),e&&e(t)}const Ki=t=>{t.isAwaitingPromise()&&(ne.awaitingPromise.delete(t),ne.innerParams.get(t)||t._destroy())},kT=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),AT=(t,e,n)=>{const s=Je(),i=ui&&tg(e);typeof n.willClose=="function"&&n.willClose(e),i?PT(t,e,s,n.returnFocus,n.didClose):dg(t,s,n.returnFocus,n.didClose)},PT=(t,e,n,s,i)=>{X.swalCloseEventFinishedCallback=dg.bind(null,t,n,s,i),e.addEventListener(ui,function(r){r.target===e&&(X.swalCloseEventFinishedCallback(),delete X.swalCloseEventFinishedCallback)})},Ju=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function fg(t,e,n){const s=ne.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function pg(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function DT(){fg(this,["confirmButton","denyButton","cancelButton"],!1)}function NT(){fg(this,["confirmButton","denyButton","cancelButton"],!0)}function RT(){return pg(this.getInput(),!1)}function OT(){return pg(this.getInput(),!0)}function LT(t){const e=ne.domCache.get(this),n=ne.innerParams.get(this);We(e.validationMessage,t),e.validationMessage.className=_["validation-message"],n.customClass&&n.customClass.validationMessage&&le(e.validationMessage,n.customClass.validationMessage),je(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",_["validation-message"]),Zp(s),le(s,_.inputerror))}function MT(){const t=ne.domCache.get(this);t.validationMessage&&Ze(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Ut(e,_.inputerror))}function UT(){return ne.domCache.get(this).progressSteps}function xT(t){const e=de(),n=ne.innerParams.get(this);if(!e||$t(e,n.hideClass.popup))return ot("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=FT(t),i=Object.assign({},n,s);ig(this,i),ne.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const FT=t=>{const e={};return Object.keys(t).forEach(n=>{Wp(n)?e[n]=t[n]:ot(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function VT(){const t=ne.domCache.get(this),e=ne.innerParams.get(this);if(!e){gg(this);return}t.popup&&X.swalCloseEventFinishedCallback&&(X.swalCloseEventFinishedCallback(),delete X.swalCloseEventFinishedCallback),X.deferDisposalTimer&&(clearTimeout(X.deferDisposalTimer),delete X.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),BT(this)}const BT=t=>{gg(t),delete t.params,delete X.keydownHandler,delete X.keydownTarget,delete X.currentInstance},gg=t=>{t.isAwaitingPromise()?(Zo(ne,t),ne.awaitingPromise.set(t,!0)):(Zo(hi,t),Zo(ne,t))},Zo=(t,e)=>{for(const n in t)t[n].delete(e)},mg=Object.freeze(Object.defineProperty({__proto__:null,_destroy:VT,close:er,closeModal:er,closePopup:er,closeToast:er,disableButtons:NT,disableInput:OT,disableLoading:Xu,enableButtons:DT,enableInput:RT,getInput:dT,getProgressSteps:UT,handleAwaitingPromise:Ki,hideLoading:Xu,isAwaitingPromise:TT,rejectPromise:CT,resetValidationMessage:MT,showValidationMessage:LT,update:xT},Symbol.toStringTag,{value:"Module"})),jT=t=>{const e=ne.innerParams.get(t);t.disableButtons(),e.input?yg(t,"confirm"):mc(t,!0)},qT=t=>{const e=ne.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?yg(t,"deny"):gc(t,!1)},$T=(t,e)=>{t.disableButtons(),e(Ts.cancel)},yg=(t,e)=>{const n=ne.innerParams.get(t);if(!n.input)return Fn(`The "input" parameter is needed to be set when using returnInputValueOn${rc(e)}`);const s=iT(t,n);n.inputValidator?HT(t,s,e):t.getInput().checkValidity()?e==="deny"?gc(t,s):mc(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},HT=(t,e,n)=>{const s=ne.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Bi(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?gc(t,e):mc(t,e)})},gc=(t,e)=>{const n=ne.innerParams.get(t||globalThis);n.showLoaderOnDeny&&ds(fn()),n.preDeny?(ne.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Bi(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Ki(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>vg(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},Zu=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},vg=(t,e)=>{t.rejectPromise(e)},mc=(t,e)=>{const n=ne.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&ds(),n.preConfirm?(t.resetValidationMessage(),ne.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Bi(n.preConfirm(e,n.validationMessage))).then(i=>{dt(Io())||i===!1?(t.hideLoading(),Ki(t)):Zu(t,typeof i>"u"?e:i)}).catch(i=>vg(t||globalThis,i))):Zu(t,e)},KT=(t,e,n)=>{ne.innerParams.get(t).toast?zT(t,e,n):(GT(e),QT(e),YT(t,e,n))},zT=(t,e,n)=>{e.popup.onclick=()=>{const s=ne.innerParams.get(t);s&&(WT(s)||s.timer||s.input)||n(Ts.close)}},WT=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Fr=!1;const GT=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Fr=!0)}}},QT=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Fr=!0)}}},YT=(t,e,n)=>{e.container.onclick=s=>{const i=ne.innerParams.get(t);if(Fr){Fr=!1;return}s.target===e.container&&Eo(i.allowOutsideClick)&&n(Ts.backdrop)}},XT=t=>typeof t=="object"&&t.jquery,eh=t=>t instanceof Element||XT(t),JT=t=>{const e={};return typeof t[0]=="object"&&!eh(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||eh(i)?e[n]=i:i!==void 0&&Fn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function ZT(...t){const e=this;return new e(...t)}function eS(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const tS=()=>X.timeout&&X.timeout.getTimerLeft(),wg=()=>{if(X.timeout)return qE(),X.timeout.stop()},bg=()=>{if(X.timeout){const t=X.timeout.start();return dc(t),t}},nS=()=>{const t=X.timeout;return t&&(t.running?wg():bg())},sS=t=>{if(X.timeout){const e=X.timeout.increase(t);return dc(e,!0),e}},iS=()=>X.timeout&&X.timeout.isRunning();let th=!1;const $a={};function rS(t="data-swal-template"){$a[t]=this,th||(document.body.addEventListener("click",oS),th=!0)}const oS=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in $a){const s=e.getAttribute(n);if(s){$a[n].fire({template:s});return}}},aS=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:JT,bindClickHandler:rS,clickCancel:gT,clickConfirm:cg,clickDeny:pT,enableLoading:ds,fire:ZT,getActions:$i,getCancelButton:On,getCloseButton:lc,getConfirmButton:Ct,getContainer:Je,getDenyButton:fn,getFocusableElements:cc,getFooter:Jp,getHtmlContainer:xr,getIcon:qi,getImage:Yp,getInputLabel:xE,getLoader:Is,getPopup:de,getTimerLeft:tS,getTimerProgressBar:To,getTitle:Qp,getValidationMessage:Io,increaseTimer:sS,isDeprecatedParameter:Ba,isLoading:VE,isTimerRunning:iS,isUpdatableParameter:Wp,isValidParameter:zp,isVisible:fT,mixin:eS,resumeTimer:bg,showLoading:ds,stopTimer:wg,toggleTimer:nS},Symbol.toStringTag,{value:"Module"}));let Ha;class Ss{constructor(...e){if(typeof window>"u")return;Ha=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);ne.promise.set(this,s)}_main(e,n={}){ME(Object.assign({},n,e)),X.currentInstance&&(X.currentInstance._destroy(),uc()&&rg()),X.currentInstance=this;const s=cS(e,n);jI(s),Object.freeze(s),X.timeout&&(X.timeout.stop(),delete X.timeout),clearTimeout(X.restoreFocusTimeout);const i=uS(this);return ig(this,s),ne.innerParams.set(this,s),lS(this,i,s)}then(e){return ne.promise.get(this).then(e)}finally(e){return ne.promise.get(this).finally(e)}}const lS=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};hi.swalPromiseResolve.set(t,s),hi.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>jT(t),e.denyButton.onclick=()=>qT(t),e.cancelButton.onclick=()=>$T(t,r),e.closeButton.onclick=()=>r(Ts.close),KT(t,e,r),mT(t,X,n,r),sT(t,n),JI(n),hS(X,n,r),dS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),cS=(t,e)=>{const n=NI(t),s=Object.assign({},es,e,n,t);return s.showClass=Object.assign({},es.showClass,s.showClass),s.hideClass=Object.assign({},es.hideClass,s.hideClass),s},uS=t=>{const e={popup:de(),container:Je(),actions:$i(),confirmButton:Ct(),denyButton:fn(),cancelButton:On(),loader:Is(),closeButton:lc(),validationMessage:Io(),progressSteps:Xp()};return ne.domCache.set(t,e),e},hS=(t,e,n)=>{const s=To();Ze(s),e.timer&&(t.timeout=new qI(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(je(s),bt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&dc(e.timer)})))},dS=(t,e)=>{if(!e.toast){if(!Eo(e.allowEnterKey))return pS();fS(t,e)||qa(e,-1,1)}},fS=(t,e)=>e.focusDeny&&dt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&dt(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&dt(t.confirmButton)?(t.confirmButton.focus(),!0):!1,pS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Ss.prototype,mg);Object.assign(Ss,aS);Object.keys(mg).forEach(t=>{Ss[t]=function(...e){if(Ha)return Ha[t](...e)}});Ss.DismissReason=Ts;Ss.version="11.4.8";const di=Ss;di.default=di;const gS=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},mS=async t=>{try{await ic(qt(Ue,"Pacientes",t.id),t)}catch(e){console.log(e)}};function nh(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function sh(t){let e,n,s=t[0],i=[];for(let r=0;r<s.length;r+=1)i[r]=ih(nh(t,s,r));return{c(){e=v("div"),n=v("ul");for(let r=0;r<i.length;r+=1)i[r].c();f(n,"class","sinPunto svelte-1ru9vt8"),f(e,"class","listadoPacientes svelte-1ru9vt8")},m(r,o){J(r,e,o),p(e,n);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null)},p(r,o){if(o&7){s=r[0];let a;for(a=0;a<s.length;a+=1){const l=nh(r,s,a);i[a]?i[a].p(l,o):(i[a]=ih(l),i[a].c(),i[a].m(n,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}},d(r){r&&W(e),fi(i,r)}}}function ih(t){let e,n,s,i,r,o=`${t[9].apellido}, ${t[9].nombre}`.slice(0,20).padEnd(21," ")+`${t[9].plan=="particular"?"":t[9].nroSocio+"   plan "+t[9].plan.plan}`,a,l,c,u,h,d;return u=Ch(t[5][0]),{c(){e=v("li"),n=v("input"),i=A(),r=v("label"),a=re(o),c=A(),f(n,"type","radio"),f(n,"id",s=t[9].id),f(n,"name","pacientes"),n.__value=t[11],n.value=n.__value,f(n,"class","svelte-1ru9vt8"),f(r,"for",l=t[9].id),f(r,"class","svelte-1ru9vt8"),f(e,"class","svelte-1ru9vt8"),u.p(n)},m(g,m){J(g,e,m),p(e,n),n.checked=n.__value===t[1],p(e,i),p(e,r),p(r,a),p(e,c),h||(d=[j(n,"change",t[4]),j(n,"change",t[2])],h=!0)},p(g,m){m&1&&s!==(s=g[9].id)&&f(n,"id",s),m&3&&(n.checked=n.__value===g[1]),m&1&&o!==(o=`${g[9].apellido}, ${g[9].nombre}`.slice(0,20).padEnd(21," ")+`${g[9].plan=="particular"?"":g[9].nroSocio+"   plan "+g[9].plan.plan}`)&&Ee(a,o),m&1&&l!==(l=g[9].id)&&f(r,"for",l)},d(g){g&&W(e),u.r(),h=!1,rt(d)}}}function yS(t){let e,n=t[0].length>0&&sh(t);return{c(){n&&n.c(),e=Wa()},m(s,i){n&&n.m(s,i),J(s,e,i)},p(s,[i]){s[0].length>0?n?n.p(s,i):(n=sh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:Ie,o:Ie,d(s){n&&n.d(s),s&&W(e)}}}function vS(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r=0,o;const a=ps(),l=h=>{const d=h.target.value;n(3,i=s[d].plan),o=s[d].id,a("cambioSelectPaciente",[d,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${d}, planSelect ${i.plan?i.plan:"particular"}`)},c=[[]];function u(){r=this.__value,n(1,r)}return t.$$set=h=>{"pacientesFiltrada"in h&&n(0,s=h.pacientesFiltrada),"planSelect"in h&&n(3,i=h.planSelect)},[s,r,l,i,u,c]}class wS extends At{constructor(e){super(),kt(this,e,vS,yS,_t,{pacientesFiltrada:0,planSelect:3})}}function bS(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,m,y,w,C,T,P,S,k,D,F,Y,R,G,te,O,H,M,Z,ee,Se,_e,ie,oe,Ce,pe,at,xt,b,K,ce,$e;return k=new wS({props:{pacientesFiltrada:t[3],planSelect:_S}}),k.$on("cambioSelectPaciente",t[15]),b=new EE({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),b.$on("cambioPlan",t[14]),b.$on("clickCheckPlan",t[16]),{c(){e=v("body"),n=v("div"),s=v("div"),i=v("button"),r=re("create"),a=A(),l=v("button"),c=re("update"),h=A(),d=v("button"),g=re("delete"),y=A(),w=v("div"),C=v("label"),C.textContent="filtrar por apellido",T=v("input"),P=A(),S=v("div"),It(k.$$.fragment),D=A(),F=v("div"),Y=v("label"),Y.textContent="nombre",R=v("input"),G=A(),te=v("label"),te.textContent="apellido",O=v("input"),H=A(),M=v("div"),Z=v("label"),Z.textContent="nº socio",ee=A(),Se=v("div"),_e=v("input"),ie=A(),oe=v("button"),oe.textContent="📋",Ce=A(),pe=v("label"),at=re(t[10]),xt=A(),It(b.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],f(i,"class","svelte-1uu1lxj"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],f(l,"class","svelte-1uu1lxj"),d.disabled=m=!t[4],f(d,"class","svelte-1uu1lxj"),f(s,"class","buttons svelte-1uu1lxj"),f(n,"id","botones"),f(n,"class","svelte-1uu1lxj"),f(C,"for","filterPrefix"),f(C,"class","svelte-1uu1lxj"),f(T,"name","filterPrefix"),f(T,"id","filterPrefix"),f(T,"placeholder","filter prefix"),f(T,"class","svelte-1uu1lxj"),f(w,"id","filter"),f(w,"class","svelte-1uu1lxj"),f(S,"id","selectPacientes"),f(S,"class","svelte-1uu1lxj"),f(Y,"for","nombre"),f(Y,"class","svelte-1uu1lxj"),f(R,"name","nombre"),f(R,"id","nombre"),f(R,"placeholder","nombre"),f(R,"class","svelte-1uu1lxj"),f(te,"for","apellido"),f(te,"class","svelte-1uu1lxj"),f(O,"name","apellido"),f(O,"id","apellido"),f(O,"placeholder","apellido"),f(O,"class","svelte-1uu1lxj"),f(F,"id","formInputsI"),f(F,"class","svelte-1uu1lxj"),f(Z,"for","inputNroSocio"),f(Z,"class","svelte-1uu1lxj"),f(_e,"id","inputNroSocio"),f(_e,"name","nroSocio"),f(_e,"placeholder","nro de Socio"),f(_e,"class","svelte-1uu1lxj"),f(oe,"class","transparenteSinBordes svelte-1uu1lxj"),f(Se,"class","formRow svelte-1uu1lxj"),f(pe,"id","labelPlan"),f(pe,"for","plan"),f(pe,"class","svelte-1uu1lxj"),f(M,"id","formInputsD"),f(M,"class","svelte-1uu1lxj"),f(e,"class","svelte-1uu1lxj")},m(V,fe){J(V,e,fe),p(e,n),p(n,s),p(s,i),p(i,r),p(s,a),p(s,l),p(l,c),p(s,h),p(s,d),p(d,g),p(e,y),p(e,w),p(w,C),p(w,T),ge(T,t[2]),p(e,P),p(e,S),mt(k,S,null),p(e,D),p(e,F),p(F,Y),p(F,R),ge(R,t[7]),p(F,G),p(F,te),p(F,O),ge(O,t[8]),p(e,H),p(e,M),p(M,Z),p(M,ee),p(M,Se),p(Se,_e),ge(_e,t[9]),p(Se,ie),p(Se,oe),p(M,Ce),p(M,pe),p(pe,at),p(M,xt),mt(b,M,null),K=!0,ce||($e=[j(i,"click",t[11]),j(l,"click",t[12]),j(d,"click",t[13]),j(T,"input",t[20]),j(R,"input",t[21]),j(O,"input",t[22]),j(_e,"input",t[23]),j(oe,"click",ES)],ce=!0)},p(V,fe){(!K||fe[0]&897&&o!==(o=!V[7]||!V[8]||!V[0]||!V[9]))&&(i.disabled=o),(!K||fe[0]&913&&u!==(u=!V[7]||!V[8]||!V[0]||!V[9]||!V[4]))&&(l.disabled=u),(!K||fe[0]&16&&m!==(m=!V[4]))&&(d.disabled=m),fe[0]&4&&T.value!==V[2]&&ge(T,V[2]);const Ne={};fe[0]&8&&(Ne.pacientesFiltrada=V[3]),k.$set(Ne),fe[0]&128&&R.value!==V[7]&&ge(R,V[7]),fe[0]&256&&O.value!==V[8]&&ge(O,V[8]),fe[0]&512&&_e.value!==V[9]&&ge(_e,V[9]),(!K||fe[0]&1024)&&Ee(at,V[10]);const gt={};fe[0]&2&&(gt.planes=V[1]),fe[0]&1&&(gt.planSeleccionado=V[0]),fe[0]&64&&(gt.SelectPlanVisible=V[6]),fe[0]&32&&(gt.indicePlan=V[5]),b.$set(gt)},i(V){K||(ye(k.$$.fragment,V),ye(b.$$.fragment,V),K=!0)},o(V){ke(k.$$.fragment,V),ke(b.$$.fragment,V),K=!1},d(V){V&&W(e),yt(k),yt(b),ce=!1,rt($e)}}}let _S="particular";function ES(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function IS(t,e,n){let s,i,r,o,a,l;ut(t,Dt,b=>n(25,i=b)),ut(t,Us,b=>n(26,r=b)),ut(t,No,b=>n(27,o=b)),ut(t,sa,b=>n(28,a=b)),ut(t,na,b=>n(29,l=b));let{pacientes:c=[]}=e,{sesiones:u}=e,{planes:h}=e,{planSeleccionado:d}=e,g=new Date().getMonth()+1,m,y=["nombre","apellido","nroSocio","plan","createdAt"],w,C=0,T;Dh(()=>{gS(c,y),c.forEach(b=>{mS(b)}),console.log(l)});let P="",S="",k="",D="",F=[],Y="plan";lt(No,o=s,o);const R=b=>{n(7,S=b?b.nombre:""),n(8,k=b?b.apellido:""),n(9,D=b?b.nroSocio:""),n(0,d=b?b.plan:{})},G=async()=>{try{await Va(ct(Ue,"Pacientes"),{nombre:S,apellido:k,nroSocio:D,createdAt:new Date().toLocaleDateString(),plan:d}),In({text:"Nuevo paciente agregado"}).showToast()}catch(b){console.error(b)}},te=()=>{n(17,c=c.concat({nombre:S,apellido:k})),n(19,C=c.length-1),G(),n(7,S=n(8,k=n(0,d=n(9,D=""))))},O=async b=>{try{await ic(qt(Ue,"Pacientes",b.id),b),In({text:`paciente ${b.apellido}, ${b.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(K){console.error(K)}},H=()=>{n(4,s.nombre=S,s),n(4,s.apellido=k,s),n(0,d=s.plan),n(4,s.nroSocio=D,s),n(4,s),n(3,F),n(19,C),n(2,P),n(17,c),n(17,c),O(s)},M=async b=>{try{await Fa(qt(Ue,"Pacientes",b.id)),In({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(ce){console.error(ce)}const K=qs(ct(Ue,"sesiones"),xa("pacienteID","==",b.id));console.log(`desde delete q=pacientes a borrar ${K} - paciente: ${b.nombre} ${b.apellido} ${b.id}`);try{(await jp(K)).forEach($e=>{Fa($e.ref)})}catch(ce){console.log(ce)}},Z=()=>{const b=c.indexOf(s);di.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(K=>{K.isConfirmed&&(di.fire("Deleted!","Your file has been deleted.","success"),M(c[C]),n(17,c=[...c.slice(0,b),...c.slice(b+1)]),n(7,S=n(8,k=n(9,D=n(0,d="")))),n(19,C=Math.min(C,F.length-2)))})},ee=b=>{n(4,s.plan=b,s),n(4,s.nombre=S,s),n(4,s.apellido=k,s),n(4,s.nroSocio=D,s),n(3,F[C].plan=b,F),O(s)},Se=b=>{n(0,d=b.detail),console.log(d),s.plan.plan!=d.plan&&ee(d)},_e=b=>{b?(n(10,Y="particular"),n(6,T=!1)):(n(10,Y="plan"),n(6,T=!0))},ie=b=>{n(19,C=b.detail[0]);const K=b.detail[1];lt(Us,r=b.detail[2],r);const ce=typeof K=="string"?"particular":K.plan;console.log(`i ${C}, planSelect ${ce}`),n(0,d=ce=="particular"?"particular":F[C].plan),d!="particular"&&(n(5,w=h.findIndex(V=>V.plan===ce)),console.log(`indicePlan ${w}, ${typeof w}`));const $e=ce=="particular";_e($e),console.log(`mesSeleccionado ${g.toString().padStart(2,"0")} - $idPacienteSeleccionado ${r}`),m=u.find(V=>V.pacienteID===r&&V.diaSesion.slice(5,7)===g.toString().padStart(2,"0")),m?(lt(Dt,i=m.id,i),console.log(m,i)):console.log("no hay sesion a seleccionar")},oe=b=>{const K=b.detail.valor.SelectPlanVisible;K?K&&d=="particular"&&n(0,d="210"):n(0,d="particular"),ee(d),_e(!K)};function Ce(){P=this.value,n(2,P)}function pe(){S=this.value,n(7,S)}function at(){k=this.value,n(8,k)}function xt(){D=this.value,n(9,D)}return t.$$set=b=>{"pacientes"in b&&n(17,c=b.pacientes),"sesiones"in b&&n(18,u=b.sesiones),"planes"in b&&n(1,h=b.planes),"planSeleccionado"in b&&n(0,d=b.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,F=P?c.filter(b=>`${b.apellido}, ${b.nombre}`.toLowerCase().startsWith(P.toLowerCase())):c.map(b=>({nombre:b.nombre,apellido:b.apellido,plan:b.plan,nroSocio:b.nroSocio,id:b.id}))),t.$$.dirty[0]&524296&&n(4,s=F[C]),t.$$.dirty[0]&16&&s&&(lt(No,o=s,o),lt(na,l=s.apellido,l),lt(sa,a=s.nombre,a),lt(Us,r=s.id,r)),t.$$.dirty[0]&16&&R(s)},[d,h,P,F,s,w,T,S,k,D,Y,te,H,Z,Se,ie,oe,c,u,C,Ce,pe,at,xt]}class TS extends At{constructor(e){super(),kt(this,e,IS,bS,_t,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0},null,[-1,-1])}}function fs(t,{delay:e=0,duration:n=400,easing:s=_h}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}const SS=ct(Ue,"sesiones");ct(Ue,"Pacientes");ct(Ue,"Planes");const CS=async t=>{const e=$s(t),n=e.fechaInicio,s=e.fechaFin;try{return(await jp(qs(SS,xa("diaSesion",">=",n),xa("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function rh(t,e,n){const s=t.slice();return s[7]=e[n],s}function oh(t){let e,n=`listar ${t[7].nombre}`,s;return{c(){e=v("option"),s=re(n),e.__value=t[7].nro,e.value=e.__value},m(i,r){J(i,e,r),p(e,s)},p:Ie,d(i){i&&W(e)}}}function kS(t){let e,n,s,i,r=t[1],o=[];for(let a=0;a<r.length;a+=1)o[a]=oh(rh(t,r,a));return{c(){e=v("main"),n=v("select");for(let a=0;a<o.length;a+=1)o[a].c();f(n,"name","mes"),f(n,"id","mesRegistro"),f(n,"class","svelte-2ytts5"),t[0]===void 0&&Ht(()=>t[5].call(n)),f(e,"class","svelte-2ytts5")},m(a,l){J(a,e,l),p(e,n);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(n,null);dr(n,t[0]),s||(i=[j(n,"change",t[3]),j(n,"dblclick",t[4]),j(n,"change",t[5])],s=!0)},p(a,[l]){if(l&2){r=a[1];let c;for(c=0;c<r.length;c+=1){const u=rh(a,r,c);o[c]?o[c].p(u,l):(o[c]=oh(u),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}l&3&&dr(n,a[0])},i:Ie,o:Ie,d(a){a&&W(e),fi(o,a),s=!1,rt(i)}}}function AS(t,e,n){let s=new Date().getMonth()+1,i=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}];const r=ps(),o=u=>{r("cambioMes",u)},a=u=>o(u.target.value),l=u=>o(u.target.value);function c(){s=kh(this),n(0,s),n(1,i)}return[s,i,o,a,l,c]}class PS extends At{constructor(e){super(),kt(this,e,AS,kS,_t,{})}}function ah(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function lh(t){let e,n,s,i,r;return{c(){e=v("button"),e.textContent="mostrar vista",f(e,"class"," svelte-1wge5ah")},m(o,a){J(o,e,a),s=!0,i||(r=j(e,"click",t[16]),i=!0)},p:Ie,i(o){s||(Ht(()=>{n||(n=ns(e,fs,{},!0)),n.run(1)}),s=!0)},o(o){n||(n=ns(e,fs,{},!1)),n.run(0),s=!1},d(o){o&&W(e),o&&n&&n.end(),i=!1,r()}}}function ch(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,m,y,w,C,T,P,S,k,D,F,Y,R,G,te=t[1],O=[];for(let M=0;M<te.length;M+=1)O[M]=dh(ah(t,te,M));let H=t[3]&&fh(t);return{c(){e=v("div"),n=v("button"),n.textContent="Cerrar",s=A(),i=v("button"),i.textContent="ordena por nombre",r=A(),o=v("button"),o.textContent="ordena por OS",a=A(),l=v("button"),l.textContent="ordena por fecha sesion",c=A(),u=v("div"),h=v("table"),d=v("tr"),d.innerHTML=`<th class="svelte-1wge5ah">n°</th> 
          <th class="svelte-1wge5ah">dia</th> 
          <th class="svelte-1wge5ah">paciente</th> 
          <th class="svelte-1wge5ah">plan</th> 
          <th class="svelte-1wge5ah">pago</th> 
          <th class="svelte-1wge5ah">sesion</th>`,g=A(),m=v("tbody");for(let M=0;M<O.length;M+=1)O[M].c();y=A(),w=v("div"),C=v("div"),T=v("button"),T.textContent="Cerrar",P=A(),S=v("div"),k=v("button"),k.innerHTML='<i class="bx bx-show svelte-1wge5ah"></i>',D=A(),H&&H.c(),f(n,"class","botonesListado svelte-1wge5ah"),f(i,"class","botonesListado svelte-1wge5ah"),f(o,"class","botonesListado svelte-1wge5ah"),f(l,"class","botonesListado svelte-1wge5ah"),f(d,"class","cabecera svelte-1wge5ah"),f(m,"class","svelte-1wge5ah"),f(h,"class","svelte-1wge5ah"),f(u,"id","tabla"),f(u,"class","svelte-1wge5ah"),f(T,"class","botonesListado svelte-1wge5ah"),f(C,"class","col col-2 m-2 svelte-1wge5ah"),f(k,"class","transparente svelte-1wge5ah"),f(S,"class","col col-1 px-2 mt-3 svelte-1wge5ah"),f(w,"class","row svelte-1wge5ah"),f(e,"class","svelte-1wge5ah")},m(M,Z){J(M,e,Z),p(e,n),p(e,s),p(e,i),p(e,r),p(e,o),p(e,a),p(e,l),p(e,c),p(e,u),p(u,h),p(h,d),p(h,g),p(h,m);for(let ee=0;ee<O.length;ee+=1)O[ee]&&O[ee].m(m,null);p(e,y),p(e,w),p(w,C),p(C,T),p(w,P),p(w,S),p(S,k),p(w,D),H&&H.m(w,null),Y=!0,R||(G=[j(n,"click",t[17]),j(i,"click",t[7]),j(o,"click",t[8]),j(l,"click",t[9]),j(T,"click",t[18]),j(k,"click",t[19])],R=!0)},p(M,Z){if(Z&1042){te=M[1];let ee;for(ee=0;ee<te.length;ee+=1){const Se=ah(M,te,ee);O[ee]?O[ee].p(Se,Z):(O[ee]=dh(Se),O[ee].c(),O[ee].m(m,null))}for(;ee<O.length;ee+=1)O[ee].d(1);O.length=te.length}M[3]?H?(H.p(M,Z),Z&8&&ye(H,1)):(H=fh(M),H.c(),ye(H,1),H.m(w,null)):H&&(Ws(),ke(H,1,1,()=>{H=null}),Gs())},i(M){Y||(ye(H),Ht(()=>{F||(F=ns(e,fs,{},!0)),F.run(1)}),Y=!0)},o(M){ke(H),F||(F=ns(e,fs,{},!1)),F.run(0),Y=!1},d(M){M&&W(e),fi(O,M),H&&H.d(),M&&F&&F.end(),R=!1,rt(G)}}}function uh(t){let e,n,s,i,r=`cant sesiones: ${t[10](t[4],t[24]).cantSesiones}`,o,a,l,c=t[10](t[4],t[24]).subtotalPagos+"",u,h,d=t[10](t[4],t[24]).subtotalValorSesion+"",g;return{c(){e=v("tr"),n=v("td"),s=v("td"),i=v("td"),o=re(r),a=v("td"),a.textContent="subtotales",l=v("td"),u=re(c),h=v("td"),g=re(d),f(n,"class","svelte-1wge5ah"),f(s,"class","svelte-1wge5ah"),f(i,"class","svelte-1wge5ah"),f(a,"class","svelte-1wge5ah"),f(l,"class","svelte-1wge5ah"),f(h,"class","svelte-1wge5ah"),f(e,"class","subtotalRow svelte-1wge5ah")},m(m,y){J(m,e,y),p(e,n),p(e,s),p(e,i),p(i,o),p(e,a),p(e,l),p(l,u),p(e,h),p(h,g)},p(m,y){y&16&&r!==(r=`cant sesiones: ${m[10](m[4],m[24]).cantSesiones}`)&&Ee(o,r),y&16&&c!==(c=m[10](m[4],m[24]).subtotalPagos+"")&&Ee(u,c),y&16&&d!==(d=m[10](m[4],m[24]).subtotalValorSesion+"")&&Ee(g,d)},d(m){m&&W(e)}}}function hh(t){let e,n,s=t[24]+1+"",i,r,o,a=`${ph(t[22].diaSesion.slice(8,10),2,!1)}`,l,c,u,h=`${t[22].apellido}, ${t[22].nombre}`,d,g,m,y=t[22].plan.slice(0,4)+"",w,C,T,P=t[22].valorPago+"",S,k,D,F=t[22].valorSesion+"",Y,R;return{c(){e=v("tr"),n=v("td"),i=re(s),r=A(),o=v("td"),l=re(a),c=A(),u=v("td"),d=re(h),g=A(),m=v("td"),w=re(y),C=A(),T=v("td"),S=re(P),k=A(),D=v("td"),Y=re(F),R=A(),f(n,"class","svelte-1wge5ah"),f(o,"class","dia svelte-1wge5ah"),f(u,"class","nombre svelte-1wge5ah"),f(m,"class","plan svelte-1wge5ah"),f(T,"class","svelte-1wge5ah"),f(D,"class","svelte-1wge5ah"),f(e,"class","svelte-1wge5ah")},m(G,te){J(G,e,te),p(e,n),p(n,i),p(e,r),p(e,o),p(o,l),p(e,c),p(e,u),p(u,d),p(e,g),p(e,m),p(m,w),p(e,C),p(e,T),p(T,S),p(e,k),p(e,D),p(D,Y),p(e,R)},p(G,te){te&2&&a!==(a=`${ph(G[22].diaSesion.slice(8,10),2,!1)}`)&&Ee(l,a),te&2&&h!==(h=`${G[22].apellido}, ${G[22].nombre}`)&&Ee(d,h),te&2&&y!==(y=G[22].plan.slice(0,4)+"")&&Ee(w,y),te&2&&P!==(P=G[22].valorPago+"")&&Ee(S,P),te&2&&F!==(F=G[22].valorSesion+"")&&Ee(Y,F)},d(G){G&&W(e)}}}function dh(t){let e,n,s=(t[24]>1&&t[1][t[24]-1][t[4]]!=t[22][t[4]]||t[24]===t[1].length)&&uh(t),i=t[24]<t[1].length&&t[22].nombre!="ultimo"&&hh(t);return{c(){s&&s.c(),e=A(),i&&i.c(),n=Wa()},m(r,o){s&&s.m(r,o),J(r,e,o),i&&i.m(r,o),J(r,n,o)},p(r,o){r[24]>1&&r[1][r[24]-1][r[4]]!=r[22][r[4]]||r[24]===r[1].length?s?s.p(r,o):(s=uh(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r[24]<r[1].length&&r[22].nombre!="ultimo"?i?i.p(r,o):(i=hh(r),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(r){s&&s.d(r),r&&W(e),i&&i.d(r),r&&W(n)}}}function fh(t){let e,n,s,i=t[5](t[1]).totalColPagos+"",r,o,a,l,c=t[5](t[1]).totalColValorSesion+"",u,h,d;return{c(){e=v("div"),n=v("h6"),s=re("Total pagos: $"),r=re(i),o=A(),a=v("h6"),l=re("Total valor sesion: $"),u=re(c),f(n,"class","row px-2 svelte-1wge5ah"),f(a,"class","row px-2 svelte-1wge5ah"),f(e,"class","bordeTotales col col-7 m-3 p-2 svelte-1wge5ah")},m(g,m){J(g,e,m),p(e,n),p(n,s),p(n,r),p(e,o),p(e,a),p(a,l),p(a,u),d=!0},p(g,m){(!d||m&2)&&i!==(i=g[5](g[1]).totalColPagos+"")&&Ee(r,i),(!d||m&2)&&c!==(c=g[5](g[1]).totalColValorSesion+"")&&Ee(u,c)},i(g){d||(Ht(()=>{h||(h=ns(e,fs,{},!0)),h.run(1)}),d=!0)},o(g){h||(h=ns(e,fs,{},!1)),h.run(0),d=!1},d(g){g&&W(e),g&&h&&h.end()}}}function DS(t){let e,n,s,i,r,o,a,l;s=new PS({}),s.$on("cambioMes",t[15]);let c=t[2]&&lh(t),u=t[0]&&t[1].length>0&&ch(t);return{c(){e=v("div"),n=v("div"),It(s.$$.fragment),i=A(),r=v("div"),c&&c.c(),o=A(),a=v("div"),u&&u.c(),f(n,"class","col-5 mx-2 p-2 my-0 svelte-1wge5ah"),f(r,"class","col-5 mx-2 p-2 my-0 svelte-1wge5ah"),f(e,"class","row svelte-1wge5ah"),f(a,"class","listadoSesionesPorMes svelte-1wge5ah"),f(a,"id","listadoSesionesPorMes1")},m(h,d){J(h,e,d),p(e,n),mt(s,n,null),p(e,i),p(e,r),c&&c.m(r,null),J(h,o,d),J(h,a,d),u&&u.m(a,null),l=!0},p(h,[d]){h[2]?c?(c.p(h,d),d&4&&ye(c,1)):(c=lh(h),c.c(),ye(c,1),c.m(r,null)):c&&(Ws(),ke(c,1,1,()=>{c=null}),Gs()),h[0]&&h[1].length>0?u?(u.p(h,d),d&3&&ye(u,1)):(u=ch(h),u.c(),ye(u,1),u.m(a,null)):u&&(Ws(),ke(u,1,1,()=>{u=null}),Gs())},i(h){l||(ye(s.$$.fragment,h),ye(c),ye(u),l=!0)},o(h){ke(s.$$.fragment,h),ke(c),ke(u),l=!1},d(h){h&&W(e),yt(s),c&&c.d(),h&&W(o),h&&W(a),u&&u.d()}}}function ph(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function ea(t){setTimeout(()=>{t.scrollIntoView({behavior:"smooth"})},50);const e=t.getBoundingClientRect(),n=window.scrollY+e.top;window.scrollTo({top:n,behavior:"smooth"})}function NS(t,e){const n=t.plan.toUpperCase(),s=e.plan.toUpperCase();return n<s?-1:n>s?1:0}function RS(t,e){const n=`${t.apellido}, ${t.nombre}`.toUpperCase(),s=`${e.apellido}, ${e.nombre}`.toUpperCase();return n<s?-1:n>s?1:0}function OS(t,e){const n=t.diaSesion.toUpperCase(),s=e.diaSesion.toUpperCase();return n<s?-1:n>s?1:0}function LS(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e,o=!0,a=!1;const l=ps(),c=R=>{var G=0,te=0;return console.log(R),R.length>0&&R.forEach(O=>{G+=O.valorPago,te+=O.valorSesion}),{totalColPagos:G,totalColValorSesion:te}},u=R=>{i==!1?(l("vistaPulsado",R),n(14,s=R),n(0,i=!i)):i==!0&&(l("vistaPulsado",R),n(14,s=R));const G=document.getElementById("listadoSesionesPorMes1");ea(G),console.log(c(r),`mes: ${s}, cant de sesiones: ${r.length}`)},h=R=>{n(14,s=R),u(R)};let d="diaSesion";function g(){r.sort(RS),n(1,r),n(4,d="apellido")}function m(){r.sort(NS),n(1,r),n(4,d="plan")}function y(){r.sort(OS),n(1,r),n(4,d="diaSesion")}function w(R,G){const te=r.filter(Z=>Z[R]===r[G-1][R]);console.log(te);const O=te.reduce((Z,ee)=>Z+ee.valorPago,0),H=te.reduce((Z,ee)=>Z+ee.valorSesion,0),M=te.length;return{subtotalPagos:O,subtotalValorSesion:H,cantSesiones:M}}const C=()=>{n(2,o=!1),n(0,i=!i),h(s)},T=()=>{n(2,o=!0);const R=document.getElementById("contenedorPacientes");console.log(R),ea(R),n(0,i=!i)},P=R=>{n(3,a=!a),ea(R.target)},S=R=>h(R.detail),k=()=>C(),D=()=>T(),F=()=>T(),Y=R=>P(R);return t.$$set=R=>{"mesSeleccionado"in R&&n(14,s=R.mesSeleccionado),"vistaCalculos"in R&&n(0,i=R.vistaCalculos),"arrayParaLaVista"in R&&n(1,r=R.arrayParaLaVista)},[i,r,o,a,d,c,h,g,m,y,w,C,T,P,s,S,k,D,F,Y]}class MS extends At{constructor(e){super(),kt(this,e,LS,DS,_t,{mesSeleccionado:14,vistaCalculos:0,arrayParaLaVista:1})}}function US(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,m,y;return{c(){e=v("div"),n=v("div"),n.innerHTML='<p class="text-left svelte-1ae8q9x">total pagos:</p>',s=A(),i=v("div"),r=v("p"),o=re("$"),a=re(t[0]),l=A(),c=v("div"),u=v("div"),u.innerHTML='<p class="text-left svelte-1ae8q9x">total sesiones:</p>',h=A(),d=v("div"),g=v("p"),m=re("$"),y=re(t[1]),f(n,"class","col-6 d-flex justify-content-end"),f(r,"class","text-right svelte-1ae8q9x"),f(i,"class","col-2 d-flex justify-content-start"),f(e,"class","row"),f(u,"class","col-6 d-flex justify-content-end"),f(g,"class","text-right svelte-1ae8q9x"),f(d,"class","col-6 d-flex justify-content-start"),f(c,"class","row piso svelte-1ae8q9x")},m(w,C){J(w,e,C),p(e,n),p(e,s),p(e,i),p(i,r),p(r,o),p(r,a),J(w,l,C),J(w,c,C),p(c,u),p(c,h),p(c,d),p(d,g),p(g,m),p(g,y)},p(w,[C]){C&1&&Ee(a,w[0]),C&2&&Ee(y,w[1])},i:Ie,o:Ie,d(w){w&&W(e),w&&W(l),w&&W(c)}}}function xS(t,e,n){let{varSumaValorPagoPorPaciente:s}=e,{varSumaValorSesionPorPaciente:i}=e;return t.$$set=r=>{"varSumaValorPagoPorPaciente"in r&&n(0,s=r.varSumaValorPagoPorPaciente),"varSumaValorSesionPorPaciente"in r&&n(1,i=r.varSumaValorSesionPorPaciente)},[s,i]}class FS extends At{constructor(e){super(),kt(this,e,xS,US,_t,{varSumaValorPagoPorPaciente:0,varSumaValorSesionPorPaciente:1})}}function gh(t,e,n){const s=t.slice();return s[12]=e[n],s}function mh(t){let e,n,s,i,r=!1,o,a,l=`${t[12].diaSesion.slice(8,10)} -sesion: $${t[12].valorSesion}-pago: ${t[12].fechaPago.slice(5,10)} $${t[12].valorPago}`,c,u,h,d,g,m;return d=Ch(t[9][0]),{c(){e=v("li"),n=v("input"),o=A(),a=v("label"),c=re(l),h=A(),f(n,"type","radio"),f(n,"id",s=t[12].id),f(n,"name","sesiones"),n.__value=i=t[12].id,n.value=n.__value,f(n,"class","svelte-syl1t9"),f(a,"for",u=t[12].id),f(a,"class","svelte-syl1t9"),f(e,"class","svelte-syl1t9"),d.p(n)},m(y,w){J(y,e,w),p(e,n),n.checked=n.__value===t[2],p(e,o),p(e,a),p(a,c),p(e,h),g||(m=[j(n,"change",t[6]),j(n,"change",t[8])],g=!0)},p(y,w){w&2&&s!==(s=y[12].id)&&f(n,"id",s),w&2&&i!==(i=y[12].id)&&(n.__value=i,n.value=n.__value,r=!0),(r||w&6)&&(n.checked=n.__value===y[2]),w&2&&l!==(l=`${y[12].diaSesion.slice(8,10)} -sesion: $${y[12].valorSesion}-pago: ${y[12].fechaPago.slice(5,10)} $${y[12].valorPago}`)&&Ee(c,l),w&2&&u!==(u=y[12].id)&&f(a,"for",u)},d(y){y&&W(e),d.r(),g=!1,rt(m)}}}function yh(t){let e=Object.values(t[12]).includes(t[3])&&parseInt(t[12].diaSesion.slice(5,7))==t[0],n,s=e&&mh(t);return{c(){s&&s.c(),n=Wa()},m(i,r){s&&s.m(i,r),J(i,n,r)},p(i,r){r&11&&(e=Object.values(i[12]).includes(i[3])&&parseInt(i[12].diaSesion.slice(5,7))==i[0]),e?s?s.p(i,r):(s=mh(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&W(n)}}}function VS(t){let e,n,s,i,r,o=t[1],a=[];for(let l=0;l<o.length;l+=1)a[l]=yh(gh(t,o,l));return i=new FS({props:{varSumaValorPagoPorPaciente:t[4],varSumaValorSesionPorPaciente:t[5]}}),{c(){e=v("div"),n=v("ul");for(let l=0;l<a.length;l+=1)a[l].c();s=A(),It(i.$$.fragment),f(n,"class","sinPunto svelte-syl1t9"),f(e,"class","selectorSesiones svelte-syl1t9")},m(l,c){J(l,e,c),p(e,n);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(n,null);p(e,s),mt(i,e,null),r=!0},p(l,[c]){if(c&79){o=l[1];let h;for(h=0;h<o.length;h+=1){const d=gh(l,o,h);a[h]?a[h].p(d,c):(a[h]=yh(d),a[h].c(),a[h].m(n,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=o.length}const u={};c&16&&(u.varSumaValorPagoPorPaciente=l[4]),c&32&&(u.varSumaValorSesionPorPaciente=l[5]),i.$set(u)},i(l){r||(ye(i.$$.fragment,l),r=!0)},o(l){ke(i.$$.fragment,l),r=!1},d(l){l&&W(e),fi(a,l),yt(i)}}}function BS(t,e,n){let s,i;ut(t,Dt,y=>n(2,s=y)),ut(t,Us,y=>n(3,i=y));let{mesSeleccionado:r}=e,{sesiones:o}=e,{cambioEnSesiones:a}=e,l,c;const u=ps(),h=y=>{console.log(Dt,y.target.value),u("cambioSelectorSesion",y.target.value)},d=y=>{n(4,l=0),n(5,c=0),o.forEach(w=>{Object.values(w).includes(y)&&parseInt(w.diaSesion.slice(5,7))==r&&(n(4,l+=w.valorPago),n(5,c+=w.valorSesion))})},g=[[]];function m(){s=this.__value,Dt.set(s)}return t.$$set=y=>{"mesSeleccionado"in y&&n(0,r=y.mesSeleccionado),"sesiones"in y&&n(1,o=y.sesiones),"cambioEnSesiones"in y&&n(7,a=y.cambioEnSesiones)},t.$$.update=()=>{t.$$.dirty&8&&(console.log(`cambio id paciente ${i}`),d(i)),t.$$.dirty&136&&(console.log(`cambioEnSesiones ${a}`),d(i)),t.$$.dirty&4&&u("cambioSelectorSesion",s)},[r,o,s,i,l,c,h,a,m,g]}class jS extends At{constructor(e){super(),kt(this,e,BS,VS,_t,{mesSeleccionado:0,sesiones:1,cambioEnSesiones:7})}}function vh(t){let e,n,s=`Mes: ${t[5]}`,i,r,o,a,l,c,u=t[10]&&t[11]&&wh(t);return l=new jS({props:{mesSeleccionado:t[5],sesiones:t[0],cambioEnSesiones:t[3]}}),l.$on("cambioSelectorSesion",t[12]),{c(){e=v("div"),n=v("h5"),i=re(s),r=A(),u&&u.c(),o=A(),a=v("div"),It(l.$$.fragment),f(n,"class","svelte-1g69ypk"),f(e,"class","tituloSelectorSesiones svelte-1g69ypk"),f(e,"id","tituloSesiones"),f(a,"class","selectorSesiones svelte-1g69ypk")},m(h,d){J(h,e,d),p(e,n),p(n,i),p(e,r),u&&u.m(e,null),J(h,o,d),J(h,a,d),mt(l,a,null),c=!0},p(h,d){(!c||d[0]&32)&&s!==(s=`Mes: ${h[5]}`)&&Ee(i,s),h[10]&&h[11]?u?u.p(h,d):(u=wh(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null);const g={};d[0]&32&&(g.mesSeleccionado=h[5]),d[0]&1&&(g.sesiones=h[0]),d[0]&8&&(g.cambioEnSesiones=h[3]),l.$set(g)},i(h){c||(ye(l.$$.fragment,h),c=!0)},o(h){ke(l.$$.fragment,h),c=!1},d(h){h&&W(e),u&&u.d(),h&&W(o),h&&W(a),yt(l)}}}function wh(t){let e,n,s,i,r;return{c(){e=v("p"),n=re("Paciente: "),s=re(t[10]),i=re(", "),r=re(t[11]),f(e,"class","svelte-1g69ypk")},m(o,a){J(o,e,a),p(e,n),p(e,s),p(e,i),p(e,r)},p(o,a){a[0]&1024&&Ee(s,o[10]),a[0]&2048&&Ee(r,o[11])},d(o){o&&W(e)}}}function qS(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,m,y,w,C,T,P,S,k,D,F,Y,R,G,te,O,H,M,Z,ee,Se,_e,ie=t[0].length>0&&vh(t);return Z=new MS({props:{vistaCalculos:t[2],arrayParaLaVista:t[4],mesSeleccionado:t[5]}}),Z.$on("vistaPulsado",t[29]),{c(){e=v("main"),n=v("body"),ie&&ie.c(),s=A(),i=v("div"),r=v("form"),o=v("div"),a=v("div"),l=v("label"),l.textContent="pago",c=v("input"),u=A(),h=v("label"),h.textContent="valor sesion",d=v("input"),g=A(),m=v("div"),y=v("label"),y.textContent="Dia Sesion",w=v("input"),C=A(),T=v("label"),T.textContent="Fecha Pago",P=v("input"),S=A(),k=v("div"),D=v("button"),D.textContent="update",F=A(),Y=v("button"),Y.textContent="delete",R=A(),G=v("button"),G.textContent="misma sesión fecha actual",te=A(),O=v("button"),O.textContent="Agrega sesión",H=A(),M=v("div"),It(Z.$$.fragment),f(l,"for","valorPago"),f(l,"class","svelte-1g69ypk"),f(c,"name","valorPago"),f(c,"id","valorPago"),f(c,"type","number"),f(c,"step","100"),f(c,"min","0"),f(c,"placeholder","Valor pago"),f(c,"class","svelte-1g69ypk"),f(h,"for","valorSesion"),f(h,"class","svelte-1g69ypk"),f(d,"name","valorSesion"),f(d,"id","valorSesion"),f(d,"type","number"),f(d,"step","100"),f(d,"min","0"),f(d,"placeholder","Valor sesión"),f(d,"class","svelte-1g69ypk"),f(a,"id","inputsFormSesionesI"),f(a,"class","svelte-1g69ypk"),f(y,"for","diaSesion"),f(y,"class","svelte-1g69ypk"),f(w,"name","diaSesion"),f(w,"id","diaSesion"),f(w,"type","date"),f(w,"placeholder","Día sesión"),f(w,"class","svelte-1g69ypk"),f(T,"for","fechaPago"),f(T,"class","svelte-1g69ypk"),f(P,"name","fechaPago"),f(P,"id","fechaPago"),f(P,"type","date"),f(P,"placeholder","Fecha pago"),f(P,"class","svelte-1g69ypk"),f(m,"id","inputsFormSesionesD"),f(m,"class","svelte-1g69ypk"),f(D,"class","svelte-1g69ypk"),f(Y,"class","svelte-1g69ypk"),f(G,"class","text-sm svelte-1g69ypk"),f(O,"class","svelte-1g69ypk"),f(k,"id","botonesFormSesiones"),f(k,"class","buttons svelte-1g69ypk"),f(o,"id","form-Sesiones"),f(o,"class","svelte-1g69ypk"),f(r,"class","svelte-1g69ypk"),f(M,"class","svelte-1g69ypk"),f(i,"id","contenedor-form-sesiones"),f(i,"class","svelte-1g69ypk"),f(n,"class","svelte-1g69ypk"),f(e,"class","svelte-1g69ypk")},m(oe,Ce){J(oe,e,Ce),p(e,n),ie&&ie.m(n,null),p(n,s),p(n,i),p(i,r),p(r,o),p(o,a),p(a,l),p(a,c),ge(c,t[6]),p(a,u),p(a,h),p(a,d),ge(d,t[7]),p(o,g),p(o,m),p(m,y),p(m,w),ge(w,t[8]),p(m,C),p(m,T),p(m,P),ge(P,t[9]),p(o,S),p(o,k),p(k,D),p(k,F),p(k,Y),p(k,R),p(k,G),p(k,te),p(k,O),p(i,H),p(i,M),mt(Z,M,null),ee=!0,Se||(_e=[j(c,"input",t[23]),j(d,"input",t[24]),j(w,"input",t[25]),j(P,"input",t[26]),j(D,"click",t[27]),j(Y,"click",t[28]),j(G,"click",t[14]),j(O,"click",t[13]),j(r,"submit",tr(t[22]))],Se=!0)},p(oe,Ce){oe[0].length>0?ie?(ie.p(oe,Ce),Ce[0]&1&&ye(ie,1)):(ie=vh(oe),ie.c(),ye(ie,1),ie.m(n,s)):ie&&(Ws(),ke(ie,1,1,()=>{ie=null}),Gs()),Ce[0]&64&&hr(c.value)!==oe[6]&&ge(c,oe[6]),Ce[0]&128&&hr(d.value)!==oe[7]&&ge(d,oe[7]),Ce[0]&256&&ge(w,oe[8]),Ce[0]&512&&ge(P,oe[9]);const pe={};Ce[0]&4&&(pe.vistaCalculos=oe[2]),Ce[0]&16&&(pe.arrayParaLaVista=oe[4]),Ce[0]&32&&(pe.mesSeleccionado=oe[5]),Z.$set(pe)},i(oe){ee||(ye(ie),ye(Z.$$.fragment,oe),ee=!0)},o(oe){ke(ie),ke(Z.$$.fragment,oe),ee=!1},d(oe){oe&&W(e),ie&&ie.d(),yt(Z),Se=!1,rt(_e)}}}function $S(t,e,n){let s,i,r,o;ut(t,Dt,b=>n(21,s=b)),ut(t,Us,b=>n(32,i=b)),ut(t,na,b=>n(10,r=b)),ut(t,sa,b=>n(11,o=b));let{sesiones:a}=e,{pacientes:l}=e,{planes:c}=e,{planSeleccionado:u}=e,h=!1,d=!1;const g=()=>n(3,d=!d);let m=[],y=0;const w=new Date;let C=w.getMonth()+1,T=w.getFullYear(),P=C,S,k=0;const D=async b=>{b||(b=C);try{const K=await CS(b);k=0,y=0;let ce=[];return K.forEach($e=>{let V=$e.pacienteID;const fe=l.find(Pt=>Pt.id==V);var Ne=$e.valorPago;if(Ne==null&&(Ne=0),typeof Ne=="number")if(fe.plan=="particular"){k+=Ne,Ne<H&&(y+=H-Ne);var gt={diaSesion:$e.diaSesion,apellido:fe.apellido,nombre:fe.nombre,plan:fe.plan.plan?fe.plan.plan:"particular",valorPago:Ne,valorSesion:$e.valorSesion};ce.push(gt)}else{const Pt=fe.plan;var gt={diaSesion:$e.diaSesion,apellido:fe.apellido,nombre:fe.nombre,plan:fe.plan.plan?fe.plan.plan:"particular",valorPago:Ne,valorSesion:$e.valorSesion};ce.push(gt),Ne<Pt.valorCoseguro&&(y+=Pt.valorCoseguro-Ne),k+=Pt.valorOs+Ne}}),[k,ce]}catch(K){return console.error("Error al obtener las sesiones y los pagos:",K),[]}};m=D(P),console.log("arrayParaLaVista y vistaCalculos"),console.log(m,h);const F=b=>{if(console.log(b),lt(Dt,s=b.detail,s),console.log(a),n(1,S=a.find(ce=>ce.id===s)),console.log("selectedSession",S),n(6,O=S.valorPago),console.log(`planSeleccionado: ${u}`),typeof u.plan>"u"||u.plan=="particular"||!u)n(7,H=S.valorSesion),console.log("particular",H);else{var K=c.find(ce=>ce.plan==u);console.log(K),console.log("OS",H)}n(9,Z=S.fechaPago),n(8,M=S.diaSesion)},Y=async()=>{console.log("Add sesion",S);try{const b=await Va(ct(Ue,"sesiones"),{valorPago:O,valorSesion:H,diaSesion:M,fechaPago:Z,pacienteID:i});console.log("sesion agregada"),In({text:"Nueva sesion agregada"}).showToast(),lt(Dt,s=b.id,s),g()}catch(b){console.error(b)}},R=async()=>{console.log("Add sesion",S),console.log(C,"mes actual");const b=$s(C).fechaActual.slice(0,10);try{const K=await Va(ct(Ue,"sesiones"),{valorPago:O,valorSesion:H,diaSesion:b,fechaPago:b,pacienteID:i});console.log(O,H,M,Z,b),console.log("sesion agregada"),In({text:"Nueva sesion agregada"}).showToast(),lt(Dt,s=K.id,s),g()}catch(K){console.error(K)}},G=async b=>{console.log("Update sesion",b);try{await ic(qt(Ue,"sesiones",b.id),{valorPago:O,valorSesion:H,fechaPago:Z,diaSesion:M}),In({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast(),g()}catch(K){console.log(K)}},te=async b=>{console.log("Delete sesion",b);const K=b.pacienteID;try{await Fa(qt(Ue,"sesiones",b.id)),In({text:"Sesion eliminada",style:{background:"red"}}).showToast(),g()}catch(ce){console.error(ce)}b=a.find(ce=>ce.pacienteID===K&&ce.diaSesion.slice(5,7)===P.toString().padStart(2,"0")),console.log(b||"no hay sesiones para mostrar"),b&&lt(Dt,s=b.id,s)};let O=5e3,H=5e3,M=new Date().toISOString().slice(0,10),Z=new Date().toISOString().slice(0,10);C.toString().padStart(2,"0"),T.toString();const ee=async b=>{n(5,P=b);const K=await D(P);n(4,m=K[1]),m.push({apellido:"ultimo",diaSesion:"ultimo",nombre:"ultimo",plan:"ultimo",valorPago:0,valorSesion:0}),console.log(Array.isArray(K[1])),console.log(K[1]),n(2,h=!0)};function Se(b){Lg.call(this,t,b)}function _e(){O=hr(this.value),n(6,O)}function ie(){H=hr(this.value),n(7,H)}function oe(){M=this.value,n(8,M)}function Ce(){Z=this.value,n(9,Z)}const pe=()=>G(S),at=()=>te(S),xt=async b=>ee(b.detail);return t.$$set=b=>{"sesiones"in b&&n(0,a=b.sesiones),"pacientes"in b&&n(18,l=b.pacientes),"planes"in b&&n(19,c=b.planes),"planSeleccionado"in b&&n(20,u=b.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&786433&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",a,"pacientes>",l,"planes>",c),t.$$.dirty[0]&2097155&&(n(1,S=a.find(b=>b.id===s)),console.log(S||"sin seleccion de sesion"))},D(),[a,S,h,d,m,P,O,H,M,Z,r,o,F,Y,R,G,te,ee,l,c,u,s,Se,_e,ie,oe,Ce,pe,at,xt]}class HS extends At{constructor(e){super(),kt(this,e,$S,qS,_t,{sesiones:0,pacientes:18,planes:19,planSeleccionado:20},null,[-1,-1])}}function KS(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,m,y,w,C,T,P;return l=new $p({}),g=new TS({props:{sesiones:t[1],pacientes:t[2],planes:t[0],planSeleccionado:bh}}),w=new HS({props:{sesiones:t[1],pacientes:t[2],planes:t[0],planSeleccionado:bh}}),{c(){e=v("body"),n=v("nav"),s=v("ul"),i=v("li"),r=v("button"),r.textContent="generar backup firestore",o=A(),a=v("li"),It(l.$$.fragment),c=A(),u=v("div"),h=v("h5"),h.textContent="Listados de Pacientes",d=A(),It(g.$$.fragment),m=A(),y=v("div"),It(w.$$.fragment),f(i,"class","nav-item"),f(a,"class","nav-item"),f(s,"class","nav-bar nav"),f(n,"class","navbar"),f(h,"class","svelte-14tnwqe"),f(u,"class","contenedor-pacientes svelte-14tnwqe"),f(u,"id","contenedorPacientes"),f(y,"class","contenedor-sesiones svelte-14tnwqe"),f(e,"class","svelte-14tnwqe")},m(S,k){J(S,e,k),p(e,n),p(n,s),p(s,i),p(i,r),p(s,o),p(s,a),mt(l,a,null),p(e,c),p(e,u),p(u,h),p(u,d),mt(g,u,null),p(e,m),p(e,y),mt(w,y,null),C=!0,T||(P=j(r,"click",t[3]),T=!0)},p(S,[k]){const D={};k&2&&(D.sesiones=S[1]),k&4&&(D.pacientes=S[2]),k&1&&(D.planes=S[0]),g.$set(D);const F={};k&2&&(F.sesiones=S[1]),k&4&&(F.pacientes=S[2]),k&1&&(F.planes=S[0]),w.$set(F)},i(S){C||(ye(l.$$.fragment,S),ye(g.$$.fragment,S),ye(w.$$.fragment,S),C=!0)},o(S){ke(l.$$.fragment,S),ke(g.$$.fragment,S),ke(w.$$.fragment,S),C=!1},d(S){S&&W(e),yt(l),yt(g),yt(w),T=!1,P()}}}let bh="particular";function zS(t,e,n){let s=[],i=[],r=[],o=[];Dh(()=>{const l=[],c=ct(Ue,"sesiones"),u=ct(Ue,"Pacientes"),h=ct(Ue,"planes"),d=qs(c,Qo("diaSesion")),g=qs(u,Qo("apellido")),m=qs(h,Qo("plan")),y=Xo(d,T=>{n(1,s=T.docs.map(P=>({id:P.id,...P.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(y);const w=Xo(g,T=>{n(2,i=T.docs.map(P=>({id:P.id,...P.data()})))});l.push(w);const C=Xo(m,T=>{n(0,r=T.docs.map(P=>({id:P.id,...P.data()})))});return l.push(C),()=>{l.forEach(T=>T())}});const a=()=>{const l="sesiones"+$s().toString()+"BU",c=ct(Ue,l);s.forEach(async m=>{const y=qt(c);try{await Yo(y,m),console.log("Documento sesion creado exitosamente")}catch(w){console.error("Error al crear el documento sesion:",w)}});const u="planes"+$s().toString()+"BU",h=ct(Ue,u);r.forEach(async m=>{const y=qt(h);try{await Yo(y,m),console.log("Documento plan creado exitosamente")}catch(w){console.error("Error al crear el documento plan:",w)}});const d="Pacientes"+$s().toString()+"BU",g=ct(Ue,d);i.forEach(async m=>{const y=qt(g);try{await Yo(y,m),console.log("Documento paciente creado exitosamente")}catch(w){console.error("Error al crear el documento paciente:",w)}})};return t.$$.update=()=>{t.$$.dirty&17&&(r.length!=0?(console.log(r),n(4,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,s,i,a,o]}class WS extends At{constructor(e){super(),kt(this,e,zS,KS,_t,{})}}function GS(t){let e,n;return e=new $p({}),{c(){It(e.$$.fragment)},m(s,i){mt(e,s,i),n=!0},i(s){n||(ye(e.$$.fragment,s),n=!0)},o(s){ke(e.$$.fragment,s),n=!1},d(s){yt(e,s)}}}function QS(t){let e,n,s;return n=new WS({}),{c(){e=v("div"),It(n.$$.fragment),f(e,"class","contenedorPadre svelte-qokvoh")},m(i,r){J(i,e,r),mt(n,e,null),s=!0},i(i){s||(ye(n.$$.fragment,i),s=!0)},o(i){ke(n.$$.fragment,i),s=!1},d(i){i&&W(e),yt(n)}}}function YS(t){let e,n,s,i;const r=[QS,GS],o=[];function a(l,c){return l[0]?0:1}return n=a(t),s=o[n]=r[n](t),{c(){e=v("main"),s.c(),f(e,"class","svelte-qokvoh")},m(l,c){J(l,e,c),o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n!==u&&(Ws(),ke(o[u],1,1,()=>{o[u]=null}),Gs(),s=o[n],s||(s=o[n]=r[n](l),s.c()),ye(s,1),s.m(e,null))},i(l){i||(ye(s),i=!0)},o(l){ke(s),i=!1},d(l){l&&W(e),o[n].d()}}}function XS(t,e,n){let s;return ut(t,As,i=>n(0,s=i)),[s]}class JS extends At{constructor(e){super(),kt(this,e,XS,YS,_t,{})}}new JS({target:document.getElementById("app")});
