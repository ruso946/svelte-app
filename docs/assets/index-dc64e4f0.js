(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function we(){}function Lc(t){return t()}function za(){return Object.create(null)}function st(t){t.forEach(Lc)}function Mc(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function hf(t){return Object.keys(t).length===0}function df(t,...e){if(t==null)return we;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(df(e,n))}function vn(t,e,n){return t.set(n),e}function v(t,e){t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function Ds(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function ae(t){return document.createTextNode(t)}function x(){return ae(" ")}function xc(){return ae("")}function J(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ff(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bc(t){let e;return{p(...n){e=n,e.forEach(s=>t.push(s))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function pi(t){return t===""?null:+t}function pf(t){return Array.from(t.childNodes)}function $e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ce(t,e){t.value=e??""}function gi(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function gf(t){for(const e of t.options)if(!e.disabled)return e}function Fc(t){const e=t.querySelector(":checked")||gf(t);return e&&e.__value}function Js(t,e,n){t.classList[n?"add":"remove"](e)}function mf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let hs;function ss(t){hs=t}function Vc(){if(!hs)throw new Error("Function called outside component initialization");return hs}function Uc(t){Vc().$$.on_mount.push(t)}function Bi(){const t=Vc();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=mf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function yf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const En=[],Ga=[];let Sn=[];const Wa=[],vf=Promise.resolve();let zr=!1;function wf(){zr||(zr=!0,vf.then(qc))}function ds(t){Sn.push(t)}const Cr=new Set;let wn=0;function qc(){if(wn!==0)return;const t=hs;do{try{for(;wn<En.length;){const e=En[wn];wn++,ss(e),bf(e.$$)}}catch(e){throw En.length=0,wn=0,e}for(ss(null),En.length=0,wn=0;Ga.length;)Ga.pop()();for(let e=0;e<Sn.length;e+=1){const n=Sn[e];Cr.has(n)||(Cr.add(n),n())}Sn.length=0}while(En.length);for(;Wa.length;)Wa.pop()();zr=!1,Cr.clear(),ss(t)}function bf(t){if(t.fragment!==null){t.update(),st(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ds)}}function Ef(t){const e=[],n=[];Sn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Sn=e}const ai=new Set;let Zt;function jc(){Zt={r:0,c:[],p:Zt}}function $c(){Zt.r||st(Zt.c),Zt=Zt.p}function Qe(t,e){t&&t.i&&(ai.delete(t),t.i(e))}function at(t,e,n,s){if(t&&t.o){if(ai.has(t))return;ai.add(t),Zt.c.push(()=>{ai.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Ut(t){t&&t.c()}function It(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||ds(()=>{const o=t.$$.on_mount.map(Lc).filter(Mc);t.$$.on_destroy?t.$$.on_destroy.push(...o):st(o),t.$$.on_mount=[]}),r.forEach(ds)}function At(t,e){const n=t.$$;n.fragment!==null&&(Ef(n.after_update),st(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _f(t,e){t.$$.dirty[0]===-1&&(En.push(t),wf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ot(t,e,n,s,i,r,o,a=[-1]){const l=hs;ss(t);const c=t.$$={fragment:null,ctx:[],props:r,update:we,not_equal:i,bound:za(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:za(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&_f(t,h)),d}):[],c.update(),u=!0,st(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=pf(e.target);c.fragment&&c.fragment.l(h),h.forEach(F)}else c.fragment&&c.fragment.c();e.intro&&Qe(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),qc()}ss(l)}class Rt{$destroy(){At(this,1),this.$destroy=we}$on(e,n){if(!Mc(n))return we;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!hf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let li=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}_${o}_${s}_${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function Qa(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Ya(t){let e,n=t[12].plan+"",s;return{c(){e=C("option"),s=ae(n),e.__value=t[14],e.value=e.__value},m(i,r){V(i,e,r),v(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&$e(s,n)},d(i){i&&F(e)}}}function Tf(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=Ya(Qa(t,a,c));return{c(){e=C("div"),n=C("input"),s=x(),i=C("select");for(let c=0;c<l.length;c+=1)l[c].c();f(n,"type","checkbox"),f(n,"name","CheckBoxParticular"),f(n,"id","CheckBoxParticular"),f(i,"name","plan"),f(i,"id","plan"),f(i,"class","svelte-1de4xhy"),t[1]===void 0&&ds(()=>t[8].call(i)),Js(i,"SelectPlanVisible",t[0]),Js(i,"SelectPlanHidden",t[3]),f(e,"id","selectPlanContainer"),f(e,"class","svelte-1de4xhy")},m(c,u){V(c,e,u),v(e,n),n.checked=t[0],v(e,s),v(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);gi(i,t[1]),r||(o=[J(n,"change",t[7]),J(n,"change",t[4]),J(i,"change",t[8]),J(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=Qa(c,a,h);l[h]?l[h].p(d,u):(l[h]=Ya(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&gi(i,c[1]),u&1&&Js(i,"SelectPlanVisible",c[0]),u&8&&Js(i,"SelectPlanHidden",c[3])},i:we,o:we,d(c){c&&F(e),Ds(l,c),r=!1,st(o)}}}function Cf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=g=>{n(0,r=g)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=g=>{var w=g.target.checked;l(w),c()},h=Bi(),d=g=>{n(1,o=parseInt(g.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function p(){r=this.checked,n(0,r)}function m(){o=Fc(this),n(1,o)}return t.$$set=g=>{"planes"in g&&n(2,s=g.planes),"planSeleccionado"in g&&n(6,i=g.planSeleccionado),"SelectPlanVisible"in g&&n(0,r=g.SelectPlanVisible),"indicePlan"in g&&n(1,o=g.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,p,m]}class Sf extends Rt{constructor(e){super(),Ot(this,e,Cf,Tf,bt,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}/**
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
 */const Hc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},If=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):If(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Af;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Af extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kf=function(t){const e=Hc(t);return Kc.encodeByteArray(e,!0)},mi=function(t){return kf(t).replace(/\./g,"")},Df=function(t){try{return Kc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nf=()=>Pf().__FIREBASE_DEFAULTS__,Of=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Df(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return Nf()||Of()||Rf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lf=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gc=t=>{const e=Lf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Mf=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config};/**
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
 */class xf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Wc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mi(JSON.stringify(n)),mi(JSON.stringify(o)),a].join(".")}function Bf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ff(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Vf="FirebaseError";class hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Vf,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qc.prototype.create)}}class Qc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Uf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,s)}}function Uf(t,e){return t.replace(qf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qf=/\{\$([^}]+)}/g;function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Xa(r)&&Xa(o)){if(!Gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Xa(t){return t!==null&&typeof t=="object"}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class jf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hf(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$f(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $f(t){return t===Xt?void 0:t}function Hf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const zf={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Gf=se.INFO,Wf={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Qf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Wf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=Gf,this._logHandler=Qf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Yf=(t,e)=>e.some(n=>t instanceof n);let Ja,Za;function Xf(){return Ja||(Ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jf(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xc=new WeakMap,Wr=new WeakMap,Jc=new WeakMap,Sr=new WeakMap,Mo=new WeakMap;function Zf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xc.set(n,t)}).catch(()=>{}),Mo.set(e,t),e}function ep(t){if(Wr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let Qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tp(t){Qr=t(Qr)}function np(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ir(this),e,...n);return Jc.set(s,e.sort?e.sort():[e]),Mt(s)}:Jf().includes(t)?function(...e){return t.apply(Ir(this),e),Mt(Xc.get(this))}:function(...e){return Mt(t.apply(Ir(this),e))}}function sp(t){return typeof t=="function"?np(t):(t instanceof IDBTransaction&&ep(t),Yf(t,Xf())?new Proxy(t,Qr):t)}function Mt(t){if(t instanceof IDBRequest)return Zf(t);if(Sr.has(t))return Sr.get(t);const e=sp(t);return e!==t&&(Sr.set(t,e),Mo.set(e,t)),e}const Ir=t=>Mo.get(t);function ip(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const rp=["get","getKey","getAll","getAllKeys","count"],op=["put","add","delete","clear"],Ar=new Map;function el(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ar.get(e))return Ar.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=op.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ar.set(e,r),r}tp(t=>({...t,get:(e,n,s)=>el(e,n)||t.get(e,n,s),has:(e,n)=>!!el(e,n)||t.has(e,n)}));/**
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
 */class ap{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yr="@firebase/app",tl="0.9.4";/**
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
 */const on=new Yc("@firebase/app"),cp="@firebase/app-compat",up="@firebase/analytics-compat",hp="@firebase/analytics",dp="@firebase/app-check-compat",fp="@firebase/app-check",pp="@firebase/auth",gp="@firebase/auth-compat",mp="@firebase/database",yp="@firebase/database-compat",vp="@firebase/functions",wp="@firebase/functions-compat",bp="@firebase/installations",Ep="@firebase/installations-compat",_p="@firebase/messaging",Tp="@firebase/messaging-compat",Cp="@firebase/performance",Sp="@firebase/performance-compat",Ip="@firebase/remote-config",Ap="@firebase/remote-config-compat",kp="@firebase/storage",Dp="@firebase/storage-compat",Pp="@firebase/firestore",Np="@firebase/firestore-compat",Op="firebase",Rp="9.17.2";/**
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
 */const Xr="[DEFAULT]",Lp={[Yr]:"fire-core",[cp]:"fire-core-compat",[hp]:"fire-analytics",[up]:"fire-analytics-compat",[fp]:"fire-app-check",[dp]:"fire-app-check-compat",[pp]:"fire-auth",[gp]:"fire-auth-compat",[mp]:"fire-rtdb",[yp]:"fire-rtdb-compat",[vp]:"fire-fn",[wp]:"fire-fn-compat",[bp]:"fire-iid",[Ep]:"fire-iid-compat",[_p]:"fire-fcm",[Tp]:"fire-fcm-compat",[Cp]:"fire-perf",[Sp]:"fire-perf-compat",[Ip]:"fire-rc",[Ap]:"fire-rc-compat",[kp]:"fire-gcs",[Dp]:"fire-gcs-compat",[Pp]:"fire-fst",[Np]:"fire-fst-compat","fire-js":"fire-js",[Op]:"fire-js-all"};/**
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
 */const yi=new Map,Jr=new Map;function Mp(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(Jr.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,t);for(const n of yi.values())Mp(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xt=new Qc("app","Firebase",xp);/**
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
 */class Bp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const eu=Rp;function tu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(n||(n=Mf()),!n)throw xt.create("no-options");const r=yi.get(i);if(r){if(Gr(n,r.options)&&Gr(s,r.config))return r;throw xt.create("duplicate-app",{appName:i})}const o=new Kf(i);for(const l of Jr.values())o.addComponent(l);const a=new Bp(n,s,o);return yi.set(i,a),a}function nu(t=Xr){const e=yi.get(t);if(!e&&t===Xr)return tu();if(!e)throw xt.create("no-app",{appName:t});return e}function Bt(t,e,n){var s;let i=(s=Lp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}fs(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Fp="firebase-heartbeat-database",Vp=1,ps="firebase-heartbeat-store";let kr=null;function su(){return kr||(kr=ip(Fp,Vp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ps)}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),kr}async function Up(t){try{return(await su()).transaction(ps).objectStore(ps).get(iu(t))}catch(e){if(e instanceof hn)on.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});on.warn(n.message)}}}async function nl(t,e){try{const s=(await su()).transaction(ps,"readwrite");return await s.objectStore(ps).put(e,iu(t)),s.done}catch(n){if(n instanceof hn)on.warn(n.message);else{const s=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(s.message)}}}function iu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qp=1024,jp=30*24*60*60*1e3;class $p{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=jp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sl(),{heartbeatsToSend:n,unsentEntries:s}=Hp(this._heartbeatsCache.heartbeats),i=mi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sl(){return new Date().toISOString().substring(0,10)}function Hp(t,e=qp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),il(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bf()?Ff().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Up(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function il(t){return mi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zp(t){fs(new On("platform-logger",e=>new ap(e),"PRIVATE")),fs(new On("heartbeat",e=>new $p(e),"PRIVATE")),Bt(Yr,tl,t),Bt(Yr,tl,"esm2017"),Bt("fire-js","")}zp("");var Gp="firebase",Wp="9.17.2";/**
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
 */Bt(Gp,Wp,"app");var Qp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,xo=xo||{},q=Qp||self;function vi(){}function Fi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ps(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Yp(t){return Object.prototype.hasOwnProperty.call(t,Dr)&&t[Dr]||(t[Dr]=++Xp)}var Dr="closure_uid_"+(1e9*Math.random()>>>0),Xp=0;function Jp(t,e,n){return t.call.apply(t.bind,arguments)}function Zp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=Jp:Be=Zp,Be.apply(null,arguments)}function Zs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function zt(){this.s=this.s,this.o=this.o}var eg=0;zt.prototype.s=!1;zt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),eg!=0)&&Yp(this)};zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ru=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function rl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Fi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var tg=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",vi,e),q.removeEventListener("test",vi,e)}catch{}return t}();function wi(t){return/^[\s\xa0]*$/.test(t)}var ol=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pr(t,e){return t<e?-1:t>e?1:0}function Vi(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function gt(t){return Vi().indexOf(t)!=-1}function Fo(t){return Fo[" "](t),t}Fo[" "]=vi;function ng(t){var e=rg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var sg=gt("Opera"),Rn=gt("Trident")||gt("MSIE"),ou=gt("Edge"),Zr=ou||Rn,au=gt("Gecko")&&!(Vi().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),ig=Vi().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge");function lu(){var t=q.document;return t?t.documentMode:void 0}var bi;e:{var Nr="",Or=function(){var t=Vi();if(au)return/rv:([^\);]+)(\)|;)/.exec(t);if(ou)return/Edge\/([\d\.]+)/.exec(t);if(Rn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ig)return/WebKit\/(\S+)/.exec(t);if(sg)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Or&&(Nr=Or?Or[1]:""),Rn){var Rr=lu();if(Rr!=null&&Rr>parseFloat(Nr)){bi=String(Rr);break e}}bi=Nr}var rg={};function og(){return ng(function(){let t=0;const e=ol(String(bi)).split("."),n=ol("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Pr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Pr(i[2].length==0,r[2].length==0)||Pr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var eo;if(q.document&&Rn){var al=lu();eo=al||parseInt(bi,10)||void 0}else eo=void 0;var ag=eo;function gs(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(au){e:{try{Fo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gs.X.h.call(this)}}Oe(gs,Fe);var lg={2:"touch",3:"pen",4:"mouse"};gs.prototype.h=function(){gs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ns="closure_listenable_"+(1e6*Math.random()|0),cg=0;function ug(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++cg,this.ba=this.ea=!1}function Ui(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Vo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function cu(t){const e={};for(const n in t)e[n]=t[n];return e}const ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ll.length;r++)n=ll[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qi(t){this.src=t,this.g={},this.h=0}qi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=no(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ug(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function to(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=ru(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ui(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function no(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Uo="closure_lm_"+(1e6*Math.random()|0),Lr={};function hu(t,e,n,s,i){if(s&&s.once)return fu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)hu(t,e[r],n,s,i);return null}return n=$o(n),t&&t[Ns]?t.N(e,n,Ps(s)?!!s.capture:!!s,i):du(t,e,n,!1,s,i)}function du(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ps(i)?!!i.capture:!!i,a=jo(t);if(a||(t[Uo]=a=new qi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=hg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)tg||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(gu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hg(){function t(n){return e.call(t.src,t.listener,n)}const e=dg;return t}function fu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)fu(t,e[r],n,s,i);return null}return n=$o(n),t&&t[Ns]?t.O(e,n,Ps(s)?!!s.capture:!!s,i):du(t,e,n,!0,s,i)}function pu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)pu(t,e[r],n,s,i);else s=Ps(s)?!!s.capture:!!s,n=$o(n),t&&t[Ns]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=no(r,n,s,i),-1<n&&(Ui(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=jo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=no(e,n,s,i)),(n=-1<t?e[t]:null)&&qo(n))}function qo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ns])to(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(gu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=jo(e))?(to(n,t),n.h==0&&(n.src=null,e[Uo]=null)):Ui(t)}}}function gu(t){return t in Lr?Lr[t]:Lr[t]="on"+t}function dg(t,e){if(t.ba)t=!0;else{e=new gs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&qo(t),t=n.call(s,e)}return t}function jo(t){return t=t[Uo],t instanceof qi?t:null}var Mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(t){return typeof t=="function"?t:(t[Mr]||(t[Mr]=function(e){return t.handleEvent(e)}),t[Mr])}function Se(){zt.call(this),this.i=new qi(this),this.P=this,this.I=null}Oe(Se,zt);Se.prototype[Ns]=!0;Se.prototype.removeEventListener=function(t,e,n,s){pu(this,t,e,n,s)};function Pe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var i=e;e=new Fe(s,t),uu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ei(o,s,!0,e)&&i}if(o=e.g=t,i=ei(o,s,!0,e)&&i,i=ei(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ei(o,s,!1,e)&&i}Se.prototype.M=function(){if(Se.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ui(n[s]);delete t.g[e],t.h--}}this.I=null};Se.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Se.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ei(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&to(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ho=q.JSON.stringify;function fg(){var t=vu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class pg{constructor(){this.h=this.g=null}add(e,n){const s=mu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var mu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new gg,t=>t.reset());class gg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mg(t){q.setTimeout(()=>{throw t},0)}function yu(t,e){so||yg(),io||(so(),io=!0),vu.add(t,e)}var so;function yg(){var t=q.Promise.resolve(void 0);so=function(){t.then(vg)}}var io=!1,vu=new pg;function vg(){for(var t;t=fg();){try{t.h.call(t.g)}catch(n){mg(n)}var e=mu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}io=!1}function ji(t,e){Se.call(this),this.h=t||1,this.g=e||q,this.j=Be(this.lb,this),this.l=Date.now()}Oe(ji,Se);N=ji.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Pe(this,"tick"),this.ca&&(Ko(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ko(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){ji.X.M.call(this),Ko(this),delete this.g};function zo(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function wu(t){t.g=zo(()=>{t.g=null,t.i&&(t.i=!1,wu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wg extends zt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wu(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(t){zt.call(this),this.h=t,this.g={}}Oe(ms,zt);var cl=[];function bu(t,e,n,s){Array.isArray(n)||(n&&(cl[0]=n.toString()),n=cl);for(var i=0;i<n.length;i++){var r=hu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Eu(t){Vo(t.g,function(e,n){this.g.hasOwnProperty(n)&&qo(e)},t),t.g={}}ms.prototype.M=function(){ms.X.M.call(this),Eu(this)};ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $i(){this.g=!0}$i.prototype.Aa=function(){this.g=!1};function bg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Eg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Cn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Tg(t,n)+(s?" "+s:"")})}function _g(t,e){t.info(function(){return"TIMEOUT: "+e})}$i.prototype.info=function(){};function Tg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ho(n)}catch{return e}}var dn={},ul=null;function Hi(){return ul=ul||new Se}dn.Pa="serverreachability";function _u(t){Fe.call(this,dn.Pa,t)}Oe(_u,Fe);function ys(t){const e=Hi();Pe(e,new _u(e))}dn.STAT_EVENT="statevent";function Tu(t,e){Fe.call(this,dn.STAT_EVENT,t),this.stat=e}Oe(Tu,Fe);function He(t){const e=Hi();Pe(e,new Tu(e,t))}dn.Qa="timingevent";function Cu(t,e){Fe.call(this,dn.Qa,t),this.size=e}Oe(Cu,Fe);function Os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Ki={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Su={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Go(){}Go.prototype.h=null;function hl(t){return t.h||(t.h=t.i())}function Iu(){}var Rs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wo(){Fe.call(this,"d")}Oe(Wo,Fe);function Qo(){Fe.call(this,"c")}Oe(Qo,Fe);var ro;function zi(){}Oe(zi,Go);zi.prototype.g=function(){return new XMLHttpRequest};zi.prototype.i=function(){return{}};ro=new zi;function Ls(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ms(this),this.O=Cg,t=Zr?125:void 0,this.T=new ji(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var Cg=45e3,oo={},Ei={};N=Ls.prototype;N.setTimeout=function(t){this.O=t};function ao(t,e,n){t.K=1,t.v=Wi(kt(e)),t.s=n,t.P=!0,ku(t,null)}function ku(t,e){t.F=Date.now(),Ms(t),t.A=kt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),xu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Au,t.g=sh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new wg(Be(t.La,t,t.g),t.N)),bu(t.S,t.g,"readystatechange",t.ib),e=t.H?cu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ys(),bg(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&Tt(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=Tt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Zr||this.g&&(this.h.h||this.g.fa()||gl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ys(3):ys(2)),Gi(this);var n=this.g.aa();this.Y=n;t:if(Du(this)){var s=gl(this.g);t="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),is(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Eg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var c=a;break t}}c=null}if(n=c)Cn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lo(this,n);else{this.i=!1,this.o=3,He(12),en(this),is(this);break e}}this.P?(Pu(this,u,o),Zr&&this.i&&u==3&&(bu(this.S,this.T,"tick",this.hb),this.T.start())):(Cn(this.j,this.m,o,null),lo(this,o)),u==4&&en(this),this.i&&!this.I&&(u==4?Zu(this.l,this):(this.i=!1,Ms(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),en(this),is(this)}}}catch{}finally{}};function Du(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Pu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Sg(t,n),i==Ei){e==4&&(t.o=4,He(14),s=!1),Cn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==oo){t.o=4,He(15),Cn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Cn(t.j,t.m,i,null),lo(t,i);Du(t)&&i!=Ei&&i!=oo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),na(e),e.K=!0,He(11))):(Cn(t.j,t.m,n,"[Invalid Chunked Response]"),en(t),is(t))}N.hb=function(){if(this.g){var t=Tt(this.g),e=this.g.fa();this.C<e.length&&(Gi(this),Pu(this,t,e),this.i&&t!=4&&Ms(this))}};function Sg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ei:(n=Number(e.substring(n,s)),isNaN(n)?oo:(s+=1,s+n>e.length?Ei:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,en(this)};function Ms(t){t.V=Date.now()+t.O,Nu(t,t.O)}function Nu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Os(Be(t.gb,t),e)}function Gi(t){t.B&&(q.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(_g(this.j,this.A),this.K!=2&&(ys(),He(17)),en(this),this.o=2,is(this)):Nu(this,this.V-t)};function is(t){t.l.G==0||t.I||Zu(t.l,t)}function en(t){Gi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ko(t.T),Eu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||co(n.h,t))){if(!t.J&&co(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ci(n),Xi(n);else break e;ta(n),He(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Os(Be(n.cb,n),6e3));if(1>=Vu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else tn(n,11)}else if((t.J||n.g==t)&&Ci(n),!wi(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Yo(r,r.h),r.h=null))}if(s.D){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,he(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=nh(s,s.H?s.ka:null,s.V),o.J){Uu(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Gi(a),Ms(a)),s.g=o}else Xu(s);0<n.i.length&&Ji(n)}else c[0]!="stop"&&c[0]!="close"||tn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?tn(n,7):ea(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ys(4)}catch{}}function Ig(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ag(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ou(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ag(t),s=Ig(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function sn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof sn){this.h=e!==void 0?e:t.h,_i(this,t.j),this.s=t.s,this.g=t.g,Ti(this,t.m),this.l=t.l,e=t.i;var n=new vs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dl(this,n),this.o=t.o}else t&&(n=String(t).match(Ru))?(this.h=!!e,_i(this,n[1]||"",!0),this.s=Zn(n[2]||""),this.g=Zn(n[3]||"",!0),Ti(this,n[4]),this.l=Zn(n[5]||"",!0),dl(this,n[6]||"",!0),this.o=Zn(n[7]||"")):(this.h=!!e,this.i=new vs(null,this.h))}sn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(es(e,fl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(es(e,fl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(es(n,n.charAt(0)=="/"?Ng:Pg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",es(n,Rg)),t.join("")};function kt(t){return new sn(t)}function _i(t,e,n){t.j=n?Zn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ti(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dl(t,e,n){e instanceof vs?(t.i=e,Lg(t.i,t.h)):(n||(e=es(e,Og)),t.i=new vs(e,t.h))}function he(t,e,n){t.i.set(e,n)}function Wi(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Dg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Dg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fl=/[#\/\?@]/g,Pg=/[#\?:]/g,Ng=/[#\?]/g,Og=/[#\?@]/g,Rg=/#/g;function vs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gt(t){t.g||(t.g=new Map,t.h=0,t.i&&kg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=vs.prototype;N.add=function(t,e){Gt(this),this.i=null,t=jn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lu(t,e){Gt(t),e=jn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Mu(t,e){return Gt(t),e=jn(t,e),t.g.has(e)}N.forEach=function(t,e){Gt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};N.oa=function(){Gt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};N.W=function(t){Gt(this);let e=[];if(typeof t=="string")Mu(this,t)&&(e=e.concat(this.g.get(jn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Gt(this),this.i=null,t=jn(this,t),Mu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function xu(t,e,n){Lu(t,e),0<n.length&&(t.i=null,t.g.set(jn(t,e),Bo(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function jn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Lg(t,e){e&&!t.j&&(Gt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Lu(this,s),xu(this,i,n))},t)),t.j=e}var Mg=class{constructor(e,n){this.h=e,this.g=n}};function Bu(t){this.l=t||xg,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xg=10;function Fu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vu(t){return t.h?1:t.g?t.g.size:0}function co(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yo(t,e){t.g?t.g.add(e):t.h=e}function Uu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Bu.prototype.cancel=function(){if(this.i=qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bo(t.i)}function Xo(){}Xo.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Xo.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function Bg(){this.g=new Xo}function Fg(t,e,n){const s=n||"";try{Ou(t,function(i,r){let o=i;Ps(i)&&(o=Ho(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Vg(t,e){const n=new $i;if(q.Image){const s=new Image;s.onload=Zs(ti,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zs(ti,n,s,"TestLoadImage: error",!1,e),s.onabort=Zs(ti,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zs(ti,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ti(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function xs(t){this.l=t.ac||null,this.j=t.jb||!1}Oe(xs,Go);xs.prototype.g=function(){return new Qi(this.l,this.j)};xs.prototype.i=function(t){return function(){return t}}({});function Qi(t,e){Se.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Qi,Se);var Jo=0;N=Qi.prototype;N.open=function(t,e){if(this.readyState!=Jo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ws(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=Jo};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ju(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ju(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bs(this):ws(this),this.readyState==3&&ju(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,Bs(this))};N.Ua=function(t){this.g&&(this.response=t,Bs(this))};N.ga=function(){this.g&&Bs(this)};function Bs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ws(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ws(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ug=q.JSON.parse;function de(t){Se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$u,this.K=this.L=!1}Oe(de,Se);var $u="",qg=/^https?$/i,jg=["POST","PUT"];N=de.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ro.g(),this.C=this.u?hl(this.u):hl(ro),this.g.onreadystatechange=Be(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){pl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=ru(jg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zu(this),0<this.B&&((this.K=$g(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.qa,this)):this.A=zo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){pl(this,r)}};function $g(t){return Rn&&og()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof xo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function pl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hu(t),Yi(t)}function Hu(t){t.D||(t.D=!0,Pe(t,"complete"),Pe(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),Yi(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yi(this,!0)),de.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?Ku(this):this.fb())};N.fb=function(){Ku(this)};function Ku(t){if(t.h&&typeof xo<"u"&&(!t.C[1]||Tt(t)!=4||t.aa()!=2)){if(t.v&&Tt(t)==4)zo(t.Ha,0,t);else if(Pe(t,"readystatechange"),Tt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Ru)[1]||null;if(!i&&q.self&&q.self.location){var r=q.self.location.protocol;i=r.substr(0,r.length-1)}s=!qg.test(i?i.toLowerCase():"")}n=s}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var o=2<Tt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Hu(t)}}finally{Yi(t)}}}}function Yi(t,e){if(t.g){zu(t);const n=t.g,s=t.C[0]?vi:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=s}catch{}}}function zu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Tt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ug(e)}};function gl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $u:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gu(t){let e="";return Vo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Zo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Gu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wu(t){this.Ca=0,this.i=[],this.j=new $i,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Jn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Jn("baseRetryDelayMs",5e3,t),this.bb=Jn("retryDelaySeedMs",1e4,t),this.$a=Jn("forwardChannelMaxRetries",2,t),this.ta=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Bu(t&&t.concurrentRequestLimit),this.Fa=new Bg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=Wu.prototype;N.ma=8;N.G=1;function ea(t){if(Qu(t),t.G==3){var e=t.U++,n=kt(t.F);he(n,"SID",t.I),he(n,"RID",e),he(n,"TYPE","terminate"),Fs(t,n),e=new Ls(t,t.j,e,void 0),e.K=2,e.v=Wi(kt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=sh(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ms(e)}th(t)}function Xi(t){t.g&&(na(t),t.g.cancel(),t.g=null)}function Qu(t){Xi(t),t.u&&(q.clearTimeout(t.u),t.u=null),Ci(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Ji(t){Fu(t.h)||t.m||(t.m=!0,yu(t.Ja,t),t.C=0)}function Hg(t,e){return Vu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Os(Be(t.Ja,t,e),eh(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ls(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=cu(r),uu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yu(this,i,e),n=kt(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),Fs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Gu(r)))+"&"+e:this.o&&Zo(n,this.o,r)),Yo(this.h,i),this.Ya&&he(n,"TYPE","init"),this.O?(he(n,"$req",e),he(n,"SID","null"),i.Z=!0,ao(i,n,null)):ao(i,n,e),this.G=2}}else this.G==3&&(t?ml(this,t):this.i.length==0||Fu(this.h)||ml(this))};function ml(t,e){var n;e?n=e.m:n=t.U++;const s=kt(t.F);he(s,"SID",t.I),he(s,"RID",n),he(s,"AID",t.T),Fs(t,s),t.o&&t.s&&Zo(s,t.o,t.s),n=new Ls(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Yu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Yo(t.h,n),ao(n,s,e)}function Fs(t,e){t.ia&&Vo(t.ia,function(n,s){he(e,s,n)}),t.l&&Ou({},function(n,s){he(e,s,n)})}function Yu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Be(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Fg(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Xu(t){t.g||t.u||(t.Z=1,yu(t.Ia,t),t.A=0)}function ta(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Os(Be(t.Ia,t),eh(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,Ju(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Os(Be(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,He(10),Xi(this),Ju(this))};function na(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function Ju(t){t.g=new Ls(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=kt(t.sa);he(e,"RID","rpc"),he(e,"SID",t.I),he(e,"CI",t.L?"0":"1"),he(e,"AID",t.T),he(e,"TYPE","xmlhttp"),Fs(t,e),t.o&&t.s&&Zo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Wi(kt(e)),n.s=null,n.P=!0,ku(n,t)}N.cb=function(){this.v!=null&&(this.v=null,Xi(this),ta(this),He(19))};function Ci(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Zu(t,e){var n=null;if(t.g==e){Ci(t),na(t),t.g=null;var s=2}else if(co(t.h,e))n=e.D,Uu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Hi(),Pe(s,new Cu(s,n)),Ji(t)}else Xu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Hg(t,e)||s==2&&ta(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:tn(t,5);break;case 4:tn(t,10);break;case 3:tn(t,6);break;default:tn(t,2)}}}function eh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function tn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Be(t.kb,t);n||(n=new sn("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||_i(n,"https"),Wi(n)),Vg(n.toString(),s)}else He(2);t.G=0,t.l&&t.l.va(e),th(t),Qu(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function th(t){if(t.G=0,t.la=[],t.l){const e=qu(t.h);(e.length!=0||t.i.length!=0)&&(rl(t.la,e),rl(t.la,t.i),t.h.i.length=0,Bo(t.i),t.i.length=0),t.l.ua()}}function nh(t,e,n){var s=n instanceof sn?kt(n):new sn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ti(s,s.m);else{var i=q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new sn(null,void 0);s&&_i(r,s),e&&(r.g=e),i&&Ti(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&he(s,n,e),he(s,"VER",t.ma),Fs(t,s),s}function sh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new de(new xs({jb:!0})):new de(t.ra),e.Ka(t.H),e}function ih(){}N=ih.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function Si(){if(Rn&&!(10<=Number(ag)))throw Error("Environmental error: no available transport.")}Si.prototype.g=function(t,e){return new tt(t,e)};function tt(t,e){Se.call(this),this.g=new Wu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $n(this)}Oe(tt,Se);tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;He(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=nh(t,null,t.V),Ji(t)};tt.prototype.close=function(){ea(this.g)};tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ho(t),t=n);e.i.push(new Mg(e.ab++,t)),e.G==3&&Ji(e)};tt.prototype.M=function(){this.g.l=null,delete this.j,ea(this.g),delete this.g,tt.X.M.call(this)};function rh(t){Wo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(rh,Wo);function oh(){Qo.call(this),this.status=1}Oe(oh,Qo);function $n(t){this.g=t}Oe($n,ih);$n.prototype.xa=function(){Pe(this.g,"a")};$n.prototype.wa=function(t){Pe(this.g,new rh(t))};$n.prototype.va=function(t){Pe(this.g,new oh)};$n.prototype.ua=function(){Pe(this.g,"b")};Si.prototype.createWebChannel=Si.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;Ki.NO_ERROR=0;Ki.TIMEOUT=8;Ki.HTTP_ERROR=6;Su.COMPLETE="complete";Iu.EventType=Rs;Rs.OPEN="a";Rs.CLOSE="b";Rs.ERROR="c";Rs.MESSAGE="d";Se.prototype.listen=Se.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.Oa;de.prototype.getLastErrorCode=de.prototype.Ea;de.prototype.getStatus=de.prototype.aa;de.prototype.getResponseJson=de.prototype.Sa;de.prototype.getResponseText=de.prototype.fa;de.prototype.send=de.prototype.da;de.prototype.setWithCredentials=de.prototype.Ka;var Kg=function(){return new Si},zg=function(){return Hi()},xr=Ki,Gg=Su,Wg=dn,yl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Qg=xs,ni=Iu,Yg=de;const vl="@firebase/firestore";/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let Hn="9.17.2";/**
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
 */const an=new Yc("@firebase/firestore");function wl(){return an.logLevel}function O(t,...e){if(an.logLevel<=se.DEBUG){const n=e.map(sa);an.debug(`Firestore (${Hn}): ${t}`,...n)}}function Dt(t,...e){if(an.logLevel<=se.ERROR){const n=e.map(sa);an.error(`Firestore (${Hn}): ${t}`,...n)}}function uo(t,...e){if(an.logLevel<=se.WARN){const n=e.map(sa);an.warn(`Firestore (${Hn}): ${t}`,...n)}}function sa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Hn}) INTERNAL ASSERTION FAILED: `+t;throw Dt(e),new Error(e)}function le(t,e){t||U()}function z(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ah{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class Jg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zg{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ft,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ft)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(le(typeof s.accessToken=="string"),new ah(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Re(e)}}class em{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(le(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class tm{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new em(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sm{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.A=n.token,new nm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function im(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class lh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=im(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function Ln(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new be(0,0))}static max(){return new H(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bs{constructor(e,n,s){n===void 0?n=0:n>e.length&&U(),s===void 0?s=e.length-n:s>e.length-n&&U(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends bs{construct(e,n,s){return new ue(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const rm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends bs{construct(e,n,s){return new Me(e,n,s)}static isValidIdentifier(e){return rm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new P(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new P(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
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
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(ue.fromString(e))}static fromName(e){return new R(ue.fromString(e).popFirst(5))}static empty(){return new R(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new ue(e.slice()))}}function om(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(s===1e9?new be(n+1,0):new be(n,s));return new qt(i,R.empty(),e)}function am(t){return new qt(t.readTime,t.key,-1)}class qt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new qt(H.min(),R.empty(),-1)}static max(){return new qt(H.max(),R.empty(),-1)}}function lm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=R.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const cm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class um{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==cm)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(i=>i?S.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new S((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new S((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ia{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ia.at=-1;/**
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
 */class hm{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Es{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Es&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function bl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ch(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Zi(t){return t==null}function Ii(t){return t===0&&1/t==-1/0}function dm(t){return typeof t=="number"&&Number.isInteger(t)&&!Ii(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class fm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new fm("Invalid base64 string: "+i):i}}(e);return new Ve(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const pm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(t){if(le(!!t),typeof t=="string"){let e=0;const n=pm.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
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
 */function uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hh(t){const e=t.mapValue.fields.__previous_value__;return uh(e)?hh(e):e}function _s(t){const e=jt(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */const si={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ln(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uh(t)?4:gm(t)?9007199254740991:10:U()}function yt(t,e){if(t===e)return!0;const n=ln(t);if(n!==ln(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _s(t).isEqual(_s(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=jt(s.timestampValue),o=jt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=me(s.doubleValue),o=me(i.doubleValue);return r===o?Ii(r)===Ii(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ln(t.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(bl(r)!==bl(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!yt(r[a],o[a])))return!1;return!0}(t,e);default:return U()}}function Ts(t,e){return(t.values||[]).find(n=>yt(n,e))!==void 0}function xn(t,e){if(t===e)return 0;const n=ln(t),s=ln(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=me(i.integerValue||i.doubleValue),a=me(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return El(t.timestampValue,e.timestampValue);case 4:return El(_s(t),_s(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Mn(i),a=Mn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ie(o[l],a[l]);if(c!==0)return c}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ie(me(i.latitude),me(r.latitude));return o!==0?o:ie(me(i.longitude),me(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=xn(o[l],a[l]);if(c)return c}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===si.mapValue&&r===si.mapValue)return 0;if(i===si.mapValue)return 1;if(r===si.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ie(a[u],c[u]);if(h!==0)return h;const d=xn(o[a[u]],l[c[u]]);if(d!==0)return d}return ie(a.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function El(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=jt(t),s=jt(e),i=ie(n.seconds,s.seconds);return i!==0?i:ie(n.nanos,s.nanos)}function Bn(t){return ho(t)}function ho(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=jt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,R.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ho(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ho(s.fields[a])}`;return r+"}"}(t.mapValue):U();var e,n}function _l(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fo(t){return!!t&&"integerValue"in t}function ra(t){return!!t&&"arrayValue"in t}function Tl(t){return!!t&&"nullValue"in t}function Cl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ci(t){return!!t&&"mapValue"in t}function rs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=rs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ai{constructor(e,n){this.position=e,this.inclusive=n}}function Sl(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=R.comparator(R.fromName(o.referenceValue),n.key):s=xn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Il(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dh{}class ye extends dh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ym(e,n,s):n==="array-contains"?new bm(e,s):n==="in"?new Em(e,s):n==="not-in"?new _m(e,s):n==="array-contains-any"?new Tm(e,s):new ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new vm(e,s):new wm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xn(n,this.value)):n!==null&&ln(this.value)===ln(n)&&this.matchesComparison(xn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dt extends dh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new dt(e,n)}matches(e){return fh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function fh(t){return t.op==="and"}function ph(t){return mm(t)&&fh(t)}function mm(t){for(const e of t.filters)if(e instanceof dt)return!1;return!0}function po(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+Bn(t.value);if(ph(t))return t.filters.map(e=>po(e)).join(",");{const e=t.filters.map(n=>po(n)).join(",");return`${t.op}(${e})`}}function gh(t,e){return t instanceof ye?function(n,s){return s instanceof ye&&n.op===s.op&&n.field.isEqual(s.field)&&yt(n.value,s.value)}(t,e):t instanceof dt?function(n,s){return s instanceof dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&gh(r,s.filters[o]),!0):!1}(t,e):void U()}function mh(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Bn(e.value)}`}(t):t instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(mh).join(" ,")+"}"}(t):"Filter"}class ym extends ye{constructor(e,n,s){super(e,n,s),this.key=R.fromName(s.referenceValue)}matches(e){const n=R.comparator(e.key,this.key);return this.matchesComparison(n)}}class vm extends ye{constructor(e,n){super(e,"in",n),this.keys=yh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wm extends ye{constructor(e,n){super(e,"not-in",n),this.keys=yh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>R.fromName(s.referenceValue))}class bm extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ra(n)&&Ts(n.arrayValue,this.value)}}class Em extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ts(this.value.arrayValue,n)}}class _m extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ts(this.value.arrayValue,n)}}class Tm extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ra(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ts(this.value.arrayValue,s))}}/**
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
 */class In{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _e{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ii(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ii(this.root,e,this.comparator,!1)}getReverseIterator(){return new ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ii(this.root,e,this.comparator,!0)}}class ii{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ke.RED,this.left=i??ke.EMPTY,this.right=r??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(e){return new Al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ze{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Ze([])}unionWith(e){let n=new Ee(Me.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ze(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ci(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(n)}setAll(e){let n=Me.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=rs(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ci(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ci(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){fn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new We(rs(this.value))}}function vh(t){const e=[];return fn(t.fields,(n,s)=>{const i=new Me([n]);if(ci(s)){const r=vh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ze(e)}/**
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
 */class Le{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Le(e,0,H.min(),H.min(),H.min(),We.empty(),0)}static newFoundDocument(e,n,s,i){return new Le(e,1,n,H.min(),s,i,0)}static newNoDocument(e,n){return new Le(e,2,n,H.min(),H.min(),We.empty(),0)}static newUnknownDocument(e,n){return new Le(e,3,n,H.min(),H.min(),We.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function kl(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Sm(t,e,n,s,i,r,o)}function oa(t){const e=z(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>po(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Zi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bn(s)).join(",")),e._t=n}return e._t}function aa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Il(t.startAt,e.startAt)&&Il(t.endAt,e.endAt)}function go(t){return R.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Kn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Im(t,e,n,s,i,r,o,a){return new Kn(t,e,n,s,i,r,o,a)}function la(t){return new Kn(t)}function Dl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ca(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function er(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function wh(t){return t.collectionGroup!==null}function An(t){const e=z(t);if(e.wt===null){e.wt=[];const n=er(e),s=ca(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new In(n)),e.wt.push(new In(Me.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new In(Me.keyField(),r))}}}return e.wt}function Pt(t){const e=z(t);if(!e.gt)if(e.limitType==="F")e.gt=kl(e.path,e.collectionGroup,An(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of An(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new In(r.field,o))}const s=e.endAt?new Ai(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ai(e.startAt.position,e.startAt.inclusive):null;e.gt=kl(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function mo(t,e){e.getFirstInequalityField(),er(t);const n=t.filters.concat([e]);return new Kn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yo(t,e,n){return new Kn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tr(t,e){return aa(Pt(t),Pt(e))&&t.limitType===e.limitType}function bh(t){return`${oa(Pt(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>mh(s)).join(", ")}]`),Zi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bn(s)).join(",")),`Target(${n})`}(Pt(t))}; limitType=${t.limitType})`}function nr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):R.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of An(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Sl(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,An(n),s)||n.endAt&&!function(i,r,o){const a=Sl(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,An(n),s))}(t,e)}function Am(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Eh(t){return(e,n)=>{let s=!1;for(const i of An(t)){const r=km(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function km(t,e,n){const s=t.field.isKeyField()?R.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?xn(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return U()}}/**
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
 */function _h(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function Th(t){return{integerValue:""+t}}function Dm(t,e){return dm(e)?Th(e):_h(t,e)}/**
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
 */class sr{constructor(){this._=void 0}}function Pm(t,e,n){return t instanceof ki?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Cs?Sh(t,e):t instanceof Ss?Ih(t,e):function(s,i){const r=Ch(s,i),o=Pl(r)+Pl(s.It);return fo(r)&&fo(s.It)?Th(o):_h(s.Tt,o)}(t,e)}function Nm(t,e,n){return t instanceof Cs?Sh(t,e):t instanceof Ss?Ih(t,e):n}function Ch(t,e){return t instanceof Di?fo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ki extends sr{}class Cs extends sr{constructor(e){super(),this.elements=e}}function Sh(t,e){const n=Ah(e);for(const s of t.elements)n.some(i=>yt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ss extends sr{constructor(e){super(),this.elements=e}}function Ih(t,e){let n=Ah(e);for(const s of t.elements)n=n.filter(i=>!yt(i,s));return{arrayValue:{values:n}}}class Di extends sr{constructor(e,n){super(),this.Tt=e,this.It=n}}function Pl(t){return me(t.integerValue||t.doubleValue)}function Ah(t){return ra(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Om(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Cs&&s instanceof Cs||n instanceof Ss&&s instanceof Ss?Ln(n.elements,s.elements,yt):n instanceof Di&&s instanceof Di?yt(n.It,s.It):n instanceof ki&&s instanceof ki}(t.transform,e.transform)}class Rm{constructor(e,n){this.version=e,this.transformResults=n}}class rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ui(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ir{}function kh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ua(t.key,rt.none()):new qs(t.key,t.data,rt.none());{const n=t.data,s=We.empty();let i=new Ee(Me.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Wt(t.key,s,new Ze(i.toArray()),rt.none())}}function Lm(t,e,n){t instanceof qs?function(s,i,r){const o=s.value.clone(),a=Ol(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Wt?function(s,i,r){if(!ui(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ol(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Dh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function os(t,e,n,s){return t instanceof qs?function(i,r,o,a){if(!ui(i.precondition,r))return o;const l=i.value.clone(),c=Rl(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Wt?function(i,r,o,a){if(!ui(i.precondition,r))return o;const l=Rl(i.fieldTransforms,a,r),c=r.data;return c.setAll(Dh(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ui(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Mm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Ch(s.transform,i||null);r!=null&&(n===null&&(n=We.empty()),n.set(s.field,r))}return n||null}function Nl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ln(n,s,(i,r)=>Om(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qs extends ir{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wt extends ir{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Dh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ol(t,e,n){const s=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Nm(o,a,n[i]))}return s}function Rl(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Pm(r,o,e))}return s}class ua extends ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xm extends ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bm{constructor(e){this.count=e}}/**
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
 */var ge,X;function Fm(t){switch(t){default:return U();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Ph(t){if(t===void 0)return Dt("GRPC error has no .code"),E.UNKNOWN;switch(t){case ge.OK:return E.OK;case ge.CANCELLED:return E.CANCELLED;case ge.UNKNOWN:return E.UNKNOWN;case ge.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ge.INTERNAL:return E.INTERNAL;case ge.UNAVAILABLE:return E.UNAVAILABLE;case ge.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ge.NOT_FOUND:return E.NOT_FOUND;case ge.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ge.ABORTED:return E.ABORTED;case ge.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ge.DATA_LOSS:return E.DATA_LOSS;default:return U()}}(X=ge||(ge={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ch(this.inner)}size(){return this.innerSize}}/**
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
 */const Vm=new _e(R.comparator);function Nt(){return Vm}const Nh=new _e(R.comparator);function ts(...t){let e=Nh;for(const n of t)e=e.insert(n.key,n);return e}function Oh(t){let e=Nh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function nn(){return as()}function Rh(){return as()}function as(){return new zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Um=new _e(R.comparator),qm=new Ee(R.comparator);function Y(...t){let e=qm;for(const n of t)e=e.add(n);return e}const jm=new Ee(ie);function Lh(){return jm}/**
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
 */class rr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,js.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rr(H.min(),i,Lh(),Nt(),Y())}}class js{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new js(s,n,Y(),Y(),Y())}}/**
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
 */class hi{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Mh{constructor(e,n){this.targetId=e,this.Rt=n}}class xh{constructor(e,n,s=Ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ll{constructor(){this.bt=0,this.vt=xl(),this.Pt=Ve.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=Y(),n=Y(),s=Y();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:U()}}),new js(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=xl()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class $m{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Nt(),this.Kt=Ml(),this.Gt=new Ee(ie)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(go(r))if(s===0){const o=new R(r.path);this.zt(n,o,Le.newNoDocument(o,H.min()))}else le(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&go(a.target)){const l=new R(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Le.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=Y();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new rr(e,n,this.Gt,this.Ut,s);return this.Ut=Nt(),this.Kt=Ml(),this.Gt=new Ee(ie),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Ll,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ee(ie),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Ll),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Ml(){return new _e(R.comparator)}function xl(){return new _e(R.comparator)}/**
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
 */const Hm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Km=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zm=(()=>({and:"AND",or:"OR"}))();class Gm{constructor(e,n){this.databaseId=e,this.yt=n}}function Pi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Wm(t,e){return Pi(t,e.toTimestamp())}function mt(t){return le(!!t),H.fromTimestamp(function(e){const n=jt(e);return new be(n.seconds,n.nanos)}(t))}function ha(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Fh(t){const e=ue.fromString(t);return le(jh(e)),e}function wo(t,e){return ha(t.databaseId,e.path)}function Br(t,e){const n=Fh(e);if(n.get(1)!==t.databaseId.projectId)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new R(Vh(n))}function bo(t,e){return ha(t.databaseId,e)}function Qm(t){const e=Fh(t);return e.length===4?ue.emptyPath():Vh(e)}function Eo(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vh(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bl(t,e,n){return{name:wo(t,e),fields:n.value.mapValue.fields}}function Ym(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(le(c===void 0||typeof c=="string"),Ve.fromBase64String(c||"")):(le(c===void 0||c instanceof Uint8Array),Ve.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?E.UNKNOWN:Ph(l.code);return new P(c,l.message||"")}(o);n=new xh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Br(t,s.document.name),r=mt(s.document.updateTime),o=s.document.createTime?mt(s.document.createTime):H.min(),a=new We({mapValue:{fields:s.document.fields}}),l=Le.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new hi(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Br(t,s.document),r=s.readTime?mt(s.readTime):H.min(),o=Le.newNoDocument(i,r),a=s.removedTargetIds||[];n=new hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Br(t,s.document),r=s.removedTargetIds||[];n=new hi([],r,i,null)}else{if(!("filter"in e))return U();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Bm(i),o=s.targetId;n=new Mh(o,r)}}return n}function Xm(t,e){let n;if(e instanceof qs)n={update:Bl(t,e.key,e.value)};else if(e instanceof ua)n={delete:wo(t,e.key)};else if(e instanceof Wt)n={update:Bl(t,e.key,e.data),updateMask:oy(e.fieldMask)};else{if(!(e instanceof xm))return U();n={verify:wo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ki)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Cs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ss)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Di)return{fieldPath:r.field.canonicalString(),increment:o.It};throw U()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Wm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function Jm(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?mt(s.updateTime):mt(i);return r.isEqual(H.min())&&(r=mt(i)),new Rm(r,s.transformResults||[])}(n,e))):[]}function Zm(t,e){return{documents:[bo(t,e.path)]}}function ey(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=bo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return qh(dt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:_n(u.field),direction:sy(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||Zi(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ty(t){let e=Qm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){le(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Uh(u);return h instanceof dt&&ph(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new In(Tn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Zi(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ai(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ai(d,h)}(n.endAt)),Im(e,i,o,r,a,"F",l,c)}function ny(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Uh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Tn(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Tn(e.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tn(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Tn(e.unaryFilter.field);return ye.create(r,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(Tn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return dt.create(e.compositeFilter.filters.map(n=>Uh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function sy(t){return Hm[t]}function iy(t){return Km[t]}function ry(t){return zm[t]}function _n(t){return{fieldPath:t.canonicalString()}}function Tn(t){return Me.fromServerFormat(t.fieldPath)}function qh(t){return t instanceof ye?function(e){if(e.op==="=="){if(Cl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NAN"}};if(Tl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Cl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NAN"}};if(Tl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(e.field),op:iy(e.op),value:e.value}}}(t):t instanceof dt?function(e){const n=e.getFilters().map(s=>qh(s));return n.length===1?n[0]:{compositeFilter:{op:ry(e.op),filters:n}}}(t):U()}function oy(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ay{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Lm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=os(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=os(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Rh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=kh(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(n,s)=>Nl(n,s))&&Ln(this.baseMutations,e.baseMutations,(n,s)=>Nl(n,s))}}class da{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){le(e.mutations.length===s.length);let i=Um;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new da(e,n,s,i)}}/**
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
 */class ly{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rn{constructor(e,n,s,i,r=H.min(),o=H.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class cy{constructor(e){this.oe=e}}function uy(t){const e=ty({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yo(e,e.limit,"L"):e}/**
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
 */class hy{constructor(){this.Ze=new dy}addToCollectionParentIndex(e,n){return this.Ze.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(qt.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class dy{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Ee(ue.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ee(ue.comparator)).toArray()}}/**
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
 */class Fn{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Fn(0)}static Sn(){return new Fn(-1)}}/**
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
 */class fy{constructor(){this.changes=new zn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class py{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gy{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&os(s.mutation,i,Ze.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const i=nn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ts();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=nn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Nt();const o=as(),a=as();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Wt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),os(u.mutation,c,u.mutation.getFieldMask(),be.now())):o.set(c.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new py(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=as();let i=new _e((o,a)=>o-a),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ze.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Rh();u.forEach(d=>{if(!r.has(d)){const p=kh(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return R.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):S.resolve(nn());let a=-1,l=r;return o.next(c=>S.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Y())).next(u=>({batchId:a,changes:Oh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new R(n)).next(s=>{let i=ts();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ts();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(c,u){return new Kn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Le.newInvalidDocument(c)))});let o=ts();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&os(c.mutation,l,Ze.empty(),be.now()),nr(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class my{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return S.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:mt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:uy(s.bundledQuery),readTime:mt(s.readTime)}}(n)),S.resolve()}}/**
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
 */class yy{constructor(){this.overlays=new _e(R.comparator),this.ss=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=nn();return S.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const i=nn(),r=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new _e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=nn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=nn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return S.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ly(n,s));let r=this.ss.get(n);r===void 0&&(r=Y(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
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
 */class fa{constructor(){this.rs=new Ee(Te.os),this.us=new Ee(Te.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Te(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Te(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new R(new ue([])),s=new Te(n,e),i=new Te(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new R(new ue([])),s=new Te(n,e),i=new Te(n,e+1);let r=Y();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Te(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return R.comparator(e.key,n.key)||ie(e.gs,n.gs)}static cs(e,n){return ie(e.gs,n.gs)||R.comparator(e.key,n.key)}}/**
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
 */class vy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ee(Te.os)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ay(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Te(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ee(ie);return n.forEach(i=>{const r=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),S.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;R.isDocumentKey(r)||(r=r.child(""));const o=new Te(new R(r),0);let a=new Ee(ie);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),S.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return S.forEach(n.mutations,i=>{const r=new Te(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Te(n,0),i=this.ps.firstAfterOrEqual(s);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wy{constructor(e){this.Rs=e,this.docs=new _e(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(e,n){let s=Nt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Le.newInvalidDocument(i))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Nt();const o=n.path,a=new R(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lm(am(u),s)<=0||(i.has(u.key)||nr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,i){U()}bs(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new by(this)}getSize(e){return S.resolve(this.size)}}class by extends fy{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class Ey{constructor(e){this.persistence=e,this.vs=new zn(n=>oa(n),aa),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new fa,this.targetCount=0,this.Ss=Fn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),S.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Fn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.xn(n),S.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(r).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Vs.containsKey(n))}}/**
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
 */class _y{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ia(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Ey(this),this.indexManager=new hy,this.remoteDocumentCache=function(s){return new wy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new cy(n),this.Os=new my(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new vy(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const i=new Ty(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return S.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Ty extends um{constructor(e){super(),this.currentSequenceNumber=e}}class pa{constructor(e){this.persistence=e,this.Bs=new fa,this.Ls=null}static qs(e){return new pa(e)}get Us(){if(this.Ls)return this.Ls;throw U()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),S.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Us,s=>{const i=R.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,H.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return S.or([()=>S.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
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
 */class ga{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=Y(),i=Y();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ga(e,n.fromCache,s,i)}}/**
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
 */class Cy{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Dl(n))return S.resolve(null);let s=Pt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yo(n,null,"F"),s=Pt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Y(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,yo(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return Dl(n)||i.isEqual(H.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(wl()<=se.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vo(n)),this.qi(e,o,n,om(i,-1)))})}Bi(e,n){let s=new Ee(Eh(e));return n.forEach((i,r)=>{nr(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return wl()<=se.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",vo(n)),this.Oi.getDocumentsMatchingQuery(e,n,qt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Sy{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new _e(ie),this.Gi=new zn(r=>oa(r),aa),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gy(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Iy(t,e,n,s){return new Sy(t,e,n,s)}async function $h(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Y();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ay(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>c.getEntry(a,p)).next(m=>{const g=l.docVersions.get(p);le(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Y();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Hh(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function ky(t,e){const n=z(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ve.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,g,w){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let l=Nt(),c=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Dy(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual(H.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function Dy(t,e,n){let s=Y(),i=Y();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Nt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Py(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ny(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,S.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new rn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function _o(t,e,n){const s=z(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Us(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Fl(t,e,n){const s=z(t);let i=H.min(),r=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=z(a),h=u.Gi.get(c);return h!==void 0?S.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,Pt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?r:Y())).next(a=>(Oy(s,Am(e),a),{documents:a,Yi:r})))}function Oy(t,e,n){let s=t.Qi.get(e)||H.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Vl{constructor(){this.activeTargetIds=Lh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ry{constructor(){this.Ur=new Vl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Vl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ly{Gr(e){}shutdown(){}}/**
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
 */class Ul{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const My={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xy{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */class By extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);O("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw uo("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=My[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Yg;a.setWithCredentials(!0),a.listenOnce(Gg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xr.NO_ERROR:const c=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(c)),r(c);break;case xr.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new P(E.DEADLINE_EXCEEDED,"Request time out"));break;case xr.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(g)>=0?g:E.UNKNOWN}(d.status);o(new P(p,d.message))}else o(new P(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(E.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Kg(),o=zg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Qg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new xy({Yr:m=>{h?O("Connection","Not sending because WebChannel is closed:",m):(u||(O("Connection","Opening WebChannel transport."),c.open(),u=!0),O("Connection","WebChannel sending:",m),c.send(m))},Zr:()=>c.close()}),p=(m,g,w)=>{m.listen(g,T=>{try{w(T)}catch(b){setTimeout(()=>{throw b},0)}})};return p(c,ni.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),p(c,ni.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.oo())}),p(c,ni.EventType.ERROR,m=>{h||(h=!0,uo("Connection","WebChannel transport errored:",m),d.oo(new P(E.UNAVAILABLE,"The operation could not be completed")))}),p(c,ni.EventType.MESSAGE,m=>{var g;if(!h){const w=m.data[0];le(!!w);const T=w,b=T.error||((g=T[0])===null||g===void 0?void 0:g.error);if(b){O("Connection","WebChannel received error:",b);const A=b.status;let D=function(K){const te=ge[K];if(te!==void 0)return Ph(te)}(A),M=b.message;D===void 0&&(D=E.INTERNAL,M="Unknown error status: "+A+" with message "+b.message),h=!0,d.oo(new P(D,M)),c.close()}else O("Connection","WebChannel received:",w),d.uo(w)}}),p(o,Wg.STAT_EVENT,m=>{m.stat===yl.PROXY?O("Connection","Detected buffering proxy"):m.stat===yl.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Fr(){return typeof document<"u"?document:null}/**
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
 */function or(t){return new Gm(t,!0)}/**
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
 */class Kh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
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
 */class zh{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Kh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new P(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fy extends zh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Ym(this.Tt,e),s=function(i){if(!("targetChange"in i))return H.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?H.min():r.readTime?mt(r.readTime):H.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Eo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=go(a)?{documents:Zm(i,a)}:{query:ey(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Bh(i,r.resumeToken):r.snapshotVersion.compareTo(H.min())>0&&(o.readTime=Pi(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=ny(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Eo(this.Tt),n.removeTarget=e,this.qo(n)}}class Vy extends zh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Jm(e.writeResults,e.commitTime),s=mt(e.commitTime);return this.listener.eu(s,n)}return le(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Eo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Xm(this.Tt,s))};this.qo(n)}}/**
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
 */class Uy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(E.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(E.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class qy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Dt(n),this.cu=!1):O("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class jy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{pn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.mu.add(4),await $s(l),l.pu.set("Unknown"),l.mu.delete(4),await ar(l)}(this))})}),this.pu=new qy(s,i)}}async function ar(t){if(pn(t))for(const e of t.gu)await e(!0)}async function $s(t){for(const e of t.gu)await e(!1)}function Gh(t,e){const n=z(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),va(n)?ya(n):Gn(n).Mo()&&ma(n,e))}function Wh(t,e){const n=z(t),s=Gn(n);n.wu.delete(e),s.Mo()&&Qh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():pn(n)&&n.pu.set("Unknown"))}function ma(t,e){t.Iu.Ft(e.targetId),Gn(t).Jo(e)}function Qh(t,e){t.Iu.Ft(e),Gn(t).Yo(e)}function ya(t){t.Iu=new $m({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Gn(t).start(),t.pu.au()}function va(t){return pn(t)&&!Gn(t).Oo()&&t.wu.size>0}function pn(t){return z(t).mu.size===0}function Yh(t){t.Iu=void 0}async function $y(t){t.wu.forEach((e,n)=>{ma(t,e)})}async function Hy(t,e){Yh(t),va(t)?(t.pu.fu(e),ya(t)):t.pu.set("Unknown")}async function Ky(t,e,n){if(t.pu.set("Online"),e instanceof xh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ni(t,s)}else if(e instanceof hi?t.Iu.Qt(e):e instanceof Mh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(H.min()))try{const s=await Hh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Ve.EMPTY_BYTE_STRING,l.snapshotVersion)),Qh(i,a);const c=new rn(l.target,a,1,l.sequenceNumber);ma(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Ni(t,s)}}async function Ni(t,e,n){if(!Us(e))throw e;t.mu.add(1),await $s(t),t.pu.set("Offline"),n||(n=()=>Hh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ar(t)})}function Xh(t,e){return e().catch(n=>Ni(t,n,e))}async function lr(t){const e=z(t),n=$t(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;zy(e);)try{const i=await Py(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Gy(e,i)}catch(i){await Ni(e,i)}Jh(e)&&Zh(e)}function zy(t){return pn(t)&&t._u.length<10}function Gy(t,e){t._u.push(e);const n=$t(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Jh(t){return pn(t)&&!$t(t).Oo()&&t._u.length>0}function Zh(t){$t(t).start()}async function Wy(t){$t(t).su()}async function Qy(t){const e=$t(t);for(const n of t._u)e.tu(n.mutations)}async function Yy(t,e,n){const s=t._u.shift(),i=da.from(s,e,n);await Xh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lr(t)}async function Xy(t,e){e&&$t(t).Xo&&await async function(n,s){if(i=s.code,Fm(i)&&i!==E.ABORTED){const r=n._u.shift();$t(n).$o(),await Xh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await lr(n)}var i}(t,e),Jh(t)&&Zh(t)}async function ql(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=pn(n);n.mu.add(3),await $s(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ar(n)}async function Jy(t,e){const n=z(t);e?(n.mu.delete(2),await ar(n)):e||(n.mu.add(2),await $s(n),n.pu.set("Unknown"))}function Gn(t){return t.Tu||(t.Tu=function(e,n,s){const i=z(e);return i.ru(),new Fy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:$y.bind(null,t),no:Hy.bind(null,t),Ho:Ky.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),va(t)?ya(t):t.pu.set("Unknown")):(await t.Tu.stop(),Yh(t))})),t.Tu}function $t(t){return t.Eu||(t.Eu=function(e,n,s){const i=z(e);return i.ru(),new Vy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Wy.bind(null,t),no:Xy.bind(null,t),nu:Qy.bind(null,t),eu:Yy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await lr(t)):(await t.Eu.stop(),t._u.length>0&&(O("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class wa{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new wa(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ba(t,e){if(Dt("AsyncQueue",`${e}: ${t}`),Us(t))return new P(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class kn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||R.comparator(n.key,s.key):(n,s)=>R.comparator(n.key,s.key),this.keyedMap=ts(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new kn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof kn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new kn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class jl{constructor(){this.Au=new _e(R.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):U():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vn{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vn(e,n,kn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Zy{constructor(){this.bu=void 0,this.listeners=[]}}class ev{constructor(){this.queries=new zn(e=>bh(e),tr),this.onlineState="Unknown",this.vu=new Set}}async function ed(t,e){const n=z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Zy),i)try{r.bu=await n.onListen(s)}catch(o){const a=ba(o,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&Ea(n)}async function td(t,e){const n=z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function tv(t,e){const n=z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&Ea(n)}function nv(t,e,n){const s=z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ea(t){t.vu.forEach(e=>{e.next()})}class nd{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Vn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class sd{constructor(e){this.key=e}}class id{constructor(e){this.key=e}}class sv{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Y(),this.mutatedKeys=Y(),this.ju=Eh(e),this.zu=new kn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new jl,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=nr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?m!==g&&(s.track({type:3,doc:p}),w=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),w=!0,(l&&this.ju(p,l)>0||c&&this.ju(p,c)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),w=!0):d&&!p&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(p?(o=o.add(p),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return p(h)-p(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new Vn(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new jl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=Y(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new id(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new sd(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=Y();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Vn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class iv{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class rv{constructor(e){this.key=e,this.ic=!1}}class ov{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new zn(a=>bh(a),tr),this.uc=new Map,this.cc=new Set,this.ac=new _e(R.comparator),this.hc=new Map,this.lc=new fa,this.fc={},this.dc=new Map,this._c=Fn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function av(t,e){const n=yv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Ny(n.localStore,Pt(e));n.isPrimaryClient&&Gh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await lv(n,e,s,a==="current",o.resumeToken)}return i}async function lv(t,e,n,s,i){t.mc=(h,d,p)=>async function(m,g,w,T){let b=g.view.Hu(w);b.Li&&(b=await Fl(m.localStore,g.query,!1).then(({documents:M})=>g.view.Hu(M,b)));const A=T&&T.targetChanges.get(g.targetId),D=g.view.applyChanges(b,m.isPrimaryClient,A);return Hl(m,g.targetId,D.tc),D.snapshot}(t,h,d,p);const r=await Fl(t.localStore,e,!0),o=new sv(e,r.Yi),a=o.Hu(r.documents),l=js.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Hl(t,n,c.tc);const u=new iv(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function cv(t,e){const n=z(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!tr(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wh(n.remoteStore,s.targetId),To(n,s.targetId)}).catch(Vs)):(To(n,s.targetId),await _o(n.localStore,s.targetId,!0))}async function uv(t,e,n){const s=vv(t);try{const i=await function(r,o){const a=z(r),l=be.now(),c=o.reduce((d,p)=>d.add(p.key),Y());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Nt(),m=Y();return a.ji.getEntries(d,c).next(g=>{p=g,p.forEach((w,T)=>{T.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const w=[];for(const T of o){const b=Mm(T,u.get(T.key).overlayedDocument);b!=null&&w.push(new Wt(T.key,b,vh(b.value.mapValue),rt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(g=>{h=g;const w=g.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,g.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Oh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new _e(ie)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Hs(s,i.changes),await lr(s.remoteStore)}catch(i){const r=ba(i,"Failed to persist write");n.reject(r)}}async function rd(t,e){const n=z(t);try{const s=await ky(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?le(o.ic):i.removedDocuments.size>0&&(le(o.ic),o.ic=!1))}),await Hs(n,s,e)}catch(s){await Vs(s)}}function $l(t,e,n){const s=z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=z(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&Ea(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hv(t,e,n){const s=z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new _e(R.comparator);o=o.insert(r,Le.newNoDocument(r,H.min()));const a=Y().add(r),l=new rr(H.min(),new Map,new Ee(ie),o,a);await rd(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),_a(s)}else await _o(s.localStore,e,!1).then(()=>To(s,e,n)).catch(Vs)}async function dv(t,e){const n=z(t),s=e.batch.batchId;try{const i=await Ay(n.localStore,e);ad(n,s,null),od(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hs(n,i)}catch(i){await Vs(i)}}async function fv(t,e,n){const s=z(t);try{const i=await function(r,o){const a=z(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(le(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);ad(s,e,n),od(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Hs(s,i)}catch(i){await Vs(i)}}function od(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function ad(t,e,n){const s=z(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function To(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||ld(t,s)})}function ld(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Wh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),_a(t))}function Hl(t,e,n){for(const s of n)s instanceof sd?(t.lc.addReference(s.key,e),pv(t,s)):s instanceof id?(O("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||ld(t,s.key)):U()}function pv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.cc.add(s),_a(t))}function _a(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new R(ue.fromString(e)),s=t._c.next();t.hc.set(s,new rv(n)),t.ac=t.ac.insert(n,s),Gh(t.remoteStore,new rn(Pt(la(n.path)),s,2,ia.at))}}async function Hs(t,e,n){const s=z(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ga.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=z(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(l,h=>S.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Us(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);c.Ki=c.Ki.insert(h,m)}}}(s.localStore,r))}async function gv(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await $h(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new P(E.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hs(n,s.Wi)}}function mv(t,e){const n=z(t),s=n.hc.get(e);if(s&&s.ic)return Y().add(s.key);{let i=Y();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function yv(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hv.bind(null,e),e.rc.Ho=tv.bind(null,e.eventManager),e.rc.gc=nv.bind(null,e.eventManager),e}function vv(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fv.bind(null,e),e}class wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=or(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Iy(this.persistence,new Cy,e.initialUser,this.Tt)}Tc(e){return new _y(pa.qs,this.Tt)}Ic(e){return new Ry}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$l(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gv.bind(null,this.syncEngine),await Jy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ev}createDatastore(e){const n=or(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new By(i));var i;return function(r,o,a,l){return new Uy(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>$l(this.syncEngine,a,0),o=Ul.C()?new Ul:new Ly,new jy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new ov(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);O("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await $s(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class cd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Ev{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Re.UNAUTHENTICATED,this.clientId=lh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ba(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function _v(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await $h(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Tv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Cv(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ql(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ql(e.remoteStore,r)),t.onlineComponents=e}async function Cv(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await _v(t,new wv)),t.offlineComponents}async function ud(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await Tv(t,new bv)),t.onlineComponents}function Sv(t){return ud(t).then(e=>e.syncEngine)}async function Co(t){const e=await ud(t),n=e.eventManager;return n.onListen=av.bind(null,e.syncEngine),n.onUnlisten=cv.bind(null,e.syncEngine),n}function Iv(t,e,n={}){const s=new Ft;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new cd({next:h=>{r.enqueueAndForget(()=>td(i,u)),h.fromCache&&a.source==="server"?l.reject(new P(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new nd(o,c,{includeMetadataChanges:!0,Ou:!0});return ed(i,u)}(await Co(t),t.asyncQueue,e,n,s)),s.promise}const Kl=new Map;/**
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
 */function hd(t,e,n){if(!n)throw new P(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Av(t,e,n,s){if(e===!0&&s===!0)throw new P(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zl(t){if(!R.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(R.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cr(t);throw new P(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Av("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ur{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xg;switch(n.type){case"gapi":const s=n.client;return new tm(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Kl.get(e);n&&(O("ComponentProvider","Removing Datastore"),Kl.delete(e),n.terminate())}(this),Promise.resolve()}}function kv(t,e,n,s={}){var i;const r=(t=ot(t,ur))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&uo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Re.MOCK_USER;else{o=Wc(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new P(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Re(l)}t._authCredentials=new Jg(new ah(o,a))}}/**
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
 */class Ke{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class Qt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qt(this.firestore,e,this._query)}}class Vt extends Qt{constructor(e,n,s){super(e,n,la(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new R(e))}withConverter(e){return new Vt(this.firestore,e,this._path)}}function it(t,e,...n){if(t=ht(t),hd("collection","path",e),t instanceof ur){const s=ue.fromString(e,...n);return Gl(s),new Vt(t,null,s)}{if(!(t instanceof Ke||t instanceof Vt))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ue.fromString(e,...n));return Gl(s),new Vt(t.firestore,null,s)}}function Ct(t,e,...n){if(t=ht(t),arguments.length===1&&(e=lh.R()),hd("doc","path",e),t instanceof ur){const s=ue.fromString(e,...n);return zl(s),new Ke(t,null,new R(s))}{if(!(t instanceof Ke||t instanceof Vt))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ue.fromString(e,...n));return zl(s),new Ke(t.firestore,t instanceof Vt?t.converter:null,new R(s))}}/**
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
 */class Dv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Kh(this,"async_queue_retry"),this.Hc=()=>{const n=Fr();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Ft;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Us(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=wa.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&U()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Ql(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ht extends ur{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Dv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dd(this),this._firestoreClient.terminate()}}function Pv(t,e){const n=typeof t=="object"?t:nu(),s=typeof t=="string"?t:e||"(default)",i=Zc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Gc("firestore");r&&kv(i,...r)}return i}function Ta(t){return t._firestoreClient||dd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dd(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new hm(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ev(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Ve.fromBase64String(e))}catch(n){throw new P(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ca{constructor(e){this._methodName=e}}/**
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
 */class Sa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const Nv=/^__.*__$/;class Ov{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Wt(e,this.data,this.fieldMask,n,this.fieldTransforms):new qs(e,this.data,n,this.fieldTransforms)}}class fd{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Wt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Ia{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ia(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Oi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(pd(this.ra)&&Nv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Rv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||or(e)}wa(e,n,s,i=!1){return new Ia({ra:e,methodName:n,_a:s,path:Me.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function dr(t){const e=t._freezeSettings(),n=or(t._databaseId);return new Rv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gd(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Aa("Data must be an object, but it was:",o,s);const a=md(s,o);let l,c;if(r.merge)l=new Ze(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=So(e,h,n);if(!o.contains(d))throw new P(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vd(u,d)||u.push(d)}l=new Ze(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Ov(new We(a),l,c)}class fr extends Ca{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fr}}function Lv(t,e,n,s){const i=t.wa(1,e,n);Aa("Data must be an object, but it was:",i,s);const r=[],o=We.empty();fn(s,(l,c)=>{const u=ka(e,l,n);c=ht(c);const h=i.ha(u);if(c instanceof fr)r.push(u);else{const d=Ks(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ze(r);return new fd(o,a,i.fieldTransforms)}function Mv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[So(e,s,n)],l=[i];if(r.length%2!=0)throw new P(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(So(e,r[d])),l.push(r[d+1]);const c=[],u=We.empty();for(let d=a.length-1;d>=0;--d)if(!vd(c,a[d])){const p=a[d];let m=l[d];m=ht(m);const g=o.ha(p);if(m instanceof fr)c.push(p);else{const w=Ks(m,g);w!=null&&(c.push(p),u.set(p,w))}}const h=new Ze(c);return new fd(u,h,o.fieldTransforms)}function xv(t,e,n,s=!1){return Ks(n,t.wa(s?4:3,e))}function Ks(t,e){if(yd(t=ht(t)))return Aa("Unsupported field value:",e,t),md(t,e);if(t instanceof Ca)return function(n,s){if(!pd(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ks(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Dm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:Pi(s.Tt,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pi(s.Tt,i)}}if(n instanceof Sa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Un)return{bytesValue:Bh(s.Tt,n._byteString)};if(n instanceof Ke){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ha(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${cr(n)}`)}(t,e)}function md(t,e){const n={};return ch(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fn(t,(s,i)=>{const r=Ks(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function yd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Sa||t instanceof Un||t instanceof Ke||t instanceof Ca)}function Aa(t,e,n){if(!yd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=cr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function So(t,e,n){if((e=ht(e))instanceof hr)return e._internalPath;if(typeof e=="string")return ka(t,e);throw Oi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bv=new RegExp("[~\\*/\\[\\]]");function ka(t,e,n){if(e.search(Bv)>=0)throw Oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hr(...e.split("."))._internalPath}catch{throw Oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new P(E.INVALID_ARGUMENT,a+t+l)}function vd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fv extends wd{data(){return super.data()}}function pr(t,e){return typeof e=="string"?ka(t,e):e instanceof hr?e._internalPath:e._delegate._internalPath}/**
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
 */function bd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Da{}class Ed extends Da{}function ls(t,e,...n){let s=[];e instanceof Da&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Pa).length,o=i.filter(a=>a instanceof gr).length;if(r>1||r>0&&o>0)throw new P(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class gr extends Ed{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new gr(e,n,s)}_apply(e){const n=this._parse(e);return _d(e._query,n),new Qt(e.firestore,e.converter,mo(e._query,n))}_parse(e){const n=dr(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new P(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Xl(u,c);const d=[];for(const p of u)d.push(Yl(a,i,p));h={arrayValue:{values:d}}}else h=Yl(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Xl(u,c),h=xv(o,r,u,c==="in"||c==="not-in");return ye.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Io(t,e,n){const s=e,i=pr("where",t);return gr._create(i,s,n)}class Pa extends Da{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pa(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)_d(r,a),r=mo(r,a)}(e._query,n),new Qt(e.firestore,e.converter,mo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Na extends Ed{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Na(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new P(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new P(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new In(i,r);return function(a,l){if(ca(a)===null){const c=er(a);c!==null&&Td(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new Qt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Kn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Vr(t,e="asc"){const n=e,s=pr("orderBy",t);return Na._create(s,n)}function Yl(t,e,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new P(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wh(e)&&n.indexOf("/")!==-1)throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ue.fromString(n));if(!R.isDocumentKey(s))throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _l(t,new R(s))}if(n instanceof Ke)return _l(t,n._key);throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cr(n)}.`)}function Xl(t,e){if(!Array.isArray(t)||t.length===0)throw new P(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _d(t,e){if(e.isInequality()){const s=er(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new P(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=ca(t);r!==null&&Td(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Td(t,e,n){if(!n.isEqual(e))throw new P(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Vv{convertValue(e,n="none"){switch(ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const s={};return fn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Sa(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_s(e));default:return null}}convertTimestamp(e){const n=jt(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ue.fromString(e);le(jh(s));const i=new Es(s.get(1),s.get(3)),r=new R(s.popFirst(5));return i.isEqual(n)||Dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Cd(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sd extends wd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(pr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class di extends Sd{data(e={}){return super.data(e)}}class Id{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ns(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new di(this._firestore,this._userDataWriter,s.key,s,new ns(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new di(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ns(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new di(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ns(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Uv(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Uv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class Oa extends Vv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function Ad(t){t=ot(t,Qt);const e=ot(t.firestore,Ht),n=Ta(e),s=new Oa(e);return bd(t._query),Iv(n,t._query).then(i=>new Id(e,s,t,i))}function Ur(t,e,n){t=ot(t,Ke);const s=ot(t.firestore,Ht),i=Cd(t.converter,e,n);return mr(s,[gd(dr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rt.none())])}function Ra(t,e,n,...s){t=ot(t,Ke);const i=ot(t.firestore,Ht),r=dr(i);let o;return o=typeof(e=ht(e))=="string"||e instanceof hr?Mv(r,"updateDoc",t._key,e,n,s):Lv(r,"updateDoc",t._key,e),mr(i,[o.toMutation(t._key,rt.exists(!0))])}function Ao(t){return mr(ot(t.firestore,Ht),[new ua(t._key,rt.none())])}function kd(t,e){const n=ot(t.firestore,Ht),s=Ct(t),i=Cd(t.converter,e);return mr(n,[gd(dr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,rt.exists(!1))]).then(()=>s)}function qr(t,...e){var n,s,i;t=ht(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ql(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ql(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Ke)c=ot(t.firestore,Ht),u=la(t._key.path),l={next:h=>{e[o]&&e[o](qv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ot(t,Qt);c=ot(h.firestore,Ht),u=h._query;const d=new Oa(c);l={next:p=>{e[o]&&e[o](new Id(c,d,h,p))},error:e[o+1],complete:e[o+2]},bd(t._query)}return function(h,d,p,m){const g=new cd(m),w=new nd(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>ed(await Co(h),w)),()=>{g.Pc(),h.asyncQueue.enqueueAndForget(async()=>td(await Co(h),w))}}(Ta(c),u,a,l)}function mr(t,e){return function(n,s){const i=new Ft;return n.asyncQueue.enqueueAndForget(async()=>uv(await Sv(n),s,i)),i.promise}(Ta(t),e)}function qv(t,e,n){const s=n.docs.get(e._key),i=new Oa(t);return new Sd(t,i,e._key,s,new ns(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Hn=n})(eu),fs(new On("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ht(new Zg(n.getProvider("auth-internal")),new sm(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Bt(vl,"3.8.4",t),Bt(vl,"3.8.4","esm2017")})();/**
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
 */const Dd="firebasestorage.googleapis.com",jv="storageBucket",$v=2*60*1e3,Hv=10*60*1e3;/**
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
 */class Et extends hn{constructor(e,n,s=0){super(jr(e),`Firebase Storage: ${n} (${jr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vt||(vt={}));function jr(t){return"storage/"+t}function Kv(){const t="An unknown error occurred, please check the error payload for server response.";return new Et(vt.UNKNOWN,t)}function zv(){return new Et(vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gv(){return new Et(vt.CANCELED,"User canceled the upload/download.")}function Wv(t){return new Et(vt.INVALID_URL,"Invalid URL '"+t+"'.")}function Qv(t){return new Et(vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jl(t){return new Et(vt.INVALID_ARGUMENT,t)}function Pd(){return new Et(vt.APP_DELETED,"The Firebase app was deleted.")}function Yv(t){return new Et(vt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ut.makeFromUrl(e,n)}catch{return new ut(e,"")}if(s.path==="")return s;throw Qv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},g=n===Dd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",T=new RegExp(`^https?://${g}/${i}/${w}`,"i"),A=[{regex:a,indices:l,postModify:r},{regex:p,indices:m,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<A.length;D++){const M=A[D],K=M.regex.exec(e);if(K){const te=K[M.indices.bucket];let oe=K[M.indices.path];oe||(oe=""),s=new ut(te,oe),M.postModify(s);break}}if(s==null)throw Wv(e);return s}}class Xv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Jv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){r&&clearTimeout(r)}function p(w,...T){if(c){d();return}if(w){d(),u.call(null,w,...T);return}if(l()||o){d(),u.call(null,w,...T);return}s<64&&(s*=2);let A;a===1?(a=2,A=0):A=(s+Math.random())*1e3,h(A)}let m=!1;function g(w){m||(m=!0,d(),!c&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function Zv(t){t(!1)}/**
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
 */function ew(t){return t!==void 0}function Zl(t,e,n,s){if(s<e)throw Jl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Jl(`Invalid value for '${t}'. Expected ${n} or less.`)}function tw(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ri||(Ri={}));/**
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
 */function nw(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class sw{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ri(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ri.NO_ERROR,l=r.getStatus();if(!a||nw(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ri.ABORT;s(!1,new ri(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ri(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ew(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Kv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Pd():Gv();o(l)}else{const l=zv();o(l)}};this.canceled_?n(!1,new ri(!1,null,!0)):this.backoffId_=Jv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Zv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ri{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function iw(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ow(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lw(t,e,n,s,i,r,o=!0){const a=tw(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return ow(c,e),iw(c,n),rw(c,r),aw(c,s),new sw(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function cw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function uw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Li{constructor(e,n){this._service=e,n instanceof ut?this._location=n:this._location=ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Li(e,n)}get root(){const e=new ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uw(this._location.path)}get storage(){return this._service}get parent(){const e=cw(this._location.path);if(e===null)return null;const n=new ut(this._location.bucket,e);return new Li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Yv(e)}}function ec(t,e){const n=e==null?void 0:e[jv];return n==null?null:ut.makeFromBucketSpec(n,t)}function hw(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Wc(i,t.app.options.projectId))}class dw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Dd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$v,this._maxUploadRetryTime=Hv,this._requests=new Set,i!=null?this._bucket=ut.makeFromBucketSpec(i,this._host):this._bucket=ec(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ut.makeFromBucketSpec(this._url,e):this._bucket=ec(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Li(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Xv(Pd());{const o=lw(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const tc="@firebase/storage",nc="0.11.2";/**
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
 */const Nd="storage";function fw(t=nu(),e){t=ht(t);const s=Zc(t,Nd).getImmediate({identifier:e}),i=Gc("storage");return i&&pw(s,...i),s}function pw(t,e,n,s={}){hw(t,e,n,s)}function gw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new dw(n,s,i,e,eu)}function mw(){fs(new On(Nd,gw,"PUBLIC").setMultipleInstances(!0)),Bt(tc,nc,""),Bt(tc,nc,"esm2017")}mw();const yw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},Od=tu(yw);fw(Od);const De=Pv(Od);var vw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ww(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rd={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(vw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(w){w.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(w){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),m=this.options.position=="left"?d:"-"+d,g=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+m+","+g+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+p):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+p):(c[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Rd);var bw=Rd.exports;const Dn=ww(bw),Ld="SweetAlert2:",Ew=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},La=t=>t.charAt(0).toUpperCase()+t.slice(1),nt=t=>Array.prototype.slice.call(t),Ye=t=>{console.warn(`${Ld} ${typeof t=="object"?t.join(" "):t}`)},gn=t=>{console.error(`${Ld} ${t}`)},sc=[],_w=t=>{sc.includes(t)||(sc.push(t),Ye(t))},Tw=(t,e)=>{_w(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},yr=t=>typeof t=="function"?t():t,Ma=t=>t&&typeof t.toPromise=="function",zs=t=>Ma(t)?t.toPromise():Promise.resolve(t),xa=t=>t&&Promise.resolve(t)===t,Pn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Cw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Sw={},Iw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Md=t=>Object.prototype.hasOwnProperty.call(Pn,t),xd=t=>Cw.indexOf(t)!==-1,ko=t=>Sw[t],Aw=t=>{Md(t)||Ye(`Unknown parameter "${t}"`)},kw=t=>{Iw.includes(t)&&Ye(`The parameter "${t}" is incompatible with toasts`)},Dw=t=>{ko(t)&&Tw(t,ko(t))},Pw=t=>{!t.backdrop&&t.allowOutsideClick&&Ye('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)Aw(e),t.toast&&kw(e),Dw(e)},Nw="swal2-",Bd=t=>{const e={};for(const n in t)e[t[n]]=Nw+t[n];return e},y=Bd(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),cs=Bd(["success","warning","info","question","error"]),Ue=()=>document.body.querySelector(`.${y.container}`),Gs=t=>{const e=Ue();return e?e.querySelector(t):null},ct=t=>Gs(`.${t}`),re=()=>ct(y.popup),Ws=()=>ct(y.icon),Fd=()=>ct(y.title),Mi=()=>ct(y["html-container"]),Vd=()=>ct(y.image),Ud=()=>ct(y["progress-steps"]),vr=()=>ct(y["validation-message"]),ft=()=>Gs(`.${y.actions} .${y.confirm}`),Kt=()=>Gs(`.${y.actions} .${y.deny}`),Ow=()=>ct(y["input-label"]),Wn=()=>Gs(`.${y.loader}`),cn=()=>Gs(`.${y.actions} .${y.cancel}`),Qs=()=>ct(y.actions),qd=()=>ct(y.footer),wr=()=>ct(y["timer-progress-bar"]),Ba=()=>ct(y.close),Rw=`
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
`,Fa=()=>{const t=nt(re().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=nt(re().querySelectorAll(Rw)).filter(n=>n.getAttribute("tabindex")!=="-1");return Ew(t.concat(e)).filter(n=>et(n))},Va=()=>St(document.body,y.shown)&&!St(document.body,y["toast-shown"])&&!St(document.body,y["no-backdrop"]),br=()=>re()&&St(re(),y.toast),Lw=()=>re().hasAttribute("data-loading"),Nn={previousBodyPadding:null},xe=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");nt(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),nt(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},St=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Mw=(t,e)=>{nt(t.classList).forEach(n=>{!Object.values(y).includes(n)&&!Object.values(cs).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},lt=(t,e,n)=>{if(Mw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Ye(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);Z(t,e.customClass[n])}},Ua=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${y.popup} > .${y[e]}`);case"checkbox":return t.querySelector(`.${y.popup} > .${y.checkbox} input`);case"radio":return t.querySelector(`.${y.popup} > .${y.radio} input:checked`)||t.querySelector(`.${y.popup} > .${y.radio} input:first-child`);case"range":return t.querySelector(`.${y.popup} > .${y.range} input`);default:return t.querySelector(`.${y.popup} > .${y.input}`)}},jd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},$d=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},Z=(t,e)=>{$d(t,e,!0)},wt=(t,e)=>{$d(t,e,!1)},Lt=(t,e)=>{const n=nt(t.childNodes);for(let s=0;s<n.length;s++)if(St(n[s],e))return n[s]},us=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Ne=(t,e="flex")=>{t.style.display=e},qe=t=>{t.style.display="none"},ic=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Er=(t,e,n)=>{e?Ne(t,n):qe(t)},et=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),xw=()=>!et(ft())&&!et(Kt())&&!et(cn()),rc=t=>t.scrollHeight>t.clientHeight,Hd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},qa=(t,e=!1)=>{const n=wr();et(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Bw=()=>{const t=wr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Kd=()=>typeof window>"u"||typeof document>"u",Fw=100,G={},Vw=()=>{G.previousActiveElement&&G.previousActiveElement.focus?(G.previousActiveElement.focus(),G.previousActiveElement=null):document.body&&document.body.focus()},Uw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;G.restoreFocusTimeout=setTimeout(()=>{Vw(),e()},Fw),window.scrollTo(n,s)}),qw=`
 <div aria-labelledby="${y.title}" aria-describedby="${y["html-container"]}" class="${y.popup}" tabindex="-1">
   <button type="button" class="${y.close}"></button>
   <ul class="${y["progress-steps"]}"></ul>
   <div class="${y.icon}"></div>
   <img class="${y.image}" />
   <h2 class="${y.title}" id="${y.title}"></h2>
   <div class="${y["html-container"]}" id="${y["html-container"]}"></div>
   <input class="${y.input}" />
   <input type="file" class="${y.file}" />
   <div class="${y.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${y.select}"></select>
   <div class="${y.radio}"></div>
   <label for="${y.checkbox}" class="${y.checkbox}">
     <input type="checkbox" />
     <span class="${y.label}"></span>
   </label>
   <textarea class="${y.textarea}"></textarea>
   <div class="${y["validation-message"]}" id="${y["validation-message"]}"></div>
   <div class="${y.actions}">
     <div class="${y.loader}"></div>
     <button type="button" class="${y.confirm}"></button>
     <button type="button" class="${y.deny}"></button>
     <button type="button" class="${y.cancel}"></button>
   </div>
   <div class="${y.footer}"></div>
   <div class="${y["timer-progress-bar-container"]}">
     <div class="${y["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),jw=()=>{const t=Ue();return t?(t.remove(),wt([document.documentElement,document.body],[y["no-backdrop"],y["toast-shown"],y["has-column"]]),!0):!1},Yt=()=>{G.currentInstance.resetValidationMessage()},$w=()=>{const t=re(),e=Lt(t,y.input),n=Lt(t,y.file),s=t.querySelector(`.${y.range} input`),i=t.querySelector(`.${y.range} output`),r=Lt(t,y.select),o=t.querySelector(`.${y.checkbox} input`),a=Lt(t,y.textarea);e.oninput=Yt,n.onchange=Yt,r.onchange=Yt,o.onchange=Yt,a.oninput=Yt,s.oninput=()=>{Yt(),i.value=s.value},s.onchange=()=>{Yt(),s.nextSibling.value=s.value}},Hw=t=>typeof t=="string"?document.querySelector(t):t,Kw=t=>{const e=re();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},zw=t=>{window.getComputedStyle(t).direction==="rtl"&&Z(Ue(),y.rtl)},Gw=t=>{const e=jw();if(Kd()){gn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=y.container,e&&Z(n,y["no-transition"]),xe(n,qw);const s=Hw(t.target);s.appendChild(n),Kw(t),zw(s),$w()},ja=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Ww(t,e):t&&xe(e,t)},Ww=(t,e)=>{t.jquery?Qw(e,t):xe(e,t.toString())},Qw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Is=(()=>{if(Kd())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Yw=()=>{const t=document.createElement("div");t.className=y["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Xw=(t,e)=>{const n=Qs(),s=Wn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?qe(n):Ne(n),lt(n,e,"actions"),Jw(n,s,e),xe(s,e.loaderHtml),lt(s,e,"loader")};function Jw(t,e,n){const s=ft(),i=Kt(),r=cn();$r(s,"confirm",n),$r(i,"deny",n),$r(r,"cancel",n),Zw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Zw(t,e,n,s){if(!s.buttonsStyling)return wt([t,e,n],y.styled);Z([t,e,n],y.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,Z(t,y["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,Z(e,y["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,Z(n,y["default-outline"]))}function $r(t,e,n){Er(t,n[`show${La(e)}Button`],"inline-block"),xe(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=y[e],lt(t,n,`${e}Button`),Z(t,n[`${e}ButtonClass`])}function eb(t,e){typeof e=="string"?t.style.background=e:e||Z([document.documentElement,document.body],y["no-backdrop"])}function tb(t,e){e in y?Z(t,y[e]):(Ye('The "position" parameter is not valid, defaulting to "center"'),Z(t,y.center))}function nb(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in y&&Z(t,y[n])}}const sb=(t,e)=>{const n=Ue();n&&(eb(n,e.backdrop),tb(n,e.position),nb(n,e.grow),lt(n,e,"container"))},Q={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},ib=["input","file","range","select","radio","checkbox","textarea"],rb=(t,e)=>{const n=re(),s=Q.innerParams.get(t),i=!s||e.input!==s.input;ib.forEach(r=>{const o=y[r],a=Lt(n,o);lb(r,e.inputAttributes),a.className=o,i&&qe(a)}),e.input&&(i&&ob(e),cb(e))},ob=t=>{if(!Ge[t.input])return gn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=zd(t.input),n=Ge[t.input](e,t);Ne(n),setTimeout(()=>{jd(n)})},ab=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},lb=(t,e)=>{const n=Ua(re(),t);if(n){ab(n);for(const s in e)n.setAttribute(s,e[s])}},cb=t=>{const e=zd(t.input);t.customClass&&Z(e,t.customClass.input)},$a=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Ys=(t,e,n)=>{if(n.inputLabel){t.id=y.input;const s=document.createElement("label"),i=y["input-label"];s.setAttribute("for",t.id),s.className=i,Z(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},zd=t=>{const e=y[t]?y[t]:y.input;return Lt(re(),e)},Ge={};Ge.text=Ge.email=Ge.password=Ge.number=Ge.tel=Ge.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:xa(e.inputValue)||Ye(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Ys(t,t,e),$a(t,e),t.type=e.input,t);Ge.file=(t,e)=>(Ys(t,t,e),$a(t,e),t);Ge.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Ys(n,t,e),t};Ge.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");xe(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Ys(t,t,e),t};Ge.radio=t=>(t.textContent="",t);Ge.checkbox=(t,e)=>{const n=Ua(re(),"checkbox");n.value="1",n.id=y.checkbox,n.checked=!!e.inputValue;const s=t.querySelector("span");return xe(s,e.inputPlaceholder),t};Ge.textarea=(t,e)=>{t.value=e.inputValue,$a(t,e),Ys(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(re()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?re().style.width=`${r}px`:re().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ub=(t,e)=>{const n=Mi();lt(n,e,"htmlContainer"),e.html?(ja(e.html,n),Ne(n,"block")):e.text?(n.textContent=e.text,Ne(n,"block")):qe(n),rb(t,e)},hb=(t,e)=>{const n=qd();Er(n,e.footer),e.footer&&ja(e.footer,n),lt(n,e,"footer")},db=(t,e)=>{const n=Ba();xe(n,e.closeButtonHtml),lt(n,e,"closeButton"),Er(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},fb=(t,e)=>{const n=Q.innerParams.get(t),s=Ws();if(n&&e.icon===n.icon){ac(s,e),oc(s,e);return}if(!e.icon&&!e.iconHtml)return qe(s);if(e.icon&&Object.keys(cs).indexOf(e.icon)===-1)return gn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),qe(s);Ne(s),ac(s,e),oc(s,e),Z(s,e.showClass.icon)},oc=(t,e)=>{for(const n in cs)e.icon!==n&&wt(t,cs[n]);Z(t,cs[e.icon]),yb(t,e),pb(),lt(t,e,"icon")},pb=()=>{const t=re(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},gb=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,mb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ac=(t,e)=>{t.textContent="",e.iconHtml?xe(t,lc(e.iconHtml)):e.icon==="success"?xe(t,gb):e.icon==="error"?xe(t,mb):xe(t,lc({question:"?",warning:"!",info:"i"}[e.icon]))},yb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ic(t,n,"backgroundColor",e.iconColor);ic(t,".swal2-success-ring","borderColor",e.iconColor)}},lc=t=>`<div class="${y["icon-content"]}">${t}</div>`,vb=(t,e)=>{const n=Vd();if(!e.imageUrl)return qe(n);Ne(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),us(n,"width",e.imageWidth),us(n,"height",e.imageHeight),n.className=y.image,lt(n,e,"image")},wb=t=>{const e=document.createElement("li");return Z(e,y["progress-step"]),xe(e,t),e},bb=t=>{const e=document.createElement("li");return Z(e,y["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},Eb=(t,e)=>{const n=Ud();if(!e.progressSteps||e.progressSteps.length===0)return qe(n);Ne(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Ye("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=wb(s);if(n.appendChild(r),i===e.currentProgressStep&&Z(r,y["active-progress-step"]),i!==e.progressSteps.length-1){const o=bb(e);n.appendChild(o)}})},_b=(t,e)=>{const n=Fd();Er(n,e.title||e.titleText,"block"),e.title&&ja(e.title,n),e.titleText&&(n.innerText=e.titleText),lt(n,e,"title")},Tb=(t,e)=>{const n=Ue(),s=re();e.toast?(us(n,"width",e.width),s.style.width="100%",s.insertBefore(Wn(),Ws())):us(s,"width",e.width),us(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),qe(vr()),Cb(s,e)},Cb=(t,e)=>{t.className=`${y.popup} ${et(t)?e.showClass.popup:""}`,e.toast?(Z([document.documentElement,document.body],y["toast-shown"]),Z(t,y.toast)):Z(t,y.modal),lt(t,e,"popup"),typeof e.customClass=="string"&&Z(t,e.customClass),e.icon&&Z(t,y[`icon-${e.icon}`])},Gd=(t,e)=>{Tb(t,e),sb(t,e),Eb(t,e),fb(t,e),vb(t,e),_b(t,e),db(t,e),ub(t,e),Xw(t,e),hb(t,e),typeof e.didRender=="function"&&e.didRender(re())},Qn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Sb=()=>{nt(document.body.children).forEach(e=>{e===Ue()||e.contains(Ue())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Wd=()=>{nt(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Qd=["swal-title","swal-html","swal-footer"],Ib=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Rb(n),Object.assign(Ab(n),kb(n),Db(n),Pb(n),Nb(n),Ob(n,Qd))},Ab=t=>{const e={};return nt(t.querySelectorAll("swal-param")).forEach(n=>{un(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof Pn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof Pn[s]=="object"&&(e[s]=JSON.parse(i))}),e},kb=t=>{const e={};return nt(t.querySelectorAll("swal-button")).forEach(n=>{un(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${La(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},Db=t=>{const e={},n=t.querySelector("swal-image");return n&&(un(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Pb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(un(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Nb=t=>{const e={},n=t.querySelector("swal-input");n&&(un(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},nt(s).forEach(i=>{un(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},Ob=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(un(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Rb=t=>{const e=Qd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);nt(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Ye(`Unrecognized element <${s}>`)})},un=(t,e)=>{nt(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Ye([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},cc={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Lb(t){t.inputValidator||Object.keys(cc).forEach(e=>{t.input===e&&(t.inputValidator=cc[e])})}function Mb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Ye('Target parameter is not valid, defaulting to "body"'),t.target="body")}function xb(t){Lb(t),t.showLoaderOnConfirm&&!t.preConfirm&&Ye(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Mb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Gw(t)}class Bb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Fb=()=>{Nn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Nn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Nn.previousBodyPadding+Yw()}px`)},Vb=()=>{Nn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Nn.previousBodyPadding}px`,Nn.previousBodyPadding=null)},Ub=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!St(document.body,y.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,Z(document.body,y.iosfix),jb(),qb()}},qb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&re().scrollHeight>window.innerHeight-44&&(Ue().style.paddingBottom="44px")},jb=()=>{const t=Ue();let e;t.ontouchstart=n=>{e=$b(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},$b=t=>{const e=t.target,n=Ue();return Hb(t)||Kb(t)?!1:e===n||!rc(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(rc(Mi())&&Mi().contains(e))},Hb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Kb=t=>t.touches&&t.touches.length>1,zb=()=>{if(St(document.body,y.iosfix)){const t=parseInt(document.body.style.top,10);wt(document.body,y.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Yd=10,Gb=t=>{const e=Ue(),n=re();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Yb(e,n,t),setTimeout(()=>{Wb(e,n)},Yd),Va()&&(Qb(e,t.scrollbarPadding,i),Sb()),!br()&&!G.previousActiveElement&&(G.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),wt(e,y["no-transition"])},Xd=t=>{const e=re();if(t.target!==e)return;const n=Ue();e.removeEventListener(Is,Xd),n.style.overflowY="auto"},Wb=(t,e)=>{Is&&Hd(e)?(t.style.overflowY="hidden",e.addEventListener(Is,Xd)):t.style.overflowY="auto"},Qb=(t,e,n)=>{Ub(),e&&n!=="hidden"&&Fb(),setTimeout(()=>{t.scrollTop=0})},Yb=(t,e,n)=>{Z(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Ne(e,"grid"),setTimeout(()=>{Z(e,n.showClass.popup),e.style.removeProperty("opacity")},Yd),Z([document.documentElement,document.body],y.shown),n.heightAuto&&n.backdrop&&!n.toast&&Z([document.documentElement,document.body],y["height-auto"])},qn=t=>{let e=re();e||new ks,e=re();const n=Wn();br()?qe(Ws()):Xb(e,t),Ne(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Xb=(t,e)=>{const n=Qs(),s=Wn();!e&&et(ft())&&(e=ft()),Ne(n),e&&(qe(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),Z([t,n],y.loading)},Jb=(t,e)=>{e.input==="select"||e.input==="radio"?s0(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Ma(e.inputValue)||xa(e.inputValue))&&(qn(ft()),i0(t,e))},Zb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return e0(n);case"radio":return t0(n);case"file":return n0(n);default:return e.inputAutoTrim?n.value.trim():n.value}},e0=t=>t.checked?1:0,t0=t=>t.checked?t.value:null,n0=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,s0=(t,e)=>{const n=re(),s=i=>r0[e.input](n,Do(i),e);Ma(e.inputOptions)||xa(e.inputOptions)?(qn(ft()),zs(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):gn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},i0=(t,e)=>{const n=t.getInput();qe(n),zs(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Ne(n),n.focus(),t.hideLoading()}).catch(s=>{gn(`Error in inputValue promise: ${s}`),n.value="",Ne(n),n.focus(),t.hideLoading()})},r0={select:(t,e,n)=>{const s=Lt(t,y.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,xe(l,o),l.selected=uc(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Lt(t,y.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=y.radio,l.value=o,uc(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");xe(u,a),u.className=y.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Do=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Do(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Do(s)),e.push([n,s])}),e},uc=(t,e)=>e&&e.toString()===t.toString();function hc(){const t=Q.innerParams.get(this);if(!t)return;const e=Q.domCache.get(this);qe(e.loader),br()?t.icon&&Ne(Ws()):o0(e),wt([e.popup,e.actions],y.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const o0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Ne(e[0],"inline-block"):xw()&&qe(t.actions)};function a0(t){const e=Q.innerParams.get(t||this),n=Q.domCache.get(t||this);return n?Ua(n.popup,e.input):null}const As={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},l0=()=>et(re()),Jd=()=>ft()&&ft().click(),c0=()=>Kt()&&Kt().click(),u0=()=>cn()&&cn().click(),Zd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},h0=(t,e,n,s)=>{Zd(e),n.toast||(e.keydownHandler=i=>f0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:re(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Po=(t,e,n)=>{const s=Fa();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();re().focus()},ef=["ArrowRight","ArrowDown"],d0=["ArrowLeft","ArrowUp"],f0=(t,e,n)=>{const s=Q.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?p0(t,e,s):e.key==="Tab"?g0(e,s):[...ef,...d0].includes(e.key)?m0(e.key):e.key==="Escape"&&y0(e,s,n)))},p0=(t,e,n)=>{if(yr(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Jd(),e.preventDefault()}},g0=(t,e)=>{const n=t.target,s=Fa();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Po(e,i,-1):Po(e,i,1),t.stopPropagation(),t.preventDefault()},m0=t=>{const e=ft(),n=Kt(),s=cn();if(![e,n,s].includes(document.activeElement))return;const i=ef.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Qs().children.length;o++){if(r=r[i],!r)return;if(et(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},y0=(t,e,n)=>{yr(e.allowEscapeKey)&&(t.preventDefault(),n(Qn.esc))};function tf(t,e,n,s){br()?dc(t,s):(Uw(n).then(()=>dc(t,s)),Zd(G)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Va()&&(Vb(),zb(),Wd()),v0()}function v0(){wt([document.documentElement,document.body],[y.shown,y["height-auto"],y["no-backdrop"],y["toast-shown"]])}function oi(t){t=_0(t);const e=As.swalPromiseResolve.get(this),n=b0(this);this.isAwaitingPromise()?t.isDismissed||(Xs(this),e(t)):n&&e(t)}function w0(){return!!Q.awaitingPromise.get(this)}const b0=t=>{const e=re();if(!e)return!1;const n=Q.innerParams.get(t);if(!n||St(e,n.hideClass.popup))return!1;wt(e,n.showClass.popup),Z(e,n.hideClass.popup);const s=Ue();return wt(s,n.showClass.backdrop),Z(s,n.hideClass.backdrop),T0(t,e,n),!0};function E0(t){const e=As.swalPromiseReject.get(this);Xs(this),e&&e(t)}const Xs=t=>{t.isAwaitingPromise()&&(Q.awaitingPromise.delete(t),Q.innerParams.get(t)||t._destroy())},_0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),T0=(t,e,n)=>{const s=Ue(),i=Is&&Hd(e);typeof n.willClose=="function"&&n.willClose(e),i?C0(t,e,s,n.returnFocus,n.didClose):tf(t,s,n.returnFocus,n.didClose)},C0=(t,e,n,s,i)=>{G.swalCloseEventFinishedCallback=tf.bind(null,t,n,s,i),e.addEventListener(Is,function(r){r.target===e&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback)})},dc=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function nf(t,e,n){const s=Q.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function sf(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function S0(){nf(this,["confirmButton","denyButton","cancelButton"],!1)}function I0(){nf(this,["confirmButton","denyButton","cancelButton"],!0)}function A0(){return sf(this.getInput(),!1)}function k0(){return sf(this.getInput(),!0)}function D0(t){const e=Q.domCache.get(this),n=Q.innerParams.get(this);xe(e.validationMessage,t),e.validationMessage.className=y["validation-message"],n.customClass&&n.customClass.validationMessage&&Z(e.validationMessage,n.customClass.validationMessage),Ne(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",y["validation-message"]),jd(s),Z(s,y.inputerror))}function P0(){const t=Q.domCache.get(this);t.validationMessage&&qe(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),wt(e,y.inputerror))}function N0(){return Q.domCache.get(this).progressSteps}function O0(t){const e=re(),n=Q.innerParams.get(this);if(!e||St(e,n.hideClass.popup))return Ye("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=R0(t),i=Object.assign({},n,s);Gd(this,i),Q.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const R0=t=>{const e={};return Object.keys(t).forEach(n=>{xd(n)?e[n]=t[n]:Ye(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function L0(){const t=Q.domCache.get(this),e=Q.innerParams.get(this);if(!e){rf(this);return}t.popup&&G.swalCloseEventFinishedCallback&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback),G.deferDisposalTimer&&(clearTimeout(G.deferDisposalTimer),delete G.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),M0(this)}const M0=t=>{rf(t),delete t.params,delete G.keydownHandler,delete G.keydownTarget,delete G.currentInstance},rf=t=>{t.isAwaitingPromise()?(Hr(Q,t),Q.awaitingPromise.set(t,!0)):(Hr(As,t),Hr(Q,t))},Hr=(t,e)=>{for(const n in t)t[n].delete(e)},of=Object.freeze(Object.defineProperty({__proto__:null,_destroy:L0,close:oi,closeModal:oi,closePopup:oi,closeToast:oi,disableButtons:I0,disableInput:k0,disableLoading:hc,enableButtons:S0,enableInput:A0,getInput:a0,getProgressSteps:N0,handleAwaitingPromise:Xs,hideLoading:hc,isAwaitingPromise:w0,rejectPromise:E0,resetValidationMessage:P0,showValidationMessage:D0,update:O0},Symbol.toStringTag,{value:"Module"})),x0=t=>{const e=Q.innerParams.get(t);t.disableButtons(),e.input?af(t,"confirm"):Ka(t,!0)},B0=t=>{const e=Q.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?af(t,"deny"):Ha(t,!1)},F0=(t,e)=>{t.disableButtons(),e(Qn.cancel)},af=(t,e)=>{const n=Q.innerParams.get(t);if(!n.input)return gn(`The "input" parameter is needed to be set when using returnInputValueOn${La(e)}`);const s=Zb(t,n);n.inputValidator?V0(t,s,e):t.getInput().checkValidity()?e==="deny"?Ha(t,s):Ka(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},V0=(t,e,n)=>{const s=Q.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>zs(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Ha(t,e):Ka(t,e)})},Ha=(t,e)=>{const n=Q.innerParams.get(t||globalThis);n.showLoaderOnDeny&&qn(Kt()),n.preDeny?(Q.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>zs(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Xs(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>lf(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},fc=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},lf=(t,e)=>{t.rejectPromise(e)},Ka=(t,e)=>{const n=Q.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&qn(),n.preConfirm?(t.resetValidationMessage(),Q.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>zs(n.preConfirm(e,n.validationMessage))).then(i=>{et(vr())||i===!1?(t.hideLoading(),Xs(t)):fc(t,typeof i>"u"?e:i)}).catch(i=>lf(t||globalThis,i))):fc(t,e)},U0=(t,e,n)=>{Q.innerParams.get(t).toast?q0(t,e,n):($0(e),H0(e),K0(t,e,n))},q0=(t,e,n)=>{e.popup.onclick=()=>{const s=Q.innerParams.get(t);s&&(j0(s)||s.timer||s.input)||n(Qn.close)}},j0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let xi=!1;const $0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(xi=!0)}}},H0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(xi=!0)}}},K0=(t,e,n)=>{e.container.onclick=s=>{const i=Q.innerParams.get(t);if(xi){xi=!1;return}s.target===e.container&&yr(i.allowOutsideClick)&&n(Qn.backdrop)}},z0=t=>typeof t=="object"&&t.jquery,pc=t=>t instanceof Element||z0(t),G0=t=>{const e={};return typeof t[0]=="object"&&!pc(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||pc(i)?e[n]=i:i!==void 0&&gn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function W0(...t){const e=this;return new e(...t)}function Q0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const Y0=()=>G.timeout&&G.timeout.getTimerLeft(),cf=()=>{if(G.timeout)return Bw(),G.timeout.stop()},uf=()=>{if(G.timeout){const t=G.timeout.start();return qa(t),t}},X0=()=>{const t=G.timeout;return t&&(t.running?cf():uf())},J0=t=>{if(G.timeout){const e=G.timeout.increase(t);return qa(e,!0),e}},Z0=()=>G.timeout&&G.timeout.isRunning();let gc=!1;const No={};function eE(t="data-swal-template"){No[t]=this,gc||(document.body.addEventListener("click",tE),gc=!0)}const tE=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in No){const s=e.getAttribute(n);if(s){No[n].fire({template:s});return}}},nE=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:G0,bindClickHandler:eE,clickCancel:u0,clickConfirm:Jd,clickDeny:c0,enableLoading:qn,fire:W0,getActions:Qs,getCancelButton:cn,getCloseButton:Ba,getConfirmButton:ft,getContainer:Ue,getDenyButton:Kt,getFocusableElements:Fa,getFooter:qd,getHtmlContainer:Mi,getIcon:Ws,getImage:Vd,getInputLabel:Ow,getLoader:Wn,getPopup:re,getTimerLeft:Y0,getTimerProgressBar:wr,getTitle:Fd,getValidationMessage:vr,increaseTimer:J0,isDeprecatedParameter:ko,isLoading:Lw,isTimerRunning:Z0,isUpdatableParameter:xd,isValidParameter:Md,isVisible:l0,mixin:Q0,resumeTimer:uf,showLoading:qn,stopTimer:cf,toggleTimer:X0},Symbol.toStringTag,{value:"Module"}));let Oo;class Yn{constructor(...e){if(typeof window>"u")return;Oo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);Q.promise.set(this,s)}_main(e,n={}){Pw(Object.assign({},n,e)),G.currentInstance&&(G.currentInstance._destroy(),Va()&&Wd()),G.currentInstance=this;const s=iE(e,n);xb(s),Object.freeze(s),G.timeout&&(G.timeout.stop(),delete G.timeout),clearTimeout(G.restoreFocusTimeout);const i=rE(this);return Gd(this,s),Q.innerParams.set(this,s),sE(this,i,s)}then(e){return Q.promise.get(this).then(e)}finally(e){return Q.promise.get(this).finally(e)}}const sE=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};As.swalPromiseResolve.set(t,s),As.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>x0(t),e.denyButton.onclick=()=>B0(t),e.cancelButton.onclick=()=>F0(t,r),e.closeButton.onclick=()=>r(Qn.close),U0(t,e,r),h0(t,G,n,r),Jb(t,n),Gb(n),oE(G,n,r),aE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),iE=(t,e)=>{const n=Ib(t),s=Object.assign({},Pn,e,n,t);return s.showClass=Object.assign({},Pn.showClass,s.showClass),s.hideClass=Object.assign({},Pn.hideClass,s.hideClass),s},rE=t=>{const e={popup:re(),container:Ue(),actions:Qs(),confirmButton:ft(),denyButton:Kt(),cancelButton:cn(),loader:Wn(),closeButton:Ba(),validationMessage:vr(),progressSteps:Ud()};return Q.domCache.set(t,e),e},oE=(t,e,n)=>{const s=wr();qe(s),e.timer&&(t.timeout=new Bb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Ne(s),lt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&qa(e.timer)})))},aE=(t,e)=>{if(!e.toast){if(!yr(e.allowEnterKey))return cE();lE(t,e)||Po(e,-1,1)}},lE=(t,e)=>e.focusDeny&&et(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&et(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&et(t.confirmButton)?(t.confirmButton.focus(),!0):!1,cE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Yn.prototype,of);Object.assign(Yn,nE);Object.keys(of).forEach(t=>{Yn[t]=function(...e){if(Oo)return Oo[t](...e)}});Yn.DismissReason=Qn;Yn.version="11.4.8";const ks=Yn;ks.default=ks;const bn=[];function _r(t,e=we){let n;const s=new Set;function i(a){if(bt(t,a)&&(t=a,n)){const l=!bn.length;for(const c of s)c[1](),bn.push(c,t);if(l){for(let c=0;c<bn.length;c+=2)bn[c][0](bn[c+1]);bn.length=0}}}function r(a){i(a(t))}function o(a,l=we){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||we),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Kr=_r({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Ro=_r(""),Lo=_r(""),fi=_r(""),uE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},hE=async t=>{try{await Ra(Ct(De,"Pacientes",t.id),t)}catch(e){console.log(e)}};function mc(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function yc(t){let e,n,s=t[0],i=[];for(let r=0;r<s.length;r+=1)i[r]=vc(mc(t,s,r));return{c(){e=C("div"),n=C("ul");for(let r=0;r<i.length;r+=1)i[r].c();f(n,"class","sinPunto svelte-1imyo0u"),f(e,"class","listadoPacientes svelte-1imyo0u")},m(r,o){V(r,e,o),v(e,n);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null)},p(r,o){if(o&7){s=r[0];let a;for(a=0;a<s.length;a+=1){const l=mc(r,s,a);i[a]?i[a].p(l,o):(i[a]=vc(l),i[a].c(),i[a].m(n,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}},d(r){r&&F(e),Ds(i,r)}}}function vc(t){let e,n,s,i,r,o=`${t[9].apellido}, ${t[9].nombre}`.slice(0,20).padEnd(21," ")+`${t[9].plan=="particular"?"":t[9].nroSocio+"   plan "+t[9].plan.plan}`,a,l,c,u,h,d;return u=Bc(t[5][0]),{c(){e=C("li"),n=C("input"),i=x(),r=C("label"),a=ae(o),c=x(),f(n,"type","radio"),f(n,"id",s=t[9].id),f(n,"name","pacientes"),n.__value=t[11],n.value=n.__value,f(r,"for",l=t[9].id),u.p(n)},m(p,m){V(p,e,m),v(e,n),n.checked=n.__value===t[1],v(e,i),v(e,r),v(r,a),v(e,c),h||(d=[J(n,"change",t[4]),J(n,"change",t[2])],h=!0)},p(p,m){m&1&&s!==(s=p[9].id)&&f(n,"id",s),m&3&&(n.checked=n.__value===p[1]),m&1&&o!==(o=`${p[9].apellido}, ${p[9].nombre}`.slice(0,20).padEnd(21," ")+`${p[9].plan=="particular"?"":p[9].nroSocio+"   plan "+p[9].plan.plan}`)&&$e(a,o),m&1&&l!==(l=p[9].id)&&f(r,"for",l)},d(p){p&&F(e),u.r(),h=!1,st(d)}}}function dE(t){let e,n=t[0].length>0&&yc(t);return{c(){n&&n.c(),e=xc()},m(s,i){n&&n.m(s,i),V(s,e,i)},p(s,[i]){s[0].length>0?n?n.p(s,i):(n=yc(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:we,o:we,d(s){n&&n.d(s),s&&F(e)}}}function fE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r=0,o;const a=Bi(),l=h=>{const d=h.target.value;n(3,i=s[d].plan),o=s[d].id,a("cambioSelectPaciente",[d,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${d}, planSelect ${i.plan?i.plan:"particular"}`)},c=[[]];function u(){r=this.__value,n(1,r)}return t.$$set=h=>{"pacientesFiltrada"in h&&n(0,s=h.pacientesFiltrada),"planSelect"in h&&n(3,i=h.planSelect)},[s,r,l,i,u,c]}class pE extends Rt{constructor(e){super(),Ot(this,e,fE,dE,bt,{pacientesFiltrada:0,planSelect:3})}}function gE(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,g,w,T,b,A,D,M,K,te,oe,ee,ne,ce,j,W,_,I,B,Xe,ze,mn,_t,yn,pt,k,ve,fe,L,pe,je;return M=new pE({props:{pacientesFiltrada:t[3],planSelect:mE}}),M.$on("cambioSelectPaciente",t[15]),fe=new Sf({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),fe.$on("cambioPlan",t[14]),fe.$on("clickCheckPlan",t[16]),{c(){e=C("body"),n=C("div"),s=C("div"),i=C("button"),r=ae("create"),a=x(),l=C("button"),c=ae("update"),h=x(),d=C("button"),p=ae("delete"),g=x(),w=C("div"),T=C("label"),T.textContent="filtrar por apellido",b=C("input"),A=x(),D=C("div"),Ut(M.$$.fragment),K=x(),te=C("div"),oe=C("label"),oe.textContent="nombre",ee=C("input"),ne=x(),ce=C("label"),ce.textContent="apellido",j=C("input"),W=x(),_=C("div"),I=C("label"),I.textContent="nº socio",B=x(),Xe=C("div"),ze=C("input"),mn=x(),_t=C("button"),_t.textContent="✎",yn=x(),pt=C("label"),k=ae(t[10]),ve=x(),Ut(fe.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],f(i,"class","svelte-2aoqir"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],f(l,"class","svelte-2aoqir"),d.disabled=m=!t[4],f(d,"class","svelte-2aoqir"),f(s,"class","buttons svelte-2aoqir"),f(n,"id","botones"),f(n,"class","svelte-2aoqir"),f(T,"for","filterPrefix"),f(T,"class","svelte-2aoqir"),f(b,"name","filterPrefix"),f(b,"id","filterPrefix"),f(b,"placeholder","filter prefix"),f(b,"class","svelte-2aoqir"),f(w,"id","filter"),f(w,"class","svelte-2aoqir"),f(D,"id","selectPacientes"),f(D,"class","svelte-2aoqir"),f(oe,"for","nombre"),f(oe,"class","svelte-2aoqir"),f(ee,"name","nombre"),f(ee,"id","nombre"),f(ee,"placeholder","nombre"),f(ee,"class","svelte-2aoqir"),f(ce,"for","apellido"),f(ce,"class","svelte-2aoqir"),f(j,"name","apellido"),f(j,"id","apellido"),f(j,"placeholder","apellido"),f(j,"class","svelte-2aoqir"),f(te,"id","formInputsI"),f(te,"class","svelte-2aoqir"),f(I,"for","inputNroSocio"),f(I,"class","svelte-2aoqir"),f(ze,"id","inputNroSocio"),f(ze,"name","nroSocio"),f(ze,"placeholder","nro de Socio"),f(ze,"class","svelte-2aoqir"),f(_t,"class","svelte-2aoqir"),f(Xe,"class","formRow svelte-2aoqir"),f(pt,"id","labelPlan"),f(pt,"for","plan"),f(pt,"class","svelte-2aoqir"),f(_,"id","formInputsD"),f(_,"class","svelte-2aoqir"),f(e,"class","svelte-2aoqir")},m($,Ie){V($,e,Ie),v(e,n),v(n,s),v(s,i),v(i,r),v(s,a),v(s,l),v(l,c),v(s,h),v(s,d),v(d,p),v(e,g),v(e,w),v(w,T),v(w,b),Ce(b,t[2]),v(e,A),v(e,D),It(M,D,null),v(e,K),v(e,te),v(te,oe),v(te,ee),Ce(ee,t[7]),v(te,ne),v(te,ce),v(te,j),Ce(j,t[8]),v(e,W),v(e,_),v(_,I),v(_,B),v(_,Xe),v(Xe,ze),Ce(ze,t[9]),v(Xe,mn),v(Xe,_t),v(_,yn),v(_,pt),v(pt,k),v(_,ve),It(fe,_,null),L=!0,pe||(je=[J(i,"click",t[11]),J(l,"click",t[12]),J(d,"click",t[13]),J(b,"input",t[21]),J(ee,"input",t[22]),J(j,"input",t[23]),J(ze,"input",t[24]),J(_t,"click",yE)],pe=!0)},p($,Ie){(!L||Ie[0]&897&&o!==(o=!$[7]||!$[8]||!$[0]||!$[9]))&&(i.disabled=o),(!L||Ie[0]&913&&u!==(u=!$[7]||!$[8]||!$[0]||!$[9]||!$[4]))&&(l.disabled=u),(!L||Ie[0]&16&&m!==(m=!$[4]))&&(d.disabled=m),Ie[0]&4&&b.value!==$[2]&&Ce(b,$[2]);const Je={};Ie[0]&8&&(Je.pacientesFiltrada=$[3]),M.$set(Je),Ie[0]&128&&ee.value!==$[7]&&Ce(ee,$[7]),Ie[0]&256&&j.value!==$[8]&&Ce(j,$[8]),Ie[0]&512&&ze.value!==$[9]&&Ce(ze,$[9]),(!L||Ie[0]&1024)&&$e(k,$[10]);const Ae={};Ie[0]&2&&(Ae.planes=$[1]),Ie[0]&1&&(Ae.planSeleccionado=$[0]),Ie[0]&64&&(Ae.SelectPlanVisible=$[6]),Ie[0]&32&&(Ae.indicePlan=$[5]),fe.$set(Ae)},i($){L||(Qe(M.$$.fragment,$),Qe(fe.$$.fragment,$),L=!0)},o($){at(M.$$.fragment,$),at(fe.$$.fragment,$),L=!1},d($){$&&F(e),At(M),At(fe),pe=!1,st(je)}}}let mE="particular";function yE(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function vE(t,e,n){let s,i,r,o,a;Jt(t,fi,k=>n(25,i=k)),Jt(t,Kr,k=>n(26,r=k)),Jt(t,Lo,k=>n(27,o=k)),Jt(t,Ro,k=>n(28,a=k));let{pacientes:l=[]}=e,{sesiones:c}=e,{planes:u}=e,{planSeleccionado:h}=e,d=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:p}=e,m,g=0,w;Uc(()=>{uE(l,d),l.forEach(k=>{hE(k)}),console.log(a)});let T="",b="",A="",D="",M=[],K="plan";vn(Kr,r=s,r);const te=k=>{n(7,b=k?k.nombre:""),n(8,A=k?k.apellido:""),n(9,D=k?k.nroSocio:""),n(0,h=k?k.plan:{})},oe=async()=>{try{await kd(it(De,"Pacientes"),{nombre:b,apellido:A,nroSocio:D,createdAt:new Date().toLocaleDateString(),plan:h}),Dn({text:"Nuevo paciente agregado"}).showToast()}catch(k){console.error(k)}},ee=()=>{n(17,l=l.concat({nombre:b,apellido:A})),n(20,g=l.length-1),oe(),n(7,b=n(8,A=n(0,h=n(9,D=""))))},ne=async k=>{try{await Ra(Ct(De,"Pacientes",k.id),k),Dn({text:`paciente ${k.apellido}, ${k.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ve){console.error(ve)}},ce=()=>{n(4,s.nombre=b,s),n(4,s.apellido=A,s),n(0,h=s.plan),n(4,s.nroSocio=D,s),n(4,s),n(3,M),n(20,g),n(2,T),n(17,l),n(17,l),ne(s)},j=async k=>{try{await Ao(Ct(De,"Pacientes",k.id)),Dn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(fe){console.error(fe)}const ve=ls(it(De,"sesiones"),Io("pacienteID","==",k.id));console.log(`desde delete q=pacientes a borrar ${ve} - paciente: ${k.nombre} ${k.apellido} ${k.id}`);try{(await Ad(ve)).forEach(L=>{Ao(L.ref)})}catch(fe){console.log(fe)}},W=()=>{const k=l.indexOf(s);ks.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(ve=>{ve.isConfirmed&&(ks.fire("Deleted!","Your file has been deleted.","success"),j(l[g]),n(17,l=[...l.slice(0,k),...l.slice(k+1)]),n(7,b=n(8,A=n(9,D=n(0,h="")))),n(20,g=Math.min(g,M.length-2)))})},_=k=>{n(4,s.plan=k,s),n(4,s.nombre=b,s),n(4,s.apellido=A,s),n(4,s.nroSocio=D,s),n(3,M[g].plan=k,M),ne(s)},I=k=>{n(0,h=k.detail),console.log(h),s.plan.plan!=h.plan&&_(h)},B=k=>{k?(n(10,K="particular"),n(6,w=!1)):(n(10,K="plan"),n(6,w=!0))},Xe=k=>{n(20,g=k.detail[0]);const ve=k.detail[1];vn(fi,i=k.detail[2],i);const fe=typeof ve=="string"?"particular":ve.plan;console.log(`i ${g}, planSelect ${fe}`),n(0,h=fe=="particular"?"particular":M[g].plan),h!="particular"&&(n(5,m=u.findIndex(pe=>pe.plan===fe)),console.log(`indicePlan ${m}, ${typeof m}`));const L=fe=="particular";B(L)},ze=k=>{const ve=k.detail.valor.SelectPlanVisible;ve?ve&&h=="particular"&&n(0,h="210"):n(0,h="particular"),_(h),B(!ve)};function mn(){T=this.value,n(2,T)}function _t(){b=this.value,n(7,b)}function yn(){A=this.value,n(8,A)}function pt(){D=this.value,n(9,D)}return t.$$set=k=>{"pacientes"in k&&n(17,l=k.pacientes),"sesiones"in k&&n(18,c=k.sesiones),"planes"in k&&n(1,u=k.planes),"planSeleccionado"in k&&n(0,h=k.planSeleccionado),"optionsPlan"in k&&n(19,p=k.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,M=T?l.filter(k=>`${k.apellido}, ${k.nombre}`.toLowerCase().startsWith(T.toLowerCase())):l.map(k=>({nombre:k.nombre,apellido:k.apellido,plan:k.plan,nroSocio:k.nroSocio,id:k.id}))),t.$$.dirty[0]&1048584&&n(4,s=M[g]),t.$$.dirty[0]&16&&s&&(vn(Kr,r=s,r),vn(Ro,a=s.apellido,a),vn(Lo,o=s.nombre,o),vn(fi,i=s.id,i)),t.$$.dirty[0]&16&&te(s)},[h,u,T,M,s,m,w,b,A,D,K,ee,ce,W,I,Xe,ze,l,c,p,g,mn,_t,yn,pt]}class wE extends Rt{constructor(e){super(),Ot(this,e,vE,gE,bt,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0,optionsPlan:19},null,[-1,-1])}}const bE=it(De,"sesiones");it(De,"Pacientes");it(De,"Planes");const EE=async t=>{const e=li(t),n=e.fechaInicio,s=e.fechaFin;try{return(await Ad(ls(bE,Io("diaSesion",">=",n),Io("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function wc(t,e,n){const s=t.slice();return s[6]=e[n],s}function bc(t){let e,n=`listar mes de ${t[6].nombre} - ${t[6].nro.toString().padStart(2,"0")}`,s;return{c(){e=C("option"),s=ae(n),e.__value=t[6].nro,e.value=e.__value},m(i,r){V(i,e,r),v(e,s)},p:we,d(i){i&&F(e)}}}function _E(t){let e,n,s,i=t[1],r=[];for(let o=0;o<i.length;o+=1)r[o]=bc(wc(t,i,o));return{c(){e=C("select");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"name","mes"),f(e,"id","mesRegistro"),t[0]===void 0&&ds(()=>t[4].call(e))},m(o,a){V(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);gi(e,t[0]),n||(s=[J(e,"change",t[3]),J(e,"change",t[4])],n=!0)},p(o,[a]){if(a&2){i=o[1];let l;for(l=0;l<i.length;l+=1){const c=wc(o,i,l);r[l]?r[l].p(c,a):(r[l]=bc(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}a&3&&gi(e,o[0])},i:we,o:we,d(o){o&&F(e),Ds(r,o),n=!1,st(s)}}}function TE(t,e,n){let s=new Date().getMonth()+1,i=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}];const r=Bi(),o=c=>{r("cambioMes",c)},a=c=>o(c.target.value);function l(){s=Fc(this),n(0,s),n(1,i)}return[s,i,o,a,l]}class CE extends Rt{constructor(e){super(),Ot(this,e,TE,_E,bt,{})}}function Ec(t,e,n){const s=t.slice();return s[14]=e[n],s[16]=n,s}function _c(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,g,w,T=t[3](t[1]).totalColPagos+"",b,A,D,M,K=t[3](t[1]).totalColValorSesion+"",te,oe,ee,ne,ce,j=t[1],W=[];for(let _=0;_<j.length;_+=1)W[_]=Ic(Ec(t,j,_));return{c(){e=C("button"),e.textContent="Cerrar",n=x(),s=C("button"),s.textContent="ordena por nombre",i=x(),r=C("button"),r.textContent="ordena por OS",o=x(),a=C("button"),a.textContent="ordena por fecha sesion",l=x(),c=C("div"),u=C("table"),h=C("tr"),h.innerHTML=`<th class="svelte-1j2v6bw">n°</th> 
          <th class="svelte-1j2v6bw">dia</th> 
          <th class="svelte-1j2v6bw">paciente</th> 
          <th class="svelte-1j2v6bw">plan</th> 
          <th class="svelte-1j2v6bw">sesion</th> 
          <th class="svelte-1j2v6bw">pago</th>`,d=x(),p=C("tbody");for(let _=0;_<W.length;_+=1)W[_].c();m=x(),g=C("p"),w=ae("Total pagos: $"),b=ae(T),A=x(),D=C("p"),M=ae("Total valor sesion: $"),te=ae(K),oe=x(),ee=C("button"),ee.textContent="Cerrar",f(h,"class","svelte-1j2v6bw"),f(p,"class","svelte-1j2v6bw"),f(u,"class","svelte-1j2v6bw"),f(c,"id","tabla"),f(c,"class","svelte-1j2v6bw"),f(g,"class","centrar svelte-1j2v6bw"),f(D,"class","centrar svelte-1j2v6bw")},m(_,I){V(_,e,I),V(_,n,I),V(_,s,I),V(_,i,I),V(_,r,I),V(_,o,I),V(_,a,I),V(_,l,I),V(_,c,I),v(c,u),v(u,h),v(u,d),v(u,p);for(let B=0;B<W.length;B+=1)W[B]&&W[B].m(p,null);V(_,m,I),V(_,g,I),v(g,w),v(g,b),V(_,A,I),V(_,D,I),v(D,M),v(D,te),V(_,oe,I),V(_,ee,I),ne||(ce=[J(e,"click",t[10]),J(s,"click",t[5]),J(r,"click",t[6]),J(a,"click",t[7]),J(ee,"click",t[11])],ne=!0)},p(_,I){if(I&6){j=_[1];let B;for(B=0;B<j.length;B+=1){const Xe=Ec(_,j,B);W[B]?W[B].p(Xe,I):(W[B]=Ic(Xe),W[B].c(),W[B].m(p,null))}for(;B<W.length;B+=1)W[B].d(1);W.length=j.length}I&2&&T!==(T=_[3](_[1]).totalColPagos+"")&&$e(b,T),I&2&&K!==(K=_[3](_[1]).totalColValorSesion+"")&&$e(te,K)},d(_){_&&F(e),_&&F(n),_&&F(s),_&&F(i),_&&F(r),_&&F(o),_&&F(a),_&&F(l),_&&F(c),Ds(W,_),_&&F(m),_&&F(g),_&&F(A),_&&F(D),_&&F(oe),_&&F(ee),ne=!1,st(ce)}}}function Tc(t){let e;return{c(){e=C("td"),e.textContent="acá un corte",f(e,"class","svelte-1j2v6bw")},m(n,s){V(n,e,s)},d(n){n&&F(e)}}}function Cc(t){let e;return{c(){e=C("td"),e.textContent="acá un corte",f(e,"class","svelte-1j2v6bw")},m(n,s){V(n,e,s)},d(n){n&&F(e)}}}function Sc(t){let e;return{c(){e=C("td"),e.textContent="acá un corte",f(e,"class","svelte-1j2v6bw")},m(n,s){V(n,e,s)},d(n){n&&F(e)}}}function Ic(t){let e,n,s,i,r,o,a,l,c=`${Ac(t[14].diaSesion.slice(8,10),2,!1)}`,u,h,d,p=`${t[14].apellido}, ${t[14].nombre}`,m,g,w,T=t[14].plan.slice(0,4)+"",b,A,D,M=t[14].valorPago+"",K,te,oe,ee=t[14].valorSesion+"",ne,ce,j=t[2]=="dia"&&t[16]>1&&t[1][t[16]-1].diaSesion!=t[14].diaSesion&&Tc(),W=t[2]=="apellido"&&t[16]>1&&t[1][t[16]-1].apellido!=t[14].apellido&&Cc(),_=t[2]=="plan"&&t[16]>1&&t[1][t[16]-1].plan!=t[14].plan&&Sc();return{c(){j&&j.c(),e=x(),W&&W.c(),n=x(),_&&_.c(),s=x(),i=C("tr"),r=C("td"),o=ae(t[16]),a=x(),l=C("td"),u=ae(c),h=x(),d=C("td"),m=ae(p),g=x(),w=C("td"),b=ae(T),A=x(),D=C("td"),K=ae(M),te=x(),oe=C("td"),ne=ae(ee),ce=x(),f(r,"class","svelte-1j2v6bw"),f(l,"class","dia svelte-1j2v6bw"),f(d,"class","nombre svelte-1j2v6bw"),f(w,"class","plan svelte-1j2v6bw"),f(D,"class","svelte-1j2v6bw"),f(oe,"class","svelte-1j2v6bw"),f(i,"class","svelte-1j2v6bw")},m(I,B){j&&j.m(I,B),V(I,e,B),W&&W.m(I,B),V(I,n,B),_&&_.m(I,B),V(I,s,B),V(I,i,B),v(i,r),v(r,o),v(i,a),v(i,l),v(l,u),v(i,h),v(i,d),v(d,m),v(i,g),v(i,w),v(w,b),v(i,A),v(i,D),v(D,K),v(i,te),v(i,oe),v(oe,ne),v(i,ce)},p(I,B){I[2]=="dia"&&I[16]>1&&I[1][I[16]-1].diaSesion!=I[14].diaSesion?j||(j=Tc(),j.c(),j.m(e.parentNode,e)):j&&(j.d(1),j=null),I[2]=="apellido"&&I[16]>1&&I[1][I[16]-1].apellido!=I[14].apellido?W||(W=Cc(),W.c(),W.m(n.parentNode,n)):W&&(W.d(1),W=null),I[2]=="plan"&&I[16]>1&&I[1][I[16]-1].plan!=I[14].plan?_||(_=Sc(),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null),B&2&&c!==(c=`${Ac(I[14].diaSesion.slice(8,10),2,!1)}`)&&$e(u,c),B&2&&p!==(p=`${I[14].apellido}, ${I[14].nombre}`)&&$e(m,p),B&2&&T!==(T=I[14].plan.slice(0,4)+"")&&$e(b,T),B&2&&M!==(M=I[14].valorPago+"")&&$e(K,M),B&2&&ee!==(ee=I[14].valorSesion+"")&&$e(ne,ee)},d(I){j&&j.d(I),I&&F(e),W&&W.d(I),I&&F(n),_&&_.d(I),I&&F(s),I&&F(i)}}}function SE(t){let e,n,s,i;e=new CE({}),e.$on("cambioMes",t[9]);let r=t[0]&&t[1].length>0&&_c(t);return{c(){Ut(e.$$.fragment),n=x(),s=C("div"),r&&r.c(),f(s,"class","listadoSesionesPorMes svelte-1j2v6bw")},m(o,a){It(e,o,a),V(o,n,a),V(o,s,a),r&&r.m(s,null),i=!0},p(o,[a]){o[0]&&o[1].length>0?r?r.p(o,a):(r=_c(o),r.c(),r.m(s,null)):r&&(r.d(1),r=null)},i(o){i||(Qe(e.$$.fragment,o),i=!0)},o(o){at(e.$$.fragment,o),i=!1},d(o){At(e,o),o&&F(n),o&&F(s),r&&r.d()}}}function Ac(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function IE(t,e){const n=t.plan.toUpperCase(),s=e.plan.toUpperCase();return n<s?-1:n>s?1:0}function AE(t,e){const n=t.apellido.toUpperCase(),s=e.apellido.toUpperCase();return n<s?-1:n>s?1:0}function kE(t,e){const n=t.diaSesion.toUpperCase(),s=e.diaSesion.toUpperCase();return n<s?-1:n>s?1:0}function DE(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e;const o=Bi(),a=T=>{var b=0,A=0;return console.log(T),T.forEach(D=>{b+=D.valorPago,A+=D.valorSesion}),{totalColPagos:b,totalColValorSesion:A}},l=T=>{i==!1?(o("vistaPulsado",T),n(8,s=T),n(0,i=!i)):(o("vistaPulsado",T),n(8,s=T)),console.log(a(r),`mes: ${s}, cant de sesiones: ${r.length}`)},c=T=>{n(8,s=T),l(T)};let u="dia";function h(){r.sort(AE),n(1,r),n(2,u="apellido")}function d(){r.sort(IE),n(1,r),n(2,u="plan")}function p(){r.sort(kE),n(1,r),n(2,u="dia")}const m=T=>c(T.detail),g=()=>n(0,i=!i),w=()=>n(0,i=!i);return t.$$set=T=>{"mesSeleccionado"in T&&n(8,s=T.mesSeleccionado),"vistaCalculos"in T&&n(0,i=T.vistaCalculos),"arrayParaLaVista"in T&&n(1,r=T.arrayParaLaVista)},[i,r,u,a,c,h,d,p,s,m,g,w]}class PE extends Rt{constructor(e){super(),Ot(this,e,DE,SE,bt,{mesSeleccionado:8,vistaCalculos:0,arrayParaLaVista:1})}}function NE(t){let e,n,s;return{c(){e=C("p"),n=ae("total por paciente: "),s=ae(t[0])},m(i,r){V(i,e,r),v(e,n),v(e,s)},p(i,[r]){r&1&&$e(s,i[0])},i:we,o:we,d(i){i&&F(e)}}}function OE(t,e,n){let{varSumaValorPagoPorPaciente:s}=e;return t.$$set=i=>{"varSumaValorPagoPorPaciente"in i&&n(0,s=i.varSumaValorPagoPorPaciente)},[s]}class RE extends Rt{constructor(e){super(),Ot(this,e,OE,NE,bt,{varSumaValorPagoPorPaciente:0})}}function kc(t,e,n){const s=t.slice();return s[46]=e[n],s}function Dc(t){let e,n,s=`Mes: ${t[7]}`,i,r,o,a,l,c,u,h,d,p,m,g=t[12]&&t[13]&&Pc(t),w=t[0],T=[];for(let b=0;b<w.length;b+=1)T[b]=Oc(kc(t,w,b));return u=new RE({props:{varSumaValorPagoPorPaciente:t[6]}}),p=new PE({props:{vistaCalculos:t[4],arrayParaLaVista:t[5],mesSeleccionado:t[7]}}),p.$on("vistaPulsado",t[25]),{c(){e=C("div"),n=C("h5"),i=ae(s),r=x(),g&&g.c(),o=x(),a=C("div"),l=C("ul");for(let b=0;b<T.length;b+=1)T[b].c();c=x(),Ut(u.$$.fragment),h=x(),d=C("div"),Ut(p.$$.fragment),f(n,"class","svelte-4d8uqx"),f(e,"class","tituloSelectorSesiones svelte-4d8uqx"),f(l,"class","sinPunto svelte-4d8uqx"),f(a,"class","selectorSesiones svelte-4d8uqx"),f(d,"class","svelte-4d8uqx")},m(b,A){V(b,e,A),v(e,n),v(n,i),v(e,r),g&&g.m(e,null),V(b,o,A),V(b,a,A),v(a,l);for(let D=0;D<T.length;D+=1)T[D]&&T[D].m(l,null);v(a,c),It(u,a,null),V(b,h,A),V(b,d,A),It(p,d,null),m=!0},p(b,A){if((!m||A[0]&128)&&s!==(s=`Mes: ${b[7]}`)&&$e(i,s),b[12]&&b[13]?g?g.p(b,A):(g=Pc(b),g.c(),g.m(e,null)):g&&(g.d(1),g=null),A[0]&16523){w=b[0];let K;for(K=0;K<w.length;K+=1){const te=kc(b,w,K);T[K]?T[K].p(te,A):(T[K]=Oc(te),T[K].c(),T[K].m(l,null))}for(;K<T.length;K+=1)T[K].d(1);T.length=w.length}const D={};A[0]&64&&(D.varSumaValorPagoPorPaciente=b[6]),u.$set(D);const M={};A[0]&16&&(M.vistaCalculos=b[4]),A[0]&32&&(M.arrayParaLaVista=b[5]),A[0]&128&&(M.mesSeleccionado=b[7]),p.$set(M)},i(b){m||(Qe(u.$$.fragment,b),Qe(p.$$.fragment,b),m=!0)},o(b){at(u.$$.fragment,b),at(p.$$.fragment,b),m=!1},d(b){b&&F(e),g&&g.d(),b&&F(o),b&&F(a),Ds(T,b),At(u),b&&F(h),b&&F(d),At(p)}}}function Pc(t){let e,n,s,i,r;return{c(){e=C("p"),n=ae("Paciente: "),s=ae(t[12]),i=ae(", "),r=ae(t[13]),f(e,"class","svelte-4d8uqx")},m(o,a){V(o,e,a),v(e,n),v(e,s),v(e,i),v(e,r)},p(o,a){a[0]&4096&&$e(s,o[12]),a[0]&8192&&$e(r,o[13])},d(o){o&&F(e)}}}function Nc(t){let e,n,s,i,r=!1,o,a,l=`${t[46].diaSesion.slice(8,10)} -sesion: $${t[46].valorSesion}-pago: ${t[46].fechaPago.slice(5,10)} $${t[46].valorPago}`,c,u,h,d,p,m;return d=Bc(t[24][0]),{c(){e=C("li"),n=C("input"),o=x(),a=C("label"),c=ae(l),h=x(),f(n,"type","radio"),f(n,"id",s=t[46].id),f(n,"name","sesiones"),n.__value=i=t[46].id,n.value=n.__value,f(n,"class","svelte-4d8uqx"),f(a,"for",u=t[46].id),f(a,"class","svelte-4d8uqx"),f(e,"class","svelte-4d8uqx"),d.p(n)},m(g,w){V(g,e,w),v(e,n),n.checked=n.__value===t[1],v(e,o),v(e,a),v(a,c),v(e,h),p||(m=[J(n,"change",t[14]),J(n,"change",t[23])],p=!0)},p(g,w){w[0]&1&&s!==(s=g[46].id)&&f(n,"id",s),w[0]&1&&i!==(i=g[46].id)&&(n.__value=i,n.value=n.__value,r=!0),(r||w[0]&3)&&(n.checked=n.__value===g[1]),w[0]&1&&l!==(l=`${g[46].diaSesion.slice(8,10)} -sesion: $${g[46].valorSesion}-pago: ${g[46].fechaPago.slice(5,10)} $${g[46].valorPago}`)&&$e(c,l),w[0]&1&&u!==(u=g[46].id)&&f(a,"for",u)},d(g){g&&F(e),d.r(),p=!1,st(m)}}}function Oc(t){let e=Object.values(t[46]).includes(t[3])&&parseInt(t[46].diaSesion.slice(5,7))==t[7],n,s=e&&Nc(t);return{c(){s&&s.c(),n=xc()},m(i,r){s&&s.m(i,r),V(i,n,r)},p(i,r){r[0]&137&&(e=Object.values(i[46]).includes(i[3])&&parseInt(i[46].diaSesion.slice(5,7))==i[7]),e?s?s.p(i,r):(s=Nc(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&F(n)}}}function LE(t){let e,n,s,i,r,o,a,l,c,u,h,d,p,m,g,w,T,b,A,D,M,K,te,oe,ee,ne,ce,j,W,_=t[0].length>0&&Dc(t);return{c(){e=C("main"),n=C("body"),_&&_.c(),s=x(),i=C("div"),r=C("form"),o=C("div"),a=C("div"),l=C("label"),l.textContent="pago",c=C("input"),u=x(),h=C("label"),h.textContent="valor sesion",d=C("input"),p=x(),m=C("div"),g=C("label"),g.textContent="Dia Sesion",w=C("input"),T=x(),b=C("label"),b.textContent="Fecha Pago",A=C("input"),D=x(),M=C("div"),K=C("button"),K.textContent="update",te=x(),oe=C("button"),oe.textContent="delete",ee=x(),ne=C("button"),ne.textContent="Agregar sesión",f(l,"for","valorPago"),f(l,"class","svelte-4d8uqx"),f(c,"name","valorPago"),f(c,"id","valorPago"),f(c,"type","number"),f(c,"step","100"),f(c,"min","0"),f(c,"placeholder","Valor pago"),f(c,"class","svelte-4d8uqx"),f(h,"for","valorSesion"),f(h,"class","svelte-4d8uqx"),f(d,"name","valorSesion"),f(d,"id","valorSesion"),f(d,"type","number"),f(d,"step","100"),f(d,"min","0"),f(d,"placeholder","Valor sesión"),f(d,"class","svelte-4d8uqx"),f(a,"id","inputsFormSesionesI"),f(a,"class","svelte-4d8uqx"),f(g,"for","diaSesion"),f(g,"class","svelte-4d8uqx"),f(w,"name","diaSesion"),f(w,"id","diaSesion"),f(w,"type","date"),f(w,"placeholder","Día sesión"),f(w,"class","svelte-4d8uqx"),f(b,"for","fechaPago"),f(b,"class","svelte-4d8uqx"),f(A,"name","fechaPago"),f(A,"id","fechaPago"),f(A,"type","date"),f(A,"placeholder","Fecha pago"),f(A,"class","svelte-4d8uqx"),f(m,"id","inputsFormSesionesD"),f(m,"class","svelte-4d8uqx"),f(K,"class","svelte-4d8uqx"),f(oe,"class","svelte-4d8uqx"),f(ne,"class","svelte-4d8uqx"),f(M,"id","botonesFormSesiones"),f(M,"class","buttons svelte-4d8uqx"),f(o,"id","form-Sesiones"),f(o,"class","svelte-4d8uqx"),f(r,"class","svelte-4d8uqx"),f(i,"id","contenedor-form-sesiones"),f(i,"class","svelte-4d8uqx"),f(n,"class","svelte-4d8uqx"),f(e,"class","svelte-4d8uqx")},m(I,B){V(I,e,B),v(e,n),_&&_.m(n,null),v(n,s),v(n,i),v(i,r),v(r,o),v(o,a),v(a,l),v(a,c),Ce(c,t[8]),v(a,u),v(a,h),v(a,d),Ce(d,t[9]),v(o,p),v(o,m),v(m,g),v(m,w),Ce(w,t[10]),v(m,T),v(m,b),v(m,A),Ce(A,t[11]),v(o,D),v(o,M),v(M,K),v(M,te),v(M,oe),v(M,ee),v(M,ne),ce=!0,j||(W=[J(c,"input",t[26]),J(d,"input",t[27]),J(w,"input",t[28]),J(A,"input",t[29]),J(K,"click",t[30]),J(oe,"click",t[31]),J(ne,"click",t[15]),J(r,"submit",ff(t[22]))],j=!0)},p(I,B){I[0].length>0?_?(_.p(I,B),B[0]&1&&Qe(_,1)):(_=Dc(I),_.c(),Qe(_,1),_.m(n,s)):_&&(jc(),at(_,1,1,()=>{_=null}),$c()),B[0]&256&&pi(c.value)!==I[8]&&Ce(c,I[8]),B[0]&512&&pi(d.value)!==I[9]&&Ce(d,I[9]),B[0]&1024&&Ce(w,I[10]),B[0]&2048&&Ce(A,I[11])},i(I){ce||(Qe(_),ce=!0)},o(I){at(_),ce=!1},d(I){I&&F(e),_&&_.d(),j=!1,st(W)}}}function ME(t,e,n){let s,i,r;Jt(t,fi,L=>n(3,s=L)),Jt(t,Ro,L=>n(12,i=L)),Jt(t,Lo,L=>n(13,r=L));let{sesiones:o}=e,{pacientes:a}=e,{planes:l}=e,{planSeleccionado:c}=e,u=!1,h=[],d,p=0;const m=new Date;let g=m.getMonth()+1,w=m.getFullYear(),T=g;console.log(`mesSeleccionado ${T}`);let b,A,D=0;const M=L=>{if(n(1,b=L.target.value),console.log(o),n(2,A=o.find(je=>je.id===b)),console.log("selectedSession",A),n(8,ee=A.valorPago),console.log(`planSeleccionado: ${c}`),typeof c.plan>"u"||c.plan=="particular"||!c)n(9,ne=A.valorSesion),console.log("particular",ne);else{var pe=l.find(je=>je.plan==c);console.log(pe),console.log("OS",ne)}n(11,j=A.fechaPago),n(10,ce=A.diaSesion)},K=async()=>{console.log("Add sesion",A);try{const L=await kd(it(De,"sesiones"),{valorPago:ee,valorSesion:ne,diaSesion:ce,fechaPago:j,pacienteID:s});console.log("sesion agregada"),Dn({text:"Nueva sesion agregada"}).showToast(),n(1,b=L.id)}catch(L){console.error(L)}},te=async L=>{console.log("Update sesion",L);try{await Ra(Ct(De,"sesiones",L.id),{valorPago:ee,valorSesion:ne,fechaPago:j,diaSesion:ce}),Dn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(pe){console.log(pe)}},oe=async L=>{console.log("Delete sesion",L);try{await Ao(Ct(De,"sesiones",L.id)),Dn({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(pe){console.error(pe)}};let ee=5e3,ne=5e3,ce=new Date().toISOString().slice(0,10),j=new Date().toISOString().slice(0,10);g.toString().padStart(2,"0"),w.toString();let W=L=>o.filter(je=>je.pacienteID===L&&je.diaSesion.slice(5,7)===T.toString().padStart(2,"0")).reduce((je,$)=>je+$.valorSesion,0);const _=async L=>{n(7,T=L);const pe=await I(T);n(5,h=pe[1]),console.log(Array.isArray(pe[1])),console.log(pe[1]),n(4,u=!0)},I=async L=>{L||(L=g);try{const pe=await EE(L);D=0,p=0;let je=[];return pe.forEach($=>{let Ie=$.pacienteID;const Je=a.find(Xn=>Xn.id==Ie);var Ae=$.valorPago;if(Ae==null&&(Ae=0),typeof Ae=="number")if(Je.plan=="particular"){D+=Ae,Ae<ne&&(p+=ne-Ae);var Tr={diaSesion:$.diaSesion,apellido:Je.apellido,nombre:Je.nombre,plan:Je.plan.plan?Je.plan.plan:"particular",valorPago:Ae,valorSesion:$.valorSesion};je.push(Tr)}else{const Xn=Je.plan;var Tr={diaSesion:$.diaSesion,apellido:Je.apellido,nombre:Je.nombre,plan:Je.plan.plan?Je.plan.plan:"particular",valorPago:Ae,valorSesion:$.valorSesion};je.push(Tr),Ae<Xn.valorCoseguro&&(p+=Xn.valorCoseguro-Ae),D+=Xn.valorOs+Ae}}),n(6,d=W(s)),[D,je]}catch(pe){return console.error("Error al obtener las sesiones y los pagos:",pe),[]}},B=[[]];function Xe(L){yf.call(this,t,L)}function ze(){b=this.__value,n(1,b)}const mn=async L=>_(L.detail);function _t(){ee=pi(this.value),n(8,ee)}function yn(){ne=pi(this.value),n(9,ne)}function pt(){ce=this.value,n(10,ce)}function k(){j=this.value,n(11,j)}const ve=()=>te(A),fe=()=>oe(A);return t.$$set=L=>{"sesiones"in L&&n(0,o=L.sesiones),"pacientes"in L&&n(19,a=L.pacientes),"planes"in L&&n(20,l=L.planes),"planSeleccionado"in L&&n(21,c=L.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&1572865&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",l),t.$$.dirty[0]&7&&(n(2,A=o.find(L=>L.id===b)),console.log(A||"sin seleccion de sesion")),t.$$.dirty[0]&8&&n(6,d=W(s))},I(),[o,b,A,s,u,h,d,T,ee,ne,ce,j,i,r,M,K,te,oe,_,a,l,c,Xe,ze,B,mn,_t,yn,pt,k,ve,fe]}class xE extends Rt{constructor(e){super(),Ot(this,e,ME,LE,bt,{sesiones:0,pacientes:19,planes:20,planSeleccionado:21},null,[-1,-1])}}function BE(t){let e,n,s,i,r,o,a,l,c,u,h,d,p;return a=new wE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],optionsPlan:t[1],planSeleccionado:Rc}}),u=new xE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],planSeleccionado:Rc}}),{c(){e=C("body"),n=C("button"),n.textContent="generar backup firestore",s=x(),i=C("div"),r=C("h5"),r.textContent="Listados de Pacientes",o=x(),Ut(a.$$.fragment),l=x(),c=C("div"),Ut(u.$$.fragment),f(r,"class","svelte-17a4mi0"),f(i,"class","contenedor-pacientes svelte-17a4mi0"),f(c,"class","contenedor-sesiones svelte-17a4mi0"),f(e,"class","svelte-17a4mi0")},m(m,g){V(m,e,g),v(e,n),v(e,s),v(e,i),v(i,r),v(i,o),It(a,i,null),v(e,l),v(e,c),It(u,c,null),h=!0,d||(p=J(n,"click",t[4]),d=!0)},p(m,[g]){const w={};g&4&&(w.sesiones=m[2]),g&8&&(w.pacientes=m[3]),g&1&&(w.planes=m[0]),g&2&&(w.optionsPlan=m[1]),a.$set(w);const T={};g&4&&(T.sesiones=m[2]),g&8&&(T.pacientes=m[3]),g&1&&(T.planes=m[0]),u.$set(T)},i(m){h||(Qe(a.$$.fragment,m),Qe(u.$$.fragment,m),h=!0)},o(m){at(a.$$.fragment,m),at(u.$$.fragment,m),h=!1},d(m){m&&F(e),At(a),At(u),d=!1,p()}}}let Rc="particular";function FE(t,e,n){let s=[],i=[],r=[],o=[];Uc(()=>{const l=[],c=it(De,"sesiones"),u=it(De,"Pacientes"),h=it(De,"planes"),d=ls(c,Vr("diaSesion")),p=ls(u,Vr("apellido")),m=ls(h,Vr("plan")),g=qr(d,b=>{n(2,s=b.docs.map(A=>({id:A.id,...A.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(g);const w=qr(p,b=>{n(3,i=b.docs.map(A=>({id:A.id,...A.data()})))});l.push(w);const T=qr(m,b=>{n(0,r=b.docs.map(A=>({id:A.id,...A.data()})))});return l.push(T),()=>{l.forEach(b=>b())}});const a=()=>{const l="sesiones"+li().toString()+"BU",c=it(De,l);s.forEach(async m=>{const g=Ct(c);try{await Ur(g,m),console.log("Documento sesion creado exitosamente")}catch(w){console.error("Error al crear el documento sesion:",w)}});const u="planes"+li().toString()+"BU",h=it(De,u);r.forEach(async m=>{const g=Ct(h);try{await Ur(g,m),console.log("Documento plan creado exitosamente")}catch(w){console.error("Error al crear el documento plan:",w)}});const d="Pacientes"+li().toString()+"BU",p=it(De,d);i.forEach(async m=>{const g=Ct(p);try{await Ur(g,m),console.log("Documento paciente creado exitosamente")}catch(w){console.error("Error al crear el documento paciente:",w)}})};return t.$$.update=()=>{t.$$.dirty&3&&(r.length!=0?(console.log(r),n(1,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,o,s,i,a]}class VE extends Rt{constructor(e){super(),Ot(this,e,FE,BE,bt,{})}}function UE(t){let e,n,s;return n=new VE({}),{c(){e=C("div"),Ut(n.$$.fragment),f(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){V(i,e,r),It(n,e,null),s=!0},p:we,i(i){s||(Qe(n.$$.fragment,i),s=!0)},o(i){at(n.$$.fragment,i),s=!1},d(i){i&&F(e),At(n)}}}function qE(t){let e,n,s,i,r,o;return{c(){e=C("div"),n=C("h1"),n.textContent="ingrese la contraseña:",s=x(),i=C("input"),f(n,"class","svelte-uueu6x"),f(i,"type","password"),f(i,"class","svelte-uueu6x"),f(e,"class","ingreso svelte-uueu6x")},m(a,l){V(a,e,l),v(e,n),v(e,s),v(e,i),Ce(i,t[1]),r||(o=[J(i,"input",t[3]),J(i,"input",t[2])],r=!0)},p(a,l){l&2&&i.value!==a[1]&&Ce(i,a[1])},i:we,o:we,d(a){a&&F(e),r=!1,st(o)}}}function jE(t){let e,n,s,i;const r=[qE,UE],o=[];function a(l,c){return l[0]==="nada"?0:l[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=C("main"),s&&s.c(),f(e,"class","svelte-uueu6x")},m(l,c){V(l,e,c),~n&&o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n===u?~n&&o[n].p(l,c):(s&&(jc(),at(o[u],1,1,()=>{o[u]=null}),$c()),~n?(s=o[n],s?s.p(l,c):(s=o[n]=r[n](l),s.c()),Qe(s,1),s.m(e,null)):s=null)},i(l){i||(Qe(s),i=!0)},o(l){at(s),i=!1},d(l){l&&F(e),~n&&o[n].d()}}}function $E(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class HE extends Rt{constructor(e){super(),Ot(this,e,$E,jE,bt,{})}}new HE({target:document.getElementById("app")});
