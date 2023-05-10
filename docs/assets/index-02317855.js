(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Pe(){}function dl(t){return t()}function xa(){return Object.create(null)}function pt(t){t.forEach(dl)}function Js(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function xd(t){return Object.keys(t).length===0}function Ld(t,...e){if(t==null)return Pe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n){t.$$.on_destroy.push(Ld(e,n))}function Fs(t,e,n){return t.set(n),e}function E(t,e){t.appendChild(e)}function qe(t,e,n){t.insertBefore(e,n||null)}function Le(t){t.parentNode&&t.parentNode.removeChild(t)}function yo(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function se(t){return document.createTextNode(t)}function ie(){return se(" ")}function fl(){return se("")}function J(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Md(t){return function(e){return e.preventDefault(),t.call(this,e)}}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zs(t){return t===""?null:+t}function Bd(t){return Array.from(t.childNodes)}function gt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e){t.value=e??""}function dn(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Fd(t){for(const e of t.options)if(!e.disabled)return e}function vo(t){const e=t.querySelector(":checked")||Fd(t);return e&&e.__value}function Vd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let Xn;function Hn(t){Xn=t}function wo(){if(!Xn)throw new Error("Function called outside component initialization");return Xn}function pl(t){wo().$$.on_mount.push(t)}function gl(t){wo().$$.on_destroy.push(t)}function ml(){const t=wo();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Vd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Ud(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const en=[],La=[];let rn=[];const Ma=[],$d=Promise.resolve();let Sr=!1;function jd(){Sr||(Sr=!0,$d.then(yl))}function fn(t){rn.push(t)}const cr=new Set;let Jt=0;function yl(){if(Jt!==0)return;const t=Xn;do{try{for(;Jt<en.length;){const e=en[Jt];Jt++,Hn(e),qd(e.$$)}}catch(e){throw en.length=0,Jt=0,e}for(Hn(null),en.length=0,Jt=0;La.length;)La.pop()();for(let e=0;e<rn.length;e+=1){const n=rn[e];cr.has(n)||(cr.add(n),n())}rn.length=0}while(en.length);for(;Ma.length;)Ma.pop()();Sr=!1,cr.clear(),Hn(t)}function qd(t){if(t.fragment!==null){t.update(),pt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fn)}}function Hd(t){const e=[],n=[];rn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),rn=e}const Gs=new Set;let zd;function pn(t,e){t&&t.i&&(Gs.delete(t),t.i(e))}function Jn(t,e,n,s){if(t&&t.o){if(Gs.has(t))return;Gs.add(t),zd.c.push(()=>{Gs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Zn(t){t&&t.c()}function gn(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||fn(()=>{const o=t.$$.on_mount.map(dl).filter(Js);t.$$.on_destroy?t.$$.on_destroy.push(...o):pt(o),t.$$.on_mount=[]}),r.forEach(fn)}function mn(t,e){const n=t.$$;n.fragment!==null&&(Hd(n.after_update),pt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Kd(t,e){t.$$.dirty[0]===-1&&(en.push(t),jd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function kn(t,e,n,s,i,r,o,a=[-1]){const c=Xn;Hn(t);const l=t.$$={fragment:null,ctx:[],props:r,update:Pe,not_equal:i,bound:xa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:xa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const y=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),u&&Kd(t,h)),d}):[],l.update(),u=!0,pt(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Bd(e.target);l.fragment&&l.fragment.l(h),h.forEach(Le)}else l.fragment&&l.fragment.c();e.intro&&pn(t.$$.fragment),gn(t,e.target,e.anchor,e.customElement),yl()}Hn(c)}class Dn{$destroy(){mn(this,1),this.$destroy=Pe}$on(e,n){if(!Js(n))return Pe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!xd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ba(t,e,n){const s=t.slice();return s[5]=e[n],s}function Fa(t){let e,n=t[5]+"",s,i;return{c(){e=D("option"),s=se(n),e.__value=i=t[5],e.value=e.__value},m(r,o){qe(r,e,o),E(e,s)},p(r,o){o&2&&n!==(n=r[5]+"")&&gt(s,n),o&2&&i!==(i=r[5])&&(e.__value=i,e.value=e.__value)},d(r){r&&Le(e)}}}function Gd(t){let e,n,s,i=t[1],r=[];for(let o=0;o<i.length;o+=1)r[o]=Fa(Ba(t,i,o));return{c(){e=D("select");for(let o=0;o<r.length;o+=1)r[o].c();v(e,"name","plan"),v(e,"id","plan"),v(e,"class","svelte-1tnv1ho"),t[0]===void 0&&fn(()=>t[3].call(e))},m(o,a){qe(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);dn(e,t[0]),n||(s=[J(e,"change",t[3]),J(e,"change",t[2])],n=!0)},p(o,[a]){if(a&2){i=o[1];let c;for(c=0;c<i.length;c+=1){const l=Ba(o,i,c);r[c]?r[c].p(l,a):(r[c]=Fa(l),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=i.length}a&3&&dn(e,o[0])},i:Pe,o:Pe,d(o){o&&Le(e),yo(r,o),n=!1,pt(s)}}}function Wd(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e;const r=ml();function o(){r("cambioPlan",{valor:{planSeleccionado:i}})}function a(){i=vo(this),n(0,i),n(1,s)}return t.$$set=c=>{"planes"in c&&n(1,s=c.planes),"planSeleccionado"in c&&n(0,i=c.planSeleccionado)},[i,s,o,a]}class Qd extends Dn{constructor(e){super(),kn(this,e,Wd,Gd,Kt,{planes:1,planSeleccionado:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new Xd;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jd=function(t){const e=vl(t);return wl.encodeByteArray(e,!0)},ei=function(t){return Jd(t).replace(/\./g,"")},Zd=function(t){try{return wl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ef(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tf=()=>ef().__FIREBASE_DEFAULTS__,nf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zd(t[1]);return e&&JSON.parse(e)},bl=()=>{try{return tf()||nf()||sf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rf=t=>{var e,n;return(n=(e=bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},El=t=>{const e=rf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},of=()=>{var t;return(t=bl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Tl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ei(JSON.stringify(n)),ei(JSON.stringify(o)),a].join(".")}function cf(){try{return typeof indexedDB=="object"}catch{return!1}}function lf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="FirebaseError";class Gt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uf,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?hf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,a,s)}}function hf(t,e){return t.replace(df,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const df=/\{\$([^}]+)}/g;function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Va(r)&&Va(o)){if(!Ar(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Va(t){return t!==null&&typeof t=="object"}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class ff{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new af;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gf(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pf(t){return t===Rt?void 0:t}function gf(t){return t.instantiationMode==="EAGER"}/**
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
 */class mf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ff(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const yf={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},vf=q.INFO,wf={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},bf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=wf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=vf,this._logHandler=bf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Ef=(t,e)=>e.some(n=>t instanceof n);let Ua,$a;function Tf(){return Ua||(Ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _f(){return $a||($a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,kr=new WeakMap,Sl=new WeakMap,lr=new WeakMap,bo=new WeakMap;function Cf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Il.set(n,t)}).catch(()=>{}),bo.set(e,t),e}function If(t){if(kr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});kr.set(t,e)}let Dr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sf(t){Dr=t(Dr)}function Af(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ur(this),e,...n);return Sl.set(s,e.sort?e.sort():[e]),vt(s)}:_f().includes(t)?function(...e){return t.apply(ur(this),e),vt(Il.get(this))}:function(...e){return vt(t.apply(ur(this),e))}}function kf(t){return typeof t=="function"?Af(t):(t instanceof IDBTransaction&&If(t),Ef(t,Tf())?new Proxy(t,Dr):t)}function vt(t){if(t instanceof IDBRequest)return Cf(t);if(lr.has(t))return lr.get(t);const e=kf(t);return e!==t&&(lr.set(t,e),bo.set(e,t)),e}const ur=t=>bo.get(t);function Df(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=vt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vt(o.result),c.oldVersion,c.newVersion,vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Nf=["get","getKey","getAll","getAllKeys","count"],Pf=["put","add","delete","clear"],hr=new Map;function ja(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Pf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Nf.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return hr.set(e,r),r}Sf(t=>({...t,get:(e,n,s)=>ja(e,n)||t.get(e,n,s),has:(e,n)=>!!ja(e,n)||t.has(e,n)}));/**
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
 */class Of{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",qa="0.9.4";/**
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
 */const Ut=new Cl("@firebase/app"),xf="@firebase/app-compat",Lf="@firebase/analytics-compat",Mf="@firebase/analytics",Bf="@firebase/app-check-compat",Ff="@firebase/app-check",Vf="@firebase/auth",Uf="@firebase/auth-compat",$f="@firebase/database",jf="@firebase/database-compat",qf="@firebase/functions",Hf="@firebase/functions-compat",zf="@firebase/installations",Kf="@firebase/installations-compat",Gf="@firebase/messaging",Wf="@firebase/messaging-compat",Qf="@firebase/performance",Yf="@firebase/performance-compat",Xf="@firebase/remote-config",Jf="@firebase/remote-config-compat",Zf="@firebase/storage",ep="@firebase/storage-compat",tp="@firebase/firestore",np="@firebase/firestore-compat",sp="firebase",ip="9.17.2";/**
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
 */const Pr="[DEFAULT]",rp={[Nr]:"fire-core",[xf]:"fire-core-compat",[Mf]:"fire-analytics",[Lf]:"fire-analytics-compat",[Ff]:"fire-app-check",[Bf]:"fire-app-check-compat",[Vf]:"fire-auth",[Uf]:"fire-auth-compat",[$f]:"fire-rtdb",[jf]:"fire-rtdb-compat",[qf]:"fire-fn",[Hf]:"fire-fn-compat",[zf]:"fire-iid",[Kf]:"fire-iid-compat",[Gf]:"fire-fcm",[Wf]:"fire-fcm-compat",[Qf]:"fire-perf",[Yf]:"fire-perf-compat",[Xf]:"fire-rc",[Jf]:"fire-rc-compat",[Zf]:"fire-gcs",[ep]:"fire-gcs-compat",[tp]:"fire-fst",[np]:"fire-fst-compat","fire-js":"fire-js",[sp]:"fire-js-all"};/**
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
 */const ti=new Map,Or=new Map;function op(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Or.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Or.set(e,t);for(const n of ti.values())op(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ap={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new _l("app","Firebase",ap);/**
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
 */class cp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const kl=ip;function Dl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});if(n||(n=of()),!n)throw wt.create("no-options");const r=ti.get(i);if(r){if(Ar(n,r.options)&&Ar(s,r.config))return r;throw wt.create("duplicate-app",{appName:i})}const o=new mf(i);for(const c of Or.values())o.addComponent(c);const a=new cp(n,s,o);return ti.set(i,a),a}function Nl(t=Pr){const e=ti.get(t);if(!e&&t===Pr)return Dl();if(!e)throw wt.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=(s=rp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}es(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const lp="firebase-heartbeat-database",up=1,ts="firebase-heartbeat-store";let dr=null;function Pl(){return dr||(dr=Df(lp,up,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),dr}async function hp(t){try{return(await Pl()).transaction(ts).objectStore(ts).get(Ol(t))}catch(e){if(e instanceof Gt)Ut.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function Ha(t,e){try{const s=(await Pl()).transaction(ts,"readwrite");return await s.objectStore(ts).put(e,Ol(t)),s.done}catch(n){if(n instanceof Gt)Ut.warn(n.message);else{const s=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(s.message)}}}function Ol(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dp=1024,fp=30*24*60*60*1e3;class pp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=za();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=fp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=za(),{heartbeatsToSend:n,unsentEntries:s}=gp(this._heartbeatsCache.heartbeats),i=ei(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function za(){return new Date().toISOString().substring(0,10)}function gp(t,e=dp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ka(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ka(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cf()?lf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ka(t){return ei(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yp(t){es(new yn("platform-logger",e=>new Of(e),"PRIVATE")),es(new yn("heartbeat",e=>new pp(e),"PRIVATE")),bt(Nr,qa,t),bt(Nr,qa,"esm2017"),bt("fire-js","")}yp("");var vp="firebase",wp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(vp,wp,"app");var bp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,Eo=Eo||{},R=bp||self;function ni(){}function Ti(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ms(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ep(t){return Object.prototype.hasOwnProperty.call(t,fr)&&t[fr]||(t[fr]=++Tp)}var fr="closure_uid_"+(1e9*Math.random()>>>0),Tp=0;function _p(t,e,n){return t.call.apply(t.bind,arguments)}function Cp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=_p:_e=Cp,_e.apply(null,arguments)}function Vs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ge(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function At(){this.s=this.s,this.o=this.o}var Ip=0;At.prototype.s=!1;At.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ip!=0)&&Ep(this)};At.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function To(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ga(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ti(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ce(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Sp=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{R.addEventListener("test",ni,e),R.removeEventListener("test",ni,e)}catch{}return t}();function si(t){return/^[\s\xa0]*$/.test(t)}var Wa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function pr(t,e){return t<e?-1:t>e?1:0}function _i(){var t=R.navigator;return t&&(t=t.userAgent)?t:""}function tt(t){return _i().indexOf(t)!=-1}function _o(t){return _o[" "](t),t}_o[" "]=ni;function Ap(t){var e=Np;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kp=tt("Opera"),vn=tt("Trident")||tt("MSIE"),xl=tt("Edge"),Rr=xl||vn,Ll=tt("Gecko")&&!(_i().toLowerCase().indexOf("webkit")!=-1&&!tt("Edge"))&&!(tt("Trident")||tt("MSIE"))&&!tt("Edge"),Dp=_i().toLowerCase().indexOf("webkit")!=-1&&!tt("Edge");function Ml(){var t=R.document;return t?t.documentMode:void 0}var ii;e:{var gr="",mr=function(){var t=_i();if(Ll)return/rv:([^\);]+)(\)|;)/.exec(t);if(xl)return/Edge\/([\d\.]+)/.exec(t);if(vn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Dp)return/WebKit\/(\S+)/.exec(t);if(kp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(mr&&(gr=mr?mr[1]:""),vn){var yr=Ml();if(yr!=null&&yr>parseFloat(gr)){ii=String(yr);break e}}ii=gr}var Np={};function Pp(){return Ap(function(){let t=0;const e=Wa(String(ii)).split("."),n=Wa("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=pr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||pr(i[2].length==0,r[2].length==0)||pr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var xr;if(R.document&&vn){var Qa=Ml();xr=Qa||parseInt(ii,10)||void 0}else xr=void 0;var Op=xr;function ns(t,e){if(Ce.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ll){e:{try{_o(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Rp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ns.X.h.call(this)}}ge(ns,Ce);var Rp={2:"touch",3:"pen",4:"mouse"};ns.prototype.h=function(){ns.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ys="closure_listenable_"+(1e6*Math.random()|0),xp=0;function Lp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++xp,this.ba=this.ea=!1}function Ci(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Co(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Bl(t){const e={};for(const n in t)e[n]=t[n];return e}const Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fl(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Ya.length;r++)n=Ya[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ii(t){this.src=t,this.g={},this.h=0}Ii.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Mr(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Lp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Lr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Rl(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ci(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Io="closure_lm_"+(1e6*Math.random()|0),vr={};function Vl(t,e,n,s,i){if(s&&s.once)return $l(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Vl(t,e[r],n,s,i);return null}return n=ko(n),t&&t[ys]?t.N(e,n,ms(s)?!!s.capture:!!s,i):Ul(t,e,n,!1,s,i)}function Ul(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ms(i)?!!i.capture:!!i,a=Ao(t);if(a||(t[Io]=a=new Ii(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Mp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Sp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ql(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Mp(){function t(n){return e.call(t.src,t.listener,n)}const e=Bp;return t}function $l(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)$l(t,e[r],n,s,i);return null}return n=ko(n),t&&t[ys]?t.O(e,n,ms(s)?!!s.capture:!!s,i):Ul(t,e,n,!0,s,i)}function jl(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)jl(t,e[r],n,s,i);else s=ms(s)?!!s.capture:!!s,n=ko(n),t&&t[ys]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Mr(r,n,s,i),-1<n&&(Ci(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ao(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mr(e,n,s,i)),(n=-1<t?e[t]:null)&&So(n))}function So(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ys])Lr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ql(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ao(e))?(Lr(n,t),n.h==0&&(n.src=null,e[Io]=null)):Ci(t)}}}function ql(t){return t in vr?vr[t]:vr[t]="on"+t}function Bp(t,e){if(t.ba)t=!0;else{e=new ns(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&So(t),t=n.call(s,e)}return t}function Ao(t){return t=t[Io],t instanceof Ii?t:null}var wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ko(t){return typeof t=="function"?t:(t[wr]||(t[wr]=function(e){return t.handleEvent(e)}),t[wr])}function le(){At.call(this),this.i=new Ii(this),this.P=this,this.I=null}ge(le,At);le.prototype[ys]=!0;le.prototype.removeEventListener=function(t,e,n,s){jl(this,t,e,n,s)};function fe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ce(e,t);else if(e instanceof Ce)e.target=e.target||t;else{var i=e;e=new Ce(s,t),Fl(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Us(o,s,!0,e)&&i}if(o=e.g=t,i=Us(o,s,!0,e)&&i,i=Us(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Us(o,s,!1,e)&&i}le.prototype.M=function(){if(le.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ci(n[s]);delete t.g[e],t.h--}}this.I=null};le.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Us(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Lr(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Do=R.JSON.stringify;function Fp(){var t=Kl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Vp{constructor(){this.h=this.g=null}add(e,n){const s=Hl.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Hl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Up,t=>t.reset());class Up{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $p(t){R.setTimeout(()=>{throw t},0)}function zl(t,e){Br||jp(),Fr||(Br(),Fr=!0),Kl.add(t,e)}var Br;function jp(){var t=R.Promise.resolve(void 0);Br=function(){t.then(qp)}}var Fr=!1,Kl=new Vp;function qp(){for(var t;t=Fp();){try{t.h.call(t.g)}catch(n){$p(n)}var e=Hl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fr=!1}function Si(t,e){le.call(this),this.h=t||1,this.g=e||R,this.j=_e(this.lb,this),this.l=Date.now()}ge(Si,le);C=Si.prototype;C.ca=!1;C.R=null;C.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),fe(this,"tick"),this.ca&&(No(this),this.start()))}};C.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function No(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}C.M=function(){Si.X.M.call(this),No(this),delete this.g};function Po(t,e,n){if(typeof t=="function")n&&(t=_e(t,n));else if(t&&typeof t.handleEvent=="function")t=_e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(t,e||0)}function Gl(t){t.g=Po(()=>{t.g=null,t.i&&(t.i=!1,Gl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Hp extends At{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gl(this)}M(){super.M(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(t){At.call(this),this.h=t,this.g={}}ge(ss,At);var Xa=[];function Wl(t,e,n,s){Array.isArray(n)||(n&&(Xa[0]=n.toString()),n=Xa);for(var i=0;i<n.length;i++){var r=Vl(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ql(t){Co(t.g,function(e,n){this.g.hasOwnProperty(n)&&So(e)},t),t.g={}}ss.prototype.M=function(){ss.X.M.call(this),Ql(this)};ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ai(){this.g=!0}Ai.prototype.Aa=function(){this.g=!1};function zp(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Kp(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function sn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Wp(t,n)+(s?" "+s:"")})}function Gp(t,e){t.info(function(){return"TIMEOUT: "+e})}Ai.prototype.info=function(){};function Wp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Do(n)}catch{return e}}var Wt={},Ja=null;function ki(){return Ja=Ja||new le}Wt.Pa="serverreachability";function Yl(t){Ce.call(this,Wt.Pa,t)}ge(Yl,Ce);function is(t){const e=ki();fe(e,new Yl(e))}Wt.STAT_EVENT="statevent";function Xl(t,e){Ce.call(this,Wt.STAT_EVENT,t),this.stat=e}ge(Xl,Ce);function Ne(t){const e=ki();fe(e,new Xl(e,t))}Wt.Qa="timingevent";function Jl(t,e){Ce.call(this,Wt.Qa,t),this.size=e}ge(Jl,Ce);function vs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){t()},e)}var Di={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zl={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Oo(){}Oo.prototype.h=null;function Za(t){return t.h||(t.h=t.i())}function eu(){}var ws={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ro(){Ce.call(this,"d")}ge(Ro,Ce);function xo(){Ce.call(this,"c")}ge(xo,Ce);var Vr;function Ni(){}ge(Ni,Oo);Ni.prototype.g=function(){return new XMLHttpRequest};Ni.prototype.i=function(){return{}};Vr=new Ni;function bs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ss(this),this.O=Qp,t=Rr?125:void 0,this.T=new Si(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var Qp=45e3,Ur={},ri={};C=bs.prototype;C.setTimeout=function(t){this.O=t};function $r(t,e,n){t.K=1,t.v=Oi(ut(e)),t.s=n,t.P=!0,nu(t,null)}function nu(t,e){t.F=Date.now(),Es(t),t.A=ut(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),uu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new tu,t.g=Pu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Hp(_e(t.La,t,t.g),t.N)),Wl(t.S,t.g,"readystatechange",t.ib),e=t.H?Bl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),is(),zp(t.j,t.u,t.A,t.m,t.U,t.s)}C.ib=function(t){t=t.target;const e=this.L;e&&ct(t)==3?e.l():this.La(t)};C.La=function(t){try{if(t==this.g)e:{const u=ct(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Rr||this.g&&(this.h.h||this.g.fa()||sc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?is(3):is(2)),Pi(this);var n=this.g.aa();this.Y=n;t:if(su(this)){var s=sc(this.g);t="";var i=s.length,r=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),zn(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Kp(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!si(a)){var l=a;break t}}l=null}if(n=l)sn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jr(this,n);else{this.i=!1,this.o=3,Ne(12),Lt(this),zn(this);break e}}this.P?(iu(this,u,o),Rr&&this.i&&u==3&&(Wl(this.S,this.T,"tick",this.hb),this.T.start())):(sn(this.j,this.m,o,null),jr(this,o)),u==4&&Lt(this),this.i&&!this.I&&(u==4?Au(this.l,this):(this.i=!1,Es(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ne(12)):(this.o=0,Ne(13)),Lt(this),zn(this)}}}catch{}finally{}};function su(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function iu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Yp(t,n),i==ri){e==4&&(t.o=4,Ne(14),s=!1),sn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ur){t.o=4,Ne(15),sn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else sn(t.j,t.m,i,null),jr(t,i);su(t)&&i!=ri&&i!=Ur&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ne(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),$o(e),e.K=!0,Ne(11))):(sn(t.j,t.m,n,"[Invalid Chunked Response]"),Lt(t),zn(t))}C.hb=function(){if(this.g){var t=ct(this.g),e=this.g.fa();this.C<e.length&&(Pi(this),iu(this,t,e),this.i&&t!=4&&Es(this))}};function Yp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ri:(n=Number(e.substring(n,s)),isNaN(n)?Ur:(s+=1,s+n>e.length?ri:(e=e.substr(s,n),t.C=s+n,e)))}C.cancel=function(){this.I=!0,Lt(this)};function Es(t){t.V=Date.now()+t.O,ru(t,t.O)}function ru(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vs(_e(t.gb,t),e)}function Pi(t){t.B&&(R.clearTimeout(t.B),t.B=null)}C.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Gp(this.j,this.A),this.K!=2&&(is(),Ne(17)),Lt(this),this.o=2,zn(this)):ru(this,this.V-t)};function zn(t){t.l.G==0||t.I||Au(t.l,t)}function Lt(t){Pi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,No(t.T),Ql(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function jr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||qr(n.h,t))){if(!t.J&&qr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ci(n),Li(n);else break e;Uo(n),Ne(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=vs(_e(n.cb,n),6e3));if(1>=fu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Mt(n,11)}else if((t.J||n.g==t)&&ci(n),!si(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.h;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Lo(r,r.h),r.h=null))}if(s.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Y(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Nu(s,s.H?s.ka:null,s.V),o.J){pu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Pi(a),Es(a)),s.g=o}else Iu(s);0<n.i.length&&Mi(n)}else l[0]!="stop"&&l[0]!="close"||Mt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mt(n,7):Vo(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}is(4)}catch{}}function Xp(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ti(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Jp(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ti(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ou(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ti(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Jp(t),s=Xp(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ft(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ft){this.h=e!==void 0?e:t.h,oi(this,t.j),this.s=t.s,this.g=t.g,ai(this,t.m),this.l=t.l,e=t.i;var n=new rs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ec(this,n),this.o=t.o}else t&&(n=String(t).match(au))?(this.h=!!e,oi(this,n[1]||"",!0),this.s=Un(n[2]||""),this.g=Un(n[3]||"",!0),ai(this,n[4]),this.l=Un(n[5]||"",!0),ec(this,n[6]||"",!0),this.o=Un(n[7]||"")):(this.h=!!e,this.i=new rs(null,this.h))}Ft.prototype.toString=function(){var t=[],e=this.j;e&&t.push($n(e,tc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($n(e,tc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($n(n,n.charAt(0)=="/"?ng:tg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$n(n,ig)),t.join("")};function ut(t){return new Ft(t)}function oi(t,e,n){t.j=n?Un(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ai(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ec(t,e,n){e instanceof rs?(t.i=e,rg(t.i,t.h)):(n||(e=$n(e,sg)),t.i=new rs(e,t.h))}function Y(t,e,n){t.i.set(e,n)}function Oi(t){return Y(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Un(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $n(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var tc=/[#\/\?@]/g,tg=/[#\?:]/g,ng=/[#\?]/g,sg=/[#\?@]/g,ig=/#/g;function rs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kt(t){t.g||(t.g=new Map,t.h=0,t.i&&Zp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=rs.prototype;C.add=function(t,e){kt(this),this.i=null,t=Nn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cu(t,e){kt(t),e=Nn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lu(t,e){return kt(t),e=Nn(t,e),t.g.has(e)}C.forEach=function(t,e){kt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};C.oa=function(){kt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};C.W=function(t){kt(this);let e=[];if(typeof t=="string")lu(this,t)&&(e=e.concat(this.g.get(Nn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return kt(this),this.i=null,t=Nn(this,t),lu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function uu(t,e,n){cu(t,e),0<n.length&&(t.i=null,t.g.set(Nn(t,e),To(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Nn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rg(t,e){e&&!t.j&&(kt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(cu(this,s),uu(this,i,n))},t)),t.j=e}var og=class{constructor(e,n){this.h=e,this.g=n}};function hu(t){this.l=t||ag,R.PerformanceNavigationTiming?(t=R.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(R.g&&R.g.Ga&&R.g.Ga()&&R.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ag=10;function du(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fu(t){return t.h?1:t.g?t.g.size:0}function qr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lo(t,e){t.g?t.g.add(e):t.h=e}function pu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hu.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return To(t.i)}function Mo(){}Mo.prototype.stringify=function(t){return R.JSON.stringify(t,void 0)};Mo.prototype.parse=function(t){return R.JSON.parse(t,void 0)};function cg(){this.g=new Mo}function lg(t,e,n){const s=n||"";try{ou(t,function(i,r){let o=i;ms(i)&&(o=Do(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function ug(t,e){const n=new Ai;if(R.Image){const s=new Image;s.onload=Vs($s,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Vs($s,n,s,"TestLoadImage: error",!1,e),s.onabort=Vs($s,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Vs($s,n,s,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function $s(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ts(t){this.l=t.ac||null,this.j=t.jb||!1}ge(Ts,Oo);Ts.prototype.g=function(){return new Ri(this.l,this.j)};Ts.prototype.i=function(t){return function(){return t}}({});function Ri(t,e){le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Bo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(Ri,le);var Bo=0;C=Ri.prototype;C.open=function(t,e){if(this.readyState!=Bo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,os(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||R).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=Bo};C.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function mu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}C.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_s(this):os(this),this.readyState==3&&mu(this)}};C.Va=function(t){this.g&&(this.response=this.responseText=t,_s(this))};C.Ua=function(t){this.g&&(this.response=t,_s(this))};C.ga=function(){this.g&&_s(this)};function _s(t){t.readyState=4,t.l=null,t.j=null,t.A=null,os(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hg=R.JSON.parse;function X(t){le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=yu,this.K=this.L=!1}ge(X,le);var yu="",dg=/^https?$/i,fg=["POST","PUT"];C=X.prototype;C.Ka=function(t){this.L=t};C.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vr.g(),this.C=this.u?Za(this.u):Za(Vr),this.g.onreadystatechange=_e(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){nc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=R.FormData&&t instanceof R.FormData,!(0<=Rl(fg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bu(this),0<this.B&&((this.K=pg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.qa,this)):this.A=Po(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){nc(this,r)}};function pg(t){return vn&&Pp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.qa=function(){typeof Eo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function nc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vu(t),xi(t)}function vu(t){t.D||(t.D=!0,fe(t,"complete"),fe(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,fe(this,"complete"),fe(this,"abort"),xi(this))};C.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),X.X.M.call(this)};C.Ha=function(){this.s||(this.F||this.v||this.l?wu(this):this.fb())};C.fb=function(){wu(this)};function wu(t){if(t.h&&typeof Eo<"u"&&(!t.C[1]||ct(t)!=4||t.aa()!=2)){if(t.v&&ct(t)==4)Po(t.Ha,0,t);else if(fe(t,"readystatechange"),ct(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(au)[1]||null;if(!i&&R.self&&R.self.location){var r=R.self.location.protocol;i=r.substr(0,r.length-1)}s=!dg.test(i?i.toLowerCase():"")}n=s}if(n)fe(t,"complete"),fe(t,"success");else{t.m=6;try{var o=2<ct(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",vu(t)}}finally{xi(t)}}}}function xi(t,e){if(t.g){bu(t);const n=t.g,s=t.C[0]?ni:null;t.g=null,t.C=null,e||fe(t,"ready");try{n.onreadystatechange=s}catch{}}}function bu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(R.clearTimeout(t.A),t.A=null)}function ct(t){return t.g?t.g.readyState:0}C.aa=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};C.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hg(e)}};function sc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case yu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}C.Ea=function(){return this.m};C.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Eu(t){let e="";return Co(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Fo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Eu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Y(t,e,n))}function Vn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tu(t){this.Ca=0,this.i=[],this.j=new Ai,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Vn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Vn("baseRetryDelayMs",5e3,t),this.bb=Vn("retryDelaySeedMs",1e4,t),this.$a=Vn("forwardChannelMaxRetries",2,t),this.ta=Vn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hu(t&&t.concurrentRequestLimit),this.Fa=new cg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}C=Tu.prototype;C.ma=8;C.G=1;function Vo(t){if(_u(t),t.G==3){var e=t.U++,n=ut(t.F);Y(n,"SID",t.I),Y(n,"RID",e),Y(n,"TYPE","terminate"),Cs(t,n),e=new bs(t,t.j,e,void 0),e.K=2,e.v=Oi(ut(n)),n=!1,R.navigator&&R.navigator.sendBeacon&&(n=R.navigator.sendBeacon(e.v.toString(),"")),!n&&R.Image&&(new Image().src=e.v,n=!0),n||(e.g=Pu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Es(e)}Du(t)}function Li(t){t.g&&($o(t),t.g.cancel(),t.g=null)}function _u(t){Li(t),t.u&&(R.clearTimeout(t.u),t.u=null),ci(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&R.clearTimeout(t.m),t.m=null)}function Mi(t){du(t.h)||t.m||(t.m=!0,zl(t.Ja,t),t.C=0)}function gg(t,e){return fu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=vs(_e(t.Ja,t,e),ku(t,t.C)),t.C++,!0)}C.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new bs(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Bl(r),Fl(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cu(this,i,e),n=ut(this.F),Y(n,"RID",t),Y(n,"CVER",22),this.D&&Y(n,"X-HTTP-Session-Id",this.D),Cs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Eu(r)))+"&"+e:this.o&&Fo(n,this.o,r)),Lo(this.h,i),this.Ya&&Y(n,"TYPE","init"),this.O?(Y(n,"$req",e),Y(n,"SID","null"),i.Z=!0,$r(i,n,null)):$r(i,n,e),this.G=2}}else this.G==3&&(t?ic(this,t):this.i.length==0||du(this.h)||ic(this))};function ic(t,e){var n;e?n=e.m:n=t.U++;const s=ut(t.F);Y(s,"SID",t.I),Y(s,"RID",n),Y(s,"AID",t.T),Cs(t,s),t.o&&t.s&&Fo(s,t.o,t.s),n=new bs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Cu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Lo(t.h,n),$r(n,s,e)}function Cs(t,e){t.ia&&Co(t.ia,function(n,s){Y(e,s,n)}),t.l&&ou({},function(n,s){Y(e,s,n)})}function Cu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?_e(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{lg(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Iu(t){t.g||t.u||(t.Z=1,zl(t.Ia,t),t.A=0)}function Uo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=vs(_e(t.Ia,t),ku(t,t.A)),t.A++,!0)}C.Ia=function(){if(this.u=null,Su(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vs(_e(this.eb,this),t)}};C.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ne(10),Li(this),Su(this))};function $o(t){t.B!=null&&(R.clearTimeout(t.B),t.B=null)}function Su(t){t.g=new bs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ut(t.sa);Y(e,"RID","rpc"),Y(e,"SID",t.I),Y(e,"CI",t.L?"0":"1"),Y(e,"AID",t.T),Y(e,"TYPE","xmlhttp"),Cs(t,e),t.o&&t.s&&Fo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Oi(ut(e)),n.s=null,n.P=!0,nu(n,t)}C.cb=function(){this.v!=null&&(this.v=null,Li(this),Uo(this),Ne(19))};function ci(t){t.v!=null&&(R.clearTimeout(t.v),t.v=null)}function Au(t,e){var n=null;if(t.g==e){ci(t),$o(t),t.g=null;var s=2}else if(qr(t.h,e))n=e.D,pu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ki(),fe(s,new Jl(s,n)),Mi(t)}else Iu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&gg(t,e)||s==2&&Uo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Mt(t,5);break;case 4:Mt(t,10);break;case 3:Mt(t,6);break;default:Mt(t,2)}}}function ku(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Mt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=_e(t.kb,t);n||(n=new Ft("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||oi(n,"https"),Oi(n)),ug(n.toString(),s)}else Ne(2);t.G=0,t.l&&t.l.va(e),Du(t),_u(t)}C.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Du(t){if(t.G=0,t.la=[],t.l){const e=gu(t.h);(e.length!=0||t.i.length!=0)&&(Ga(t.la,e),Ga(t.la,t.i),t.h.i.length=0,To(t.i),t.i.length=0),t.l.ua()}}function Nu(t,e,n){var s=n instanceof Ft?ut(n):new Ft(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ai(s,s.m);else{var i=R.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ft(null,void 0);s&&oi(r,s),e&&(r.g=e),i&&ai(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Y(s,n,e),Y(s,"VER",t.ma),Cs(t,s),s}function Pu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new X(new Ts({jb:!0})):new X(t.ra),e.Ka(t.H),e}function Ou(){}C=Ou.prototype;C.xa=function(){};C.wa=function(){};C.va=function(){};C.ua=function(){};C.Ra=function(){};function li(){if(vn&&!(10<=Number(Op)))throw Error("Environmental error: no available transport.")}li.prototype.g=function(t,e){return new $e(t,e)};function $e(t,e){le.call(this),this.g=new Tu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!si(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!si(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pn(this)}ge($e,le);$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ne(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Nu(t,null,t.V),Mi(t)};$e.prototype.close=function(){Vo(this.g)};$e.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Do(t),t=n);e.i.push(new og(e.ab++,t)),e.G==3&&Mi(e)};$e.prototype.M=function(){this.g.l=null,delete this.j,Vo(this.g),delete this.g,$e.X.M.call(this)};function Ru(t){Ro.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ge(Ru,Ro);function xu(){xo.call(this),this.status=1}ge(xu,xo);function Pn(t){this.g=t}ge(Pn,Ou);Pn.prototype.xa=function(){fe(this.g,"a")};Pn.prototype.wa=function(t){fe(this.g,new Ru(t))};Pn.prototype.va=function(t){fe(this.g,new xu)};Pn.prototype.ua=function(){fe(this.g,"b")};li.prototype.createWebChannel=li.prototype.g;$e.prototype.send=$e.prototype.u;$e.prototype.open=$e.prototype.m;$e.prototype.close=$e.prototype.close;Di.NO_ERROR=0;Di.TIMEOUT=8;Di.HTTP_ERROR=6;Zl.COMPLETE="complete";eu.EventType=ws;ws.OPEN="a";ws.CLOSE="b";ws.ERROR="c";ws.MESSAGE="d";le.prototype.listen=le.prototype.N;X.prototype.listenOnce=X.prototype.O;X.prototype.getLastError=X.prototype.Oa;X.prototype.getLastErrorCode=X.prototype.Ea;X.prototype.getStatus=X.prototype.aa;X.prototype.getResponseJson=X.prototype.Sa;X.prototype.getResponseText=X.prototype.fa;X.prototype.send=X.prototype.da;X.prototype.setWithCredentials=X.prototype.Ka;var mg=function(){return new li},yg=function(){return ki()},br=Di,vg=Zl,wg=Wt,rc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},bg=Ts,js=eu,Eg=X;const oc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Cl("@firebase/firestore");function ac(){return $t.logLevel}function S(t,...e){if($t.logLevel<=q.DEBUG){const n=e.map(jo);$t.debug(`Firestore (${On}): ${t}`,...n)}}function ht(t,...e){if($t.logLevel<=q.ERROR){const n=e.map(jo);$t.error(`Firestore (${On}): ${t}`,...n)}}function Hr(t,...e){if($t.logLevel<=q.WARN){const n=e.map(jo);$t.warn(`Firestore (${On}): ${t}`,...n)}}function jo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+t;throw ht(e),new Error(e)}function G(t,e){t||O()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(we.UNAUTHENTICATED))}shutdown(){}}class _g{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cg{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Et,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Et)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(G(typeof s.accessToken=="string"),new Lu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new we(e)}}class Ig{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=we.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(G(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Sg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Ig(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ag{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(G(typeof n.token=="string"),this.A=n.token,new Ag(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Dg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function H(t,e){return t<e?-1:t>e?1:0}function wn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new re(0,0))}static max(){return new x(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,s){n===void 0?n=0:n>e.length&&O(),s===void 0?s=e.length-n:s>e.length-n&&O(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return as.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof as?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class W extends as{construct(e,n,s){return new W(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new _(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new W(n)}static emptyPath(){return new W([])}}const Ng=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends as{construct(e,n,s){return new Ee(e,n,s)}static isValidIdentifier(e){return Ng.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new _(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new _(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(n)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.path=e}static fromPath(e){return new k(W.fromString(e))}static fromName(e){return new k(W.fromString(e).popFirst(5))}static empty(){return new k(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&W.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return W.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new k(new W(e.slice()))}}function Pg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new re(n+1,0):new re(n,s));return new _t(i,k.empty(),e)}function Og(t){return new _t(t.readTime,t.key,-1)}class _t{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new _t(x.min(),k.empty(),-1)}static max(){return new _t(x.max(),k.empty(),-1)}}function Rg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=k.comparator(t.documentKey,e.documentKey),n!==0?n:H(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t){if(t.code!==g.FAILED_PRECONDITION||t.message!==xg)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}qo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class cs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return t==null}function ui(t){return t===0&&1/t==-1/0}function Bg(t){return typeof t=="number"&&Number.isInteger(t)&&!ui(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Fg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new Fg("Invalid base64 string: "+i):i}}(e);return new Ie(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ie(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const Vg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(t){if(G(!!t),typeof t=="string"){let e=0;const n=Vg.exec(t);if(G(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:te(t.seconds),nanos:te(t.nanos)}}function te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bn(t){return typeof t=="string"?Ie.fromBase64String(t):Ie.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vu(t){const e=t.mapValue.fields.__previous_value__;return Fu(e)?Vu(e):e}function ls(t){const e=Ct(t.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fu(t)?4:Ug(t)?9007199254740991:10:O()}function it(t,e){if(t===e)return!0;const n=jt(t);if(n!==jt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ls(t).isEqual(ls(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ct(s.timestampValue),o=Ct(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return bn(s.bytesValue).isEqual(bn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return te(s.geoPointValue.latitude)===te(i.geoPointValue.latitude)&&te(s.geoPointValue.longitude)===te(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return te(s.integerValue)===te(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=te(s.doubleValue),o=te(i.doubleValue);return r===o?ui(r)===ui(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return wn(t.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(cc(r)!==cc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!it(r[a],o[a])))return!1;return!0}(t,e);default:return O()}}function us(t,e){return(t.values||[]).find(n=>it(n,e))!==void 0}function En(t,e){if(t===e)return 0;const n=jt(t),s=jt(e);if(n!==s)return H(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=te(i.integerValue||i.doubleValue),a=te(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return lc(t.timestampValue,e.timestampValue);case 4:return lc(ls(t),ls(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(i,r){const o=bn(i),a=bn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=H(o[c],a[c]);if(l!==0)return l}return H(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=H(te(i.latitude),te(r.latitude));return o!==0?o:H(te(i.longitude),te(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=En(o[c],a[c]);if(l)return l}return H(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===qs.mapValue&&r===qs.mapValue)return 0;if(i===qs.mapValue)return 1;if(r===qs.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=H(a[u],l[u]);if(h!==0)return h;const d=En(o[a[u]],c[l[u]]);if(d!==0)return d}return H(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function lc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=Ct(t),s=Ct(e),i=H(n.seconds,s.seconds);return i!==0?i:H(n.nanos,s.nanos)}function Tn(t){return zr(t)}function zr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ct(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,k.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=zr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${zr(s.fields[a])}`;return r+"}"}(t.mapValue):O();var e,n}function uc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kr(t){return!!t&&"integerValue"in t}function Ho(t){return!!t&&"arrayValue"in t}function hc(t){return!!t&&"nullValue"in t}function dc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ws(t){return!!t&&"mapValue"in t}function Kn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Kn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ug(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class hi{constructor(e,n){this.position=e,this.inclusive=n}}function fc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=k.comparator(k.fromName(o.referenceValue),n.key):s=En(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function pc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!it(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Uu{}class ne extends Uu{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new jg(e,n,s):n==="array-contains"?new zg(e,s):n==="in"?new Kg(e,s):n==="not-in"?new Gg(e,s):n==="array-contains-any"?new Wg(e,s):new ne(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new qg(e,s):new Hg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(En(n,this.value)):n!==null&&jt(this.value)===jt(n)&&this.matchesComparison(En(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xe extends Uu{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Xe(e,n)}matches(e){return $u(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $u(t){return t.op==="and"}function ju(t){return $g(t)&&$u(t)}function $g(t){for(const e of t.filters)if(e instanceof Xe)return!1;return!0}function Gr(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+Tn(t.value);if(ju(t))return t.filters.map(e=>Gr(e)).join(",");{const e=t.filters.map(n=>Gr(n)).join(",");return`${t.op}(${e})`}}function qu(t,e){return t instanceof ne?function(n,s){return s instanceof ne&&n.op===s.op&&n.field.isEqual(s.field)&&it(n.value,s.value)}(t,e):t instanceof Xe?function(n,s){return s instanceof Xe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&qu(r,s.filters[o]),!0):!1}(t,e):void O()}function Hu(t){return t instanceof ne?function(e){return`${e.field.canonicalString()} ${e.op} ${Tn(e.value)}`}(t):t instanceof Xe?function(e){return e.op.toString()+" {"+e.getFilters().map(Hu).join(" ,")+"}"}(t):"Filter"}class jg extends ne{constructor(e,n,s){super(e,n,s),this.key=k.fromName(s.referenceValue)}matches(e){const n=k.comparator(e.key,this.key);return this.matchesComparison(n)}}class qg extends ne{constructor(e,n){super(e,"in",n),this.keys=zu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hg extends ne{constructor(e,n){super(e,"not-in",n),this.keys=zu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>k.fromName(s.referenceValue))}class zg extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ho(n)&&us(n.arrayValue,this.value)}}class Kg extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&us(this.value.arrayValue,n)}}class Gg extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!us(this.value.arrayValue,n)}}class Wg extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ho(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>us(this.value.arrayValue,s))}}/**
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
 */class on{constructor(e,n="asc"){this.field=e,this.dir=n}}function Qg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.comparator=e,this.root=n||de.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hs(this.root,e,this.comparator,!0)}}class Hs{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??de.RED,this.left=i??de.EMPTY,this.right=r??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new de(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new de(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gc(this.data.getIterator())}getIteratorFrom(e){return new gc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new oe(this.comparator);return n.data=e,n}}class gc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ve([])}unionWith(e){let n=new oe(Ee.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ve(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ws(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kn(n)}setAll(e){let n=Ee.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Kn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ws(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ws(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Qt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Re(Kn(this.value))}}function Ku(t){const e=[];return Qt(t.fields,(n,s)=>{const i=new Ee([n]);if(Ws(s)){const r=Ku(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,x.min(),x.min(),x.min(),Re.empty(),0)}static newFoundDocument(e,n,s,i){return new be(e,1,n,x.min(),s,i,0)}static newNoDocument(e,n){return new be(e,2,n,x.min(),x.min(),Re.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,x.min(),x.min(),Re.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yg{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function mc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Yg(t,e,n,s,i,r,o)}function zo(t){const e=L(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Gr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Bi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Tn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Tn(s)).join(",")),e._t=n}return e._t}function Ko(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Qg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pc(t.startAt,e.startAt)&&pc(t.endAt,e.endAt)}function Wr(t){return k.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Xg(t,e,n,s,i,r,o,a){return new Rn(t,e,n,s,i,r,o,a)}function Go(t){return new Rn(t)}function yc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Gu(t){return t.collectionGroup!==null}function an(t){const e=L(t);if(e.wt===null){e.wt=[];const n=Fi(e),s=Wo(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new on(n)),e.wt.push(new on(Ee.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new on(Ee.keyField(),r))}}}return e.wt}function dt(t){const e=L(t);if(!e.gt)if(e.limitType==="F")e.gt=mc(e.path,e.collectionGroup,an(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of an(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new on(r.field,o))}const s=e.endAt?new hi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new hi(e.startAt.position,e.startAt.inclusive):null;e.gt=mc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function Qr(t,e){e.getFirstInequalityField(),Fi(t);const n=t.filters.concat([e]);return new Rn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yr(t,e,n){return new Rn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vi(t,e){return Ko(dt(t),dt(e))&&t.limitType===e.limitType}function Wu(t){return`${zo(dt(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Hu(s)).join(", ")}]`),Bi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Tn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Tn(s)).join(",")),`Target(${n})`}(dt(t))}; limitType=${t.limitType})`}function Ui(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of an(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=fc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,an(n),s)||n.endAt&&!function(i,r,o){const a=fc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,an(n),s))}(t,e)}function Jg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qu(t){return(e,n)=>{let s=!1;for(const i of an(t)){const r=Zg(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Zg(t,e,n){const s=t.field.isKeyField()?k.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?En(a,c):O()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function Xu(t){return{integerValue:""+t}}function em(t,e){return Bg(e)?Xu(e):Yu(t,e)}/**
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
 */class $i{constructor(){this._=void 0}}function tm(t,e,n){return t instanceof di?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof hs?Zu(t,e):t instanceof ds?eh(t,e):function(s,i){const r=Ju(s,i),o=vc(r)+vc(s.It);return Kr(r)&&Kr(s.It)?Xu(o):Yu(s.Tt,o)}(t,e)}function nm(t,e,n){return t instanceof hs?Zu(t,e):t instanceof ds?eh(t,e):n}function Ju(t,e){return t instanceof fi?Kr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class di extends $i{}class hs extends $i{constructor(e){super(),this.elements=e}}function Zu(t,e){const n=th(e);for(const s of t.elements)n.some(i=>it(i,s))||n.push(s);return{arrayValue:{values:n}}}class ds extends $i{constructor(e){super(),this.elements=e}}function eh(t,e){let n=th(e);for(const s of t.elements)n=n.filter(i=>!it(i,s));return{arrayValue:{values:n}}}class fi extends $i{constructor(e,n){super(),this.Tt=e,this.It=n}}function vc(t){return te(t.integerValue||t.doubleValue)}function th(t){return Ho(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof hs&&s instanceof hs||n instanceof ds&&s instanceof ds?wn(n.elements,s.elements,it):n instanceof fi&&s instanceof fi?it(n.It,s.It):n instanceof di&&s instanceof di}(t.transform,e.transform)}class im{constructor(e,n){this.version=e,this.transformResults=n}}class Qe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ji{}function nh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qo(t.key,Qe.none()):new As(t.key,t.data,Qe.none());{const n=t.data,s=Re.empty();let i=new oe(Ee.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Dt(t.key,s,new Ve(i.toArray()),Qe.none())}}function rm(t,e,n){t instanceof As?function(s,i,r){const o=s.value.clone(),a=bc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Dt?function(s,i,r){if(!Qs(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=bc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(sh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Gn(t,e,n,s){return t instanceof As?function(i,r,o,a){if(!Qs(i.precondition,r))return o;const c=i.value.clone(),l=Ec(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Dt?function(i,r,o,a){if(!Qs(i.precondition,r))return o;const c=Ec(i.fieldTransforms,a,r),l=r.data;return l.setAll(sh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Qs(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function om(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Ju(s.transform,i||null);r!=null&&(n===null&&(n=Re.empty()),n.set(s.field,r))}return n||null}function wc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&wn(n,s,(i,r)=>sm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class As extends ji{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dt extends ji{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function bc(t,e,n){const s=new Map;G(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,nm(o,a,n[i]))}return s}function Ec(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,tm(r,o,e))}return s}class Qo extends ji{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class am extends ji{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee,U;function lm(t){switch(t){default:return O();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function ih(t){if(t===void 0)return ht("GRPC error has no .code"),g.UNKNOWN;switch(t){case ee.OK:return g.OK;case ee.CANCELLED:return g.CANCELLED;case ee.UNKNOWN:return g.UNKNOWN;case ee.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case ee.INTERNAL:return g.INTERNAL;case ee.UNAVAILABLE:return g.UNAVAILABLE;case ee.UNAUTHENTICATED:return g.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case ee.NOT_FOUND:return g.NOT_FOUND;case ee.ALREADY_EXISTS:return g.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return g.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case ee.ABORTED:return g.ABORTED;case ee.OUT_OF_RANGE:return g.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return g.UNIMPLEMENTED;case ee.DATA_LOSS:return g.DATA_LOSS;default:return O()}}(U=ee||(ee={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Bu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=new ae(k.comparator);function ft(){return um}const rh=new ae(k.comparator);function jn(...t){let e=rh;for(const n of t)e=e.insert(n.key,n);return e}function oh(t){let e=rh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Bt(){return Wn()}function ah(){return Wn()}function Wn(){return new xn(t=>t.toString(),(t,e)=>t.isEqual(e))}const hm=new ae(k.comparator),dm=new oe(k.comparator);function F(...t){let e=dm;for(const n of t)e=e.add(n);return e}const fm=new oe(H);function ch(){return fm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,ks.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new qi(x.min(),i,ch(),ft(),F())}}class ks{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ks(s,n,F(),F(),F())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class lh{constructor(e,n){this.targetId=e,this.Rt=n}}class uh{constructor(e,n,s=Ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Tc{constructor(){this.bt=0,this.vt=Cc(),this.Pt=Ie.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=F(),n=F(),s=F();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:O()}}),new ks(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Cc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class pm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=ft(),this.Kt=_c(),this.Gt=new oe(H)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(Wr(r))if(s===0){const o=new k(r.path);this.zt(n,o,be.newNoDocument(o,x.min()))}else G(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Wr(a.target)){const c=new k(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,be.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=F();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new qi(e,n,this.Gt,this.Ut,s);return this.Ut=ft(),this.Kt=_c(),this.Gt=new oe(H),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Tc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new oe(H),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Tc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function _c(){return new ae(k.comparator)}function Cc(){return new ae(k.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ym=(()=>({and:"AND",or:"OR"}))();class vm{constructor(e,n){this.databaseId=e,this.yt=n}}function pi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function wm(t,e){return pi(t,e.toTimestamp())}function nt(t){return G(!!t),x.fromTimestamp(function(e){const n=Ct(e);return new re(n.seconds,n.nanos)}(t))}function Yo(t,e){return function(n){return new W(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dh(t){const e=W.fromString(t);return G(mh(e)),e}function Jr(t,e){return Yo(t.databaseId,e.path)}function Er(t,e){const n=dh(e);if(n.get(1)!==t.databaseId.projectId)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new k(fh(n))}function Zr(t,e){return Yo(t.databaseId,e)}function bm(t){const e=dh(t);return e.length===4?W.emptyPath():fh(e)}function eo(t){return new W(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fh(t){return G(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ic(t,e,n){return{name:Jr(t,e),fields:n.value.mapValue.fields}}function Em(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(G(l===void 0||typeof l=="string"),Ie.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),Ie.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?g.UNKNOWN:ih(c.code);return new _(l,c.message||"")}(o);n=new uh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Er(t,s.document.name),r=nt(s.document.updateTime),o=s.document.createTime?nt(s.document.createTime):x.min(),a=new Re({mapValue:{fields:s.document.fields}}),c=be.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ys(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Er(t,s.document),r=s.readTime?nt(s.readTime):x.min(),o=be.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ys([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Er(t,s.document),r=s.removedTargetIds||[];n=new Ys([],r,i,null)}else{if(!("filter"in e))return O();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new cm(i),o=s.targetId;n=new lh(o,r)}}return n}function Tm(t,e){let n;if(e instanceof As)n={update:Ic(t,e.key,e.value)};else if(e instanceof Qo)n={delete:Jr(t,e.key)};else if(e instanceof Dt)n={update:Ic(t,e.key,e.data),updateMask:Pm(e.fieldMask)};else{if(!(e instanceof am))return O();n={verify:Jr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof di)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ds)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fi)return{fieldPath:r.field.canonicalString(),increment:o.It};throw O()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function _m(t,e){return t&&t.length>0?(G(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?nt(s.updateTime):nt(i);return r.isEqual(x.min())&&(r=nt(i)),new im(r,s.transformResults||[])}(n,e))):[]}function Cm(t,e){return{documents:[Zr(t,e.path)]}}function Im(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Zr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return gh(Xe.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:tn(u.field),direction:km(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||Bi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Sm(t){let e=bm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){G(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=ph(u);return h instanceof Xe&&ju(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new on(nn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Bi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new hi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new hi(d,h)}(n.endAt)),Xg(e,i,o,r,a,"F",c,l)}function Am(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ph(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=nn(e.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=nn(e.unaryFilter.field);return ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nn(e.unaryFilter.field);return ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=nn(e.unaryFilter.field);return ne.create(r,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return ne.create(nn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Xe.create(e.compositeFilter.filters.map(n=>ph(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function km(t){return gm[t]}function Dm(t){return mm[t]}function Nm(t){return ym[t]}function tn(t){return{fieldPath:t.canonicalString()}}function nn(t){return Ee.fromServerFormat(t.fieldPath)}function gh(t){return t instanceof ne?function(e){if(e.op==="=="){if(dc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NAN"}};if(hc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NAN"}};if(hc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tn(e.field),op:Dm(e.op),value:e.value}}}(t):t instanceof Xe?function(e){const n=e.getFilters().map(s=>gh(s));return n.length===1?n[0]:{compositeFilter:{op:Nm(e.op),filters:n}}}(t):O()}function Pm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&rm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Gn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Gn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ah();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=nh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),F())}isEqual(e){return this.batchId===e.batchId&&wn(this.mutations,e.mutations,(n,s)=>wc(n,s))&&wn(this.baseMutations,e.baseMutations,(n,s)=>wc(n,s))}}class Xo{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){G(e.mutations.length===s.length);let i=hm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Xo(e,n,s,i)}}/**
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
 */class Rm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Vt{constructor(e,n,s,i,r=x.min(),o=x.min(),a=Ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.oe=e}}function Lm(t){const e=Sm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yr(e,e.limit,"L"):e}/**
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
 */class Mm{constructor(){this.Ze=new Bm}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(_t.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(_t.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Bm{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new oe(W.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new oe(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new _n(0)}static Sn(){return new _n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.changes=new xn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Gn(s.mutation,i,Ve.empty(),re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,F()).next(()=>s))}getLocalViewOfDocuments(e,n,s=F()){const i=Bt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=jn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Bt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,F()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ft();const o=Wn(),a=Wn();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Dt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Gn(u.mutation,l,u.mutation.getFieldMask(),re.now())):o.set(l.key,Ve.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Vm(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Wn();let i=new ae((o,a)=>o-a),r=F();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ve.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||F()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ah();u.forEach(d=>{if(!r.has(d)){const p=nh(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return k.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(Bt());let a=-1,c=r;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,F())).next(u=>({batchId:a,changes:oh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new k(n)).next(s=>{let i=jn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=jn();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Rn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,be.newInvalidDocument(l)))});let o=jn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Gn(l.mutation,c,Ve.empty(),re.now()),Ui(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:nt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Lm(s.bundledQuery),readTime:nt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class jm{constructor(){this.overlays=new ae(k.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Bt();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=Bt(),r=n.length+1,o=new k(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ae((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Bt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Bt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Rm(n,s));let r=this.ss.get(n);r===void 0&&(r=F(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.rs=new oe(ce.os),this.us=new oe(ce.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new ce(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new ce(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new k(new W([])),s=new ce(n,e),i=new ce(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new k(new W([])),s=new ce(n,e),i=new ce(n,e+1);let r=F();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ce(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ce{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return k.comparator(e.key,n.key)||H(e.gs,n.gs)}static cs(e,n){return H(e.gs,n.gs)||k.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new oe(ce.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Om(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new ce(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ce(n,0),i=new ce(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new oe(H);return n.forEach(i=>{const r=new ce(i,0),o=new ce(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;k.isDocumentKey(r)||(r=r.child(""));const o=new ce(new k(r),0);let a=new oe(H);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){G(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,i=>{const r=new ce(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new ce(n,0),i=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.Rs=e,this.docs=new ae(k.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let s=ft();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():be.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ft();const o=n.path,a=new k(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Rg(Og(u),s)<=0||(i.has(u.key)||Ui(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){O()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new zm(this)}getSize(e){return b.resolve(this.size)}}class zm extends Fm{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.persistence=e,this.vs=new xn(n=>zo(n),Ko),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Jo,this.targetCount=0,this.Ss=_n.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new _n(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new qo(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Km(this),this.indexManager=new Mm,this.remoteDocumentCache=function(s){return new Hm(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new xm(n),this.Os=new $m(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new qm(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){S("MemoryPersistence","Starting transaction:",e);const i=new Wm(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Wm extends Lg{constructor(e){super(),this.currentSequenceNumber=e}}class Zo{constructor(e){this.persistence=e,this.Bs=new Jo,this.Ls=null}static qs(e){return new Zo(e)}get Us(){if(this.Ls)return this.Ls;throw O()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const i=k.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,x.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=F(),i=F();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ea(e,n.fromCache,s,i)}}/**
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
 */class Qm{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(yc(n))return b.resolve(null);let s=dt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yr(n,null,"F"),s=dt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=F(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,Yr(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return yc(n)||i.isEqual(x.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(ac()<=q.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xr(n)),this.qi(e,o,n,Pg(i,-1)))})}Bi(e,n){let s=new oe(Qu(e));return n.forEach((i,r)=>{Ui(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return ac()<=q.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.Oi.getDocumentsMatchingQuery(e,n,_t.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new ae(H),this.Gi=new xn(r=>zo(r),Ko),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Um(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Xm(t,e,n,s){return new Ym(t,e,n,s)}async function yh(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=F();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function Jm(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const w=c.docVersions.get(p);G(w!==null),y.version.compareTo(w)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=F();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function vh(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Zm(t,e){const n=L(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ie.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(y,w,m){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=ft(),l=F();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ey(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(x.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function ey(t,e,n){let s=F(),i=F();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ft();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function ty(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ny(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Vt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function to(t,e,n){const s=L(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ss(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Sc(t,e,n){const s=L(t);let i=x.min(),r=F();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=L(a),h=u.Gi.get(l);return h!==void 0?b.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,dt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:x.min(),n?r:F())).next(a=>(sy(s,Jg(e),a),{documents:a,Yi:r})))}function sy(t,e,n){let s=t.Qi.get(e)||x.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Ac{constructor(){this.activeTargetIds=ch()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iy{constructor(){this.Ur=new Ac,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Ac,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ry{Gr(e){}shutdown(){}}/**
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
 */class kc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);S("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(S("RestConnection","Received: ",c),c),c=>{throw Hr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+On,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=oy[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Eg;a.setWithCredentials(!0),a.listenOnce(vg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case br.NO_ERROR:const l=a.getResponseJson();S("Connection","XHR received:",JSON.stringify(l)),r(l);break;case br.TIMEOUT:S("Connection",'RPC "'+e+'" timed out'),o(new _(g.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const u=a.getStatus();if(S("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(w)>=0?w:g.UNKNOWN}(d.status);o(new _(p,d.message))}else o(new _(g.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(g.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{S("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=mg(),o=yg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new bg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");S("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new ay({Yr:y=>{h?S("Connection","Not sending because WebChannel is closed:",y):(u||(S("Connection","Opening WebChannel transport."),l.open(),u=!0),S("Connection","WebChannel sending:",y),l.send(y))},Zr:()=>l.close()}),p=(y,w,m)=>{y.listen(w,T=>{try{m(T)}catch(I){setTimeout(()=>{throw I},0)}})};return p(l,js.EventType.OPEN,()=>{h||S("Connection","WebChannel transport opened.")}),p(l,js.EventType.CLOSE,()=>{h||(h=!0,S("Connection","WebChannel transport closed"),d.oo())}),p(l,js.EventType.ERROR,y=>{h||(h=!0,Hr("Connection","WebChannel transport errored:",y),d.oo(new _(g.UNAVAILABLE,"The operation could not be completed")))}),p(l,js.EventType.MESSAGE,y=>{var w;if(!h){const m=y.data[0];G(!!m);const T=m,I=T.error||((w=T[0])===null||w===void 0?void 0:w.error);if(I){S("Connection","WebChannel received error:",I);const P=I.status;let V=function(ke){const N=ee[ke];if(N!==void 0)return ih(N)}(P),K=I.message;V===void 0&&(V=g.INTERNAL,K="Unknown error status: "+P+" with message "+I.message),h=!0,d.oo(new _(V,K)),l.close()}else S("Connection","WebChannel received:",m),d.uo(m)}}),p(o,wg.STAT_EVENT,y=>{y.stat===rc.PROXY?S("Connection","Detected buffering proxy"):y.stat===rc.NOPROXY&&S("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Tr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return new vm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new wh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(ht(n.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new _(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ly extends bh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Em(this.Tt,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?nt(r.readTime):x.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=eo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=Wr(a)?{documents:Cm(i,a)}:{query:Im(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=hh(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=pi(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Am(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=eo(this.Tt),n.removeTarget=e,this.qo(n)}}class uy extends bh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=_m(e.writeResults,e.commitTime),s=nt(e.commitTime);return this.listener.eu(s,n)}return G(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=eo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Tm(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(g.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(g.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class dy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(ht(n),this.cu=!1):S("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Yt(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=L(a);c.mu.add(4),await Ds(c),c.pu.set("Unknown"),c.mu.delete(4),await zi(c)}(this))})}),this.pu=new dy(s,i)}}async function zi(t){if(Yt(t))for(const e of t.gu)await e(!0)}async function Ds(t){for(const e of t.gu)await e(!1)}function Eh(t,e){const n=L(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),sa(n)?na(n):Ln(n).Mo()&&ta(n,e))}function Th(t,e){const n=L(t),s=Ln(n);n.wu.delete(e),s.Mo()&&_h(n,e),n.wu.size===0&&(s.Mo()?s.Bo():Yt(n)&&n.pu.set("Unknown"))}function ta(t,e){t.Iu.Ft(e.targetId),Ln(t).Jo(e)}function _h(t,e){t.Iu.Ft(e),Ln(t).Yo(e)}function na(t){t.Iu=new pm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ln(t).start(),t.pu.au()}function sa(t){return Yt(t)&&!Ln(t).Oo()&&t.wu.size>0}function Yt(t){return L(t).mu.size===0}function Ch(t){t.Iu=void 0}async function py(t){t.wu.forEach((e,n)=>{ta(t,e)})}async function gy(t,e){Ch(t),sa(t)?(t.pu.fu(e),na(t)):t.pu.set("Unknown")}async function my(t,e,n){if(t.pu.set("Online"),e instanceof uh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await gi(t,s)}else if(e instanceof Ys?t.Iu.Qt(e):e instanceof lh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(x.min()))try{const s=await vh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Ie.EMPTY_BYTE_STRING,c.snapshotVersion)),_h(i,a);const l=new Vt(c.target,a,1,c.sequenceNumber);ta(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){S("RemoteStore","Failed to raise snapshot:",s),await gi(t,s)}}async function gi(t,e,n){if(!Ss(e))throw e;t.mu.add(1),await Ds(t),t.pu.set("Offline"),n||(n=()=>vh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await zi(t)})}function Ih(t,e){return e().catch(n=>gi(t,n,e))}async function Ki(t){const e=L(t),n=It(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;yy(e);)try{const i=await ty(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,vy(e,i)}catch(i){await gi(e,i)}Sh(e)&&Ah(e)}function yy(t){return Yt(t)&&t._u.length<10}function vy(t,e){t._u.push(e);const n=It(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Sh(t){return Yt(t)&&!It(t).Oo()&&t._u.length>0}function Ah(t){It(t).start()}async function wy(t){It(t).su()}async function by(t){const e=It(t);for(const n of t._u)e.tu(n.mutations)}async function Ey(t,e,n){const s=t._u.shift(),i=Xo.from(s,e,n);await Ih(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ki(t)}async function Ty(t,e){e&&It(t).Xo&&await async function(n,s){if(i=s.code,lm(i)&&i!==g.ABORTED){const r=n._u.shift();It(n).$o(),await Ih(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ki(n)}var i}(t,e),Sh(t)&&Ah(t)}async function Dc(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const s=Yt(n);n.mu.add(3),await Ds(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await zi(n)}async function _y(t,e){const n=L(t);e?(n.mu.delete(2),await zi(n)):e||(n.mu.add(2),await Ds(n),n.pu.set("Unknown"))}function Ln(t){return t.Tu||(t.Tu=function(e,n,s){const i=L(e);return i.ru(),new ly(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:py.bind(null,t),no:gy.bind(null,t),Ho:my.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),sa(t)?na(t):t.pu.set("Unknown")):(await t.Tu.stop(),Ch(t))})),t.Tu}function It(t){return t.Eu||(t.Eu=function(e,n,s){const i=L(e);return i.ru(),new uy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:wy.bind(null,t),no:Ty.bind(null,t),nu:by.bind(null,t),eu:Ey.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Ki(t)):(await t.Eu.stop(),t._u.length>0&&(S("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ia(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ra(t,e){if(ht("AsyncQueue",`${e}: ${t}`),Ss(t))return new _(g.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||k.comparator(n.key,s.key):(n,s)=>k.comparator(n.key,s.key),this.keyedMap=jn(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new cn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.Au=new ae(k.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):O():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Cn{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cn(e,n,cn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.bu=void 0,this.listeners=[]}}class Iy{constructor(){this.queries=new xn(e=>Wu(e),Vi),this.onlineState="Unknown",this.vu=new Set}}async function kh(t,e){const n=L(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Cy),i)try{r.bu=await n.onListen(s)}catch(o){const a=ra(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&oa(n)}async function Dh(t,e){const n=L(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Sy(t,e){const n=L(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&oa(n)}function Ay(t,e,n){const s=L(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function oa(t){t.vu.forEach(e=>{e.next()})}class Nh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Cn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Cn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.key=e}}class Oh{constructor(e){this.key=e}}class ky{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=F(),this.mutatedKeys=F(),this.ju=Qu(e),this.zu=new cn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Nc,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Ui(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;d&&p?d.data.isEqual(p.data)?y!==w&&(s.track({type:3,doc:p}),m=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),m=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),m=!0):d&&!p&&(s.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(p?(o=o.add(p),r=w?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new Cn(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Nc,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=F(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Oh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Ph(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=F();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Cn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Dy{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ny{constructor(e){this.key=e,this.ic=!1}}class Py{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new xn(a=>Wu(a),Vi),this.uc=new Map,this.cc=new Set,this.ac=new ae(k.comparator),this.hc=new Map,this.lc=new Jo,this.fc={},this.dc=new Map,this._c=_n.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Oy(t,e){const n=jy(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await ny(n.localStore,dt(e));n.isPrimaryClient&&Eh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ry(n,e,s,a==="current",o.resumeToken)}return i}async function Ry(t,e,n,s,i){t.mc=(h,d,p)=>async function(y,w,m,T){let I=w.view.Hu(m);I.Li&&(I=await Sc(y.localStore,w.query,!1).then(({documents:K})=>w.view.Hu(K,I)));const P=T&&T.targetChanges.get(w.targetId),V=w.view.applyChanges(I,y.isPrimaryClient,P);return Oc(y,w.targetId,V.tc),V.snapshot}(t,h,d,p);const r=await Sc(t.localStore,e,!0),o=new ky(e,r.Yi),a=o.Hu(r.documents),c=ks.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Oc(t,n,l.tc);const u=new Dy(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function xy(t,e){const n=L(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!Vi(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await to(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Th(n.remoteStore,s.targetId),no(n,s.targetId)}).catch(Is)):(no(n,s.targetId),await to(n.localStore,s.targetId,!0))}async function Ly(t,e,n){const s=qy(t);try{const i=await function(r,o){const a=L(r),c=re.now(),l=o.reduce((d,p)=>d.add(p.key),F());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=ft(),y=F();return a.ji.getEntries(d,l).next(w=>{p=w,p.forEach((m,T)=>{T.isValidDocument()||(y=y.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{u=w;const m=[];for(const T of o){const I=om(T,u.get(T.key).overlayedDocument);I!=null&&m.push(new Dt(T.key,I,Ku(I.value.mapValue),Qe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,m,o)}).next(w=>{h=w;const m=w.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,m)})}).then(()=>({batchId:h.batchId,changes:oh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new ae(H)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ns(s,i.changes),await Ki(s.remoteStore)}catch(i){const r=ra(i,"Failed to persist write");n.reject(r)}}async function Rh(t,e){const n=L(t);try{const s=await Zm(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?G(o.ic):i.removedDocuments.size>0&&(G(o.ic),o.ic=!1))}),await Ns(n,s,e)}catch(s){await Is(s)}}function Pc(t,e,n){const s=L(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=L(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&oa(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function My(t,e,n){const s=L(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new ae(k.comparator);o=o.insert(r,be.newNoDocument(r,x.min()));const a=F().add(r),c=new qi(x.min(),new Map,new oe(H),o,a);await Rh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),aa(s)}else await to(s.localStore,e,!1).then(()=>no(s,e,n)).catch(Is)}async function By(t,e){const n=L(t),s=e.batch.batchId;try{const i=await Jm(n.localStore,e);Lh(n,s,null),xh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ns(n,i)}catch(i){await Is(i)}}async function Fy(t,e,n){const s=L(t);try{const i=await function(r,o){const a=L(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(G(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Lh(s,e,n),xh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ns(s,i)}catch(i){await Is(i)}}function xh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Lh(t,e,n){const s=L(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function no(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Mh(t,s)})}function Mh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Th(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),aa(t))}function Oc(t,e,n){for(const s of n)s instanceof Ph?(t.lc.addReference(s.key,e),Vy(t,s)):s instanceof Oh?(S("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Mh(t,s.key)):O()}function Vy(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(S("SyncEngine","New document in limbo: "+n),t.cc.add(s),aa(t))}function aa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new k(W.fromString(e)),s=t._c.next();t.hc.set(s,new Ny(n)),t.ac=t.ac.insert(n,s),Eh(t.remoteStore,new Vt(dt(Go(n.path)),s,2,qo.at))}}async function Ns(t,e,n){const s=L(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=ea.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ss(u))throw u;S("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,y)}}}(s.localStore,r))}async function Uy(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const s=await yh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new _(g.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ns(n,s.Wi)}}function $y(t,e){const n=L(t),s=n.hc.get(e);if(s&&s.ic)return F().add(s.key);{let i=F();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function jy(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$y.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=My.bind(null,e),e.rc.Ho=Sy.bind(null,e.eventManager),e.rc.gc=Ay.bind(null,e.eventManager),e}function qy(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=By.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fy.bind(null,e),e}class Hy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Hi(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Xm(this.persistence,new Qm,e.initialUser,this.Tt)}Tc(e){return new Gm(Zo.qs,this.Tt)}Ic(e){return new iy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uy.bind(null,this.syncEngine),await _y(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Iy}createDatastore(e){const n=Hi(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new cy(i));var i;return function(r,o,a,c){return new hy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Pc(this.syncEngine,a,0),o=kc.C()?new kc:new ry,new fy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new Py(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);S("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ds(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=we.UNAUTHENTICATED,this.clientId=Mu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{S("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(S("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ra(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gy(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await yh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qy(t);S("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Dc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Dc(e.remoteStore,r)),t.onlineComponents=e}async function Qy(t){return t.offlineComponents||(S("FirestoreClient","Using default OfflineComponentProvider"),await Gy(t,new Hy)),t.offlineComponents}async function Fh(t){return t.onlineComponents||(S("FirestoreClient","Using default OnlineComponentProvider"),await Wy(t,new zy)),t.onlineComponents}function Yy(t){return Fh(t).then(e=>e.syncEngine)}async function so(t){const e=await Fh(t),n=e.eventManager;return n.onListen=Oy.bind(null,e.syncEngine),n.onUnlisten=xy.bind(null,e.syncEngine),n}function Xy(t,e,n={}){const s=new Et;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Bh({next:h=>{r.enqueueAndForget(()=>Dh(i,u)),h.fromCache&&a.source==="server"?c.reject(new _(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Nh(o,l,{includeMetadataChanges:!0,Ou:!0});return kh(i,u)}(await so(t),t.asyncQueue,e,n,s)),s.promise}const Rc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t,e,n){if(!n)throw new _(g.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jy(t,e,n,s){if(e===!0&&s===!0)throw new _(g.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xc(t){if(!k.isDocumentKey(t))throw new _(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lc(t){if(k.isDocumentKey(t))throw new _(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function st(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gi(t);throw new _(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Jy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Tg;switch(n.type){case"gapi":const s=n.client;return new Sg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rc.get(e);n&&(S("ComponentProvider","Removing Datastore"),Rc.delete(e),n.terminate())}(this),Promise.resolve()}}function Zy(t,e,n,s={}){var i;const r=(t=st(t,Wi))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Hr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=we.MOCK_USER;else{o=Tl(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new we(c)}t._authCredentials=new _g(new Lu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class Nt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class Tt extends Nt{constructor(e,n,s){super(e,n,Go(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new k(e))}withConverter(e){return new Tt(this.firestore,e,this._path)}}function mt(t,e,...n){if(t=Ye(t),Vh("collection","path",e),t instanceof Wi){const s=W.fromString(e,...n);return Lc(s),new Tt(t,null,s)}{if(!(t instanceof xe||t instanceof Tt))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(W.fromString(e,...n));return Lc(s),new Tt(t.firestore,null,s)}}function In(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Mu.R()),Vh("doc","path",e),t instanceof Wi){const s=W.fromString(e,...n);return xc(s),new xe(t,null,new k(s))}{if(!(t instanceof xe||t instanceof Tt))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(W.fromString(e,...n));return xc(s),new xe(t.firestore,t instanceof Tt?t.converter:null,new k(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new wh(this,"async_queue_retry"),this.Hc=()=>{const n=Tr();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Tr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Tr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Et;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ss(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ht("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=ia.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&O()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Bc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qt extends Wi{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new ev,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Uh(this),this._firestoreClient.terminate()}}function tv(t,e){const n=typeof t=="object"?t:Nl(),s=typeof t=="string"?t:e||"(default)",i=Al(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=El("firestore");r&&Zy(i,...r)}return i}function ca(t){return t._firestoreClient||Uh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uh(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Mg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ky(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Ie.fromBase64String(e))}catch(n){throw new _(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sn(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=/^__.*__$/;class sv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Dt(e,this.data,this.fieldMask,n,this.fieldTransforms):new As(e,this.data,n,this.fieldTransforms)}}class $h{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Dt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ha{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new ha(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return mi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(jh(this.ra)&&nv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class iv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Hi(e)}wa(e,n,s,i=!1){return new ha({ra:e,methodName:n,_a:s,path:Ee.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function da(t){const e=t._freezeSettings(),n=Hi(t._databaseId);return new iv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rv(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);fa("Data must be an object, but it was:",o,s);const a=qh(s,o);let c,l;if(r.merge)c=new Ve(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=io(e,h,n);if(!o.contains(d))throw new _(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zh(u,d)||u.push(d)}c=new Ve(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new sv(new Re(a),c,l)}class Yi extends la{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yi}}function ov(t,e,n,s){const i=t.wa(1,e,n);fa("Data must be an object, but it was:",i,s);const r=[],o=Re.empty();Qt(s,(c,l)=>{const u=pa(e,c,n);l=Ye(l);const h=i.ha(u);if(l instanceof Yi)r.push(u);else{const d=Ps(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ve(r);return new $h(o,a,i.fieldTransforms)}function av(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[io(e,s,n)],c=[i];if(r.length%2!=0)throw new _(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(io(e,r[d])),c.push(r[d+1]);const l=[],u=Re.empty();for(let d=a.length-1;d>=0;--d)if(!zh(l,a[d])){const p=a[d];let y=c[d];y=Ye(y);const w=o.ha(p);if(y instanceof Yi)l.push(p);else{const m=Ps(y,w);m!=null&&(l.push(p),u.set(p,m))}}const h=new Ve(l);return new $h(u,h,o.fieldTransforms)}function cv(t,e,n,s=!1){return Ps(n,t.wa(s?4:3,e))}function Ps(t,e){if(Hh(t=Ye(t)))return fa("Unsupported field value:",e,t),qh(t,e);if(t instanceof la)return function(n,s){if(!jh(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ps(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return em(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=re.fromDate(n);return{timestampValue:pi(s.Tt,i)}}if(n instanceof re){const i=new re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pi(s.Tt,i)}}if(n instanceof ua)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sn)return{bytesValue:hh(s.Tt,n._byteString)};if(n instanceof xe){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yo(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Gi(n)}`)}(t,e)}function qh(t,e){const n={};return Bu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qt(t,(s,i)=>{const r=Ps(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Hh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof re||t instanceof ua||t instanceof Sn||t instanceof xe||t instanceof la)}function fa(t,e,n){if(!Hh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Gi(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function io(t,e,n){if((e=Ye(e))instanceof Qi)return e._internalPath;if(typeof e=="string")return pa(t,e);throw mi("Field path arguments must be of type string or ",t,!1,void 0,n)}const lv=new RegExp("[~\\*/\\[\\]]");function pa(t,e,n){if(e.search(lv)>=0)throw mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qi(...e.split("."))._internalPath}catch{throw mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new _(g.INVALID_ARGUMENT,a+t+c)}function zh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uv extends Kh{data(){return super.data()}}function Xi(t,e){return typeof e=="string"?pa(t,e):e instanceof Qi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ga{}class Wh extends ga{}function ro(t,e,...n){let s=[];e instanceof ga&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof ma).length,o=i.filter(a=>a instanceof Ji).length;if(r>1||r>0&&o>0)throw new _(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Ji extends Wh{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ji(e,n,s)}_apply(e){const n=this._parse(e);return Qh(e._query,n),new Nt(e.firestore,e.converter,Qr(e._query,n))}_parse(e){const n=da(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Uc(u,l);const d=[];for(const p of u)d.push(Vc(a,i,p));h={arrayValue:{values:d}}}else h=Vc(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Uc(u,l),h=cv(o,r,u,l==="in"||l==="not-in");return ne.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function hv(t,e,n){const s=e,i=Xi("where",t);return Ji._create(i,s,n)}class ma extends ga{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ma(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Xe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Qh(r,a),r=Qr(r,a)}(e._query,n),new Nt(e.firestore,e.converter,Qr(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ya extends Wh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ya(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new _(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new _(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new on(i,r);return function(a,c){if(Wo(a)===null){const l=Fi(a);l!==null&&Yh(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Rn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Fc(t,e="asc"){const n=e,s=Xi("orderBy",t);return ya._create(s,n)}function Vc(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new _(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gu(e)&&n.indexOf("/")!==-1)throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(W.fromString(n));if(!k.isDocumentKey(s))throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return uc(t,new k(s))}if(n instanceof xe)return uc(t,n._key);throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gi(n)}.`)}function Uc(t,e){if(!Array.isArray(t)||t.length===0)throw new _(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qh(t,e){if(e.isInequality()){const s=Fi(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new _(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Wo(t);r!==null&&Yh(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new _(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Yh(t,e,n){if(!n.isEqual(e))throw new _(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dv{convertValue(e,n="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const s={};return Qt(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new ua(te(e.latitude),te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const n=Ct(e);return new re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=W.fromString(e);G(mh(s));const i=new cs(s.get(1),s.get(3)),r=new k(s.popFirst(5));return i.isEqual(n)||ht(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xh extends Kh{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Xi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Xs extends Xh{data(e={}){return super.data(e)}}class Jh{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Xs(this._firestore,this._userDataWriter,s.key,s,new qn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Xs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Xs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:pv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class va extends dv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function $c(t){t=st(t,Nt);const e=st(t.firestore,qt),n=ca(e),s=new va(e);return Gh(t._query),Xy(n,t._query).then(i=>new Jh(e,s,t,i))}function wa(t,e,n,...s){t=st(t,xe);const i=st(t.firestore,qt),r=da(i);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Qi?av(r,"updateDoc",t._key,e,n,s):ov(r,"updateDoc",t._key,e),ba(i,[o.toMutation(t._key,Qe.exists(!0))])}function oo(t){return ba(st(t.firestore,qt),[new Qo(t._key,Qe.none())])}function Zh(t,e){const n=st(t.firestore,qt),s=In(t),i=fv(t.converter,e);return ba(n,[rv(da(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Qe.exists(!1))]).then(()=>s)}function yi(t,...e){var n,s,i;t=Ye(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Bc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof xe)l=st(t.firestore,qt),u=Go(t._key.path),c={next:h=>{e[o]&&e[o](gv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=st(t,Nt);l=st(h.firestore,qt),u=h._query;const d=new va(l);c={next:p=>{e[o]&&e[o](new Jh(l,d,h,p))},error:e[o+1],complete:e[o+2]},Gh(t._query)}return function(h,d,p,y){const w=new Bh(y),m=new Nh(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>kh(await so(h),m)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>Dh(await so(h),m))}}(ca(l),u,a,c)}function ba(t,e){return function(n,s){const i=new Et;return n.asyncQueue.enqueueAndForget(async()=>Ly(await Yy(n),s,i)),i.promise}(ca(t),e)}function gv(t,e,n){const s=n.docs.get(e._key),i=new va(t);return new Xh(t,i,e._key,s,new qn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){On=n})(kl),es(new yn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new qt(new Cg(n.getProvider("auth-internal")),new kg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cs(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),bt(oc,"3.8.4",t),bt(oc,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="firebasestorage.googleapis.com",mv="storageBucket",yv=2*60*1e3,vv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Gt{constructor(e,n,s=0){super(_r(e),`Firebase Storage: ${n} (${_r(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _r(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function _r(t){return"storage/"+t}function wv(){const t="An unknown error occurred, please check the error payload for server response.";return new at(rt.UNKNOWN,t)}function bv(){return new at(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ev(){return new at(rt.CANCELED,"User canceled the upload/download.")}function Tv(t){return new at(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function _v(t){return new at(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jc(t){return new at(rt.INVALID_ARGUMENT,t)}function td(){return new at(rt.APP_DELETED,"The Firebase app was deleted.")}function Cv(t){return new at(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=We.makeFromUrl(e,n)}catch{return new We(e,"")}if(s.path==="")return s;throw _v(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(V){V.path_=decodeURIComponent(V.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},w=n===ed?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",T=new RegExp(`^https?://${w}/${i}/${m}`,"i"),P=[{regex:a,indices:c,postModify:r},{regex:p,indices:y,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let V=0;V<P.length;V++){const K=P[V],ke=K.regex.exec(e);if(ke){const N=ke[K.indices.bucket];let Q=ke[K.indices.path];Q||(Q=""),s=new We(N,Q),K.postModify(s);break}}if(s==null)throw Tv(e);return s}}class Iv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...m){l||(l=!0,e.apply(null,m))}function h(m){i=setTimeout(()=>{i=null,t(p,c())},m)}function d(){r&&clearTimeout(r)}function p(m,...T){if(l){d();return}if(m){d(),u.call(null,m,...T);return}if(c()||o){d(),u.call(null,m,...T);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,h(P)}let y=!1;function w(m){y||(y=!0,d(),!l&&(i!==null?(m||(a=2),clearTimeout(i),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,w(!0)},n),w}function Av(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){return t!==void 0}function qc(t,e,n,s){if(s<e)throw jc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw jc(`Invalid value for '${t}'. Expected ${n} or less.`)}function Dv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vi||(vi={}));/**
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
 */function Nv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new zs(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===vi.NO_ERROR,c=r.getStatus();if(!a||Nv(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===vi.ABORT;s(!1,new zs(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new zs(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());kv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=wv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?td():Ev();o(c)}else{const c=bv();o(c)}};this.canceled_?n(!1,new zs(!1,null,!0)):this.backoffId_=Sv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Av(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zs{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ov(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Rv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Lv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Mv(t,e,n,s,i,r,o=!0){const a=Dv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return xv(l,e),Ov(l,n),Rv(l,r),Lv(l,s),new Pv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Fv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class wi{constructor(e,n){this._service=e,n instanceof We?this._location=n:this._location=We.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wi(e,n)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Fv(this._location.path)}get storage(){return this._service}get parent(){const e=Bv(this._location.path);if(e===null)return null;const n=new We(this._location.bucket,e);return new wi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Cv(e)}}function Hc(t,e){const n=e==null?void 0:e[mv];return n==null?null:We.makeFromBucketSpec(n,t)}function Vv(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Tl(i,t.app.options.projectId))}class Uv{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=ed,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yv,this._maxUploadRetryTime=vv,this._requests=new Set,i!=null?this._bucket=We.makeFromBucketSpec(i,this._host):this._bucket=Hc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=Hc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wi(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Iv(td());{const o=Mv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const zc="@firebase/storage",Kc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="storage";function $v(t=Nl(),e){t=Ye(t);const s=Al(t,nd).getImmediate({identifier:e}),i=El("storage");return i&&jv(s,...i),s}function jv(t,e,n,s={}){Vv(t,e,n,s)}function qv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Uv(n,s,i,e,kl)}function Hv(){es(new yn(nd,qv,"PUBLIC").setMultipleInstances(!0)),bt(zc,Kc,""),bt(zc,Kc,"esm2017")}Hv();const zv={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},sd=Dl(zv);$v(sd);const Fe=tv(sd);var Kv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ao={},Gv={get exports(){return ao},set exports(t){ao=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(Kv,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(m){m.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(m){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(m){m.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(m){m.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),y=this.options.position=="left"?d:"-"+d,w=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+y+","+w+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,y=window.innerWidth>0?window.innerWidth:screen.width;y<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Gv);const ln=ao,id="SweetAlert2:",Wv=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Ea=t=>t.charAt(0).toUpperCase()+t.slice(1),je=t=>Array.prototype.slice.call(t),Me=t=>{console.warn(`${id} ${typeof t=="object"?t.join(" "):t}`)},Xt=t=>{console.error(`${id} ${t}`)},Gc=[],Qv=t=>{Gc.includes(t)||(Gc.push(t),Me(t))},Yv=(t,e)=>{Qv(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},Zi=t=>typeof t=="function"?t():t,Ta=t=>t&&typeof t.toPromise=="function",Os=t=>Ta(t)?t.toPromise():Promise.resolve(t),_a=t=>t&&Promise.resolve(t)===t,un={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Xv=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Jv={},Zv=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],rd=t=>Object.prototype.hasOwnProperty.call(un,t),od=t=>Xv.indexOf(t)!==-1,co=t=>Jv[t],ew=t=>{rd(t)||Me(`Unknown parameter "${t}"`)},tw=t=>{Zv.includes(t)&&Me(`The parameter "${t}" is incompatible with toasts`)},nw=t=>{co(t)&&Yv(t,co(t))},sw=t=>{!t.backdrop&&t.allowOutsideClick&&Me('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)ew(e),t.toast&&tw(e),nw(e)},iw="swal2-",ad=t=>{const e={};for(const n in t)e[t[n]]=iw+t[n];return e},f=ad(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Qn=ad(["success","warning","info","question","error"]),Se=()=>document.body.querySelector(`.${f.container}`),Rs=t=>{const e=Se();return e?e.querySelector(t):null},Ke=t=>Rs(`.${t}`),z=()=>Ke(f.popup),xs=()=>Ke(f.icon),cd=()=>Ke(f.title),bi=()=>Ke(f["html-container"]),ld=()=>Ke(f.image),ud=()=>Ke(f["progress-steps"]),er=()=>Ke(f["validation-message"]),Je=()=>Rs(`.${f.actions} .${f.confirm}`),St=()=>Rs(`.${f.actions} .${f.deny}`),rw=()=>Ke(f["input-label"]),Mn=()=>Rs(`.${f.loader}`),Ht=()=>Rs(`.${f.actions} .${f.cancel}`),Ls=()=>Ke(f.actions),hd=()=>Ke(f.footer),tr=()=>Ke(f["timer-progress-bar"]),Ca=()=>Ke(f.close),ow=`
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
`,Ia=()=>{const t=je(z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=je(z().querySelectorAll(ow)).filter(n=>n.getAttribute("tabindex")!=="-1");return Wv(t.concat(e)).filter(n=>Ue(n))},Sa=()=>lt(document.body,f.shown)&&!lt(document.body,f["toast-shown"])&&!lt(document.body,f["no-backdrop"]),nr=()=>z()&&lt(z(),f.toast),aw=()=>z().hasAttribute("data-loading"),hn={previousBodyPadding:null},Te=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");je(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),je(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},lt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},cw=(t,e)=>{je(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(Qn).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},ze=(t,e,n)=>{if(cw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Me(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);$(t,e.customClass[n])}},Aa=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},dd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},fd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},$=(t,e)=>{fd(t,e,!0)},ot=(t,e)=>{fd(t,e,!1)},yt=(t,e)=>{const n=je(t.childNodes);for(let s=0;s<n.length;s++)if(lt(n[s],e))return n[s]},Yn=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},pe=(t,e="flex")=>{t.style.display=e},Ae=t=>{t.style.display="none"},Wc=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},sr=(t,e,n)=>{e?pe(t,n):Ae(t)},Ue=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),lw=()=>!Ue(Je())&&!Ue(St())&&!Ue(Ht()),Qc=t=>t.scrollHeight>t.clientHeight,pd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},ka=(t,e=!1)=>{const n=tr();Ue(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},uw=()=>{const t=tr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},gd=()=>typeof window>"u"||typeof document>"u",hw=100,M={},dw=()=>{M.previousActiveElement&&M.previousActiveElement.focus?(M.previousActiveElement.focus(),M.previousActiveElement=null):document.body&&document.body.focus()},fw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;M.restoreFocusTimeout=setTimeout(()=>{dw(),e()},hw),window.scrollTo(n,s)}),pw=`
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
`.replace(/(^|\n)\s*/g,""),gw=()=>{const t=Se();return t?(t.remove(),ot([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Ot=()=>{M.currentInstance.resetValidationMessage()},mw=()=>{const t=z(),e=yt(t,f.input),n=yt(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=yt(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=yt(t,f.textarea);e.oninput=Ot,n.onchange=Ot,r.onchange=Ot,o.onchange=Ot,a.oninput=Ot,s.oninput=()=>{Ot(),i.value=s.value},s.onchange=()=>{Ot(),s.nextSibling.value=s.value}},yw=t=>typeof t=="string"?document.querySelector(t):t,vw=t=>{const e=z();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},ww=t=>{window.getComputedStyle(t).direction==="rtl"&&$(Se(),f.rtl)},bw=t=>{const e=gw();if(gd()){Xt("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&$(n,f["no-transition"]),Te(n,pw);const s=yw(t.target);s.appendChild(n),vw(t),ww(s),mw()},Da=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Ew(t,e):t&&Te(e,t)},Ew=(t,e)=>{t.jquery?Tw(e,t):Te(e,t.toString())},Tw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},fs=(()=>{if(gd())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),_w=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Cw=(t,e)=>{const n=Ls(),s=Mn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Ae(n):pe(n),ze(n,e,"actions"),Iw(n,s,e),Te(s,e.loaderHtml),ze(s,e,"loader")};function Iw(t,e,n){const s=Je(),i=St(),r=Ht();Cr(s,"confirm",n),Cr(i,"deny",n),Cr(r,"cancel",n),Sw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Sw(t,e,n,s){if(!s.buttonsStyling)return ot([t,e,n],f.styled);$([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,$(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,$(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,$(n,f["default-outline"]))}function Cr(t,e,n){sr(t,n[`show${Ea(e)}Button`],"inline-block"),Te(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],ze(t,n,`${e}Button`),$(t,n[`${e}ButtonClass`])}function Aw(t,e){typeof e=="string"?t.style.background=e:e||$([document.documentElement,document.body],f["no-backdrop"])}function kw(t,e){e in f?$(t,f[e]):(Me('The "position" parameter is not valid, defaulting to "center"'),$(t,f.center))}function Dw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&$(t,f[n])}}const Nw=(t,e)=>{const n=Se();n&&(Aw(n,e.backdrop),kw(n,e.position),Dw(n,e.grow),ze(n,e,"container"))},B={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Pw=["input","file","range","select","radio","checkbox","textarea"],Ow=(t,e)=>{const n=z(),s=B.innerParams.get(t),i=!s||e.input!==s.input;Pw.forEach(r=>{const o=f[r],a=yt(n,o);Lw(r,e.inputAttributes),a.className=o,i&&Ae(a)}),e.input&&(i&&Rw(e),Mw(e))},Rw=t=>{if(!Oe[t.input])return Xt(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=md(t.input),n=Oe[t.input](e,t);pe(n),setTimeout(()=>{dd(n)})},xw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Lw=(t,e)=>{const n=Aa(z(),t);if(n){xw(n);for(const s in e)n.setAttribute(s,e[s])}},Mw=t=>{const e=md(t.input);t.customClass&&$(e,t.customClass.input)},Na=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Ms=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,$(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},md=t=>{const e=f[t]?f[t]:f.input;return yt(z(),e)},Oe={};Oe.text=Oe.email=Oe.password=Oe.number=Oe.tel=Oe.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:_a(e.inputValue)||Me(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Ms(t,t,e),Na(t,e),t.type=e.input,t);Oe.file=(t,e)=>(Ms(t,t,e),Na(t,e),t);Oe.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Ms(n,t,e),t};Oe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Te(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Ms(t,t,e),t};Oe.radio=t=>(t.textContent="",t);Oe.checkbox=(t,e)=>{const n=Aa(z(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Te(s,e.inputPlaceholder),t};Oe.textarea=(t,e)=>{t.value=e.inputValue,Na(t,e),Ms(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(z()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?z().style.width=`${r}px`:z().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Bw=(t,e)=>{const n=bi();ze(n,e,"htmlContainer"),e.html?(Da(e.html,n),pe(n,"block")):e.text?(n.textContent=e.text,pe(n,"block")):Ae(n),Ow(t,e)},Fw=(t,e)=>{const n=hd();sr(n,e.footer),e.footer&&Da(e.footer,n),ze(n,e,"footer")},Vw=(t,e)=>{const n=Ca();Te(n,e.closeButtonHtml),ze(n,e,"closeButton"),sr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},Uw=(t,e)=>{const n=B.innerParams.get(t),s=xs();if(n&&e.icon===n.icon){Xc(s,e),Yc(s,e);return}if(!e.icon&&!e.iconHtml)return Ae(s);if(e.icon&&Object.keys(Qn).indexOf(e.icon)===-1)return Xt(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Ae(s);pe(s),Xc(s,e),Yc(s,e),$(s,e.showClass.icon)},Yc=(t,e)=>{for(const n in Qn)e.icon!==n&&ot(t,Qn[n]);$(t,Qn[e.icon]),Hw(t,e),$w(),ze(t,e,"icon")},$w=()=>{const t=z(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},jw=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,qw=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Xc=(t,e)=>{t.textContent="",e.iconHtml?Te(t,Jc(e.iconHtml)):e.icon==="success"?Te(t,jw):e.icon==="error"?Te(t,qw):Te(t,Jc({question:"?",warning:"!",info:"i"}[e.icon]))},Hw=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Wc(t,n,"backgroundColor",e.iconColor);Wc(t,".swal2-success-ring","borderColor",e.iconColor)}},Jc=t=>`<div class="${f["icon-content"]}">${t}</div>`,zw=(t,e)=>{const n=ld();if(!e.imageUrl)return Ae(n);pe(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),Yn(n,"width",e.imageWidth),Yn(n,"height",e.imageHeight),n.className=f.image,ze(n,e,"image")},Kw=t=>{const e=document.createElement("li");return $(e,f["progress-step"]),Te(e,t),e},Gw=t=>{const e=document.createElement("li");return $(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},Ww=(t,e)=>{const n=ud();if(!e.progressSteps||e.progressSteps.length===0)return Ae(n);pe(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Me("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=Kw(s);if(n.appendChild(r),i===e.currentProgressStep&&$(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=Gw(e);n.appendChild(o)}})},Qw=(t,e)=>{const n=cd();sr(n,e.title||e.titleText,"block"),e.title&&Da(e.title,n),e.titleText&&(n.innerText=e.titleText),ze(n,e,"title")},Yw=(t,e)=>{const n=Se(),s=z();e.toast?(Yn(n,"width",e.width),s.style.width="100%",s.insertBefore(Mn(),xs())):Yn(s,"width",e.width),Yn(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Ae(er()),Xw(s,e)},Xw=(t,e)=>{t.className=`${f.popup} ${Ue(t)?e.showClass.popup:""}`,e.toast?($([document.documentElement,document.body],f["toast-shown"]),$(t,f.toast)):$(t,f.modal),ze(t,e,"popup"),typeof e.customClass=="string"&&$(t,e.customClass),e.icon&&$(t,f[`icon-${e.icon}`])},yd=(t,e)=>{Yw(t,e),Nw(t,e),Ww(t,e),Uw(t,e),zw(t,e),Qw(t,e),Vw(t,e),Bw(t,e),Cw(t,e),Fw(t,e),typeof e.didRender=="function"&&e.didRender(z())},Bn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Jw=()=>{je(document.body.children).forEach(e=>{e===Se()||e.contains(Se())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},vd=()=>{je(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},wd=["swal-title","swal-html","swal-footer"],Zw=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return ob(n),Object.assign(eb(n),tb(n),nb(n),sb(n),ib(n),rb(n,wd))},eb=t=>{const e={};return je(t.querySelectorAll("swal-param")).forEach(n=>{zt(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof un[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof un[s]=="object"&&(e[s]=JSON.parse(i))}),e},tb=t=>{const e={};return je(t.querySelectorAll("swal-button")).forEach(n=>{zt(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Ea(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},nb=t=>{const e={},n=t.querySelector("swal-image");return n&&(zt(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},sb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(zt(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},ib=t=>{const e={},n=t.querySelector("swal-input");n&&(zt(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},je(s).forEach(i=>{zt(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},rb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(zt(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},ob=t=>{const e=wd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);je(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Me(`Unrecognized element <${s}>`)})},zt=(t,e)=>{je(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Me([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Zc={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function ab(t){t.inputValidator||Object.keys(Zc).forEach(e=>{t.input===e&&(t.inputValidator=Zc[e])})}function cb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Me('Target parameter is not valid, defaulting to "body"'),t.target="body")}function lb(t){ab(t),t.showLoaderOnConfirm&&!t.preConfirm&&Me(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),cb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),bw(t)}class ub{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const hb=()=>{hn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(hn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${hn.previousBodyPadding+_w()}px`)},db=()=>{hn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${hn.previousBodyPadding}px`,hn.previousBodyPadding=null)},fb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!lt(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,$(document.body,f.iosfix),gb(),pb()}},pb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&z().scrollHeight>window.innerHeight-44&&(Se().style.paddingBottom=`${44}px`)},gb=()=>{const t=Se();let e;t.ontouchstart=n=>{e=mb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},mb=t=>{const e=t.target,n=Se();return yb(t)||vb(t)?!1:e===n||!Qc(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Qc(bi())&&bi().contains(e))},yb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",vb=t=>t.touches&&t.touches.length>1,wb=()=>{if(lt(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);ot(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},bd=10,bb=t=>{const e=Se(),n=z();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;_b(e,n,t),setTimeout(()=>{Eb(e,n)},bd),Sa()&&(Tb(e,t.scrollbarPadding,i),Jw()),!nr()&&!M.previousActiveElement&&(M.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),ot(e,f["no-transition"])},Ed=t=>{const e=z();if(t.target!==e)return;const n=Se();e.removeEventListener(fs,Ed),n.style.overflowY="auto"},Eb=(t,e)=>{fs&&pd(e)?(t.style.overflowY="hidden",e.addEventListener(fs,Ed)):t.style.overflowY="auto"},Tb=(t,e,n)=>{fb(),e&&n!=="hidden"&&hb(),setTimeout(()=>{t.scrollTop=0})},_b=(t,e,n)=>{$(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),pe(e,"grid"),setTimeout(()=>{$(e,n.showClass.popup),e.style.removeProperty("opacity")},bd),$([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&$([document.documentElement,document.body],f["height-auto"])},An=t=>{let e=z();e||new gs,e=z();const n=Mn();nr()?Ae(xs()):Cb(e,t),pe(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Cb=(t,e)=>{const n=Ls(),s=Mn();!e&&Ue(Je())&&(e=Je()),pe(n),e&&(Ae(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),$([t,n],f.loading)},Ib=(t,e)=>{e.input==="select"||e.input==="radio"?Nb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Ta(e.inputValue)||_a(e.inputValue))&&(An(Je()),Pb(t,e))},Sb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Ab(n);case"radio":return kb(n);case"file":return Db(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Ab=t=>t.checked?1:0,kb=t=>t.checked?t.value:null,Db=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Nb=(t,e)=>{const n=z(),s=i=>Ob[e.input](n,lo(i),e);Ta(e.inputOptions)||_a(e.inputOptions)?(An(Je()),Os(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):Xt(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Pb=(t,e)=>{const n=t.getInput();Ae(n),Os(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,pe(n),n.focus(),t.hideLoading()}).catch(s=>{Xt(`Error in inputValue promise: ${s}`),n.value="",pe(n),n.focus(),t.hideLoading()})},Ob={select:(t,e,n)=>{const s=yt(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Te(c,o),c.selected=el(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=yt(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,el(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Te(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},lo=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=lo(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=lo(s)),e.push([n,s])}),e},el=(t,e)=>e&&e.toString()===t.toString();function tl(){const t=B.innerParams.get(this);if(!t)return;const e=B.domCache.get(this);Ae(e.loader),nr()?t.icon&&pe(xs()):Rb(e),ot([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Rb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?pe(e[0],"inline-block"):lw()&&Ae(t.actions)};function xb(t){const e=B.innerParams.get(t||this),n=B.domCache.get(t||this);return n?Aa(n.popup,e.input):null}const ps={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Lb=()=>Ue(z()),Td=()=>Je()&&Je().click(),Mb=()=>St()&&St().click(),Bb=()=>Ht()&&Ht().click(),_d=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Fb=(t,e,n,s)=>{_d(e),n.toast||(e.keydownHandler=i=>Ub(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:z(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},uo=(t,e,n)=>{const s=Ia();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();z().focus()},Cd=["ArrowRight","ArrowDown"],Vb=["ArrowLeft","ArrowUp"],Ub=(t,e,n)=>{const s=B.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?$b(t,e,s):e.key==="Tab"?jb(e,s):[...Cd,...Vb].includes(e.key)?qb(e.key):e.key==="Escape"&&Hb(e,s,n)))},$b=(t,e,n)=>{if(Zi(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Td(),e.preventDefault()}},jb=(t,e)=>{const n=t.target,s=Ia();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?uo(e,i,-1):uo(e,i,1),t.stopPropagation(),t.preventDefault()},qb=t=>{const e=Je(),n=St(),s=Ht();if(![e,n,s].includes(document.activeElement))return;const i=Cd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Ls().children.length;o++){if(r=r[i],!r)return;if(Ue(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},Hb=(t,e,n)=>{Zi(e.allowEscapeKey)&&(t.preventDefault(),n(Bn.esc))};function Id(t,e,n,s){nr()?nl(t,s):(fw(n).then(()=>nl(t,s)),_d(M)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Sa()&&(db(),wb(),vd()),zb()}function zb(){ot([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function Ks(t){t=Qb(t);const e=ps.swalPromiseResolve.get(this),n=Gb(this);this.isAwaitingPromise()?t.isDismissed||(Bs(this),e(t)):n&&e(t)}function Kb(){return!!B.awaitingPromise.get(this)}const Gb=t=>{const e=z();if(!e)return!1;const n=B.innerParams.get(t);if(!n||lt(e,n.hideClass.popup))return!1;ot(e,n.showClass.popup),$(e,n.hideClass.popup);const s=Se();return ot(s,n.showClass.backdrop),$(s,n.hideClass.backdrop),Yb(t,e,n),!0};function Wb(t){const e=ps.swalPromiseReject.get(this);Bs(this),e&&e(t)}const Bs=t=>{t.isAwaitingPromise()&&(B.awaitingPromise.delete(t),B.innerParams.get(t)||t._destroy())},Qb=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Yb=(t,e,n)=>{const s=Se(),i=fs&&pd(e);typeof n.willClose=="function"&&n.willClose(e),i?Xb(t,e,s,n.returnFocus,n.didClose):Id(t,s,n.returnFocus,n.didClose)},Xb=(t,e,n,s,i)=>{M.swalCloseEventFinishedCallback=Id.bind(null,t,n,s,i),e.addEventListener(fs,function(r){r.target===e&&(M.swalCloseEventFinishedCallback(),delete M.swalCloseEventFinishedCallback)})},nl=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Sd(t,e,n){const s=B.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Ad(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function Jb(){Sd(this,["confirmButton","denyButton","cancelButton"],!1)}function Zb(){Sd(this,["confirmButton","denyButton","cancelButton"],!0)}function eE(){return Ad(this.getInput(),!1)}function tE(){return Ad(this.getInput(),!0)}function nE(t){const e=B.domCache.get(this),n=B.innerParams.get(this);Te(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&$(e.validationMessage,n.customClass.validationMessage),pe(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),dd(s),$(s,f.inputerror))}function sE(){const t=B.domCache.get(this);t.validationMessage&&Ae(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ot(e,f.inputerror))}function iE(){return B.domCache.get(this).progressSteps}function rE(t){const e=z(),n=B.innerParams.get(this);if(!e||lt(e,n.hideClass.popup))return Me("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=oE(t),i=Object.assign({},n,s);yd(this,i),B.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const oE=t=>{const e={};return Object.keys(t).forEach(n=>{od(n)?e[n]=t[n]:Me(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function aE(){const t=B.domCache.get(this),e=B.innerParams.get(this);if(!e){kd(this);return}t.popup&&M.swalCloseEventFinishedCallback&&(M.swalCloseEventFinishedCallback(),delete M.swalCloseEventFinishedCallback),M.deferDisposalTimer&&(clearTimeout(M.deferDisposalTimer),delete M.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),cE(this)}const cE=t=>{kd(t),delete t.params,delete M.keydownHandler,delete M.keydownTarget,delete M.currentInstance},kd=t=>{t.isAwaitingPromise()?(Ir(B,t),B.awaitingPromise.set(t,!0)):(Ir(ps,t),Ir(B,t))},Ir=(t,e)=>{for(const n in t)t[n].delete(e)},Dd=Object.freeze(Object.defineProperty({__proto__:null,_destroy:aE,close:Ks,closeModal:Ks,closePopup:Ks,closeToast:Ks,disableButtons:Zb,disableInput:tE,disableLoading:tl,enableButtons:Jb,enableInput:eE,getInput:xb,getProgressSteps:iE,handleAwaitingPromise:Bs,hideLoading:tl,isAwaitingPromise:Kb,rejectPromise:Wb,resetValidationMessage:sE,showValidationMessage:nE,update:rE},Symbol.toStringTag,{value:"Module"})),lE=t=>{const e=B.innerParams.get(t);t.disableButtons(),e.input?Nd(t,"confirm"):Oa(t,!0)},uE=t=>{const e=B.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Nd(t,"deny"):Pa(t,!1)},hE=(t,e)=>{t.disableButtons(),e(Bn.cancel)},Nd=(t,e)=>{const n=B.innerParams.get(t);if(!n.input)return Xt(`The "input" parameter is needed to be set when using returnInputValueOn${Ea(e)}`);const s=Sb(t,n);n.inputValidator?dE(t,s,e):t.getInput().checkValidity()?e==="deny"?Pa(t,s):Oa(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},dE=(t,e,n)=>{const s=B.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Os(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Pa(t,e):Oa(t,e)})},Pa=(t,e)=>{const n=B.innerParams.get(t||globalThis);n.showLoaderOnDeny&&An(St()),n.preDeny?(B.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Os(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Bs(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Pd(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},sl=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Pd=(t,e)=>{t.rejectPromise(e)},Oa=(t,e)=>{const n=B.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&An(),n.preConfirm?(t.resetValidationMessage(),B.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Os(n.preConfirm(e,n.validationMessage))).then(i=>{Ue(er())||i===!1?(t.hideLoading(),Bs(t)):sl(t,typeof i>"u"?e:i)}).catch(i=>Pd(t||globalThis,i))):sl(t,e)},fE=(t,e,n)=>{B.innerParams.get(t).toast?pE(t,e,n):(mE(e),yE(e),vE(t,e,n))},pE=(t,e,n)=>{e.popup.onclick=()=>{const s=B.innerParams.get(t);s&&(gE(s)||s.timer||s.input)||n(Bn.close)}},gE=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Ei=!1;const mE=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Ei=!0)}}},yE=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Ei=!0)}}},vE=(t,e,n)=>{e.container.onclick=s=>{const i=B.innerParams.get(t);if(Ei){Ei=!1;return}s.target===e.container&&Zi(i.allowOutsideClick)&&n(Bn.backdrop)}},wE=t=>typeof t=="object"&&t.jquery,il=t=>t instanceof Element||wE(t),bE=t=>{const e={};return typeof t[0]=="object"&&!il(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||il(i)?e[n]=i:i!==void 0&&Xt(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function EE(...t){const e=this;return new e(...t)}function TE(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const _E=()=>M.timeout&&M.timeout.getTimerLeft(),Od=()=>{if(M.timeout)return uw(),M.timeout.stop()},Rd=()=>{if(M.timeout){const t=M.timeout.start();return ka(t),t}},CE=()=>{const t=M.timeout;return t&&(t.running?Od():Rd())},IE=t=>{if(M.timeout){const e=M.timeout.increase(t);return ka(e,!0),e}},SE=()=>M.timeout&&M.timeout.isRunning();let rl=!1;const ho={};function AE(t="data-swal-template"){ho[t]=this,rl||(document.body.addEventListener("click",kE),rl=!0)}const kE=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in ho){const s=e.getAttribute(n);if(s){ho[n].fire({template:s});return}}},DE=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:bE,bindClickHandler:AE,clickCancel:Bb,clickConfirm:Td,clickDeny:Mb,enableLoading:An,fire:EE,getActions:Ls,getCancelButton:Ht,getCloseButton:Ca,getConfirmButton:Je,getContainer:Se,getDenyButton:St,getFocusableElements:Ia,getFooter:hd,getHtmlContainer:bi,getIcon:xs,getImage:ld,getInputLabel:rw,getLoader:Mn,getPopup:z,getTimerLeft:_E,getTimerProgressBar:tr,getTitle:cd,getValidationMessage:er,increaseTimer:IE,isDeprecatedParameter:co,isLoading:aw,isTimerRunning:SE,isUpdatableParameter:od,isValidParameter:rd,isVisible:Lb,mixin:TE,resumeTimer:Rd,showLoading:An,stopTimer:Od,toggleTimer:CE},Symbol.toStringTag,{value:"Module"}));let fo;class Fn{constructor(...e){if(typeof window>"u")return;fo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);B.promise.set(this,s)}_main(e,n={}){sw(Object.assign({},n,e)),M.currentInstance&&(M.currentInstance._destroy(),Sa()&&vd()),M.currentInstance=this;const s=PE(e,n);lb(s),Object.freeze(s),M.timeout&&(M.timeout.stop(),delete M.timeout),clearTimeout(M.restoreFocusTimeout);const i=OE(this);return yd(this,s),B.innerParams.set(this,s),NE(this,i,s)}then(e){return B.promise.get(this).then(e)}finally(e){return B.promise.get(this).finally(e)}}const NE=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};ps.swalPromiseResolve.set(t,s),ps.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>lE(t),e.denyButton.onclick=()=>uE(t),e.cancelButton.onclick=()=>hE(t,r),e.closeButton.onclick=()=>r(Bn.close),fE(t,e,r),Fb(t,M,n,r),Ib(t,n),bb(n),RE(M,n,r),xE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),PE=(t,e)=>{const n=Zw(t),s=Object.assign({},un,e,n,t);return s.showClass=Object.assign({},un.showClass,s.showClass),s.hideClass=Object.assign({},un.hideClass,s.hideClass),s},OE=t=>{const e={popup:z(),container:Se(),actions:Ls(),confirmButton:Je(),denyButton:St(),cancelButton:Ht(),loader:Mn(),closeButton:Ca(),validationMessage:er(),progressSteps:ud()};return B.domCache.set(t,e),e},RE=(t,e,n)=>{const s=tr();Ae(s),e.timer&&(t.timeout=new ub(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(pe(s),ze(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&ka(e.timer)})))},xE=(t,e)=>{if(!e.toast){if(!Zi(e.allowEnterKey))return ME();LE(t,e)||uo(e,-1,1)}},LE=(t,e)=>e.focusDeny&&Ue(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ue(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ue(t.confirmButton)?(t.confirmButton.focus(),!0):!1,ME=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Fn.prototype,Dd);Object.assign(Fn,DE);Object.keys(Dd).forEach(t=>{Fn[t]=function(...e){if(fo)return fo[t](...e)}});Fn.DismissReason=Bn;Fn.version="11.4.8";const gs=Fn;gs.default=gs;const Zt=[];function ir(t,e=Pe){let n;const s=new Set;function i(a){if(Kt(t,a)&&(t=a,n)){const c=!Zt.length;for(const l of s)l[1](),Zt.push(l,t);if(c){for(let l=0;l<Zt.length;l+=2)Zt[l][0](Zt[l+1]);Zt.length=0}}}function r(a){i(a(t))}function o(a,c=Pe){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||Pe),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const ol=ir({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),po=ir(""),go=ir(""),mo=ir(""),BE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},FE=async t=>{try{await wa(In(Fe,"Pacientes",t.id),t)}catch(e){console.log(e)}};function al(t,e,n){const s=t.slice();return s[6]=e[n],s[1]=n,s}function VE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=cl(al(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=fl()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);qe(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=al(i,n,o);s[o]?s[o].p(a,r):(s[o]=cl(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){yo(s,i),i&&Le(e)}}}function UE(t){let e;return{c(){e=D("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){qe(n,e,s)},p:Pe,d(n){n&&Le(e)}}}function cl(t){let e,n=`${t[6].apellido}, ${t[6].nombre}${t[6].plan=="particular"?"":" -"+t[6].nroSocio+" - plan "+t[6].plan} `,s;return{c(){e=D("option"),s=se(n),e.__value=t[1],e.value=e.__value},m(i,r){qe(i,e,r),E(e,s)},p(i,r){r&1&&n!==(n=`${i[6].apellido}, ${i[6].nombre}${i[6].plan=="particular"?"":" -"+i[6].nroSocio+" - plan "+i[6].plan} `)&&gt(s,n)},d(i){i&&Le(e)}}}function $E(t){let e,n,s;function i(a,c){return a[0].length==0?UE:VE}let r=i(t),o=r(t);return{c(){e=D("select"),o.c(),v(e,"name","select-pacientes"),v(e,"class","select-Pacientes svelte-2shrp8"),v(e,"size",5),t[1]===void 0&&fn(()=>t[3].call(e))},m(a,c){qe(a,e,c),o.m(e,null),dn(e,t[1]),n||(s=[J(e,"change",t[2]),J(e,"change",t[3])],n=!0)},p(a,[c]){r===(r=i(a))&&o?o.p(a,c):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),c&2&&dn(e,a[1])},i:Pe,o:Pe,d(a){a&&Le(e),o.d(),n=!1,pt(s)}}}function jE(t,e,n){let{pacientesFiltrada:s}=e,i;const r=ml(),o=c=>{const l=c.target.value;s[l].plan,r("pacienteSelected",l),console.log("dispatch",l)};function a(){i=vo(this),n(1,i)}return t.$$set=c=>{"pacientesFiltrada"in c&&n(0,s=c.pacientesFiltrada)},[s,i,o,a]}class qE extends Dn{constructor(e){super(),kn(this,e,jE,$E,Kt,{pacientesFiltrada:0})}}function HE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y,w,m,T,I,P,V,K,ke,N,Q,ue,He,me,he,Ze,Ge,Pt,A,ye,De,Z,et,rr,Ra;return K=new qE({props:{pacientesFiltrada:t[1],grupoButtonRadio:t[4]}}),Z=new Qd({props:{planes:t[3],planSeleccionado:t[8]}}),Z.$on("cambioPlan",t[12]),{c(){e=D("body"),n=D("div"),s=D("div"),i=D("button"),r=se("create"),a=ie(),c=D("button"),l=se("update"),h=ie(),d=D("button"),p=se("delete"),w=ie(),m=D("div"),T=D("label"),T.textContent="filtrar por apellido",I=D("input"),P=ie(),V=D("div"),Zn(K.$$.fragment),ke=ie(),N=D("div"),Q=D("label"),Q.textContent="nombre",ue=D("input"),He=ie(),me=D("label"),me.textContent="apellido",he=D("input"),Ze=ie(),Ge=D("div"),Pt=D("label"),Pt.textContent="nº socio",A=D("input"),ye=ie(),De=D("label"),De.textContent="plan",Zn(Z.$$.fragment),i.disabled=o=!t[5]||!t[6]||!t[8]||!t[7],v(i,"class","svelte-r1wni"),c.disabled=u=!t[5]||!t[6]||!t[8]||!t[7]||!t[2],v(c,"class","svelte-r1wni"),d.disabled=y=!t[2],v(d,"class","svelte-r1wni"),v(s,"class","buttons svelte-r1wni"),v(n,"id","botones"),v(n,"class","svelte-r1wni"),v(T,"for","filterPrefix"),v(T,"class","svelte-r1wni"),v(I,"name","filterPrefix"),v(I,"placeholder","filter prefix"),v(I,"class","svelte-r1wni"),v(m,"id","filter"),v(m,"class","svelte-r1wni"),v(V,"id","selectPacientes"),v(V,"class","svelte-r1wni"),v(Q,"for","nombre"),v(Q,"class","svelte-r1wni"),v(ue,"name","nombre"),v(ue,"placeholder","nombre"),v(ue,"class","svelte-r1wni"),v(me,"for","apellido"),v(me,"class","svelte-r1wni"),v(he,"name","apellido"),v(he,"placeholder","apellido"),v(he,"class","svelte-r1wni"),v(N,"id","formInputsI"),v(N,"class","svelte-r1wni"),v(Pt,"for","nroSocio"),v(Pt,"class","svelte-r1wni"),v(A,"name","nroSocio"),v(A,"placeholder","nro de Socio"),v(A,"class","svelte-r1wni"),v(De,"for","plan"),v(De,"class","svelte-r1wni"),v(Ge,"id","formInputsD"),v(Ge,"class","svelte-r1wni"),v(e,"class","svelte-r1wni")},m(j,Be){qe(j,e,Be),E(e,n),E(n,s),E(s,i),E(i,r),E(s,a),E(s,c),E(c,l),E(s,h),E(s,d),E(d,p),E(e,w),E(e,m),E(m,T),E(m,I),ve(I,t[0]),E(e,P),E(e,V),gn(K,V,null),E(e,ke),E(e,N),E(N,Q),E(N,ue),ve(ue,t[5]),E(N,He),E(N,me),E(N,he),ve(he,t[6]),E(e,Ze),E(e,Ge),E(Ge,Pt),E(Ge,A),ve(A,t[7]),E(Ge,ye),E(Ge,De),gn(Z,Ge,null),et=!0,rr||(Ra=[J(i,"click",t[9]),J(c,"click",t[10]),J(d,"click",t[11]),J(I,"input",t[15]),J(ue,"input",t[16]),J(he,"input",t[17]),J(A,"input",t[18])],rr=!0)},p(j,[Be]){(!et||Be&480&&o!==(o=!j[5]||!j[6]||!j[8]||!j[7]))&&(i.disabled=o),(!et||Be&484&&u!==(u=!j[5]||!j[6]||!j[8]||!j[7]||!j[2]))&&(c.disabled=u),(!et||Be&4&&y!==(y=!j[2]))&&(d.disabled=y),Be&1&&I.value!==j[0]&&ve(I,j[0]);const or={};Be&2&&(or.pacientesFiltrada=j[1]),Be&16&&(or.grupoButtonRadio=j[4]),K.$set(or),Be&32&&ue.value!==j[5]&&ve(ue,j[5]),Be&64&&he.value!==j[6]&&ve(he,j[6]),Be&128&&A.value!==j[7]&&ve(A,j[7]);const ar={};Be&8&&(ar.planes=j[3]),Be&256&&(ar.planSeleccionado=j[8]),Z.$set(ar)},i(j){et||(pn(K.$$.fragment,j),pn(Z.$$.fragment,j),et=!0)},o(j){Jn(K.$$.fragment,j),Jn(Z.$$.fragment,j),et=!1},d(j){j&&Le(e),mn(K),mn(Z),rr=!1,pt(Ra)}}}function zE(t,e,n){let s,i,r,o,a;xt(t,mo,A=>n(20,i=A)),xt(t,go,A=>n(21,r=A)),xt(t,po,A=>n(22,o=A)),xt(t,ol,A=>n(23,a=A));let c=[],l=["nombre","apellido","nroSocio","plan","createdAt"],u=[],h="",d;pl(()=>{d=yi(mt(Fe,"Pacientes"),ye=>{n(13,c=ye.docs.map(Z=>({...Z.data(),id:Z.id}))),BE(c,l),c.forEach(Z=>{FE(Z)});const De=(Z,et)=>Z.apellido<et.apellido?-1:Z.apellido>et.apellido?1:0;c.sort(De)},ye=>{console.log(ye)}),(async()=>{const ye=mt(Fe,"planes"),De=await $c(ye);console.log("109 async para el radio button",De),n(3,u=De.docs.map(Z=>Z.data().plan)),u.push("particular"),u.sort(),n(4,h="particular")})()}),gl(d);let p="",y="",w="",m="",T="",I=0,P;const V=A=>{n(5,y=A?A.nombre:""),n(6,w=A?A.apellido:""),n(7,m=A?A.nroSocio:""),n(8,T=A?A.plan:"")},K=async()=>{console.log(y,w,m,T);try{await Zh(mt(Fe,"Pacientes"),{nombre:y,apellido:w,nroSocio:m,createdAt:new Date().toLocaleDateString(),plan:T}),console.log("paciente agregado"),ln({text:"Nuevo paciente agregado"}).showToast()}catch(A){console.error(A)}},ke=()=>{n(13,c=c.concat({nombre:y,apellido:w})),n(14,I=c.length-1),K(),n(5,y=n(6,w=n(8,T=n(7,m=""))))},N=async A=>{try{await wa(In(Fe,"Pacientes",A.id),A),ln({text:`paciente ${A.apellido}, ${A.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ye){console.error(ye)}},Q=()=>{n(2,s.nombre=y,s),n(2,s.apellido=w,s),n(8,T=s.plan),n(2,s.nroSocio=m,s),n(2,s),n(1,P),n(14,I),n(0,p),n(13,c),n(13,c),N(s)},ue=async A=>{try{await oo(In(Fe,"Pacientes",A.id)),ln({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(De){console.error(De)}const ye=ro(mt(Fe,"sesiones"),hv("pacienteID","==",A.id));console.log(`desde delete q=pacientes a borrar ${ye} - paciente: ${A.nombre} ${A.apellido} ${A.id}`);try{(await $c(ye)).forEach(Z=>{oo(Z.ref)})}catch(De){console.log(De)}},He=()=>{const A=c.indexOf(s);gs.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(ye=>{ye.isConfirmed&&(gs.fire("Deleted!","Your file has been deleted.","success"),ue(c[I]),n(13,c=[...c.slice(0,A),...c.slice(A+1)]),n(5,y=n(6,w=n(7,m=n(8,T="")))),n(14,I=Math.min(I,P.length-2)))})},me=A=>{n(8,T=A.detail.valor.planSeleccionado),s.plan!=T&&(n(2,s.plan=T,s),n(2,s.nombre=y,s),n(2,s.apellido=w,s),n(2,s.nroSocio=m,s),n(1,P[I].plan=T,P),console.log("242",s),N(s))};function he(){p=this.value,n(0,p)}function Ze(){y=this.value,n(5,y)}function Ge(){w=this.value,n(6,w)}function Pt(){m=this.value,n(7,m)}return t.$$.update=()=>{t.$$.dirty&8193&&n(1,P=p?c.filter(A=>`${A.apellido}, ${A.nombre}`.toLowerCase().startsWith(p.toLowerCase())):c.map(A=>({nombre:A.nombre,apellido:A.apellido,plan:A.plan,nroSocio:A.nroSocio,id:A.id}))),t.$$.dirty&16386&&n(2,s=P[I]),t.$$.dirty&16384&&console.log("i:",I),t.$$.dirty&4&&s&&(Fs(ol,a=s,a),Fs(po,o=s.apellido,o),Fs(go,r=s.nombre,r),Fs(mo,i=s.id,i),console.log(s)),t.$$.dirty&4&&V(s)},[p,P,s,u,h,y,w,m,T,ke,Q,He,me,c,I,he,Ze,Ge,Pt]}class KE extends Dn{constructor(e){super(),kn(this,e,zE,HE,Kt,{})}}function ll(t,e,n){const s=t.slice();return s[22]=e[n],s}function ul(t){let e,n,s=t[22].diaSesion+"",i,r,o=t[22].valorSesion+"",a,c,l=t[22].fechaPago+"",u,h,d=t[22].valorPago+"",p,y,w;return{c(){e=D("option"),n=se("dia sesion: "),i=se(s),r=se(" - valor sesion: "),a=se(o),c=se(`\r
              - dia pago `),u=se(l),h=se(" - valor pago "),p=se(d),y=ie(),v(e,"class"," svelte-40a4zh"),e.__value=w=t[22].id,e.value=e.__value},m(m,T){qe(m,e,T),E(e,n),E(e,i),E(e,r),E(e,a),E(e,c),E(e,u),E(e,h),E(e,p),E(e,y)},p(m,T){T&1&&s!==(s=m[22].diaSesion+"")&&gt(i,s),T&1&&o!==(o=m[22].valorSesion+"")&&gt(a,o),T&1&&l!==(l=m[22].fechaPago+"")&&gt(u,l),T&1&&d!==(d=m[22].valorPago+"")&&gt(p,d),T&1&&w!==(w=m[22].id)&&(e.__value=w,e.value=e.__value)},d(m){m&&Le(e)}}}function hl(t){let e=Object.values(t[22]).includes(t[7]),n,s=e&&ul(t);return{c(){s&&s.c(),n=fl()},m(i,r){s&&s.m(i,r),qe(i,n,r)},p(i,r){r&129&&(e=Object.values(i[22]).includes(i[7])),e?s?s.p(i,r):(s=ul(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&Le(n)}}}function GE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y,w,m,T,I,P,V,K,ke,N,Q,ue;return{c(){e=D("div"),n=D("form"),s=D("div"),i=D("div"),r=D("label"),r.textContent="pago",o=D("input"),a=ie(),c=D("label"),c.textContent="valor sesion",l=D("input"),u=ie(),h=D("div"),d=D("label"),d.textContent="Dia Sesion",p=D("input"),y=ie(),w=D("label"),w.textContent="Fecha Pago",m=D("input"),T=ie(),I=D("div"),P=D("button"),P.textContent="update",V=ie(),K=D("button"),K.textContent="delete",ke=ie(),N=D("button"),N.textContent="Agregar sesión",v(r,"for","valorPago"),v(r,"class","svelte-40a4zh"),v(o,"name","valorPago"),v(o,"type","number"),v(o,"step","100"),v(o,"min","0"),v(o,"placeholder","Valor pago"),v(o,"class","svelte-40a4zh"),v(c,"for","valorSesion"),v(c,"class","svelte-40a4zh"),v(l,"name","valorSesion"),v(l,"type","number"),v(l,"step","100"),v(l,"min","0"),v(l,"placeholder","Valor sesión"),v(l,"class","svelte-40a4zh"),v(i,"id","inputsFormSesionesI"),v(i,"class","svelte-40a4zh"),v(d,"for","diaSesion"),v(d,"class","svelte-40a4zh"),v(p,"name","diaSesion"),v(p,"type","date"),v(p,"placeholder","Día sesión"),v(p,"class","svelte-40a4zh"),v(w,"for","fechaPago"),v(w,"class","svelte-40a4zh"),v(m,"name","fechaPago"),v(m,"type","date"),v(m,"placeholder","Fecha pago"),v(m,"class","svelte-40a4zh"),v(h,"id","inputsFormSesionesD"),v(h,"class","svelte-40a4zh"),v(P,"class","svelte-40a4zh"),v(K,"class","svelte-40a4zh"),v(N,"class","svelte-40a4zh"),v(I,"id","botonesFormSesiones"),v(I,"class","buttons svelte-40a4zh"),v(s,"id","form-Sesiones"),v(s,"class","svelte-40a4zh"),v(n,"class","svelte-40a4zh"),v(e,"id","contenedor-form-sesiones"),v(e,"class","svelte-40a4zh")},m(He,me){qe(He,e,me),E(e,n),E(n,s),E(s,i),E(i,r),E(i,o),ve(o,t[3]),E(i,a),E(i,c),E(i,l),ve(l,t[4]),E(s,u),E(s,h),E(h,d),E(h,p),ve(p,t[5]),E(h,y),E(h,w),E(h,m),ve(m,t[6]),E(s,T),E(s,I),E(I,P),E(I,V),E(I,K),E(I,ke),E(I,N),Q||(ue=[J(o,"input",t[16]),J(l,"input",t[17]),J(p,"input",t[18]),J(m,"input",t[19]),J(P,"click",function(){Js(t[12](t[2]))&&t[12](t[2]).apply(this,arguments)}),J(K,"click",function(){Js(t[13](t[2]))&&t[13](t[2]).apply(this,arguments)}),J(N,"click",t[11]),J(n,"submit",Md(t[14]))],Q=!0)},p(He,me){t=He,me&8&&Zs(o.value)!==t[3]&&ve(o,t[3]),me&16&&Zs(l.value)!==t[4]&&ve(l,t[4]),me&32&&ve(p,t[5]),me&64&&ve(m,t[6])},d(He){He&&Le(e),Q=!1,pt(ue)}}}function WE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y=t[0],w=[];for(let T=0;T<y.length;T+=1)w[T]=hl(ll(t,y,T));let m=GE(t);return{c(){e=D("main"),n=D("body"),s=D("h4"),i=se("Paciente: "),r=se(t[8]),o=se(", "),a=se(t[9]),c=ie(),l=D("div"),u=D("select");for(let T=0;T<w.length;T+=1)w[T].c();h=ie(),m&&m.c(),v(s,"class","svelte-40a4zh"),v(u,"size",5),v(u,"class","svelte-40a4zh"),t[1]===void 0&&fn(()=>t[15].call(u)),v(l,"id","select"),v(l,"class","svelte-40a4zh"),v(n,"class","svelte-40a4zh"),v(e,"class","svelte-40a4zh")},m(T,I){qe(T,e,I),E(e,n),E(n,s),E(s,i),E(s,r),E(s,o),E(s,a),E(n,c),E(n,l),E(l,u);for(let P=0;P<w.length;P+=1)w[P]&&w[P].m(u,null);dn(u,t[1]),E(n,h),m&&m.m(n,null),d||(p=[J(u,"change",t[10]),J(u,"change",t[15])],d=!0)},p(T,[I]){if(I&256&&gt(r,T[8]),I&512&&gt(a,T[9]),I&129){y=T[0];let P;for(P=0;P<y.length;P+=1){const V=ll(T,y,P);w[P]?w[P].p(V,I):(w[P]=hl(V),w[P].c(),w[P].m(u,null))}for(;P<w.length;P+=1)w[P].d(1);w.length=y.length}I&3&&dn(u,T[1]),m.p(T,I)},i:Pe,o:Pe,d(T){T&&Le(e),yo(w,T),m&&m.d(),d=!1,pt(p)}}}function QE(t,e,n){let s,i,r;xt(t,mo,N=>n(7,s=N)),xt(t,po,N=>n(8,i=N)),xt(t,go,N=>n(9,r=N));let{sesiones:o}=e;pl(()=>{const N=[],Q=mt(Fe,"sesiones"),ue=mt(Fe,"Pacientes");ro(Q,Fc("pacienteID")),ro(ue,Fc("apellido"));const He=yi(Q,he=>{n(0,o=he.docs.map(Ze=>({id:Ze.id,...Ze.data()})))});console.log("desde onMount",o),N.push(He);const me=yi(ue,he=>{he.docs.map(Ze=>({id:Ze.id,...Ze.data()}))});return N.push(me),()=>{N.forEach(he=>he())}});let a,c;const l=N=>{n(1,a=N.target.value),console.log(o),n(2,c=o.find(Q=>Q.id===a)),console.log("selectedSession",c),n(3,p=c.valorPago),n(4,y=c.valorSesion),n(6,m=c.fechaPago),n(5,w=c.diaSesion)},u=()=>{console.log("Add sesion",c);try{Zh(mt(Fe,"sesiones"),{valorPago:p,valorSesion:y,diaSesion:w,fechaPago:m,pacienteID:s}),console.log("sesion agregada"),ln({text:"Nueva sesion agregada"}).showToast()}catch(N){console.error(N)}},h=async N=>{console.log("Update sesion",N);try{await wa(In(Fe,"sesiones",N.id),{valorPago:p,valorSesion:y,fechaPago:m,diaSesion:w}),ln({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(Q){console.log(Q)}},d=async N=>{console.log("Delete sesion",N);try{await oo(In(Fe,"sesiones",N.id)),ln({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(Q){console.error(Q)}};let p=5e3,y=5e3,w=new Date().toISOString().slice(0,10),m=new Date().toISOString().slice(0,10);function T(N){Ud.call(this,t,N)}function I(){a=vo(this),n(1,a),n(0,o)}function P(){p=Zs(this.value),n(3,p)}function V(){y=Zs(this.value),n(4,y)}function K(){w=this.value,n(5,w)}function ke(){m=this.value,n(6,m)}return t.$$set=N=>{"sesiones"in N&&n(0,o=N.sesiones)},t.$$.update=()=>{t.$$.dirty&7&&(n(2,c=o.find(N=>N.id===a)),console.log(c))},[o,a,c,p,y,w,m,s,i,r,l,u,h,d,T,I,P,V,K,ke]}class YE extends Dn{constructor(e){super(),kn(this,e,QE,WE,Kt,{sesiones:0})}}function XE(t){let e,n,s,i,r,o,a,c,l;return r=new KE({}),c=new YE({props:{sesiones:t[0]}}),{c(){e=D("body"),n=D("div"),s=D("h5"),s.textContent="CRUD Pacientes",i=ie(),Zn(r.$$.fragment),o=ie(),a=D("div"),Zn(c.$$.fragment),v(n,"class","contenedor-pacientes svelte-26zw2p"),v(a,"class","contenedor-sesiones svelte-26zw2p"),v(e,"class","svelte-26zw2p")},m(u,h){qe(u,e,h),E(e,n),E(n,s),E(n,i),gn(r,n,null),E(e,o),E(e,a),gn(c,a,null),l=!0},p(u,[h]){const d={};h&1&&(d.sesiones=u[0]),c.$set(d)},i(u){l||(pn(r.$$.fragment,u),pn(c.$$.fragment,u),l=!0)},o(u){Jn(r.$$.fragment,u),Jn(c.$$.fragment,u),l=!1},d(u){u&&Le(e),mn(r),mn(c)}}}function JE(t,e,n){let s=[];const i=yi(mt(Fe,"sesiones"),r=>{n(0,s=r.docs.map(o=>({...o.data(),id:o.id})))},r=>{console.log(r)});return gl(i),[s]}class ZE extends Dn{constructor(e){super(),kn(this,e,JE,XE,Kt,{})}}function e0(t){let e,n,s,i;return s=new ZE({}),{c(){e=D("main"),n=D("div"),Zn(s.$$.fragment),v(n,"class","contenedorPadre svelte-1cwonxg"),v(e,"class","svelte-1cwonxg")},m(r,o){qe(r,e,o),E(e,n),gn(s,n,null),i=!0},p:Pe,i(r){i||(pn(s.$$.fragment,r),i=!0)},o(r){Jn(s.$$.fragment,r),i=!1},d(r){r&&Le(e),mn(s)}}}class t0 extends Dn{constructor(e){super(),kn(this,e,null,e0,Kt,{})}}new t0({target:document.getElementById("app")});
