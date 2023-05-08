(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Fe(){}function pl(t){return t()}function Ma(){return Object.create(null)}function At(t){t.forEach(pl)}function ei(t){return typeof t=="function"}function In(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Md(t){return Object.keys(t).length===0}function Bd(t,...e){if(t==null)return Fe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(Bd(e,n))}function Us(t,e,n){return t.set(n),e}function E(t,e){t.appendChild(e)}function ze(t,e,n){t.insertBefore(e,n||null)}function je(t){t.parentNode&&t.parentNode.removeChild(t)}function wo(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function se(t){return document.createTextNode(t)}function ie(){return se(" ")}function gl(){return se("")}function Z(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Fd(t){return function(e){return e.preventDefault(),t.call(this,e)}}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ti(t){return t===""?null:+t}function Vd(t){return Array.from(t.childNodes)}function gt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function we(t,e){t.value=e??""}function dn(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Ud(t){for(const e of t.options)if(!e.disabled)return e}function bo(t){const e=t.querySelector(":checked")||Ud(t);return e&&e.__value}function $d(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let Wn;function $n(t){Wn=t}function Eo(){if(!Wn)throw new Error("Function called outside component initialization");return Wn}function ml(t){Eo().$$.on_mount.push(t)}function yl(t){Eo().$$.on_destroy.push(t)}function vl(){const t=Eo();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=$d(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function jd(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const en=[],Ba=[];let rn=[];const Fa=[],qd=Promise.resolve();let kr=!1;function Hd(){kr||(kr=!0,qd.then(wl))}function fn(t){rn.push(t)}const ur=new Set;let Jt=0;function wl(){if(Jt!==0)return;const t=Wn;do{try{for(;Jt<en.length;){const e=en[Jt];Jt++,$n(e),zd(e.$$)}}catch(e){throw en.length=0,Jt=0,e}for($n(null),en.length=0,Jt=0;Ba.length;)Ba.pop()();for(let e=0;e<rn.length;e+=1){const n=rn[e];ur.has(n)||(ur.add(n),n())}rn.length=0}while(en.length);for(;Fa.length;)Fa.pop()();kr=!1,ur.clear(),$n(t)}function zd(t){if(t.fragment!==null){t.update(),At(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fn)}}function Kd(t){const e=[],n=[];rn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),rn=e}const Qs=new Set;let Gd;function Qn(t,e){t&&t.i&&(Qs.delete(t),t.i(e))}function ni(t,e,n,s){if(t&&t.o){if(Qs.has(t))return;Qs.add(t),Gd.c.push(()=>{Qs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function si(t){t&&t.c()}function Yn(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||fn(()=>{const o=t.$$.on_mount.map(pl).filter(ei);t.$$.on_destroy?t.$$.on_destroy.push(...o):At(o),t.$$.on_mount=[]}),r.forEach(fn)}function Xn(t,e){const n=t.$$;n.fragment!==null&&(Kd(n.after_update),At(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wd(t,e){t.$$.dirty[0]===-1&&(en.push(t),Hd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ps(t,e,n,s,i,r,o,a=[-1]){const c=Wn;$n(t);const l=t.$$={fragment:null,ctx:[],props:r,update:Fe,not_equal:i,bound:Ma(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ma(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const y=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),u&&Wd(t,h)),d}):[],l.update(),u=!0,At(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Vd(e.target);l.fragment&&l.fragment.l(h),h.forEach(je)}else l.fragment&&l.fragment.c();e.intro&&Qn(t.$$.fragment),Yn(t,e.target,e.anchor,e.customElement),wl()}$n(c)}class gs{$destroy(){Xn(this,1),this.$destroy=Fe}$on(e,n){if(!ei(n))return Fe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Md(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Va(t,e,n){const s=t.slice();return s[5]=e[n],s}function Ua(t){let e,n=t[5]+"",s,i;return{c(){e=k("option"),s=se(n),e.__value=i=t[5],e.value=e.__value},m(r,o){ze(r,e,o),E(e,s)},p(r,o){o&2&&n!==(n=r[5]+"")&&gt(s,n),o&2&&i!==(i=r[5])&&(e.__value=i,e.value=e.__value)},d(r){r&&je(e)}}}function Qd(t){let e,n,s,i=t[1],r=[];for(let o=0;o<i.length;o+=1)r[o]=Ua(Va(t,i,o));return{c(){e=k("select");for(let o=0;o<r.length;o+=1)r[o].c();v(e,"name","plan"),v(e,"id","plan"),v(e,"class","svelte-1tnv1ho"),t[0]===void 0&&fn(()=>t[3].call(e))},m(o,a){ze(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);dn(e,t[0]),n||(s=[Z(e,"change",t[3]),Z(e,"change",t[2])],n=!0)},p(o,[a]){if(a&2){i=o[1];let c;for(c=0;c<i.length;c+=1){const l=Va(o,i,c);r[c]?r[c].p(l,a):(r[c]=Ua(l),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=i.length}a&3&&dn(e,o[0])},i:Fe,o:Fe,d(o){o&&je(e),wo(r,o),n=!1,At(s)}}}function Yd(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e;const r=vl();function o(){r("cambioPlan",{valor:{planSeleccionado:i}})}function a(){i=bo(this),n(0,i),n(1,s)}return t.$$set=c=>{"planes"in c&&n(1,s=c.planes),"planSeleccionado"in c&&n(0,i=c.planSeleccionado)},[i,s,o,a]}class Xd extends gs{constructor(e){super(),ps(this,e,Yd,Qd,In,{planes:1,planSeleccionado:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new Zd;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ef=function(t){const e=bl(t);return El.encodeByteArray(e,!0)},ii=function(t){return ef(t).replace(/\./g,"")},tf=function(t){try{return El.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sf=()=>nf().__FIREBASE_DEFAULTS__,rf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},of=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tf(t[1]);return e&&JSON.parse(e)},Tl=()=>{try{return sf()||rf()||of()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},af=t=>{var e,n;return(n=(e=Tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cl=t=>{const e=af(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cf=()=>{var t;return(t=Tl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function _l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ii(JSON.stringify(n)),ii(JSON.stringify(o)),a].join(".")}function uf(){try{return typeof indexedDB=="object"}catch{return!1}}function hf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="FirebaseError";class Gt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=df,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Il.prototype.create)}}class Il{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ff(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,a,s)}}function ff(t,e){return t.replace(pf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const pf=/\{\$([^}]+)}/g;function Dr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($a(r)&&$a(o)){if(!Dr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $a(t){return t!==null&&typeof t=="object"}/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class gf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new lf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yf(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mf(t){return t===xt?void 0:t}function yf(t){return t.instantiationMode==="EAGER"}/**
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
 */class vf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const wf={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},bf=H.INFO,Ef={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Tf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ef[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=bf,this._logHandler=Tf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Cf=(t,e)=>e.some(n=>t instanceof n);let ja,qa;function _f(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function If(){return qa||(qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Al=new WeakMap,Nr=new WeakMap,kl=new WeakMap,hr=new WeakMap,To=new WeakMap;function Sf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Al.set(n,t)}).catch(()=>{}),To.set(e,t),e}function Af(t){if(Nr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Nr.set(t,e)}let Pr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kf(t){Pr=t(Pr)}function Df(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(dr(this),e,...n);return kl.set(s,e.sort?e.sort():[e]),vt(s)}:If().includes(t)?function(...e){return t.apply(dr(this),e),vt(Al.get(this))}:function(...e){return vt(t.apply(dr(this),e))}}function Nf(t){return typeof t=="function"?Df(t):(t instanceof IDBTransaction&&Af(t),Cf(t,_f())?new Proxy(t,Pr):t)}function vt(t){if(t instanceof IDBRequest)return Sf(t);if(hr.has(t))return hr.get(t);const e=Nf(t);return e!==t&&(hr.set(t,e),To.set(e,t)),e}const dr=t=>To.get(t);function Pf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=vt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vt(o.result),c.oldVersion,c.newVersion,vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Of=["get","getKey","getAll","getAllKeys","count"],Rf=["put","add","delete","clear"],fr=new Map;function Ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fr.get(e))return fr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Rf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Of.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return fr.set(e,r),r}kf(t=>({...t,get:(e,n,s)=>Ha(e,n)||t.get(e,n,s),has:(e,n)=>!!Ha(e,n)||t.has(e,n)}));/**
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
 */class xf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Or="@firebase/app",za="0.9.4";/**
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
 */const $t=new Sl("@firebase/app"),Mf="@firebase/app-compat",Bf="@firebase/analytics-compat",Ff="@firebase/analytics",Vf="@firebase/app-check-compat",Uf="@firebase/app-check",$f="@firebase/auth",jf="@firebase/auth-compat",qf="@firebase/database",Hf="@firebase/database-compat",zf="@firebase/functions",Kf="@firebase/functions-compat",Gf="@firebase/installations",Wf="@firebase/installations-compat",Qf="@firebase/messaging",Yf="@firebase/messaging-compat",Xf="@firebase/performance",Jf="@firebase/performance-compat",Zf="@firebase/remote-config",ep="@firebase/remote-config-compat",tp="@firebase/storage",np="@firebase/storage-compat",sp="@firebase/firestore",ip="@firebase/firestore-compat",rp="firebase",op="9.17.2";/**
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
 */const Rr="[DEFAULT]",ap={[Or]:"fire-core",[Mf]:"fire-core-compat",[Ff]:"fire-analytics",[Bf]:"fire-analytics-compat",[Uf]:"fire-app-check",[Vf]:"fire-app-check-compat",[$f]:"fire-auth",[jf]:"fire-auth-compat",[qf]:"fire-rtdb",[Hf]:"fire-rtdb-compat",[zf]:"fire-fn",[Kf]:"fire-fn-compat",[Gf]:"fire-iid",[Wf]:"fire-iid-compat",[Qf]:"fire-fcm",[Yf]:"fire-fcm-compat",[Xf]:"fire-perf",[Jf]:"fire-perf-compat",[Zf]:"fire-rc",[ep]:"fire-rc-compat",[tp]:"fire-gcs",[np]:"fire-gcs-compat",[sp]:"fire-fst",[ip]:"fire-fst-compat","fire-js":"fire-js",[rp]:"fire-js-all"};/**
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
 */const ri=new Map,xr=new Map;function cp(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(xr.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;xr.set(e,t);for(const n of ri.values())cp(n,t);return!0}function Dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new Il("app","Firebase",lp);/**
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
 */class up{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Nl=op;function Pl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});if(n||(n=cf()),!n)throw wt.create("no-options");const r=ri.get(i);if(r){if(Dr(n,r.options)&&Dr(s,r.config))return r;throw wt.create("duplicate-app",{appName:i})}const o=new vf(i);for(const c of xr.values())o.addComponent(c);const a=new up(n,s,o);return ri.set(i,a),a}function Ol(t=Rr){const e=ri.get(t);if(!e&&t===Rr)return Pl();if(!e)throw wt.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=(s=ap[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}Jn(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hp="firebase-heartbeat-database",dp=1,Zn="firebase-heartbeat-store";let pr=null;function Rl(){return pr||(pr=Pf(hp,dp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),pr}async function fp(t){try{return(await Rl()).transaction(Zn).objectStore(Zn).get(xl(t))}catch(e){if(e instanceof Gt)$t.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function Ka(t,e){try{const s=(await Rl()).transaction(Zn,"readwrite");return await s.objectStore(Zn).put(e,xl(t)),s.done}catch(n){if(n instanceof Gt)$t.warn(n.message);else{const s=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(s.message)}}}function xl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pp=1024,gp=30*24*60*60*1e3;class mp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ga();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=gp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ga(),{heartbeatsToSend:n,unsentEntries:s}=yp(this._heartbeatsCache.heartbeats),i=ii(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ga(){return new Date().toISOString().substring(0,10)}function yp(t,e=pp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uf()?hf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wa(t){return ii(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wp(t){Jn(new pn("platform-logger",e=>new xf(e),"PRIVATE")),Jn(new pn("heartbeat",e=>new mp(e),"PRIVATE")),bt(Or,za,t),bt(Or,za,"esm2017"),bt("fire-js","")}wp("");var bp="firebase",Ep="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(bp,Ep,"app");var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,Co=Co||{},O=Tp||self;function oi(){}function Si(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ms(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Cp(t){return Object.prototype.hasOwnProperty.call(t,gr)&&t[gr]||(t[gr]=++_p)}var gr="closure_uid_"+(1e9*Math.random()>>>0),_p=0;function Ip(t,e,n){return t.call.apply(t.bind,arguments)}function Sp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=Ip:_e=Sp,_e.apply(null,arguments)}function $s(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function me(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function kt(){this.s=this.s,this.o=this.o}var Ap=0;kt.prototype.s=!1;kt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ap!=0)&&Cp(this)};kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ll=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _o(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Qa(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Si(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ie(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var kp=function(){if(!O.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{O.addEventListener("test",oi,e),O.removeEventListener("test",oi,e)}catch{}return t}();function ai(t){return/^[\s\xa0]*$/.test(t)}var Ya=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function mr(t,e){return t<e?-1:t>e?1:0}function Ai(){var t=O.navigator;return t&&(t=t.userAgent)?t:""}function nt(t){return Ai().indexOf(t)!=-1}function Io(t){return Io[" "](t),t}Io[" "]=oi;function Dp(t){var e=Op;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Np=nt("Opera"),gn=nt("Trident")||nt("MSIE"),Ml=nt("Edge"),Lr=Ml||gn,Bl=nt("Gecko")&&!(Ai().toLowerCase().indexOf("webkit")!=-1&&!nt("Edge"))&&!(nt("Trident")||nt("MSIE"))&&!nt("Edge"),Pp=Ai().toLowerCase().indexOf("webkit")!=-1&&!nt("Edge");function Fl(){var t=O.document;return t?t.documentMode:void 0}var ci;e:{var yr="",vr=function(){var t=Ai();if(Bl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ml)return/Edge\/([\d\.]+)/.exec(t);if(gn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Pp)return/WebKit\/(\S+)/.exec(t);if(Np)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(vr&&(yr=vr?vr[1]:""),gn){var wr=Fl();if(wr!=null&&wr>parseFloat(yr)){ci=String(wr);break e}}ci=yr}var Op={};function Rp(){return Dp(function(){let t=0;const e=Ya(String(ci)).split("."),n=Ya("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=mr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||mr(i[2].length==0,r[2].length==0)||mr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Mr;if(O.document&&gn){var Xa=Fl();Mr=Xa||parseInt(ci,10)||void 0}else Mr=void 0;var xp=Mr;function es(t,e){if(Ie.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bl){e:{try{Io(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Lp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&es.X.h.call(this)}}me(es,Ie);var Lp={2:"touch",3:"pen",4:"mouse"};es.prototype.h=function(){es.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ys="closure_listenable_"+(1e6*Math.random()|0),Mp=0;function Bp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Mp,this.ba=this.ea=!1}function ki(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function So(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Vl(t){const e={};for(const n in t)e[n]=t[n];return e}const Ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ul(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Ja.length;r++)n=Ja[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Di(t){this.src=t,this.g={},this.h=0}Di.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Fr(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Bp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Br(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Ll(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ki(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Ao="closure_lm_"+(1e6*Math.random()|0),br={};function $l(t,e,n,s,i){if(s&&s.once)return ql(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)$l(t,e[r],n,s,i);return null}return n=No(n),t&&t[ys]?t.N(e,n,ms(s)?!!s.capture:!!s,i):jl(t,e,n,!1,s,i)}function jl(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ms(i)?!!i.capture:!!i,a=Do(t);if(a||(t[Ao]=a=new Di(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Fp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)kp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(zl(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fp(){function t(n){return e.call(t.src,t.listener,n)}const e=Vp;return t}function ql(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ql(t,e[r],n,s,i);return null}return n=No(n),t&&t[ys]?t.O(e,n,ms(s)?!!s.capture:!!s,i):jl(t,e,n,!0,s,i)}function Hl(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Hl(t,e[r],n,s,i);else s=ms(s)?!!s.capture:!!s,n=No(n),t&&t[ys]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Fr(r,n,s,i),-1<n&&(ki(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Do(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fr(e,n,s,i)),(n=-1<t?e[t]:null)&&ko(n))}function ko(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ys])Br(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(zl(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Do(e))?(Br(n,t),n.h==0&&(n.src=null,e[Ao]=null)):ki(t)}}}function zl(t){return t in br?br[t]:br[t]="on"+t}function Vp(t,e){if(t.ba)t=!0;else{e=new es(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ko(t),t=n.call(s,e)}return t}function Do(t){return t=t[Ao],t instanceof Di?t:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(t){return typeof t=="function"?t:(t[Er]||(t[Er]=function(e){return t.handleEvent(e)}),t[Er])}function le(){kt.call(this),this.i=new Di(this),this.P=this,this.I=null}me(le,kt);le.prototype[ys]=!0;le.prototype.removeEventListener=function(t,e,n,s){Hl(this,t,e,n,s)};function pe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ie(e,t);else if(e instanceof Ie)e.target=e.target||t;else{var i=e;e=new Ie(s,t),Ul(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=js(o,s,!0,e)&&i}if(o=e.g=t,i=js(o,s,!0,e)&&i,i=js(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=js(o,s,!1,e)&&i}le.prototype.M=function(){if(le.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ki(n[s]);delete t.g[e],t.h--}}this.I=null};le.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function js(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Br(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Po=O.JSON.stringify;function Up(){var t=Wl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $p{constructor(){this.h=this.g=null}add(e,n){const s=Kl.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Kl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jp,t=>t.reset());class jp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qp(t){O.setTimeout(()=>{throw t},0)}function Gl(t,e){Vr||Hp(),Ur||(Vr(),Ur=!0),Wl.add(t,e)}var Vr;function Hp(){var t=O.Promise.resolve(void 0);Vr=function(){t.then(zp)}}var Ur=!1,Wl=new $p;function zp(){for(var t;t=Up();){try{t.h.call(t.g)}catch(n){qp(n)}var e=Kl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ur=!1}function Ni(t,e){le.call(this),this.h=t||1,this.g=e||O,this.j=_e(this.lb,this),this.l=Date.now()}me(Ni,le);_=Ni.prototype;_.ca=!1;_.R=null;_.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),pe(this,"tick"),this.ca&&(Oo(this),this.start()))}};_.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Oo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}_.M=function(){Ni.X.M.call(this),Oo(this),delete this.g};function Ro(t,e,n){if(typeof t=="function")n&&(t=_e(t,n));else if(t&&typeof t.handleEvent=="function")t=_e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:O.setTimeout(t,e||0)}function Ql(t){t.g=Ro(()=>{t.g=null,t.i&&(t.i=!1,Ql(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Kp extends kt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ql(this)}M(){super.M(),this.g&&(O.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(t){kt.call(this),this.h=t,this.g={}}me(ts,kt);var Za=[];function Yl(t,e,n,s){Array.isArray(n)||(n&&(Za[0]=n.toString()),n=Za);for(var i=0;i<n.length;i++){var r=$l(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Xl(t){So(t.g,function(e,n){this.g.hasOwnProperty(n)&&ko(e)},t),t.g={}}ts.prototype.M=function(){ts.X.M.call(this),Xl(this)};ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pi(){this.g=!0}Pi.prototype.Aa=function(){this.g=!1};function Gp(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Wp(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function sn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Yp(t,n)+(s?" "+s:"")})}function Qp(t,e){t.info(function(){return"TIMEOUT: "+e})}Pi.prototype.info=function(){};function Yp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Po(n)}catch{return e}}var Wt={},ec=null;function Oi(){return ec=ec||new le}Wt.Pa="serverreachability";function Jl(t){Ie.call(this,Wt.Pa,t)}me(Jl,Ie);function ns(t){const e=Oi();pe(e,new Jl(e))}Wt.STAT_EVENT="statevent";function Zl(t,e){Ie.call(this,Wt.STAT_EVENT,t),this.stat=e}me(Zl,Ie);function Ne(t){const e=Oi();pe(e,new Zl(e,t))}Wt.Qa="timingevent";function eu(t,e){Ie.call(this,Wt.Qa,t),this.size=e}me(eu,Ie);function vs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return O.setTimeout(function(){t()},e)}var Ri={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xo(){}xo.prototype.h=null;function tc(t){return t.h||(t.h=t.i())}function nu(){}var ws={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Lo(){Ie.call(this,"d")}me(Lo,Ie);function Mo(){Ie.call(this,"c")}me(Mo,Ie);var $r;function xi(){}me(xi,xo);xi.prototype.g=function(){return new XMLHttpRequest};xi.prototype.i=function(){return{}};$r=new xi;function bs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ts(this),this.O=Xp,t=Lr?125:void 0,this.T=new Ni(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new su}function su(){this.i=null,this.g="",this.h=!1}var Xp=45e3,jr={},li={};_=bs.prototype;_.setTimeout=function(t){this.O=t};function qr(t,e,n){t.K=1,t.v=Mi(ht(e)),t.s=n,t.P=!0,iu(t,null)}function iu(t,e){t.F=Date.now(),Es(t),t.A=ht(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),du(n.i,"t",s),t.C=0,n=t.l.H,t.h=new su,t.g=Ru(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Kp(_e(t.La,t,t.g),t.N)),Yl(t.S,t.g,"readystatechange",t.ib),e=t.H?Vl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ns(),Gp(t.j,t.u,t.A,t.m,t.U,t.s)}_.ib=function(t){t=t.target;const e=this.L;e&&lt(t)==3?e.l():this.La(t)};_.La=function(t){try{if(t==this.g)e:{const u=lt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Lr||this.g&&(this.h.h||this.g.fa()||rc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ns(3):ns(2)),Li(this);var n=this.g.aa();this.Y=n;t:if(ru(this)){var s=rc(this.g);t="";var i=s.length,r=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),jn(this);var o="";break t}this.h.i=new O.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Wp(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ai(a)){var l=a;break t}}l=null}if(n=l)sn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hr(this,n);else{this.i=!1,this.o=3,Ne(12),Mt(this),jn(this);break e}}this.P?(ou(this,u,o),Lr&&this.i&&u==3&&(Yl(this.S,this.T,"tick",this.hb),this.T.start())):(sn(this.j,this.m,o,null),Hr(this,o)),u==4&&Mt(this),this.i&&!this.I&&(u==4?Du(this.l,this):(this.i=!1,Es(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ne(12)):(this.o=0,Ne(13)),Mt(this),jn(this)}}}catch{}finally{}};function ru(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ou(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Jp(t,n),i==li){e==4&&(t.o=4,Ne(14),s=!1),sn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==jr){t.o=4,Ne(15),sn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else sn(t.j,t.m,i,null),Hr(t,i);ru(t)&&i!=li&&i!=jr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ne(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qo(e),e.K=!0,Ne(11))):(sn(t.j,t.m,n,"[Invalid Chunked Response]"),Mt(t),jn(t))}_.hb=function(){if(this.g){var t=lt(this.g),e=this.g.fa();this.C<e.length&&(Li(this),ou(this,t,e),this.i&&t!=4&&Es(this))}};function Jp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?li:(n=Number(e.substring(n,s)),isNaN(n)?jr:(s+=1,s+n>e.length?li:(e=e.substr(s,n),t.C=s+n,e)))}_.cancel=function(){this.I=!0,Mt(this)};function Es(t){t.V=Date.now()+t.O,au(t,t.O)}function au(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vs(_e(t.gb,t),e)}function Li(t){t.B&&(O.clearTimeout(t.B),t.B=null)}_.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Qp(this.j,this.A),this.K!=2&&(ns(),Ne(17)),Mt(this),this.o=2,jn(this)):au(this,this.V-t)};function jn(t){t.l.G==0||t.I||Du(t.l,t)}function Mt(t){Li(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Oo(t.T),Xl(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||zr(n.h,t))){if(!t.J&&zr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)di(n),Vi(n);else break e;jo(n),Ne(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=vs(_e(n.cb,n),6e3));if(1>=gu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bt(n,11)}else if((t.J||n.g==t)&&di(n),!ai(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.h;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Bo(r,r.h),r.h=null))}if(s.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,X(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ou(s,s.H?s.ka:null,s.V),o.J){mu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Li(a),Es(a)),s.g=o}else Au(s);0<n.i.length&&Ui(n)}else l[0]!="stop"&&l[0]!="close"||Bt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bt(n,7):$o(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ns(4)}catch{}}function Zp(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Si(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function eg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Si(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function cu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Si(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=eg(t),s=Zp(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var lu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vt){this.h=e!==void 0?e:t.h,ui(this,t.j),this.s=t.s,this.g=t.g,hi(this,t.m),this.l=t.l,e=t.i;var n=new ss;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nc(this,n),this.o=t.o}else t&&(n=String(t).match(lu))?(this.h=!!e,ui(this,n[1]||"",!0),this.s=Bn(n[2]||""),this.g=Bn(n[3]||"",!0),hi(this,n[4]),this.l=Bn(n[5]||"",!0),nc(this,n[6]||"",!0),this.o=Bn(n[7]||"")):(this.h=!!e,this.i=new ss(null,this.h))}Vt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fn(e,sc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fn(e,sc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fn(n,n.charAt(0)=="/"?ig:sg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fn(n,og)),t.join("")};function ht(t){return new Vt(t)}function ui(t,e,n){t.j=n?Bn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nc(t,e,n){e instanceof ss?(t.i=e,ag(t.i,t.h)):(n||(e=Fn(e,rg)),t.i=new ss(e,t.h))}function X(t,e,n){t.i.set(e,n)}function Mi(t){return X(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ng),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ng(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sc=/[#\/\?@]/g,sg=/[#\?:]/g,ig=/[#\?]/g,rg=/[#\?@]/g,og=/#/g;function ss(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dt(t){t.g||(t.g=new Map,t.h=0,t.i&&tg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}_=ss.prototype;_.add=function(t,e){Dt(this),this.i=null,t=Sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function uu(t,e){Dt(t),e=Sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function hu(t,e){return Dt(t),e=Sn(t,e),t.g.has(e)}_.forEach=function(t,e){Dt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};_.oa=function(){Dt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};_.W=function(t){Dt(this);let e=[];if(typeof t=="string")hu(this,t)&&(e=e.concat(this.g.get(Sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};_.set=function(t,e){return Dt(this),this.i=null,t=Sn(this,t),hu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function du(t,e,n){uu(t,e),0<n.length&&(t.i=null,t.g.set(Sn(t,e),_o(n)),t.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ag(t,e){e&&!t.j&&(Dt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(uu(this,s),du(this,i,n))},t)),t.j=e}var cg=class{constructor(e,n){this.h=e,this.g=n}};function fu(t){this.l=t||lg,O.PerformanceNavigationTiming?(t=O.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(O.g&&O.g.Ga&&O.g.Ga()&&O.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lg=10;function pu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gu(t){return t.h?1:t.g?t.g.size:0}function zr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bo(t,e){t.g?t.g.add(e):t.h=e}function mu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fu.prototype.cancel=function(){if(this.i=yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _o(t.i)}function Fo(){}Fo.prototype.stringify=function(t){return O.JSON.stringify(t,void 0)};Fo.prototype.parse=function(t){return O.JSON.parse(t,void 0)};function ug(){this.g=new Fo}function hg(t,e,n){const s=n||"";try{cu(t,function(i,r){let o=i;ms(i)&&(o=Po(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function dg(t,e){const n=new Pi;if(O.Image){const s=new Image;s.onload=$s(qs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=$s(qs,n,s,"TestLoadImage: error",!1,e),s.onabort=$s(qs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=$s(qs,n,s,"TestLoadImage: timeout",!1,e),O.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function qs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ts(t){this.l=t.ac||null,this.j=t.jb||!1}me(Ts,xo);Ts.prototype.g=function(){return new Bi(this.l,this.j)};Ts.prototype.i=function(t){return function(){return t}}({});function Bi(t,e){le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}me(Bi,le);var Vo=0;_=Bi.prototype;_.open=function(t,e){if(this.readyState!=Vo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,is(this)};_.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||O).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=Vo};_.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof O.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function vu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}_.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cs(this):is(this),this.readyState==3&&vu(this)}};_.Va=function(t){this.g&&(this.response=this.responseText=t,Cs(this))};_.Ua=function(t){this.g&&(this.response=t,Cs(this))};_.ga=function(){this.g&&Cs(this)};function Cs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,is(t)}_.setRequestHeader=function(t,e){this.v.append(t,e)};_.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function is(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fg=O.JSON.parse;function J(t){le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wu,this.K=this.L=!1}me(J,le);var wu="",pg=/^https?$/i,gg=["POST","PUT"];_=J.prototype;_.Ka=function(t){this.L=t};_.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$r.g(),this.C=this.u?tc(this.u):tc($r),this.g.onreadystatechange=_e(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ic(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=O.FormData&&t instanceof O.FormData,!(0<=Ll(gg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tu(this),0<this.B&&((this.K=mg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.qa,this)):this.A=Ro(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ic(this,r)}};function mg(t){return gn&&Rp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}_.qa=function(){typeof Co<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pe(this,"timeout"),this.abort(8))};function ic(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bu(t),Fi(t)}function bu(t){t.D||(t.D=!0,pe(t,"complete"),pe(t,"error"))}_.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pe(this,"complete"),pe(this,"abort"),Fi(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fi(this,!0)),J.X.M.call(this)};_.Ha=function(){this.s||(this.F||this.v||this.l?Eu(this):this.fb())};_.fb=function(){Eu(this)};function Eu(t){if(t.h&&typeof Co<"u"&&(!t.C[1]||lt(t)!=4||t.aa()!=2)){if(t.v&&lt(t)==4)Ro(t.Ha,0,t);else if(pe(t,"readystatechange"),lt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(lu)[1]||null;if(!i&&O.self&&O.self.location){var r=O.self.location.protocol;i=r.substr(0,r.length-1)}s=!pg.test(i?i.toLowerCase():"")}n=s}if(n)pe(t,"complete"),pe(t,"success");else{t.m=6;try{var o=2<lt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",bu(t)}}finally{Fi(t)}}}}function Fi(t,e){if(t.g){Tu(t);const n=t.g,s=t.C[0]?oi:null;t.g=null,t.C=null,e||pe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Tu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(O.clearTimeout(t.A),t.A=null)}function lt(t){return t.g?t.g.readyState:0}_.aa=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};_.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fg(e)}};function rc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ea=function(){return this.m};_.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cu(t){let e="";return So(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Uo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Cu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):X(t,e,n))}function Mn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _u(t){this.Ca=0,this.i=[],this.j=new Pi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Mn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Mn("baseRetryDelayMs",5e3,t),this.bb=Mn("retryDelaySeedMs",1e4,t),this.$a=Mn("forwardChannelMaxRetries",2,t),this.ta=Mn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fu(t&&t.concurrentRequestLimit),this.Fa=new ug,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_=_u.prototype;_.ma=8;_.G=1;function $o(t){if(Iu(t),t.G==3){var e=t.U++,n=ht(t.F);X(n,"SID",t.I),X(n,"RID",e),X(n,"TYPE","terminate"),_s(t,n),e=new bs(t,t.j,e,void 0),e.K=2,e.v=Mi(ht(n)),n=!1,O.navigator&&O.navigator.sendBeacon&&(n=O.navigator.sendBeacon(e.v.toString(),"")),!n&&O.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ru(e.l,null),e.g.da(e.v)),e.F=Date.now(),Es(e)}Pu(t)}function Vi(t){t.g&&(qo(t),t.g.cancel(),t.g=null)}function Iu(t){Vi(t),t.u&&(O.clearTimeout(t.u),t.u=null),di(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&O.clearTimeout(t.m),t.m=null)}function Ui(t){pu(t.h)||t.m||(t.m=!0,Gl(t.Ja,t),t.C=0)}function yg(t,e){return gu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=vs(_e(t.Ja,t,e),Nu(t,t.C)),t.C++,!0)}_.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new bs(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Vl(r),Ul(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Su(this,i,e),n=ht(this.F),X(n,"RID",t),X(n,"CVER",22),this.D&&X(n,"X-HTTP-Session-Id",this.D),_s(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Cu(r)))+"&"+e:this.o&&Uo(n,this.o,r)),Bo(this.h,i),this.Ya&&X(n,"TYPE","init"),this.O?(X(n,"$req",e),X(n,"SID","null"),i.Z=!0,qr(i,n,null)):qr(i,n,e),this.G=2}}else this.G==3&&(t?oc(this,t):this.i.length==0||pu(this.h)||oc(this))};function oc(t,e){var n;e?n=e.m:n=t.U++;const s=ht(t.F);X(s,"SID",t.I),X(s,"RID",n),X(s,"AID",t.T),_s(t,s),t.o&&t.s&&Uo(s,t.o,t.s),n=new bs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Su(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Bo(t.h,n),qr(n,s,e)}function _s(t,e){t.ia&&So(t.ia,function(n,s){X(e,s,n)}),t.l&&cu({},function(n,s){X(e,s,n)})}function Su(t,e,n){n=Math.min(t.i.length,n);var s=t.l?_e(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{hg(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Au(t){t.g||t.u||(t.Z=1,Gl(t.Ia,t),t.A=0)}function jo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=vs(_e(t.Ia,t),Nu(t,t.A)),t.A++,!0)}_.Ia=function(){if(this.u=null,ku(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vs(_e(this.eb,this),t)}};_.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ne(10),Vi(this),ku(this))};function qo(t){t.B!=null&&(O.clearTimeout(t.B),t.B=null)}function ku(t){t.g=new bs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ht(t.sa);X(e,"RID","rpc"),X(e,"SID",t.I),X(e,"CI",t.L?"0":"1"),X(e,"AID",t.T),X(e,"TYPE","xmlhttp"),_s(t,e),t.o&&t.s&&Uo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Mi(ht(e)),n.s=null,n.P=!0,iu(n,t)}_.cb=function(){this.v!=null&&(this.v=null,Vi(this),jo(this),Ne(19))};function di(t){t.v!=null&&(O.clearTimeout(t.v),t.v=null)}function Du(t,e){var n=null;if(t.g==e){di(t),qo(t),t.g=null;var s=2}else if(zr(t.h,e))n=e.D,mu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Oi(),pe(s,new eu(s,n)),Ui(t)}else Au(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&yg(t,e)||s==2&&jo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Bt(t,5);break;case 4:Bt(t,10);break;case 3:Bt(t,6);break;default:Bt(t,2)}}}function Nu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Bt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=_e(t.kb,t);n||(n=new Vt("//www.google.com/images/cleardot.gif"),O.location&&O.location.protocol=="http"||ui(n,"https"),Mi(n)),dg(n.toString(),s)}else Ne(2);t.G=0,t.l&&t.l.va(e),Pu(t),Iu(t)}_.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Pu(t){if(t.G=0,t.la=[],t.l){const e=yu(t.h);(e.length!=0||t.i.length!=0)&&(Qa(t.la,e),Qa(t.la,t.i),t.h.i.length=0,_o(t.i),t.i.length=0),t.l.ua()}}function Ou(t,e,n){var s=n instanceof Vt?ht(n):new Vt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),hi(s,s.m);else{var i=O.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Vt(null,void 0);s&&ui(r,s),e&&(r.g=e),i&&hi(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&X(s,n,e),X(s,"VER",t.ma),_s(t,s),s}function Ru(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new J(new Ts({jb:!0})):new J(t.ra),e.Ka(t.H),e}function xu(){}_=xu.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Ra=function(){};function fi(){if(gn&&!(10<=Number(xp)))throw Error("Environmental error: no available transport.")}fi.prototype.g=function(t,e){return new Ue(t,e)};function Ue(t,e){le.call(this),this.g=new _u(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ai(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ai(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new An(this)}me(Ue,le);Ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ne(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ou(t,null,t.V),Ui(t)};Ue.prototype.close=function(){$o(this.g)};Ue.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Po(t),t=n);e.i.push(new cg(e.ab++,t)),e.G==3&&Ui(e)};Ue.prototype.M=function(){this.g.l=null,delete this.j,$o(this.g),delete this.g,Ue.X.M.call(this)};function Lu(t){Lo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}me(Lu,Lo);function Mu(){Mo.call(this),this.status=1}me(Mu,Mo);function An(t){this.g=t}me(An,xu);An.prototype.xa=function(){pe(this.g,"a")};An.prototype.wa=function(t){pe(this.g,new Lu(t))};An.prototype.va=function(t){pe(this.g,new Mu)};An.prototype.ua=function(){pe(this.g,"b")};fi.prototype.createWebChannel=fi.prototype.g;Ue.prototype.send=Ue.prototype.u;Ue.prototype.open=Ue.prototype.m;Ue.prototype.close=Ue.prototype.close;Ri.NO_ERROR=0;Ri.TIMEOUT=8;Ri.HTTP_ERROR=6;tu.COMPLETE="complete";nu.EventType=ws;ws.OPEN="a";ws.CLOSE="b";ws.ERROR="c";ws.MESSAGE="d";le.prototype.listen=le.prototype.N;J.prototype.listenOnce=J.prototype.O;J.prototype.getLastError=J.prototype.Oa;J.prototype.getLastErrorCode=J.prototype.Ea;J.prototype.getStatus=J.prototype.aa;J.prototype.getResponseJson=J.prototype.Sa;J.prototype.getResponseText=J.prototype.fa;J.prototype.send=J.prototype.da;J.prototype.setWithCredentials=J.prototype.Ka;var vg=function(){return new fi},wg=function(){return Oi()},Tr=Ri,bg=tu,Eg=Wt,ac={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tg=Ts,Hs=nu,Cg=J;const cc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Sl("@firebase/firestore");function lc(){return jt.logLevel}function S(t,...e){if(jt.logLevel<=H.DEBUG){const n=e.map(Ho);jt.debug(`Firestore (${kn}): ${t}`,...n)}}function dt(t,...e){if(jt.logLevel<=H.ERROR){const n=e.map(Ho);jt.error(`Firestore (${kn}): ${t}`,...n)}}function Kr(t,...e){if(jt.logLevel<=H.WARN){const n=e.map(Ho);jt.warn(`Firestore (${kn}): ${t}`,...n)}}function Ho(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function P(t="Unexpected state"){const e=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: `+t;throw dt(e),new Error(e)}function W(t,e){t||P()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _g{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class Ig{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sg{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Et,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Et)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(W(typeof s.accessToken=="string"),new Bu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new be(e)}}class Ag{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(W(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class kg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Ag(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ng{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.A=n.token,new Dg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Pg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function z(t,e){return t<e?-1:t>e?1:0}function mn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.timestamp=e}static fromTimestamp(e){return new R(e)}static min(){return new R(new re(0,0))}static max(){return new R(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s){n===void 0?n=0:n>e.length&&P(),s===void 0?s=e.length-n:s>e.length-n&&P(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return rs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Q extends rs{construct(e,n,s){return new Q(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new C(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Q(n)}static emptyPath(){return new Q([])}}const Og=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends rs{construct(e,n,s){return new Te(e,n,s)}static isValidIdentifier(e){return Og.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new C(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new C(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(n)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.path=e}static fromPath(e){return new A(Q.fromString(e))}static fromName(e){return new A(Q.fromString(e).popFirst(5))}static empty(){return new A(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Q.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new Q(e.slice()))}}function Rg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=R.fromTimestamp(s===1e9?new re(n+1,0):new re(n,s));return new Ct(i,A.empty(),e)}function xg(t){return new Ct(t.readTime,t.key,-1)}class Ct{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ct(R.min(),A.empty(),-1)}static max(){return new Ct(R.max(),A.empty(),-1)}}function Lg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=A.comparator(t.documentKey,e.documentKey),n!==0?n:z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Mg)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&P(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class zo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}zo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class os{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new os("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof os&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){return t==null}function pi(t){return t===0&&1/t==-1/0}function Vg(t){return typeof t=="number"&&Number.isInteger(t)&&!pi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ug extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new Ug("Invalid base64 string: "+i):i}}(e);return new Se(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Se(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const $g=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(t){if(W(!!t),typeof t=="string"){let e=0;const n=$g.exec(t);if(W(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:te(t.seconds),nanos:te(t.nanos)}}function te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yn(t){return typeof t=="string"?Se.fromBase64String(t):Se.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $u(t){const e=t.mapValue.fields.__previous_value__;return Uu(e)?$u(e):e}function as(t){const e=_t(t.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uu(t)?4:jg(t)?9007199254740991:10:P()}function rt(t,e){if(t===e)return!0;const n=qt(t);if(n!==qt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return as(t).isEqual(as(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=_t(s.timestampValue),o=_t(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yn(s.bytesValue).isEqual(yn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return te(s.geoPointValue.latitude)===te(i.geoPointValue.latitude)&&te(s.geoPointValue.longitude)===te(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return te(s.integerValue)===te(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=te(s.doubleValue),o=te(i.doubleValue);return r===o?pi(r)===pi(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return mn(t.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(uc(r)!==uc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!rt(r[a],o[a])))return!1;return!0}(t,e);default:return P()}}function cs(t,e){return(t.values||[]).find(n=>rt(n,e))!==void 0}function vn(t,e){if(t===e)return 0;const n=qt(t),s=qt(e);if(n!==s)return z(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return z(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=te(i.integerValue||i.doubleValue),a=te(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hc(t.timestampValue,e.timestampValue);case 4:return hc(as(t),as(e));case 5:return z(t.stringValue,e.stringValue);case 6:return function(i,r){const o=yn(i),a=yn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=z(o[c],a[c]);if(l!==0)return l}return z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=z(te(i.latitude),te(r.latitude));return o!==0?o:z(te(i.longitude),te(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=vn(o[c],a[c]);if(l)return l}return z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===zs.mapValue&&r===zs.mapValue)return 0;if(i===zs.mapValue)return 1;if(r===zs.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=z(a[u],l[u]);if(h!==0)return h;const d=vn(o[a[u]],c[l[u]]);if(d!==0)return d}return z(a.length,l.length)}(t.mapValue,e.mapValue);default:throw P()}}function hc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return z(t,e);const n=_t(t),s=_t(e),i=z(n.seconds,s.seconds);return i!==0?i:z(n.nanos,s.nanos)}function wn(t){return Gr(t)}function Gr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=_t(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,A.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Gr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Gr(s.fields[a])}`;return r+"}"}(t.mapValue):P();var e,n}function dc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wr(t){return!!t&&"integerValue"in t}function Ko(t){return!!t&&"arrayValue"in t}function fc(t){return!!t&&"nullValue"in t}function pc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ys(t){return!!t&&"mapValue"in t}function qn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=qn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gi{constructor(e,n){this.position=e,this.inclusive=n}}function gc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=A.comparator(A.fromName(o.referenceValue),n.key):s=vn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function mc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ju{}class ne extends ju{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Hg(e,n,s):n==="array-contains"?new Gg(e,s):n==="in"?new Wg(e,s):n==="not-in"?new Qg(e,s):n==="array-contains-any"?new Yg(e,s):new ne(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new zg(e,s):new Kg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vn(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.matchesComparison(vn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return P()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Je extends ju{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Je(e,n)}matches(e){return qu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qu(t){return t.op==="and"}function Hu(t){return qg(t)&&qu(t)}function qg(t){for(const e of t.filters)if(e instanceof Je)return!1;return!0}function Qr(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+wn(t.value);if(Hu(t))return t.filters.map(e=>Qr(e)).join(",");{const e=t.filters.map(n=>Qr(n)).join(",");return`${t.op}(${e})`}}function zu(t,e){return t instanceof ne?function(n,s){return s instanceof ne&&n.op===s.op&&n.field.isEqual(s.field)&&rt(n.value,s.value)}(t,e):t instanceof Je?function(n,s){return s instanceof Je&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&zu(r,s.filters[o]),!0):!1}(t,e):void P()}function Ku(t){return t instanceof ne?function(e){return`${e.field.canonicalString()} ${e.op} ${wn(e.value)}`}(t):t instanceof Je?function(e){return e.op.toString()+" {"+e.getFilters().map(Ku).join(" ,")+"}"}(t):"Filter"}class Hg extends ne{constructor(e,n,s){super(e,n,s),this.key=A.fromName(s.referenceValue)}matches(e){const n=A.comparator(e.key,this.key);return this.matchesComparison(n)}}class zg extends ne{constructor(e,n){super(e,"in",n),this.keys=Gu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kg extends ne{constructor(e,n){super(e,"not-in",n),this.keys=Gu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>A.fromName(s.referenceValue))}class Gg extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ko(n)&&cs(n.arrayValue,this.value)}}class Wg extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cs(this.value.arrayValue,n)}}class Qg extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cs(this.value.arrayValue,n)}}class Yg extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ko(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>cs(this.value.arrayValue,s))}}/**
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
 */class on{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.comparator=e,this.root=n||fe.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ks(this.root,e,this.comparator,!0)}}class Ks{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??fe.RED,this.left=i??fe.EMPTY,this.right=r??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return fe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw P();const e=this.left.check();if(e!==this.right.check())throw P();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw P()}get value(){throw P()}get color(){throw P()}get left(){throw P()}get right(){throw P()}copy(t,e,n,s,i){return this}insert(t,e,n){return new fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yc(this.data.getIterator())}getIteratorFrom(e){return new yc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new oe(this.comparator);return n.data=e,n}}class yc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Be([])}unionWith(e){let n=new oe(Te.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Be(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ys(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qn(n)}setAll(e){let n=Te.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=qn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ys(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ys(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Qt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Re(qn(this.value))}}function Wu(t){const e=[];return Qt(t.fields,(n,s)=>{const i=new Te([n]);if(Ys(s)){const r=Wu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,R.min(),R.min(),R.min(),Re.empty(),0)}static newFoundDocument(e,n,s,i){return new Ee(e,1,n,R.min(),s,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,R.min(),R.min(),Re.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,R.min(),R.min(),Re.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jg{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function vc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Jg(t,e,n,s,i,r,o)}function Go(t){const e=L(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Qr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),$i(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wn(s)).join(",")),e._t=n}return e._t}function Wo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Xg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mc(t.startAt,e.startAt)&&mc(t.endAt,e.endAt)}function Yr(t){return A.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Zg(t,e,n,s,i,r,o,a){return new Dn(t,e,n,s,i,r,o,a)}function Qo(t){return new Dn(t)}function wc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ji(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Qu(t){return t.collectionGroup!==null}function an(t){const e=L(t);if(e.wt===null){e.wt=[];const n=ji(e),s=Yo(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new on(n)),e.wt.push(new on(Te.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new on(Te.keyField(),r))}}}return e.wt}function ft(t){const e=L(t);if(!e.gt)if(e.limitType==="F")e.gt=vc(e.path,e.collectionGroup,an(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of an(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new on(r.field,o))}const s=e.endAt?new gi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new gi(e.startAt.position,e.startAt.inclusive):null;e.gt=vc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function Xr(t,e){e.getFirstInequalityField(),ji(t);const n=t.filters.concat([e]);return new Dn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jr(t,e,n){return new Dn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qi(t,e){return Wo(ft(t),ft(e))&&t.limitType===e.limitType}function Yu(t){return`${Go(ft(t))}|lt:${t.limitType}`}function Zr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Ku(s)).join(", ")}]`),$i(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wn(s)).join(",")),`Target(${n})`}(ft(t))}; limitType=${t.limitType})`}function Hi(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):A.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of an(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=gc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,an(n),s)||n.endAt&&!function(i,r,o){const a=gc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,an(n),s))}(t,e)}function em(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xu(t){return(e,n)=>{let s=!1;for(const i of an(t)){const r=tm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function tm(t,e,n){const s=t.field.isKeyField()?A.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?vn(a,c):P()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return P()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pi(e)?"-0":e}}function Zu(t){return{integerValue:""+t}}function nm(t,e){return Vg(e)?Zu(e):Ju(t,e)}/**
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
 */class zi{constructor(){this._=void 0}}function sm(t,e,n){return t instanceof mi?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ls?th(t,e):t instanceof us?nh(t,e):function(s,i){const r=eh(s,i),o=bc(r)+bc(s.It);return Wr(r)&&Wr(s.It)?Zu(o):Ju(s.Tt,o)}(t,e)}function im(t,e,n){return t instanceof ls?th(t,e):t instanceof us?nh(t,e):n}function eh(t,e){return t instanceof yi?Wr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class mi extends zi{}class ls extends zi{constructor(e){super(),this.elements=e}}function th(t,e){const n=sh(e);for(const s of t.elements)n.some(i=>rt(i,s))||n.push(s);return{arrayValue:{values:n}}}class us extends zi{constructor(e){super(),this.elements=e}}function nh(t,e){let n=sh(e);for(const s of t.elements)n=n.filter(i=>!rt(i,s));return{arrayValue:{values:n}}}class yi extends zi{constructor(e,n){super(),this.Tt=e,this.It=n}}function bc(t){return te(t.integerValue||t.doubleValue)}function sh(t){return Ko(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ls&&s instanceof ls||n instanceof us&&s instanceof us?mn(n.elements,s.elements,rt):n instanceof yi&&s instanceof yi?rt(n.It,s.It):n instanceof mi&&s instanceof mi}(t.transform,e.transform)}class om{constructor(e,n){this.version=e,this.transformResults=n}}class Ye{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ki{}function ih(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xo(t.key,Ye.none()):new As(t.key,t.data,Ye.none());{const n=t.data,s=Re.empty();let i=new oe(Te.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Nt(t.key,s,new Be(i.toArray()),Ye.none())}}function am(t,e,n){t instanceof As?function(s,i,r){const o=s.value.clone(),a=Tc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nt?function(s,i,r){if(!Xs(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Tc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(rh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Hn(t,e,n,s){return t instanceof As?function(i,r,o,a){if(!Xs(i.precondition,r))return o;const c=i.value.clone(),l=Cc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Nt?function(i,r,o,a){if(!Xs(i.precondition,r))return o;const c=Cc(i.fieldTransforms,a,r),l=r.data;return l.setAll(rh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Xs(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function cm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=eh(s.transform,i||null);r!=null&&(n===null&&(n=Re.empty()),n.set(s.field,r))}return n||null}function Ec(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mn(n,s,(i,r)=>rm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class As extends Ki{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nt extends Ki{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function rh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Tc(t,e,n){const s=new Map;W(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,im(o,a,n[i]))}return s}function Cc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,sm(r,o,e))}return s}class Xo extends Ki{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lm extends Ki{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee,$;function hm(t){switch(t){default:return P();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function oh(t){if(t===void 0)return dt("GRPC error has no .code"),m.UNKNOWN;switch(t){case ee.OK:return m.OK;case ee.CANCELLED:return m.CANCELLED;case ee.UNKNOWN:return m.UNKNOWN;case ee.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ee.INTERNAL:return m.INTERNAL;case ee.UNAVAILABLE:return m.UNAVAILABLE;case ee.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ee.NOT_FOUND:return m.NOT_FOUND;case ee.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ee.ABORTED:return m.ABORTED;case ee.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ee.DATA_LOSS:return m.DATA_LOSS;default:return P()}}($=ee||(ee={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Vu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new ae(A.comparator);function pt(){return dm}const ah=new ae(A.comparator);function Vn(...t){let e=ah;for(const n of t)e=e.insert(n.key,n);return e}function ch(t){let e=ah;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ft(){return zn()}function lh(){return zn()}function zn(){return new Nn(t=>t.toString(),(t,e)=>t.isEqual(e))}const fm=new ae(A.comparator),pm=new oe(A.comparator);function F(...t){let e=pm;for(const n of t)e=e.add(n);return e}const gm=new oe(z);function uh(){return gm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,ks.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Gi(R.min(),i,uh(),pt(),F())}}class ks{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ks(s,n,F(),F(),F())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class hh{constructor(e,n){this.targetId=e,this.Rt=n}}class dh{constructor(e,n,s=Se.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class _c{constructor(){this.bt=0,this.vt=Sc(),this.Pt=Se.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=F(),n=F(),s=F();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:P()}}),new ks(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Sc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class mm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=pt(),this.Kt=Ic(),this.Gt=new oe(z)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:P()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(Yr(r))if(s===0){const o=new A(r.path);this.zt(n,o,Ee.newNoDocument(o,R.min()))}else W(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Yr(a.target)){const c=new A(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Ee.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=F();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Gi(e,n,this.Gt,this.Ut,s);return this.Ut=pt(),this.Kt=Ic(),this.Gt=new oe(z),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new _c,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new oe(z),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new _c),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Ic(){return new ae(A.comparator)}function Sc(){return new ae(A.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wm=(()=>({and:"AND",or:"OR"}))();class bm{constructor(e,n){this.databaseId=e,this.yt=n}}function vi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Em(t,e){return vi(t,e.toTimestamp())}function st(t){return W(!!t),R.fromTimestamp(function(e){const n=_t(e);return new re(n.seconds,n.nanos)}(t))}function Jo(t,e){return function(n){return new Q(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ph(t){const e=Q.fromString(t);return W(vh(e)),e}function eo(t,e){return Jo(t.databaseId,e.path)}function Cr(t,e){const n=ph(e);if(n.get(1)!==t.databaseId.projectId)throw new C(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new A(gh(n))}function to(t,e){return Jo(t.databaseId,e)}function Tm(t){const e=ph(t);return e.length===4?Q.emptyPath():gh(e)}function no(t){return new Q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gh(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ac(t,e,n){return{name:eo(t,e),fields:n.value.mapValue.fields}}function Cm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:P()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(W(l===void 0||typeof l=="string"),Se.fromBase64String(l||"")):(W(l===void 0||l instanceof Uint8Array),Se.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?m.UNKNOWN:oh(c.code);return new C(l,c.message||"")}(o);n=new dh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Cr(t,s.document.name),r=st(s.document.updateTime),o=s.document.createTime?st(s.document.createTime):R.min(),a=new Re({mapValue:{fields:s.document.fields}}),c=Ee.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Js(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Cr(t,s.document),r=s.readTime?st(s.readTime):R.min(),o=Ee.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Js([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Cr(t,s.document),r=s.removedTargetIds||[];n=new Js([],r,i,null)}else{if(!("filter"in e))return P();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new um(i),o=s.targetId;n=new hh(o,r)}}return n}function _m(t,e){let n;if(e instanceof As)n={update:Ac(t,e.key,e.value)};else if(e instanceof Xo)n={delete:eo(t,e.key)};else if(e instanceof Nt)n={update:Ac(t,e.key,e.data),updateMask:Rm(e.fieldMask)};else{if(!(e instanceof lm))return P();n={verify:eo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof mi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ls)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof us)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yi)return{fieldPath:r.field.canonicalString(),increment:o.It};throw P()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Em(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:P()}(t,e.precondition)),n}function Im(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?st(s.updateTime):st(i);return r.isEqual(R.min())&&(r=st(i)),new om(r,s.transformResults||[])}(n,e))):[]}function Sm(t,e){return{documents:[to(t,e.path)]}}function Am(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=to(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=to(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return yh(Je.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:tn(u.field),direction:Nm(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||$i(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function km(t){let e=Tm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){W(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=mh(u);return h instanceof Je&&Hu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new on(nn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,$i(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new gi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new gi(d,h)}(n.endAt)),Zg(e,i,o,r,a,"F",c,l)}function Dm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return P()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=nn(e.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=nn(e.unaryFilter.field);return ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nn(e.unaryFilter.field);return ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=nn(e.unaryFilter.field);return ne.create(r,"!=",{nullValue:"NULL_VALUE"});default:return P()}}(t):t.fieldFilter!==void 0?function(e){return ne.create(nn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return P()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Je.create(e.compositeFilter.filters.map(n=>mh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return P()}}(e.compositeFilter.op))}(t):P()}function Nm(t){return ym[t]}function Pm(t){return vm[t]}function Om(t){return wm[t]}function tn(t){return{fieldPath:t.canonicalString()}}function nn(t){return Te.fromServerFormat(t.fieldPath)}function yh(t){return t instanceof ne?function(e){if(e.op==="=="){if(pc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NAN"}};if(fc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(pc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NAN"}};if(fc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tn(e.field),op:Pm(e.op),value:e.value}}}(t):t instanceof Je?function(e){const n=e.getFilters().map(s=>yh(s));return n.length===1?n[0]:{compositeFilter:{op:Om(e.op),filters:n}}}(t):P()}function Rm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&am(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Hn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Hn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=ih(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),F())}isEqual(e){return this.batchId===e.batchId&&mn(this.mutations,e.mutations,(n,s)=>Ec(n,s))&&mn(this.baseMutations,e.baseMutations,(n,s)=>Ec(n,s))}}class Zo{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){W(e.mutations.length===s.length);let i=fm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Zo(e,n,s,i)}}/**
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
 */class Lm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ut{constructor(e,n,s,i,r=R.min(),o=R.min(),a=Se.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.oe=e}}function Bm(t){const e=km({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jr(e,e.limit,"L"):e}/**
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
 */class Fm{constructor(){this.Ze=new Vm}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Ct.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Ct.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Vm{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new oe(Q.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new oe(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new bn(0)}static Sn(){return new bn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.changes=new Nn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $m{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Hn(s.mutation,i,Be.empty(),re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,F()).next(()=>s))}getLocalViewOfDocuments(e,n,s=F()){const i=Ft();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Vn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ft();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,F()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=pt();const o=zn(),a=zn();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Nt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hn(u.mutation,l,u.mutation.getFieldMask(),re.now())):o.set(l.key,Be.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new $m(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=zn();let i=new ae((o,a)=>o-a),r=F();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Be.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||F()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=lh();u.forEach(d=>{if(!r.has(d)){const p=ih(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return A.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(Ft());let a=-1,c=r;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,F())).next(u=>({batchId:a,changes:ch(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new A(n)).next(s=>{let i=Vn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Vn();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Dn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ee.newInvalidDocument(l)))});let o=Vn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Hn(l.mutation,c,Be.empty(),re.now()),Hi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:st(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Bm(s.bundledQuery),readTime:st(s.readTime)}}(n)),b.resolve()}}/**
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
 */class Hm{constructor(){this.overlays=new ae(A.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ft();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=Ft(),r=n.length+1,o=new A(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ae((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Ft(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ft(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Lm(n,s));let r=this.ss.get(n);r===void 0&&(r=F(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.rs=new oe(ce.os),this.us=new oe(ce.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new ce(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new ce(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new A(new Q([])),s=new ce(n,e),i=new ce(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new A(new Q([])),s=new ce(n,e),i=new ce(n,e+1);let r=F();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ce(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ce{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return A.comparator(e.key,n.key)||z(e.gs,n.gs)}static cs(e,n){return z(e.gs,n.gs)||A.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new oe(ce.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xm(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new ce(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ce(n,0),i=new ce(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new oe(z);return n.forEach(i=>{const r=new ce(i,0),o=new ce(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;A.isDocumentKey(r)||(r=r.child(""));const o=new ce(new A(r),0);let a=new oe(z);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){W(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,i=>{const r=new ce(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new ce(n,0),i=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.Rs=e,this.docs=new ae(A.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let s=pt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ee.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=pt();const o=n.path,a=new A(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Lg(xg(u),s)<=0||(i.has(u.key)||Hi(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){P()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Gm(this)}getSize(e){return b.resolve(this.size)}}class Gm extends Um{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.persistence=e,this.vs=new Nn(n=>Go(n),Wo),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ea,this.targetCount=0,this.Ss=bn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new bn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new zo(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Wm(this),this.indexManager=new Fm,this.remoteDocumentCache=function(s){return new Km(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Mm(n),this.Os=new qm(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new zm(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){S("MemoryPersistence","Starting transaction:",e);const i=new Ym(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Ym extends Bg{constructor(e){super(),this.currentSequenceNumber=e}}class ta{constructor(e){this.persistence=e,this.Bs=new ea,this.Ls=null}static qs(e){return new ta(e)}get Us(){if(this.Ls)return this.Ls;throw P()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const i=A.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,R.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=F(),i=F();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new na(e,n.fromCache,s,i)}}/**
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
 */class Xm{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(wc(n))return b.resolve(null);let s=ft(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jr(n,null,"F"),s=ft(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=F(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,Jr(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return wc(n)||i.isEqual(R.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(lc()<=H.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zr(n)),this.qi(e,o,n,Rg(i,-1)))})}Bi(e,n){let s=new oe(Xu(e));return n.forEach((i,r)=>{Hi(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return lc()<=H.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Zr(n)),this.Oi.getDocumentsMatchingQuery(e,n,Ct.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new ae(z),this.Gi=new Nn(r=>Go(r),Wo),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jm(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Zm(t,e,n,s){return new Jm(t,e,n,s)}async function wh(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=F();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function ey(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const w=c.docVersions.get(p);W(w!==null),y.version.compareTo(w)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=F();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function bh(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function ty(t,e){const n=L(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Se.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(y,w,g){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=pt(),l=F();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ny(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(R.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function ny(t,e,n){let s=F(),i=F();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=pt();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function sy(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function iy(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Ut(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function so(t,e,n){const s=L(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ss(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function kc(t,e,n){const s=L(t);let i=R.min(),r=F();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=L(a),h=u.Gi.get(l);return h!==void 0?b.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,ft(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:R.min(),n?r:F())).next(a=>(ry(s,em(e),a),{documents:a,Yi:r})))}function ry(t,e,n){let s=t.Qi.get(e)||R.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Dc{constructor(){this.activeTargetIds=uh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oy{constructor(){this.Ur=new Dc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Dc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ay{Gr(e){}shutdown(){}}/**
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
 */class Nc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);S("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(S("RestConnection","Received: ",c),c),c=>{throw Kr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+kn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=cy[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Cg;a.setWithCredentials(!0),a.listenOnce(bg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Tr.NO_ERROR:const l=a.getResponseJson();S("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Tr.TIMEOUT:S("Connection",'RPC "'+e+'" timed out'),o(new C(m.DEADLINE_EXCEEDED,"Request time out"));break;case Tr.HTTP_ERROR:const u=a.getStatus();if(S("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(w)>=0?w:m.UNKNOWN}(d.status);o(new C(p,d.message))}else o(new C(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(m.UNAVAILABLE,"Connection failed."));break;default:P()}}finally{S("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=vg(),o=wg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Tg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");S("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new ly({Yr:y=>{h?S("Connection","Not sending because WebChannel is closed:",y):(u||(S("Connection","Opening WebChannel transport."),l.open(),u=!0),S("Connection","WebChannel sending:",y),l.send(y))},Zr:()=>l.close()}),p=(y,w,g)=>{y.listen(w,T=>{try{g(T)}catch(I){setTimeout(()=>{throw I},0)}})};return p(l,Hs.EventType.OPEN,()=>{h||S("Connection","WebChannel transport opened.")}),p(l,Hs.EventType.CLOSE,()=>{h||(h=!0,S("Connection","WebChannel transport closed"),d.oo())}),p(l,Hs.EventType.ERROR,y=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",y),d.oo(new C(m.UNAVAILABLE,"The operation could not be completed")))}),p(l,Hs.EventType.MESSAGE,y=>{var w;if(!h){const g=y.data[0];W(!!g);const T=g,I=T.error||((w=T[0])===null||w===void 0?void 0:w.error);if(I){S("Connection","WebChannel received error:",I);const x=I.status;let V=function(ye){const N=ee[ye];if(N!==void 0)return oh(N)}(x),q=I.message;V===void 0&&(V=m.INTERNAL,q="Unknown error status: "+x+" with message "+I.message),h=!0,d.oo(new C(V,q)),l.close()}else S("Connection","WebChannel received:",g),d.uo(g)}}),p(o,Eg.STAT_EVENT,y=>{y.stat===ac.PROXY?S("Connection","Detected buffering proxy"):y.stat===ac.NOPROXY&&S("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function _r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){return new bm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Eh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new C(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hy extends Th{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Cm(this.Tt,e),s=function(i){if(!("targetChange"in i))return R.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?R.min():r.readTime?st(r.readTime):R.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=no(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=Yr(a)?{documents:Sm(i,a)}:{query:Am(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=fh(i,r.resumeToken):r.snapshotVersion.compareTo(R.min())>0&&(o.readTime=vi(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Dm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=no(this.Tt),n.removeTarget=e,this.qo(n)}}class dy extends Th{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Im(e.writeResults,e.commitTime),s=st(e.commitTime);return this.listener.eu(s,n)}return W(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=no(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>_m(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new C(m.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(m.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new C(m.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class py{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(dt(n),this.cu=!1):S("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Yt(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=L(a);c.mu.add(4),await Ds(c),c.pu.set("Unknown"),c.mu.delete(4),await Qi(c)}(this))})}),this.pu=new py(s,i)}}async function Qi(t){if(Yt(t))for(const e of t.gu)await e(!0)}async function Ds(t){for(const e of t.gu)await e(!1)}function Ch(t,e){const n=L(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),ra(n)?ia(n):Pn(n).Mo()&&sa(n,e))}function _h(t,e){const n=L(t),s=Pn(n);n.wu.delete(e),s.Mo()&&Ih(n,e),n.wu.size===0&&(s.Mo()?s.Bo():Yt(n)&&n.pu.set("Unknown"))}function sa(t,e){t.Iu.Ft(e.targetId),Pn(t).Jo(e)}function Ih(t,e){t.Iu.Ft(e),Pn(t).Yo(e)}function ia(t){t.Iu=new mm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Pn(t).start(),t.pu.au()}function ra(t){return Yt(t)&&!Pn(t).Oo()&&t.wu.size>0}function Yt(t){return L(t).mu.size===0}function Sh(t){t.Iu=void 0}async function my(t){t.wu.forEach((e,n)=>{sa(t,e)})}async function yy(t,e){Sh(t),ra(t)?(t.pu.fu(e),ia(t)):t.pu.set("Unknown")}async function vy(t,e,n){if(t.pu.set("Online"),e instanceof dh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wi(t,s)}else if(e instanceof Js?t.Iu.Qt(e):e instanceof hh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(R.min()))try{const s=await bh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Se.EMPTY_BYTE_STRING,c.snapshotVersion)),Ih(i,a);const l=new Ut(c.target,a,1,c.sequenceNumber);sa(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){S("RemoteStore","Failed to raise snapshot:",s),await wi(t,s)}}async function wi(t,e,n){if(!Ss(e))throw e;t.mu.add(1),await Ds(t),t.pu.set("Offline"),n||(n=()=>bh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Qi(t)})}function Ah(t,e){return e().catch(n=>wi(t,n,e))}async function Yi(t){const e=L(t),n=It(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;wy(e);)try{const i=await sy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,by(e,i)}catch(i){await wi(e,i)}kh(e)&&Dh(e)}function wy(t){return Yt(t)&&t._u.length<10}function by(t,e){t._u.push(e);const n=It(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function kh(t){return Yt(t)&&!It(t).Oo()&&t._u.length>0}function Dh(t){It(t).start()}async function Ey(t){It(t).su()}async function Ty(t){const e=It(t);for(const n of t._u)e.tu(n.mutations)}async function Cy(t,e,n){const s=t._u.shift(),i=Zo.from(s,e,n);await Ah(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yi(t)}async function _y(t,e){e&&It(t).Xo&&await async function(n,s){if(i=s.code,hm(i)&&i!==m.ABORTED){const r=n._u.shift();It(n).$o(),await Ah(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Yi(n)}var i}(t,e),kh(t)&&Dh(t)}async function Pc(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const s=Yt(n);n.mu.add(3),await Ds(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Qi(n)}async function Iy(t,e){const n=L(t);e?(n.mu.delete(2),await Qi(n)):e||(n.mu.add(2),await Ds(n),n.pu.set("Unknown"))}function Pn(t){return t.Tu||(t.Tu=function(e,n,s){const i=L(e);return i.ru(),new hy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:my.bind(null,t),no:yy.bind(null,t),Ho:vy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),ra(t)?ia(t):t.pu.set("Unknown")):(await t.Tu.stop(),Sh(t))})),t.Tu}function It(t){return t.Eu||(t.Eu=function(e,n,s){const i=L(e);return i.ru(),new dy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Ey.bind(null,t),no:_y.bind(null,t),nu:Ty.bind(null,t),eu:Cy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Yi(t)):(await t.Eu.stop(),t._u.length>0&&(S("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new oa(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aa(t,e){if(dt("AsyncQueue",`${e}: ${t}`),Ss(t))return new C(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||A.comparator(n.key,s.key):(n,s)=>A.comparator(n.key,s.key),this.keyedMap=Vn(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Oc{constructor(){this.Au=new ae(A.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):P():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class En{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new En(e,n,cn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.bu=void 0,this.listeners=[]}}class Ay{constructor(){this.queries=new Nn(e=>Yu(e),qi),this.onlineState="Unknown",this.vu=new Set}}async function Nh(t,e){const n=L(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Sy),i)try{r.bu=await n.onListen(s)}catch(o){const a=aa(o,`Initialization of query '${Zr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&ca(n)}async function Ph(t,e){const n=L(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ky(t,e){const n=L(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&ca(n)}function Dy(t,e,n){const s=L(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function ca(t){t.vu.forEach(e=>{e.next()})}class Oh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new En(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=En.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.key=e}}class xh{constructor(e){this.key=e}}class Ny{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=F(),this.mutatedKeys=F(),this.ju=Xu(e),this.zu=new cn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Oc,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Hi(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let g=!1;d&&p?d.data.isEqual(p.data)?y!==w&&(s.track({type:3,doc:p}),g=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),g=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),g=!0):d&&!p&&(s.track({type:1,doc:d}),g=!0,(c||l)&&(a=!0)),g&&(p?(o=o.add(p),r=w?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return P()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new En(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Oc,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=F(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new xh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Rh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=F();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return En.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Py{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Oy{constructor(e){this.key=e,this.ic=!1}}class Ry{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Nn(a=>Yu(a),qi),this.uc=new Map,this.cc=new Set,this.ac=new ae(A.comparator),this.hc=new Map,this.lc=new ea,this.fc={},this.dc=new Map,this._c=bn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function xy(t,e){const n=Hy(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await iy(n.localStore,ft(e));n.isPrimaryClient&&Ch(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ly(n,e,s,a==="current",o.resumeToken)}return i}async function Ly(t,e,n,s,i){t.mc=(h,d,p)=>async function(y,w,g,T){let I=w.view.Hu(g);I.Li&&(I=await kc(y.localStore,w.query,!1).then(({documents:q})=>w.view.Hu(q,I)));const x=T&&T.targetChanges.get(w.targetId),V=w.view.applyChanges(I,y.isPrimaryClient,x);return xc(y,w.targetId,V.tc),V.snapshot}(t,h,d,p);const r=await kc(t.localStore,e,!0),o=new Ny(e,r.Yi),a=o.Hu(r.documents),c=ks.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);xc(t,n,l.tc);const u=new Py(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function My(t,e){const n=L(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!qi(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await so(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),_h(n.remoteStore,s.targetId),io(n,s.targetId)}).catch(Is)):(io(n,s.targetId),await so(n.localStore,s.targetId,!0))}async function By(t,e,n){const s=zy(t);try{const i=await function(r,o){const a=L(r),c=re.now(),l=o.reduce((d,p)=>d.add(p.key),F());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=pt(),y=F();return a.ji.getEntries(d,l).next(w=>{p=w,p.forEach((g,T)=>{T.isValidDocument()||(y=y.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{u=w;const g=[];for(const T of o){const I=cm(T,u.get(T.key).overlayedDocument);I!=null&&g.push(new Nt(T.key,I,Wu(I.value.mapValue),Ye.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,g,o)}).next(w=>{h=w;const g=w.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,g)})}).then(()=>({batchId:h.batchId,changes:ch(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new ae(z)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ns(s,i.changes),await Yi(s.remoteStore)}catch(i){const r=aa(i,"Failed to persist write");n.reject(r)}}async function Lh(t,e){const n=L(t);try{const s=await ty(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?W(o.ic):i.removedDocuments.size>0&&(W(o.ic),o.ic=!1))}),await Ns(n,s,e)}catch(s){await Is(s)}}function Rc(t,e,n){const s=L(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=L(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&ca(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Fy(t,e,n){const s=L(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new ae(A.comparator);o=o.insert(r,Ee.newNoDocument(r,R.min()));const a=F().add(r),c=new Gi(R.min(),new Map,new oe(z),o,a);await Lh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),la(s)}else await so(s.localStore,e,!1).then(()=>io(s,e,n)).catch(Is)}async function Vy(t,e){const n=L(t),s=e.batch.batchId;try{const i=await ey(n.localStore,e);Bh(n,s,null),Mh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ns(n,i)}catch(i){await Is(i)}}async function Uy(t,e,n){const s=L(t);try{const i=await function(r,o){const a=L(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(W(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Bh(s,e,n),Mh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ns(s,i)}catch(i){await Is(i)}}function Mh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Bh(t,e,n){const s=L(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Fh(t,s)})}function Fh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(_h(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),la(t))}function xc(t,e,n){for(const s of n)s instanceof Rh?(t.lc.addReference(s.key,e),$y(t,s)):s instanceof xh?(S("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Fh(t,s.key)):P()}function $y(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(S("SyncEngine","New document in limbo: "+n),t.cc.add(s),la(t))}function la(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new A(Q.fromString(e)),s=t._c.next();t.hc.set(s,new Oy(n)),t.ac=t.ac.insert(n,s),Ch(t.remoteStore,new Ut(ft(Qo(n.path)),s,2,zo.at))}}async function Ns(t,e,n){const s=L(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=na.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ss(u))throw u;S("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,y)}}}(s.localStore,r))}async function jy(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const s=await wh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new C(m.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ns(n,s.Wi)}}function qy(t,e){const n=L(t),s=n.hc.get(e);if(s&&s.ic)return F().add(s.key);{let i=F();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function Hy(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fy.bind(null,e),e.rc.Ho=ky.bind(null,e.eventManager),e.rc.gc=Dy.bind(null,e.eventManager),e}function zy(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uy.bind(null,e),e}class Ky{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Wi(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Zm(this.persistence,new Xm,e.initialUser,this.Tt)}Tc(e){return new Qm(ta.qs,this.Tt)}Ic(e){return new oy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jy.bind(null,this.syncEngine),await Iy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ay}createDatastore(e){const n=Wi(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new uy(i));var i;return function(r,o,a,c){return new fy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Rc(this.syncEngine,a,0),o=Nc.C()?new Nc:new ay,new gy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new Ry(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);S("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ds(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):dt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=Fu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{S("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(S("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=aa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Qy(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await wh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Yy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xy(t);S("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Pc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Pc(e.remoteStore,r)),t.onlineComponents=e}async function Xy(t){return t.offlineComponents||(S("FirestoreClient","Using default OfflineComponentProvider"),await Qy(t,new Ky)),t.offlineComponents}async function Uh(t){return t.onlineComponents||(S("FirestoreClient","Using default OnlineComponentProvider"),await Yy(t,new Gy)),t.onlineComponents}function Jy(t){return Uh(t).then(e=>e.syncEngine)}async function ro(t){const e=await Uh(t),n=e.eventManager;return n.onListen=xy.bind(null,e.syncEngine),n.onUnlisten=My.bind(null,e.syncEngine),n}function Zy(t,e,n={}){const s=new Et;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Vh({next:h=>{r.enqueueAndForget(()=>Ph(i,u)),h.fromCache&&a.source==="server"?c.reject(new C(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Oh(o,l,{includeMetadataChanges:!0,Ou:!0});return Nh(i,u)}(await ro(t),t.asyncQueue,e,n,s)),s.promise}const Lc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e,n){if(!n)throw new C(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ev(t,e,n,s){if(e===!0&&s===!0)throw new C(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mc(t){if(!A.isDocumentKey(t))throw new C(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bc(t){if(A.isDocumentKey(t))throw new C(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":P()}function it(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xi(t);throw new C(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ev("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _g;switch(n.type){case"gapi":const s=n.client;return new kg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Lc.get(e);n&&(S("ComponentProvider","Removing Datastore"),Lc.delete(e),n.terminate())}(this),Promise.resolve()}}function tv(t,e,n,s={}){var i;const r=(t=it(t,Ji))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Kr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=be.MOCK_USER;else{o=_l(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new C(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new be(c)}t._authCredentials=new Ig(new Bu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class Pt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pt(this.firestore,e,this._query)}}class Tt extends Pt{constructor(e,n,s){super(e,n,Qo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new A(e))}withConverter(e){return new Tt(this.firestore,e,this._path)}}function mt(t,e,...n){if(t=Xe(t),$h("collection","path",e),t instanceof Ji){const s=Q.fromString(e,...n);return Bc(s),new Tt(t,null,s)}{if(!(t instanceof xe||t instanceof Tt))throw new C(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Q.fromString(e,...n));return Bc(s),new Tt(t.firestore,null,s)}}function Tn(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=Fu.R()),$h("doc","path",e),t instanceof Ji){const s=Q.fromString(e,...n);return Mc(s),new xe(t,null,new A(s))}{if(!(t instanceof xe||t instanceof Tt))throw new C(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Q.fromString(e,...n));return Mc(s),new xe(t.firestore,t instanceof Tt?t.converter:null,new A(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Eh(this,"async_queue_retry"),this.Hc=()=>{const n=_r();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=_r();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=_r();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Et;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ss(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=oa.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&P()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Vc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ht extends Ji{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new nv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jh(this),this._firestoreClient.terminate()}}function sv(t,e){const n=typeof t=="object"?t:Ol(),s=typeof t=="string"?t:e||"(default)",i=Dl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Cl("firestore");r&&tv(i,...r)}return i}function ua(t){return t._firestoreClient||jh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jh(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Fg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Wy(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Se.fromBase64String(e))}catch(n){throw new C(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cn(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/^__.*__$/;class rv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Nt(e,this.data,this.fieldMask,n,this.fieldTransforms):new As(e,this.data,n,this.fieldTransforms)}}class qh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Nt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Hh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw P()}}class fa{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new fa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return bi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Hh(this.ra)&&iv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class ov{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Wi(e)}wa(e,n,s,i=!1){return new fa({ra:e,methodName:n,_a:s,path:Te.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function pa(t){const e=t._freezeSettings(),n=Wi(t._databaseId);return new ov(t._databaseId,!!e.ignoreUndefinedProperties,n)}function av(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);ga("Data must be an object, but it was:",o,s);const a=zh(s,o);let c,l;if(r.merge)c=new Be(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=oo(e,h,n);if(!o.contains(d))throw new C(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Gh(u,d)||u.push(d)}c=new Be(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new rv(new Re(a),c,l)}class er extends ha{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof er}}function cv(t,e,n,s){const i=t.wa(1,e,n);ga("Data must be an object, but it was:",i,s);const r=[],o=Re.empty();Qt(s,(c,l)=>{const u=ma(e,c,n);l=Xe(l);const h=i.ha(u);if(l instanceof er)r.push(u);else{const d=Ps(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Be(r);return new qh(o,a,i.fieldTransforms)}function lv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[oo(e,s,n)],c=[i];if(r.length%2!=0)throw new C(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(oo(e,r[d])),c.push(r[d+1]);const l=[],u=Re.empty();for(let d=a.length-1;d>=0;--d)if(!Gh(l,a[d])){const p=a[d];let y=c[d];y=Xe(y);const w=o.ha(p);if(y instanceof er)l.push(p);else{const g=Ps(y,w);g!=null&&(l.push(p),u.set(p,g))}}const h=new Be(l);return new qh(u,h,o.fieldTransforms)}function uv(t,e,n,s=!1){return Ps(n,t.wa(s?4:3,e))}function Ps(t,e){if(Kh(t=Xe(t)))return ga("Unsupported field value:",e,t),zh(t,e);if(t instanceof ha)return function(n,s){if(!Hh(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ps(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=re.fromDate(n);return{timestampValue:vi(s.Tt,i)}}if(n instanceof re){const i=new re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vi(s.Tt,i)}}if(n instanceof da)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cn)return{bytesValue:fh(s.Tt,n._byteString)};if(n instanceof xe){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jo(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Xi(n)}`)}(t,e)}function zh(t,e){const n={};return Vu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qt(t,(s,i)=>{const r=Ps(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Kh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof re||t instanceof da||t instanceof Cn||t instanceof xe||t instanceof ha)}function ga(t,e,n){if(!Kh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Xi(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function oo(t,e,n){if((e=Xe(e))instanceof Zi)return e._internalPath;if(typeof e=="string")return ma(t,e);throw bi("Field path arguments must be of type string or ",t,!1,void 0,n)}const hv=new RegExp("[~\\*/\\[\\]]");function ma(t,e,n){if(e.search(hv)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zi(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new C(m.INVALID_ARGUMENT,a+t+c)}function Gh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dv extends Wh{data(){return super.data()}}function tr(t,e){return typeof e=="string"?ma(t,e):e instanceof Zi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ya{}class Yh extends ya{}function ao(t,e,...n){let s=[];e instanceof ya&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof va).length,o=i.filter(a=>a instanceof nr).length;if(r>1||r>0&&o>0)throw new C(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class nr extends Yh{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new nr(e,n,s)}_apply(e){const n=this._parse(e);return Xh(e._query,n),new Pt(e.firestore,e.converter,Xr(e._query,n))}_parse(e){const n=pa(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new C(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){jc(u,l);const d=[];for(const p of u)d.push($c(a,i,p));h={arrayValue:{values:d}}}else h=$c(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||jc(u,l),h=uv(o,r,u,l==="in"||l==="not-in");return ne.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fv(t,e,n){const s=e,i=tr("where",t);return nr._create(i,s,n)}class va extends ya{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new va(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Je.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Xh(r,a),r=Xr(r,a)}(e._query,n),new Pt(e.firestore,e.converter,Xr(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wa extends Yh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wa(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new C(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new on(i,r);return function(a,c){if(Yo(a)===null){const l=ji(a);l!==null&&Jh(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Pt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Dn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Uc(t,e="asc"){const n=e,s=tr("orderBy",t);return wa._create(s,n)}function $c(t,e,n){if(typeof(n=Xe(n))=="string"){if(n==="")throw new C(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qu(e)&&n.indexOf("/")!==-1)throw new C(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Q.fromString(n));if(!A.isDocumentKey(s))throw new C(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return dc(t,new A(s))}if(n instanceof xe)return dc(t,n._key);throw new C(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xi(n)}.`)}function jc(t,e){if(!Array.isArray(t)||t.length===0)throw new C(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xh(t,e){if(e.isInequality()){const s=ji(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new C(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Yo(t);r!==null&&Jh(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Jh(t,e,n){if(!n.isEqual(e))throw new C(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class pv{convertValue(e,n="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw P()}}convertObject(e,n){const s={};return Qt(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new da(te(e.latitude),te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=$u(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(as(e));default:return null}}convertTimestamp(e){const n=_t(e);return new re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Q.fromString(e);W(vh(s));const i=new os(s.get(1),s.get(3)),r=new A(s.popFirst(5));return i.isEqual(n)||dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zh extends Wh{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(tr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Zs extends Zh{data(e={}){return super.data(e)}}class ed{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Un(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Zs(this._firestore,this._userDataWriter,s.key,s,new Un(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Zs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Un(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Zs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Un(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:mv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return P()}}class ba extends pv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function qc(t){t=it(t,Pt);const e=it(t.firestore,Ht),n=ua(e),s=new ba(e);return Qh(t._query),Zy(n,t._query).then(i=>new ed(e,s,t,i))}function Ea(t,e,n,...s){t=it(t,xe);const i=it(t.firestore,Ht),r=pa(i);let o;return o=typeof(e=Xe(e))=="string"||e instanceof Zi?lv(r,"updateDoc",t._key,e,n,s):cv(r,"updateDoc",t._key,e),Ta(i,[o.toMutation(t._key,Ye.exists(!0))])}function co(t){return Ta(it(t.firestore,Ht),[new Xo(t._key,Ye.none())])}function td(t,e){const n=it(t.firestore,Ht),s=Tn(t),i=gv(t.converter,e);return Ta(n,[av(pa(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Ye.exists(!1))]).then(()=>s)}function Ei(t,...e){var n,s,i;t=Xe(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Vc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof xe)l=it(t.firestore,Ht),u=Qo(t._key.path),c={next:h=>{e[o]&&e[o](yv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=it(t,Pt);l=it(h.firestore,Ht),u=h._query;const d=new ba(l);c={next:p=>{e[o]&&e[o](new ed(l,d,h,p))},error:e[o+1],complete:e[o+2]},Qh(t._query)}return function(h,d,p,y){const w=new Vh(y),g=new Oh(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>Nh(await ro(h),g)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>Ph(await ro(h),g))}}(ua(l),u,a,c)}function Ta(t,e){return function(n,s){const i=new Et;return n.asyncQueue.enqueueAndForget(async()=>By(await Jy(n),s,i)),i.promise}(ua(t),e)}function yv(t,e,n){const s=n.docs.get(e._key),i=new ba(t);return new Zh(t,i,e._key,s,new Un(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){kn=n})(Nl),Jn(new pn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ht(new Sg(n.getProvider("auth-internal")),new Ng(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new os(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),bt(cc,"3.8.4",t),bt(cc,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="firebasestorage.googleapis.com",vv="storageBucket",wv=2*60*1e3,bv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Gt{constructor(e,n,s=0){super(Ir(e),`Firebase Storage: ${n} (${Ir(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ir(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function Ir(t){return"storage/"+t}function Ev(){const t="An unknown error occurred, please check the error payload for server response.";return new ct(ot.UNKNOWN,t)}function Tv(){return new ct(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Cv(){return new ct(ot.CANCELED,"User canceled the upload/download.")}function _v(t){return new ct(ot.INVALID_URL,"Invalid URL '"+t+"'.")}function Iv(t){return new ct(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hc(t){return new ct(ot.INVALID_ARGUMENT,t)}function sd(){return new ct(ot.APP_DELETED,"The Firebase app was deleted.")}function Sv(t){return new ct(ot.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Qe.makeFromUrl(e,n)}catch{return new Qe(e,"")}if(s.path==="")return s;throw Iv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(V){V.path_=decodeURIComponent(V.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},w=n===nd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",T=new RegExp(`^https?://${w}/${i}/${g}`,"i"),x=[{regex:a,indices:c,postModify:r},{regex:p,indices:y,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let V=0;V<x.length;V++){const q=x[V],ye=q.regex.exec(e);if(ye){const N=ye[q.indices.bucket];let Y=ye[q.indices.path];Y||(Y=""),s=new Qe(N,Y),q.postModify(s);break}}if(s==null)throw _v(e);return s}}class Av{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...g){l||(l=!0,e.apply(null,g))}function h(g){i=setTimeout(()=>{i=null,t(p,c())},g)}function d(){r&&clearTimeout(r)}function p(g,...T){if(l){d();return}if(g){d(),u.call(null,g,...T);return}if(c()||o){d(),u.call(null,g,...T);return}s<64&&(s*=2);let x;a===1?(a=2,x=0):x=(s+Math.random())*1e3,h(x)}let y=!1;function w(g){y||(y=!0,d(),!l&&(i!==null?(g||(a=2),clearTimeout(i),h(0)):g||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,w(!0)},n),w}function Dv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){return t!==void 0}function zc(t,e,n,s){if(s<e)throw Hc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Hc(`Invalid value for '${t}'. Expected ${n} or less.`)}function Pv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ti||(Ti={}));/**
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
 */function Ov(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Gs(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ti.NO_ERROR,c=r.getStatus();if(!a||Ov(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ti.ABORT;s(!1,new Gs(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Gs(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Nv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Ev();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?sd():Cv();o(c)}else{const c=Tv();o(c)}};this.canceled_?n(!1,new Gs(!1,null,!0)):this.backoffId_=kv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Dv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gs{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function xv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Lv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Mv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Bv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Fv(t,e,n,s,i,r,o=!0){const a=Pv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Mv(l,e),xv(l,n),Lv(l,r),Bv(l,s),new Rv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Uv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ci{constructor(e,n){this._service=e,n instanceof Qe?this._location=n:this._location=Qe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ci(e,n)}get root(){const e=new Qe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Uv(this._location.path)}get storage(){return this._service}get parent(){const e=Vv(this._location.path);if(e===null)return null;const n=new Qe(this._location.bucket,e);return new Ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Sv(e)}}function Kc(t,e){const n=e==null?void 0:e[vv];return n==null?null:Qe.makeFromBucketSpec(n,t)}function $v(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:_l(i,t.app.options.projectId))}class jv{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=nd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wv,this._maxUploadRetryTime=bv,this._requests=new Set,i!=null?this._bucket=Qe.makeFromBucketSpec(i,this._host):this._bucket=Kc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qe.makeFromBucketSpec(this._url,e):this._bucket=Kc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ci(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Av(sd());{const o=Fv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Gc="@firebase/storage",Wc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="storage";function qv(t=Ol(),e){t=Xe(t);const s=Dl(t,id).getImmediate({identifier:e}),i=Cl("storage");return i&&Hv(s,...i),s}function Hv(t,e,n,s={}){$v(t,e,n,s)}function zv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new jv(n,s,i,e,Nl)}function Kv(){Jn(new pn(id,zv,"PUBLIC").setMultipleInstances(!0)),bt(Gc,Wc,""),bt(Gc,Wc,"esm2017")}Kv();const Gv={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},rd=Pl(Gv);qv(rd);const Me=sv(rd);var Wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lo={},Qv={get exports(){return lo},set exports(t){lo=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(Wv,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(g){g.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(g){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(g){g.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(g){g.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),y=this.options.position=="left"?d:"-"+d,w=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+y+","+w+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,y=window.innerWidth>0?window.innerWidth:screen.width;y<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Qv);const ln=lo,od="SweetAlert2:",Yv=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Ca=t=>t.charAt(0).toUpperCase()+t.slice(1),$e=t=>Array.prototype.slice.call(t),Le=t=>{console.warn(`${od} ${typeof t=="object"?t.join(" "):t}`)},Xt=t=>{console.error(`${od} ${t}`)},Qc=[],Xv=t=>{Qc.includes(t)||(Qc.push(t),Le(t))},Jv=(t,e)=>{Xv(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},sr=t=>typeof t=="function"?t():t,_a=t=>t&&typeof t.toPromise=="function",Os=t=>_a(t)?t.toPromise():Promise.resolve(t),Ia=t=>t&&Promise.resolve(t)===t,un={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Zv=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ew={},tw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ad=t=>Object.prototype.hasOwnProperty.call(un,t),cd=t=>Zv.indexOf(t)!==-1,uo=t=>ew[t],nw=t=>{ad(t)||Le(`Unknown parameter "${t}"`)},sw=t=>{tw.includes(t)&&Le(`The parameter "${t}" is incompatible with toasts`)},iw=t=>{uo(t)&&Jv(t,uo(t))},rw=t=>{!t.backdrop&&t.allowOutsideClick&&Le('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)nw(e),t.toast&&sw(e),iw(e)},ow="swal2-",ld=t=>{const e={};for(const n in t)e[t[n]]=ow+t[n];return e},f=ld(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Kn=ld(["success","warning","info","question","error"]),Ae=()=>document.body.querySelector(`.${f.container}`),Rs=t=>{const e=Ae();return e?e.querySelector(t):null},Ke=t=>Rs(`.${t}`),K=()=>Ke(f.popup),xs=()=>Ke(f.icon),ud=()=>Ke(f.title),_i=()=>Ke(f["html-container"]),hd=()=>Ke(f.image),dd=()=>Ke(f["progress-steps"]),ir=()=>Ke(f["validation-message"]),Ze=()=>Rs(`.${f.actions} .${f.confirm}`),St=()=>Rs(`.${f.actions} .${f.deny}`),aw=()=>Ke(f["input-label"]),On=()=>Rs(`.${f.loader}`),zt=()=>Rs(`.${f.actions} .${f.cancel}`),Ls=()=>Ke(f.actions),fd=()=>Ke(f.footer),rr=()=>Ke(f["timer-progress-bar"]),Sa=()=>Ke(f.close),cw=`
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
`,Aa=()=>{const t=$e(K().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=$e(K().querySelectorAll(cw)).filter(n=>n.getAttribute("tabindex")!=="-1");return Yv(t.concat(e)).filter(n=>Ve(n))},ka=()=>ut(document.body,f.shown)&&!ut(document.body,f["toast-shown"])&&!ut(document.body,f["no-backdrop"]),or=()=>K()&&ut(K(),f.toast),lw=()=>K().hasAttribute("data-loading"),hn={previousBodyPadding:null},Ce=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");$e(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),$e(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},ut=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},uw=(t,e)=>{$e(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(Kn).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},He=(t,e,n)=>{if(uw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Le(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);j(t,e.customClass[n])}},Da=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},pd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},gd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},j=(t,e)=>{gd(t,e,!0)},at=(t,e)=>{gd(t,e,!1)},yt=(t,e)=>{const n=$e(t.childNodes);for(let s=0;s<n.length;s++)if(ut(n[s],e))return n[s]},Gn=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},ge=(t,e="flex")=>{t.style.display=e},ke=t=>{t.style.display="none"},Yc=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},ar=(t,e,n)=>{e?ge(t,n):ke(t)},Ve=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),hw=()=>!Ve(Ze())&&!Ve(St())&&!Ve(zt()),Xc=t=>t.scrollHeight>t.clientHeight,md=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Na=(t,e=!1)=>{const n=rr();Ve(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},dw=()=>{const t=rr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},yd=()=>typeof window>"u"||typeof document>"u",fw=100,M={},pw=()=>{M.previousActiveElement&&M.previousActiveElement.focus?(M.previousActiveElement.focus(),M.previousActiveElement=null):document.body&&document.body.focus()},gw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;M.restoreFocusTimeout=setTimeout(()=>{pw(),e()},fw),window.scrollTo(n,s)}),mw=`
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
`.replace(/(^|\n)\s*/g,""),yw=()=>{const t=Ae();return t?(t.remove(),at([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Rt=()=>{M.currentInstance.resetValidationMessage()},vw=()=>{const t=K(),e=yt(t,f.input),n=yt(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=yt(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=yt(t,f.textarea);e.oninput=Rt,n.onchange=Rt,r.onchange=Rt,o.onchange=Rt,a.oninput=Rt,s.oninput=()=>{Rt(),i.value=s.value},s.onchange=()=>{Rt(),s.nextSibling.value=s.value}},ww=t=>typeof t=="string"?document.querySelector(t):t,bw=t=>{const e=K();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Ew=t=>{window.getComputedStyle(t).direction==="rtl"&&j(Ae(),f.rtl)},Tw=t=>{const e=yw();if(yd()){Xt("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&j(n,f["no-transition"]),Ce(n,mw);const s=ww(t.target);s.appendChild(n),bw(t),Ew(s),vw()},Pa=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Cw(t,e):t&&Ce(e,t)},Cw=(t,e)=>{t.jquery?_w(e,t):Ce(e,t.toString())},_w=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},hs=(()=>{if(yd())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Iw=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Sw=(t,e)=>{const n=Ls(),s=On();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?ke(n):ge(n),He(n,e,"actions"),Aw(n,s,e),Ce(s,e.loaderHtml),He(s,e,"loader")};function Aw(t,e,n){const s=Ze(),i=St(),r=zt();Sr(s,"confirm",n),Sr(i,"deny",n),Sr(r,"cancel",n),kw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function kw(t,e,n,s){if(!s.buttonsStyling)return at([t,e,n],f.styled);j([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,j(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,j(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,j(n,f["default-outline"]))}function Sr(t,e,n){ar(t,n[`show${Ca(e)}Button`],"inline-block"),Ce(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],He(t,n,`${e}Button`),j(t,n[`${e}ButtonClass`])}function Dw(t,e){typeof e=="string"?t.style.background=e:e||j([document.documentElement,document.body],f["no-backdrop"])}function Nw(t,e){e in f?j(t,f[e]):(Le('The "position" parameter is not valid, defaulting to "center"'),j(t,f.center))}function Pw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&j(t,f[n])}}const Ow=(t,e)=>{const n=Ae();n&&(Dw(n,e.backdrop),Nw(n,e.position),Pw(n,e.grow),He(n,e,"container"))},B={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Rw=["input","file","range","select","radio","checkbox","textarea"],xw=(t,e)=>{const n=K(),s=B.innerParams.get(t),i=!s||e.input!==s.input;Rw.forEach(r=>{const o=f[r],a=yt(n,o);Bw(r,e.inputAttributes),a.className=o,i&&ke(a)}),e.input&&(i&&Lw(e),Fw(e))},Lw=t=>{if(!Oe[t.input])return Xt(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=vd(t.input),n=Oe[t.input](e,t);ge(n),setTimeout(()=>{pd(n)})},Mw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Bw=(t,e)=>{const n=Da(K(),t);if(n){Mw(n);for(const s in e)n.setAttribute(s,e[s])}},Fw=t=>{const e=vd(t.input);t.customClass&&j(e,t.customClass.input)},Oa=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Ms=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,j(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},vd=t=>{const e=f[t]?f[t]:f.input;return yt(K(),e)},Oe={};Oe.text=Oe.email=Oe.password=Oe.number=Oe.tel=Oe.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Ia(e.inputValue)||Le(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Ms(t,t,e),Oa(t,e),t.type=e.input,t);Oe.file=(t,e)=>(Ms(t,t,e),Oa(t,e),t);Oe.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Ms(n,t,e),t};Oe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Ce(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Ms(t,t,e),t};Oe.radio=t=>(t.textContent="",t);Oe.checkbox=(t,e)=>{const n=Da(K(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Ce(s,e.inputPlaceholder),t};Oe.textarea=(t,e)=>{t.value=e.inputValue,Oa(t,e),Ms(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(K()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?K().style.width=`${r}px`:K().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Vw=(t,e)=>{const n=_i();He(n,e,"htmlContainer"),e.html?(Pa(e.html,n),ge(n,"block")):e.text?(n.textContent=e.text,ge(n,"block")):ke(n),xw(t,e)},Uw=(t,e)=>{const n=fd();ar(n,e.footer),e.footer&&Pa(e.footer,n),He(n,e,"footer")},$w=(t,e)=>{const n=Sa();Ce(n,e.closeButtonHtml),He(n,e,"closeButton"),ar(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},jw=(t,e)=>{const n=B.innerParams.get(t),s=xs();if(n&&e.icon===n.icon){Zc(s,e),Jc(s,e);return}if(!e.icon&&!e.iconHtml)return ke(s);if(e.icon&&Object.keys(Kn).indexOf(e.icon)===-1)return Xt(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),ke(s);ge(s),Zc(s,e),Jc(s,e),j(s,e.showClass.icon)},Jc=(t,e)=>{for(const n in Kn)e.icon!==n&&at(t,Kn[n]);j(t,Kn[e.icon]),Kw(t,e),qw(),He(t,e,"icon")},qw=()=>{const t=K(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},Hw=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,zw=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Zc=(t,e)=>{t.textContent="",e.iconHtml?Ce(t,el(e.iconHtml)):e.icon==="success"?Ce(t,Hw):e.icon==="error"?Ce(t,zw):Ce(t,el({question:"?",warning:"!",info:"i"}[e.icon]))},Kw=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Yc(t,n,"backgroundColor",e.iconColor);Yc(t,".swal2-success-ring","borderColor",e.iconColor)}},el=t=>`<div class="${f["icon-content"]}">${t}</div>`,Gw=(t,e)=>{const n=hd();if(!e.imageUrl)return ke(n);ge(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),Gn(n,"width",e.imageWidth),Gn(n,"height",e.imageHeight),n.className=f.image,He(n,e,"image")},Ww=t=>{const e=document.createElement("li");return j(e,f["progress-step"]),Ce(e,t),e},Qw=t=>{const e=document.createElement("li");return j(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},Yw=(t,e)=>{const n=dd();if(!e.progressSteps||e.progressSteps.length===0)return ke(n);ge(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Le("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=Ww(s);if(n.appendChild(r),i===e.currentProgressStep&&j(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=Qw(e);n.appendChild(o)}})},Xw=(t,e)=>{const n=ud();ar(n,e.title||e.titleText,"block"),e.title&&Pa(e.title,n),e.titleText&&(n.innerText=e.titleText),He(n,e,"title")},Jw=(t,e)=>{const n=Ae(),s=K();e.toast?(Gn(n,"width",e.width),s.style.width="100%",s.insertBefore(On(),xs())):Gn(s,"width",e.width),Gn(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),ke(ir()),Zw(s,e)},Zw=(t,e)=>{t.className=`${f.popup} ${Ve(t)?e.showClass.popup:""}`,e.toast?(j([document.documentElement,document.body],f["toast-shown"]),j(t,f.toast)):j(t,f.modal),He(t,e,"popup"),typeof e.customClass=="string"&&j(t,e.customClass),e.icon&&j(t,f[`icon-${e.icon}`])},wd=(t,e)=>{Jw(t,e),Ow(t,e),Yw(t,e),jw(t,e),Gw(t,e),Xw(t,e),$w(t,e),Vw(t,e),Sw(t,e),Uw(t,e),typeof e.didRender=="function"&&e.didRender(K())},Rn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),eb=()=>{$e(document.body.children).forEach(e=>{e===Ae()||e.contains(Ae())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},bd=()=>{$e(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Ed=["swal-title","swal-html","swal-footer"],tb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return cb(n),Object.assign(nb(n),sb(n),ib(n),rb(n),ob(n),ab(n,Ed))},nb=t=>{const e={};return $e(t.querySelectorAll("swal-param")).forEach(n=>{Kt(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof un[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof un[s]=="object"&&(e[s]=JSON.parse(i))}),e},sb=t=>{const e={};return $e(t.querySelectorAll("swal-button")).forEach(n=>{Kt(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Ca(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},ib=t=>{const e={},n=t.querySelector("swal-image");return n&&(Kt(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},rb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Kt(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},ob=t=>{const e={},n=t.querySelector("swal-input");n&&(Kt(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},$e(s).forEach(i=>{Kt(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},ab=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(Kt(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},cb=t=>{const e=Ed.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);$e(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Le(`Unrecognized element <${s}>`)})},Kt=(t,e)=>{$e(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Le([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},tl={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function lb(t){t.inputValidator||Object.keys(tl).forEach(e=>{t.input===e&&(t.inputValidator=tl[e])})}function ub(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Le('Target parameter is not valid, defaulting to "body"'),t.target="body")}function hb(t){lb(t),t.showLoaderOnConfirm&&!t.preConfirm&&Le(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),ub(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Tw(t)}class db{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const fb=()=>{hn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(hn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${hn.previousBodyPadding+Iw()}px`)},pb=()=>{hn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${hn.previousBodyPadding}px`,hn.previousBodyPadding=null)},gb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!ut(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,j(document.body,f.iosfix),yb(),mb()}},mb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&K().scrollHeight>window.innerHeight-44&&(Ae().style.paddingBottom=`${44}px`)},yb=()=>{const t=Ae();let e;t.ontouchstart=n=>{e=vb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},vb=t=>{const e=t.target,n=Ae();return wb(t)||bb(t)?!1:e===n||!Xc(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Xc(_i())&&_i().contains(e))},wb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",bb=t=>t.touches&&t.touches.length>1,Eb=()=>{if(ut(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);at(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Td=10,Tb=t=>{const e=Ae(),n=K();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Ib(e,n,t),setTimeout(()=>{Cb(e,n)},Td),ka()&&(_b(e,t.scrollbarPadding,i),eb()),!or()&&!M.previousActiveElement&&(M.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),at(e,f["no-transition"])},Cd=t=>{const e=K();if(t.target!==e)return;const n=Ae();e.removeEventListener(hs,Cd),n.style.overflowY="auto"},Cb=(t,e)=>{hs&&md(e)?(t.style.overflowY="hidden",e.addEventListener(hs,Cd)):t.style.overflowY="auto"},_b=(t,e,n)=>{gb(),e&&n!=="hidden"&&fb(),setTimeout(()=>{t.scrollTop=0})},Ib=(t,e,n)=>{j(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),ge(e,"grid"),setTimeout(()=>{j(e,n.showClass.popup),e.style.removeProperty("opacity")},Td),j([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&j([document.documentElement,document.body],f["height-auto"])},_n=t=>{let e=K();e||new fs,e=K();const n=On();or()?ke(xs()):Sb(e,t),ge(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Sb=(t,e)=>{const n=Ls(),s=On();!e&&Ve(Ze())&&(e=Ze()),ge(n),e&&(ke(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),j([t,n],f.loading)},Ab=(t,e)=>{e.input==="select"||e.input==="radio"?Ob(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(_a(e.inputValue)||Ia(e.inputValue))&&(_n(Ze()),Rb(t,e))},kb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Db(n);case"radio":return Nb(n);case"file":return Pb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Db=t=>t.checked?1:0,Nb=t=>t.checked?t.value:null,Pb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Ob=(t,e)=>{const n=K(),s=i=>xb[e.input](n,ho(i),e);_a(e.inputOptions)||Ia(e.inputOptions)?(_n(Ze()),Os(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):Xt(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Rb=(t,e)=>{const n=t.getInput();ke(n),Os(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,ge(n),n.focus(),t.hideLoading()}).catch(s=>{Xt(`Error in inputValue promise: ${s}`),n.value="",ge(n),n.focus(),t.hideLoading()})},xb={select:(t,e,n)=>{const s=yt(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Ce(c,o),c.selected=nl(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=yt(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,nl(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Ce(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},ho=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=ho(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=ho(s)),e.push([n,s])}),e},nl=(t,e)=>e&&e.toString()===t.toString();function sl(){const t=B.innerParams.get(this);if(!t)return;const e=B.domCache.get(this);ke(e.loader),or()?t.icon&&ge(xs()):Lb(e),at([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Lb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ge(e[0],"inline-block"):hw()&&ke(t.actions)};function Mb(t){const e=B.innerParams.get(t||this),n=B.domCache.get(t||this);return n?Da(n.popup,e.input):null}const ds={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Bb=()=>Ve(K()),_d=()=>Ze()&&Ze().click(),Fb=()=>St()&&St().click(),Vb=()=>zt()&&zt().click(),Id=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Ub=(t,e,n,s)=>{Id(e),n.toast||(e.keydownHandler=i=>jb(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:K(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},fo=(t,e,n)=>{const s=Aa();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();K().focus()},Sd=["ArrowRight","ArrowDown"],$b=["ArrowLeft","ArrowUp"],jb=(t,e,n)=>{const s=B.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?qb(t,e,s):e.key==="Tab"?Hb(e,s):[...Sd,...$b].includes(e.key)?zb(e.key):e.key==="Escape"&&Kb(e,s,n)))},qb=(t,e,n)=>{if(sr(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;_d(),e.preventDefault()}},Hb=(t,e)=>{const n=t.target,s=Aa();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?fo(e,i,-1):fo(e,i,1),t.stopPropagation(),t.preventDefault()},zb=t=>{const e=Ze(),n=St(),s=zt();if(![e,n,s].includes(document.activeElement))return;const i=Sd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Ls().children.length;o++){if(r=r[i],!r)return;if(Ve(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},Kb=(t,e,n)=>{sr(e.allowEscapeKey)&&(t.preventDefault(),n(Rn.esc))};function Ad(t,e,n,s){or()?il(t,s):(gw(n).then(()=>il(t,s)),Id(M)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),ka()&&(pb(),Eb(),bd()),Gb()}function Gb(){at([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function Ws(t){t=Xb(t);const e=ds.swalPromiseResolve.get(this),n=Qb(this);this.isAwaitingPromise()?t.isDismissed||(Bs(this),e(t)):n&&e(t)}function Wb(){return!!B.awaitingPromise.get(this)}const Qb=t=>{const e=K();if(!e)return!1;const n=B.innerParams.get(t);if(!n||ut(e,n.hideClass.popup))return!1;at(e,n.showClass.popup),j(e,n.hideClass.popup);const s=Ae();return at(s,n.showClass.backdrop),j(s,n.hideClass.backdrop),Jb(t,e,n),!0};function Yb(t){const e=ds.swalPromiseReject.get(this);Bs(this),e&&e(t)}const Bs=t=>{t.isAwaitingPromise()&&(B.awaitingPromise.delete(t),B.innerParams.get(t)||t._destroy())},Xb=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Jb=(t,e,n)=>{const s=Ae(),i=hs&&md(e);typeof n.willClose=="function"&&n.willClose(e),i?Zb(t,e,s,n.returnFocus,n.didClose):Ad(t,s,n.returnFocus,n.didClose)},Zb=(t,e,n,s,i)=>{M.swalCloseEventFinishedCallback=Ad.bind(null,t,n,s,i),e.addEventListener(hs,function(r){r.target===e&&(M.swalCloseEventFinishedCallback(),delete M.swalCloseEventFinishedCallback)})},il=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function kd(t,e,n){const s=B.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Dd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function eE(){kd(this,["confirmButton","denyButton","cancelButton"],!1)}function tE(){kd(this,["confirmButton","denyButton","cancelButton"],!0)}function nE(){return Dd(this.getInput(),!1)}function sE(){return Dd(this.getInput(),!0)}function iE(t){const e=B.domCache.get(this),n=B.innerParams.get(this);Ce(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&j(e.validationMessage,n.customClass.validationMessage),ge(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),pd(s),j(s,f.inputerror))}function rE(){const t=B.domCache.get(this);t.validationMessage&&ke(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),at(e,f.inputerror))}function oE(){return B.domCache.get(this).progressSteps}function aE(t){const e=K(),n=B.innerParams.get(this);if(!e||ut(e,n.hideClass.popup))return Le("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=cE(t),i=Object.assign({},n,s);wd(this,i),B.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const cE=t=>{const e={};return Object.keys(t).forEach(n=>{cd(n)?e[n]=t[n]:Le(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function lE(){const t=B.domCache.get(this),e=B.innerParams.get(this);if(!e){Nd(this);return}t.popup&&M.swalCloseEventFinishedCallback&&(M.swalCloseEventFinishedCallback(),delete M.swalCloseEventFinishedCallback),M.deferDisposalTimer&&(clearTimeout(M.deferDisposalTimer),delete M.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),uE(this)}const uE=t=>{Nd(t),delete t.params,delete M.keydownHandler,delete M.keydownTarget,delete M.currentInstance},Nd=t=>{t.isAwaitingPromise()?(Ar(B,t),B.awaitingPromise.set(t,!0)):(Ar(ds,t),Ar(B,t))},Ar=(t,e)=>{for(const n in t)t[n].delete(e)},Pd=Object.freeze(Object.defineProperty({__proto__:null,_destroy:lE,close:Ws,closeModal:Ws,closePopup:Ws,closeToast:Ws,disableButtons:tE,disableInput:sE,disableLoading:sl,enableButtons:eE,enableInput:nE,getInput:Mb,getProgressSteps:oE,handleAwaitingPromise:Bs,hideLoading:sl,isAwaitingPromise:Wb,rejectPromise:Yb,resetValidationMessage:rE,showValidationMessage:iE,update:aE},Symbol.toStringTag,{value:"Module"})),hE=t=>{const e=B.innerParams.get(t);t.disableButtons(),e.input?Od(t,"confirm"):xa(t,!0)},dE=t=>{const e=B.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Od(t,"deny"):Ra(t,!1)},fE=(t,e)=>{t.disableButtons(),e(Rn.cancel)},Od=(t,e)=>{const n=B.innerParams.get(t);if(!n.input)return Xt(`The "input" parameter is needed to be set when using returnInputValueOn${Ca(e)}`);const s=kb(t,n);n.inputValidator?pE(t,s,e):t.getInput().checkValidity()?e==="deny"?Ra(t,s):xa(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},pE=(t,e,n)=>{const s=B.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Os(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Ra(t,e):xa(t,e)})},Ra=(t,e)=>{const n=B.innerParams.get(t||globalThis);n.showLoaderOnDeny&&_n(St()),n.preDeny?(B.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Os(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Bs(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Rd(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},rl=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Rd=(t,e)=>{t.rejectPromise(e)},xa=(t,e)=>{const n=B.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&_n(),n.preConfirm?(t.resetValidationMessage(),B.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Os(n.preConfirm(e,n.validationMessage))).then(i=>{Ve(ir())||i===!1?(t.hideLoading(),Bs(t)):rl(t,typeof i>"u"?e:i)}).catch(i=>Rd(t||globalThis,i))):rl(t,e)},gE=(t,e,n)=>{B.innerParams.get(t).toast?mE(t,e,n):(vE(e),wE(e),bE(t,e,n))},mE=(t,e,n)=>{e.popup.onclick=()=>{const s=B.innerParams.get(t);s&&(yE(s)||s.timer||s.input)||n(Rn.close)}},yE=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Ii=!1;const vE=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Ii=!0)}}},wE=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Ii=!0)}}},bE=(t,e,n)=>{e.container.onclick=s=>{const i=B.innerParams.get(t);if(Ii){Ii=!1;return}s.target===e.container&&sr(i.allowOutsideClick)&&n(Rn.backdrop)}},EE=t=>typeof t=="object"&&t.jquery,ol=t=>t instanceof Element||EE(t),TE=t=>{const e={};return typeof t[0]=="object"&&!ol(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||ol(i)?e[n]=i:i!==void 0&&Xt(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function CE(...t){const e=this;return new e(...t)}function _E(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const IE=()=>M.timeout&&M.timeout.getTimerLeft(),xd=()=>{if(M.timeout)return dw(),M.timeout.stop()},Ld=()=>{if(M.timeout){const t=M.timeout.start();return Na(t),t}},SE=()=>{const t=M.timeout;return t&&(t.running?xd():Ld())},AE=t=>{if(M.timeout){const e=M.timeout.increase(t);return Na(e,!0),e}},kE=()=>M.timeout&&M.timeout.isRunning();let al=!1;const po={};function DE(t="data-swal-template"){po[t]=this,al||(document.body.addEventListener("click",NE),al=!0)}const NE=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in po){const s=e.getAttribute(n);if(s){po[n].fire({template:s});return}}},PE=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:TE,bindClickHandler:DE,clickCancel:Vb,clickConfirm:_d,clickDeny:Fb,enableLoading:_n,fire:CE,getActions:Ls,getCancelButton:zt,getCloseButton:Sa,getConfirmButton:Ze,getContainer:Ae,getDenyButton:St,getFocusableElements:Aa,getFooter:fd,getHtmlContainer:_i,getIcon:xs,getImage:hd,getInputLabel:aw,getLoader:On,getPopup:K,getTimerLeft:IE,getTimerProgressBar:rr,getTitle:ud,getValidationMessage:ir,increaseTimer:AE,isDeprecatedParameter:uo,isLoading:lw,isTimerRunning:kE,isUpdatableParameter:cd,isValidParameter:ad,isVisible:Bb,mixin:_E,resumeTimer:Ld,showLoading:_n,stopTimer:xd,toggleTimer:SE},Symbol.toStringTag,{value:"Module"}));let go;class xn{constructor(...e){if(typeof window>"u")return;go=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);B.promise.set(this,s)}_main(e,n={}){rw(Object.assign({},n,e)),M.currentInstance&&(M.currentInstance._destroy(),ka()&&bd()),M.currentInstance=this;const s=RE(e,n);hb(s),Object.freeze(s),M.timeout&&(M.timeout.stop(),delete M.timeout),clearTimeout(M.restoreFocusTimeout);const i=xE(this);return wd(this,s),B.innerParams.set(this,s),OE(this,i,s)}then(e){return B.promise.get(this).then(e)}finally(e){return B.promise.get(this).finally(e)}}const OE=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};ds.swalPromiseResolve.set(t,s),ds.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>hE(t),e.denyButton.onclick=()=>dE(t),e.cancelButton.onclick=()=>fE(t,r),e.closeButton.onclick=()=>r(Rn.close),gE(t,e,r),Ub(t,M,n,r),Ab(t,n),Tb(n),LE(M,n,r),ME(e,n),setTimeout(()=>{e.container.scrollTop=0})}),RE=(t,e)=>{const n=tb(t),s=Object.assign({},un,e,n,t);return s.showClass=Object.assign({},un.showClass,s.showClass),s.hideClass=Object.assign({},un.hideClass,s.hideClass),s},xE=t=>{const e={popup:K(),container:Ae(),actions:Ls(),confirmButton:Ze(),denyButton:St(),cancelButton:zt(),loader:On(),closeButton:Sa(),validationMessage:ir(),progressSteps:dd()};return B.domCache.set(t,e),e},LE=(t,e,n)=>{const s=rr();ke(s),e.timer&&(t.timeout=new db(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ge(s),He(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Na(e.timer)})))},ME=(t,e)=>{if(!e.toast){if(!sr(e.allowEnterKey))return FE();BE(t,e)||fo(e,-1,1)}},BE=(t,e)=>e.focusDeny&&Ve(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ve(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ve(t.confirmButton)?(t.confirmButton.focus(),!0):!1,FE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(xn.prototype,Pd);Object.assign(xn,PE);Object.keys(Pd).forEach(t=>{xn[t]=function(...e){if(go)return go[t](...e)}});xn.DismissReason=Rn;xn.version="11.4.8";const fs=xn;fs.default=fs;const Zt=[];function cr(t,e=Fe){let n;const s=new Set;function i(a){if(In(t,a)&&(t=a,n)){const c=!Zt.length;for(const l of s)l[1](),Zt.push(l,t);if(c){for(let l=0;l<Zt.length;l+=2)Zt[l][0](Zt[l+1]);Zt.length=0}}}function r(a){i(a(t))}function o(a,c=Fe){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||Fe),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const cl=cr({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),mo=cr(""),yo=cr(""),vo=cr(""),VE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},UE=async t=>{try{await Ea(Tn(Me,"Pacientes",t.id),t)}catch(e){console.log(e)}};function ll(t,e,n){const s=t.slice();return s[33]=e[n],s[3]=n,s}function $E(t){let e,n=t[1],s=[];for(let i=0;i<n.length;i+=1)s[i]=ul(ll(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=gl()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);ze(i,e,r)},p(i,r){if(r[0]&2){n=i[1];let o;for(o=0;o<n.length;o+=1){const a=ll(i,n,o);s[o]?s[o].p(a,r):(s[o]=ul(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){wo(s,i),i&&je(e)}}}function jE(t){let e;return{c(){e=k("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value,v(e,"class","svelte-r1wni")},m(n,s){ze(n,e,s)},p:Fe,d(n){n&&je(e)}}}function ul(t){let e,n=`${t[33].nroSocio}-${t[33].apellido}, ${t[33].nombre} plan ${t[33].plan}`,s;return{c(){e=k("option"),s=se(n),e.__value=t[3],e.value=e.__value,v(e,"class","svelte-r1wni")},m(i,r){ze(i,e,r),E(e,s)},p(i,r){r[0]&2&&n!==(n=`${i[33].nroSocio}-${i[33].apellido}, ${i[33].nombre} plan ${i[33].plan}`)&&gt(s,n)},d(i){i&&je(e)}}}function qE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y,w,g,T,I,x,V,q,ye,N,Y,ue,qe,ve,he,et,Ge,Ot,We,Fs,D,G,de,De,Ln;function La(U,Pe){return U[1].length==0?jE:$E}let Vs=La(t),tt=Vs(t);return G=new Xd({props:{planes:t[4],planSeleccionado:t[8]}}),G.$on("cambioPlan",t[12]),{c(){e=k("body"),n=k("div"),s=k("div"),i=k("button"),r=se("create"),a=ie(),c=k("button"),l=se("update"),h=ie(),d=k("button"),p=se("delete"),w=ie(),g=k("div"),T=k("label"),T.textContent="filtrar por apellido",I=k("input"),x=ie(),V=k("div"),q=k("select"),tt.c(),ye=ie(),N=k("div"),Y=k("label"),Y.textContent="nombre",ue=k("input"),qe=ie(),ve=k("label"),ve.textContent="apellido",he=k("input"),et=ie(),Ge=k("div"),Ot=k("label"),Ot.textContent="nº socio",We=k("input"),Fs=ie(),D=k("label"),D.textContent="plan",si(G.$$.fragment),i.disabled=o=!t[5]||!t[6]||!t[8]||!t[7],v(i,"class","svelte-r1wni"),c.disabled=u=!t[5]||!t[6]||!t[8]||!t[7]||!t[2],v(c,"class","svelte-r1wni"),d.disabled=y=!t[2],v(d,"class","svelte-r1wni"),v(s,"class","buttons svelte-r1wni"),v(n,"id","botones"),v(n,"class","svelte-r1wni"),v(T,"for","filterPrefix"),v(T,"class","svelte-r1wni"),v(I,"name","filterPrefix"),v(I,"placeholder","filter prefix"),v(I,"class","svelte-r1wni"),v(g,"id","filter"),v(g,"class","svelte-r1wni"),v(q,"name","select-pacientes"),v(q,"class","select-Pacientes svelte-r1wni"),v(q,"size",5),t[3]===void 0&&fn(()=>t[16].call(q)),v(V,"id","selectPacientes"),v(V,"class","svelte-r1wni"),v(Y,"for","nombre"),v(Y,"class","svelte-r1wni"),v(ue,"name","nombre"),v(ue,"placeholder","nombre"),v(ue,"class","svelte-r1wni"),v(ve,"for","apellido"),v(ve,"class","svelte-r1wni"),v(he,"name","apellido"),v(he,"placeholder","apellido"),v(he,"class","svelte-r1wni"),v(N,"id","formInputsI"),v(N,"class","svelte-r1wni"),v(Ot,"for","nroSocio"),v(Ot,"class","svelte-r1wni"),v(We,"name","nroSocio"),v(We,"placeholder","nro de Socio"),v(We,"class","svelte-r1wni"),v(D,"for","plan"),v(D,"class","svelte-r1wni"),v(Ge,"id","formInputsD"),v(Ge,"class","svelte-r1wni"),v(e,"class","svelte-r1wni")},m(U,Pe){ze(U,e,Pe),E(e,n),E(n,s),E(s,i),E(i,r),E(s,a),E(s,c),E(c,l),E(s,h),E(s,d),E(d,p),E(e,w),E(e,g),E(g,T),E(g,I),we(I,t[0]),E(e,x),E(e,V),E(V,q),tt.m(q,null),dn(q,t[3]),E(e,ye),E(e,N),E(N,Y),E(N,ue),we(ue,t[5]),E(N,qe),E(N,ve),E(N,he),we(he,t[6]),E(e,et),E(e,Ge),E(Ge,Ot),E(Ge,We),we(We,t[7]),E(Ge,Fs),E(Ge,D),Yn(G,Ge,null),de=!0,De||(Ln=[Z(i,"click",t[9]),Z(c,"click",t[10]),Z(d,"click",t[11]),Z(I,"input",t[15]),Z(q,"change",t[13]),Z(q,"change",t[16]),Z(ue,"input",t[17]),Z(he,"input",t[18]),Z(We,"input",t[19])],De=!0)},p(U,Pe){(!de||Pe[0]&480&&o!==(o=!U[5]||!U[6]||!U[8]||!U[7]))&&(i.disabled=o),(!de||Pe[0]&484&&u!==(u=!U[5]||!U[6]||!U[8]||!U[7]||!U[2]))&&(c.disabled=u),(!de||Pe[0]&4&&y!==(y=!U[2]))&&(d.disabled=y),Pe[0]&1&&I.value!==U[0]&&we(I,U[0]),Vs===(Vs=La(U))&&tt?tt.p(U,Pe):(tt.d(1),tt=Vs(U),tt&&(tt.c(),tt.m(q,null))),Pe[0]&8&&dn(q,U[3]),Pe[0]&32&&ue.value!==U[5]&&we(ue,U[5]),Pe[0]&64&&he.value!==U[6]&&we(he,U[6]),Pe[0]&128&&We.value!==U[7]&&we(We,U[7]);const lr={};Pe[0]&16&&(lr.planes=U[4]),Pe[0]&256&&(lr.planSeleccionado=U[8]),G.$set(lr)},i(U){de||(Qn(G.$$.fragment,U),de=!0)},o(U){ni(G.$$.fragment,U),de=!1},d(U){U&&je(e),tt.d(),Xn(G),De=!1,At(Ln)}}}function HE(t,e,n){let s,i,r,o,a;Lt(t,vo,D=>n(22,i=D)),Lt(t,yo,D=>n(23,r=D)),Lt(t,mo,D=>n(24,o=D)),Lt(t,cl,D=>n(25,a=D));let c=[],l=["nombre","apellido","nroSocio","plan","createdAt"],u=[],h;ml(()=>{h=Ei(mt(Me,"Pacientes"),G=>{n(14,c=G.docs.map(De=>({...De.data(),id:De.id}))),VE(c,l),c.forEach(De=>{UE(De)});const de=(De,Ln)=>De.apellido<Ln.apellido?-1:De.apellido>Ln.apellido?1:0;c.sort(de)},G=>{console.log(G)}),(async()=>{const G=mt(Me,"planes"),de=await qc(G);console.log("109 async para el radio button",de),n(4,u=de.docs.map(De=>De.data().plan)),u.push("particular"),u.sort()})()}),yl(h);let d="",p="",y="",w="",g="",T=0,I;const x=D=>{n(5,p=D?D.nombre:""),n(6,y=D?D.apellido:""),n(7,w=D?D.nroSocio:""),n(8,g=D?D.plan:"")},V=async()=>{console.log(p,y,w,g);try{await td(mt(Me,"Pacientes"),{nombre:p,apellido:y,nroSocio:w,createdAt:new Date().toLocaleDateString(),plan:g}),console.log("paciente agregado"),ln({text:"Nuevo paciente agregado"}).showToast()}catch(D){console.error(D)}},q=()=>{n(14,c=c.concat({nombre:p,apellido:y})),n(3,T=c.length-1),V(),n(5,p=n(6,y=n(8,g=n(7,w=""))))},ye=async D=>{try{await Ea(Tn(Me,"Pacientes",D.id),D),ln({text:`paciente ${D.apellido}, ${D.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(G){console.error(G)}},N=()=>{n(2,s.nombre=p,s),n(2,s.apellido=y,s),n(8,g=s.plan),n(2,s.nroSocio=w,s),n(2,s),n(1,I),n(3,T),n(0,d),n(14,c),n(14,c),ye(s)},Y=async D=>{try{await co(Tn(Me,"Pacientes",D.id)),ln({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(de){console.error(de)}const G=ao(mt(Me,"sesiones"),fv("pacienteID","==",D.id));console.log(`desde delete q=pacientes a borrar ${G} - paciente: ${D.nombre} ${D.apellido} ${D.id}`);try{(await qc(G)).forEach(De=>{co(De.ref)})}catch(de){console.log(de)}},ue=()=>{const D=c.indexOf(s);fs.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(G=>{G.isConfirmed&&(fs.fire("Deleted!","Your file has been deleted.","success"),Y(c[T]),n(14,c=[...c.slice(0,D),...c.slice(D+1)]),n(5,p=n(6,y=n(7,w=n(8,g="")))),n(3,T=Math.min(T,I.length-2)))})},qe=D=>{n(8,g=D.detail.valor.planSeleccionado),s.plan!=g&&(n(2,s.plan=g,s),n(2,s.nombre=p,s),n(2,s.apellido=y,s),n(2,s.nroSocio=w,s),n(1,I[T].plan=g,I),console.log("242",s),ye(s))},ve=vl(),he=D=>{const G=D.target.value;I[G].plan,ve("pacienteSelected",G),console.log("dispatch",G)};function et(){d=this.value,n(0,d)}function Ge(){T=bo(this),n(3,T)}function Ot(){p=this.value,n(5,p)}function We(){y=this.value,n(6,y)}function Fs(){w=this.value,n(7,w)}return t.$$.update=()=>{t.$$.dirty[0]&16385&&n(1,I=d?c.filter(D=>`${D.apellido}, ${D.nombre}`.toLowerCase().startsWith(d.toLowerCase())):c.map(D=>({nombre:D.nombre,apellido:D.apellido,plan:D.plan,nroSocio:D.nroSocio,id:D.id}))),t.$$.dirty[0]&10&&n(2,s=I[T]),t.$$.dirty[0]&8&&console.log("i:",T),t.$$.dirty[0]&4&&s&&(Us(cl,a=s,a),Us(mo,o=s.apellido,o),Us(yo,r=s.nombre,r),Us(vo,i=s.id,i),console.log(s)),t.$$.dirty[0]&4&&x(s)},[d,I,s,T,u,p,y,w,g,q,N,ue,qe,he,c,et,Ge,Ot,We,Fs]}class zE extends gs{constructor(e){super(),ps(this,e,HE,qE,In,{},null,[-1,-1])}}function hl(t,e,n){const s=t.slice();return s[22]=e[n],s}function dl(t){let e,n,s=t[22].diaSesion+"",i,r,o=t[22].valorSesion+"",a,c,l=t[22].fechaPago+"",u,h,d=t[22].valorPago+"",p,y,w;return{c(){e=k("option"),n=se("dia sesion: "),i=se(s),r=se(" - valor sesion: "),a=se(o),c=se(`\r
              - dia pago `),u=se(l),h=se(" - valor pago "),p=se(d),y=ie(),v(e,"class"," svelte-40a4zh"),e.__value=w=t[22].id,e.value=e.__value},m(g,T){ze(g,e,T),E(e,n),E(e,i),E(e,r),E(e,a),E(e,c),E(e,u),E(e,h),E(e,p),E(e,y)},p(g,T){T&1&&s!==(s=g[22].diaSesion+"")&&gt(i,s),T&1&&o!==(o=g[22].valorSesion+"")&&gt(a,o),T&1&&l!==(l=g[22].fechaPago+"")&&gt(u,l),T&1&&d!==(d=g[22].valorPago+"")&&gt(p,d),T&1&&w!==(w=g[22].id)&&(e.__value=w,e.value=e.__value)},d(g){g&&je(e)}}}function fl(t){let e=Object.values(t[22]).includes(t[7]),n,s=e&&dl(t);return{c(){s&&s.c(),n=gl()},m(i,r){s&&s.m(i,r),ze(i,n,r)},p(i,r){r&129&&(e=Object.values(i[22]).includes(i[7])),e?s?s.p(i,r):(s=dl(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&je(n)}}}function KE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y,w,g,T,I,x,V,q,ye,N,Y,ue;return{c(){e=k("div"),n=k("form"),s=k("div"),i=k("div"),r=k("label"),r.textContent="pago",o=k("input"),a=ie(),c=k("label"),c.textContent="valor sesion",l=k("input"),u=ie(),h=k("div"),d=k("label"),d.textContent="Dia Sesion",p=k("input"),y=ie(),w=k("label"),w.textContent="Fecha Pago",g=k("input"),T=ie(),I=k("div"),x=k("button"),x.textContent="update",V=ie(),q=k("button"),q.textContent="delete",ye=ie(),N=k("button"),N.textContent="Agregar sesión",v(r,"for","valorPago"),v(r,"class","svelte-40a4zh"),v(o,"name","valorPago"),v(o,"type","number"),v(o,"step","100"),v(o,"min","0"),v(o,"placeholder","Valor pago"),v(o,"class","svelte-40a4zh"),v(c,"for","valorSesion"),v(c,"class","svelte-40a4zh"),v(l,"name","valorSesion"),v(l,"type","number"),v(l,"step","100"),v(l,"min","0"),v(l,"placeholder","Valor sesión"),v(l,"class","svelte-40a4zh"),v(i,"id","inputsFormSesionesI"),v(i,"class","svelte-40a4zh"),v(d,"for","diaSesion"),v(d,"class","svelte-40a4zh"),v(p,"name","diaSesion"),v(p,"type","date"),v(p,"placeholder","Día sesión"),v(p,"class","svelte-40a4zh"),v(w,"for","fechaPago"),v(w,"class","svelte-40a4zh"),v(g,"name","fechaPago"),v(g,"type","date"),v(g,"placeholder","Fecha pago"),v(g,"class","svelte-40a4zh"),v(h,"id","inputsFormSesionesD"),v(h,"class","svelte-40a4zh"),v(x,"class","svelte-40a4zh"),v(q,"class","svelte-40a4zh"),v(N,"class","svelte-40a4zh"),v(I,"id","botonesFormSesiones"),v(I,"class","buttons svelte-40a4zh"),v(s,"id","form-Sesiones"),v(s,"class","svelte-40a4zh"),v(n,"class","svelte-40a4zh"),v(e,"id","contenedor-form-sesiones"),v(e,"class","svelte-40a4zh")},m(qe,ve){ze(qe,e,ve),E(e,n),E(n,s),E(s,i),E(i,r),E(i,o),we(o,t[3]),E(i,a),E(i,c),E(i,l),we(l,t[4]),E(s,u),E(s,h),E(h,d),E(h,p),we(p,t[5]),E(h,y),E(h,w),E(h,g),we(g,t[6]),E(s,T),E(s,I),E(I,x),E(I,V),E(I,q),E(I,ye),E(I,N),Y||(ue=[Z(o,"input",t[16]),Z(l,"input",t[17]),Z(p,"input",t[18]),Z(g,"input",t[19]),Z(x,"click",function(){ei(t[12](t[2]))&&t[12](t[2]).apply(this,arguments)}),Z(q,"click",function(){ei(t[13](t[2]))&&t[13](t[2]).apply(this,arguments)}),Z(N,"click",t[11]),Z(n,"submit",Fd(t[14]))],Y=!0)},p(qe,ve){t=qe,ve&8&&ti(o.value)!==t[3]&&we(o,t[3]),ve&16&&ti(l.value)!==t[4]&&we(l,t[4]),ve&32&&we(p,t[5]),ve&64&&we(g,t[6])},d(qe){qe&&je(e),Y=!1,At(ue)}}}function GE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y=t[0],w=[];for(let T=0;T<y.length;T+=1)w[T]=fl(hl(t,y,T));let g=KE(t);return{c(){e=k("main"),n=k("body"),s=k("h4"),i=se("Paciente: "),r=se(t[8]),o=se(", "),a=se(t[9]),c=ie(),l=k("div"),u=k("select");for(let T=0;T<w.length;T+=1)w[T].c();h=ie(),g&&g.c(),v(s,"class","svelte-40a4zh"),v(u,"size",5),v(u,"class","svelte-40a4zh"),t[1]===void 0&&fn(()=>t[15].call(u)),v(l,"id","select"),v(l,"class","svelte-40a4zh"),v(n,"class","svelte-40a4zh"),v(e,"class","svelte-40a4zh")},m(T,I){ze(T,e,I),E(e,n),E(n,s),E(s,i),E(s,r),E(s,o),E(s,a),E(n,c),E(n,l),E(l,u);for(let x=0;x<w.length;x+=1)w[x]&&w[x].m(u,null);dn(u,t[1]),E(n,h),g&&g.m(n,null),d||(p=[Z(u,"change",t[10]),Z(u,"change",t[15])],d=!0)},p(T,[I]){if(I&256&&gt(r,T[8]),I&512&&gt(a,T[9]),I&129){y=T[0];let x;for(x=0;x<y.length;x+=1){const V=hl(T,y,x);w[x]?w[x].p(V,I):(w[x]=fl(V),w[x].c(),w[x].m(u,null))}for(;x<w.length;x+=1)w[x].d(1);w.length=y.length}I&3&&dn(u,T[1]),g.p(T,I)},i:Fe,o:Fe,d(T){T&&je(e),wo(w,T),g&&g.d(),d=!1,At(p)}}}function WE(t,e,n){let s,i,r;Lt(t,vo,N=>n(7,s=N)),Lt(t,mo,N=>n(8,i=N)),Lt(t,yo,N=>n(9,r=N));let{sesiones:o}=e;ml(()=>{const N=[],Y=mt(Me,"sesiones"),ue=mt(Me,"Pacientes");ao(Y,Uc("pacienteID")),ao(ue,Uc("apellido"));const qe=Ei(Y,he=>{n(0,o=he.docs.map(et=>({id:et.id,...et.data()})))});console.log("desde onMount",o),N.push(qe);const ve=Ei(ue,he=>{he.docs.map(et=>({id:et.id,...et.data()}))});return N.push(ve),()=>{N.forEach(he=>he())}});let a,c;const l=N=>{n(1,a=N.target.value),console.log(o),n(2,c=o.find(Y=>Y.id===a)),console.log("selectedSession",c),n(3,p=c.valorPago),n(4,y=c.valorSesion),n(6,g=c.fechaPago),n(5,w=c.diaSesion)},u=()=>{console.log("Add sesion",c);try{td(mt(Me,"sesiones"),{valorPago:p,valorSesion:y,diaSesion:w,fechaPago:g,pacienteID:s}),console.log("sesion agregada"),ln({text:"Nueva sesion agregada"}).showToast()}catch(N){console.error(N)}},h=async N=>{console.log("Update sesion",N);try{await Ea(Tn(Me,"sesiones",N.id),{valorPago:p,valorSesion:y,fechaPago:g,diaSesion:w}),ln({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(Y){console.log(Y)}},d=async N=>{console.log("Delete sesion",N);try{await co(Tn(Me,"sesiones",N.id)),ln({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(Y){console.error(Y)}};let p=5e3,y=5e3,w=new Date().toISOString().slice(0,10),g=new Date().toISOString().slice(0,10);function T(N){jd.call(this,t,N)}function I(){a=bo(this),n(1,a),n(0,o)}function x(){p=ti(this.value),n(3,p)}function V(){y=ti(this.value),n(4,y)}function q(){w=this.value,n(5,w)}function ye(){g=this.value,n(6,g)}return t.$$set=N=>{"sesiones"in N&&n(0,o=N.sesiones)},t.$$.update=()=>{t.$$.dirty&7&&(n(2,c=o.find(N=>N.id===a)),console.log(c))},[o,a,c,p,y,w,g,s,i,r,l,u,h,d,T,I,x,V,q,ye]}class QE extends gs{constructor(e){super(),ps(this,e,WE,GE,In,{sesiones:0})}}function YE(t){let e,n,s,i,r,o,a,c,l;return r=new zE({}),c=new QE({props:{sesiones:t[0]}}),{c(){e=k("body"),n=k("div"),s=k("h5"),s.textContent="CRUD Pacientes",i=ie(),si(r.$$.fragment),o=ie(),a=k("div"),si(c.$$.fragment),v(n,"class","contenedor-pacientes svelte-26zw2p"),v(a,"class","contenedor-sesiones svelte-26zw2p"),v(e,"class","svelte-26zw2p")},m(u,h){ze(u,e,h),E(e,n),E(n,s),E(n,i),Yn(r,n,null),E(e,o),E(e,a),Yn(c,a,null),l=!0},p(u,[h]){const d={};h&1&&(d.sesiones=u[0]),c.$set(d)},i(u){l||(Qn(r.$$.fragment,u),Qn(c.$$.fragment,u),l=!0)},o(u){ni(r.$$.fragment,u),ni(c.$$.fragment,u),l=!1},d(u){u&&je(e),Xn(r),Xn(c)}}}function XE(t,e,n){let s=[];const i=Ei(mt(Me,"sesiones"),r=>{n(0,s=r.docs.map(o=>({...o.data(),id:o.id})))},r=>{console.log(r)});return yl(i),[s]}class JE extends gs{constructor(e){super(),ps(this,e,XE,YE,In,{})}}function ZE(t){let e,n,s,i;return s=new JE({}),{c(){e=k("main"),n=k("div"),si(s.$$.fragment),v(n,"class","contenedorPadre svelte-1cwonxg"),v(e,"class","svelte-1cwonxg")},m(r,o){ze(r,e,o),E(e,n),Yn(s,n,null),i=!0},p:Fe,i(r){i||(Qn(s.$$.fragment,r),i=!0)},o(r){ni(s.$$.fragment,r),i=!1},d(r){r&&je(e),Xn(s)}}}class e0 extends gs{constructor(e){super(),ps(this,e,null,ZE,In,{})}}new e0({target:document.getElementById("app")});
