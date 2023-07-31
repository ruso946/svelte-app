(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ve(){}const ph=t=>t;function gh(t){return t()}function dc(){return Object.create(null)}function nt(t){t.forEach(gh)}function Ba(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function gg(t){return Object.keys(t).length===0}function mg(t,...e){if(t==null)return ve;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(mg(e,n))}function rt(t,e,n){return t.set(n),e}const mh=typeof window<"u";let yg=mh?()=>window.performance.now():()=>Date.now(),ja=mh?t=>requestAnimationFrame(t):ve;const $n=new Set;function yh(t){$n.forEach(e=>{e.c(t)||($n.delete(e),e.f())}),$n.size!==0&&ja(yh)}function vg(t){let e;return $n.size===0&&ja(yh),{promise:new Promise(n=>{$n.add(e={c:t,f:n})}),abort(){$n.delete(e)}}}function g(t,e){t.appendChild(e)}function vh(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wg(t){const e=b("style");return bg(vh(t),e),e.sheet}function bg(t,e){return g(t.head||t,e),e.sheet}function Q(t,e,n){t.insertBefore(e,n||null)}function q(t){t.parentNode&&t.parentNode.removeChild(t)}function ui(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function ie(t){return document.createTextNode(t)}function R(){return ie(" ")}function $a(){return ie("")}function Y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function wh(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bh(t){let e;return{p(...n){e=n,e.forEach(s=>t.push(s))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function ir(t){return t===""?null:+t}function _g(t){return Array.from(t.childNodes)}function Se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ee(t,e){t.value=e??""}function Eg(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function rr(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Ig(t){for(const e of t.options)if(!e.disabled)return e}function _h(t){const e=t.querySelector(":checked")||Ig(t);return e&&e.__value}function Bi(t,e,n){t.classList[n?"add":"remove"](e)}function Eh(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}const or=new Map;let ar=0;function Tg(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Sg(t,e){const n={stylesheet:wg(e),rules:{}};return or.set(t,n),n}function fc(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let v=0;v<=1;v+=l){const I=e+(n-e)*r(v);c+=v*100+`%{${o(I,1-I)}}
`}const u=c+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Tg(u)}_${a}`,d=vh(t),{stylesheet:p,rules:m}=or.get(d)||Sg(d,t);m[h]||(m[h]=!0,p.insertRule(`@keyframes ${h} ${u}`,p.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${h} ${s}ms linear ${i}ms 1 both`,ar+=1,h}function Cg(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),ar-=i,ar||kg())}function kg(){ja(()=>{ar||(or.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&q(e)}),or.clear())})}let qs;function Rs(t){qs=t}function Ih(){if(!qs)throw new Error("Function called outside component initialization");return qs}function Th(t){Ih().$$.on_mount.push(t)}function us(){const t=Ih();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Eh(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Ag(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const xn=[],pc=[];let qn=[];const gc=[],Pg=Promise.resolve();let Qo=!1;function Dg(){Qo||(Qo=!0,Pg.then(Sh))}function Vt(t){qn.push(t)}const Io=new Set;let Mn=0;function Sh(){if(Mn!==0)return;const t=qs;do{try{for(;Mn<xn.length;){const e=xn[Mn];Mn++,Rs(e),Ng(e.$$)}}catch(e){throw xn.length=0,Mn=0,e}for(Rs(null),xn.length=0,Mn=0;pc.length;)pc.pop()();for(let e=0;e<qn.length;e+=1){const n=qn[e];Io.has(n)||(Io.add(n),n())}qn.length=0}while(xn.length);for(;gc.length;)gc.pop()();Qo=!1,Io.clear(),Rs(t)}function Ng(t){if(t.fragment!==null){t.update(),nt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Vt)}}function Rg(t){const e=[],n=[];qn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),qn=e}let Is;function Og(){return Is||(Is=Promise.resolve(),Is.then(()=>{Is=null})),Is}function To(t,e,n){t.dispatchEvent(Eh(`${e?"intro":"outro"}${n}`))}const Qi=new Set;let Ot;function Hs(){Ot={r:0,c:[],p:Ot}}function Ks(){Ot.r||nt(Ot.c),Ot=Ot.p}function fe(t,e){t&&t.i&&(Qi.delete(t),t.i(e))}function be(t,e,n,s){if(t&&t.o){if(Qi.has(t))return;Qi.add(t),Ot.c.push(()=>{Qi.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Lg={duration:0};function Xn(t,e,n,s){const i={direction:"both"};let r=e(t,n,i),o=s?0:1,a=null,l=null,c=null;function u(){c&&Cg(t,c)}function h(p,m){const y=p.b-o;return m*=Math.abs(y),{a:o,b:p.b,d:y,duration:m,start:p.start,end:p.start+m,group:p.group}}function d(p){const{delay:m=0,duration:y=300,easing:v=ph,tick:I=ve,css:S}=r||Lg,P={start:yg()+m,b:p};p||(P.group=Ot,Ot.r+=1),a||l?l=P:(S&&(u(),c=fc(t,o,p,y,m,v,S)),p&&I(0,1),a=h(P,y),Vt(()=>To(t,p,"start")),vg(C=>{if(l&&C>l.start&&(a=h(l,y),l=null,To(t,a.b,"start"),S&&(u(),c=fc(t,o,a.b,a.duration,0,v,r.css))),a){if(C>=a.end)I(o=a.b,1-o),To(t,a.b,"end"),l||(a.b?u():--a.group.r||nt(a.group.c)),a=null;else if(C>=a.start){const k=C-a.start;o=a.a+a.d*v(k/a.duration),I(o,1-o)}}return!!(a||l)}))}return{run(p){Ba(r)?Og().then(()=>{r=r(i),d(p)}):d(p)},end(){u(),a=l=null}}}function wt(t){t&&t.c()}function dt(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Vt(()=>{const o=t.$$.on_mount.map(gh).filter(Ba);t.$$.on_destroy?t.$$.on_destroy.push(...o):nt(o),t.$$.on_mount=[]}),r.forEach(Vt)}function ft(t,e){const n=t.$$;n.fragment!==null&&(Rg(n.after_update),nt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mg(t,e){t.$$.dirty[0]===-1&&(xn.push(t),Dg(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function It(t,e,n,s,i,r,o,a=[-1]){const l=qs;Rs(t);const c=t.$$={fragment:null,ctx:[],props:r,update:ve,not_equal:i,bound:dc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:dc(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&Mg(t,h)),d}):[],c.update(),u=!0,nt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=_g(e.target);c.fragment&&c.fragment.l(h),h.forEach(q)}else c.fragment&&c.fragment.c();e.intro&&fe(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),Sh()}Rs(l)}class Tt{$destroy(){ft(this,1),this.$destroy=ve}$on(e,n){if(!Ba(n))return ve;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!gg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Un=[];function hs(t,e=ve){let n;const s=new Set;function i(a){if(yt(t,a)&&(t=a,n)){const l=!Un.length;for(const c of s)c[1](),Un.push(c,t);if(l){for(let c=0;c<Un.length;c+=2)Un[c][0](Un[c+1]);Un.length=0}}}function r(a){i(a(t))}function o(a,l=ve){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||ve),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const So=hs({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Yo=hs(""),Xo=hs(""),Os=hs(""),St=hs(""),Ss=hs(null);/**
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
 */const Ch=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ug=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},kh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ch(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ug(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new xg;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fg=function(t){const e=Ch(t);return kh.encodeByteArray(e,!0)},lr=function(t){return Fg(t).replace(/\./g,"")},Ah=function(t){try{return kh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bg=()=>Vg().__FIREBASE_DEFAULTS__,jg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$g=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ah(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return Bg()||jg()||$g()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ph=t=>{var e,n;return(n=(e=qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qg=t=>{const e=Ph(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Hg=()=>{var t;return(t=qa())===null||t===void 0?void 0:t.config},Dh=t=>{var e;return(e=qa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Kg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function zg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lr(JSON.stringify(n)),lr(JSON.stringify(o)),a].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Gg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yg(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xg(){try{return typeof indexedDB=="object"}catch{return!1}}function Jg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zg="FirebaseError";class Kt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zg,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?em(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,a,s)}}function em(t,e){return t.replace(tm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const tm=/\{\$([^}]+)}/g;function nm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(mc(r)&&mc(o)){if(!cr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function mc(t){return t!==null&&typeof t=="object"}/**
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
 */function di(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sm(t,e){const n=new im(t,e);return n.subscribe.bind(n)}class im{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");rm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Co),i.error===void 0&&(i.error=Co),i.complete===void 0&&(i.complete=Co);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Co(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class om{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Kg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lm(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:am(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function am(t){return t===gn?void 0:t}function lm(t){return t.instantiationMode==="EAGER"}/**
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
 */class cm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new om(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const um={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},hm=oe.INFO,dm={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},fm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=dm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ha{constructor(e){this.name=e,this._logLevel=hm,this._logHandler=fm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?um[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const pm=(t,e)=>e.some(n=>t instanceof n);let yc,vc;function gm(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mm(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nh=new WeakMap,Jo=new WeakMap,Rh=new WeakMap,ko=new WeakMap,Ka=new WeakMap;function ym(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Jt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nh.set(n,t)}).catch(()=>{}),Ka.set(e,t),e}function vm(t){if(Jo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Jo.set(t,e)}let Zo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wm(t){Zo=t(Zo)}function bm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ao(this),e,...n);return Rh.set(s,e.sort?e.sort():[e]),Jt(s)}:mm().includes(t)?function(...e){return t.apply(Ao(this),e),Jt(Nh.get(this))}:function(...e){return Jt(t.apply(Ao(this),e))}}function _m(t){return typeof t=="function"?bm(t):(t instanceof IDBTransaction&&vm(t),pm(t,gm())?new Proxy(t,Zo):t)}function Jt(t){if(t instanceof IDBRequest)return ym(t);if(ko.has(t))return ko.get(t);const e=_m(t);return e!==t&&(ko.set(t,e),Ka.set(e,t)),e}const Ao=t=>Ka.get(t);function Em(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Jt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Jt(o.result),l.oldVersion,l.newVersion,Jt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Im=["get","getKey","getAll","getAllKeys","count"],Tm=["put","add","delete","clear"],Po=new Map;function wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Po.get(e))return Po.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Tm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Im.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Po.set(e,r),r}wm(t=>({...t,get:(e,n,s)=>wc(e,n)||t.get(e,n,s),has:(e,n)=>!!wc(e,n)||t.has(e,n)}));/**
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
 */class Sm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Cm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ea="@firebase/app",bc="0.9.4";/**
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
 */const Tn=new Ha("@firebase/app"),km="@firebase/app-compat",Am="@firebase/analytics-compat",Pm="@firebase/analytics",Dm="@firebase/app-check-compat",Nm="@firebase/app-check",Rm="@firebase/auth",Om="@firebase/auth-compat",Lm="@firebase/database",Mm="@firebase/database-compat",Um="@firebase/functions",xm="@firebase/functions-compat",Fm="@firebase/installations",Vm="@firebase/installations-compat",Bm="@firebase/messaging",jm="@firebase/messaging-compat",$m="@firebase/performance",qm="@firebase/performance-compat",Hm="@firebase/remote-config",Km="@firebase/remote-config-compat",zm="@firebase/storage",Wm="@firebase/storage-compat",Gm="@firebase/firestore",Qm="@firebase/firestore-compat",Ym="firebase",Xm="9.17.2";/**
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
 */const ta="[DEFAULT]",Jm={[ea]:"fire-core",[km]:"fire-core-compat",[Pm]:"fire-analytics",[Am]:"fire-analytics-compat",[Nm]:"fire-app-check",[Dm]:"fire-app-check-compat",[Rm]:"fire-auth",[Om]:"fire-auth-compat",[Lm]:"fire-rtdb",[Mm]:"fire-rtdb-compat",[Um]:"fire-fn",[xm]:"fire-fn-compat",[Fm]:"fire-iid",[Vm]:"fire-iid-compat",[Bm]:"fire-fcm",[jm]:"fire-fcm-compat",[$m]:"fire-perf",[qm]:"fire-perf-compat",[Hm]:"fire-rc",[Km]:"fire-rc-compat",[zm]:"fire-gcs",[Wm]:"fire-gcs-compat",[Gm]:"fire-fst",[Qm]:"fire-fst-compat","fire-js":"fire-js",[Ym]:"fire-js-all"};/**
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
 */const ur=new Map,na=new Map;function Zm(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(na.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,t);for(const n of ur.values())Zm(n,t);return!0}function za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ey={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new hi("app","Firebase",ey);/**
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
 */class ty{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=Xm;function Oh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ta,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=Hg()),!n)throw Zt.create("no-options");const r=ur.get(i);if(r){if(cr(n,r.options)&&cr(s,r.config))return r;throw Zt.create("duplicate-app",{appName:i})}const o=new cm(i);for(const l of na.values())o.addComponent(l);const a=new ty(n,s,o);return ur.set(i,a),a}function Lh(t=ta){const e=ur.get(t);if(!e&&t===ta)return Oh();if(!e)throw Zt.create("no-app",{appName:t});return e}function en(t,e,n){var s;let i=(s=Jm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}Jn(new In(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ny="firebase-heartbeat-database",sy=1,zs="firebase-heartbeat-store";let Do=null;function Mh(){return Do||(Do=Em(ny,sy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zs)}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),Do}async function iy(t){try{return(await Mh()).transaction(zs).objectStore(zs).get(Uh(t))}catch(e){if(e instanceof Kt)Tn.warn(e.message);else{const n=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function _c(t,e){try{const s=(await Mh()).transaction(zs,"readwrite");return await s.objectStore(zs).put(e,Uh(t)),s.done}catch(n){if(n instanceof Kt)Tn.warn(n.message);else{const s=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(s.message)}}}function Uh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ry=1024,oy=30*24*60*60*1e3;class ay{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ec();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=oy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ec(),{heartbeatsToSend:n,unsentEntries:s}=ly(this._heartbeatsCache.heartbeats),i=lr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ec(){return new Date().toISOString().substring(0,10)}function ly(t,e=ry){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ic(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ic(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xg()?Jg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ic(t){return lr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uy(t){Jn(new In("platform-logger",e=>new Sm(e),"PRIVATE")),Jn(new In("heartbeat",e=>new ay(e),"PRIVATE")),en(ea,bc,t),en(ea,bc,"esm2017"),en("fire-js","")}uy("");function Wa(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function xh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hy=xh,Fh=new hi("auth","Firebase",xh());/**
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
 */const Tc=new Ha("@firebase/auth");function Yi(t,...e){Tc.logLevel<=oe.ERROR&&Tc.error(`Auth (${fi}): ${t}`,...e)}/**
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
 */function bt(t,...e){throw Ga(t,...e)}function kt(t,...e){return Ga(t,...e)}function dy(t,e,n){const s=Object.assign(Object.assign({},hy()),{[e]:n});return new hi("auth","Firebase",s).create(e,{appName:t.name})}function Ga(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Fh.create(t,...e)}function F(t,e,...n){if(!t)throw Ga(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yi(e),new Error(e)}function Bt(t,e){t||Lt(e)}/**
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
 */const Sc=new Map;function Mt(t){Bt(t instanceof Function,"Expected a class definition");let e=Sc.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sc.set(t,e),e)}/**
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
 */function fy(t,e){const n=za(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(cr(r,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function py(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function sa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gy(){return Cc()==="http:"||Cc()==="https:"}function Cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function my(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gy()||Gg()||"connection"in navigator)?navigator.onLine:!0}function yy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Wg()||Qg()}get(){return my()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qa(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const wy=new pi(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gi(t,e,n,s,i={}){return Bh(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Vh.fetch()(jh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Bh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},vy),e);try{const i=new by(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ji(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ji(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ji(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ji(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw dy(t,u,c);bt(t,u)}}catch(i){if(i instanceof Kt)throw i;bt(t,"internal-error",{message:String(i)})}}async function Or(t,e,n,s,i={}){const r=await gi(t,e,n,s,i);return"mfaPendingCredential"in r&&bt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function jh(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Qa(t.config,i):`${t.config.apiScheme}://${i}`}class by{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(kt(this.auth,"network-request-failed")),wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ji(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=kt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function _y(t,e){return gi(t,"POST","/v1/accounts:delete",e)}async function Ey(t,e){return gi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Iy(t,e=!1){const n=Oe(t),s=await n.getIdToken(e),i=Ya(s);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ls(No(i.auth_time)),issuedAtTime:Ls(No(i.iat)),expirationTime:Ls(No(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function No(t){return Number(t)*1e3}function Ya(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ah(n);return i?JSON.parse(i):(Yi("Failed to decode base64 JWT payload"),null)}catch(i){return Yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ty(t){const e=Ya(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ws(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Kt&&Sy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Sy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Cy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $h{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ws(t,Ey(n,{idToken:s}));F(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Py(r.providerUserInfo):[],a=Ay(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new $h(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ky(t){const e=Oe(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ay(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Py(t){return t.map(e=>{var{providerId:n}=e,s=Wa(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Dy(t,e){const n=await Bh(t,{},async()=>{const s=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=jh(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Dy(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Gs;return s&&(F(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(F(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function zt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $h(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ws(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Iy(this,e)}reload(){return ky(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ws(this,_y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:C,isAnonymous:k,providerData:j,stsTokenManager:U}=n;F(P&&U,e,"internal-error");const ae=Gs.fromJSON(this.name,U);F(typeof P=="string",e,"internal-error"),zt(h,e.name),zt(d,e.name),F(typeof C=="boolean",e,"internal-error"),F(typeof k=="boolean",e,"internal-error"),zt(p,e.name),zt(m,e.name),zt(y,e.name),zt(v,e.name),zt(I,e.name),zt(S,e.name);const N=new bn({uid:P,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:k,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:ae,createdAt:I,lastLoginAt:S});return j&&Array.isArray(j)&&(N.providerData=j.map(Z=>Object.assign({},Z))),v&&(N._redirectEventId=v),N}static async _fromIdTokenResponse(e,n,s=!1){const i=new Gs;i.updateFromServerResponse(n);const r=new bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await hr(r),r}}/**
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
 */class qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qh.type="NONE";const kc=qh;/**
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
 */function Xi(t,e,n){return`firebase:${t}:${e}:${n}`}class Hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Xi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Xi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Hn(Mt(kc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Mt(kc);const o=Xi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=bn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Hn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Hn(r,e,s))}}/**
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
 */function Ac(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gh(e))return"Blackberry";if(Qh(e))return"Webos";if(Xa(e))return"Safari";if((e.includes("chrome/")||Kh(e))&&!e.includes("edge/"))return"Chrome";if(Wh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hh(t=ze()){return/firefox\//i.test(t)}function Xa(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kh(t=ze()){return/crios\//i.test(t)}function zh(t=ze()){return/iemobile/i.test(t)}function Wh(t=ze()){return/android/i.test(t)}function Gh(t=ze()){return/blackberry/i.test(t)}function Qh(t=ze()){return/webos/i.test(t)}function Lr(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ny(t=ze()){var e;return Lr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ry(){return Yg()&&document.documentMode===10}function Yh(t=ze()){return Lr(t)||Wh(t)||Qh(t)||Gh(t)||/windows phone/i.test(t)||zh(t)}function Oy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xh(t,e=[]){let n;switch(t){case"Browser":n=Ac(ze());break;case"Worker":n=`${Ac(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${s}`}/**
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
 */class Ly{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class My{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pc(this),this.idTokenSubscription=new Pc(this),this.beforeStateQueue=new Ly(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Mr(t){return Oe(t)}class Pc{constructor(e){this.auth=e,this.observer=null,this.addObserver=sm(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Uy(t,e,n){const s=Mr(t);F(s._canInitEmulator,s,"emulator-config-failed"),F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Jh(e),{host:o,port:a}=xy(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Fy()}function Jh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xy(t){const e=Jh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Dc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Dc(o)}}}function Dc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Fy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ja{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function Vy(t,e){return gi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function By(t,e){return Or(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
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
 */async function jy(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function $y(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
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
 */class Qs extends Ja{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Qs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return By(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jy(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $y(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kn(t,e){return Or(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
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
 */const qy="http://localhost";class Sn extends Ja{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Wa(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Sn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Kn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}buildRequest(){const e={requestUri:qy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */function Hy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ky(t){const e=Cs(ks(t)).link,n=e?Cs(ks(e)).deep_link_id:null,s=Cs(ks(t)).deep_link_id;return(s?Cs(ks(s)).link:null)||s||n||e||t}class Za{constructor(e){var n,s,i,r,o,a;const l=Cs(ks(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Hy((i=l.mode)!==null&&i!==void 0?i:null);F(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ky(e);try{return new Za(n)}catch{return null}}}/**
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
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return Qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Za.parseLink(n);return F(s,"argument-error"),Qs._fromEmailAndCode(e,s.code,s.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends Zh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wt extends mi{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gt.credential(n,s)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class Qt extends mi{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
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
 */class Yt extends mi{constructor(){super("twitter.com")}static credential(e,n){return Sn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
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
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await bn._fromIdTokenResponse(e,s,i),o=Nc(s);return new Zn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Nc(s);return new Zn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Nc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dr extends Kt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,dr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new dr(e,n,s,i)}}function ed(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?dr._fromErrorAndOperation(t,r,e,s):r})}async function zy(t,e,n=!1){const s=await Ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zn._forOperation(t,"link",s)}/**
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
 */async function Wy(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ws(t,ed(s,i,e,t),n);F(r.idToken,s,"internal-error");const o=Ya(r.idToken);F(o,s,"internal-error");const{sub:a}=o;return F(t.uid===a,s,"user-mismatch"),Zn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&bt(s,"user-mismatch"),r}}/**
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
 */async function td(t,e,n=!1){const s="signIn",i=await ed(t,s,e),r=await Zn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Gy(t,e){return td(Mr(t),e)}function Qy(t,e,n){return Gy(Oe(t),ds.credential(e,n))}function Yy(t,e,n,s){return Oe(t).onIdTokenChanged(e,n,s)}function Xy(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function Jy(t){return Oe(t).signOut()}const fr="__sak";/**
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
 */class nd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fr,"1"),this.storage.removeItem(fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Zy(){const t=ze();return Xa(t)||Lr(t)}const ev=1e3,tv=10;class sd extends nd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zy()&&Oy(),this.fallbackToPolling=Yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ry()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sd.type="LOCAL";const nv=sd;/**
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
 */class id extends nd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}id.type="SESSION";const rd=id;/**
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
 */function sv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ur(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await sv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
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
 */function el(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=el("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function rv(t){At().location.href=t}/**
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
 */function od(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function ov(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function av(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lv(){return od()?self:null}/**
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
 */const ad="firebaseLocalStorageDb",cv=1,pr="firebaseLocalStorage",ld="fbase_key";class yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xr(t,e){return t.transaction([pr],e?"readwrite":"readonly").objectStore(pr)}function uv(){const t=indexedDB.deleteDatabase(ad);return new yi(t).toPromise()}function ia(){const t=indexedDB.open(ad,cv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(pr,{keyPath:ld})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(pr)?e(s):(s.close(),await uv(),e(await ia()))})})}async function Rc(t,e,n){const s=xr(t,!0).put({[ld]:e,value:n});return new yi(s).toPromise()}async function hv(t,e){const n=xr(t,!1).get(e),s=await new yi(n).toPromise();return s===void 0?null:s.value}function Oc(t,e){const n=xr(t,!0).delete(e);return new yi(n).toPromise()}const dv=800,fv=3;class cd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ia(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>fv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(lv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ov(),!this.activeServiceWorker)return;this.sender=new iv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||av()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ia();return await Rc(e,fr,"1"),await Oc(e,fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=xr(i,!1).getAll();return new yi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cd.type="LOCAL";const pv=cd;/**
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
 */function gv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=kt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",gv().appendChild(s)})}function yv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new pi(3e4,6e4);/**
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
 */function vv(t,e){return e?Mt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tl extends Ja{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wv(t){return td(t.auth,new tl(t),t.bypassAuthState)}function bv(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Wy(n,new tl(t),t.bypassAuthState)}async function _v(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),zy(n,new tl(t),t.bypassAuthState)}/**
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
 */class ud{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wv;case"linkViaPopup":case"linkViaRedirect":return _v;case"reauthViaPopup":case"reauthViaRedirect":return bv;default:bt(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ev=new pi(2e3,1e4);class Bn extends ud{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=el();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ev.get())};e()}}Bn.currentPopupAction=null;/**
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
 */const Iv="pendingRedirect",Ji=new Map;class Tv extends ud{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ji.get(this.auth._key());if(!e){try{const s=await Sv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ji.set(this.auth._key(),e)}return this.bypassAuthState||Ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sv(t,e){const n=Av(e),s=kv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Cv(t,e){Ji.set(t._key(),e)}function kv(t){return Mt(t._redirectPersistence)}function Av(t){return Xi(Iv,t.config.apiKey,t.name)}async function Pv(t,e,n=!1){const s=Mr(t),i=vv(s,e),o=await new Tv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Dv=10*60*1e3;class Nv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lc(e))}saveEventToCache(e){this.cachedEventUids.add(Lc(e)),this.lastProcessedEventTime=Date.now()}}function Lc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Rv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hd(t);default:return!1}}/**
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
 */async function Ov(t,e={}){return gi(t,"GET","/v1/projects",e)}/**
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
 */const Lv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mv=/^https?/;async function Uv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ov(t);for(const n of e)try{if(xv(n))return}catch{}bt(t,"unauthorized-domain")}function xv(t){const e=sa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Mv.test(n))return!1;if(Lv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Fv=new pi(3e4,6e4);function Mc(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vv(t){return new Promise((e,n)=>{var s,i,r;function o(){Mc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mc(),n(kt(t,"network-request-failed"))},timeout:Fv.get()})}if(!((i=(s=At().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=At().gapi)===null||r===void 0)&&r.load)o();else{const a=yv("iframefcb");return At()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},mv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zi=null,e})}let Zi=null;function Bv(t){return Zi=Zi||Vv(t),Zi}/**
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
 */const jv=new pi(5e3,15e3),$v="__/auth/iframe",qv="emulator/auth/iframe",Hv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zv(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qa(e,qv):`https://${t.config.authDomain}/${$v}`,s={apiKey:e.apiKey,appName:t.name,v:fi},i=Kv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${di(s).slice(1)}`}async function Wv(t){const e=await Bv(t),n=At().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:zv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=At().setTimeout(()=>{r(o)},jv.get());function l(){At().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Gv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qv=500,Yv=600,Xv="_blank",Jv="http://localhost";class Uc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zv(t,e,n,s=Qv,i=Yv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Gv),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ze().toLowerCase();n&&(a=Kh(c)?Xv:n),Hh(c)&&(e=e||Jv,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(Ny(c)&&a!=="_self")return ew(e||"",a),new Uc(null);const h=window.open(e||"",a,u);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Uc(h)}function ew(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const tw="__/auth/handler",nw="emulator/auth/handler";function xc(t,e,n,s,i,r){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fi,eventId:i};if(e instanceof Zh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof mi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${sw(t)}?${di(a).slice(1)}`}function sw({config:t}){return t.emulator?Qa(t,nw):`https://${t.authDomain}/${tw}`}/**
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
 */const Ro="webStorageSupport";class iw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rd,this._completeRedirectFn=Pv,this._overrideRedirectResult=Cv}async _openPopup(e,n,s,i){var r;Bt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=xc(e,n,s,sa(),i);return Zv(e,o,el())}async _openRedirect(e,n,s,i){return await this._originValidation(e),rv(xc(e,n,s,sa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Bt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Wv(e),s=new Nv(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ro,{type:Ro},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ro];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yh()||Xa()||Lr()}}const rw=iw;var Fc="@firebase/auth",Vc="0.21.4";/**
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
 */class ow{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lw(t){Jn(new In("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{F(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xh(t)},u=new My(a,l,c);return py(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Jn(new In("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(s=>new ow(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Fc,Vc,aw(t)),en(Fc,Vc,"esm2017")}/**
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
 */const cw=5*60,uw=Dh("authIdTokenMaxAge")||cw;let Bc=null;const hw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>uw)return;const i=n==null?void 0:n.token;Bc!==i&&(Bc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dw(t=Lh()){const e=za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fy(t,{popupRedirectResolver:rw,persistence:[pv,nv,rd]}),s=Dh("authTokenSyncURL");if(s){const r=hw(s);Xy(n,r,()=>r(n.currentUser)),Yy(n,o=>r(o))}const i=Ph("auth");return i&&Uy(n,`http://${i}`),n}lw("Browser");var fw="firebase",pw="9.17.2";/**
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
 */en(fw,pw,"app");var gw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,nl=nl||{},B=gw||self;function gr(){}function Fr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mw(t){return Object.prototype.hasOwnProperty.call(t,Oo)&&t[Oo]||(t[Oo]=++yw)}var Oo="closure_uid_"+(1e9*Math.random()>>>0),yw=0;function vw(t,e,n){return t.call.apply(t.bind,arguments)}function ww(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=vw:He=ww,He.apply(null,arguments)}function $i(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function cn(){this.s=this.s,this.o=this.o}var bw=0;cn.prototype.s=!1;cn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),bw!=0)&&mw(this)};cn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function sl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function jc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Fr(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var _w=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",gr,e),B.removeEventListener("test",gr,e)}catch{}return t}();function mr(t){return/^[\s\xa0]*$/.test(t)}var $c=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Lo(t,e){return t<e?-1:t>e?1:0}function Vr(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function Ct(t){return Vr().indexOf(t)!=-1}function il(t){return il[" "](t),t}il[" "]=gr;function Ew(t){var e=Sw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Iw=Ct("Opera"),es=Ct("Trident")||Ct("MSIE"),fd=Ct("Edge"),ra=fd||es,pd=Ct("Gecko")&&!(Vr().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),Tw=Vr().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function gd(){var t=B.document;return t?t.documentMode:void 0}var yr;e:{var Mo="",Uo=function(){var t=Vr();if(pd)return/rv:([^\);]+)(\)|;)/.exec(t);if(fd)return/Edge\/([\d\.]+)/.exec(t);if(es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Tw)return/WebKit\/(\S+)/.exec(t);if(Iw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uo&&(Mo=Uo?Uo[1]:""),es){var xo=gd();if(xo!=null&&xo>parseFloat(Mo)){yr=String(xo);break e}}yr=Mo}var Sw={};function Cw(){return Ew(function(){let t=0;const e=$c(String(yr)).split("."),n=$c("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Lo(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Lo(i[2].length==0,r[2].length==0)||Lo(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var oa;if(B.document&&es){var qc=gd();oa=qc||parseInt(yr,10)||void 0}else oa=void 0;var kw=oa;function Ys(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pd){e:{try{il(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Aw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ys.X.h.call(this)}}Ve(Ys,Ke);var Aw={2:"touch",3:"pen",4:"mouse"};Ys.prototype.h=function(){Ys.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wi="closure_listenable_"+(1e6*Math.random()|0),Pw=0;function Dw(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Pw,this.ba=this.ea=!1}function Br(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function md(t){const e={};for(const n in t)e[n]=t[n];return e}const Hc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yd(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Hc.length;r++)n=Hc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function jr(t){this.src=t,this.g={},this.h=0}jr.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=la(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Dw(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function aa(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=dd(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Br(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function la(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var ol="closure_lm_"+(1e6*Math.random()|0),Fo={};function vd(t,e,n,s,i){if(s&&s.once)return bd(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)vd(t,e[r],n,s,i);return null}return n=cl(n),t&&t[wi]?t.N(e,n,vi(s)?!!s.capture:!!s,i):wd(t,e,n,!1,s,i)}function wd(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=vi(i)?!!i.capture:!!i,a=ll(t);if(a||(t[ol]=a=new jr(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Nw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)_w||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ed(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Nw(){function t(n){return e.call(t.src,t.listener,n)}const e=Rw;return t}function bd(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)bd(t,e[r],n,s,i);return null}return n=cl(n),t&&t[wi]?t.O(e,n,vi(s)?!!s.capture:!!s,i):wd(t,e,n,!0,s,i)}function _d(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)_d(t,e[r],n,s,i);else s=vi(s)?!!s.capture:!!s,n=cl(n),t&&t[wi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=la(r,n,s,i),-1<n&&(Br(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ll(t))&&(e=t.g[e.toString()],t=-1,e&&(t=la(e,n,s,i)),(n=-1<t?e[t]:null)&&al(n))}function al(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[wi])aa(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ed(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ll(e))?(aa(n,t),n.h==0&&(n.src=null,e[ol]=null)):Br(t)}}}function Ed(t){return t in Fo?Fo[t]:Fo[t]="on"+t}function Rw(t,e){if(t.ba)t=!0;else{e=new Ys(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&al(t),t=n.call(s,e)}return t}function ll(t){return t=t[ol],t instanceof jr?t:null}var Vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function cl(t){return typeof t=="function"?t:(t[Vo]||(t[Vo]=function(e){return t.handleEvent(e)}),t[Vo])}function Le(){cn.call(this),this.i=new jr(this),this.P=this,this.I=null}Ve(Le,cn);Le.prototype[wi]=!0;Le.prototype.removeEventListener=function(t,e,n,s){_d(this,t,e,n,s)};function xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var i=e;e=new Ke(s,t),yd(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=qi(o,s,!0,e)&&i}if(o=e.g=t,i=qi(o,s,!0,e)&&i,i=qi(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=qi(o,s,!1,e)&&i}Le.prototype.M=function(){if(Le.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Br(n[s]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function qi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&aa(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ul=B.JSON.stringify;function Ow(){var t=Sd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Lw{constructor(){this.h=this.g=null}add(e,n){const s=Id.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Id=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Mw,t=>t.reset());class Mw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Uw(t){B.setTimeout(()=>{throw t},0)}function Td(t,e){ca||xw(),ua||(ca(),ua=!0),Sd.add(t,e)}var ca;function xw(){var t=B.Promise.resolve(void 0);ca=function(){t.then(Fw)}}var ua=!1,Sd=new Lw;function Fw(){for(var t;t=Ow();){try{t.h.call(t.g)}catch(n){Uw(n)}var e=Id;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ua=!1}function $r(t,e){Le.call(this),this.h=t||1,this.g=e||B,this.j=He(this.lb,this),this.l=Date.now()}Ve($r,Le);D=$r.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),xe(this,"tick"),this.ca&&(hl(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){$r.X.M.call(this),hl(this),delete this.g};function dl(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function Cd(t){t.g=dl(()=>{t.g=null,t.i&&(t.i=!1,Cd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Vw extends cn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cd(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xs(t){cn.call(this),this.h=t,this.g={}}Ve(Xs,cn);var Kc=[];function kd(t,e,n,s){Array.isArray(n)||(n&&(Kc[0]=n.toString()),n=Kc);for(var i=0;i<n.length;i++){var r=vd(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ad(t){rl(t.g,function(e,n){this.g.hasOwnProperty(n)&&al(e)},t),t.g={}}Xs.prototype.M=function(){Xs.X.M.call(this),Ad(this)};Xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qr(){this.g=!0}qr.prototype.Aa=function(){this.g=!1};function Bw(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jw(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function jn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qw(t,n)+(s?" "+s:"")})}function $w(t,e){t.info(function(){return"TIMEOUT: "+e})}qr.prototype.info=function(){};function qw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ul(n)}catch{return e}}var Dn={},zc=null;function Hr(){return zc=zc||new Le}Dn.Pa="serverreachability";function Pd(t){Ke.call(this,Dn.Pa,t)}Ve(Pd,Ke);function Js(t){const e=Hr();xe(e,new Pd(e))}Dn.STAT_EVENT="statevent";function Dd(t,e){Ke.call(this,Dn.STAT_EVENT,t),this.stat=e}Ve(Dd,Ke);function Xe(t){const e=Hr();xe(e,new Dd(e,t))}Dn.Qa="timingevent";function Nd(t,e){Ke.call(this,Dn.Qa,t),this.size=e}Ve(Nd,Ke);function bi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var Kr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Rd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fl(){}fl.prototype.h=null;function Wc(t){return t.h||(t.h=t.i())}function Od(){}var _i={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function pl(){Ke.call(this,"d")}Ve(pl,Ke);function gl(){Ke.call(this,"c")}Ve(gl,Ke);var ha;function zr(){}Ve(zr,fl);zr.prototype.g=function(){return new XMLHttpRequest};zr.prototype.i=function(){return{}};ha=new zr;function Ei(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Xs(this),this.O=Hw,t=ra?125:void 0,this.T=new $r(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ld}function Ld(){this.i=null,this.g="",this.h=!1}var Hw=45e3,da={},vr={};D=Ei.prototype;D.setTimeout=function(t){this.O=t};function fa(t,e,n){t.K=1,t.v=Gr(jt(e)),t.s=n,t.P=!0,Md(t,null)}function Md(t,e){t.F=Date.now(),Ii(t),t.A=jt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),qd(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ld,t.g=hf(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Vw(He(t.La,t,t.g),t.N)),kd(t.S,t.g,"readystatechange",t.ib),e=t.H?md(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Js(),Bw(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Ut(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=Ut(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||ra||this.g&&(this.h.h||this.g.fa()||Xc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Js(3):Js(2)),Wr(this);var n=this.g.aa();this.Y=n;t:if(Ud(this)){var s=Xc(this.g);t="";var i=s.length,r=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Ms(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,jw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mr(a)){var c=a;break t}}c=null}if(n=c)jn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pa(this,n);else{this.i=!1,this.o=3,Xe(12),mn(this),Ms(this);break e}}this.P?(xd(this,u,o),ra&&this.i&&u==3&&(kd(this.S,this.T,"tick",this.hb),this.T.start())):(jn(this.j,this.m,o,null),pa(this,o)),u==4&&mn(this),this.i&&!this.I&&(u==4?af(this.l,this):(this.i=!1,Ii(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xe(12)):(this.o=0,Xe(13)),mn(this),Ms(this)}}}catch{}finally{}};function Ud(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function xd(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Kw(t,n),i==vr){e==4&&(t.o=4,Xe(14),s=!1),jn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==da){t.o=4,Xe(15),jn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else jn(t.j,t.m,i,null),pa(t,i);Ud(t)&&i!=vr&&i!=da&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),El(e),e.K=!0,Xe(11))):(jn(t.j,t.m,n,"[Invalid Chunked Response]"),mn(t),Ms(t))}D.hb=function(){if(this.g){var t=Ut(this.g),e=this.g.fa();this.C<e.length&&(Wr(this),xd(this,t,e),this.i&&t!=4&&Ii(this))}};function Kw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?vr:(n=Number(e.substring(n,s)),isNaN(n)?da:(s+=1,s+n>e.length?vr:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,mn(this)};function Ii(t){t.V=Date.now()+t.O,Fd(t,t.O)}function Fd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bi(He(t.gb,t),e)}function Wr(t){t.B&&(B.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?($w(this.j,this.A),this.K!=2&&(Js(),Xe(17)),mn(this),this.o=2,Ms(this)):Fd(this,this.V-t)};function Ms(t){t.l.G==0||t.I||af(t.l,t)}function mn(t){Wr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,hl(t.T),Ad(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function pa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ga(n.h,t))){if(!t.J&&ga(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_r(n),Xr(n);else break e;_l(n),Xe(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=bi(He(n.cb,n),6e3));if(1>=zd(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else yn(n,11)}else if((t.J||n.g==t)&&_r(n),!mr(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ml(r,r.h),r.h=null))}if(s.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,ye(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=uf(s,s.H?s.ka:null,s.V),o.J){Wd(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Wr(a),Ii(a)),s.g=o}else rf(s);0<n.i.length&&Jr(n)}else c[0]!="stop"&&c[0]!="close"||yn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?yn(n,7):bl(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Js(4)}catch{}}function zw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ww(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Vd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ww(t),s=zw(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Bd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _n(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _n){this.h=e!==void 0?e:t.h,wr(this,t.j),this.s=t.s,this.g=t.g,br(this,t.m),this.l=t.l,e=t.i;var n=new Zs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gc(this,n),this.o=t.o}else t&&(n=String(t).match(Bd))?(this.h=!!e,wr(this,n[1]||"",!0),this.s=As(n[2]||""),this.g=As(n[3]||"",!0),br(this,n[4]),this.l=As(n[5]||"",!0),Gc(this,n[6]||"",!0),this.o=As(n[7]||"")):(this.h=!!e,this.i=new Zs(null,this.h))}_n.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ps(e,Qc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ps(e,Qc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ps(n,n.charAt(0)=="/"?Xw:Yw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ps(n,Zw)),t.join("")};function jt(t){return new _n(t)}function wr(t,e,n){t.j=n?As(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function br(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gc(t,e,n){e instanceof Zs?(t.i=e,eb(t.i,t.h)):(n||(e=Ps(e,Jw)),t.i=new Zs(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function Gr(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function As(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Qw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qc=/[#\/\?@]/g,Yw=/[#\?:]/g,Xw=/[#\?]/g,Jw=/[#\?@]/g,Zw=/#/g;function Zs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function un(t){t.g||(t.g=new Map,t.h=0,t.i&&Gw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Zs.prototype;D.add=function(t,e){un(this),this.i=null,t=fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jd(t,e){un(t),e=fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $d(t,e){return un(t),e=fs(t,e),t.g.has(e)}D.forEach=function(t,e){un(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.oa=function(){un(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.W=function(t){un(this);let e=[];if(typeof t=="string")$d(this,t)&&(e=e.concat(this.g.get(fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return un(this),this.i=null,t=fs(this,t),$d(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function qd(t,e,n){jd(t,e),0<n.length&&(t.i=null,t.g.set(fs(t,e),sl(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eb(t,e){e&&!t.j&&(un(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(jd(this,s),qd(this,i,n))},t)),t.j=e}var tb=class{constructor(e,n){this.h=e,this.g=n}};function Hd(t){this.l=t||nb,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nb=10;function Kd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zd(t){return t.h?1:t.g?t.g.size:0}function ga(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ml(t,e){t.g?t.g.add(e):t.h=e}function Wd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Hd.prototype.cancel=function(){if(this.i=Gd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return sl(t.i)}function yl(){}yl.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};yl.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function sb(){this.g=new yl}function ib(t,e,n){const s=n||"";try{Vd(t,function(i,r){let o=i;vi(i)&&(o=ul(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function rb(t,e){const n=new qr;if(B.Image){const s=new Image;s.onload=$i(Hi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=$i(Hi,n,s,"TestLoadImage: error",!1,e),s.onabort=$i(Hi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=$i(Hi,n,s,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Hi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ti(t){this.l=t.ac||null,this.j=t.jb||!1}Ve(Ti,fl);Ti.prototype.g=function(){return new Qr(this.l,this.j)};Ti.prototype.i=function(t){return function(){return t}}({});function Qr(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=vl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(Qr,Le);var vl=0;D=Qr.prototype;D.open=function(t,e){if(this.readyState!=vl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ei(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=vl};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Qd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Si(this):ei(this),this.readyState==3&&Qd(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Si(this))};D.Ua=function(t){this.g&&(this.response=t,Si(this))};D.ga=function(){this.g&&Si(this)};function Si(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ei(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ob=B.JSON.parse;function we(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yd,this.K=this.L=!1}Ve(we,Le);var Yd="",ab=/^https?$/i,lb=["POST","PUT"];D=we.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ha.g(),this.C=this.u?Wc(this.u):Wc(ha),this.g.onreadystatechange=He(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Yc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=dd(lb,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zd(this),0<this.B&&((this.K=cb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.qa,this)):this.A=dl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Yc(this,r)}};function cb(t){return es&&Cw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof nl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function Yc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xd(t),Yr(t)}function Xd(t){t.D||(t.D=!0,xe(t,"complete"),xe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),Yr(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yr(this,!0)),we.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Jd(this):this.fb())};D.fb=function(){Jd(this)};function Jd(t){if(t.h&&typeof nl<"u"&&(!t.C[1]||Ut(t)!=4||t.aa()!=2)){if(t.v&&Ut(t)==4)dl(t.Ha,0,t);else if(xe(t,"readystatechange"),Ut(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Bd)[1]||null;if(!i&&B.self&&B.self.location){var r=B.self.location.protocol;i=r.substr(0,r.length-1)}s=!ab.test(i?i.toLowerCase():"")}n=s}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var o=2<Ut(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Xd(t)}}finally{Yr(t)}}}}function Yr(t,e){if(t.g){Zd(t);const n=t.g,s=t.C[0]?gr:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Zd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function Ut(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ob(e)}};function Xc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ef(t){let e="";return rl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function wl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ef(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tf(t){this.Ca=0,this.i=[],this.j=new qr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ts("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ts("baseRetryDelayMs",5e3,t),this.bb=Ts("retryDelaySeedMs",1e4,t),this.$a=Ts("forwardChannelMaxRetries",2,t),this.ta=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Hd(t&&t.concurrentRequestLimit),this.Fa=new sb,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=tf.prototype;D.ma=8;D.G=1;function bl(t){if(nf(t),t.G==3){var e=t.U++,n=jt(t.F);ye(n,"SID",t.I),ye(n,"RID",e),ye(n,"TYPE","terminate"),Ci(t,n),e=new Ei(t,t.j,e,void 0),e.K=2,e.v=Gr(jt(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=hf(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ii(e)}cf(t)}function Xr(t){t.g&&(El(t),t.g.cancel(),t.g=null)}function nf(t){Xr(t),t.u&&(B.clearTimeout(t.u),t.u=null),_r(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Jr(t){Kd(t.h)||t.m||(t.m=!0,Td(t.Ja,t),t.C=0)}function ub(t,e){return zd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=bi(He(t.Ja,t,e),lf(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ei(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=md(r),yd(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sf(this,i,e),n=jt(this.F),ye(n,"RID",t),ye(n,"CVER",22),this.D&&ye(n,"X-HTTP-Session-Id",this.D),Ci(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(ef(r)))+"&"+e:this.o&&wl(n,this.o,r)),ml(this.h,i),this.Ya&&ye(n,"TYPE","init"),this.O?(ye(n,"$req",e),ye(n,"SID","null"),i.Z=!0,fa(i,n,null)):fa(i,n,e),this.G=2}}else this.G==3&&(t?Jc(this,t):this.i.length==0||Kd(this.h)||Jc(this))};function Jc(t,e){var n;e?n=e.m:n=t.U++;const s=jt(t.F);ye(s,"SID",t.I),ye(s,"RID",n),ye(s,"AID",t.T),Ci(t,s),t.o&&t.s&&wl(s,t.o,t.s),n=new Ei(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=sf(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ml(t.h,n),fa(n,s,e)}function Ci(t,e){t.ia&&rl(t.ia,function(n,s){ye(e,s,n)}),t.l&&Vd({},function(n,s){ye(e,s,n)})}function sf(t,e,n){n=Math.min(t.i.length,n);var s=t.l?He(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{ib(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function rf(t){t.g||t.u||(t.Z=1,Td(t.Ia,t),t.A=0)}function _l(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=bi(He(t.Ia,t),lf(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,of(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=bi(He(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Xe(10),Xr(this),of(this))};function El(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function of(t){t.g=new Ei(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=jt(t.sa);ye(e,"RID","rpc"),ye(e,"SID",t.I),ye(e,"CI",t.L?"0":"1"),ye(e,"AID",t.T),ye(e,"TYPE","xmlhttp"),Ci(t,e),t.o&&t.s&&wl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Gr(jt(e)),n.s=null,n.P=!0,Md(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Xr(this),_l(this),Xe(19))};function _r(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function af(t,e){var n=null;if(t.g==e){_r(t),El(t),t.g=null;var s=2}else if(ga(t.h,e))n=e.D,Wd(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Hr(),xe(s,new Nd(s,n)),Jr(t)}else rf(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&ub(t,e)||s==2&&_l(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:yn(t,5);break;case 4:yn(t,10);break;case 3:yn(t,6);break;default:yn(t,2)}}}function lf(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function yn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=He(t.kb,t);n||(n=new _n("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||wr(n,"https"),Gr(n)),rb(n.toString(),s)}else Xe(2);t.G=0,t.l&&t.l.va(e),cf(t),nf(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function cf(t){if(t.G=0,t.la=[],t.l){const e=Gd(t.h);(e.length!=0||t.i.length!=0)&&(jc(t.la,e),jc(t.la,t.i),t.h.i.length=0,sl(t.i),t.i.length=0),t.l.ua()}}function uf(t,e,n){var s=n instanceof _n?jt(n):new _n(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),br(s,s.m);else{var i=B.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new _n(null,void 0);s&&wr(r,s),e&&(r.g=e),i&&br(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ye(s,n,e),ye(s,"VER",t.ma),Ci(t,s),s}function hf(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new Ti({jb:!0})):new we(t.ra),e.Ka(t.H),e}function df(){}D=df.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Er(){if(es&&!(10<=Number(kw)))throw Error("Environmental error: no available transport.")}Er.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Le.call(this),this.g=new tf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!mr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}Ve(ut,Le);ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Xe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=uf(t,null,t.V),Jr(t)};ut.prototype.close=function(){bl(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ul(t),t=n);e.i.push(new tb(e.ab++,t)),e.G==3&&Jr(e)};ut.prototype.M=function(){this.g.l=null,delete this.j,bl(this.g),delete this.g,ut.X.M.call(this)};function ff(t){pl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(ff,pl);function pf(){gl.call(this),this.status=1}Ve(pf,gl);function ps(t){this.g=t}Ve(ps,df);ps.prototype.xa=function(){xe(this.g,"a")};ps.prototype.wa=function(t){xe(this.g,new ff(t))};ps.prototype.va=function(t){xe(this.g,new pf)};ps.prototype.ua=function(){xe(this.g,"b")};Er.prototype.createWebChannel=Er.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Kr.NO_ERROR=0;Kr.TIMEOUT=8;Kr.HTTP_ERROR=6;Rd.COMPLETE="complete";Od.EventType=_i;_i.OPEN="a";_i.CLOSE="b";_i.ERROR="c";_i.MESSAGE="d";Le.prototype.listen=Le.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Oa;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Sa;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;we.prototype.setWithCredentials=we.prototype.Ka;var hb=function(){return new Er},db=function(){return Hr()},Bo=Kr,fb=Rd,pb=Dn,Zc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},gb=Ti,Ki=Od,mb=we;const eu="@firebase/firestore";/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */let gs="9.17.2";/**
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
 */const Cn=new Ha("@firebase/firestore");function tu(){return Cn.logLevel}function O(t,...e){if(Cn.logLevel<=oe.DEBUG){const n=e.map(Il);Cn.debug(`Firestore (${gs}): ${t}`,...n)}}function $t(t,...e){if(Cn.logLevel<=oe.ERROR){const n=e.map(Il);Cn.error(`Firestore (${gs}): ${t}`,...n)}}function ma(t,...e){if(Cn.logLevel<=oe.WARN){const n=e.map(Il);Cn.warn(`Firestore (${gs}): ${t}`,...n)}}function Il(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw $t(e),new Error(e)}function pe(t,e){t||V()}function H(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wb{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string"),new gf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new Be(e)}}class bb{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(pe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class _b{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new bb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ib{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.A=n.token,new Eb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Tb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class mf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Tb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ce(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new Ce(0,0))}static max(){return new $(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ti{constructor(e,n,s){n===void 0?n=0:n>e.length&&V(),s===void 0?s=e.length-n:s>e.length-n&&V(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ti?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends ti{construct(e,n,s){return new me(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const Sb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends ti{construct(e,n,s){return new $e(e,n,s)}static isValidIdentifier(e){return Sb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(me.fromString(e))}static fromName(e){return new L(me.fromString(e).popFirst(5))}static empty(){return new L(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new me(e.slice()))}}function Cb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(s===1e9?new Ce(n+1,0):new Ce(n,s));return new sn(i,L.empty(),e)}function kb(t){return new sn(t.readTime,t.key,-1)}class sn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new sn($.min(),L.empty(),-1)}static max(){return new sn($.max(),L.empty(),-1)}}function Ab(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const Pb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Db{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ki(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Pb)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(i=>i?T.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new T((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new T((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Tl.at=-1;/**
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
 */class Nb{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function nu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Zr(t){return t==null}function Ir(t){return t===0&&1/t==-1/0}function Rb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ir(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ob extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new Ob("Invalid base64 string: "+i):i}}(e);return new We(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(t){if(pe(!!t),typeof t=="string"){let e=0;const n=Lb.exec(t);if(pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function vf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wf(t){const e=t.mapValue.fields.__previous_value__;return vf(e)?wf(e):e}function si(t){const e=rn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vf(t)?4:Mb(t)?9007199254740991:10:V()}function Dt(t,e){if(t===e)return!0;const n=kn(t);if(n!==kn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=rn(s.timestampValue),o=rn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ns(s.bytesValue).isEqual(ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ie(s.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ie(s.integerValue)===Ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Ie(s.doubleValue),o=Ie(i.doubleValue);return r===o?Ir(r)===Ir(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(nu(r)!==nu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Dt(r[a],o[a])))return!1;return!0}(t,e);default:return V()}}function ii(t,e){return(t.values||[]).find(n=>Dt(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=kn(t),s=kn(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Ie(i.integerValue||i.doubleValue),a=Ie(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return su(t.timestampValue,e.timestampValue);case 4:return su(si(t),si(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,r){const o=ns(i),a=ns(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ce(o[l],a[l]);if(c!==0)return c}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ce(Ie(i.latitude),Ie(r.latitude));return o!==0?o:ce(Ie(i.longitude),Ie(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ss(o[l],a[l]);if(c)return c}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===zi.mapValue&&r===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(r===zi.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ce(a[u],c[u]);if(h!==0)return h;const d=ss(o[a[u]],l[c[u]]);if(d!==0)return d}return ce(a.length,c.length)}(t.mapValue,e.mapValue);default:throw V()}}function su(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=rn(t),s=rn(e),i=ce(n.seconds,s.seconds);return i!==0?i:ce(n.nanos,s.nanos)}function is(t){return ya(t)}function ya(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=rn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ya(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ya(s.fields[a])}`;return r+"}"}(t.mapValue):V();var e,n}function iu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function va(t){return!!t&&"integerValue"in t}function Sl(t){return!!t&&"arrayValue"in t}function ru(t){return!!t&&"nullValue"in t}function ou(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function er(t){return!!t&&"mapValue"in t}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Us(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tr{constructor(e,n){this.position=e,this.inclusive=n}}function au(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=L.comparator(L.fromName(o.referenceValue),n.key):s=ss(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function lu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bf{}class Te extends bf{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new xb(e,n,s):n==="array-contains"?new Bb(e,s):n==="in"?new jb(e,s):n==="not-in"?new $b(e,s):n==="array-contains-any"?new qb(e,s):new Te(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Fb(e,s):new Vb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&kn(this.value)===kn(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class _t extends bf{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new _t(e,n)}matches(e){return _f(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function _f(t){return t.op==="and"}function Ef(t){return Ub(t)&&_f(t)}function Ub(t){for(const e of t.filters)if(e instanceof _t)return!1;return!0}function wa(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+is(t.value);if(Ef(t))return t.filters.map(e=>wa(e)).join(",");{const e=t.filters.map(n=>wa(n)).join(",");return`${t.op}(${e})`}}function If(t,e){return t instanceof Te?function(n,s){return s instanceof Te&&n.op===s.op&&n.field.isEqual(s.field)&&Dt(n.value,s.value)}(t,e):t instanceof _t?function(n,s){return s instanceof _t&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&If(r,s.filters[o]),!0):!1}(t,e):void V()}function Tf(t){return t instanceof Te?function(e){return`${e.field.canonicalString()} ${e.op} ${is(e.value)}`}(t):t instanceof _t?function(e){return e.op.toString()+" {"+e.getFilters().map(Tf).join(" ,")+"}"}(t):"Filter"}class xb extends Te{constructor(e,n,s){super(e,n,s),this.key=L.fromName(s.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fb extends Te{constructor(e,n){super(e,"in",n),this.keys=Sf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Vb extends Te{constructor(e,n){super(e,"not-in",n),this.keys=Sf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>L.fromName(s.referenceValue))}class Bb extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sl(n)&&ii(n.arrayValue,this.value)}}class jb extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ii(this.value.arrayValue,n)}}class $b extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ii(this.value.arrayValue,n)}}class qb extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ii(this.value.arrayValue,s))}}/**
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
 */class zn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Hb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??Ue.EMPTY,this.right=r??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cu(this.data.getIterator())}getIteratorFrom(e){return new cu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class cu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class lt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new lt([])}unionWith(e){let n=new ke($e.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!er(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=$e.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Us(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());er(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];er(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Nn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new tt(Us(this.value))}}function Cf(t){const e=[];return Nn(t.fields,(n,s)=>{const i=new $e([n]);if(er(s)){const r=Cf(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new lt(e)}/**
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
 */class je{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,$.min(),$.min(),$.min(),tt.empty(),0)}static newFoundDocument(e,n,s,i){return new je(e,1,n,$.min(),s,i,0)}static newNoDocument(e,n){return new je(e,2,n,$.min(),$.min(),tt.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,$.min(),$.min(),tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kb{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function uu(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Kb(t,e,n,s,i,r,o)}function Cl(t){const e=H(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>wa(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Zr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>is(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>is(s)).join(",")),e._t=n}return e._t}function kl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Hb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!If(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lu(t.startAt,e.startAt)&&lu(t.endAt,e.endAt)}function ba(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ms{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function zb(t,e,n,s,i,r,o,a){return new ms(t,e,n,s,i,r,o,a)}function Al(t){return new ms(t)}function hu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function eo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function kf(t){return t.collectionGroup!==null}function Wn(t){const e=H(t);if(e.wt===null){e.wt=[];const n=eo(e),s=Pl(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new zn(n)),e.wt.push(new zn($e.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new zn($e.keyField(),r))}}}return e.wt}function qt(t){const e=H(t);if(!e.gt)if(e.limitType==="F")e.gt=uu(e.path,e.collectionGroup,Wn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Wn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new zn(r.field,o))}const s=e.endAt?new Tr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Tr(e.startAt.position,e.startAt.inclusive):null;e.gt=uu(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function _a(t,e){e.getFirstInequalityField(),eo(t);const n=t.filters.concat([e]);return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ea(t,e,n){return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function to(t,e){return kl(qt(t),qt(e))&&t.limitType===e.limitType}function Af(t){return`${Cl(qt(t))}|lt:${t.limitType}`}function Ia(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Tf(s)).join(", ")}]`),Zr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>is(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>is(s)).join(",")),`Target(${n})`}(qt(t))}; limitType=${t.limitType})`}function no(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Wn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=au(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Wn(n),s)||n.endAt&&!function(i,r,o){const a=au(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Wn(n),s))}(t,e)}function Wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pf(t){return(e,n)=>{let s=!1;for(const i of Wn(t)){const r=Gb(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Gb(t,e,n){const s=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ss(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return V()}}/**
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
 */function Df(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(e)?"-0":e}}function Nf(t){return{integerValue:""+t}}function Qb(t,e){return Rb(e)?Nf(e):Df(t,e)}/**
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
 */class so{constructor(){this._=void 0}}function Yb(t,e,n){return t instanceof Sr?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ri?Of(t,e):t instanceof oi?Lf(t,e):function(s,i){const r=Rf(s,i),o=du(r)+du(s.It);return va(r)&&va(s.It)?Nf(o):Df(s.Tt,o)}(t,e)}function Xb(t,e,n){return t instanceof ri?Of(t,e):t instanceof oi?Lf(t,e):n}function Rf(t,e){return t instanceof Cr?va(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Sr extends so{}class ri extends so{constructor(e){super(),this.elements=e}}function Of(t,e){const n=Mf(e);for(const s of t.elements)n.some(i=>Dt(i,s))||n.push(s);return{arrayValue:{values:n}}}class oi extends so{constructor(e){super(),this.elements=e}}function Lf(t,e){let n=Mf(e);for(const s of t.elements)n=n.filter(i=>!Dt(i,s));return{arrayValue:{values:n}}}class Cr extends so{constructor(e,n){super(),this.Tt=e,this.It=n}}function du(t){return Ie(t.integerValue||t.doubleValue)}function Mf(t){return Sl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Jb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ri&&s instanceof ri||n instanceof oi&&s instanceof oi?ts(n.elements,s.elements,Dt):n instanceof Cr&&s instanceof Cr?Dt(n.It,s.It):n instanceof Sr&&s instanceof Sr}(t.transform,e.transform)}class Zb{constructor(e,n){this.version=e,this.transformResults=n}}class pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class io{}function Uf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dl(t.key,pt.none()):new Pi(t.key,t.data,pt.none());{const n=t.data,s=tt.empty();let i=new ke($e.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new hn(t.key,s,new lt(i.toArray()),pt.none())}}function e_(t,e,n){t instanceof Pi?function(s,i,r){const o=s.value.clone(),a=pu(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hn?function(s,i,r){if(!tr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=pu(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(xf(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function xs(t,e,n,s){return t instanceof Pi?function(i,r,o,a){if(!tr(i.precondition,r))return o;const l=i.value.clone(),c=gu(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof hn?function(i,r,o,a){if(!tr(i.precondition,r))return o;const l=gu(i.fieldTransforms,a,r),c=r.data;return c.setAll(xf(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return tr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function t_(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Rf(s.transform,i||null);r!=null&&(n===null&&(n=tt.empty()),n.set(s.field,r))}return n||null}function fu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ts(n,s,(i,r)=>Jb(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pi extends io{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hn extends io{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function xf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pu(t,e,n){const s=new Map;pe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Xb(o,a,n[i]))}return s}function gu(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Yb(r,o,e))}return s}class Dl extends io{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n_ extends io{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class s_{constructor(e){this.count=e}}/**
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
 */var _e,se;function i_(t){switch(t){default:return V();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Ff(t){if(t===void 0)return $t("GRPC error has no .code"),E.UNKNOWN;switch(t){case _e.OK:return E.OK;case _e.CANCELLED:return E.CANCELLED;case _e.UNKNOWN:return E.UNKNOWN;case _e.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case _e.INTERNAL:return E.INTERNAL;case _e.UNAVAILABLE:return E.UNAVAILABLE;case _e.UNAUTHENTICATED:return E.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case _e.NOT_FOUND:return E.NOT_FOUND;case _e.ALREADY_EXISTS:return E.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return E.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case _e.ABORTED:return E.ABORTED;case _e.OUT_OF_RANGE:return E.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return E.UNIMPLEMENTED;case _e.DATA_LOSS:return E.DATA_LOSS;default:return V()}}(se=_e||(_e={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Nn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return yf(this.inner)}size(){return this.innerSize}}/**
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
 */const r_=new Ae(L.comparator);function Ht(){return r_}const Vf=new Ae(L.comparator);function Ds(...t){let e=Vf;for(const n of t)e=e.insert(n.key,n);return e}function Bf(t){let e=Vf;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function vn(){return Fs()}function jf(){return Fs()}function Fs(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const o_=new Ae(L.comparator),a_=new ke(L.comparator);function te(...t){let e=a_;for(const n of t)e=e.add(n);return e}const l_=new ke(ce);function $f(){return l_}/**
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
 */class ro{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ro($.min(),i,$f(),Ht(),te())}}class Di{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Di(s,n,te(),te(),te())}}/**
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
 */class nr{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class qf{constructor(e,n){this.targetId=e,this.Rt=n}}class Hf{constructor(e,n,s=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class mu{constructor(){this.bt=0,this.vt=vu(),this.Pt=We.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=te(),n=te(),s=te();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:V()}}),new Di(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=vu()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class c_{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Ht(),this.Kt=yu(),this.Gt=new ke(ce)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(ba(r))if(s===0){const o=new L(r.path);this.zt(n,o,je.newNoDocument(o,$.min()))}else pe(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&ba(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,je.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=te();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ro(e,n,this.Gt,this.Ut,s);return this.Ut=Ht(),this.Kt=yu(),this.Gt=new ke(ce),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new mu,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ke(ce),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new mu),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function yu(){return new Ae(L.comparator)}function vu(){return new Ae(L.comparator)}/**
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
 */const u_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),h_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),d_=(()=>({and:"AND",or:"OR"}))();class f_{constructor(e,n){this.databaseId=e,this.yt=n}}function kr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kf(t,e){return t.yt?e.toBase64():e.toUint8Array()}function p_(t,e){return kr(t,e.toTimestamp())}function Pt(t){return pe(!!t),$.fromTimestamp(function(e){const n=rn(e);return new Ce(n.seconds,n.nanos)}(t))}function Nl(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zf(t){const e=me.fromString(t);return pe(Yf(e)),e}function Ta(t,e){return Nl(t.databaseId,e.path)}function jo(t,e){const n=zf(e);if(n.get(1)!==t.databaseId.projectId)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(Wf(n))}function Sa(t,e){return Nl(t.databaseId,e)}function g_(t){const e=zf(t);return e.length===4?me.emptyPath():Wf(e)}function Ca(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wf(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wu(t,e,n){return{name:Ta(t,e),fields:n.value.mapValue.fields}}function m_(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(pe(c===void 0||typeof c=="string"),We.fromBase64String(c||"")):(pe(c===void 0||c instanceof Uint8Array),We.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?E.UNKNOWN:Ff(l.code);return new A(c,l.message||"")}(o);n=new Hf(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=jo(t,s.document.name),r=Pt(s.document.updateTime),o=s.document.createTime?Pt(s.document.createTime):$.min(),a=new tt({mapValue:{fields:s.document.fields}}),l=je.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new nr(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=jo(t,s.document),r=s.readTime?Pt(s.readTime):$.min(),o=je.newNoDocument(i,r),a=s.removedTargetIds||[];n=new nr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=jo(t,s.document),r=s.removedTargetIds||[];n=new nr([],r,i,null)}else{if(!("filter"in e))return V();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new s_(i),o=s.targetId;n=new qf(o,r)}}return n}function y_(t,e){let n;if(e instanceof Pi)n={update:wu(t,e.key,e.value)};else if(e instanceof Dl)n={delete:Ta(t,e.key)};else if(e instanceof hn)n={update:wu(t,e.key,e.data),updateMask:C_(e.fieldMask)};else{if(!(e instanceof n_))return V();n={verify:Ta(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Sr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ri)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof oi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Cr)return{fieldPath:r.field.canonicalString(),increment:o.It};throw V()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:p_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function v_(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Pt(s.updateTime):Pt(i);return r.isEqual($.min())&&(r=Pt(i)),new Zb(r,s.transformResults||[])}(n,e))):[]}function w_(t,e){return{documents:[Sa(t,e.path)]}}function b_(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Sa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Qf(_t.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Fn(u.field),direction:I_(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||Zr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function __(t){let e=g_(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){pe(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Gf(u);return h instanceof _t&&Ef(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new zn(Vn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Zr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Tr(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Tr(d,h)}(n.endAt)),zb(e,i,o,r,a,"F",l,c)}function E_(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gf(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Vn(e.unaryFilter.field);return Te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Vn(e.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vn(e.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Vn(e.unaryFilter.field);return Te.create(r,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(e){return Te.create(Vn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return _t.create(e.compositeFilter.filters.map(n=>Gf(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return V()}}(e.compositeFilter.op))}(t):V()}function I_(t){return u_[t]}function T_(t){return h_[t]}function S_(t){return d_[t]}function Fn(t){return{fieldPath:t.canonicalString()}}function Vn(t){return $e.fromServerFormat(t.fieldPath)}function Qf(t){return t instanceof Te?function(e){if(e.op==="=="){if(ou(e.value))return{unaryFilter:{field:Fn(e.field),op:"IS_NAN"}};if(ru(e.value))return{unaryFilter:{field:Fn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ou(e.value))return{unaryFilter:{field:Fn(e.field),op:"IS_NOT_NAN"}};if(ru(e.value))return{unaryFilter:{field:Fn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(e.field),op:T_(e.op),value:e.value}}}(t):t instanceof _t?function(e){const n=e.getFilters().map(s=>Qf(s));return n.length===1?n[0]:{compositeFilter:{op:S_(e.op),filters:n}}}(t):V()}function C_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class k_{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&e_(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=xs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=xs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=jf();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Uf(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,s)=>fu(n,s))&&ts(this.baseMutations,e.baseMutations,(n,s)=>fu(n,s))}}class Rl{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){pe(e.mutations.length===s.length);let i=o_;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Rl(e,n,s,i)}}/**
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
 */class A_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class En{constructor(e,n,s,i,r=$.min(),o=$.min(),a=We.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new En(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class P_{constructor(e){this.oe=e}}function D_(t){const e=__({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ea(e,e.limit,"L"):e}/**
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
 */class N_{constructor(){this.Ze=new R_}addToCollectionParentIndex(e,n){return this.Ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(sn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(sn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class R_{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ke(me.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ke(me.comparator)).toArray()}}/**
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
 */class rs{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new rs(0)}static Sn(){return new rs(-1)}}/**
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
 */class O_{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class L_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class M_{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&xs(s.mutation,i,lt.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const i=vn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Ds();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=vn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ht();const o=Fs(),a=Fs();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof hn)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),xs(u.mutation,c,u.mutation.getFieldMask(),Ce.now())):o.set(c.key,lt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new L_(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Fs();let i=new Ae((o,a)=>o-a),r=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||lt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=jf();u.forEach(d=>{if(!r.has(d)){const p=Uf(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):T.resolve(vn());let a=-1,l=r;return o.next(c=>T.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,te())).next(u=>({batchId:a,changes:Bf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(s=>{let i=Ds();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Ds();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(c,u){return new ms(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,je.newInvalidDocument(c)))});let o=Ds();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&xs(c.mutation,l,lt.empty(),Ce.now()),no(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class U_{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return T.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Pt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:D_(s.bundledQuery),readTime:Pt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class x_{constructor(){this.overlays=new Ae(L.comparator),this.ss=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=vn();return T.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const i=vn(),r=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ae((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=vn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=vn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return T.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new A_(n,s));let r=this.ss.get(n);r===void 0&&(r=te(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
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
 */class Ol{constructor(){this.rs=new ke(Ne.os),this.us=new ke(Ne.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ne(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ne(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new L(new me([])),s=new Ne(n,e),i=new Ne(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new L(new me([])),s=new Ne(n,e),i=new Ne(n,e+1);let r=te();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ne(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return L.comparator(e.key,n.key)||ce(e.gs,n.gs)}static cs(e,n){return ce(e.gs,n.gs)||L.comparator(e.key,n.key)}}/**
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
 */class F_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ke(Ne.os)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new k_(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Ne(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return T.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),T.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ke(ce);return n.forEach(i=>{const r=new Ne(i,0),o=new Ne(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),T.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;L.isDocumentKey(r)||(r=r.child(""));const o=new Ne(new L(r),0);let a=new ke(ce);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),T.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return T.forEach(n.mutations,i=>{const r=new Ne(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Ne(n,0),i=this.ps.firstAfterOrEqual(s);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class V_{constructor(e){this.Rs=e,this.docs=new Ae(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let s=Ht();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():je.newInvalidDocument(i))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Ht();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ab(kb(u),s)<=0||(i.has(u.key)||no(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,i){V()}bs(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new B_(this)}getSize(e){return T.resolve(this.size)}}class B_ extends O_{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class j_{constructor(e){this.persistence=e,this.vs=new ys(n=>Cl(n),kl),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Ol,this.targetCount=0,this.Ss=rs.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),T.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.xn(n),T.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(r).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Vs.containsKey(n))}}/**
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
 */class $_{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Tl(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new j_(this),this.indexManager=new N_,this.remoteDocumentCache=function(s){return new V_(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new P_(n),this.Os=new U_(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new x_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new F_(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const i=new q_(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return T.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class q_ extends Db{constructor(e){super(),this.currentSequenceNumber=e}}class Ll{constructor(e){this.persistence=e,this.Bs=new Ol,this.Ls=null}static qs(e){return new Ll(e)}get Us(){if(this.Ls)return this.Ls;throw V()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),T.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Us,s=>{const i=L.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,$.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return T.or([()=>T.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
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
 */class Ml{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=te(),i=te();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ml(e,n.fromCache,s,i)}}/**
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
 */class H_{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(hu(n))return T.resolve(null);let s=qt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ea(n,null,"F"),s=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=te(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,Ea(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return hu(n)||i.isEqual($.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(tu()<=oe.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ia(n)),this.qi(e,o,n,Cb(i,-1)))})}Bi(e,n){let s=new ke(Pf(e));return n.forEach((i,r)=>{no(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return tu()<=oe.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Ia(n)),this.Oi.getDocumentsMatchingQuery(e,n,sn.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class K_{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Ae(ce),this.Gi=new ys(r=>Cl(r),kl),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M_(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function z_(t,e,n,s){return new K_(t,e,n,s)}async function Xf(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=te();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function W_(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=T.resolve();return h.forEach(p=>{d=d.next(()=>c.getEntry(a,p)).next(m=>{const y=l.docVersions.get(p);pe(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Jf(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function G_(t,e){const n=H(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(We.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,y,v){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let l=Ht(),c=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Q_(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual($.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function Q_(t,e,n){let s=te(),i=te();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ht();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Y_(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function X_(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,T.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new En(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function ka(t,e,n){const s=H(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ai(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function bu(t,e,n){const s=H(t);let i=$.min(),r=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=H(a),h=u.Gi.get(c);return h!==void 0?T.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,qt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?r:te())).next(a=>(J_(s,Wb(e),a),{documents:a,Yi:r})))}function J_(t,e,n){let s=t.Qi.get(e)||$.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class _u{constructor(){this.activeTargetIds=$f()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Z_{constructor(){this.Ur=new _u,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new _u,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class e0{Gr(e){}shutdown(){}}/**
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
 */class Eu{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const t0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class n0{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */class s0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);O("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw ma("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+gs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=t0[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new mb;a.setWithCredentials(!0),a.listenOnce(fb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bo.NO_ERROR:const c=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Bo.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new A(E.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(d.status);o(new A(p,d.message))}else o(new A(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(E.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=hb(),o=db(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new gb({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new n0({Yr:m=>{h?O("Connection","Not sending because WebChannel is closed:",m):(u||(O("Connection","Opening WebChannel transport."),c.open(),u=!0),O("Connection","WebChannel sending:",m),c.send(m))},Zr:()=>c.close()}),p=(m,y,v)=>{m.listen(y,I=>{try{v(I)}catch(S){setTimeout(()=>{throw S},0)}})};return p(c,Ki.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),p(c,Ki.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.oo())}),p(c,Ki.EventType.ERROR,m=>{h||(h=!0,ma("Connection","WebChannel transport errored:",m),d.oo(new A(E.UNAVAILABLE,"The operation could not be completed")))}),p(c,Ki.EventType.MESSAGE,m=>{var y;if(!h){const v=m.data[0];pe(!!v);const I=v,S=I.error||((y=I[0])===null||y===void 0?void 0:y.error);if(S){O("Connection","WebChannel received error:",S);const P=S.status;let C=function(j){const U=_e[j];if(U!==void 0)return Ff(U)}(P),k=S.message;C===void 0&&(C=E.INTERNAL,k="Unknown error status: "+P+" with message "+S.message),h=!0,d.oo(new A(C,k)),c.close()}else O("Connection","WebChannel received:",v),d.uo(v)}}),p(o,pb.STAT_EVENT,m=>{m.stat===Zc.PROXY?O("Connection","Detected buffering proxy"):m.stat===Zc.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function $o(){return typeof document<"u"?document:null}/**
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
 */function oo(t){return new f_(t,!0)}/**
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
 */class Zf{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
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
 */class ep{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Zf(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?($t(n.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new A(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i0 extends ep{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=m_(this.Tt,e),s=function(i){if(!("targetChange"in i))return $.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?$.min():r.readTime?Pt(r.readTime):$.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Ca(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=ba(a)?{documents:w_(i,a)}:{query:b_(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Kf(i,r.resumeToken):r.snapshotVersion.compareTo($.min())>0&&(o.readTime=kr(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=E_(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Ca(this.Tt),n.removeTarget=e,this.qo(n)}}class r0 extends ep{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=v_(e.writeResults,e.commitTime),s=Pt(e.commitTime);return this.listener.eu(s,n)}return pe(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Ca(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>y_(this.Tt,s))};this.qo(n)}}/**
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
 */class o0 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(E.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(E.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class a0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?($t(n),this.cu=!1):O("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class l0{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Rn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=H(a);l.mu.add(4),await Ni(l),l.pu.set("Unknown"),l.mu.delete(4),await ao(l)}(this))})}),this.pu=new a0(s,i)}}async function ao(t){if(Rn(t))for(const e of t.gu)await e(!0)}async function Ni(t){for(const e of t.gu)await e(!1)}function tp(t,e){const n=H(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Fl(n)?xl(n):vs(n).Mo()&&Ul(n,e))}function np(t,e){const n=H(t),s=vs(n);n.wu.delete(e),s.Mo()&&sp(n,e),n.wu.size===0&&(s.Mo()?s.Bo():Rn(n)&&n.pu.set("Unknown"))}function Ul(t,e){t.Iu.Ft(e.targetId),vs(t).Jo(e)}function sp(t,e){t.Iu.Ft(e),vs(t).Yo(e)}function xl(t){t.Iu=new c_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),vs(t).start(),t.pu.au()}function Fl(t){return Rn(t)&&!vs(t).Oo()&&t.wu.size>0}function Rn(t){return H(t).mu.size===0}function ip(t){t.Iu=void 0}async function c0(t){t.wu.forEach((e,n)=>{Ul(t,e)})}async function u0(t,e){ip(t),Fl(t)?(t.pu.fu(e),xl(t)):t.pu.set("Unknown")}async function h0(t,e,n){if(t.pu.set("Online"),e instanceof Hf&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ar(t,s)}else if(e instanceof nr?t.Iu.Qt(e):e instanceof qf?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual($.min()))try{const s=await Jf(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(We.EMPTY_BYTE_STRING,l.snapshotVersion)),sp(i,a);const c=new En(l.target,a,1,l.sequenceNumber);Ul(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Ar(t,s)}}async function Ar(t,e,n){if(!Ai(e))throw e;t.mu.add(1),await Ni(t),t.pu.set("Offline"),n||(n=()=>Jf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ao(t)})}function rp(t,e){return e().catch(n=>Ar(t,n,e))}async function lo(t){const e=H(t),n=on(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;d0(e);)try{const i=await Y_(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,f0(e,i)}catch(i){await Ar(e,i)}op(e)&&ap(e)}function d0(t){return Rn(t)&&t._u.length<10}function f0(t,e){t._u.push(e);const n=on(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function op(t){return Rn(t)&&!on(t).Oo()&&t._u.length>0}function ap(t){on(t).start()}async function p0(t){on(t).su()}async function g0(t){const e=on(t);for(const n of t._u)e.tu(n.mutations)}async function m0(t,e,n){const s=t._u.shift(),i=Rl.from(s,e,n);await rp(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lo(t)}async function y0(t,e){e&&on(t).Xo&&await async function(n,s){if(i=s.code,i_(i)&&i!==E.ABORTED){const r=n._u.shift();on(n).$o(),await rp(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await lo(n)}var i}(t,e),op(t)&&ap(t)}async function Iu(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=Rn(n);n.mu.add(3),await Ni(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ao(n)}async function v0(t,e){const n=H(t);e?(n.mu.delete(2),await ao(n)):e||(n.mu.add(2),await Ni(n),n.pu.set("Unknown"))}function vs(t){return t.Tu||(t.Tu=function(e,n,s){const i=H(e);return i.ru(),new i0(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:c0.bind(null,t),no:u0.bind(null,t),Ho:h0.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Fl(t)?xl(t):t.pu.set("Unknown")):(await t.Tu.stop(),ip(t))})),t.Tu}function on(t){return t.Eu||(t.Eu=function(e,n,s){const i=H(e);return i.ru(),new r0(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:p0.bind(null,t),no:y0.bind(null,t),nu:g0.bind(null,t),eu:m0.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await lo(t)):(await t.Eu.stop(),t._u.length>0&&(O("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class Vl{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Vl(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(t,e){if($t("AsyncQueue",`${e}: ${t}`),Ai(t))return new A(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||L.comparator(n.key,s.key):(n,s)=>L.comparator(n.key,s.key),this.keyedMap=Ds(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Gn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Tu{constructor(){this.Au=new Ae(L.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):V():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class os{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new os(e,n,Gn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&to(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class w0{constructor(){this.bu=void 0,this.listeners=[]}}class b0{constructor(){this.queries=new ys(e=>Af(e),to),this.onlineState="Unknown",this.vu=new Set}}async function lp(t,e){const n=H(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new w0),i)try{r.bu=await n.onListen(s)}catch(o){const a=Bl(o,`Initialization of query '${Ia(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&jl(n)}async function cp(t,e){const n=H(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function _0(t,e){const n=H(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&jl(n)}function E0(t,e,n){const s=H(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function jl(t){t.vu.forEach(e=>{e.next()})}class up{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new os(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class hp{constructor(e){this.key=e}}class dp{constructor(e){this.key=e}}class I0{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=te(),this.mutatedKeys=te(),this.ju=Pf(e),this.zu=new Gn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Tu,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=no(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==y&&(s.track({type:3,doc:p}),v=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),v=!0,(l&&this.ju(p,l)>0||c&&this.ju(p,c)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(p?(o=o.add(p),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return p(h)-p(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new os(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Tu,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=te(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new dp(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new hp(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=te();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return os.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class T0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class S0{constructor(e){this.key=e,this.ic=!1}}class C0{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new ys(a=>Af(a),to),this.uc=new Map,this.cc=new Set,this.ac=new Ae(L.comparator),this.hc=new Map,this.lc=new Ol,this.fc={},this.dc=new Map,this._c=rs.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function k0(t,e){const n=x0(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await X_(n.localStore,qt(e));n.isPrimaryClient&&tp(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await A0(n,e,s,a==="current",o.resumeToken)}return i}async function A0(t,e,n,s,i){t.mc=(h,d,p)=>async function(m,y,v,I){let S=y.view.Hu(v);S.Li&&(S=await bu(m.localStore,y.query,!1).then(({documents:k})=>y.view.Hu(k,S)));const P=I&&I.targetChanges.get(y.targetId),C=y.view.applyChanges(S,m.isPrimaryClient,P);return Cu(m,y.targetId,C.tc),C.snapshot}(t,h,d,p);const r=await bu(t.localStore,e,!0),o=new I0(e,r.Yi),a=o.Hu(r.documents),l=Di.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Cu(t,n,c.tc);const u=new T0(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function P0(t,e){const n=H(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!to(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ka(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),np(n.remoteStore,s.targetId),Aa(n,s.targetId)}).catch(ki)):(Aa(n,s.targetId),await ka(n.localStore,s.targetId,!0))}async function D0(t,e,n){const s=F0(t);try{const i=await function(r,o){const a=H(r),l=Ce.now(),c=o.reduce((d,p)=>d.add(p.key),te());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Ht(),m=te();return a.ji.getEntries(d,c).next(y=>{p=y,p.forEach((v,I)=>{I.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{u=y;const v=[];for(const I of o){const S=t_(I,u.get(I.key).overlayedDocument);S!=null&&v.push(new hn(I.key,S,Cf(S.value.mapValue),pt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,v,o)}).next(y=>{h=y;const v=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Bf(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new Ae(ce)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Ri(s,i.changes),await lo(s.remoteStore)}catch(i){const r=Bl(i,"Failed to persist write");n.reject(r)}}async function fp(t,e){const n=H(t);try{const s=await G_(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?pe(o.ic):i.removedDocuments.size>0&&(pe(o.ic),o.ic=!1))}),await Ri(n,s,e)}catch(s){await ki(s)}}function Su(t,e,n){const s=H(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=H(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&jl(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function N0(t,e,n){const s=H(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new Ae(L.comparator);o=o.insert(r,je.newNoDocument(r,$.min()));const a=te().add(r),l=new ro($.min(),new Map,new ke(ce),o,a);await fp(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),$l(s)}else await ka(s.localStore,e,!1).then(()=>Aa(s,e,n)).catch(ki)}async function R0(t,e){const n=H(t),s=e.batch.batchId;try{const i=await W_(n.localStore,e);gp(n,s,null),pp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ri(n,i)}catch(i){await ki(i)}}async function O0(t,e,n){const s=H(t);try{const i=await function(r,o){const a=H(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(pe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);gp(s,e,n),pp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ri(s,i)}catch(i){await ki(i)}}function pp(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function gp(t,e,n){const s=H(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function Aa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||mp(t,s)})}function mp(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(np(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),$l(t))}function Cu(t,e,n){for(const s of n)s instanceof hp?(t.lc.addReference(s.key,e),L0(t,s)):s instanceof dp?(O("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||mp(t,s.key)):V()}function L0(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.cc.add(s),$l(t))}function $l(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new L(me.fromString(e)),s=t._c.next();t.hc.set(s,new S0(n)),t.ac=t.ac.insert(n,s),tp(t.remoteStore,new En(qt(Al(n.path)),s,2,Tl.at))}}async function Ri(t,e,n){const s=H(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Ml.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=H(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(l,h=>T.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ai(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);c.Ki=c.Ki.insert(h,m)}}}(s.localStore,r))}async function M0(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await Xf(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(E.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ri(n,s.Wi)}}function U0(t,e){const n=H(t),s=n.hc.get(e);if(s&&s.ic)return te().add(s.key);{let i=te();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function x0(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N0.bind(null,e),e.rc.Ho=_0.bind(null,e.eventManager),e.rc.gc=E0.bind(null,e.eventManager),e}function F0(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=R0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=O0.bind(null,e),e}class V0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=oo(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return z_(this.persistence,new H_,e.initialUser,this.Tt)}Tc(e){return new $_(Ll.qs,this.Tt)}Ic(e){return new Z_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class B0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Su(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=M0.bind(null,this.syncEngine),await v0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new b0}createDatastore(e){const n=oo(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new s0(i));var i;return function(r,o,a,l){return new o0(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Su(this.syncEngine,a,0),o=Eu.C()?new Eu:new e0,new l0(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new C0(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);O("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ni(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class yp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class j0{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=mf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Bl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function $0(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Xf(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function q0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await H0(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Iu(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Iu(e.remoteStore,r)),t.onlineComponents=e}async function H0(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await $0(t,new V0)),t.offlineComponents}async function vp(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await q0(t,new B0)),t.onlineComponents}function K0(t){return vp(t).then(e=>e.syncEngine)}async function Pa(t){const e=await vp(t),n=e.eventManager;return n.onListen=k0.bind(null,e.syncEngine),n.onUnlisten=P0.bind(null,e.syncEngine),n}function z0(t,e,n={}){const s=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new yp({next:h=>{r.enqueueAndForget(()=>cp(i,u)),h.fromCache&&a.source==="server"?l.reject(new A(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new up(o,c,{includeMetadataChanges:!0,Ou:!0});return lp(i,u)}(await Pa(t),t.asyncQueue,e,n,s)),s.promise}const ku=new Map;/**
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
 */function wp(t,e,n){if(!n)throw new A(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function W0(t,e,n,s){if(e===!0&&s===!0)throw new A(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Au(t){if(!L.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pu(t){if(L.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function co(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=co(t);throw new A(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Du{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,W0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class uo{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Du({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Du(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yb;switch(n.type){case"gapi":const s=n.client;return new _b(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ku.get(e);n&&(O("ComponentProvider","Removing Datastore"),ku.delete(e),n.terminate())}(this),Promise.resolve()}}function G0(t,e,n,s={}){var i;const r=(t=gt(t,uo))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ma("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Be.MOCK_USER;else{o=zg(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new A(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Be(l)}t._authCredentials=new vb(new gf(o,a))}}/**
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
 */class Je{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class dn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new dn(this.firestore,e,this._query)}}class nn extends dn{constructor(e,n,s){super(e,n,Al(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new L(e))}withConverter(e){return new nn(this.firestore,e,this._path)}}function ot(t,e,...n){if(t=Oe(t),wp("collection","path",e),t instanceof uo){const s=me.fromString(e,...n);return Pu(s),new nn(t,null,s)}{if(!(t instanceof Je||t instanceof nn))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return Pu(s),new nn(t.firestore,null,s)}}function xt(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=mf.R()),wp("doc","path",e),t instanceof uo){const s=me.fromString(e,...n);return Au(s),new Je(t,null,new L(s))}{if(!(t instanceof Je||t instanceof nn))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return Au(s),new Je(t.firestore,t instanceof nn?t.converter:null,new L(s))}}/**
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
 */class Q0{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Zf(this,"async_queue_retry"),this.Hc=()=>{const n=$o();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=$o();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=$o();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new tn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ai(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw $t("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Vl.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&V()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Nu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class an extends uo{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Q0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bp(this),this._firestoreClient.terminate()}}function Y0(t,e){const n=typeof t=="object"?t:Lh(),s=typeof t=="string"?t:e||"(default)",i=za(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=qg("firestore");r&&G0(i,...r)}return i}function ql(t){return t._firestoreClient||bp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bp(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Nb(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new j0(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(We.fromBase64String(e))}catch(n){throw new A(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ho{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hl{constructor(e){this._methodName=e}}/**
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
 */class Kl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const X0=/^__.*__$/;class J0{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pi(e,this.data,n,this.fieldTransforms)}}class _p{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new hn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ep(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class zl{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new zl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Pr(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Ep(this.ra)&&X0.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Z0{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||oo(e)}wa(e,n,s,i=!1){return new zl({ra:e,methodName:n,_a:s,path:$e.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function fo(t){const e=t._freezeSettings(),n=oo(t._databaseId);return new Z0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ip(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Wl("Data must be an object, but it was:",o,s);const a=Tp(s,o);let l,c;if(r.merge)l=new lt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Da(e,h,n);if(!o.contains(d))throw new A(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Cp(u,d)||u.push(d)}l=new lt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new J0(new tt(a),l,c)}class po extends Hl{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof po}}function eE(t,e,n,s){const i=t.wa(1,e,n);Wl("Data must be an object, but it was:",i,s);const r=[],o=tt.empty();Nn(s,(l,c)=>{const u=Gl(e,l,n);c=Oe(c);const h=i.ha(u);if(c instanceof po)r.push(u);else{const d=Oi(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new lt(r);return new _p(o,a,i.fieldTransforms)}function tE(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[Da(e,s,n)],l=[i];if(r.length%2!=0)throw new A(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Da(e,r[d])),l.push(r[d+1]);const c=[],u=tt.empty();for(let d=a.length-1;d>=0;--d)if(!Cp(c,a[d])){const p=a[d];let m=l[d];m=Oe(m);const y=o.ha(p);if(m instanceof po)c.push(p);else{const v=Oi(m,y);v!=null&&(c.push(p),u.set(p,v))}}const h=new lt(c);return new _p(u,h,o.fieldTransforms)}function nE(t,e,n,s=!1){return Oi(n,t.wa(s?4:3,e))}function Oi(t,e){if(Sp(t=Oe(t)))return Wl("Unsupported field value:",e,t),Tp(t,e);if(t instanceof Hl)return function(n,s){if(!Ep(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Oi(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Qb(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ce.fromDate(n);return{timestampValue:kr(s.Tt,i)}}if(n instanceof Ce){const i=new Ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kr(s.Tt,i)}}if(n instanceof Kl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof as)return{bytesValue:Kf(s.Tt,n._byteString)};if(n instanceof Je){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${co(n)}`)}(t,e)}function Tp(t,e){const n={};return yf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nn(t,(s,i)=>{const r=Oi(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Sp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof Kl||t instanceof as||t instanceof Je||t instanceof Hl)}function Wl(t,e,n){if(!Sp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=co(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Da(t,e,n){if((e=Oe(e))instanceof ho)return e._internalPath;if(typeof e=="string")return Gl(t,e);throw Pr("Field path arguments must be of type string or ",t,!1,void 0,n)}const sE=new RegExp("[~\\*/\\[\\]]");function Gl(t,e,n){if(e.search(sE)>=0)throw Pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ho(...e.split("."))._internalPath}catch{throw Pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pr(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new A(E.INVALID_ARGUMENT,a+t+l)}function Cp(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kp{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(go("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iE extends kp{data(){return super.data()}}function go(t,e){return typeof e=="string"?Gl(t,e):e instanceof ho?e._internalPath:e._delegate._internalPath}/**
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
 */function Ap(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ql{}class Pp extends Ql{}function Vs(t,e,...n){let s=[];e instanceof Ql&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Yl).length,o=i.filter(a=>a instanceof mo).length;if(r>1||r>0&&o>0)throw new A(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class mo extends Pp{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new mo(e,n,s)}_apply(e){const n=this._parse(e);return Dp(e._query,n),new dn(e.firestore,e.converter,_a(e._query,n))}_parse(e){const n=fo(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ou(u,c);const d=[];for(const p of u)d.push(Ru(a,i,p));h={arrayValue:{values:d}}}else h=Ru(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ou(u,c),h=nE(o,r,u,c==="in"||c==="not-in");return Te.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Na(t,e,n){const s=e,i=go("where",t);return mo._create(i,s,n)}class Yl extends Ql{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Yl(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:_t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Dp(r,a),r=_a(r,a)}(e._query,n),new dn(e.firestore,e.converter,_a(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xl extends Pp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Xl(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new zn(i,r);return function(a,l){if(Pl(a)===null){const c=eo(a);c!==null&&Np(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new dn(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new ms(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function qo(t,e="asc"){const n=e,s=go("orderBy",t);return Xl._create(s,n)}function Ru(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new A(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kf(e)&&n.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(me.fromString(n));if(!L.isDocumentKey(s))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return iu(t,new L(s))}if(n instanceof Je)return iu(t,n._key);throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${co(n)}.`)}function Ou(t,e){if(!Array.isArray(t)||t.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dp(t,e){if(e.isInequality()){const s=eo(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new A(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Pl(t);r!==null&&Np(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Np(t,e,n){if(!n.isEqual(e))throw new A(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class rE{convertValue(e,n="none"){switch(kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const s={};return Nn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Kl(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=wf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const n=rn(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=me.fromString(e);pe(Yf(s));const i=new ni(s.get(1),s.get(3)),r=new L(s.popFirst(5));return i.isEqual(n)||$t(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Rp(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Op extends kp{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(go("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class sr extends Op{data(e={}){return super.data(e)}}class Lp{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ns(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new sr(this._firestore,this._userDataWriter,s.key,s,new Ns(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new sr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ns(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new sr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ns(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:oE(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}class Jl extends rE{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function Mp(t){t=gt(t,dn);const e=gt(t.firestore,an),n=ql(e),s=new Jl(e);return Ap(t._query),z0(n,t._query).then(i=>new Lp(e,s,t,i))}function Ho(t,e,n){t=gt(t,Je);const s=gt(t.firestore,an),i=Rp(t.converter,e,n);return yo(s,[Ip(fo(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pt.none())])}function Zl(t,e,n,...s){t=gt(t,Je);const i=gt(t.firestore,an),r=fo(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof ho?tE(r,"updateDoc",t._key,e,n,s):eE(r,"updateDoc",t._key,e),yo(i,[o.toMutation(t._key,pt.exists(!0))])}function Ra(t){return yo(gt(t.firestore,an),[new Dl(t._key,pt.none())])}function Oa(t,e){const n=gt(t.firestore,an),s=xt(t),i=Rp(t.converter,e);return yo(n,[Ip(fo(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,pt.exists(!1))]).then(()=>s)}function Ko(t,...e){var n,s,i;t=Oe(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nu(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Nu(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Je)c=gt(t.firestore,an),u=Al(t._key.path),l={next:h=>{e[o]&&e[o](aE(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=gt(t,dn);c=gt(h.firestore,an),u=h._query;const d=new Jl(c);l={next:p=>{e[o]&&e[o](new Lp(c,d,h,p))},error:e[o+1],complete:e[o+2]},Ap(t._query)}return function(h,d,p,m){const y=new yp(m),v=new up(d,y,p);return h.asyncQueue.enqueueAndForget(async()=>lp(await Pa(h),v)),()=>{y.Pc(),h.asyncQueue.enqueueAndForget(async()=>cp(await Pa(h),v))}}(ql(c),u,a,l)}function yo(t,e){return function(n,s){const i=new tn;return n.asyncQueue.enqueueAndForget(async()=>D0(await K0(n),s,i)),i.promise}(ql(t),e)}function aE(t,e,n){const s=n.docs.get(e._key),i=new Jl(t);return new Op(t,i,e._key,s,new Ns(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){gs=n})(fi),Jn(new In("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new an(new wb(n.getProvider("auth-internal")),new Ib(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),en(eu,"3.8.4",t),en(eu,"3.8.4","esm2017")})();const lE={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},Up=Oh(lE),Re=Y0(Up),La=dw(Up);function cE(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,y,v;return{c(){e=b("h1"),e.textContent="Iniciar sesión",n=R(),s=b("form"),i=b("label"),r=ie(`Correo electrónico:\r
        `),o=b("input"),a=R(),l=b("label"),c=ie(`Contraseña:\r
        `),u=b("input"),h=R(),d=b("button"),d.textContent="Iniciar sesión",p=R(),m=b("div"),m.textContent=`${dE}`,f(o,"type","email"),o.required=!0,f(u,"type","password"),u.required=!0,f(d,"type","submit"),f(m,"id","mensaje-error")},m(I,S){Q(I,e,S),Q(I,n,S),Q(I,s,S),g(s,i),g(i,r),g(i,o),Ee(o,t[0]),g(s,a),g(s,l),g(l,c),g(l,u),Ee(u,t[1]),g(s,h),g(s,d),Q(I,p,S),Q(I,m,S),y||(v=[Y(o,"input",t[5]),Y(u,"input",t[6]),Y(s,"submit",wh(t[3]))],y=!0)},p(I,S){S&1&&o.value!==I[0]&&Ee(o,I[0]),S&2&&u.value!==I[1]&&Ee(u,I[1])},d(I){I&&q(e),I&&q(n),I&&q(s),I&&q(p),I&&q(m),y=!1,nt(v)}}}function uE(t){let e,n,s,i,r;return{c(){e=b("button"),e.textContent="cerrar sesion",n=R(),s=b("p"),s.textContent=`bienvenido ${La.currentUser.email}`,Eg(s,"font-size","x-small")},m(o,a){Q(o,e,a),Q(o,n,a),Q(o,s,a),i||(r=Y(e,"click",t[4]),i=!0)},p:ve,d(o){o&&q(e),o&&q(n),o&&q(s),i=!1,r()}}}function hE(t){let e;function n(r,o){return r[2]?uE:cE}let s=n(t),i=s(t);return{c(){e=b("main"),i.c()},m(r,o){Q(r,e,o),i.m(e,null)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e,null)))},i:ve,o:ve,d(r){r&&q(e),i.d()}}}let dE="";function fE(t,e,n){let s;at(t,Ss,h=>n(2,s=h));const i=us();let r="",o="";async function a(){try{const h=await Qy(La,r,o);rt(Ss,s=h.user,s),console.log(h),console.log("authenticatedUser: ",s.UserCredentialImpl),i("loginSuccess",h.user)}catch(h){console.error("Error al iniciar sesión:",h.message),document.getElementById("mensaje-error").innerText=h.message}}function l(){rt(Ss,s=null,s),Jy(La).then(()=>{console.log("Se ha cerrado sesión correctamente.")}).catch(h=>{console.error("Error al cerrar sesión:",h.message)}),console.log(Ss)}function c(){r=this.value,n(0,r)}function u(){o=this.value,n(1,o)}return[r,o,s,a,l,c,u]}class xp extends Tt{constructor(e){super(),It(this,e,fE,hE,yt,{})}}let Bs=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}-${o}-${s}-${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function Lu(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Mu(t){let e,n=t[12].plan+"",s;return{c(){e=b("option"),s=ie(n),e.__value=t[14],e.value=e.__value},m(i,r){Q(i,e,r),g(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&Se(s,n)},d(i){i&&q(e)}}}function pE(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=Mu(Lu(t,a,c));return{c(){e=b("div"),n=b("input"),s=R(),i=b("select");for(let c=0;c<l.length;c+=1)l[c].c();f(n,"type","checkbox"),f(n,"name","CheckBoxParticular"),f(n,"id","CheckBoxParticular"),f(i,"name","plan"),f(i,"id","plan"),f(i,"class","svelte-1de4xhy"),t[1]===void 0&&Vt(()=>t[8].call(i)),Bi(i,"SelectPlanVisible",t[0]),Bi(i,"SelectPlanHidden",t[3]),f(e,"id","selectPlanContainer"),f(e,"class","svelte-1de4xhy")},m(c,u){Q(c,e,u),g(e,n),n.checked=t[0],g(e,s),g(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);rr(i,t[1]),r||(o=[Y(n,"change",t[7]),Y(n,"change",t[4]),Y(i,"change",t[8]),Y(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=Lu(c,a,h);l[h]?l[h].p(d,u):(l[h]=Mu(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&rr(i,c[1]),u&1&&Bi(i,"SelectPlanVisible",c[0]),u&8&&Bi(i,"SelectPlanHidden",c[3])},i:ve,o:ve,d(c){c&&q(e),ui(l,c),r=!1,nt(o)}}}function gE(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=y=>{n(0,r=y)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=y=>{var v=y.target.checked;l(v),c()},h=us(),d=y=>{n(1,o=parseInt(y.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function p(){r=this.checked,n(0,r)}function m(){o=_h(this),n(1,o)}return t.$$set=y=>{"planes"in y&&n(2,s=y.planes),"planSeleccionado"in y&&n(6,i=y.planSeleccionado),"SelectPlanVisible"in y&&n(0,r=y.SelectPlanVisible),"indicePlan"in y&&n(1,o=y.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,p,m]}class mE extends Tt{constructor(e){super(),It(this,e,gE,pE,yt,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}var yE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fp={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(yE,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(v){v.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(v){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),m=this.options.position=="left"?d:"-"+d,y=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+m+","+y+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+p):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+p):(c[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Fp);var wE=Fp.exports;const wn=vE(wE),Vp="SweetAlert2:",bE=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},ec=t=>t.charAt(0).toUpperCase()+t.slice(1),ht=t=>Array.prototype.slice.call(t),st=t=>{console.warn(`${Vp} ${typeof t=="object"?t.join(" "):t}`)},On=t=>{console.error(`${Vp} ${t}`)},Uu=[],_E=t=>{Uu.includes(t)||(Uu.push(t),st(t))},EE=(t,e)=>{_E(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},vo=t=>typeof t=="function"?t():t,tc=t=>t&&typeof t.toPromise=="function",Li=t=>tc(t)?t.toPromise():Promise.resolve(t),nc=t=>t&&Promise.resolve(t)===t,Qn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},IE=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],TE={},SE=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Bp=t=>Object.prototype.hasOwnProperty.call(Qn,t),jp=t=>IE.indexOf(t)!==-1,Ma=t=>TE[t],CE=t=>{Bp(t)||st(`Unknown parameter "${t}"`)},kE=t=>{SE.includes(t)&&st(`The parameter "${t}" is incompatible with toasts`)},AE=t=>{Ma(t)&&EE(t,Ma(t))},PE=t=>{!t.backdrop&&t.allowOutsideClick&&st('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)CE(e),t.toast&&kE(e),AE(e)},DE="swal2-",$p=t=>{const e={};for(const n in t)e[t[n]]=DE+t[n];return e},w=$p(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),js=$p(["success","warning","info","question","error"]),Ge=()=>document.body.querySelector(`.${w.container}`),Mi=t=>{const e=Ge();return e?e.querySelector(t):null},vt=t=>Mi(`.${t}`),ue=()=>vt(w.popup),Ui=()=>vt(w.icon),qp=()=>vt(w.title),Dr=()=>vt(w["html-container"]),Hp=()=>vt(w.image),Kp=()=>vt(w["progress-steps"]),wo=()=>vt(w["validation-message"]),Et=()=>Mi(`.${w.actions} .${w.confirm}`),ln=()=>Mi(`.${w.actions} .${w.deny}`),NE=()=>vt(w["input-label"]),ws=()=>Mi(`.${w.loader}`),An=()=>Mi(`.${w.actions} .${w.cancel}`),xi=()=>vt(w.actions),zp=()=>vt(w.footer),bo=()=>vt(w["timer-progress-bar"]),sc=()=>vt(w.close),RE=`
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
`,ic=()=>{const t=ht(ue().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=ht(ue().querySelectorAll(RE)).filter(n=>n.getAttribute("tabindex")!=="-1");return bE(t.concat(e)).filter(n=>ct(n))},rc=()=>Ft(document.body,w.shown)&&!Ft(document.body,w["toast-shown"])&&!Ft(document.body,w["no-backdrop"]),_o=()=>ue()&&Ft(ue(),w.toast),OE=()=>ue().hasAttribute("data-loading"),Yn={previousBodyPadding:null},qe=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");ht(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),ht(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},Ft=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},LE=(t,e)=>{ht(t.classList).forEach(n=>{!Object.values(w).includes(n)&&!Object.values(js).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},mt=(t,e,n)=>{if(LE(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return st(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);re(t,e.customClass[n])}},oc=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${w.popup} > .${w[e]}`);case"checkbox":return t.querySelector(`.${w.popup} > .${w.checkbox} input`);case"radio":return t.querySelector(`.${w.popup} > .${w.radio} input:checked`)||t.querySelector(`.${w.popup} > .${w.radio} input:first-child`);case"range":return t.querySelector(`.${w.popup} > .${w.range} input`);default:return t.querySelector(`.${w.popup} > .${w.input}`)}},Wp=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Gp=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},re=(t,e)=>{Gp(t,e,!0)},Nt=(t,e)=>{Gp(t,e,!1)},Xt=(t,e)=>{const n=ht(t.childNodes);for(let s=0;s<n.length;s++)if(Ft(n[s],e))return n[s]},$s=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Fe=(t,e="flex")=>{t.style.display=e},Qe=t=>{t.style.display="none"},xu=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Eo=(t,e,n)=>{e?Fe(t,n):Qe(t)},ct=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),ME=()=>!ct(Et())&&!ct(ln())&&!ct(An()),Fu=t=>t.scrollHeight>t.clientHeight,Qp=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},ac=(t,e=!1)=>{const n=bo();ct(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},UE=()=>{const t=bo(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Yp=()=>typeof window>"u"||typeof document>"u",xE=100,G={},FE=()=>{G.previousActiveElement&&G.previousActiveElement.focus?(G.previousActiveElement.focus(),G.previousActiveElement=null):document.body&&document.body.focus()},VE=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;G.restoreFocusTimeout=setTimeout(()=>{FE(),e()},xE),window.scrollTo(n,s)}),BE=`
 <div aria-labelledby="${w.title}" aria-describedby="${w["html-container"]}" class="${w.popup}" tabindex="-1">
   <button type="button" class="${w.close}"></button>
   <ul class="${w["progress-steps"]}"></ul>
   <div class="${w.icon}"></div>
   <img class="${w.image}" />
   <h2 class="${w.title}" id="${w.title}"></h2>
   <div class="${w["html-container"]}" id="${w["html-container"]}"></div>
   <input class="${w.input}" />
   <input type="file" class="${w.file}" />
   <div class="${w.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${w.select}"></select>
   <div class="${w.radio}"></div>
   <label for="${w.checkbox}" class="${w.checkbox}">
     <input type="checkbox" />
     <span class="${w.label}"></span>
   </label>
   <textarea class="${w.textarea}"></textarea>
   <div class="${w["validation-message"]}" id="${w["validation-message"]}"></div>
   <div class="${w.actions}">
     <div class="${w.loader}"></div>
     <button type="button" class="${w.confirm}"></button>
     <button type="button" class="${w.deny}"></button>
     <button type="button" class="${w.cancel}"></button>
   </div>
   <div class="${w.footer}"></div>
   <div class="${w["timer-progress-bar-container"]}">
     <div class="${w["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),jE=()=>{const t=Ge();return t?(t.remove(),Nt([document.documentElement,document.body],[w["no-backdrop"],w["toast-shown"],w["has-column"]]),!0):!1},pn=()=>{G.currentInstance.resetValidationMessage()},$E=()=>{const t=ue(),e=Xt(t,w.input),n=Xt(t,w.file),s=t.querySelector(`.${w.range} input`),i=t.querySelector(`.${w.range} output`),r=Xt(t,w.select),o=t.querySelector(`.${w.checkbox} input`),a=Xt(t,w.textarea);e.oninput=pn,n.onchange=pn,r.onchange=pn,o.onchange=pn,a.oninput=pn,s.oninput=()=>{pn(),i.value=s.value},s.onchange=()=>{pn(),s.nextSibling.value=s.value}},qE=t=>typeof t=="string"?document.querySelector(t):t,HE=t=>{const e=ue();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},KE=t=>{window.getComputedStyle(t).direction==="rtl"&&re(Ge(),w.rtl)},zE=t=>{const e=jE();if(Yp()){On("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=w.container,e&&re(n,w["no-transition"]),qe(n,BE);const s=qE(t.target);s.appendChild(n),HE(t),KE(s),$E()},lc=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?WE(t,e):t&&qe(e,t)},WE=(t,e)=>{t.jquery?GE(e,t):qe(e,t.toString())},GE=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ai=(()=>{if(Yp())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),QE=()=>{const t=document.createElement("div");t.className=w["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},YE=(t,e)=>{const n=xi(),s=ws();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Qe(n):Fe(n),mt(n,e,"actions"),XE(n,s,e),qe(s,e.loaderHtml),mt(s,e,"loader")};function XE(t,e,n){const s=Et(),i=ln(),r=An();zo(s,"confirm",n),zo(i,"deny",n),zo(r,"cancel",n),JE(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function JE(t,e,n,s){if(!s.buttonsStyling)return Nt([t,e,n],w.styled);re([t,e,n],w.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,re(t,w["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,re(e,w["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,re(n,w["default-outline"]))}function zo(t,e,n){Eo(t,n[`show${ec(e)}Button`],"inline-block"),qe(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=w[e],mt(t,n,`${e}Button`),re(t,n[`${e}ButtonClass`])}function ZE(t,e){typeof e=="string"?t.style.background=e:e||re([document.documentElement,document.body],w["no-backdrop"])}function eI(t,e){e in w?re(t,w[e]):(st('The "position" parameter is not valid, defaulting to "center"'),re(t,w.center))}function tI(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in w&&re(t,w[n])}}const nI=(t,e)=>{const n=Ge();n&&(ZE(n,e.backdrop),eI(n,e.position),tI(n,e.grow),mt(n,e,"container"))},X={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},sI=["input","file","range","select","radio","checkbox","textarea"],iI=(t,e)=>{const n=ue(),s=X.innerParams.get(t),i=!s||e.input!==s.input;sI.forEach(r=>{const o=w[r],a=Xt(n,o);aI(r,e.inputAttributes),a.className=o,i&&Qe(a)}),e.input&&(i&&rI(e),lI(e))},rI=t=>{if(!et[t.input])return On(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Xp(t.input),n=et[t.input](e,t);Fe(n),setTimeout(()=>{Wp(n)})},oI=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},aI=(t,e)=>{const n=oc(ue(),t);if(n){oI(n);for(const s in e)n.setAttribute(s,e[s])}},lI=t=>{const e=Xp(t.input);t.customClass&&re(e,t.customClass.input)},cc=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Fi=(t,e,n)=>{if(n.inputLabel){t.id=w.input;const s=document.createElement("label"),i=w["input-label"];s.setAttribute("for",t.id),s.className=i,re(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Xp=t=>{const e=w[t]?w[t]:w.input;return Xt(ue(),e)},et={};et.text=et.email=et.password=et.number=et.tel=et.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:nc(e.inputValue)||st(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Fi(t,t,e),cc(t,e),t.type=e.input,t);et.file=(t,e)=>(Fi(t,t,e),cc(t,e),t);et.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Fi(n,t,e),t};et.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");qe(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Fi(t,t,e),t};et.radio=t=>(t.textContent="",t);et.checkbox=(t,e)=>{const n=oc(ue(),"checkbox");n.value="1",n.id=w.checkbox,n.checked=!!e.inputValue;const s=t.querySelector("span");return qe(s,e.inputPlaceholder),t};et.textarea=(t,e)=>{t.value=e.inputValue,cc(t,e),Fi(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(ue()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?ue().style.width=`${r}px`:ue().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const cI=(t,e)=>{const n=Dr();mt(n,e,"htmlContainer"),e.html?(lc(e.html,n),Fe(n,"block")):e.text?(n.textContent=e.text,Fe(n,"block")):Qe(n),iI(t,e)},uI=(t,e)=>{const n=zp();Eo(n,e.footer),e.footer&&lc(e.footer,n),mt(n,e,"footer")},hI=(t,e)=>{const n=sc();qe(n,e.closeButtonHtml),mt(n,e,"closeButton"),Eo(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},dI=(t,e)=>{const n=X.innerParams.get(t),s=Ui();if(n&&e.icon===n.icon){Bu(s,e),Vu(s,e);return}if(!e.icon&&!e.iconHtml)return Qe(s);if(e.icon&&Object.keys(js).indexOf(e.icon)===-1)return On(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Qe(s);Fe(s),Bu(s,e),Vu(s,e),re(s,e.showClass.icon)},Vu=(t,e)=>{for(const n in js)e.icon!==n&&Nt(t,js[n]);re(t,js[e.icon]),mI(t,e),fI(),mt(t,e,"icon")},fI=()=>{const t=ue(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},pI=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,gI=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Bu=(t,e)=>{t.textContent="",e.iconHtml?qe(t,ju(e.iconHtml)):e.icon==="success"?qe(t,pI):e.icon==="error"?qe(t,gI):qe(t,ju({question:"?",warning:"!",info:"i"}[e.icon]))},mI=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])xu(t,n,"backgroundColor",e.iconColor);xu(t,".swal2-success-ring","borderColor",e.iconColor)}},ju=t=>`<div class="${w["icon-content"]}">${t}</div>`,yI=(t,e)=>{const n=Hp();if(!e.imageUrl)return Qe(n);Fe(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),$s(n,"width",e.imageWidth),$s(n,"height",e.imageHeight),n.className=w.image,mt(n,e,"image")},vI=t=>{const e=document.createElement("li");return re(e,w["progress-step"]),qe(e,t),e},wI=t=>{const e=document.createElement("li");return re(e,w["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},bI=(t,e)=>{const n=Kp();if(!e.progressSteps||e.progressSteps.length===0)return Qe(n);Fe(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&st("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=vI(s);if(n.appendChild(r),i===e.currentProgressStep&&re(r,w["active-progress-step"]),i!==e.progressSteps.length-1){const o=wI(e);n.appendChild(o)}})},_I=(t,e)=>{const n=qp();Eo(n,e.title||e.titleText,"block"),e.title&&lc(e.title,n),e.titleText&&(n.innerText=e.titleText),mt(n,e,"title")},EI=(t,e)=>{const n=Ge(),s=ue();e.toast?($s(n,"width",e.width),s.style.width="100%",s.insertBefore(ws(),Ui())):$s(s,"width",e.width),$s(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Qe(wo()),II(s,e)},II=(t,e)=>{t.className=`${w.popup} ${ct(t)?e.showClass.popup:""}`,e.toast?(re([document.documentElement,document.body],w["toast-shown"]),re(t,w.toast)):re(t,w.modal),mt(t,e,"popup"),typeof e.customClass=="string"&&re(t,e.customClass),e.icon&&re(t,w[`icon-${e.icon}`])},Jp=(t,e)=>{EI(t,e),nI(t,e),bI(t,e),dI(t,e),yI(t,e),_I(t,e),hI(t,e),cI(t,e),YE(t,e),uI(t,e),typeof e.didRender=="function"&&e.didRender(ue())},bs=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),TI=()=>{ht(document.body.children).forEach(e=>{e===Ge()||e.contains(Ge())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Zp=()=>{ht(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},eg=["swal-title","swal-html","swal-footer"],SI=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return RI(n),Object.assign(CI(n),kI(n),AI(n),PI(n),DI(n),NI(n,eg))},CI=t=>{const e={};return ht(t.querySelectorAll("swal-param")).forEach(n=>{Pn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof Qn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof Qn[s]=="object"&&(e[s]=JSON.parse(i))}),e},kI=t=>{const e={};return ht(t.querySelectorAll("swal-button")).forEach(n=>{Pn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${ec(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},AI=t=>{const e={},n=t.querySelector("swal-image");return n&&(Pn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},PI=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Pn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},DI=t=>{const e={},n=t.querySelector("swal-input");n&&(Pn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},ht(s).forEach(i=>{Pn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},NI=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(Pn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},RI=t=>{const e=eg.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);ht(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&st(`Unrecognized element <${s}>`)})},Pn=(t,e)=>{ht(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&st([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},$u={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function OI(t){t.inputValidator||Object.keys($u).forEach(e=>{t.input===e&&(t.inputValidator=$u[e])})}function LI(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(st('Target parameter is not valid, defaulting to "body"'),t.target="body")}function MI(t){OI(t),t.showLoaderOnConfirm&&!t.preConfirm&&st(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),LI(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),zE(t)}class UI{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const xI=()=>{Yn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Yn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Yn.previousBodyPadding+QE()}px`)},FI=()=>{Yn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Yn.previousBodyPadding}px`,Yn.previousBodyPadding=null)},VI=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Ft(document.body,w.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,re(document.body,w.iosfix),jI(),BI()}},BI=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&ue().scrollHeight>window.innerHeight-44&&(Ge().style.paddingBottom="44px")},jI=()=>{const t=Ge();let e;t.ontouchstart=n=>{e=$I(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},$I=t=>{const e=t.target,n=Ge();return qI(t)||HI(t)?!1:e===n||!Fu(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Fu(Dr())&&Dr().contains(e))},qI=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",HI=t=>t.touches&&t.touches.length>1,KI=()=>{if(Ft(document.body,w.iosfix)){const t=parseInt(document.body.style.top,10);Nt(document.body,w.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},tg=10,zI=t=>{const e=Ge(),n=ue();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;QI(e,n,t),setTimeout(()=>{WI(e,n)},tg),rc()&&(GI(e,t.scrollbarPadding,i),TI()),!_o()&&!G.previousActiveElement&&(G.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Nt(e,w["no-transition"])},ng=t=>{const e=ue();if(t.target!==e)return;const n=Ge();e.removeEventListener(ai,ng),n.style.overflowY="auto"},WI=(t,e)=>{ai&&Qp(e)?(t.style.overflowY="hidden",e.addEventListener(ai,ng)):t.style.overflowY="auto"},GI=(t,e,n)=>{VI(),e&&n!=="hidden"&&xI(),setTimeout(()=>{t.scrollTop=0})},QI=(t,e,n)=>{re(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Fe(e,"grid"),setTimeout(()=>{re(e,n.showClass.popup),e.style.removeProperty("opacity")},tg),re([document.documentElement,document.body],w.shown),n.heightAuto&&n.backdrop&&!n.toast&&re([document.documentElement,document.body],w["height-auto"])},ls=t=>{let e=ue();e||new ci,e=ue();const n=ws();_o()?Qe(Ui()):YI(e,t),Fe(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},YI=(t,e)=>{const n=xi(),s=ws();!e&&ct(Et())&&(e=Et()),Fe(n),e&&(Qe(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),re([t,n],w.loading)},XI=(t,e)=>{e.input==="select"||e.input==="radio"?nT(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(tc(e.inputValue)||nc(e.inputValue))&&(ls(Et()),sT(t,e))},JI=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return ZI(n);case"radio":return eT(n);case"file":return tT(n);default:return e.inputAutoTrim?n.value.trim():n.value}},ZI=t=>t.checked?1:0,eT=t=>t.checked?t.value:null,tT=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,nT=(t,e)=>{const n=ue(),s=i=>iT[e.input](n,Ua(i),e);tc(e.inputOptions)||nc(e.inputOptions)?(ls(Et()),Li(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):On(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},sT=(t,e)=>{const n=t.getInput();Qe(n),Li(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Fe(n),n.focus(),t.hideLoading()}).catch(s=>{On(`Error in inputValue promise: ${s}`),n.value="",Fe(n),n.focus(),t.hideLoading()})},iT={select:(t,e,n)=>{const s=Xt(t,w.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,qe(l,o),l.selected=qu(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Xt(t,w.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=w.radio,l.value=o,qu(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");qe(u,a),u.className=w.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Ua=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Ua(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Ua(s)),e.push([n,s])}),e},qu=(t,e)=>e&&e.toString()===t.toString();function Hu(){const t=X.innerParams.get(this);if(!t)return;const e=X.domCache.get(this);Qe(e.loader),_o()?t.icon&&Fe(Ui()):rT(e),Nt([e.popup,e.actions],w.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const rT=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Fe(e[0],"inline-block"):ME()&&Qe(t.actions)};function oT(t){const e=X.innerParams.get(t||this),n=X.domCache.get(t||this);return n?oc(n.popup,e.input):null}const li={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},aT=()=>ct(ue()),sg=()=>Et()&&Et().click(),lT=()=>ln()&&ln().click(),cT=()=>An()&&An().click(),ig=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},uT=(t,e,n,s)=>{ig(e),n.toast||(e.keydownHandler=i=>dT(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:ue(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},xa=(t,e,n)=>{const s=ic();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();ue().focus()},rg=["ArrowRight","ArrowDown"],hT=["ArrowLeft","ArrowUp"],dT=(t,e,n)=>{const s=X.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?fT(t,e,s):e.key==="Tab"?pT(e,s):[...rg,...hT].includes(e.key)?gT(e.key):e.key==="Escape"&&mT(e,s,n)))},fT=(t,e,n)=>{if(vo(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;sg(),e.preventDefault()}},pT=(t,e)=>{const n=t.target,s=ic();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?xa(e,i,-1):xa(e,i,1),t.stopPropagation(),t.preventDefault()},gT=t=>{const e=Et(),n=ln(),s=An();if(![e,n,s].includes(document.activeElement))return;const i=rg.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<xi().children.length;o++){if(r=r[i],!r)return;if(ct(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},mT=(t,e,n)=>{vo(e.allowEscapeKey)&&(t.preventDefault(),n(bs.esc))};function og(t,e,n,s){_o()?Ku(t,s):(VE(n).then(()=>Ku(t,s)),ig(G)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),rc()&&(FI(),KI(),Zp()),yT()}function yT(){Nt([document.documentElement,document.body],[w.shown,w["height-auto"],w["no-backdrop"],w["toast-shown"]])}function Gi(t){t=_T(t);const e=li.swalPromiseResolve.get(this),n=wT(this);this.isAwaitingPromise()?t.isDismissed||(Vi(this),e(t)):n&&e(t)}function vT(){return!!X.awaitingPromise.get(this)}const wT=t=>{const e=ue();if(!e)return!1;const n=X.innerParams.get(t);if(!n||Ft(e,n.hideClass.popup))return!1;Nt(e,n.showClass.popup),re(e,n.hideClass.popup);const s=Ge();return Nt(s,n.showClass.backdrop),re(s,n.hideClass.backdrop),ET(t,e,n),!0};function bT(t){const e=li.swalPromiseReject.get(this);Vi(this),e&&e(t)}const Vi=t=>{t.isAwaitingPromise()&&(X.awaitingPromise.delete(t),X.innerParams.get(t)||t._destroy())},_T=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),ET=(t,e,n)=>{const s=Ge(),i=ai&&Qp(e);typeof n.willClose=="function"&&n.willClose(e),i?IT(t,e,s,n.returnFocus,n.didClose):og(t,s,n.returnFocus,n.didClose)},IT=(t,e,n,s,i)=>{G.swalCloseEventFinishedCallback=og.bind(null,t,n,s,i),e.addEventListener(ai,function(r){r.target===e&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback)})},Ku=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function ag(t,e,n){const s=X.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function lg(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function TT(){ag(this,["confirmButton","denyButton","cancelButton"],!1)}function ST(){ag(this,["confirmButton","denyButton","cancelButton"],!0)}function CT(){return lg(this.getInput(),!1)}function kT(){return lg(this.getInput(),!0)}function AT(t){const e=X.domCache.get(this),n=X.innerParams.get(this);qe(e.validationMessage,t),e.validationMessage.className=w["validation-message"],n.customClass&&n.customClass.validationMessage&&re(e.validationMessage,n.customClass.validationMessage),Fe(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",w["validation-message"]),Wp(s),re(s,w.inputerror))}function PT(){const t=X.domCache.get(this);t.validationMessage&&Qe(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Nt(e,w.inputerror))}function DT(){return X.domCache.get(this).progressSteps}function NT(t){const e=ue(),n=X.innerParams.get(this);if(!e||Ft(e,n.hideClass.popup))return st("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=RT(t),i=Object.assign({},n,s);Jp(this,i),X.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const RT=t=>{const e={};return Object.keys(t).forEach(n=>{jp(n)?e[n]=t[n]:st(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function OT(){const t=X.domCache.get(this),e=X.innerParams.get(this);if(!e){cg(this);return}t.popup&&G.swalCloseEventFinishedCallback&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback),G.deferDisposalTimer&&(clearTimeout(G.deferDisposalTimer),delete G.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),LT(this)}const LT=t=>{cg(t),delete t.params,delete G.keydownHandler,delete G.keydownTarget,delete G.currentInstance},cg=t=>{t.isAwaitingPromise()?(Wo(X,t),X.awaitingPromise.set(t,!0)):(Wo(li,t),Wo(X,t))},Wo=(t,e)=>{for(const n in t)t[n].delete(e)},ug=Object.freeze(Object.defineProperty({__proto__:null,_destroy:OT,close:Gi,closeModal:Gi,closePopup:Gi,closeToast:Gi,disableButtons:ST,disableInput:kT,disableLoading:Hu,enableButtons:TT,enableInput:CT,getInput:oT,getProgressSteps:DT,handleAwaitingPromise:Vi,hideLoading:Hu,isAwaitingPromise:vT,rejectPromise:bT,resetValidationMessage:PT,showValidationMessage:AT,update:NT},Symbol.toStringTag,{value:"Module"})),MT=t=>{const e=X.innerParams.get(t);t.disableButtons(),e.input?hg(t,"confirm"):hc(t,!0)},UT=t=>{const e=X.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?hg(t,"deny"):uc(t,!1)},xT=(t,e)=>{t.disableButtons(),e(bs.cancel)},hg=(t,e)=>{const n=X.innerParams.get(t);if(!n.input)return On(`The "input" parameter is needed to be set when using returnInputValueOn${ec(e)}`);const s=JI(t,n);n.inputValidator?FT(t,s,e):t.getInput().checkValidity()?e==="deny"?uc(t,s):hc(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},FT=(t,e,n)=>{const s=X.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Li(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?uc(t,e):hc(t,e)})},uc=(t,e)=>{const n=X.innerParams.get(t||globalThis);n.showLoaderOnDeny&&ls(ln()),n.preDeny?(X.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Li(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Vi(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>dg(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},zu=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},dg=(t,e)=>{t.rejectPromise(e)},hc=(t,e)=>{const n=X.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&ls(),n.preConfirm?(t.resetValidationMessage(),X.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Li(n.preConfirm(e,n.validationMessage))).then(i=>{ct(wo())||i===!1?(t.hideLoading(),Vi(t)):zu(t,typeof i>"u"?e:i)}).catch(i=>dg(t||globalThis,i))):zu(t,e)},VT=(t,e,n)=>{X.innerParams.get(t).toast?BT(t,e,n):($T(e),qT(e),HT(t,e,n))},BT=(t,e,n)=>{e.popup.onclick=()=>{const s=X.innerParams.get(t);s&&(jT(s)||s.timer||s.input)||n(bs.close)}},jT=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Nr=!1;const $T=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Nr=!0)}}},qT=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Nr=!0)}}},HT=(t,e,n)=>{e.container.onclick=s=>{const i=X.innerParams.get(t);if(Nr){Nr=!1;return}s.target===e.container&&vo(i.allowOutsideClick)&&n(bs.backdrop)}},KT=t=>typeof t=="object"&&t.jquery,Wu=t=>t instanceof Element||KT(t),zT=t=>{const e={};return typeof t[0]=="object"&&!Wu(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||Wu(i)?e[n]=i:i!==void 0&&On(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function WT(...t){const e=this;return new e(...t)}function GT(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const QT=()=>G.timeout&&G.timeout.getTimerLeft(),fg=()=>{if(G.timeout)return UE(),G.timeout.stop()},pg=()=>{if(G.timeout){const t=G.timeout.start();return ac(t),t}},YT=()=>{const t=G.timeout;return t&&(t.running?fg():pg())},XT=t=>{if(G.timeout){const e=G.timeout.increase(t);return ac(e,!0),e}},JT=()=>G.timeout&&G.timeout.isRunning();let Gu=!1;const Fa={};function ZT(t="data-swal-template"){Fa[t]=this,Gu||(document.body.addEventListener("click",eS),Gu=!0)}const eS=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Fa){const s=e.getAttribute(n);if(s){Fa[n].fire({template:s});return}}},tS=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:zT,bindClickHandler:ZT,clickCancel:cT,clickConfirm:sg,clickDeny:lT,enableLoading:ls,fire:WT,getActions:xi,getCancelButton:An,getCloseButton:sc,getConfirmButton:Et,getContainer:Ge,getDenyButton:ln,getFocusableElements:ic,getFooter:zp,getHtmlContainer:Dr,getIcon:Ui,getImage:Hp,getInputLabel:NE,getLoader:ws,getPopup:ue,getTimerLeft:QT,getTimerProgressBar:bo,getTitle:qp,getValidationMessage:wo,increaseTimer:XT,isDeprecatedParameter:Ma,isLoading:OE,isTimerRunning:JT,isUpdatableParameter:jp,isValidParameter:Bp,isVisible:aT,mixin:GT,resumeTimer:pg,showLoading:ls,stopTimer:fg,toggleTimer:YT},Symbol.toStringTag,{value:"Module"}));let Va;class _s{constructor(...e){if(typeof window>"u")return;Va=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);X.promise.set(this,s)}_main(e,n={}){PE(Object.assign({},n,e)),G.currentInstance&&(G.currentInstance._destroy(),rc()&&Zp()),G.currentInstance=this;const s=sS(e,n);MI(s),Object.freeze(s),G.timeout&&(G.timeout.stop(),delete G.timeout),clearTimeout(G.restoreFocusTimeout);const i=iS(this);return Jp(this,s),X.innerParams.set(this,s),nS(this,i,s)}then(e){return X.promise.get(this).then(e)}finally(e){return X.promise.get(this).finally(e)}}const nS=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};li.swalPromiseResolve.set(t,s),li.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>MT(t),e.denyButton.onclick=()=>UT(t),e.cancelButton.onclick=()=>xT(t,r),e.closeButton.onclick=()=>r(bs.close),VT(t,e,r),uT(t,G,n,r),XI(t,n),zI(n),rS(G,n,r),oS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),sS=(t,e)=>{const n=SI(t),s=Object.assign({},Qn,e,n,t);return s.showClass=Object.assign({},Qn.showClass,s.showClass),s.hideClass=Object.assign({},Qn.hideClass,s.hideClass),s},iS=t=>{const e={popup:ue(),container:Ge(),actions:xi(),confirmButton:Et(),denyButton:ln(),cancelButton:An(),loader:ws(),closeButton:sc(),validationMessage:wo(),progressSteps:Kp()};return X.domCache.set(t,e),e},rS=(t,e,n)=>{const s=bo();Qe(s),e.timer&&(t.timeout=new UI(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Fe(s),mt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&ac(e.timer)})))},oS=(t,e)=>{if(!e.toast){if(!vo(e.allowEnterKey))return lS();aS(t,e)||xa(e,-1,1)}},aS=(t,e)=>e.focusDeny&&ct(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&ct(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&ct(t.confirmButton)?(t.confirmButton.focus(),!0):!1,lS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(_s.prototype,ug);Object.assign(_s,tS);Object.keys(ug).forEach(t=>{_s[t]=function(...e){if(Va)return Va[t](...e)}});_s.DismissReason=bs;_s.version="11.4.8";const ci=_s;ci.default=ci;const cS=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},uS=async t=>{try{await Zl(xt(Re,"Pacientes",t.id),t)}catch(e){console.log(e)}};function Qu(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function Yu(t){let e,n,s=t[0],i=[];for(let r=0;r<s.length;r+=1)i[r]=Xu(Qu(t,s,r));return{c(){e=b("div"),n=b("ul");for(let r=0;r<i.length;r+=1)i[r].c();f(n,"class","sinPunto svelte-1ru9vt8"),f(e,"class","listadoPacientes svelte-1ru9vt8")},m(r,o){Q(r,e,o),g(e,n);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null)},p(r,o){if(o&7){s=r[0];let a;for(a=0;a<s.length;a+=1){const l=Qu(r,s,a);i[a]?i[a].p(l,o):(i[a]=Xu(l),i[a].c(),i[a].m(n,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}},d(r){r&&q(e),ui(i,r)}}}function Xu(t){let e,n,s,i,r,o=`${t[9].apellido}, ${t[9].nombre}`.slice(0,20).padEnd(21," ")+`${t[9].plan=="particular"?"":t[9].nroSocio+"   plan "+t[9].plan.plan}`,a,l,c,u,h,d;return u=bh(t[5][0]),{c(){e=b("li"),n=b("input"),i=R(),r=b("label"),a=ie(o),c=R(),f(n,"type","radio"),f(n,"id",s=t[9].id),f(n,"name","pacientes"),n.__value=t[11],n.value=n.__value,f(n,"class","svelte-1ru9vt8"),f(r,"for",l=t[9].id),f(r,"class","svelte-1ru9vt8"),f(e,"class","svelte-1ru9vt8"),u.p(n)},m(p,m){Q(p,e,m),g(e,n),n.checked=n.__value===t[1],g(e,i),g(e,r),g(r,a),g(e,c),h||(d=[Y(n,"change",t[4]),Y(n,"change",t[2])],h=!0)},p(p,m){m&1&&s!==(s=p[9].id)&&f(n,"id",s),m&3&&(n.checked=n.__value===p[1]),m&1&&o!==(o=`${p[9].apellido}, ${p[9].nombre}`.slice(0,20).padEnd(21," ")+`${p[9].plan=="particular"?"":p[9].nroSocio+"   plan "+p[9].plan.plan}`)&&Se(a,o),m&1&&l!==(l=p[9].id)&&f(r,"for",l)},d(p){p&&q(e),u.r(),h=!1,nt(d)}}}function hS(t){let e,n=t[0].length>0&&Yu(t);return{c(){n&&n.c(),e=$a()},m(s,i){n&&n.m(s,i),Q(s,e,i)},p(s,[i]){s[0].length>0?n?n.p(s,i):(n=Yu(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ve,o:ve,d(s){n&&n.d(s),s&&q(e)}}}function dS(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r=0,o;const a=us(),l=h=>{const d=h.target.value;n(3,i=s[d].plan),o=s[d].id,a("cambioSelectPaciente",[d,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${d}, planSelect ${i.plan?i.plan:"particular"}`)},c=[[]];function u(){r=this.__value,n(1,r)}return t.$$set=h=>{"pacientesFiltrada"in h&&n(0,s=h.pacientesFiltrada),"planSelect"in h&&n(3,i=h.planSelect)},[s,r,l,i,u,c]}class fS extends Tt{constructor(e){super(),It(this,e,dS,hS,yt,{pacientesFiltrada:0,planSelect:3})}}function pS(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,y,v,I,S,P,C,k,j,U,ae,N,Z,ee,x,K,M,J,ne,Me,Pe,ge,le,De,Ye,fn,Ln,_,z,he,it;return k=new fS({props:{pacientesFiltrada:t[3],planSelect:gS}}),k.$on("cambioSelectPaciente",t[15]),_=new mE({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),_.$on("cambioPlan",t[14]),_.$on("clickCheckPlan",t[16]),{c(){e=b("body"),n=b("div"),s=b("div"),i=b("button"),r=ie("create"),a=R(),l=b("button"),c=ie("update"),h=R(),d=b("button"),p=ie("delete"),y=R(),v=b("div"),I=b("label"),I.textContent="filtrar por apellido",S=b("input"),P=R(),C=b("div"),wt(k.$$.fragment),j=R(),U=b("div"),ae=b("label"),ae.textContent="nombre",N=b("input"),Z=R(),ee=b("label"),ee.textContent="apellido",x=b("input"),K=R(),M=b("div"),J=b("label"),J.textContent="nº socio",ne=R(),Me=b("div"),Pe=b("input"),ge=R(),le=b("button"),le.textContent="📋",De=R(),Ye=b("label"),fn=ie(t[10]),Ln=R(),wt(_.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],f(i,"class","svelte-1uu1lxj"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],f(l,"class","svelte-1uu1lxj"),d.disabled=m=!t[4],f(d,"class","svelte-1uu1lxj"),f(s,"class","buttons svelte-1uu1lxj"),f(n,"id","botones"),f(n,"class","svelte-1uu1lxj"),f(I,"for","filterPrefix"),f(I,"class","svelte-1uu1lxj"),f(S,"name","filterPrefix"),f(S,"id","filterPrefix"),f(S,"placeholder","filter prefix"),f(S,"class","svelte-1uu1lxj"),f(v,"id","filter"),f(v,"class","svelte-1uu1lxj"),f(C,"id","selectPacientes"),f(C,"class","svelte-1uu1lxj"),f(ae,"for","nombre"),f(ae,"class","svelte-1uu1lxj"),f(N,"name","nombre"),f(N,"id","nombre"),f(N,"placeholder","nombre"),f(N,"class","svelte-1uu1lxj"),f(ee,"for","apellido"),f(ee,"class","svelte-1uu1lxj"),f(x,"name","apellido"),f(x,"id","apellido"),f(x,"placeholder","apellido"),f(x,"class","svelte-1uu1lxj"),f(U,"id","formInputsI"),f(U,"class","svelte-1uu1lxj"),f(J,"for","inputNroSocio"),f(J,"class","svelte-1uu1lxj"),f(Pe,"id","inputNroSocio"),f(Pe,"name","nroSocio"),f(Pe,"placeholder","nro de Socio"),f(Pe,"class","svelte-1uu1lxj"),f(le,"class","transparenteSinBordes svelte-1uu1lxj"),f(Me,"class","formRow svelte-1uu1lxj"),f(Ye,"id","labelPlan"),f(Ye,"for","plan"),f(Ye,"class","svelte-1uu1lxj"),f(M,"id","formInputsD"),f(M,"class","svelte-1uu1lxj"),f(e,"class","svelte-1uu1lxj")},m(W,de){Q(W,e,de),g(e,n),g(n,s),g(s,i),g(i,r),g(s,a),g(s,l),g(l,c),g(s,h),g(s,d),g(d,p),g(e,y),g(e,v),g(v,I),g(v,S),Ee(S,t[2]),g(e,P),g(e,C),dt(k,C,null),g(e,j),g(e,U),g(U,ae),g(U,N),Ee(N,t[7]),g(U,Z),g(U,ee),g(U,x),Ee(x,t[8]),g(e,K),g(e,M),g(M,J),g(M,ne),g(M,Me),g(Me,Pe),Ee(Pe,t[9]),g(Me,ge),g(Me,le),g(M,De),g(M,Ye),g(Ye,fn),g(M,Ln),dt(_,M,null),z=!0,he||(it=[Y(i,"click",t[11]),Y(l,"click",t[12]),Y(d,"click",t[13]),Y(S,"input",t[20]),Y(N,"input",t[21]),Y(x,"input",t[22]),Y(Pe,"input",t[23]),Y(le,"click",mS)],he=!0)},p(W,de){(!z||de[0]&897&&o!==(o=!W[7]||!W[8]||!W[0]||!W[9]))&&(i.disabled=o),(!z||de[0]&913&&u!==(u=!W[7]||!W[8]||!W[0]||!W[9]||!W[4]))&&(l.disabled=u),(!z||de[0]&16&&m!==(m=!W[4]))&&(d.disabled=m),de[0]&4&&S.value!==W[2]&&Ee(S,W[2]);const Ze={};de[0]&8&&(Ze.pacientesFiltrada=W[3]),k.$set(Ze),de[0]&128&&N.value!==W[7]&&Ee(N,W[7]),de[0]&256&&x.value!==W[8]&&Ee(x,W[8]),de[0]&512&&Pe.value!==W[9]&&Ee(Pe,W[9]),(!z||de[0]&1024)&&Se(fn,W[10]);const Rt={};de[0]&2&&(Rt.planes=W[1]),de[0]&1&&(Rt.planSeleccionado=W[0]),de[0]&64&&(Rt.SelectPlanVisible=W[6]),de[0]&32&&(Rt.indicePlan=W[5]),_.$set(Rt)},i(W){z||(fe(k.$$.fragment,W),fe(_.$$.fragment,W),z=!0)},o(W){be(k.$$.fragment,W),be(_.$$.fragment,W),z=!1},d(W){W&&q(e),ft(k),ft(_),he=!1,nt(it)}}}let gS="particular";function mS(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function yS(t,e,n){let s,i,r,o,a,l;at(t,St,_=>n(25,i=_)),at(t,Os,_=>n(26,r=_)),at(t,So,_=>n(27,o=_)),at(t,Xo,_=>n(28,a=_)),at(t,Yo,_=>n(29,l=_));let{pacientes:c=[]}=e,{sesiones:u}=e,{planes:h}=e,{planSeleccionado:d}=e,p=new Date().getMonth()+1,m,y=["nombre","apellido","nroSocio","plan","createdAt"],v,I=0,S;Th(()=>{cS(c,y),c.forEach(_=>{uS(_)}),console.log(l)});let P="",C="",k="",j="",U=[],ae="plan";rt(So,o=s,o);const N=_=>{n(7,C=_?_.nombre:""),n(8,k=_?_.apellido:""),n(9,j=_?_.nroSocio:""),n(0,d=_?_.plan:{})},Z=async()=>{try{await Oa(ot(Re,"Pacientes"),{nombre:C,apellido:k,nroSocio:j,createdAt:new Date().toLocaleDateString(),plan:d}),wn({text:"Nuevo paciente agregado"}).showToast()}catch(_){console.error(_)}},ee=()=>{n(17,c=c.concat({nombre:C,apellido:k})),n(19,I=c.length-1),Z(),n(7,C=n(8,k=n(0,d=n(9,j=""))))},x=async _=>{try{await Zl(xt(Re,"Pacientes",_.id),_),wn({text:`paciente ${_.apellido}, ${_.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(z){console.error(z)}},K=()=>{n(4,s.nombre=C,s),n(4,s.apellido=k,s),n(0,d=s.plan),n(4,s.nroSocio=j,s),n(4,s),n(3,U),n(19,I),n(2,P),n(17,c),n(17,c),x(s)},M=async _=>{try{await Ra(xt(Re,"Pacientes",_.id)),wn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(he){console.error(he)}const z=Vs(ot(Re,"sesiones"),Na("pacienteID","==",_.id));console.log(`desde delete q=pacientes a borrar ${z} - paciente: ${_.nombre} ${_.apellido} ${_.id}`);try{(await Mp(z)).forEach(it=>{Ra(it.ref)})}catch(he){console.log(he)}},J=()=>{const _=c.indexOf(s);ci.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(z=>{z.isConfirmed&&(ci.fire("Deleted!","Your file has been deleted.","success"),M(c[I]),n(17,c=[...c.slice(0,_),...c.slice(_+1)]),n(7,C=n(8,k=n(9,j=n(0,d="")))),n(19,I=Math.min(I,U.length-2)))})},ne=_=>{n(4,s.plan=_,s),n(4,s.nombre=C,s),n(4,s.apellido=k,s),n(4,s.nroSocio=j,s),n(3,U[I].plan=_,U),x(s)},Me=_=>{n(0,d=_.detail),console.log(d),s.plan.plan!=d.plan&&ne(d)},Pe=_=>{_?(n(10,ae="particular"),n(6,S=!1)):(n(10,ae="plan"),n(6,S=!0))},ge=_=>{n(19,I=_.detail[0]);const z=_.detail[1];rt(Os,r=_.detail[2],r);const he=typeof z=="string"?"particular":z.plan;console.log(`i ${I}, planSelect ${he}`),n(0,d=he=="particular"?"particular":U[I].plan),d!="particular"&&(n(5,v=h.findIndex(W=>W.plan===he)),console.log(`indicePlan ${v}, ${typeof v}`));const it=he=="particular";Pe(it),console.log(`mesSeleccionado ${p.toString().padStart(2,"0")} - $idPacienteSeleccionado ${r}`),m=u.find(W=>W.pacienteID===r&&W.diaSesion.slice(5,7)===p.toString().padStart(2,"0")),m?(rt(St,i=m.id,i),console.log(m,i)):console.log("no hay sesion a seleccionar")},le=_=>{const z=_.detail.valor.SelectPlanVisible;z?z&&d=="particular"&&n(0,d="210"):n(0,d="particular"),ne(d),Pe(!z)};function De(){P=this.value,n(2,P)}function Ye(){C=this.value,n(7,C)}function fn(){k=this.value,n(8,k)}function Ln(){j=this.value,n(9,j)}return t.$$set=_=>{"pacientes"in _&&n(17,c=_.pacientes),"sesiones"in _&&n(18,u=_.sesiones),"planes"in _&&n(1,h=_.planes),"planSeleccionado"in _&&n(0,d=_.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,U=P?c.filter(_=>`${_.apellido}, ${_.nombre}`.toLowerCase().startsWith(P.toLowerCase())):c.map(_=>({nombre:_.nombre,apellido:_.apellido,plan:_.plan,nroSocio:_.nroSocio,id:_.id}))),t.$$.dirty[0]&524296&&n(4,s=U[I]),t.$$.dirty[0]&16&&s&&(rt(So,o=s,o),rt(Yo,l=s.apellido,l),rt(Xo,a=s.nombre,a),rt(Os,r=s.id,r)),t.$$.dirty[0]&16&&N(s)},[d,h,P,U,s,v,S,C,k,j,ae,ee,K,J,Me,ge,le,c,u,I,De,Ye,fn,Ln]}class vS extends Tt{constructor(e){super(),It(this,e,yS,pS,yt,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0},null,[-1,-1])}}function cs(t,{delay:e=0,duration:n=400,easing:s=ph}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}const wS=ot(Re,"sesiones");ot(Re,"Pacientes");ot(Re,"Planes");const bS=async t=>{const e=Bs(t),n=e.fechaInicio,s=e.fechaFin;try{return(await Mp(Vs(wS,Na("diaSesion",">=",n),Na("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function Ju(t,e,n){const s=t.slice();return s[7]=e[n],s}function Zu(t){let e,n=`listar ${t[7].nombre}`,s;return{c(){e=b("option"),s=ie(n),e.__value=t[7].nro,e.value=e.__value},m(i,r){Q(i,e,r),g(e,s)},p:ve,d(i){i&&q(e)}}}function _S(t){let e,n,s,i,r=t[1],o=[];for(let a=0;a<r.length;a+=1)o[a]=Zu(Ju(t,r,a));return{c(){e=b("main"),n=b("select");for(let a=0;a<o.length;a+=1)o[a].c();f(n,"name","mes"),f(n,"id","mesRegistro"),f(n,"class","svelte-2ytts5"),t[0]===void 0&&Vt(()=>t[5].call(n)),f(e,"class","svelte-2ytts5")},m(a,l){Q(a,e,l),g(e,n);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(n,null);rr(n,t[0]),s||(i=[Y(n,"change",t[3]),Y(n,"dblclick",t[4]),Y(n,"change",t[5])],s=!0)},p(a,[l]){if(l&2){r=a[1];let c;for(c=0;c<r.length;c+=1){const u=Ju(a,r,c);o[c]?o[c].p(u,l):(o[c]=Zu(u),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}l&3&&rr(n,a[0])},i:ve,o:ve,d(a){a&&q(e),ui(o,a),s=!1,nt(i)}}}function ES(t,e,n){let s=new Date().getMonth()+1,i=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}];const r=us(),o=u=>{r("cambioMes",u)},a=u=>o(u.target.value),l=u=>o(u.target.value);function c(){s=_h(this),n(0,s),n(1,i)}return[s,i,o,a,l,c]}class IS extends Tt{constructor(e){super(),It(this,e,ES,_S,yt,{})}}function eh(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function th(t){let e,n,s,i,r;return{c(){e=b("button"),e.textContent="mostrar vista",f(e,"class"," svelte-1wge5ah")},m(o,a){Q(o,e,a),s=!0,i||(r=Y(e,"click",t[16]),i=!0)},p:ve,i(o){s||(Vt(()=>{n||(n=Xn(e,cs,{},!0)),n.run(1)}),s=!0)},o(o){n||(n=Xn(e,cs,{},!1)),n.run(0),s=!1},d(o){o&&q(e),o&&n&&n.end(),i=!1,r()}}}function nh(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,y,v,I,S,P,C,k,j,U,ae,N,Z,ee=t[1],x=[];for(let M=0;M<ee.length;M+=1)x[M]=rh(eh(t,ee,M));let K=t[3]&&oh(t);return{c(){e=b("div"),n=b("button"),n.textContent="Cerrar",s=R(),i=b("button"),i.textContent="ordena por nombre",r=R(),o=b("button"),o.textContent="ordena por OS",a=R(),l=b("button"),l.textContent="ordena por fecha sesion",c=R(),u=b("div"),h=b("table"),d=b("tr"),d.innerHTML=`<th class="svelte-1wge5ah">n°</th> 
          <th class="svelte-1wge5ah">dia</th> 
          <th class="svelte-1wge5ah">paciente</th> 
          <th class="svelte-1wge5ah">plan</th> 
          <th class="svelte-1wge5ah">pago</th> 
          <th class="svelte-1wge5ah">sesion</th>`,p=R(),m=b("tbody");for(let M=0;M<x.length;M+=1)x[M].c();y=R(),v=b("div"),I=b("div"),S=b("button"),S.textContent="Cerrar",P=R(),C=b("div"),k=b("button"),k.innerHTML='<i class="bx bx-show svelte-1wge5ah"></i>',j=R(),K&&K.c(),f(n,"class","botonesListado svelte-1wge5ah"),f(i,"class","botonesListado svelte-1wge5ah"),f(o,"class","botonesListado svelte-1wge5ah"),f(l,"class","botonesListado svelte-1wge5ah"),f(d,"class","cabecera svelte-1wge5ah"),f(m,"class","svelte-1wge5ah"),f(h,"class","svelte-1wge5ah"),f(u,"id","tabla"),f(u,"class","svelte-1wge5ah"),f(S,"class","botonesListado svelte-1wge5ah"),f(I,"class","col col-2 m-2 svelte-1wge5ah"),f(k,"class","transparente svelte-1wge5ah"),f(C,"class","col col-1 px-2 mt-3 svelte-1wge5ah"),f(v,"class","row svelte-1wge5ah"),f(e,"class","svelte-1wge5ah")},m(M,J){Q(M,e,J),g(e,n),g(e,s),g(e,i),g(e,r),g(e,o),g(e,a),g(e,l),g(e,c),g(e,u),g(u,h),g(h,d),g(h,p),g(h,m);for(let ne=0;ne<x.length;ne+=1)x[ne]&&x[ne].m(m,null);g(e,y),g(e,v),g(v,I),g(I,S),g(v,P),g(v,C),g(C,k),g(v,j),K&&K.m(v,null),ae=!0,N||(Z=[Y(n,"click",t[17]),Y(i,"click",t[7]),Y(o,"click",t[8]),Y(l,"click",t[9]),Y(S,"click",t[18]),Y(k,"click",t[19])],N=!0)},p(M,J){if(J&1042){ee=M[1];let ne;for(ne=0;ne<ee.length;ne+=1){const Me=eh(M,ee,ne);x[ne]?x[ne].p(Me,J):(x[ne]=rh(Me),x[ne].c(),x[ne].m(m,null))}for(;ne<x.length;ne+=1)x[ne].d(1);x.length=ee.length}M[3]?K?(K.p(M,J),J&8&&fe(K,1)):(K=oh(M),K.c(),fe(K,1),K.m(v,null)):K&&(Hs(),be(K,1,1,()=>{K=null}),Ks())},i(M){ae||(fe(K),Vt(()=>{U||(U=Xn(e,cs,{},!0)),U.run(1)}),ae=!0)},o(M){be(K),U||(U=Xn(e,cs,{},!1)),U.run(0),ae=!1},d(M){M&&q(e),ui(x,M),K&&K.d(),M&&U&&U.end(),N=!1,nt(Z)}}}function sh(t){let e,n,s,i,r=`cant sesiones: ${t[10](t[4],t[24]).cantSesiones}`,o,a,l,c=t[10](t[4],t[24]).subtotalPagos+"",u,h,d=t[10](t[4],t[24]).subtotalValorSesion+"",p;return{c(){e=b("tr"),n=b("td"),s=b("td"),i=b("td"),o=ie(r),a=b("td"),a.textContent="subtotales",l=b("td"),u=ie(c),h=b("td"),p=ie(d),f(n,"class","svelte-1wge5ah"),f(s,"class","svelte-1wge5ah"),f(i,"class","svelte-1wge5ah"),f(a,"class","svelte-1wge5ah"),f(l,"class","svelte-1wge5ah"),f(h,"class","svelte-1wge5ah"),f(e,"class","subtotalRow svelte-1wge5ah")},m(m,y){Q(m,e,y),g(e,n),g(e,s),g(e,i),g(i,o),g(e,a),g(e,l),g(l,u),g(e,h),g(h,p)},p(m,y){y&16&&r!==(r=`cant sesiones: ${m[10](m[4],m[24]).cantSesiones}`)&&Se(o,r),y&16&&c!==(c=m[10](m[4],m[24]).subtotalPagos+"")&&Se(u,c),y&16&&d!==(d=m[10](m[4],m[24]).subtotalValorSesion+"")&&Se(p,d)},d(m){m&&q(e)}}}function ih(t){let e,n,s=t[24]+1+"",i,r,o,a=`${ah(t[22].diaSesion.slice(8,10),2,!1)}`,l,c,u,h=`${t[22].apellido}, ${t[22].nombre}`,d,p,m,y=t[22].plan.slice(0,4)+"",v,I,S,P=t[22].valorPago+"",C,k,j,U=t[22].valorSesion+"",ae,N;return{c(){e=b("tr"),n=b("td"),i=ie(s),r=R(),o=b("td"),l=ie(a),c=R(),u=b("td"),d=ie(h),p=R(),m=b("td"),v=ie(y),I=R(),S=b("td"),C=ie(P),k=R(),j=b("td"),ae=ie(U),N=R(),f(n,"class","svelte-1wge5ah"),f(o,"class","dia svelte-1wge5ah"),f(u,"class","nombre svelte-1wge5ah"),f(m,"class","plan svelte-1wge5ah"),f(S,"class","svelte-1wge5ah"),f(j,"class","svelte-1wge5ah"),f(e,"class","svelte-1wge5ah")},m(Z,ee){Q(Z,e,ee),g(e,n),g(n,i),g(e,r),g(e,o),g(o,l),g(e,c),g(e,u),g(u,d),g(e,p),g(e,m),g(m,v),g(e,I),g(e,S),g(S,C),g(e,k),g(e,j),g(j,ae),g(e,N)},p(Z,ee){ee&2&&a!==(a=`${ah(Z[22].diaSesion.slice(8,10),2,!1)}`)&&Se(l,a),ee&2&&h!==(h=`${Z[22].apellido}, ${Z[22].nombre}`)&&Se(d,h),ee&2&&y!==(y=Z[22].plan.slice(0,4)+"")&&Se(v,y),ee&2&&P!==(P=Z[22].valorPago+"")&&Se(C,P),ee&2&&U!==(U=Z[22].valorSesion+"")&&Se(ae,U)},d(Z){Z&&q(e)}}}function rh(t){let e,n,s=(t[24]>1&&t[1][t[24]-1][t[4]]!=t[22][t[4]]||t[24]===t[1].length)&&sh(t),i=t[24]<t[1].length&&t[22].nombre!="ultimo"&&ih(t);return{c(){s&&s.c(),e=R(),i&&i.c(),n=$a()},m(r,o){s&&s.m(r,o),Q(r,e,o),i&&i.m(r,o),Q(r,n,o)},p(r,o){r[24]>1&&r[1][r[24]-1][r[4]]!=r[22][r[4]]||r[24]===r[1].length?s?s.p(r,o):(s=sh(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r[24]<r[1].length&&r[22].nombre!="ultimo"?i?i.p(r,o):(i=ih(r),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(r){s&&s.d(r),r&&q(e),i&&i.d(r),r&&q(n)}}}function oh(t){let e,n,s,i=t[5](t[1]).totalColPagos+"",r,o,a,l,c=t[5](t[1]).totalColValorSesion+"",u,h,d;return{c(){e=b("div"),n=b("h6"),s=ie("Total pagos: $"),r=ie(i),o=R(),a=b("h6"),l=ie("Total valor sesion: $"),u=ie(c),f(n,"class","row px-2 svelte-1wge5ah"),f(a,"class","row px-2 svelte-1wge5ah"),f(e,"class","bordeTotales col col-7 m-3 p-2 svelte-1wge5ah")},m(p,m){Q(p,e,m),g(e,n),g(n,s),g(n,r),g(e,o),g(e,a),g(a,l),g(a,u),d=!0},p(p,m){(!d||m&2)&&i!==(i=p[5](p[1]).totalColPagos+"")&&Se(r,i),(!d||m&2)&&c!==(c=p[5](p[1]).totalColValorSesion+"")&&Se(u,c)},i(p){d||(Vt(()=>{h||(h=Xn(e,cs,{},!0)),h.run(1)}),d=!0)},o(p){h||(h=Xn(e,cs,{},!1)),h.run(0),d=!1},d(p){p&&q(e),p&&h&&h.end()}}}function TS(t){let e,n,s,i,r,o,a,l;s=new IS({}),s.$on("cambioMes",t[15]);let c=t[2]&&th(t),u=t[0]&&t[1].length>0&&nh(t);return{c(){e=b("div"),n=b("div"),wt(s.$$.fragment),i=R(),r=b("div"),c&&c.c(),o=R(),a=b("div"),u&&u.c(),f(n,"class","col-5 mx-2 p-2 my-0 svelte-1wge5ah"),f(r,"class","col-5 mx-2 p-2 my-0 svelte-1wge5ah"),f(e,"class","row svelte-1wge5ah"),f(a,"class","listadoSesionesPorMes svelte-1wge5ah"),f(a,"id","listadoSesionesPorMes1")},m(h,d){Q(h,e,d),g(e,n),dt(s,n,null),g(e,i),g(e,r),c&&c.m(r,null),Q(h,o,d),Q(h,a,d),u&&u.m(a,null),l=!0},p(h,[d]){h[2]?c?(c.p(h,d),d&4&&fe(c,1)):(c=th(h),c.c(),fe(c,1),c.m(r,null)):c&&(Hs(),be(c,1,1,()=>{c=null}),Ks()),h[0]&&h[1].length>0?u?(u.p(h,d),d&3&&fe(u,1)):(u=nh(h),u.c(),fe(u,1),u.m(a,null)):u&&(Hs(),be(u,1,1,()=>{u=null}),Ks())},i(h){l||(fe(s.$$.fragment,h),fe(c),fe(u),l=!0)},o(h){be(s.$$.fragment,h),be(c),be(u),l=!1},d(h){h&&q(e),ft(s),c&&c.d(),h&&q(o),h&&q(a),u&&u.d()}}}function ah(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function Go(t){setTimeout(()=>{t.scrollIntoView({behavior:"smooth"})},50);const e=t.getBoundingClientRect(),n=window.scrollY+e.top;window.scrollTo({top:n,behavior:"smooth"})}function SS(t,e){const n=t.plan.toUpperCase(),s=e.plan.toUpperCase();return n<s?-1:n>s?1:0}function CS(t,e){const n=`${t.apellido}, ${t.nombre}`.toUpperCase(),s=`${e.apellido}, ${e.nombre}`.toUpperCase();return n<s?-1:n>s?1:0}function kS(t,e){const n=t.diaSesion.toUpperCase(),s=e.diaSesion.toUpperCase();return n<s?-1:n>s?1:0}function AS(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e,o=!0,a=!1;const l=us(),c=N=>{var Z=0,ee=0;return console.log(N),N.length>0&&N.forEach(x=>{Z+=x.valorPago,ee+=x.valorSesion}),{totalColPagos:Z,totalColValorSesion:ee}},u=N=>{i==!1?(l("vistaPulsado",N),n(14,s=N),n(0,i=!i)):i==!0&&(l("vistaPulsado",N),n(14,s=N));const Z=document.getElementById("listadoSesionesPorMes1");Go(Z),console.log(c(r),`mes: ${s}, cant de sesiones: ${r.length}`)},h=N=>{n(14,s=N),u(N)};let d="diaSesion";function p(){r.sort(CS),n(1,r),n(4,d="apellido")}function m(){r.sort(SS),n(1,r),n(4,d="plan")}function y(){r.sort(kS),n(1,r),n(4,d="diaSesion")}function v(N,Z){const ee=r.filter(J=>J[N]===r[Z-1][N]);console.log(ee);const x=ee.reduce((J,ne)=>J+ne.valorPago,0),K=ee.reduce((J,ne)=>J+ne.valorSesion,0),M=ee.length;return{subtotalPagos:x,subtotalValorSesion:K,cantSesiones:M}}const I=()=>{n(2,o=!1),n(0,i=!i),h(s)},S=()=>{n(2,o=!0);const N=document.getElementById("contenedorPacientes");console.log(N),Go(N),n(0,i=!i)},P=N=>{n(3,a=!a),Go(N.target)},C=N=>h(N.detail),k=()=>I(),j=()=>S(),U=()=>S(),ae=N=>P(N);return t.$$set=N=>{"mesSeleccionado"in N&&n(14,s=N.mesSeleccionado),"vistaCalculos"in N&&n(0,i=N.vistaCalculos),"arrayParaLaVista"in N&&n(1,r=N.arrayParaLaVista)},[i,r,o,a,d,c,h,p,m,y,v,I,S,P,s,C,k,j,U,ae]}class PS extends Tt{constructor(e){super(),It(this,e,AS,TS,yt,{mesSeleccionado:14,vistaCalculos:0,arrayParaLaVista:1})}}function DS(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,y;return{c(){e=b("div"),n=b("div"),n.innerHTML='<p class="text-left svelte-1ae8q9x">total pagos:</p>',s=R(),i=b("div"),r=b("p"),o=ie("$"),a=ie(t[0]),l=R(),c=b("div"),u=b("div"),u.innerHTML='<p class="text-left svelte-1ae8q9x">total sesiones:</p>',h=R(),d=b("div"),p=b("p"),m=ie("$"),y=ie(t[1]),f(n,"class","col-6 d-flex justify-content-end"),f(r,"class","text-right svelte-1ae8q9x"),f(i,"class","col-2 d-flex justify-content-start"),f(e,"class","row"),f(u,"class","col-6 d-flex justify-content-end"),f(p,"class","text-right svelte-1ae8q9x"),f(d,"class","col-6 d-flex justify-content-start"),f(c,"class","row piso svelte-1ae8q9x")},m(v,I){Q(v,e,I),g(e,n),g(e,s),g(e,i),g(i,r),g(r,o),g(r,a),Q(v,l,I),Q(v,c,I),g(c,u),g(c,h),g(c,d),g(d,p),g(p,m),g(p,y)},p(v,[I]){I&1&&Se(a,v[0]),I&2&&Se(y,v[1])},i:ve,o:ve,d(v){v&&q(e),v&&q(l),v&&q(c)}}}function NS(t,e,n){let{varSumaValorPagoPorPaciente:s}=e,{varSumaValorSesionPorPaciente:i}=e;return t.$$set=r=>{"varSumaValorPagoPorPaciente"in r&&n(0,s=r.varSumaValorPagoPorPaciente),"varSumaValorSesionPorPaciente"in r&&n(1,i=r.varSumaValorSesionPorPaciente)},[s,i]}class RS extends Tt{constructor(e){super(),It(this,e,NS,DS,yt,{varSumaValorPagoPorPaciente:0,varSumaValorSesionPorPaciente:1})}}function lh(t,e,n){const s=t.slice();return s[12]=e[n],s}function ch(t){let e,n,s,i,r=!1,o,a,l=`${t[12].diaSesion.slice(8,10)} -sesion: $${t[12].valorSesion}-pago: ${t[12].fechaPago.slice(5,10)} $${t[12].valorPago}`,c,u,h,d,p,m;return d=bh(t[9][0]),{c(){e=b("li"),n=b("input"),o=R(),a=b("label"),c=ie(l),h=R(),f(n,"type","radio"),f(n,"id",s=t[12].id),f(n,"name","sesiones"),n.__value=i=t[12].id,n.value=n.__value,f(n,"class","svelte-syl1t9"),f(a,"for",u=t[12].id),f(a,"class","svelte-syl1t9"),f(e,"class","svelte-syl1t9"),d.p(n)},m(y,v){Q(y,e,v),g(e,n),n.checked=n.__value===t[2],g(e,o),g(e,a),g(a,c),g(e,h),p||(m=[Y(n,"change",t[6]),Y(n,"change",t[8])],p=!0)},p(y,v){v&2&&s!==(s=y[12].id)&&f(n,"id",s),v&2&&i!==(i=y[12].id)&&(n.__value=i,n.value=n.__value,r=!0),(r||v&6)&&(n.checked=n.__value===y[2]),v&2&&l!==(l=`${y[12].diaSesion.slice(8,10)} -sesion: $${y[12].valorSesion}-pago: ${y[12].fechaPago.slice(5,10)} $${y[12].valorPago}`)&&Se(c,l),v&2&&u!==(u=y[12].id)&&f(a,"for",u)},d(y){y&&q(e),d.r(),p=!1,nt(m)}}}function uh(t){let e=Object.values(t[12]).includes(t[3])&&parseInt(t[12].diaSesion.slice(5,7))==t[0],n,s=e&&ch(t);return{c(){s&&s.c(),n=$a()},m(i,r){s&&s.m(i,r),Q(i,n,r)},p(i,r){r&11&&(e=Object.values(i[12]).includes(i[3])&&parseInt(i[12].diaSesion.slice(5,7))==i[0]),e?s?s.p(i,r):(s=ch(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&q(n)}}}function OS(t){let e,n,s,i,r,o=t[1],a=[];for(let l=0;l<o.length;l+=1)a[l]=uh(lh(t,o,l));return i=new RS({props:{varSumaValorPagoPorPaciente:t[4],varSumaValorSesionPorPaciente:t[5]}}),{c(){e=b("div"),n=b("ul");for(let l=0;l<a.length;l+=1)a[l].c();s=R(),wt(i.$$.fragment),f(n,"class","sinPunto svelte-syl1t9"),f(e,"class","selectorSesiones svelte-syl1t9")},m(l,c){Q(l,e,c),g(e,n);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(n,null);g(e,s),dt(i,e,null),r=!0},p(l,[c]){if(c&79){o=l[1];let h;for(h=0;h<o.length;h+=1){const d=lh(l,o,h);a[h]?a[h].p(d,c):(a[h]=uh(d),a[h].c(),a[h].m(n,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=o.length}const u={};c&16&&(u.varSumaValorPagoPorPaciente=l[4]),c&32&&(u.varSumaValorSesionPorPaciente=l[5]),i.$set(u)},i(l){r||(fe(i.$$.fragment,l),r=!0)},o(l){be(i.$$.fragment,l),r=!1},d(l){l&&q(e),ui(a,l),ft(i)}}}function LS(t,e,n){let s,i;at(t,St,y=>n(2,s=y)),at(t,Os,y=>n(3,i=y));let{mesSeleccionado:r}=e,{sesiones:o}=e,{cambioEnSesiones:a}=e,l,c;const u=us(),h=y=>{console.log(St,y.target.value),u("cambioSelectorSesion",y.target.value)},d=y=>{n(4,l=0),n(5,c=0),o.forEach(v=>{Object.values(v).includes(y)&&parseInt(v.diaSesion.slice(5,7))==r&&(n(4,l+=v.valorPago),n(5,c+=v.valorSesion))})},p=[[]];function m(){s=this.__value,St.set(s)}return t.$$set=y=>{"mesSeleccionado"in y&&n(0,r=y.mesSeleccionado),"sesiones"in y&&n(1,o=y.sesiones),"cambioEnSesiones"in y&&n(7,a=y.cambioEnSesiones)},t.$$.update=()=>{t.$$.dirty&8&&(console.log(`cambio id paciente ${i}`),d(i)),t.$$.dirty&136&&(console.log(`cambioEnSesiones ${a}`),d(i)),t.$$.dirty&4&&u("cambioSelectorSesion",s)},[r,o,s,i,l,c,h,a,m,p]}class MS extends Tt{constructor(e){super(),It(this,e,LS,OS,yt,{mesSeleccionado:0,sesiones:1,cambioEnSesiones:7})}}function hh(t){let e,n,s=`Mes: ${t[5]}`,i,r,o,a,l,c,u=t[10]&&t[11]&&dh(t);return l=new MS({props:{mesSeleccionado:t[5],sesiones:t[0],cambioEnSesiones:t[3]}}),l.$on("cambioSelectorSesion",t[12]),{c(){e=b("div"),n=b("h5"),i=ie(s),r=R(),u&&u.c(),o=R(),a=b("div"),wt(l.$$.fragment),f(n,"class","svelte-1g69ypk"),f(e,"class","tituloSelectorSesiones svelte-1g69ypk"),f(e,"id","tituloSesiones"),f(a,"class","selectorSesiones svelte-1g69ypk")},m(h,d){Q(h,e,d),g(e,n),g(n,i),g(e,r),u&&u.m(e,null),Q(h,o,d),Q(h,a,d),dt(l,a,null),c=!0},p(h,d){(!c||d[0]&32)&&s!==(s=`Mes: ${h[5]}`)&&Se(i,s),h[10]&&h[11]?u?u.p(h,d):(u=dh(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null);const p={};d[0]&32&&(p.mesSeleccionado=h[5]),d[0]&1&&(p.sesiones=h[0]),d[0]&8&&(p.cambioEnSesiones=h[3]),l.$set(p)},i(h){c||(fe(l.$$.fragment,h),c=!0)},o(h){be(l.$$.fragment,h),c=!1},d(h){h&&q(e),u&&u.d(),h&&q(o),h&&q(a),ft(l)}}}function dh(t){let e,n,s,i,r;return{c(){e=b("p"),n=ie("Paciente: "),s=ie(t[10]),i=ie(", "),r=ie(t[11]),f(e,"class","svelte-1g69ypk")},m(o,a){Q(o,e,a),g(e,n),g(e,s),g(e,i),g(e,r)},p(o,a){a[0]&1024&&Se(s,o[10]),a[0]&2048&&Se(r,o[11])},d(o){o&&q(e)}}}function US(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,y,v,I,S,P,C,k,j,U,ae,N,Z,ee,x,K,M,J,ne,Me,Pe,ge=t[0].length>0&&hh(t);return J=new PS({props:{vistaCalculos:t[2],arrayParaLaVista:t[4],mesSeleccionado:t[5]}}),J.$on("vistaPulsado",t[29]),{c(){e=b("main"),n=b("body"),ge&&ge.c(),s=R(),i=b("div"),r=b("form"),o=b("div"),a=b("div"),l=b("label"),l.textContent="pago",c=b("input"),u=R(),h=b("label"),h.textContent="valor sesion",d=b("input"),p=R(),m=b("div"),y=b("label"),y.textContent="Dia Sesion",v=b("input"),I=R(),S=b("label"),S.textContent="Fecha Pago",P=b("input"),C=R(),k=b("div"),j=b("button"),j.textContent="update",U=R(),ae=b("button"),ae.textContent="delete",N=R(),Z=b("button"),Z.textContent="misma sesión fecha actual",ee=R(),x=b("button"),x.textContent="Agrega sesión",K=R(),M=b("div"),wt(J.$$.fragment),f(l,"for","valorPago"),f(l,"class","svelte-1g69ypk"),f(c,"name","valorPago"),f(c,"id","valorPago"),f(c,"type","number"),f(c,"step","100"),f(c,"min","0"),f(c,"placeholder","Valor pago"),f(c,"class","svelte-1g69ypk"),f(h,"for","valorSesion"),f(h,"class","svelte-1g69ypk"),f(d,"name","valorSesion"),f(d,"id","valorSesion"),f(d,"type","number"),f(d,"step","100"),f(d,"min","0"),f(d,"placeholder","Valor sesión"),f(d,"class","svelte-1g69ypk"),f(a,"id","inputsFormSesionesI"),f(a,"class","svelte-1g69ypk"),f(y,"for","diaSesion"),f(y,"class","svelte-1g69ypk"),f(v,"name","diaSesion"),f(v,"id","diaSesion"),f(v,"type","date"),f(v,"placeholder","Día sesión"),f(v,"class","svelte-1g69ypk"),f(S,"for","fechaPago"),f(S,"class","svelte-1g69ypk"),f(P,"name","fechaPago"),f(P,"id","fechaPago"),f(P,"type","date"),f(P,"placeholder","Fecha pago"),f(P,"class","svelte-1g69ypk"),f(m,"id","inputsFormSesionesD"),f(m,"class","svelte-1g69ypk"),f(j,"class","svelte-1g69ypk"),f(ae,"class","svelte-1g69ypk"),f(Z,"class","text-sm svelte-1g69ypk"),f(x,"class","svelte-1g69ypk"),f(k,"id","botonesFormSesiones"),f(k,"class","buttons svelte-1g69ypk"),f(o,"id","form-Sesiones"),f(o,"class","svelte-1g69ypk"),f(r,"class","svelte-1g69ypk"),f(M,"class","svelte-1g69ypk"),f(i,"id","contenedor-form-sesiones"),f(i,"class","svelte-1g69ypk"),f(n,"class","svelte-1g69ypk"),f(e,"class","svelte-1g69ypk")},m(le,De){Q(le,e,De),g(e,n),ge&&ge.m(n,null),g(n,s),g(n,i),g(i,r),g(r,o),g(o,a),g(a,l),g(a,c),Ee(c,t[6]),g(a,u),g(a,h),g(a,d),Ee(d,t[7]),g(o,p),g(o,m),g(m,y),g(m,v),Ee(v,t[8]),g(m,I),g(m,S),g(m,P),Ee(P,t[9]),g(o,C),g(o,k),g(k,j),g(k,U),g(k,ae),g(k,N),g(k,Z),g(k,ee),g(k,x),g(i,K),g(i,M),dt(J,M,null),ne=!0,Me||(Pe=[Y(c,"input",t[23]),Y(d,"input",t[24]),Y(v,"input",t[25]),Y(P,"input",t[26]),Y(j,"click",t[27]),Y(ae,"click",t[28]),Y(Z,"click",t[14]),Y(x,"click",t[13]),Y(r,"submit",wh(t[22]))],Me=!0)},p(le,De){le[0].length>0?ge?(ge.p(le,De),De[0]&1&&fe(ge,1)):(ge=hh(le),ge.c(),fe(ge,1),ge.m(n,s)):ge&&(Hs(),be(ge,1,1,()=>{ge=null}),Ks()),De[0]&64&&ir(c.value)!==le[6]&&Ee(c,le[6]),De[0]&128&&ir(d.value)!==le[7]&&Ee(d,le[7]),De[0]&256&&Ee(v,le[8]),De[0]&512&&Ee(P,le[9]);const Ye={};De[0]&4&&(Ye.vistaCalculos=le[2]),De[0]&16&&(Ye.arrayParaLaVista=le[4]),De[0]&32&&(Ye.mesSeleccionado=le[5]),J.$set(Ye)},i(le){ne||(fe(ge),fe(J.$$.fragment,le),ne=!0)},o(le){be(ge),be(J.$$.fragment,le),ne=!1},d(le){le&&q(e),ge&&ge.d(),ft(J),Me=!1,nt(Pe)}}}function xS(t,e,n){let s,i,r,o;at(t,St,_=>n(21,s=_)),at(t,Os,_=>n(32,i=_)),at(t,Yo,_=>n(10,r=_)),at(t,Xo,_=>n(11,o=_));let{sesiones:a}=e,{pacientes:l}=e,{planes:c}=e,{planSeleccionado:u}=e,h=!1,d=!1;const p=()=>n(3,d=!d);let m=[],y=0;const v=new Date;let I=v.getMonth()+1,S=v.getFullYear(),P=I,C,k=0;const j=async _=>{_||(_=I);try{const z=await bS(_);k=0,y=0;let he=[];return z.forEach(it=>{let W=it.pacienteID;const de=l.find(Es=>Es.id==W);var Ze=it.valorPago;if(Ze==null&&(Ze=0),typeof Ze=="number")if(de.plan=="particular"){k+=Ze,Ze<K&&(y+=K-Ze);var Rt={diaSesion:it.diaSesion,apellido:de.apellido,nombre:de.nombre,plan:de.plan.plan?de.plan.plan:"particular",valorPago:Ze,valorSesion:it.valorSesion};he.push(Rt)}else{const Es=de.plan;var Rt={diaSesion:it.diaSesion,apellido:de.apellido,nombre:de.nombre,plan:de.plan.plan?de.plan.plan:"particular",valorPago:Ze,valorSesion:it.valorSesion};he.push(Rt),Ze<Es.valorCoseguro&&(y+=Es.valorCoseguro-Ze),k+=Es.valorOs+Ze}}),[k,he]}catch(z){return console.error("Error al obtener las sesiones y los pagos:",z),[]}};m=j(P),console.log("arrayParaLaVista y vistaCalculos"),console.log(m,h);const U=_=>{if(console.log(_),rt(St,s=_.detail,s),console.log(a),n(1,C=a.find(he=>he.id===s)),console.log("selectedSession",C),n(6,x=C.valorPago),console.log(`planSeleccionado: ${u}`),typeof u.plan>"u"||u.plan=="particular"||!u)n(7,K=C.valorSesion),console.log("particular",K);else{var z=c.find(he=>he.plan==u);console.log(z),console.log("OS",K)}n(9,J=C.fechaPago),n(8,M=C.diaSesion)},ae=async()=>{console.log("Add sesion",C);try{const _=await Oa(ot(Re,"sesiones"),{valorPago:x,valorSesion:K,diaSesion:M,fechaPago:J,pacienteID:i});console.log("sesion agregada"),wn({text:"Nueva sesion agregada"}).showToast(),rt(St,s=_.id,s),p()}catch(_){console.error(_)}},N=async()=>{console.log("Add sesion",C),console.log(I,"mes actual");const _=Bs(I).fechaActual.slice(0,10);try{const z=await Oa(ot(Re,"sesiones"),{valorPago:x,valorSesion:K,diaSesion:_,fechaPago:_,pacienteID:i});console.log(x,K,M,J,_),console.log("sesion agregada"),wn({text:"Nueva sesion agregada"}).showToast(),rt(St,s=z.id,s),p()}catch(z){console.error(z)}},Z=async _=>{console.log("Update sesion",_);try{await Zl(xt(Re,"sesiones",_.id),{valorPago:x,valorSesion:K,fechaPago:J,diaSesion:M}),wn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast(),p()}catch(z){console.log(z)}},ee=async _=>{console.log("Delete sesion",_);const z=_.pacienteID;try{await Ra(xt(Re,"sesiones",_.id)),wn({text:"Sesion eliminada",style:{background:"red"}}).showToast(),p()}catch(he){console.error(he)}_=a.find(he=>he.pacienteID===z&&he.diaSesion.slice(5,7)===P.toString().padStart(2,"0")),console.log(_||"no hay sesiones para mostrar"),_&&rt(St,s=_.id,s)};let x=5e3,K=5e3,M=new Date().toISOString().slice(0,10),J=new Date().toISOString().slice(0,10);I.toString().padStart(2,"0"),S.toString();const ne=async _=>{n(5,P=_);const z=await j(P);n(4,m=z[1]),m.push({apellido:"ultimo",diaSesion:"ultimo",nombre:"ultimo",plan:"ultimo",valorPago:0,valorSesion:0}),console.log(Array.isArray(z[1])),console.log(z[1]),n(2,h=!0)};function Me(_){Ag.call(this,t,_)}function Pe(){x=ir(this.value),n(6,x)}function ge(){K=ir(this.value),n(7,K)}function le(){M=this.value,n(8,M)}function De(){J=this.value,n(9,J)}const Ye=()=>Z(C),fn=()=>ee(C),Ln=async _=>ne(_.detail);return t.$$set=_=>{"sesiones"in _&&n(0,a=_.sesiones),"pacientes"in _&&n(18,l=_.pacientes),"planes"in _&&n(19,c=_.planes),"planSeleccionado"in _&&n(20,u=_.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&786433&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",a,"pacientes>",l,"planes>",c),t.$$.dirty[0]&2097155&&(n(1,C=a.find(_=>_.id===s)),console.log(C||"sin seleccion de sesion"))},j(),[a,C,h,d,m,P,x,K,M,J,r,o,U,ae,N,Z,ee,ne,l,c,u,s,Me,Pe,ge,le,De,Ye,fn,Ln]}class FS extends Tt{constructor(e){super(),It(this,e,xS,US,yt,{sesiones:0,pacientes:18,planes:19,planSeleccionado:20},null,[-1,-1])}}function VS(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,y,v,I,S,P;return l=new xp({}),p=new vS({props:{sesiones:t[1],pacientes:t[2],planes:t[0],planSeleccionado:fh}}),v=new FS({props:{sesiones:t[1],pacientes:t[2],planes:t[0],planSeleccionado:fh}}),{c(){e=b("body"),n=b("nav"),s=b("ul"),i=b("li"),r=b("button"),r.textContent="generar backup firestore",o=R(),a=b("li"),wt(l.$$.fragment),c=R(),u=b("div"),h=b("h5"),h.textContent="Listados de Pacientes",d=R(),wt(p.$$.fragment),m=R(),y=b("div"),wt(v.$$.fragment),f(i,"class","nav-item"),f(a,"class","nav-item"),f(s,"class","nav-bar nav"),f(n,"class","navbar"),f(h,"class","svelte-14tnwqe"),f(u,"class","contenedor-pacientes svelte-14tnwqe"),f(u,"id","contenedorPacientes"),f(y,"class","contenedor-sesiones svelte-14tnwqe"),f(e,"class","svelte-14tnwqe")},m(C,k){Q(C,e,k),g(e,n),g(n,s),g(s,i),g(i,r),g(s,o),g(s,a),dt(l,a,null),g(e,c),g(e,u),g(u,h),g(u,d),dt(p,u,null),g(e,m),g(e,y),dt(v,y,null),I=!0,S||(P=Y(r,"click",t[3]),S=!0)},p(C,[k]){const j={};k&2&&(j.sesiones=C[1]),k&4&&(j.pacientes=C[2]),k&1&&(j.planes=C[0]),p.$set(j);const U={};k&2&&(U.sesiones=C[1]),k&4&&(U.pacientes=C[2]),k&1&&(U.planes=C[0]),v.$set(U)},i(C){I||(fe(l.$$.fragment,C),fe(p.$$.fragment,C),fe(v.$$.fragment,C),I=!0)},o(C){be(l.$$.fragment,C),be(p.$$.fragment,C),be(v.$$.fragment,C),I=!1},d(C){C&&q(e),ft(l),ft(p),ft(v),S=!1,P()}}}let fh="particular";function BS(t,e,n){let s=[],i=[],r=[],o=[];Th(()=>{const l=[],c=ot(Re,"sesiones"),u=ot(Re,"Pacientes"),h=ot(Re,"planes"),d=Vs(c,qo("diaSesion")),p=Vs(u,qo("apellido")),m=Vs(h,qo("plan")),y=Ko(d,S=>{n(1,s=S.docs.map(P=>({id:P.id,...P.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(y);const v=Ko(p,S=>{n(2,i=S.docs.map(P=>({id:P.id,...P.data()})))});l.push(v);const I=Ko(m,S=>{n(0,r=S.docs.map(P=>({id:P.id,...P.data()})))});return l.push(I),()=>{l.forEach(S=>S())}});const a=()=>{const l="sesiones"+Bs().toString()+"BU",c=ot(Re,l);s.forEach(async m=>{const y=xt(c);try{await Ho(y,m),console.log("Documento sesion creado exitosamente")}catch(v){console.error("Error al crear el documento sesion:",v)}});const u="planes"+Bs().toString()+"BU",h=ot(Re,u);r.forEach(async m=>{const y=xt(h);try{await Ho(y,m),console.log("Documento plan creado exitosamente")}catch(v){console.error("Error al crear el documento plan:",v)}});const d="Pacientes"+Bs().toString()+"BU",p=ot(Re,d);i.forEach(async m=>{const y=xt(p);try{await Ho(y,m),console.log("Documento paciente creado exitosamente")}catch(v){console.error("Error al crear el documento paciente:",v)}})};return t.$$.update=()=>{t.$$.dirty&17&&(r.length!=0?(console.log(r),n(4,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,s,i,a,o]}class jS extends Tt{constructor(e){super(),It(this,e,BS,VS,yt,{})}}function $S(t){let e,n;return e=new xp({}),{c(){wt(e.$$.fragment)},m(s,i){dt(e,s,i),n=!0},i(s){n||(fe(e.$$.fragment,s),n=!0)},o(s){be(e.$$.fragment,s),n=!1},d(s){ft(e,s)}}}function qS(t){let e,n,s;return n=new jS({}),{c(){e=b("div"),wt(n.$$.fragment),f(e,"class","contenedorPadre svelte-qokvoh")},m(i,r){Q(i,e,r),dt(n,e,null),s=!0},i(i){s||(fe(n.$$.fragment,i),s=!0)},o(i){be(n.$$.fragment,i),s=!1},d(i){i&&q(e),ft(n)}}}function HS(t){let e,n,s,i;const r=[qS,$S],o=[];function a(l,c){return l[0]?0:1}return n=a(t),s=o[n]=r[n](t),{c(){e=b("main"),s.c(),f(e,"class","svelte-qokvoh")},m(l,c){Q(l,e,c),o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n!==u&&(Hs(),be(o[u],1,1,()=>{o[u]=null}),Ks(),s=o[n],s||(s=o[n]=r[n](l),s.c()),fe(s,1),s.m(e,null))},i(l){i||(fe(s),i=!0)},o(l){be(s),i=!1},d(l){l&&q(e),o[n].d()}}}function KS(t,e,n){let s;return at(t,Ss,i=>n(0,s=i)),[s]}class zS extends Tt{constructor(e){super(),It(this,e,KS,HS,yt,{})}}new zS({target:document.getElementById("app")});
