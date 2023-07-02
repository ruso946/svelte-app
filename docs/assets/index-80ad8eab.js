(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ge(){}function Nc(t){return t()}function Ka(){return Object.create(null)}function Xe(t){t.forEach(Nc)}function Oc(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function of(t){return Object.keys(t).length===0}function af(t,...e){if(t==null)return ge;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(af(e,n))}function vn(t,e,n){return t.set(n),e}function y(t,e){t.appendChild(e)}function X(t,e,n){t.insertBefore(e,n||null)}function Q(t){t.parentNode&&t.parentNode.removeChild(t)}function Ps(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function j(){return G(" ")}function Rc(){return G("")}function J(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function lf(t){return function(e){return e.preventDefault(),t.call(this,e)}}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function cf(t){let e;return{p(...n){e=n,e.forEach(s=>t.push(s))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function gi(t){return t===""?null:+t}function uf(t){return Array.from(t.childNodes)}function _e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ee(t,e){t.value=e??""}function On(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function hf(t){for(const e of t.options)if(!e.disabled)return e}function Lo(t){const e=t.querySelector(":checked")||hf(t);return e&&e.__value}function Zs(t,e,n){t.classList[n?"add":"remove"](e)}function df(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let fs;function rs(t){fs=t}function Lc(){if(!fs)throw new Error("Function called outside component initialization");return fs}function Mc(t){Lc().$$.on_mount.push(t)}function Fi(){const t=Lc();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=df(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function ff(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const En=[],Ga=[];let Sn=[];const Wa=[],pf=Promise.resolve();let zr=!1;function gf(){zr||(zr=!0,pf.then(xc))}function Rn(t){Sn.push(t)}const Tr=new Set;let wn=0;function xc(){if(wn!==0)return;const t=fs;do{try{for(;wn<En.length;){const e=En[wn];wn++,rs(e),mf(e.$$)}}catch(e){throw En.length=0,wn=0,e}for(rs(null),En.length=0,wn=0;Ga.length;)Ga.pop()();for(let e=0;e<Sn.length;e+=1){const n=Sn[e];Tr.has(n)||(Tr.add(n),n())}Sn.length=0}while(En.length);for(;Wa.length;)Wa.pop()();zr=!1,Tr.clear(),rs(t)}function mf(t){if(t.fragment!==null){t.update(),Xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Rn)}}function yf(t){const e=[],n=[];Sn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Sn=e}const li=new Set;let Zt;function Fc(){Zt={r:0,c:[],p:Zt}}function Bc(){Zt.r||Xe(Zt.c),Zt=Zt.p}function ze(t,e){t&&t.i&&(li.delete(t),t.i(e))}function Ze(t,e,n,s){if(t&&t.o){if(li.has(t))return;li.add(t),Zt.c.push(()=>{li.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Bt(t){t&&t.c()}function Ct(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Rn(()=>{const o=t.$$.on_mount.map(Nc).filter(Oc);t.$$.on_destroy?t.$$.on_destroy.push(...o):Xe(o),t.$$.on_mount=[]}),r.forEach(Rn)}function St(t,e){const n=t.$$;n.fragment!==null&&(yf(n.after_update),Xe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vf(t,e){t.$$.dirty[0]===-1&&(En.push(t),gf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pt(t,e,n,s,i,r,o,a=[-1]){const l=fs;rs(t);const c=t.$$={fragment:null,ctx:[],props:r,update:ge,not_equal:i,bound:Ka(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ka(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const g=f.length?f[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&vf(t,h)),d}):[],c.update(),u=!0,Xe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=uf(e.target);c.fragment&&c.fragment.l(h),h.forEach(Q)}else c.fragment&&c.fragment.c();e.intro&&ze(t.$$.fragment),Ct(t,e.target,e.anchor,e.customElement),xc()}rs(l)}class Nt{$destroy(){St(this,1),this.$destroy=ge}$on(e,n){if(!Oc(n))return ge;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!of(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let ci=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}_${o}_${s}_${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function Qa(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Ya(t){let e,n=t[12].plan+"",s;return{c(){e=_("option"),s=G(n),e.__value=t[14],e.value=e.__value},m(i,r){X(i,e,r),y(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&_e(s,n)},d(i){i&&Q(e)}}}function wf(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=Ya(Qa(t,a,c));return{c(){e=_("div"),n=_("input"),s=j(),i=_("select");for(let c=0;c<l.length;c+=1)l[c].c();p(n,"type","checkbox"),p(n,"name","CheckBoxParticular"),p(n,"id","CheckBoxParticular"),p(i,"name","plan"),p(i,"id","plan"),p(i,"class","svelte-1de4xhy"),t[1]===void 0&&Rn(()=>t[8].call(i)),Zs(i,"SelectPlanVisible",t[0]),Zs(i,"SelectPlanHidden",t[3]),p(e,"id","selectPlanContainer"),p(e,"class","svelte-1de4xhy")},m(c,u){X(c,e,u),y(e,n),n.checked=t[0],y(e,s),y(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);On(i,t[1]),r||(o=[J(n,"change",t[7]),J(n,"change",t[4]),J(i,"change",t[8]),J(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=Qa(c,a,h);l[h]?l[h].p(d,u):(l[h]=Ya(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&On(i,c[1]),u&1&&Zs(i,"SelectPlanVisible",c[0]),u&8&&Zs(i,"SelectPlanHidden",c[3])},i:ge,o:ge,d(c){c&&Q(e),Ps(l,c),r=!1,Xe(o)}}}function bf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=v=>{n(0,r=v)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=v=>{var w=v.target.checked;l(w),c()},h=Fi(),d=v=>{n(1,o=parseInt(v.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function f(){r=this.checked,n(0,r)}function g(){o=Lo(this),n(1,o)}return t.$$set=v=>{"planes"in v&&n(2,s=v.planes),"planSeleccionado"in v&&n(6,i=v.planSeleccionado),"SelectPlanVisible"in v&&n(0,r=v.SelectPlanVisible),"indicePlan"in v&&n(1,o=v.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,f,g]}class Ef extends Nt{constructor(e){super(),Pt(this,e,bf,wf,yt,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}/**
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
 */const Vc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_f=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_f(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Tf;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cf=function(t){const e=Vc(t);return Uc.encodeByteArray(e,!0)},mi=function(t){return Cf(t).replace(/\./g,"")},Sf=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function If(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Af=()=>If().__FIREBASE_DEFAULTS__,kf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Df=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sf(t[1]);return e&&JSON.parse(e)},jc=()=>{try{return Af()||kf()||Df()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pf=t=>{var e,n;return(n=(e=jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qc=t=>{const e=Pf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Nf=()=>{var t;return(t=jc())===null||t===void 0?void 0:t.config};/**
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
 */class Of{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $c(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mi(JSON.stringify(n)),mi(JSON.stringify(o)),a].join(".")}function Rf(){try{return typeof indexedDB=="object"}catch{return!1}}function Lf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Mf="FirebaseError";class hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Mf,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hc.prototype.create)}}class Hc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,s)}}function xf(t,e){return t.replace(Ff,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ff=/\{\$([^}]+)}/g;function Kr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Xa(r)&&Xa(o)){if(!Kr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Xa(t){return t!==null&&typeof t=="object"}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Bf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Of;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uf(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vf(t){return t===Xt?void 0:t}function Uf(t){return t.instantiationMode==="EAGER"}/**
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
 */class jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const qf={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},$f=Z.INFO,Hf={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},zf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Hf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=$f,this._logHandler=zf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Kf=(t,e)=>e.some(n=>t instanceof n);let Ja,Za;function Gf(){return Ja||(Ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wf(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kc=new WeakMap,Gr=new WeakMap,Gc=new WeakMap,Cr=new WeakMap,Mo=new WeakMap;function Qf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kc.set(n,t)}).catch(()=>{}),Mo.set(e,t),e}function Yf(t){if(Gr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Gr.set(t,e)}let Wr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xf(t){Wr=t(Wr)}function Jf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sr(this),e,...n);return Gc.set(s,e.sort?e.sort():[e]),Rt(s)}:Wf().includes(t)?function(...e){return t.apply(Sr(this),e),Rt(Kc.get(this))}:function(...e){return Rt(t.apply(Sr(this),e))}}function Zf(t){return typeof t=="function"?Jf(t):(t instanceof IDBTransaction&&Yf(t),Kf(t,Gf())?new Proxy(t,Wr):t)}function Rt(t){if(t instanceof IDBRequest)return Qf(t);if(Cr.has(t))return Cr.get(t);const e=Zf(t);return e!==t&&(Cr.set(t,e),Mo.set(e,t)),e}const Sr=t=>Mo.get(t);function ep(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Rt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Rt(o.result),l.oldVersion,l.newVersion,Rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const tp=["get","getKey","getAll","getAllKeys","count"],np=["put","add","delete","clear"],Ir=new Map;function el(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ir.get(e))return Ir.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=np.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||tp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ir.set(e,r),r}Xf(t=>({...t,get:(e,n,s)=>el(e,n)||t.get(e,n,s),has:(e,n)=>!!el(e,n)||t.has(e,n)}));/**
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
 */class sp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ip(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ip(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qr="@firebase/app",tl="0.9.4";/**
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
 */const on=new zc("@firebase/app"),rp="@firebase/app-compat",op="@firebase/analytics-compat",ap="@firebase/analytics",lp="@firebase/app-check-compat",cp="@firebase/app-check",up="@firebase/auth",hp="@firebase/auth-compat",dp="@firebase/database",fp="@firebase/database-compat",pp="@firebase/functions",gp="@firebase/functions-compat",mp="@firebase/installations",yp="@firebase/installations-compat",vp="@firebase/messaging",wp="@firebase/messaging-compat",bp="@firebase/performance",Ep="@firebase/performance-compat",_p="@firebase/remote-config",Tp="@firebase/remote-config-compat",Cp="@firebase/storage",Sp="@firebase/storage-compat",Ip="@firebase/firestore",Ap="@firebase/firestore-compat",kp="firebase",Dp="9.17.2";/**
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
 */const Yr="[DEFAULT]",Pp={[Qr]:"fire-core",[rp]:"fire-core-compat",[ap]:"fire-analytics",[op]:"fire-analytics-compat",[cp]:"fire-app-check",[lp]:"fire-app-check-compat",[up]:"fire-auth",[hp]:"fire-auth-compat",[dp]:"fire-rtdb",[fp]:"fire-rtdb-compat",[pp]:"fire-fn",[gp]:"fire-fn-compat",[mp]:"fire-iid",[yp]:"fire-iid-compat",[vp]:"fire-fcm",[wp]:"fire-fcm-compat",[bp]:"fire-perf",[Ep]:"fire-perf-compat",[_p]:"fire-rc",[Tp]:"fire-rc-compat",[Cp]:"fire-gcs",[Sp]:"fire-gcs-compat",[Ip]:"fire-fst",[Ap]:"fire-fst-compat","fire-js":"fire-js",[kp]:"fire-js-all"};/**
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
 */const yi=new Map,Xr=new Map;function Np(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(Xr.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;Xr.set(e,t);for(const n of yi.values())Np(n,t);return!0}function Wc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Op={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new Hc("app","Firebase",Op);/**
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
 */class Rp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Qc=Dp;function Yc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=Nf()),!n)throw Lt.create("no-options");const r=yi.get(i);if(r){if(Kr(n,r.options)&&Kr(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new jf(i);for(const l of Xr.values())o.addComponent(l);const a=new Rp(n,s,o);return yi.set(i,a),a}function Xc(t=Yr){const e=yi.get(t);if(!e&&t===Yr)return Yc();if(!e)throw Lt.create("no-app",{appName:t});return e}function Mt(t,e,n){var s;let i=(s=Pp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}ps(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Lp="firebase-heartbeat-database",Mp=1,gs="firebase-heartbeat-store";let Ar=null;function Jc(){return Ar||(Ar=ep(Lp,Mp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),Ar}async function xp(t){try{return(await Jc()).transaction(gs).objectStore(gs).get(Zc(t))}catch(e){if(e instanceof hn)on.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});on.warn(n.message)}}}async function nl(t,e){try{const s=(await Jc()).transaction(gs,"readwrite");return await s.objectStore(gs).put(e,Zc(t)),s.done}catch(n){if(n instanceof hn)on.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(s.message)}}}function Zc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fp=1024,Bp=30*24*60*60*1e3;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Bp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sl(),{heartbeatsToSend:n,unsentEntries:s}=Up(this._heartbeatsCache.heartbeats),i=mi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sl(){return new Date().toISOString().substring(0,10)}function Up(t,e=Fp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),il(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),il(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rf()?Lf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function il(t){return mi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qp(t){ps(new Ln("platform-logger",e=>new sp(e),"PRIVATE")),ps(new Ln("heartbeat",e=>new Vp(e),"PRIVATE")),Mt(Qr,tl,t),Mt(Qr,tl,"esm2017"),Mt("fire-js","")}qp("");var $p="firebase",Hp="9.17.2";/**
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
 */Mt($p,Hp,"app");var zp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,xo=xo||{},B=zp||self;function vi(){}function Bi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ns(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Kp(t){return Object.prototype.hasOwnProperty.call(t,kr)&&t[kr]||(t[kr]=++Gp)}var kr="closure_uid_"+(1e9*Math.random()>>>0),Gp=0;function Wp(t,e,n){return t.call.apply(t.bind,arguments)}function Qp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=Wp:Le=Qp,Le.apply(null,arguments)}function ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function De(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ht(){this.s=this.s,this.o=this.o}var Yp=0;Ht.prototype.s=!1;Ht.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Yp!=0)&&Kp(this)};Ht.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function rl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Bi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Xp=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",vi,e),B.removeEventListener("test",vi,e)}catch{}return t}();function wi(t){return/^[\s\xa0]*$/.test(t)}var ol=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Dr(t,e){return t<e?-1:t>e?1:0}function Vi(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function dt(t){return Vi().indexOf(t)!=-1}function Bo(t){return Bo[" "](t),t}Bo[" "]=vi;function Jp(t){var e=tg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Zp=dt("Opera"),Mn=dt("Trident")||dt("MSIE"),tu=dt("Edge"),Jr=tu||Mn,nu=dt("Gecko")&&!(Vi().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),eg=Vi().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function su(){var t=B.document;return t?t.documentMode:void 0}var bi;e:{var Pr="",Nr=function(){var t=Vi();if(nu)return/rv:([^\);]+)(\)|;)/.exec(t);if(tu)return/Edge\/([\d\.]+)/.exec(t);if(Mn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eg)return/WebKit\/(\S+)/.exec(t);if(Zp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nr&&(Pr=Nr?Nr[1]:""),Mn){var Or=su();if(Or!=null&&Or>parseFloat(Pr)){bi=String(Or);break e}}bi=Pr}var tg={};function ng(){return Jp(function(){let t=0;const e=ol(String(bi)).split("."),n=ol("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Dr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Dr(i[2].length==0,r[2].length==0)||Dr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Zr;if(B.document&&Mn){var al=su();Zr=al||parseInt(bi,10)||void 0}else Zr=void 0;var sg=Zr;function ms(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nu){e:{try{Bo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ig[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ms.X.h.call(this)}}De(ms,Me);var ig={2:"touch",3:"pen",4:"mouse"};ms.prototype.h=function(){ms.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),rg=0;function og(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++rg,this.ba=this.ea=!1}function Ui(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Vo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function iu(t){const e={};for(const n in t)e[n]=t[n];return e}const ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ru(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ll.length;r++)n=ll[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ji(t){this.src=t,this.g={},this.h=0}ji.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=to(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new og(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function eo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=eu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ui(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function to(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Uo="closure_lm_"+(1e6*Math.random()|0),Rr={};function ou(t,e,n,s,i){if(s&&s.once)return lu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ou(t,e[r],n,s,i);return null}return n=$o(n),t&&t[Os]?t.N(e,n,Ns(s)?!!s.capture:!!s,i):au(t,e,n,!1,s,i)}function au(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ns(i)?!!i.capture:!!i,a=qo(t);if(a||(t[Uo]=a=new ji(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=ag(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Xp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(uu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ag(){function t(n){return e.call(t.src,t.listener,n)}const e=lg;return t}function lu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)lu(t,e[r],n,s,i);return null}return n=$o(n),t&&t[Os]?t.O(e,n,Ns(s)?!!s.capture:!!s,i):au(t,e,n,!0,s,i)}function cu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)cu(t,e[r],n,s,i);else s=Ns(s)?!!s.capture:!!s,n=$o(n),t&&t[Os]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=to(r,n,s,i),-1<n&&(Ui(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=qo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=to(e,n,s,i)),(n=-1<t?e[t]:null)&&jo(n))}function jo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Os])eo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(uu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qo(e))?(eo(n,t),n.h==0&&(n.src=null,e[Uo]=null)):Ui(t)}}}function uu(t){return t in Rr?Rr[t]:Rr[t]="on"+t}function lg(t,e){if(t.ba)t=!0;else{e=new ms(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&jo(t),t=n.call(s,e)}return t}function qo(t){return t=t[Uo],t instanceof ji?t:null}var Lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(t){return typeof t=="function"?t:(t[Lr]||(t[Lr]=function(e){return t.handleEvent(e)}),t[Lr])}function Te(){Ht.call(this),this.i=new ji(this),this.P=this,this.I=null}De(Te,Ht);Te.prototype[Os]=!0;Te.prototype.removeEventListener=function(t,e,n,s){cu(this,t,e,n,s)};function Ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var i=e;e=new Me(s,t),ru(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ti(o,s,!0,e)&&i}if(o=e.g=t,i=ti(o,s,!0,e)&&i,i=ti(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ti(o,s,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ui(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ti(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&eo(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ho=B.JSON.stringify;function cg(){var t=fu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ug{constructor(){this.h=this.g=null}add(e,n){const s=hu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hg,t=>t.reset());class hg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dg(t){B.setTimeout(()=>{throw t},0)}function du(t,e){no||fg(),so||(no(),so=!0),fu.add(t,e)}var no;function fg(){var t=B.Promise.resolve(void 0);no=function(){t.then(pg)}}var so=!1,fu=new ug;function pg(){for(var t;t=cg();){try{t.h.call(t.g)}catch(n){dg(n)}var e=hu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}so=!1}function qi(t,e){Te.call(this),this.h=t||1,this.g=e||B,this.j=Le(this.lb,this),this.l=Date.now()}De(qi,Te);D=qi.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(zo(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){qi.X.M.call(this),zo(this),delete this.g};function Ko(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function pu(t){t.g=Ko(()=>{t.g=null,t.i&&(t.i=!1,pu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gg extends Ht{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pu(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(t){Ht.call(this),this.h=t,this.g={}}De(ys,Ht);var cl=[];function gu(t,e,n,s){Array.isArray(n)||(n&&(cl[0]=n.toString()),n=cl);for(var i=0;i<n.length;i++){var r=ou(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function mu(t){Vo(t.g,function(e,n){this.g.hasOwnProperty(n)&&jo(e)},t),t.g={}}ys.prototype.M=function(){ys.X.M.call(this),mu(this)};ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $i(){this.g=!0}$i.prototype.Aa=function(){this.g=!1};function mg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function yg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Cn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wg(t,n)+(s?" "+s:"")})}function vg(t,e){t.info(function(){return"TIMEOUT: "+e})}$i.prototype.info=function(){};function wg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ho(n)}catch{return e}}var dn={},ul=null;function Hi(){return ul=ul||new Te}dn.Pa="serverreachability";function yu(t){Me.call(this,dn.Pa,t)}De(yu,Me);function vs(t){const e=Hi();Ae(e,new yu(e))}dn.STAT_EVENT="statevent";function vu(t,e){Me.call(this,dn.STAT_EVENT,t),this.stat=e}De(vu,Me);function Ve(t){const e=Hi();Ae(e,new vu(e,t))}dn.Qa="timingevent";function wu(t,e){Me.call(this,dn.Qa,t),this.size=e}De(wu,Me);function Rs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var zi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Go(){}Go.prototype.h=null;function hl(t){return t.h||(t.h=t.i())}function Eu(){}var Ls={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wo(){Me.call(this,"d")}De(Wo,Me);function Qo(){Me.call(this,"c")}De(Qo,Me);var io;function Ki(){}De(Ki,Go);Ki.prototype.g=function(){return new XMLHttpRequest};Ki.prototype.i=function(){return{}};io=new Ki;function Ms(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ys(this),this.O=bg,t=Jr?125:void 0,this.T=new qi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var bg=45e3,ro={},Ei={};D=Ms.prototype;D.setTimeout=function(t){this.O=t};function oo(t,e,n){t.K=1,t.v=Wi(It(e)),t.s=n,t.P=!0,Tu(t,null)}function Tu(t,e){t.F=Date.now(),xs(t),t.A=It(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Nu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new _u,t.g=Ju(t.l,n?e:null,!t.s),0<t.N&&(t.L=new gg(Le(t.La,t,t.g),t.N)),gu(t.S,t.g,"readystatechange",t.ib),e=t.H?iu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vs(),mg(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Et(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=Et(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Jr||this.g&&(this.h.h||this.g.fa()||gl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?vs(3):vs(2)),Gi(this);var n=this.g.aa();this.Y=n;t:if(Cu(this)){var s=gl(this.g);t="";var i=s.length,r=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),os(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,yg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var c=a;break t}}c=null}if(n=c)Cn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ao(this,n);else{this.i=!1,this.o=3,Ve(12),en(this),os(this);break e}}this.P?(Su(this,u,o),Jr&&this.i&&u==3&&(gu(this.S,this.T,"tick",this.hb),this.T.start())):(Cn(this.j,this.m,o,null),ao(this,o)),u==4&&en(this),this.i&&!this.I&&(u==4?Wu(this.l,this):(this.i=!1,xs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),en(this),os(this)}}}catch{}finally{}};function Cu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Su(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Eg(t,n),i==Ei){e==4&&(t.o=4,Ve(14),s=!1),Cn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ro){t.o=4,Ve(15),Cn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Cn(t.j,t.m,i,null),ao(t,i);Cu(t)&&i!=Ei&&i!=ro&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ve(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),na(e),e.K=!0,Ve(11))):(Cn(t.j,t.m,n,"[Invalid Chunked Response]"),en(t),os(t))}D.hb=function(){if(this.g){var t=Et(this.g),e=this.g.fa();this.C<e.length&&(Gi(this),Su(this,t,e),this.i&&t!=4&&xs(this))}};function Eg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ei:(n=Number(e.substring(n,s)),isNaN(n)?ro:(s+=1,s+n>e.length?Ei:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,en(this)};function xs(t){t.V=Date.now()+t.O,Iu(t,t.O)}function Iu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rs(Le(t.gb,t),e)}function Gi(t){t.B&&(B.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(vg(this.j,this.A),this.K!=2&&(vs(),Ve(17)),en(this),this.o=2,os(this)):Iu(this,this.V-t)};function os(t){t.l.G==0||t.I||Wu(t.l,t)}function en(t){Gi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,zo(t.T),mu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ao(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||lo(n.h,t))){if(!t.J&&lo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ci(n),Xi(n);else break e;ta(n),Ve(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Rs(Le(n.cb,n),6e3));if(1>=Lu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else tn(n,11)}else if((t.J||n.g==t)&&Ci(n),!wi(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Yo(r,r.h),r.h=null))}if(s.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,le(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Xu(s,s.H?s.ka:null,s.V),o.J){Mu(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Gi(a),xs(a)),s.g=o}else Ku(s);0<n.i.length&&Ji(n)}else c[0]!="stop"&&c[0]!="close"||tn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?tn(n,7):ea(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}vs(4)}catch{}}function _g(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Tg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Au(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Tg(t),s=_g(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function sn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof sn){this.h=e!==void 0?e:t.h,_i(this,t.j),this.s=t.s,this.g=t.g,Ti(this,t.m),this.l=t.l,e=t.i;var n=new ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dl(this,n),this.o=t.o}else t&&(n=String(t).match(ku))?(this.h=!!e,_i(this,n[1]||"",!0),this.s=ts(n[2]||""),this.g=ts(n[3]||"",!0),Ti(this,n[4]),this.l=ts(n[5]||"",!0),dl(this,n[6]||"",!0),this.o=ts(n[7]||"")):(this.h=!!e,this.i=new ws(null,this.h))}sn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,fl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ns(e,fl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ns(n,n.charAt(0)=="/"?Ag:Ig,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,Dg)),t.join("")};function It(t){return new sn(t)}function _i(t,e,n){t.j=n?ts(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ti(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dl(t,e,n){e instanceof ws?(t.i=e,Pg(t.i,t.h)):(n||(e=ns(e,kg)),t.i=new ws(e,t.h))}function le(t,e,n){t.i.set(e,n)}function Wi(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ts(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Sg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Sg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fl=/[#\/\?@]/g,Ig=/[#\?:]/g,Ag=/[#\?]/g,kg=/[#\?@]/g,Dg=/#/g;function ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zt(t){t.g||(t.g=new Map,t.h=0,t.i&&Cg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=ws.prototype;D.add=function(t,e){zt(this),this.i=null,t=Hn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Du(t,e){zt(t),e=Hn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Pu(t,e){return zt(t),e=Hn(t,e),t.g.has(e)}D.forEach=function(t,e){zt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.oa=function(){zt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.W=function(t){zt(this);let e=[];if(typeof t=="string")Pu(this,t)&&(e=e.concat(this.g.get(Hn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return zt(this),this.i=null,t=Hn(this,t),Pu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Nu(t,e,n){Du(t,e),0<n.length&&(t.i=null,t.g.set(Hn(t,e),Fo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Hn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Pg(t,e){e&&!t.j&&(zt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Du(this,s),Nu(this,i,n))},t)),t.j=e}var Ng=class{constructor(e,n){this.h=e,this.g=n}};function Ou(t){this.l=t||Og,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Og=10;function Ru(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Lu(t){return t.h?1:t.g?t.g.size:0}function lo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yo(t,e){t.g?t.g.add(e):t.h=e}function Mu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ou.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Fo(t.i)}function Xo(){}Xo.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};Xo.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function Rg(){this.g=new Xo}function Lg(t,e,n){const s=n||"";try{Au(t,function(i,r){let o=i;Ns(i)&&(o=Ho(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Mg(t,e){const n=new $i;if(B.Image){const s=new Image;s.onload=ei(ni,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ei(ni,n,s,"TestLoadImage: error",!1,e),s.onabort=ei(ni,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ei(ni,n,s,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ni(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Fs(t){this.l=t.ac||null,this.j=t.jb||!1}De(Fs,Go);Fs.prototype.g=function(){return new Qi(this.l,this.j)};Fs.prototype.i=function(t){return function(){return t}}({});function Qi(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Qi,Te);var Jo=0;D=Qi.prototype;D.open=function(t,e){if(this.readyState!=Jo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=Jo};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Fu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bs(this):bs(this),this.readyState==3&&Fu(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Bs(this))};D.Ua=function(t){this.g&&(this.response=t,Bs(this))};D.ga=function(){this.g&&Bs(this)};function Bs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xg=B.JSON.parse;function ce(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bu,this.K=this.L=!1}De(ce,Te);var Bu="",Fg=/^https?$/i,Bg=["POST","PUT"];D=ce.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():io.g(),this.C=this.u?hl(this.u):hl(io),this.g.onreadystatechange=Le(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){pl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=eu(Bg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ju(this),0<this.B&&((this.K=Vg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.qa,this)):this.A=Ko(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){pl(this,r)}};function Vg(t){return Mn&&ng()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof xo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function pl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vu(t),Yi(t)}function Vu(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),Yi(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yi(this,!0)),ce.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Uu(this):this.fb())};D.fb=function(){Uu(this)};function Uu(t){if(t.h&&typeof xo<"u"&&(!t.C[1]||Et(t)!=4||t.aa()!=2)){if(t.v&&Et(t)==4)Ko(t.Ha,0,t);else if(Ae(t,"readystatechange"),Et(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(ku)[1]||null;if(!i&&B.self&&B.self.location){var r=B.self.location.protocol;i=r.substr(0,r.length-1)}s=!Fg.test(i?i.toLowerCase():"")}n=s}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<Et(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Vu(t)}}finally{Yi(t)}}}}function Yi(t,e){if(t.g){ju(t);const n=t.g,s=t.C[0]?vi:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function ju(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function Et(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xg(e)}};function gl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qu(t){let e="";return Vo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Zo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=qu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function es(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $u(t){this.Ca=0,this.i=[],this.j=new $i,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=es("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=es("baseRetryDelayMs",5e3,t),this.bb=es("retryDelaySeedMs",1e4,t),this.$a=es("forwardChannelMaxRetries",2,t),this.ta=es("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ou(t&&t.concurrentRequestLimit),this.Fa=new Rg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=$u.prototype;D.ma=8;D.G=1;function ea(t){if(Hu(t),t.G==3){var e=t.U++,n=It(t.F);le(n,"SID",t.I),le(n,"RID",e),le(n,"TYPE","terminate"),Vs(t,n),e=new Ms(t,t.j,e,void 0),e.K=2,e.v=Wi(It(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ju(e.l,null),e.g.da(e.v)),e.F=Date.now(),xs(e)}Yu(t)}function Xi(t){t.g&&(na(t),t.g.cancel(),t.g=null)}function Hu(t){Xi(t),t.u&&(B.clearTimeout(t.u),t.u=null),Ci(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Ji(t){Ru(t.h)||t.m||(t.m=!0,du(t.Ja,t),t.C=0)}function Ug(t,e){return Lu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Rs(Le(t.Ja,t,e),Qu(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ms(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=iu(r),ru(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zu(this,i,e),n=It(this.F),le(n,"RID",t),le(n,"CVER",22),this.D&&le(n,"X-HTTP-Session-Id",this.D),Vs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(qu(r)))+"&"+e:this.o&&Zo(n,this.o,r)),Yo(this.h,i),this.Ya&&le(n,"TYPE","init"),this.O?(le(n,"$req",e),le(n,"SID","null"),i.Z=!0,oo(i,n,null)):oo(i,n,e),this.G=2}}else this.G==3&&(t?ml(this,t):this.i.length==0||Ru(this.h)||ml(this))};function ml(t,e){var n;e?n=e.m:n=t.U++;const s=It(t.F);le(s,"SID",t.I),le(s,"RID",n),le(s,"AID",t.T),Vs(t,s),t.o&&t.s&&Zo(s,t.o,t.s),n=new Ms(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Yo(t.h,n),oo(n,s,e)}function Vs(t,e){t.ia&&Vo(t.ia,function(n,s){le(e,s,n)}),t.l&&Au({},function(n,s){le(e,s,n)})}function zu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Le(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Lg(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Ku(t){t.g||t.u||(t.Z=1,du(t.Ia,t),t.A=0)}function ta(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Rs(Le(t.Ia,t),Qu(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,Gu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Rs(Le(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ve(10),Xi(this),Gu(this))};function na(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function Gu(t){t.g=new Ms(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=It(t.sa);le(e,"RID","rpc"),le(e,"SID",t.I),le(e,"CI",t.L?"0":"1"),le(e,"AID",t.T),le(e,"TYPE","xmlhttp"),Vs(t,e),t.o&&t.s&&Zo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Wi(It(e)),n.s=null,n.P=!0,Tu(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Xi(this),ta(this),Ve(19))};function Ci(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function Wu(t,e){var n=null;if(t.g==e){Ci(t),na(t),t.g=null;var s=2}else if(lo(t.h,e))n=e.D,Mu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Hi(),Ae(s,new wu(s,n)),Ji(t)}else Ku(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Ug(t,e)||s==2&&ta(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:tn(t,5);break;case 4:tn(t,10);break;case 3:tn(t,6);break;default:tn(t,2)}}}function Qu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function tn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Le(t.kb,t);n||(n=new sn("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||_i(n,"https"),Wi(n)),Mg(n.toString(),s)}else Ve(2);t.G=0,t.l&&t.l.va(e),Yu(t),Hu(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Yu(t){if(t.G=0,t.la=[],t.l){const e=xu(t.h);(e.length!=0||t.i.length!=0)&&(rl(t.la,e),rl(t.la,t.i),t.h.i.length=0,Fo(t.i),t.i.length=0),t.l.ua()}}function Xu(t,e,n){var s=n instanceof sn?It(n):new sn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ti(s,s.m);else{var i=B.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new sn(null,void 0);s&&_i(r,s),e&&(r.g=e),i&&Ti(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&le(s,n,e),le(s,"VER",t.ma),Vs(t,s),s}function Ju(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new Fs({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function Zu(){}D=Zu.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Si(){if(Mn&&!(10<=Number(sg)))throw Error("Environmental error: no available transport.")}Si.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){Te.call(this),this.g=new $u(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zn(this)}De(Qe,Te);Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ve(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Xu(t,null,t.V),Ji(t)};Qe.prototype.close=function(){ea(this.g)};Qe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ho(t),t=n);e.i.push(new Ng(e.ab++,t)),e.G==3&&Ji(e)};Qe.prototype.M=function(){this.g.l=null,delete this.j,ea(this.g),delete this.g,Qe.X.M.call(this)};function eh(t){Wo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(eh,Wo);function th(){Qo.call(this),this.status=1}De(th,Qo);function zn(t){this.g=t}De(zn,Zu);zn.prototype.xa=function(){Ae(this.g,"a")};zn.prototype.wa=function(t){Ae(this.g,new eh(t))};zn.prototype.va=function(t){Ae(this.g,new th)};zn.prototype.ua=function(){Ae(this.g,"b")};Si.prototype.createWebChannel=Si.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;zi.NO_ERROR=0;zi.TIMEOUT=8;zi.HTTP_ERROR=6;bu.COMPLETE="complete";Eu.EventType=Ls;Ls.OPEN="a";Ls.CLOSE="b";Ls.ERROR="c";Ls.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var jg=function(){return new Si},qg=function(){return Hi()},Mr=zi,$g=bu,Hg=dn,yl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},zg=Fs,si=Eu,Kg=ce;const vl="@firebase/firestore";/**
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
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
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
 */let Kn="9.17.2";/**
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
 */const an=new zc("@firebase/firestore");function wl(){return an.logLevel}function N(t,...e){if(an.logLevel<=Z.DEBUG){const n=e.map(sa);an.debug(`Firestore (${Kn}): ${t}`,...n)}}function At(t,...e){if(an.logLevel<=Z.ERROR){const n=e.map(sa);an.error(`Firestore (${Kn}): ${t}`,...n)}}function co(t,...e){if(an.logLevel<=Z.WARN){const n=e.map(sa);an.warn(`Firestore (${Kn}): ${t}`,...n)}}function sa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function x(t="Unexpected state"){const e=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: `+t;throw At(e),new Error(e)}function re(t,e){t||x()}function q(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class nh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class Wg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Qg{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new xt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new xt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new nh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Pe(e)}}class Yg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Xg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Yg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new Jg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function em(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class sh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=em(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ee(t,e){return t<e?-1:t>e?1:0}function xn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new me(0,0))}static max(){return new U(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Es{constructor(e,n,s){n===void 0?n=0:n>e.length&&x(),s===void 0?s=e.length-n:s>e.length-n&&x(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Es.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Es?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Es{construct(e,n,s){return new oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const tm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Es{construct(e,n,s){return new Oe(e,n,s)}static isValidIdentifier(e){return tm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(oe.fromString(e))}static fromName(e){return new O(oe.fromString(e).popFirst(5))}static empty(){return new O(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new oe(e.slice()))}}function nm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(s===1e9?new me(n+1,0):new me(n,s));return new Vt(i,O.empty(),e)}function sm(t){return new Vt(t.readTime,t.key,-1)}class Vt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Vt(U.min(),O.empty(),-1)}static max(){return new Vt(U.max(),O.empty(),-1)}}function im(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const rm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class om{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Us(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==rm)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(i=>i?E.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new E((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new E((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function js(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class am{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class _s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function bl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Zi(t){return t==null}function Ii(t){return t===0&&1/t==-1/0}function lm(t){return typeof t=="number"&&Number.isInteger(t)&&!Ii(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class cm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new cm("Invalid base64 string: "+i):i}}(e);return new xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const um=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(t){if(re(!!t),typeof t=="string"){let e=0;const n=um.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:he(t.seconds),nanos:he(t.nanos)}}function he(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fn(t){return typeof t=="string"?xe.fromBase64String(t):xe.fromUint8Array(t)}/**
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
 */function rh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function oh(t){const e=t.mapValue.fields.__previous_value__;return rh(e)?oh(e):e}function Ts(t){const e=Ut(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
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
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ln(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rh(t)?4:hm(t)?9007199254740991:10:x()}function pt(t,e){if(t===e)return!0;const n=ln(t);if(n!==ln(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ts(t).isEqual(Ts(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ut(s.timestampValue),o=Ut(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fn(s.bytesValue).isEqual(Fn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return he(s.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return he(s.integerValue)===he(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=he(s.doubleValue),o=he(i.doubleValue);return r===o?Ii(r)===Ii(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return xn(t.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(bl(r)!==bl(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!pt(r[a],o[a])))return!1;return!0}(t,e);default:return x()}}function Cs(t,e){return(t.values||[]).find(n=>pt(n,e))!==void 0}function Bn(t,e){if(t===e)return 0;const n=ln(t),s=ln(e);if(n!==s)return ee(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=he(i.integerValue||i.doubleValue),a=he(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return El(t.timestampValue,e.timestampValue);case 4:return El(Ts(t),Ts(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Fn(i),a=Fn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ee(o[l],a[l]);if(c!==0)return c}return ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ee(he(i.latitude),he(r.latitude));return o!==0?o:ee(he(i.longitude),he(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Bn(o[l],a[l]);if(c)return c}return ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ii.mapValue&&r===ii.mapValue)return 0;if(i===ii.mapValue)return 1;if(r===ii.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ee(a[u],c[u]);if(h!==0)return h;const d=Bn(o[a[u]],l[c[u]]);if(d!==0)return d}return ee(a.length,c.length)}(t.mapValue,e.mapValue);default:throw x()}}function El(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Ut(t),s=Ut(e),i=ee(n.seconds,s.seconds);return i!==0?i:ee(n.nanos,s.nanos)}function Vn(t){return uo(t)}function uo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ut(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=uo(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${uo(s.fields[a])}`;return r+"}"}(t.mapValue):x();var e,n}function _l(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ho(t){return!!t&&"integerValue"in t}function ra(t){return!!t&&"arrayValue"in t}function Tl(t){return!!t&&"nullValue"in t}function Cl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ui(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ai{constructor(e,n){this.position=e,this.inclusive=n}}function Sl(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=Bn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Il(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ah{}class de extends ah{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new fm(e,n,s):n==="array-contains"?new mm(e,s):n==="in"?new ym(e,s):n==="not-in"?new vm(e,s):n==="array-contains-any"?new wm(e,s):new de(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new pm(e,s):new gm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bn(n,this.value)):n!==null&&ln(this.value)===ln(n)&&this.matchesComparison(Bn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class at extends ah{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new at(e,n)}matches(e){return lh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lh(t){return t.op==="and"}function ch(t){return dm(t)&&lh(t)}function dm(t){for(const e of t.filters)if(e instanceof at)return!1;return!0}function fo(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+Vn(t.value);if(ch(t))return t.filters.map(e=>fo(e)).join(",");{const e=t.filters.map(n=>fo(n)).join(",");return`${t.op}(${e})`}}function uh(t,e){return t instanceof de?function(n,s){return s instanceof de&&n.op===s.op&&n.field.isEqual(s.field)&&pt(n.value,s.value)}(t,e):t instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&uh(r,s.filters[o]),!0):!1}(t,e):void x()}function hh(t){return t instanceof de?function(e){return`${e.field.canonicalString()} ${e.op} ${Vn(e.value)}`}(t):t instanceof at?function(e){return e.op.toString()+" {"+e.getFilters().map(hh).join(" ,")+"}"}(t):"Filter"}class fm extends de{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class pm extends de{constructor(e,n){super(e,"in",n),this.keys=dh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gm extends de{constructor(e,n){super(e,"not-in",n),this.keys=dh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class mm extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ra(n)&&Cs(n.arrayValue,this.value)}}class ym extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cs(this.value.arrayValue,n)}}class vm extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cs(this.value.arrayValue,n)}}class wm extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ra(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Cs(this.value.arrayValue,s))}}/**
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
 */class In{constructor(e,n="asc"){this.field=e,this.dir=n}}function bm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Se.RED,this.left=i??Se.EMPTY,this.right=r??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Se(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(e){return new Al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class Al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ge{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Ge([])}unionWith(e){let n=new ye(Oe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ge(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ui(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=Oe.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ui(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ui(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){fn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new He(as(this.value))}}function fh(t){const e=[];return fn(t.fields,(n,s)=>{const i=new Oe([n]);if(ui(s)){const r=fh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ge(e)}/**
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
 */class Ne{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,U.min(),U.min(),U.min(),He.empty(),0)}static newFoundDocument(e,n,s,i){return new Ne(e,1,n,U.min(),s,i,0)}static newNoDocument(e,n){return new Ne(e,2,n,U.min(),U.min(),He.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,U.min(),U.min(),He.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Em{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function kl(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Em(t,e,n,s,i,r,o)}function oa(t){const e=q(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>fo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Zi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vn(s)).join(",")),e._t=n}return e._t}function aa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Il(t.startAt,e.startAt)&&Il(t.endAt,e.endAt)}function po(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function _m(t,e,n,s,i,r,o,a){return new Gn(t,e,n,s,i,r,o,a)}function la(t){return new Gn(t)}function Dl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ca(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function er(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ph(t){return t.collectionGroup!==null}function An(t){const e=q(t);if(e.wt===null){e.wt=[];const n=er(e),s=ca(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new In(n)),e.wt.push(new In(Oe.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new In(Oe.keyField(),r))}}}return e.wt}function kt(t){const e=q(t);if(!e.gt)if(e.limitType==="F")e.gt=kl(e.path,e.collectionGroup,An(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of An(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new In(r.field,o))}const s=e.endAt?new Ai(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ai(e.startAt.position,e.startAt.inclusive):null;e.gt=kl(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function go(t,e){e.getFirstInequalityField(),er(t);const n=t.filters.concat([e]);return new Gn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mo(t,e,n){return new Gn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tr(t,e){return aa(kt(t),kt(e))&&t.limitType===e.limitType}function gh(t){return`${oa(kt(t))}|lt:${t.limitType}`}function yo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>hh(s)).join(", ")}]`),Zi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vn(s)).join(",")),`Target(${n})`}(kt(t))}; limitType=${t.limitType})`}function nr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of An(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Sl(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,An(n),s)||n.endAt&&!function(i,r,o){const a=Sl(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,An(n),s))}(t,e)}function Tm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mh(t){return(e,n)=>{let s=!1;for(const i of An(t)){const r=Cm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Cm(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Bn(a,l):x()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return x()}}/**
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
 */function yh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function vh(t){return{integerValue:""+t}}function Sm(t,e){return lm(e)?vh(e):yh(t,e)}/**
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
 */class sr{constructor(){this._=void 0}}function Im(t,e,n){return t instanceof ki?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Ss?bh(t,e):t instanceof Is?Eh(t,e):function(s,i){const r=wh(s,i),o=Pl(r)+Pl(s.It);return ho(r)&&ho(s.It)?vh(o):yh(s.Tt,o)}(t,e)}function Am(t,e,n){return t instanceof Ss?bh(t,e):t instanceof Is?Eh(t,e):n}function wh(t,e){return t instanceof Di?ho(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ki extends sr{}class Ss extends sr{constructor(e){super(),this.elements=e}}function bh(t,e){const n=_h(e);for(const s of t.elements)n.some(i=>pt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Is extends sr{constructor(e){super(),this.elements=e}}function Eh(t,e){let n=_h(e);for(const s of t.elements)n=n.filter(i=>!pt(i,s));return{arrayValue:{values:n}}}class Di extends sr{constructor(e,n){super(),this.Tt=e,this.It=n}}function Pl(t){return he(t.integerValue||t.doubleValue)}function _h(t){return ra(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function km(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ss&&s instanceof Ss||n instanceof Is&&s instanceof Is?xn(n.elements,s.elements,pt):n instanceof Di&&s instanceof Di?pt(n.It,s.It):n instanceof ki&&s instanceof ki}(t.transform,e.transform)}class Dm{constructor(e,n){this.version=e,this.transformResults=n}}class et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ir{}function Th(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ua(t.key,et.none()):new qs(t.key,t.data,et.none());{const n=t.data,s=He.empty();let i=new ye(Oe.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Kt(t.key,s,new Ge(i.toArray()),et.none())}}function Pm(t,e,n){t instanceof qs?function(s,i,r){const o=s.value.clone(),a=Ol(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kt?function(s,i,r){if(!hi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ol(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ch(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ls(t,e,n,s){return t instanceof qs?function(i,r,o,a){if(!hi(i.precondition,r))return o;const l=i.value.clone(),c=Rl(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Kt?function(i,r,o,a){if(!hi(i.precondition,r))return o;const l=Rl(i.fieldTransforms,a,r),c=r.data;return c.setAll(Ch(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return hi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Nm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=wh(s.transform,i||null);r!=null&&(n===null&&(n=He.empty()),n.set(s.field,r))}return n||null}function Nl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&xn(n,s,(i,r)=>km(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qs extends ir{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends ir{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ch(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ol(t,e,n){const s=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Am(o,a,n[i]))}return s}function Rl(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Im(r,o,e))}return s}class ua extends ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Om extends ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rm{constructor(e){this.count=e}}/**
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
 */var ue,W;function Lm(t){switch(t){default:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Sh(t){if(t===void 0)return At("GRPC error has no .code"),b.UNKNOWN;switch(t){case ue.OK:return b.OK;case ue.CANCELLED:return b.CANCELLED;case ue.UNKNOWN:return b.UNKNOWN;case ue.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ue.INTERNAL:return b.INTERNAL;case ue.UNAVAILABLE:return b.UNAVAILABLE;case ue.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ue.NOT_FOUND:return b.NOT_FOUND;case ue.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ue.ABORTED:return b.ABORTED;case ue.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ue.DATA_LOSS:return b.DATA_LOSS;default:return x()}}(W=ue||(ue={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Wn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ih(this.inner)}size(){return this.innerSize}}/**
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
 */const Mm=new ve(O.comparator);function Dt(){return Mm}const Ih=new ve(O.comparator);function ss(...t){let e=Ih;for(const n of t)e=e.insert(n.key,n);return e}function Ah(t){let e=Ih;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function nn(){return cs()}function kh(){return cs()}function cs(){return new Wn(t=>t.toString(),(t,e)=>t.isEqual(e))}const xm=new ve(O.comparator),Fm=new ye(O.comparator);function K(...t){let e=Fm;for(const n of t)e=e.add(n);return e}const Bm=new ye(ee);function Dh(){return Bm}/**
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
 */class rr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,$s.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rr(U.min(),i,Dh(),Dt(),K())}}class $s{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new $s(s,n,K(),K(),K())}}/**
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
 */class di{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Ph{constructor(e,n){this.targetId=e,this.Rt=n}}class Nh{constructor(e,n,s=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ll{constructor(){this.bt=0,this.vt=xl(),this.Pt=xe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=K(),n=K(),s=K();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:x()}}),new $s(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=xl()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Vm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Dt(),this.Kt=Ml(),this.Gt=new ye(ee)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:x()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(po(r))if(s===0){const o=new O(r.path);this.zt(n,o,Ne.newNoDocument(o,U.min()))}else re(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&po(a.target)){const l=new O(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Ne.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=K();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new rr(e,n,this.Gt,this.Ut,s);return this.Ut=Dt(),this.Kt=Ml(),this.Gt=new ye(ee),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Ll,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ye(ee),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Ll),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Ml(){return new ve(O.comparator)}function xl(){return new ve(O.comparator)}/**
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
 */const Um=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qm=(()=>({and:"AND",or:"OR"}))();class $m{constructor(e,n){this.databaseId=e,this.yt=n}}function Pi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Hm(t,e){return Pi(t,e.toTimestamp())}function ft(t){return re(!!t),U.fromTimestamp(function(e){const n=Ut(e);return new me(n.seconds,n.nanos)}(t))}function ha(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Rh(t){const e=oe.fromString(t);return re(Fh(e)),e}function vo(t,e){return ha(t.databaseId,e.path)}function xr(t,e){const n=Rh(e);if(n.get(1)!==t.databaseId.projectId)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Lh(n))}function wo(t,e){return ha(t.databaseId,e)}function zm(t){const e=Rh(t);return e.length===4?oe.emptyPath():Lh(e)}function bo(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lh(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fl(t,e,n){return{name:vo(t,e),fields:n.value.mapValue.fields}}function Km(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(re(c===void 0||typeof c=="string"),xe.fromBase64String(c||"")):(re(c===void 0||c instanceof Uint8Array),xe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:Sh(l.code);return new A(c,l.message||"")}(o);n=new Nh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=xr(t,s.document.name),r=ft(s.document.updateTime),o=s.document.createTime?ft(s.document.createTime):U.min(),a=new He({mapValue:{fields:s.document.fields}}),l=Ne.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new di(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=xr(t,s.document),r=s.readTime?ft(s.readTime):U.min(),o=Ne.newNoDocument(i,r),a=s.removedTargetIds||[];n=new di([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=xr(t,s.document),r=s.removedTargetIds||[];n=new di([],r,i,null)}else{if(!("filter"in e))return x();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Rm(i),o=s.targetId;n=new Ph(o,r)}}return n}function Gm(t,e){let n;if(e instanceof qs)n={update:Fl(t,e.key,e.value)};else if(e instanceof ua)n={delete:vo(t,e.key)};else if(e instanceof Kt)n={update:Fl(t,e.key,e.data),updateMask:ny(e.fieldMask)};else{if(!(e instanceof Om))return x();n={verify:vo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ki)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ss)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Is)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Di)return{fieldPath:r.field.canonicalString(),increment:o.It};throw x()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Hm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x()}(t,e.precondition)),n}function Wm(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ft(s.updateTime):ft(i);return r.isEqual(U.min())&&(r=ft(i)),new Dm(r,s.transformResults||[])}(n,e))):[]}function Qm(t,e){return{documents:[wo(t,e.path)]}}function Ym(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=wo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return xh(at.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:_n(u.field),direction:Zm(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||Zi(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Xm(t){let e=zm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){re(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Mh(u);return h instanceof at&&ch(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new In(Tn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Zi(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ai(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ai(d,h)}(n.endAt)),_m(e,i,o,r,a,"F",l,c)}function Jm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return x()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Tn(e.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Tn(e.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tn(e.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Tn(e.unaryFilter.field);return de.create(r,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(t):t.fieldFilter!==void 0?function(e){return de.create(Tn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return at.create(e.compositeFilter.filters.map(n=>Mh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(t):x()}function Zm(t){return Um[t]}function ey(t){return jm[t]}function ty(t){return qm[t]}function _n(t){return{fieldPath:t.canonicalString()}}function Tn(t){return Oe.fromServerFormat(t.fieldPath)}function xh(t){return t instanceof de?function(e){if(e.op==="=="){if(Cl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NAN"}};if(Tl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Cl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NAN"}};if(Tl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(e.field),op:ey(e.op),value:e.value}}}(t):t instanceof at?function(e){const n=e.getFilters().map(s=>xh(s));return n.length===1?n[0]:{compositeFilter:{op:ty(e.op),filters:n}}}(t):x()}function ny(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class sy{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Pm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=kh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Th(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&xn(this.mutations,e.mutations,(n,s)=>Nl(n,s))&&xn(this.baseMutations,e.baseMutations,(n,s)=>Nl(n,s))}}class da{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){re(e.mutations.length===s.length);let i=xm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new da(e,n,s,i)}}/**
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
 */class iy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rn{constructor(e,n,s,i,r=U.min(),o=U.min(),a=xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class ry{constructor(e){this.oe=e}}function oy(t){const e=Xm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mo(e,e.limit,"L"):e}/**
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
 */class ay{constructor(){this.Ze=new ly}addToCollectionParentIndex(e,n){return this.Ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Vt.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class ly{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ye(oe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ye(oe.comparator)).toArray()}}/**
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
 */class Un{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Un(0)}static Sn(){return new Un(-1)}}/**
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
 */class cy{constructor(){this.changes=new Wn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uy{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class hy{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ls(s.mutation,i,Ge.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,K()).next(()=>s))}getLocalViewOfDocuments(e,n,s=K()){const i=nn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ss();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=nn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,K()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Dt();const o=cs(),a=cs();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Kt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ls(u.mutation,c,u.mutation.getFieldMask(),me.now())):o.set(c.key,Ge.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new uy(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=cs();let i=new ve((o,a)=>o-a),r=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ge.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=kh();u.forEach(d=>{if(!r.has(d)){const f=Th(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ph(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):E.resolve(nn());let a=-1,l=r;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,K())).next(u=>({batchId:a,changes:Ah(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let i=ss();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ss();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(c,u){return new Gn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ne.newInvalidDocument(c)))});let o=ss();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&ls(c.mutation,l,Ge.empty(),me.now()),nr(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class dy{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return E.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ft(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:oy(s.bundledQuery),readTime:ft(s.readTime)}}(n)),E.resolve()}}/**
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
 */class fy{constructor(){this.overlays=new ve(O.comparator),this.ss=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=nn();return E.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const i=nn(),r=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ve((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=nn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=nn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return E.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new iy(n,s));let r=this.ss.get(n);r===void 0&&(r=K(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
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
 */class fa{constructor(){this.rs=new ye(be.os),this.us=new ye(be.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new be(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new be(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new O(new oe([])),s=new be(n,e),i=new be(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new O(new oe([])),s=new be(n,e),i=new be(n,e+1);let r=K();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new be(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return O.comparator(e.key,n.key)||ee(e.gs,n.gs)}static cs(e,n){return ee(e.gs,n.gs)||O.comparator(e.key,n.key)}}/**
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
 */class py{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ye(be.os)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sy(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new be(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return E.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),E.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ye(ee);return n.forEach(i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),E.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;O.isDocumentKey(r)||(r=r.child(""));const o=new be(new O(r),0);let a=new ye(ee);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),E.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return E.forEach(n.mutations,i=>{const r=new be(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new be(n,0),i=this.ps.firstAfterOrEqual(s);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gy{constructor(e){this.Rs=e,this.docs=new ve(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let s=Dt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ne.newInvalidDocument(i))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Dt();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||im(sm(u),s)<=0||(i.has(u.key)||nr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,i){x()}bs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new my(this)}getSize(e){return E.resolve(this.size)}}class my extends cy{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class yy{constructor(e){this.persistence=e,this.vs=new Wn(n=>oa(n),aa),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new fa,this.targetCount=0,this.Ss=Un.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),E.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Un(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.xn(n),E.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(r).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Vs.containsKey(n))}}/**
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
 */class vy{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ia(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new yy(this),this.indexManager=new ay,this.remoteDocumentCache=function(s){return new gy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new ry(n),this.Os=new dy(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new py(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){N("MemoryPersistence","Starting transaction:",e);const i=new wy(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return E.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class wy extends om{constructor(e){super(),this.currentSequenceNumber=e}}class pa{constructor(e){this.persistence=e,this.Bs=new fa,this.Ls=null}static qs(e){return new pa(e)}get Us(){if(this.Ls)return this.Ls;throw x()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),E.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Us,s=>{const i=O.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,U.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return E.or([()=>E.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
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
 */class ga{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=K(),i=K();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ga(e,n.fromCache,s,i)}}/**
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
 */class by{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Dl(n))return E.resolve(null);let s=kt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mo(n,null,"F"),s=kt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=K(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,mo(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return Dl(n)||i.isEqual(U.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(wl()<=Z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yo(n)),this.qi(e,o,n,nm(i,-1)))})}Bi(e,n){let s=new ye(mh(e));return n.forEach((i,r)=>{nr(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return wl()<=Z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",yo(n)),this.Oi.getDocumentsMatchingQuery(e,n,Vt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Ey{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new ve(ee),this.Gi=new Wn(r=>oa(r),aa),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hy(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function _y(t,e,n,s){return new Ey(t,e,n,s)}async function Bh(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=K();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ty(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(g=>{const v=l.docVersions.get(f);re(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=K();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Vh(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Cy(t,e){const n=q(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(xe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,v,w){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.Ns.updateTargetData(r,f))});let l=Dt(),c=K();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Sy(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual(U.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function Sy(t,e,n){let s=K(),i=K();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Dt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Iy(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ay(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,E.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new rn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Eo(t,e,n){const s=q(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!js(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Bl(t,e,n){const s=q(t);let i=U.min(),r=K();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=q(a),h=u.Gi.get(c);return h!==void 0?E.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?r:K())).next(a=>(ky(s,Tm(e),a),{documents:a,Yi:r})))}function ky(t,e,n){let s=t.Qi.get(e)||U.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Vl{constructor(){this.activeTargetIds=Dh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dy{constructor(){this.Ur=new Vl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Vl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Py{Gr(e){}shutdown(){}}/**
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
 */class Ul{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Ny={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Oy{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */class Ry extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);N("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(N("RestConnection","Received: ",l),l),l=>{throw co("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Kn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=Ny[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Kg;a.setWithCredentials(!0),a.listenOnce($g.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Mr.NO_ERROR:const c=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Mr.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new A(b.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const u=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(v)>=0?v:b.UNKNOWN}(d.status);o(new A(f,d.message))}else o(new A(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=jg(),o=qg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");N("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new Oy({Yr:g=>{h?N("Connection","Not sending because WebChannel is closed:",g):(u||(N("Connection","Opening WebChannel transport."),c.open(),u=!0),N("Connection","WebChannel sending:",g),c.send(g))},Zr:()=>c.close()}),f=(g,v,w)=>{g.listen(v,S=>{try{w(S)}catch(T){setTimeout(()=>{throw T},0)}})};return f(c,si.EventType.OPEN,()=>{h||N("Connection","WebChannel transport opened.")}),f(c,si.EventType.CLOSE,()=>{h||(h=!0,N("Connection","WebChannel transport closed"),d.oo())}),f(c,si.EventType.ERROR,g=>{h||(h=!0,co("Connection","WebChannel transport errored:",g),d.oo(new A(b.UNAVAILABLE,"The operation could not be completed")))}),f(c,si.EventType.MESSAGE,g=>{var v;if(!h){const w=g.data[0];re(!!w);const S=w,T=S.error||((v=S[0])===null||v===void 0?void 0:v.error);if(T){N("Connection","WebChannel received error:",T);const I=T.status;let L=function(ne){const F=ue[ne];if(F!==void 0)return Sh(F)}(I),V=T.message;L===void 0&&(L=b.INTERNAL,V="Unknown error status: "+I+" with message "+T.message),h=!0,d.oo(new A(L,V)),c.close()}else N("Connection","WebChannel received:",w),d.uo(w)}}),f(o,Hg.STAT_EVENT,g=>{g.stat===yl.PROXY?N("Connection","Detected buffering proxy"):g.stat===yl.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Fr(){return typeof document<"u"?document:null}/**
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
 */function or(t){return new $m(t,!0)}/**
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
 */class Uh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
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
 */class jh{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Uh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new A(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ly extends jh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Km(this.Tt,e),s=function(i){if(!("targetChange"in i))return U.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?U.min():r.readTime?ft(r.readTime):U.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=bo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=po(a)?{documents:Qm(i,a)}:{query:Ym(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Oh(i,r.resumeToken):r.snapshotVersion.compareTo(U.min())>0&&(o.readTime=Pi(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Jm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=bo(this.Tt),n.removeTarget=e,this.qo(n)}}class My extends jh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Wm(e.writeResults,e.commitTime),s=ft(e.commitTime);return this.listener.eu(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=bo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Gm(this.Tt,s))};this.qo(n)}}/**
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
 */class xy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(b.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(b.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Fy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(At(n),this.cu=!1):N("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class By{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{pn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=q(a);l.mu.add(4),await Hs(l),l.pu.set("Unknown"),l.mu.delete(4),await ar(l)}(this))})}),this.pu=new Fy(s,i)}}async function ar(t){if(pn(t))for(const e of t.gu)await e(!0)}async function Hs(t){for(const e of t.gu)await e(!1)}function qh(t,e){const n=q(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),va(n)?ya(n):Qn(n).Mo()&&ma(n,e))}function $h(t,e){const n=q(t),s=Qn(n);n.wu.delete(e),s.Mo()&&Hh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():pn(n)&&n.pu.set("Unknown"))}function ma(t,e){t.Iu.Ft(e.targetId),Qn(t).Jo(e)}function Hh(t,e){t.Iu.Ft(e),Qn(t).Yo(e)}function ya(t){t.Iu=new Vm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Qn(t).start(),t.pu.au()}function va(t){return pn(t)&&!Qn(t).Oo()&&t.wu.size>0}function pn(t){return q(t).mu.size===0}function zh(t){t.Iu=void 0}async function Vy(t){t.wu.forEach((e,n)=>{ma(t,e)})}async function Uy(t,e){zh(t),va(t)?(t.pu.fu(e),ya(t)):t.pu.set("Unknown")}async function jy(t,e,n){if(t.pu.set("Online"),e instanceof Nh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ni(t,s)}else if(e instanceof di?t.Iu.Qt(e):e instanceof Ph?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(U.min()))try{const s=await Vh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(xe.EMPTY_BYTE_STRING,l.snapshotVersion)),Hh(i,a);const c=new rn(l.target,a,1,l.sequenceNumber);ma(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){N("RemoteStore","Failed to raise snapshot:",s),await Ni(t,s)}}async function Ni(t,e,n){if(!js(e))throw e;t.mu.add(1),await Hs(t),t.pu.set("Offline"),n||(n=()=>Vh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ar(t)})}function Kh(t,e){return e().catch(n=>Ni(t,n,e))}async function lr(t){const e=q(t),n=jt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;qy(e);)try{const i=await Iy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,$y(e,i)}catch(i){await Ni(e,i)}Gh(e)&&Wh(e)}function qy(t){return pn(t)&&t._u.length<10}function $y(t,e){t._u.push(e);const n=jt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Gh(t){return pn(t)&&!jt(t).Oo()&&t._u.length>0}function Wh(t){jt(t).start()}async function Hy(t){jt(t).su()}async function zy(t){const e=jt(t);for(const n of t._u)e.tu(n.mutations)}async function Ky(t,e,n){const s=t._u.shift(),i=da.from(s,e,n);await Kh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lr(t)}async function Gy(t,e){e&&jt(t).Xo&&await async function(n,s){if(i=s.code,Lm(i)&&i!==b.ABORTED){const r=n._u.shift();jt(n).$o(),await Kh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await lr(n)}var i}(t,e),Gh(t)&&Wh(t)}async function jl(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const s=pn(n);n.mu.add(3),await Hs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ar(n)}async function Wy(t,e){const n=q(t);e?(n.mu.delete(2),await ar(n)):e||(n.mu.add(2),await Hs(n),n.pu.set("Unknown"))}function Qn(t){return t.Tu||(t.Tu=function(e,n,s){const i=q(e);return i.ru(),new Ly(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Vy.bind(null,t),no:Uy.bind(null,t),Ho:jy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),va(t)?ya(t):t.pu.set("Unknown")):(await t.Tu.stop(),zh(t))})),t.Tu}function jt(t){return t.Eu||(t.Eu=function(e,n,s){const i=q(e);return i.ru(),new My(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Hy.bind(null,t),no:Gy.bind(null,t),nu:zy.bind(null,t),eu:Ky.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await lr(t)):(await t.Eu.stop(),t._u.length>0&&(N("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class wa{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new wa(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ba(t,e){if(At("AsyncQueue",`${e}: ${t}`),js(t))return new A(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class kn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=ss(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new kn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof kn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ql{constructor(){this.Au=new ve(O.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):x():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class jn{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jn(e,n,kn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Qy{constructor(){this.bu=void 0,this.listeners=[]}}class Yy{constructor(){this.queries=new Wn(e=>gh(e),tr),this.onlineState="Unknown",this.vu=new Set}}async function Qh(t,e){const n=q(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Qy),i)try{r.bu=await n.onListen(s)}catch(o){const a=ba(o,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&Ea(n)}async function Yh(t,e){const n=q(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Xy(t,e){const n=q(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&Ea(n)}function Jy(t,e,n){const s=q(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ea(t){t.vu.forEach(e=>{e.next()})}class Xh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new jn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class Jh{constructor(e){this.key=e}}class Zh{constructor(e){this.key=e}}class Zy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=K(),this.mutatedKeys=K(),this.ju=mh(e),this.zu=new kn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new ql,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=nr(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(s.track({type:3,doc:f}),w=!0):this.Yu(d,f)||(s.track({type:2,doc:f}),w=!0,(l&&this.ju(f,l)>0||c&&this.ju(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),w=!0):d&&!f&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(f?(o=o.add(f),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return f(h)-f(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new jn(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new ql,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=K(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Zh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Jh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=K();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return jn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class ev{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class tv{constructor(e){this.key=e,this.ic=!1}}class nv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Wn(a=>gh(a),tr),this.uc=new Map,this.cc=new Set,this.ac=new ve(O.comparator),this.hc=new Map,this.lc=new fa,this.fc={},this.dc=new Map,this._c=Un.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function sv(t,e){const n=fv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Ay(n.localStore,kt(e));n.isPrimaryClient&&qh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await iv(n,e,s,a==="current",o.resumeToken)}return i}async function iv(t,e,n,s,i){t.mc=(h,d,f)=>async function(g,v,w,S){let T=v.view.Hu(w);T.Li&&(T=await Bl(g.localStore,v.query,!1).then(({documents:V})=>v.view.Hu(V,T)));const I=S&&S.targetChanges.get(v.targetId),L=v.view.applyChanges(T,g.isPrimaryClient,I);return Hl(g,v.targetId,L.tc),L.snapshot}(t,h,d,f);const r=await Bl(t.localStore,e,!0),o=new Zy(e,r.Yi),a=o.Hu(r.documents),l=$s.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Hl(t,n,c.tc);const u=new ev(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function rv(t,e){const n=q(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!tr(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Eo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),$h(n.remoteStore,s.targetId),_o(n,s.targetId)}).catch(Us)):(_o(n,s.targetId),await Eo(n.localStore,s.targetId,!0))}async function ov(t,e,n){const s=pv(t);try{const i=await function(r,o){const a=q(r),l=me.now(),c=o.reduce((d,f)=>d.add(f.key),K());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Dt(),g=K();return a.ji.getEntries(d,c).next(v=>{f=v,f.forEach((w,S)=>{S.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{u=v;const w=[];for(const S of o){const T=Nm(S,u.get(S.key).overlayedDocument);T!=null&&w.push(new Kt(S.key,T,fh(T.value.mapValue),et.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Ah(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new ve(ee)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await zs(s,i.changes),await lr(s.remoteStore)}catch(i){const r=ba(i,"Failed to persist write");n.reject(r)}}async function ed(t,e){const n=q(t);try{const s=await Cy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?re(o.ic):i.removedDocuments.size>0&&(re(o.ic),o.ic=!1))}),await zs(n,s,e)}catch(s){await Us(s)}}function $l(t,e,n){const s=q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=q(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&Ea(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function av(t,e,n){const s=q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new ve(O.comparator);o=o.insert(r,Ne.newNoDocument(r,U.min()));const a=K().add(r),l=new rr(U.min(),new Map,new ye(ee),o,a);await ed(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),_a(s)}else await Eo(s.localStore,e,!1).then(()=>_o(s,e,n)).catch(Us)}async function lv(t,e){const n=q(t),s=e.batch.batchId;try{const i=await Ty(n.localStore,e);nd(n,s,null),td(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await zs(n,i)}catch(i){await Us(i)}}async function cv(t,e,n){const s=q(t);try{const i=await function(r,o){const a=q(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(re(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);nd(s,e,n),td(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await zs(s,i)}catch(i){await Us(i)}}function td(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function nd(t,e,n){const s=q(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function _o(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||sd(t,s)})}function sd(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&($h(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),_a(t))}function Hl(t,e,n){for(const s of n)s instanceof Jh?(t.lc.addReference(s.key,e),uv(t,s)):s instanceof Zh?(N("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||sd(t,s.key)):x()}function uv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(N("SyncEngine","New document in limbo: "+n),t.cc.add(s),_a(t))}function _a(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new O(oe.fromString(e)),s=t._c.next();t.hc.set(s,new tv(n)),t.ac=t.ac.insert(n,s),qh(t.remoteStore,new rn(kt(la(n.path)),s,2,ia.at))}}async function zs(t,e,n){const s=q(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ga.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=q(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(l,h=>E.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!js(u))throw u;N("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);c.Ki=c.Ki.insert(h,g)}}}(s.localStore,r))}async function hv(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const s=await Bh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(b.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zs(n,s.Wi)}}function dv(t,e){const n=q(t),s=n.hc.get(e);if(s&&s.ic)return K().add(s.key);{let i=K();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function fv(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ed.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=av.bind(null,e),e.rc.Ho=Xy.bind(null,e.eventManager),e.rc.gc=Jy.bind(null,e.eventManager),e}function pv(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cv.bind(null,e),e}class gv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=or(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return _y(this.persistence,new by,e.initialUser,this.Tt)}Tc(e){return new vy(pa.qs,this.Tt)}Ic(e){return new Dy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$l(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hv.bind(null,this.syncEngine),await Wy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Yy}createDatastore(e){const n=or(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Ry(i));var i;return function(r,o,a,l){return new xy(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>$l(this.syncEngine,a,0),o=Ul.C()?new Ul:new Py,new By(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new nv(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);N("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Hs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class id{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):At("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class yv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=sh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{N("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(N("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ba(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vv(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Bh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bv(t);N("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>jl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>jl(e.remoteStore,r)),t.onlineComponents=e}async function bv(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await vv(t,new gv)),t.offlineComponents}async function rd(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await wv(t,new mv)),t.onlineComponents}function Ev(t){return rd(t).then(e=>e.syncEngine)}async function To(t){const e=await rd(t),n=e.eventManager;return n.onListen=sv.bind(null,e.syncEngine),n.onUnlisten=rv.bind(null,e.syncEngine),n}function _v(t,e,n={}){const s=new xt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new id({next:h=>{r.enqueueAndForget(()=>Yh(i,u)),h.fromCache&&a.source==="server"?l.reject(new A(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Xh(o,c,{includeMetadataChanges:!0,Ou:!0});return Qh(i,u)}(await To(t),t.asyncQueue,e,n,s)),s.promise}const zl=new Map;/**
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
 */function od(t,e,n){if(!n)throw new A(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tv(t,e,n,s){if(e===!0&&s===!0)throw new A(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kl(t){if(!O.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(O.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":x()}function tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cr(t);throw new A(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Tv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ur{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Gg;switch(n.type){case"gapi":const s=n.client;return new Xg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zl.get(e);n&&(N("ComponentProvider","Removing Datastore"),zl.delete(e),n.terminate())}(this),Promise.resolve()}}function Cv(t,e,n,s={}){var i;const r=(t=tt(t,ur))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&co("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Pe.MOCK_USER;else{o=$c(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new A(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Pe(l)}t._authCredentials=new Wg(new nh(o,a))}}/**
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
 */class Ue{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class Gt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class Ft extends Gt{constructor(e,n,s){super(e,n,la(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new O(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function Je(t,e,...n){if(t=ot(t),od("collection","path",e),t instanceof ur){const s=oe.fromString(e,...n);return Gl(s),new Ft(t,null,s)}{if(!(t instanceof Ue||t instanceof Ft))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return Gl(s),new Ft(t.firestore,null,s)}}function _t(t,e,...n){if(t=ot(t),arguments.length===1&&(e=sh.R()),od("doc","path",e),t instanceof ur){const s=oe.fromString(e,...n);return Kl(s),new Ue(t,null,new O(s))}{if(!(t instanceof Ue||t instanceof Ft))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return Kl(s),new Ue(t.firestore,t instanceof Ft?t.converter:null,new O(s))}}/**
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
 */class Sv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Uh(this,"async_queue_retry"),this.Hc=()=>{const n=Fr();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new xt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!js(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=wa.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&x()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Ql(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qt extends ur{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Sv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ad(this),this._firestoreClient.terminate()}}function Iv(t,e){const n=typeof t=="object"?t:Xc(),s=typeof t=="string"?t:e||"(default)",i=Wc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=qc("firestore");r&&Cv(i,...r)}return i}function Ta(t){return t._firestoreClient||ad(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ad(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new am(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new yv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn(xe.fromBase64String(e))}catch(n){throw new A(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qn(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const Av=/^__.*__$/;class kv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms):new qs(e,this.data,n,this.fieldTransforms)}}class ld{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Ia{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ia(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Oi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(cd(this.ra)&&Av.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Dv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||or(e)}wa(e,n,s,i=!1){return new Ia({ra:e,methodName:n,_a:s,path:Oe.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function dr(t){const e=t._freezeSettings(),n=or(t._databaseId);return new Dv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ud(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Aa("Data must be an object, but it was:",o,s);const a=hd(s,o);let l,c;if(r.merge)l=new Ge(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Co(e,h,n);if(!o.contains(d))throw new A(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fd(u,d)||u.push(d)}l=new Ge(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new kv(new He(a),l,c)}class fr extends Ca{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fr}}function Pv(t,e,n,s){const i=t.wa(1,e,n);Aa("Data must be an object, but it was:",i,s);const r=[],o=He.empty();fn(s,(l,c)=>{const u=ka(e,l,n);c=ot(c);const h=i.ha(u);if(c instanceof fr)r.push(u);else{const d=Ks(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ge(r);return new ld(o,a,i.fieldTransforms)}function Nv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[Co(e,s,n)],l=[i];if(r.length%2!=0)throw new A(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Co(e,r[d])),l.push(r[d+1]);const c=[],u=He.empty();for(let d=a.length-1;d>=0;--d)if(!fd(c,a[d])){const f=a[d];let g=l[d];g=ot(g);const v=o.ha(f);if(g instanceof fr)c.push(f);else{const w=Ks(g,v);w!=null&&(c.push(f),u.set(f,w))}}const h=new Ge(c);return new ld(u,h,o.fieldTransforms)}function Ov(t,e,n,s=!1){return Ks(n,t.wa(s?4:3,e))}function Ks(t,e){if(dd(t=ot(t)))return Aa("Unsupported field value:",e,t),hd(t,e);if(t instanceof Ca)return function(n,s){if(!cd(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ks(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Sm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=me.fromDate(n);return{timestampValue:Pi(s.Tt,i)}}if(n instanceof me){const i=new me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pi(s.Tt,i)}}if(n instanceof Sa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qn)return{bytesValue:Oh(s.Tt,n._byteString)};if(n instanceof Ue){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ha(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${cr(n)}`)}(t,e)}function hd(t,e){const n={};return ih(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fn(t,(s,i)=>{const r=Ks(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function dd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof Sa||t instanceof qn||t instanceof Ue||t instanceof Ca)}function Aa(t,e,n){if(!dd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=cr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Co(t,e,n){if((e=ot(e))instanceof hr)return e._internalPath;if(typeof e=="string")return ka(t,e);throw Oi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Rv=new RegExp("[~\\*/\\[\\]]");function ka(t,e,n){if(e.search(Rv)>=0)throw Oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hr(...e.split("."))._internalPath}catch{throw Oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new A(b.INVALID_ARGUMENT,a+t+l)}function fd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class pd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lv extends pd{data(){return super.data()}}function pr(t,e){return typeof e=="string"?ka(t,e):e instanceof hr?e._internalPath:e._delegate._internalPath}/**
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
 */function gd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Da{}class md extends Da{}function us(t,e,...n){let s=[];e instanceof Da&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Pa).length,o=i.filter(a=>a instanceof gr).length;if(r>1||r>0&&o>0)throw new A(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class gr extends md{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new gr(e,n,s)}_apply(e){const n=this._parse(e);return yd(e._query,n),new Gt(e.firestore,e.converter,go(e._query,n))}_parse(e){const n=dr(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Xl(u,c);const d=[];for(const f of u)d.push(Yl(a,i,f));h={arrayValue:{values:d}}}else h=Yl(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Xl(u,c),h=Ov(o,r,u,c==="in"||c==="not-in");return de.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function So(t,e,n){const s=e,i=pr("where",t);return gr._create(i,s,n)}class Pa extends Da{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pa(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:at.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)yd(r,a),r=go(r,a)}(e._query,n),new Gt(e.firestore,e.converter,go(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Na extends md{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Na(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new In(i,r);return function(a,l){if(ca(a)===null){const c=er(a);c!==null&&vd(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Gn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Br(t,e="asc"){const n=e,s=pr("orderBy",t);return Na._create(s,n)}function Yl(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new A(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ph(e)&&n.indexOf("/")!==-1)throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(oe.fromString(n));if(!O.isDocumentKey(s))throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _l(t,new O(s))}if(n instanceof Ue)return _l(t,n._key);throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cr(n)}.`)}function Xl(t,e){if(!Array.isArray(t)||t.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yd(t,e){if(e.isInequality()){const s=er(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new A(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=ca(t);r!==null&&vd(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function vd(t,e,n){if(!n.isEqual(e))throw new A(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Mv{convertValue(e,n="none"){switch(ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw x()}}convertObject(e,n){const s={};return fn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Sa(he(e.latitude),he(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=oh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const n=Ut(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=oe.fromString(e);re(Fh(s));const i=new _s(s.get(1),s.get(3)),r=new O(s.popFirst(5));return i.isEqual(n)||At(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function wd(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bd extends pd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(pr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fi extends bd{data(e={}){return super.data(e)}}class Ed{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new is(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fi(this._firestore,this._userDataWriter,s.key,s,new is(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:xv(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class Oa extends Mv{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function _d(t){t=tt(t,Gt);const e=tt(t.firestore,qt),n=Ta(e),s=new Oa(e);return gd(t._query),_v(n,t._query).then(i=>new Ed(e,s,t,i))}function Vr(t,e,n){t=tt(t,Ue);const s=tt(t.firestore,qt),i=wd(t.converter,e,n);return mr(s,[ud(dr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,et.none())])}function Ra(t,e,n,...s){t=tt(t,Ue);const i=tt(t.firestore,qt),r=dr(i);let o;return o=typeof(e=ot(e))=="string"||e instanceof hr?Nv(r,"updateDoc",t._key,e,n,s):Pv(r,"updateDoc",t._key,e),mr(i,[o.toMutation(t._key,et.exists(!0))])}function Io(t){return mr(tt(t.firestore,qt),[new ua(t._key,et.none())])}function Td(t,e){const n=tt(t.firestore,qt),s=_t(t),i=wd(t.converter,e);return mr(n,[ud(dr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,et.exists(!1))]).then(()=>s)}function Ur(t,...e){var n,s,i;t=ot(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ql(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ql(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Ue)c=tt(t.firestore,qt),u=la(t._key.path),l={next:h=>{e[o]&&e[o](Fv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=tt(t,Gt);c=tt(h.firestore,qt),u=h._query;const d=new Oa(c);l={next:f=>{e[o]&&e[o](new Ed(c,d,h,f))},error:e[o+1],complete:e[o+2]},gd(t._query)}return function(h,d,f,g){const v=new id(g),w=new Xh(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>Qh(await To(h),w)),()=>{v.Pc(),h.asyncQueue.enqueueAndForget(async()=>Yh(await To(h),w))}}(Ta(c),u,a,l)}function mr(t,e){return function(n,s){const i=new xt;return n.asyncQueue.enqueueAndForget(async()=>ov(await Ev(n),s,i)),i.promise}(Ta(t),e)}function Fv(t,e,n){const s=n.docs.get(e._key),i=new Oa(t);return new bd(t,i,e._key,s,new is(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Kn=n})(Qc),ps(new Ln("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new qt(new Qg(n.getProvider("auth-internal")),new Zg(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Mt(vl,"3.8.4",t),Mt(vl,"3.8.4","esm2017")})();/**
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
 */const Cd="firebasestorage.googleapis.com",Bv="storageBucket",Vv=2*60*1e3,Uv=10*60*1e3;/**
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
 */class vt extends hn{constructor(e,n,s=0){super(jr(e),`Firebase Storage: ${n} (${jr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gt||(gt={}));function jr(t){return"storage/"+t}function jv(){const t="An unknown error occurred, please check the error payload for server response.";return new vt(gt.UNKNOWN,t)}function qv(){return new vt(gt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $v(){return new vt(gt.CANCELED,"User canceled the upload/download.")}function Hv(t){return new vt(gt.INVALID_URL,"Invalid URL '"+t+"'.")}function zv(t){return new vt(gt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jl(t){return new vt(gt.INVALID_ARGUMENT,t)}function Sd(){return new vt(gt.APP_DELETED,"The Firebase app was deleted.")}function Kv(t){return new vt(gt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(s.path==="")return s;throw zv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},v=n===Cd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",S=new RegExp(`^https?://${v}/${i}/${w}`,"i"),I=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<I.length;L++){const V=I[L],ne=V.regex.exec(e);if(ne){const F=ne[V.indices.bucket];let P=ne[V.indices.path];P||(P=""),s=new rt(F,P),V.postModify(s);break}}if(s==null)throw Hv(e);return s}}class Gv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Wv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){r&&clearTimeout(r)}function f(w,...S){if(c){d();return}if(w){d(),u.call(null,w,...S);return}if(l()||o){d(),u.call(null,w,...S);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let g=!1;function v(w){g||(g=!0,d(),!c&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function Qv(t){t(!1)}/**
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
 */function Yv(t){return t!==void 0}function Zl(t,e,n,s){if(s<e)throw Jl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Jl(`Invalid value for '${t}'. Expected ${n} or less.`)}function Xv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function Jv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class Zv{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new oi(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ri.NO_ERROR,l=r.getStatus();if(!a||Jv(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ri.ABORT;s(!1,new oi(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new oi(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Yv(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=jv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Sd():$v();o(l)}else{const l=qv();o(l)}};this.canceled_?n(!1,new oi(!1,null,!0)):this.backoffId_=Wv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ew(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iw(t,e,n,s,i,r,o=!0){const a=Xv(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return nw(c,e),ew(c,n),tw(c,r),sw(c,s),new Zv(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function rw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ow(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Li{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Li(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ow(this._location.path)}get storage(){return this._service}get parent(){const e=rw(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new Li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Kv(e)}}function ec(t,e){const n=e==null?void 0:e[Bv];return n==null?null:rt.makeFromBucketSpec(n,t)}function aw(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:$c(i,t.app.options.projectId))}class lw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Cd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vv,this._maxUploadRetryTime=Uv,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=ec(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=ec(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Li(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Gv(Sd());{const o=iw(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const tc="@firebase/storage",nc="0.11.2";/**
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
 */const Id="storage";function cw(t=Xc(),e){t=ot(t);const s=Wc(t,Id).getImmediate({identifier:e}),i=qc("storage");return i&&uw(s,...i),s}function uw(t,e,n,s={}){aw(t,e,n,s)}function hw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new lw(n,s,i,e,Qc)}function dw(){ps(new Ln(Id,hw,"PUBLIC").setMultipleInstances(!0)),Mt(tc,nc,""),Mt(tc,nc,"esm2017")}dw();const fw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},Ad=Yc(fw);cw(Ad);const Ie=Iv(Ad);var pw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kd={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(pw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(w){w.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(w){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),f=i("y",this.options),g=this.options.position=="left"?d:"-"+d,v=this.options.gravity=="toastify-top"?f:"-"+f;o.style.transform="translate("+g+","+v+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var f=15,g=window.innerWidth>0?window.innerWidth:screen.width;g<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+f):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+f):(c[h].style[u]=a[u]+"px",a[u]+=d+f)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(kd);var mw=kd.exports;const Dn=gw(mw),Dd="SweetAlert2:",yw=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},La=t=>t.charAt(0).toUpperCase()+t.slice(1),Ye=t=>Array.prototype.slice.call(t),Ke=t=>{console.warn(`${Dd} ${typeof t=="object"?t.join(" "):t}`)},gn=t=>{console.error(`${Dd} ${t}`)},sc=[],vw=t=>{sc.includes(t)||(sc.push(t),Ke(t))},ww=(t,e)=>{vw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},yr=t=>typeof t=="function"?t():t,Ma=t=>t&&typeof t.toPromise=="function",Gs=t=>Ma(t)?t.toPromise():Promise.resolve(t),xa=t=>t&&Promise.resolve(t)===t,Pn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},bw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Ew={},_w=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Pd=t=>Object.prototype.hasOwnProperty.call(Pn,t),Nd=t=>bw.indexOf(t)!==-1,Ao=t=>Ew[t],Tw=t=>{Pd(t)||Ke(`Unknown parameter "${t}"`)},Cw=t=>{_w.includes(t)&&Ke(`The parameter "${t}" is incompatible with toasts`)},Sw=t=>{Ao(t)&&ww(t,Ao(t))},Iw=t=>{!t.backdrop&&t.allowOutsideClick&&Ke('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)Tw(e),t.toast&&Cw(e),Sw(e)},Aw="swal2-",Od=t=>{const e={};for(const n in t)e[t[n]]=Aw+t[n];return e},m=Od(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),hs=Od(["success","warning","info","question","error"]),Fe=()=>document.body.querySelector(`.${m.container}`),Ws=t=>{const e=Fe();return e?e.querySelector(t):null},st=t=>Ws(`.${t}`),te=()=>st(m.popup),Qs=()=>st(m.icon),Rd=()=>st(m.title),Mi=()=>st(m["html-container"]),Ld=()=>st(m.image),Md=()=>st(m["progress-steps"]),vr=()=>st(m["validation-message"]),lt=()=>Ws(`.${m.actions} .${m.confirm}`),$t=()=>Ws(`.${m.actions} .${m.deny}`),kw=()=>st(m["input-label"]),Yn=()=>Ws(`.${m.loader}`),cn=()=>Ws(`.${m.actions} .${m.cancel}`),Ys=()=>st(m.actions),xd=()=>st(m.footer),wr=()=>st(m["timer-progress-bar"]),Fa=()=>st(m.close),Dw=`
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
`,Ba=()=>{const t=Ye(te().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=Ye(te().querySelectorAll(Dw)).filter(n=>n.getAttribute("tabindex")!=="-1");return yw(t.concat(e)).filter(n=>We(n))},Va=()=>Tt(document.body,m.shown)&&!Tt(document.body,m["toast-shown"])&&!Tt(document.body,m["no-backdrop"]),br=()=>te()&&Tt(te(),m.toast),Pw=()=>te().hasAttribute("data-loading"),Nn={previousBodyPadding:null},Re=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");Ye(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),Ye(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},Tt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Nw=(t,e)=>{Ye(t.classList).forEach(n=>{!Object.values(m).includes(n)&&!Object.values(hs).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},nt=(t,e,n)=>{if(Nw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Ke(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);Y(t,e.customClass[n])}},Ua=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${m.popup} > .${m[e]}`);case"checkbox":return t.querySelector(`.${m.popup} > .${m.checkbox} input`);case"radio":return t.querySelector(`.${m.popup} > .${m.radio} input:checked`)||t.querySelector(`.${m.popup} > .${m.radio} input:first-child`);case"range":return t.querySelector(`.${m.popup} > .${m.range} input`);default:return t.querySelector(`.${m.popup} > .${m.input}`)}},Fd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Bd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},Y=(t,e)=>{Bd(t,e,!0)},mt=(t,e)=>{Bd(t,e,!1)},Ot=(t,e)=>{const n=Ye(t.childNodes);for(let s=0;s<n.length;s++)if(Tt(n[s],e))return n[s]},ds=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},ke=(t,e="flex")=>{t.style.display=e},Be=t=>{t.style.display="none"},ic=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Er=(t,e,n)=>{e?ke(t,n):Be(t)},We=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Ow=()=>!We(lt())&&!We($t())&&!We(cn()),rc=t=>t.scrollHeight>t.clientHeight,Vd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},ja=(t,e=!1)=>{const n=wr();We(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Rw=()=>{const t=wr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Ud=()=>typeof window>"u"||typeof document>"u",Lw=100,$={},Mw=()=>{$.previousActiveElement&&$.previousActiveElement.focus?($.previousActiveElement.focus(),$.previousActiveElement=null):document.body&&document.body.focus()},xw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;$.restoreFocusTimeout=setTimeout(()=>{Mw(),e()},Lw),window.scrollTo(n,s)}),Fw=`
 <div aria-labelledby="${m.title}" aria-describedby="${m["html-container"]}" class="${m.popup}" tabindex="-1">
   <button type="button" class="${m.close}"></button>
   <ul class="${m["progress-steps"]}"></ul>
   <div class="${m.icon}"></div>
   <img class="${m.image}" />
   <h2 class="${m.title}" id="${m.title}"></h2>
   <div class="${m["html-container"]}" id="${m["html-container"]}"></div>
   <input class="${m.input}" />
   <input type="file" class="${m.file}" />
   <div class="${m.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${m.select}"></select>
   <div class="${m.radio}"></div>
   <label for="${m.checkbox}" class="${m.checkbox}">
     <input type="checkbox" />
     <span class="${m.label}"></span>
   </label>
   <textarea class="${m.textarea}"></textarea>
   <div class="${m["validation-message"]}" id="${m["validation-message"]}"></div>
   <div class="${m.actions}">
     <div class="${m.loader}"></div>
     <button type="button" class="${m.confirm}"></button>
     <button type="button" class="${m.deny}"></button>
     <button type="button" class="${m.cancel}"></button>
   </div>
   <div class="${m.footer}"></div>
   <div class="${m["timer-progress-bar-container"]}">
     <div class="${m["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Bw=()=>{const t=Fe();return t?(t.remove(),mt([document.documentElement,document.body],[m["no-backdrop"],m["toast-shown"],m["has-column"]]),!0):!1},Yt=()=>{$.currentInstance.resetValidationMessage()},Vw=()=>{const t=te(),e=Ot(t,m.input),n=Ot(t,m.file),s=t.querySelector(`.${m.range} input`),i=t.querySelector(`.${m.range} output`),r=Ot(t,m.select),o=t.querySelector(`.${m.checkbox} input`),a=Ot(t,m.textarea);e.oninput=Yt,n.onchange=Yt,r.onchange=Yt,o.onchange=Yt,a.oninput=Yt,s.oninput=()=>{Yt(),i.value=s.value},s.onchange=()=>{Yt(),s.nextSibling.value=s.value}},Uw=t=>typeof t=="string"?document.querySelector(t):t,jw=t=>{const e=te();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},qw=t=>{window.getComputedStyle(t).direction==="rtl"&&Y(Fe(),m.rtl)},$w=t=>{const e=Bw();if(Ud()){gn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=m.container,e&&Y(n,m["no-transition"]),Re(n,Fw);const s=Uw(t.target);s.appendChild(n),jw(t),qw(s),Vw()},qa=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Hw(t,e):t&&Re(e,t)},Hw=(t,e)=>{t.jquery?zw(e,t):Re(e,t.toString())},zw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},As=(()=>{if(Ud())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Kw=()=>{const t=document.createElement("div");t.className=m["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Gw=(t,e)=>{const n=Ys(),s=Yn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Be(n):ke(n),nt(n,e,"actions"),Ww(n,s,e),Re(s,e.loaderHtml),nt(s,e,"loader")};function Ww(t,e,n){const s=lt(),i=$t(),r=cn();qr(s,"confirm",n),qr(i,"deny",n),qr(r,"cancel",n),Qw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Qw(t,e,n,s){if(!s.buttonsStyling)return mt([t,e,n],m.styled);Y([t,e,n],m.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,Y(t,m["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,Y(e,m["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,Y(n,m["default-outline"]))}function qr(t,e,n){Er(t,n[`show${La(e)}Button`],"inline-block"),Re(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=m[e],nt(t,n,`${e}Button`),Y(t,n[`${e}ButtonClass`])}function Yw(t,e){typeof e=="string"?t.style.background=e:e||Y([document.documentElement,document.body],m["no-backdrop"])}function Xw(t,e){e in m?Y(t,m[e]):(Ke('The "position" parameter is not valid, defaulting to "center"'),Y(t,m.center))}function Jw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in m&&Y(t,m[n])}}const Zw=(t,e)=>{const n=Fe();n&&(Yw(n,e.backdrop),Xw(n,e.position),Jw(n,e.grow),nt(n,e,"container"))},H={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},eb=["input","file","range","select","radio","checkbox","textarea"],tb=(t,e)=>{const n=te(),s=H.innerParams.get(t),i=!s||e.input!==s.input;eb.forEach(r=>{const o=m[r],a=Ot(n,o);ib(r,e.inputAttributes),a.className=o,i&&Be(a)}),e.input&&(i&&nb(e),rb(e))},nb=t=>{if(!$e[t.input])return gn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=jd(t.input),n=$e[t.input](e,t);ke(n),setTimeout(()=>{Fd(n)})},sb=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},ib=(t,e)=>{const n=Ua(te(),t);if(n){sb(n);for(const s in e)n.setAttribute(s,e[s])}},rb=t=>{const e=jd(t.input);t.customClass&&Y(e,t.customClass.input)},$a=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Xs=(t,e,n)=>{if(n.inputLabel){t.id=m.input;const s=document.createElement("label"),i=m["input-label"];s.setAttribute("for",t.id),s.className=i,Y(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},jd=t=>{const e=m[t]?m[t]:m.input;return Ot(te(),e)},$e={};$e.text=$e.email=$e.password=$e.number=$e.tel=$e.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:xa(e.inputValue)||Ke(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Xs(t,t,e),$a(t,e),t.type=e.input,t);$e.file=(t,e)=>(Xs(t,t,e),$a(t,e),t);$e.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Xs(n,t,e),t};$e.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Re(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Xs(t,t,e),t};$e.radio=t=>(t.textContent="",t);$e.checkbox=(t,e)=>{const n=Ua(te(),"checkbox");n.value="1",n.id=m.checkbox,n.checked=!!e.inputValue;const s=t.querySelector("span");return Re(s,e.inputPlaceholder),t};$e.textarea=(t,e)=>{t.value=e.inputValue,$a(t,e),Xs(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(te()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?te().style.width=`${r}px`:te().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ob=(t,e)=>{const n=Mi();nt(n,e,"htmlContainer"),e.html?(qa(e.html,n),ke(n,"block")):e.text?(n.textContent=e.text,ke(n,"block")):Be(n),tb(t,e)},ab=(t,e)=>{const n=xd();Er(n,e.footer),e.footer&&qa(e.footer,n),nt(n,e,"footer")},lb=(t,e)=>{const n=Fa();Re(n,e.closeButtonHtml),nt(n,e,"closeButton"),Er(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},cb=(t,e)=>{const n=H.innerParams.get(t),s=Qs();if(n&&e.icon===n.icon){ac(s,e),oc(s,e);return}if(!e.icon&&!e.iconHtml)return Be(s);if(e.icon&&Object.keys(hs).indexOf(e.icon)===-1)return gn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Be(s);ke(s),ac(s,e),oc(s,e),Y(s,e.showClass.icon)},oc=(t,e)=>{for(const n in hs)e.icon!==n&&mt(t,hs[n]);Y(t,hs[e.icon]),fb(t,e),ub(),nt(t,e,"icon")},ub=()=>{const t=te(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},hb=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,db=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ac=(t,e)=>{t.textContent="",e.iconHtml?Re(t,lc(e.iconHtml)):e.icon==="success"?Re(t,hb):e.icon==="error"?Re(t,db):Re(t,lc({question:"?",warning:"!",info:"i"}[e.icon]))},fb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ic(t,n,"backgroundColor",e.iconColor);ic(t,".swal2-success-ring","borderColor",e.iconColor)}},lc=t=>`<div class="${m["icon-content"]}">${t}</div>`,pb=(t,e)=>{const n=Ld();if(!e.imageUrl)return Be(n);ke(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),ds(n,"width",e.imageWidth),ds(n,"height",e.imageHeight),n.className=m.image,nt(n,e,"image")},gb=t=>{const e=document.createElement("li");return Y(e,m["progress-step"]),Re(e,t),e},mb=t=>{const e=document.createElement("li");return Y(e,m["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},yb=(t,e)=>{const n=Md();if(!e.progressSteps||e.progressSteps.length===0)return Be(n);ke(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Ke("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=gb(s);if(n.appendChild(r),i===e.currentProgressStep&&Y(r,m["active-progress-step"]),i!==e.progressSteps.length-1){const o=mb(e);n.appendChild(o)}})},vb=(t,e)=>{const n=Rd();Er(n,e.title||e.titleText,"block"),e.title&&qa(e.title,n),e.titleText&&(n.innerText=e.titleText),nt(n,e,"title")},wb=(t,e)=>{const n=Fe(),s=te();e.toast?(ds(n,"width",e.width),s.style.width="100%",s.insertBefore(Yn(),Qs())):ds(s,"width",e.width),ds(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Be(vr()),bb(s,e)},bb=(t,e)=>{t.className=`${m.popup} ${We(t)?e.showClass.popup:""}`,e.toast?(Y([document.documentElement,document.body],m["toast-shown"]),Y(t,m.toast)):Y(t,m.modal),nt(t,e,"popup"),typeof e.customClass=="string"&&Y(t,e.customClass),e.icon&&Y(t,m[`icon-${e.icon}`])},qd=(t,e)=>{wb(t,e),Zw(t,e),yb(t,e),cb(t,e),pb(t,e),vb(t,e),lb(t,e),ob(t,e),Gw(t,e),ab(t,e),typeof e.didRender=="function"&&e.didRender(te())},Xn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Eb=()=>{Ye(document.body.children).forEach(e=>{e===Fe()||e.contains(Fe())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},$d=()=>{Ye(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Hd=["swal-title","swal-html","swal-footer"],_b=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Db(n),Object.assign(Tb(n),Cb(n),Sb(n),Ib(n),Ab(n),kb(n,Hd))},Tb=t=>{const e={};return Ye(t.querySelectorAll("swal-param")).forEach(n=>{un(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof Pn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof Pn[s]=="object"&&(e[s]=JSON.parse(i))}),e},Cb=t=>{const e={};return Ye(t.querySelectorAll("swal-button")).forEach(n=>{un(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${La(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},Sb=t=>{const e={},n=t.querySelector("swal-image");return n&&(un(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Ib=t=>{const e={},n=t.querySelector("swal-icon");return n&&(un(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Ab=t=>{const e={},n=t.querySelector("swal-input");n&&(un(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},Ye(s).forEach(i=>{un(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},kb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(un(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Db=t=>{const e=Hd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Ye(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Ke(`Unrecognized element <${s}>`)})},un=(t,e)=>{Ye(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Ke([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},cc={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Pb(t){t.inputValidator||Object.keys(cc).forEach(e=>{t.input===e&&(t.inputValidator=cc[e])})}function Nb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Ke('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Ob(t){Pb(t),t.showLoaderOnConfirm&&!t.preConfirm&&Ke(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Nb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),$w(t)}class Rb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Lb=()=>{Nn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Nn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Nn.previousBodyPadding+Kw()}px`)},Mb=()=>{Nn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Nn.previousBodyPadding}px`,Nn.previousBodyPadding=null)},xb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Tt(document.body,m.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,Y(document.body,m.iosfix),Bb(),Fb()}},Fb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&te().scrollHeight>window.innerHeight-44&&(Fe().style.paddingBottom="44px")},Bb=()=>{const t=Fe();let e;t.ontouchstart=n=>{e=Vb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Vb=t=>{const e=t.target,n=Fe();return Ub(t)||jb(t)?!1:e===n||!rc(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(rc(Mi())&&Mi().contains(e))},Ub=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",jb=t=>t.touches&&t.touches.length>1,qb=()=>{if(Tt(document.body,m.iosfix)){const t=parseInt(document.body.style.top,10);mt(document.body,m.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},zd=10,$b=t=>{const e=Fe(),n=te();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Kb(e,n,t),setTimeout(()=>{Hb(e,n)},zd),Va()&&(zb(e,t.scrollbarPadding,i),Eb()),!br()&&!$.previousActiveElement&&($.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),mt(e,m["no-transition"])},Kd=t=>{const e=te();if(t.target!==e)return;const n=Fe();e.removeEventListener(As,Kd),n.style.overflowY="auto"},Hb=(t,e)=>{As&&Vd(e)?(t.style.overflowY="hidden",e.addEventListener(As,Kd)):t.style.overflowY="auto"},zb=(t,e,n)=>{xb(),e&&n!=="hidden"&&Lb(),setTimeout(()=>{t.scrollTop=0})},Kb=(t,e,n)=>{Y(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),ke(e,"grid"),setTimeout(()=>{Y(e,n.showClass.popup),e.style.removeProperty("opacity")},zd),Y([document.documentElement,document.body],m.shown),n.heightAuto&&n.backdrop&&!n.toast&&Y([document.documentElement,document.body],m["height-auto"])},$n=t=>{let e=te();e||new Ds,e=te();const n=Yn();br()?Be(Qs()):Gb(e,t),ke(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Gb=(t,e)=>{const n=Ys(),s=Yn();!e&&We(lt())&&(e=lt()),ke(n),e&&(Be(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),Y([t,n],m.loading)},Wb=(t,e)=>{e.input==="select"||e.input==="radio"?Zb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Ma(e.inputValue)||xa(e.inputValue))&&($n(lt()),e0(t,e))},Qb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Yb(n);case"radio":return Xb(n);case"file":return Jb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Yb=t=>t.checked?1:0,Xb=t=>t.checked?t.value:null,Jb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Zb=(t,e)=>{const n=te(),s=i=>t0[e.input](n,ko(i),e);Ma(e.inputOptions)||xa(e.inputOptions)?($n(lt()),Gs(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):gn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},e0=(t,e)=>{const n=t.getInput();Be(n),Gs(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,ke(n),n.focus(),t.hideLoading()}).catch(s=>{gn(`Error in inputValue promise: ${s}`),n.value="",ke(n),n.focus(),t.hideLoading()})},t0={select:(t,e,n)=>{const s=Ot(t,m.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,Re(l,o),l.selected=uc(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Ot(t,m.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=m.radio,l.value=o,uc(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Re(u,a),u.className=m.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},ko=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=ko(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=ko(s)),e.push([n,s])}),e},uc=(t,e)=>e&&e.toString()===t.toString();function hc(){const t=H.innerParams.get(this);if(!t)return;const e=H.domCache.get(this);Be(e.loader),br()?t.icon&&ke(Qs()):n0(e),mt([e.popup,e.actions],m.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const n0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ke(e[0],"inline-block"):Ow()&&Be(t.actions)};function s0(t){const e=H.innerParams.get(t||this),n=H.domCache.get(t||this);return n?Ua(n.popup,e.input):null}const ks={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},i0=()=>We(te()),Gd=()=>lt()&&lt().click(),r0=()=>$t()&&$t().click(),o0=()=>cn()&&cn().click(),Wd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},a0=(t,e,n,s)=>{Wd(e),n.toast||(e.keydownHandler=i=>c0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:te(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Do=(t,e,n)=>{const s=Ba();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();te().focus()},Qd=["ArrowRight","ArrowDown"],l0=["ArrowLeft","ArrowUp"],c0=(t,e,n)=>{const s=H.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?u0(t,e,s):e.key==="Tab"?h0(e,s):[...Qd,...l0].includes(e.key)?d0(e.key):e.key==="Escape"&&f0(e,s,n)))},u0=(t,e,n)=>{if(yr(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Gd(),e.preventDefault()}},h0=(t,e)=>{const n=t.target,s=Ba();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Do(e,i,-1):Do(e,i,1),t.stopPropagation(),t.preventDefault()},d0=t=>{const e=lt(),n=$t(),s=cn();if(![e,n,s].includes(document.activeElement))return;const i=Qd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Ys().children.length;o++){if(r=r[i],!r)return;if(We(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},f0=(t,e,n)=>{yr(e.allowEscapeKey)&&(t.preventDefault(),n(Xn.esc))};function Yd(t,e,n,s){br()?dc(t,s):(xw(n).then(()=>dc(t,s)),Wd($)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Va()&&(Mb(),qb(),$d()),p0()}function p0(){mt([document.documentElement,document.body],[m.shown,m["height-auto"],m["no-backdrop"],m["toast-shown"]])}function ai(t){t=v0(t);const e=ks.swalPromiseResolve.get(this),n=m0(this);this.isAwaitingPromise()?t.isDismissed||(Js(this),e(t)):n&&e(t)}function g0(){return!!H.awaitingPromise.get(this)}const m0=t=>{const e=te();if(!e)return!1;const n=H.innerParams.get(t);if(!n||Tt(e,n.hideClass.popup))return!1;mt(e,n.showClass.popup),Y(e,n.hideClass.popup);const s=Fe();return mt(s,n.showClass.backdrop),Y(s,n.hideClass.backdrop),w0(t,e,n),!0};function y0(t){const e=ks.swalPromiseReject.get(this);Js(this),e&&e(t)}const Js=t=>{t.isAwaitingPromise()&&(H.awaitingPromise.delete(t),H.innerParams.get(t)||t._destroy())},v0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),w0=(t,e,n)=>{const s=Fe(),i=As&&Vd(e);typeof n.willClose=="function"&&n.willClose(e),i?b0(t,e,s,n.returnFocus,n.didClose):Yd(t,s,n.returnFocus,n.didClose)},b0=(t,e,n,s,i)=>{$.swalCloseEventFinishedCallback=Yd.bind(null,t,n,s,i),e.addEventListener(As,function(r){r.target===e&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback)})},dc=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Xd(t,e,n){const s=H.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Jd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function E0(){Xd(this,["confirmButton","denyButton","cancelButton"],!1)}function _0(){Xd(this,["confirmButton","denyButton","cancelButton"],!0)}function T0(){return Jd(this.getInput(),!1)}function C0(){return Jd(this.getInput(),!0)}function S0(t){const e=H.domCache.get(this),n=H.innerParams.get(this);Re(e.validationMessage,t),e.validationMessage.className=m["validation-message"],n.customClass&&n.customClass.validationMessage&&Y(e.validationMessage,n.customClass.validationMessage),ke(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",m["validation-message"]),Fd(s),Y(s,m.inputerror))}function I0(){const t=H.domCache.get(this);t.validationMessage&&Be(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),mt(e,m.inputerror))}function A0(){return H.domCache.get(this).progressSteps}function k0(t){const e=te(),n=H.innerParams.get(this);if(!e||Tt(e,n.hideClass.popup))return Ke("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=D0(t),i=Object.assign({},n,s);qd(this,i),H.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const D0=t=>{const e={};return Object.keys(t).forEach(n=>{Nd(n)?e[n]=t[n]:Ke(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function P0(){const t=H.domCache.get(this),e=H.innerParams.get(this);if(!e){Zd(this);return}t.popup&&$.swalCloseEventFinishedCallback&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback),$.deferDisposalTimer&&(clearTimeout($.deferDisposalTimer),delete $.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),N0(this)}const N0=t=>{Zd(t),delete t.params,delete $.keydownHandler,delete $.keydownTarget,delete $.currentInstance},Zd=t=>{t.isAwaitingPromise()?($r(H,t),H.awaitingPromise.set(t,!0)):($r(ks,t),$r(H,t))},$r=(t,e)=>{for(const n in t)t[n].delete(e)},ef=Object.freeze(Object.defineProperty({__proto__:null,_destroy:P0,close:ai,closeModal:ai,closePopup:ai,closeToast:ai,disableButtons:_0,disableInput:C0,disableLoading:hc,enableButtons:E0,enableInput:T0,getInput:s0,getProgressSteps:A0,handleAwaitingPromise:Js,hideLoading:hc,isAwaitingPromise:g0,rejectPromise:y0,resetValidationMessage:I0,showValidationMessage:S0,update:k0},Symbol.toStringTag,{value:"Module"})),O0=t=>{const e=H.innerParams.get(t);t.disableButtons(),e.input?tf(t,"confirm"):za(t,!0)},R0=t=>{const e=H.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?tf(t,"deny"):Ha(t,!1)},L0=(t,e)=>{t.disableButtons(),e(Xn.cancel)},tf=(t,e)=>{const n=H.innerParams.get(t);if(!n.input)return gn(`The "input" parameter is needed to be set when using returnInputValueOn${La(e)}`);const s=Qb(t,n);n.inputValidator?M0(t,s,e):t.getInput().checkValidity()?e==="deny"?Ha(t,s):za(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},M0=(t,e,n)=>{const s=H.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Gs(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Ha(t,e):za(t,e)})},Ha=(t,e)=>{const n=H.innerParams.get(t||globalThis);n.showLoaderOnDeny&&$n($t()),n.preDeny?(H.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Gs(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Js(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>nf(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},fc=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},nf=(t,e)=>{t.rejectPromise(e)},za=(t,e)=>{const n=H.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&$n(),n.preConfirm?(t.resetValidationMessage(),H.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Gs(n.preConfirm(e,n.validationMessage))).then(i=>{We(vr())||i===!1?(t.hideLoading(),Js(t)):fc(t,typeof i>"u"?e:i)}).catch(i=>nf(t||globalThis,i))):fc(t,e)},x0=(t,e,n)=>{H.innerParams.get(t).toast?F0(t,e,n):(V0(e),U0(e),j0(t,e,n))},F0=(t,e,n)=>{e.popup.onclick=()=>{const s=H.innerParams.get(t);s&&(B0(s)||s.timer||s.input)||n(Xn.close)}},B0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let xi=!1;const V0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(xi=!0)}}},U0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(xi=!0)}}},j0=(t,e,n)=>{e.container.onclick=s=>{const i=H.innerParams.get(t);if(xi){xi=!1;return}s.target===e.container&&yr(i.allowOutsideClick)&&n(Xn.backdrop)}},q0=t=>typeof t=="object"&&t.jquery,pc=t=>t instanceof Element||q0(t),$0=t=>{const e={};return typeof t[0]=="object"&&!pc(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||pc(i)?e[n]=i:i!==void 0&&gn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function H0(...t){const e=this;return new e(...t)}function z0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const K0=()=>$.timeout&&$.timeout.getTimerLeft(),sf=()=>{if($.timeout)return Rw(),$.timeout.stop()},rf=()=>{if($.timeout){const t=$.timeout.start();return ja(t),t}},G0=()=>{const t=$.timeout;return t&&(t.running?sf():rf())},W0=t=>{if($.timeout){const e=$.timeout.increase(t);return ja(e,!0),e}},Q0=()=>$.timeout&&$.timeout.isRunning();let gc=!1;const Po={};function Y0(t="data-swal-template"){Po[t]=this,gc||(document.body.addEventListener("click",X0),gc=!0)}const X0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Po){const s=e.getAttribute(n);if(s){Po[n].fire({template:s});return}}},J0=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:$0,bindClickHandler:Y0,clickCancel:o0,clickConfirm:Gd,clickDeny:r0,enableLoading:$n,fire:H0,getActions:Ys,getCancelButton:cn,getCloseButton:Fa,getConfirmButton:lt,getContainer:Fe,getDenyButton:$t,getFocusableElements:Ba,getFooter:xd,getHtmlContainer:Mi,getIcon:Qs,getImage:Ld,getInputLabel:kw,getLoader:Yn,getPopup:te,getTimerLeft:K0,getTimerProgressBar:wr,getTitle:Rd,getValidationMessage:vr,increaseTimer:W0,isDeprecatedParameter:Ao,isLoading:Pw,isTimerRunning:Q0,isUpdatableParameter:Nd,isValidParameter:Pd,isVisible:i0,mixin:z0,resumeTimer:rf,showLoading:$n,stopTimer:sf,toggleTimer:G0},Symbol.toStringTag,{value:"Module"}));let No;class Jn{constructor(...e){if(typeof window>"u")return;No=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);H.promise.set(this,s)}_main(e,n={}){Iw(Object.assign({},n,e)),$.currentInstance&&($.currentInstance._destroy(),Va()&&$d()),$.currentInstance=this;const s=eE(e,n);Ob(s),Object.freeze(s),$.timeout&&($.timeout.stop(),delete $.timeout),clearTimeout($.restoreFocusTimeout);const i=tE(this);return qd(this,s),H.innerParams.set(this,s),Z0(this,i,s)}then(e){return H.promise.get(this).then(e)}finally(e){return H.promise.get(this).finally(e)}}const Z0=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};ks.swalPromiseResolve.set(t,s),ks.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>O0(t),e.denyButton.onclick=()=>R0(t),e.cancelButton.onclick=()=>L0(t,r),e.closeButton.onclick=()=>r(Xn.close),x0(t,e,r),a0(t,$,n,r),Wb(t,n),$b(n),nE($,n,r),sE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),eE=(t,e)=>{const n=_b(t),s=Object.assign({},Pn,e,n,t);return s.showClass=Object.assign({},Pn.showClass,s.showClass),s.hideClass=Object.assign({},Pn.hideClass,s.hideClass),s},tE=t=>{const e={popup:te(),container:Fe(),actions:Ys(),confirmButton:lt(),denyButton:$t(),cancelButton:cn(),loader:Yn(),closeButton:Fa(),validationMessage:vr(),progressSteps:Md()};return H.domCache.set(t,e),e},nE=(t,e,n)=>{const s=wr();Be(s),e.timer&&(t.timeout=new Rb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ke(s),nt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&ja(e.timer)})))},sE=(t,e)=>{if(!e.toast){if(!yr(e.allowEnterKey))return rE();iE(t,e)||Do(e,-1,1)}},iE=(t,e)=>e.focusDeny&&We(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&We(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&We(t.confirmButton)?(t.confirmButton.focus(),!0):!1,rE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Jn.prototype,ef);Object.assign(Jn,J0);Object.keys(ef).forEach(t=>{Jn[t]=function(...e){if(No)return No[t](...e)}});Jn.DismissReason=Xn;Jn.version="11.4.8";const Ds=Jn;Ds.default=Ds;const bn=[];function _r(t,e=ge){let n;const s=new Set;function i(a){if(yt(t,a)&&(t=a,n)){const l=!bn.length;for(const c of s)c[1](),bn.push(c,t);if(l){for(let c=0;c<bn.length;c+=2)bn[c][0](bn[c+1]);bn.length=0}}}function r(a){i(a(t))}function o(a,l=ge){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||ge),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Hr=_r({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Oo=_r(""),Ro=_r(""),pi=_r(""),oE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},aE=async t=>{try{await Ra(_t(Ie,"Pacientes",t.id),t)}catch(e){console.log(e)}};function mc(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function yc(t){let e,n,s=t[0],i=[];for(let r=0;r<s.length;r+=1)i[r]=vc(mc(t,s,r));return{c(){e=_("div"),n=_("ol");for(let r=0;r<i.length;r+=1)i[r].c();p(e,"class","listadoPacientes svelte-dz80hw")},m(r,o){X(r,e,o),y(e,n);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null)},p(r,o){if(o&7){s=r[0];let a;for(a=0;a<s.length;a+=1){const l=mc(r,s,a);i[a]?i[a].p(l,o):(i[a]=vc(l),i[a].c(),i[a].m(n,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}},d(r){r&&Q(e),Ps(i,r)}}}function vc(t){let e,n,s,i,r,o=`${t[9].apellido}, ${t[9].nombre}${t[9].plan=="particular"?"":" -"+t[9].nroSocio+" - plan "+t[9].plan.plan} `,a,l,c,u,h,d;return u=cf(t[5][0]),{c(){e=_("li"),n=_("input"),i=j(),r=_("label"),a=G(o),c=j(),p(n,"type","radio"),p(n,"id",s=t[9].id),p(n,"name","pacientes"),n.__value=t[11],n.value=n.__value,p(r,"for",l=t[9].id),u.p(n)},m(f,g){X(f,e,g),y(e,n),n.checked=n.__value===t[1],y(e,i),y(e,r),y(r,a),y(e,c),h||(d=[J(n,"change",t[4]),J(n,"change",t[2])],h=!0)},p(f,g){g&1&&s!==(s=f[9].id)&&p(n,"id",s),g&3&&(n.checked=n.__value===f[1]),g&1&&o!==(o=`${f[9].apellido}, ${f[9].nombre}${f[9].plan=="particular"?"":" -"+f[9].nroSocio+" - plan "+f[9].plan.plan} `)&&_e(a,o),g&1&&l!==(l=f[9].id)&&p(r,"for",l)},d(f){f&&Q(e),u.r(),h=!1,Xe(d)}}}function lE(t){let e,n=t[0].length>0&&yc(t);return{c(){n&&n.c(),e=Rc()},m(s,i){n&&n.m(s,i),X(s,e,i)},p(s,[i]){s[0].length>0?n?n.p(s,i):(n=yc(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ge,o:ge,d(s){n&&n.d(s),s&&Q(e)}}}function cE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r=0,o;const a=Fi(),l=h=>{const d=h.target.value;n(3,i=s[d].plan),o=s[d].id,a("cambioSelectPaciente",[d,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${d}, planSelect ${i.plan?i.plan:"particular"}`)},c=[[]];function u(){r=this.__value,n(1,r)}return t.$$set=h=>{"pacientesFiltrada"in h&&n(0,s=h.pacientesFiltrada),"planSelect"in h&&n(3,i=h.planSelect)},[s,r,l,i,u,c]}class uE extends Nt{constructor(e){super(),Pt(this,e,cE,lE,yt,{pacientesFiltrada:0,planSelect:3})}}function hE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,g,v,w,S,T,I,L,V,ne,F,P,M,R,ae,fe,Wt,Ce,ct,Qt,ut,je,mn,wt,yn,ht,C,pe,k,se,we,it;return V=new uE({props:{pacientesFiltrada:t[3],planSelect:dE}}),V.$on("cambioSelectPaciente",t[15]),k=new Ef({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),k.$on("cambioPlan",t[14]),k.$on("clickCheckPlan",t[16]),{c(){e=_("body"),n=_("div"),s=_("div"),i=_("button"),r=G("create"),a=j(),l=_("button"),c=G("update"),h=j(),d=_("button"),f=G("delete"),v=j(),w=_("div"),S=_("label"),S.textContent="filtrar por apellido",T=_("input"),I=j(),L=_("div"),Bt(V.$$.fragment),ne=j(),F=_("div"),P=_("label"),P.textContent="nombre",M=_("input"),R=j(),ae=_("label"),ae.textContent="apellido",fe=_("input"),Wt=j(),Ce=_("div"),ct=_("label"),ct.textContent="nº socio",Qt=j(),ut=_("div"),je=_("input"),mn=j(),wt=_("button"),wt.textContent="✎",yn=j(),ht=_("label"),C=G(t[10]),pe=j(),Bt(k.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],p(i,"class","svelte-40mbgp"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],p(l,"class","svelte-40mbgp"),d.disabled=g=!t[4],p(d,"class","svelte-40mbgp"),p(s,"class","buttons svelte-40mbgp"),p(n,"id","botones"),p(n,"class","svelte-40mbgp"),p(S,"for","filterPrefix"),p(S,"class","svelte-40mbgp"),p(T,"name","filterPrefix"),p(T,"id","filterPrefix"),p(T,"placeholder","filter prefix"),p(T,"class","svelte-40mbgp"),p(w,"id","filter"),p(w,"class","svelte-40mbgp"),p(L,"id","selectPacientes"),p(L,"class","svelte-40mbgp"),p(P,"for","nombre"),p(P,"class","svelte-40mbgp"),p(M,"name","nombre"),p(M,"id","nombre"),p(M,"placeholder","nombre"),p(M,"class","svelte-40mbgp"),p(ae,"for","apellido"),p(ae,"class","svelte-40mbgp"),p(fe,"name","apellido"),p(fe,"id","apellido"),p(fe,"placeholder","apellido"),p(fe,"class","svelte-40mbgp"),p(F,"id","formInputsI"),p(F,"class","svelte-40mbgp"),p(ct,"for","inputNroSocio"),p(ct,"class","svelte-40mbgp"),p(je,"id","inputNroSocio"),p(je,"name","nroSocio"),p(je,"placeholder","nro de Socio"),p(je,"class","svelte-40mbgp"),p(wt,"class","svelte-40mbgp"),p(ut,"class","formRow svelte-40mbgp"),p(ht,"id","labelPlan"),p(ht,"for","plan"),p(ht,"class","svelte-40mbgp"),p(Ce,"id","formInputsD"),p(Ce,"class","svelte-40mbgp"),p(e,"class","svelte-40mbgp")},m(z,ie){X(z,e,ie),y(e,n),y(n,s),y(s,i),y(i,r),y(s,a),y(s,l),y(l,c),y(s,h),y(s,d),y(d,f),y(e,v),y(e,w),y(w,S),y(w,T),Ee(T,t[2]),y(e,I),y(e,L),Ct(V,L,null),y(e,ne),y(e,F),y(F,P),y(F,M),Ee(M,t[7]),y(F,R),y(F,ae),y(F,fe),Ee(fe,t[8]),y(e,Wt),y(e,Ce),y(Ce,ct),y(Ce,Qt),y(Ce,ut),y(ut,je),Ee(je,t[9]),y(ut,mn),y(ut,wt),y(Ce,yn),y(Ce,ht),y(ht,C),y(Ce,pe),Ct(k,Ce,null),se=!0,we||(it=[J(i,"click",t[11]),J(l,"click",t[12]),J(d,"click",t[13]),J(T,"input",t[21]),J(M,"input",t[22]),J(fe,"input",t[23]),J(je,"input",t[24]),J(wt,"click",fE)],we=!0)},p(z,ie){(!se||ie[0]&897&&o!==(o=!z[7]||!z[8]||!z[0]||!z[9]))&&(i.disabled=o),(!se||ie[0]&913&&u!==(u=!z[7]||!z[8]||!z[0]||!z[9]||!z[4]))&&(l.disabled=u),(!se||ie[0]&16&&g!==(g=!z[4]))&&(d.disabled=g),ie[0]&4&&T.value!==z[2]&&Ee(T,z[2]);const qe={};ie[0]&8&&(qe.pacientesFiltrada=z[3]),V.$set(qe),ie[0]&128&&M.value!==z[7]&&Ee(M,z[7]),ie[0]&256&&fe.value!==z[8]&&Ee(fe,z[8]),ie[0]&512&&je.value!==z[9]&&Ee(je,z[9]),(!se||ie[0]&1024)&&_e(C,z[10]);const bt={};ie[0]&2&&(bt.planes=z[1]),ie[0]&1&&(bt.planSeleccionado=z[0]),ie[0]&64&&(bt.SelectPlanVisible=z[6]),ie[0]&32&&(bt.indicePlan=z[5]),k.$set(bt)},i(z){se||(ze(V.$$.fragment,z),ze(k.$$.fragment,z),se=!0)},o(z){Ze(V.$$.fragment,z),Ze(k.$$.fragment,z),se=!1},d(z){z&&Q(e),St(V),St(k),we=!1,Xe(it)}}}let dE="particular";function fE(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function pE(t,e,n){let s,i,r,o,a;Jt(t,pi,C=>n(25,i=C)),Jt(t,Hr,C=>n(26,r=C)),Jt(t,Ro,C=>n(27,o=C)),Jt(t,Oo,C=>n(28,a=C));let{pacientes:l=[]}=e,{sesiones:c}=e,{planes:u}=e,{planSeleccionado:h}=e,d=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:f}=e,g,v=0,w;Mc(()=>{oE(l,d),l.forEach(C=>{aE(C)}),console.log(a)});let S="",T="",I="",L="",V=[],ne="plan";vn(Hr,r=s,r);const F=C=>{n(7,T=C?C.nombre:""),n(8,I=C?C.apellido:""),n(9,L=C?C.nroSocio:""),n(0,h=C?C.plan:{})},P=async()=>{try{await Td(Je(Ie,"Pacientes"),{nombre:T,apellido:I,nroSocio:L,createdAt:new Date().toLocaleDateString(),plan:h}),Dn({text:"Nuevo paciente agregado"}).showToast()}catch(C){console.error(C)}},M=()=>{n(17,l=l.concat({nombre:T,apellido:I})),n(20,v=l.length-1),P(),n(7,T=n(8,I=n(0,h=n(9,L=""))))},R=async C=>{try{await Ra(_t(Ie,"Pacientes",C.id),C),Dn({text:`paciente ${C.apellido}, ${C.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(pe){console.error(pe)}},ae=()=>{n(4,s.nombre=T,s),n(4,s.apellido=I,s),n(0,h=s.plan),n(4,s.nroSocio=L,s),n(4,s),n(3,V),n(20,v),n(2,S),n(17,l),n(17,l),R(s)},fe=async C=>{try{await Io(_t(Ie,"Pacientes",C.id)),Dn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(k){console.error(k)}const pe=us(Je(Ie,"sesiones"),So("pacienteID","==",C.id));console.log(`desde delete q=pacientes a borrar ${pe} - paciente: ${C.nombre} ${C.apellido} ${C.id}`);try{(await _d(pe)).forEach(se=>{Io(se.ref)})}catch(k){console.log(k)}},Wt=()=>{const C=l.indexOf(s);Ds.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(pe=>{pe.isConfirmed&&(Ds.fire("Deleted!","Your file has been deleted.","success"),fe(l[v]),n(17,l=[...l.slice(0,C),...l.slice(C+1)]),n(7,T=n(8,I=n(9,L=n(0,h="")))),n(20,v=Math.min(v,V.length-2)))})},Ce=C=>{n(4,s.plan=C,s),n(4,s.nombre=T,s),n(4,s.apellido=I,s),n(4,s.nroSocio=L,s),n(3,V[v].plan=C,V),R(s)},ct=C=>{n(0,h=C.detail),console.log(h),s.plan.plan!=h.plan&&Ce(h)},Qt=C=>{C?(n(10,ne="particular"),n(6,w=!1)):(n(10,ne="plan"),n(6,w=!0))},ut=C=>{n(20,v=C.detail[0]);const pe=C.detail[1];vn(pi,i=C.detail[2],i);const k=typeof pe=="string"?"particular":pe.plan;console.log(`i ${v}, planSelect ${k}`),n(0,h=k=="particular"?"particular":V[v].plan),h!="particular"&&(n(5,g=u.findIndex(we=>we.plan===k)),console.log(`indicePlan ${g}, ${typeof g}`));const se=k=="particular";Qt(se)},je=C=>{const pe=C.detail.valor.SelectPlanVisible;pe?pe&&h=="particular"&&n(0,h="210"):n(0,h="particular"),Ce(h),Qt(!pe)};function mn(){S=this.value,n(2,S)}function wt(){T=this.value,n(7,T)}function yn(){I=this.value,n(8,I)}function ht(){L=this.value,n(9,L)}return t.$$set=C=>{"pacientes"in C&&n(17,l=C.pacientes),"sesiones"in C&&n(18,c=C.sesiones),"planes"in C&&n(1,u=C.planes),"planSeleccionado"in C&&n(0,h=C.planSeleccionado),"optionsPlan"in C&&n(19,f=C.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,V=S?l.filter(C=>`${C.apellido}, ${C.nombre}`.toLowerCase().startsWith(S.toLowerCase())):l.map(C=>({nombre:C.nombre,apellido:C.apellido,plan:C.plan,nroSocio:C.nroSocio,id:C.id}))),t.$$.dirty[0]&1048584&&n(4,s=V[v]),t.$$.dirty[0]&16&&s&&(vn(Hr,r=s,r),vn(Oo,a=s.apellido,a),vn(Ro,o=s.nombre,o),vn(pi,i=s.id,i)),t.$$.dirty[0]&16&&F(s)},[h,u,S,V,s,g,w,T,I,L,ne,M,ae,Wt,ct,ut,je,l,c,f,v,mn,wt,yn,ht]}class gE extends Nt{constructor(e){super(),Pt(this,e,pE,hE,yt,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0,optionsPlan:19},null,[-1,-1])}}const mE=Je(Ie,"sesiones");Je(Ie,"Pacientes");Je(Ie,"Planes");const yE=async t=>{const e=ci(t),n=e.fechaInicio,s=e.fechaFin;try{return(await _d(us(mE,So("diaSesion",">=",n),So("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function wc(t,e,n){const s=t.slice();return s[6]=e[n],s}function bc(t){let e,n=`listar mes de ${t[6].nombre} - ${t[6].nro.toString().padStart(2,"0")}`,s;return{c(){e=_("option"),s=G(n),e.__value=t[6].nro,e.value=e.__value},m(i,r){X(i,e,r),y(e,s)},p:ge,d(i){i&&Q(e)}}}function vE(t){let e,n,s,i=t[1],r=[];for(let o=0;o<i.length;o+=1)r[o]=bc(wc(t,i,o));return{c(){e=_("select");for(let o=0;o<r.length;o+=1)r[o].c();p(e,"name","mes"),p(e,"id","mesRegistro"),t[0]===void 0&&Rn(()=>t[4].call(e))},m(o,a){X(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);On(e,t[0]),n||(s=[J(e,"change",t[3]),J(e,"change",t[4])],n=!0)},p(o,[a]){if(a&2){i=o[1];let l;for(l=0;l<i.length;l+=1){const c=wc(o,i,l);r[l]?r[l].p(c,a):(r[l]=bc(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}a&3&&On(e,o[0])},i:ge,o:ge,d(o){o&&Q(e),Ps(r,o),n=!1,Xe(s)}}}function wE(t,e,n){let s=new Date().getMonth()+1,i=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}];const r=Fi(),o=c=>{r("cambioMes",c)},a=c=>o(c.target.value);function l(){s=Lo(this),n(0,s),n(1,i)}return[s,i,o,a,l]}class bE extends Nt{constructor(e){super(),Pt(this,e,wE,vE,yt,{})}}function Ec(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function _c(t){let e,n,s,i,r,o,a,l,c,u,h=t[2](t[1]).totalColPagos+"",d,f,g,v,w=t[2](t[1]).totalColValorSesion+"",S,T,I,L,V,ne=t[1],F=[];for(let P=0;P<ne.length;P+=1)F[P]=Tc(Ec(t,ne,P));return{c(){e=_("button"),e.textContent="Cerrar",n=j(),s=_("div"),i=_("table"),r=_("tr"),r.innerHTML=`<th class="svelte-s1hkz6">n°</th> 
                    <th class="svelte-s1hkz6">dia</th> 
                    <th class="svelte-s1hkz6">paciente</th> 
                    <th class="svelte-s1hkz6">plan</th> 
                    <th class="svelte-s1hkz6">sesion</th> 
                    <th class="svelte-s1hkz6">pago</th>`,o=j(),a=_("tbody");for(let P=0;P<F.length;P+=1)F[P].c();l=j(),c=_("p"),u=G("Total pagos: $"),d=G(h),f=j(),g=_("p"),v=G("Total valor sesion: $"),S=G(w),T=j(),I=_("button"),I.textContent="Cerrar",p(r,"class","svelte-s1hkz6"),p(a,"class","svelte-s1hkz6"),p(i,"class","svelte-s1hkz6"),p(s,"id","tabla"),p(s,"class","svelte-s1hkz6"),p(c,"class","centrar svelte-s1hkz6"),p(g,"class","centrar svelte-s1hkz6")},m(P,M){X(P,e,M),X(P,n,M),X(P,s,M),y(s,i),y(i,r),y(i,o),y(i,a);for(let R=0;R<F.length;R+=1)F[R]&&F[R].m(a,null);X(P,l,M),X(P,c,M),y(c,u),y(c,d),X(P,f,M),X(P,g,M),y(g,v),y(g,S),X(P,T,M),X(P,I,M),L||(V=[J(e,"click",t[6]),J(I,"click",t[7])],L=!0)},p(P,M){if(M&2){ne=P[1];let R;for(R=0;R<ne.length;R+=1){const ae=Ec(P,ne,R);F[R]?F[R].p(ae,M):(F[R]=Tc(ae),F[R].c(),F[R].m(a,null))}for(;R<F.length;R+=1)F[R].d(1);F.length=ne.length}M&2&&h!==(h=P[2](P[1]).totalColPagos+"")&&_e(d,h),M&2&&w!==(w=P[2](P[1]).totalColValorSesion+"")&&_e(S,w)},d(P){P&&Q(e),P&&Q(n),P&&Q(s),Ps(F,P),P&&Q(l),P&&Q(c),P&&Q(f),P&&Q(g),P&&Q(T),P&&Q(I),L=!1,Xe(V)}}}function Tc(t){let e,n,s,i,r,o=`${Cc(t[10].diaSesion.slice(8,10),2,!1)}`,a,l,c,u=`${t[10].apellido}, ${t[10].nombre}`,h,d,f,g=t[10].plan.slice(0,4)+"",v,w,S,T=t[10].valorPago+"",I,L,V,ne=t[10].valorSesion+"",F,P;return{c(){e=_("tr"),n=_("td"),s=G(t[12]),i=j(),r=_("td"),a=G(o),l=j(),c=_("td"),h=G(u),d=j(),f=_("td"),v=G(g),w=j(),S=_("td"),I=G(T),L=j(),V=_("td"),F=G(ne),P=j(),p(n,"class","svelte-s1hkz6"),p(r,"class","dia svelte-s1hkz6"),p(c,"class","nombre svelte-s1hkz6"),p(f,"class","plan svelte-s1hkz6"),p(S,"class","svelte-s1hkz6"),p(V,"class","svelte-s1hkz6"),p(e,"class","svelte-s1hkz6")},m(M,R){X(M,e,R),y(e,n),y(n,s),y(e,i),y(e,r),y(r,a),y(e,l),y(e,c),y(c,h),y(e,d),y(e,f),y(f,v),y(e,w),y(e,S),y(S,I),y(e,L),y(e,V),y(V,F),y(e,P)},p(M,R){R&2&&o!==(o=`${Cc(M[10].diaSesion.slice(8,10),2,!1)}`)&&_e(a,o),R&2&&u!==(u=`${M[10].apellido}, ${M[10].nombre}`)&&_e(h,u),R&2&&g!==(g=M[10].plan.slice(0,4)+"")&&_e(v,g),R&2&&T!==(T=M[10].valorPago+"")&&_e(I,T),R&2&&ne!==(ne=M[10].valorSesion+"")&&_e(F,ne)},d(M){M&&Q(e)}}}function EE(t){let e,n,s,i;e=new bE({}),e.$on("cambioMes",t[5]);let r=t[0]&&t[1].length>0&&_c(t);return{c(){Bt(e.$$.fragment),n=j(),s=_("div"),r&&r.c(),p(s,"class","listadoSesionesPorMes svelte-s1hkz6")},m(o,a){Ct(e,o,a),X(o,n,a),X(o,s,a),r&&r.m(s,null),i=!0},p(o,[a]){o[0]&&o[1].length>0?r?r.p(o,a):(r=_c(o),r.c(),r.m(s,null)):r&&(r.d(1),r=null)},i(o){i||(ze(e.$$.fragment,o),i=!0)},o(o){Ze(e.$$.fragment,o),i=!1},d(o){St(e,o),o&&Q(n),o&&Q(s),r&&r.d()}}}function Cc(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function _E(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e;const o=Fi(),a=f=>{var g=0,v=0;return f.forEach(w=>{g+=w.valorPago,v+=w.valorSesion}),{totalColPagos:g,totalColValorSesion:v}},l=f=>{i==!1?(o("vistaPulsado",f),n(4,s=f),n(0,i=!i)):(o("vistaPulsado",f),n(4,s=f)),console.log(a(r),`mes: ${s}, cant de sesiones: ${r.length}`)},c=f=>{n(4,s=f),l(f)},u=f=>c(f.detail),h=()=>n(0,i=!i),d=()=>n(0,i=!i);return t.$$set=f=>{"mesSeleccionado"in f&&n(4,s=f.mesSeleccionado),"vistaCalculos"in f&&n(0,i=f.vistaCalculos),"arrayParaLaVista"in f&&n(1,r=f.arrayParaLaVista)},[i,r,a,c,s,u,h,d]}class TE extends Nt{constructor(e){super(),Pt(this,e,_E,EE,yt,{mesSeleccionado:4,vistaCalculos:0,arrayParaLaVista:1})}}function CE(t){let e,n,s,i,r,o,a;return{c(){e=_("p"),n=G("total general:"),s=G(t[0]),i=j(),r=_("p"),o=G("total por paciente: "),a=G(t[1]),p(e,"id","totalGeneral")},m(l,c){X(l,e,c),y(e,n),y(e,s),X(l,i,c),X(l,r,c),y(r,o),y(r,a)},p(l,[c]){c&1&&_e(s,l[0]),c&2&&_e(a,l[1])},i:ge,o:ge,d(l){l&&Q(e),l&&Q(i),l&&Q(r)}}}function SE(t,e,n){let{registrosMesActual:s}=e,{varSumaValorPagoPorPaciente:i}=e;return t.$$set=r=>{"registrosMesActual"in r&&n(0,s=r.registrosMesActual),"varSumaValorPagoPorPaciente"in r&&n(1,i=r.varSumaValorPagoPorPaciente)},[s,i]}class IE extends Nt{constructor(e){super(),Pt(this,e,SE,CE,yt,{registrosMesActual:0,varSumaValorPagoPorPaciente:1})}}function Sc(t,e,n){const s=t.slice();return s[45]=e[n],s}function Ic(t){let e,n,s,i,r;return{c(){e=_("h4"),n=G("Paciente: "),s=G(t[13]),i=G(", "),r=G(t[14]),p(e,"class","svelte-1imwuid")},m(o,a){X(o,e,a),y(e,n),y(e,s),y(e,i),y(e,r)},p(o,a){a[0]&8192&&_e(s,o[13]),a[0]&16384&&_e(r,o[14])},d(o){o&&Q(e)}}}function Ac(t){let e,n,s,i,r,o,a,l=t[0],c=[];for(let u=0;u<l.length;u+=1)c[u]=Dc(Sc(t,l,u));return i=new IE({props:{registrosMesActual:t[8],varSumaValorPagoPorPaciente:t[6]}}),{c(){e=_("div"),n=_("select");for(let u=0;u<c.length;u+=1)c[u].c();s=j(),Bt(i.$$.fragment),p(n,"id","select-sesiones"),p(n,"size",5),p(n,"class","svelte-1imwuid"),t[1]===void 0&&Rn(()=>t[24].call(n)),p(e,"id","select"),p(e,"class","svelte-1imwuid")},m(u,h){X(u,e,h),y(e,n);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(n,null);On(n,t[1]),y(e,s),Ct(i,e,null),r=!0,o||(a=[J(n,"change",t[15]),J(n,"change",t[24])],o=!0)},p(u,h){if(h[0]&137){l=u[0];let f;for(f=0;f<l.length;f+=1){const g=Sc(u,l,f);c[f]?c[f].p(g,h):(c[f]=Dc(g),c[f].c(),c[f].m(n,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=l.length}h[0]&3&&On(n,u[1]);const d={};h[0]&256&&(d.registrosMesActual=u[8]),h[0]&64&&(d.varSumaValorPagoPorPaciente=u[6]),i.$set(d)},i(u){r||(ze(i.$$.fragment,u),r=!0)},o(u){Ze(i.$$.fragment,u),r=!1},d(u){u&&Q(e),Ps(c,u),St(i),o=!1,Xe(a)}}}function kc(t){let e,n,s=t[45].diaSesion+"",i,r,o=t[45].valorSesion+"",a,l,c=t[45].fechaPago+"",u,h,d=t[45].valorPago+"",f,g,v;return{c(){e=_("option"),n=G("dia sesion: "),i=G(s),r=G(" - valor sesion: "),a=G(o),l=G(`\r
              - dia pago `),u=G(c),h=G(" - valor pago "),f=G(d),g=j(),p(e,"class"," svelte-1imwuid"),e.__value=v=t[45].id,e.value=e.__value},m(w,S){X(w,e,S),y(e,n),y(e,i),y(e,r),y(e,a),y(e,l),y(e,u),y(e,h),y(e,f),y(e,g)},p(w,S){S[0]&1&&s!==(s=w[45].diaSesion+"")&&_e(i,s),S[0]&1&&o!==(o=w[45].valorSesion+"")&&_e(a,o),S[0]&1&&c!==(c=w[45].fechaPago+"")&&_e(u,c),S[0]&1&&d!==(d=w[45].valorPago+"")&&_e(f,d),S[0]&1&&v!==(v=w[45].id)&&(e.__value=v,e.value=e.__value)},d(w){w&&Q(e)}}}function Dc(t){let e=Object.values(t[45]).includes(t[3])&&parseInt(t[45].diaSesion.slice(5,7))==t[7],n,s=e&&kc(t);return{c(){s&&s.c(),n=Rc()},m(i,r){s&&s.m(i,r),X(i,n,r)},p(i,r){r[0]&137&&(e=Object.values(i[45]).includes(i[3])&&parseInt(i[45].diaSesion.slice(5,7))==i[7]),e?s?s.p(i,r):(s=kc(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&Q(n)}}}function AE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,g,v,w,S,T,I,L,V,ne,F,P,M;return{c(){e=_("div"),n=_("form"),s=_("div"),i=_("div"),r=_("label"),r.textContent="pago",o=_("input"),a=j(),l=_("label"),l.textContent="valor sesion",c=_("input"),u=j(),h=_("div"),d=_("label"),d.textContent="Dia Sesion",f=_("input"),g=j(),v=_("label"),v.textContent="Fecha Pago",w=_("input"),S=j(),T=_("div"),I=_("button"),I.textContent="update",L=j(),V=_("button"),V.textContent="delete",ne=j(),F=_("button"),F.textContent="Agregar sesión",p(r,"for","valorPago"),p(r,"class","svelte-1imwuid"),p(o,"name","valorPago"),p(o,"id","valorPago"),p(o,"type","number"),p(o,"step","100"),p(o,"min","0"),p(o,"placeholder","Valor pago"),p(o,"class","svelte-1imwuid"),p(l,"for","valorSesion"),p(l,"class","svelte-1imwuid"),p(c,"name","valorSesion"),p(c,"id","valorSesion"),p(c,"type","number"),p(c,"step","100"),p(c,"min","0"),p(c,"placeholder","Valor sesión"),p(c,"class","svelte-1imwuid"),p(i,"id","inputsFormSesionesI"),p(i,"class","svelte-1imwuid"),p(d,"for","diaSesion"),p(d,"class","svelte-1imwuid"),p(f,"name","diaSesion"),p(f,"id","diaSesion"),p(f,"type","date"),p(f,"placeholder","Día sesión"),p(f,"class","svelte-1imwuid"),p(v,"for","fechaPago"),p(v,"class","svelte-1imwuid"),p(w,"name","fechaPago"),p(w,"id","fechaPago"),p(w,"type","date"),p(w,"placeholder","Fecha pago"),p(w,"class","svelte-1imwuid"),p(h,"id","inputsFormSesionesD"),p(h,"class","svelte-1imwuid"),p(I,"class","svelte-1imwuid"),p(V,"class","svelte-1imwuid"),p(F,"class","svelte-1imwuid"),p(T,"id","botonesFormSesiones"),p(T,"class","buttons svelte-1imwuid"),p(s,"id","form-Sesiones"),p(s,"class","svelte-1imwuid"),p(n,"class","svelte-1imwuid"),p(e,"id","contenedor-form-sesiones"),p(e,"class","svelte-1imwuid")},m(R,ae){X(R,e,ae),y(e,n),y(n,s),y(s,i),y(i,r),y(i,o),Ee(o,t[9]),y(i,a),y(i,l),y(i,c),Ee(c,t[10]),y(s,u),y(s,h),y(h,d),y(h,f),Ee(f,t[11]),y(h,g),y(h,v),y(h,w),Ee(w,t[12]),y(s,S),y(s,T),y(T,I),y(T,L),y(T,V),y(T,ne),y(T,F),P||(M=[J(o,"input",t[25]),J(c,"input",t[26]),J(f,"input",t[27]),J(w,"input",t[28]),J(I,"click",t[29]),J(V,"click",t[30]),J(F,"click",t[16]),J(n,"submit",lf(t[23]))],P=!0)},p(R,ae){ae[0]&512&&gi(o.value)!==R[9]&&Ee(o,R[9]),ae[0]&1024&&gi(c.value)!==R[10]&&Ee(c,R[10]),ae[0]&2048&&Ee(f,R[11]),ae[0]&4096&&Ee(w,R[12])},d(R){R&&Q(e),P=!1,Xe(M)}}}function kE(t){let e,n,s,i,r,o,a,l=t[13]&&t[14]&&Ic(t),c=t[0].length>0&&Ac(t),u=AE(t);return o=new TE({props:{vistaCalculos:t[4],arrayParaLaVista:t[5],mesSeleccionado:t[7]}}),o.$on("vistaPulsado",t[31]),{c(){e=_("main"),n=_("body"),l&&l.c(),s=j(),c&&c.c(),i=j(),u&&u.c(),r=j(),Bt(o.$$.fragment),p(n,"class","svelte-1imwuid"),p(e,"class","svelte-1imwuid")},m(h,d){X(h,e,d),y(e,n),l&&l.m(n,null),y(n,s),c&&c.m(n,null),y(n,i),u&&u.m(n,null),y(n,r),Ct(o,n,null),a=!0},p(h,d){h[13]&&h[14]?l?l.p(h,d):(l=Ic(h),l.c(),l.m(n,s)):l&&(l.d(1),l=null),h[0].length>0?c?(c.p(h,d),d[0]&1&&ze(c,1)):(c=Ac(h),c.c(),ze(c,1),c.m(n,i)):c&&(Fc(),Ze(c,1,1,()=>{c=null}),Bc()),u.p(h,d);const f={};d[0]&16&&(f.vistaCalculos=h[4]),d[0]&32&&(f.arrayParaLaVista=h[5]),d[0]&128&&(f.mesSeleccionado=h[7]),o.$set(f)},i(h){a||(ze(c),ze(o.$$.fragment,h),a=!0)},o(h){Ze(c),Ze(o.$$.fragment,h),a=!1},d(h){h&&Q(e),l&&l.d(),c&&c.d(),u&&u.d(),St(o)}}}function DE(t,e,n){let s,i,r;Jt(t,pi,k=>n(3,s=k)),Jt(t,Oo,k=>n(13,i=k)),Jt(t,Ro,k=>n(14,r=k));let{sesiones:o}=e,{pacientes:a}=e,{planes:l}=e,{planSeleccionado:c}=e,u=!1,h=[],d,f=0;const g=new Date;let v=g.getMonth()+1,w=g.getFullYear(),S=v;console.log(`mesSeleccionado ${S}`);let T,I,L=0;const V=k=>{if(n(1,T=k.target.value),console.log(o),n(2,I=o.find(we=>we.id===T)),console.log("selectedSession",I),n(9,M=I.valorPago),console.log(`planSeleccionado: ${c}`),typeof c.plan>"u"||c.plan=="particular"||!c)n(10,R=I.valorSesion),console.log("particular",R);else{var se=l.find(we=>we.plan==c);console.log(se),console.log("OS",R)}n(12,fe=I.fechaPago),n(11,ae=I.diaSesion)},ne=async()=>{console.log("Add sesion",I);try{const k=await Td(Je(Ie,"sesiones"),{valorPago:M,valorSesion:R,diaSesion:ae,fechaPago:fe,pacienteID:s});console.log("sesion agregada"),Dn({text:"Nueva sesion agregada"}).showToast(),n(1,T=k.id)}catch(k){console.error(k)}},F=async k=>{console.log("Update sesion",k);try{await Ra(_t(Ie,"sesiones",k.id),{valorPago:M,valorSesion:R,fechaPago:fe,diaSesion:ae}),Dn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(se){console.log(se)}},P=async k=>{console.log("Delete sesion",k);try{await Io(_t(Ie,"sesiones",k.id)),Dn({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(se){console.error(se)}};let M=5e3,R=5e3,ae=new Date().toISOString().slice(0,10),fe=new Date().toISOString().slice(0,10);v.toString().padStart(2,"0"),w.toString();let Wt=k=>o.filter(we=>we.pacienteID===k&&we.diaSesion.slice(5,7)===S.toString().padStart(2,"0")).reduce((we,it)=>we+it.valorSesion,0);const Ce=async k=>{n(7,S=k);const se=await ct(S);n(5,h=se[1]),console.log(Array.isArray(se[1])),console.log(se[1]),n(4,u=!0)},ct=async k=>{k||(k=v);try{const se=await yE(k);n(8,L=0),f=0;let we=[];return se.forEach(it=>{let z=it.pacienteID;const ie=a.find(Zn=>Zn.id==z);var qe=it.valorPago;if(qe==null&&(qe=0),typeof qe=="number")if(ie.plan=="particular"){n(8,L+=qe),qe<R&&(f+=R-qe);var bt={diaSesion:it.diaSesion,apellido:ie.apellido,nombre:ie.nombre,plan:ie.plan.plan?ie.plan.plan:"particular",valorPago:qe,valorSesion:it.valorSesion};we.push(bt)}else{const Zn=ie.plan;var bt={diaSesion:it.diaSesion,apellido:ie.apellido,nombre:ie.nombre,plan:ie.plan.plan?ie.plan.plan:"particular",valorPago:qe,valorSesion:it.valorSesion};we.push(bt),qe<Zn.valorCoseguro&&(f+=Zn.valorCoseguro-qe),n(8,L+=Zn.valorOs+qe)}}),n(6,d=Wt(s)),[L,we]}catch(se){return console.error("Error al obtener las sesiones y los pagos:",se),[]}};function Qt(k){ff.call(this,t,k)}function ut(){T=Lo(this),n(1,T),n(0,o)}function je(){M=gi(this.value),n(9,M)}function mn(){R=gi(this.value),n(10,R)}function wt(){ae=this.value,n(11,ae)}function yn(){fe=this.value,n(12,fe)}const ht=()=>F(I),C=()=>P(I),pe=async k=>Ce(k.detail);return t.$$set=k=>{"sesiones"in k&&n(0,o=k.sesiones),"pacientes"in k&&n(20,a=k.pacientes),"planes"in k&&n(21,l=k.planes),"planSeleccionado"in k&&n(22,c=k.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&3145729&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",l),t.$$.dirty[0]&7&&(n(2,I=o.find(k=>k.id===T)),console.log(I||"sin seleccion de sesion")),t.$$.dirty[0]&8&&n(6,d=Wt(s))},ct(),[o,T,I,s,u,h,d,S,L,M,R,ae,fe,i,r,V,ne,F,P,Ce,a,l,c,Qt,ut,je,mn,wt,yn,ht,C,pe]}class PE extends Nt{constructor(e){super(),Pt(this,e,DE,kE,yt,{sesiones:0,pacientes:20,planes:21,planSeleccionado:22},null,[-1,-1])}}function NE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f;return a=new gE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],optionsPlan:t[1],planSeleccionado:Pc}}),u=new PE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],planSeleccionado:Pc}}),{c(){e=_("body"),n=_("button"),n.textContent="generar backup firestore",s=j(),i=_("div"),r=_("h5"),r.textContent="CRUD Pacientes",o=j(),Bt(a.$$.fragment),l=j(),c=_("div"),Bt(u.$$.fragment),p(i,"class","contenedor-pacientes svelte-1y3ujd1"),p(c,"class","contenedor-sesiones svelte-1y3ujd1"),p(e,"class","svelte-1y3ujd1")},m(g,v){X(g,e,v),y(e,n),y(e,s),y(e,i),y(i,r),y(i,o),Ct(a,i,null),y(e,l),y(e,c),Ct(u,c,null),h=!0,d||(f=J(n,"click",t[4]),d=!0)},p(g,[v]){const w={};v&4&&(w.sesiones=g[2]),v&8&&(w.pacientes=g[3]),v&1&&(w.planes=g[0]),v&2&&(w.optionsPlan=g[1]),a.$set(w);const S={};v&4&&(S.sesiones=g[2]),v&8&&(S.pacientes=g[3]),v&1&&(S.planes=g[0]),u.$set(S)},i(g){h||(ze(a.$$.fragment,g),ze(u.$$.fragment,g),h=!0)},o(g){Ze(a.$$.fragment,g),Ze(u.$$.fragment,g),h=!1},d(g){g&&Q(e),St(a),St(u),d=!1,f()}}}let Pc="particular";function OE(t,e,n){let s=[],i=[],r=[],o=[];Mc(()=>{const l=[],c=Je(Ie,"sesiones"),u=Je(Ie,"Pacientes"),h=Je(Ie,"planes"),d=us(c,Br("diaSesion")),f=us(u,Br("apellido")),g=us(h,Br("plan")),v=Ur(d,T=>{n(2,s=T.docs.map(I=>({id:I.id,...I.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(v);const w=Ur(f,T=>{n(3,i=T.docs.map(I=>({id:I.id,...I.data()})))});l.push(w);const S=Ur(g,T=>{n(0,r=T.docs.map(I=>({id:I.id,...I.data()})))});return l.push(S),()=>{l.forEach(T=>T())}});const a=()=>{const l="sesiones"+ci().toString()+"BU",c=Je(Ie,l);s.forEach(async g=>{const v=_t(c);try{await Vr(v,g),console.log("Documento sesion creado exitosamente")}catch(w){console.error("Error al crear el documento sesion:",w)}});const u="planes"+ci().toString()+"BU",h=Je(Ie,u);r.forEach(async g=>{const v=_t(h);try{await Vr(v,g),console.log("Documento plan creado exitosamente")}catch(w){console.error("Error al crear el documento plan:",w)}});const d="Pacientes"+ci().toString()+"BU",f=Je(Ie,d);i.forEach(async g=>{const v=_t(f);try{await Vr(v,g),console.log("Documento paciente creado exitosamente")}catch(w){console.error("Error al crear el documento paciente:",w)}})};return t.$$.update=()=>{t.$$.dirty&3&&(r.length!=0?(console.log(r),n(1,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,o,s,i,a]}class RE extends Nt{constructor(e){super(),Pt(this,e,OE,NE,yt,{})}}function LE(t){let e,n,s;return n=new RE({}),{c(){e=_("div"),Bt(n.$$.fragment),p(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){X(i,e,r),Ct(n,e,null),s=!0},p:ge,i(i){s||(ze(n.$$.fragment,i),s=!0)},o(i){Ze(n.$$.fragment,i),s=!1},d(i){i&&Q(e),St(n)}}}function ME(t){let e,n,s,i,r,o;return{c(){e=_("div"),n=_("h1"),n.textContent="ingrese la contraseña:",s=j(),i=_("input"),p(n,"class","svelte-uueu6x"),p(i,"type","password"),p(i,"class","svelte-uueu6x"),p(e,"class","ingreso svelte-uueu6x")},m(a,l){X(a,e,l),y(e,n),y(e,s),y(e,i),Ee(i,t[1]),r||(o=[J(i,"input",t[3]),J(i,"input",t[2])],r=!0)},p(a,l){l&2&&i.value!==a[1]&&Ee(i,a[1])},i:ge,o:ge,d(a){a&&Q(e),r=!1,Xe(o)}}}function xE(t){let e,n,s,i;const r=[ME,LE],o=[];function a(l,c){return l[0]==="nada"?0:l[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=_("main"),s&&s.c(),p(e,"class","svelte-uueu6x")},m(l,c){X(l,e,c),~n&&o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n===u?~n&&o[n].p(l,c):(s&&(Fc(),Ze(o[u],1,1,()=>{o[u]=null}),Bc()),~n?(s=o[n],s?s.p(l,c):(s=o[n]=r[n](l),s.c()),ze(s,1),s.m(e,null)):s=null)},i(l){i||(ze(s),i=!0)},o(l){Ze(s),i=!1},d(l){l&&Q(e),~n&&o[n].d()}}}function FE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class BE extends Nt{constructor(e){super(),Pt(this,e,FE,xE,yt,{})}}new BE({target:document.getElementById("app")});
