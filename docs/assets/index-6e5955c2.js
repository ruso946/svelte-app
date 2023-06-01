(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ae(){}function yl(t){return t()}function ja(){return Object.create(null)}function Tt(t){t.forEach(yl)}function vl(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ud(t){return Object.keys(t).length===0}function $d(t,...e){if(t==null)return Ae;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push($d(e,n))}function Kn(t,e,n){return t.set(n),e}function w(t,e){t.appendChild(e)}function Qe(t,e,n){t.insertBefore(e,n||null)}function Ue(t){t.parentNode&&t.parentNode.removeChild(t)}function So(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function ae(t){return document.createTextNode(t)}function te(){return ae(" ")}function wl(){return ae("")}function ie(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function jd(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ai(t){return t===""?null:+t}function qd(t){return Array.from(t.childNodes)}function ot(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Te(t,e){t.value=e??""}function wn(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Hd(t){for(const e of t.options)if(!e.disabled)return e}function Ao(t){const e=t.querySelector(":checked")||Hd(t);return e&&e.__value}function Gs(t,e,n){t.classList[n?"add":"remove"](e)}function zd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let os;function Jn(t){os=t}function ko(){if(!os)throw new Error("Function called outside component initialization");return os}function bl(t){ko().$$.on_mount.push(t)}function Kd(t){ko().$$.on_destroy.push(t)}function El(){const t=ko();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=zd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Gd(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const cn=[],qa=[];let dn=[];const Ha=[],Wd=Promise.resolve();let Or=!1;function Qd(){Or||(Or=!0,Wd.then(Tl))}function bn(t){dn.push(t)}const fr=new Set;let on=0;function Tl(){if(on!==0)return;const t=os;do{try{for(;on<cn.length;){const e=cn[on];on++,Jn(e),Yd(e.$$)}}catch(e){throw cn.length=0,on=0,e}for(Jn(null),cn.length=0,on=0;qa.length;)qa.pop()();for(let e=0;e<dn.length;e+=1){const n=dn[e];fr.has(n)||(fr.add(n),n())}dn.length=0}while(cn.length);for(;Ha.length;)Ha.pop()();Or=!1,fr.clear(),Jn(t)}function Yd(t){if(t.fragment!==null){t.update(),Tt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(bn)}}function Xd(t){const e=[],n=[];dn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),dn=e}const ni=new Set;let Jd;function En(t,e){t&&t.i&&(ni.delete(t),t.i(e))}function as(t,e,n,s){if(t&&t.o){if(ni.has(t))return;ni.add(t),Jd.c.push(()=>{ni.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function cs(t){t&&t.c()}function Tn(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||bn(()=>{const o=t.$$.on_mount.map(yl).filter(vl);t.$$.on_destroy?t.$$.on_destroy.push(...o):Tt(o),t.$$.on_mount=[]}),r.forEach(bn)}function _n(t,e){const n=t.$$;n.fragment!==null&&(Xd(n.after_update),Tt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Zd(t,e){t.$$.dirty[0]===-1&&(cn.push(t),Qd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xn(t,e,n,s,i,r,o,a=[-1]){const c=os;Jn(t);const l=t.$$={fragment:null,ctx:[],props:r,update:Ae,not_equal:i,bound:ja(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ja(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&Zd(t,h)),d}):[],l.update(),u=!0,Tt(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=qd(e.target);l.fragment&&l.fragment.l(h),h.forEach(Ue)}else l.fragment&&l.fragment.c();e.intro&&En(t.$$.fragment),Tn(t,e.target,e.anchor,e.customElement),Tl()}Jn(c)}class Mn{$destroy(){_n(this,1),this.$destroy=Ae}$on(e,n){if(!vl(n))return Ae;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Ud(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function za(t,e,n){const s=t.slice();return s[12]=e[n],s}function Ka(t){let e,n=t[12]+"",s,i;return{c(){e=S("option"),s=ae(n),e.__value=i=t[12],e.value=e.__value},m(r,o){Qe(r,e,o),w(e,s)},p(r,o){o&4&&n!==(n=r[12]+"")&&ot(s,n),o&4&&i!==(i=r[12])&&(e.__value=i,e.value=e.__value)},d(r){r&&Ue(e)}}}function ef(t){let e,n,s,i,r,o,a=t[2],c=[];for(let l=0;l<a.length;l+=1)c[l]=Ka(za(t,a,l));return{c(){e=S("div"),n=S("input"),s=te(),i=S("select");for(let l=0;l<c.length;l+=1)c[l].c();g(n,"type","checkbox"),g(n,"name","CheckBoxParticular"),g(n,"id","CheckBoxParticular"),g(i,"name","plan"),g(i,"id","plan"),g(i,"class","svelte-1de4xhy"),t[1]===void 0&&bn(()=>t[7].call(i)),Gs(i,"SelectPlanVisible",t[0]),Gs(i,"SelectPlanHidden",t[3]),g(e,"id","selectPlanContainer"),g(e,"class","svelte-1de4xhy")},m(l,u){Qe(l,e,u),w(e,n),n.checked=t[0],w(e,s),w(e,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null);wn(i,t[1]),r||(o=[ie(n,"change",t[6]),ie(n,"change",t[4]),ie(i,"change",t[7]),ie(i,"change",t[5])],r=!0)},p(l,[u]){if(u&1&&(n.checked=l[0]),u&4){a=l[2];let h;for(h=0;h<a.length;h+=1){const d=za(l,a,h);c[h]?c[h].p(d,u):(c[h]=Ka(d),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}u&6&&wn(i,l[1]),u&1&&Gs(i,"SelectPlanVisible",l[0]),u&8&&Gs(i,"SelectPlanHidden",l[3])},i:Ae,o:Ae,d(l){l&&Ue(e),So(c,l),r=!1,Tt(o)}}}function tf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,o;const a=m=>{n(0,r=m)},c=()=>{u("clickCheckPlan",{valor:{SelectPlanVisible:r}})},l=m=>{var E=m.target.checked;a(E),c()},u=El(),h=()=>{u("cambioPlan",{valor:{planSeleccionado:i}})};function d(){r=this.checked,n(0,r)}function p(){i=Ao(this),n(1,i),n(2,s)}return t.$$set=m=>{"planes"in m&&n(2,s=m.planes),"planSeleccionado"in m&&n(1,i=m.planSeleccionado),"SelectPlanVisible"in m&&n(0,r=m.SelectPlanVisible)},t.$$.update=()=>{t.$$.dirty&1&&n(3,o=!r)},[r,i,s,o,l,h,d,p]}class nf extends Mn{constructor(e){super(),xn(this,e,tf,ef,Zt,{planes:2,planSeleccionado:1,SelectPlanVisible:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _l=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_l(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new rf;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const of=function(t){const e=_l(t);return Cl.encodeByteArray(e,!0)},ci=function(t){return of(t).replace(/\./g,"")},af=function(t){try{return Cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lf=()=>cf().__FIREBASE_DEFAULTS__,uf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&af(t[1]);return e&&JSON.parse(e)},Il=()=>{try{return lf()||uf()||hf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},df=t=>{var e,n;return(n=(e=Il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sl=t=>{const e=df(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ff=()=>{var t;return(t=Il())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Al(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ci(JSON.stringify(n)),ci(JSON.stringify(o)),a].join(".")}function gf(){try{return typeof indexedDB=="object"}catch{return!1}}function mf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="FirebaseError";class en extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yf,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kl.prototype.create)}}class kl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,s)}}function vf(t,e){return t.replace(wf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wf=/\{\$([^}]+)}/g;function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ga(r)&&Ga(o)){if(!Rr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ga(t){return t!==null&&typeof t=="object"}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class bf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new pf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tf(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ef(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ef(t){return t===Ut?void 0:t}function Tf(t){return t.instantiationMode==="EAGER"}/**
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
 */class _f{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Cf={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},If=Q.INFO,Sf={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Af=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Sf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dl{constructor(e){this.name=e,this._logLevel=If,this._logHandler=Af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const kf=(t,e)=>e.some(n=>t instanceof n);let Wa,Qa;function Df(){return Wa||(Wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nf(){return Qa||(Qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nl=new WeakMap,Lr=new WeakMap,Pl=new WeakMap,pr=new WeakMap,Do=new WeakMap;function Pf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(It(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nl.set(n,t)}).catch(()=>{}),Do.set(e,t),e}function Of(t){if(Lr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Lr.set(t,e)}let xr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rf(t){xr=t(xr)}function Lf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gr(this),e,...n);return Pl.set(s,e.sort?e.sort():[e]),It(s)}:Nf().includes(t)?function(...e){return t.apply(gr(this),e),It(Nl.get(this))}:function(...e){return It(t.apply(gr(this),e))}}function xf(t){return typeof t=="function"?Lf(t):(t instanceof IDBTransaction&&Of(t),kf(t,Df())?new Proxy(t,xr):t)}function It(t){if(t instanceof IDBRequest)return Pf(t);if(pr.has(t))return pr.get(t);const e=xf(t);return e!==t&&(pr.set(t,e),Do.set(e,t)),e}const gr=t=>Do.get(t);function Mf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=It(o);return s&&o.addEventListener("upgradeneeded",c=>{s(It(o.result),c.oldVersion,c.newVersion,It(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ff=["get","getKey","getAll","getAllKeys","count"],Bf=["put","add","delete","clear"],mr=new Map;function Ya(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mr.get(e))return mr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Bf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ff.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return mr.set(e,r),r}Rf(t=>({...t,get:(e,n,s)=>Ya(e,n)||t.get(e,n,s),has:(e,n)=>!!Ya(e,n)||t.has(e,n)}));/**
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
 */class Vf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Uf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mr="@firebase/app",Xa="0.9.4";/**
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
 */const Gt=new Dl("@firebase/app"),$f="@firebase/app-compat",jf="@firebase/analytics-compat",qf="@firebase/analytics",Hf="@firebase/app-check-compat",zf="@firebase/app-check",Kf="@firebase/auth",Gf="@firebase/auth-compat",Wf="@firebase/database",Qf="@firebase/database-compat",Yf="@firebase/functions",Xf="@firebase/functions-compat",Jf="@firebase/installations",Zf="@firebase/installations-compat",ep="@firebase/messaging",tp="@firebase/messaging-compat",np="@firebase/performance",sp="@firebase/performance-compat",ip="@firebase/remote-config",rp="@firebase/remote-config-compat",op="@firebase/storage",ap="@firebase/storage-compat",cp="@firebase/firestore",lp="@firebase/firestore-compat",up="firebase",hp="9.17.2";/**
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
 */const Fr="[DEFAULT]",dp={[Mr]:"fire-core",[$f]:"fire-core-compat",[qf]:"fire-analytics",[jf]:"fire-analytics-compat",[zf]:"fire-app-check",[Hf]:"fire-app-check-compat",[Kf]:"fire-auth",[Gf]:"fire-auth-compat",[Wf]:"fire-rtdb",[Qf]:"fire-rtdb-compat",[Yf]:"fire-fn",[Xf]:"fire-fn-compat",[Jf]:"fire-iid",[Zf]:"fire-iid-compat",[ep]:"fire-fcm",[tp]:"fire-fcm-compat",[np]:"fire-perf",[sp]:"fire-perf-compat",[ip]:"fire-rc",[rp]:"fire-rc-compat",[op]:"fire-gcs",[ap]:"fire-gcs-compat",[cp]:"fire-fst",[lp]:"fire-fst-compat","fire-js":"fire-js",[up]:"fire-js-all"};/**
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
 */const li=new Map,Br=new Map;function fp(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(Br.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Br.set(e,t);for(const n of li.values())fp(n,t);return!0}function Ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new kl("app","Firebase",pp);/**
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
 */class gp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const Rl=hp;function Ll(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(n||(n=ff()),!n)throw St.create("no-options");const r=li.get(i);if(r){if(Rr(n,r.options)&&Rr(s,r.config))return r;throw St.create("duplicate-app",{appName:i})}const o=new _f(i);for(const c of Br.values())o.addComponent(c);const a=new gp(n,s,o);return li.set(i,a),a}function xl(t=Fr){const e=li.get(t);if(!e&&t===Fr)return Ll();if(!e)throw St.create("no-app",{appName:t});return e}function At(t,e,n){var s;let i=(s=dp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}ls(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mp="firebase-heartbeat-database",yp=1,us="firebase-heartbeat-store";let yr=null;function Ml(){return yr||(yr=Mf(mp,yp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(us)}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),yr}async function vp(t){try{return(await Ml()).transaction(us).objectStore(us).get(Fl(t))}catch(e){if(e instanceof en)Gt.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function Ja(t,e){try{const s=(await Ml()).transaction(us,"readwrite");return await s.objectStore(us).put(e,Fl(t)),s.done}catch(n){if(n instanceof en)Gt.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(s.message)}}}function Fl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wp=1024,bp=30*24*60*60*1e3;class Ep{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _p(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Za();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=bp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Za(),{heartbeatsToSend:n,unsentEntries:s}=Tp(this._heartbeatsCache.heartbeats),i=ci(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Za(){return new Date().toISOString().substring(0,10)}function Tp(t,e=wp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ec(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ec(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _p{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gf()?mf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ec(t){return ci(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Cp(t){ls(new Cn("platform-logger",e=>new Vf(e),"PRIVATE")),ls(new Cn("heartbeat",e=>new Ep(e),"PRIVATE")),At(Mr,Xa,t),At(Mr,Xa,"esm2017"),At("fire-js","")}Cp("");var Ip="firebase",Sp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(Ip,Sp,"app");var Ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,No=No||{},O=Ap||self;function ui(){}function Di(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Is(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function kp(t){return Object.prototype.hasOwnProperty.call(t,vr)&&t[vr]||(t[vr]=++Dp)}var vr="closure_uid_"+(1e9*Math.random()>>>0),Dp=0;function Np(t,e,n){return t.call.apply(t.bind,arguments)}function Pp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=Np:ke=Pp,ke.apply(null,arguments)}function Ws(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ee(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Lt(){this.s=this.s,this.o=this.o}var Op=0;Lt.prototype.s=!1;Lt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Op!=0)&&kp(this)};Lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Po(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function tc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Di(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function De(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var Rp=function(){if(!O.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{O.addEventListener("test",ui,e),O.removeEventListener("test",ui,e)}catch{}return t}();function hi(t){return/^[\s\xa0]*$/.test(t)}var nc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wr(t,e){return t<e?-1:t>e?1:0}function Ni(){var t=O.navigator;return t&&(t=t.userAgent)?t:""}function rt(t){return Ni().indexOf(t)!=-1}function Oo(t){return Oo[" "](t),t}Oo[" "]=ui;function Lp(t){var e=Fp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var xp=rt("Opera"),In=rt("Trident")||rt("MSIE"),Vl=rt("Edge"),Vr=Vl||In,Ul=rt("Gecko")&&!(Ni().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),Mp=Ni().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function $l(){var t=O.document;return t?t.documentMode:void 0}var di;e:{var br="",Er=function(){var t=Ni();if(Ul)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vl)return/Edge\/([\d\.]+)/.exec(t);if(In)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Mp)return/WebKit\/(\S+)/.exec(t);if(xp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Er&&(br=Er?Er[1]:""),In){var Tr=$l();if(Tr!=null&&Tr>parseFloat(br)){di=String(Tr);break e}}di=br}var Fp={};function Bp(){return Lp(function(){let t=0;const e=nc(String(di)).split("."),n=nc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=wr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||wr(i[2].length==0,r[2].length==0)||wr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Ur;if(O.document&&In){var sc=$l();Ur=sc||parseInt(di,10)||void 0}else Ur=void 0;var Vp=Ur;function hs(t,e){if(De.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ul){e:{try{Oo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Up[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hs.X.h.call(this)}}Ee(hs,De);var Up={2:"touch",3:"pen",4:"mouse"};hs.prototype.h=function(){hs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ss="closure_listenable_"+(1e6*Math.random()|0),$p=0;function jp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++$p,this.ba=this.ea=!1}function Pi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ro(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function jl(t){const e={};for(const n in t)e[n]=t[n];return e}const ic="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ql(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ic.length;r++)n=ic[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Oi(t){this.src=t,this.g={},this.h=0}Oi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=jr(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new jp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function $r(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Bl(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Pi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Lo="closure_lm_"+(1e6*Math.random()|0),_r={};function Hl(t,e,n,s,i){if(s&&s.once)return Kl(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Hl(t,e[r],n,s,i);return null}return n=Fo(n),t&&t[Ss]?t.N(e,n,Is(s)?!!s.capture:!!s,i):zl(t,e,n,!1,s,i)}function zl(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Is(i)?!!i.capture:!!i,a=Mo(t);if(a||(t[Lo]=a=new Oi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=qp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Rp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Wl(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qp(){function t(n){return e.call(t.src,t.listener,n)}const e=Hp;return t}function Kl(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Kl(t,e[r],n,s,i);return null}return n=Fo(n),t&&t[Ss]?t.O(e,n,Is(s)?!!s.capture:!!s,i):zl(t,e,n,!0,s,i)}function Gl(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Gl(t,e[r],n,s,i);else s=Is(s)?!!s.capture:!!s,n=Fo(n),t&&t[Ss]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=jr(r,n,s,i),-1<n&&(Pi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Mo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jr(e,n,s,i)),(n=-1<t?e[t]:null)&&xo(n))}function xo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ss])$r(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Wl(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Mo(e))?($r(n,t),n.h==0&&(n.src=null,e[Lo]=null)):Pi(t)}}}function Wl(t){return t in _r?_r[t]:_r[t]="on"+t}function Hp(t,e){if(t.ba)t=!0;else{e=new hs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&xo(t),t=n.call(s,e)}return t}function Mo(t){return t=t[Lo],t instanceof Oi?t:null}var Cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fo(t){return typeof t=="function"?t:(t[Cr]||(t[Cr]=function(e){return t.handleEvent(e)}),t[Cr])}function me(){Lt.call(this),this.i=new Oi(this),this.P=this,this.I=null}Ee(me,Lt);me.prototype[Ss]=!0;me.prototype.removeEventListener=function(t,e,n,s){Gl(this,t,e,n,s)};function we(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new De(e,t);else if(e instanceof De)e.target=e.target||t;else{var i=e;e=new De(s,t),ql(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Qs(o,s,!0,e)&&i}if(o=e.g=t,i=Qs(o,s,!0,e)&&i,i=Qs(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Qs(o,s,!1,e)&&i}me.prototype.M=function(){if(me.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Pi(n[s]);delete t.g[e],t.h--}}this.I=null};me.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&$r(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Bo=O.JSON.stringify;function zp(){var t=Xl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Kp{constructor(){this.h=this.g=null}add(e,n){const s=Ql.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ql=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Gp,t=>t.reset());class Gp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wp(t){O.setTimeout(()=>{throw t},0)}function Yl(t,e){qr||Qp(),Hr||(qr(),Hr=!0),Xl.add(t,e)}var qr;function Qp(){var t=O.Promise.resolve(void 0);qr=function(){t.then(Yp)}}var Hr=!1,Xl=new Kp;function Yp(){for(var t;t=zp();){try{t.h.call(t.g)}catch(n){Wp(n)}var e=Ql;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hr=!1}function Ri(t,e){me.call(this),this.h=t||1,this.g=e||O,this.j=ke(this.lb,this),this.l=Date.now()}Ee(Ri,me);I=Ri.prototype;I.ca=!1;I.R=null;I.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),we(this,"tick"),this.ca&&(Vo(this),this.start()))}};I.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}I.M=function(){Ri.X.M.call(this),Vo(this),delete this.g};function Uo(t,e,n){if(typeof t=="function")n&&(t=ke(t,n));else if(t&&typeof t.handleEvent=="function")t=ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:O.setTimeout(t,e||0)}function Jl(t){t.g=Uo(()=>{t.g=null,t.i&&(t.i=!1,Jl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Xp extends Lt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jl(this)}M(){super.M(),this.g&&(O.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(t){Lt.call(this),this.h=t,this.g={}}Ee(ds,Lt);var rc=[];function Zl(t,e,n,s){Array.isArray(n)||(n&&(rc[0]=n.toString()),n=rc);for(var i=0;i<n.length;i++){var r=Hl(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function eu(t){Ro(t.g,function(e,n){this.g.hasOwnProperty(n)&&xo(e)},t),t.g={}}ds.prototype.M=function(){ds.X.M.call(this),eu(this)};ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Li(){this.g=!0}Li.prototype.Aa=function(){this.g=!1};function Jp(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Zp(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function hn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tg(t,n)+(s?" "+s:"")})}function eg(t,e){t.info(function(){return"TIMEOUT: "+e})}Li.prototype.info=function(){};function tg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Bo(n)}catch{return e}}var tn={},oc=null;function xi(){return oc=oc||new me}tn.Pa="serverreachability";function tu(t){De.call(this,tn.Pa,t)}Ee(tu,De);function fs(t){const e=xi();we(e,new tu(e))}tn.STAT_EVENT="statevent";function nu(t,e){De.call(this,tn.STAT_EVENT,t),this.stat=e}Ee(nu,De);function xe(t){const e=xi();we(e,new nu(e,t))}tn.Qa="timingevent";function su(t,e){De.call(this,tn.Qa,t),this.size=e}Ee(su,De);function As(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return O.setTimeout(function(){t()},e)}var Mi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},iu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function $o(){}$o.prototype.h=null;function ac(t){return t.h||(t.h=t.i())}function ru(){}var ks={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function jo(){De.call(this,"d")}Ee(jo,De);function qo(){De.call(this,"c")}Ee(qo,De);var zr;function Fi(){}Ee(Fi,$o);Fi.prototype.g=function(){return new XMLHttpRequest};Fi.prototype.i=function(){return{}};zr=new Fi;function Ds(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ds(this),this.O=ng,t=Vr?125:void 0,this.T=new Ri(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ou}function ou(){this.i=null,this.g="",this.h=!1}var ng=45e3,Kr={},fi={};I=Ds.prototype;I.setTimeout=function(t){this.O=t};function Gr(t,e,n){t.K=1,t.v=Vi(vt(e)),t.s=n,t.P=!0,au(t,null)}function au(t,e){t.F=Date.now(),Ns(t),t.A=vt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),gu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ou,t.g=Mu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Xp(ke(t.La,t,t.g),t.N)),Zl(t.S,t.g,"readystatechange",t.ib),e=t.H?jl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fs(),Jp(t.j,t.u,t.A,t.m,t.U,t.s)}I.ib=function(t){t=t.target;const e=this.L;e&&mt(t)==3?e.l():this.La(t)};I.La=function(t){try{if(t==this.g)e:{const u=mt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Vr||this.g&&(this.h.h||this.g.fa()||hc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?fs(3):fs(2)),Bi(this);var n=this.g.aa();this.Y=n;t:if(cu(this)){var s=hc(this.g);t="";var i=s.length,r=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),Zn(this);var o="";break t}this.h.i=new O.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Zp(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hi(a)){var l=a;break t}}l=null}if(n=l)hn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wr(this,n);else{this.i=!1,this.o=3,xe(12),jt(this),Zn(this);break e}}this.P?(lu(this,u,o),Vr&&this.i&&u==3&&(Zl(this.S,this.T,"tick",this.hb),this.T.start())):(hn(this.j,this.m,o,null),Wr(this,o)),u==4&&jt(this),this.i&&!this.I&&(u==4?Ou(this.l,this):(this.i=!1,Ns(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xe(12)):(this.o=0,xe(13)),jt(this),Zn(this)}}}catch{}finally{}};function cu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function lu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=sg(t,n),i==fi){e==4&&(t.o=4,xe(14),s=!1),hn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Kr){t.o=4,xe(15),hn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else hn(t.j,t.m,i,null),Wr(t,i);cu(t)&&i!=fi&&i!=Kr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yo(e),e.K=!0,xe(11))):(hn(t.j,t.m,n,"[Invalid Chunked Response]"),jt(t),Zn(t))}I.hb=function(){if(this.g){var t=mt(this.g),e=this.g.fa();this.C<e.length&&(Bi(this),lu(this,t,e),this.i&&t!=4&&Ns(this))}};function sg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?fi:(n=Number(e.substring(n,s)),isNaN(n)?Kr:(s+=1,s+n>e.length?fi:(e=e.substr(s,n),t.C=s+n,e)))}I.cancel=function(){this.I=!0,jt(this)};function Ns(t){t.V=Date.now()+t.O,uu(t,t.O)}function uu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=As(ke(t.gb,t),e)}function Bi(t){t.B&&(O.clearTimeout(t.B),t.B=null)}I.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(eg(this.j,this.A),this.K!=2&&(fs(),xe(17)),jt(this),this.o=2,Zn(this)):uu(this,this.V-t)};function Zn(t){t.l.G==0||t.I||Ou(t.l,t)}function jt(t){Bi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Vo(t.T),eu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Wr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qr(n.h,t))){if(!t.J&&Qr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)mi(n),ji(n);else break e;Qo(n),xe(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=As(ke(n.cb,n),6e3));if(1>=vu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else qt(n,11)}else if((t.J||n.g==t)&&mi(n),!hi(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ho(r,r.h),r.h=null))}if(s.D){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,re(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=xu(s,s.H?s.ka:null,s.V),o.J){wu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Bi(a),Ns(a)),s.g=o}else Nu(s);0<n.i.length&&qi(n)}else l[0]!="stop"&&l[0]!="close"||qt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qt(n,7):Wo(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}fs(4)}catch{}}function ig(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Di(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function rg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Di(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function hu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Di(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rg(t),s=ig(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function og(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zt){this.h=e!==void 0?e:t.h,pi(this,t.j),this.s=t.s,this.g=t.g,gi(this,t.m),this.l=t.l,e=t.i;var n=new ps;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cc(this,n),this.o=t.o}else t&&(n=String(t).match(du))?(this.h=!!e,pi(this,n[1]||"",!0),this.s=Wn(n[2]||""),this.g=Wn(n[3]||"",!0),gi(this,n[4]),this.l=Wn(n[5]||"",!0),cc(this,n[6]||"",!0),this.o=Wn(n[7]||"")):(this.h=!!e,this.i=new ps(null,this.h))}zt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qn(e,lc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qn(e,lc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qn(n,n.charAt(0)=="/"?lg:cg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qn(n,hg)),t.join("")};function vt(t){return new zt(t)}function pi(t,e,n){t.j=n?Wn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cc(t,e,n){e instanceof ps?(t.i=e,dg(t.i,t.h)):(n||(e=Qn(e,ug)),t.i=new ps(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Vi(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ag),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ag(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lc=/[#\/\?@]/g,cg=/[#\?:]/g,lg=/[#\?]/g,ug=/[#\?@]/g,hg=/#/g;function ps(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xt(t){t.g||(t.g=new Map,t.h=0,t.i&&og(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}I=ps.prototype;I.add=function(t,e){xt(this),this.i=null,t=Fn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fu(t,e){xt(t),e=Fn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pu(t,e){return xt(t),e=Fn(t,e),t.g.has(e)}I.forEach=function(t,e){xt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};I.oa=function(){xt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};I.W=function(t){xt(this);let e=[];if(typeof t=="string")pu(this,t)&&(e=e.concat(this.g.get(Fn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};I.set=function(t,e){return xt(this),this.i=null,t=Fn(this,t),pu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};I.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function gu(t,e,n){fu(t,e),0<n.length&&(t.i=null,t.g.set(Fn(t,e),Po(n)),t.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Fn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dg(t,e){e&&!t.j&&(xt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(fu(this,s),gu(this,i,n))},t)),t.j=e}var fg=class{constructor(e,n){this.h=e,this.g=n}};function mu(t){this.l=t||pg,O.PerformanceNavigationTiming?(t=O.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(O.g&&O.g.Ga&&O.g.Ga()&&O.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pg=10;function yu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vu(t){return t.h?1:t.g?t.g.size:0}function Qr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ho(t,e){t.g?t.g.add(e):t.h=e}function wu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mu.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Po(t.i)}function zo(){}zo.prototype.stringify=function(t){return O.JSON.stringify(t,void 0)};zo.prototype.parse=function(t){return O.JSON.parse(t,void 0)};function gg(){this.g=new zo}function mg(t,e,n){const s=n||"";try{hu(t,function(i,r){let o=i;Is(i)&&(o=Bo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function yg(t,e){const n=new Li;if(O.Image){const s=new Image;s.onload=Ws(Ys,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ws(Ys,n,s,"TestLoadImage: error",!1,e),s.onabort=Ws(Ys,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ws(Ys,n,s,"TestLoadImage: timeout",!1,e),O.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ys(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ps(t){this.l=t.ac||null,this.j=t.jb||!1}Ee(Ps,$o);Ps.prototype.g=function(){return new Ui(this.l,this.j)};Ps.prototype.i=function(t){return function(){return t}}({});function Ui(t,e){me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ko,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ee(Ui,me);var Ko=0;I=Ui.prototype;I.open=function(t,e){if(this.readyState!=Ko)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,gs(this)};I.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||O).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Os(this)),this.readyState=Ko};I.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof O.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Eu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}I.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Os(this):gs(this),this.readyState==3&&Eu(this)}};I.Va=function(t){this.g&&(this.response=this.responseText=t,Os(this))};I.Ua=function(t){this.g&&(this.response=t,Os(this))};I.ga=function(){this.g&&Os(this)};function Os(t){t.readyState=4,t.l=null,t.j=null,t.A=null,gs(t)}I.setRequestHeader=function(t,e){this.v.append(t,e)};I.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function gs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vg=O.JSON.parse;function ce(t){me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tu,this.K=this.L=!1}Ee(ce,me);var Tu="",wg=/^https?$/i,bg=["POST","PUT"];I=ce.prototype;I.Ka=function(t){this.L=t};I.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zr.g(),this.C=this.u?ac(this.u):ac(zr),this.g.onreadystatechange=ke(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){uc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=O.FormData&&t instanceof O.FormData,!(0<=Bl(bg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Iu(this),0<this.B&&((this.K=Eg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.qa,this)):this.A=Uo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){uc(this,r)}};function Eg(t){return In&&Bp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}I.qa=function(){typeof No<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))};function uc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_u(t),$i(t)}function _u(t){t.D||(t.D=!0,we(t,"complete"),we(t,"error"))}I.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,we(this,"complete"),we(this,"abort"),$i(this))};I.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$i(this,!0)),ce.X.M.call(this)};I.Ha=function(){this.s||(this.F||this.v||this.l?Cu(this):this.fb())};I.fb=function(){Cu(this)};function Cu(t){if(t.h&&typeof No<"u"&&(!t.C[1]||mt(t)!=4||t.aa()!=2)){if(t.v&&mt(t)==4)Uo(t.Ha,0,t);else if(we(t,"readystatechange"),mt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(du)[1]||null;if(!i&&O.self&&O.self.location){var r=O.self.location.protocol;i=r.substr(0,r.length-1)}s=!wg.test(i?i.toLowerCase():"")}n=s}if(n)we(t,"complete"),we(t,"success");else{t.m=6;try{var o=2<mt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",_u(t)}}finally{$i(t)}}}}function $i(t,e){if(t.g){Iu(t);const n=t.g,s=t.C[0]?ui:null;t.g=null,t.C=null,e||we(t,"ready");try{n.onreadystatechange=s}catch{}}}function Iu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(O.clearTimeout(t.A),t.A=null)}function mt(t){return t.g?t.g.readyState:0}I.aa=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};I.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vg(e)}};function hc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Tu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}I.Ea=function(){return this.m};I.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Su(t){let e="";return Ro(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Go(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Su(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Au(t){this.Ca=0,this.i=[],this.j=new Li,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,t),this.bb=Gn("retryDelaySeedMs",1e4,t),this.$a=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mu(t&&t.concurrentRequestLimit),this.Fa=new gg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}I=Au.prototype;I.ma=8;I.G=1;function Wo(t){if(ku(t),t.G==3){var e=t.U++,n=vt(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),Rs(t,n),e=new Ds(t,t.j,e,void 0),e.K=2,e.v=Vi(vt(n)),n=!1,O.navigator&&O.navigator.sendBeacon&&(n=O.navigator.sendBeacon(e.v.toString(),"")),!n&&O.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ns(e)}Lu(t)}function ji(t){t.g&&(Yo(t),t.g.cancel(),t.g=null)}function ku(t){ji(t),t.u&&(O.clearTimeout(t.u),t.u=null),mi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&O.clearTimeout(t.m),t.m=null)}function qi(t){yu(t.h)||t.m||(t.m=!0,Yl(t.Ja,t),t.C=0)}function Tg(t,e){return vu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=As(ke(t.Ja,t,e),Ru(t,t.C)),t.C++,!0)}I.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ds(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=jl(r),ql(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Du(this,i,e),n=vt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),Rs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Su(r)))+"&"+e:this.o&&Go(n,this.o,r)),Ho(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,Gr(i,n,null)):Gr(i,n,e),this.G=2}}else this.G==3&&(t?dc(this,t):this.i.length==0||yu(this.h)||dc(this))};function dc(t,e){var n;e?n=e.m:n=t.U++;const s=vt(t.F);re(s,"SID",t.I),re(s,"RID",n),re(s,"AID",t.T),Rs(t,s),t.o&&t.s&&Go(s,t.o,t.s),n=new Ds(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Du(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ho(t.h,n),Gr(n,s,e)}function Rs(t,e){t.ia&&Ro(t.ia,function(n,s){re(e,s,n)}),t.l&&hu({},function(n,s){re(e,s,n)})}function Du(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ke(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{mg(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Nu(t){t.g||t.u||(t.Z=1,Yl(t.Ia,t),t.A=0)}function Qo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=As(ke(t.Ia,t),Ru(t,t.A)),t.A++,!0)}I.Ia=function(){if(this.u=null,Pu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=As(ke(this.eb,this),t)}};I.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,xe(10),ji(this),Pu(this))};function Yo(t){t.B!=null&&(O.clearTimeout(t.B),t.B=null)}function Pu(t){t.g=new Ds(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=vt(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),Rs(t,e),t.o&&t.s&&Go(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vi(vt(e)),n.s=null,n.P=!0,au(n,t)}I.cb=function(){this.v!=null&&(this.v=null,ji(this),Qo(this),xe(19))};function mi(t){t.v!=null&&(O.clearTimeout(t.v),t.v=null)}function Ou(t,e){var n=null;if(t.g==e){mi(t),Yo(t),t.g=null;var s=2}else if(Qr(t.h,e))n=e.D,wu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=xi(),we(s,new su(s,n)),qi(t)}else Nu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Tg(t,e)||s==2&&Qo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:qt(t,5);break;case 4:qt(t,10);break;case 3:qt(t,6);break;default:qt(t,2)}}}function Ru(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ke(t.kb,t);n||(n=new zt("//www.google.com/images/cleardot.gif"),O.location&&O.location.protocol=="http"||pi(n,"https"),Vi(n)),yg(n.toString(),s)}else xe(2);t.G=0,t.l&&t.l.va(e),Lu(t),ku(t)}I.kb=function(t){t?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Lu(t){if(t.G=0,t.la=[],t.l){const e=bu(t.h);(e.length!=0||t.i.length!=0)&&(tc(t.la,e),tc(t.la,t.i),t.h.i.length=0,Po(t.i),t.i.length=0),t.l.ua()}}function xu(t,e,n){var s=n instanceof zt?vt(n):new zt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),gi(s,s.m);else{var i=O.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new zt(null,void 0);s&&pi(r,s),e&&(r.g=e),i&&gi(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&re(s,n,e),re(s,"VER",t.ma),Rs(t,s),s}function Mu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new Ps({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function Fu(){}I=Fu.prototype;I.xa=function(){};I.wa=function(){};I.va=function(){};I.ua=function(){};I.Ra=function(){};function yi(){if(In&&!(10<=Number(Vp)))throw Error("Environmental error: no available transport.")}yi.prototype.g=function(t,e){return new Ge(t,e)};function Ge(t,e){me.call(this),this.g=new Au(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!hi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bn(this)}Ee(Ge,me);Ge.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;xe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=xu(t,null,t.V),qi(t)};Ge.prototype.close=function(){Wo(this.g)};Ge.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bo(t),t=n);e.i.push(new fg(e.ab++,t)),e.G==3&&qi(e)};Ge.prototype.M=function(){this.g.l=null,delete this.j,Wo(this.g),delete this.g,Ge.X.M.call(this)};function Bu(t){jo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ee(Bu,jo);function Vu(){qo.call(this),this.status=1}Ee(Vu,qo);function Bn(t){this.g=t}Ee(Bn,Fu);Bn.prototype.xa=function(){we(this.g,"a")};Bn.prototype.wa=function(t){we(this.g,new Bu(t))};Bn.prototype.va=function(t){we(this.g,new Vu)};Bn.prototype.ua=function(){we(this.g,"b")};yi.prototype.createWebChannel=yi.prototype.g;Ge.prototype.send=Ge.prototype.u;Ge.prototype.open=Ge.prototype.m;Ge.prototype.close=Ge.prototype.close;Mi.NO_ERROR=0;Mi.TIMEOUT=8;Mi.HTTP_ERROR=6;iu.COMPLETE="complete";ru.EventType=ks;ks.OPEN="a";ks.CLOSE="b";ks.ERROR="c";ks.MESSAGE="d";me.prototype.listen=me.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var _g=function(){return new yi},Cg=function(){return xi()},Ir=Mi,Ig=iu,Sg=tn,fc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ag=Ps,Xs=ru,kg=ce;const pc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Dl("@firebase/firestore");function gc(){return Wt.logLevel}function k(t,...e){if(Wt.logLevel<=Q.DEBUG){const n=e.map(Xo);Wt.debug(`Firestore (${Vn}): ${t}`,...n)}}function wt(t,...e){if(Wt.logLevel<=Q.ERROR){const n=e.map(Xo);Wt.error(`Firestore (${Vn}): ${t}`,...n)}}function Yr(t,...e){if(Wt.logLevel<=Q.WARN){const n=e.map(Xo);Wt.warn(`Firestore (${Vn}): ${t}`,...n)}}function Xo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function P(t="Unexpected state"){const e=`FIRESTORE (${Vn}) INTERNAL ASSERTION FAILED: `+t;throw wt(e),new Error(e)}function ee(t,e){t||P()}function M(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_e.UNAUTHENTICATED))}shutdown(){}}class Ng{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Pg{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ee(typeof s.accessToken=="string"),new Uu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new _e(e)}}class Og{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ee(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Rg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Og(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.A=n.token,new Lg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Mg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Y(t,e){return t<e?-1:t>e?1:0}function Sn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new de(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.timestamp=e}static fromTimestamp(e){return new R(e)}static min(){return new R(new de(0,0))}static max(){return new R(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,s){n===void 0?n=0:n>e.length&&P(),s===void 0?s=e.length-n:s>e.length-n&&P(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ms.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ms?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends ms{construct(e,n,s){return new ne(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new _(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const Fg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends ms{construct(e,n,s){return new Ie(e,n,s)}static isValidIdentifier(e){return Fg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new _(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new _(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(n)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(ne.fromString(e))}static fromName(e){return new D(ne.fromString(e).popFirst(5))}static empty(){return new D(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new ne(e.slice()))}}function Bg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=R.fromTimestamp(s===1e9?new de(n+1,0):new de(n,s));return new Nt(i,D.empty(),e)}function Vg(t){return new Nt(t.readTime,t.key,-1)}class Nt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Nt(R.min(),D.empty(),-1)}static max(){return new Nt(R.max(),D.empty(),-1)}}function Ug(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==$g)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&P(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function xs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Jo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ys{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ys("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ys&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return t==null}function vi(t){return t===0&&1/t==-1/0}function Hg(t){return typeof t=="number"&&Number.isInteger(t)&&!vi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class zg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new zg("Invalid base64 string: "+i):i}}(e);return new Ne(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ne(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const Kg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(t){if(ee(!!t),typeof t=="string"){let e=0;const n=Kg.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function An(t){return typeof t=="string"?Ne.fromBase64String(t):Ne.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hu(t){const e=t.mapValue.fields.__previous_value__;return qu(e)?Hu(e):e}function vs(t){const e=Pt(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qu(t)?4:Gg(t)?9007199254740991:10:P()}function lt(t,e){if(t===e)return!0;const n=Qt(t);if(n!==Qt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vs(t).isEqual(vs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Pt(s.timestampValue),o=Pt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return An(s.bytesValue).isEqual(An(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ue(s.doubleValue),o=ue(i.doubleValue);return r===o?vi(r)===vi(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Sn(t.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(mc(r)!==mc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!lt(r[a],o[a])))return!1;return!0}(t,e);default:return P()}}function ws(t,e){return(t.values||[]).find(n=>lt(n,e))!==void 0}function kn(t,e){if(t===e)return 0;const n=Qt(t),s=Qt(e);if(n!==s)return Y(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ue(i.integerValue||i.doubleValue),a=ue(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return yc(t.timestampValue,e.timestampValue);case 4:return yc(vs(t),vs(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,r){const o=An(i),a=An(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Y(o[c],a[c]);if(l!==0)return l}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Y(ue(i.latitude),ue(r.latitude));return o!==0?o:Y(ue(i.longitude),ue(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=kn(o[c],a[c]);if(l)return l}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Js.mapValue&&r===Js.mapValue)return 0;if(i===Js.mapValue)return 1;if(r===Js.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=Y(a[u],l[u]);if(h!==0)return h;const d=kn(o[a[u]],c[l[u]]);if(d!==0)return d}return Y(a.length,l.length)}(t.mapValue,e.mapValue);default:throw P()}}function yc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Pt(t),s=Pt(e),i=Y(n.seconds,s.seconds);return i!==0?i:Y(n.nanos,s.nanos)}function Dn(t){return Xr(t)}function Xr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Pt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?An(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Xr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Xr(s.fields[a])}`;return r+"}"}(t.mapValue):P();var e,n}function vc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jr(t){return!!t&&"integerValue"in t}function Zo(t){return!!t&&"arrayValue"in t}function wc(t){return!!t&&"nullValue"in t}function bc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function si(t){return!!t&&"mapValue"in t}function es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=es(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wi{constructor(e,n){this.position=e,this.inclusive=n}}function Ec(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=D.comparator(D.fromName(o.referenceValue),n.key):s=kn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zu{}class he extends zu{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Qg(e,n,s):n==="array-contains"?new Jg(e,s):n==="in"?new Zg(e,s):n==="not-in"?new em(e,s):n==="array-contains-any"?new tm(e,s):new he(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Yg(e,s):new Xg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(kn(n,this.value)):n!==null&&Qt(this.value)===Qt(n)&&this.matchesComparison(kn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return P()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class st extends zu{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new st(e,n)}matches(e){return Ku(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ku(t){return t.op==="and"}function Gu(t){return Wg(t)&&Ku(t)}function Wg(t){for(const e of t.filters)if(e instanceof st)return!1;return!0}function Zr(t){if(t instanceof he)return t.field.canonicalString()+t.op.toString()+Dn(t.value);if(Gu(t))return t.filters.map(e=>Zr(e)).join(",");{const e=t.filters.map(n=>Zr(n)).join(",");return`${t.op}(${e})`}}function Wu(t,e){return t instanceof he?function(n,s){return s instanceof he&&n.op===s.op&&n.field.isEqual(s.field)&&lt(n.value,s.value)}(t,e):t instanceof st?function(n,s){return s instanceof st&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Wu(r,s.filters[o]),!0):!1}(t,e):void P()}function Qu(t){return t instanceof he?function(e){return`${e.field.canonicalString()} ${e.op} ${Dn(e.value)}`}(t):t instanceof st?function(e){return e.op.toString()+" {"+e.getFilters().map(Qu).join(" ,")+"}"}(t):"Filter"}class Qg extends he{constructor(e,n,s){super(e,n,s),this.key=D.fromName(s.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yg extends he{constructor(e,n){super(e,"in",n),this.keys=Yu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Xg extends he{constructor(e,n){super(e,"not-in",n),this.keys=Yu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Yu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>D.fromName(s.referenceValue))}class Jg extends he{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zo(n)&&ws(n.arrayValue,this.value)}}class Zg extends he{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ws(this.value.arrayValue,n)}}class em extends he{constructor(e,n){super(e,"not-in",n)}matches(e){if(ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ws(this.value.arrayValue,n)}}class tm extends he{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ws(this.value.arrayValue,s))}}/**
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
 */class fn{constructor(e,n="asc"){this.field=e,this.dir=n}}function nm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.comparator=e,this.root=n||ve.EMPTY}insert(e,n){return new pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??ve.EMPTY,this.right=r??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw P();const e=this.left.check();if(e!==this.right.check())throw P();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw P()}get value(){throw P()}get color(){throw P()}get left(){throw P()}get right(){throw P()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _c(this.data.getIterator())}getIteratorFrom(e){return new _c(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fe(this.comparator);return n.data=e,n}}class _c{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new ze([])}unionWith(e){let n=new fe(Ie.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ze(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Sn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!si(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=es(n)}setAll(e){let n=Ie.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=es(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());si(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];si(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){nn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Be(es(this.value))}}function Xu(t){const e=[];return nn(t.fields,(n,s)=>{const i=new Ie([n]);if(si(s)){const r=Xu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,R.min(),R.min(),R.min(),Be.empty(),0)}static newFoundDocument(e,n,s,i){return new Ce(e,1,n,R.min(),s,i,0)}static newNoDocument(e,n){return new Ce(e,2,n,R.min(),R.min(),Be.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,R.min(),R.min(),Be.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Cc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new sm(t,e,n,s,i,r,o)}function ea(t){const e=M(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Zr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Hi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Dn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Dn(s)).join(",")),e._t=n}return e._t}function ta(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tc(t.startAt,e.startAt)&&Tc(t.endAt,e.endAt)}function eo(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function im(t,e,n,s,i,r,o,a){return new Un(t,e,n,s,i,r,o,a)}function na(t){return new Un(t)}function Ic(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sa(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ju(t){return t.collectionGroup!==null}function pn(t){const e=M(t);if(e.wt===null){e.wt=[];const n=zi(e),s=sa(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new fn(n)),e.wt.push(new fn(Ie.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new fn(Ie.keyField(),r))}}}return e.wt}function bt(t){const e=M(t);if(!e.gt)if(e.limitType==="F")e.gt=Cc(e.path,e.collectionGroup,pn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of pn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new fn(r.field,o))}const s=e.endAt?new wi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wi(e.startAt.position,e.startAt.inclusive):null;e.gt=Cc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function to(t,e){e.getFirstInequalityField(),zi(t);const n=t.filters.concat([e]);return new Un(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function no(t,e,n){return new Un(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ki(t,e){return ta(bt(t),bt(e))&&t.limitType===e.limitType}function Zu(t){return`${ea(bt(t))}|lt:${t.limitType}`}function so(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Qu(s)).join(", ")}]`),Hi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Dn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Dn(s)).join(",")),`Target(${n})`}(bt(t))}; limitType=${t.limitType})`}function Gi(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of pn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ec(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,pn(n),s)||n.endAt&&!function(i,r,o){const a=Ec(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,pn(n),s))}(t,e)}function rm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eh(t){return(e,n)=>{let s=!1;for(const i of pn(t)){const r=om(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function om(t,e,n){const s=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?kn(a,c):P()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return P()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vi(e)?"-0":e}}function nh(t){return{integerValue:""+t}}function am(t,e){return Hg(e)?nh(e):th(t,e)}/**
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
 */class Wi{constructor(){this._=void 0}}function cm(t,e,n){return t instanceof bi?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof bs?ih(t,e):t instanceof Es?rh(t,e):function(s,i){const r=sh(s,i),o=Sc(r)+Sc(s.It);return Jr(r)&&Jr(s.It)?nh(o):th(s.Tt,o)}(t,e)}function lm(t,e,n){return t instanceof bs?ih(t,e):t instanceof Es?rh(t,e):n}function sh(t,e){return t instanceof Ei?Jr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class bi extends Wi{}class bs extends Wi{constructor(e){super(),this.elements=e}}function ih(t,e){const n=oh(e);for(const s of t.elements)n.some(i=>lt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Es extends Wi{constructor(e){super(),this.elements=e}}function rh(t,e){let n=oh(e);for(const s of t.elements)n=n.filter(i=>!lt(i,s));return{arrayValue:{values:n}}}class Ei extends Wi{constructor(e,n){super(),this.Tt=e,this.It=n}}function Sc(t){return ue(t.integerValue||t.doubleValue)}function oh(t){return Zo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function um(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof bs&&s instanceof bs||n instanceof Es&&s instanceof Es?Sn(n.elements,s.elements,lt):n instanceof Ei&&s instanceof Ei?lt(n.It,s.It):n instanceof bi&&s instanceof bi}(t.transform,e.transform)}class hm{constructor(e,n){this.version=e,this.transformResults=n}}class tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ii(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qi{}function ah(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ia(t.key,tt.none()):new Ms(t.key,t.data,tt.none());{const n=t.data,s=Be.empty();let i=new fe(Ie.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Mt(t.key,s,new ze(i.toArray()),tt.none())}}function dm(t,e,n){t instanceof Ms?function(s,i,r){const o=s.value.clone(),a=kc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Mt?function(s,i,r){if(!ii(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=kc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ch(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ts(t,e,n,s){return t instanceof Ms?function(i,r,o,a){if(!ii(i.precondition,r))return o;const c=i.value.clone(),l=Dc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Mt?function(i,r,o,a){if(!ii(i.precondition,r))return o;const c=Dc(i.fieldTransforms,a,r),l=r.data;return l.setAll(ch(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ii(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function fm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=sh(s.transform,i||null);r!=null&&(n===null&&(n=Be.empty()),n.set(s.field,r))}return n||null}function Ac(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Sn(n,s,(i,r)=>um(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ms extends Qi{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mt extends Qi{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ch(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function kc(t,e,n){const s=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,lm(o,a,n[i]))}return s}function Dc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,cm(r,o,e))}return s}class ia extends Qi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pm extends Qi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,H;function mm(t){switch(t){default:return P();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function lh(t){if(t===void 0)return wt("GRPC error has no .code"),y.UNKNOWN;switch(t){case le.OK:return y.OK;case le.CANCELLED:return y.CANCELLED;case le.UNKNOWN:return y.UNKNOWN;case le.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case le.INTERNAL:return y.INTERNAL;case le.UNAVAILABLE:return y.UNAVAILABLE;case le.UNAUTHENTICATED:return y.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case le.NOT_FOUND:return y.NOT_FOUND;case le.ALREADY_EXISTS:return y.ALREADY_EXISTS;case le.PERMISSION_DENIED:return y.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case le.ABORTED:return y.ABORTED;case le.OUT_OF_RANGE:return y.OUT_OF_RANGE;case le.UNIMPLEMENTED:return y.UNIMPLEMENTED;case le.DATA_LOSS:return y.DATA_LOSS;default:return P()}}(H=le||(le={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){nn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ju(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=new pe(D.comparator);function Et(){return ym}const uh=new pe(D.comparator);function Yn(...t){let e=uh;for(const n of t)e=e.insert(n.key,n);return e}function hh(t){let e=uh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ht(){return ns()}function dh(){return ns()}function ns(){return new $n(t=>t.toString(),(t,e)=>t.isEqual(e))}const vm=new pe(D.comparator),wm=new fe(D.comparator);function j(...t){let e=wm;for(const n of t)e=e.add(n);return e}const bm=new fe(Y);function fh(){return bm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Fs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Yi(R.min(),i,fh(),Et(),j())}}class Fs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Fs(s,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class ph{constructor(e,n){this.targetId=e,this.Rt=n}}class gh{constructor(e,n,s=Ne.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Nc{constructor(){this.bt=0,this.vt=Oc(),this.Pt=Ne.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=j(),n=j(),s=j();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:P()}}),new Fs(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Oc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Em{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Et(),this.Kt=Pc(),this.Gt=new fe(Y)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:P()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(eo(r))if(s===0){const o=new D(r.path);this.zt(n,o,Ce.newNoDocument(o,R.min()))}else ee(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&eo(a.target)){const c=new D(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Ce.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=j();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Yi(e,n,this.Gt,this.Ut,s);return this.Ut=Et(),this.Kt=Pc(),this.Gt=new fe(Y),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Nc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new fe(Y),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Nc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Pc(){return new pe(D.comparator)}function Oc(){return new pe(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_m=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Cm=(()=>({and:"AND",or:"OR"}))();class Im{constructor(e,n){this.databaseId=e,this.yt=n}}function Ti(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Sm(t,e){return Ti(t,e.toTimestamp())}function at(t){return ee(!!t),R.fromTimestamp(function(e){const n=Pt(e);return new de(n.seconds,n.nanos)}(t))}function ra(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function yh(t){const e=ne.fromString(t);return ee(Eh(e)),e}function io(t,e){return ra(t.databaseId,e.path)}function Sr(t,e){const n=yh(e);if(n.get(1)!==t.databaseId.projectId)throw new _(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(vh(n))}function ro(t,e){return ra(t.databaseId,e)}function Am(t){const e=yh(t);return e.length===4?ne.emptyPath():vh(e)}function oo(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vh(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rc(t,e,n){return{name:io(t,e),fields:n.value.mapValue.fields}}function km(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:P()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(ee(l===void 0||typeof l=="string"),Ne.fromBase64String(l||"")):(ee(l===void 0||l instanceof Uint8Array),Ne.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:lh(c.code);return new _(l,c.message||"")}(o);n=new gh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Sr(t,s.document.name),r=at(s.document.updateTime),o=s.document.createTime?at(s.document.createTime):R.min(),a=new Be({mapValue:{fields:s.document.fields}}),c=Ce.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new ri(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Sr(t,s.document),r=s.readTime?at(s.readTime):R.min(),o=Ce.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ri([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Sr(t,s.document),r=s.removedTargetIds||[];n=new ri([],r,i,null)}else{if(!("filter"in e))return P();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new gm(i),o=s.targetId;n=new ph(o,r)}}return n}function Dm(t,e){let n;if(e instanceof Ms)n={update:Rc(t,e.key,e.value)};else if(e instanceof ia)n={delete:io(t,e.key)};else if(e instanceof Mt)n={update:Rc(t,e.key,e.data),updateMask:Bm(e.fieldMask)};else{if(!(e instanceof pm))return P();n={verify:io(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof bi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Es)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ei)return{fieldPath:r.field.canonicalString(),increment:o.It};throw P()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:P()}(t,e.precondition)),n}function Nm(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?at(s.updateTime):at(i);return r.isEqual(R.min())&&(r=at(i)),new hm(r,s.transformResults||[])}(n,e))):[]}function Pm(t,e){return{documents:[ro(t,e.path)]}}function Om(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ro(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ro(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return bh(st.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ln(u.field),direction:xm(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||Hi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Rm(t){let e=Am(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ee(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=wh(u);return h instanceof st&&Gu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new fn(un(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Hi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new wi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new wi(d,h)}(n.endAt)),im(e,i,o,r,a,"F",c,l)}function Lm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return P()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function wh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=un(e.unaryFilter.field);return he.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=un(e.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=un(e.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=un(e.unaryFilter.field);return he.create(r,"!=",{nullValue:"NULL_VALUE"});default:return P()}}(t):t.fieldFilter!==void 0?function(e){return he.create(un(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return P()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return st.create(e.compositeFilter.filters.map(n=>wh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return P()}}(e.compositeFilter.op))}(t):P()}function xm(t){return Tm[t]}function Mm(t){return _m[t]}function Fm(t){return Cm[t]}function ln(t){return{fieldPath:t.canonicalString()}}function un(t){return Ie.fromServerFormat(t.fieldPath)}function bh(t){return t instanceof he?function(e){if(e.op==="=="){if(bc(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NAN"}};if(wc(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(bc(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NAN"}};if(wc(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(e.field),op:Mm(e.op),value:e.value}}}(t):t instanceof st?function(e){const n=e.getFilters().map(s=>bh(s));return n.length===1?n[0]:{compositeFilter:{op:Fm(e.op),filters:n}}}(t):P()}function Bm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Eh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&dm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ts(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ts(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=dh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=ah(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&Sn(this.mutations,e.mutations,(n,s)=>Ac(n,s))&&Sn(this.baseMutations,e.baseMutations,(n,s)=>Ac(n,s))}}class oa{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ee(e.mutations.length===s.length);let i=vm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new oa(e,n,s,i)}}/**
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
 */class Um{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kt{constructor(e,n,s,i,r=R.min(),o=R.min(),a=Ne.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.oe=e}}function jm(t){const e=Rm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?no(e,e.limit,"L"):e}/**
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
 */class qm{constructor(){this.Ze=new Hm}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Nt.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Nt.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Hm{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new fe(ne.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new fe(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Nn(0)}static Sn(){return new Nn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.changes=new $n(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Km{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ts(s.mutation,i,ze.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,j()).next(()=>s))}getLocalViewOfDocuments(e,n,s=j()){const i=Ht();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Yn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ht();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,j()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Et();const o=ns(),a=ns();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Mt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ts(u.mutation,l,u.mutation.getFieldMask(),de.now())):o.set(l.key,ze.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Km(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ns();let i=new pe((o,a)=>o-a),r=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ze.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||j()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=dh();u.forEach(d=>{if(!r.has(d)){const p=ah(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ju(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(Ht());let a=-1,c=r;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,j())).next(u=>({batchId:a,changes:hh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(s=>{let i=Yn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Yn();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Un(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ce.newInvalidDocument(l)))});let o=Yn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ts(l.mutation,c,ze.empty(),de.now()),Gi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:at(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:jm(s.bundledQuery),readTime:at(s.readTime)}}(n)),b.resolve()}}/**
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
 */class Qm{constructor(){this.overlays=new pe(D.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ht();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=Ht(),r=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Ht(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ht(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Um(n,s));let r=this.ss.get(n);r===void 0&&(r=j(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.rs=new fe(ge.os),this.us=new fe(ge.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new ge(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new ge(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new D(new ne([])),s=new ge(n,e),i=new ge(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new D(new ne([])),s=new ge(n,e),i=new ge(n,e+1);let r=j();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ge(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ge{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return D.comparator(e.key,n.key)||Y(e.gs,n.gs)}static cs(e,n){return Y(e.gs,n.gs)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new fe(ge.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vm(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new ge(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ge(n,0),i=new ge(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new fe(Y);return n.forEach(i=>{const r=new ge(i,0),o=new ge(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;D.isDocumentKey(r)||(r=r.child(""));const o=new ge(new D(r),0);let a=new fe(Y);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,i=>{const r=new ge(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new ge(n,0),i=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.Rs=e,this.docs=new pe(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let s=Et();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ce.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Et();const o=n.path,a=new D(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Ug(Vg(u),s)<=0||(i.has(u.key)||Gi(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){P()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Jm(this)}getSize(e){return b.resolve(this.size)}}class Jm extends zm{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.persistence=e,this.vs=new $n(n=>ea(n),ta),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new aa,this.targetCount=0,this.Ss=Nn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Nn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Jo(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Zm(this),this.indexManager=new qm,this.remoteDocumentCache=function(s){return new Xm(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new $m(n),this.Os=new Wm(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Ym(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const i=new ty(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class ty extends jg{constructor(e){super(),this.currentSequenceNumber=e}}class ca{constructor(e){this.persistence=e,this.Bs=new aa,this.Ls=null}static qs(e){return new ca(e)}get Us(){if(this.Ls)return this.Ls;throw P()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const i=D.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,R.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=j(),i=j();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new la(e,n.fromCache,s,i)}}/**
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
 */class ny{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Ic(n))return b.resolve(null);let s=bt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=no(n,null,"F"),s=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=j(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,no(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return Ic(n)||i.isEqual(R.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(gc()<=Q.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),so(n)),this.qi(e,o,n,Bg(i,-1)))})}Bi(e,n){let s=new fe(eh(e));return n.forEach((i,r)=>{Gi(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return gc()<=Q.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",so(n)),this.Oi.getDocumentsMatchingQuery(e,n,Nt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new pe(Y),this.Gi=new $n(r=>ea(r),ta),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gm(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function iy(t,e,n,s){return new sy(t,e,n,s)}async function Th(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=j();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function ry(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const E=c.docVersions.get(p);ee(E!==null),m.version.compareTo(E)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=j();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function _h(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function oy(t,e){const n=M(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ne.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,E,v){return m.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=Et(),l=j();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ay(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(R.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function ay(t,e,n){let s=j(),i=j();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Et();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function cy(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ly(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Kt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function ao(t,e,n){const s=M(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xs(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Lc(t,e,n){const s=M(t);let i=R.min(),r=j();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=M(a),h=u.Gi.get(l);return h!==void 0?b.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:R.min(),n?r:j())).next(a=>(uy(s,rm(e),a),{documents:a,Yi:r})))}function uy(t,e,n){let s=t.Qi.get(e)||R.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class xc{constructor(){this.activeTargetIds=fh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hy{constructor(){this.Ur=new xc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new xc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dy{Gr(e){}shutdown(){}}/**
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
 */class Mc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);k("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(k("RestConnection","Received: ",c),c),c=>{throw Yr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=fy[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new kg;a.setWithCredentials(!0),a.listenOnce(Ig.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ir.NO_ERROR:const l=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Ir.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new _(y.DEADLINE_EXCEEDED,"Request time out"));break;case Ir.HTTP_ERROR:const u=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const E=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(E)>=0?E:y.UNKNOWN}(d.status);o(new _(p,d.message))}else o(new _(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(y.UNAVAILABLE,"Connection failed."));break;default:P()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=_g(),o=Cg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ag({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");k("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new py({Yr:m=>{h?k("Connection","Not sending because WebChannel is closed:",m):(u||(k("Connection","Opening WebChannel transport."),l.open(),u=!0),k("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),p=(m,E,v)=>{m.listen(E,A=>{try{v(A)}catch(C){setTimeout(()=>{throw C},0)}})};return p(l,Xs.EventType.OPEN,()=>{h||k("Connection","WebChannel transport opened.")}),p(l,Xs.EventType.CLOSE,()=>{h||(h=!0,k("Connection","WebChannel transport closed"),d.oo())}),p(l,Xs.EventType.ERROR,m=>{h||(h=!0,Yr("Connection","WebChannel transport errored:",m),d.oo(new _(y.UNAVAILABLE,"The operation could not be completed")))}),p(l,Xs.EventType.MESSAGE,m=>{var E;if(!h){const v=m.data[0];ee(!!v);const A=v,C=A.error||((E=A[0])===null||E===void 0?void 0:E.error);if(C){k("Connection","WebChannel received error:",C);const U=C.status;let L=function(G){const K=le[G];if(K!==void 0)return lh(K)}(U),$=C.message;L===void 0&&(L=y.INTERNAL,$="Unknown error status: "+U+" with message "+C.message),h=!0,d.oo(new _(L,$)),l.close()}else k("Connection","WebChannel received:",v),d.uo(v)}}),p(o,Sg.STAT_EVENT,m=>{m.stat===fc.PROXY?k("Connection","Detected buffering proxy"):m.stat===fc.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Ar(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){return new Im(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Ch(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new _(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class my extends Ih{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=km(this.Tt,e),s=function(i){if(!("targetChange"in i))return R.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?R.min():r.readTime?at(r.readTime):R.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=oo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=eo(a)?{documents:Pm(i,a)}:{query:Om(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=mh(i,r.resumeToken):r.snapshotVersion.compareTo(R.min())>0&&(o.readTime=Ti(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Lm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=oo(this.Tt),n.removeTarget=e,this.qo(n)}}class yy extends Ih{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Nm(e.writeResults,e.commitTime),s=at(e.commitTime);return this.listener.eu(s,n)}return ee(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=oo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Dm(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new _(y.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(y.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(y.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class wy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(wt(n),this.cu=!1):k("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{sn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=M(a);c.mu.add(4),await Bs(c),c.pu.set("Unknown"),c.mu.delete(4),await Ji(c)}(this))})}),this.pu=new wy(s,i)}}async function Ji(t){if(sn(t))for(const e of t.gu)await e(!0)}async function Bs(t){for(const e of t.gu)await e(!1)}function Sh(t,e){const n=M(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),da(n)?ha(n):jn(n).Mo()&&ua(n,e))}function Ah(t,e){const n=M(t),s=jn(n);n.wu.delete(e),s.Mo()&&kh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():sn(n)&&n.pu.set("Unknown"))}function ua(t,e){t.Iu.Ft(e.targetId),jn(t).Jo(e)}function kh(t,e){t.Iu.Ft(e),jn(t).Yo(e)}function ha(t){t.Iu=new Em({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),jn(t).start(),t.pu.au()}function da(t){return sn(t)&&!jn(t).Oo()&&t.wu.size>0}function sn(t){return M(t).mu.size===0}function Dh(t){t.Iu=void 0}async function Ey(t){t.wu.forEach((e,n)=>{ua(t,e)})}async function Ty(t,e){Dh(t),da(t)?(t.pu.fu(e),ha(t)):t.pu.set("Unknown")}async function _y(t,e,n){if(t.pu.set("Online"),e instanceof gh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _i(t,s)}else if(e instanceof ri?t.Iu.Qt(e):e instanceof ph?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(R.min()))try{const s=await _h(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Ne.EMPTY_BYTE_STRING,c.snapshotVersion)),kh(i,a);const l=new Kt(c.target,a,1,c.sequenceNumber);ua(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await _i(t,s)}}async function _i(t,e,n){if(!xs(e))throw e;t.mu.add(1),await Bs(t),t.pu.set("Offline"),n||(n=()=>_h(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Ji(t)})}function Nh(t,e){return e().catch(n=>_i(t,n,e))}async function Zi(t){const e=M(t),n=Ot(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Cy(e);)try{const i=await cy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Iy(e,i)}catch(i){await _i(e,i)}Ph(e)&&Oh(e)}function Cy(t){return sn(t)&&t._u.length<10}function Iy(t,e){t._u.push(e);const n=Ot(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Ph(t){return sn(t)&&!Ot(t).Oo()&&t._u.length>0}function Oh(t){Ot(t).start()}async function Sy(t){Ot(t).su()}async function Ay(t){const e=Ot(t);for(const n of t._u)e.tu(n.mutations)}async function ky(t,e,n){const s=t._u.shift(),i=oa.from(s,e,n);await Nh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zi(t)}async function Dy(t,e){e&&Ot(t).Xo&&await async function(n,s){if(i=s.code,mm(i)&&i!==y.ABORTED){const r=n._u.shift();Ot(n).$o(),await Nh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Zi(n)}var i}(t,e),Ph(t)&&Oh(t)}async function Fc(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=sn(n);n.mu.add(3),await Bs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Ji(n)}async function Ny(t,e){const n=M(t);e?(n.mu.delete(2),await Ji(n)):e||(n.mu.add(2),await Bs(n),n.pu.set("Unknown"))}function jn(t){return t.Tu||(t.Tu=function(e,n,s){const i=M(e);return i.ru(),new my(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Ey.bind(null,t),no:Ty.bind(null,t),Ho:_y.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),da(t)?ha(t):t.pu.set("Unknown")):(await t.Tu.stop(),Dh(t))})),t.Tu}function Ot(t){return t.Eu||(t.Eu=function(e,n,s){const i=M(e);return i.ru(),new yy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Sy.bind(null,t),no:Dy.bind(null,t),nu:Ay.bind(null,t),eu:ky.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Zi(t)):(await t.Eu.stop(),t._u.length>0&&(k("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new fa(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(t,e){if(wt("AsyncQueue",`${e}: ${t}`),xs(t))return new _(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||D.comparator(n.key,s.key):(n,s)=>D.comparator(n.key,s.key),this.keyedMap=Yn(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new gn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.Au=new pe(D.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):P():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Pn{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Pn(e,n,gn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ki(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.bu=void 0,this.listeners=[]}}class Oy{constructor(){this.queries=new $n(e=>Zu(e),Ki),this.onlineState="Unknown",this.vu=new Set}}async function Rh(t,e){const n=M(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Py),i)try{r.bu=await n.onListen(s)}catch(o){const a=pa(o,`Initialization of query '${so(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&ga(n)}async function Lh(t,e){const n=M(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ry(t,e){const n=M(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&ga(n)}function Ly(t,e,n){const s=M(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function ga(t){t.vu.forEach(e=>{e.next()})}class xh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Pn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.key=e}}class Fh{constructor(e){this.key=e}}class xy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=j(),this.mutatedKeys=j(),this.ju=eh(e),this.zu=new gn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Bc,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Gi(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==E&&(s.track({type:3,doc:p}),v=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=E?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return P()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new Pn(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Bc,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=j(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Fh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Mh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=j();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Pn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class My{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Fy{constructor(e){this.key=e,this.ic=!1}}class By{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new $n(a=>Zu(a),Ki),this.uc=new Map,this.cc=new Set,this.ac=new pe(D.comparator),this.hc=new Map,this.lc=new aa,this.fc={},this.dc=new Map,this._c=Nn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Vy(t,e){const n=Qy(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await ly(n.localStore,bt(e));n.isPrimaryClient&&Sh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Uy(n,e,s,a==="current",o.resumeToken)}return i}async function Uy(t,e,n,s,i){t.mc=(h,d,p)=>async function(m,E,v,A){let C=E.view.Hu(v);C.Li&&(C=await Lc(m.localStore,E.query,!1).then(({documents:$})=>E.view.Hu($,C)));const U=A&&A.targetChanges.get(E.targetId),L=E.view.applyChanges(C,m.isPrimaryClient,U);return Uc(m,E.targetId,L.tc),L.snapshot}(t,h,d,p);const r=await Lc(t.localStore,e,!0),o=new xy(e,r.Yi),a=o.Hu(r.documents),c=Fs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Uc(t,n,l.tc);const u=new My(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function $y(t,e){const n=M(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!Ki(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ao(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ah(n.remoteStore,s.targetId),co(n,s.targetId)}).catch(Ls)):(co(n,s.targetId),await ao(n.localStore,s.targetId,!0))}async function jy(t,e,n){const s=Yy(t);try{const i=await function(r,o){const a=M(r),c=de.now(),l=o.reduce((d,p)=>d.add(p.key),j());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Et(),m=j();return a.ji.getEntries(d,l).next(E=>{p=E,p.forEach((v,A)=>{A.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(E=>{u=E;const v=[];for(const A of o){const C=fm(A,u.get(A.key).overlayedDocument);C!=null&&v.push(new Mt(A.key,C,Xu(C.value.mapValue),tt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(E=>{h=E;const v=E.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,E.batchId,v)})}).then(()=>({batchId:h.batchId,changes:hh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new pe(Y)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Vs(s,i.changes),await Zi(s.remoteStore)}catch(i){const r=pa(i,"Failed to persist write");n.reject(r)}}async function Bh(t,e){const n=M(t);try{const s=await oy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?ee(o.ic):i.removedDocuments.size>0&&(ee(o.ic),o.ic=!1))}),await Vs(n,s,e)}catch(s){await Ls(s)}}function Vc(t,e,n){const s=M(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=M(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&ga(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qy(t,e,n){const s=M(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new pe(D.comparator);o=o.insert(r,Ce.newNoDocument(r,R.min()));const a=j().add(r),c=new Yi(R.min(),new Map,new fe(Y),o,a);await Bh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),ma(s)}else await ao(s.localStore,e,!1).then(()=>co(s,e,n)).catch(Ls)}async function Hy(t,e){const n=M(t),s=e.batch.batchId;try{const i=await ry(n.localStore,e);Uh(n,s,null),Vh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Vs(n,i)}catch(i){await Ls(i)}}async function zy(t,e,n){const s=M(t);try{const i=await function(r,o){const a=M(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ee(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Uh(s,e,n),Vh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Vs(s,i)}catch(i){await Ls(i)}}function Vh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Uh(t,e,n){const s=M(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function co(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||$h(t,s)})}function $h(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Ah(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),ma(t))}function Uc(t,e,n){for(const s of n)s instanceof Mh?(t.lc.addReference(s.key,e),Ky(t,s)):s instanceof Fh?(k("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||$h(t,s.key)):P()}function Ky(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.cc.add(s),ma(t))}function ma(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new D(ne.fromString(e)),s=t._c.next();t.hc.set(s,new Fy(n)),t.ac=t.ac.insert(n,s),Sh(t.remoteStore,new Kt(bt(na(n.path)),s,2,Jo.at))}}async function Vs(t,e,n){const s=M(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=la.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=M(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!xs(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,r))}async function Gy(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await Th(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new _(y.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vs(n,s.Wi)}}function Wy(t,e){const n=M(t),s=n.hc.get(e);if(s&&s.ic)return j().add(s.key);{let i=j();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function Qy(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qy.bind(null,e),e.rc.Ho=Ry.bind(null,e.eventManager),e.rc.gc=Ly.bind(null,e.eventManager),e}function Yy(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zy.bind(null,e),e}class Xy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Xi(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return iy(this.persistence,new ny,e.initialUser,this.Tt)}Tc(e){return new ey(ca.qs,this.Tt)}Ic(e){return new hy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gy.bind(null,this.syncEngine),await Ny(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Oy}createDatastore(e){const n=Xi(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new gy(i));var i;return function(r,o,a,c){return new vy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Vc(this.syncEngine,a,0),o=Mc.C()?new Mc:new dy,new by(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new By(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=M(e);k("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Bs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=$u.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{k("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(k("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=pa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ev(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Th(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nv(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Fc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Fc(e.remoteStore,r)),t.onlineComponents=e}async function nv(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await ev(t,new Xy)),t.offlineComponents}async function qh(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await tv(t,new Jy)),t.onlineComponents}function sv(t){return qh(t).then(e=>e.syncEngine)}async function lo(t){const e=await qh(t),n=e.eventManager;return n.onListen=Vy.bind(null,e.syncEngine),n.onUnlisten=$y.bind(null,e.syncEngine),n}function iv(t,e,n={}){const s=new kt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new jh({next:h=>{r.enqueueAndForget(()=>Lh(i,u)),h.fromCache&&a.source==="server"?c.reject(new _(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new xh(o,l,{includeMetadataChanges:!0,Ou:!0});return Rh(i,u)}(await lo(t),t.asyncQueue,e,n,s)),s.promise}const $c=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t,e,n){if(!n)throw new _(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rv(t,e,n,s){if(e===!0&&s===!0)throw new _(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jc(t){if(!D.isDocumentKey(t))throw new _(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qc(t){if(D.isDocumentKey(t))throw new _(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function er(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":P()}function ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=er(t);throw new _(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Dg;switch(n.type){case"gapi":const s=n.client;return new Rg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$c.get(e);n&&(k("ComponentProvider","Removing Datastore"),$c.delete(e),n.terminate())}(this),Promise.resolve()}}function ov(t,e,n,s={}){var i;const r=(t=ct(t,tr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Yr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=_e.MOCK_USER;else{o=Al(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new _e(c)}t._authCredentials=new Ng(new Uu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class Ft{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ft(this.firestore,e,this._query)}}class Dt extends Ft{constructor(e,n,s){super(e,n,na(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new D(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function _t(t,e,...n){if(t=nt(t),Hh("collection","path",e),t instanceof tr){const s=ne.fromString(e,...n);return qc(s),new Dt(t,null,s)}{if(!(t instanceof Ve||t instanceof Dt))throw new _(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ne.fromString(e,...n));return qc(s),new Dt(t.firestore,null,s)}}function On(t,e,...n){if(t=nt(t),arguments.length===1&&(e=$u.R()),Hh("doc","path",e),t instanceof tr){const s=ne.fromString(e,...n);return jc(s),new Ve(t,null,new D(s))}{if(!(t instanceof Ve||t instanceof Dt))throw new _(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ne.fromString(e,...n));return jc(s),new Ve(t.firestore,t instanceof Dt?t.converter:null,new D(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Ch(this,"async_queue_retry"),this.Hc=()=>{const n=Ar();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Ar();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Ar();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new kt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!xs(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw wt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=fa.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&P()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function zc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Yt extends tr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new av,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zh(this),this._firestoreClient.terminate()}}function cv(t,e){const n=typeof t=="object"?t:xl(),s=typeof t=="string"?t:e||"(default)",i=Ol(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Sl("firestore");r&&ov(i,...r)}return i}function ya(t){return t._firestoreClient||zh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zh(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new qg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Zy(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(Ne.fromBase64String(e))}catch(n){throw new _(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rn(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=/^__.*__$/;class uv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ms(e,this.data,n,this.fieldTransforms)}}class Kh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Mt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw P()}}class ba{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new ba(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ci(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Gh(this.ra)&&lv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class hv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Xi(e)}wa(e,n,s,i=!1){return new ba({ra:e,methodName:n,_a:s,path:Ie.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Ea(t){const e=t._freezeSettings(),n=Xi(t._databaseId);return new hv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dv(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Ta("Data must be an object, but it was:",o,s);const a=Wh(s,o);let c,l;if(r.merge)c=new ze(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=uo(e,h,n);if(!o.contains(d))throw new _(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Yh(u,d)||u.push(d)}c=new ze(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new uv(new Be(a),c,l)}class sr extends va{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sr}}function fv(t,e,n,s){const i=t.wa(1,e,n);Ta("Data must be an object, but it was:",i,s);const r=[],o=Be.empty();nn(s,(c,l)=>{const u=_a(e,c,n);l=nt(l);const h=i.ha(u);if(l instanceof sr)r.push(u);else{const d=Us(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new ze(r);return new Kh(o,a,i.fieldTransforms)}function pv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[uo(e,s,n)],c=[i];if(r.length%2!=0)throw new _(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(uo(e,r[d])),c.push(r[d+1]);const l=[],u=Be.empty();for(let d=a.length-1;d>=0;--d)if(!Yh(l,a[d])){const p=a[d];let m=c[d];m=nt(m);const E=o.ha(p);if(m instanceof sr)l.push(p);else{const v=Us(m,E);v!=null&&(l.push(p),u.set(p,v))}}const h=new ze(l);return new Kh(u,h,o.fieldTransforms)}function gv(t,e,n,s=!1){return Us(n,t.wa(s?4:3,e))}function Us(t,e){if(Qh(t=nt(t)))return Ta("Unsupported field value:",e,t),Wh(t,e);if(t instanceof va)return function(n,s){if(!Gh(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Us(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return am(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=de.fromDate(n);return{timestampValue:Ti(s.Tt,i)}}if(n instanceof de){const i=new de(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ti(s.Tt,i)}}if(n instanceof wa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Rn)return{bytesValue:mh(s.Tt,n._byteString)};if(n instanceof Ve){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ra(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${er(n)}`)}(t,e)}function Wh(t,e){const n={};return ju(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nn(t,(s,i)=>{const r=Us(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Qh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof wa||t instanceof Rn||t instanceof Ve||t instanceof va)}function Ta(t,e,n){if(!Qh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=er(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function uo(t,e,n){if((e=nt(e))instanceof nr)return e._internalPath;if(typeof e=="string")return _a(t,e);throw Ci("Field path arguments must be of type string or ",t,!1,void 0,n)}const mv=new RegExp("[~\\*/\\[\\]]");function _a(t,e,n){if(e.search(mv)>=0)throw Ci(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nr(...e.split("."))._internalPath}catch{throw Ci(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ci(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new _(y.INVALID_ARGUMENT,a+t+c)}function Yh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ir("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yv extends Xh{data(){return super.data()}}function ir(t,e){return typeof e=="string"?_a(t,e):e instanceof nr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ca{}class Zh extends Ca{}function ss(t,e,...n){let s=[];e instanceof Ca&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Ia).length,o=i.filter(a=>a instanceof rr).length;if(r>1||r>0&&o>0)throw new _(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class rr extends Zh{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new rr(e,n,s)}_apply(e){const n=this._parse(e);return ed(e._query,n),new Ft(e.firestore,e.converter,to(e._query,n))}_parse(e){const n=Ea(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Gc(u,l);const d=[];for(const p of u)d.push(Kc(a,i,p));h={arrayValue:{values:d}}}else h=Kc(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Gc(u,l),h=gv(o,r,u,l==="in"||l==="not-in");return he.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ho(t,e,n){const s=e,i=ir("where",t);return rr._create(i,s,n)}class Ia extends Ca{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ia(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:st.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)ed(r,a),r=to(r,a)}(e._query,n),new Ft(e.firestore,e.converter,to(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sa extends Zh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Sa(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new _(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new _(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new fn(i,r);return function(a,c){if(sa(a)===null){const l=zi(a);l!==null&&td(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Ft(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Un(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function fo(t,e="asc"){const n=e,s=ir("orderBy",t);return Sa._create(s,n)}function Kc(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new _(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ju(e)&&n.indexOf("/")!==-1)throw new _(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ne.fromString(n));if(!D.isDocumentKey(s))throw new _(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vc(t,new D(s))}if(n instanceof Ve)return vc(t,n._key);throw new _(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${er(n)}.`)}function Gc(t,e){if(!Array.isArray(t)||t.length===0)throw new _(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ed(t,e){if(e.isInequality()){const s=zi(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new _(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=sa(t);r!==null&&td(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new _(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function td(t,e,n){if(!n.isEqual(e))throw new _(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class vv{convertValue(e,n="none"){switch(Qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw P()}}convertObject(e,n){const s={};return nn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new wa(ue(e.latitude),ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Hu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(vs(e));default:return null}}convertTimestamp(e){const n=Pt(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ne.fromString(e);ee(Eh(s));const i=new ys(s.get(1),s.get(3)),r=new D(s.popFirst(5));return i.isEqual(n)||wt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nd extends Xh{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ir("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class oi extends nd{data(e={}){return super.data(e)}}class sd{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new oi(this._firestore,this._userDataWriter,s.key,s,new Xn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new oi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Xn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new oi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Xn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:bv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return P()}}class Aa extends vv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function po(t){t=ct(t,Ft);const e=ct(t.firestore,Yt),n=ya(e),s=new Aa(e);return Jh(t._query),iv(n,t._query).then(i=>new sd(e,s,t,i))}function ka(t,e,n,...s){t=ct(t,Ve);const i=ct(t.firestore,Yt),r=Ea(i);let o;return o=typeof(e=nt(e))=="string"||e instanceof nr?pv(r,"updateDoc",t._key,e,n,s):fv(r,"updateDoc",t._key,e),Da(i,[o.toMutation(t._key,tt.exists(!0))])}function go(t){return Da(ct(t.firestore,Yt),[new ia(t._key,tt.none())])}function id(t,e){const n=ct(t.firestore,Yt),s=On(t),i=wv(t.converter,e);return Da(n,[dv(Ea(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,tt.exists(!1))]).then(()=>s)}function mo(t,...e){var n,s,i;t=nt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||zc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(zc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof Ve)l=ct(t.firestore,Yt),u=na(t._key.path),c={next:h=>{e[o]&&e[o](Ev(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ct(t,Ft);l=ct(h.firestore,Yt),u=h._query;const d=new Aa(l);c={next:p=>{e[o]&&e[o](new sd(l,d,h,p))},error:e[o+1],complete:e[o+2]},Jh(t._query)}return function(h,d,p,m){const E=new jh(m),v=new xh(d,E,p);return h.asyncQueue.enqueueAndForget(async()=>Rh(await lo(h),v)),()=>{E.Pc(),h.asyncQueue.enqueueAndForget(async()=>Lh(await lo(h),v))}}(ya(l),u,a,c)}function Da(t,e){return function(n,s){const i=new kt;return n.asyncQueue.enqueueAndForget(async()=>jy(await sv(n),s,i)),i.promise}(ya(t),e)}function Ev(t,e,n){const s=n.docs.get(e._key),i=new Aa(t);return new nd(t,i,e._key,s,new Xn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Vn=n})(Rl),ls(new Cn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Yt(new Pg(n.getProvider("auth-internal")),new xg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ys(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),At(pc,"3.8.4",t),At(pc,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="firebasestorage.googleapis.com",Tv="storageBucket",_v=2*60*1e3,Cv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends en{constructor(e,n,s=0){super(kr(e),`Firebase Storage: ${n} (${kr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ut;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ut||(ut={}));function kr(t){return"storage/"+t}function Iv(){const t="An unknown error occurred, please check the error payload for server response.";return new dt(ut.UNKNOWN,t)}function Sv(){return new dt(ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Av(){return new dt(ut.CANCELED,"User canceled the upload/download.")}function kv(t){return new dt(ut.INVALID_URL,"Invalid URL '"+t+"'.")}function Dv(t){return new dt(ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Wc(t){return new dt(ut.INVALID_ARGUMENT,t)}function od(){return new dt(ut.APP_DELETED,"The Firebase app was deleted.")}function Nv(t){return new dt(ut.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=et.makeFromUrl(e,n)}catch{return new et(e,"")}if(s.path==="")return s;throw Dv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(L){L.path_=decodeURIComponent(L.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},E=n===rd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",A=new RegExp(`^https?://${E}/${i}/${v}`,"i"),U=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let L=0;L<U.length;L++){const $=U[L],G=$.regex.exec(e);if(G){const K=G[$.indices.bucket];let B=G[$.indices.path];B||(B=""),s=new et(K,B),$.postModify(s);break}}if(s==null)throw kv(e);return s}}class Pv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function d(){r&&clearTimeout(r)}function p(v,...A){if(l){d();return}if(v){d(),u.call(null,v,...A);return}if(c()||o){d(),u.call(null,v,...A);return}s<64&&(s*=2);let U;a===1?(a=2,U=0):U=(s+Math.random())*1e3,h(U)}let m=!1;function E(v){m||(m=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,E(!0)},n),E}function Rv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){return t!==void 0}function Qc(t,e,n,s){if(s<e)throw Wc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Wc(`Invalid value for '${t}'. Expected ${n} or less.`)}function xv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ii||(Ii={}));/**
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
 */function Mv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ei(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ii.NO_ERROR,c=r.getStatus();if(!a||Mv(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ii.ABORT;s(!1,new ei(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ei(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Lv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Iv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?od():Av();o(c)}else{const c=Sv();o(c)}};this.canceled_?n(!1,new ei(!1,null,!0)):this.backoffId_=Ov(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Rv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ei{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Bv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Vv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Uv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $v(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jv(t,e,n,s,i,r,o=!0){const a=xv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Uv(l,e),Bv(l,n),Vv(l,r),$v(l,s),new Fv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Hv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Si{constructor(e,n){this._service=e,n instanceof et?this._location=n:this._location=et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Si(e,n)}get root(){const e=new et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hv(this._location.path)}get storage(){return this._service}get parent(){const e=qv(this._location.path);if(e===null)return null;const n=new et(this._location.bucket,e);return new Si(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Nv(e)}}function Yc(t,e){const n=e==null?void 0:e[Tv];return n==null?null:et.makeFromBucketSpec(n,t)}function zv(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Al(i,t.app.options.projectId))}class Kv{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=rd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_v,this._maxUploadRetryTime=Cv,this._requests=new Set,i!=null?this._bucket=et.makeFromBucketSpec(i,this._host):this._bucket=Yc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=et.makeFromBucketSpec(this._url,e):this._bucket=Yc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Si(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Pv(od());{const o=jv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Xc="@firebase/storage",Jc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="storage";function Gv(t=xl(),e){t=nt(t);const s=Ol(t,ad).getImmediate({identifier:e}),i=Sl("storage");return i&&Wv(s,...i),s}function Wv(t,e,n,s={}){zv(t,e,n,s)}function Qv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Kv(n,s,i,e,Rl)}function Yv(){ls(new Cn(ad,Qv,"PUBLIC").setMultipleInstances(!0)),At(Xc,Jc,""),At(Xc,Jc,"esm2017")}Yv();const Xv={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},cd=Ll(Xv);Gv(cd);const He=cv(cd);var Jv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yo={},Zv={get exports(){return yo},set exports(t){yo=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(Jv,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(v){v.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(v){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),m=this.options.position=="left"?d:"-"+d,E=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+m+","+E+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Zv);const mn=yo,ld="SweetAlert2:",ew=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Na=t=>t.charAt(0).toUpperCase()+t.slice(1),We=t=>Array.prototype.slice.call(t),$e=t=>{console.warn(`${ld} ${typeof t=="object"?t.join(" "):t}`)},rn=t=>{console.error(`${ld} ${t}`)},Zc=[],tw=t=>{Zc.includes(t)||(Zc.push(t),$e(t))},nw=(t,e)=>{tw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},or=t=>typeof t=="function"?t():t,Pa=t=>t&&typeof t.toPromise=="function",$s=t=>Pa(t)?t.toPromise():Promise.resolve(t),Oa=t=>t&&Promise.resolve(t)===t,yn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},sw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],iw={},rw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ud=t=>Object.prototype.hasOwnProperty.call(yn,t),hd=t=>sw.indexOf(t)!==-1,vo=t=>iw[t],ow=t=>{ud(t)||$e(`Unknown parameter "${t}"`)},aw=t=>{rw.includes(t)&&$e(`The parameter "${t}" is incompatible with toasts`)},cw=t=>{vo(t)&&nw(t,vo(t))},lw=t=>{!t.backdrop&&t.allowOutsideClick&&$e('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)ow(e),t.toast&&aw(e),cw(e)},uw="swal2-",dd=t=>{const e={};for(const n in t)e[t[n]]=uw+t[n];return e},f=dd(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),is=dd(["success","warning","info","question","error"]),Pe=()=>document.body.querySelector(`.${f.container}`),js=t=>{const e=Pe();return e?e.querySelector(t):null},Ze=t=>js(`.${t}`),X=()=>Ze(f.popup),qs=()=>Ze(f.icon),fd=()=>Ze(f.title),Ai=()=>Ze(f["html-container"]),pd=()=>Ze(f.image),gd=()=>Ze(f["progress-steps"]),ar=()=>Ze(f["validation-message"]),it=()=>js(`.${f.actions} .${f.confirm}`),Rt=()=>js(`.${f.actions} .${f.deny}`),hw=()=>Ze(f["input-label"]),qn=()=>js(`.${f.loader}`),Xt=()=>js(`.${f.actions} .${f.cancel}`),Hs=()=>Ze(f.actions),md=()=>Ze(f.footer),cr=()=>Ze(f["timer-progress-bar"]),Ra=()=>Ze(f.close),dw=`
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
`,La=()=>{const t=We(X().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=We(X().querySelectorAll(dw)).filter(n=>n.getAttribute("tabindex")!=="-1");return ew(t.concat(e)).filter(n=>Ke(n))},xa=()=>yt(document.body,f.shown)&&!yt(document.body,f["toast-shown"])&&!yt(document.body,f["no-backdrop"]),lr=()=>X()&&yt(X(),f.toast),fw=()=>X().hasAttribute("data-loading"),vn={previousBodyPadding:null},Se=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");We(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),We(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},yt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},pw=(t,e)=>{We(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(is).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},Je=(t,e,n)=>{if(pw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return $e(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);z(t,e.customClass[n])}},Ma=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},yd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},vd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},z=(t,e)=>{vd(t,e,!0)},ht=(t,e)=>{vd(t,e,!1)},Ct=(t,e)=>{const n=We(t.childNodes);for(let s=0;s<n.length;s++)if(yt(n[s],e))return n[s]},rs=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},be=(t,e="flex")=>{t.style.display=e},Oe=t=>{t.style.display="none"},el=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},ur=(t,e,n)=>{e?be(t,n):Oe(t)},Ke=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),gw=()=>!Ke(it())&&!Ke(Rt())&&!Ke(Xt()),tl=t=>t.scrollHeight>t.clientHeight,wd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Fa=(t,e=!1)=>{const n=cr();Ke(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},mw=()=>{const t=cr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},bd=()=>typeof window>"u"||typeof document>"u",yw=100,F={},vw=()=>{F.previousActiveElement&&F.previousActiveElement.focus?(F.previousActiveElement.focus(),F.previousActiveElement=null):document.body&&document.body.focus()},ww=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;F.restoreFocusTimeout=setTimeout(()=>{vw(),e()},yw),window.scrollTo(n,s)}),bw=`
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
`.replace(/(^|\n)\s*/g,""),Ew=()=>{const t=Pe();return t?(t.remove(),ht([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Vt=()=>{F.currentInstance.resetValidationMessage()},Tw=()=>{const t=X(),e=Ct(t,f.input),n=Ct(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=Ct(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=Ct(t,f.textarea);e.oninput=Vt,n.onchange=Vt,r.onchange=Vt,o.onchange=Vt,a.oninput=Vt,s.oninput=()=>{Vt(),i.value=s.value},s.onchange=()=>{Vt(),s.nextSibling.value=s.value}},_w=t=>typeof t=="string"?document.querySelector(t):t,Cw=t=>{const e=X();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Iw=t=>{window.getComputedStyle(t).direction==="rtl"&&z(Pe(),f.rtl)},Sw=t=>{const e=Ew();if(bd()){rn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&z(n,f["no-transition"]),Se(n,bw);const s=_w(t.target);s.appendChild(n),Cw(t),Iw(s),Tw()},Ba=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Aw(t,e):t&&Se(e,t)},Aw=(t,e)=>{t.jquery?kw(e,t):Se(e,t.toString())},kw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ts=(()=>{if(bd())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Dw=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Nw=(t,e)=>{const n=Hs(),s=qn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Oe(n):be(n),Je(n,e,"actions"),Pw(n,s,e),Se(s,e.loaderHtml),Je(s,e,"loader")};function Pw(t,e,n){const s=it(),i=Rt(),r=Xt();Dr(s,"confirm",n),Dr(i,"deny",n),Dr(r,"cancel",n),Ow(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Ow(t,e,n,s){if(!s.buttonsStyling)return ht([t,e,n],f.styled);z([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,z(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,z(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,z(n,f["default-outline"]))}function Dr(t,e,n){ur(t,n[`show${Na(e)}Button`],"inline-block"),Se(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],Je(t,n,`${e}Button`),z(t,n[`${e}ButtonClass`])}function Rw(t,e){typeof e=="string"?t.style.background=e:e||z([document.documentElement,document.body],f["no-backdrop"])}function Lw(t,e){e in f?z(t,f[e]):($e('The "position" parameter is not valid, defaulting to "center"'),z(t,f.center))}function xw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&z(t,f[n])}}const Mw=(t,e)=>{const n=Pe();n&&(Rw(n,e.backdrop),Lw(n,e.position),xw(n,e.grow),Je(n,e,"container"))},V={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Fw=["input","file","range","select","radio","checkbox","textarea"],Bw=(t,e)=>{const n=X(),s=V.innerParams.get(t),i=!s||e.input!==s.input;Fw.forEach(r=>{const o=f[r],a=Ct(n,o);$w(r,e.inputAttributes),a.className=o,i&&Oe(a)}),e.input&&(i&&Vw(e),jw(e))},Vw=t=>{if(!Fe[t.input])return rn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Ed(t.input),n=Fe[t.input](e,t);be(n),setTimeout(()=>{yd(n)})},Uw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},$w=(t,e)=>{const n=Ma(X(),t);if(n){Uw(n);for(const s in e)n.setAttribute(s,e[s])}},jw=t=>{const e=Ed(t.input);t.customClass&&z(e,t.customClass.input)},Va=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},zs=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,z(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Ed=t=>{const e=f[t]?f[t]:f.input;return Ct(X(),e)},Fe={};Fe.text=Fe.email=Fe.password=Fe.number=Fe.tel=Fe.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Oa(e.inputValue)||$e(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),zs(t,t,e),Va(t,e),t.type=e.input,t);Fe.file=(t,e)=>(zs(t,t,e),Va(t,e),t);Fe.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,zs(n,t,e),t};Fe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Se(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return zs(t,t,e),t};Fe.radio=t=>(t.textContent="",t);Fe.checkbox=(t,e)=>{const n=Ma(X(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Se(s,e.inputPlaceholder),t};Fe.textarea=(t,e)=>{t.value=e.inputValue,Va(t,e),zs(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(X()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?X().style.width=`${r}px`:X().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const qw=(t,e)=>{const n=Ai();Je(n,e,"htmlContainer"),e.html?(Ba(e.html,n),be(n,"block")):e.text?(n.textContent=e.text,be(n,"block")):Oe(n),Bw(t,e)},Hw=(t,e)=>{const n=md();ur(n,e.footer),e.footer&&Ba(e.footer,n),Je(n,e,"footer")},zw=(t,e)=>{const n=Ra();Se(n,e.closeButtonHtml),Je(n,e,"closeButton"),ur(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},Kw=(t,e)=>{const n=V.innerParams.get(t),s=qs();if(n&&e.icon===n.icon){sl(s,e),nl(s,e);return}if(!e.icon&&!e.iconHtml)return Oe(s);if(e.icon&&Object.keys(is).indexOf(e.icon)===-1)return rn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Oe(s);be(s),sl(s,e),nl(s,e),z(s,e.showClass.icon)},nl=(t,e)=>{for(const n in is)e.icon!==n&&ht(t,is[n]);z(t,is[e.icon]),Yw(t,e),Gw(),Je(t,e,"icon")},Gw=()=>{const t=X(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},Ww=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Qw=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,sl=(t,e)=>{t.textContent="",e.iconHtml?Se(t,il(e.iconHtml)):e.icon==="success"?Se(t,Ww):e.icon==="error"?Se(t,Qw):Se(t,il({question:"?",warning:"!",info:"i"}[e.icon]))},Yw=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])el(t,n,"backgroundColor",e.iconColor);el(t,".swal2-success-ring","borderColor",e.iconColor)}},il=t=>`<div class="${f["icon-content"]}">${t}</div>`,Xw=(t,e)=>{const n=pd();if(!e.imageUrl)return Oe(n);be(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),rs(n,"width",e.imageWidth),rs(n,"height",e.imageHeight),n.className=f.image,Je(n,e,"image")},Jw=t=>{const e=document.createElement("li");return z(e,f["progress-step"]),Se(e,t),e},Zw=t=>{const e=document.createElement("li");return z(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},eb=(t,e)=>{const n=gd();if(!e.progressSteps||e.progressSteps.length===0)return Oe(n);be(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&$e("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=Jw(s);if(n.appendChild(r),i===e.currentProgressStep&&z(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=Zw(e);n.appendChild(o)}})},tb=(t,e)=>{const n=fd();ur(n,e.title||e.titleText,"block"),e.title&&Ba(e.title,n),e.titleText&&(n.innerText=e.titleText),Je(n,e,"title")},nb=(t,e)=>{const n=Pe(),s=X();e.toast?(rs(n,"width",e.width),s.style.width="100%",s.insertBefore(qn(),qs())):rs(s,"width",e.width),rs(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Oe(ar()),sb(s,e)},sb=(t,e)=>{t.className=`${f.popup} ${Ke(t)?e.showClass.popup:""}`,e.toast?(z([document.documentElement,document.body],f["toast-shown"]),z(t,f.toast)):z(t,f.modal),Je(t,e,"popup"),typeof e.customClass=="string"&&z(t,e.customClass),e.icon&&z(t,f[`icon-${e.icon}`])},Td=(t,e)=>{nb(t,e),Mw(t,e),eb(t,e),Kw(t,e),Xw(t,e),tb(t,e),zw(t,e),qw(t,e),Nw(t,e),Hw(t,e),typeof e.didRender=="function"&&e.didRender(X())},Hn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ib=()=>{We(document.body.children).forEach(e=>{e===Pe()||e.contains(Pe())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},_d=()=>{We(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Cd=["swal-title","swal-html","swal-footer"],rb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return db(n),Object.assign(ob(n),ab(n),cb(n),lb(n),ub(n),hb(n,Cd))},ob=t=>{const e={};return We(t.querySelectorAll("swal-param")).forEach(n=>{Jt(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof yn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof yn[s]=="object"&&(e[s]=JSON.parse(i))}),e},ab=t=>{const e={};return We(t.querySelectorAll("swal-button")).forEach(n=>{Jt(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Na(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},cb=t=>{const e={},n=t.querySelector("swal-image");return n&&(Jt(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},lb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Jt(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},ub=t=>{const e={},n=t.querySelector("swal-input");n&&(Jt(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},We(s).forEach(i=>{Jt(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},hb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(Jt(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},db=t=>{const e=Cd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);We(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&$e(`Unrecognized element <${s}>`)})},Jt=(t,e)=>{We(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&$e([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},rl={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function fb(t){t.inputValidator||Object.keys(rl).forEach(e=>{t.input===e&&(t.inputValidator=rl[e])})}function pb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&($e('Target parameter is not valid, defaulting to "body"'),t.target="body")}function gb(t){fb(t),t.showLoaderOnConfirm&&!t.preConfirm&&$e(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),pb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Sw(t)}class mb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const yb=()=>{vn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(vn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${vn.previousBodyPadding+Dw()}px`)},vb=()=>{vn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${vn.previousBodyPadding}px`,vn.previousBodyPadding=null)},wb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!yt(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,z(document.body,f.iosfix),Eb(),bb()}},bb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&X().scrollHeight>window.innerHeight-44&&(Pe().style.paddingBottom=`${44}px`)},Eb=()=>{const t=Pe();let e;t.ontouchstart=n=>{e=Tb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Tb=t=>{const e=t.target,n=Pe();return _b(t)||Cb(t)?!1:e===n||!tl(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(tl(Ai())&&Ai().contains(e))},_b=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Cb=t=>t.touches&&t.touches.length>1,Ib=()=>{if(yt(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);ht(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Id=10,Sb=t=>{const e=Pe(),n=X();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Db(e,n,t),setTimeout(()=>{Ab(e,n)},Id),xa()&&(kb(e,t.scrollbarPadding,i),ib()),!lr()&&!F.previousActiveElement&&(F.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),ht(e,f["no-transition"])},Sd=t=>{const e=X();if(t.target!==e)return;const n=Pe();e.removeEventListener(Ts,Sd),n.style.overflowY="auto"},Ab=(t,e)=>{Ts&&wd(e)?(t.style.overflowY="hidden",e.addEventListener(Ts,Sd)):t.style.overflowY="auto"},kb=(t,e,n)=>{wb(),e&&n!=="hidden"&&yb(),setTimeout(()=>{t.scrollTop=0})},Db=(t,e,n)=>{z(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),be(e,"grid"),setTimeout(()=>{z(e,n.showClass.popup),e.style.removeProperty("opacity")},Id),z([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&z([document.documentElement,document.body],f["height-auto"])},Ln=t=>{let e=X();e||new Cs,e=X();const n=qn();lr()?Oe(qs()):Nb(e,t),be(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Nb=(t,e)=>{const n=Hs(),s=qn();!e&&Ke(it())&&(e=it()),be(n),e&&(Oe(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),z([t,n],f.loading)},Pb=(t,e)=>{e.input==="select"||e.input==="radio"?Mb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Pa(e.inputValue)||Oa(e.inputValue))&&(Ln(it()),Fb(t,e))},Ob=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Rb(n);case"radio":return Lb(n);case"file":return xb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Rb=t=>t.checked?1:0,Lb=t=>t.checked?t.value:null,xb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Mb=(t,e)=>{const n=X(),s=i=>Bb[e.input](n,wo(i),e);Pa(e.inputOptions)||Oa(e.inputOptions)?(Ln(it()),$s(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):rn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Fb=(t,e)=>{const n=t.getInput();Oe(n),$s(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,be(n),n.focus(),t.hideLoading()}).catch(s=>{rn(`Error in inputValue promise: ${s}`),n.value="",be(n),n.focus(),t.hideLoading()})},Bb={select:(t,e,n)=>{const s=Ct(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Se(c,o),c.selected=ol(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Ct(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,ol(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Se(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},wo=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=wo(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=wo(s)),e.push([n,s])}),e},ol=(t,e)=>e&&e.toString()===t.toString();function al(){const t=V.innerParams.get(this);if(!t)return;const e=V.domCache.get(this);Oe(e.loader),lr()?t.icon&&be(qs()):Vb(e),ht([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Vb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?be(e[0],"inline-block"):gw()&&Oe(t.actions)};function Ub(t){const e=V.innerParams.get(t||this),n=V.domCache.get(t||this);return n?Ma(n.popup,e.input):null}const _s={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},$b=()=>Ke(X()),Ad=()=>it()&&it().click(),jb=()=>Rt()&&Rt().click(),qb=()=>Xt()&&Xt().click(),kd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Hb=(t,e,n,s)=>{kd(e),n.toast||(e.keydownHandler=i=>Kb(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:X(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},bo=(t,e,n)=>{const s=La();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();X().focus()},Dd=["ArrowRight","ArrowDown"],zb=["ArrowLeft","ArrowUp"],Kb=(t,e,n)=>{const s=V.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Gb(t,e,s):e.key==="Tab"?Wb(e,s):[...Dd,...zb].includes(e.key)?Qb(e.key):e.key==="Escape"&&Yb(e,s,n)))},Gb=(t,e,n)=>{if(or(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Ad(),e.preventDefault()}},Wb=(t,e)=>{const n=t.target,s=La();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?bo(e,i,-1):bo(e,i,1),t.stopPropagation(),t.preventDefault()},Qb=t=>{const e=it(),n=Rt(),s=Xt();if(![e,n,s].includes(document.activeElement))return;const i=Dd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Hs().children.length;o++){if(r=r[i],!r)return;if(Ke(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},Yb=(t,e,n)=>{or(e.allowEscapeKey)&&(t.preventDefault(),n(Hn.esc))};function Nd(t,e,n,s){lr()?cl(t,s):(ww(n).then(()=>cl(t,s)),kd(F)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),xa()&&(vb(),Ib(),_d()),Xb()}function Xb(){ht([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function ti(t){t=tE(t);const e=_s.swalPromiseResolve.get(this),n=Zb(this);this.isAwaitingPromise()?t.isDismissed||(Ks(this),e(t)):n&&e(t)}function Jb(){return!!V.awaitingPromise.get(this)}const Zb=t=>{const e=X();if(!e)return!1;const n=V.innerParams.get(t);if(!n||yt(e,n.hideClass.popup))return!1;ht(e,n.showClass.popup),z(e,n.hideClass.popup);const s=Pe();return ht(s,n.showClass.backdrop),z(s,n.hideClass.backdrop),nE(t,e,n),!0};function eE(t){const e=_s.swalPromiseReject.get(this);Ks(this),e&&e(t)}const Ks=t=>{t.isAwaitingPromise()&&(V.awaitingPromise.delete(t),V.innerParams.get(t)||t._destroy())},tE=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),nE=(t,e,n)=>{const s=Pe(),i=Ts&&wd(e);typeof n.willClose=="function"&&n.willClose(e),i?sE(t,e,s,n.returnFocus,n.didClose):Nd(t,s,n.returnFocus,n.didClose)},sE=(t,e,n,s,i)=>{F.swalCloseEventFinishedCallback=Nd.bind(null,t,n,s,i),e.addEventListener(Ts,function(r){r.target===e&&(F.swalCloseEventFinishedCallback(),delete F.swalCloseEventFinishedCallback)})},cl=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Pd(t,e,n){const s=V.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Od(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function iE(){Pd(this,["confirmButton","denyButton","cancelButton"],!1)}function rE(){Pd(this,["confirmButton","denyButton","cancelButton"],!0)}function oE(){return Od(this.getInput(),!1)}function aE(){return Od(this.getInput(),!0)}function cE(t){const e=V.domCache.get(this),n=V.innerParams.get(this);Se(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&z(e.validationMessage,n.customClass.validationMessage),be(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),yd(s),z(s,f.inputerror))}function lE(){const t=V.domCache.get(this);t.validationMessage&&Oe(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ht(e,f.inputerror))}function uE(){return V.domCache.get(this).progressSteps}function hE(t){const e=X(),n=V.innerParams.get(this);if(!e||yt(e,n.hideClass.popup))return $e("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=dE(t),i=Object.assign({},n,s);Td(this,i),V.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const dE=t=>{const e={};return Object.keys(t).forEach(n=>{hd(n)?e[n]=t[n]:$e(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function fE(){const t=V.domCache.get(this),e=V.innerParams.get(this);if(!e){Rd(this);return}t.popup&&F.swalCloseEventFinishedCallback&&(F.swalCloseEventFinishedCallback(),delete F.swalCloseEventFinishedCallback),F.deferDisposalTimer&&(clearTimeout(F.deferDisposalTimer),delete F.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),pE(this)}const pE=t=>{Rd(t),delete t.params,delete F.keydownHandler,delete F.keydownTarget,delete F.currentInstance},Rd=t=>{t.isAwaitingPromise()?(Nr(V,t),V.awaitingPromise.set(t,!0)):(Nr(_s,t),Nr(V,t))},Nr=(t,e)=>{for(const n in t)t[n].delete(e)},Ld=Object.freeze(Object.defineProperty({__proto__:null,_destroy:fE,close:ti,closeModal:ti,closePopup:ti,closeToast:ti,disableButtons:rE,disableInput:aE,disableLoading:al,enableButtons:iE,enableInput:oE,getInput:Ub,getProgressSteps:uE,handleAwaitingPromise:Ks,hideLoading:al,isAwaitingPromise:Jb,rejectPromise:eE,resetValidationMessage:lE,showValidationMessage:cE,update:hE},Symbol.toStringTag,{value:"Module"})),gE=t=>{const e=V.innerParams.get(t);t.disableButtons(),e.input?xd(t,"confirm"):$a(t,!0)},mE=t=>{const e=V.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?xd(t,"deny"):Ua(t,!1)},yE=(t,e)=>{t.disableButtons(),e(Hn.cancel)},xd=(t,e)=>{const n=V.innerParams.get(t);if(!n.input)return rn(`The "input" parameter is needed to be set when using returnInputValueOn${Na(e)}`);const s=Ob(t,n);n.inputValidator?vE(t,s,e):t.getInput().checkValidity()?e==="deny"?Ua(t,s):$a(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},vE=(t,e,n)=>{const s=V.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>$s(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Ua(t,e):$a(t,e)})},Ua=(t,e)=>{const n=V.innerParams.get(t||globalThis);n.showLoaderOnDeny&&Ln(Rt()),n.preDeny?(V.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>$s(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Ks(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Md(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},ll=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Md=(t,e)=>{t.rejectPromise(e)},$a=(t,e)=>{const n=V.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&Ln(),n.preConfirm?(t.resetValidationMessage(),V.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>$s(n.preConfirm(e,n.validationMessage))).then(i=>{Ke(ar())||i===!1?(t.hideLoading(),Ks(t)):ll(t,typeof i>"u"?e:i)}).catch(i=>Md(t||globalThis,i))):ll(t,e)},wE=(t,e,n)=>{V.innerParams.get(t).toast?bE(t,e,n):(TE(e),_E(e),CE(t,e,n))},bE=(t,e,n)=>{e.popup.onclick=()=>{const s=V.innerParams.get(t);s&&(EE(s)||s.timer||s.input)||n(Hn.close)}},EE=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let ki=!1;const TE=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(ki=!0)}}},_E=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(ki=!0)}}},CE=(t,e,n)=>{e.container.onclick=s=>{const i=V.innerParams.get(t);if(ki){ki=!1;return}s.target===e.container&&or(i.allowOutsideClick)&&n(Hn.backdrop)}},IE=t=>typeof t=="object"&&t.jquery,ul=t=>t instanceof Element||IE(t),SE=t=>{const e={};return typeof t[0]=="object"&&!ul(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||ul(i)?e[n]=i:i!==void 0&&rn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function AE(...t){const e=this;return new e(...t)}function kE(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const DE=()=>F.timeout&&F.timeout.getTimerLeft(),Fd=()=>{if(F.timeout)return mw(),F.timeout.stop()},Bd=()=>{if(F.timeout){const t=F.timeout.start();return Fa(t),t}},NE=()=>{const t=F.timeout;return t&&(t.running?Fd():Bd())},PE=t=>{if(F.timeout){const e=F.timeout.increase(t);return Fa(e,!0),e}},OE=()=>F.timeout&&F.timeout.isRunning();let hl=!1;const Eo={};function RE(t="data-swal-template"){Eo[t]=this,hl||(document.body.addEventListener("click",LE),hl=!0)}const LE=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Eo){const s=e.getAttribute(n);if(s){Eo[n].fire({template:s});return}}},xE=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:SE,bindClickHandler:RE,clickCancel:qb,clickConfirm:Ad,clickDeny:jb,enableLoading:Ln,fire:AE,getActions:Hs,getCancelButton:Xt,getCloseButton:Ra,getConfirmButton:it,getContainer:Pe,getDenyButton:Rt,getFocusableElements:La,getFooter:md,getHtmlContainer:Ai,getIcon:qs,getImage:pd,getInputLabel:hw,getLoader:qn,getPopup:X,getTimerLeft:DE,getTimerProgressBar:cr,getTitle:fd,getValidationMessage:ar,increaseTimer:PE,isDeprecatedParameter:vo,isLoading:fw,isTimerRunning:OE,isUpdatableParameter:hd,isValidParameter:ud,isVisible:$b,mixin:kE,resumeTimer:Bd,showLoading:Ln,stopTimer:Fd,toggleTimer:NE},Symbol.toStringTag,{value:"Module"}));let To;class zn{constructor(...e){if(typeof window>"u")return;To=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);V.promise.set(this,s)}_main(e,n={}){lw(Object.assign({},n,e)),F.currentInstance&&(F.currentInstance._destroy(),xa()&&_d()),F.currentInstance=this;const s=FE(e,n);gb(s),Object.freeze(s),F.timeout&&(F.timeout.stop(),delete F.timeout),clearTimeout(F.restoreFocusTimeout);const i=BE(this);return Td(this,s),V.innerParams.set(this,s),ME(this,i,s)}then(e){return V.promise.get(this).then(e)}finally(e){return V.promise.get(this).finally(e)}}const ME=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};_s.swalPromiseResolve.set(t,s),_s.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>gE(t),e.denyButton.onclick=()=>mE(t),e.cancelButton.onclick=()=>yE(t,r),e.closeButton.onclick=()=>r(Hn.close),wE(t,e,r),Hb(t,F,n,r),Pb(t,n),Sb(n),VE(F,n,r),UE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),FE=(t,e)=>{const n=rb(t),s=Object.assign({},yn,e,n,t);return s.showClass=Object.assign({},yn.showClass,s.showClass),s.hideClass=Object.assign({},yn.hideClass,s.hideClass),s},BE=t=>{const e={popup:X(),container:Pe(),actions:Hs(),confirmButton:it(),denyButton:Rt(),cancelButton:Xt(),loader:qn(),closeButton:Ra(),validationMessage:ar(),progressSteps:gd()};return V.domCache.set(t,e),e},VE=(t,e,n)=>{const s=cr();Oe(s),e.timer&&(t.timeout=new mb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(be(s),Je(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Fa(e.timer)})))},UE=(t,e)=>{if(!e.toast){if(!or(e.allowEnterKey))return jE();$E(t,e)||bo(e,-1,1)}},$E=(t,e)=>e.focusDeny&&Ke(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ke(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ke(t.confirmButton)?(t.confirmButton.focus(),!0):!1,jE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(zn.prototype,Ld);Object.assign(zn,xE);Object.keys(Ld).forEach(t=>{zn[t]=function(...e){if(To)return To[t](...e)}});zn.DismissReason=Hn;zn.version="11.4.8";const Cs=zn;Cs.default=Cs;const an=[];function hr(t,e=Ae){let n;const s=new Set;function i(a){if(Zt(t,a)&&(t=a,n)){const c=!an.length;for(const l of s)l[1](),an.push(l,t);if(c){for(let l=0;l<an.length;l+=2)an[l][0](an[l+1]);an.length=0}}}function r(a){i(a(t))}function o(a,c=Ae){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||Ae),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Pr=hr({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),_o=hr(""),Co=hr(""),Io=hr(""),qE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},HE=async t=>{try{await ka(On(He,"Pacientes",t.id),t)}catch(e){console.log(e)}};function dl(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function zE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=fl(dl(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=wl()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);Qe(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=dl(i,n,o);s[o]?s[o].p(a,r):(s[o]=fl(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){So(s,i),i&&Ue(e)}}}function KE(t){let e;return{c(){e=S("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){Qe(n,e,s)},p:Ae,d(n){n&&Ue(e)}}}function fl(t){let e,n=`${t[6].apellido}, ${t[6].nombre}${t[6].plan=="particular"?"":" -"+t[6].nroSocio+" - plan "+t[6].plan} `,s;return{c(){e=S("option"),s=ae(n),e.__value=t[8],e.value=e.__value},m(i,r){Qe(i,e,r),w(e,s)},p(i,r){r&1&&n!==(n=`${i[6].apellido}, ${i[6].nombre}${i[6].plan=="particular"?"":" -"+i[6].nroSocio+" - plan "+i[6].plan} `)&&ot(s,n)},d(i){i&&Ue(e)}}}function GE(t){let e,n,s;function i(a,c){return a[0].length==0?KE:zE}let r=i(t),o=r(t);return{c(){e=S("select"),o.c(),g(e,"name","select-pacientes"),g(e,"class","select-Pacientes svelte-2shrp8"),g(e,"id","selectPacientes"),g(e,"size",5),t[1]===void 0&&bn(()=>t[4].call(e))},m(a,c){Qe(a,e,c),o.m(e,null),wn(e,t[1]),n||(s=[ie(e,"change",t[2]),ie(e,"change",t[4])],n=!0)},p(a,[c]){r===(r=i(a))&&o?o.p(a,c):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),c&2&&wn(e,a[1])},i:Ae,o:Ae,d(a){a&&Ue(e),o.d(),n=!1,Tt(s)}}}function WE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r;const o=El(),a=l=>{const u=l.target.value;n(3,i=s[u].plan),o("cambioSelectPaciente",u),console.log("dispatch cambioSelectPaciente, valorindiceSelectPaciente: ",u)};function c(){r=Ao(this),n(1,r)}return t.$$set=l=>{"pacientesFiltrada"in l&&n(0,s=l.pacientesFiltrada),"planSelect"in l&&n(3,i=l.planSelect)},[s,r,a,i,c]}class QE extends Mn{constructor(e){super(),xn(this,e,WE,GE,Zt,{pacientesFiltrada:0,planSelect:3})}}function YE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,E,v,A,C,U,L,$,G,K,B,W,J,Re,se,Me,N,oe,Ye,ye,ft,je,pt,Xe,T,q,Le,qe;return $=new QE({props:{pacientesFiltrada:t[1],planSelect:t[4]}}),$.$on("cambioSelectPaciente",t[15]),T=new nf({props:{planes:t[3],planSeleccionado:t[9],SelectPlanVisible:t[5]}}),T.$on("cambioPlan",t[14]),T.$on("clickCheckPlan",t[16]),{c(){e=S("body"),n=S("div"),s=S("div"),i=S("button"),r=ae("create"),a=te(),c=S("button"),l=ae("update"),h=te(),d=S("button"),p=ae("delete"),E=te(),v=S("div"),A=S("label"),A.textContent="filtrar por apellido",C=S("input"),U=te(),L=S("div"),cs($.$$.fragment),G=te(),K=S("div"),B=S("label"),B.textContent="nombre",W=S("input"),J=te(),Re=S("label"),Re.textContent="apellido",se=S("input"),Me=te(),N=S("div"),oe=S("label"),oe.textContent="nº socio",Ye=te(),ye=S("input"),ft=te(),je=S("label"),pt=ae(t[10]),Xe=te(),cs(T.$$.fragment),i.disabled=o=!t[6]||!t[7]||!t[9]||!t[8],g(i,"class","svelte-v8du9y"),c.disabled=u=!t[6]||!t[7]||!t[9]||!t[8]||!t[2],g(c,"class","svelte-v8du9y"),d.disabled=m=!t[2],g(d,"class","svelte-v8du9y"),g(s,"class","buttons svelte-v8du9y"),g(n,"id","botones"),g(n,"class","svelte-v8du9y"),g(A,"for","filterPrefix"),g(A,"class","svelte-v8du9y"),g(C,"name","filterPrefix"),g(C,"placeholder","filter prefix"),g(C,"class","svelte-v8du9y"),g(v,"id","filter"),g(v,"class","svelte-v8du9y"),g(L,"id","selectPacientes"),g(L,"class","svelte-v8du9y"),g(B,"for","nombre"),g(B,"class","svelte-v8du9y"),g(W,"name","nombre"),g(W,"placeholder","nombre"),g(W,"class","svelte-v8du9y"),g(Re,"for","apellido"),g(Re,"class","svelte-v8du9y"),g(se,"name","apellido"),g(se,"placeholder","apellido"),g(se,"class","svelte-v8du9y"),g(K,"id","formInputsI"),g(K,"class","svelte-v8du9y"),g(oe,"for","nroSocio"),g(oe,"class","svelte-v8du9y"),g(ye,"name","nroSocio"),g(ye,"placeholder","nro de Socio"),g(ye,"class","svelte-v8du9y"),g(je,"id","labelPlan"),g(je,"for","plan"),g(je,"class","svelte-v8du9y"),g(N,"id","formInputsD"),g(N,"class","svelte-v8du9y"),g(e,"class","svelte-v8du9y")},m(x,Z){Qe(x,e,Z),w(e,n),w(n,s),w(s,i),w(i,r),w(s,a),w(s,c),w(c,l),w(s,h),w(s,d),w(d,p),w(e,E),w(e,v),w(v,A),w(v,C),Te(C,t[0]),w(e,U),w(e,L),Tn($,L,null),w(e,G),w(e,K),w(K,B),w(K,W),Te(W,t[6]),w(K,J),w(K,Re),w(K,se),Te(se,t[7]),w(e,Me),w(e,N),w(N,oe),w(N,Ye),w(N,ye),Te(ye,t[8]),w(N,ft),w(N,je),w(je,pt),w(N,Xe),Tn(T,N,null),q=!0,Le||(qe=[ie(i,"click",t[11]),ie(c,"click",t[12]),ie(d,"click",t[13]),ie(C,"input",t[19]),ie(W,"input",t[20]),ie(se,"input",t[21]),ie(ye,"input",t[22])],Le=!0)},p(x,Z){(!q||Z[0]&960&&o!==(o=!x[6]||!x[7]||!x[9]||!x[8]))&&(i.disabled=o),(!q||Z[0]&964&&u!==(u=!x[6]||!x[7]||!x[9]||!x[8]||!x[2]))&&(c.disabled=u),(!q||Z[0]&4&&m!==(m=!x[2]))&&(d.disabled=m),Z[0]&1&&C.value!==x[0]&&Te(C,x[0]);const Bt={};Z[0]&2&&(Bt.pacientesFiltrada=x[1]),Z[0]&16&&(Bt.planSelect=x[4]),$.$set(Bt),Z[0]&64&&W.value!==x[6]&&Te(W,x[6]),Z[0]&128&&se.value!==x[7]&&Te(se,x[7]),Z[0]&256&&ye.value!==x[8]&&Te(ye,x[8]),(!q||Z[0]&1024)&&ot(pt,x[10]);const gt={};Z[0]&8&&(gt.planes=x[3]),Z[0]&512&&(gt.planSeleccionado=x[9]),Z[0]&32&&(gt.SelectPlanVisible=x[5]),T.$set(gt)},i(x){q||(En($.$$.fragment,x),En(T.$$.fragment,x),q=!0)},o(x){as($.$$.fragment,x),as(T.$$.fragment,x),q=!1},d(x){x&&Ue(e),_n($),_n(T),Le=!1,Tt(qe)}}}function XE(t,e,n){let s,i,r,o,a;$t(t,Pr,T=>n(24,i=T)),$t(t,Io,T=>n(25,r=T)),$t(t,Co,T=>n(26,o=T)),$t(t,_o,T=>n(27,a=T));let c=[],l=["nombre","apellido","nroSocio","plan","createdAt"],u=[],h="",d,p;bl(()=>{const T=_t(He,"Pacientes"),Le=ss(T,fo("apellido"));p=mo(Le,x=>{n(17,c=x.docs.map(Z=>({...Z.data(),id:Z.id}))),qE(c,l),c.forEach(Z=>{HE(Z)}),document.getElementById("selectPacientes").selected=U},x=>{console.log(x)}),(async()=>{const x=_t(He,"planes"),Z=await po(x);n(3,u=Z.docs.map(Bt=>Bt.data().plan)),u.push("particular"),u.sort(),n(4,h="particular")})()}),Kd(p);let m="",E="",v="",A="",C="",U=0,L,$="plan";Kn(Pr,i=s,i);const G=T=>{n(6,E=T?T.nombre:""),n(7,v=T?T.apellido:""),n(8,A=T?T.nroSocio:""),n(9,C=T?T.plan:"")},K=async()=>{try{await id(_t(He,"Pacientes"),{nombre:E,apellido:v,nroSocio:A,createdAt:new Date().toLocaleDateString(),plan:C}),mn({text:"Nuevo paciente agregado"}).showToast()}catch(T){console.error(T)}},B=()=>{n(17,c=c.concat({nombre:E,apellido:v})),n(18,U=c.length-1),K(),n(6,E=n(7,v=n(9,C=n(8,A=""))))},W=async T=>{try{await ka(On(He,"Pacientes",T.id),T),mn({text:`paciente ${T.apellido}, ${T.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(q){console.error(q)}},J=()=>{n(2,s.nombre=E,s),n(2,s.apellido=v,s),n(9,C=s.plan),n(2,s.nroSocio=A,s),n(2,s),n(1,L),n(18,U),n(0,m),n(17,c),n(17,c),W(s)},Re=async T=>{try{await go(On(He,"Pacientes",T.id)),mn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(Le){console.error(Le)}const q=ss(_t(He,"sesiones"),ho("pacienteID","==",T.id));console.log(`desde delete q=pacientes a borrar ${q} - paciente: ${T.nombre} ${T.apellido} ${T.id}`);try{(await po(q)).forEach(qe=>{go(qe.ref)})}catch(Le){console.log(Le)}},se=()=>{const T=c.indexOf(s);Cs.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(q=>{q.isConfirmed&&(Cs.fire("Deleted!","Your file has been deleted.","success"),Re(c[U]),n(17,c=[...c.slice(0,T),...c.slice(T+1)]),n(6,E=n(7,v=n(8,A=n(9,C="")))),n(18,U=Math.min(U,L.length-2)))})},Me=T=>{n(2,s.plan=T,s),n(2,s.nombre=E,s),n(2,s.apellido=v,s),n(2,s.nroSocio=A,s),n(1,L[U].plan=T,L),W(s)},N=T=>{n(9,C=T.detail.valor.planSeleccionado),s.plan!=C&&Me(C)},oe=T=>{T?(n(10,$="particular"),n(5,d=!1)):(n(10,$="plan"),n(5,d=!0))},Ye=T=>{n(18,U=T.detail),n(9,C=L[U].plan);const q=C=="particular";oe(q)},ye=T=>{const q=T.detail.valor.SelectPlanVisible;q?q&&C=="particular"&&n(9,C="210"):n(9,C="particular"),Me(C),oe(!q)};function ft(){m=this.value,n(0,m)}function je(){E=this.value,n(6,E)}function pt(){v=this.value,n(7,v)}function Xe(){A=this.value,n(8,A)}return t.$$.update=()=>{t.$$.dirty[0]&131073&&n(1,L=m?c.filter(T=>`${T.apellido}, ${T.nombre}`.toLowerCase().startsWith(m.toLowerCase())):c.map(T=>({nombre:T.nombre,apellido:T.apellido,plan:T.plan,nroSocio:T.nroSocio,id:T.id}))),t.$$.dirty[0]&262146&&n(2,s=L[U]),t.$$.dirty[0]&4&&s&&(Kn(Pr,i=s,i),Kn(_o,a=s.apellido,a),Kn(Co,o=s.nombre,o),Kn(Io,r=s.id,r)),t.$$.dirty[0]&4&&G(s)},[m,L,s,u,h,d,E,v,A,C,$,B,J,se,N,Ye,ye,c,U,ft,je,pt,Xe]}class JE extends Mn{constructor(e){super(),xn(this,e,XE,YE,Zt,{},null,[-1,-1])}}function pl(t,e,n){const s=t.slice();return s[28]=e[n],s}function gl(t){let e,n,s=t[28].diaSesion+"",i,r,o=t[28].valorSesion+"",a,c,l=t[28].fechaPago+"",u,h,d=t[28].valorPago+"",p,m,E;return{c(){e=S("option"),n=ae("dia sesion: "),i=ae(s),r=ae(" - valor sesion: "),a=ae(o),c=ae(`
              - dia pago `),u=ae(l),h=ae(" - valor pago "),p=ae(d),m=te(),g(e,"class"," svelte-40a4zh"),e.__value=E=t[28].id,e.value=e.__value},m(v,A){Qe(v,e,A),w(e,n),w(e,i),w(e,r),w(e,a),w(e,c),w(e,u),w(e,h),w(e,p),w(e,m)},p(v,A){A&1&&s!==(s=v[28].diaSesion+"")&&ot(i,s),A&1&&o!==(o=v[28].valorSesion+"")&&ot(a,o),A&1&&l!==(l=v[28].fechaPago+"")&&ot(u,l),A&1&&d!==(d=v[28].valorPago+"")&&ot(p,d),A&1&&E!==(E=v[28].id)&&(e.__value=E,e.value=e.__value)},d(v){v&&Ue(e)}}}function ml(t){let e=Object.values(t[28]).includes(t[3]),n,s=e&&gl(t);return{c(){s&&s.c(),n=wl()},m(i,r){s&&s.m(i,r),Qe(i,n,r)},p(i,r){r&9&&(e=Object.values(i[28]).includes(i[3])),e?s?s.p(i,r):(s=gl(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&Ue(n)}}}function ZE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,E,v,A,C,U,L,$,G,K,B,W,J,Re;return{c(){e=S("div"),n=S("form"),s=S("div"),i=S("div"),r=S("label"),r.textContent="pago",o=S("input"),a=te(),c=S("label"),c.textContent="valor sesion",l=S("input"),u=te(),h=S("div"),d=S("label"),d.textContent="Dia Sesion",p=S("input"),m=te(),E=S("label"),E.textContent="Fecha Pago",v=S("input"),A=te(),C=S("div"),U=S("button"),U.textContent="update",L=te(),$=S("button"),$.textContent="delete",G=te(),K=S("button"),K.textContent="Agregar sesión",B=te(),W=S("button"),W.textContent="registros mes actual",g(r,"for","valorPago"),g(r,"class","svelte-40a4zh"),g(o,"name","valorPago"),g(o,"type","number"),g(o,"step","100"),g(o,"min","0"),g(o,"placeholder","Valor pago"),g(o,"class","svelte-40a4zh"),g(c,"for","valorSesion"),g(c,"class","svelte-40a4zh"),g(l,"name","valorSesion"),g(l,"type","number"),g(l,"step","100"),g(l,"min","0"),g(l,"placeholder","Valor sesión"),g(l,"class","svelte-40a4zh"),g(i,"id","inputsFormSesionesI"),g(i,"class","svelte-40a4zh"),g(d,"for","diaSesion"),g(d,"class","svelte-40a4zh"),g(p,"name","diaSesion"),g(p,"type","date"),g(p,"placeholder","Día sesión"),g(p,"class","svelte-40a4zh"),g(E,"for","fechaPago"),g(E,"class","svelte-40a4zh"),g(v,"name","fechaPago"),g(v,"type","date"),g(v,"placeholder","Fecha pago"),g(v,"class","svelte-40a4zh"),g(h,"id","inputsFormSesionesD"),g(h,"class","svelte-40a4zh"),g(U,"class","svelte-40a4zh"),g($,"class","svelte-40a4zh"),g(K,"class","svelte-40a4zh"),g(W,"class","svelte-40a4zh"),g(C,"id","botonesFormSesiones"),g(C,"class","buttons svelte-40a4zh"),g(s,"id","form-Sesiones"),g(s,"class","svelte-40a4zh"),g(n,"class","svelte-40a4zh"),g(e,"id","contenedor-form-sesiones"),g(e,"class","svelte-40a4zh")},m(se,Me){Qe(se,e,Me),w(e,n),w(n,s),w(s,i),w(i,r),w(i,o),Te(o,t[4]),w(i,a),w(i,c),w(i,l),Te(l,t[5]),w(s,u),w(s,h),w(h,d),w(h,p),Te(p,t[6]),w(h,m),w(h,E),w(h,v),Te(v,t[7]),w(s,A),w(s,C),w(C,U),w(C,L),w(C,$),w(C,G),w(C,K),w(C,B),w(C,W),J||(Re=[ie(o,"input",t[19]),ie(l,"input",t[20]),ie(p,"input",t[21]),ie(v,"input",t[22]),ie(U,"click",t[23]),ie($,"click",t[24]),ie(K,"click",t[11]),ie(W,"click",t[25]),ie(n,"submit",jd(t[17]))],J=!0)},p(se,Me){Me&16&&ai(o.value)!==se[4]&&Te(o,se[4]),Me&32&&ai(l.value)!==se[5]&&Te(l,se[5]),Me&64&&Te(p,se[6]),Me&128&&Te(v,se[7])},d(se){se&&Ue(e),J=!1,Tt(Re)}}}function e0(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,E,v=t[15](t[3])+"",A,C,U,L,$=t[0],G=[];for(let B=0;B<$.length;B+=1)G[B]=ml(pl(t,$,B));let K=ZE(t);return{c(){e=S("main"),n=S("body"),s=S("h4"),i=ae("Paciente: "),r=ae(t[8]),o=ae(", "),a=ae(t[9]),c=te(),l=S("div"),u=S("select");for(let B=0;B<G.length;B+=1)G[B].c();h=te(),d=S("p"),d.textContent=`total general:${t[14]()}`,p=te(),m=S("p"),E=ae("total por paciente:"),A=ae(v),C=te(),K&&K.c(),g(s,"class","svelte-40a4zh"),g(u,"size",5),g(u,"class","svelte-40a4zh"),t[1]===void 0&&bn(()=>t[18].call(u)),g(d,"id","totalGeneral"),g(d,"class","svelte-40a4zh"),g(m,"class","svelte-40a4zh"),g(l,"id","select"),g(l,"class","svelte-40a4zh"),g(n,"class","svelte-40a4zh"),g(e,"class","svelte-40a4zh")},m(B,W){Qe(B,e,W),w(e,n),w(n,s),w(s,i),w(s,r),w(s,o),w(s,a),w(n,c),w(n,l),w(l,u);for(let J=0;J<G.length;J+=1)G[J]&&G[J].m(u,null);wn(u,t[1]),w(l,h),w(l,d),w(l,p),w(l,m),w(m,E),w(m,A),w(n,C),K&&K.m(n,null),U||(L=[ie(u,"change",t[10]),ie(u,"change",t[18])],U=!0)},p(B,[W]){if(W&256&&ot(r,B[8]),W&512&&ot(a,B[9]),W&9){$=B[0];let J;for(J=0;J<$.length;J+=1){const Re=pl(B,$,J);G[J]?G[J].p(Re,W):(G[J]=ml(Re),G[J].c(),G[J].m(u,null))}for(;J<G.length;J+=1)G[J].d(1);G.length=$.length}W&3&&wn(u,B[1]),W&8&&v!==(v=B[15](B[3])+"")&&ot(A,v),K.p(B,W)},i:Ae,o:Ae,d(B){B&&Ue(e),So(G,B),K&&K.d(),U=!1,Tt(L)}}}function t0(t,e,n){let s,i,r;$t(t,Io,N=>n(3,s=N)),$t(t,_o,N=>n(8,i=N)),$t(t,Co,N=>n(9,r=N));let{sesiones:o}=e,a;bl(()=>{const N=[],oe=_t(He,"sesiones"),Ye=_t(He,"Pacientes"),ye=ss(oe,fo("diaSesion")),ft=ss(Ye,fo("apellido")),je=mo(ye,Xe=>{n(0,o=Xe.docs.map(q=>({id:q.id,...q.data()})));const T=(q,Le)=>q.diaSesion<Le.diaSesion?-1:q.diaSesion>Le.diaSesion?1:0;o.sort(T)});console.log("desde onMount CRUDSesiones",o),N.push(je);const pt=mo(ft,Xe=>{n(16,a=Xe.docs.map(T=>({id:T.id,...T.data()})))});return N.push(pt),()=>{N.forEach(Xe=>Xe())}});let c,l;const u=N=>{n(1,c=N.target.value),console.log(o),n(2,l=o.find(oe=>oe.id===c)),console.log("selectedSession",l),n(4,m=l.valorPago),n(5,E=l.valorSesion),n(7,A=l.fechaPago),n(6,v=l.diaSesion)},h=async()=>{console.log("Add sesion",l);try{const N=await id(_t(He,"sesiones"),{valorPago:m,valorSesion:E,diaSesion:v,fechaPago:A,pacienteID:s});console.log("sesion agregada"),mn({text:"Nueva sesion agregada"}).showToast(),n(1,c=N.id)}catch(N){console.error(N)}},d=async N=>{console.log("Update sesion",N);try{await ka(On(He,"sesiones",N.id),{valorPago:m,valorSesion:E,fechaPago:A,diaSesion:v}),mn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(oe){console.log(oe)}},p=async N=>{console.log("Delete sesion",N);try{await go(On(He,"sesiones",N.id)),mn({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(oe){console.error(oe)}};let m=5e3,E=5e3,v=new Date().toISOString().slice(0,10),A=new Date().toISOString().slice(0,10);const C=async()=>{const N=_t(He,"sesiones"),oe=new Date,Ye=oe.getMonth()+1,ye=oe.getFullYear(),ft=(Ye-1).toString().padStart(2,"0"),je=ye.toString(),pt=`${je}-${ft}-01`,Xe=`${je}-${ft}-31`,T=ss(N,ho("diaSesion",">=",pt),ho("diaSesion","<=",Xe));try{const q=await po(T),Le=q.docs.map(Z=>Z.data());console.log("sesiones por mes actual",Le);let qe=0;q.forEach(Z=>{console.log(a);let Bt=Z.data().pacienteID;const gt=a.find(Vd=>Vd.id==Bt);console.log(gt);const dr=Z.data().valorPago;(typeof dr=="number"||dr==null)&&(gt.plan=="particular"?(qe+=dr,console.log(`paciente ${gt.apellido}, valor pago ${Z.data().valorPago}, total acumulado ${qe}`)):(qe+=2700,console.log(`paciente ${gt.apellido}, valor pago 2700, total acumulado ${qe}`)))}),console.log("Total pagos mes actual: ",qe);const x=document.querySelector("#totalGeneral");return x.innerHTML="total mes: $"+qe.toString(),qe}catch(q){return console.error("Error al obtener las sesiones y los pagos:",q),[]}},U=()=>o.reduce((N,oe)=>N+oe.valorPago,0),L=N=>o.filter(Ye=>Ye.pacienteID===N).reduce((Ye,ye)=>Ye+ye.valorPago,0);function $(N){Gd.call(this,t,N)}function G(){c=Ao(this),n(1,c),n(0,o)}function K(){m=ai(this.value),n(4,m)}function B(){E=ai(this.value),n(5,E)}function W(){v=this.value,n(6,v)}function J(){A=this.value,n(7,A)}const Re=()=>d(l),se=()=>p(l),Me=()=>C();return t.$$set=N=>{"sesiones"in N&&n(0,o=N.sesiones)},t.$$.update=()=>{t.$$.dirty&65537&&console.log("luego de las subscripciones a pacientes y sesiones",o,a),t.$$.dirty&7&&(n(2,l=o.find(N=>N.id===c)),console.log(l||"sin seleccion de sesion")),t.$$.dirty&8&&L(s)},U(),C(),[o,c,l,s,m,E,v,A,i,r,u,h,d,p,C,L,a,$,G,K,B,W,J,Re,se,Me]}class n0 extends Mn{constructor(e){super(),xn(this,e,t0,e0,Zt,{sesiones:0})}}function s0(t){let e,n,s,i,r,o,a,c,l;return r=new JE({}),c=new n0({props:{sesiones:t[0]}}),{c(){e=S("body"),n=S("div"),s=S("h5"),s.textContent="CRUD Pacientes",i=te(),cs(r.$$.fragment),o=te(),a=S("div"),cs(c.$$.fragment),g(n,"class","contenedor-pacientes svelte-1y3ujd1"),g(a,"class","contenedor-sesiones svelte-1y3ujd1"),g(e,"class","svelte-1y3ujd1")},m(u,h){Qe(u,e,h),w(e,n),w(n,s),w(n,i),Tn(r,n,null),w(e,o),w(e,a),Tn(c,a,null),l=!0},p:Ae,i(u){l||(En(r.$$.fragment,u),En(c.$$.fragment,u),l=!0)},o(u){as(r.$$.fragment,u),as(c.$$.fragment,u),l=!1},d(u){u&&Ue(e),_n(r),_n(c)}}}function i0(t){return[[]]}class r0 extends Mn{constructor(e){super(),xn(this,e,i0,s0,Zt,{})}}function o0(t){let e,n,s,i;return s=new r0({}),{c(){e=S("main"),n=S("div"),cs(s.$$.fragment),g(n,"class","contenedorPadre svelte-1cwonxg"),g(e,"class","svelte-1cwonxg")},m(r,o){Qe(r,e,o),w(e,n),Tn(s,n,null),i=!0},p:Ae,i(r){i||(En(s.$$.fragment,r),i=!0)},o(r){as(s.$$.fragment,r),i=!1},d(r){r&&Ue(e),_n(s)}}}class a0 extends Mn{constructor(e){super(),xn(this,e,null,o0,Zt,{})}}new a0({target:document.getElementById("app")});
