(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function _e(){}function Al(t){return t()}function Qa(){return Object.create(null)}function lt(t){t.forEach(Al)}function kl(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function nf(t){return Object.keys(t).length===0}function sf(t,...e){if(t==null)return _e;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t,e,n){t.$$.on_destroy.push(sf(e,n))}function bn(t,e,n){return t.set(n),e}function b(t,e){t.appendChild(e)}function me(t,e,n){t.insertBefore(e,n||null)}function pe(t){t.parentNode&&t.parentNode.removeChild(t)}function Ui(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function ee(t){return document.createTextNode(t)}function X(){return ee(" ")}function Dl(){return ee("")}function z(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function rf(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yi(t){return t===""?null:+t}function of(t){return Array.from(t.childNodes)}function et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ee(t,e){t.value=e??""}function xt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function af(t){for(const e of t.options)if(!e.disabled)return e}function vi(t){const e=t.querySelector(":checked")||af(t);return e&&e.__value}function ni(t,e,n){t.classList[n?"add":"remove"](e)}function cf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let ps;function os(t){ps=t}function Pl(){if(!ps)throw new Error("Function called outside component initialization");return ps}function Nl(t){Pl().$$.on_mount.push(t)}function Ol(){const t=Pl();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=cf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function lf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Tn=[],Ya=[];let An=[];const Xa=[],uf=Promise.resolve();let Qr=!1;function hf(){Qr||(Qr=!0,uf.then(Rl))}function rn(t){An.push(t)}const Ir=new Set;let En=0;function Rl(){if(En!==0)return;const t=ps;do{try{for(;En<Tn.length;){const e=Tn[En];En++,os(e),df(e.$$)}}catch(e){throw Tn.length=0,En=0,e}for(os(null),Tn.length=0,En=0;Ya.length;)Ya.pop()();for(let e=0;e<An.length;e+=1){const n=An[e];Ir.has(n)||(Ir.add(n),n())}An.length=0}while(Tn.length);for(;Xa.length;)Xa.pop()();Qr=!1,Ir.clear(),os(t)}function df(t){if(t.fragment!==null){t.update(),lt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rn)}}function ff(t){const e=[],n=[];An.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),An=e}const hi=new Set;let Jt;function pf(){Jt={r:0,c:[],p:Jt}}function gf(){Jt.r||lt(Jt.c),Jt=Jt.p}function St(t,e){t&&t.i&&(hi.delete(t),t.i(e))}function Ft(t,e,n,s){if(t&&t.o){if(hi.has(t))return;hi.add(t),Jt.c.push(()=>{hi.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Ln(t){t&&t.c()}function on(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||rn(()=>{const o=t.$$.on_mount.map(Al).filter(kl);t.$$.on_destroy?t.$$.on_destroy.push(...o):lt(o),t.$$.on_mount=[]}),r.forEach(rn)}function an(t,e){const n=t.$$;n.fragment!==null&&(ff(n.after_update),lt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mf(t,e){t.$$.dirty[0]===-1&&(Tn.push(t),hf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fn(t,e,n,s,i,r,o,a=[-1]){const c=ps;os(t);const l=t.$$={fragment:null,ctx:[],props:r,update:_e,not_equal:i,bound:Qa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Qa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&mf(t,h)),d}):[],l.update(),u=!0,lt(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=of(e.target);l.fragment&&l.fragment.l(h),h.forEach(pe)}else l.fragment&&l.fragment.c();e.intro&&St(t.$$.fragment),on(t,e.target,e.anchor,e.customElement),Rl()}os(c)}class pn{$destroy(){an(this,1),this.$destroy=_e}$on(e,n){if(!kl(n))return _e;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!nf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ll=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ll(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new vf;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wf=function(t){const e=Ll(t);return Ml.encodeByteArray(e,!0)},wi=function(t){return wf(t).replace(/\./g,"")},bf=function(t){try{return Ml.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ef(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _f=()=>Ef().__FIREBASE_DEFAULTS__,Tf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bf(t[1]);return e&&JSON.parse(e)},xl=()=>{try{return _f()||Tf()||Cf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sf=t=>{var e,n;return(n=(e=xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fl=t=>{const e=Sf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},If=()=>{var t;return(t=xl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Bl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wi(JSON.stringify(n)),wi(JSON.stringify(o)),a].join(".")}function kf(){try{return typeof indexedDB=="object"}catch{return!1}}function Df(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="FirebaseError";class gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Pf,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vl.prototype.create)}}class Vl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Nf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,s)}}function Nf(t,e){return t.replace(Of,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Of=/\{\$([^}]+)}/g;function Yr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ja(r)&&Ja(o)){if(!Yr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ja(t){return t!==null&&typeof t=="object"}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class Rf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Af;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mf(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Lf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lf(t){return t===Yt?void 0:t}function Mf(t){return t.instantiationMode==="EAGER"}/**
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
 */class xf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Ff={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Bf=G.INFO,Vf={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Uf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Vf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=Bf,this._logHandler=Uf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ff[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const jf=(t,e)=>e.some(n=>t instanceof n);let Za,ec;function $f(){return Za||(Za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qf(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jl=new WeakMap,Xr=new WeakMap,$l=new WeakMap,Ar=new WeakMap,Bo=new WeakMap;function Hf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jl.set(n,t)}).catch(()=>{}),Bo.set(e,t),e}function Kf(t){if(Xr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Xr.set(t,e)}let Jr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$l.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zf(t){Jr=t(Jr)}function Gf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(kr(this),e,...n);return $l.set(s,e.sort?e.sort():[e]),Nt(s)}:qf().includes(t)?function(...e){return t.apply(kr(this),e),Nt(jl.get(this))}:function(...e){return Nt(t.apply(kr(this),e))}}function Wf(t){return typeof t=="function"?Gf(t):(t instanceof IDBTransaction&&Kf(t),jf(t,$f())?new Proxy(t,Jr):t)}function Nt(t){if(t instanceof IDBRequest)return Hf(t);if(Ar.has(t))return Ar.get(t);const e=Wf(t);return e!==t&&(Ar.set(t,e),Bo.set(e,t)),e}const kr=t=>Bo.get(t);function Qf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Yf=["get","getKey","getAll","getAllKeys","count"],Xf=["put","add","delete","clear"],Dr=new Map;function tc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Xf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Yf.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Dr.set(e,r),r}zf(t=>({...t,get:(e,n,s)=>tc(e,n)||t.get(e,n,s),has:(e,n)=>!!tc(e,n)||t.has(e,n)}));/**
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
 */class Jf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zr="@firebase/app",nc="0.9.4";/**
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
 */const cn=new Ul("@firebase/app"),ep="@firebase/app-compat",tp="@firebase/analytics-compat",np="@firebase/analytics",sp="@firebase/app-check-compat",ip="@firebase/app-check",rp="@firebase/auth",op="@firebase/auth-compat",ap="@firebase/database",cp="@firebase/database-compat",lp="@firebase/functions",up="@firebase/functions-compat",hp="@firebase/installations",dp="@firebase/installations-compat",fp="@firebase/messaging",pp="@firebase/messaging-compat",gp="@firebase/performance",mp="@firebase/performance-compat",yp="@firebase/remote-config",vp="@firebase/remote-config-compat",wp="@firebase/storage",bp="@firebase/storage-compat",Ep="@firebase/firestore",_p="@firebase/firestore-compat",Tp="firebase",Cp="9.17.2";/**
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
 */const eo="[DEFAULT]",Sp={[Zr]:"fire-core",[ep]:"fire-core-compat",[np]:"fire-analytics",[tp]:"fire-analytics-compat",[ip]:"fire-app-check",[sp]:"fire-app-check-compat",[rp]:"fire-auth",[op]:"fire-auth-compat",[ap]:"fire-rtdb",[cp]:"fire-rtdb-compat",[lp]:"fire-fn",[up]:"fire-fn-compat",[hp]:"fire-iid",[dp]:"fire-iid-compat",[fp]:"fire-fcm",[pp]:"fire-fcm-compat",[gp]:"fire-perf",[mp]:"fire-perf-compat",[yp]:"fire-rc",[vp]:"fire-rc-compat",[wp]:"fire-gcs",[bp]:"fire-gcs-compat",[Ep]:"fire-fst",[_p]:"fire-fst-compat","fire-js":"fire-js",[Tp]:"fire-js-all"};/**
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
 */const bi=new Map,to=new Map;function Ip(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(to.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;to.set(e,t);for(const n of bi.values())Ip(n,t);return!0}function ql(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ap={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new Vl("app","Firebase",Ap);/**
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
 */class kp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Hl=Cp;function Kl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:eo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ot.create("bad-app-name",{appName:String(i)});if(n||(n=If()),!n)throw Ot.create("no-options");const r=bi.get(i);if(r){if(Yr(n,r.options)&&Yr(s,r.config))return r;throw Ot.create("duplicate-app",{appName:i})}const o=new xf(i);for(const c of to.values())o.addComponent(c);const a=new kp(n,s,o);return bi.set(i,a),a}function zl(t=eo){const e=bi.get(t);if(!e&&t===eo)return Kl();if(!e)throw Ot.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let i=(s=Sp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}gs(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Dp="firebase-heartbeat-database",Pp=1,ms="firebase-heartbeat-store";let Pr=null;function Gl(){return Pr||(Pr=Qf(Dp,Pp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ms)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Pr}async function Np(t){try{return(await Gl()).transaction(ms).objectStore(ms).get(Wl(t))}catch(e){if(e instanceof gn)cn.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function sc(t,e){try{const s=(await Gl()).transaction(ms,"readwrite");return await s.objectStore(ms).put(e,Wl(t)),s.done}catch(n){if(n instanceof gn)cn.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(s.message)}}}function Wl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Op=1024,Rp=30*24*60*60*1e3;class Lp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Rp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ic(),{heartbeatsToSend:n,unsentEntries:s}=Mp(this._heartbeatsCache.heartbeats),i=wi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ic(){return new Date().toISOString().substring(0,10)}function Mp(t,e=Op){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),rc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kf()?Df().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Np(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rc(t){return wi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fp(t){gs(new Mn("platform-logger",e=>new Jf(e),"PRIVATE")),gs(new Mn("heartbeat",e=>new Lp(e),"PRIVATE")),Rt(Zr,nc,t),Rt(Zr,nc,"esm2017"),Rt("fire-js","")}Fp("");var Bp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Vo=Vo||{},M=Bp||self;function Ei(){}function ji(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ns(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Vp(t){return Object.prototype.hasOwnProperty.call(t,Nr)&&t[Nr]||(t[Nr]=++Up)}var Nr="closure_uid_"+(1e9*Math.random()>>>0),Up=0;function jp(t,e,n){return t.call.apply(t.bind,arguments)}function $p(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Re(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Re=jp:Re=$p,Re.apply(null,arguments)}function si(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ht(){this.s=this.s,this.o=this.o}var qp=0;Ht.prototype.s=!1;Ht.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qp!=0)&&Vp(this)};Ht.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ql=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Uo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function oc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ji(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Hp=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",Ei,e),M.removeEventListener("test",Ei,e)}catch{}return t}();function _i(t){return/^[\s\xa0]*$/.test(t)}var ac=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Or(t,e){return t<e?-1:t>e?1:0}function $i(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function pt(t){return $i().indexOf(t)!=-1}function jo(t){return jo[" "](t),t}jo[" "]=Ei;function Kp(t){var e=Wp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zp=pt("Opera"),xn=pt("Trident")||pt("MSIE"),Yl=pt("Edge"),no=Yl||xn,Xl=pt("Gecko")&&!($i().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),Gp=$i().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function Jl(){var t=M.document;return t?t.documentMode:void 0}var Ti;e:{var Rr="",Lr=function(){var t=$i();if(Xl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yl)return/Edge\/([\d\.]+)/.exec(t);if(xn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Gp)return/WebKit\/(\S+)/.exec(t);if(zp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lr&&(Rr=Lr?Lr[1]:""),xn){var Mr=Jl();if(Mr!=null&&Mr>parseFloat(Rr)){Ti=String(Mr);break e}}Ti=Rr}var Wp={};function Qp(){return Kp(function(){let t=0;const e=ac(String(Ti)).split("."),n=ac("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Or(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Or(i[2].length==0,r[2].length==0)||Or(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var so;if(M.document&&xn){var cc=Jl();so=cc||parseInt(Ti,10)||void 0}else so=void 0;var Yp=so;function ys(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xl){e:{try{jo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Xp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ys.X.h.call(this)}}ke(ys,Le);var Xp={2:"touch",3:"pen",4:"mouse"};ys.prototype.h=function(){ys.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),Jp=0;function Zp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Jp,this.ba=this.ea=!1}function qi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function $o(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Zl(t){const e={};for(const n in t)e[n]=t[n];return e}const lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<lc.length;r++)n=lc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Hi(t){this.src=t,this.g={},this.h=0}Hi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ro(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Zp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function io(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Ql(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(qi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ro(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var qo="closure_lm_"+(1e6*Math.random()|0),xr={};function tu(t,e,n,s,i){if(s&&s.once)return su(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)tu(t,e[r],n,s,i);return null}return n=zo(n),t&&t[Os]?t.N(e,n,Ns(s)?!!s.capture:!!s,i):nu(t,e,n,!1,s,i)}function nu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ns(i)?!!i.capture:!!i,a=Ko(t);if(a||(t[qo]=a=new Hi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=eg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Hp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ru(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eg(){function t(n){return e.call(t.src,t.listener,n)}const e=tg;return t}function su(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)su(t,e[r],n,s,i);return null}return n=zo(n),t&&t[Os]?t.O(e,n,Ns(s)?!!s.capture:!!s,i):nu(t,e,n,!0,s,i)}function iu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)iu(t,e[r],n,s,i);else s=Ns(s)?!!s.capture:!!s,n=zo(n),t&&t[Os]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ro(r,n,s,i),-1<n&&(qi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ko(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ro(e,n,s,i)),(n=-1<t?e[t]:null)&&Ho(n))}function Ho(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Os])io(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ru(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ko(e))?(io(n,t),n.h==0&&(n.src=null,e[qo]=null)):qi(t)}}}function ru(t){return t in xr?xr[t]:xr[t]="on"+t}function tg(t,e){if(t.ba)t=!0;else{e=new ys(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ho(t),t=n.call(s,e)}return t}function Ko(t){return t=t[qo],t instanceof Hi?t:null}var Fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(t){return typeof t=="function"?t:(t[Fr]||(t[Fr]=function(e){return t.handleEvent(e)}),t[Fr])}function Te(){Ht.call(this),this.i=new Hi(this),this.P=this,this.I=null}ke(Te,Ht);Te.prototype[Os]=!0;Te.prototype.removeEventListener=function(t,e,n,s){iu(this,t,e,n,s)};function Ie(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var i=e;e=new Le(s,t),eu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ii(o,s,!0,e)&&i}if(o=e.g=t,i=ii(o,s,!0,e)&&i,i=ii(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ii(o,s,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)qi(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ii(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&io(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Go=M.JSON.stringify;function ng(){var t=cu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sg{constructor(){this.h=this.g=null}add(e,n){const s=ou.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ou=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ig,t=>t.reset());class ig{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rg(t){M.setTimeout(()=>{throw t},0)}function au(t,e){oo||og(),ao||(oo(),ao=!0),cu.add(t,e)}var oo;function og(){var t=M.Promise.resolve(void 0);oo=function(){t.then(ag)}}var ao=!1,cu=new sg;function ag(){for(var t;t=ng();){try{t.h.call(t.g)}catch(n){rg(n)}var e=ou;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ao=!1}function Ki(t,e){Te.call(this),this.h=t||1,this.g=e||M,this.j=Re(this.lb,this),this.l=Date.now()}ke(Ki,Te);D=Ki.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ie(this,"tick"),this.ca&&(Wo(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){Ki.X.M.call(this),Wo(this),delete this.g};function Qo(t,e,n){if(typeof t=="function")n&&(t=Re(t,n));else if(t&&typeof t.handleEvent=="function")t=Re(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function lu(t){t.g=Qo(()=>{t.g=null,t.i&&(t.i=!1,lu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cg extends Ht{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lu(this)}M(){super.M(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(t){Ht.call(this),this.h=t,this.g={}}ke(vs,Ht);var uc=[];function uu(t,e,n,s){Array.isArray(n)||(n&&(uc[0]=n.toString()),n=uc);for(var i=0;i<n.length;i++){var r=tu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function hu(t){$o(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ho(e)},t),t.g={}}vs.prototype.M=function(){vs.X.M.call(this),hu(this)};vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zi(){this.g=!0}zi.prototype.Aa=function(){this.g=!1};function lg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ug(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function In(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dg(t,n)+(s?" "+s:"")})}function hg(t,e){t.info(function(){return"TIMEOUT: "+e})}zi.prototype.info=function(){};function dg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Go(n)}catch{return e}}var mn={},hc=null;function Gi(){return hc=hc||new Te}mn.Pa="serverreachability";function du(t){Le.call(this,mn.Pa,t)}ke(du,Le);function ws(t){const e=Gi();Ie(e,new du(e))}mn.STAT_EVENT="statevent";function fu(t,e){Le.call(this,mn.STAT_EVENT,t),this.stat=e}ke(fu,Le);function qe(t){const e=Gi();Ie(e,new fu(e,t))}mn.Qa="timingevent";function pu(t,e){Le.call(this,mn.Qa,t),this.size=e}ke(pu,Le);function Rs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var Wi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},gu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Yo(){}Yo.prototype.h=null;function dc(t){return t.h||(t.h=t.i())}function mu(){}var Ls={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xo(){Le.call(this,"d")}ke(Xo,Le);function Jo(){Le.call(this,"c")}ke(Jo,Le);var co;function Qi(){}ke(Qi,Yo);Qi.prototype.g=function(){return new XMLHttpRequest};Qi.prototype.i=function(){return{}};co=new Qi;function Ms(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new vs(this),this.O=fg,t=no?125:void 0,this.T=new Ki(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new yu}function yu(){this.i=null,this.g="",this.h=!1}var fg=45e3,lo={},Ci={};D=Ms.prototype;D.setTimeout=function(t){this.O=t};function uo(t,e,n){t.K=1,t.v=Xi(It(e)),t.s=n,t.P=!0,vu(t,null)}function vu(t,e){t.F=Date.now(),xs(t),t.A=It(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Iu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new yu,t.g=Gu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new cg(Re(t.La,t,t.g),t.N)),uu(t.S,t.g,"readystatechange",t.ib),e=t.H?Zl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ws(),lg(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&_t(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=_t(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||no||this.g&&(this.h.h||this.g.fa()||mc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ws(3):ws(2)),Yi(this);var n=this.g.aa();this.Y=n;t:if(wu(this)){var s=mc(this.g);t="";var i=s.length,r=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),as(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ug(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_i(a)){var l=a;break t}}l=null}if(n=l)In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ho(this,n);else{this.i=!1,this.o=3,qe(12),Zt(this),as(this);break e}}this.P?(bu(this,u,o),no&&this.i&&u==3&&(uu(this.S,this.T,"tick",this.hb),this.T.start())):(In(this.j,this.m,o,null),ho(this,o)),u==4&&Zt(this),this.i&&!this.I&&(u==4?qu(this.l,this):(this.i=!1,xs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qe(12)):(this.o=0,qe(13)),Zt(this),as(this)}}}catch{}finally{}};function wu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function bu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=pg(t,n),i==Ci){e==4&&(t.o=4,qe(14),s=!1),In(t.j,t.m,null,"[Incomplete Response]");break}else if(i==lo){t.o=4,qe(15),In(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else In(t.j,t.m,i,null),ho(t,i);wu(t)&&i!=Ci&&i!=lo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ra(e),e.K=!0,qe(11))):(In(t.j,t.m,n,"[Invalid Chunked Response]"),Zt(t),as(t))}D.hb=function(){if(this.g){var t=_t(this.g),e=this.g.fa();this.C<e.length&&(Yi(this),bu(this,t,e),this.i&&t!=4&&xs(this))}};function pg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ci:(n=Number(e.substring(n,s)),isNaN(n)?lo:(s+=1,s+n>e.length?Ci:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,Zt(this)};function xs(t){t.V=Date.now()+t.O,Eu(t,t.O)}function Eu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rs(Re(t.gb,t),e)}function Yi(t){t.B&&(M.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(hg(this.j,this.A),this.K!=2&&(ws(),qe(17)),Zt(this),this.o=2,as(this)):Eu(this,this.V-t)};function as(t){t.l.G==0||t.I||qu(t.l,t)}function Zt(t){Yi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wo(t.T),hu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ho(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fo(n.h,t))){if(!t.J&&fo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ai(n),er(n);else break e;ia(n),qe(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Rs(Re(n.cb,n),6e3));if(1>=Du(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else en(n,11)}else if((t.J||n.g==t)&&Ai(n),!_i(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zo(r,r.h),r.h=null))}if(s.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,re(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=zu(s,s.H?s.ka:null,s.V),o.J){Pu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Yi(a),xs(a)),s.g=o}else ju(s);0<n.i.length&&tr(n)}else l[0]!="stop"&&l[0]!="close"||en(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?en(n,7):sa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ws(4)}catch{}}function gg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ji(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function mg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ji(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function _u(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ji(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mg(t),s=gg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nn){this.h=e!==void 0?e:t.h,Si(this,t.j),this.s=t.s,this.g=t.g,Ii(this,t.m),this.l=t.l,e=t.i;var n=new bs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fc(this,n),this.o=t.o}else t&&(n=String(t).match(Tu))?(this.h=!!e,Si(this,n[1]||"",!0),this.s=ns(n[2]||""),this.g=ns(n[3]||"",!0),Ii(this,n[4]),this.l=ns(n[5]||"",!0),fc(this,n[6]||"",!0),this.o=ns(n[7]||"")):(this.h=!!e,this.i=new bs(null,this.h))}nn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ss(e,pc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ss(e,pc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ss(n,n.charAt(0)=="/"?bg:wg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ss(n,_g)),t.join("")};function It(t){return new nn(t)}function Si(t,e,n){t.j=n?ns(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ii(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fc(t,e,n){e instanceof bs?(t.i=e,Tg(t.i,t.h)):(n||(e=ss(e,Eg)),t.i=new bs(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Xi(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ns(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ss(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pc=/[#\/\?@]/g,wg=/[#\?:]/g,bg=/[#\?]/g,Eg=/[#\?@]/g,_g=/#/g;function bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kt(t){t.g||(t.g=new Map,t.h=0,t.i&&yg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=bs.prototype;D.add=function(t,e){Kt(this),this.i=null,t=Kn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cu(t,e){Kt(t),e=Kn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Su(t,e){return Kt(t),e=Kn(t,e),t.g.has(e)}D.forEach=function(t,e){Kt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.oa=function(){Kt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.W=function(t){Kt(this);let e=[];if(typeof t=="string")Su(this,t)&&(e=e.concat(this.g.get(Kn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Kt(this),this.i=null,t=Kn(this,t),Su(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Iu(t,e,n){Cu(t,e),0<n.length&&(t.i=null,t.g.set(Kn(t,e),Uo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Kn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Tg(t,e){e&&!t.j&&(Kt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Cu(this,s),Iu(this,i,n))},t)),t.j=e}var Cg=class{constructor(e,n){this.h=e,this.g=n}};function Au(t){this.l=t||Sg,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ga&&M.g.Ga()&&M.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sg=10;function ku(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Du(t){return t.h?1:t.g?t.g.size:0}function fo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zo(t,e){t.g?t.g.add(e):t.h=e}function Pu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Au.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Uo(t.i)}function ea(){}ea.prototype.stringify=function(t){return M.JSON.stringify(t,void 0)};ea.prototype.parse=function(t){return M.JSON.parse(t,void 0)};function Ig(){this.g=new ea}function Ag(t,e,n){const s=n||"";try{_u(t,function(i,r){let o=i;Ns(i)&&(o=Go(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function kg(t,e){const n=new zi;if(M.Image){const s=new Image;s.onload=si(ri,n,s,"TestLoadImage: loaded",!0,e),s.onerror=si(ri,n,s,"TestLoadImage: error",!1,e),s.onabort=si(ri,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=si(ri,n,s,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ri(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Fs(t){this.l=t.ac||null,this.j=t.jb||!1}ke(Fs,Yo);Fs.prototype.g=function(){return new Ji(this.l,this.j)};Fs.prototype.i=function(t){return function(){return t}}({});function Ji(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ta,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(Ji,Te);var ta=0;D=Ji.prototype;D.open=function(t,e){if(this.readyState!=ta)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Es(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||M).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=ta};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ou(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ou(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bs(this):Es(this),this.readyState==3&&Ou(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Bs(this))};D.Ua=function(t){this.g&&(this.response=t,Bs(this))};D.ga=function(){this.g&&Bs(this)};function Bs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Es(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Es(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Dg=M.JSON.parse;function ae(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ru,this.K=this.L=!1}ke(ae,Te);var Ru="",Pg=/^https?$/i,Ng=["POST","PUT"];D=ae.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():co.g(),this.C=this.u?dc(this.u):dc(co),this.g.onreadystatechange=Re(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){gc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=Ql(Ng,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xu(this),0<this.B&&((this.K=Og(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Re(this.qa,this)):this.A=Qo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){gc(this,r)}};function Og(t){return xn&&Qp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Vo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))};function gc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Lu(t),Zi(t)}function Lu(t){t.D||(t.D=!0,Ie(t,"complete"),Ie(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ie(this,"complete"),Ie(this,"abort"),Zi(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zi(this,!0)),ae.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Mu(this):this.fb())};D.fb=function(){Mu(this)};function Mu(t){if(t.h&&typeof Vo<"u"&&(!t.C[1]||_t(t)!=4||t.aa()!=2)){if(t.v&&_t(t)==4)Qo(t.Ha,0,t);else if(Ie(t,"readystatechange"),_t(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Tu)[1]||null;if(!i&&M.self&&M.self.location){var r=M.self.location.protocol;i=r.substr(0,r.length-1)}s=!Pg.test(i?i.toLowerCase():"")}n=s}if(n)Ie(t,"complete"),Ie(t,"success");else{t.m=6;try{var o=2<_t(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Lu(t)}}finally{Zi(t)}}}}function Zi(t,e){if(t.g){xu(t);const n=t.g,s=t.C[0]?Ei:null;t.g=null,t.C=null,e||Ie(t,"ready");try{n.onreadystatechange=s}catch{}}}function xu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}function _t(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Dg(e)}};function mc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ru:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fu(t){let e="";return $o(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function na(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Fu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bu(t){this.Ca=0,this.i=[],this.j=new zi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ts("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ts("baseRetryDelayMs",5e3,t),this.bb=ts("retryDelaySeedMs",1e4,t),this.$a=ts("forwardChannelMaxRetries",2,t),this.ta=ts("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Au(t&&t.concurrentRequestLimit),this.Fa=new Ig,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=Bu.prototype;D.ma=8;D.G=1;function sa(t){if(Vu(t),t.G==3){var e=t.U++,n=It(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),Vs(t,n),e=new Ms(t,t.j,e,void 0),e.K=2,e.v=Xi(It(n)),n=!1,M.navigator&&M.navigator.sendBeacon&&(n=M.navigator.sendBeacon(e.v.toString(),"")),!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gu(e.l,null),e.g.da(e.v)),e.F=Date.now(),xs(e)}Ku(t)}function er(t){t.g&&(ra(t),t.g.cancel(),t.g=null)}function Vu(t){er(t),t.u&&(M.clearTimeout(t.u),t.u=null),Ai(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function tr(t){ku(t.h)||t.m||(t.m=!0,au(t.Ja,t),t.C=0)}function Rg(t,e){return Du(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Rs(Re(t.Ja,t,e),Hu(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ms(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Zl(r),eu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Uu(this,i,e),n=It(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),Vs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Fu(r)))+"&"+e:this.o&&na(n,this.o,r)),Zo(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,uo(i,n,null)):uo(i,n,e),this.G=2}}else this.G==3&&(t?yc(this,t):this.i.length==0||ku(this.h)||yc(this))};function yc(t,e){var n;e?n=e.m:n=t.U++;const s=It(t.F);re(s,"SID",t.I),re(s,"RID",n),re(s,"AID",t.T),Vs(t,s),t.o&&t.s&&na(s,t.o,t.s),n=new Ms(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Uu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Zo(t.h,n),uo(n,s,e)}function Vs(t,e){t.ia&&$o(t.ia,function(n,s){re(e,s,n)}),t.l&&_u({},function(n,s){re(e,s,n)})}function Uu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Re(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{Ag(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function ju(t){t.g||t.u||(t.Z=1,au(t.Ia,t),t.A=0)}function ia(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Rs(Re(t.Ia,t),Hu(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,$u(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Rs(Re(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,qe(10),er(this),$u(this))};function ra(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function $u(t){t.g=new Ms(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=It(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),Vs(t,e),t.o&&t.s&&na(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Xi(It(e)),n.s=null,n.P=!0,vu(n,t)}D.cb=function(){this.v!=null&&(this.v=null,er(this),ia(this),qe(19))};function Ai(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function qu(t,e){var n=null;if(t.g==e){Ai(t),ra(t),t.g=null;var s=2}else if(fo(t.h,e))n=e.D,Pu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Gi(),Ie(s,new pu(s,n)),tr(t)}else ju(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Rg(t,e)||s==2&&ia(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:en(t,5);break;case 4:en(t,10);break;case 3:en(t,6);break;default:en(t,2)}}}function Hu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function en(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Re(t.kb,t);n||(n=new nn("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Si(n,"https"),Xi(n)),kg(n.toString(),s)}else qe(2);t.G=0,t.l&&t.l.va(e),Ku(t),Vu(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Ku(t){if(t.G=0,t.la=[],t.l){const e=Nu(t.h);(e.length!=0||t.i.length!=0)&&(oc(t.la,e),oc(t.la,t.i),t.h.i.length=0,Uo(t.i),t.i.length=0),t.l.ua()}}function zu(t,e,n){var s=n instanceof nn?It(n):new nn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ii(s,s.m);else{var i=M.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new nn(null,void 0);s&&Si(r,s),e&&(r.g=e),i&&Ii(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&re(s,n,e),re(s,"VER",t.ma),Vs(t,s),s}function Gu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ae(new Fs({jb:!0})):new ae(t.ra),e.Ka(t.H),e}function Wu(){}D=Wu.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function ki(){if(xn&&!(10<=Number(Yp)))throw Error("Environmental error: no available transport.")}ki.prototype.g=function(t,e){return new Je(t,e)};function Je(t,e){Te.call(this),this.g=new Bu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!_i(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_i(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zn(this)}ke(Je,Te);Je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;qe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=zu(t,null,t.V),tr(t)};Je.prototype.close=function(){sa(this.g)};Je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Go(t),t=n);e.i.push(new Cg(e.ab++,t)),e.G==3&&tr(e)};Je.prototype.M=function(){this.g.l=null,delete this.j,sa(this.g),delete this.g,Je.X.M.call(this)};function Qu(t){Xo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ke(Qu,Xo);function Yu(){Jo.call(this),this.status=1}ke(Yu,Jo);function zn(t){this.g=t}ke(zn,Wu);zn.prototype.xa=function(){Ie(this.g,"a")};zn.prototype.wa=function(t){Ie(this.g,new Qu(t))};zn.prototype.va=function(t){Ie(this.g,new Yu)};zn.prototype.ua=function(){Ie(this.g,"b")};ki.prototype.createWebChannel=ki.prototype.g;Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;Wi.NO_ERROR=0;Wi.TIMEOUT=8;Wi.HTTP_ERROR=6;gu.COMPLETE="complete";mu.EventType=Ls;Ls.OPEN="a";Ls.CLOSE="b";Ls.ERROR="c";Ls.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ae.prototype.listenOnce=ae.prototype.O;ae.prototype.getLastError=ae.prototype.Oa;ae.prototype.getLastErrorCode=ae.prototype.Ea;ae.prototype.getStatus=ae.prototype.aa;ae.prototype.getResponseJson=ae.prototype.Sa;ae.prototype.getResponseText=ae.prototype.fa;ae.prototype.send=ae.prototype.da;ae.prototype.setWithCredentials=ae.prototype.Ka;var Lg=function(){return new ki},Mg=function(){return Gi()},Br=Wi,xg=gu,Fg=mn,vc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Bg=Fs,oi=mu,Vg=ae;const wc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Ul("@firebase/firestore");function bc(){return ln.logLevel}function N(t,...e){if(ln.logLevel<=G.DEBUG){const n=e.map(oa);ln.debug(`Firestore (${Gn}): ${t}`,...n)}}function At(t,...e){if(ln.logLevel<=G.ERROR){const n=e.map(oa);ln.error(`Firestore (${Gn}): ${t}`,...n)}}function po(t,...e){if(ln.logLevel<=G.WARN){const n=e.map(oa);ln.warn(`Firestore (${Gn}): ${t}`,...n)}}function oa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function L(t="Unexpected state"){const e=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: `+t;throw At(e),new Error(e)}function te(t,e){t||L()}function F(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ug{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(De.UNAUTHENTICATED))}shutdown(){}}class jg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $g{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Lt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string"),new Xu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new De(e)}}class qg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=De.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(te(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Hg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new qg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.A=n.token,new Kg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Gg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Gg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function W(t,e){return t<e?-1:t>e?1:0}function Fn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new ye(0,0))}static max(){return new x(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){n===void 0?n=0:n>e.length&&L(),s===void 0?s=e.length-n:s>e.length-n&&L(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _s?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends _s{construct(e,n,s){return new ne(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new k(v.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const Wg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends _s{construct(e,n,s){return new Ne(e,n,s)}static isValidIdentifier(e){return Wg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new k(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new k(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new k(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ne.fromString(e))}static fromName(e){return new O(ne.fromString(e).popFirst(5))}static empty(){return new O(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ne(e.slice()))}}function Qg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new Bt(i,O.empty(),e)}function Yg(t){return new Bt(t.readTime,t.key,-1)}class Bt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Bt(x.min(),O.empty(),-1)}static max(){return new Bt(x.max(),O.empty(),-1)}}function Xg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
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
 */const Jg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==Jg)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,s)=>{n(e)})}static reject(e){return new _((n,s)=>{s(e)})}static waitFor(e){return new _((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=_.resolve(!1);for(const s of e)n=n.next(i=>i?_.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new _((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new _((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function js(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class aa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}aa.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ts{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ts&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){return t==null}function Di(t){return t===0&&1/t==-1/0}function tm(t){return typeof t=="number"&&Number.isInteger(t)&&!Di(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class nm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new nm("Invalid base64 string: "+i):i}}(e);return new Me(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Me(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const sm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(t){if(te(!!t),typeof t=="string"){let e=0;const n=sm.exec(t);if(te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bn(t){return typeof t=="string"?Me.fromBase64String(t):Me.fromUint8Array(t)}/**
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
 */function eh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function th(t){const e=t.mapValue.fields.__previous_value__;return eh(e)?th(e):e}function Cs(t){const e=Vt(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */const ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eh(t)?4:im(t)?9007199254740991:10:L()}function mt(t,e){if(t===e)return!0;const n=un(t);if(n!==un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cs(t).isEqual(Cs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Vt(s.timestampValue),o=Vt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Bn(s.bytesValue).isEqual(Bn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=de(s.doubleValue),o=de(i.doubleValue);return r===o?Di(r)===Di(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Fn(t.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ec(r)!==Ec(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!mt(r[a],o[a])))return!1;return!0}(t,e);default:return L()}}function Ss(t,e){return(t.values||[]).find(n=>mt(n,e))!==void 0}function Vn(t,e){if(t===e)return 0;const n=un(t),s=un(e);if(n!==s)return W(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=de(i.integerValue||i.doubleValue),a=de(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _c(t.timestampValue,e.timestampValue);case 4:return _c(Cs(t),Cs(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Bn(i),a=Bn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=W(o[c],a[c]);if(l!==0)return l}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=W(de(i.latitude),de(r.latitude));return o!==0?o:W(de(i.longitude),de(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Vn(o[c],a[c]);if(l)return l}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ai.mapValue&&r===ai.mapValue)return 0;if(i===ai.mapValue)return 1;if(r===ai.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=W(a[u],l[u]);if(h!==0)return h;const d=Vn(o[a[u]],c[l[u]]);if(d!==0)return d}return W(a.length,l.length)}(t.mapValue,e.mapValue);default:throw L()}}function _c(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=Vt(t),s=Vt(e),i=W(n.seconds,s.seconds);return i!==0?i:W(n.nanos,s.nanos)}function Un(t){return go(t)}function go(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Vt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=go(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${go(s.fields[a])}`;return r+"}"}(t.mapValue):L();var e,n}function Tc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mo(t){return!!t&&"integerValue"in t}function ca(t){return!!t&&"arrayValue"in t}function Cc(t){return!!t&&"nullValue"in t}function Sc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function di(t){return!!t&&"mapValue"in t}function cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=cs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function im(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pi{constructor(e,n){this.position=e,this.inclusive=n}}function Ic(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=Vn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ac(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class nh{}class fe extends nh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new om(e,n,s):n==="array-contains"?new lm(e,s):n==="in"?new um(e,s):n==="not-in"?new hm(e,s):n==="array-contains-any"?new dm(e,s):new fe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new am(e,s):new cm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vn(n,this.value)):n!==null&&un(this.value)===un(n)&&this.matchesComparison(Vn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class at extends nh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new at(e,n)}matches(e){return sh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function sh(t){return t.op==="and"}function ih(t){return rm(t)&&sh(t)}function rm(t){for(const e of t.filters)if(e instanceof at)return!1;return!0}function yo(t){if(t instanceof fe)return t.field.canonicalString()+t.op.toString()+Un(t.value);if(ih(t))return t.filters.map(e=>yo(e)).join(",");{const e=t.filters.map(n=>yo(n)).join(",");return`${t.op}(${e})`}}function rh(t,e){return t instanceof fe?function(n,s){return s instanceof fe&&n.op===s.op&&n.field.isEqual(s.field)&&mt(n.value,s.value)}(t,e):t instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&rh(r,s.filters[o]),!0):!1}(t,e):void L()}function oh(t){return t instanceof fe?function(e){return`${e.field.canonicalString()} ${e.op} ${Un(e.value)}`}(t):t instanceof at?function(e){return e.op.toString()+" {"+e.getFilters().map(oh).join(" ,")+"}"}(t):"Filter"}class om extends fe{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class am extends fe{constructor(e,n){super(e,"in",n),this.keys=ah("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cm extends fe{constructor(e,n){super(e,"not-in",n),this.keys=ah("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ah(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class lm extends fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ca(n)&&Ss(n.arrayValue,this.value)}}class um extends fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ss(this.value.arrayValue,n)}}class hm extends fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ss(this.value.arrayValue,n)}}class dm extends fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ca(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ss(this.value.arrayValue,s))}}/**
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
 */class kn{constructor(e,n="asc"){this.field=e,this.dir=n}}function fm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ci(this.root,e,this.comparator,!0)}}class ci{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Se.RED,this.left=i??Se.EMPTY,this.right=r??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Se(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kc(this.data.getIterator())}getIteratorFrom(e){return new kc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class kc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ye{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Ye([])}unionWith(e){let n=new ve(Ne.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ye(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!di(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cs(n)}setAll(e){let n=Ne.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=cs(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());di(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];di(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){yn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new We(cs(this.value))}}function ch(t){const e=[];return yn(t.fields,(n,s)=>{const i=new Ne([n]);if(di(s)){const r=ch(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,x.min(),x.min(),x.min(),We.empty(),0)}static newFoundDocument(e,n,s,i){return new Pe(e,1,n,x.min(),s,i,0)}static newNoDocument(e,n){return new Pe(e,2,n,x.min(),x.min(),We.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,x.min(),x.min(),We.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Dc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new pm(t,e,n,s,i,r,o)}function la(t){const e=F(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>yo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),nr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Un(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Un(s)).join(",")),e._t=n}return e._t}function ua(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ac(t.startAt,e.startAt)&&Ac(t.endAt,e.endAt)}function vo(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function gm(t,e,n,s,i,r,o,a){return new Wn(t,e,n,s,i,r,o,a)}function ha(t){return new Wn(t)}function Pc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function da(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sr(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function lh(t){return t.collectionGroup!==null}function Dn(t){const e=F(t);if(e.wt===null){e.wt=[];const n=sr(e),s=da(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new kn(n)),e.wt.push(new kn(Ne.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new kn(Ne.keyField(),r))}}}return e.wt}function kt(t){const e=F(t);if(!e.gt)if(e.limitType==="F")e.gt=Dc(e.path,e.collectionGroup,Dn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Dn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new kn(r.field,o))}const s=e.endAt?new Pi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Pi(e.startAt.position,e.startAt.inclusive):null;e.gt=Dc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function wo(t,e){e.getFirstInequalityField(),sr(t);const n=t.filters.concat([e]);return new Wn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bo(t,e,n){return new Wn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ir(t,e){return ua(kt(t),kt(e))&&t.limitType===e.limitType}function uh(t){return`${la(kt(t))}|lt:${t.limitType}`}function Eo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>oh(s)).join(", ")}]`),nr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Un(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Un(s)).join(",")),`Target(${n})`}(kt(t))}; limitType=${t.limitType})`}function rr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Dn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ic(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Dn(n),s)||n.endAt&&!function(i,r,o){const a=Ic(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Dn(n),s))}(t,e)}function mm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hh(t){return(e,n)=>{let s=!1;for(const i of Dn(t)){const r=ym(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ym(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Vn(a,c):L()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return L()}}/**
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
 */function dh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function fh(t){return{integerValue:""+t}}function vm(t,e){return tm(e)?fh(e):dh(t,e)}/**
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
 */class or{constructor(){this._=void 0}}function wm(t,e,n){return t instanceof Ni?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Is?gh(t,e):t instanceof As?mh(t,e):function(s,i){const r=ph(s,i),o=Nc(r)+Nc(s.It);return mo(r)&&mo(s.It)?fh(o):dh(s.Tt,o)}(t,e)}function bm(t,e,n){return t instanceof Is?gh(t,e):t instanceof As?mh(t,e):n}function ph(t,e){return t instanceof Oi?mo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ni extends or{}class Is extends or{constructor(e){super(),this.elements=e}}function gh(t,e){const n=yh(e);for(const s of t.elements)n.some(i=>mt(i,s))||n.push(s);return{arrayValue:{values:n}}}class As extends or{constructor(e){super(),this.elements=e}}function mh(t,e){let n=yh(e);for(const s of t.elements)n=n.filter(i=>!mt(i,s));return{arrayValue:{values:n}}}class Oi extends or{constructor(e,n){super(),this.Tt=e,this.It=n}}function Nc(t){return de(t.integerValue||t.doubleValue)}function yh(t){return ca(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Em(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Is&&s instanceof Is||n instanceof As&&s instanceof As?Fn(n.elements,s.elements,mt):n instanceof Oi&&s instanceof Oi?mt(n.It,s.It):n instanceof Ni&&s instanceof Ni}(t.transform,e.transform)}class _m{constructor(e,n){this.version=e,this.transformResults=n}}class tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ar{}function vh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fa(t.key,tt.none()):new $s(t.key,t.data,tt.none());{const n=t.data,s=We.empty();let i=new ve(Ne.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new zt(t.key,s,new Ye(i.toArray()),tt.none())}}function Tm(t,e,n){t instanceof $s?function(s,i,r){const o=s.value.clone(),a=Rc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zt?function(s,i,r){if(!fi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Rc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(wh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ls(t,e,n,s){return t instanceof $s?function(i,r,o,a){if(!fi(i.precondition,r))return o;const c=i.value.clone(),l=Lc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof zt?function(i,r,o,a){if(!fi(i.precondition,r))return o;const c=Lc(i.fieldTransforms,a,r),l=r.data;return l.setAll(wh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return fi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Cm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ph(s.transform,i||null);r!=null&&(n===null&&(n=We.empty()),n.set(s.field,r))}return n||null}function Oc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Fn(n,s,(i,r)=>Em(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $s extends ar{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zt extends ar{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function wh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Rc(t,e,n){const s=new Map;te(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,bm(o,a,n[i]))}return s}function Lc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,wm(r,o,e))}return s}class fa extends ar{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sm extends ar{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,H;function Am(t){switch(t){default:return L();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function bh(t){if(t===void 0)return At("GRPC error has no .code"),v.UNKNOWN;switch(t){case he.OK:return v.OK;case he.CANCELLED:return v.CANCELLED;case he.UNKNOWN:return v.UNKNOWN;case he.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case he.INTERNAL:return v.INTERNAL;case he.UNAVAILABLE:return v.UNAVAILABLE;case he.UNAUTHENTICATED:return v.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case he.NOT_FOUND:return v.NOT_FOUND;case he.ALREADY_EXISTS:return v.ALREADY_EXISTS;case he.PERMISSION_DENIED:return v.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case he.ABORTED:return v.ABORTED;case he.OUT_OF_RANGE:return v.OUT_OF_RANGE;case he.UNIMPLEMENTED:return v.UNIMPLEMENTED;case he.DATA_LOSS:return v.DATA_LOSS;default:return L()}}(H=he||(he={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Zu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new we(O.comparator);function Dt(){return km}const Eh=new we(O.comparator);function is(...t){let e=Eh;for(const n of t)e=e.insert(n.key,n);return e}function _h(t){let e=Eh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function tn(){return us()}function Th(){return us()}function us(){return new Qn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Dm=new we(O.comparator),Pm=new ve(O.comparator);function $(...t){let e=Pm;for(const n of t)e=e.add(n);return e}const Nm=new ve(W);function Ch(){return Nm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,qs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new cr(x.min(),i,Ch(),Dt(),$())}}class qs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new qs(s,n,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Sh{constructor(e,n){this.targetId=e,this.Rt=n}}class Ih{constructor(e,n,s=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Mc{constructor(){this.bt=0,this.vt=Fc(),this.Pt=Me.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=$(),n=$(),s=$();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:L()}}),new qs(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Fc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Om{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Dt(),this.Kt=xc(),this.Gt=new ve(W)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(vo(r))if(s===0){const o=new O(r.path);this.zt(n,o,Pe.newNoDocument(o,x.min()))}else te(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&vo(a.target)){const c=new O(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Pe.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=$();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new cr(e,n,this.Gt,this.Ut,s);return this.Ut=Dt(),this.Kt=xc(),this.Gt=new ve(W),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Mc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ve(W),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Mc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function xc(){return new we(O.comparator)}function Fc(){return new we(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Lm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Mm=(()=>({and:"AND",or:"OR"}))();class xm{constructor(e,n){this.databaseId=e,this.yt=n}}function Ri(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ah(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Fm(t,e){return Ri(t,e.toTimestamp())}function gt(t){return te(!!t),x.fromTimestamp(function(e){const n=Vt(e);return new ye(n.seconds,n.nanos)}(t))}function pa(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kh(t){const e=ne.fromString(t);return te(Oh(e)),e}function _o(t,e){return pa(t.databaseId,e.path)}function Vr(t,e){const n=kh(e);if(n.get(1)!==t.databaseId.projectId)throw new k(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Dh(n))}function To(t,e){return pa(t.databaseId,e)}function Bm(t){const e=kh(t);return e.length===4?ne.emptyPath():Dh(e)}function Co(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Dh(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bc(t,e,n){return{name:_o(t,e),fields:n.value.mapValue.fields}}function Vm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(te(l===void 0||typeof l=="string"),Me.fromBase64String(l||"")):(te(l===void 0||l instanceof Uint8Array),Me.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?v.UNKNOWN:bh(c.code);return new k(l,c.message||"")}(o);n=new Ih(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Vr(t,s.document.name),r=gt(s.document.updateTime),o=s.document.createTime?gt(s.document.createTime):x.min(),a=new We({mapValue:{fields:s.document.fields}}),c=Pe.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new pi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Vr(t,s.document),r=s.readTime?gt(s.readTime):x.min(),o=Pe.newNoDocument(i,r),a=s.removedTargetIds||[];n=new pi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Vr(t,s.document),r=s.removedTargetIds||[];n=new pi([],r,i,null)}else{if(!("filter"in e))return L();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Im(i),o=s.targetId;n=new Sh(o,r)}}return n}function Um(t,e){let n;if(e instanceof $s)n={update:Bc(t,e.key,e.value)};else if(e instanceof fa)n={delete:_o(t,e.key)};else if(e instanceof zt)n={update:Bc(t,e.key,e.data),updateMask:Qm(e.fieldMask)};else{if(!(e instanceof Sm))return L();n={verify:_o(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ni)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Is)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof As)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Oi)return{fieldPath:r.field.canonicalString(),increment:o.It};throw L()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Fm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L()}(t,e.precondition)),n}function jm(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?gt(s.updateTime):gt(i);return r.isEqual(x.min())&&(r=gt(i)),new _m(r,s.transformResults||[])}(n,e))):[]}function $m(t,e){return{documents:[To(t,e.path)]}}function qm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=To(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=To(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Nh(at.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Cn(u.field),direction:zm(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||nr(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Hm(t){let e=Bm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){te(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Ph(u);return h instanceof at&&ih(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new kn(Sn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,nr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Pi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Pi(d,h)}(n.endAt)),gm(e,i,o,r,a,"F",c,l)}function Km(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return L()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ph(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Sn(e.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Sn(e.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sn(e.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Sn(e.unaryFilter.field);return fe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(e){return fe.create(Sn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return at.create(e.compositeFilter.filters.map(n=>Ph(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(t):L()}function zm(t){return Rm[t]}function Gm(t){return Lm[t]}function Wm(t){return Mm[t]}function Cn(t){return{fieldPath:t.canonicalString()}}function Sn(t){return Ne.fromServerFormat(t.fieldPath)}function Nh(t){return t instanceof fe?function(e){if(e.op==="=="){if(Sc(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NAN"}};if(Cc(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sc(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NAN"}};if(Cc(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(e.field),op:Gm(e.op),value:e.value}}}(t):t instanceof at?function(e){const n=e.getFilters().map(s=>Nh(s));return n.length===1?n[0]:{compositeFilter:{op:Wm(e.op),filters:n}}}(t):L()}function Qm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Oh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Tm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Th();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=vh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$())}isEqual(e){return this.batchId===e.batchId&&Fn(this.mutations,e.mutations,(n,s)=>Oc(n,s))&&Fn(this.baseMutations,e.baseMutations,(n,s)=>Oc(n,s))}}class ga{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){te(e.mutations.length===s.length);let i=Dm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ga(e,n,s,i)}}/**
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
 */class Xm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sn{constructor(e,n,s,i,r=x.min(),o=x.min(),a=Me.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.oe=e}}function Zm(t){const e=Hm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bo(e,e.limit,"L"):e}/**
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
 */class ey{constructor(){this.Ze=new ty}addToCollectionParentIndex(e,n){return this.Ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Bt.min())}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class ty{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ve(ne.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ve(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new jn(0)}static Sn(){return new jn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.changes=new Qn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sy{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ls(s.mutation,i,Ye.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,$()).next(()=>s))}getLocalViewOfDocuments(e,n,s=$()){const i=tn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=is();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=tn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,$()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Dt();const o=us(),a=us();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof zt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ls(u.mutation,l,u.mutation.getFieldMask(),ye.now())):o.set(l.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new sy(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=us();let i=new we((o,a)=>o-a),r=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ye.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||$()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Th();u.forEach(d=>{if(!r.has(d)){const p=vh(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):_.resolve(tn());let a=-1,c=r;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,$())).next(u=>({batchId:a,changes:_h(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let i=is();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=is();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const c=function(l,u){return new Wn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Pe.newInvalidDocument(l)))});let o=is();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ls(l.mutation,c,Ye.empty(),ye.now()),rr(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class ry{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return _.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:gt(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Zm(s.bundledQuery),readTime:gt(s.readTime)}}(n)),_.resolve()}}/**
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
 */class oy{constructor(){this.overlays=new we(O.comparator),this.ss=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const s=tn();return _.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const i=tn(),r=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=tn(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=tn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return _.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Xm(n,s));let r=this.ss.get(n);r===void 0&&(r=$(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.rs=new ve(be.os),this.us=new ve(be.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new be(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new be(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new O(new ne([])),s=new be(n,e),i=new be(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new O(new ne([])),s=new be(n,e),i=new be(n,e+1);let r=$();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new be(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return O.comparator(e.key,n.key)||W(e.gs,n.gs)}static cs(e,n){return W(e.gs,n.gs)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ve(be.os)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ym(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new be(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return _.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),_.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(W);return n.forEach(i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),_.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;O.isDocumentKey(r)||(r=r.child(""));const o=new be(new O(r),0);let a=new ve(W);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),_.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){te(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return _.forEach(n.mutations,i=>{const r=new be(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new be(n,0),i=this.ps.firstAfterOrEqual(s);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.Rs=e,this.docs=new we(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let s=Dt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Pe.newInvalidDocument(i))}),_.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Dt();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Xg(Yg(u),s)<=0||(i.has(u.key)||rr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return _.resolve(r)}getAllFromCollectionGroup(e,n,s,i){L()}bs(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ly(this)}getSize(e){return _.resolve(this.size)}}class ly extends ny{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.persistence=e,this.vs=new Qn(n=>la(n),ua),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ma,this.targetCount=0,this.Ss=jn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),_.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new jn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.xn(n),_.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(r).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new aa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new uy(this),this.indexManager=new ey,this.remoteDocumentCache=function(s){return new cy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Jm(n),this.Os=new ry(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new ay(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){N("MemoryPersistence","Starting transaction:",e);const i=new dy(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return _.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class dy extends Zg{constructor(e){super(),this.currentSequenceNumber=e}}class ya{constructor(e){this.persistence=e,this.Bs=new ma,this.Ls=null}static qs(e){return new ya(e)}get Us(){if(this.Ls)return this.Ls;throw L()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),_.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Us,s=>{const i=O.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,x.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return _.or([()=>_.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=$(),i=$();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new va(e,n.fromCache,s,i)}}/**
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
 */class fy{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Pc(n))return _.resolve(null);let s=kt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bo(n,null,"F"),s=kt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=$(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,bo(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return Pc(n)||i.isEqual(x.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(bc()<=G.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Eo(n)),this.qi(e,o,n,Qg(i,-1)))})}Bi(e,n){let s=new ve(hh(e));return n.forEach((i,r)=>{rr(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return bc()<=G.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Eo(n)),this.Oi.getDocumentsMatchingQuery(e,n,Bt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class py{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new we(W),this.Gi=new Qn(r=>la(r),ua),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iy(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function gy(t,e,n,s){return new py(t,e,n,s)}async function Rh(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=$();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function my(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=_.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const y=c.docVersions.get(p);te(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=$();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Lh(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function yy(t,e){const n=F(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Me.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,y,w){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=Dt(),l=$();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(vy(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(x.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return _.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function vy(t,e,n){let s=$(),i=$();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Dt();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function wy(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function by(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,_.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new sn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function So(t,e,n){const s=F(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!js(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Vc(t,e,n){const s=F(t);let i=x.min(),r=$();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=F(a),h=u.Gi.get(l);return h!==void 0?_.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:x.min(),n?r:$())).next(a=>(Ey(s,mm(e),a),{documents:a,Yi:r})))}function Ey(t,e,n){let s=t.Qi.get(e)||x.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Uc{constructor(){this.activeTargetIds=Ch()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _y{constructor(){this.Ur=new Uc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Uc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ty{Gr(e){}shutdown(){}}/**
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
 */class jc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Cy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);N("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(N("RestConnection","Received: ",c),c),c=>{throw po("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=Cy[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Vg;a.setWithCredentials(!0),a.listenOnce(xg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Br.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Br.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new k(v.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const u=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(y)>=0?y:v.UNKNOWN}(d.status);o(new k(p,d.message))}else o(new k(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new k(v.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Lg(),o=Mg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Bg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");N("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new Sy({Yr:m=>{h?N("Connection","Not sending because WebChannel is closed:",m):(u||(N("Connection","Opening WebChannel transport."),l.open(),u=!0),N("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),p=(m,y,w)=>{m.listen(y,A=>{try{w(A)}catch(E){setTimeout(()=>{throw E},0)}})};return p(l,oi.EventType.OPEN,()=>{h||N("Connection","WebChannel transport opened.")}),p(l,oi.EventType.CLOSE,()=>{h||(h=!0,N("Connection","WebChannel transport closed"),d.oo())}),p(l,oi.EventType.ERROR,m=>{h||(h=!0,po("Connection","WebChannel transport errored:",m),d.oo(new k(v.UNAVAILABLE,"The operation could not be completed")))}),p(l,oi.EventType.MESSAGE,m=>{var y;if(!h){const w=m.data[0];te(!!w);const A=w,E=A.error||((y=A[0])===null||y===void 0?void 0:y.error);if(E){N("Connection","WebChannel received error:",E);const P=E.status;let S=function(J){const j=he[J];if(j!==void 0)return bh(j)}(P),R=E.message;S===void 0&&(S=v.INTERNAL,R="Unknown error status: "+P+" with message "+E.message),h=!0,d.oo(new k(S,R)),l.close()}else N("Connection","WebChannel received:",w),d.uo(w)}}),p(o,Fg.STAT_EVENT,m=>{m.stat===vc.PROXY?N("Connection","Detected buffering proxy"):m.stat===vc.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Ur(){return typeof document<"u"?document:null}/**
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
 */function lr(t){return new xm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Mh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new k(v.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ay extends xh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Vm(this.Tt,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?gt(r.readTime):x.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Co(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=vo(a)?{documents:$m(i,a)}:{query:qm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ah(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Ri(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Km(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Co(this.Tt),n.removeTarget=e,this.qo(n)}}class ky extends xh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=jm(e.writeResults,e.commitTime),s=gt(e.commitTime);return this.listener.eu(s,n)}return te(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Co(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Um(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new k(v.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(v.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new k(v.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Py{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Ny{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{vn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=F(a);c.mu.add(4),await Hs(c),c.pu.set("Unknown"),c.mu.delete(4),await ur(c)}(this))})}),this.pu=new Py(s,i)}}async function ur(t){if(vn(t))for(const e of t.gu)await e(!0)}async function Hs(t){for(const e of t.gu)await e(!1)}function Fh(t,e){const n=F(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ea(n)?ba(n):Yn(n).Mo()&&wa(n,e))}function Bh(t,e){const n=F(t),s=Yn(n);n.wu.delete(e),s.Mo()&&Vh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():vn(n)&&n.pu.set("Unknown"))}function wa(t,e){t.Iu.Ft(e.targetId),Yn(t).Jo(e)}function Vh(t,e){t.Iu.Ft(e),Yn(t).Yo(e)}function ba(t){t.Iu=new Om({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Yn(t).start(),t.pu.au()}function Ea(t){return vn(t)&&!Yn(t).Oo()&&t.wu.size>0}function vn(t){return F(t).mu.size===0}function Uh(t){t.Iu=void 0}async function Oy(t){t.wu.forEach((e,n)=>{wa(t,e)})}async function Ry(t,e){Uh(t),Ea(t)?(t.pu.fu(e),ba(t)):t.pu.set("Unknown")}async function Ly(t,e,n){if(t.pu.set("Online"),e instanceof Ih&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Li(t,s)}else if(e instanceof pi?t.Iu.Qt(e):e instanceof Sh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(x.min()))try{const s=await Lh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Me.EMPTY_BYTE_STRING,c.snapshotVersion)),Vh(i,a);const l=new sn(c.target,a,1,c.sequenceNumber);wa(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){N("RemoteStore","Failed to raise snapshot:",s),await Li(t,s)}}async function Li(t,e,n){if(!js(e))throw e;t.mu.add(1),await Hs(t),t.pu.set("Offline"),n||(n=()=>Lh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ur(t)})}function jh(t,e){return e().catch(n=>Li(t,n,e))}async function hr(t){const e=F(t),n=Ut(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;My(e);)try{const i=await wy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,xy(e,i)}catch(i){await Li(e,i)}$h(e)&&qh(e)}function My(t){return vn(t)&&t._u.length<10}function xy(t,e){t._u.push(e);const n=Ut(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function $h(t){return vn(t)&&!Ut(t).Oo()&&t._u.length>0}function qh(t){Ut(t).start()}async function Fy(t){Ut(t).su()}async function By(t){const e=Ut(t);for(const n of t._u)e.tu(n.mutations)}async function Vy(t,e,n){const s=t._u.shift(),i=ga.from(s,e,n);await jh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hr(t)}async function Uy(t,e){e&&Ut(t).Xo&&await async function(n,s){if(i=s.code,Am(i)&&i!==v.ABORTED){const r=n._u.shift();Ut(n).$o(),await jh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await hr(n)}var i}(t,e),$h(t)&&qh(t)}async function $c(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const s=vn(n);n.mu.add(3),await Hs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ur(n)}async function jy(t,e){const n=F(t);e?(n.mu.delete(2),await ur(n)):e||(n.mu.add(2),await Hs(n),n.pu.set("Unknown"))}function Yn(t){return t.Tu||(t.Tu=function(e,n,s){const i=F(e);return i.ru(),new Ay(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Oy.bind(null,t),no:Ry.bind(null,t),Ho:Ly.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Ea(t)?ba(t):t.pu.set("Unknown")):(await t.Tu.stop(),Uh(t))})),t.Tu}function Ut(t){return t.Eu||(t.Eu=function(e,n,s){const i=F(e);return i.ru(),new ky(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Fy.bind(null,t),no:Uy.bind(null,t),nu:By.bind(null,t),eu:Vy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await hr(t)):(await t.Eu.stop(),t._u.length>0&&(N("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new _a(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(t,e){if(At("AsyncQueue",`${e}: ${t}`),js(t))return new k(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=is(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Pn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Pn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.Au=new we(O.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):L():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class $n{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $n(e,n,Pn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ir(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.bu=void 0,this.listeners=[]}}class qy{constructor(){this.queries=new Qn(e=>uh(e),ir),this.onlineState="Unknown",this.vu=new Set}}async function Hh(t,e){const n=F(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new $y),i)try{r.bu=await n.onListen(s)}catch(o){const a=Ta(o,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&Ca(n)}async function Kh(t,e){const n=F(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Hy(t,e){const n=F(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&Ca(n)}function Ky(t,e,n){const s=F(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ca(t){t.vu.forEach(e=>{e.next()})}class zh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new $n(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.key=e}}class Wh{constructor(e){this.key=e}}class zy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=$(),this.mutatedKeys=$(),this.ju=hh(e),this.zu=new Pn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new qc,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=rr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?m!==y&&(s.track({type:3,doc:p}),w=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),w=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),w=!0):d&&!p&&(s.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new $n(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new qc,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=$(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Wh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Gh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=$();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return $n.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Gy{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Wy{constructor(e){this.key=e,this.ic=!1}}class Qy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Qn(a=>uh(a),ir),this.uc=new Map,this.cc=new Set,this.ac=new we(O.comparator),this.hc=new Map,this.lc=new ma,this.fc={},this.dc=new Map,this._c=jn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Yy(t,e){const n=ov(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await by(n.localStore,kt(e));n.isPrimaryClient&&Fh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Xy(n,e,s,a==="current",o.resumeToken)}return i}async function Xy(t,e,n,s,i){t.mc=(h,d,p)=>async function(m,y,w,A){let E=y.view.Hu(w);E.Li&&(E=await Vc(m.localStore,y.query,!1).then(({documents:R})=>y.view.Hu(R,E)));const P=A&&A.targetChanges.get(y.targetId),S=y.view.applyChanges(E,m.isPrimaryClient,P);return Kc(m,y.targetId,S.tc),S.snapshot}(t,h,d,p);const r=await Vc(t.localStore,e,!0),o=new zy(e,r.Yi),a=o.Hu(r.documents),c=qs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Kc(t,n,l.tc);const u=new Gy(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function Jy(t,e){const n=F(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!ir(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await So(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Bh(n.remoteStore,s.targetId),Io(n,s.targetId)}).catch(Us)):(Io(n,s.targetId),await So(n.localStore,s.targetId,!0))}async function Zy(t,e,n){const s=av(t);try{const i=await function(r,o){const a=F(r),c=ye.now(),l=o.reduce((d,p)=>d.add(p.key),$());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Dt(),m=$();return a.ji.getEntries(d,l).next(y=>{p=y,p.forEach((w,A)=>{A.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{u=y;const w=[];for(const A of o){const E=Cm(A,u.get(A.key).overlayedDocument);E!=null&&w.push(new zt(A.key,E,ch(E.value.mapValue),tt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:_h(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new we(W)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ks(s,i.changes),await hr(s.remoteStore)}catch(i){const r=Ta(i,"Failed to persist write");n.reject(r)}}async function Qh(t,e){const n=F(t);try{const s=await yy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?te(o.ic):i.removedDocuments.size>0&&(te(o.ic),o.ic=!1))}),await Ks(n,s,e)}catch(s){await Us(s)}}function Hc(t,e,n){const s=F(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=F(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Ca(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ev(t,e,n){const s=F(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new we(O.comparator);o=o.insert(r,Pe.newNoDocument(r,x.min()));const a=$().add(r),c=new cr(x.min(),new Map,new ve(W),o,a);await Qh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),Sa(s)}else await So(s.localStore,e,!1).then(()=>Io(s,e,n)).catch(Us)}async function tv(t,e){const n=F(t),s=e.batch.batchId;try{const i=await my(n.localStore,e);Xh(n,s,null),Yh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ks(n,i)}catch(i){await Us(i)}}async function nv(t,e,n){const s=F(t);try{const i=await function(r,o){const a=F(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Xh(s,e,n),Yh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ks(s,i)}catch(i){await Us(i)}}function Yh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Xh(t,e,n){const s=F(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function Io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Jh(t,s)})}function Jh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Bh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Sa(t))}function Kc(t,e,n){for(const s of n)s instanceof Gh?(t.lc.addReference(s.key,e),sv(t,s)):s instanceof Wh?(N("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Jh(t,s.key)):L()}function sv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(N("SyncEngine","New document in limbo: "+n),t.cc.add(s),Sa(t))}function Sa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new O(ne.fromString(e)),s=t._c.next();t.hc.set(s,new Wy(n)),t.ac=t.ac.insert(n,s),Fh(t.remoteStore,new sn(kt(ha(n.path)),s,2,aa.at))}}async function Ks(t,e,n){const s=F(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=va.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=F(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,h=>_.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>_.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!js(u))throw u;N("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,r))}async function iv(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const s=await Rh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new k(v.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ks(n,s.Wi)}}function rv(t,e){const n=F(t),s=n.hc.get(e);if(s&&s.ic)return $().add(s.key);{let i=$();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function ov(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ev.bind(null,e),e.rc.Ho=Hy.bind(null,e.eventManager),e.rc.gc=Ky.bind(null,e.eventManager),e}function av(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nv.bind(null,e),e}class cv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=lr(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return gy(this.persistence,new fy,e.initialUser,this.Tt)}Tc(e){return new hy(ya.qs,this.Tt)}Ic(e){return new _y}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=iv.bind(null,this.syncEngine),await jy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qy}createDatastore(e){const n=lr(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Iy(i));var i;return function(r,o,a,c){return new Dy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Hc(this.syncEngine,a,0),o=jc.C()?new jc:new Ty,new Ny(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new Qy(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);N("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Hs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):At("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=De.UNAUTHENTICATED,this.clientId=Ju.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{N("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(N("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ta(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function hv(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Rh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function dv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fv(t);N("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>$c(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>$c(e.remoteStore,r)),t.onlineComponents=e}async function fv(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await hv(t,new cv)),t.offlineComponents}async function ed(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await dv(t,new lv)),t.onlineComponents}function pv(t){return ed(t).then(e=>e.syncEngine)}async function Ao(t){const e=await ed(t),n=e.eventManager;return n.onListen=Yy.bind(null,e.syncEngine),n.onUnlisten=Jy.bind(null,e.syncEngine),n}function gv(t,e,n={}){const s=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Zh({next:h=>{r.enqueueAndForget(()=>Kh(i,u)),h.fromCache&&a.source==="server"?c.reject(new k(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new zh(o,l,{includeMetadataChanges:!0,Ou:!0});return Hh(i,u)}(await Ao(t),t.asyncQueue,e,n,s)),s.promise}const zc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e,n){if(!n)throw new k(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mv(t,e,n,s){if(e===!0&&s===!0)throw new k(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gc(t){if(!O.isDocumentKey(t))throw new k(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wc(t){if(O.isDocumentKey(t))throw new k(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function nt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dr(t);throw new k(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Qc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new k(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class fr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ug;switch(n.type){case"gapi":const s=n.client;return new Hg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zc.get(e);n&&(N("ComponentProvider","Removing Datastore"),zc.delete(e),n.terminate())}(this),Promise.resolve()}}function yv(t,e,n,s={}){var i;const r=(t=nt(t,fr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&po("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=De.MOCK_USER;else{o=Bl(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new k(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new De(c)}t._authCredentials=new jg(new Xu(o,a))}}/**
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
 */class He{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class Gt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class Mt extends Gt{constructor(e,n,s){super(e,n,ha(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new O(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function ft(t,e,...n){if(t=ot(t),td("collection","path",e),t instanceof fr){const s=ne.fromString(e,...n);return Wc(s),new Mt(t,null,s)}{if(!(t instanceof He||t instanceof Mt))throw new k(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ne.fromString(e,...n));return Wc(s),new Mt(t.firestore,null,s)}}function Tt(t,e,...n){if(t=ot(t),arguments.length===1&&(e=Ju.R()),td("doc","path",e),t instanceof fr){const s=ne.fromString(e,...n);return Gc(s),new He(t,null,new O(s))}{if(!(t instanceof He||t instanceof Mt))throw new k(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ne.fromString(e,...n));return Gc(s),new He(t.firestore,t instanceof Mt?t.converter:null,new O(s))}}/**
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
 */class vv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Mh(this,"async_queue_retry"),this.Hc=()=>{const n=Ur();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Ur();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Ur();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Lt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!js(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=_a.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&L()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Yc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class jt extends fr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new vv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nd(this),this._firestoreClient.terminate()}}function wv(t,e){const n=typeof t=="object"?t:zl(),s=typeof t=="string"?t:e||"(default)",i=ql(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Fl("firestore");r&&yv(i,...r)}return i}function Ia(t){return t._firestoreClient||nd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nd(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new em(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new uv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn(Me.fromBase64String(e))}catch(n){throw new k(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qn(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Aa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=/^__.*__$/;class Ev{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new zt(e,this.data,this.fieldMask,n,this.fieldTransforms):new $s(e,this.data,n,this.fieldTransforms)}}class sd{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new zt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function id(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Da{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Da(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Mi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(id(this.ra)&&bv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class _v{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||lr(e)}wa(e,n,s,i=!1){return new Da({ra:e,methodName:n,_a:s,path:Ne.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function gr(t){const e=t._freezeSettings(),n=lr(t._databaseId);return new _v(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rd(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Pa("Data must be an object, but it was:",o,s);const a=od(s,o);let c,l;if(r.merge)c=new Ye(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ko(e,h,n);if(!o.contains(d))throw new k(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);cd(u,d)||u.push(d)}c=new Ye(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Ev(new We(a),c,l)}class mr extends Aa{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mr}}function Tv(t,e,n,s){const i=t.wa(1,e,n);Pa("Data must be an object, but it was:",i,s);const r=[],o=We.empty();yn(s,(c,l)=>{const u=Na(e,c,n);l=ot(l);const h=i.ha(u);if(l instanceof mr)r.push(u);else{const d=zs(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ye(r);return new sd(o,a,i.fieldTransforms)}function Cv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[ko(e,s,n)],c=[i];if(r.length%2!=0)throw new k(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ko(e,r[d])),c.push(r[d+1]);const l=[],u=We.empty();for(let d=a.length-1;d>=0;--d)if(!cd(l,a[d])){const p=a[d];let m=c[d];m=ot(m);const y=o.ha(p);if(m instanceof mr)l.push(p);else{const w=zs(m,y);w!=null&&(l.push(p),u.set(p,w))}}const h=new Ye(l);return new sd(u,h,o.fieldTransforms)}function Sv(t,e,n,s=!1){return zs(n,t.wa(s?4:3,e))}function zs(t,e){if(ad(t=ot(t)))return Pa("Unsupported field value:",e,t),od(t,e);if(t instanceof Aa)return function(n,s){if(!id(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=zs(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:Ri(s.Tt,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ri(s.Tt,i)}}if(n instanceof ka)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qn)return{bytesValue:Ah(s.Tt,n._byteString)};if(n instanceof He){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${dr(n)}`)}(t,e)}function od(t,e){const n={};return Zu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yn(t,(s,i)=>{const r=zs(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function ad(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof ka||t instanceof qn||t instanceof He||t instanceof Aa)}function Pa(t,e,n){if(!ad(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=dr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function ko(t,e,n){if((e=ot(e))instanceof pr)return e._internalPath;if(typeof e=="string")return Na(t,e);throw Mi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Iv=new RegExp("[~\\*/\\[\\]]");function Na(t,e,n){if(e.search(Iv)>=0)throw Mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pr(...e.split("."))._internalPath}catch{throw Mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new k(v.INVALID_ARGUMENT,a+t+c)}function cd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ld{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Av(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Av extends ld{data(){return super.data()}}function yr(t,e){return typeof e=="string"?Na(t,e):e instanceof pr?e._internalPath:e._delegate._internalPath}/**
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
 */function ud(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oa{}class hd extends Oa{}function hs(t,e,...n){let s=[];e instanceof Oa&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Ra).length,o=i.filter(a=>a instanceof vr).length;if(r>1||r>0&&o>0)throw new k(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class vr extends hd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new vr(e,n,s)}_apply(e){const n=this._parse(e);return dd(e._query,n),new Gt(e.firestore,e.converter,wo(e._query,n))}_parse(e){const n=gr(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new k(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Jc(u,l);const d=[];for(const p of u)d.push(Xc(a,i,p));h={arrayValue:{values:d}}}else h=Xc(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Jc(u,l),h=Sv(o,r,u,l==="in"||l==="not-in");return fe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Do(t,e,n){const s=e,i=yr("where",t);return vr._create(i,s,n)}class Ra extends Oa{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ra(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:at.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)dd(r,a),r=wo(r,a)}(e._query,n),new Gt(e.firestore,e.converter,wo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class La extends hd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new La(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new k(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new kn(i,r);return function(a,c){if(da(a)===null){const l=sr(a);l!==null&&fd(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Wn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function jr(t,e="asc"){const n=e,s=yr("orderBy",t);return La._create(s,n)}function Xc(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new k(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lh(e)&&n.indexOf("/")!==-1)throw new k(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ne.fromString(n));if(!O.isDocumentKey(s))throw new k(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Tc(t,new O(s))}if(n instanceof He)return Tc(t,n._key);throw new k(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dr(n)}.`)}function Jc(t,e){if(!Array.isArray(t)||t.length===0)throw new k(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dd(t,e){if(e.isInequality()){const s=sr(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new k(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=da(t);r!==null&&fd(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new k(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function fd(t,e,n){if(!n.isEqual(e))throw new k(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class kv{convertValue(e,n="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){const s={};return yn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new ka(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=th(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Cs(e));default:return null}}convertTimestamp(e){const n=Vt(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ne.fromString(e);te(Oh(s));const i=new Ts(s.get(1),s.get(3)),r=new O(s.popFirst(5));return i.isEqual(n)||At(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function pd(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gd extends ld{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(yr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class gi extends gd{data(e={}){return super.data(e)}}class md{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new rs(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new gi(this._firestore,this._userDataWriter,s.key,s,new rs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new gi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new rs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new gi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new rs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Dv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Dv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Ma extends kv{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function yd(t){t=nt(t,Gt);const e=nt(t.firestore,jt),n=Ia(e),s=new Ma(e);return ud(t._query),gv(n,t._query).then(i=>new md(e,s,t,i))}function $r(t,e,n){t=nt(t,He);const s=nt(t.firestore,jt),i=pd(t.converter,e,n);return wr(s,[rd(gr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tt.none())])}function xa(t,e,n,...s){t=nt(t,He);const i=nt(t.firestore,jt),r=gr(i);let o;return o=typeof(e=ot(e))=="string"||e instanceof pr?Cv(r,"updateDoc",t._key,e,n,s):Tv(r,"updateDoc",t._key,e),wr(i,[o.toMutation(t._key,tt.exists(!0))])}function Po(t){return wr(nt(t.firestore,jt),[new fa(t._key,tt.none())])}function vd(t,e){const n=nt(t.firestore,jt),s=Tt(t),i=pd(t.converter,e);return wr(n,[rd(gr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,tt.exists(!1))]).then(()=>s)}function qr(t,...e){var n,s,i;t=ot(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Yc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof He)l=nt(t.firestore,jt),u=ha(t._key.path),c={next:h=>{e[o]&&e[o](Pv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=nt(t,Gt);l=nt(h.firestore,jt),u=h._query;const d=new Ma(l);c={next:p=>{e[o]&&e[o](new md(l,d,h,p))},error:e[o+1],complete:e[o+2]},ud(t._query)}return function(h,d,p,m){const y=new Zh(m),w=new zh(d,y,p);return h.asyncQueue.enqueueAndForget(async()=>Hh(await Ao(h),w)),()=>{y.Pc(),h.asyncQueue.enqueueAndForget(async()=>Kh(await Ao(h),w))}}(Ia(l),u,a,c)}function wr(t,e){return function(n,s){const i=new Lt;return n.asyncQueue.enqueueAndForget(async()=>Zy(await pv(n),s,i)),i.promise}(Ia(t),e)}function Pv(t,e,n){const s=n.docs.get(e._key),i=new Ma(t);return new gd(t,i,e._key,s,new rs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Gn=n})(Hl),gs(new Mn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new jt(new $g(n.getProvider("auth-internal")),new zg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Rt(wc,"3.8.4",t),Rt(wc,"3.8.4","esm2017")})();var Nv="firebase",Ov="9.17.2";/**
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
 */Rt(Nv,Ov,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="firebasestorage.googleapis.com",Rv="storageBucket",Lv=2*60*1e3,Mv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends gn{constructor(e,n,s=0){super(Hr(e),`Firebase Storage: ${n} (${Hr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,wt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yt||(yt={}));function Hr(t){return"storage/"+t}function xv(){const t="An unknown error occurred, please check the error payload for server response.";return new wt(yt.UNKNOWN,t)}function Fv(){return new wt(yt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bv(){return new wt(yt.CANCELED,"User canceled the upload/download.")}function Vv(t){return new wt(yt.INVALID_URL,"Invalid URL '"+t+"'.")}function Uv(t){return new wt(yt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zc(t){return new wt(yt.INVALID_ARGUMENT,t)}function bd(){return new wt(yt.APP_DELETED,"The Firebase app was deleted.")}function jv(t){return new wt(yt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(s.path==="")return s;throw Uv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===wd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",A=new RegExp(`^https?://${y}/${i}/${w}`,"i"),P=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let S=0;S<P.length;S++){const R=P[S],J=R.regex.exec(e);if(J){const j=J[R.indices.bucket];let se=J[R.indices.path];se||(se=""),s=new rt(j,se),R.postModify(s);break}}if(s==null)throw Vv(e);return s}}class $v{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,c())},w)}function d(){r&&clearTimeout(r)}function p(w,...A){if(l){d();return}if(w){d(),u.call(null,w,...A);return}if(c()||o){d(),u.call(null,w,...A);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,h(P)}let m=!1;function y(w){m||(m=!0,d(),!l&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function Hv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){return t!==void 0}function el(t,e,n,s){if(s<e)throw Zc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Zc(`Invalid value for '${t}'. Expected ${n} or less.`)}function zv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xi||(xi={}));/**
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
 */function Gv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new li(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===xi.NO_ERROR,c=r.getStatus();if(!a||Gv(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===xi.ABORT;s(!1,new li(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new li(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Kv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=xv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?bd():Bv();o(c)}else{const c=Fv();o(c)}};this.canceled_?n(!1,new li(!1,null,!0)):this.backoffId_=qv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Hv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class li{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Qv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Yv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Xv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Jv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Zv(t,e,n,s,i,r,o=!0){const a=zv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Xv(l,e),Qv(l,n),Yv(l,r),Jv(l,s),new Wv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Fi{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fi(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tw(this._location.path)}get storage(){return this._service}get parent(){const e=ew(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new Fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jv(e)}}function tl(t,e){const n=e==null?void 0:e[Rv];return n==null?null:rt.makeFromBucketSpec(n,t)}function nw(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Bl(i,t.app.options.projectId))}class sw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=wd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Lv,this._maxUploadRetryTime=Mv,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=tl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=tl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){el("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){el("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fi(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new $v(bd());{const o=Zv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const nl="@firebase/storage",sl="0.11.2";/**
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
 */const Ed="storage";function iw(t=zl(),e){t=ot(t);const s=ql(t,Ed).getImmediate({identifier:e}),i=Fl("storage");return i&&rw(s,...i),s}function rw(t,e,n,s={}){nw(t,e,n,s)}function ow(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new sw(n,s,i,e,Hl)}function aw(){gs(new Mn(Ed,ow,"PUBLIC").setMultipleInstances(!0)),Rt(nl,sl,""),Rt(nl,sl,"esm2017")}aw();const cw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},_d=Kl(cw);iw(_d);const $e=wv(_d),_n=[];function br(t,e=_e){let n;const s=new Set;function i(a){if(qt(t,a)&&(t=a,n)){const c=!_n.length;for(const l of s)l[1](),_n.push(l,t);if(c){for(let l=0;l<_n.length;l+=2)_n[l][0](_n[l+1]);_n.length=0}}}function r(a){i(a(t))}function o(a,c=_e){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||_e),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Kr=br({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),No=br(""),Oo=br(""),mi=br("");let zr=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t<1||t>12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0");const l=`${e.getFullYear().toString()}_${o}_${s}_${i}${r}`;return console.log(`fechaString ${l}`),l};function il(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function rl(t){let e,n=t[12].plan+"",s;return{c(){e=I("option"),s=ee(n),e.__value=t[14],e.value=e.__value},m(i,r){me(i,e,r),b(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&et(s,n)},d(i){i&&pe(e)}}}function lw(t){let e,n,s,i,r,o,a=t[2],c=[];for(let l=0;l<a.length;l+=1)c[l]=rl(il(t,a,l));return{c(){e=I("div"),n=I("input"),s=X(),i=I("select");for(let l=0;l<c.length;l+=1)c[l].c();g(n,"type","checkbox"),g(n,"name","CheckBoxParticular"),g(n,"id","CheckBoxParticular"),g(i,"name","plan"),g(i,"id","plan"),g(i,"class","svelte-1de4xhy"),t[1]===void 0&&rn(()=>t[8].call(i)),ni(i,"SelectPlanVisible",t[0]),ni(i,"SelectPlanHidden",t[3]),g(e,"id","selectPlanContainer"),g(e,"class","svelte-1de4xhy")},m(l,u){me(l,e,u),b(e,n),n.checked=t[0],b(e,s),b(e,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null);xt(i,t[1]),r||(o=[z(n,"change",t[7]),z(n,"change",t[4]),z(i,"change",t[8]),z(i,"change",t[5])],r=!0)},p(l,[u]){if(u&1&&(n.checked=l[0]),u&4){a=l[2];let h;for(h=0;h<a.length;h+=1){const d=il(l,a,h);c[h]?c[h].p(d,u):(c[h]=rl(d),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}u&2&&xt(i,l[1]),u&1&&ni(i,"SelectPlanVisible",l[0]),u&8&&ni(i,"SelectPlanHidden",l[3])},i:_e,o:_e,d(l){l&&pe(e),Ui(c,l),r=!1,lt(o)}}}function uw(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const c=y=>{n(0,r=y)},l=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=y=>{var w=y.target.checked;c(w),l()},h=Ol(),d=y=>{n(1,o=parseInt(y.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function p(){r=this.checked,n(0,r)}function m(){o=vi(this),n(1,o)}return t.$$set=y=>{"planes"in y&&n(2,s=y.planes),"planSeleccionado"in y&&n(6,i=y.planSeleccionado),"SelectPlanVisible"in y&&n(0,r=y.SelectPlanVisible),"indicePlan"in y&&n(1,o=y.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,p,m]}class hw extends pn{constructor(e){super(),fn(this,e,uw,lw,qt,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}var dw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Td={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(dw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(w){w.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(w){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),m=this.options.position=="left"?d:"-"+d,y=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+m+","+y+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Td);var pw=Td.exports;const Nn=fw(pw),Cd="SweetAlert2:",gw=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Fa=t=>t.charAt(0).toUpperCase()+t.slice(1),Ze=t=>Array.prototype.slice.call(t),Qe=t=>{console.warn(`${Cd} ${typeof t=="object"?t.join(" "):t}`)},wn=t=>{console.error(`${Cd} ${t}`)},ol=[],mw=t=>{ol.includes(t)||(ol.push(t),Qe(t))},yw=(t,e)=>{mw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},Er=t=>typeof t=="function"?t():t,Ba=t=>t&&typeof t.toPromise=="function",Gs=t=>Ba(t)?t.toPromise():Promise.resolve(t),Va=t=>t&&Promise.resolve(t)===t,On={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},vw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ww={},bw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Sd=t=>Object.prototype.hasOwnProperty.call(On,t),Id=t=>vw.indexOf(t)!==-1,Ro=t=>ww[t],Ew=t=>{Sd(t)||Qe(`Unknown parameter "${t}"`)},_w=t=>{bw.includes(t)&&Qe(`The parameter "${t}" is incompatible with toasts`)},Tw=t=>{Ro(t)&&yw(t,Ro(t))},Cw=t=>{!t.backdrop&&t.allowOutsideClick&&Qe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)Ew(e),t.toast&&_w(e),Tw(e)},Sw="swal2-",Ad=t=>{const e={};for(const n in t)e[t[n]]=Sw+t[n];return e},f=Ad(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),ds=Ad(["success","warning","info","question","error"]),xe=()=>document.body.querySelector(`.${f.container}`),Ws=t=>{const e=xe();return e?e.querySelector(t):null},it=t=>Ws(`.${t}`),Q=()=>it(f.popup),Qs=()=>it(f.icon),kd=()=>it(f.title),Bi=()=>it(f["html-container"]),Dd=()=>it(f.image),Pd=()=>it(f["progress-steps"]),_r=()=>it(f["validation-message"]),ct=()=>Ws(`.${f.actions} .${f.confirm}`),$t=()=>Ws(`.${f.actions} .${f.deny}`),Iw=()=>it(f["input-label"]),Xn=()=>Ws(`.${f.loader}`),hn=()=>Ws(`.${f.actions} .${f.cancel}`),Ys=()=>it(f.actions),Nd=()=>it(f.footer),Tr=()=>it(f["timer-progress-bar"]),Ua=()=>it(f.close),Aw=`
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
`,ja=()=>{const t=Ze(Q().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=Ze(Q().querySelectorAll(Aw)).filter(n=>n.getAttribute("tabindex")!=="-1");return gw(t.concat(e)).filter(n=>Xe(n))},$a=()=>Ct(document.body,f.shown)&&!Ct(document.body,f["toast-shown"])&&!Ct(document.body,f["no-backdrop"]),Cr=()=>Q()&&Ct(Q(),f.toast),kw=()=>Q().hasAttribute("data-loading"),Rn={previousBodyPadding:null},Oe=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");Ze(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),Ze(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},Ct=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Dw=(t,e)=>{Ze(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(ds).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},st=(t,e,n)=>{if(Dw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Qe(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);K(t,e.customClass[n])}},qa=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},Od=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Rd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},K=(t,e)=>{Rd(t,e,!0)},vt=(t,e)=>{Rd(t,e,!1)},Pt=(t,e)=>{const n=Ze(t.childNodes);for(let s=0;s<n.length;s++)if(Ct(n[s],e))return n[s]},fs=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Ae=(t,e="flex")=>{t.style.display=e},Fe=t=>{t.style.display="none"},al=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Sr=(t,e,n)=>{e?Ae(t,n):Fe(t)},Xe=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Pw=()=>!Xe(ct())&&!Xe($t())&&!Xe(hn()),cl=t=>t.scrollHeight>t.clientHeight,Ld=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Ha=(t,e=!1)=>{const n=Tr();Xe(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Nw=()=>{const t=Tr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Md=()=>typeof window>"u"||typeof document>"u",Ow=100,B={},Rw=()=>{B.previousActiveElement&&B.previousActiveElement.focus?(B.previousActiveElement.focus(),B.previousActiveElement=null):document.body&&document.body.focus()},Lw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;B.restoreFocusTimeout=setTimeout(()=>{Rw(),e()},Ow),window.scrollTo(n,s)}),Mw=`
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
`.replace(/(^|\n)\s*/g,""),xw=()=>{const t=xe();return t?(t.remove(),vt([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Qt=()=>{B.currentInstance.resetValidationMessage()},Fw=()=>{const t=Q(),e=Pt(t,f.input),n=Pt(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=Pt(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=Pt(t,f.textarea);e.oninput=Qt,n.onchange=Qt,r.onchange=Qt,o.onchange=Qt,a.oninput=Qt,s.oninput=()=>{Qt(),i.value=s.value},s.onchange=()=>{Qt(),s.nextSibling.value=s.value}},Bw=t=>typeof t=="string"?document.querySelector(t):t,Vw=t=>{const e=Q();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Uw=t=>{window.getComputedStyle(t).direction==="rtl"&&K(xe(),f.rtl)},jw=t=>{const e=xw();if(Md()){wn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&K(n,f["no-transition"]),Oe(n,Mw);const s=Bw(t.target);s.appendChild(n),Vw(t),Uw(s),Fw()},Ka=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?$w(t,e):t&&Oe(e,t)},$w=(t,e)=>{t.jquery?qw(e,t):Oe(e,t.toString())},qw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ks=(()=>{if(Md())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Hw=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Kw=(t,e)=>{const n=Ys(),s=Xn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Fe(n):Ae(n),st(n,e,"actions"),zw(n,s,e),Oe(s,e.loaderHtml),st(s,e,"loader")};function zw(t,e,n){const s=ct(),i=$t(),r=hn();Gr(s,"confirm",n),Gr(i,"deny",n),Gr(r,"cancel",n),Gw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Gw(t,e,n,s){if(!s.buttonsStyling)return vt([t,e,n],f.styled);K([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,K(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,K(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,K(n,f["default-outline"]))}function Gr(t,e,n){Sr(t,n[`show${Fa(e)}Button`],"inline-block"),Oe(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],st(t,n,`${e}Button`),K(t,n[`${e}ButtonClass`])}function Ww(t,e){typeof e=="string"?t.style.background=e:e||K([document.documentElement,document.body],f["no-backdrop"])}function Qw(t,e){e in f?K(t,f[e]):(Qe('The "position" parameter is not valid, defaulting to "center"'),K(t,f.center))}function Yw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&K(t,f[n])}}const Xw=(t,e)=>{const n=xe();n&&(Ww(n,e.backdrop),Qw(n,e.position),Yw(n,e.grow),st(n,e,"container"))},U={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Jw=["input","file","range","select","radio","checkbox","textarea"],Zw=(t,e)=>{const n=Q(),s=U.innerParams.get(t),i=!s||e.input!==s.input;Jw.forEach(r=>{const o=f[r],a=Pt(n,o);nb(r,e.inputAttributes),a.className=o,i&&Fe(a)}),e.input&&(i&&eb(e),sb(e))},eb=t=>{if(!Ge[t.input])return wn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=xd(t.input),n=Ge[t.input](e,t);Ae(n),setTimeout(()=>{Od(n)})},tb=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},nb=(t,e)=>{const n=qa(Q(),t);if(n){tb(n);for(const s in e)n.setAttribute(s,e[s])}},sb=t=>{const e=xd(t.input);t.customClass&&K(e,t.customClass.input)},za=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Xs=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,K(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},xd=t=>{const e=f[t]?f[t]:f.input;return Pt(Q(),e)},Ge={};Ge.text=Ge.email=Ge.password=Ge.number=Ge.tel=Ge.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Va(e.inputValue)||Qe(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Xs(t,t,e),za(t,e),t.type=e.input,t);Ge.file=(t,e)=>(Xs(t,t,e),za(t,e),t);Ge.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Xs(n,t,e),t};Ge.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Oe(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Xs(t,t,e),t};Ge.radio=t=>(t.textContent="",t);Ge.checkbox=(t,e)=>{const n=qa(Q(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=!!e.inputValue;const s=t.querySelector("span");return Oe(s,e.inputPlaceholder),t};Ge.textarea=(t,e)=>{t.value=e.inputValue,za(t,e),Xs(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(Q()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?Q().style.width=`${r}px`:Q().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ib=(t,e)=>{const n=Bi();st(n,e,"htmlContainer"),e.html?(Ka(e.html,n),Ae(n,"block")):e.text?(n.textContent=e.text,Ae(n,"block")):Fe(n),Zw(t,e)},rb=(t,e)=>{const n=Nd();Sr(n,e.footer),e.footer&&Ka(e.footer,n),st(n,e,"footer")},ob=(t,e)=>{const n=Ua();Oe(n,e.closeButtonHtml),st(n,e,"closeButton"),Sr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},ab=(t,e)=>{const n=U.innerParams.get(t),s=Qs();if(n&&e.icon===n.icon){ul(s,e),ll(s,e);return}if(!e.icon&&!e.iconHtml)return Fe(s);if(e.icon&&Object.keys(ds).indexOf(e.icon)===-1)return wn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Fe(s);Ae(s),ul(s,e),ll(s,e),K(s,e.showClass.icon)},ll=(t,e)=>{for(const n in ds)e.icon!==n&&vt(t,ds[n]);K(t,ds[e.icon]),hb(t,e),cb(),st(t,e,"icon")},cb=()=>{const t=Q(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},lb=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ub=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ul=(t,e)=>{t.textContent="",e.iconHtml?Oe(t,hl(e.iconHtml)):e.icon==="success"?Oe(t,lb):e.icon==="error"?Oe(t,ub):Oe(t,hl({question:"?",warning:"!",info:"i"}[e.icon]))},hb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])al(t,n,"backgroundColor",e.iconColor);al(t,".swal2-success-ring","borderColor",e.iconColor)}},hl=t=>`<div class="${f["icon-content"]}">${t}</div>`,db=(t,e)=>{const n=Dd();if(!e.imageUrl)return Fe(n);Ae(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),fs(n,"width",e.imageWidth),fs(n,"height",e.imageHeight),n.className=f.image,st(n,e,"image")},fb=t=>{const e=document.createElement("li");return K(e,f["progress-step"]),Oe(e,t),e},pb=t=>{const e=document.createElement("li");return K(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},gb=(t,e)=>{const n=Pd();if(!e.progressSteps||e.progressSteps.length===0)return Fe(n);Ae(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Qe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=fb(s);if(n.appendChild(r),i===e.currentProgressStep&&K(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=pb(e);n.appendChild(o)}})},mb=(t,e)=>{const n=kd();Sr(n,e.title||e.titleText,"block"),e.title&&Ka(e.title,n),e.titleText&&(n.innerText=e.titleText),st(n,e,"title")},yb=(t,e)=>{const n=xe(),s=Q();e.toast?(fs(n,"width",e.width),s.style.width="100%",s.insertBefore(Xn(),Qs())):fs(s,"width",e.width),fs(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Fe(_r()),vb(s,e)},vb=(t,e)=>{t.className=`${f.popup} ${Xe(t)?e.showClass.popup:""}`,e.toast?(K([document.documentElement,document.body],f["toast-shown"]),K(t,f.toast)):K(t,f.modal),st(t,e,"popup"),typeof e.customClass=="string"&&K(t,e.customClass),e.icon&&K(t,f[`icon-${e.icon}`])},Fd=(t,e)=>{yb(t,e),Xw(t,e),gb(t,e),ab(t,e),db(t,e),mb(t,e),ob(t,e),ib(t,e),Kw(t,e),rb(t,e),typeof e.didRender=="function"&&e.didRender(Q())},Jn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),wb=()=>{Ze(document.body.children).forEach(e=>{e===xe()||e.contains(xe())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Bd=()=>{Ze(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Vd=["swal-title","swal-html","swal-footer"],bb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Ab(n),Object.assign(Eb(n),_b(n),Tb(n),Cb(n),Sb(n),Ib(n,Vd))},Eb=t=>{const e={};return Ze(t.querySelectorAll("swal-param")).forEach(n=>{dn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof On[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof On[s]=="object"&&(e[s]=JSON.parse(i))}),e},_b=t=>{const e={};return Ze(t.querySelectorAll("swal-button")).forEach(n=>{dn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Fa(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},Tb=t=>{const e={},n=t.querySelector("swal-image");return n&&(dn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Cb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(dn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Sb=t=>{const e={},n=t.querySelector("swal-input");n&&(dn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},Ze(s).forEach(i=>{dn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},Ib=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(dn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Ab=t=>{const e=Vd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Ze(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Qe(`Unrecognized element <${s}>`)})},dn=(t,e)=>{Ze(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Qe([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},dl={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function kb(t){t.inputValidator||Object.keys(dl).forEach(e=>{t.input===e&&(t.inputValidator=dl[e])})}function Db(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Qe('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Pb(t){kb(t),t.showLoaderOnConfirm&&!t.preConfirm&&Qe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Db(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),jw(t)}class Nb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ob=()=>{Rn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Rn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Rn.previousBodyPadding+Hw()}px`)},Rb=()=>{Rn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Rn.previousBodyPadding}px`,Rn.previousBodyPadding=null)},Lb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Ct(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,K(document.body,f.iosfix),xb(),Mb()}},Mb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&Q().scrollHeight>window.innerHeight-44&&(xe().style.paddingBottom="44px")},xb=()=>{const t=xe();let e;t.ontouchstart=n=>{e=Fb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Fb=t=>{const e=t.target,n=xe();return Bb(t)||Vb(t)?!1:e===n||!cl(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(cl(Bi())&&Bi().contains(e))},Bb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Vb=t=>t.touches&&t.touches.length>1,Ub=()=>{if(Ct(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);vt(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Ud=10,jb=t=>{const e=xe(),n=Q();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Hb(e,n,t),setTimeout(()=>{$b(e,n)},Ud),$a()&&(qb(e,t.scrollbarPadding,i),wb()),!Cr()&&!B.previousActiveElement&&(B.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),vt(e,f["no-transition"])},jd=t=>{const e=Q();if(t.target!==e)return;const n=xe();e.removeEventListener(ks,jd),n.style.overflowY="auto"},$b=(t,e)=>{ks&&Ld(e)?(t.style.overflowY="hidden",e.addEventListener(ks,jd)):t.style.overflowY="auto"},qb=(t,e,n)=>{Lb(),e&&n!=="hidden"&&Ob(),setTimeout(()=>{t.scrollTop=0})},Hb=(t,e,n)=>{K(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Ae(e,"grid"),setTimeout(()=>{K(e,n.showClass.popup),e.style.removeProperty("opacity")},Ud),K([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&K([document.documentElement,document.body],f["height-auto"])},Hn=t=>{let e=Q();e||new Ps,e=Q();const n=Xn();Cr()?Fe(Qs()):Kb(e,t),Ae(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Kb=(t,e)=>{const n=Ys(),s=Xn();!e&&Xe(ct())&&(e=ct()),Ae(n),e&&(Fe(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),K([t,n],f.loading)},zb=(t,e)=>{e.input==="select"||e.input==="radio"?Xb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Ba(e.inputValue)||Va(e.inputValue))&&(Hn(ct()),Jb(t,e))},Gb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Wb(n);case"radio":return Qb(n);case"file":return Yb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Wb=t=>t.checked?1:0,Qb=t=>t.checked?t.value:null,Yb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Xb=(t,e)=>{const n=Q(),s=i=>Zb[e.input](n,Lo(i),e);Ba(e.inputOptions)||Va(e.inputOptions)?(Hn(ct()),Gs(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):wn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Jb=(t,e)=>{const n=t.getInput();Fe(n),Gs(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Ae(n),n.focus(),t.hideLoading()}).catch(s=>{wn(`Error in inputValue promise: ${s}`),n.value="",Ae(n),n.focus(),t.hideLoading()})},Zb={select:(t,e,n)=>{const s=Pt(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Oe(c,o),c.selected=fl(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Pt(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,fl(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Oe(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Lo=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Lo(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Lo(s)),e.push([n,s])}),e},fl=(t,e)=>e&&e.toString()===t.toString();function pl(){const t=U.innerParams.get(this);if(!t)return;const e=U.domCache.get(this);Fe(e.loader),Cr()?t.icon&&Ae(Qs()):e0(e),vt([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const e0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Ae(e[0],"inline-block"):Pw()&&Fe(t.actions)};function t0(t){const e=U.innerParams.get(t||this),n=U.domCache.get(t||this);return n?qa(n.popup,e.input):null}const Ds={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},n0=()=>Xe(Q()),$d=()=>ct()&&ct().click(),s0=()=>$t()&&$t().click(),i0=()=>hn()&&hn().click(),qd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},r0=(t,e,n,s)=>{qd(e),n.toast||(e.keydownHandler=i=>a0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:Q(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Mo=(t,e,n)=>{const s=ja();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();Q().focus()},Hd=["ArrowRight","ArrowDown"],o0=["ArrowLeft","ArrowUp"],a0=(t,e,n)=>{const s=U.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?c0(t,e,s):e.key==="Tab"?l0(e,s):[...Hd,...o0].includes(e.key)?u0(e.key):e.key==="Escape"&&h0(e,s,n)))},c0=(t,e,n)=>{if(Er(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;$d(),e.preventDefault()}},l0=(t,e)=>{const n=t.target,s=ja();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Mo(e,i,-1):Mo(e,i,1),t.stopPropagation(),t.preventDefault()},u0=t=>{const e=ct(),n=$t(),s=hn();if(![e,n,s].includes(document.activeElement))return;const i=Hd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Ys().children.length;o++){if(r=r[i],!r)return;if(Xe(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},h0=(t,e,n)=>{Er(e.allowEscapeKey)&&(t.preventDefault(),n(Jn.esc))};function Kd(t,e,n,s){Cr()?gl(t,s):(Lw(n).then(()=>gl(t,s)),qd(B)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),$a()&&(Rb(),Ub(),Bd()),d0()}function d0(){vt([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function ui(t){t=m0(t);const e=Ds.swalPromiseResolve.get(this),n=p0(this);this.isAwaitingPromise()?t.isDismissed||(Js(this),e(t)):n&&e(t)}function f0(){return!!U.awaitingPromise.get(this)}const p0=t=>{const e=Q();if(!e)return!1;const n=U.innerParams.get(t);if(!n||Ct(e,n.hideClass.popup))return!1;vt(e,n.showClass.popup),K(e,n.hideClass.popup);const s=xe();return vt(s,n.showClass.backdrop),K(s,n.hideClass.backdrop),y0(t,e,n),!0};function g0(t){const e=Ds.swalPromiseReject.get(this);Js(this),e&&e(t)}const Js=t=>{t.isAwaitingPromise()&&(U.awaitingPromise.delete(t),U.innerParams.get(t)||t._destroy())},m0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),y0=(t,e,n)=>{const s=xe(),i=ks&&Ld(e);typeof n.willClose=="function"&&n.willClose(e),i?v0(t,e,s,n.returnFocus,n.didClose):Kd(t,s,n.returnFocus,n.didClose)},v0=(t,e,n,s,i)=>{B.swalCloseEventFinishedCallback=Kd.bind(null,t,n,s,i),e.addEventListener(ks,function(r){r.target===e&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback)})},gl=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function zd(t,e,n){const s=U.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Gd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function w0(){zd(this,["confirmButton","denyButton","cancelButton"],!1)}function b0(){zd(this,["confirmButton","denyButton","cancelButton"],!0)}function E0(){return Gd(this.getInput(),!1)}function _0(){return Gd(this.getInput(),!0)}function T0(t){const e=U.domCache.get(this),n=U.innerParams.get(this);Oe(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&K(e.validationMessage,n.customClass.validationMessage),Ae(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),Od(s),K(s,f.inputerror))}function C0(){const t=U.domCache.get(this);t.validationMessage&&Fe(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),vt(e,f.inputerror))}function S0(){return U.domCache.get(this).progressSteps}function I0(t){const e=Q(),n=U.innerParams.get(this);if(!e||Ct(e,n.hideClass.popup))return Qe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=A0(t),i=Object.assign({},n,s);Fd(this,i),U.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const A0=t=>{const e={};return Object.keys(t).forEach(n=>{Id(n)?e[n]=t[n]:Qe(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function k0(){const t=U.domCache.get(this),e=U.innerParams.get(this);if(!e){Wd(this);return}t.popup&&B.swalCloseEventFinishedCallback&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback),B.deferDisposalTimer&&(clearTimeout(B.deferDisposalTimer),delete B.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),D0(this)}const D0=t=>{Wd(t),delete t.params,delete B.keydownHandler,delete B.keydownTarget,delete B.currentInstance},Wd=t=>{t.isAwaitingPromise()?(Wr(U,t),U.awaitingPromise.set(t,!0)):(Wr(Ds,t),Wr(U,t))},Wr=(t,e)=>{for(const n in t)t[n].delete(e)},Qd=Object.freeze(Object.defineProperty({__proto__:null,_destroy:k0,close:ui,closeModal:ui,closePopup:ui,closeToast:ui,disableButtons:b0,disableInput:_0,disableLoading:pl,enableButtons:w0,enableInput:E0,getInput:t0,getProgressSteps:S0,handleAwaitingPromise:Js,hideLoading:pl,isAwaitingPromise:f0,rejectPromise:g0,resetValidationMessage:C0,showValidationMessage:T0,update:I0},Symbol.toStringTag,{value:"Module"})),P0=t=>{const e=U.innerParams.get(t);t.disableButtons(),e.input?Yd(t,"confirm"):Wa(t,!0)},N0=t=>{const e=U.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Yd(t,"deny"):Ga(t,!1)},O0=(t,e)=>{t.disableButtons(),e(Jn.cancel)},Yd=(t,e)=>{const n=U.innerParams.get(t);if(!n.input)return wn(`The "input" parameter is needed to be set when using returnInputValueOn${Fa(e)}`);const s=Gb(t,n);n.inputValidator?R0(t,s,e):t.getInput().checkValidity()?e==="deny"?Ga(t,s):Wa(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},R0=(t,e,n)=>{const s=U.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Gs(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Ga(t,e):Wa(t,e)})},Ga=(t,e)=>{const n=U.innerParams.get(t||globalThis);n.showLoaderOnDeny&&Hn($t()),n.preDeny?(U.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Gs(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Js(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Xd(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},ml=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Xd=(t,e)=>{t.rejectPromise(e)},Wa=(t,e)=>{const n=U.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&Hn(),n.preConfirm?(t.resetValidationMessage(),U.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Gs(n.preConfirm(e,n.validationMessage))).then(i=>{Xe(_r())||i===!1?(t.hideLoading(),Js(t)):ml(t,typeof i>"u"?e:i)}).catch(i=>Xd(t||globalThis,i))):ml(t,e)},L0=(t,e,n)=>{U.innerParams.get(t).toast?M0(t,e,n):(F0(e),B0(e),V0(t,e,n))},M0=(t,e,n)=>{e.popup.onclick=()=>{const s=U.innerParams.get(t);s&&(x0(s)||s.timer||s.input)||n(Jn.close)}},x0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Vi=!1;const F0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Vi=!0)}}},B0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Vi=!0)}}},V0=(t,e,n)=>{e.container.onclick=s=>{const i=U.innerParams.get(t);if(Vi){Vi=!1;return}s.target===e.container&&Er(i.allowOutsideClick)&&n(Jn.backdrop)}},U0=t=>typeof t=="object"&&t.jquery,yl=t=>t instanceof Element||U0(t),j0=t=>{const e={};return typeof t[0]=="object"&&!yl(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||yl(i)?e[n]=i:i!==void 0&&wn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function $0(...t){const e=this;return new e(...t)}function q0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const H0=()=>B.timeout&&B.timeout.getTimerLeft(),Jd=()=>{if(B.timeout)return Nw(),B.timeout.stop()},Zd=()=>{if(B.timeout){const t=B.timeout.start();return Ha(t),t}},K0=()=>{const t=B.timeout;return t&&(t.running?Jd():Zd())},z0=t=>{if(B.timeout){const e=B.timeout.increase(t);return Ha(e,!0),e}},G0=()=>B.timeout&&B.timeout.isRunning();let vl=!1;const xo={};function W0(t="data-swal-template"){xo[t]=this,vl||(document.body.addEventListener("click",Q0),vl=!0)}const Q0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in xo){const s=e.getAttribute(n);if(s){xo[n].fire({template:s});return}}},Y0=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:j0,bindClickHandler:W0,clickCancel:i0,clickConfirm:$d,clickDeny:s0,enableLoading:Hn,fire:$0,getActions:Ys,getCancelButton:hn,getCloseButton:Ua,getConfirmButton:ct,getContainer:xe,getDenyButton:$t,getFocusableElements:ja,getFooter:Nd,getHtmlContainer:Bi,getIcon:Qs,getImage:Dd,getInputLabel:Iw,getLoader:Xn,getPopup:Q,getTimerLeft:H0,getTimerProgressBar:Tr,getTitle:kd,getValidationMessage:_r,increaseTimer:z0,isDeprecatedParameter:Ro,isLoading:kw,isTimerRunning:G0,isUpdatableParameter:Id,isValidParameter:Sd,isVisible:n0,mixin:q0,resumeTimer:Zd,showLoading:Hn,stopTimer:Jd,toggleTimer:K0},Symbol.toStringTag,{value:"Module"}));let Fo;class Zn{constructor(...e){if(typeof window>"u")return;Fo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);U.promise.set(this,s)}_main(e,n={}){Cw(Object.assign({},n,e)),B.currentInstance&&(B.currentInstance._destroy(),$a()&&Bd()),B.currentInstance=this;const s=J0(e,n);Pb(s),Object.freeze(s),B.timeout&&(B.timeout.stop(),delete B.timeout),clearTimeout(B.restoreFocusTimeout);const i=Z0(this);return Fd(this,s),U.innerParams.set(this,s),X0(this,i,s)}then(e){return U.promise.get(this).then(e)}finally(e){return U.promise.get(this).finally(e)}}const X0=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Ds.swalPromiseResolve.set(t,s),Ds.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>P0(t),e.denyButton.onclick=()=>N0(t),e.cancelButton.onclick=()=>O0(t,r),e.closeButton.onclick=()=>r(Jn.close),L0(t,e,r),r0(t,B,n,r),zb(t,n),jb(n),eE(B,n,r),tE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),J0=(t,e)=>{const n=bb(t),s=Object.assign({},On,e,n,t);return s.showClass=Object.assign({},On.showClass,s.showClass),s.hideClass=Object.assign({},On.hideClass,s.hideClass),s},Z0=t=>{const e={popup:Q(),container:xe(),actions:Ys(),confirmButton:ct(),denyButton:$t(),cancelButton:hn(),loader:Xn(),closeButton:Ua(),validationMessage:_r(),progressSteps:Pd()};return U.domCache.set(t,e),e},eE=(t,e,n)=>{const s=Tr();Fe(s),e.timer&&(t.timeout=new Nb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Ae(s),st(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Ha(e.timer)})))},tE=(t,e)=>{if(!e.toast){if(!Er(e.allowEnterKey))return sE();nE(t,e)||Mo(e,-1,1)}},nE=(t,e)=>e.focusDeny&&Xe(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Xe(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Xe(t.confirmButton)?(t.confirmButton.focus(),!0):!1,sE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Zn.prototype,Qd);Object.assign(Zn,Y0);Object.keys(Qd).forEach(t=>{Zn[t]=function(...e){if(Fo)return Fo[t](...e)}});Zn.DismissReason=Jn;Zn.version="11.4.8";const Ps=Zn;Ps.default=Ps;const iE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},rE=async t=>{try{await xa(Tt($e,"Pacientes",t.id),t)}catch(e){console.log(e)}};function wl(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function oE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=bl(wl(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Dl()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);me(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=wl(i,n,o);s[o]?s[o].p(a,r):(s[o]=bl(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Ui(s,i),i&&pe(e)}}}function aE(t){let e;return{c(){e=I("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){me(n,e,s)},p:_e,d(n){n&&pe(e)}}}function bl(t){let e,n=`${t[7].apellido}, ${t[7].nombre}${t[7].plan=="particular"?"":" -"+t[7].nroSocio+" - plan "+t[7].plan.plan} `,s;return{c(){e=I("option"),s=ee(n),e.__value=t[9],e.value=e.__value},m(i,r){me(i,e,r),b(e,s)},p(i,r){r&1&&n!==(n=`${i[7].apellido}, ${i[7].nombre}${i[7].plan=="particular"?"":" -"+i[7].nroSocio+" - plan "+i[7].plan.plan} `)&&et(s,n)},d(i){i&&pe(e)}}}function cE(t){let e,n,s;function i(a,c){return a[0].length==0?aE:oE}let r=i(t),o=r(t);return{c(){e=I("select"),o.c(),g(e,"name","select-pacientes"),g(e,"class","select-Pacientes svelte-2shrp8"),g(e,"id","elementoSelectPacientes"),g(e,"size",5),t[1]===void 0&&rn(()=>t[4].call(e))},m(a,c){me(a,e,c),o.m(e,null),xt(e,t[1]),n||(s=[z(e,"change",t[2]),z(e,"change",t[4])],n=!0)},p(a,[c]){r===(r=i(a))&&o?o.p(a,c):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),c&2&&xt(e,a[1])},i:_e,o:_e,d(a){a&&pe(e),o.d(),n=!1,lt(s)}}}function lE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r,o;const a=Ol(),c=u=>{const h=u.target.value;n(3,i=s[h].plan),o=s[h].id,a("cambioSelectPaciente",[h,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${h}, planSelect ${i.plan?i.plan:"particular"}`)};function l(){r=vi(this),n(1,r)}return t.$$set=u=>{"pacientesFiltrada"in u&&n(0,s=u.pacientesFiltrada),"planSelect"in u&&n(3,i=u.planSelect)},[s,r,c,i,l]}class uE extends pn{constructor(e){super(),fn(this,e,lE,cE,qt,{pacientesFiltrada:0,planSelect:3})}}function hE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,y,w,A,E,P,S,R,J,j,se,q,Be,ce,le,Ve,oe,Ke,Ue,Y,V,Ce,Z,bt,ut,C,ge,ue,ze,Wt,Zs;return R=new uE({props:{pacientesFiltrada:t[3],planSelect:dE}}),R.$on("cambioSelectPaciente",t[15]),ue=new hw({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),ue.$on("cambioPlan",t[14]),ue.$on("clickCheckPlan",t[16]),{c(){e=I("body"),n=I("div"),s=I("div"),i=I("button"),r=ee("create"),a=X(),c=I("button"),l=ee("update"),h=X(),d=I("button"),p=ee("delete"),y=X(),w=I("div"),A=I("label"),A.textContent="filtrar por apellido",E=I("input"),P=X(),S=I("div"),Ln(R.$$.fragment),J=X(),j=I("div"),se=I("label"),se.textContent="nombre",q=I("input"),Be=X(),ce=I("label"),ce.textContent="apellido",le=I("input"),Ve=X(),oe=I("div"),Ke=I("label"),Ke.textContent="nº socio",Ue=X(),Y=I("div"),V=I("input"),Ce=X(),Z=I("button"),Z.textContent="✎",bt=X(),ut=I("label"),C=ee(t[10]),ge=X(),Ln(ue.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],g(i,"class","svelte-40mbgp"),c.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],g(c,"class","svelte-40mbgp"),d.disabled=m=!t[4],g(d,"class","svelte-40mbgp"),g(s,"class","buttons svelte-40mbgp"),g(n,"id","botones"),g(n,"class","svelte-40mbgp"),g(A,"for","filterPrefix"),g(A,"class","svelte-40mbgp"),g(E,"name","filterPrefix"),g(E,"placeholder","filter prefix"),g(E,"class","svelte-40mbgp"),g(w,"id","filter"),g(w,"class","svelte-40mbgp"),g(S,"id","selectPacientes"),g(S,"class","svelte-40mbgp"),g(se,"for","nombre"),g(se,"class","svelte-40mbgp"),g(q,"name","nombre"),g(q,"placeholder","nombre"),g(q,"class","svelte-40mbgp"),g(ce,"for","apellido"),g(ce,"class","svelte-40mbgp"),g(le,"name","apellido"),g(le,"placeholder","apellido"),g(le,"class","svelte-40mbgp"),g(j,"id","formInputsI"),g(j,"class","svelte-40mbgp"),g(Ke,"for","nroSocio"),g(Ke,"class","svelte-40mbgp"),g(V,"id","inputNroSocio"),g(V,"name","nroSocio"),g(V,"placeholder","nro de Socio"),g(V,"class","svelte-40mbgp"),g(Z,"class","svelte-40mbgp"),g(Y,"class","formRow svelte-40mbgp"),g(ut,"id","labelPlan"),g(ut,"for","plan"),g(ut,"class","svelte-40mbgp"),g(oe,"id","formInputsD"),g(oe,"class","svelte-40mbgp"),g(e,"class","svelte-40mbgp")},m(T,ie){me(T,e,ie),b(e,n),b(n,s),b(s,i),b(i,r),b(s,a),b(s,c),b(c,l),b(s,h),b(s,d),b(d,p),b(e,y),b(e,w),b(w,A),b(w,E),Ee(E,t[2]),b(e,P),b(e,S),on(R,S,null),b(e,J),b(e,j),b(j,se),b(j,q),Ee(q,t[7]),b(j,Be),b(j,ce),b(j,le),Ee(le,t[8]),b(e,Ve),b(e,oe),b(oe,Ke),b(oe,Ue),b(oe,Y),b(Y,V),Ee(V,t[9]),b(Y,Ce),b(Y,Z),b(oe,bt),b(oe,ut),b(ut,C),b(oe,ge),on(ue,oe,null),ze=!0,Wt||(Zs=[z(i,"click",t[11]),z(c,"click",t[12]),z(d,"click",t[13]),z(E,"input",t[21]),z(q,"input",t[22]),z(le,"input",t[23]),z(V,"input",t[24]),z(Z,"click",fE)],Wt=!0)},p(T,ie){(!ze||ie[0]&897&&o!==(o=!T[7]||!T[8]||!T[0]||!T[9]))&&(i.disabled=o),(!ze||ie[0]&913&&u!==(u=!T[7]||!T[8]||!T[0]||!T[9]||!T[4]))&&(c.disabled=u),(!ze||ie[0]&16&&m!==(m=!T[4]))&&(d.disabled=m),ie[0]&4&&E.value!==T[2]&&Ee(E,T[2]);const je={};ie[0]&8&&(je.pacientesFiltrada=T[3]),R.$set(je),ie[0]&128&&q.value!==T[7]&&Ee(q,T[7]),ie[0]&256&&le.value!==T[8]&&Ee(le,T[8]),ie[0]&512&&V.value!==T[9]&&Ee(V,T[9]),(!ze||ie[0]&1024)&&et(C,T[10]);const Et={};ie[0]&2&&(Et.planes=T[1]),ie[0]&1&&(Et.planSeleccionado=T[0]),ie[0]&64&&(Et.SelectPlanVisible=T[6]),ie[0]&32&&(Et.indicePlan=T[5]),ue.$set(Et)},i(T){ze||(St(R.$$.fragment,T),St(ue.$$.fragment,T),ze=!0)},o(T){Ft(R.$$.fragment,T),Ft(ue.$$.fragment,T),ze=!1},d(T){T&&pe(e),an(R),an(ue),Wt=!1,lt(Zs)}}}let dE="particular";function fE(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function pE(t,e,n){let s,i,r,o,a;Xt(t,mi,C=>n(25,i=C)),Xt(t,Kr,C=>n(26,r=C)),Xt(t,Oo,C=>n(27,o=C)),Xt(t,No,C=>n(28,a=C));let{pacientes:c=[]}=e,{sesiones:l}=e,{planes:u}=e,{planSeleccionado:h}=e,d=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:p}=e,m,y,w;Nl(()=>{iE(c,d),c.forEach(C=>{rE(C)})});let A="",E="",P="",S="",R,J="plan";bn(Kr,r=s,r);const j=C=>{n(7,E=C?C.nombre:""),n(8,P=C?C.apellido:""),n(9,S=C?C.nroSocio:""),n(0,h=C?C.plan:{})},se=async()=>{try{await vd(ft($e,"Pacientes"),{nombre:E,apellido:P,nroSocio:S,createdAt:new Date().toLocaleDateString(),plan:h}),Nn({text:"Nuevo paciente agregado"}).showToast()}catch(C){console.error(C)}},q=()=>{n(17,c=c.concat({nombre:E,apellido:P})),n(20,y=c.length-1),se(),n(7,E=n(8,P=n(0,h=n(9,S=""))))},Be=async C=>{try{await xa(Tt($e,"Pacientes",C.id),C),Nn({text:`paciente ${C.apellido}, ${C.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ge){console.error(ge)}},ce=()=>{n(4,s.nombre=E,s),n(4,s.apellido=P,s),n(0,h=s.plan),n(4,s.nroSocio=S,s),n(4,s),n(3,R),n(20,y),n(2,A),n(17,c),n(17,c),Be(s)},le=async C=>{try{await Po(Tt($e,"Pacientes",C.id)),Nn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(ue){console.error(ue)}const ge=hs(ft($e,"sesiones"),Do("pacienteID","==",C.id));console.log(`desde delete q=pacientes a borrar ${ge} - paciente: ${C.nombre} ${C.apellido} ${C.id}`);try{(await yd(ge)).forEach(ze=>{Po(ze.ref)})}catch(ue){console.log(ue)}},Ve=()=>{const C=c.indexOf(s);Ps.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(ge=>{ge.isConfirmed&&(Ps.fire("Deleted!","Your file has been deleted.","success"),le(c[y]),n(17,c=[...c.slice(0,C),...c.slice(C+1)]),n(7,E=n(8,P=n(9,S=n(0,h="")))),n(20,y=Math.min(y,R.length-2)))})},oe=C=>{n(4,s.plan=C,s),n(4,s.nombre=E,s),n(4,s.apellido=P,s),n(4,s.nroSocio=S,s),n(3,R[y].plan=C,R),Be(s)},Ke=C=>{n(0,h=C.detail),console.log(h),s.plan.plan!=h.plan&&oe(h)},Ue=C=>{C?(n(10,J="particular"),n(6,w=!1)):(n(10,J="plan"),n(6,w=!0))},Y=C=>{n(20,y=C.detail[0]);const ge=C.detail[1];bn(mi,i=C.detail[2],i);const ue=typeof ge=="string"?"particular":ge.plan;console.log(`i ${y}, planSelect ${ue}`),n(0,h=ue=="particular"?"particular":R[y].plan),h!="particular"&&(n(5,m=u.findIndex(Wt=>Wt.plan===ue)),console.log(`indicePlan ${m}, ${typeof m}`));const ze=ue=="particular";Ue(ze)},V=C=>{const ge=C.detail.valor.SelectPlanVisible;ge?ge&&h=="particular"&&n(0,h="210"):n(0,h="particular"),oe(h),Ue(!ge)};function Ce(){A=this.value,n(2,A)}function Z(){E=this.value,n(7,E)}function bt(){P=this.value,n(8,P)}function ut(){S=this.value,n(9,S)}return t.$$set=C=>{"pacientes"in C&&n(17,c=C.pacientes),"sesiones"in C&&n(18,l=C.sesiones),"planes"in C&&n(1,u=C.planes),"planSeleccionado"in C&&n(0,h=C.planSeleccionado),"optionsPlan"in C&&n(19,p=C.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,R=A?c.filter(C=>`${C.apellido}, ${C.nombre}`.toLowerCase().startsWith(A.toLowerCase())):c.map(C=>({nombre:C.nombre,apellido:C.apellido,plan:C.plan,nroSocio:C.nroSocio,id:C.id}))),t.$$.dirty[0]&1048584&&n(4,s=R[y]),t.$$.dirty[0]&16&&s&&(bn(Kr,r=s,r),bn(No,a=s.apellido,a),bn(Oo,o=s.nombre,o),bn(mi,i=s.id,i)),t.$$.dirty[0]&16&&j(s)},[h,u,A,R,s,m,w,E,P,S,J,q,ce,Ve,Ke,Y,V,c,l,p,y,Ce,Z,bt,ut]}class gE extends pn{constructor(e){super(),fn(this,e,pE,hE,qt,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0,optionsPlan:19},null,[-1,-1])}}function mE(t){let e,n,s,i,r,o,a;return{c(){e=I("p"),n=ee("total general:"),s=ee(t[0]),i=X(),r=I("p"),o=ee("total por paciente: "),a=ee(t[1]),g(e,"id","totalGeneral")},m(c,l){me(c,e,l),b(e,n),b(e,s),me(c,i,l),me(c,r,l),b(r,o),b(r,a)},p(c,[l]){l&1&&et(s,c[0]),l&2&&et(a,c[1])},i:_e,o:_e,d(c){c&&pe(e),c&&pe(i),c&&pe(r)}}}function yE(t,e,n){let{registrosMesActual:s}=e,{varSumaValorPagoPorPaciente:i}=e;return t.$$set=r=>{"registrosMesActual"in r&&n(0,s=r.registrosMesActual),"varSumaValorPagoPorPaciente"in r&&n(1,i=r.varSumaValorPagoPorPaciente)},[s,i]}class vE extends pn{constructor(e){super(),fn(this,e,yE,mE,qt,{registrosMesActual:0,varSumaValorPagoPorPaciente:1})}}function El(t,e,n){const s=t.slice();return s[46]=e[n],s}function _l(t,e,n){const s=t.slice();return s[49]=e[n],s}function Tl(t){let e,n,s=t[49].diaSesion+"",i,r,o=t[49].valorSesion+"",a,c,l=t[49].fechaPago+"",u,h,d=t[49].valorPago+"",p,m,y;return{c(){e=I("option"),n=ee("dia sesion: "),i=ee(s),r=ee(" - valor sesion: "),a=ee(o),c=ee(`\r
              - dia pago `),u=ee(l),h=ee(" - valor pago "),p=ee(d),m=X(),g(e,"class"," svelte-1imwuid"),e.__value=y=t[49].id,e.value=e.__value},m(w,A){me(w,e,A),b(e,n),b(e,i),b(e,r),b(e,a),b(e,c),b(e,u),b(e,h),b(e,p),b(e,m)},p(w,A){A[0]&1&&s!==(s=w[49].diaSesion+"")&&et(i,s),A[0]&1&&o!==(o=w[49].valorSesion+"")&&et(a,o),A[0]&1&&l!==(l=w[49].fechaPago+"")&&et(u,l),A[0]&1&&d!==(d=w[49].valorPago+"")&&et(p,d),A[0]&1&&y!==(y=w[49].id)&&(e.__value=y,e.value=e.__value)},d(w){w&&pe(e)}}}function Cl(t){let e=Object.values(t[49]).includes(t[3])&&t[49].diaSesion.slice(5,7)==t[5],n,s=e&&Tl(t);return{c(){s&&s.c(),n=Dl()},m(i,r){s&&s.m(i,r),me(i,n,r)},p(i,r){r[0]&41&&(e=Object.values(i[49]).includes(i[3])&&i[49].diaSesion.slice(5,7)==i[5]),e?s?s.p(i,r):(s=Tl(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&pe(n)}}}function wE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,y,w,A,E,P,S,R,J,j,se,q,Be,ce,le,Ve,oe,Ke,Ue=t[13],Y=[];for(let V=0;V<Ue.length;V+=1)Y[V]=Sl(El(t,Ue,V));return{c(){e=I("div"),n=I("form"),s=I("div"),i=I("div"),r=I("label"),r.textContent="pago",o=I("input"),a=X(),c=I("label"),c.textContent="valor sesion",l=I("input"),u=X(),h=I("div"),d=I("label"),d.textContent="Dia Sesion",p=I("input"),m=X(),y=I("label"),y.textContent="Fecha Pago",w=I("input"),A=X(),E=I("div"),P=I("button"),P.textContent="update",S=X(),R=I("button"),R.textContent="delete",J=X(),j=I("button"),j.textContent="Agregar sesión",se=X(),q=I("select");for(let V=0;V<Y.length;V+=1)Y[V].c();Be=X(),ce=I("button"),le=ee("registros mes "),Ve=ee(t[5]),g(r,"for","valorPago"),g(r,"class","svelte-1imwuid"),g(o,"name","valorPago"),g(o,"type","number"),g(o,"step","100"),g(o,"min","0"),g(o,"placeholder","Valor pago"),g(o,"class","svelte-1imwuid"),g(c,"for","valorSesion"),g(c,"class","svelte-1imwuid"),g(l,"name","valorSesion"),g(l,"type","number"),g(l,"step","100"),g(l,"min","0"),g(l,"placeholder","Valor sesión"),g(l,"class","svelte-1imwuid"),g(i,"id","inputsFormSesionesI"),g(i,"class","svelte-1imwuid"),g(d,"for","diaSesion"),g(d,"class","svelte-1imwuid"),g(p,"name","diaSesion"),g(p,"type","date"),g(p,"placeholder","Día sesión"),g(p,"class","svelte-1imwuid"),g(y,"for","fechaPago"),g(y,"class","svelte-1imwuid"),g(w,"name","fechaPago"),g(w,"type","date"),g(w,"placeholder","Fecha pago"),g(w,"class","svelte-1imwuid"),g(h,"id","inputsFormSesionesD"),g(h,"class","svelte-1imwuid"),g(P,"class","svelte-1imwuid"),g(R,"class","svelte-1imwuid"),g(j,"class","svelte-1imwuid"),g(q,"name","mes"),g(q,"id","mesRegistro"),g(q,"class","svelte-1imwuid"),t[5]===void 0&&rn(()=>t[31].call(q)),g(ce,"class","svelte-1imwuid"),g(E,"id","botonesFormSesiones"),g(E,"class","buttons svelte-1imwuid"),g(s,"id","form-Sesiones"),g(s,"class","svelte-1imwuid"),g(n,"class","svelte-1imwuid"),g(e,"id","contenedor-form-sesiones"),g(e,"class","svelte-1imwuid")},m(V,Ce){me(V,e,Ce),b(e,n),b(n,s),b(s,i),b(i,r),b(i,o),Ee(o,t[7]),b(i,a),b(i,c),b(i,l),Ee(l,t[8]),b(s,u),b(s,h),b(h,d),b(h,p),Ee(p,t[9]),b(h,m),b(h,y),b(h,w),Ee(w,t[10]),b(s,A),b(s,E),b(E,P),b(E,S),b(E,R),b(E,J),b(E,j),b(E,se),b(E,q);for(let Z=0;Z<Y.length;Z+=1)Y[Z]&&Y[Z].m(q,null);xt(q,t[5]),b(E,Be),b(E,ce),b(ce,le),b(ce,Ve),oe||(Ke=[z(o,"input",t[24]),z(l,"input",t[25]),z(p,"input",t[26]),z(w,"input",t[27]),z(P,"click",t[28]),z(R,"click",t[29]),z(j,"click",t[15]),z(q,"change",t[30]),z(q,"change",t[31]),z(ce,"click",t[32]),z(n,"submit",rf(t[22]))],oe=!0)},p(V,Ce){if(Ce[0]&128&&yi(o.value)!==V[7]&&Ee(o,V[7]),Ce[0]&256&&yi(l.value)!==V[8]&&Ee(l,V[8]),Ce[0]&512&&Ee(p,V[9]),Ce[0]&1024&&Ee(w,V[10]),Ce[0]&8192){Ue=V[13];let Z;for(Z=0;Z<Ue.length;Z+=1){const bt=El(V,Ue,Z);Y[Z]?Y[Z].p(bt,Ce):(Y[Z]=Sl(bt),Y[Z].c(),Y[Z].m(q,null))}for(;Z<Y.length;Z+=1)Y[Z].d(1);Y.length=Ue.length}Ce[0]&8224&&xt(q,V[5]),Ce[0]&32&&et(Ve,V[5])},d(V){V&&pe(e),Ui(Y,V),oe=!1,lt(Ke)}}}function Sl(t){let e,n=`${t[46].nro.toString().padStart(2,"0")} - ${t[46].nombre}`,s;return{c(){e=I("option"),s=ee(n),e.__value=t[46].nro,e.value=e.__value,g(e,"class","svelte-1imwuid")},m(i,r){me(i,e,r),b(e,s)},p:_e,d(i){i&&pe(e)}}}function bE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,y,w,A=t[0],E=[];for(let S=0;S<A.length;S+=1)E[S]=Cl(_l(t,A,S));d=new vE({props:{registrosMesActual:t[6],varSumaValorPagoPorPaciente:t[4]}});let P=wE(t);return{c(){e=I("main"),n=I("body"),s=I("h4"),i=ee("Paciente: "),r=ee(t[11]),o=ee(", "),a=ee(t[12]),c=X(),l=I("div"),u=I("select");for(let S=0;S<E.length;S+=1)E[S].c();h=X(),Ln(d.$$.fragment),p=X(),P&&P.c(),g(s,"class","svelte-1imwuid"),g(u,"id","select-sesiones"),g(u,"size",5),g(u,"class","svelte-1imwuid"),t[1]===void 0&&rn(()=>t[23].call(u)),g(l,"id","select"),g(l,"class","svelte-1imwuid"),g(n,"class","svelte-1imwuid"),g(e,"class","svelte-1imwuid")},m(S,R){me(S,e,R),b(e,n),b(n,s),b(s,i),b(s,r),b(s,o),b(s,a),b(n,c),b(n,l),b(l,u);for(let J=0;J<E.length;J+=1)E[J]&&E[J].m(u,null);xt(u,t[1]),b(l,h),on(d,l,null),b(n,p),P&&P.m(n,null),m=!0,y||(w=[z(u,"change",t[14]),z(u,"change",t[23])],y=!0)},p(S,R){if((!m||R[0]&2048)&&et(r,S[11]),(!m||R[0]&4096)&&et(a,S[12]),R[0]&41){A=S[0];let j;for(j=0;j<A.length;j+=1){const se=_l(S,A,j);E[j]?E[j].p(se,R):(E[j]=Cl(se),E[j].c(),E[j].m(u,null))}for(;j<E.length;j+=1)E[j].d(1);E.length=A.length}R[0]&3&&xt(u,S[1]);const J={};R[0]&64&&(J.registrosMesActual=S[6]),R[0]&16&&(J.varSumaValorPagoPorPaciente=S[4]),d.$set(J),P.p(S,R)},i(S){m||(St(d.$$.fragment,S),m=!0)},o(S){Ft(d.$$.fragment,S),m=!1},d(S){S&&pe(e),Ui(E,S),an(d),P&&P.d(),y=!1,lt(w)}}}function EE(t,e,n){let s,i,r;Xt(t,mi,T=>n(3,s=T)),Xt(t,No,T=>n(11,i=T)),Xt(t,Oo,T=>n(12,r=T));let{sesiones:o}=e,{pacientes:a}=e,{planes:c}=e,{planSeleccionado:l}=e,u,h=0;const d=new Date;let p=d.getMonth()+1,m=d.getFullYear(),y=p;console.log(`mesSeleccionado ${y}`);let w=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}],A,E,P=0;const S=T=>{if(n(1,A=T.target.value),console.log(o),n(2,E=o.find(je=>je.id===A)),console.log("selectedSession",E),n(7,se=E.valorPago),console.log(`planSeleccionado: ${l}`),typeof l.plan>"u"||l.plan=="particular"||!l)n(8,q=E.valorSesion),console.log("particular",q);else{var ie=c.find(je=>je.plan==l);console.log(ie),console.log("OS",q)}n(10,ce=E.fechaPago),n(9,Be=E.diaSesion)},R=async()=>{console.log("Add sesion",E);try{const T=await vd(ft($e,"sesiones"),{valorPago:se,valorSesion:q,diaSesion:Be,fechaPago:ce,pacienteID:s});console.log("sesion agregada"),Nn({text:"Nueva sesion agregada"}).showToast(),n(1,A=T.id)}catch(T){console.error(T)}},J=async T=>{console.log("Update sesion",T);try{await xa(Tt($e,"sesiones",T.id),{valorPago:se,valorSesion:q,fechaPago:ce,diaSesion:Be}),Nn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ie){console.log(ie)}},j=async T=>{console.log("Delete sesion",T);try{await Po(Tt($e,"sesiones",T.id)),Nn({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(ie){console.error(ie)}};let se=5e3,q=5e3,Be=new Date().toISOString().slice(0,10),ce=new Date().toISOString().slice(0,10),le=p.toString().padStart(2,"0"),Ve=m.toString(),oe=`${Ve}-${le}-01`,Ke=`${Ve}-${le}-31`,Ue=T=>o.filter(je=>je.pacienteID===T&&je.diaSesion.slice(5,7)===y.toString().padStart(2,"0")).reduce((je,Et)=>je+Et.valorSesion,0);const Y=async T=>{T||(T=p);const ie=ft($e,"sesiones");console.log(`mesActual ${p} - mesSeleccionado ${T} `),le=p.toString().padStart(2,"0");var je=T.toString().padStart(2,"0");console.log(`mesActualFormateado ${le} - mesSeleccionadoFormateado ${je}`),p!=T?(oe=`${Ve}-${je}-01`,Ke=`${Ve}-${je}-31`):(oe=`${Ve}-${le}-01`,Ke=`${Ve}-${le}-31`);const Et=hs(ie,Do("diaSesion",">=",oe),Do("diaSesion","<=",Ke));try{const ei=await yd(Et),ef=ei.docs.map(es=>es.data());return console.log("sesiones por mes actual",ef),n(6,P=0),h=0,ei.forEach(es=>{let tf=es.data().pacienteID;const ti=a.find(dt=>dt.id==tf);console.log(ti);var ht=es.data().valorPago;if(ht==null&&(ht=0),typeof ht=="number")if(ti.plan=="particular")n(6,P+=ht),ht<q&&(h+=q-ht);else{const dt=ti.plan;console.log("planPacienteActual",dt),console.log(`planActual ${dt} - pagoSesion ${ht} - planActual.valorOs ${dt.valorOs}`),ht<dt.valorCoseguro&&(h+=dt.valorCoseguro-ht,console.log(`totalAdeudado: ${h}`)),n(6,P+=dt.valorOs+ht),console.log(`paciente ${ti.apellido}, fechaSesion: ${es.data().diaSesion}, valor Os + Coseguro$${dt.valorOs+dt.valorCoseguro}, total acumulado ${P}`)}}),console.log("Total pagos mes actual: ",P),console.log("Total adeudado mes actual: ",h),n(4,u=Ue(s)),P}catch(ei){return console.error("Error al obtener las sesiones y los pagos:",ei),[]}};function V(T){lf.call(this,t,T)}function Ce(){A=vi(this),n(1,A),n(0,o)}function Z(){se=yi(this.value),n(7,se)}function bt(){q=yi(this.value),n(8,q)}function ut(){Be=this.value,n(9,Be)}function C(){ce=this.value,n(10,ce)}const ge=()=>J(E),ue=()=>j(E),ze=T=>Y(T.target.value);function Wt(){y=vi(this),n(5,y),n(13,w)}const Zs=()=>Y(y);return t.$$set=T=>{"sesiones"in T&&n(0,o=T.sesiones),"pacientes"in T&&n(19,a=T.pacientes),"planes"in T&&n(20,c=T.planes),"planSeleccionado"in T&&n(21,l=T.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&1572865&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",c),t.$$.dirty[0]&7&&(n(2,E=o.find(T=>T.id===A)),console.log(E||"sin seleccion de sesion")),t.$$.dirty[0]&8&&n(4,u=Ue(s))},Y(),[o,A,E,s,u,y,P,se,q,Be,ce,i,r,w,S,R,J,j,Y,a,c,l,V,Ce,Z,bt,ut,C,ge,ue,ze,Wt,Zs]}class _E extends pn{constructor(e){super(),fn(this,e,EE,bE,qt,{sesiones:0,pacientes:19,planes:20,planSeleccionado:21},null,[-1,-1])}}function TE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p;return a=new gE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],optionsPlan:t[1],planSeleccionado:Il}}),u=new _E({props:{sesiones:t[2],pacientes:t[3],planes:t[0],planSeleccionado:Il}}),{c(){e=I("body"),n=I("button"),n.textContent="generar backup firestore",s=X(),i=I("div"),r=I("h5"),r.textContent="CRUD Pacientes",o=X(),Ln(a.$$.fragment),c=X(),l=I("div"),Ln(u.$$.fragment),g(i,"class","contenedor-pacientes svelte-1y3ujd1"),g(l,"class","contenedor-sesiones svelte-1y3ujd1"),g(e,"class","svelte-1y3ujd1")},m(m,y){me(m,e,y),b(e,n),b(e,s),b(e,i),b(i,r),b(i,o),on(a,i,null),b(e,c),b(e,l),on(u,l,null),h=!0,d||(p=z(n,"click",t[4]),d=!0)},p(m,[y]){const w={};y&4&&(w.sesiones=m[2]),y&8&&(w.pacientes=m[3]),y&1&&(w.planes=m[0]),y&2&&(w.optionsPlan=m[1]),a.$set(w);const A={};y&4&&(A.sesiones=m[2]),y&8&&(A.pacientes=m[3]),y&1&&(A.planes=m[0]),u.$set(A)},i(m){h||(St(a.$$.fragment,m),St(u.$$.fragment,m),h=!0)},o(m){Ft(a.$$.fragment,m),Ft(u.$$.fragment,m),h=!1},d(m){m&&pe(e),an(a),an(u),d=!1,p()}}}let Il="particular";function CE(t,e,n){let s=[],i=[],r=[],o=[];Nl(()=>{const c=[],l=ft($e,"sesiones"),u=ft($e,"Pacientes"),h=ft($e,"planes"),d=hs(l,jr("diaSesion")),p=hs(u,jr("apellido")),m=hs(h,jr("plan")),y=qr(d,E=>{n(2,s=E.docs.map(P=>({id:P.id,...P.data()})))});console.log("desde onMount CRUDSesiones",s),c.push(y);const w=qr(p,E=>{n(3,i=E.docs.map(P=>({id:P.id,...P.data()})))});c.push(w);const A=qr(m,E=>{n(0,r=E.docs.map(P=>({id:P.id,...P.data()})))});return c.push(A),()=>{c.forEach(E=>E())}});const a=()=>{const c="sesiones"+zr().toString()+"BU",l=ft($e,c);s.forEach(async m=>{const y=Tt(l);try{await $r(y,m),console.log("Documento sesion creado exitosamente")}catch(w){console.error("Error al crear el documento sesion:",w)}});const u="planes"+zr().toString()+"BU",h=ft($e,u);r.forEach(async m=>{const y=Tt(h);try{await $r(y,m),console.log("Documento plan creado exitosamente")}catch(w){console.error("Error al crear el documento plan:",w)}});const d="Pacientes"+zr().toString()+"BU",p=ft($e,d);i.forEach(async m=>{const y=Tt(p);try{await $r(y,m),console.log("Documento paciente creado exitosamente")}catch(w){console.error("Error al crear el documento paciente:",w)}})};return t.$$.update=()=>{t.$$.dirty&3&&(r.length!=0?(console.log(r),n(1,o=r.map(c=>c.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,o,s,i,a]}class SE extends pn{constructor(e){super(),fn(this,e,CE,TE,qt,{})}}function IE(t){let e,n,s;return n=new SE({}),{c(){e=I("div"),Ln(n.$$.fragment),g(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){me(i,e,r),on(n,e,null),s=!0},p:_e,i(i){s||(St(n.$$.fragment,i),s=!0)},o(i){Ft(n.$$.fragment,i),s=!1},d(i){i&&pe(e),an(n)}}}function AE(t){let e,n,s,i,r,o;return{c(){e=I("div"),n=I("h1"),n.textContent="ingrese la contraseña:",s=X(),i=I("input"),g(n,"class","svelte-uueu6x"),g(i,"type","password"),g(i,"class","svelte-uueu6x"),g(e,"class","ingreso svelte-uueu6x")},m(a,c){me(a,e,c),b(e,n),b(e,s),b(e,i),Ee(i,t[1]),r||(o=[z(i,"input",t[3]),z(i,"input",t[2])],r=!0)},p(a,c){c&2&&i.value!==a[1]&&Ee(i,a[1])},i:_e,o:_e,d(a){a&&pe(e),r=!1,lt(o)}}}function kE(t){let e,n,s,i;const r=[AE,IE],o=[];function a(c,l){return c[0]==="nada"?0:c[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=I("main"),s&&s.c(),g(e,"class","svelte-uueu6x")},m(c,l){me(c,e,l),~n&&o[n].m(e,null),i=!0},p(c,[l]){let u=n;n=a(c),n===u?~n&&o[n].p(c,l):(s&&(pf(),Ft(o[u],1,1,()=>{o[u]=null}),gf()),~n?(s=o[n],s?s.p(c,l):(s=o[n]=r[n](c),s.c()),St(s,1),s.m(e,null)):s=null)},i(c){i||(St(s),i=!0)},o(c){Ft(s),i=!1},d(c){c&&pe(e),~n&&o[n].d()}}}function DE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class PE extends pn{constructor(e){super(),fn(this,e,DE,kE,qt,{})}}new PE({target:document.getElementById("app")});
