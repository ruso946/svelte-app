(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ce(){}function ml(t){return t()}function Ua(){return Object.create(null)}function pt(t){t.forEach(ml)}function oi(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Bd(t){return Object.keys(t).length===0}function Fd(t,...e){if(t==null)return Ce;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Rt(t,e,n){t.$$.on_destroy.push(Fd(e,n))}function jn(t,e,n){return t.set(n),e}function E(t,e){t.appendChild(e)}function je(t,e,n){t.insertBefore(e,n||null)}function xe(t){t.parentNode&&t.parentNode.removeChild(t)}function _o(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function se(t){return document.createTextNode(t)}function ee(){return se(" ")}function yl(){return se("")}function J(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Vd(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ai(t){return t===""?null:+t}function Ud(t){return Array.from(t.childNodes)}function at(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e){t.value=e??""}function dn(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function $d(t){for(const e of t.options)if(!e.disabled)return e}function Io(t){const e=t.querySelector(":checked")||$d(t);return e&&e.__value}function zs(t,e,n){t.classList[n?"add":"remove"](e)}function jd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let ts;function Wn(t){ts=t}function So(){if(!ts)throw new Error("Function called outside component initialization");return ts}function vl(t){So().$$.on_mount.push(t)}function qd(t){So().$$.on_destroy.push(t)}function wl(){const t=So();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=jd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Hd(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const en=[],$a=[];let rn=[];const ja=[],Kd=Promise.resolve();let Or=!1;function zd(){Or||(Or=!0,Kd.then(bl))}function fn(t){rn.push(t)}const fr=new Set;let Jt=0;function bl(){if(Jt!==0)return;const t=ts;do{try{for(;Jt<en.length;){const e=en[Jt];Jt++,Wn(e),Gd(e.$$)}}catch(e){throw en.length=0,Jt=0,e}for(Wn(null),en.length=0,Jt=0;$a.length;)$a.pop()();for(let e=0;e<rn.length;e+=1){const n=rn[e];fr.has(n)||(fr.add(n),n())}rn.length=0}while(en.length);for(;ja.length;)ja.pop()();Or=!1,fr.clear(),Wn(t)}function Gd(t){if(t.fragment!==null){t.update(),pt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fn)}}function Wd(t){const e=[],n=[];rn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),rn=e}const ti=new Set;let Qd;function pn(t,e){t&&t.i&&(ti.delete(t),t.i(e))}function ns(t,e,n,s){if(t&&t.o){if(ti.has(t))return;ti.add(t),Qd.c.push(()=>{ti.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ss(t){t&&t.c()}function gn(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||fn(()=>{const o=t.$$.on_mount.map(ml).filter(oi);t.$$.on_destroy?t.$$.on_destroy.push(...o):pt(o),t.$$.on_mount=[]}),r.forEach(fn)}function mn(t,e){const n=t.$$;n.fragment!==null&&(Wd(n.after_update),pt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yd(t,e){t.$$.dirty[0]===-1&&(en.push(t),zd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function kn(t,e,n,s,i,r,o,a=[-1]){const c=ts;Wn(t);const l=t.$$={fragment:null,ctx:[],props:r,update:Ce,not_equal:i,bound:Ua(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ua(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&Yd(t,h)),d}):[],l.update(),u=!0,pt(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Ud(e.target);l.fragment&&l.fragment.l(h),h.forEach(xe)}else l.fragment&&l.fragment.c();e.intro&&pn(t.$$.fragment),gn(t,e.target,e.anchor,e.customElement),bl()}Wn(c)}class Dn{$destroy(){mn(this,1),this.$destroy=Ce}$on(e,n){if(!oi(n))return Ce;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Bd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function qa(t,e,n){const s=t.slice();return s[12]=e[n],s}function Ha(t){let e,n=t[12]+"",s,i;return{c(){e=k("option"),s=se(n),e.__value=i=t[12],e.value=e.__value},m(r,o){je(r,e,o),E(e,s)},p(r,o){o&4&&n!==(n=r[12]+"")&&at(s,n),o&4&&i!==(i=r[12])&&(e.__value=i,e.value=e.__value)},d(r){r&&xe(e)}}}function Xd(t){let e,n,s,i,r,o,a=t[2],c=[];for(let l=0;l<a.length;l+=1)c[l]=Ha(qa(t,a,l));return{c(){e=k("div"),n=k("input"),s=ee(),i=k("select");for(let l=0;l<c.length;l+=1)c[l].c();m(n,"type","checkbox"),m(n,"name","CheckBoxParticular"),m(n,"id","CheckBoxParticular"),m(i,"name","plan"),m(i,"id","plan"),m(i,"class","svelte-1de4xhy"),t[1]===void 0&&fn(()=>t[7].call(i)),zs(i,"SelectPlanVisible",t[0]),zs(i,"SelectPlanHidden",t[3]),m(e,"id","selectPlanContainer"),m(e,"class","svelte-1de4xhy")},m(l,u){je(l,e,u),E(e,n),n.checked=t[0],E(e,s),E(e,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null);dn(i,t[1]),r||(o=[J(n,"change",t[6]),J(n,"change",t[4]),J(i,"change",t[7]),J(i,"change",t[5])],r=!0)},p(l,[u]){if(u&1&&(n.checked=l[0]),u&4){a=l[2];let h;for(h=0;h<a.length;h+=1){const d=qa(l,a,h);c[h]?c[h].p(d,u):(c[h]=Ha(d),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}u&6&&dn(i,l[1]),u&1&&zs(i,"SelectPlanVisible",l[0]),u&8&&zs(i,"SelectPlanHidden",l[3])},i:Ce,o:Ce,d(l){l&&xe(e),_o(c,l),r=!1,pt(o)}}}function Jd(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,o;const a=g=>{n(0,r=g)},c=()=>{u("clickCheckPlan",{valor:{SelectPlanVisible:r}})},l=g=>{var w=g.target.checked;a(w),c()},u=wl(),h=()=>{u("cambioPlan",{valor:{planSeleccionado:i}})};function d(){r=this.checked,n(0,r)}function p(){i=Io(this),n(1,i),n(2,s)}return t.$$set=g=>{"planes"in g&&n(2,s=g.planes),"planSeleccionado"in g&&n(1,i=g.planSeleccionado),"SelectPlanVisible"in g&&n(0,r=g.SelectPlanVisible)},t.$$.update=()=>{t.$$.dirty&1&&n(3,o=!r)},[r,i,s,o,l,h,d,p]}class Zd extends Dn{constructor(e){super(),kn(this,e,Jd,Xd,zt,{planes:2,planSeleccionado:1,SelectPlanVisible:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const El=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ef=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(El(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ef(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new tf;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nf=function(t){const e=El(t);return Tl.encodeByteArray(e,!0)},ci=function(t){return nf(t).replace(/\./g,"")},sf=function(t){try{return Tl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const of=()=>rf().__FIREBASE_DEFAULTS__,af=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sf(t[1]);return e&&JSON.parse(e)},Cl=()=>{try{return of()||af()||cf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lf=t=>{var e,n;return(n=(e=Cl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_l=t=>{const e=lf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uf=()=>{var t;return(t=Cl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Il(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ci(JSON.stringify(n)),ci(JSON.stringify(o)),a].join(".")}function df(){try{return typeof indexedDB=="object"}catch{return!1}}function ff(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="FirebaseError";class Gt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pf,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,a,s)}}function gf(t,e){return t.replace(mf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const mf=/\{\$([^}]+)}/g;function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ka(r)&&Ka(o)){if(!Rr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ka(t){return t!==null&&typeof t=="object"}/**
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
 */const Ot="[DEFAULT]";/**
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
 */class yf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wf(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vf(t){return t===Ot?void 0:t}function wf(t){return t.instantiationMode==="EAGER"}/**
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
 */class bf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const Ef={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Tf=H.INFO,Cf={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},_f=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Cf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Al{constructor(e){this.name=e,this._logLevel=Tf,this._logHandler=_f,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ef[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const If=(t,e)=>e.some(n=>t instanceof n);let za,Ga;function Sf(){return za||(za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Af(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,Lr=new WeakMap,Dl=new WeakMap,pr=new WeakMap,Ao=new WeakMap;function kf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(yt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kl.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function Df(t){if(Lr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Lr.set(t,e)}let xr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nf(t){xr=t(xr)}function Pf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gr(this),e,...n);return Dl.set(s,e.sort?e.sort():[e]),yt(s)}:Af().includes(t)?function(...e){return t.apply(gr(this),e),yt(kl.get(this))}:function(...e){return yt(t.apply(gr(this),e))}}function Of(t){return typeof t=="function"?Pf(t):(t instanceof IDBTransaction&&Df(t),If(t,Sf())?new Proxy(t,xr):t)}function yt(t){if(t instanceof IDBRequest)return kf(t);if(pr.has(t))return pr.get(t);const e=Of(t);return e!==t&&(pr.set(t,e),Ao.set(e,t)),e}const gr=t=>Ao.get(t);function Rf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=yt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(yt(o.result),c.oldVersion,c.newVersion,yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Lf=["get","getKey","getAll","getAllKeys","count"],xf=["put","add","delete","clear"],mr=new Map;function Wa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mr.get(e))return mr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Lf.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return mr.set(e,r),r}Nf(t=>({...t,get:(e,n,s)=>Wa(e,n)||t.get(e,n,s),has:(e,n)=>!!Wa(e,n)||t.has(e,n)}));/**
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
 */class Mf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Bf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mr="@firebase/app",Qa="0.9.4";/**
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
 */const Ut=new Al("@firebase/app"),Ff="@firebase/app-compat",Vf="@firebase/analytics-compat",Uf="@firebase/analytics",$f="@firebase/app-check-compat",jf="@firebase/app-check",qf="@firebase/auth",Hf="@firebase/auth-compat",Kf="@firebase/database",zf="@firebase/database-compat",Gf="@firebase/functions",Wf="@firebase/functions-compat",Qf="@firebase/installations",Yf="@firebase/installations-compat",Xf="@firebase/messaging",Jf="@firebase/messaging-compat",Zf="@firebase/performance",ep="@firebase/performance-compat",tp="@firebase/remote-config",np="@firebase/remote-config-compat",sp="@firebase/storage",ip="@firebase/storage-compat",rp="@firebase/firestore",op="@firebase/firestore-compat",ap="firebase",cp="9.17.2";/**
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
 */const Br="[DEFAULT]",lp={[Mr]:"fire-core",[Ff]:"fire-core-compat",[Uf]:"fire-analytics",[Vf]:"fire-analytics-compat",[jf]:"fire-app-check",[$f]:"fire-app-check-compat",[qf]:"fire-auth",[Hf]:"fire-auth-compat",[Kf]:"fire-rtdb",[zf]:"fire-rtdb-compat",[Gf]:"fire-fn",[Wf]:"fire-fn-compat",[Qf]:"fire-iid",[Yf]:"fire-iid-compat",[Xf]:"fire-fcm",[Jf]:"fire-fcm-compat",[Zf]:"fire-perf",[ep]:"fire-perf-compat",[tp]:"fire-rc",[np]:"fire-rc-compat",[sp]:"fire-gcs",[ip]:"fire-gcs-compat",[rp]:"fire-fst",[op]:"fire-fst-compat","fire-js":"fire-js",[ap]:"fire-js-all"};/**
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
 */const li=new Map,Fr=new Map;function up(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Fr.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Fr.set(e,t);for(const n of li.values())up(n,t);return!0}function Nl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new Sl("app","Firebase",hp);/**
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
 */class dp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Pl=cp;function Ol(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Br,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(n||(n=uf()),!n)throw vt.create("no-options");const r=li.get(i);if(r){if(Rr(n,r.options)&&Rr(s,r.config))return r;throw vt.create("duplicate-app",{appName:i})}const o=new bf(i);for(const c of Fr.values())o.addComponent(c);const a=new dp(n,s,o);return li.set(i,a),a}function Rl(t=Br){const e=li.get(t);if(!e&&t===Br)return Ol();if(!e)throw vt.create("no-app",{appName:t});return e}function wt(t,e,n){var s;let i=(s=lp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}is(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const fp="firebase-heartbeat-database",pp=1,rs="firebase-heartbeat-store";let yr=null;function Ll(){return yr||(yr=Rf(fp,pp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}}).catch(t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})})),yr}async function gp(t){try{return(await Ll()).transaction(rs).objectStore(rs).get(xl(t))}catch(e){if(e instanceof Gt)Ut.warn(e.message);else{const n=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function Ya(t,e){try{const s=(await Ll()).transaction(rs,"readwrite");return await s.objectStore(rs).put(e,xl(t)),s.done}catch(n){if(n instanceof Gt)Ut.warn(n.message);else{const s=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(s.message)}}}function xl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mp=1024,yp=30*24*60*60*1e3;class vp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=yp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xa(),{heartbeatsToSend:n,unsentEntries:s}=wp(this._heartbeatsCache.heartbeats),i=ci(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xa(){return new Date().toISOString().substring(0,10)}function wp(t,e=mp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ja(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ja(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class bp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return df()?ff().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ja(t){return ci(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ep(t){is(new yn("platform-logger",e=>new Mf(e),"PRIVATE")),is(new yn("heartbeat",e=>new vp(e),"PRIVATE")),wt(Mr,Qa,t),wt(Mr,Qa,"esm2017"),wt("fire-js","")}Ep("");var Tp="firebase",Cp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(Tp,Cp,"app");var _p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,ko=ko||{},R=_p||self;function ui(){}function Ni(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ip(t){return Object.prototype.hasOwnProperty.call(t,vr)&&t[vr]||(t[vr]=++Sp)}var vr="closure_uid_"+(1e9*Math.random()>>>0),Sp=0;function Ap(t,e,n){return t.call.apply(t.bind,arguments)}function kp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=Ap:_e=kp,_e.apply(null,arguments)}function Gs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function me(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function St(){this.s=this.s,this.o=this.o}var Dp=0;St.prototype.s=!1;St.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Dp!=0)&&Ip(this)};St.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ml=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Do(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Za(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ni(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ie(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Np=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{R.addEventListener("test",ui,e),R.removeEventListener("test",ui,e)}catch{}return t}();function hi(t){return/^[\s\xa0]*$/.test(t)}var ec=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wr(t,e){return t<e?-1:t>e?1:0}function Pi(){var t=R.navigator;return t&&(t=t.userAgent)?t:""}function et(t){return Pi().indexOf(t)!=-1}function No(t){return No[" "](t),t}No[" "]=ui;function Pp(t){var e=Lp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Op=et("Opera"),vn=et("Trident")||et("MSIE"),Bl=et("Edge"),Vr=Bl||vn,Fl=et("Gecko")&&!(Pi().toLowerCase().indexOf("webkit")!=-1&&!et("Edge"))&&!(et("Trident")||et("MSIE"))&&!et("Edge"),Rp=Pi().toLowerCase().indexOf("webkit")!=-1&&!et("Edge");function Vl(){var t=R.document;return t?t.documentMode:void 0}var di;e:{var br="",Er=function(){var t=Pi();if(Fl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Bl)return/Edge\/([\d\.]+)/.exec(t);if(vn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Rp)return/WebKit\/(\S+)/.exec(t);if(Op)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Er&&(br=Er?Er[1]:""),vn){var Tr=Vl();if(Tr!=null&&Tr>parseFloat(br)){di=String(Tr);break e}}di=br}var Lp={};function xp(){return Pp(function(){let t=0;const e=ec(String(di)).split("."),n=ec("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=wr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||wr(i[2].length==0,r[2].length==0)||wr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Ur;if(R.document&&vn){var tc=Vl();Ur=tc||parseInt(di,10)||void 0}else Ur=void 0;var Mp=Ur;function os(t,e){if(Ie.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fl){e:{try{No(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Bp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&os.X.h.call(this)}}me(os,Ie);var Bp={2:"touch",3:"pen",4:"mouse"};os.prototype.h=function(){os.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Es="closure_listenable_"+(1e6*Math.random()|0),Fp=0;function Vp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Fp,this.ba=this.ea=!1}function Oi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Po(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ul(t){const e={};for(const n in t)e[n]=t[n];return e}const nc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $l(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<nc.length;r++)n=nc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ri(t){this.src=t,this.g={},this.h=0}Ri.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=jr(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Vp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function $r(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Ml(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Oi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Oo="closure_lm_"+(1e6*Math.random()|0),Cr={};function jl(t,e,n,s,i){if(s&&s.once)return Hl(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)jl(t,e[r],n,s,i);return null}return n=xo(n),t&&t[Es]?t.N(e,n,bs(s)?!!s.capture:!!s,i):ql(t,e,n,!1,s,i)}function ql(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=bs(i)?!!i.capture:!!i,a=Lo(t);if(a||(t[Oo]=a=new Ri(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Up(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Np||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(zl(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Up(){function t(n){return e.call(t.src,t.listener,n)}const e=$p;return t}function Hl(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Hl(t,e[r],n,s,i);return null}return n=xo(n),t&&t[Es]?t.O(e,n,bs(s)?!!s.capture:!!s,i):ql(t,e,n,!0,s,i)}function Kl(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Kl(t,e[r],n,s,i);else s=bs(s)?!!s.capture:!!s,n=xo(n),t&&t[Es]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=jr(r,n,s,i),-1<n&&(Oi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jr(e,n,s,i)),(n=-1<t?e[t]:null)&&Ro(n))}function Ro(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Es])$r(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(zl(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Lo(e))?($r(n,t),n.h==0&&(n.src=null,e[Oo]=null)):Oi(t)}}}function zl(t){return t in Cr?Cr[t]:Cr[t]="on"+t}function $p(t,e){if(t.ba)t=!0;else{e=new os(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ro(t),t=n.call(s,e)}return t}function Lo(t){return t=t[Oo],t instanceof Ri?t:null}var _r="__closure_events_fn_"+(1e9*Math.random()>>>0);function xo(t){return typeof t=="function"?t:(t[_r]||(t[_r]=function(e){return t.handleEvent(e)}),t[_r])}function he(){St.call(this),this.i=new Ri(this),this.P=this,this.I=null}me(he,St);he.prototype[Es]=!0;he.prototype.removeEventListener=function(t,e,n,s){Kl(this,t,e,n,s)};function pe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ie(e,t);else if(e instanceof Ie)e.target=e.target||t;else{var i=e;e=new Ie(s,t),$l(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ws(o,s,!0,e)&&i}if(o=e.g=t,i=Ws(o,s,!0,e)&&i,i=Ws(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ws(o,s,!1,e)&&i}he.prototype.M=function(){if(he.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Oi(n[s]);delete t.g[e],t.h--}}this.I=null};he.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};he.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ws(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&$r(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Mo=R.JSON.stringify;function jp(){var t=Ql;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qp{constructor(){this.h=this.g=null}add(e,n){const s=Gl.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Gl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Hp,t=>t.reset());class Hp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kp(t){R.setTimeout(()=>{throw t},0)}function Wl(t,e){qr||zp(),Hr||(qr(),Hr=!0),Ql.add(t,e)}var qr;function zp(){var t=R.Promise.resolve(void 0);qr=function(){t.then(Gp)}}var Hr=!1,Ql=new qp;function Gp(){for(var t;t=jp();){try{t.h.call(t.g)}catch(n){Kp(n)}var e=Gl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hr=!1}function Li(t,e){he.call(this),this.h=t||1,this.g=e||R,this.j=_e(this.lb,this),this.l=Date.now()}me(Li,he);S=Li.prototype;S.ca=!1;S.R=null;S.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),pe(this,"tick"),this.ca&&(Bo(this),this.start()))}};S.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}S.M=function(){Li.X.M.call(this),Bo(this),delete this.g};function Fo(t,e,n){if(typeof t=="function")n&&(t=_e(t,n));else if(t&&typeof t.handleEvent=="function")t=_e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(t,e||0)}function Yl(t){t.g=Fo(()=>{t.g=null,t.i&&(t.i=!1,Yl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Wp extends St{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yl(this)}M(){super.M(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(t){St.call(this),this.h=t,this.g={}}me(as,St);var sc=[];function Xl(t,e,n,s){Array.isArray(n)||(n&&(sc[0]=n.toString()),n=sc);for(var i=0;i<n.length;i++){var r=jl(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Jl(t){Po(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ro(e)},t),t.g={}}as.prototype.M=function(){as.X.M.call(this),Jl(this)};as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xi(){this.g=!0}xi.prototype.Aa=function(){this.g=!1};function Qp(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Yp(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function sn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jp(t,n)+(s?" "+s:"")})}function Xp(t,e){t.info(function(){return"TIMEOUT: "+e})}xi.prototype.info=function(){};function Jp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mo(n)}catch{return e}}var Wt={},ic=null;function Mi(){return ic=ic||new he}Wt.Pa="serverreachability";function Zl(t){Ie.call(this,Wt.Pa,t)}me(Zl,Ie);function cs(t){const e=Mi();pe(e,new Zl(e))}Wt.STAT_EVENT="statevent";function eu(t,e){Ie.call(this,Wt.STAT_EVENT,t),this.stat=e}me(eu,Ie);function Ne(t){const e=Mi();pe(e,new eu(e,t))}Wt.Qa="timingevent";function tu(t,e){Ie.call(this,Wt.Qa,t),this.size=e}me(tu,Ie);function Ts(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){t()},e)}var Bi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},nu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Vo(){}Vo.prototype.h=null;function rc(t){return t.h||(t.h=t.i())}function su(){}var Cs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Uo(){Ie.call(this,"d")}me(Uo,Ie);function $o(){Ie.call(this,"c")}me($o,Ie);var Kr;function Fi(){}me(Fi,Vo);Fi.prototype.g=function(){return new XMLHttpRequest};Fi.prototype.i=function(){return{}};Kr=new Fi;function _s(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new as(this),this.O=Zp,t=Vr?125:void 0,this.T=new Li(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var Zp=45e3,zr={},fi={};S=_s.prototype;S.setTimeout=function(t){this.O=t};function Gr(t,e,n){t.K=1,t.v=Ui(ut(e)),t.s=n,t.P=!0,ru(t,null)}function ru(t,e){t.F=Date.now(),Is(t),t.A=ut(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),fu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new iu,t.g=Lu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Wp(_e(t.La,t,t.g),t.N)),Xl(t.S,t.g,"readystatechange",t.ib),e=t.H?Ul(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),cs(),Qp(t.j,t.u,t.A,t.m,t.U,t.s)}S.ib=function(t){t=t.target;const e=this.L;e&&ct(t)==3?e.l():this.La(t)};S.La=function(t){try{if(t==this.g)e:{const u=ct(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Vr||this.g&&(this.h.h||this.g.fa()||lc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?cs(3):cs(2)),Vi(this);var n=this.g.aa();this.Y=n;t:if(ou(this)){var s=lc(this.g);t="";var i=s.length,r=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),Qn(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Yp(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hi(a)){var l=a;break t}}l=null}if(n=l)sn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wr(this,n);else{this.i=!1,this.o=3,Ne(12),Lt(this),Qn(this);break e}}this.P?(au(this,u,o),Vr&&this.i&&u==3&&(Xl(this.S,this.T,"tick",this.hb),this.T.start())):(sn(this.j,this.m,o,null),Wr(this,o)),u==4&&Lt(this),this.i&&!this.I&&(u==4?Nu(this.l,this):(this.i=!1,Is(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ne(12)):(this.o=0,Ne(13)),Lt(this),Qn(this)}}}catch{}finally{}};function ou(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function au(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=eg(t,n),i==fi){e==4&&(t.o=4,Ne(14),s=!1),sn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zr){t.o=4,Ne(15),sn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else sn(t.j,t.m,i,null),Wr(t,i);ou(t)&&i!=fi&&i!=zr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ne(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wo(e),e.K=!0,Ne(11))):(sn(t.j,t.m,n,"[Invalid Chunked Response]"),Lt(t),Qn(t))}S.hb=function(){if(this.g){var t=ct(this.g),e=this.g.fa();this.C<e.length&&(Vi(this),au(this,t,e),this.i&&t!=4&&Is(this))}};function eg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?fi:(n=Number(e.substring(n,s)),isNaN(n)?zr:(s+=1,s+n>e.length?fi:(e=e.substr(s,n),t.C=s+n,e)))}S.cancel=function(){this.I=!0,Lt(this)};function Is(t){t.V=Date.now()+t.O,cu(t,t.O)}function cu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ts(_e(t.gb,t),e)}function Vi(t){t.B&&(R.clearTimeout(t.B),t.B=null)}S.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Xp(this.j,this.A),this.K!=2&&(cs(),Ne(17)),Lt(this),this.o=2,Qn(this)):cu(this,this.V-t)};function Qn(t){t.l.G==0||t.I||Nu(t.l,t)}function Lt(t){Vi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Bo(t.T),Jl(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Wr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qr(n.h,t))){if(!t.J&&Qr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)mi(n),qi(n);else break e;Go(n),Ne(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ts(_e(n.cb,n),6e3));if(1>=mu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else xt(n,11)}else if((t.J||n.g==t)&&mi(n),!hi(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(jo(r,r.h),r.h=null))}if(s.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Q(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ru(s,s.H?s.ka:null,s.V),o.J){yu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Vi(a),Is(a)),s.g=o}else ku(s);0<n.i.length&&Hi(n)}else l[0]!="stop"&&l[0]!="close"||xt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xt(n,7):zo(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}cs(4)}catch{}}function tg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ni(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ng(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ni(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function lu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ni(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ng(t),s=tg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ft(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ft){this.h=e!==void 0?e:t.h,pi(this,t.j),this.s=t.s,this.g=t.g,gi(this,t.m),this.l=t.l,e=t.i;var n=new ls;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),oc(this,n),this.o=t.o}else t&&(n=String(t).match(uu))?(this.h=!!e,pi(this,n[1]||"",!0),this.s=Hn(n[2]||""),this.g=Hn(n[3]||"",!0),gi(this,n[4]),this.l=Hn(n[5]||"",!0),oc(this,n[6]||"",!0),this.o=Hn(n[7]||"")):(this.h=!!e,this.i=new ls(null,this.h))}Ft.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Kn(e,ac,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Kn(e,ac,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Kn(n,n.charAt(0)=="/"?og:rg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Kn(n,cg)),t.join("")};function ut(t){return new Ft(t)}function pi(t,e,n){t.j=n?Hn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function oc(t,e,n){e instanceof ls?(t.i=e,lg(t.i,t.h)):(n||(e=Kn(e,ag)),t.i=new ls(e,t.h))}function Q(t,e,n){t.i.set(e,n)}function Ui(t){return Q(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ig),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ig(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ac=/[#\/\?@]/g,rg=/[#\?:]/g,og=/[#\?]/g,ag=/[#\?@]/g,cg=/#/g;function ls(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function At(t){t.g||(t.g=new Map,t.h=0,t.i&&sg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=ls.prototype;S.add=function(t,e){At(this),this.i=null,t=Nn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hu(t,e){At(t),e=Nn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function du(t,e){return At(t),e=Nn(t,e),t.g.has(e)}S.forEach=function(t,e){At(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};S.oa=function(){At(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};S.W=function(t){At(this);let e=[];if(typeof t=="string")du(this,t)&&(e=e.concat(this.g.get(Nn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};S.set=function(t,e){return At(this),this.i=null,t=Nn(this,t),du(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function fu(t,e,n){hu(t,e),0<n.length&&(t.i=null,t.g.set(Nn(t,e),Do(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Nn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lg(t,e){e&&!t.j&&(At(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(hu(this,s),fu(this,i,n))},t)),t.j=e}var ug=class{constructor(e,n){this.h=e,this.g=n}};function pu(t){this.l=t||hg,R.PerformanceNavigationTiming?(t=R.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(R.g&&R.g.Ga&&R.g.Ga()&&R.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hg=10;function gu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mu(t){return t.h?1:t.g?t.g.size:0}function Qr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jo(t,e){t.g?t.g.add(e):t.h=e}function yu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pu.prototype.cancel=function(){if(this.i=vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Do(t.i)}function qo(){}qo.prototype.stringify=function(t){return R.JSON.stringify(t,void 0)};qo.prototype.parse=function(t){return R.JSON.parse(t,void 0)};function dg(){this.g=new qo}function fg(t,e,n){const s=n||"";try{lu(t,function(i,r){let o=i;bs(i)&&(o=Mo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function pg(t,e){const n=new xi;if(R.Image){const s=new Image;s.onload=Gs(Qs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Gs(Qs,n,s,"TestLoadImage: error",!1,e),s.onabort=Gs(Qs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Gs(Qs,n,s,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Qs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ss(t){this.l=t.ac||null,this.j=t.jb||!1}me(Ss,Vo);Ss.prototype.g=function(){return new $i(this.l,this.j)};Ss.prototype.i=function(t){return function(){return t}}({});function $i(t,e){he.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ho,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}me($i,he);var Ho=0;S=$i.prototype;S.open=function(t,e){if(this.readyState!=Ho)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,us(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||R).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=Ho};S.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function wu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}S.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?As(this):us(this),this.readyState==3&&wu(this)}};S.Va=function(t){this.g&&(this.response=this.responseText=t,As(this))};S.Ua=function(t){this.g&&(this.response=t,As(this))};S.ga=function(){this.g&&As(this)};function As(t){t.readyState=4,t.l=null,t.j=null,t.A=null,us(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gg=R.JSON.parse;function te(t){he.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bu,this.K=this.L=!1}me(te,he);var bu="",mg=/^https?$/i,yg=["POST","PUT"];S=te.prototype;S.Ka=function(t){this.L=t};S.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kr.g(),this.C=this.u?rc(this.u):rc(Kr),this.g.onreadystatechange=_e(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){cc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=R.FormData&&t instanceof R.FormData,!(0<=Ml(yg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Cu(this),0<this.B&&((this.K=vg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.qa,this)):this.A=Fo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){cc(this,r)}};function vg(t){return vn&&xp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}S.qa=function(){typeof ko<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pe(this,"timeout"),this.abort(8))};function cc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Eu(t),ji(t)}function Eu(t){t.D||(t.D=!0,pe(t,"complete"),pe(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pe(this,"complete"),pe(this,"abort"),ji(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ji(this,!0)),te.X.M.call(this)};S.Ha=function(){this.s||(this.F||this.v||this.l?Tu(this):this.fb())};S.fb=function(){Tu(this)};function Tu(t){if(t.h&&typeof ko<"u"&&(!t.C[1]||ct(t)!=4||t.aa()!=2)){if(t.v&&ct(t)==4)Fo(t.Ha,0,t);else if(pe(t,"readystatechange"),ct(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(uu)[1]||null;if(!i&&R.self&&R.self.location){var r=R.self.location.protocol;i=r.substr(0,r.length-1)}s=!mg.test(i?i.toLowerCase():"")}n=s}if(n)pe(t,"complete"),pe(t,"success");else{t.m=6;try{var o=2<ct(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Eu(t)}}finally{ji(t)}}}}function ji(t,e){if(t.g){Cu(t);const n=t.g,s=t.C[0]?ui:null;t.g=null,t.C=null,e||pe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Cu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(R.clearTimeout(t.A),t.A=null)}function ct(t){return t.g?t.g.readyState:0}S.aa=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};S.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gg(e)}};function lc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case bu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ea=function(){return this.m};S.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _u(t){let e="";return Po(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ko(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=_u(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Q(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Iu(t){this.Ca=0,this.i=[],this.j=new xi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qn("baseRetryDelayMs",5e3,t),this.bb=qn("retryDelaySeedMs",1e4,t),this.$a=qn("forwardChannelMaxRetries",2,t),this.ta=qn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new pu(t&&t.concurrentRequestLimit),this.Fa=new dg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}S=Iu.prototype;S.ma=8;S.G=1;function zo(t){if(Su(t),t.G==3){var e=t.U++,n=ut(t.F);Q(n,"SID",t.I),Q(n,"RID",e),Q(n,"TYPE","terminate"),ks(t,n),e=new _s(t,t.j,e,void 0),e.K=2,e.v=Ui(ut(n)),n=!1,R.navigator&&R.navigator.sendBeacon&&(n=R.navigator.sendBeacon(e.v.toString(),"")),!n&&R.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Is(e)}Ou(t)}function qi(t){t.g&&(Wo(t),t.g.cancel(),t.g=null)}function Su(t){qi(t),t.u&&(R.clearTimeout(t.u),t.u=null),mi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&R.clearTimeout(t.m),t.m=null)}function Hi(t){gu(t.h)||t.m||(t.m=!0,Wl(t.Ja,t),t.C=0)}function wg(t,e){return mu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ts(_e(t.Ja,t,e),Pu(t,t.C)),t.C++,!0)}S.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new _s(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Ul(r),$l(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Au(this,i,e),n=ut(this.F),Q(n,"RID",t),Q(n,"CVER",22),this.D&&Q(n,"X-HTTP-Session-Id",this.D),ks(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(_u(r)))+"&"+e:this.o&&Ko(n,this.o,r)),jo(this.h,i),this.Ya&&Q(n,"TYPE","init"),this.O?(Q(n,"$req",e),Q(n,"SID","null"),i.Z=!0,Gr(i,n,null)):Gr(i,n,e),this.G=2}}else this.G==3&&(t?uc(this,t):this.i.length==0||gu(this.h)||uc(this))};function uc(t,e){var n;e?n=e.m:n=t.U++;const s=ut(t.F);Q(s,"SID",t.I),Q(s,"RID",n),Q(s,"AID",t.T),ks(t,s),t.o&&t.s&&Ko(s,t.o,t.s),n=new _s(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Au(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),jo(t.h,n),Gr(n,s,e)}function ks(t,e){t.ia&&Po(t.ia,function(n,s){Q(e,s,n)}),t.l&&lu({},function(n,s){Q(e,s,n)})}function Au(t,e,n){n=Math.min(t.i.length,n);var s=t.l?_e(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{fg(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function ku(t){t.g||t.u||(t.Z=1,Wl(t.Ia,t),t.A=0)}function Go(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ts(_e(t.Ia,t),Pu(t,t.A)),t.A++,!0)}S.Ia=function(){if(this.u=null,Du(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ts(_e(this.eb,this),t)}};S.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ne(10),qi(this),Du(this))};function Wo(t){t.B!=null&&(R.clearTimeout(t.B),t.B=null)}function Du(t){t.g=new _s(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ut(t.sa);Q(e,"RID","rpc"),Q(e,"SID",t.I),Q(e,"CI",t.L?"0":"1"),Q(e,"AID",t.T),Q(e,"TYPE","xmlhttp"),ks(t,e),t.o&&t.s&&Ko(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ui(ut(e)),n.s=null,n.P=!0,ru(n,t)}S.cb=function(){this.v!=null&&(this.v=null,qi(this),Go(this),Ne(19))};function mi(t){t.v!=null&&(R.clearTimeout(t.v),t.v=null)}function Nu(t,e){var n=null;if(t.g==e){mi(t),Wo(t),t.g=null;var s=2}else if(Qr(t.h,e))n=e.D,yu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Mi(),pe(s,new tu(s,n)),Hi(t)}else ku(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&wg(t,e)||s==2&&Go(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:xt(t,5);break;case 4:xt(t,10);break;case 3:xt(t,6);break;default:xt(t,2)}}}function Pu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function xt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=_e(t.kb,t);n||(n=new Ft("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||pi(n,"https"),Ui(n)),pg(n.toString(),s)}else Ne(2);t.G=0,t.l&&t.l.va(e),Ou(t),Su(t)}S.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Ou(t){if(t.G=0,t.la=[],t.l){const e=vu(t.h);(e.length!=0||t.i.length!=0)&&(Za(t.la,e),Za(t.la,t.i),t.h.i.length=0,Do(t.i),t.i.length=0),t.l.ua()}}function Ru(t,e,n){var s=n instanceof Ft?ut(n):new Ft(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),gi(s,s.m);else{var i=R.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ft(null,void 0);s&&pi(r,s),e&&(r.g=e),i&&gi(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Q(s,n,e),Q(s,"VER",t.ma),ks(t,s),s}function Lu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new te(new Ss({jb:!0})):new te(t.ra),e.Ka(t.H),e}function xu(){}S=xu.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Ra=function(){};function yi(){if(vn&&!(10<=Number(Mp)))throw Error("Environmental error: no available transport.")}yi.prototype.g=function(t,e){return new Ue(t,e)};function Ue(t,e){he.call(this),this.g=new Iu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!hi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pn(this)}me(Ue,he);Ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ne(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ru(t,null,t.V),Hi(t)};Ue.prototype.close=function(){zo(this.g)};Ue.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mo(t),t=n);e.i.push(new ug(e.ab++,t)),e.G==3&&Hi(e)};Ue.prototype.M=function(){this.g.l=null,delete this.j,zo(this.g),delete this.g,Ue.X.M.call(this)};function Mu(t){Uo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}me(Mu,Uo);function Bu(){$o.call(this),this.status=1}me(Bu,$o);function Pn(t){this.g=t}me(Pn,xu);Pn.prototype.xa=function(){pe(this.g,"a")};Pn.prototype.wa=function(t){pe(this.g,new Mu(t))};Pn.prototype.va=function(t){pe(this.g,new Bu)};Pn.prototype.ua=function(){pe(this.g,"b")};yi.prototype.createWebChannel=yi.prototype.g;Ue.prototype.send=Ue.prototype.u;Ue.prototype.open=Ue.prototype.m;Ue.prototype.close=Ue.prototype.close;Bi.NO_ERROR=0;Bi.TIMEOUT=8;Bi.HTTP_ERROR=6;nu.COMPLETE="complete";su.EventType=Cs;Cs.OPEN="a";Cs.CLOSE="b";Cs.ERROR="c";Cs.MESSAGE="d";he.prototype.listen=he.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.Oa;te.prototype.getLastErrorCode=te.prototype.Ea;te.prototype.getStatus=te.prototype.aa;te.prototype.getResponseJson=te.prototype.Sa;te.prototype.getResponseText=te.prototype.fa;te.prototype.send=te.prototype.da;te.prototype.setWithCredentials=te.prototype.Ka;var bg=function(){return new yi},Eg=function(){return Mi()},Ir=Bi,Tg=nu,Cg=Wt,hc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},_g=Ss,Ys=su,Ig=te;const dc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $t=new Al("@firebase/firestore");function fc(){return $t.logLevel}function A(t,...e){if($t.logLevel<=H.DEBUG){const n=e.map(Qo);$t.debug(`Firestore (${On}): ${t}`,...n)}}function ht(t,...e){if($t.logLevel<=H.ERROR){const n=e.map(Qo);$t.error(`Firestore (${On}): ${t}`,...n)}}function Yr(t,...e){if($t.logLevel<=H.WARN){const n=e.map(Qo);$t.warn(`Firestore (${On}): ${t}`,...n)}}function Qo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+t;throw ht(e),new Error(e)}function G(t,e){t||O()}function x(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(we.UNAUTHENTICATED))}shutdown(){}}class Ag{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kg{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new bt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new bt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(G(typeof s.accessToken=="string"),new Fu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new we(e)}}class Dg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=we.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(G(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ng{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Dg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Og{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(G(typeof n.token=="string"),this.A=n.token,new Pg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Rg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function K(t,e){return t<e?-1:t>e?1:0}function wn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new I(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new I(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ae(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new ae(0,0))}static max(){return new L(new ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s){n===void 0?n=0:n>e.length&&O(),s===void 0?s=e.length-n:s>e.length-n&&O(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return hs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class W extends hs{construct(e,n,s){return new W(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new I(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new W(n)}static emptyPath(){return new W([])}}const Lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends hs{construct(e,n,s){return new Ee(e,n,s)}static isValidIdentifier(e){return Lg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new I(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(n)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(W.fromString(e))}static fromName(e){return new D(W.fromString(e).popFirst(5))}static empty(){return new D(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&W.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return W.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new W(e.slice()))}}function xg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=L.fromTimestamp(s===1e9?new ae(n+1,0):new ae(n,s));return new Tt(i,D.empty(),e)}function Mg(t){return new Tt(t.readTime,t.key,-1)}class Tt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Tt(L.min(),D.empty(),-1)}static max(){return new Tt(L.max(),D.empty(),-1)}}function Bg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:K(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==Fg)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Yo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ds{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ds("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ds&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Uu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){return t==null}function vi(t){return t===0&&1/t==-1/0}function $g(t){return typeof t=="number"&&Number.isInteger(t)&&!vi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new jg("Invalid base64 string: "+i):i}}(e);return new Se(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Se(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const qg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(t){if(G(!!t),typeof t=="string"){let e=0;const n=qg.exec(t);if(G(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ie(t.seconds),nanos:ie(t.nanos)}}function ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bn(t){return typeof t=="string"?Se.fromBase64String(t):Se.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ju(t){const e=t.mapValue.fields.__previous_value__;return $u(e)?ju(e):e}function fs(t){const e=Ct(t.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$u(t)?4:Hg(t)?9007199254740991:10:O()}function st(t,e){if(t===e)return!0;const n=jt(t);if(n!==jt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fs(t).isEqual(fs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ct(s.timestampValue),o=Ct(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return bn(s.bytesValue).isEqual(bn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ie(s.geoPointValue.latitude)===ie(i.geoPointValue.latitude)&&ie(s.geoPointValue.longitude)===ie(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ie(s.integerValue)===ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ie(s.doubleValue),o=ie(i.doubleValue);return r===o?vi(r)===vi(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return wn(t.arrayValue.values||[],e.arrayValue.values||[],st);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(pc(r)!==pc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!st(r[a],o[a])))return!1;return!0}(t,e);default:return O()}}function ps(t,e){return(t.values||[]).find(n=>st(n,e))!==void 0}function En(t,e){if(t===e)return 0;const n=jt(t),s=jt(e);if(n!==s)return K(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ie(i.integerValue||i.doubleValue),a=ie(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gc(t.timestampValue,e.timestampValue);case 4:return gc(fs(t),fs(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(i,r){const o=bn(i),a=bn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=K(o[c],a[c]);if(l!==0)return l}return K(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=K(ie(i.latitude),ie(r.latitude));return o!==0?o:K(ie(i.longitude),ie(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=En(o[c],a[c]);if(l)return l}return K(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Xs.mapValue&&r===Xs.mapValue)return 0;if(i===Xs.mapValue)return 1;if(r===Xs.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=K(a[u],l[u]);if(h!==0)return h;const d=En(o[a[u]],c[l[u]]);if(d!==0)return d}return K(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function gc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=Ct(t),s=Ct(e),i=K(n.seconds,s.seconds);return i!==0?i:K(n.nanos,s.nanos)}function Tn(t){return Xr(t)}function Xr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ct(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Xr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Xr(s.fields[a])}`;return r+"}"}(t.mapValue):O();var e,n}function mc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jr(t){return!!t&&"integerValue"in t}function Xo(t){return!!t&&"arrayValue"in t}function yc(t){return!!t&&"nullValue"in t}function vc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ni(t){return!!t&&"mapValue"in t}function Yn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wi{constructor(e,n){this.position=e,this.inclusive=n}}function wc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=D.comparator(D.fromName(o.referenceValue),n.key):s=En(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function bc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!st(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qu{}class re extends qu{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new zg(e,n,s):n==="array-contains"?new Qg(e,s):n==="in"?new Yg(e,s):n==="not-in"?new Xg(e,s):n==="array-contains-any"?new Jg(e,s):new re(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Gg(e,s):new Wg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(En(n,this.value)):n!==null&&jt(this.value)===jt(n)&&this.matchesComparison(En(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xe extends qu{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Xe(e,n)}matches(e){return Hu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Hu(t){return t.op==="and"}function Ku(t){return Kg(t)&&Hu(t)}function Kg(t){for(const e of t.filters)if(e instanceof Xe)return!1;return!0}function Zr(t){if(t instanceof re)return t.field.canonicalString()+t.op.toString()+Tn(t.value);if(Ku(t))return t.filters.map(e=>Zr(e)).join(",");{const e=t.filters.map(n=>Zr(n)).join(",");return`${t.op}(${e})`}}function zu(t,e){return t instanceof re?function(n,s){return s instanceof re&&n.op===s.op&&n.field.isEqual(s.field)&&st(n.value,s.value)}(t,e):t instanceof Xe?function(n,s){return s instanceof Xe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&zu(r,s.filters[o]),!0):!1}(t,e):void O()}function Gu(t){return t instanceof re?function(e){return`${e.field.canonicalString()} ${e.op} ${Tn(e.value)}`}(t):t instanceof Xe?function(e){return e.op.toString()+" {"+e.getFilters().map(Gu).join(" ,")+"}"}(t):"Filter"}class zg extends re{constructor(e,n,s){super(e,n,s),this.key=D.fromName(s.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gg extends re{constructor(e,n){super(e,"in",n),this.keys=Wu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Wg extends re{constructor(e,n){super(e,"not-in",n),this.keys=Wu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>D.fromName(s.referenceValue))}class Qg extends re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xo(n)&&ps(n.arrayValue,this.value)}}class Yg extends re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ps(this.value.arrayValue,n)}}class Xg extends re{constructor(e,n){super(e,"not-in",n)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ps(this.value.arrayValue,n)}}class Jg extends re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ps(this.value.arrayValue,s))}}/**
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
 */class on{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.comparator=e,this.root=n||fe.EMPTY}insert(e,n){return new le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Js(this.root,e,this.comparator,!1)}getReverseIterator(){return new Js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Js(this.root,e,this.comparator,!0)}}class Js{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??fe.RED,this.left=i??fe.EMPTY,this.right=r??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return fe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ec(this.data.getIterator())}getIteratorFrom(e){return new Ec(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ce(this.comparator);return n.data=e,n}}class Ec{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Fe([])}unionWith(e){let n=new ce(Ee.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Fe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ni(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yn(n)}setAll(e){let n=Ee.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Yn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ni(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ni(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Qt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Re(Yn(this.value))}}function Qu(t){const e=[];return Qt(t.fields,(n,s)=>{const i=new Ee([n]);if(ni(s)){const r=Qu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,L.min(),L.min(),L.min(),Re.empty(),0)}static newFoundDocument(e,n,s,i){return new be(e,1,n,L.min(),s,i,0)}static newNoDocument(e,n){return new be(e,2,n,L.min(),L.min(),Re.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,L.min(),L.min(),Re.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class em{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Tc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new em(t,e,n,s,i,r,o)}function Jo(t){const e=x(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Zr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ki(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Tn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Tn(s)).join(",")),e._t=n}return e._t}function Zo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bc(t.startAt,e.startAt)&&bc(t.endAt,e.endAt)}function eo(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function tm(t,e,n,s,i,r,o,a){return new Rn(t,e,n,s,i,r,o,a)}function ea(t){return new Rn(t)}function Cc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ta(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Yu(t){return t.collectionGroup!==null}function an(t){const e=x(t);if(e.wt===null){e.wt=[];const n=zi(e),s=ta(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new on(n)),e.wt.push(new on(Ee.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new on(Ee.keyField(),r))}}}return e.wt}function dt(t){const e=x(t);if(!e.gt)if(e.limitType==="F")e.gt=Tc(e.path,e.collectionGroup,an(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of an(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new on(r.field,o))}const s=e.endAt?new wi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wi(e.startAt.position,e.startAt.inclusive):null;e.gt=Tc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function to(t,e){e.getFirstInequalityField(),zi(t);const n=t.filters.concat([e]);return new Rn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function no(t,e,n){return new Rn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gi(t,e){return Zo(dt(t),dt(e))&&t.limitType===e.limitType}function Xu(t){return`${Jo(dt(t))}|lt:${t.limitType}`}function so(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Gu(s)).join(", ")}]`),Ki(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Tn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Tn(s)).join(",")),`Target(${n})`}(dt(t))}; limitType=${t.limitType})`}function Wi(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of an(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=wc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,an(n),s)||n.endAt&&!function(i,r,o){const a=wc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,an(n),s))}(t,e)}function nm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ju(t){return(e,n)=>{let s=!1;for(const i of an(t)){const r=sm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function sm(t,e,n){const s=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?En(a,c):O()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vi(e)?"-0":e}}function eh(t){return{integerValue:""+t}}function im(t,e){return $g(e)?eh(e):Zu(t,e)}/**
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
 */class Qi{constructor(){this._=void 0}}function rm(t,e,n){return t instanceof bi?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof gs?nh(t,e):t instanceof ms?sh(t,e):function(s,i){const r=th(s,i),o=_c(r)+_c(s.It);return Jr(r)&&Jr(s.It)?eh(o):Zu(s.Tt,o)}(t,e)}function om(t,e,n){return t instanceof gs?nh(t,e):t instanceof ms?sh(t,e):n}function th(t,e){return t instanceof Ei?Jr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class bi extends Qi{}class gs extends Qi{constructor(e){super(),this.elements=e}}function nh(t,e){const n=ih(e);for(const s of t.elements)n.some(i=>st(i,s))||n.push(s);return{arrayValue:{values:n}}}class ms extends Qi{constructor(e){super(),this.elements=e}}function sh(t,e){let n=ih(e);for(const s of t.elements)n=n.filter(i=>!st(i,s));return{arrayValue:{values:n}}}class Ei extends Qi{constructor(e,n){super(),this.Tt=e,this.It=n}}function _c(t){return ie(t.integerValue||t.doubleValue)}function ih(t){return Xo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function am(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof gs&&s instanceof gs||n instanceof ms&&s instanceof ms?wn(n.elements,s.elements,st):n instanceof Ei&&s instanceof Ei?st(n.It,s.It):n instanceof bi&&s instanceof bi}(t.transform,e.transform)}class cm{constructor(e,n){this.version=e,this.transformResults=n}}class Qe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function si(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yi{}function rh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new na(t.key,Qe.none()):new Ps(t.key,t.data,Qe.none());{const n=t.data,s=Re.empty();let i=new ce(Ee.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new kt(t.key,s,new Fe(i.toArray()),Qe.none())}}function lm(t,e,n){t instanceof Ps?function(s,i,r){const o=s.value.clone(),a=Sc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof kt?function(s,i,r){if(!si(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Sc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(oh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Xn(t,e,n,s){return t instanceof Ps?function(i,r,o,a){if(!si(i.precondition,r))return o;const c=i.value.clone(),l=Ac(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof kt?function(i,r,o,a){if(!si(i.precondition,r))return o;const c=Ac(i.fieldTransforms,a,r),l=r.data;return l.setAll(oh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return si(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function um(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=th(s.transform,i||null);r!=null&&(n===null&&(n=Re.empty()),n.set(s.field,r))}return n||null}function Ic(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&wn(n,s,(i,r)=>am(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ps extends Yi{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kt extends Yi{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function oh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Sc(t,e,n){const s=new Map;G(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,om(o,a,n[i]))}return s}function Ac(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,rm(r,o,e))}return s}class na extends Yi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hm extends Yi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne,$;function fm(t){switch(t){default:return O();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function ah(t){if(t===void 0)return ht("GRPC error has no .code"),y.UNKNOWN;switch(t){case ne.OK:return y.OK;case ne.CANCELLED:return y.CANCELLED;case ne.UNKNOWN:return y.UNKNOWN;case ne.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case ne.INTERNAL:return y.INTERNAL;case ne.UNAVAILABLE:return y.UNAVAILABLE;case ne.UNAUTHENTICATED:return y.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case ne.NOT_FOUND:return y.NOT_FOUND;case ne.ALREADY_EXISTS:return y.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return y.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case ne.ABORTED:return y.ABORTED;case ne.OUT_OF_RANGE:return y.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return y.UNIMPLEMENTED;case ne.DATA_LOSS:return y.DATA_LOSS;default:return O()}}($=ne||(ne={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Uu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new le(D.comparator);function ft(){return pm}const ch=new le(D.comparator);function zn(...t){let e=ch;for(const n of t)e=e.insert(n.key,n);return e}function lh(t){let e=ch;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Mt(){return Jn()}function uh(){return Jn()}function Jn(){return new Ln(t=>t.toString(),(t,e)=>t.isEqual(e))}const gm=new le(D.comparator),mm=new ce(D.comparator);function U(...t){let e=mm;for(const n of t)e=e.add(n);return e}const ym=new ce(K);function hh(){return ym}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Xi(L.min(),i,hh(),ft(),U())}}class Os{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Os(s,n,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class dh{constructor(e,n){this.targetId=e,this.Rt=n}}class fh{constructor(e,n,s=Se.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class kc{constructor(){this.bt=0,this.vt=Nc(),this.Pt=Se.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=U(),n=U(),s=U();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:O()}}),new Os(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Nc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class vm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=ft(),this.Kt=Dc(),this.Gt=new ce(K)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(eo(r))if(s===0){const o=new D(r.path);this.zt(n,o,be.newNoDocument(o,L.min()))}else G(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&eo(a.target)){const c=new D(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,be.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=U();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Xi(e,n,this.Gt,this.Ut,s);return this.Ut=ft(),this.Kt=Dc(),this.Gt=new ce(K),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new kc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ce(K),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new kc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Dc(){return new le(D.comparator)}function Nc(){return new le(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Em=(()=>({and:"AND",or:"OR"}))();class Tm{constructor(e,n){this.databaseId=e,this.yt=n}}function Ti(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ph(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Cm(t,e){return Ti(t,e.toTimestamp())}function tt(t){return G(!!t),L.fromTimestamp(function(e){const n=Ct(e);return new ae(n.seconds,n.nanos)}(t))}function sa(t,e){return function(n){return new W(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function gh(t){const e=W.fromString(t);return G(wh(e)),e}function io(t,e){return sa(t.databaseId,e.path)}function Sr(t,e){const n=gh(e);if(n.get(1)!==t.databaseId.projectId)throw new I(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(mh(n))}function ro(t,e){return sa(t.databaseId,e)}function _m(t){const e=gh(t);return e.length===4?W.emptyPath():mh(e)}function oo(t){return new W(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mh(t){return G(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pc(t,e,n){return{name:io(t,e),fields:n.value.mapValue.fields}}function Im(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(G(l===void 0||typeof l=="string"),Se.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),Se.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:ah(c.code);return new I(l,c.message||"")}(o);n=new fh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Sr(t,s.document.name),r=tt(s.document.updateTime),o=s.document.createTime?tt(s.document.createTime):L.min(),a=new Re({mapValue:{fields:s.document.fields}}),c=be.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new ii(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Sr(t,s.document),r=s.readTime?tt(s.readTime):L.min(),o=be.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ii([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Sr(t,s.document),r=s.removedTargetIds||[];n=new ii([],r,i,null)}else{if(!("filter"in e))return O();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new dm(i),o=s.targetId;n=new dh(o,r)}}return n}function Sm(t,e){let n;if(e instanceof Ps)n={update:Pc(t,e.key,e.value)};else if(e instanceof na)n={delete:io(t,e.key)};else if(e instanceof kt)n={update:Pc(t,e.key,e.data),updateMask:xm(e.fieldMask)};else{if(!(e instanceof hm))return O();n={verify:io(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof bi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof gs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ms)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ei)return{fieldPath:r.field.canonicalString(),increment:o.It};throw O()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Cm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function Am(t,e){return t&&t.length>0?(G(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?tt(s.updateTime):tt(i);return r.isEqual(L.min())&&(r=tt(i)),new cm(r,s.transformResults||[])}(n,e))):[]}function km(t,e){return{documents:[ro(t,e.path)]}}function Dm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ro(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ro(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return vh(Xe.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:tn(u.field),direction:Om(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||Ki(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Nm(t){let e=_m(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){G(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=yh(u);return h instanceof Xe&&Ku(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new on(nn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ki(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new wi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new wi(d,h)}(n.endAt)),tm(e,i,o,r,a,"F",c,l)}function Pm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function yh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=nn(e.unaryFilter.field);return re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=nn(e.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nn(e.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=nn(e.unaryFilter.field);return re.create(r,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return re.create(nn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Xe.create(e.compositeFilter.filters.map(n=>yh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function Om(t){return wm[t]}function Rm(t){return bm[t]}function Lm(t){return Em[t]}function tn(t){return{fieldPath:t.canonicalString()}}function nn(t){return Ee.fromServerFormat(t.fieldPath)}function vh(t){return t instanceof re?function(e){if(e.op==="=="){if(vc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NAN"}};if(yc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NAN"}};if(yc(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tn(e.field),op:Rm(e.op),value:e.value}}}(t):t instanceof Xe?function(e){const n=e.getFilters().map(s=>vh(s));return n.length===1?n[0]:{compositeFilter:{op:Lm(e.op),filters:n}}}(t):O()}function xm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&lm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=uh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=rh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(L.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),U())}isEqual(e){return this.batchId===e.batchId&&wn(this.mutations,e.mutations,(n,s)=>Ic(n,s))&&wn(this.baseMutations,e.baseMutations,(n,s)=>Ic(n,s))}}class ia{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){G(e.mutations.length===s.length);let i=gm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ia(e,n,s,i)}}/**
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
 */class Bm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Vt{constructor(e,n,s,i,r=L.min(),o=L.min(),a=Se.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.oe=e}}function Vm(t){const e=Nm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?no(e,e.limit,"L"):e}/**
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
 */class Um{constructor(){this.Ze=new $m}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Tt.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Tt.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class $m{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ce(W.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ce(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Cn(0)}static Sn(){return new Cn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.changes=new Ln(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Xn(s.mutation,i,Fe.empty(),ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,U()).next(()=>s))}getLocalViewOfDocuments(e,n,s=U()){const i=Mt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=zn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Mt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,U()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ft();const o=Jn(),a=Jn();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof kt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Xn(u.mutation,l,u.mutation.getFieldMask(),ae.now())):o.set(l.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new qm(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Jn();let i=new le((o,a)=>o-a),r=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Fe.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||U()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=uh();u.forEach(d=>{if(!r.has(d)){const p=rh(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(Mt());let a=-1,c=r;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,U())).next(u=>({batchId:a,changes:lh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(s=>{let i=zn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=zn();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Rn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,be.newInvalidDocument(l)))});let o=zn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Xn(l.mutation,c,Fe.empty(),ae.now()),Wi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:tt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Vm(s.bundledQuery),readTime:tt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class zm{constructor(){this.overlays=new le(D.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Mt();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=Mt(),r=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new le((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Mt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Mt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Bm(n,s));let r=this.ss.get(n);r===void 0&&(r=U(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.rs=new ce(ue.os),this.us=new ce(ue.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new ue(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new ue(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new D(new W([])),s=new ue(n,e),i=new ue(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new D(new W([])),s=new ue(n,e),i=new ue(n,e+1);let r=U();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ue(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ue{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return D.comparator(e.key,n.key)||K(e.gs,n.gs)}static cs(e,n){return K(e.gs,n.gs)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ce(ue.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mm(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new ue(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ue(n,0),i=new ue(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ce(K);return n.forEach(i=>{const r=new ue(i,0),o=new ue(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;D.isDocumentKey(r)||(r=r.child(""));const o=new ue(new D(r),0);let a=new ce(K);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){G(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,i=>{const r=new ue(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new ue(n,0),i=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.Rs=e,this.docs=new le(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let s=ft();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():be.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ft();const o=n.path,a=new D(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Bg(Mg(u),s)<=0||(i.has(u.key)||Wi(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){O()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Qm(this)}getSize(e){return b.resolve(this.size)}}class Qm extends jm{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.persistence=e,this.vs=new Ln(n=>Jo(n),Zo),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ra,this.targetCount=0,this.Ss=Cn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Cn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Yo(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Ym(this),this.indexManager=new Um,this.remoteDocumentCache=function(s){return new Wm(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Fm(n),this.Os=new Km(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Gm(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){A("MemoryPersistence","Starting transaction:",e);const i=new Jm(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Jm extends Vg{constructor(e){super(),this.currentSequenceNumber=e}}class oa{constructor(e){this.persistence=e,this.Bs=new ra,this.Ls=null}static qs(e){return new oa(e)}get Us(){if(this.Ls)return this.Ls;throw O()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const i=D.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,L.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=U(),i=U();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new aa(e,n.fromCache,s,i)}}/**
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
 */class Zm{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Cc(n))return b.resolve(null);let s=dt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=no(n,null,"F"),s=dt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=U(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,no(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return Cc(n)||i.isEqual(L.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(fc()<=H.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),so(n)),this.qi(e,o,n,xg(i,-1)))})}Bi(e,n){let s=new ce(Ju(e));return n.forEach((i,r)=>{Wi(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return fc()<=H.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",so(n)),this.Oi.getDocumentsMatchingQuery(e,n,Tt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new le(K),this.Gi=new Ln(r=>Jo(r),Zo),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hm(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function ty(t,e,n,s){return new ey(t,e,n,s)}async function bh(t,e){const n=x(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=U();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function ny(t,e){const n=x(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const w=c.docVersions.get(p);G(w!==null),g.version.compareTo(w)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=U();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Eh(t){const e=x(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function sy(t,e){const n=x(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Se.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(g,w,v){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=ft(),l=U();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(iy(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(L.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function iy(t,e,n){let s=U(),i=U();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ft();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(L.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function ry(t,e){const n=x(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function oy(t,e){const n=x(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Vt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function ao(t,e,n){const s=x(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ns(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Oc(t,e,n){const s=x(t);let i=L.min(),r=U();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=x(a),h=u.Gi.get(l);return h!==void 0?b.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,dt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:L.min(),n?r:U())).next(a=>(ay(s,nm(e),a),{documents:a,Yi:r})))}function ay(t,e,n){let s=t.Qi.get(e)||L.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Rc{constructor(){this.activeTargetIds=hh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cy{constructor(){this.Ur=new Rc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Rc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ly{Gr(e){}shutdown(){}}/**
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
 */class Lc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);A("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(A("RestConnection","Received: ",c),c),c=>{throw Yr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+On,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=uy[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Ig;a.setWithCredentials(!0),a.listenOnce(Tg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ir.NO_ERROR:const l=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Ir.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),o(new I(y.DEADLINE_EXCEEDED,"Request time out"));break;case Ir.HTTP_ERROR:const u=a.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(w)>=0?w:y.UNKNOWN}(d.status);o(new I(p,d.message))}else o(new I(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(y.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=bg(),o=Eg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new _g({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");A("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new hy({Yr:g=>{h?A("Connection","Not sending because WebChannel is closed:",g):(u||(A("Connection","Opening WebChannel transport."),l.open(),u=!0),A("Connection","WebChannel sending:",g),l.send(g))},Zr:()=>l.close()}),p=(g,w,v)=>{g.listen(w,T=>{try{v(T)}catch(C){setTimeout(()=>{throw C},0)}})};return p(l,Ys.EventType.OPEN,()=>{h||A("Connection","WebChannel transport opened.")}),p(l,Ys.EventType.CLOSE,()=>{h||(h=!0,A("Connection","WebChannel transport closed"),d.oo())}),p(l,Ys.EventType.ERROR,g=>{h||(h=!0,Yr("Connection","WebChannel transport errored:",g),d.oo(new I(y.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ys.EventType.MESSAGE,g=>{var w;if(!h){const v=g.data[0];G(!!v);const T=v,C=T.error||((w=T[0])===null||w===void 0?void 0:w.error);if(C){A("Connection","WebChannel received error:",C);const N=C.status;let M=function(De){const P=ne[De];if(P!==void 0)return ah(P)}(N),q=C.message;M===void 0&&(M=y.INTERNAL,q="Unknown error status: "+N+" with message "+C.message),h=!0,d.oo(new I(M,q)),l.close()}else A("Connection","WebChannel received:",v),d.uo(v)}}),p(o,Cg.STAT_EVENT,g=>{g.stat===hc.PROXY?A("Connection","Detected buffering proxy"):g.stat===hc.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Ar(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return new Tm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Th(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(ht(n.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new I(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fy extends Ch{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Im(this.Tt,e),s=function(i){if(!("targetChange"in i))return L.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?L.min():r.readTime?tt(r.readTime):L.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=oo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=eo(a)?{documents:km(i,a)}:{query:Dm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ph(i,r.resumeToken):r.snapshotVersion.compareTo(L.min())>0&&(o.readTime=Ti(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Pm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=oo(this.Tt),n.removeTarget=e,this.qo(n)}}class py extends Ch{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Am(e.writeResults,e.commitTime),s=tt(e.commitTime);return this.listener.eu(s,n)}return G(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=oo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Sm(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new I(y.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(y.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(y.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class my{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(ht(n),this.cu=!1):A("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Yt(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=x(a);c.mu.add(4),await Rs(c),c.pu.set("Unknown"),c.mu.delete(4),await Zi(c)}(this))})}),this.pu=new my(s,i)}}async function Zi(t){if(Yt(t))for(const e of t.gu)await e(!0)}async function Rs(t){for(const e of t.gu)await e(!1)}function _h(t,e){const n=x(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),ua(n)?la(n):xn(n).Mo()&&ca(n,e))}function Ih(t,e){const n=x(t),s=xn(n);n.wu.delete(e),s.Mo()&&Sh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():Yt(n)&&n.pu.set("Unknown"))}function ca(t,e){t.Iu.Ft(e.targetId),xn(t).Jo(e)}function Sh(t,e){t.Iu.Ft(e),xn(t).Yo(e)}function la(t){t.Iu=new vm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),xn(t).start(),t.pu.au()}function ua(t){return Yt(t)&&!xn(t).Oo()&&t.wu.size>0}function Yt(t){return x(t).mu.size===0}function Ah(t){t.Iu=void 0}async function vy(t){t.wu.forEach((e,n)=>{ca(t,e)})}async function wy(t,e){Ah(t),ua(t)?(t.pu.fu(e),la(t)):t.pu.set("Unknown")}async function by(t,e,n){if(t.pu.set("Online"),e instanceof fh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ci(t,s)}else if(e instanceof ii?t.Iu.Qt(e):e instanceof dh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(L.min()))try{const s=await Eh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Se.EMPTY_BYTE_STRING,c.snapshotVersion)),Sh(i,a);const l=new Vt(c.target,a,1,c.sequenceNumber);ca(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){A("RemoteStore","Failed to raise snapshot:",s),await Ci(t,s)}}async function Ci(t,e,n){if(!Ns(e))throw e;t.mu.add(1),await Rs(t),t.pu.set("Offline"),n||(n=()=>Eh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Zi(t)})}function kh(t,e){return e().catch(n=>Ci(t,n,e))}async function er(t){const e=x(t),n=_t(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Ey(e);)try{const i=await ry(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Ty(e,i)}catch(i){await Ci(e,i)}Dh(e)&&Nh(e)}function Ey(t){return Yt(t)&&t._u.length<10}function Ty(t,e){t._u.push(e);const n=_t(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Dh(t){return Yt(t)&&!_t(t).Oo()&&t._u.length>0}function Nh(t){_t(t).start()}async function Cy(t){_t(t).su()}async function _y(t){const e=_t(t);for(const n of t._u)e.tu(n.mutations)}async function Iy(t,e,n){const s=t._u.shift(),i=ia.from(s,e,n);await kh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await er(t)}async function Sy(t,e){e&&_t(t).Xo&&await async function(n,s){if(i=s.code,fm(i)&&i!==y.ABORTED){const r=n._u.shift();_t(n).$o(),await kh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await er(n)}var i}(t,e),Dh(t)&&Nh(t)}async function xc(t,e){const n=x(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const s=Yt(n);n.mu.add(3),await Rs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Zi(n)}async function Ay(t,e){const n=x(t);e?(n.mu.delete(2),await Zi(n)):e||(n.mu.add(2),await Rs(n),n.pu.set("Unknown"))}function xn(t){return t.Tu||(t.Tu=function(e,n,s){const i=x(e);return i.ru(),new fy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:vy.bind(null,t),no:wy.bind(null,t),Ho:by.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),ua(t)?la(t):t.pu.set("Unknown")):(await t.Tu.stop(),Ah(t))})),t.Tu}function _t(t){return t.Eu||(t.Eu=function(e,n,s){const i=x(e);return i.ru(),new py(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Cy.bind(null,t),no:Sy.bind(null,t),nu:_y.bind(null,t),eu:Iy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await er(t)):(await t.Eu.stop(),t._u.length>0&&(A("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ha(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function da(t,e){if(ht("AsyncQueue",`${e}: ${t}`),Ns(t))return new I(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||D.comparator(n.key,s.key):(n,s)=>D.comparator(n.key,s.key),this.keyedMap=zn(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Mc{constructor(){this.Au=new le(D.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):O():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class _n{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _n(e,n,cn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.bu=void 0,this.listeners=[]}}class Dy{constructor(){this.queries=new Ln(e=>Xu(e),Gi),this.onlineState="Unknown",this.vu=new Set}}async function Ph(t,e){const n=x(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ky),i)try{r.bu=await n.onListen(s)}catch(o){const a=da(o,`Initialization of query '${so(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&fa(n)}async function Oh(t,e){const n=x(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ny(t,e){const n=x(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&fa(n)}function Py(t,e,n){const s=x(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function fa(t){t.vu.forEach(e=>{e.next()})}class Rh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new _n(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=_n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.key=e}}class xh{constructor(e){this.key=e}}class Oy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=U(),this.mutatedKeys=U(),this.ju=Ju(e),this.zu=new cn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Mc,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Wi(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?g!==w&&(s.track({type:3,doc:p}),v=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=w?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new _n(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Mc,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=U(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new xh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Lh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=U();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return _n.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Ry{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ly{constructor(e){this.key=e,this.ic=!1}}class xy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Ln(a=>Xu(a),Gi),this.uc=new Map,this.cc=new Set,this.ac=new le(D.comparator),this.hc=new Map,this.lc=new ra,this.fc={},this.dc=new Map,this._c=Cn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function My(t,e){const n=zy(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await oy(n.localStore,dt(e));n.isPrimaryClient&&_h(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await By(n,e,s,a==="current",o.resumeToken)}return i}async function By(t,e,n,s,i){t.mc=(h,d,p)=>async function(g,w,v,T){let C=w.view.Hu(v);C.Li&&(C=await Oc(g.localStore,w.query,!1).then(({documents:q})=>w.view.Hu(q,C)));const N=T&&T.targetChanges.get(w.targetId),M=w.view.applyChanges(C,g.isPrimaryClient,N);return Fc(g,w.targetId,M.tc),M.snapshot}(t,h,d,p);const r=await Oc(t.localStore,e,!0),o=new Oy(e,r.Yi),a=o.Hu(r.documents),c=Os.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Fc(t,n,l.tc);const u=new Ry(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function Fy(t,e){const n=x(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!Gi(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ao(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ih(n.remoteStore,s.targetId),co(n,s.targetId)}).catch(Ds)):(co(n,s.targetId),await ao(n.localStore,s.targetId,!0))}async function Vy(t,e,n){const s=Gy(t);try{const i=await function(r,o){const a=x(r),c=ae.now(),l=o.reduce((d,p)=>d.add(p.key),U());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=ft(),g=U();return a.ji.getEntries(d,l).next(w=>{p=w,p.forEach((v,T)=>{T.isValidDocument()||(g=g.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{u=w;const v=[];for(const T of o){const C=um(T,u.get(T.key).overlayedDocument);C!=null&&v.push(new kt(T.key,C,Qu(C.value.mapValue),Qe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(w=>{h=w;const v=w.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,w.batchId,v)})}).then(()=>({batchId:h.batchId,changes:lh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new le(K)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ls(s,i.changes),await er(s.remoteStore)}catch(i){const r=da(i,"Failed to persist write");n.reject(r)}}async function Mh(t,e){const n=x(t);try{const s=await sy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?G(o.ic):i.removedDocuments.size>0&&(G(o.ic),o.ic=!1))}),await Ls(n,s,e)}catch(s){await Ds(s)}}function Bc(t,e,n){const s=x(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=x(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&fa(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Uy(t,e,n){const s=x(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new le(D.comparator);o=o.insert(r,be.newNoDocument(r,L.min()));const a=U().add(r),c=new Xi(L.min(),new Map,new ce(K),o,a);await Mh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),pa(s)}else await ao(s.localStore,e,!1).then(()=>co(s,e,n)).catch(Ds)}async function $y(t,e){const n=x(t),s=e.batch.batchId;try{const i=await ny(n.localStore,e);Fh(n,s,null),Bh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ls(n,i)}catch(i){await Ds(i)}}async function jy(t,e,n){const s=x(t);try{const i=await function(r,o){const a=x(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(G(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Fh(s,e,n),Bh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ls(s,i)}catch(i){await Ds(i)}}function Bh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Fh(t,e,n){const s=x(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function co(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Vh(t,s)})}function Vh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Ih(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),pa(t))}function Fc(t,e,n){for(const s of n)s instanceof Lh?(t.lc.addReference(s.key,e),qy(t,s)):s instanceof xh?(A("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Vh(t,s.key)):O()}function qy(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(A("SyncEngine","New document in limbo: "+n),t.cc.add(s),pa(t))}function pa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new D(W.fromString(e)),s=t._c.next();t.hc.set(s,new Ly(n)),t.ac=t.ac.insert(n,s),_h(t.remoteStore,new Vt(dt(ea(n.path)),s,2,Yo.at))}}async function Ls(t,e,n){const s=x(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=aa.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=x(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ns(u))throw u;A("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,g)}}}(s.localStore,r))}async function Hy(t,e){const n=x(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const s=await bh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new I(y.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ls(n,s.Wi)}}function Ky(t,e){const n=x(t),s=n.hc.get(e);if(s&&s.ic)return U().add(s.key);{let i=U();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function zy(t){const e=x(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ky.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uy.bind(null,e),e.rc.Ho=Ny.bind(null,e.eventManager),e.rc.gc=Py.bind(null,e.eventManager),e}function Gy(t){const e=x(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$y.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jy.bind(null,e),e}class Wy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Ji(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return ty(this.persistence,new Zm,e.initialUser,this.Tt)}Tc(e){return new Xm(oa.qs,this.Tt)}Ic(e){return new cy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Bc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hy.bind(null,this.syncEngine),await Ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Dy}createDatastore(e){const n=Ji(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new dy(i));var i;return function(r,o,a,c){return new gy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Bc(this.syncEngine,a,0),o=Lc.C()?new Lc:new ly,new yy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new xy(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=x(e);A("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Rs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=we.UNAUTHENTICATED,this.clientId=Vu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{A("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(A("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=da(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Xy(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await bh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zy(t);A("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>xc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>xc(e.remoteStore,r)),t.onlineComponents=e}async function Zy(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await Xy(t,new Wy)),t.offlineComponents}async function $h(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await Jy(t,new Qy)),t.onlineComponents}function ev(t){return $h(t).then(e=>e.syncEngine)}async function lo(t){const e=await $h(t),n=e.eventManager;return n.onListen=My.bind(null,e.syncEngine),n.onUnlisten=Fy.bind(null,e.syncEngine),n}function tv(t,e,n={}){const s=new bt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Uh({next:h=>{r.enqueueAndForget(()=>Oh(i,u)),h.fromCache&&a.source==="server"?c.reject(new I(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Rh(o,l,{includeMetadataChanges:!0,Ou:!0});return Ph(i,u)}(await lo(t),t.asyncQueue,e,n,s)),s.promise}const Vc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t,e,n){if(!n)throw new I(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nv(t,e,n,s){if(e===!0&&s===!0)throw new I(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uc(t){if(!D.isDocumentKey(t))throw new I(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $c(t){if(D.isDocumentKey(t))throw new I(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function nt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tr(t);throw new I(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new I(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sg;switch(n.type){case"gapi":const s=n.client;return new Ng(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new I(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Vc.get(e);n&&(A("ComponentProvider","Removing Datastore"),Vc.delete(e),n.terminate())}(this),Promise.resolve()}}function sv(t,e,n,s={}){var i;const r=(t=nt(t,nr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Yr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=we.MOCK_USER;else{o=Il(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new I(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new we(c)}t._authCredentials=new Ag(new Fu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class Dt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dt(this.firestore,e,this._query)}}class Et extends Dt{constructor(e,n,s){super(e,n,ea(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new D(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function Bt(t,e,...n){if(t=Ye(t),jh("collection","path",e),t instanceof nr){const s=W.fromString(e,...n);return $c(s),new Et(t,null,s)}{if(!(t instanceof Le||t instanceof Et))throw new I(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(W.fromString(e,...n));return $c(s),new Et(t.firestore,null,s)}}function In(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Vu.R()),jh("doc","path",e),t instanceof nr){const s=W.fromString(e,...n);return Uc(s),new Le(t,null,new D(s))}{if(!(t instanceof Le||t instanceof Et))throw new I(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(W.fromString(e,...n));return Uc(s),new Le(t.firestore,t instanceof Et?t.converter:null,new D(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Th(this,"async_queue_retry"),this.Hc=()=>{const n=Ar();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Ar();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Ar();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new bt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ns(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ht("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=ha.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&O()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function qc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qt extends nr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new iv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qh(this),this._firestoreClient.terminate()}}function rv(t,e){const n=typeof t=="object"?t:Rl(),s=typeof t=="string"?t:e||"(default)",i=Nl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=_l("firestore");r&&sv(i,...r)}return i}function ga(t){return t._firestoreClient||qh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qh(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Ug(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Yy(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Se.fromBase64String(e))}catch(n){throw new I(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sn(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=/^__.*__$/;class av{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ps(e,this.data,n,this.fieldTransforms)}}class Hh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new kt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Kh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class va{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new va(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return _i(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Kh(this.ra)&&ov.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class cv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Ji(e)}wa(e,n,s,i=!1){return new va({ra:e,methodName:n,_a:s,path:Ee.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function wa(t){const e=t._freezeSettings(),n=Ji(t._databaseId);return new cv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lv(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);ba("Data must be an object, but it was:",o,s);const a=zh(s,o);let c,l;if(r.merge)c=new Fe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=uo(e,h,n);if(!o.contains(d))throw new I(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Wh(u,d)||u.push(d)}c=new Fe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new av(new Re(a),c,l)}class ir extends ma{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ir}}function uv(t,e,n,s){const i=t.wa(1,e,n);ba("Data must be an object, but it was:",i,s);const r=[],o=Re.empty();Qt(s,(c,l)=>{const u=Ea(e,c,n);l=Ye(l);const h=i.ha(u);if(l instanceof ir)r.push(u);else{const d=xs(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Fe(r);return new Hh(o,a,i.fieldTransforms)}function hv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[uo(e,s,n)],c=[i];if(r.length%2!=0)throw new I(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(uo(e,r[d])),c.push(r[d+1]);const l=[],u=Re.empty();for(let d=a.length-1;d>=0;--d)if(!Wh(l,a[d])){const p=a[d];let g=c[d];g=Ye(g);const w=o.ha(p);if(g instanceof ir)l.push(p);else{const v=xs(g,w);v!=null&&(l.push(p),u.set(p,v))}}const h=new Fe(l);return new Hh(u,h,o.fieldTransforms)}function dv(t,e,n,s=!1){return xs(n,t.wa(s?4:3,e))}function xs(t,e){if(Gh(t=Ye(t)))return ba("Unsupported field value:",e,t),zh(t,e);if(t instanceof ma)return function(n,s){if(!Kh(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=xs(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return im(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ae.fromDate(n);return{timestampValue:Ti(s.Tt,i)}}if(n instanceof ae){const i=new ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ti(s.Tt,i)}}if(n instanceof ya)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sn)return{bytesValue:ph(s.Tt,n._byteString)};if(n instanceof Le){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${tr(n)}`)}(t,e)}function zh(t,e){const n={};return Uu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qt(t,(s,i)=>{const r=xs(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Gh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ae||t instanceof ya||t instanceof Sn||t instanceof Le||t instanceof ma)}function ba(t,e,n){if(!Gh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=tr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function uo(t,e,n){if((e=Ye(e))instanceof sr)return e._internalPath;if(typeof e=="string")return Ea(t,e);throw _i("Field path arguments must be of type string or ",t,!1,void 0,n)}const fv=new RegExp("[~\\*/\\[\\]]");function Ea(t,e,n){if(e.search(fv)>=0)throw _i(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sr(...e.split("."))._internalPath}catch{throw _i(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _i(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new I(y.INVALID_ARGUMENT,a+t+c)}function Wh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pv extends Qh{data(){return super.data()}}function rr(t,e){return typeof e=="string"?Ea(t,e):e instanceof sr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new I(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ta{}class Xh extends Ta{}function Ii(t,e,...n){let s=[];e instanceof Ta&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Ca).length,o=i.filter(a=>a instanceof or).length;if(r>1||r>0&&o>0)throw new I(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class or extends Xh{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new or(e,n,s)}_apply(e){const n=this._parse(e);return Jh(e._query,n),new Dt(e.firestore,e.converter,to(e._query,n))}_parse(e){const n=wa(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new I(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Kc(u,l);const d=[];for(const p of u)d.push(Hc(a,i,p));h={arrayValue:{values:d}}}else h=Hc(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Kc(u,l),h=dv(o,r,u,l==="in"||l==="not-in");return re.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gv(t,e,n){const s=e,i=rr("where",t);return or._create(i,s,n)}class Ca extends Ta{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ca(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Xe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Jh(r,a),r=to(r,a)}(e._query,n),new Dt(e.firestore,e.converter,to(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _a extends Xh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _a(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new I(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new I(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new on(i,r);return function(a,c){if(ta(a)===null){const l=zi(a);l!==null&&Zh(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Dt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Rn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ho(t,e="asc"){const n=e,s=rr("orderBy",t);return _a._create(s,n)}function Hc(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new I(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yu(e)&&n.indexOf("/")!==-1)throw new I(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(W.fromString(n));if(!D.isDocumentKey(s))throw new I(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return mc(t,new D(s))}if(n instanceof Le)return mc(t,n._key);throw new I(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tr(n)}.`)}function Kc(t,e){if(!Array.isArray(t)||t.length===0)throw new I(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jh(t,e){if(e.isInequality()){const s=zi(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new I(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=ta(t);r!==null&&Zh(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new I(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Zh(t,e,n){if(!n.isEqual(e))throw new I(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class mv{convertValue(e,n="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const s={};return Qt(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new ya(ie(e.latitude),ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ju(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const n=Ct(e);return new ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=W.fromString(e);G(wh(s));const i=new ds(s.get(1),s.get(3)),r=new D(s.popFirst(5));return i.isEqual(n)||ht(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ed extends Qh{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(rr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ri extends ed{data(e={}){return super.data(e)}}class td{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Gn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ri(this._firestore,this._userDataWriter,s.key,s,new Gn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ri(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ri(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:vv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Ia extends mv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function zc(t){t=nt(t,Dt);const e=nt(t.firestore,qt),n=ga(e),s=new Ia(e);return Yh(t._query),tv(n,t._query).then(i=>new td(e,s,t,i))}function Sa(t,e,n,...s){t=nt(t,Le);const i=nt(t.firestore,qt),r=wa(i);let o;return o=typeof(e=Ye(e))=="string"||e instanceof sr?hv(r,"updateDoc",t._key,e,n,s):uv(r,"updateDoc",t._key,e),Aa(i,[o.toMutation(t._key,Qe.exists(!0))])}function fo(t){return Aa(nt(t.firestore,qt),[new na(t._key,Qe.none())])}function nd(t,e){const n=nt(t.firestore,qt),s=In(t),i=yv(t.converter,e);return Aa(n,[lv(wa(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Qe.exists(!1))]).then(()=>s)}function po(t,...e){var n,s,i;t=Ye(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||qc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(qc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof Le)l=nt(t.firestore,qt),u=ea(t._key.path),c={next:h=>{e[o]&&e[o](wv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=nt(t,Dt);l=nt(h.firestore,qt),u=h._query;const d=new Ia(l);c={next:p=>{e[o]&&e[o](new td(l,d,h,p))},error:e[o+1],complete:e[o+2]},Yh(t._query)}return function(h,d,p,g){const w=new Uh(g),v=new Rh(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>Ph(await lo(h),v)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>Oh(await lo(h),v))}}(ga(l),u,a,c)}function Aa(t,e){return function(n,s){const i=new bt;return n.asyncQueue.enqueueAndForget(async()=>Vy(await ev(n),s,i)),i.promise}(ga(t),e)}function wv(t,e,n){const s=n.docs.get(e._key),i=new Ia(t);return new ed(t,i,e._key,s,new Gn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){On=n})(Pl),is(new yn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new qt(new kg(n.getProvider("auth-internal")),new Og(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ds(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),wt(dc,"3.8.4",t),wt(dc,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="firebasestorage.googleapis.com",bv="storageBucket",Ev=2*60*1e3,Tv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Gt{constructor(e,n,s=0){super(kr(e),`Firebase Storage: ${n} (${kr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var it;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(it||(it={}));function kr(t){return"storage/"+t}function Cv(){const t="An unknown error occurred, please check the error payload for server response.";return new ot(it.UNKNOWN,t)}function _v(){return new ot(it.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Iv(){return new ot(it.CANCELED,"User canceled the upload/download.")}function Sv(t){return new ot(it.INVALID_URL,"Invalid URL '"+t+"'.")}function Av(t){return new ot(it.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Gc(t){return new ot(it.INVALID_ARGUMENT,t)}function id(){return new ot(it.APP_DELETED,"The Firebase app was deleted.")}function kv(t){return new ot(it.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=We.makeFromUrl(e,n)}catch{return new We(e,"")}if(s.path==="")return s;throw Av(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},w=n===sd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${w}/${i}/${v}`,"i"),N=[{regex:a,indices:c,postModify:r},{regex:p,indices:g,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<N.length;M++){const q=N[M],De=q.regex.exec(e);if(De){const P=De[q.indices.bucket];let Y=De[q.indices.path];Y||(Y=""),s=new We(P,Y),q.postModify(s);break}}if(s==null)throw Sv(e);return s}}class Dv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function d(){r&&clearTimeout(r)}function p(v,...T){if(l){d();return}if(v){d(),u.call(null,v,...T);return}if(c()||o){d(),u.call(null,v,...T);return}s<64&&(s*=2);let N;a===1?(a=2,N=0):N=(s+Math.random())*1e3,h(N)}let g=!1;function w(v){g||(g=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,w(!0)},n),w}function Pv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){return t!==void 0}function Wc(t,e,n,s){if(s<e)throw Gc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Gc(`Invalid value for '${t}'. Expected ${n} or less.`)}function Rv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Si||(Si={}));/**
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
 */function Lv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Zs(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Si.NO_ERROR,c=r.getStatus();if(!a||Lv(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Si.ABORT;s(!1,new Zs(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Zs(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Ov(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Cv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?id():Iv();o(c)}else{const c=_v();o(c)}};this.canceled_?n(!1,new Zs(!1,null,!0)):this.backoffId_=Nv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Pv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zs{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Mv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Bv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Fv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Vv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Uv(t,e,n,s,i,r,o=!0){const a=Rv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Fv(l,e),Mv(l,n),Bv(l,r),Vv(l,s),new xv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ai{constructor(e,n){this._service=e,n instanceof We?this._location=n:this._location=We.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ai(e,n)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jv(this._location.path)}get storage(){return this._service}get parent(){const e=$v(this._location.path);if(e===null)return null;const n=new We(this._location.bucket,e);return new Ai(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kv(e)}}function Qc(t,e){const n=e==null?void 0:e[bv];return n==null?null:We.makeFromBucketSpec(n,t)}function qv(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Il(i,t.app.options.projectId))}class Hv{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=sd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ev,this._maxUploadRetryTime=Tv,this._requests=new Set,i!=null?this._bucket=We.makeFromBucketSpec(i,this._host):this._bucket=Qc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=Qc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ai(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Dv(id());{const o=Uv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Yc="@firebase/storage",Xc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="storage";function Kv(t=Rl(),e){t=Ye(t);const s=Nl(t,rd).getImmediate({identifier:e}),i=_l("storage");return i&&zv(s,...i),s}function zv(t,e,n,s={}){qv(t,e,n,s)}function Gv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hv(n,s,i,e,Pl)}function Wv(){is(new yn(rd,Gv,"PUBLIC").setMultipleInstances(!0)),wt(Yc,Xc,""),wt(Yc,Xc,"esm2017")}Wv();const Qv={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},od=Ol(Qv);Kv(od);const He=rv(od);var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},go={},Xv={get exports(){return go},set exports(t){go=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(Yv,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(v){v.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(v){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),g=this.options.position=="left"?d:"-"+d,w=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+g+","+w+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,g=window.innerWidth>0?window.innerWidth:screen.width;g<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Xv);const ln=go,ad="SweetAlert2:",Jv=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},ka=t=>t.charAt(0).toUpperCase()+t.slice(1),$e=t=>Array.prototype.slice.call(t),Me=t=>{console.warn(`${ad} ${typeof t=="object"?t.join(" "):t}`)},Xt=t=>{console.error(`${ad} ${t}`)},Jc=[],Zv=t=>{Jc.includes(t)||(Jc.push(t),Me(t))},ew=(t,e)=>{Zv(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},ar=t=>typeof t=="function"?t():t,Da=t=>t&&typeof t.toPromise=="function",Ms=t=>Da(t)?t.toPromise():Promise.resolve(t),Na=t=>t&&Promise.resolve(t)===t,un={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},tw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],nw={},sw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],cd=t=>Object.prototype.hasOwnProperty.call(un,t),ld=t=>tw.indexOf(t)!==-1,mo=t=>nw[t],iw=t=>{cd(t)||Me(`Unknown parameter "${t}"`)},rw=t=>{sw.includes(t)&&Me(`The parameter "${t}" is incompatible with toasts`)},ow=t=>{mo(t)&&ew(t,mo(t))},aw=t=>{!t.backdrop&&t.allowOutsideClick&&Me('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)iw(e),t.toast&&rw(e),ow(e)},cw="swal2-",ud=t=>{const e={};for(const n in t)e[t[n]]=cw+t[n];return e},f=ud(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Zn=ud(["success","warning","info","question","error"]),Ae=()=>document.body.querySelector(`.${f.container}`),Bs=t=>{const e=Ae();return e?e.querySelector(t):null},ze=t=>Bs(`.${t}`),z=()=>ze(f.popup),Fs=()=>ze(f.icon),hd=()=>ze(f.title),ki=()=>ze(f["html-container"]),dd=()=>ze(f.image),fd=()=>ze(f["progress-steps"]),cr=()=>ze(f["validation-message"]),Je=()=>Bs(`.${f.actions} .${f.confirm}`),It=()=>Bs(`.${f.actions} .${f.deny}`),lw=()=>ze(f["input-label"]),Mn=()=>Bs(`.${f.loader}`),Ht=()=>Bs(`.${f.actions} .${f.cancel}`),Vs=()=>ze(f.actions),pd=()=>ze(f.footer),lr=()=>ze(f["timer-progress-bar"]),Pa=()=>ze(f.close),uw=`
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
`,Oa=()=>{const t=$e(z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=$e(z().querySelectorAll(uw)).filter(n=>n.getAttribute("tabindex")!=="-1");return Jv(t.concat(e)).filter(n=>Ve(n))},Ra=()=>lt(document.body,f.shown)&&!lt(document.body,f["toast-shown"])&&!lt(document.body,f["no-backdrop"]),ur=()=>z()&&lt(z(),f.toast),hw=()=>z().hasAttribute("data-loading"),hn={previousBodyPadding:null},Te=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");$e(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),$e(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},lt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},dw=(t,e)=>{$e(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(Zn).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},Ke=(t,e,n)=>{if(dw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Me(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);j(t,e.customClass[n])}},La=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},gd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},md=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},j=(t,e)=>{md(t,e,!0)},rt=(t,e)=>{md(t,e,!1)},mt=(t,e)=>{const n=$e(t.childNodes);for(let s=0;s<n.length;s++)if(lt(n[s],e))return n[s]},es=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},ge=(t,e="flex")=>{t.style.display=e},ke=t=>{t.style.display="none"},Zc=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},hr=(t,e,n)=>{e?ge(t,n):ke(t)},Ve=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),fw=()=>!Ve(Je())&&!Ve(It())&&!Ve(Ht()),el=t=>t.scrollHeight>t.clientHeight,yd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},xa=(t,e=!1)=>{const n=lr();Ve(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},pw=()=>{const t=lr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},vd=()=>typeof window>"u"||typeof document>"u",gw=100,B={},mw=()=>{B.previousActiveElement&&B.previousActiveElement.focus?(B.previousActiveElement.focus(),B.previousActiveElement=null):document.body&&document.body.focus()},yw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;B.restoreFocusTimeout=setTimeout(()=>{mw(),e()},gw),window.scrollTo(n,s)}),vw=`
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
`.replace(/(^|\n)\s*/g,""),ww=()=>{const t=Ae();return t?(t.remove(),rt([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Pt=()=>{B.currentInstance.resetValidationMessage()},bw=()=>{const t=z(),e=mt(t,f.input),n=mt(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=mt(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=mt(t,f.textarea);e.oninput=Pt,n.onchange=Pt,r.onchange=Pt,o.onchange=Pt,a.oninput=Pt,s.oninput=()=>{Pt(),i.value=s.value},s.onchange=()=>{Pt(),s.nextSibling.value=s.value}},Ew=t=>typeof t=="string"?document.querySelector(t):t,Tw=t=>{const e=z();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Cw=t=>{window.getComputedStyle(t).direction==="rtl"&&j(Ae(),f.rtl)},_w=t=>{const e=ww();if(vd()){Xt("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&j(n,f["no-transition"]),Te(n,vw);const s=Ew(t.target);s.appendChild(n),Tw(t),Cw(s),bw()},Ma=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Iw(t,e):t&&Te(e,t)},Iw=(t,e)=>{t.jquery?Sw(e,t):Te(e,t.toString())},Sw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ys=(()=>{if(vd())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Aw=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},kw=(t,e)=>{const n=Vs(),s=Mn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?ke(n):ge(n),Ke(n,e,"actions"),Dw(n,s,e),Te(s,e.loaderHtml),Ke(s,e,"loader")};function Dw(t,e,n){const s=Je(),i=It(),r=Ht();Dr(s,"confirm",n),Dr(i,"deny",n),Dr(r,"cancel",n),Nw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Nw(t,e,n,s){if(!s.buttonsStyling)return rt([t,e,n],f.styled);j([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,j(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,j(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,j(n,f["default-outline"]))}function Dr(t,e,n){hr(t,n[`show${ka(e)}Button`],"inline-block"),Te(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],Ke(t,n,`${e}Button`),j(t,n[`${e}ButtonClass`])}function Pw(t,e){typeof e=="string"?t.style.background=e:e||j([document.documentElement,document.body],f["no-backdrop"])}function Ow(t,e){e in f?j(t,f[e]):(Me('The "position" parameter is not valid, defaulting to "center"'),j(t,f.center))}function Rw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&j(t,f[n])}}const Lw=(t,e)=>{const n=Ae();n&&(Pw(n,e.backdrop),Ow(n,e.position),Rw(n,e.grow),Ke(n,e,"container"))},V={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},xw=["input","file","range","select","radio","checkbox","textarea"],Mw=(t,e)=>{const n=z(),s=V.innerParams.get(t),i=!s||e.input!==s.input;xw.forEach(r=>{const o=f[r],a=mt(n,o);Vw(r,e.inputAttributes),a.className=o,i&&ke(a)}),e.input&&(i&&Bw(e),Uw(e))},Bw=t=>{if(!Oe[t.input])return Xt(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=wd(t.input),n=Oe[t.input](e,t);ge(n),setTimeout(()=>{gd(n)})},Fw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Vw=(t,e)=>{const n=La(z(),t);if(n){Fw(n);for(const s in e)n.setAttribute(s,e[s])}},Uw=t=>{const e=wd(t.input);t.customClass&&j(e,t.customClass.input)},Ba=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Us=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,j(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},wd=t=>{const e=f[t]?f[t]:f.input;return mt(z(),e)},Oe={};Oe.text=Oe.email=Oe.password=Oe.number=Oe.tel=Oe.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Na(e.inputValue)||Me(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Us(t,t,e),Ba(t,e),t.type=e.input,t);Oe.file=(t,e)=>(Us(t,t,e),Ba(t,e),t);Oe.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Us(n,t,e),t};Oe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Te(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Us(t,t,e),t};Oe.radio=t=>(t.textContent="",t);Oe.checkbox=(t,e)=>{const n=La(z(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Te(s,e.inputPlaceholder),t};Oe.textarea=(t,e)=>{t.value=e.inputValue,Ba(t,e),Us(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(z()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?z().style.width=`${r}px`:z().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const $w=(t,e)=>{const n=ki();Ke(n,e,"htmlContainer"),e.html?(Ma(e.html,n),ge(n,"block")):e.text?(n.textContent=e.text,ge(n,"block")):ke(n),Mw(t,e)},jw=(t,e)=>{const n=pd();hr(n,e.footer),e.footer&&Ma(e.footer,n),Ke(n,e,"footer")},qw=(t,e)=>{const n=Pa();Te(n,e.closeButtonHtml),Ke(n,e,"closeButton"),hr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},Hw=(t,e)=>{const n=V.innerParams.get(t),s=Fs();if(n&&e.icon===n.icon){nl(s,e),tl(s,e);return}if(!e.icon&&!e.iconHtml)return ke(s);if(e.icon&&Object.keys(Zn).indexOf(e.icon)===-1)return Xt(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),ke(s);ge(s),nl(s,e),tl(s,e),j(s,e.showClass.icon)},tl=(t,e)=>{for(const n in Zn)e.icon!==n&&rt(t,Zn[n]);j(t,Zn[e.icon]),Ww(t,e),Kw(),Ke(t,e,"icon")},Kw=()=>{const t=z(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},zw=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Gw=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,nl=(t,e)=>{t.textContent="",e.iconHtml?Te(t,sl(e.iconHtml)):e.icon==="success"?Te(t,zw):e.icon==="error"?Te(t,Gw):Te(t,sl({question:"?",warning:"!",info:"i"}[e.icon]))},Ww=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Zc(t,n,"backgroundColor",e.iconColor);Zc(t,".swal2-success-ring","borderColor",e.iconColor)}},sl=t=>`<div class="${f["icon-content"]}">${t}</div>`,Qw=(t,e)=>{const n=dd();if(!e.imageUrl)return ke(n);ge(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),es(n,"width",e.imageWidth),es(n,"height",e.imageHeight),n.className=f.image,Ke(n,e,"image")},Yw=t=>{const e=document.createElement("li");return j(e,f["progress-step"]),Te(e,t),e},Xw=t=>{const e=document.createElement("li");return j(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},Jw=(t,e)=>{const n=fd();if(!e.progressSteps||e.progressSteps.length===0)return ke(n);ge(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Me("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=Yw(s);if(n.appendChild(r),i===e.currentProgressStep&&j(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=Xw(e);n.appendChild(o)}})},Zw=(t,e)=>{const n=hd();hr(n,e.title||e.titleText,"block"),e.title&&Ma(e.title,n),e.titleText&&(n.innerText=e.titleText),Ke(n,e,"title")},eb=(t,e)=>{const n=Ae(),s=z();e.toast?(es(n,"width",e.width),s.style.width="100%",s.insertBefore(Mn(),Fs())):es(s,"width",e.width),es(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),ke(cr()),tb(s,e)},tb=(t,e)=>{t.className=`${f.popup} ${Ve(t)?e.showClass.popup:""}`,e.toast?(j([document.documentElement,document.body],f["toast-shown"]),j(t,f.toast)):j(t,f.modal),Ke(t,e,"popup"),typeof e.customClass=="string"&&j(t,e.customClass),e.icon&&j(t,f[`icon-${e.icon}`])},bd=(t,e)=>{eb(t,e),Lw(t,e),Jw(t,e),Hw(t,e),Qw(t,e),Zw(t,e),qw(t,e),$w(t,e),kw(t,e),jw(t,e),typeof e.didRender=="function"&&e.didRender(z())},Bn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),nb=()=>{$e(document.body.children).forEach(e=>{e===Ae()||e.contains(Ae())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Ed=()=>{$e(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Td=["swal-title","swal-html","swal-footer"],sb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return ub(n),Object.assign(ib(n),rb(n),ob(n),ab(n),cb(n),lb(n,Td))},ib=t=>{const e={};return $e(t.querySelectorAll("swal-param")).forEach(n=>{Kt(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof un[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof un[s]=="object"&&(e[s]=JSON.parse(i))}),e},rb=t=>{const e={};return $e(t.querySelectorAll("swal-button")).forEach(n=>{Kt(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${ka(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},ob=t=>{const e={},n=t.querySelector("swal-image");return n&&(Kt(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},ab=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Kt(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},cb=t=>{const e={},n=t.querySelector("swal-input");n&&(Kt(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},$e(s).forEach(i=>{Kt(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},lb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(Kt(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},ub=t=>{const e=Td.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);$e(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Me(`Unrecognized element <${s}>`)})},Kt=(t,e)=>{$e(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Me([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},il={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function hb(t){t.inputValidator||Object.keys(il).forEach(e=>{t.input===e&&(t.inputValidator=il[e])})}function db(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Me('Target parameter is not valid, defaulting to "body"'),t.target="body")}function fb(t){hb(t),t.showLoaderOnConfirm&&!t.preConfirm&&Me(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),db(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),_w(t)}class pb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const gb=()=>{hn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(hn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${hn.previousBodyPadding+Aw()}px`)},mb=()=>{hn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${hn.previousBodyPadding}px`,hn.previousBodyPadding=null)},yb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!lt(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,j(document.body,f.iosfix),wb(),vb()}},vb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&z().scrollHeight>window.innerHeight-44&&(Ae().style.paddingBottom=`${44}px`)},wb=()=>{const t=Ae();let e;t.ontouchstart=n=>{e=bb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},bb=t=>{const e=t.target,n=Ae();return Eb(t)||Tb(t)?!1:e===n||!el(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(el(ki())&&ki().contains(e))},Eb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Tb=t=>t.touches&&t.touches.length>1,Cb=()=>{if(lt(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);rt(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Cd=10,_b=t=>{const e=Ae(),n=z();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Ab(e,n,t),setTimeout(()=>{Ib(e,n)},Cd),Ra()&&(Sb(e,t.scrollbarPadding,i),nb()),!ur()&&!B.previousActiveElement&&(B.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),rt(e,f["no-transition"])},_d=t=>{const e=z();if(t.target!==e)return;const n=Ae();e.removeEventListener(ys,_d),n.style.overflowY="auto"},Ib=(t,e)=>{ys&&yd(e)?(t.style.overflowY="hidden",e.addEventListener(ys,_d)):t.style.overflowY="auto"},Sb=(t,e,n)=>{yb(),e&&n!=="hidden"&&gb(),setTimeout(()=>{t.scrollTop=0})},Ab=(t,e,n)=>{j(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),ge(e,"grid"),setTimeout(()=>{j(e,n.showClass.popup),e.style.removeProperty("opacity")},Cd),j([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&j([document.documentElement,document.body],f["height-auto"])},An=t=>{let e=z();e||new ws,e=z();const n=Mn();ur()?ke(Fs()):kb(e,t),ge(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},kb=(t,e)=>{const n=Vs(),s=Mn();!e&&Ve(Je())&&(e=Je()),ge(n),e&&(ke(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),j([t,n],f.loading)},Db=(t,e)=>{e.input==="select"||e.input==="radio"?Lb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Da(e.inputValue)||Na(e.inputValue))&&(An(Je()),xb(t,e))},Nb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Pb(n);case"radio":return Ob(n);case"file":return Rb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Pb=t=>t.checked?1:0,Ob=t=>t.checked?t.value:null,Rb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Lb=(t,e)=>{const n=z(),s=i=>Mb[e.input](n,yo(i),e);Da(e.inputOptions)||Na(e.inputOptions)?(An(Je()),Ms(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):Xt(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},xb=(t,e)=>{const n=t.getInput();ke(n),Ms(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,ge(n),n.focus(),t.hideLoading()}).catch(s=>{Xt(`Error in inputValue promise: ${s}`),n.value="",ge(n),n.focus(),t.hideLoading()})},Mb={select:(t,e,n)=>{const s=mt(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Te(c,o),c.selected=rl(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=mt(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,rl(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Te(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},yo=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=yo(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=yo(s)),e.push([n,s])}),e},rl=(t,e)=>e&&e.toString()===t.toString();function ol(){const t=V.innerParams.get(this);if(!t)return;const e=V.domCache.get(this);ke(e.loader),ur()?t.icon&&ge(Fs()):Bb(e),rt([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Bb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ge(e[0],"inline-block"):fw()&&ke(t.actions)};function Fb(t){const e=V.innerParams.get(t||this),n=V.domCache.get(t||this);return n?La(n.popup,e.input):null}const vs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Vb=()=>Ve(z()),Id=()=>Je()&&Je().click(),Ub=()=>It()&&It().click(),$b=()=>Ht()&&Ht().click(),Sd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},jb=(t,e,n,s)=>{Sd(e),n.toast||(e.keydownHandler=i=>Hb(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:z(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},vo=(t,e,n)=>{const s=Oa();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();z().focus()},Ad=["ArrowRight","ArrowDown"],qb=["ArrowLeft","ArrowUp"],Hb=(t,e,n)=>{const s=V.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Kb(t,e,s):e.key==="Tab"?zb(e,s):[...Ad,...qb].includes(e.key)?Gb(e.key):e.key==="Escape"&&Wb(e,s,n)))},Kb=(t,e,n)=>{if(ar(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Id(),e.preventDefault()}},zb=(t,e)=>{const n=t.target,s=Oa();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?vo(e,i,-1):vo(e,i,1),t.stopPropagation(),t.preventDefault()},Gb=t=>{const e=Je(),n=It(),s=Ht();if(![e,n,s].includes(document.activeElement))return;const i=Ad.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Vs().children.length;o++){if(r=r[i],!r)return;if(Ve(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},Wb=(t,e,n)=>{ar(e.allowEscapeKey)&&(t.preventDefault(),n(Bn.esc))};function kd(t,e,n,s){ur()?al(t,s):(yw(n).then(()=>al(t,s)),Sd(B)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ra()&&(mb(),Cb(),Ed()),Qb()}function Qb(){rt([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function ei(t){t=Zb(t);const e=vs.swalPromiseResolve.get(this),n=Xb(this);this.isAwaitingPromise()?t.isDismissed||($s(this),e(t)):n&&e(t)}function Yb(){return!!V.awaitingPromise.get(this)}const Xb=t=>{const e=z();if(!e)return!1;const n=V.innerParams.get(t);if(!n||lt(e,n.hideClass.popup))return!1;rt(e,n.showClass.popup),j(e,n.hideClass.popup);const s=Ae();return rt(s,n.showClass.backdrop),j(s,n.hideClass.backdrop),eE(t,e,n),!0};function Jb(t){const e=vs.swalPromiseReject.get(this);$s(this),e&&e(t)}const $s=t=>{t.isAwaitingPromise()&&(V.awaitingPromise.delete(t),V.innerParams.get(t)||t._destroy())},Zb=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),eE=(t,e,n)=>{const s=Ae(),i=ys&&yd(e);typeof n.willClose=="function"&&n.willClose(e),i?tE(t,e,s,n.returnFocus,n.didClose):kd(t,s,n.returnFocus,n.didClose)},tE=(t,e,n,s,i)=>{B.swalCloseEventFinishedCallback=kd.bind(null,t,n,s,i),e.addEventListener(ys,function(r){r.target===e&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback)})},al=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Dd(t,e,n){const s=V.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Nd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function nE(){Dd(this,["confirmButton","denyButton","cancelButton"],!1)}function sE(){Dd(this,["confirmButton","denyButton","cancelButton"],!0)}function iE(){return Nd(this.getInput(),!1)}function rE(){return Nd(this.getInput(),!0)}function oE(t){const e=V.domCache.get(this),n=V.innerParams.get(this);Te(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&j(e.validationMessage,n.customClass.validationMessage),ge(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),gd(s),j(s,f.inputerror))}function aE(){const t=V.domCache.get(this);t.validationMessage&&ke(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),rt(e,f.inputerror))}function cE(){return V.domCache.get(this).progressSteps}function lE(t){const e=z(),n=V.innerParams.get(this);if(!e||lt(e,n.hideClass.popup))return Me("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=uE(t),i=Object.assign({},n,s);bd(this,i),V.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const uE=t=>{const e={};return Object.keys(t).forEach(n=>{ld(n)?e[n]=t[n]:Me(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function hE(){const t=V.domCache.get(this),e=V.innerParams.get(this);if(!e){Pd(this);return}t.popup&&B.swalCloseEventFinishedCallback&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback),B.deferDisposalTimer&&(clearTimeout(B.deferDisposalTimer),delete B.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),dE(this)}const dE=t=>{Pd(t),delete t.params,delete B.keydownHandler,delete B.keydownTarget,delete B.currentInstance},Pd=t=>{t.isAwaitingPromise()?(Nr(V,t),V.awaitingPromise.set(t,!0)):(Nr(vs,t),Nr(V,t))},Nr=(t,e)=>{for(const n in t)t[n].delete(e)},Od=Object.freeze(Object.defineProperty({__proto__:null,_destroy:hE,close:ei,closeModal:ei,closePopup:ei,closeToast:ei,disableButtons:sE,disableInput:rE,disableLoading:ol,enableButtons:nE,enableInput:iE,getInput:Fb,getProgressSteps:cE,handleAwaitingPromise:$s,hideLoading:ol,isAwaitingPromise:Yb,rejectPromise:Jb,resetValidationMessage:aE,showValidationMessage:oE,update:lE},Symbol.toStringTag,{value:"Module"})),fE=t=>{const e=V.innerParams.get(t);t.disableButtons(),e.input?Rd(t,"confirm"):Va(t,!0)},pE=t=>{const e=V.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Rd(t,"deny"):Fa(t,!1)},gE=(t,e)=>{t.disableButtons(),e(Bn.cancel)},Rd=(t,e)=>{const n=V.innerParams.get(t);if(!n.input)return Xt(`The "input" parameter is needed to be set when using returnInputValueOn${ka(e)}`);const s=Nb(t,n);n.inputValidator?mE(t,s,e):t.getInput().checkValidity()?e==="deny"?Fa(t,s):Va(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},mE=(t,e,n)=>{const s=V.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Ms(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Fa(t,e):Va(t,e)})},Fa=(t,e)=>{const n=V.innerParams.get(t||globalThis);n.showLoaderOnDeny&&An(It()),n.preDeny?(V.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Ms(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),$s(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Ld(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},cl=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Ld=(t,e)=>{t.rejectPromise(e)},Va=(t,e)=>{const n=V.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&An(),n.preConfirm?(t.resetValidationMessage(),V.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Ms(n.preConfirm(e,n.validationMessage))).then(i=>{Ve(cr())||i===!1?(t.hideLoading(),$s(t)):cl(t,typeof i>"u"?e:i)}).catch(i=>Ld(t||globalThis,i))):cl(t,e)},yE=(t,e,n)=>{V.innerParams.get(t).toast?vE(t,e,n):(bE(e),EE(e),TE(t,e,n))},vE=(t,e,n)=>{e.popup.onclick=()=>{const s=V.innerParams.get(t);s&&(wE(s)||s.timer||s.input)||n(Bn.close)}},wE=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Di=!1;const bE=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Di=!0)}}},EE=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Di=!0)}}},TE=(t,e,n)=>{e.container.onclick=s=>{const i=V.innerParams.get(t);if(Di){Di=!1;return}s.target===e.container&&ar(i.allowOutsideClick)&&n(Bn.backdrop)}},CE=t=>typeof t=="object"&&t.jquery,ll=t=>t instanceof Element||CE(t),_E=t=>{const e={};return typeof t[0]=="object"&&!ll(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||ll(i)?e[n]=i:i!==void 0&&Xt(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function IE(...t){const e=this;return new e(...t)}function SE(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const AE=()=>B.timeout&&B.timeout.getTimerLeft(),xd=()=>{if(B.timeout)return pw(),B.timeout.stop()},Md=()=>{if(B.timeout){const t=B.timeout.start();return xa(t),t}},kE=()=>{const t=B.timeout;return t&&(t.running?xd():Md())},DE=t=>{if(B.timeout){const e=B.timeout.increase(t);return xa(e,!0),e}},NE=()=>B.timeout&&B.timeout.isRunning();let ul=!1;const wo={};function PE(t="data-swal-template"){wo[t]=this,ul||(document.body.addEventListener("click",OE),ul=!0)}const OE=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in wo){const s=e.getAttribute(n);if(s){wo[n].fire({template:s});return}}},RE=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:_E,bindClickHandler:PE,clickCancel:$b,clickConfirm:Id,clickDeny:Ub,enableLoading:An,fire:IE,getActions:Vs,getCancelButton:Ht,getCloseButton:Pa,getConfirmButton:Je,getContainer:Ae,getDenyButton:It,getFocusableElements:Oa,getFooter:pd,getHtmlContainer:ki,getIcon:Fs,getImage:dd,getInputLabel:lw,getLoader:Mn,getPopup:z,getTimerLeft:AE,getTimerProgressBar:lr,getTitle:hd,getValidationMessage:cr,increaseTimer:DE,isDeprecatedParameter:mo,isLoading:hw,isTimerRunning:NE,isUpdatableParameter:ld,isValidParameter:cd,isVisible:Vb,mixin:SE,resumeTimer:Md,showLoading:An,stopTimer:xd,toggleTimer:kE},Symbol.toStringTag,{value:"Module"}));let bo;class Fn{constructor(...e){if(typeof window>"u")return;bo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);V.promise.set(this,s)}_main(e,n={}){aw(Object.assign({},n,e)),B.currentInstance&&(B.currentInstance._destroy(),Ra()&&Ed()),B.currentInstance=this;const s=xE(e,n);fb(s),Object.freeze(s),B.timeout&&(B.timeout.stop(),delete B.timeout),clearTimeout(B.restoreFocusTimeout);const i=ME(this);return bd(this,s),V.innerParams.set(this,s),LE(this,i,s)}then(e){return V.promise.get(this).then(e)}finally(e){return V.promise.get(this).finally(e)}}const LE=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};vs.swalPromiseResolve.set(t,s),vs.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>fE(t),e.denyButton.onclick=()=>pE(t),e.cancelButton.onclick=()=>gE(t,r),e.closeButton.onclick=()=>r(Bn.close),yE(t,e,r),jb(t,B,n,r),Db(t,n),_b(n),BE(B,n,r),FE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),xE=(t,e)=>{const n=sb(t),s=Object.assign({},un,e,n,t);return s.showClass=Object.assign({},un.showClass,s.showClass),s.hideClass=Object.assign({},un.hideClass,s.hideClass),s},ME=t=>{const e={popup:z(),container:Ae(),actions:Vs(),confirmButton:Je(),denyButton:It(),cancelButton:Ht(),loader:Mn(),closeButton:Pa(),validationMessage:cr(),progressSteps:fd()};return V.domCache.set(t,e),e},BE=(t,e,n)=>{const s=lr();ke(s),e.timer&&(t.timeout=new pb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ge(s),Ke(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&xa(e.timer)})))},FE=(t,e)=>{if(!e.toast){if(!ar(e.allowEnterKey))return UE();VE(t,e)||vo(e,-1,1)}},VE=(t,e)=>e.focusDeny&&Ve(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ve(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ve(t.confirmButton)?(t.confirmButton.focus(),!0):!1,UE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Fn.prototype,Od);Object.assign(Fn,RE);Object.keys(Od).forEach(t=>{Fn[t]=function(...e){if(bo)return bo[t](...e)}});Fn.DismissReason=Bn;Fn.version="11.4.8";const ws=Fn;ws.default=ws;const Zt=[];function dr(t,e=Ce){let n;const s=new Set;function i(a){if(zt(t,a)&&(t=a,n)){const c=!Zt.length;for(const l of s)l[1](),Zt.push(l,t);if(c){for(let l=0;l<Zt.length;l+=2)Zt[l][0](Zt[l+1]);Zt.length=0}}}function r(a){i(a(t))}function o(a,c=Ce){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||Ce),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Pr=dr({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Eo=dr(""),To=dr(""),Co=dr(""),$E=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},jE=async t=>{try{await Sa(In(He,"Pacientes",t.id),t)}catch(e){console.log(e)}};function hl(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function qE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=dl(hl(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=yl()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);je(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=hl(i,n,o);s[o]?s[o].p(a,r):(s[o]=dl(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){_o(s,i),i&&xe(e)}}}function HE(t){let e;return{c(){e=k("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){je(n,e,s)},p:Ce,d(n){n&&xe(e)}}}function dl(t){let e,n=`${t[6].apellido}, ${t[6].nombre}${t[6].plan=="particular"?"":" -"+t[6].nroSocio+" - plan "+t[6].plan} `,s;return{c(){e=k("option"),s=se(n),e.__value=t[8],e.value=e.__value},m(i,r){je(i,e,r),E(e,s)},p(i,r){r&1&&n!==(n=`${i[6].apellido}, ${i[6].nombre}${i[6].plan=="particular"?"":" -"+i[6].nroSocio+" - plan "+i[6].plan} `)&&at(s,n)},d(i){i&&xe(e)}}}function KE(t){let e,n,s;function i(a,c){return a[0].length==0?HE:qE}let r=i(t),o=r(t);return{c(){e=k("select"),o.c(),m(e,"name","select-pacientes"),m(e,"class","select-Pacientes svelte-2shrp8"),m(e,"id","selectPacientes"),m(e,"size",5),t[1]===void 0&&fn(()=>t[4].call(e))},m(a,c){je(a,e,c),o.m(e,null),dn(e,t[1]),n||(s=[J(e,"change",t[2]),J(e,"change",t[4])],n=!0)},p(a,[c]){r===(r=i(a))&&o?o.p(a,c):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),c&2&&dn(e,a[1])},i:Ce,o:Ce,d(a){a&&xe(e),o.d(),n=!1,pt(s)}}}function zE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r;const o=wl(),a=l=>{const u=l.target.value;n(3,i=s[u].plan),o("cambioSelectPaciente",u),console.log("dispatch cambioSelectPaciente, valorindiceSelectPaciente: ",u)};function c(){r=Io(this),n(1,r)}return t.$$set=l=>{"pacientesFiltrada"in l&&n(0,s=l.pacientesFiltrada),"planSelect"in l&&n(3,i=l.planSelect)},[s,r,a,i,c]}class GE extends Dn{constructor(e){super(),kn(this,e,zE,KE,zt,{pacientesFiltrada:0,planSelect:3})}}function WE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,g,w,v,T,C,N,M,q,De,P,Y,de,qe,ye,Be,Nt,oe,Pe,js,Ge,qs,gt,Vn,Hs,_,X,Ze,Un;return q=new GE({props:{pacientesFiltrada:t[1],planSelect:t[4]}}),q.$on("cambioSelectPaciente",t[15]),_=new Zd({props:{planes:t[3],planSeleccionado:t[9],SelectPlanVisible:t[5]}}),_.$on("cambioPlan",t[14]),_.$on("clickCheckPlan",t[16]),{c(){e=k("body"),n=k("div"),s=k("div"),i=k("button"),r=se("create"),a=ee(),c=k("button"),l=se("update"),h=ee(),d=k("button"),p=se("delete"),w=ee(),v=k("div"),T=k("label"),T.textContent="filtrar por apellido",C=k("input"),N=ee(),M=k("div"),ss(q.$$.fragment),De=ee(),P=k("div"),Y=k("label"),Y.textContent="nombre",de=k("input"),qe=ee(),ye=k("label"),ye.textContent="apellido",Be=k("input"),Nt=ee(),oe=k("div"),Pe=k("label"),Pe.textContent="nº socio",js=ee(),Ge=k("input"),qs=ee(),gt=k("label"),Vn=se(t[10]),Hs=ee(),ss(_.$$.fragment),i.disabled=o=!t[6]||!t[7]||!t[9]||!t[8],m(i,"class","svelte-v8du9y"),c.disabled=u=!t[6]||!t[7]||!t[9]||!t[8]||!t[2],m(c,"class","svelte-v8du9y"),d.disabled=g=!t[2],m(d,"class","svelte-v8du9y"),m(s,"class","buttons svelte-v8du9y"),m(n,"id","botones"),m(n,"class","svelte-v8du9y"),m(T,"for","filterPrefix"),m(T,"class","svelte-v8du9y"),m(C,"name","filterPrefix"),m(C,"placeholder","filter prefix"),m(C,"class","svelte-v8du9y"),m(v,"id","filter"),m(v,"class","svelte-v8du9y"),m(M,"id","selectPacientes"),m(M,"class","svelte-v8du9y"),m(Y,"for","nombre"),m(Y,"class","svelte-v8du9y"),m(de,"name","nombre"),m(de,"placeholder","nombre"),m(de,"class","svelte-v8du9y"),m(ye,"for","apellido"),m(ye,"class","svelte-v8du9y"),m(Be,"name","apellido"),m(Be,"placeholder","apellido"),m(Be,"class","svelte-v8du9y"),m(P,"id","formInputsI"),m(P,"class","svelte-v8du9y"),m(Pe,"for","nroSocio"),m(Pe,"class","svelte-v8du9y"),m(Ge,"name","nroSocio"),m(Ge,"placeholder","nro de Socio"),m(Ge,"class","svelte-v8du9y"),m(gt,"id","labelPlan"),m(gt,"for","plan"),m(gt,"class","svelte-v8du9y"),m(oe,"id","formInputsD"),m(oe,"class","svelte-v8du9y"),m(e,"class","svelte-v8du9y")},m(F,Z){je(F,e,Z),E(e,n),E(n,s),E(s,i),E(i,r),E(s,a),E(s,c),E(c,l),E(s,h),E(s,d),E(d,p),E(e,w),E(e,v),E(v,T),E(v,C),ve(C,t[0]),E(e,N),E(e,M),gn(q,M,null),E(e,De),E(e,P),E(P,Y),E(P,de),ve(de,t[6]),E(P,qe),E(P,ye),E(P,Be),ve(Be,t[7]),E(e,Nt),E(e,oe),E(oe,Pe),E(oe,js),E(oe,Ge),ve(Ge,t[8]),E(oe,qs),E(oe,gt),E(gt,Vn),E(oe,Hs),gn(_,oe,null),X=!0,Ze||(Un=[J(i,"click",t[11]),J(c,"click",t[12]),J(d,"click",t[13]),J(C,"input",t[19]),J(de,"input",t[20]),J(Be,"input",t[21]),J(Ge,"input",t[22])],Ze=!0)},p(F,Z){(!X||Z[0]&960&&o!==(o=!F[6]||!F[7]||!F[9]||!F[8]))&&(i.disabled=o),(!X||Z[0]&964&&u!==(u=!F[6]||!F[7]||!F[9]||!F[8]||!F[2]))&&(c.disabled=u),(!X||Z[0]&4&&g!==(g=!F[2]))&&(d.disabled=g),Z[0]&1&&C.value!==F[0]&&ve(C,F[0]);const $n={};Z[0]&2&&($n.pacientesFiltrada=F[1]),Z[0]&16&&($n.planSelect=F[4]),q.$set($n),Z[0]&64&&de.value!==F[6]&&ve(de,F[6]),Z[0]&128&&Be.value!==F[7]&&ve(Be,F[7]),Z[0]&256&&Ge.value!==F[8]&&ve(Ge,F[8]),(!X||Z[0]&1024)&&at(Vn,F[10]);const Ks={};Z[0]&8&&(Ks.planes=F[3]),Z[0]&512&&(Ks.planSeleccionado=F[9]),Z[0]&32&&(Ks.SelectPlanVisible=F[5]),_.$set(Ks)},i(F){X||(pn(q.$$.fragment,F),pn(_.$$.fragment,F),X=!0)},o(F){ns(q.$$.fragment,F),ns(_.$$.fragment,F),X=!1},d(F){F&&xe(e),mn(q),mn(_),Ze=!1,pt(Un)}}}function QE(t,e,n){let s,i,r,o,a;Rt(t,Pr,_=>n(24,i=_)),Rt(t,Co,_=>n(25,r=_)),Rt(t,To,_=>n(26,o=_)),Rt(t,Eo,_=>n(27,a=_));let c=[],l=["nombre","apellido","nroSocio","plan","createdAt"],u=[],h="",d,p;vl(()=>{const _=Bt(He,"Pacientes"),Ze=Ii(_,ho("apellido"));p=po(Ze,F=>{n(17,c=F.docs.map(Z=>({...Z.data(),id:Z.id}))),$E(c,l),c.forEach(Z=>{jE(Z)}),document.getElementById("selectPacientes").selected=N},F=>{console.log(F)}),(async()=>{const F=Bt(He,"planes"),Z=await zc(F);n(3,u=Z.docs.map($n=>$n.data().plan)),u.push("particular"),u.sort(),n(4,h="particular")})()}),qd(p);let g="",w="",v="",T="",C="",N=0,M,q="plan";jn(Pr,i=s,i);const De=_=>{n(6,w=_?_.nombre:""),n(7,v=_?_.apellido:""),n(8,T=_?_.nroSocio:""),n(9,C=_?_.plan:"")},P=async()=>{try{await nd(Bt(He,"Pacientes"),{nombre:w,apellido:v,nroSocio:T,createdAt:new Date().toLocaleDateString(),plan:C}),ln({text:"Nuevo paciente agregado"}).showToast()}catch(_){console.error(_)}},Y=()=>{n(17,c=c.concat({nombre:w,apellido:v})),n(18,N=c.length-1),P(),n(6,w=n(7,v=n(9,C=n(8,T=""))))},de=async _=>{try{await Sa(In(He,"Pacientes",_.id),_),ln({text:`paciente ${_.apellido}, ${_.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(X){console.error(X)}},qe=()=>{n(2,s.nombre=w,s),n(2,s.apellido=v,s),n(9,C=s.plan),n(2,s.nroSocio=T,s),n(2,s),n(1,M),n(18,N),n(0,g),n(17,c),n(17,c),de(s)},ye=async _=>{try{await fo(In(He,"Pacientes",_.id)),ln({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(Ze){console.error(Ze)}const X=Ii(Bt(He,"sesiones"),gv("pacienteID","==",_.id));console.log(`desde delete q=pacientes a borrar ${X} - paciente: ${_.nombre} ${_.apellido} ${_.id}`);try{(await zc(X)).forEach(Un=>{fo(Un.ref)})}catch(Ze){console.log(Ze)}},Be=()=>{const _=c.indexOf(s);ws.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(X=>{X.isConfirmed&&(ws.fire("Deleted!","Your file has been deleted.","success"),ye(c[N]),n(17,c=[...c.slice(0,_),...c.slice(_+1)]),n(6,w=n(7,v=n(8,T=n(9,C="")))),n(18,N=Math.min(N,M.length-2)))})},Nt=_=>{n(2,s.plan=_,s),n(2,s.nombre=w,s),n(2,s.apellido=v,s),n(2,s.nroSocio=T,s),n(1,M[N].plan=_,M),de(s)},oe=_=>{n(9,C=_.detail.valor.planSeleccionado),s.plan!=C&&Nt(C)},Pe=_=>{_?(n(10,q="particular"),n(5,d=!1)):(n(10,q="plan"),n(5,d=!0))},js=_=>{n(18,N=_.detail),n(9,C=M[N].plan);const X=C=="particular";Pe(X)},Ge=_=>{const X=_.detail.valor.SelectPlanVisible;X?X&&C=="particular"&&n(9,C="210"):n(9,C="particular"),Nt(C),Pe(!X)};function qs(){g=this.value,n(0,g)}function gt(){w=this.value,n(6,w)}function Vn(){v=this.value,n(7,v)}function Hs(){T=this.value,n(8,T)}return t.$$.update=()=>{t.$$.dirty[0]&131073&&n(1,M=g?c.filter(_=>`${_.apellido}, ${_.nombre}`.toLowerCase().startsWith(g.toLowerCase())):c.map(_=>({nombre:_.nombre,apellido:_.apellido,plan:_.plan,nroSocio:_.nroSocio,id:_.id}))),t.$$.dirty[0]&262146&&n(2,s=M[N]),t.$$.dirty[0]&4&&s&&(jn(Pr,i=s,i),jn(Eo,a=s.apellido,a),jn(To,o=s.nombre,o),jn(Co,r=s.id,r)),t.$$.dirty[0]&4&&De(s)},[g,M,s,u,h,d,w,v,T,C,q,Y,qe,Be,oe,js,Ge,c,N,qs,gt,Vn,Hs]}class YE extends Dn{constructor(e){super(),kn(this,e,QE,WE,zt,{},null,[-1,-1])}}function fl(t,e,n){const s=t.slice();return s[22]=e[n],s}function pl(t){let e,n,s=t[22].diaSesion+"",i,r,o=t[22].valorSesion+"",a,c,l=t[22].fechaPago+"",u,h,d=t[22].valorPago+"",p,g,w;return{c(){e=k("option"),n=se("dia sesion: "),i=se(s),r=se(" - valor sesion: "),a=se(o),c=se(`\r
              - dia pago `),u=se(l),h=se(" - valor pago "),p=se(d),g=ee(),m(e,"class"," svelte-40a4zh"),e.__value=w=t[22].id,e.value=e.__value},m(v,T){je(v,e,T),E(e,n),E(e,i),E(e,r),E(e,a),E(e,c),E(e,u),E(e,h),E(e,p),E(e,g)},p(v,T){T&1&&s!==(s=v[22].diaSesion+"")&&at(i,s),T&1&&o!==(o=v[22].valorSesion+"")&&at(a,o),T&1&&l!==(l=v[22].fechaPago+"")&&at(u,l),T&1&&d!==(d=v[22].valorPago+"")&&at(p,d),T&1&&w!==(w=v[22].id)&&(e.__value=w,e.value=e.__value)},d(v){v&&xe(e)}}}function gl(t){let e=Object.values(t[22]).includes(t[7]),n,s=e&&pl(t);return{c(){s&&s.c(),n=yl()},m(i,r){s&&s.m(i,r),je(i,n,r)},p(i,r){r&129&&(e=Object.values(i[22]).includes(i[7])),e?s?s.p(i,r):(s=pl(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&xe(n)}}}function XE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,g,w,v,T,C,N,M,q,De,P,Y,de;return{c(){e=k("div"),n=k("form"),s=k("div"),i=k("div"),r=k("label"),r.textContent="pago",o=k("input"),a=ee(),c=k("label"),c.textContent="valor sesion",l=k("input"),u=ee(),h=k("div"),d=k("label"),d.textContent="Dia Sesion",p=k("input"),g=ee(),w=k("label"),w.textContent="Fecha Pago",v=k("input"),T=ee(),C=k("div"),N=k("button"),N.textContent="update",M=ee(),q=k("button"),q.textContent="delete",De=ee(),P=k("button"),P.textContent="Agregar sesión",m(r,"for","valorPago"),m(r,"class","svelte-40a4zh"),m(o,"name","valorPago"),m(o,"type","number"),m(o,"step","100"),m(o,"min","0"),m(o,"placeholder","Valor pago"),m(o,"class","svelte-40a4zh"),m(c,"for","valorSesion"),m(c,"class","svelte-40a4zh"),m(l,"name","valorSesion"),m(l,"type","number"),m(l,"step","100"),m(l,"min","0"),m(l,"placeholder","Valor sesión"),m(l,"class","svelte-40a4zh"),m(i,"id","inputsFormSesionesI"),m(i,"class","svelte-40a4zh"),m(d,"for","diaSesion"),m(d,"class","svelte-40a4zh"),m(p,"name","diaSesion"),m(p,"type","date"),m(p,"placeholder","Día sesión"),m(p,"class","svelte-40a4zh"),m(w,"for","fechaPago"),m(w,"class","svelte-40a4zh"),m(v,"name","fechaPago"),m(v,"type","date"),m(v,"placeholder","Fecha pago"),m(v,"class","svelte-40a4zh"),m(h,"id","inputsFormSesionesD"),m(h,"class","svelte-40a4zh"),m(N,"class","svelte-40a4zh"),m(q,"class","svelte-40a4zh"),m(P,"class","svelte-40a4zh"),m(C,"id","botonesFormSesiones"),m(C,"class","buttons svelte-40a4zh"),m(s,"id","form-Sesiones"),m(s,"class","svelte-40a4zh"),m(n,"class","svelte-40a4zh"),m(e,"id","contenedor-form-sesiones"),m(e,"class","svelte-40a4zh")},m(qe,ye){je(qe,e,ye),E(e,n),E(n,s),E(s,i),E(i,r),E(i,o),ve(o,t[3]),E(i,a),E(i,c),E(i,l),ve(l,t[4]),E(s,u),E(s,h),E(h,d),E(h,p),ve(p,t[5]),E(h,g),E(h,w),E(h,v),ve(v,t[6]),E(s,T),E(s,C),E(C,N),E(C,M),E(C,q),E(C,De),E(C,P),Y||(de=[J(o,"input",t[16]),J(l,"input",t[17]),J(p,"input",t[18]),J(v,"input",t[19]),J(N,"click",function(){oi(t[12](t[2]))&&t[12](t[2]).apply(this,arguments)}),J(q,"click",function(){oi(t[13](t[2]))&&t[13](t[2]).apply(this,arguments)}),J(P,"click",t[11]),J(n,"submit",Vd(t[14]))],Y=!0)},p(qe,ye){t=qe,ye&8&&ai(o.value)!==t[3]&&ve(o,t[3]),ye&16&&ai(l.value)!==t[4]&&ve(l,t[4]),ye&32&&ve(p,t[5]),ye&64&&ve(v,t[6])},d(qe){qe&&xe(e),Y=!1,pt(de)}}}function JE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,g=t[0],w=[];for(let T=0;T<g.length;T+=1)w[T]=gl(fl(t,g,T));let v=XE(t);return{c(){e=k("main"),n=k("body"),s=k("h4"),i=se("Paciente: "),r=se(t[8]),o=se(", "),a=se(t[9]),c=ee(),l=k("div"),u=k("select");for(let T=0;T<w.length;T+=1)w[T].c();h=ee(),v&&v.c(),m(s,"class","svelte-40a4zh"),m(u,"size",5),m(u,"class","svelte-40a4zh"),t[1]===void 0&&fn(()=>t[15].call(u)),m(l,"id","select"),m(l,"class","svelte-40a4zh"),m(n,"class","svelte-40a4zh"),m(e,"class","svelte-40a4zh")},m(T,C){je(T,e,C),E(e,n),E(n,s),E(s,i),E(s,r),E(s,o),E(s,a),E(n,c),E(n,l),E(l,u);for(let N=0;N<w.length;N+=1)w[N]&&w[N].m(u,null);dn(u,t[1]),E(n,h),v&&v.m(n,null),d||(p=[J(u,"change",t[10]),J(u,"change",t[15])],d=!0)},p(T,[C]){if(C&256&&at(r,T[8]),C&512&&at(a,T[9]),C&129){g=T[0];let N;for(N=0;N<g.length;N+=1){const M=fl(T,g,N);w[N]?w[N].p(M,C):(w[N]=gl(M),w[N].c(),w[N].m(u,null))}for(;N<w.length;N+=1)w[N].d(1);w.length=g.length}C&3&&dn(u,T[1]),v.p(T,C)},i:Ce,o:Ce,d(T){T&&xe(e),_o(w,T),v&&v.d(),d=!1,pt(p)}}}function ZE(t,e,n){let s,i,r;Rt(t,Co,P=>n(7,s=P)),Rt(t,Eo,P=>n(8,i=P)),Rt(t,To,P=>n(9,r=P));let{sesiones:o}=e;vl(()=>{const P=[],Y=Bt(He,"sesiones"),de=Bt(He,"Pacientes"),qe=Ii(Y,ho("diaSesion")),ye=Ii(de,ho("apellido")),Be=po(qe,oe=>{n(0,o=oe.docs.map(Pe=>({id:Pe.id,...Pe.data()})))});console.log("desde onMount CRUDSesiones",o),P.push(Be);const Nt=po(ye,oe=>{oe.docs.map(Pe=>({id:Pe.id,...Pe.data()}))});return P.push(Nt),()=>{P.forEach(oe=>oe())}});let a,c;const l=P=>{n(1,a=P.target.value),console.log(o),n(2,c=o.find(Y=>Y.id===a)),console.log("selectedSession",c),n(3,p=c.valorPago),n(4,g=c.valorSesion),n(6,v=c.fechaPago),n(5,w=c.diaSesion)},u=()=>{console.log("Add sesion",c);try{nd(Bt(He,"sesiones"),{valorPago:p,valorSesion:g,diaSesion:w,fechaPago:v,pacienteID:s}),console.log("sesion agregada"),ln({text:"Nueva sesion agregada"}).showToast()}catch(P){console.error(P)}},h=async P=>{console.log("Update sesion",P);try{await Sa(In(He,"sesiones",P.id),{valorPago:p,valorSesion:g,fechaPago:v,diaSesion:w}),ln({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(Y){console.log(Y)}},d=async P=>{console.log("Delete sesion",P);try{await fo(In(He,"sesiones",P.id)),ln({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(Y){console.error(Y)}};let p=5e3,g=5e3,w=new Date().toISOString().slice(0,10),v=new Date().toISOString().slice(0,10);function T(P){Hd.call(this,t,P)}function C(){a=Io(this),n(1,a),n(0,o)}function N(){p=ai(this.value),n(3,p)}function M(){g=ai(this.value),n(4,g)}function q(){w=this.value,n(5,w)}function De(){v=this.value,n(6,v)}return t.$$set=P=>{"sesiones"in P&&n(0,o=P.sesiones)},t.$$.update=()=>{t.$$.dirty&7&&(n(2,c=o.find(P=>P.id===a)),console.log(c||"sin seleccion de sesion"))},[o,a,c,p,g,w,v,s,i,r,l,u,h,d,T,C,N,M,q,De]}class e0 extends Dn{constructor(e){super(),kn(this,e,ZE,JE,zt,{sesiones:0})}}function t0(t){let e,n,s,i,r,o,a,c,l;return r=new YE({}),c=new e0({props:{sesiones:t[0]}}),{c(){e=k("body"),n=k("div"),s=k("h5"),s.textContent="CRUD Pacientes",i=ee(),ss(r.$$.fragment),o=ee(),a=k("div"),ss(c.$$.fragment),m(n,"class","contenedor-pacientes svelte-1y3ujd1"),m(a,"class","contenedor-sesiones svelte-1y3ujd1"),m(e,"class","svelte-1y3ujd1")},m(u,h){je(u,e,h),E(e,n),E(n,s),E(n,i),gn(r,n,null),E(e,o),E(e,a),gn(c,a,null),l=!0},p:Ce,i(u){l||(pn(r.$$.fragment,u),pn(c.$$.fragment,u),l=!0)},o(u){ns(r.$$.fragment,u),ns(c.$$.fragment,u),l=!1},d(u){u&&xe(e),mn(r),mn(c)}}}function n0(t){return[[]]}class s0 extends Dn{constructor(e){super(),kn(this,e,n0,t0,zt,{})}}function i0(t){let e,n,s,i;return s=new s0({}),{c(){e=k("main"),n=k("div"),ss(s.$$.fragment),m(n,"class","contenedorPadre svelte-1cwonxg"),m(e,"class","svelte-1cwonxg")},m(r,o){je(r,e,o),E(e,n),gn(s,n,null),i=!0},p:Ce,i(r){i||(pn(s.$$.fragment,r),i=!0)},o(r){ns(s.$$.fragment,r),i=!1},d(r){r&&xe(e),mn(s)}}}class r0 extends Dn{constructor(e){super(),kn(this,e,null,i0,zt,{})}}new r0({target:document.getElementById("app")});
