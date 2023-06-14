(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function _e(){}function _l(t){return t()}function Ka(){return Object.create(null)}function ot(t){t.forEach(_l)}function Tl(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Qd(t){return Object.keys(t).length===0}function Yd(t,...e){if(t==null)return _e;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ct(t,e,n){t.$$.on_destroy.push(Yd(e,n))}function Zn(t,e,n){return t.set(n),e}function w(t,e){t.appendChild(e)}function pe(t,e,n){t.insertBefore(e,n||null)}function de(t){t.parentNode&&t.parentNode.removeChild(t)}function Fi(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function ee(t){return document.createTextNode(t)}function Z(){return ee(" ")}function Cl(){return ee("")}function X(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Xd(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function fi(t){return t===""?null:+t}function Jd(t){return Array.from(t.childNodes)}function Ye(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ee(t,e){t.value=e??""}function Nt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Zd(t){for(const e of t.options)if(!e.disabled)return e}function pi(t){const e=t.querySelector(":checked")||Zd(t);return e&&e.__value}function Zs(t,e,n){t.classList[n?"add":"remove"](e)}function ef(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let fs;function rs(t){fs=t}function Sl(){if(!fs)throw new Error("Function called outside component initialization");return fs}function Il(t){Sl().$$.on_mount.push(t)}function Al(){const t=Sl();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=ef(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function tf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const wn=[],za=[];let Tn=[];const Ga=[],nf=Promise.resolve();let jr=!1;function sf(){jr||(jr=!0,nf.then(kl))}function Xt(t){Tn.push(t)}const Er=new Set;let yn=0;function kl(){if(yn!==0)return;const t=fs;do{try{for(;yn<wn.length;){const e=wn[yn];yn++,rs(e),rf(e.$$)}}catch(e){throw wn.length=0,yn=0,e}for(rs(null),wn.length=0,yn=0;za.length;)za.pop()();for(let e=0;e<Tn.length;e+=1){const n=Tn[e];Er.has(n)||(Er.add(n),n())}Tn.length=0}while(wn.length);for(;Ga.length;)Ga.pop()();jr=!1,Er.clear(),rs(t)}function rf(t){if(t.fragment!==null){t.update(),ot(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Xt)}}function of(t){const e=[],n=[];Tn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Tn=e}const ci=new Set;let Ht;function af(){Ht={r:0,c:[],p:Ht}}function cf(){Ht.r||ot(Ht.c),Ht=Ht.p}function wt(t,e){t&&t.i&&(ci.delete(t),t.i(e))}function Ot(t,e,n,s){if(t&&t.o){if(ci.has(t))return;ci.add(t),Ht.c.push(()=>{ci.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Pn(t){t&&t.c()}function Jt(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Xt(()=>{const o=t.$$.on_mount.map(_l).filter(Tl);t.$$.on_destroy?t.$$.on_destroy.push(...o):ot(o),t.$$.on_mount=[]}),r.forEach(Xt)}function Zt(t,e){const n=t.$$;n.fragment!==null&&(of(n.after_update),ot(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lf(t,e){t.$$.dirty[0]===-1&&(wn.push(t),sf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function an(t,e,n,s,i,r,o,a=[-1]){const c=fs;rs(t);const l=t.$$={fragment:null,ctx:[],props:r,update:_e,not_equal:i,bound:Ka(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ka(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&lf(t,h)),d}):[],l.update(),u=!0,ot(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Jd(e.target);l.fragment&&l.fragment.l(h),h.forEach(de)}else l.fragment&&l.fragment.c();e.intro&&wt(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),kl()}rs(c)}class cn{$destroy(){Zt(this,1),this.$destroy=_e}$on(e,n){if(!Tl(n))return _e;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Qd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Wa(t,e,n){const s=t.slice();return s[12]=e[n],s}function Qa(t){let e,n=t[12]+"",s,i;return{c(){e=k("option"),s=ee(n),e.__value=i=t[12],e.value=e.__value},m(r,o){pe(r,e,o),w(e,s)},p(r,o){o&4&&n!==(n=r[12]+"")&&Ye(s,n),o&4&&i!==(i=r[12])&&(e.__value=i,e.value=e.__value)},d(r){r&&de(e)}}}function uf(t){let e,n,s,i,r,o,a=t[2],c=[];for(let l=0;l<a.length;l+=1)c[l]=Qa(Wa(t,a,l));return{c(){e=k("div"),n=k("input"),s=Z(),i=k("select");for(let l=0;l<c.length;l+=1)c[l].c();g(n,"type","checkbox"),g(n,"name","CheckBoxParticular"),g(n,"id","CheckBoxParticular"),g(i,"name","plan"),g(i,"id","plan"),g(i,"class","svelte-1de4xhy"),t[1]===void 0&&Xt(()=>t[7].call(i)),Zs(i,"SelectPlanVisible",t[0]),Zs(i,"SelectPlanHidden",t[3]),g(e,"id","selectPlanContainer"),g(e,"class","svelte-1de4xhy")},m(l,u){pe(l,e,u),w(e,n),n.checked=t[0],w(e,s),w(e,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null);Nt(i,t[1]),r||(o=[X(n,"change",t[6]),X(n,"change",t[4]),X(i,"change",t[7]),X(i,"change",t[5])],r=!0)},p(l,[u]){if(u&1&&(n.checked=l[0]),u&4){a=l[2];let h;for(h=0;h<a.length;h+=1){const d=Wa(l,a,h);c[h]?c[h].p(d,u):(c[h]=Qa(d),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}u&6&&Nt(i,l[1]),u&1&&Zs(i,"SelectPlanVisible",l[0]),u&8&&Zs(i,"SelectPlanHidden",l[3])},i:_e,o:_e,d(l){l&&de(e),Fi(c,l),r=!1,ot(o)}}}function hf(t,e,n){let{optionsPlan:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,o;const a=m=>{n(0,r=m)},c=()=>{u("clickCheckPlan",{valor:{SelectPlanVisible:r}})},l=m=>{var b=m.target.checked;a(b),c()},u=Al(),h=()=>{u("cambioPlan",{valor:{planSeleccionado:i}})};function d(){r=this.checked,n(0,r)}function p(){i=pi(this),n(1,i),n(2,s)}return t.$$set=m=>{"optionsPlan"in m&&n(2,s=m.optionsPlan),"planSeleccionado"in m&&n(1,i=m.planSeleccionado),"SelectPlanVisible"in m&&n(0,r=m.SelectPlanVisible)},t.$$.update=()=>{t.$$.dirty&1&&n(3,o=!r)},[r,i,s,o,l,h,d,p]}class df extends cn{constructor(e){super(),an(this,e,hf,uf,Ft,{optionsPlan:2,planSeleccionado:1,SelectPlanVisible:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Dl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ff=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ff(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new pf;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gf=function(t){const e=Dl(t);return Pl.encodeByteArray(e,!0)},gi=function(t){return gf(t).replace(/\./g,"")},mf=function(t){try{return Pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vf=()=>yf().__FIREBASE_DEFAULTS__,wf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mf(t[1]);return e&&JSON.parse(e)},Nl=()=>{try{return vf()||wf()||bf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ef=t=>{var e,n;return(n=(e=Nl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ol=t=>{const e=Ef(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},_f=()=>{var t;return(t=Nl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Rl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gi(JSON.stringify(n)),gi(JSON.stringify(o)),a].join(".")}function Cf(){try{return typeof indexedDB=="object"}catch{return!1}}function Sf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="FirebaseError";class ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=If,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ll.prototype.create)}}class Ll{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Af(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,s)}}function Af(t,e){return t.replace(kf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const kf=/\{\$([^}]+)}/g;function qr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ya(r)&&Ya(o)){if(!qr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ya(t){return t!==null&&typeof t=="object"}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Df{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Tf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nf(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pf(t){return t===qt?void 0:t}function Nf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Of{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Df(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const Rf={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Lf=z.INFO,Mf={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},xf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Mf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=Lf,this._logHandler=xf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Ff=(t,e)=>e.some(n=>t instanceof n);let Xa,Ja;function Bf(){return Xa||(Xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vf(){return Ja||(Ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xl=new WeakMap,Hr=new WeakMap,Fl=new WeakMap,_r=new WeakMap,Oo=new WeakMap;function Uf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(It(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xl.set(n,t)}).catch(()=>{}),Oo.set(e,t),e}function $f(t){if(Hr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Hr.set(t,e)}let Kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jf(t){Kr=t(Kr)}function qf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Tr(this),e,...n);return Fl.set(s,e.sort?e.sort():[e]),It(s)}:Vf().includes(t)?function(...e){return t.apply(Tr(this),e),It(xl.get(this))}:function(...e){return It(t.apply(Tr(this),e))}}function Hf(t){return typeof t=="function"?qf(t):(t instanceof IDBTransaction&&$f(t),Ff(t,Bf())?new Proxy(t,Kr):t)}function It(t){if(t instanceof IDBRequest)return Uf(t);if(_r.has(t))return _r.get(t);const e=Hf(t);return e!==t&&(_r.set(t,e),Oo.set(e,t)),e}const Tr=t=>Oo.get(t);function Kf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=It(o);return s&&o.addEventListener("upgradeneeded",c=>{s(It(o.result),c.oldVersion,c.newVersion,It(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const zf=["get","getKey","getAll","getAllKeys","count"],Gf=["put","add","delete","clear"],Cr=new Map;function Za(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cr.get(e))return Cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Gf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||zf.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Cr.set(e,r),r}jf(t=>({...t,get:(e,n,s)=>Za(e,n)||t.get(e,n,s),has:(e,n)=>!!Za(e,n)||t.has(e,n)}));/**
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
 */class Wf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Qf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zr="@firebase/app",ec="0.9.4";/**
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
 */const en=new Ml("@firebase/app"),Yf="@firebase/app-compat",Xf="@firebase/analytics-compat",Jf="@firebase/analytics",Zf="@firebase/app-check-compat",ep="@firebase/app-check",tp="@firebase/auth",np="@firebase/auth-compat",sp="@firebase/database",ip="@firebase/database-compat",rp="@firebase/functions",op="@firebase/functions-compat",ap="@firebase/installations",cp="@firebase/installations-compat",lp="@firebase/messaging",up="@firebase/messaging-compat",hp="@firebase/performance",dp="@firebase/performance-compat",fp="@firebase/remote-config",pp="@firebase/remote-config-compat",gp="@firebase/storage",mp="@firebase/storage-compat",yp="@firebase/firestore",vp="@firebase/firestore-compat",wp="firebase",bp="9.17.2";/**
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
 */const Gr="[DEFAULT]",Ep={[zr]:"fire-core",[Yf]:"fire-core-compat",[Jf]:"fire-analytics",[Xf]:"fire-analytics-compat",[ep]:"fire-app-check",[Zf]:"fire-app-check-compat",[tp]:"fire-auth",[np]:"fire-auth-compat",[sp]:"fire-rtdb",[ip]:"fire-rtdb-compat",[rp]:"fire-fn",[op]:"fire-fn-compat",[ap]:"fire-iid",[cp]:"fire-iid-compat",[lp]:"fire-fcm",[up]:"fire-fcm-compat",[hp]:"fire-perf",[dp]:"fire-perf-compat",[fp]:"fire-rc",[pp]:"fire-rc-compat",[gp]:"fire-gcs",[mp]:"fire-gcs-compat",[yp]:"fire-fst",[vp]:"fire-fst-compat","fire-js":"fire-js",[wp]:"fire-js-all"};/**
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
 */const mi=new Map,Wr=new Map;function _p(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(Wr.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Wr.set(e,t);for(const n of mi.values())_p(n,t);return!0}function Bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Tp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new Ll("app","Firebase",Tp);/**
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
 */class Cp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const Vl=bp;function Ul(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=_f()),!n)throw At.create("no-options");const r=mi.get(i);if(r){if(qr(n,r.options)&&qr(s,r.config))return r;throw At.create("duplicate-app",{appName:i})}const o=new Of(i);for(const c of Wr.values())o.addComponent(c);const a=new Cp(n,s,o);return mi.set(i,a),a}function $l(t=Gr){const e=mi.get(t);if(!e&&t===Gr)return Ul();if(!e)throw At.create("no-app",{appName:t});return e}function kt(t,e,n){var s;let i=(s=Ep[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(a.join(" "));return}ps(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Sp="firebase-heartbeat-database",Ip=1,gs="firebase-heartbeat-store";let Sr=null;function jl(){return Sr||(Sr=Kf(Sp,Ip,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Sr}async function Ap(t){try{return(await jl()).transaction(gs).objectStore(gs).get(ql(t))}catch(e){if(e instanceof ln)en.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function tc(t,e){try{const s=(await jl()).transaction(gs,"readwrite");return await s.objectStore(gs).put(e,ql(t)),s.done}catch(n){if(n instanceof ln)en.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(s.message)}}}function ql(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kp=1024,Dp=30*24*60*60*1e3;class Pp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Op(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Dp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nc(),{heartbeatsToSend:n,unsentEntries:s}=Np(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nc(){return new Date().toISOString().substring(0,10)}function Np(t,e=kp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cf()?Sf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ap(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sc(t){return gi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rp(t){ps(new Nn("platform-logger",e=>new Wf(e),"PRIVATE")),ps(new Nn("heartbeat",e=>new Pp(e),"PRIVATE")),kt(zr,ec,t),kt(zr,ec,"esm2017"),kt("fire-js","")}Rp("");var Lp="firebase",Mp="9.17.2";/**
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
 */kt(Lp,Mp,"app");var xp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Ro=Ro||{},L=xp||self;function yi(){}function Bi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ps(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Fp(t){return Object.prototype.hasOwnProperty.call(t,Ir)&&t[Ir]||(t[Ir]=++Bp)}var Ir="closure_uid_"+(1e9*Math.random()>>>0),Bp=0;function Vp(t,e,n){return t.call.apply(t.bind,arguments)}function Up(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Oe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=Vp:Oe=Up,Oe.apply(null,arguments)}function ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Bt(){this.s=this.s,this.o=this.o}var $p=0;Bt.prototype.s=!1;Bt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),$p!=0)&&Fp(this)};Bt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Lo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ic(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Bi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var jp=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",yi,e),L.removeEventListener("test",yi,e)}catch{}return t}();function vi(t){return/^[\s\xa0]*$/.test(t)}var rc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ar(t,e){return t<e?-1:t>e?1:0}function Vi(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function ct(t){return Vi().indexOf(t)!=-1}function Mo(t){return Mo[" "](t),t}Mo[" "]=yi;function qp(t){var e=zp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Hp=ct("Opera"),On=ct("Trident")||ct("MSIE"),Kl=ct("Edge"),Qr=Kl||On,zl=ct("Gecko")&&!(Vi().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),Kp=Vi().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function Gl(){var t=L.document;return t?t.documentMode:void 0}var wi;e:{var kr="",Dr=function(){var t=Vi();if(zl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Kl)return/Edge\/([\d\.]+)/.exec(t);if(On)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Kp)return/WebKit\/(\S+)/.exec(t);if(Hp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dr&&(kr=Dr?Dr[1]:""),On){var Pr=Gl();if(Pr!=null&&Pr>parseFloat(kr)){wi=String(Pr);break e}}wi=kr}var zp={};function Gp(){return qp(function(){let t=0;const e=rc(String(wi)).split("."),n=rc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ar(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ar(i[2].length==0,r[2].length==0)||Ar(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Yr;if(L.document&&On){var oc=Gl();Yr=oc||parseInt(wi,10)||void 0}else Yr=void 0;var Wp=Yr;function ms(t,e){if(Re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zl){e:{try{Mo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Qp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ms.X.h.call(this)}}Ae(ms,Re);var Qp={2:"touch",3:"pen",4:"mouse"};ms.prototype.h=function(){ms.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ns="closure_listenable_"+(1e6*Math.random()|0),Yp=0;function Xp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Yp,this.ba=this.ea=!1}function Ui(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Wl(t){const e={};for(const n in t)e[n]=t[n];return e}const ac="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ql(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ac.length;r++)n=ac[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function $i(t){this.src=t,this.g={},this.h=0}$i.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Jr(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Xp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Xr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Hl(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ui(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Fo="closure_lm_"+(1e6*Math.random()|0),Nr={};function Yl(t,e,n,s,i){if(s&&s.once)return Jl(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Yl(t,e[r],n,s,i);return null}return n=Uo(n),t&&t[Ns]?t.N(e,n,Ps(s)?!!s.capture:!!s,i):Xl(t,e,n,!1,s,i)}function Xl(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ps(i)?!!i.capture:!!i,a=Vo(t);if(a||(t[Fo]=a=new $i(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Jp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(eu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Jp(){function t(n){return e.call(t.src,t.listener,n)}const e=Zp;return t}function Jl(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Jl(t,e[r],n,s,i);return null}return n=Uo(n),t&&t[Ns]?t.O(e,n,Ps(s)?!!s.capture:!!s,i):Xl(t,e,n,!0,s,i)}function Zl(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Zl(t,e[r],n,s,i);else s=Ps(s)?!!s.capture:!!s,n=Uo(n),t&&t[Ns]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Jr(r,n,s,i),-1<n&&(Ui(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jr(e,n,s,i)),(n=-1<t?e[t]:null)&&Bo(n))}function Bo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ns])Xr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(eu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Vo(e))?(Xr(n,t),n.h==0&&(n.src=null,e[Fo]=null)):Ui(t)}}}function eu(t){return t in Nr?Nr[t]:Nr[t]="on"+t}function Zp(t,e){if(t.ba)t=!0;else{e=new ms(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Bo(t),t=n.call(s,e)}return t}function Vo(t){return t=t[Fo],t instanceof $i?t:null}var Or="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(t){return typeof t=="function"?t:(t[Or]||(t[Or]=function(e){return t.handleEvent(e)}),t[Or])}function Te(){Bt.call(this),this.i=new $i(this),this.P=this,this.I=null}Ae(Te,Bt);Te.prototype[Ns]=!0;Te.prototype.removeEventListener=function(t,e,n,s){Zl(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Re(e,t);else if(e instanceof Re)e.target=e.target||t;else{var i=e;e=new Re(s,t),Ql(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ti(o,s,!0,e)&&i}if(o=e.g=t,i=ti(o,s,!0,e)&&i,i=ti(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ti(o,s,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ui(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ti(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Xr(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var $o=L.JSON.stringify;function eg(){var t=su;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tg{constructor(){this.h=this.g=null}add(e,n){const s=tu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var tu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ng,t=>t.reset());class ng{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sg(t){L.setTimeout(()=>{throw t},0)}function nu(t,e){Zr||ig(),eo||(Zr(),eo=!0),su.add(t,e)}var Zr;function ig(){var t=L.Promise.resolve(void 0);Zr=function(){t.then(rg)}}var eo=!1,su=new tg;function rg(){for(var t;t=eg();){try{t.h.call(t.g)}catch(n){sg(n)}var e=tu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}eo=!1}function ji(t,e){Te.call(this),this.h=t||1,this.g=e||L,this.j=Oe(this.lb,this),this.l=Date.now()}Ae(ji,Te);D=ji.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(jo(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){ji.X.M.call(this),jo(this),delete this.g};function qo(t,e,n){if(typeof t=="function")n&&(t=Oe(t,n));else if(t&&typeof t.handleEvent=="function")t=Oe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function iu(t){t.g=qo(()=>{t.g=null,t.i&&(t.i=!1,iu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class og extends Bt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iu(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(t){Bt.call(this),this.h=t,this.g={}}Ae(ys,Bt);var cc=[];function ru(t,e,n,s){Array.isArray(n)||(n&&(cc[0]=n.toString()),n=cc);for(var i=0;i<n.length;i++){var r=Yl(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ou(t){xo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bo(e)},t),t.g={}}ys.prototype.M=function(){ys.X.M.call(this),ou(this)};ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qi(){this.g=!0}qi.prototype.Aa=function(){this.g=!1};function ag(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function cg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function _n(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ug(t,n)+(s?" "+s:"")})}function lg(t,e){t.info(function(){return"TIMEOUT: "+e})}qi.prototype.info=function(){};function ug(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $o(n)}catch{return e}}var un={},lc=null;function Hi(){return lc=lc||new Te}un.Pa="serverreachability";function au(t){Re.call(this,un.Pa,t)}Ae(au,Re);function vs(t){const e=Hi();Se(e,new au(e))}un.STAT_EVENT="statevent";function cu(t,e){Re.call(this,un.STAT_EVENT,t),this.stat=e}Ae(cu,Re);function Fe(t){const e=Hi();Se(e,new cu(e,t))}un.Qa="timingevent";function lu(t,e){Re.call(this,un.Qa,t),this.size=e}Ae(lu,Re);function Os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Ki={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},uu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ho(){}Ho.prototype.h=null;function uc(t){return t.h||(t.h=t.i())}function hu(){}var Rs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ko(){Re.call(this,"d")}Ae(Ko,Re);function zo(){Re.call(this,"c")}Ae(zo,Re);var to;function zi(){}Ae(zi,Ho);zi.prototype.g=function(){return new XMLHttpRequest};zi.prototype.i=function(){return{}};to=new zi;function Ls(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ys(this),this.O=hg,t=Qr?125:void 0,this.T=new ji(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new du}function du(){this.i=null,this.g="",this.h=!1}var hg=45e3,no={},bi={};D=Ls.prototype;D.setTimeout=function(t){this.O=t};function so(t,e,n){t.K=1,t.v=Wi(bt(e)),t.s=n,t.P=!0,fu(t,null)}function fu(t,e){t.F=Date.now(),Ms(t),t.A=bt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Eu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new du,t.g=ju(t.l,n?e:null,!t.s),0<t.N&&(t.L=new og(Oe(t.La,t,t.g),t.N)),ru(t.S,t.g,"readystatechange",t.ib),e=t.H?Wl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vs(),ag(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&yt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=yt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Qr||this.g&&(this.h.h||this.g.fa()||pc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?vs(3):vs(2)),Gi(this);var n=this.g.aa();this.Y=n;t:if(pu(this)){var s=pc(this.g);t="";var i=s.length,r=yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),os(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,cg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vi(a)){var l=a;break t}}l=null}if(n=l)_n(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,io(this,n);else{this.i=!1,this.o=3,Fe(12),Kt(this),os(this);break e}}this.P?(gu(this,u,o),Qr&&this.i&&u==3&&(ru(this.S,this.T,"tick",this.hb),this.T.start())):(_n(this.j,this.m,o,null),io(this,o)),u==4&&Kt(this),this.i&&!this.I&&(u==4?Bu(this.l,this):(this.i=!1,Ms(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Fe(12)):(this.o=0,Fe(13)),Kt(this),os(this)}}}catch{}finally{}};function pu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=dg(t,n),i==bi){e==4&&(t.o=4,Fe(14),s=!1),_n(t.j,t.m,null,"[Incomplete Response]");break}else if(i==no){t.o=4,Fe(15),_n(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else _n(t.j,t.m,i,null),io(t,i);pu(t)&&i!=bi&&i!=no&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Fe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zo(e),e.K=!0,Fe(11))):(_n(t.j,t.m,n,"[Invalid Chunked Response]"),Kt(t),os(t))}D.hb=function(){if(this.g){var t=yt(this.g),e=this.g.fa();this.C<e.length&&(Gi(this),gu(this,t,e),this.i&&t!=4&&Ms(this))}};function dg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?bi:(n=Number(e.substring(n,s)),isNaN(n)?no:(s+=1,s+n>e.length?bi:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,Kt(this)};function Ms(t){t.V=Date.now()+t.O,mu(t,t.O)}function mu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Os(Oe(t.gb,t),e)}function Gi(t){t.B&&(L.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(lg(this.j,this.A),this.K!=2&&(vs(),Fe(17)),Kt(this),this.o=2,os(this)):mu(this,this.V-t)};function os(t){t.l.G==0||t.I||Bu(t.l,t)}function Kt(t){Gi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jo(t.T),ou(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function io(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ro(n.h,t))){if(!t.J&&ro(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ti(n),Xi(n);else break e;Jo(n),Fe(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Os(Oe(n.cb,n),6e3));if(1>=Cu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else zt(n,11)}else if((t.J||n.g==t)&&Ti(n),!vi(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Go(r,r.h),r.h=null))}if(s.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,oe(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=$u(s,s.H?s.ka:null,s.V),o.J){Su(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Gi(a),Ms(a)),s.g=o}else xu(s);0<n.i.length&&Ji(n)}else l[0]!="stop"&&l[0]!="close"||zt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zt(n,7):Xo(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}vs(4)}catch{}}function fg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function pg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function yu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pg(t),s=fg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wt){this.h=e!==void 0?e:t.h,Ei(this,t.j),this.s=t.s,this.g=t.g,_i(this,t.m),this.l=t.l,e=t.i;var n=new ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hc(this,n),this.o=t.o}else t&&(n=String(t).match(vu))?(this.h=!!e,Ei(this,n[1]||"",!0),this.s=ts(n[2]||""),this.g=ts(n[3]||"",!0),_i(this,n[4]),this.l=ts(n[5]||"",!0),hc(this,n[6]||"",!0),this.o=ts(n[7]||"")):(this.h=!!e,this.i=new ws(null,this.h))}Wt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,dc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ns(e,dc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ns(n,n.charAt(0)=="/"?vg:yg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,bg)),t.join("")};function bt(t){return new Wt(t)}function Ei(t,e,n){t.j=n?ts(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _i(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hc(t,e,n){e instanceof ws?(t.i=e,Eg(t.i,t.h)):(n||(e=ns(e,wg)),t.i=new ws(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function Wi(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ts(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dc=/[#\/\?@]/g,yg=/[#\?:]/g,vg=/[#\?]/g,wg=/[#\?@]/g,bg=/#/g;function ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vt(t){t.g||(t.g=new Map,t.h=0,t.i&&gg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=ws.prototype;D.add=function(t,e){Vt(this),this.i=null,t=jn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wu(t,e){Vt(t),e=jn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bu(t,e){return Vt(t),e=jn(t,e),t.g.has(e)}D.forEach=function(t,e){Vt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.oa=function(){Vt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.W=function(t){Vt(this);let e=[];if(typeof t=="string")bu(this,t)&&(e=e.concat(this.g.get(jn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Vt(this),this.i=null,t=jn(this,t),bu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Eu(t,e,n){wu(t,e),0<n.length&&(t.i=null,t.g.set(jn(t,e),Lo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function jn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Eg(t,e){e&&!t.j&&(Vt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(wu(this,s),Eu(this,i,n))},t)),t.j=e}var _g=class{constructor(e,n){this.h=e,this.g=n}};function _u(t){this.l=t||Tg,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tg=10;function Tu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Cu(t){return t.h?1:t.g?t.g.size:0}function ro(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Go(t,e){t.g?t.g.add(e):t.h=e}function Su(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_u.prototype.cancel=function(){if(this.i=Iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Iu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Lo(t.i)}function Wo(){}Wo.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};Wo.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function Cg(){this.g=new Wo}function Sg(t,e,n){const s=n||"";try{yu(t,function(i,r){let o=i;Ps(i)&&(o=$o(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Ig(t,e){const n=new qi;if(L.Image){const s=new Image;s.onload=ei(ni,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ei(ni,n,s,"TestLoadImage: error",!1,e),s.onabort=ei(ni,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ei(ni,n,s,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ni(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function xs(t){this.l=t.ac||null,this.j=t.jb||!1}Ae(xs,Ho);xs.prototype.g=function(){return new Qi(this.l,this.j)};xs.prototype.i=function(t){return function(){return t}}({});function Qi(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Qo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(Qi,Te);var Qo=0;D=Qi.prototype;D.open=function(t,e){if(this.readyState!=Qo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=Qo};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Au(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Au(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fs(this):bs(this),this.readyState==3&&Au(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Fs(this))};D.Ua=function(t){this.g&&(this.response=t,Fs(this))};D.ga=function(){this.g&&Fs(this)};function Fs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ag=L.JSON.parse;function ae(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ku,this.K=this.L=!1}Ae(ae,Te);var ku="",kg=/^https?$/i,Dg=["POST","PUT"];D=ae.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():to.g(),this.C=this.u?uc(this.u):uc(to),this.g.onreadystatechange=Oe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){fc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=Hl(Dg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nu(this),0<this.B&&((this.K=Pg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.qa,this)):this.A=qo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){fc(this,r)}};function Pg(t){return On&&Gp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Ro<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function fc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Du(t),Yi(t)}function Du(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),Yi(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yi(this,!0)),ae.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Pu(this):this.fb())};D.fb=function(){Pu(this)};function Pu(t){if(t.h&&typeof Ro<"u"&&(!t.C[1]||yt(t)!=4||t.aa()!=2)){if(t.v&&yt(t)==4)qo(t.Ha,0,t);else if(Se(t,"readystatechange"),yt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(vu)[1]||null;if(!i&&L.self&&L.self.location){var r=L.self.location.protocol;i=r.substr(0,r.length-1)}s=!kg.test(i?i.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<yt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Du(t)}}finally{Yi(t)}}}}function Yi(t,e){if(t.g){Nu(t);const n=t.g,s=t.C[0]?yi:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function Nu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function yt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<yt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ag(e)}};function pc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ku:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ou(t){let e="";return xo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Yo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ou(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function es(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ru(t){this.Ca=0,this.i=[],this.j=new qi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=es("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=es("baseRetryDelayMs",5e3,t),this.bb=es("retryDelaySeedMs",1e4,t),this.$a=es("forwardChannelMaxRetries",2,t),this.ta=es("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new _u(t&&t.concurrentRequestLimit),this.Fa=new Cg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=Ru.prototype;D.ma=8;D.G=1;function Xo(t){if(Lu(t),t.G==3){var e=t.U++,n=bt(t.F);oe(n,"SID",t.I),oe(n,"RID",e),oe(n,"TYPE","terminate"),Bs(t,n),e=new Ls(t,t.j,e,void 0),e.K=2,e.v=Wi(bt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=ju(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ms(e)}Uu(t)}function Xi(t){t.g&&(Zo(t),t.g.cancel(),t.g=null)}function Lu(t){Xi(t),t.u&&(L.clearTimeout(t.u),t.u=null),Ti(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Ji(t){Tu(t.h)||t.m||(t.m=!0,nu(t.Ja,t),t.C=0)}function Ng(t,e){return Cu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Os(Oe(t.Ja,t,e),Vu(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ls(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Wl(r),Ql(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mu(this,i,e),n=bt(this.F),oe(n,"RID",t),oe(n,"CVER",22),this.D&&oe(n,"X-HTTP-Session-Id",this.D),Bs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Ou(r)))+"&"+e:this.o&&Yo(n,this.o,r)),Go(this.h,i),this.Ya&&oe(n,"TYPE","init"),this.O?(oe(n,"$req",e),oe(n,"SID","null"),i.Z=!0,so(i,n,null)):so(i,n,e),this.G=2}}else this.G==3&&(t?gc(this,t):this.i.length==0||Tu(this.h)||gc(this))};function gc(t,e){var n;e?n=e.m:n=t.U++;const s=bt(t.F);oe(s,"SID",t.I),oe(s,"RID",n),oe(s,"AID",t.T),Bs(t,s),t.o&&t.s&&Yo(s,t.o,t.s),n=new Ls(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Mu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Go(t.h,n),so(n,s,e)}function Bs(t,e){t.ia&&xo(t.ia,function(n,s){oe(e,s,n)}),t.l&&yu({},function(n,s){oe(e,s,n)})}function Mu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Oe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{Sg(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function xu(t){t.g||t.u||(t.Z=1,nu(t.Ia,t),t.A=0)}function Jo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Os(Oe(t.Ia,t),Vu(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,Fu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Os(Oe(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Fe(10),Xi(this),Fu(this))};function Zo(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function Fu(t){t.g=new Ls(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=bt(t.sa);oe(e,"RID","rpc"),oe(e,"SID",t.I),oe(e,"CI",t.L?"0":"1"),oe(e,"AID",t.T),oe(e,"TYPE","xmlhttp"),Bs(t,e),t.o&&t.s&&Yo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Wi(bt(e)),n.s=null,n.P=!0,fu(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Xi(this),Jo(this),Fe(19))};function Ti(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function Bu(t,e){var n=null;if(t.g==e){Ti(t),Zo(t),t.g=null;var s=2}else if(ro(t.h,e))n=e.D,Su(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Hi(),Se(s,new lu(s,n)),Ji(t)}else xu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Ng(t,e)||s==2&&Jo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:zt(t,5);break;case 4:zt(t,10);break;case 3:zt(t,6);break;default:zt(t,2)}}}function Vu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function zt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Oe(t.kb,t);n||(n=new Wt("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Ei(n,"https"),Wi(n)),Ig(n.toString(),s)}else Fe(2);t.G=0,t.l&&t.l.va(e),Uu(t),Lu(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Uu(t){if(t.G=0,t.la=[],t.l){const e=Iu(t.h);(e.length!=0||t.i.length!=0)&&(ic(t.la,e),ic(t.la,t.i),t.h.i.length=0,Lo(t.i),t.i.length=0),t.l.ua()}}function $u(t,e,n){var s=n instanceof Wt?bt(n):new Wt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),_i(s,s.m);else{var i=L.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Wt(null,void 0);s&&Ei(r,s),e&&(r.g=e),i&&_i(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&oe(s,n,e),oe(s,"VER",t.ma),Bs(t,s),s}function ju(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ae(new xs({jb:!0})):new ae(t.ra),e.Ka(t.H),e}function qu(){}D=qu.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Ci(){if(On&&!(10<=Number(Wp)))throw Error("Environmental error: no available transport.")}Ci.prototype.g=function(t,e){return new We(t,e)};function We(t,e){Te.call(this),this.g=new Ru(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!vi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qn(this)}Ae(We,Te);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Fe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=$u(t,null,t.V),Ji(t)};We.prototype.close=function(){Xo(this.g)};We.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$o(t),t=n);e.i.push(new _g(e.ab++,t)),e.G==3&&Ji(e)};We.prototype.M=function(){this.g.l=null,delete this.j,Xo(this.g),delete this.g,We.X.M.call(this)};function Hu(t){Ko.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(Hu,Ko);function Ku(){zo.call(this),this.status=1}Ae(Ku,zo);function qn(t){this.g=t}Ae(qn,qu);qn.prototype.xa=function(){Se(this.g,"a")};qn.prototype.wa=function(t){Se(this.g,new Hu(t))};qn.prototype.va=function(t){Se(this.g,new Ku)};qn.prototype.ua=function(){Se(this.g,"b")};Ci.prototype.createWebChannel=Ci.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;Ki.NO_ERROR=0;Ki.TIMEOUT=8;Ki.HTTP_ERROR=6;uu.COMPLETE="complete";hu.EventType=Rs;Rs.OPEN="a";Rs.CLOSE="b";Rs.ERROR="c";Rs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ae.prototype.listenOnce=ae.prototype.O;ae.prototype.getLastError=ae.prototype.Oa;ae.prototype.getLastErrorCode=ae.prototype.Ea;ae.prototype.getStatus=ae.prototype.aa;ae.prototype.getResponseJson=ae.prototype.Sa;ae.prototype.getResponseText=ae.prototype.fa;ae.prototype.send=ae.prototype.da;ae.prototype.setWithCredentials=ae.prototype.Ka;var Og=function(){return new Ci},Rg=function(){return Hi()},Rr=Ki,Lg=uu,Mg=un,mc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},xg=xs,si=hu,Fg=ae;const yc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const tn=new Ml("@firebase/firestore");function vc(){return tn.logLevel}function P(t,...e){if(tn.logLevel<=z.DEBUG){const n=e.map(ea);tn.debug(`Firestore (${Hn}): ${t}`,...n)}}function Et(t,...e){if(tn.logLevel<=z.ERROR){const n=e.map(ea);tn.error(`Firestore (${Hn}): ${t}`,...n)}}function oo(t,...e){if(tn.logLevel<=z.WARN){const n=e.map(ea);tn.warn(`Firestore (${Hn}): ${t}`,...n)}}function ea(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${Hn}) INTERNAL ASSERTION FAILED: `+t;throw Et(e),new Error(e)}function te(t,e){t||O()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class Vg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ug{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Dt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Dt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string"),new zu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new ke(e)}}class $g{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(te(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class jg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new $g(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.A=n.token,new qg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Kg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Kg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function G(t,e){return t<e?-1:t>e?1:0}function Rn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ge(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new ge(0,0))}static max(){return new x(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s){n===void 0?n=0:n>e.length&&O(),s===void 0?s=e.length-n:s>e.length-n&&O(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Es.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Es?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Es{construct(e,n,s){return new se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const zg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Es{construct(e,n,s){return new Pe(e,n,s)}static isValidIdentifier(e){return zg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(se.fromString(e))}static fromName(e){return new N(se.fromString(e).popFirst(5))}static empty(){return new N(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new se(e.slice()))}}function Gg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new ge(n+1,0):new ge(n,s));return new Rt(i,N.empty(),e)}function Wg(t){return new Rt(t.readTime,t.key,-1)}class Rt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Rt(x.min(),N.empty(),-1)}static max(){return new Rt(x.max(),N.empty(),-1)}}function Qg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
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
 */const Yg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==Yg)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(i=>i?E.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new E((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new E((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ta{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ta.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class _s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return t==null}function Si(t){return t===0&&1/t==-1/0}function Zg(t){return typeof t=="number"&&Number.isInteger(t)&&!Si(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class em extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new em("Invalid base64 string: "+i):i}}(e);return new Le(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const tm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(t){if(te(!!t),typeof t=="string"){let e=0;const n=tm.exec(t);if(te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ln(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
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
 */function Qu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yu(t){const e=t.mapValue.fields.__previous_value__;return Qu(e)?Yu(e):e}function Ts(t){const e=Lt(t.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qu(t)?4:nm(t)?9007199254740991:10:O()}function ht(t,e){if(t===e)return!0;const n=nn(t);if(n!==nn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ts(t).isEqual(Ts(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Lt(s.timestampValue),o=Lt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ln(s.bytesValue).isEqual(Ln(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ue(s.doubleValue),o=ue(i.doubleValue);return r===o?Si(r)===Si(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Rn(t.arrayValue.values||[],e.arrayValue.values||[],ht);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(wc(r)!==wc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ht(r[a],o[a])))return!1;return!0}(t,e);default:return O()}}function Cs(t,e){return(t.values||[]).find(n=>ht(n,e))!==void 0}function Mn(t,e){if(t===e)return 0;const n=nn(t),s=nn(e);if(n!==s)return G(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ue(i.integerValue||i.doubleValue),a=ue(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bc(t.timestampValue,e.timestampValue);case 4:return bc(Ts(t),Ts(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Ln(i),a=Ln(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=G(o[c],a[c]);if(l!==0)return l}return G(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=G(ue(i.latitude),ue(r.latitude));return o!==0?o:G(ue(i.longitude),ue(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Mn(o[c],a[c]);if(l)return l}return G(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ii.mapValue&&r===ii.mapValue)return 0;if(i===ii.mapValue)return 1;if(r===ii.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=G(a[u],l[u]);if(h!==0)return h;const d=Mn(o[a[u]],c[l[u]]);if(d!==0)return d}return G(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function bc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=Lt(t),s=Lt(e),i=G(n.seconds,s.seconds);return i!==0?i:G(n.nanos,s.nanos)}function xn(t){return ao(t)}function ao(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Lt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ln(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,N.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ao(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ao(s.fields[a])}`;return r+"}"}(t.mapValue):O();var e,n}function Ec(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function co(t){return!!t&&"integerValue"in t}function na(t){return!!t&&"arrayValue"in t}function _c(t){return!!t&&"nullValue"in t}function Tc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function li(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ii{constructor(e,n){this.position=e,this.inclusive=n}}function Cc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=N.comparator(N.fromName(o.referenceValue),n.key):s=Mn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ht(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xu{}class he extends Xu{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new im(e,n,s):n==="array-contains"?new am(e,s):n==="in"?new cm(e,s):n==="not-in"?new lm(e,s):n==="array-contains-any"?new um(e,s):new he(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new rm(e,s):new om(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mn(n,this.value)):n!==null&&nn(this.value)===nn(n)&&this.matchesComparison(Mn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class it extends Xu{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new it(e,n)}matches(e){return Ju(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ju(t){return t.op==="and"}function Zu(t){return sm(t)&&Ju(t)}function sm(t){for(const e of t.filters)if(e instanceof it)return!1;return!0}function lo(t){if(t instanceof he)return t.field.canonicalString()+t.op.toString()+xn(t.value);if(Zu(t))return t.filters.map(e=>lo(e)).join(",");{const e=t.filters.map(n=>lo(n)).join(",");return`${t.op}(${e})`}}function eh(t,e){return t instanceof he?function(n,s){return s instanceof he&&n.op===s.op&&n.field.isEqual(s.field)&&ht(n.value,s.value)}(t,e):t instanceof it?function(n,s){return s instanceof it&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&eh(r,s.filters[o]),!0):!1}(t,e):void O()}function th(t){return t instanceof he?function(e){return`${e.field.canonicalString()} ${e.op} ${xn(e.value)}`}(t):t instanceof it?function(e){return e.op.toString()+" {"+e.getFilters().map(th).join(" ,")+"}"}(t):"Filter"}class im extends he{constructor(e,n,s){super(e,n,s),this.key=N.fromName(s.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class rm extends he{constructor(e,n){super(e,"in",n),this.keys=nh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class om extends he{constructor(e,n){super(e,"not-in",n),this.keys=nh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>N.fromName(s.referenceValue))}class am extends he{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return na(n)&&Cs(n.arrayValue,this.value)}}class cm extends he{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cs(this.value.arrayValue,n)}}class lm extends he{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cs(this.value.arrayValue,n)}}class um extends he{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!na(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Cs(this.value.arrayValue,s))}}/**
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
 */class Cn{constructor(e,n="asc"){this.field=e,this.dir=n}}function hm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Ce.EMPTY,this.right=r??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ic(this.data.getIterator())}getIteratorFrom(e){return new Ic(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class Ic{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ze{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new ze([])}unionWith(e){let n=new me(Pe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ze(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!li(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=Pe.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());li(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];li(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){hn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new $e(as(this.value))}}function sh(t){const e=[];return hn(t.fields,(n,s)=>{const i=new Pe([n]);if(li(s)){const r=sh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new De(e,0,x.min(),x.min(),x.min(),$e.empty(),0)}static newFoundDocument(e,n,s,i){return new De(e,1,n,x.min(),s,i,0)}static newNoDocument(e,n){return new De(e,2,n,x.min(),x.min(),$e.empty(),0)}static newUnknownDocument(e,n){return new De(e,3,n,x.min(),x.min(),$e.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Ac(t,e=null,n=[],s=[],i=null,r=null,o=null){return new dm(t,e,n,s,i,r,o)}function sa(t){const e=B(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>lo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Zi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>xn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>xn(s)).join(",")),e._t=n}return e._t}function ia(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sc(t.startAt,e.startAt)&&Sc(t.endAt,e.endAt)}function uo(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function fm(t,e,n,s,i,r,o,a){return new Kn(t,e,n,s,i,r,o,a)}function ra(t){return new Kn(t)}function kc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oa(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function er(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ih(t){return t.collectionGroup!==null}function Sn(t){const e=B(t);if(e.wt===null){e.wt=[];const n=er(e),s=oa(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Cn(n)),e.wt.push(new Cn(Pe.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Cn(Pe.keyField(),r))}}}return e.wt}function _t(t){const e=B(t);if(!e.gt)if(e.limitType==="F")e.gt=Ac(e.path,e.collectionGroup,Sn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Sn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Cn(r.field,o))}const s=e.endAt?new Ii(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ii(e.startAt.position,e.startAt.inclusive):null;e.gt=Ac(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function ho(t,e){e.getFirstInequalityField(),er(t);const n=t.filters.concat([e]);return new Kn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function fo(t,e,n){return new Kn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tr(t,e){return ia(_t(t),_t(e))&&t.limitType===e.limitType}function rh(t){return`${sa(_t(t))}|lt:${t.limitType}`}function po(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>th(s)).join(", ")}]`),Zi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>xn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>xn(s)).join(",")),`Target(${n})`}(_t(t))}; limitType=${t.limitType})`}function nr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):N.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Sn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Cc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Sn(n),s)||n.endAt&&!function(i,r,o){const a=Cc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Sn(n),s))}(t,e)}function pm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oh(t){return(e,n)=>{let s=!1;for(const i of Sn(t)){const r=gm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function gm(t,e,n){const s=t.field.isKeyField()?N.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Mn(a,c):O()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}/**
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
 */function ah(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Si(e)?"-0":e}}function ch(t){return{integerValue:""+t}}function mm(t,e){return Zg(e)?ch(e):ah(t,e)}/**
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
 */class sr{constructor(){this._=void 0}}function ym(t,e,n){return t instanceof Ai?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Ss?uh(t,e):t instanceof Is?hh(t,e):function(s,i){const r=lh(s,i),o=Dc(r)+Dc(s.It);return co(r)&&co(s.It)?ch(o):ah(s.Tt,o)}(t,e)}function vm(t,e,n){return t instanceof Ss?uh(t,e):t instanceof Is?hh(t,e):n}function lh(t,e){return t instanceof ki?co(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ai extends sr{}class Ss extends sr{constructor(e){super(),this.elements=e}}function uh(t,e){const n=dh(e);for(const s of t.elements)n.some(i=>ht(i,s))||n.push(s);return{arrayValue:{values:n}}}class Is extends sr{constructor(e){super(),this.elements=e}}function hh(t,e){let n=dh(e);for(const s of t.elements)n=n.filter(i=>!ht(i,s));return{arrayValue:{values:n}}}class ki extends sr{constructor(e,n){super(),this.Tt=e,this.It=n}}function Dc(t){return ue(t.integerValue||t.doubleValue)}function dh(t){return na(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ss&&s instanceof Ss||n instanceof Is&&s instanceof Is?Rn(n.elements,s.elements,ht):n instanceof ki&&s instanceof ki?ht(n.It,s.It):n instanceof Ai&&s instanceof Ai}(t.transform,e.transform)}class bm{constructor(e,n){this.version=e,this.transformResults=n}}class nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ui(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ir{}function fh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aa(t.key,nt.none()):new $s(t.key,t.data,nt.none());{const n=t.data,s=$e.empty();let i=new me(Pe.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ut(t.key,s,new ze(i.toArray()),nt.none())}}function Em(t,e,n){t instanceof $s?function(s,i,r){const o=s.value.clone(),a=Nc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ut?function(s,i,r){if(!ui(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Nc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ph(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function cs(t,e,n,s){return t instanceof $s?function(i,r,o,a){if(!ui(i.precondition,r))return o;const c=i.value.clone(),l=Oc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ut?function(i,r,o,a){if(!ui(i.precondition,r))return o;const c=Oc(i.fieldTransforms,a,r),l=r.data;return l.setAll(ph(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ui(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function _m(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=lh(s.transform,i||null);r!=null&&(n===null&&(n=$e.empty()),n.set(s.field,r))}return n||null}function Pc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rn(n,s,(i,r)=>wm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $s extends ir{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends ir{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ph(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Nc(t,e,n){const s=new Map;te(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,vm(o,a,n[i]))}return s}function Oc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ym(r,o,e))}return s}class aa extends ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tm extends ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,j;function Sm(t){switch(t){default:return O();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function gh(t){if(t===void 0)return Et("GRPC error has no .code"),y.UNKNOWN;switch(t){case le.OK:return y.OK;case le.CANCELLED:return y.CANCELLED;case le.UNKNOWN:return y.UNKNOWN;case le.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case le.INTERNAL:return y.INTERNAL;case le.UNAVAILABLE:return y.UNAVAILABLE;case le.UNAUTHENTICATED:return y.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case le.NOT_FOUND:return y.NOT_FOUND;case le.ALREADY_EXISTS:return y.ALREADY_EXISTS;case le.PERMISSION_DENIED:return y.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case le.ABORTED:return y.ABORTED;case le.OUT_OF_RANGE:return y.OUT_OF_RANGE;case le.UNIMPLEMENTED:return y.UNIMPLEMENTED;case le.DATA_LOSS:return y.DATA_LOSS;default:return O()}}(j=le||(le={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Wu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new ye(N.comparator);function Tt(){return Im}const mh=new ye(N.comparator);function ss(...t){let e=mh;for(const n of t)e=e.insert(n.key,n);return e}function yh(t){let e=mh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Gt(){return ls()}function vh(){return ls()}function ls(){return new zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Am=new ye(N.comparator),km=new me(N.comparator);function $(...t){let e=km;for(const n of t)e=e.add(n);return e}const Dm=new me(G);function wh(){return Dm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,js.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rr(x.min(),i,wh(),Tt(),$())}}class js{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new js(s,n,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class bh{constructor(e,n){this.targetId=e,this.Rt=n}}class Eh{constructor(e,n,s=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Rc{constructor(){this.bt=0,this.vt=Mc(),this.Pt=Le.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=$(),n=$(),s=$();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:O()}}),new js(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Mc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Pm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Tt(),this.Kt=Lc(),this.Gt=new me(G)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(uo(r))if(s===0){const o=new N(r.path);this.zt(n,o,De.newNoDocument(o,x.min()))}else te(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&uo(a.target)){const c=new N(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,De.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=$();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new rr(e,n,this.Gt,this.Ut,s);return this.Ut=Tt(),this.Kt=Lc(),this.Gt=new me(G),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Rc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new me(G),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Rc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Lc(){return new ye(N.comparator)}function Mc(){return new ye(N.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Om=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Rm=(()=>({and:"AND",or:"OR"}))();class Lm{constructor(e,n){this.databaseId=e,this.yt=n}}function Di(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _h(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Mm(t,e){return Di(t,e.toTimestamp())}function lt(t){return te(!!t),x.fromTimestamp(function(e){const n=Lt(e);return new ge(n.seconds,n.nanos)}(t))}function ca(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Th(t){const e=se.fromString(t);return te(Ah(e)),e}function go(t,e){return ca(t.databaseId,e.path)}function Lr(t,e){const n=Th(e);if(n.get(1)!==t.databaseId.projectId)throw new A(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(Ch(n))}function mo(t,e){return ca(t.databaseId,e)}function xm(t){const e=Th(t);return e.length===4?se.emptyPath():Ch(e)}function yo(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ch(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xc(t,e,n){return{name:go(t,e),fields:n.value.mapValue.fields}}function Fm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(te(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(te(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:gh(c.code);return new A(l,c.message||"")}(o);n=new Eh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Lr(t,s.document.name),r=lt(s.document.updateTime),o=s.document.createTime?lt(s.document.createTime):x.min(),a=new $e({mapValue:{fields:s.document.fields}}),c=De.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new hi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Lr(t,s.document),r=s.readTime?lt(s.readTime):x.min(),o=De.newNoDocument(i,r),a=s.removedTargetIds||[];n=new hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Lr(t,s.document),r=s.removedTargetIds||[];n=new hi([],r,i,null)}else{if(!("filter"in e))return O();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Cm(i),o=s.targetId;n=new bh(o,r)}}return n}function Bm(t,e){let n;if(e instanceof $s)n={update:xc(t,e.key,e.value)};else if(e instanceof aa)n={delete:go(t,e.key)};else if(e instanceof Ut)n={update:xc(t,e.key,e.data),updateMask:Gm(e.fieldMask)};else{if(!(e instanceof Tm))return O();n={verify:go(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ai)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ss)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Is)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ki)return{fieldPath:r.field.canonicalString(),increment:o.It};throw O()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Mm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function Vm(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?lt(s.updateTime):lt(i);return r.isEqual(x.min())&&(r=lt(i)),new bm(r,s.transformResults||[])}(n,e))):[]}function Um(t,e){return{documents:[mo(t,e.path)]}}function $m(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=mo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=mo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Ih(it.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:bn(u.field),direction:Hm(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||Zi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function jm(t){let e=xm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){te(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Sh(u);return h instanceof it&&Zu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Cn(En(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Zi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Ii(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Ii(d,h)}(n.endAt)),fm(e,i,o,r,a,"F",c,l)}function qm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=En(e.unaryFilter.field);return he.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=En(e.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=En(e.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=En(e.unaryFilter.field);return he.create(r,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return he.create(En(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return it.create(e.compositeFilter.filters.map(n=>Sh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function Hm(t){return Nm[t]}function Km(t){return Om[t]}function zm(t){return Rm[t]}function bn(t){return{fieldPath:t.canonicalString()}}function En(t){return Pe.fromServerFormat(t.fieldPath)}function Ih(t){return t instanceof he?function(e){if(e.op==="=="){if(Tc(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NAN"}};if(_c(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Tc(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NAN"}};if(_c(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(e.field),op:Km(e.op),value:e.value}}}(t):t instanceof it?function(e){const n=e.getFilters().map(s=>Ih(s));return n.length===1?n[0]:{compositeFilter:{op:zm(e.op),filters:n}}}(t):O()}function Gm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ah(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Em(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=cs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=cs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=fh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(n,s)=>Pc(n,s))&&Rn(this.baseMutations,e.baseMutations,(n,s)=>Pc(n,s))}}class la{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){te(e.mutations.length===s.length);let i=Am;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new la(e,n,s,i)}}/**
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
 */class Qm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qt{constructor(e,n,s,i,r=x.min(),o=x.min(),a=Le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.oe=e}}function Xm(t){const e=jm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fo(e,e.limit,"L"):e}/**
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
 */class Jm{constructor(){this.Ze=new Zm}addToCollectionParentIndex(e,n){return this.Ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Rt.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class Zm{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new me(se.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new me(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ey{constructor(){this.changes=new zn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ty{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&cs(s.mutation,i,ze.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,$()).next(()=>s))}getLocalViewOfDocuments(e,n,s=$()){const i=Gt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ss();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Gt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,$()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Tt();const o=ls(),a=ls();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Ut)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),cs(u.mutation,l,u.mutation.getFieldMask(),ge.now())):o.set(l.key,ze.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new ty(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ls();let i=new ye((o,a)=>o-a),r=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ze.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||$()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=vh();u.forEach(d=>{if(!r.has(d)){const p=fh(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return N.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ih(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):E.resolve(Gt());let a=-1,c=r;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,$())).next(u=>({batchId:a,changes:yh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(s=>{let i=ss();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ss();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const c=function(l,u){return new Kn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,De.newInvalidDocument(l)))});let o=ss();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&cs(l.mutation,c,ze.empty(),ge.now()),nr(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class sy{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return E.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:lt(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Xm(s.bundledQuery),readTime:lt(s.readTime)}}(n)),E.resolve()}}/**
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
 */class iy{constructor(){this.overlays=new ye(N.comparator),this.ss=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gt();return E.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const i=Gt(),r=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ye((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Gt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Gt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return E.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Qm(n,s));let r=this.ss.get(n);r===void 0&&(r=$(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.rs=new me(be.os),this.us=new me(be.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new be(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new be(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new N(new se([])),s=new be(n,e),i=new be(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new N(new se([])),s=new be(n,e),i=new be(n,e+1);let r=$();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new be(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return N.comparator(e.key,n.key)||G(e.gs,n.gs)}static cs(e,n){return G(e.gs,n.gs)||N.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new me(be.os)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wm(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new be(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return E.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),E.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new me(G);return n.forEach(i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),E.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;N.isDocumentKey(r)||(r=r.child(""));const o=new be(new N(r),0);let a=new me(G);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),E.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){te(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return E.forEach(n.mutations,i=>{const r=new be(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new be(n,0),i=this.ps.firstAfterOrEqual(s);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.Rs=e,this.docs=new ye(N.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let s=Tt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():De.newInvalidDocument(i))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Tt();const o=n.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Qg(Wg(u),s)<=0||(i.has(u.key)||nr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,i){O()}bs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ay(this)}getSize(e){return E.resolve(this.size)}}class ay extends ey{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.persistence=e,this.vs=new zn(n=>sa(n),ia),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ua,this.targetCount=0,this.Ss=Fn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),E.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Fn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.xn(n),E.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(r).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ta(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new cy(this),this.indexManager=new Jm,this.remoteDocumentCache=function(s){return new oy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Ym(n),this.Os=new sy(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new ry(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){P("MemoryPersistence","Starting transaction:",e);const i=new uy(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return E.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class uy extends Xg{constructor(e){super(),this.currentSequenceNumber=e}}class ha{constructor(e){this.persistence=e,this.Bs=new ua,this.Ls=null}static qs(e){return new ha(e)}get Us(){if(this.Ls)return this.Ls;throw O()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),E.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Us,s=>{const i=N.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,x.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return E.or([()=>E.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=$(),i=$();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new da(e,n.fromCache,s,i)}}/**
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
 */class hy{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(kc(n))return E.resolve(null);let s=_t(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fo(n,null,"F"),s=_t(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=$(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,fo(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return kc(n)||i.isEqual(x.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(vc()<=z.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(n)),this.qi(e,o,n,Gg(i,-1)))})}Bi(e,n){let s=new me(oh(e));return n.forEach((i,r)=>{nr(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return vc()<=z.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",po(n)),this.Oi.getDocumentsMatchingQuery(e,n,Rt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class dy{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new ye(G),this.Gi=new zn(r=>sa(r),ia),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ny(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function fy(t,e,n,s){return new dy(t,e,n,s)}async function kh(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=$();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function py(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=E.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const b=c.docVersions.get(p);te(b!==null),m.version.compareTo(b)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=$();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Dh(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function gy(t,e){const n=B(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Le.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,b,v){return m.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=Tt(),l=$();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(my(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(x.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function my(t,e,n){let s=$(),i=$();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Tt();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function yy(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function vy(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,E.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Qt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function vo(t,e,n){const s=B(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Us(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Fc(t,e,n){const s=B(t);let i=x.min(),r=$();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=B(a),h=u.Gi.get(l);return h!==void 0?E.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,_t(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:x.min(),n?r:$())).next(a=>(wy(s,pm(e),a),{documents:a,Yi:r})))}function wy(t,e,n){let s=t.Qi.get(e)||x.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Bc{constructor(){this.activeTargetIds=wh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class by{constructor(){this.Ur=new Bc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Bc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ey{Gr(e){}shutdown(){}}/**
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
 */class Vc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const _y={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);P("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(P("RestConnection","Received: ",c),c),c=>{throw oo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=_y[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Fg;a.setWithCredentials(!0),a.listenOnce(Lg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Rr.NO_ERROR:const l=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Rr.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new A(y.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const u=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const b=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(b)>=0?b:y.UNKNOWN}(d.status);o(new A(p,d.message))}else o(new A(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(y.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Og(),o=Rg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new xg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");P("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new Ty({Yr:m=>{h?P("Connection","Not sending because WebChannel is closed:",m):(u||(P("Connection","Opening WebChannel transport."),l.open(),u=!0),P("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),p=(m,b,v)=>{m.listen(b,I=>{try{v(I)}catch(_){setTimeout(()=>{throw _},0)}})};return p(l,si.EventType.OPEN,()=>{h||P("Connection","WebChannel transport opened.")}),p(l,si.EventType.CLOSE,()=>{h||(h=!0,P("Connection","WebChannel transport closed"),d.oo())}),p(l,si.EventType.ERROR,m=>{h||(h=!0,oo("Connection","WebChannel transport errored:",m),d.oo(new A(y.UNAVAILABLE,"The operation could not be completed")))}),p(l,si.EventType.MESSAGE,m=>{var b;if(!h){const v=m.data[0];te(!!v);const I=v,_=I.error||((b=I[0])===null||b===void 0?void 0:b.error);if(_){P("Connection","WebChannel received error:",_);const M=_.status;let S=function(Y){const F=le[Y];if(F!==void 0)return gh(F)}(M),R=_.message;S===void 0&&(S=y.INTERNAL,R="Unknown error status: "+M+" with message "+_.message),h=!0,d.oo(new A(S,R)),l.close()}else P("Connection","WebChannel received:",v),d.uo(v)}}),p(o,Mg.STAT_EVENT,m=>{m.stat===mc.PROXY?P("Connection","Detected buffering proxy"):m.stat===mc.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Mr(){return typeof document<"u"?document:null}/**
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
 */function or(t){return new Lm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Ph(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new A(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sy extends Nh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Fm(this.Tt,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?lt(r.readTime):x.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=yo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=uo(a)?{documents:Um(i,a)}:{query:$m(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=_h(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Di(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=qm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=yo(this.Tt),n.removeTarget=e,this.qo(n)}}class Iy extends Nh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Vm(e.writeResults,e.commitTime),s=lt(e.commitTime);return this.listener.eu(s,n)}return te(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=yo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Bm(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new A(y.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(y.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(y.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class ky{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Et(n),this.cu=!1):P("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{dn(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=B(a);c.mu.add(4),await qs(c),c.pu.set("Unknown"),c.mu.delete(4),await ar(c)}(this))})}),this.pu=new ky(s,i)}}async function ar(t){if(dn(t))for(const e of t.gu)await e(!0)}async function qs(t){for(const e of t.gu)await e(!1)}function Oh(t,e){const n=B(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),ga(n)?pa(n):Gn(n).Mo()&&fa(n,e))}function Rh(t,e){const n=B(t),s=Gn(n);n.wu.delete(e),s.Mo()&&Lh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():dn(n)&&n.pu.set("Unknown"))}function fa(t,e){t.Iu.Ft(e.targetId),Gn(t).Jo(e)}function Lh(t,e){t.Iu.Ft(e),Gn(t).Yo(e)}function pa(t){t.Iu=new Pm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Gn(t).start(),t.pu.au()}function ga(t){return dn(t)&&!Gn(t).Oo()&&t.wu.size>0}function dn(t){return B(t).mu.size===0}function Mh(t){t.Iu=void 0}async function Py(t){t.wu.forEach((e,n)=>{fa(t,e)})}async function Ny(t,e){Mh(t),ga(t)?(t.pu.fu(e),pa(t)):t.pu.set("Unknown")}async function Oy(t,e,n){if(t.pu.set("Online"),e instanceof Eh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pi(t,s)}else if(e instanceof hi?t.Iu.Qt(e):e instanceof bh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(x.min()))try{const s=await Dh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),Lh(i,a);const l=new Qt(c.target,a,1,c.sequenceNumber);fa(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){P("RemoteStore","Failed to raise snapshot:",s),await Pi(t,s)}}async function Pi(t,e,n){if(!Us(e))throw e;t.mu.add(1),await qs(t),t.pu.set("Offline"),n||(n=()=>Dh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ar(t)})}function xh(t,e){return e().catch(n=>Pi(t,n,e))}async function cr(t){const e=B(t),n=Mt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Ry(e);)try{const i=await yy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Ly(e,i)}catch(i){await Pi(e,i)}Fh(e)&&Bh(e)}function Ry(t){return dn(t)&&t._u.length<10}function Ly(t,e){t._u.push(e);const n=Mt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Fh(t){return dn(t)&&!Mt(t).Oo()&&t._u.length>0}function Bh(t){Mt(t).start()}async function My(t){Mt(t).su()}async function xy(t){const e=Mt(t);for(const n of t._u)e.tu(n.mutations)}async function Fy(t,e,n){const s=t._u.shift(),i=la.from(s,e,n);await xh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cr(t)}async function By(t,e){e&&Mt(t).Xo&&await async function(n,s){if(i=s.code,Sm(i)&&i!==y.ABORTED){const r=n._u.shift();Mt(n).$o(),await xh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await cr(n)}var i}(t,e),Fh(t)&&Bh(t)}async function Uc(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const s=dn(n);n.mu.add(3),await qs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ar(n)}async function Vy(t,e){const n=B(t);e?(n.mu.delete(2),await ar(n)):e||(n.mu.add(2),await qs(n),n.pu.set("Unknown"))}function Gn(t){return t.Tu||(t.Tu=function(e,n,s){const i=B(e);return i.ru(),new Sy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Py.bind(null,t),no:Ny.bind(null,t),Ho:Oy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),ga(t)?pa(t):t.pu.set("Unknown")):(await t.Tu.stop(),Mh(t))})),t.Tu}function Mt(t){return t.Eu||(t.Eu=function(e,n,s){const i=B(e);return i.ru(),new Iy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:My.bind(null,t),no:By.bind(null,t),nu:xy.bind(null,t),eu:Fy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await cr(t)):(await t.Eu.stop(),t._u.length>0&&(P("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ma(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(t,e){if(Et("AsyncQueue",`${e}: ${t}`),Us(t))return new A(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.comparator=e?(n,s)=>e(n,s)||N.comparator(n.key,s.key):(n,s)=>N.comparator(n.key,s.key),this.keyedMap=ss(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new In(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof In)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new In;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.Au=new ye(N.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):O():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Bn{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bn(e,n,In.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.bu=void 0,this.listeners=[]}}class $y{constructor(){this.queries=new zn(e=>rh(e),tr),this.onlineState="Unknown",this.vu=new Set}}async function Vh(t,e){const n=B(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Uy),i)try{r.bu=await n.onListen(s)}catch(o){const a=ya(o,`Initialization of query '${po(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&va(n)}async function Uh(t,e){const n=B(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function jy(t,e){const n=B(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&va(n)}function qy(t,e,n){const s=B(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function va(t){t.vu.forEach(e=>{e.next()})}class $h{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Bn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.key=e}}class qh{constructor(e){this.key=e}}class Hy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=$(),this.mutatedKeys=$(),this.ju=oh(e),this.zu=new In(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new $c,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=nr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==b&&(s.track({type:3,doc:p}),v=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=b?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new Bn(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new $c,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=$(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new qh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new jh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=$();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Bn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Ky{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class zy{constructor(e){this.key=e,this.ic=!1}}class Gy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new zn(a=>rh(a),tr),this.uc=new Map,this.cc=new Set,this.ac=new ye(N.comparator),this.hc=new Map,this.lc=new ua,this.fc={},this.dc=new Map,this._c=Fn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Wy(t,e){const n=iv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await vy(n.localStore,_t(e));n.isPrimaryClient&&Oh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Qy(n,e,s,a==="current",o.resumeToken)}return i}async function Qy(t,e,n,s,i){t.mc=(h,d,p)=>async function(m,b,v,I){let _=b.view.Hu(v);_.Li&&(_=await Fc(m.localStore,b.query,!1).then(({documents:R})=>b.view.Hu(R,_)));const M=I&&I.targetChanges.get(b.targetId),S=b.view.applyChanges(_,m.isPrimaryClient,M);return qc(m,b.targetId,S.tc),S.snapshot}(t,h,d,p);const r=await Fc(t.localStore,e,!0),o=new Hy(e,r.Yi),a=o.Hu(r.documents),c=js.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);qc(t,n,l.tc);const u=new Ky(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function Yy(t,e){const n=B(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!tr(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Rh(n.remoteStore,s.targetId),wo(n,s.targetId)}).catch(Vs)):(wo(n,s.targetId),await vo(n.localStore,s.targetId,!0))}async function Xy(t,e,n){const s=rv(t);try{const i=await function(r,o){const a=B(r),c=ge.now(),l=o.reduce((d,p)=>d.add(p.key),$());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Tt(),m=$();return a.ji.getEntries(d,l).next(b=>{p=b,p.forEach((v,I)=>{I.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(b=>{u=b;const v=[];for(const I of o){const _=_m(I,u.get(I.key).overlayedDocument);_!=null&&v.push(new Ut(I.key,_,sh(_.value.mapValue),nt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(b=>{h=b;const v=b.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,b.batchId,v)})}).then(()=>({batchId:h.batchId,changes:yh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new ye(G)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Hs(s,i.changes),await cr(s.remoteStore)}catch(i){const r=ya(i,"Failed to persist write");n.reject(r)}}async function Hh(t,e){const n=B(t);try{const s=await gy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?te(o.ic):i.removedDocuments.size>0&&(te(o.ic),o.ic=!1))}),await Hs(n,s,e)}catch(s){await Vs(s)}}function jc(t,e,n){const s=B(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=B(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&va(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Jy(t,e,n){const s=B(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new ye(N.comparator);o=o.insert(r,De.newNoDocument(r,x.min()));const a=$().add(r),c=new rr(x.min(),new Map,new me(G),o,a);await Hh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),wa(s)}else await vo(s.localStore,e,!1).then(()=>wo(s,e,n)).catch(Vs)}async function Zy(t,e){const n=B(t),s=e.batch.batchId;try{const i=await py(n.localStore,e);zh(n,s,null),Kh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hs(n,i)}catch(i){await Vs(i)}}async function ev(t,e,n){const s=B(t);try{const i=await function(r,o){const a=B(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);zh(s,e,n),Kh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Hs(s,i)}catch(i){await Vs(i)}}function Kh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function zh(t,e,n){const s=B(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function wo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Gh(t,s)})}function Gh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Rh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),wa(t))}function qc(t,e,n){for(const s of n)s instanceof jh?(t.lc.addReference(s.key,e),tv(t,s)):s instanceof qh?(P("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Gh(t,s.key)):O()}function tv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(P("SyncEngine","New document in limbo: "+n),t.cc.add(s),wa(t))}function wa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new N(se.fromString(e)),s=t._c.next();t.hc.set(s,new zy(n)),t.ac=t.ac.insert(n,s),Oh(t.remoteStore,new Qt(_t(ra(n.path)),s,2,ta.at))}}async function Hs(t,e,n){const s=B(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=da.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=B(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(c,h=>E.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Us(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,r))}async function nv(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const s=await kh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(y.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hs(n,s.Wi)}}function sv(t,e){const n=B(t),s=n.hc.get(e);if(s&&s.ic)return $().add(s.key);{let i=$();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function iv(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jy.bind(null,e),e.rc.Ho=jy.bind(null,e.eventManager),e.rc.gc=qy.bind(null,e.eventManager),e}function rv(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ev.bind(null,e),e}class ov{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=or(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return fy(this.persistence,new hy,e.initialUser,this.Tt)}Tc(e){return new ly(ha.qs,this.Tt)}Ic(e){return new by}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class av{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=nv.bind(null,this.syncEngine),await Vy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $y}createDatastore(e){const n=or(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Cy(i));var i;return function(r,o,a,c){return new Ay(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>jc(this.syncEngine,a,0),o=Vc.C()?new Vc:new Ey,new Dy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new Gy(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);P("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await qs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=Gu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{P("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(P("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ya(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lv(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await kh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function uv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hv(t);P("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Uc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Uc(e.remoteStore,r)),t.onlineComponents=e}async function hv(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await lv(t,new ov)),t.offlineComponents}async function Qh(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await uv(t,new av)),t.onlineComponents}function dv(t){return Qh(t).then(e=>e.syncEngine)}async function bo(t){const e=await Qh(t),n=e.eventManager;return n.onListen=Wy.bind(null,e.syncEngine),n.onUnlisten=Yy.bind(null,e.syncEngine),n}function fv(t,e,n={}){const s=new Dt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Wh({next:h=>{r.enqueueAndForget(()=>Uh(i,u)),h.fromCache&&a.source==="server"?c.reject(new A(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $h(o,l,{includeMetadataChanges:!0,Ou:!0});return Vh(i,u)}(await bo(t),t.asyncQueue,e,n,s)),s.promise}const Hc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e,n){if(!n)throw new A(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pv(t,e,n,s){if(e===!0&&s===!0)throw new A(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kc(t){if(!N.isDocumentKey(t))throw new A(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zc(t){if(N.isDocumentKey(t))throw new A(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lr(t);throw new A(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Gc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ur{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bg;switch(n.type){case"gapi":const s=n.client;return new jg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hc.get(e);n&&(P("ComponentProvider","Removing Datastore"),Hc.delete(e),n.terminate())}(this),Promise.resolve()}}function gv(t,e,n,s={}){var i;const r=(t=ut(t,ur))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&oo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ke.MOCK_USER;else{o=Rl(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new A(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ke(c)}t._authCredentials=new Vg(new zu(o,a))}}/**
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
 */class je{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class $t{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $t(this.firestore,e,this._query)}}class Pt extends $t{constructor(e,n,s){super(e,n,ra(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new N(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function Yt(t,e,...n){if(t=st(t),Yh("collection","path",e),t instanceof ur){const s=se.fromString(e,...n);return zc(s),new Pt(t,null,s)}{if(!(t instanceof je||t instanceof Pt))throw new A(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(se.fromString(e,...n));return zc(s),new Pt(t.firestore,null,s)}}function Vn(t,e,...n){if(t=st(t),arguments.length===1&&(e=Gu.R()),Yh("doc","path",e),t instanceof ur){const s=se.fromString(e,...n);return Kc(s),new je(t,null,new N(s))}{if(!(t instanceof je||t instanceof Pt))throw new A(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(se.fromString(e,...n));return Kc(s),new je(t.firestore,t instanceof Pt?t.converter:null,new N(s))}}/**
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
 */class mv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Ph(this,"async_queue_retry"),this.Hc=()=>{const n=Mr();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Mr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Mr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Dt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Us(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Et("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=ma.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&O()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Wc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class sn extends ur{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new mv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xh(this),this._firestoreClient.terminate()}}function yv(t,e){const n=typeof t=="object"?t:$l(),s=typeof t=="string"?t:e||"(default)",i=Bl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Ol("firestore");r&&gv(i,...r)}return i}function ba(t){return t._firestoreClient||Xh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xh(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Jg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new cv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Le.fromBase64String(e))}catch(n){throw new A(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=/^__.*__$/;class wv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ut(e,this.data,this.fieldMask,n,this.fieldTransforms):new $s(e,this.data,n,this.fieldTransforms)}}class Jh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ut(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Zh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Ta{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ta(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ni(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Zh(this.ra)&&vv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class bv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||or(e)}wa(e,n,s,i=!1){return new Ta({ra:e,methodName:n,_a:s,path:Pe.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Ca(t){const e=t._freezeSettings(),n=or(t._databaseId);return new bv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ev(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Sa("Data must be an object, but it was:",o,s);const a=ed(s,o);let c,l;if(r.merge)c=new ze(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Eo(e,h,n);if(!o.contains(d))throw new A(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nd(u,d)||u.push(d)}c=new ze(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new wv(new $e(a),c,l)}class dr extends Ea{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dr}}function _v(t,e,n,s){const i=t.wa(1,e,n);Sa("Data must be an object, but it was:",i,s);const r=[],o=$e.empty();hn(s,(c,l)=>{const u=Ia(e,c,n);l=st(l);const h=i.ha(u);if(l instanceof dr)r.push(u);else{const d=Ks(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new ze(r);return new Jh(o,a,i.fieldTransforms)}function Tv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[Eo(e,s,n)],c=[i];if(r.length%2!=0)throw new A(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Eo(e,r[d])),c.push(r[d+1]);const l=[],u=$e.empty();for(let d=a.length-1;d>=0;--d)if(!nd(l,a[d])){const p=a[d];let m=c[d];m=st(m);const b=o.ha(p);if(m instanceof dr)l.push(p);else{const v=Ks(m,b);v!=null&&(l.push(p),u.set(p,v))}}const h=new ze(l);return new Jh(u,h,o.fieldTransforms)}function Cv(t,e,n,s=!1){return Ks(n,t.wa(s?4:3,e))}function Ks(t,e){if(td(t=st(t)))return Sa("Unsupported field value:",e,t),ed(t,e);if(t instanceof Ea)return function(n,s){if(!Zh(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ks(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=st(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ge.fromDate(n);return{timestampValue:Di(s.Tt,i)}}if(n instanceof ge){const i=new ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Di(s.Tt,i)}}if(n instanceof _a)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Un)return{bytesValue:_h(s.Tt,n._byteString)};if(n instanceof je){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ca(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${lr(n)}`)}(t,e)}function ed(t,e){const n={};return Wu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hn(t,(s,i)=>{const r=Ks(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function td(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof _a||t instanceof Un||t instanceof je||t instanceof Ea)}function Sa(t,e,n){if(!td(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=lr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Eo(t,e,n){if((e=st(e))instanceof hr)return e._internalPath;if(typeof e=="string")return Ia(t,e);throw Ni("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sv=new RegExp("[~\\*/\\[\\]]");function Ia(t,e,n){if(e.search(Sv)>=0)throw Ni(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hr(...e.split("."))._internalPath}catch{throw Ni(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ni(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new A(y.INVALID_ARGUMENT,a+t+c)}function nd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Iv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Iv extends sd{data(){return super.data()}}function fr(t,e){return typeof e=="string"?Ia(t,e):e instanceof hr?e._internalPath:e._delegate._internalPath}/**
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
 */function id(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Aa{}class rd extends Aa{}function us(t,e,...n){let s=[];e instanceof Aa&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof ka).length,o=i.filter(a=>a instanceof pr).length;if(r>1||r>0&&o>0)throw new A(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class pr extends rd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new pr(e,n,s)}_apply(e){const n=this._parse(e);return od(e._query,n),new $t(e.firestore,e.converter,ho(e._query,n))}_parse(e){const n=Ca(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new A(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Yc(u,l);const d=[];for(const p of u)d.push(Qc(a,i,p));h={arrayValue:{values:d}}}else h=Qc(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Yc(u,l),h=Cv(o,r,u,l==="in"||l==="not-in");return he.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _o(t,e,n){const s=e,i=fr("where",t);return pr._create(i,s,n)}class ka extends Aa{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ka(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:it.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)od(r,a),r=ho(r,a)}(e._query,n),new $t(e.firestore,e.converter,ho(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Da extends rd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Da(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new A(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Cn(i,r);return function(a,c){if(oa(a)===null){const l=er(a);l!==null&&ad(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new $t(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Kn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function xr(t,e="asc"){const n=e,s=fr("orderBy",t);return Da._create(s,n)}function Qc(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new A(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ih(e)&&n.indexOf("/")!==-1)throw new A(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(se.fromString(n));if(!N.isDocumentKey(s))throw new A(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ec(t,new N(s))}if(n instanceof je)return Ec(t,n._key);throw new A(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lr(n)}.`)}function Yc(t,e){if(!Array.isArray(t)||t.length===0)throw new A(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function od(t,e){if(e.isInequality()){const s=er(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new A(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=oa(t);r!==null&&ad(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ad(t,e,n){if(!n.isEqual(e))throw new A(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Av{convertValue(e,n="none"){switch(nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const s={};return hn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new _a(ue(e.latitude),ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Yu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const n=Lt(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=se.fromString(e);te(Ah(s));const i=new _s(s.get(1),s.get(3)),r=new N(s.popFirst(5));return i.isEqual(n)||Et(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function kv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cd extends sd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(fr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class di extends cd{data(e={}){return super.data(e)}}class ld{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new is(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new di(this._firestore,this._userDataWriter,s.key,s,new is(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new di(s._firestore,s._userDataWriter,o.doc.key,o.doc,new is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new di(s._firestore,s._userDataWriter,o.doc.key,o.doc,new is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Dv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Dv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Pa extends Av{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function ud(t){t=ut(t,$t);const e=ut(t.firestore,sn),n=ba(e),s=new Pa(e);return id(t._query),fv(n,t._query).then(i=>new ld(e,s,t,i))}function Na(t,e,n,...s){t=ut(t,je);const i=ut(t.firestore,sn),r=Ca(i);let o;return o=typeof(e=st(e))=="string"||e instanceof hr?Tv(r,"updateDoc",t._key,e,n,s):_v(r,"updateDoc",t._key,e),Oa(i,[o.toMutation(t._key,nt.exists(!0))])}function To(t){return Oa(ut(t.firestore,sn),[new aa(t._key,nt.none())])}function hd(t,e){const n=ut(t.firestore,sn),s=Vn(t),i=kv(t.converter,e);return Oa(n,[Ev(Ca(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,nt.exists(!1))]).then(()=>s)}function Fr(t,...e){var n,s,i;t=st(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Wc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof je)l=ut(t.firestore,sn),u=ra(t._key.path),c={next:h=>{e[o]&&e[o](Pv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ut(t,$t);l=ut(h.firestore,sn),u=h._query;const d=new Pa(l);c={next:p=>{e[o]&&e[o](new ld(l,d,h,p))},error:e[o+1],complete:e[o+2]},id(t._query)}return function(h,d,p,m){const b=new Wh(m),v=new $h(d,b,p);return h.asyncQueue.enqueueAndForget(async()=>Vh(await bo(h),v)),()=>{b.Pc(),h.asyncQueue.enqueueAndForget(async()=>Uh(await bo(h),v))}}(ba(l),u,a,c)}function Oa(t,e){return function(n,s){const i=new Dt;return n.asyncQueue.enqueueAndForget(async()=>Xy(await dv(n),s,i)),i.promise}(ba(t),e)}function Pv(t,e,n){const s=n.docs.get(e._key),i=new Pa(t);return new cd(t,i,e._key,s,new is(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Hn=n})(Vl),ps(new Nn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new sn(new Ug(n.getProvider("auth-internal")),new Hg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),kt(yc,"3.8.4",t),kt(yc,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="firebasestorage.googleapis.com",Nv="storageBucket",Ov=2*60*1e3,Rv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends ln{constructor(e,n,s=0){super(Br(e),`Firebase Storage: ${n} (${Br(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Br(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var dt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(dt||(dt={}));function Br(t){return"storage/"+t}function Lv(){const t="An unknown error occurred, please check the error payload for server response.";return new pt(dt.UNKNOWN,t)}function Mv(){return new pt(dt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xv(){return new pt(dt.CANCELED,"User canceled the upload/download.")}function Fv(t){return new pt(dt.INVALID_URL,"Invalid URL '"+t+"'.")}function Bv(t){return new pt(dt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xc(t){return new pt(dt.INVALID_ARGUMENT,t)}function fd(){return new pt(dt.APP_DELETED,"The Firebase app was deleted.")}function Vv(t){return new pt(dt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=tt.makeFromUrl(e,n)}catch{return new tt(e,"")}if(s.path==="")return s;throw Bv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},b=n===dd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",I=new RegExp(`^https?://${b}/${i}/${v}`,"i"),M=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:I,indices:{bucket:1,path:2},postModify:l}];for(let S=0;S<M.length;S++){const R=M[S],Y=R.regex.exec(e);if(Y){const F=Y[R.indices.bucket];let ie=Y[R.indices.path];ie||(ie=""),s=new tt(F,ie),R.postModify(s);break}}if(s==null)throw Fv(e);return s}}class Uv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function d(){r&&clearTimeout(r)}function p(v,...I){if(l){d();return}if(v){d(),u.call(null,v,...I);return}if(c()||o){d(),u.call(null,v,...I);return}s<64&&(s*=2);let M;a===1?(a=2,M=0):M=(s+Math.random())*1e3,h(M)}let m=!1;function b(v){m||(m=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,b(!0)},n),b}function jv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){return t!==void 0}function Jc(t,e,n,s){if(s<e)throw Xc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Xc(`Invalid value for '${t}'. Expected ${n} or less.`)}function Hv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Oi||(Oi={}));/**
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
 */function Kv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new oi(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Oi.NO_ERROR,c=r.getStatus();if(!a||Kv(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Oi.ABORT;s(!1,new oi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new oi(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());qv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Lv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?fd():xv();o(c)}else{const c=Mv();o(c)}};this.canceled_?n(!1,new oi(!1,null,!0)):this.backoffId_=$v(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Gv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Wv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Qv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Yv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Xv(t,e,n,s,i,r,o=!0){const a=Hv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Qv(l,e),Gv(l,n),Wv(l,r),Yv(l,s),new zv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Zv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ri{constructor(e,n){this._service=e,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ri(e,n)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zv(this._location.path)}get storage(){return this._service}get parent(){const e=Jv(this._location.path);if(e===null)return null;const n=new tt(this._location.bucket,e);return new Ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Vv(e)}}function Zc(t,e){const n=e==null?void 0:e[Nv];return n==null?null:tt.makeFromBucketSpec(n,t)}function ew(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Rl(i,t.app.options.projectId))}class tw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=dd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ov,this._maxUploadRetryTime=Rv,this._requests=new Set,i!=null?this._bucket=tt.makeFromBucketSpec(i,this._host):this._bucket=Zc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=Zc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ri(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Uv(fd());{const o=Xv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const el="@firebase/storage",tl="0.11.2";/**
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
 */const pd="storage";function nw(t=$l(),e){t=st(t);const s=Bl(t,pd).getImmediate({identifier:e}),i=Ol("storage");return i&&sw(s,...i),s}function sw(t,e,n,s={}){ew(t,e,n,s)}function iw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new tw(n,s,i,e,Vl)}function rw(){ps(new Nn(pd,iw,"PUBLIC").setMultipleInstances(!0)),kt(el,tl,""),kt(el,tl,"esm2017")}rw();const ow={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},gd=Ul(ow);nw(gd);const Xe=yv(gd);var aw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Co={},cw={get exports(){return Co},set exports(t){Co=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(aw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(v){v.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(v){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),m=this.options.position=="left"?d:"-"+d,b=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+m+","+b+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(cw);const An=Co,md="SweetAlert2:",lw=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Ra=t=>t.charAt(0).toUpperCase()+t.slice(1),Qe=t=>Array.prototype.slice.call(t),qe=t=>{console.warn(`${md} ${typeof t=="object"?t.join(" "):t}`)},fn=t=>{console.error(`${md} ${t}`)},nl=[],uw=t=>{nl.includes(t)||(nl.push(t),qe(t))},hw=(t,e)=>{uw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},gr=t=>typeof t=="function"?t():t,La=t=>t&&typeof t.toPromise=="function",zs=t=>La(t)?t.toPromise():Promise.resolve(t),Ma=t=>t&&Promise.resolve(t)===t,kn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},dw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],fw={},pw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],yd=t=>Object.prototype.hasOwnProperty.call(kn,t),vd=t=>dw.indexOf(t)!==-1,So=t=>fw[t],gw=t=>{yd(t)||qe(`Unknown parameter "${t}"`)},mw=t=>{pw.includes(t)&&qe(`The parameter "${t}" is incompatible with toasts`)},yw=t=>{So(t)&&hw(t,So(t))},vw=t=>{!t.backdrop&&t.allowOutsideClick&&qe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)gw(e),t.toast&&mw(e),yw(e)},ww="swal2-",wd=t=>{const e={};for(const n in t)e[t[n]]=ww+t[n];return e},f=wd(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),hs=wd(["success","warning","info","question","error"]),Me=()=>document.body.querySelector(`.${f.container}`),Gs=t=>{const e=Me();return e?e.querySelector(t):null},Ze=t=>Gs(`.${t}`),W=()=>Ze(f.popup),Ws=()=>Ze(f.icon),bd=()=>Ze(f.title),Li=()=>Ze(f["html-container"]),Ed=()=>Ze(f.image),_d=()=>Ze(f["progress-steps"]),mr=()=>Ze(f["validation-message"]),rt=()=>Gs(`.${f.actions} .${f.confirm}`),xt=()=>Gs(`.${f.actions} .${f.deny}`),bw=()=>Ze(f["input-label"]),Wn=()=>Gs(`.${f.loader}`),rn=()=>Gs(`.${f.actions} .${f.cancel}`),Qs=()=>Ze(f.actions),Td=()=>Ze(f.footer),yr=()=>Ze(f["timer-progress-bar"]),xa=()=>Ze(f.close),Ew=`
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
`,Fa=()=>{const t=Qe(W().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=Qe(W().querySelectorAll(Ew)).filter(n=>n.getAttribute("tabindex")!=="-1");return lw(t.concat(e)).filter(n=>Ge(n))},Ba=()=>vt(document.body,f.shown)&&!vt(document.body,f["toast-shown"])&&!vt(document.body,f["no-backdrop"]),vr=()=>W()&&vt(W(),f.toast),_w=()=>W().hasAttribute("data-loading"),Dn={previousBodyPadding:null},Ne=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");Qe(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),Qe(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},vt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Tw=(t,e)=>{Qe(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(hs).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},Je=(t,e,n)=>{if(Tw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return qe(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);q(t,e.customClass[n])}},Va=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},Cd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Sd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},q=(t,e)=>{Sd(t,e,!0)},ft=(t,e)=>{Sd(t,e,!1)},St=(t,e)=>{const n=Qe(t.childNodes);for(let s=0;s<n.length;s++)if(vt(n[s],e))return n[s]},ds=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Ie=(t,e="flex")=>{t.style.display=e},xe=t=>{t.style.display="none"},sl=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},wr=(t,e,n)=>{e?Ie(t,n):xe(t)},Ge=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Cw=()=>!Ge(rt())&&!Ge(xt())&&!Ge(rn()),il=t=>t.scrollHeight>t.clientHeight,Id=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Ua=(t,e=!1)=>{const n=yr();Ge(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Sw=()=>{const t=yr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Ad=()=>typeof window>"u"||typeof document>"u",Iw=100,V={},Aw=()=>{V.previousActiveElement&&V.previousActiveElement.focus?(V.previousActiveElement.focus(),V.previousActiveElement=null):document.body&&document.body.focus()},kw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;V.restoreFocusTimeout=setTimeout(()=>{Aw(),e()},Iw),window.scrollTo(n,s)}),Dw=`
 <div aria-labelledby="${f.title}" aria-describedby="${f["html-container"]}" class="${f.popup}" tabindex="-1">
   <button type="button" class="${f.close}"></button>
   <ul class="${f["progress-steps"]}"></ul>
   <div class="${f.icon}"></div>
   <img class="${f.image}" />
   <h2 class="${f.title}" id="${f.title}"></h2>
   <div class="${f["html-container"]}" id="${f["html-container"]}"></div>
   <input class="${f.input}" />
   <input type="file" class="${f.file}" />
   <div class="${f.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${f.select}"></select>
   <div class="${f.radio}"></div>
   <label for="${f.checkbox}" class="${f.checkbox}">
     <input type="checkbox" />
     <span class="${f.label}"></span>
   </label>
   <textarea class="${f.textarea}"></textarea>
   <div class="${f["validation-message"]}" id="${f["validation-message"]}"></div>
   <div class="${f.actions}">
     <div class="${f.loader}"></div>
     <button type="button" class="${f.confirm}"></button>
     <button type="button" class="${f.deny}"></button>
     <button type="button" class="${f.cancel}"></button>
   </div>
   <div class="${f.footer}"></div>
   <div class="${f["timer-progress-bar-container"]}">
     <div class="${f["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Pw=()=>{const t=Me();return t?(t.remove(),ft([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},jt=()=>{V.currentInstance.resetValidationMessage()},Nw=()=>{const t=W(),e=St(t,f.input),n=St(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=St(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=St(t,f.textarea);e.oninput=jt,n.onchange=jt,r.onchange=jt,o.onchange=jt,a.oninput=jt,s.oninput=()=>{jt(),i.value=s.value},s.onchange=()=>{jt(),s.nextSibling.value=s.value}},Ow=t=>typeof t=="string"?document.querySelector(t):t,Rw=t=>{const e=W();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Lw=t=>{window.getComputedStyle(t).direction==="rtl"&&q(Me(),f.rtl)},Mw=t=>{const e=Pw();if(Ad()){fn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&q(n,f["no-transition"]),Ne(n,Dw);const s=Ow(t.target);s.appendChild(n),Rw(t),Lw(s),Nw()},$a=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?xw(t,e):t&&Ne(e,t)},xw=(t,e)=>{t.jquery?Fw(e,t):Ne(e,t.toString())},Fw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},As=(()=>{if(Ad())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Bw=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Vw=(t,e)=>{const n=Qs(),s=Wn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?xe(n):Ie(n),Je(n,e,"actions"),Uw(n,s,e),Ne(s,e.loaderHtml),Je(s,e,"loader")};function Uw(t,e,n){const s=rt(),i=xt(),r=rn();Vr(s,"confirm",n),Vr(i,"deny",n),Vr(r,"cancel",n),$w(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function $w(t,e,n,s){if(!s.buttonsStyling)return ft([t,e,n],f.styled);q([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,q(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,q(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,q(n,f["default-outline"]))}function Vr(t,e,n){wr(t,n[`show${Ra(e)}Button`],"inline-block"),Ne(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],Je(t,n,`${e}Button`),q(t,n[`${e}ButtonClass`])}function jw(t,e){typeof e=="string"?t.style.background=e:e||q([document.documentElement,document.body],f["no-backdrop"])}function qw(t,e){e in f?q(t,f[e]):(qe('The "position" parameter is not valid, defaulting to "center"'),q(t,f.center))}function Hw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&q(t,f[n])}}const Kw=(t,e)=>{const n=Me();n&&(jw(n,e.backdrop),qw(n,e.position),Hw(n,e.grow),Je(n,e,"container"))},U={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},zw=["input","file","range","select","radio","checkbox","textarea"],Gw=(t,e)=>{const n=W(),s=U.innerParams.get(t),i=!s||e.input!==s.input;zw.forEach(r=>{const o=f[r],a=St(n,o);Yw(r,e.inputAttributes),a.className=o,i&&xe(a)}),e.input&&(i&&Ww(e),Xw(e))},Ww=t=>{if(!Ue[t.input])return fn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=kd(t.input),n=Ue[t.input](e,t);Ie(n),setTimeout(()=>{Cd(n)})},Qw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Yw=(t,e)=>{const n=Va(W(),t);if(n){Qw(n);for(const s in e)n.setAttribute(s,e[s])}},Xw=t=>{const e=kd(t.input);t.customClass&&q(e,t.customClass.input)},ja=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Ys=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,q(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},kd=t=>{const e=f[t]?f[t]:f.input;return St(W(),e)},Ue={};Ue.text=Ue.email=Ue.password=Ue.number=Ue.tel=Ue.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Ma(e.inputValue)||qe(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Ys(t,t,e),ja(t,e),t.type=e.input,t);Ue.file=(t,e)=>(Ys(t,t,e),ja(t,e),t);Ue.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Ys(n,t,e),t};Ue.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Ne(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Ys(t,t,e),t};Ue.radio=t=>(t.textContent="",t);Ue.checkbox=(t,e)=>{const n=Va(W(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Ne(s,e.inputPlaceholder),t};Ue.textarea=(t,e)=>{t.value=e.inputValue,ja(t,e),Ys(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(W()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?W().style.width=`${r}px`:W().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Jw=(t,e)=>{const n=Li();Je(n,e,"htmlContainer"),e.html?($a(e.html,n),Ie(n,"block")):e.text?(n.textContent=e.text,Ie(n,"block")):xe(n),Gw(t,e)},Zw=(t,e)=>{const n=Td();wr(n,e.footer),e.footer&&$a(e.footer,n),Je(n,e,"footer")},eb=(t,e)=>{const n=xa();Ne(n,e.closeButtonHtml),Je(n,e,"closeButton"),wr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},tb=(t,e)=>{const n=U.innerParams.get(t),s=Ws();if(n&&e.icon===n.icon){ol(s,e),rl(s,e);return}if(!e.icon&&!e.iconHtml)return xe(s);if(e.icon&&Object.keys(hs).indexOf(e.icon)===-1)return fn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),xe(s);Ie(s),ol(s,e),rl(s,e),q(s,e.showClass.icon)},rl=(t,e)=>{for(const n in hs)e.icon!==n&&ft(t,hs[n]);q(t,hs[e.icon]),rb(t,e),nb(),Je(t,e,"icon")},nb=()=>{const t=W(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},sb=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ib=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ol=(t,e)=>{t.textContent="",e.iconHtml?Ne(t,al(e.iconHtml)):e.icon==="success"?Ne(t,sb):e.icon==="error"?Ne(t,ib):Ne(t,al({question:"?",warning:"!",info:"i"}[e.icon]))},rb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])sl(t,n,"backgroundColor",e.iconColor);sl(t,".swal2-success-ring","borderColor",e.iconColor)}},al=t=>`<div class="${f["icon-content"]}">${t}</div>`,ob=(t,e)=>{const n=Ed();if(!e.imageUrl)return xe(n);Ie(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),ds(n,"width",e.imageWidth),ds(n,"height",e.imageHeight),n.className=f.image,Je(n,e,"image")},ab=t=>{const e=document.createElement("li");return q(e,f["progress-step"]),Ne(e,t),e},cb=t=>{const e=document.createElement("li");return q(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},lb=(t,e)=>{const n=_d();if(!e.progressSteps||e.progressSteps.length===0)return xe(n);Ie(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&qe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=ab(s);if(n.appendChild(r),i===e.currentProgressStep&&q(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=cb(e);n.appendChild(o)}})},ub=(t,e)=>{const n=bd();wr(n,e.title||e.titleText,"block"),e.title&&$a(e.title,n),e.titleText&&(n.innerText=e.titleText),Je(n,e,"title")},hb=(t,e)=>{const n=Me(),s=W();e.toast?(ds(n,"width",e.width),s.style.width="100%",s.insertBefore(Wn(),Ws())):ds(s,"width",e.width),ds(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),xe(mr()),db(s,e)},db=(t,e)=>{t.className=`${f.popup} ${Ge(t)?e.showClass.popup:""}`,e.toast?(q([document.documentElement,document.body],f["toast-shown"]),q(t,f.toast)):q(t,f.modal),Je(t,e,"popup"),typeof e.customClass=="string"&&q(t,e.customClass),e.icon&&q(t,f[`icon-${e.icon}`])},Dd=(t,e)=>{hb(t,e),Kw(t,e),lb(t,e),tb(t,e),ob(t,e),ub(t,e),eb(t,e),Jw(t,e),Vw(t,e),Zw(t,e),typeof e.didRender=="function"&&e.didRender(W())},Qn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),fb=()=>{Qe(document.body.children).forEach(e=>{e===Me()||e.contains(Me())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Pd=()=>{Qe(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Nd=["swal-title","swal-html","swal-footer"],pb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Eb(n),Object.assign(gb(n),mb(n),yb(n),vb(n),wb(n),bb(n,Nd))},gb=t=>{const e={};return Qe(t.querySelectorAll("swal-param")).forEach(n=>{on(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof kn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof kn[s]=="object"&&(e[s]=JSON.parse(i))}),e},mb=t=>{const e={};return Qe(t.querySelectorAll("swal-button")).forEach(n=>{on(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Ra(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},yb=t=>{const e={},n=t.querySelector("swal-image");return n&&(on(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},vb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(on(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},wb=t=>{const e={},n=t.querySelector("swal-input");n&&(on(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},Qe(s).forEach(i=>{on(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},bb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(on(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Eb=t=>{const e=Nd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Qe(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&qe(`Unrecognized element <${s}>`)})},on=(t,e)=>{Qe(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&qe([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},cl={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function _b(t){t.inputValidator||Object.keys(cl).forEach(e=>{t.input===e&&(t.inputValidator=cl[e])})}function Tb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(qe('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Cb(t){_b(t),t.showLoaderOnConfirm&&!t.preConfirm&&qe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Tb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Mw(t)}class Sb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ib=()=>{Dn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Dn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Dn.previousBodyPadding+Bw()}px`)},Ab=()=>{Dn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Dn.previousBodyPadding}px`,Dn.previousBodyPadding=null)},kb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!vt(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,q(document.body,f.iosfix),Pb(),Db()}},Db=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&W().scrollHeight>window.innerHeight-44&&(Me().style.paddingBottom=`${44}px`)},Pb=()=>{const t=Me();let e;t.ontouchstart=n=>{e=Nb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Nb=t=>{const e=t.target,n=Me();return Ob(t)||Rb(t)?!1:e===n||!il(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(il(Li())&&Li().contains(e))},Ob=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Rb=t=>t.touches&&t.touches.length>1,Lb=()=>{if(vt(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);ft(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Od=10,Mb=t=>{const e=Me(),n=W();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Bb(e,n,t),setTimeout(()=>{xb(e,n)},Od),Ba()&&(Fb(e,t.scrollbarPadding,i),fb()),!vr()&&!V.previousActiveElement&&(V.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),ft(e,f["no-transition"])},Rd=t=>{const e=W();if(t.target!==e)return;const n=Me();e.removeEventListener(As,Rd),n.style.overflowY="auto"},xb=(t,e)=>{As&&Id(e)?(t.style.overflowY="hidden",e.addEventListener(As,Rd)):t.style.overflowY="auto"},Fb=(t,e,n)=>{kb(),e&&n!=="hidden"&&Ib(),setTimeout(()=>{t.scrollTop=0})},Bb=(t,e,n)=>{q(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Ie(e,"grid"),setTimeout(()=>{q(e,n.showClass.popup),e.style.removeProperty("opacity")},Od),q([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&q([document.documentElement,document.body],f["height-auto"])},$n=t=>{let e=W();e||new Ds,e=W();const n=Wn();vr()?xe(Ws()):Vb(e,t),Ie(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Vb=(t,e)=>{const n=Qs(),s=Wn();!e&&Ge(rt())&&(e=rt()),Ie(n),e&&(xe(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),q([t,n],f.loading)},Ub=(t,e)=>{e.input==="select"||e.input==="radio"?Kb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(La(e.inputValue)||Ma(e.inputValue))&&($n(rt()),zb(t,e))},$b=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return jb(n);case"radio":return qb(n);case"file":return Hb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},jb=t=>t.checked?1:0,qb=t=>t.checked?t.value:null,Hb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Kb=(t,e)=>{const n=W(),s=i=>Gb[e.input](n,Io(i),e);La(e.inputOptions)||Ma(e.inputOptions)?($n(rt()),zs(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):fn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},zb=(t,e)=>{const n=t.getInput();xe(n),zs(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Ie(n),n.focus(),t.hideLoading()}).catch(s=>{fn(`Error in inputValue promise: ${s}`),n.value="",Ie(n),n.focus(),t.hideLoading()})},Gb={select:(t,e,n)=>{const s=St(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Ne(c,o),c.selected=ll(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=St(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,ll(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Ne(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Io=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Io(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Io(s)),e.push([n,s])}),e},ll=(t,e)=>e&&e.toString()===t.toString();function ul(){const t=U.innerParams.get(this);if(!t)return;const e=U.domCache.get(this);xe(e.loader),vr()?t.icon&&Ie(Ws()):Wb(e),ft([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Wb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Ie(e[0],"inline-block"):Cw()&&xe(t.actions)};function Qb(t){const e=U.innerParams.get(t||this),n=U.domCache.get(t||this);return n?Va(n.popup,e.input):null}const ks={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Yb=()=>Ge(W()),Ld=()=>rt()&&rt().click(),Xb=()=>xt()&&xt().click(),Jb=()=>rn()&&rn().click(),Md=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Zb=(t,e,n,s)=>{Md(e),n.toast||(e.keydownHandler=i=>t0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:W(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Ao=(t,e,n)=>{const s=Fa();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();W().focus()},xd=["ArrowRight","ArrowDown"],e0=["ArrowLeft","ArrowUp"],t0=(t,e,n)=>{const s=U.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?n0(t,e,s):e.key==="Tab"?s0(e,s):[...xd,...e0].includes(e.key)?i0(e.key):e.key==="Escape"&&r0(e,s,n)))},n0=(t,e,n)=>{if(gr(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Ld(),e.preventDefault()}},s0=(t,e)=>{const n=t.target,s=Fa();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Ao(e,i,-1):Ao(e,i,1),t.stopPropagation(),t.preventDefault()},i0=t=>{const e=rt(),n=xt(),s=rn();if(![e,n,s].includes(document.activeElement))return;const i=xd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Qs().children.length;o++){if(r=r[i],!r)return;if(Ge(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},r0=(t,e,n)=>{gr(e.allowEscapeKey)&&(t.preventDefault(),n(Qn.esc))};function Fd(t,e,n,s){vr()?hl(t,s):(kw(n).then(()=>hl(t,s)),Md(V)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ba()&&(Ab(),Lb(),Pd()),o0()}function o0(){ft([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function ai(t){t=u0(t);const e=ks.swalPromiseResolve.get(this),n=c0(this);this.isAwaitingPromise()?t.isDismissed||(Xs(this),e(t)):n&&e(t)}function a0(){return!!U.awaitingPromise.get(this)}const c0=t=>{const e=W();if(!e)return!1;const n=U.innerParams.get(t);if(!n||vt(e,n.hideClass.popup))return!1;ft(e,n.showClass.popup),q(e,n.hideClass.popup);const s=Me();return ft(s,n.showClass.backdrop),q(s,n.hideClass.backdrop),h0(t,e,n),!0};function l0(t){const e=ks.swalPromiseReject.get(this);Xs(this),e&&e(t)}const Xs=t=>{t.isAwaitingPromise()&&(U.awaitingPromise.delete(t),U.innerParams.get(t)||t._destroy())},u0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),h0=(t,e,n)=>{const s=Me(),i=As&&Id(e);typeof n.willClose=="function"&&n.willClose(e),i?d0(t,e,s,n.returnFocus,n.didClose):Fd(t,s,n.returnFocus,n.didClose)},d0=(t,e,n,s,i)=>{V.swalCloseEventFinishedCallback=Fd.bind(null,t,n,s,i),e.addEventListener(As,function(r){r.target===e&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback)})},hl=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Bd(t,e,n){const s=U.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Vd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function f0(){Bd(this,["confirmButton","denyButton","cancelButton"],!1)}function p0(){Bd(this,["confirmButton","denyButton","cancelButton"],!0)}function g0(){return Vd(this.getInput(),!1)}function m0(){return Vd(this.getInput(),!0)}function y0(t){const e=U.domCache.get(this),n=U.innerParams.get(this);Ne(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&q(e.validationMessage,n.customClass.validationMessage),Ie(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),Cd(s),q(s,f.inputerror))}function v0(){const t=U.domCache.get(this);t.validationMessage&&xe(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ft(e,f.inputerror))}function w0(){return U.domCache.get(this).progressSteps}function b0(t){const e=W(),n=U.innerParams.get(this);if(!e||vt(e,n.hideClass.popup))return qe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=E0(t),i=Object.assign({},n,s);Dd(this,i),U.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const E0=t=>{const e={};return Object.keys(t).forEach(n=>{vd(n)?e[n]=t[n]:qe(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function _0(){const t=U.domCache.get(this),e=U.innerParams.get(this);if(!e){Ud(this);return}t.popup&&V.swalCloseEventFinishedCallback&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback),V.deferDisposalTimer&&(clearTimeout(V.deferDisposalTimer),delete V.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),T0(this)}const T0=t=>{Ud(t),delete t.params,delete V.keydownHandler,delete V.keydownTarget,delete V.currentInstance},Ud=t=>{t.isAwaitingPromise()?(Ur(U,t),U.awaitingPromise.set(t,!0)):(Ur(ks,t),Ur(U,t))},Ur=(t,e)=>{for(const n in t)t[n].delete(e)},$d=Object.freeze(Object.defineProperty({__proto__:null,_destroy:_0,close:ai,closeModal:ai,closePopup:ai,closeToast:ai,disableButtons:p0,disableInput:m0,disableLoading:ul,enableButtons:f0,enableInput:g0,getInput:Qb,getProgressSteps:w0,handleAwaitingPromise:Xs,hideLoading:ul,isAwaitingPromise:a0,rejectPromise:l0,resetValidationMessage:v0,showValidationMessage:y0,update:b0},Symbol.toStringTag,{value:"Module"})),C0=t=>{const e=U.innerParams.get(t);t.disableButtons(),e.input?jd(t,"confirm"):Ha(t,!0)},S0=t=>{const e=U.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?jd(t,"deny"):qa(t,!1)},I0=(t,e)=>{t.disableButtons(),e(Qn.cancel)},jd=(t,e)=>{const n=U.innerParams.get(t);if(!n.input)return fn(`The "input" parameter is needed to be set when using returnInputValueOn${Ra(e)}`);const s=$b(t,n);n.inputValidator?A0(t,s,e):t.getInput().checkValidity()?e==="deny"?qa(t,s):Ha(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},A0=(t,e,n)=>{const s=U.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>zs(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?qa(t,e):Ha(t,e)})},qa=(t,e)=>{const n=U.innerParams.get(t||globalThis);n.showLoaderOnDeny&&$n(xt()),n.preDeny?(U.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>zs(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Xs(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>qd(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},dl=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},qd=(t,e)=>{t.rejectPromise(e)},Ha=(t,e)=>{const n=U.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&$n(),n.preConfirm?(t.resetValidationMessage(),U.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>zs(n.preConfirm(e,n.validationMessage))).then(i=>{Ge(mr())||i===!1?(t.hideLoading(),Xs(t)):dl(t,typeof i>"u"?e:i)}).catch(i=>qd(t||globalThis,i))):dl(t,e)},k0=(t,e,n)=>{U.innerParams.get(t).toast?D0(t,e,n):(N0(e),O0(e),R0(t,e,n))},D0=(t,e,n)=>{e.popup.onclick=()=>{const s=U.innerParams.get(t);s&&(P0(s)||s.timer||s.input)||n(Qn.close)}},P0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Mi=!1;const N0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Mi=!0)}}},O0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Mi=!0)}}},R0=(t,e,n)=>{e.container.onclick=s=>{const i=U.innerParams.get(t);if(Mi){Mi=!1;return}s.target===e.container&&gr(i.allowOutsideClick)&&n(Qn.backdrop)}},L0=t=>typeof t=="object"&&t.jquery,fl=t=>t instanceof Element||L0(t),M0=t=>{const e={};return typeof t[0]=="object"&&!fl(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||fl(i)?e[n]=i:i!==void 0&&fn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function x0(...t){const e=this;return new e(...t)}function F0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const B0=()=>V.timeout&&V.timeout.getTimerLeft(),Hd=()=>{if(V.timeout)return Sw(),V.timeout.stop()},Kd=()=>{if(V.timeout){const t=V.timeout.start();return Ua(t),t}},V0=()=>{const t=V.timeout;return t&&(t.running?Hd():Kd())},U0=t=>{if(V.timeout){const e=V.timeout.increase(t);return Ua(e,!0),e}},$0=()=>V.timeout&&V.timeout.isRunning();let pl=!1;const ko={};function j0(t="data-swal-template"){ko[t]=this,pl||(document.body.addEventListener("click",q0),pl=!0)}const q0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in ko){const s=e.getAttribute(n);if(s){ko[n].fire({template:s});return}}},H0=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:M0,bindClickHandler:j0,clickCancel:Jb,clickConfirm:Ld,clickDeny:Xb,enableLoading:$n,fire:x0,getActions:Qs,getCancelButton:rn,getCloseButton:xa,getConfirmButton:rt,getContainer:Me,getDenyButton:xt,getFocusableElements:Fa,getFooter:Td,getHtmlContainer:Li,getIcon:Ws,getImage:Ed,getInputLabel:bw,getLoader:Wn,getPopup:W,getTimerLeft:B0,getTimerProgressBar:yr,getTitle:bd,getValidationMessage:mr,increaseTimer:U0,isDeprecatedParameter:So,isLoading:_w,isTimerRunning:$0,isUpdatableParameter:vd,isValidParameter:yd,isVisible:Yb,mixin:F0,resumeTimer:Kd,showLoading:$n,stopTimer:Hd,toggleTimer:V0},Symbol.toStringTag,{value:"Module"}));let Do;class Yn{constructor(...e){if(typeof window>"u")return;Do=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);U.promise.set(this,s)}_main(e,n={}){vw(Object.assign({},n,e)),V.currentInstance&&(V.currentInstance._destroy(),Ba()&&Pd()),V.currentInstance=this;const s=z0(e,n);Cb(s),Object.freeze(s),V.timeout&&(V.timeout.stop(),delete V.timeout),clearTimeout(V.restoreFocusTimeout);const i=G0(this);return Dd(this,s),U.innerParams.set(this,s),K0(this,i,s)}then(e){return U.promise.get(this).then(e)}finally(e){return U.promise.get(this).finally(e)}}const K0=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};ks.swalPromiseResolve.set(t,s),ks.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>C0(t),e.denyButton.onclick=()=>S0(t),e.cancelButton.onclick=()=>I0(t,r),e.closeButton.onclick=()=>r(Qn.close),k0(t,e,r),Zb(t,V,n,r),Ub(t,n),Mb(n),W0(V,n,r),Q0(e,n),setTimeout(()=>{e.container.scrollTop=0})}),z0=(t,e)=>{const n=pb(t),s=Object.assign({},kn,e,n,t);return s.showClass=Object.assign({},kn.showClass,s.showClass),s.hideClass=Object.assign({},kn.hideClass,s.hideClass),s},G0=t=>{const e={popup:W(),container:Me(),actions:Qs(),confirmButton:rt(),denyButton:xt(),cancelButton:rn(),loader:Wn(),closeButton:xa(),validationMessage:mr(),progressSteps:_d()};return U.domCache.set(t,e),e},W0=(t,e,n)=>{const s=yr();xe(s),e.timer&&(t.timeout=new Sb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Ie(s),Je(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Ua(e.timer)})))},Q0=(t,e)=>{if(!e.toast){if(!gr(e.allowEnterKey))return X0();Y0(t,e)||Ao(e,-1,1)}},Y0=(t,e)=>e.focusDeny&&Ge(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ge(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ge(t.confirmButton)?(t.confirmButton.focus(),!0):!1,X0=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Yn.prototype,$d);Object.assign(Yn,H0);Object.keys($d).forEach(t=>{Yn[t]=function(...e){if(Do)return Do[t](...e)}});Yn.DismissReason=Qn;Yn.version="11.4.8";const Ds=Yn;Ds.default=Ds;const vn=[];function br(t,e=_e){let n;const s=new Set;function i(a){if(Ft(t,a)&&(t=a,n)){const c=!vn.length;for(const l of s)l[1](),vn.push(l,t);if(c){for(let l=0;l<vn.length;l+=2)vn[l][0](vn[l+1]);vn.length=0}}}function r(a){i(a(t))}function o(a,c=_e){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||_e),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const $r=br({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Po=br(""),No=br(""),xi=br(""),J0=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},Z0=async t=>{try{await Na(Vn(Xe,"Pacientes",t.id),t)}catch(e){console.log(e)}};function gl(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function eE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=ml(gl(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Cl()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);pe(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=gl(i,n,o);s[o]?s[o].p(a,r):(s[o]=ml(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Fi(s,i),i&&de(e)}}}function tE(t){let e;return{c(){e=k("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){pe(n,e,s)},p:_e,d(n){n&&de(e)}}}function ml(t){let e,n=`${t[6].apellido}, ${t[6].nombre}${t[6].plan=="particular"?"":" -"+t[6].nroSocio+" - plan "+t[6].plan} `,s;return{c(){e=k("option"),s=ee(n),e.__value=t[8],e.value=e.__value},m(i,r){pe(i,e,r),w(e,s)},p(i,r){r&1&&n!==(n=`${i[6].apellido}, ${i[6].nombre}${i[6].plan=="particular"?"":" -"+i[6].nroSocio+" - plan "+i[6].plan} `)&&Ye(s,n)},d(i){i&&de(e)}}}function nE(t){let e,n,s;function i(a,c){return a[0].length==0?tE:eE}let r=i(t),o=r(t);return{c(){e=k("select"),o.c(),g(e,"name","select-pacientes"),g(e,"class","select-Pacientes svelte-2shrp8"),g(e,"id","selectPacientes"),g(e,"size",5),t[1]===void 0&&Xt(()=>t[4].call(e))},m(a,c){pe(a,e,c),o.m(e,null),Nt(e,t[1]),n||(s=[X(e,"change",t[2]),X(e,"change",t[4])],n=!0)},p(a,[c]){r===(r=i(a))&&o?o.p(a,c):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),c&2&&Nt(e,a[1])},i:_e,o:_e,d(a){a&&de(e),o.d(),n=!1,ot(s)}}}function sE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r;const o=Al(),a=l=>{const u=l.target.value;n(3,i=s[u].plan),o("cambioSelectPaciente",u),console.log("dispatch cambioSelectPaciente, valorindiceSelectPaciente: ",u)};function c(){r=pi(this),n(1,r)}return t.$$set=l=>{"pacientesFiltrada"in l&&n(0,s=l.pacientesFiltrada),"planSelect"in l&&n(3,i=l.planSelect)},[s,r,a,i,c]}class iE extends cn{constructor(e){super(),an(this,e,sE,nE,Ft,{pacientesFiltrada:0,planSelect:3})}}function rE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,b,v,I,_,M,S,R,Y,F,ie,H,Be,ve,we,He,fe,Ve,Ke,Q,K,ce,ne,gt,T,re,at,pn;return R=new iE({props:{pacientesFiltrada:t[2],planSelect:oE}}),R.$on("cambioSelectPaciente",t[14]),T=new df({props:{optionsPlan:t[0],planSeleccionado:t[8],SelectPlanVisible:t[4]}}),T.$on("cambioPlan",t[13]),T.$on("clickCheckPlan",t[15]),{c(){e=k("body"),n=k("div"),s=k("div"),i=k("button"),r=ee("create"),a=Z(),c=k("button"),l=ee("update"),h=Z(),d=k("button"),p=ee("delete"),b=Z(),v=k("div"),I=k("label"),I.textContent="filtrar por apellido",_=k("input"),M=Z(),S=k("div"),Pn(R.$$.fragment),Y=Z(),F=k("div"),ie=k("label"),ie.textContent="nombre",H=k("input"),Be=Z(),ve=k("label"),ve.textContent="apellido",we=k("input"),He=Z(),fe=k("div"),Ve=k("label"),Ve.textContent="nº socio",Ke=Z(),Q=k("input"),K=Z(),ce=k("label"),ne=ee(t[9]),gt=Z(),Pn(T.$$.fragment),i.disabled=o=!t[5]||!t[6]||!t[8]||!t[7],g(i,"class","svelte-v8du9y"),c.disabled=u=!t[5]||!t[6]||!t[8]||!t[7]||!t[3],g(c,"class","svelte-v8du9y"),d.disabled=m=!t[3],g(d,"class","svelte-v8du9y"),g(s,"class","buttons svelte-v8du9y"),g(n,"id","botones"),g(n,"class","svelte-v8du9y"),g(I,"for","filterPrefix"),g(I,"class","svelte-v8du9y"),g(_,"name","filterPrefix"),g(_,"placeholder","filter prefix"),g(_,"class","svelte-v8du9y"),g(v,"id","filter"),g(v,"class","svelte-v8du9y"),g(S,"id","selectPacientes"),g(S,"class","svelte-v8du9y"),g(ie,"for","nombre"),g(ie,"class","svelte-v8du9y"),g(H,"name","nombre"),g(H,"placeholder","nombre"),g(H,"class","svelte-v8du9y"),g(ve,"for","apellido"),g(ve,"class","svelte-v8du9y"),g(we,"name","apellido"),g(we,"placeholder","apellido"),g(we,"class","svelte-v8du9y"),g(F,"id","formInputsI"),g(F,"class","svelte-v8du9y"),g(Ve,"for","nroSocio"),g(Ve,"class","svelte-v8du9y"),g(Q,"name","nroSocio"),g(Q,"placeholder","nro de Socio"),g(Q,"class","svelte-v8du9y"),g(ce,"id","labelPlan"),g(ce,"for","plan"),g(ce,"class","svelte-v8du9y"),g(fe,"id","formInputsD"),g(fe,"class","svelte-v8du9y"),g(e,"class","svelte-v8du9y")},m(C,J){pe(C,e,J),w(e,n),w(n,s),w(s,i),w(i,r),w(s,a),w(s,c),w(c,l),w(s,h),w(s,d),w(d,p),w(e,b),w(e,v),w(v,I),w(v,_),Ee(_,t[1]),w(e,M),w(e,S),Jt(R,S,null),w(e,Y),w(e,F),w(F,ie),w(F,H),Ee(H,t[5]),w(F,Be),w(F,ve),w(F,we),Ee(we,t[6]),w(e,He),w(e,fe),w(fe,Ve),w(fe,Ke),w(fe,Q),Ee(Q,t[7]),w(fe,K),w(fe,ce),w(ce,ne),w(fe,gt),Jt(T,fe,null),re=!0,at||(pn=[X(i,"click",t[10]),X(c,"click",t[11]),X(d,"click",t[12]),X(_,"input",t[20]),X(H,"input",t[21]),X(we,"input",t[22]),X(Q,"input",t[23])],at=!0)},p(C,J){(!re||J[0]&480&&o!==(o=!C[5]||!C[6]||!C[8]||!C[7]))&&(i.disabled=o),(!re||J[0]&488&&u!==(u=!C[5]||!C[6]||!C[8]||!C[7]||!C[3]))&&(c.disabled=u),(!re||J[0]&8&&m!==(m=!C[3]))&&(d.disabled=m),J[0]&2&&_.value!==C[1]&&Ee(_,C[1]);const mt={};J[0]&4&&(mt.pacientesFiltrada=C[2]),R.$set(mt),J[0]&32&&H.value!==C[5]&&Ee(H,C[5]),J[0]&64&&we.value!==C[6]&&Ee(we,C[6]),J[0]&128&&Q.value!==C[7]&&Ee(Q,C[7]),(!re||J[0]&512)&&Ye(ne,C[9]);const et={};J[0]&1&&(et.optionsPlan=C[0]),J[0]&256&&(et.planSeleccionado=C[8]),J[0]&16&&(et.SelectPlanVisible=C[4]),T.$set(et)},i(C){re||(wt(R.$$.fragment,C),wt(T.$$.fragment,C),re=!0)},o(C){Ot(R.$$.fragment,C),Ot(T.$$.fragment,C),re=!1},d(C){C&&de(e),Zt(R),Zt(T),at=!1,ot(pn)}}}let oE="particular";function aE(t,e,n){let s,i,r,o,a;Ct(t,$r,T=>n(24,i=T)),Ct(t,xi,T=>n(25,r=T)),Ct(t,No,T=>n(26,o=T)),Ct(t,Po,T=>n(27,a=T));let{pacientes:c=[]}=e,{sesiones:l}=e,{planes:u}=e,h=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:d}=e,p;Il(()=>{J0(c,h),c.forEach(T=>{Z0(T)}),document.getElementById("selectPacientes").selected=M});let m="",b="",v="",I="",_="",M=0,S,R="plan";Zn($r,i=s,i);const Y=T=>{n(5,b=T?T.nombre:""),n(6,v=T?T.apellido:""),n(7,I=T?T.nroSocio:""),n(8,_=T?T.plan:"")},F=async()=>{try{await hd(Yt(Xe,"Pacientes"),{nombre:b,apellido:v,nroSocio:I,createdAt:new Date().toLocaleDateString(),plan:_}),An({text:"Nuevo paciente agregado"}).showToast()}catch(T){console.error(T)}},ie=()=>{n(16,c=c.concat({nombre:b,apellido:v})),n(19,M=c.length-1),F(),n(5,b=n(6,v=n(8,_=n(7,I=""))))},H=async T=>{try{await Na(Vn(Xe,"Pacientes",T.id),T),An({text:`paciente ${T.apellido}, ${T.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(re){console.error(re)}},Be=()=>{n(3,s.nombre=b,s),n(3,s.apellido=v,s),n(8,_=s.plan),n(3,s.nroSocio=I,s),n(3,s),n(2,S),n(19,M),n(1,m),n(16,c),n(16,c),H(s)},ve=async T=>{try{await To(Vn(Xe,"Pacientes",T.id)),An({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(at){console.error(at)}const re=us(Yt(Xe,"sesiones"),_o("pacienteID","==",T.id));console.log(`desde delete q=pacientes a borrar ${re} - paciente: ${T.nombre} ${T.apellido} ${T.id}`);try{(await ud(re)).forEach(pn=>{To(pn.ref)})}catch(at){console.log(at)}},we=()=>{const T=c.indexOf(s);Ds.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(re=>{re.isConfirmed&&(Ds.fire("Deleted!","Your file has been deleted.","success"),ve(c[M]),n(16,c=[...c.slice(0,T),...c.slice(T+1)]),n(5,b=n(6,v=n(7,I=n(8,_="")))),n(19,M=Math.min(M,S.length-2)))})},He=T=>{n(3,s.plan=T,s),n(3,s.nombre=b,s),n(3,s.apellido=v,s),n(3,s.nroSocio=I,s),n(2,S[M].plan=T,S),H(s)},fe=T=>{n(8,_=T.detail.valor.planSeleccionado),s.plan!=_&&He(_)},Ve=T=>{T?(n(9,R="particular"),n(4,p=!1)):(n(9,R="plan"),n(4,p=!0))},Ke=T=>{n(19,M=T.detail),n(8,_=S[M].plan);const re=_=="particular";Ve(re)},Q=T=>{const re=T.detail.valor.SelectPlanVisible;re?re&&_=="particular"&&n(8,_="210"):n(8,_="particular"),He(_),Ve(!re)};function K(){m=this.value,n(1,m)}function ce(){b=this.value,n(5,b)}function ne(){v=this.value,n(6,v)}function gt(){I=this.value,n(7,I)}return t.$$set=T=>{"pacientes"in T&&n(16,c=T.pacientes),"sesiones"in T&&n(17,l=T.sesiones),"planes"in T&&n(18,u=T.planes),"optionsPlan"in T&&n(0,d=T.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&65538&&n(2,S=m?c.filter(T=>`${T.apellido}, ${T.nombre}`.toLowerCase().startsWith(m.toLowerCase())):c.map(T=>({nombre:T.nombre,apellido:T.apellido,plan:T.plan,nroSocio:T.nroSocio,id:T.id}))),t.$$.dirty[0]&524292&&n(3,s=S[M]),t.$$.dirty[0]&8&&s&&(Zn($r,i=s,i),Zn(Po,a=s.apellido,a),Zn(No,o=s.nombre,o),Zn(xi,r=s.id,r)),t.$$.dirty[0]&8&&Y(s)},[d,m,S,s,p,b,v,I,_,R,ie,Be,we,fe,Ke,Q,c,l,u,M,K,ce,ne,gt]}class cE extends cn{constructor(e){super(),an(this,e,aE,rE,Ft,{pacientes:16,sesiones:17,planes:18,optionsPlan:0},null,[-1,-1])}}function lE(t){let e,n,s,i,r,o,a=t[1](t[2])+"",c;return{c(){e=k("p"),n=ee("total general:"),s=ee(t[0]),i=Z(),r=k("p"),o=ee("total por paciente:"),c=ee(a),g(e,"id","totalGeneral")},m(l,u){pe(l,e,u),w(e,n),w(e,s),pe(l,i,u),pe(l,r,u),w(r,o),w(r,c)},p(l,[u]){u&1&&Ye(s,l[0]),u&6&&a!==(a=l[1](l[2])+"")&&Ye(c,a)},i:_e,o:_e,d(l){l&&de(e),l&&de(i),l&&de(r)}}}function uE(t,e,n){let s;Ct(t,xi,o=>n(2,s=o));let{registrosMesActual:i}=e,{sumaValorPagoPorPaciente:r}=e;return t.$$set=o=>{"registrosMesActual"in o&&n(0,i=o.registrosMesActual),"sumaValorPagoPorPaciente"in o&&n(1,r=o.sumaValorPagoPorPaciente)},[i,r,s]}class hE extends cn{constructor(e){super(),an(this,e,uE,lE,Ft,{registrosMesActual:0,sumaValorPagoPorPaciente:1})}}function yl(t,e,n){const s=t.slice();return s[40]=e[n],s}function vl(t,e,n){const s=t.slice();return s[43]=e[n],s}function wl(t){let e,n,s=t[43].diaSesion+"",i,r,o=t[43].valorSesion+"",a,c,l=t[43].fechaPago+"",u,h,d=t[43].valorPago+"",p,m,b;return{c(){e=k("option"),n=ee("dia sesion: "),i=ee(s),r=ee(" - valor sesion: "),a=ee(o),c=ee(`\r
              - dia pago `),u=ee(l),h=ee(" - valor pago "),p=ee(d),m=Z(),g(e,"class"," svelte-1imwuid"),e.__value=b=t[43].id,e.value=e.__value},m(v,I){pe(v,e,I),w(e,n),w(e,i),w(e,r),w(e,a),w(e,c),w(e,u),w(e,h),w(e,p),w(e,m)},p(v,I){I[0]&1&&s!==(s=v[43].diaSesion+"")&&Ye(i,s),I[0]&1&&o!==(o=v[43].valorSesion+"")&&Ye(a,o),I[0]&1&&l!==(l=v[43].fechaPago+"")&&Ye(u,l),I[0]&1&&d!==(d=v[43].valorPago+"")&&Ye(p,d),I[0]&1&&b!==(b=v[43].id)&&(e.__value=b,e.value=e.__value)},d(v){v&&de(e)}}}function bl(t){let e=Object.values(t[43]).includes(t[3])&&t[43].diaSesion.slice(5,7)==t[4],n,s=e&&wl(t);return{c(){s&&s.c(),n=Cl()},m(i,r){s&&s.m(i,r),pe(i,n,r)},p(i,r){r[0]&25&&(e=Object.values(i[43]).includes(i[3])&&i[43].diaSesion.slice(5,7)==i[4]),e?s?s.p(i,r):(s=wl(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&de(n)}}}function dE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,b,v,I,_,M,S,R,Y,F,ie,H,Be,ve,we,He,fe,Ve,Ke=t[12],Q=[];for(let K=0;K<Ke.length;K+=1)Q[K]=El(yl(t,Ke,K));return{c(){e=k("div"),n=k("form"),s=k("div"),i=k("div"),r=k("label"),r.textContent="pago",o=k("input"),a=Z(),c=k("label"),c.textContent="valor sesion",l=k("input"),u=Z(),h=k("div"),d=k("label"),d.textContent="Dia Sesion",p=k("input"),m=Z(),b=k("label"),b.textContent="Fecha Pago",v=k("input"),I=Z(),_=k("div"),M=k("button"),M.textContent="update",S=Z(),R=k("button"),R.textContent="delete",Y=Z(),F=k("button"),F.textContent="Agregar sesión",ie=Z(),H=k("select");for(let K=0;K<Q.length;K+=1)Q[K].c();Be=Z(),ve=k("button"),we=ee("registros mes "),He=ee(t[4]),g(r,"for","valorPago"),g(r,"class","svelte-1imwuid"),g(o,"name","valorPago"),g(o,"type","number"),g(o,"step","100"),g(o,"min","0"),g(o,"placeholder","Valor pago"),g(o,"class","svelte-1imwuid"),g(c,"for","valorSesion"),g(c,"class","svelte-1imwuid"),g(l,"name","valorSesion"),g(l,"type","number"),g(l,"step","100"),g(l,"min","0"),g(l,"placeholder","Valor sesión"),g(l,"class","svelte-1imwuid"),g(i,"id","inputsFormSesionesI"),g(i,"class","svelte-1imwuid"),g(d,"for","diaSesion"),g(d,"class","svelte-1imwuid"),g(p,"name","diaSesion"),g(p,"type","date"),g(p,"placeholder","Día sesión"),g(p,"class","svelte-1imwuid"),g(b,"for","fechaPago"),g(b,"class","svelte-1imwuid"),g(v,"name","fechaPago"),g(v,"type","date"),g(v,"placeholder","Fecha pago"),g(v,"class","svelte-1imwuid"),g(h,"id","inputsFormSesionesD"),g(h,"class","svelte-1imwuid"),g(M,"class","svelte-1imwuid"),g(R,"class","svelte-1imwuid"),g(F,"class","svelte-1imwuid"),g(H,"name","mes"),g(H,"id","mesRegistro"),g(H,"class","svelte-1imwuid"),t[4]===void 0&&Xt(()=>t[29].call(H)),g(ve,"class","svelte-1imwuid"),g(_,"id","botonesFormSesiones"),g(_,"class","buttons svelte-1imwuid"),g(s,"id","form-Sesiones"),g(s,"class","svelte-1imwuid"),g(n,"class","svelte-1imwuid"),g(e,"id","contenedor-form-sesiones"),g(e,"class","svelte-1imwuid")},m(K,ce){pe(K,e,ce),w(e,n),w(n,s),w(s,i),w(i,r),w(i,o),Ee(o,t[6]),w(i,a),w(i,c),w(i,l),Ee(l,t[7]),w(s,u),w(s,h),w(h,d),w(h,p),Ee(p,t[8]),w(h,m),w(h,b),w(h,v),Ee(v,t[9]),w(s,I),w(s,_),w(_,M),w(_,S),w(_,R),w(_,Y),w(_,F),w(_,ie),w(_,H);for(let ne=0;ne<Q.length;ne+=1)Q[ne]&&Q[ne].m(H,null);Nt(H,t[4]),w(_,Be),w(_,ve),w(ve,we),w(ve,He),fe||(Ve=[X(o,"input",t[23]),X(l,"input",t[24]),X(p,"input",t[25]),X(v,"input",t[26]),X(M,"click",t[27]),X(R,"click",t[28]),X(F,"click",t[14]),X(H,"change",t[17]),X(H,"change",t[29]),X(ve,"click",t[30]),X(n,"submit",Xd(t[21]))],fe=!0)},p(K,ce){if(ce[0]&64&&fi(o.value)!==K[6]&&Ee(o,K[6]),ce[0]&128&&fi(l.value)!==K[7]&&Ee(l,K[7]),ce[0]&256&&Ee(p,K[8]),ce[0]&512&&Ee(v,K[9]),ce[0]&4096){Ke=K[12];let ne;for(ne=0;ne<Ke.length;ne+=1){const gt=yl(K,Ke,ne);Q[ne]?Q[ne].p(gt,ce):(Q[ne]=El(gt),Q[ne].c(),Q[ne].m(H,null))}for(;ne<Q.length;ne+=1)Q[ne].d(1);Q.length=Ke.length}ce[0]&4112&&Nt(H,K[4]),ce[0]&16&&Ye(He,K[4])},d(K){K&&de(e),Fi(Q,K),fe=!1,ot(Ve)}}}function El(t){let e,n=`${t[40].nro.toString().padStart(2,"0")} - ${t[40].nombre}`,s;return{c(){e=k("option"),s=ee(n),e.__value=t[40].nro,e.value=e.__value,g(e,"class","svelte-1imwuid")},m(i,r){pe(i,e,r),w(e,s)},p:_e,d(i){i&&de(e)}}}function fE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,b,v,I=t[0],_=[];for(let S=0;S<I.length;S+=1)_[S]=bl(vl(t,I,S));d=new hE({props:{registrosMesActual:t[5],sumaValorPagoPorPaciente:t[18]}});let M=dE(t);return{c(){e=k("main"),n=k("body"),s=k("h4"),i=ee("Paciente: "),r=ee(t[10]),o=ee(", "),a=ee(t[11]),c=Z(),l=k("div"),u=k("select");for(let S=0;S<_.length;S+=1)_[S].c();h=Z(),Pn(d.$$.fragment),p=Z(),M&&M.c(),g(s,"class","svelte-1imwuid"),g(u,"id","select-sesiones"),g(u,"size",5),g(u,"class","svelte-1imwuid"),t[1]===void 0&&Xt(()=>t[22].call(u)),g(l,"id","select"),g(l,"class","svelte-1imwuid"),g(n,"class","svelte-1imwuid"),g(e,"class","svelte-1imwuid")},m(S,R){pe(S,e,R),w(e,n),w(n,s),w(s,i),w(s,r),w(s,o),w(s,a),w(n,c),w(n,l),w(l,u);for(let Y=0;Y<_.length;Y+=1)_[Y]&&_[Y].m(u,null);Nt(u,t[1]),w(l,h),Jt(d,l,null),w(n,p),M&&M.m(n,null),m=!0,b||(v=[X(u,"change",t[13]),X(u,"change",t[22])],b=!0)},p(S,R){if((!m||R[0]&1024)&&Ye(r,S[10]),(!m||R[0]&2048)&&Ye(a,S[11]),R[0]&25){I=S[0];let F;for(F=0;F<I.length;F+=1){const ie=vl(S,I,F);_[F]?_[F].p(ie,R):(_[F]=bl(ie),_[F].c(),_[F].m(u,null))}for(;F<_.length;F+=1)_[F].d(1);_.length=I.length}R[0]&3&&Nt(u,S[1]);const Y={};R[0]&32&&(Y.registrosMesActual=S[5]),d.$set(Y),M.p(S,R)},i(S){m||(wt(d.$$.fragment,S),m=!0)},o(S){Ot(d.$$.fragment,S),m=!1},d(S){S&&de(e),Fi(_,S),Zt(d),M&&M.d(),b=!1,ot(v)}}}function pE(t,e,n){let s,i,r;Ct(t,xi,C=>n(3,s=C)),Ct(t,Po,C=>n(10,i=C)),Ct(t,No,C=>n(11,r=C));let{sesiones:o}=e,{pacientes:a}=e,{planes:c}=e,l;const u=new Date;let h=u.getMonth()+1,d=u.getFullYear(),p=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}],m,b,v=0;const I=C=>{n(1,m=C.target.value),console.log(o),n(2,b=o.find(J=>J.id===m)),console.log("selectedSession",b),n(6,R=b.valorPago),n(7,Y=b.valorSesion),n(9,ie=b.fechaPago),n(8,F=b.diaSesion)},_=async()=>{console.log("Add sesion",b);try{const C=await hd(Yt(Xe,"sesiones"),{valorPago:R,valorSesion:Y,diaSesion:F,fechaPago:ie,pacienteID:s});console.log("sesion agregada"),An({text:"Nueva sesion agregada"}).showToast(),n(1,m=C.id)}catch(C){console.error(C)}},M=async C=>{console.log("Update sesion",C);try{await Na(Vn(Xe,"sesiones",C.id),{valorPago:R,valorSesion:Y,fechaPago:ie,diaSesion:F}),An({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(J){console.log(J)}},S=async C=>{console.log("Delete sesion",C);try{await To(Vn(Xe,"sesiones",C.id)),An({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(J){console.error(J)}};let R=5e3,Y=5e3,F=new Date().toISOString().slice(0,10),ie=new Date().toISOString().slice(0,10),H=h.toString().padStart(2,"0"),Be=d.toString(),ve=`${Be}-${H}-01`,we=`${Be}-${H}-31`;const He=async()=>{l||n(4,l=h);const C=Yt(Xe,"sesiones");console.log(`mesActual ${h} - mesSeleccionado ${l} `),H=h.toString().padStart(2,"0");var J=l.toString().padStart(2,"0");console.log(`mesActualFormateado ${H} - mesSeleccionadoFormateado ${J}`),h!=l?(ve=`${Be}-${J}-01`,we=`${Be}-${J}-31`):(ve=`${Be}-${H}-01`,we=`${Be}-${H}-31`);const mt=us(C,_o("diaSesion",">=",ve),_o("diaSesion","<=",we));try{const et=await ud(mt),zd=et.docs.map(gn=>gn.data());return console.log("sesiones por mes actual",zd),n(5,v=0),et.forEach(gn=>{let Gd=gn.data().pacienteID;const Xn=a.find(Js=>Js.id==Gd);console.log(Xn);var mn=gn.data().valorPago;if(mn==null&&(mn=0),typeof mn=="number")if(Xn.plan=="particular")n(5,v+=mn),console.log(`paciente ${Xn.apellido}, valor pago ${gn.data().valorPago}, total acumulado ${v}`);else{const Js=Xn.plan;console.log("planPacienteActual",Js);var Jn=c.find(Wd=>Wd.plan==Js);console.log(`planActual ${Jn} - pagoSesion ${mn} - planActual.valorOs ${Jn.valorOs}`),n(5,v+=Jn.valorOs+mn),console.log(`paciente ${Xn.apellido}, fechaSesion: ${gn.data().diaSesion}, valor Os + Coseguro$${Jn.valorOs+Jn.valorCoseguro}, total acumulado ${v}`)}}),console.log("Total pagos mes actual: ",v),v}catch(et){return console.error("Error al obtener las sesiones y los pagos:",et),[]}},fe=()=>o.reduce((C,J)=>C+J.valorPago,0),Ve=C=>o.filter(mt=>mt.pacienteID===C&&mt.diaSesion.slice(5,7)===l.toString().padStart(2,"0")).reduce((mt,et)=>mt+et.valorPago,0);function Ke(C){tf.call(this,t,C)}function Q(){m=pi(this),n(1,m),n(0,o)}function K(){R=fi(this.value),n(6,R)}function ce(){Y=fi(this.value),n(7,Y)}function ne(){F=this.value,n(8,F)}function gt(){ie=this.value,n(9,ie)}const T=()=>M(b),re=()=>S(b);function at(){l=pi(this),n(4,l),n(12,p)}const pn=()=>He();return t.$$set=C=>{"sesiones"in C&&n(0,o=C.sesiones),"pacientes"in C&&n(19,a=C.pacientes),"planes"in C&&n(20,c=C.planes)},t.$$.update=()=>{t.$$.dirty[0]&1572865&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",c),t.$$.dirty[0]&7&&(n(2,b=o.find(C=>C.id===m)),console.log(b||"sin seleccion de sesion")),t.$$.dirty[0]&8&&Ve(s)},fe(),He(),[o,m,b,s,l,v,R,Y,F,ie,i,r,p,I,_,M,S,He,Ve,a,c,Ke,Q,K,ce,ne,gt,T,re,at,pn]}class gE extends cn{constructor(e){super(),an(this,e,pE,fE,Ft,{sesiones:0,pacientes:19,planes:20},null,[-1,-1])}}function mE(t){let e,n,s,i,r,o,a,c,l;return r=new cE({props:{sesiones:t[0],pacientes:t[1],planes:t[2],optionsPlan:t[3]}}),c=new gE({props:{sesiones:t[0],pacientes:t[1],planes:t[2]}}),{c(){e=k("body"),n=k("div"),s=k("h5"),s.textContent="CRUD Pacientes",i=Z(),Pn(r.$$.fragment),o=Z(),a=k("div"),Pn(c.$$.fragment),g(n,"class","contenedor-pacientes svelte-1y3ujd1"),g(a,"class","contenedor-sesiones svelte-1y3ujd1"),g(e,"class","svelte-1y3ujd1")},m(u,h){pe(u,e,h),w(e,n),w(n,s),w(n,i),Jt(r,n,null),w(e,o),w(e,a),Jt(c,a,null),l=!0},p(u,[h]){const d={};h&1&&(d.sesiones=u[0]),h&2&&(d.pacientes=u[1]),h&4&&(d.planes=u[2]),h&8&&(d.optionsPlan=u[3]),r.$set(d);const p={};h&1&&(p.sesiones=u[0]),h&2&&(p.pacientes=u[1]),h&4&&(p.planes=u[2]),c.$set(p)},i(u){l||(wt(r.$$.fragment,u),wt(c.$$.fragment,u),l=!0)},o(u){Ot(r.$$.fragment,u),Ot(c.$$.fragment,u),l=!1},d(u){u&&de(e),Zt(r),Zt(c)}}}function yE(t,e,n){let s=[],i=[],r=[],o=[];return Il(()=>{const a=[],c=Yt(Xe,"sesiones"),l=Yt(Xe,"Pacientes"),u=Yt(Xe,"planes"),h=us(c,xr("diaSesion")),d=us(l,xr("apellido")),p=us(u,xr("plan")),m=Fr(h,I=>{n(0,s=I.docs.map(_=>({id:_.id,..._.data()})))});console.log("desde onMount CRUDSesiones",s),a.push(m);const b=Fr(d,I=>{n(1,i=I.docs.map(_=>({id:_.id,..._.data()})))});a.push(b);const v=Fr(p,I=>{n(2,r=I.docs.map(_=>({id:_.id,..._.data()})))});return console.log(r),n(3,o=r.map(I=>I.data().plan)),o.push("particular"),o.sort(),a.push(v),()=>{a.forEach(I=>I())}}),[s,i,r,o]}class vE extends cn{constructor(e){super(),an(this,e,yE,mE,Ft,{})}}function wE(t){let e,n,s;return n=new vE({}),{c(){e=k("div"),Pn(n.$$.fragment),g(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){pe(i,e,r),Jt(n,e,null),s=!0},p:_e,i(i){s||(wt(n.$$.fragment,i),s=!0)},o(i){Ot(n.$$.fragment,i),s=!1},d(i){i&&de(e),Zt(n)}}}function bE(t){let e,n,s,i,r,o;return{c(){e=k("div"),n=k("h1"),n.textContent="ingrese la contraseña:",s=Z(),i=k("input"),g(n,"class","svelte-uueu6x"),g(i,"type","password"),g(i,"class","svelte-uueu6x"),g(e,"class","ingreso svelte-uueu6x")},m(a,c){pe(a,e,c),w(e,n),w(e,s),w(e,i),Ee(i,t[1]),r||(o=[X(i,"input",t[3]),X(i,"input",t[2])],r=!0)},p(a,c){c&2&&i.value!==a[1]&&Ee(i,a[1])},i:_e,o:_e,d(a){a&&de(e),r=!1,ot(o)}}}function EE(t){let e,n,s,i;const r=[bE,wE],o=[];function a(c,l){return c[0]==="nada"?0:c[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=k("main"),s&&s.c(),g(e,"class","svelte-uueu6x")},m(c,l){pe(c,e,l),~n&&o[n].m(e,null),i=!0},p(c,[l]){let u=n;n=a(c),n===u?~n&&o[n].p(c,l):(s&&(af(),Ot(o[u],1,1,()=>{o[u]=null}),cf()),~n?(s=o[n],s?s.p(c,l):(s=o[n]=r[n](c),s.c()),wt(s,1),s.m(e,null)):s=null)},i(c){i||(wt(s),i=!0)},o(c){Ot(s),i=!1},d(c){c&&de(e),~n&&o[n].d()}}}function _E(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class TE extends cn{constructor(e){super(),an(this,e,_E,EE,Ft,{})}}new TE({target:document.getElementById("app")});
