(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function pe(){}function Dl(t){return t()}function Ja(){return Object.create(null)}function lt(t){t.forEach(Dl)}function Pl(t){return typeof t=="function"}function jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Xd(t){return Object.keys(t).length===0}function Jd(t,...e){if(t==null)return pe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(Jd(e,n))}function ss(t,e,n){return t.set(n),e}function w(t,e){t.appendChild(e)}function ge(t,e,n){t.insertBefore(e,n||null)}function de(t){t.parentNode&&t.parentNode.removeChild(t)}function $i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function ee(t){return document.createTextNode(t)}function Z(){return ee(" ")}function Nl(){return ee("")}function J(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Zd(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yi(t){return t===""?null:+t}function ef(t){return Array.from(t.childNodes)}function tt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function xt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function tf(t){for(const e of t.options)if(!e.disabled)return e}function vi(t){const e=t.querySelector(":checked")||tf(t);return e&&e.__value}function ti(t,e,n){t.classList[n?"add":"remove"](e)}function nf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let ms;function ls(t){ms=t}function Fo(){if(!ms)throw new Error("Function called outside component initialization");return ms}function Ol(t){Fo().$$.on_mount.push(t)}function sf(t){Fo().$$.on_destroy.push(t)}function Rl(){const t=Fo();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=nf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function rf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Tn=[],Za=[];let kn=[];const ec=[],of=Promise.resolve();let zr=!1;function af(){zr||(zr=!0,of.then(Ll))}function rn(t){kn.push(t)}const Ar=new Set;let En=0;function Ll(){if(En!==0)return;const t=ms;do{try{for(;En<Tn.length;){const e=Tn[En];En++,ls(e),cf(e.$$)}}catch(e){throw Tn.length=0,En=0,e}for(ls(null),Tn.length=0,En=0;Za.length;)Za.pop()();for(let e=0;e<kn.length;e+=1){const n=kn[e];Ar.has(n)||(Ar.add(n),n())}kn.length=0}while(Tn.length);for(;ec.length;)ec.pop()();zr=!1,Ar.clear(),ls(t)}function cf(t){if(t.fragment!==null){t.update(),lt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rn)}}function lf(t){const e=[],n=[];kn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),kn=e}const ui=new Set;let Jt;function uf(){Jt={r:0,c:[],p:Jt}}function hf(){Jt.r||lt(Jt.c),Jt=Jt.p}function _t(t,e){t&&t.i&&(ui.delete(t),t.i(e))}function Ft(t,e,n,s){if(t&&t.o){if(ui.has(t))return;ui.add(t),Jt.c.push(()=>{ui.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Mn(t){t&&t.c()}function on(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||rn(()=>{const o=t.$$.on_mount.map(Dl).filter(Pl);t.$$.on_destroy?t.$$.on_destroy.push(...o):lt(o),t.$$.on_mount=[]}),r.forEach(rn)}function an(t,e){const n=t.$$;n.fragment!==null&&(lf(n.after_update),lt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function df(t,e){t.$$.dirty[0]===-1&&(Tn.push(t),af(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pn(t,e,n,s,i,r,o,a=[-1]){const c=ms;ls(t);const l=t.$$={fragment:null,ctx:[],props:r,update:pe,not_equal:i,bound:Ja(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ja(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&df(t,h)),d}):[],l.update(),u=!0,lt(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=ef(e.target);l.fragment&&l.fragment.l(h),h.forEach(de)}else l.fragment&&l.fragment.c();e.intro&&_t(t.$$.fragment),on(t,e.target,e.anchor,e.customElement),Ll()}ls(c)}class gn{$destroy(){an(this,1),this.$destroy=pe}$on(e,n){if(!Pl(n))return pe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Xd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function tc(t,e,n){const s=t.slice();return s[12]=e[n],s}function nc(t){let e,n=t[12]+"",s,i;return{c(){e=A("option"),s=ee(n),e.__value=i=t[12],e.value=e.__value},m(r,o){ge(r,e,o),w(e,s)},p(r,o){o&4&&n!==(n=r[12]+"")&&tt(s,n),o&4&&i!==(i=r[12])&&(e.__value=i,e.value=e.__value)},d(r){r&&de(e)}}}function ff(t){let e,n,s,i,r,o,a=t[2],c=[];for(let l=0;l<a.length;l+=1)c[l]=nc(tc(t,a,l));return{c(){e=A("div"),n=A("input"),s=Z(),i=A("select");for(let l=0;l<c.length;l+=1)c[l].c();g(n,"type","checkbox"),g(n,"name","CheckBoxParticular"),g(n,"id","CheckBoxParticular"),g(i,"name","plan"),g(i,"id","plan"),g(i,"class","svelte-1de4xhy"),t[1]===void 0&&rn(()=>t[7].call(i)),ti(i,"SelectPlanVisible",t[0]),ti(i,"SelectPlanHidden",t[3]),g(e,"id","selectPlanContainer"),g(e,"class","svelte-1de4xhy")},m(l,u){ge(l,e,u),w(e,n),n.checked=t[0],w(e,s),w(e,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null);xt(i,t[1]),r||(o=[J(n,"change",t[6]),J(n,"change",t[4]),J(i,"change",t[7]),J(i,"change",t[5])],r=!0)},p(l,[u]){if(u&1&&(n.checked=l[0]),u&4){a=l[2];let h;for(h=0;h<a.length;h+=1){const d=tc(l,a,h);c[h]?c[h].p(d,u):(c[h]=nc(d),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}u&6&&xt(i,l[1]),u&1&&ti(i,"SelectPlanVisible",l[0]),u&8&&ti(i,"SelectPlanHidden",l[3])},i:pe,o:pe,d(l){l&&de(e),$i(c,l),r=!1,lt(o)}}}function pf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,o;const a=m=>{n(0,r=m)},c=()=>{u("clickCheckPlan",{valor:{SelectPlanVisible:r}})},l=m=>{var b=m.target.checked;a(b),c()},u=Rl(),h=()=>{u("cambioPlan",{valor:{planSeleccionado:i}})};function d(){r=this.checked,n(0,r)}function p(){i=vi(this),n(1,i),n(2,s)}return t.$$set=m=>{"planes"in m&&n(2,s=m.planes),"planSeleccionado"in m&&n(1,i=m.planSeleccionado),"SelectPlanVisible"in m&&n(0,r=m.SelectPlanVisible)},t.$$.update=()=>{t.$$.dirty&1&&n(3,o=!r)},[r,i,s,o,l,h,d,p]}class gf extends gn{constructor(e){super(),pn(this,e,pf,ff,jt,{planes:2,planSeleccionado:1,SelectPlanVisible:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ml=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ml(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new yf;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vf=function(t){const e=Ml(t);return xl.encodeByteArray(e,!0)},wi=function(t){return vf(t).replace(/\./g,"")},wf=function(t){try{return xl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ef=()=>bf().__FIREBASE_DEFAULTS__,_f=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wf(t[1]);return e&&JSON.parse(e)},Fl=()=>{try{return Ef()||_f()||Tf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cf=t=>{var e,n;return(n=(e=Fl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bl=t=>{const e=Cf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sf=()=>{var t;return(t=Fl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Vl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wi(JSON.stringify(n)),wi(JSON.stringify(o)),a].join(".")}function Af(){try{return typeof indexedDB=="object"}catch{return!1}}function kf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="FirebaseError";class mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Df,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ul.prototype.create)}}class Ul{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Pf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mn(i,a,s)}}function Pf(t,e){return t.replace(Nf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Nf=/\{\$([^}]+)}/g;function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(sc(r)&&sc(o)){if(!Gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function sc(t){return t!==null&&typeof t=="object"}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Of{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new If;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lf(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rf(t){return t===Xt?void 0:t}function Lf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Of(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const xf={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Ff=G.INFO,Bf={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Vf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Bf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=Ff,this._logHandler=Vf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Uf=(t,e)=>e.some(n=>t instanceof n);let ic,rc;function $f(){return ic||(ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jf(){return rc||(rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jl=new WeakMap,Wr=new WeakMap,ql=new WeakMap,kr=new WeakMap,Bo=new WeakMap;function qf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jl.set(n,t)}).catch(()=>{}),Bo.set(e,t),e}function Hf(t){if(Wr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let Qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ql.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kf(t){Qr=t(Qr)}function zf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Dr(this),e,...n);return ql.set(s,e.sort?e.sort():[e]),Nt(s)}:jf().includes(t)?function(...e){return t.apply(Dr(this),e),Nt(jl.get(this))}:function(...e){return Nt(t.apply(Dr(this),e))}}function Gf(t){return typeof t=="function"?zf(t):(t instanceof IDBTransaction&&Hf(t),Uf(t,$f())?new Proxy(t,Qr):t)}function Nt(t){if(t instanceof IDBRequest)return qf(t);if(kr.has(t))return kr.get(t);const e=Gf(t);return e!==t&&(kr.set(t,e),Bo.set(e,t)),e}const Dr=t=>Bo.get(t);function Wf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Qf=["get","getKey","getAll","getAllKeys","count"],Yf=["put","add","delete","clear"],Pr=new Map;function oc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pr.get(e))return Pr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Yf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Qf.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Pr.set(e,r),r}Kf(t=>({...t,get:(e,n,s)=>oc(e,n)||t.get(e,n,s),has:(e,n)=>!!oc(e,n)||t.has(e,n)}));/**
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
 */class Xf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yr="@firebase/app",ac="0.9.4";/**
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
 */const cn=new $l("@firebase/app"),Zf="@firebase/app-compat",ep="@firebase/analytics-compat",tp="@firebase/analytics",np="@firebase/app-check-compat",sp="@firebase/app-check",ip="@firebase/auth",rp="@firebase/auth-compat",op="@firebase/database",ap="@firebase/database-compat",cp="@firebase/functions",lp="@firebase/functions-compat",up="@firebase/installations",hp="@firebase/installations-compat",dp="@firebase/messaging",fp="@firebase/messaging-compat",pp="@firebase/performance",gp="@firebase/performance-compat",mp="@firebase/remote-config",yp="@firebase/remote-config-compat",vp="@firebase/storage",wp="@firebase/storage-compat",bp="@firebase/firestore",Ep="@firebase/firestore-compat",_p="firebase",Tp="9.17.2";/**
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
 */const Xr="[DEFAULT]",Cp={[Yr]:"fire-core",[Zf]:"fire-core-compat",[tp]:"fire-analytics",[ep]:"fire-analytics-compat",[sp]:"fire-app-check",[np]:"fire-app-check-compat",[ip]:"fire-auth",[rp]:"fire-auth-compat",[op]:"fire-rtdb",[ap]:"fire-rtdb-compat",[cp]:"fire-fn",[lp]:"fire-fn-compat",[up]:"fire-iid",[hp]:"fire-iid-compat",[dp]:"fire-fcm",[fp]:"fire-fcm-compat",[pp]:"fire-perf",[gp]:"fire-perf-compat",[mp]:"fire-rc",[yp]:"fire-rc-compat",[vp]:"fire-gcs",[wp]:"fire-gcs-compat",[bp]:"fire-fst",[Ep]:"fire-fst-compat","fire-js":"fire-js",[_p]:"fire-js-all"};/**
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
 */const bi=new Map,Jr=new Map;function Sp(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(Jr.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,t);for(const n of bi.values())Sp(n,t);return!0}function Hl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ip={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new Ul("app","Firebase",Ip);/**
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
 */class Ap{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Kl=Tp;function zl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ot.create("bad-app-name",{appName:String(i)});if(n||(n=Sf()),!n)throw Ot.create("no-options");const r=bi.get(i);if(r){if(Gr(n,r.options)&&Gr(s,r.config))return r;throw Ot.create("duplicate-app",{appName:i})}const o=new Mf(i);for(const c of Jr.values())o.addComponent(c);const a=new Ap(n,s,o);return bi.set(i,a),a}function Gl(t=Xr){const e=bi.get(t);if(!e&&t===Xr)return zl();if(!e)throw Ot.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let i=(s=Cp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}ys(new xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kp="firebase-heartbeat-database",Dp=1,vs="firebase-heartbeat-store";let Nr=null;function Wl(){return Nr||(Nr=Wf(kp,Dp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vs)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Nr}async function Pp(t){try{return(await Wl()).transaction(vs).objectStore(vs).get(Ql(t))}catch(e){if(e instanceof mn)cn.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function cc(t,e){try{const s=(await Wl()).transaction(vs,"readwrite");return await s.objectStore(vs).put(e,Ql(t)),s.done}catch(n){if(n instanceof mn)cn.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(s.message)}}}function Ql(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Np=1024,Op=30*24*60*60*1e3;class Rp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Op}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lc(),{heartbeatsToSend:n,unsentEntries:s}=Lp(this._heartbeatsCache.heartbeats),i=wi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lc(){return new Date().toISOString().substring(0,10)}function Lp(t,e=Np){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),uc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Mp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Af()?kf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uc(t){return wi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xp(t){ys(new xn("platform-logger",e=>new Xf(e),"PRIVATE")),ys(new xn("heartbeat",e=>new Rp(e),"PRIVATE")),Rt(Yr,ac,t),Rt(Yr,ac,"esm2017"),Rt("fire-js","")}xp("");var Fp="firebase",Bp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(Fp,Bp,"app");var Vp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,Vo=Vo||{},L=Vp||self;function Ei(){}function ji(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Up(t){return Object.prototype.hasOwnProperty.call(t,Or)&&t[Or]||(t[Or]=++$p)}var Or="closure_uid_"+(1e9*Math.random()>>>0),$p=0;function jp(t,e,n){return t.call.apply(t.bind,arguments)}function qp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Oe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=jp:Oe=qp,Oe.apply(null,arguments)}function ni(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function qt(){this.s=this.s,this.o=this.o}var Hp=0;qt.prototype.s=!1;qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Hp!=0)&&Up(this)};qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Uo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function hc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ji(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var Kp=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Ei,e),L.removeEventListener("test",Ei,e)}catch{}return t}();function _i(t){return/^[\s\xa0]*$/.test(t)}var dc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rr(t,e){return t<e?-1:t>e?1:0}function qi(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function ut(t){return qi().indexOf(t)!=-1}function $o(t){return $o[" "](t),t}$o[" "]=Ei;function zp(t){var e=Qp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Gp=ut("Opera"),Fn=ut("Trident")||ut("MSIE"),Xl=ut("Edge"),Zr=Xl||Fn,Jl=ut("Gecko")&&!(qi().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),Wp=qi().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function Zl(){var t=L.document;return t?t.documentMode:void 0}var Ti;e:{var Lr="",Mr=function(){var t=qi();if(Jl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xl)return/Edge\/([\d\.]+)/.exec(t);if(Fn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Wp)return/WebKit\/(\S+)/.exec(t);if(Gp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mr&&(Lr=Mr?Mr[1]:""),Fn){var xr=Zl();if(xr!=null&&xr>parseFloat(Lr)){Ti=String(xr);break e}}Ti=Lr}var Qp={};function Yp(){return zp(function(){let t=0;const e=dc(String(Ti)).split("."),n=dc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Rr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Rr(i[2].length==0,r[2].length==0)||Rr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var eo;if(L.document&&Fn){var fc=Zl();eo=fc||parseInt(Ti,10)||void 0}else eo=void 0;var Xp=eo;function ws(t,e){if(Re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jl){e:{try{$o(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Jp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ws.X.h.call(this)}}Ae(ws,Re);var Jp={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ls="closure_listenable_"+(1e6*Math.random()|0),Zp=0;function eg(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Zp,this.ba=this.ea=!1}function Hi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function eu(t){const e={};for(const n in t)e[n]=t[n];return e}const pc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<pc.length;r++)n=pc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ki(t){this.src=t,this.g={},this.h=0}Ki.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=no(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new eg(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function to(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Yl(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Hi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function no(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var qo="closure_lm_"+(1e6*Math.random()|0),Fr={};function nu(t,e,n,s,i){if(s&&s.once)return iu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)nu(t,e[r],n,s,i);return null}return n=zo(n),t&&t[Ls]?t.N(e,n,Rs(s)?!!s.capture:!!s,i):su(t,e,n,!1,s,i)}function su(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Rs(i)?!!i.capture:!!i,a=Ko(t);if(a||(t[qo]=a=new Ki(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=tg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Kp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ou(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tg(){function t(n){return e.call(t.src,t.listener,n)}const e=ng;return t}function iu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)iu(t,e[r],n,s,i);return null}return n=zo(n),t&&t[Ls]?t.O(e,n,Rs(s)?!!s.capture:!!s,i):su(t,e,n,!0,s,i)}function ru(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ru(t,e[r],n,s,i);else s=Rs(s)?!!s.capture:!!s,n=zo(n),t&&t[Ls]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=no(r,n,s,i),-1<n&&(Hi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ko(t))&&(e=t.g[e.toString()],t=-1,e&&(t=no(e,n,s,i)),(n=-1<t?e[t]:null)&&Ho(n))}function Ho(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ls])to(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ou(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ko(e))?(to(n,t),n.h==0&&(n.src=null,e[qo]=null)):Hi(t)}}}function ou(t){return t in Fr?Fr[t]:Fr[t]="on"+t}function ng(t,e){if(t.ba)t=!0;else{e=new ws(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ho(t),t=n.call(s,e)}return t}function Ko(t){return t=t[qo],t instanceof Ki?t:null}var Br="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(t){return typeof t=="function"?t:(t[Br]||(t[Br]=function(e){return t.handleEvent(e)}),t[Br])}function Te(){qt.call(this),this.i=new Ki(this),this.P=this,this.I=null}Ae(Te,qt);Te.prototype[Ls]=!0;Te.prototype.removeEventListener=function(t,e,n,s){ru(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Re(e,t);else if(e instanceof Re)e.target=e.target||t;else{var i=e;e=new Re(s,t),tu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=si(o,s,!0,e)&&i}if(o=e.g=t,i=si(o,s,!0,e)&&i,i=si(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=si(o,s,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Hi(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function si(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&to(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Go=L.JSON.stringify;function sg(){var t=lu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ig{constructor(){this.h=this.g=null}add(e,n){const s=au.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var au=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rg,t=>t.reset());class rg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function og(t){L.setTimeout(()=>{throw t},0)}function cu(t,e){so||ag(),io||(so(),io=!0),lu.add(t,e)}var so;function ag(){var t=L.Promise.resolve(void 0);so=function(){t.then(cg)}}var io=!1,lu=new ig;function cg(){for(var t;t=sg();){try{t.h.call(t.g)}catch(n){og(n)}var e=au;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}io=!1}function zi(t,e){Te.call(this),this.h=t||1,this.g=e||L,this.j=Oe(this.lb,this),this.l=Date.now()}Ae(zi,Te);k=zi.prototype;k.ca=!1;k.R=null;k.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(Wo(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}k.M=function(){zi.X.M.call(this),Wo(this),delete this.g};function Qo(t,e,n){if(typeof t=="function")n&&(t=Oe(t,n));else if(t&&typeof t.handleEvent=="function")t=Oe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function uu(t){t.g=Qo(()=>{t.g=null,t.i&&(t.i=!1,uu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lg extends qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uu(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(t){qt.call(this),this.h=t,this.g={}}Ae(bs,qt);var gc=[];function hu(t,e,n,s){Array.isArray(n)||(n&&(gc[0]=n.toString()),n=gc);for(var i=0;i<n.length;i++){var r=nu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function du(t){jo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ho(e)},t),t.g={}}bs.prototype.M=function(){bs.X.M.call(this),du(this)};bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gi(){this.g=!0}Gi.prototype.Aa=function(){this.g=!1};function ug(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function hg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function In(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fg(t,n)+(s?" "+s:"")})}function dg(t,e){t.info(function(){return"TIMEOUT: "+e})}Gi.prototype.info=function(){};function fg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Go(n)}catch{return e}}var yn={},mc=null;function Wi(){return mc=mc||new Te}yn.Pa="serverreachability";function fu(t){Re.call(this,yn.Pa,t)}Ae(fu,Re);function Es(t){const e=Wi();Se(e,new fu(e))}yn.STAT_EVENT="statevent";function pu(t,e){Re.call(this,yn.STAT_EVENT,t),this.stat=e}Ae(pu,Re);function Fe(t){const e=Wi();Se(e,new pu(e,t))}yn.Qa="timingevent";function gu(t,e){Re.call(this,yn.Qa,t),this.size=e}Ae(gu,Re);function Ms(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Qi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},mu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Yo(){}Yo.prototype.h=null;function yc(t){return t.h||(t.h=t.i())}function yu(){}var xs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xo(){Re.call(this,"d")}Ae(Xo,Re);function Jo(){Re.call(this,"c")}Ae(Jo,Re);var ro;function Yi(){}Ae(Yi,Yo);Yi.prototype.g=function(){return new XMLHttpRequest};Yi.prototype.i=function(){return{}};ro=new Yi;function Fs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new bs(this),this.O=pg,t=Zr?125:void 0,this.T=new zi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new vu}function vu(){this.i=null,this.g="",this.h=!1}var pg=45e3,oo={},Ci={};k=Fs.prototype;k.setTimeout=function(t){this.O=t};function ao(t,e,n){t.K=1,t.v=Ji(Tt(e)),t.s=n,t.P=!0,wu(t,null)}function wu(t,e){t.F=Date.now(),Bs(t),t.A=Tt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Au(n.i,"t",s),t.C=0,n=t.l.H,t.h=new vu,t.g=Wu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new lg(Oe(t.La,t,t.g),t.N)),hu(t.S,t.g,"readystatechange",t.ib),e=t.H?eu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Es(),ug(t.j,t.u,t.A,t.m,t.U,t.s)}k.ib=function(t){t=t.target;const e=this.L;e&&bt(t)==3?e.l():this.La(t)};k.La=function(t){try{if(t==this.g)e:{const u=bt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Zr||this.g&&(this.h.h||this.g.fa()||Ec(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Es(3):Es(2)),Xi(this);var n=this.g.aa();this.Y=n;t:if(bu(this)){var s=Ec(this.g);t="";var i=s.length,r=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),us(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,hg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_i(a)){var l=a;break t}}l=null}if(n=l)In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,co(this,n);else{this.i=!1,this.o=3,Fe(12),Zt(this),us(this);break e}}this.P?(Eu(this,u,o),Zr&&this.i&&u==3&&(hu(this.S,this.T,"tick",this.hb),this.T.start())):(In(this.j,this.m,o,null),co(this,o)),u==4&&Zt(this),this.i&&!this.I&&(u==4?Hu(this.l,this):(this.i=!1,Bs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Fe(12)):(this.o=0,Fe(13)),Zt(this),us(this)}}}catch{}finally{}};function bu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Eu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=gg(t,n),i==Ci){e==4&&(t.o=4,Fe(14),s=!1),In(t.j,t.m,null,"[Incomplete Response]");break}else if(i==oo){t.o=4,Fe(15),In(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else In(t.j,t.m,i,null),co(t,i);bu(t)&&i!=Ci&&i!=oo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Fe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ra(e),e.K=!0,Fe(11))):(In(t.j,t.m,n,"[Invalid Chunked Response]"),Zt(t),us(t))}k.hb=function(){if(this.g){var t=bt(this.g),e=this.g.fa();this.C<e.length&&(Xi(this),Eu(this,t,e),this.i&&t!=4&&Bs(this))}};function gg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ci:(n=Number(e.substring(n,s)),isNaN(n)?oo:(s+=1,s+n>e.length?Ci:(e=e.substr(s,n),t.C=s+n,e)))}k.cancel=function(){this.I=!0,Zt(this)};function Bs(t){t.V=Date.now()+t.O,_u(t,t.O)}function _u(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ms(Oe(t.gb,t),e)}function Xi(t){t.B&&(L.clearTimeout(t.B),t.B=null)}k.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(dg(this.j,this.A),this.K!=2&&(Es(),Fe(17)),Zt(this),this.o=2,us(this)):_u(this,this.V-t)};function us(t){t.l.G==0||t.I||Hu(t.l,t)}function Zt(t){Xi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wo(t.T),du(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function co(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||lo(n.h,t))){if(!t.J&&lo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ai(n),tr(n);else break e;ia(n),Fe(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ms(Oe(n.cb,n),6e3));if(1>=Pu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else en(n,11)}else if((t.J||n.g==t)&&Ai(n),!_i(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zo(r,r.h),r.h=null))}if(s.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,oe(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Gu(s,s.H?s.ka:null,s.V),o.J){Nu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Xi(a),Bs(a)),s.g=o}else ju(s);0<n.i.length&&nr(n)}else l[0]!="stop"&&l[0]!="close"||en(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?en(n,7):sa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Es(4)}catch{}}function mg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ji(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function yg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ji(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Tu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ji(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yg(t),s=mg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Cu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nn){this.h=e!==void 0?e:t.h,Si(this,t.j),this.s=t.s,this.g=t.g,Ii(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vc(this,n),this.o=t.o}else t&&(n=String(t).match(Cu))?(this.h=!!e,Si(this,n[1]||"",!0),this.s=rs(n[2]||""),this.g=rs(n[3]||"",!0),Ii(this,n[4]),this.l=rs(n[5]||"",!0),vc(this,n[6]||"",!0),this.o=rs(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}nn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(os(e,wc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(os(e,wc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(os(n,n.charAt(0)=="/"?Eg:bg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",os(n,Tg)),t.join("")};function Tt(t){return new nn(t)}function Si(t,e,n){t.j=n?rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ii(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vc(t,e,n){e instanceof _s?(t.i=e,Cg(t.i,t.h)):(n||(e=os(e,_g)),t.i=new _s(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function Ji(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wc=/[#\/\?@]/g,bg=/[#\?:]/g,Eg=/[#\?]/g,_g=/[#\?@]/g,Tg=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ht(t){t.g||(t.g=new Map,t.h=0,t.i&&vg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=_s.prototype;k.add=function(t,e){Ht(this),this.i=null,t=Gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Su(t,e){Ht(t),e=Gn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Iu(t,e){return Ht(t),e=Gn(t,e),t.g.has(e)}k.forEach=function(t,e){Ht(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};k.oa=function(){Ht(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};k.W=function(t){Ht(this);let e=[];if(typeof t=="string")Iu(this,t)&&(e=e.concat(this.g.get(Gn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return Ht(this),this.i=null,t=Gn(this,t),Iu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Au(t,e,n){Su(t,e),0<n.length&&(t.i=null,t.g.set(Gn(t,e),Uo(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Cg(t,e){e&&!t.j&&(Ht(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Su(this,s),Au(this,i,n))},t)),t.j=e}var Sg=class{constructor(e,n){this.h=e,this.g=n}};function ku(t){this.l=t||Ig,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ig=10;function Du(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pu(t){return t.h?1:t.g?t.g.size:0}function lo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zo(t,e){t.g?t.g.add(e):t.h=e}function Nu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ku.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ou(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Uo(t.i)}function ea(){}ea.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};ea.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function Ag(){this.g=new ea}function kg(t,e,n){const s=n||"";try{Tu(t,function(i,r){let o=i;Rs(i)&&(o=Go(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Dg(t,e){const n=new Gi;if(L.Image){const s=new Image;s.onload=ni(ii,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ni(ii,n,s,"TestLoadImage: error",!1,e),s.onabort=ni(ii,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ni(ii,n,s,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ii(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Vs(t){this.l=t.ac||null,this.j=t.jb||!1}Ae(Vs,Yo);Vs.prototype.g=function(){return new Zi(this.l,this.j)};Vs.prototype.i=function(t){return function(){return t}}({});function Zi(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ta,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(Zi,Te);var ta=0;k=Zi.prototype;k.open=function(t,e){if(this.readyState!=ta)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ts(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=ta};k.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ru(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ru(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}k.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Us(this):Ts(this),this.readyState==3&&Ru(this)}};k.Va=function(t){this.g&&(this.response=this.responseText=t,Us(this))};k.Ua=function(t){this.g&&(this.response=t,Us(this))};k.ga=function(){this.g&&Us(this)};function Us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ts(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ts(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Pg=L.JSON.parse;function ae(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lu,this.K=this.L=!1}Ae(ae,Te);var Lu="",Ng=/^https?$/i,Og=["POST","PUT"];k=ae.prototype;k.Ka=function(t){this.L=t};k.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ro.g(),this.C=this.u?yc(this.u):yc(ro),this.g.onreadystatechange=Oe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){bc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=Yl(Og,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fu(this),0<this.B&&((this.K=Rg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.qa,this)):this.A=Qo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){bc(this,r)}};function Rg(t){return Fn&&Yp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.qa=function(){typeof Vo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function bc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Mu(t),er(t)}function Mu(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),er(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),er(this,!0)),ae.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?xu(this):this.fb())};k.fb=function(){xu(this)};function xu(t){if(t.h&&typeof Vo<"u"&&(!t.C[1]||bt(t)!=4||t.aa()!=2)){if(t.v&&bt(t)==4)Qo(t.Ha,0,t);else if(Se(t,"readystatechange"),bt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Cu)[1]||null;if(!i&&L.self&&L.self.location){var r=L.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ng.test(i?i.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Mu(t)}}finally{er(t)}}}}function er(t,e){if(t.g){Fu(t);const n=t.g,s=t.C[0]?Ei:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function Fu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function bt(t){return t.g?t.g.readyState:0}k.aa=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Pg(e)}};function Ec(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Lu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Bu(t){let e="";return jo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function na(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Bu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vu(t){this.Ca=0,this.i=[],this.j=new Gi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=is("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=is("baseRetryDelayMs",5e3,t),this.bb=is("retryDelaySeedMs",1e4,t),this.$a=is("forwardChannelMaxRetries",2,t),this.ta=is("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ku(t&&t.concurrentRequestLimit),this.Fa=new Ag,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=Vu.prototype;k.ma=8;k.G=1;function sa(t){if(Uu(t),t.G==3){var e=t.U++,n=Tt(t.F);oe(n,"SID",t.I),oe(n,"RID",e),oe(n,"TYPE","terminate"),$s(t,n),e=new Fs(t,t.j,e,void 0),e.K=2,e.v=Ji(Tt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=Wu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Bs(e)}zu(t)}function tr(t){t.g&&(ra(t),t.g.cancel(),t.g=null)}function Uu(t){tr(t),t.u&&(L.clearTimeout(t.u),t.u=null),Ai(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function nr(t){Du(t.h)||t.m||(t.m=!0,cu(t.Ja,t),t.C=0)}function Lg(t,e){return Pu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ms(Oe(t.Ja,t,e),Ku(t,t.C)),t.C++,!0)}k.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Fs(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=eu(r),tu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$u(this,i,e),n=Tt(this.F),oe(n,"RID",t),oe(n,"CVER",22),this.D&&oe(n,"X-HTTP-Session-Id",this.D),$s(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Bu(r)))+"&"+e:this.o&&na(n,this.o,r)),Zo(this.h,i),this.Ya&&oe(n,"TYPE","init"),this.O?(oe(n,"$req",e),oe(n,"SID","null"),i.Z=!0,ao(i,n,null)):ao(i,n,e),this.G=2}}else this.G==3&&(t?_c(this,t):this.i.length==0||Du(this.h)||_c(this))};function _c(t,e){var n;e?n=e.m:n=t.U++;const s=Tt(t.F);oe(s,"SID",t.I),oe(s,"RID",n),oe(s,"AID",t.T),$s(t,s),t.o&&t.s&&na(s,t.o,t.s),n=new Fs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$u(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Zo(t.h,n),ao(n,s,e)}function $s(t,e){t.ia&&jo(t.ia,function(n,s){oe(e,s,n)}),t.l&&Tu({},function(n,s){oe(e,s,n)})}function $u(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Oe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{kg(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function ju(t){t.g||t.u||(t.Z=1,cu(t.Ia,t),t.A=0)}function ia(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ms(Oe(t.Ia,t),Ku(t,t.A)),t.A++,!0)}k.Ia=function(){if(this.u=null,qu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ms(Oe(this.eb,this),t)}};k.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Fe(10),tr(this),qu(this))};function ra(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function qu(t){t.g=new Fs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Tt(t.sa);oe(e,"RID","rpc"),oe(e,"SID",t.I),oe(e,"CI",t.L?"0":"1"),oe(e,"AID",t.T),oe(e,"TYPE","xmlhttp"),$s(t,e),t.o&&t.s&&na(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ji(Tt(e)),n.s=null,n.P=!0,wu(n,t)}k.cb=function(){this.v!=null&&(this.v=null,tr(this),ia(this),Fe(19))};function Ai(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function Hu(t,e){var n=null;if(t.g==e){Ai(t),ra(t),t.g=null;var s=2}else if(lo(t.h,e))n=e.D,Nu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Wi(),Se(s,new gu(s,n)),nr(t)}else ju(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Lg(t,e)||s==2&&ia(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:en(t,5);break;case 4:en(t,10);break;case 3:en(t,6);break;default:en(t,2)}}}function Ku(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function en(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Oe(t.kb,t);n||(n=new nn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Si(n,"https"),Ji(n)),Dg(n.toString(),s)}else Fe(2);t.G=0,t.l&&t.l.va(e),zu(t),Uu(t)}k.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function zu(t){if(t.G=0,t.la=[],t.l){const e=Ou(t.h);(e.length!=0||t.i.length!=0)&&(hc(t.la,e),hc(t.la,t.i),t.h.i.length=0,Uo(t.i),t.i.length=0),t.l.ua()}}function Gu(t,e,n){var s=n instanceof nn?Tt(n):new nn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ii(s,s.m);else{var i=L.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new nn(null,void 0);s&&Si(r,s),e&&(r.g=e),i&&Ii(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&oe(s,n,e),oe(s,"VER",t.ma),$s(t,s),s}function Wu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ae(new Vs({jb:!0})):new ae(t.ra),e.Ka(t.H),e}function Qu(){}k=Qu.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Ra=function(){};function ki(){if(Fn&&!(10<=Number(Xp)))throw Error("Environmental error: no available transport.")}ki.prototype.g=function(t,e){return new Xe(t,e)};function Xe(t,e){Te.call(this),this.g=new Vu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!_i(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_i(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Wn(this)}Ae(Xe,Te);Xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Fe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Gu(t,null,t.V),nr(t)};Xe.prototype.close=function(){sa(this.g)};Xe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Go(t),t=n);e.i.push(new Sg(e.ab++,t)),e.G==3&&nr(e)};Xe.prototype.M=function(){this.g.l=null,delete this.j,sa(this.g),delete this.g,Xe.X.M.call(this)};function Yu(t){Xo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(Yu,Xo);function Xu(){Jo.call(this),this.status=1}Ae(Xu,Jo);function Wn(t){this.g=t}Ae(Wn,Qu);Wn.prototype.xa=function(){Se(this.g,"a")};Wn.prototype.wa=function(t){Se(this.g,new Yu(t))};Wn.prototype.va=function(t){Se(this.g,new Xu)};Wn.prototype.ua=function(){Se(this.g,"b")};ki.prototype.createWebChannel=ki.prototype.g;Xe.prototype.send=Xe.prototype.u;Xe.prototype.open=Xe.prototype.m;Xe.prototype.close=Xe.prototype.close;Qi.NO_ERROR=0;Qi.TIMEOUT=8;Qi.HTTP_ERROR=6;mu.COMPLETE="complete";yu.EventType=xs;xs.OPEN="a";xs.CLOSE="b";xs.ERROR="c";xs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ae.prototype.listenOnce=ae.prototype.O;ae.prototype.getLastError=ae.prototype.Oa;ae.prototype.getLastErrorCode=ae.prototype.Ea;ae.prototype.getStatus=ae.prototype.aa;ae.prototype.getResponseJson=ae.prototype.Sa;ae.prototype.getResponseText=ae.prototype.fa;ae.prototype.send=ae.prototype.da;ae.prototype.setWithCredentials=ae.prototype.Ka;var Mg=function(){return new ki},xg=function(){return Wi()},Vr=Qi,Fg=mu,Bg=yn,Tc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Vg=Vs,ri=yu,Ug=ae;const Cc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Qn="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new $l("@firebase/firestore");function Sc(){return ln.logLevel}function D(t,...e){if(ln.logLevel<=G.DEBUG){const n=e.map(oa);ln.debug(`Firestore (${Qn}): ${t}`,...n)}}function Ct(t,...e){if(ln.logLevel<=G.ERROR){const n=e.map(oa);ln.error(`Firestore (${Qn}): ${t}`,...n)}}function uo(t,...e){if(ln.logLevel<=G.WARN){const n=e.map(oa);ln.warn(`Firestore (${Qn}): ${t}`,...n)}}function oa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${Qn}) INTERNAL ASSERTION FAILED: `+t;throw Ct(e),new Error(e)}function te(t,e){t||O()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ju{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $g{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class jg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qg{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Lt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string"),new Ju(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new ke(e)}}class Hg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(te(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Kg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Hg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.A=n.token,new zg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Wg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function W(t,e){return t<e?-1:t>e?1:0}function Bn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new I(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new I(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new me(0,0))}static max(){return new x(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){n===void 0?n=0:n>e.length&&O(),s===void 0?s=e.length-n:s>e.length-n&&O(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends Cs{construct(e,n,s){return new ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new I(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const Qg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Cs{construct(e,n,s){return new Pe(e,n,s)}static isValidIdentifier(e){return Qg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new I(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ie.fromString(e))}static fromName(e){return new N(ie.fromString(e).popFirst(5))}static empty(){return new N(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ie(e.slice()))}}function Yg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new me(n+1,0):new me(n,s));return new Bt(i,N.empty(),e)}function Xg(t){return new Bt(t.readTime,t.key,-1)}class Bt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Bt(x.min(),N.empty(),-1)}static max(){return new Bt(x.max(),N.empty(),-1)}}function Jg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class em{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==Zg)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(i=>i?E.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new E((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new E((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class tm{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ss{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){return t==null}function Di(t){return t===0&&1/t==-1/0}function nm(t){return typeof t=="number"&&Number.isInteger(t)&&!Di(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class sm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new sm("Invalid base64 string: "+i):i}}(e);return new Le(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const im=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(t){if(te(!!t),typeof t=="string"){let e=0;const n=im.exec(t);if(te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vn(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nh(t){const e=t.mapValue.fields.__previous_value__;return th(e)?nh(e):e}function Is(t){const e=Vt(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?th(t)?4:rm(t)?9007199254740991:10:O()}function ft(t,e){if(t===e)return!0;const n=un(t);if(n!==un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Vt(s.timestampValue),o=Vt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Vn(s.bytesValue).isEqual(Vn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ue(s.doubleValue),o=ue(i.doubleValue);return r===o?Di(r)===Di(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Bn(t.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ic(r)!==Ic(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ft(r[a],o[a])))return!1;return!0}(t,e);default:return O()}}function As(t,e){return(t.values||[]).find(n=>ft(n,e))!==void 0}function Un(t,e){if(t===e)return 0;const n=un(t),s=un(e);if(n!==s)return W(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ue(i.integerValue||i.doubleValue),a=ue(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ac(t.timestampValue,e.timestampValue);case 4:return Ac(Is(t),Is(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Vn(i),a=Vn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=W(o[c],a[c]);if(l!==0)return l}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=W(ue(i.latitude),ue(r.latitude));return o!==0?o:W(ue(i.longitude),ue(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Un(o[c],a[c]);if(l)return l}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===oi.mapValue&&r===oi.mapValue)return 0;if(i===oi.mapValue)return 1;if(r===oi.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=W(a[u],l[u]);if(h!==0)return h;const d=Un(o[a[u]],c[l[u]]);if(d!==0)return d}return W(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function Ac(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=Vt(t),s=Vt(e),i=W(n.seconds,s.seconds);return i!==0?i:W(n.nanos,s.nanos)}function $n(t){return ho(t)}function ho(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Vt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,N.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ho(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ho(s.fields[a])}`;return r+"}"}(t.mapValue):O();var e,n}function kc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fo(t){return!!t&&"integerValue"in t}function ca(t){return!!t&&"arrayValue"in t}function Dc(t){return!!t&&"nullValue"in t}function Pc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hi(t){return!!t&&"mapValue"in t}function hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pi{constructor(e,n){this.position=e,this.inclusive=n}}function Nc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=N.comparator(N.fromName(o.referenceValue),n.key):s=Un(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ft(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sh{}class he extends sh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new am(e,n,s):n==="array-contains"?new um(e,s):n==="in"?new hm(e,s):n==="not-in"?new dm(e,s):n==="array-contains-any"?new fm(e,s):new he(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new cm(e,s):new lm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Un(n,this.value)):n!==null&&un(this.value)===un(n)&&this.matchesComparison(Un(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class at extends sh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new at(e,n)}matches(e){return ih(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ih(t){return t.op==="and"}function rh(t){return om(t)&&ih(t)}function om(t){for(const e of t.filters)if(e instanceof at)return!1;return!0}function po(t){if(t instanceof he)return t.field.canonicalString()+t.op.toString()+$n(t.value);if(rh(t))return t.filters.map(e=>po(e)).join(",");{const e=t.filters.map(n=>po(n)).join(",");return`${t.op}(${e})`}}function oh(t,e){return t instanceof he?function(n,s){return s instanceof he&&n.op===s.op&&n.field.isEqual(s.field)&&ft(n.value,s.value)}(t,e):t instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&oh(r,s.filters[o]),!0):!1}(t,e):void O()}function ah(t){return t instanceof he?function(e){return`${e.field.canonicalString()} ${e.op} ${$n(e.value)}`}(t):t instanceof at?function(e){return e.op.toString()+" {"+e.getFilters().map(ah).join(" ,")+"}"}(t):"Filter"}class am extends he{constructor(e,n,s){super(e,n,s),this.key=N.fromName(s.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class cm extends he{constructor(e,n){super(e,"in",n),this.keys=ch("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lm extends he{constructor(e,n){super(e,"not-in",n),this.keys=ch("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ch(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>N.fromName(s.referenceValue))}class um extends he{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ca(n)&&As(n.arrayValue,this.value)}}class hm extends he{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class dm extends he{constructor(e,n){super(e,"not-in",n)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class fm extends he{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ca(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}/**
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
 */class Dn{constructor(e,n="asc"){this.field=e,this.dir=n}}function pm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ai(this.root,e,this.comparator,!0)}}class ai{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Ce.EMPTY,this.right=r??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rc(this.data.getIterator())}getIteratorFrom(e){return new Rc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class Rc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Qe([])}unionWith(e){let n=new ye(Pe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Qe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!hi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(n)}setAll(e){let n=Pe.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=hs(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());hi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];hi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){vn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new qe(hs(this.value))}}function lh(t){const e=[];return vn(t.fields,(n,s)=>{const i=new Pe([n]);if(hi(s)){const r=lh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new De(e,0,x.min(),x.min(),x.min(),qe.empty(),0)}static newFoundDocument(e,n,s,i){return new De(e,1,n,x.min(),s,i,0)}static newNoDocument(e,n){return new De(e,2,n,x.min(),x.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new De(e,3,n,x.min(),x.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Lc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new gm(t,e,n,s,i,r,o)}function la(t){const e=B(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>po(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),sr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$n(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$n(s)).join(",")),e._t=n}return e._t}function ua(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oc(t.startAt,e.startAt)&&Oc(t.endAt,e.endAt)}function go(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function mm(t,e,n,s,i,r,o,a){return new Yn(t,e,n,s,i,r,o,a)}function ha(t){return new Yn(t)}function Mc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function da(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ir(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function uh(t){return t.collectionGroup!==null}function Pn(t){const e=B(t);if(e.wt===null){e.wt=[];const n=ir(e),s=da(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Dn(n)),e.wt.push(new Dn(Pe.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Dn(Pe.keyField(),r))}}}return e.wt}function St(t){const e=B(t);if(!e.gt)if(e.limitType==="F")e.gt=Lc(e.path,e.collectionGroup,Pn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Pn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Dn(r.field,o))}const s=e.endAt?new Pi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Pi(e.startAt.position,e.startAt.inclusive):null;e.gt=Lc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function mo(t,e){e.getFirstInequalityField(),ir(t);const n=t.filters.concat([e]);return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yo(t,e,n){return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rr(t,e){return ua(St(t),St(e))&&t.limitType===e.limitType}function hh(t){return`${la(St(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ah(s)).join(", ")}]`),sr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$n(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$n(s)).join(",")),`Target(${n})`}(St(t))}; limitType=${t.limitType})`}function or(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):N.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Pn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Nc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Pn(n),s)||n.endAt&&!function(i,r,o){const a=Nc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Pn(n),s))}(t,e)}function ym(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dh(t){return(e,n)=>{let s=!1;for(const i of Pn(t)){const r=vm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function vm(t,e,n){const s=t.field.isKeyField()?N.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Un(a,c):O()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function ph(t){return{integerValue:""+t}}function wm(t,e){return nm(e)?ph(e):fh(t,e)}/**
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
 */class ar{constructor(){this._=void 0}}function bm(t,e,n){return t instanceof Ni?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ks?mh(t,e):t instanceof Ds?yh(t,e):function(s,i){const r=gh(s,i),o=xc(r)+xc(s.It);return fo(r)&&fo(s.It)?ph(o):fh(s.Tt,o)}(t,e)}function Em(t,e,n){return t instanceof ks?mh(t,e):t instanceof Ds?yh(t,e):n}function gh(t,e){return t instanceof Oi?fo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ni extends ar{}class ks extends ar{constructor(e){super(),this.elements=e}}function mh(t,e){const n=vh(e);for(const s of t.elements)n.some(i=>ft(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ds extends ar{constructor(e){super(),this.elements=e}}function yh(t,e){let n=vh(e);for(const s of t.elements)n=n.filter(i=>!ft(i,s));return{arrayValue:{values:n}}}class Oi extends ar{constructor(e,n){super(),this.Tt=e,this.It=n}}function xc(t){return ue(t.integerValue||t.doubleValue)}function vh(t){return ca(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _m(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ks&&s instanceof ks||n instanceof Ds&&s instanceof Ds?Bn(n.elements,s.elements,ft):n instanceof Oi&&s instanceof Oi?ft(n.It,s.It):n instanceof Ni&&s instanceof Ni}(t.transform,e.transform)}class Tm{constructor(e,n){this.version=e,this.transformResults=n}}class rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cr{}function wh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fa(t.key,rt.none()):new Hs(t.key,t.data,rt.none());{const n=t.data,s=qe.empty();let i=new ye(Pe.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Kt(t.key,s,new Qe(i.toArray()),rt.none())}}function Cm(t,e,n){t instanceof Hs?function(s,i,r){const o=s.value.clone(),a=Bc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kt?function(s,i,r){if(!di(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Bc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(bh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ds(t,e,n,s){return t instanceof Hs?function(i,r,o,a){if(!di(i.precondition,r))return o;const c=i.value.clone(),l=Vc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Kt?function(i,r,o,a){if(!di(i.precondition,r))return o;const c=Vc(i.fieldTransforms,a,r),l=r.data;return l.setAll(bh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return di(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Sm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=gh(s.transform,i||null);r!=null&&(n===null&&(n=qe.empty()),n.set(s.field,r))}return n||null}function Fc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Bn(n,s,(i,r)=>_m(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hs extends cr{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends cr{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function bh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bc(t,e,n){const s=new Map;te(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Em(o,a,n[i]))}return s}function Vc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,bm(r,o,e))}return s}class fa extends cr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Im extends cr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,q;function km(t){switch(t){default:return O();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Eh(t){if(t===void 0)return Ct("GRPC error has no .code"),y.UNKNOWN;switch(t){case le.OK:return y.OK;case le.CANCELLED:return y.CANCELLED;case le.UNKNOWN:return y.UNKNOWN;case le.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case le.INTERNAL:return y.INTERNAL;case le.UNAVAILABLE:return y.UNAVAILABLE;case le.UNAUTHENTICATED:return y.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case le.NOT_FOUND:return y.NOT_FOUND;case le.ALREADY_EXISTS:return y.ALREADY_EXISTS;case le.PERMISSION_DENIED:return y.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case le.ABORTED:return y.ABORTED;case le.OUT_OF_RANGE:return y.OUT_OF_RANGE;case le.UNIMPLEMENTED:return y.UNIMPLEMENTED;case le.DATA_LOSS:return y.DATA_LOSS;default:return O()}}(q=le||(le={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return eh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new ve(N.comparator);function It(){return Dm}const _h=new ve(N.comparator);function as(...t){let e=_h;for(const n of t)e=e.insert(n.key,n);return e}function Th(t){let e=_h;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function tn(){return fs()}function Ch(){return fs()}function fs(){return new Xn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Pm=new ve(N.comparator),Nm=new ye(N.comparator);function j(...t){let e=Nm;for(const n of t)e=e.add(n);return e}const Om=new ye(W);function Sh(){return Om}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ks.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new lr(x.min(),i,Sh(),It(),j())}}class Ks{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ks(s,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Ih{constructor(e,n){this.targetId=e,this.Rt=n}}class Ah{constructor(e,n,s=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Uc{constructor(){this.bt=0,this.vt=jc(),this.Pt=Le.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=j(),n=j(),s=j();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:O()}}),new Ks(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=jc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Rm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=It(),this.Kt=$c(),this.Gt=new ye(W)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(go(r))if(s===0){const o=new N(r.path);this.zt(n,o,De.newNoDocument(o,x.min()))}else te(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&go(a.target)){const c=new N(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,De.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=j();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new lr(e,n,this.Gt,this.Ut,s);return this.Ut=It(),this.Kt=$c(),this.Gt=new ye(W),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Uc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ye(W),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Uc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function $c(){return new ve(N.comparator)}function jc(){return new ve(N.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xm=(()=>({and:"AND",or:"OR"}))();class Fm{constructor(e,n){this.databaseId=e,this.yt=n}}function Ri(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Bm(t,e){return Ri(t,e.toTimestamp())}function ht(t){return te(!!t),x.fromTimestamp(function(e){const n=Vt(e);return new me(n.seconds,n.nanos)}(t))}function pa(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Dh(t){const e=ie.fromString(t);return te(Rh(e)),e}function wo(t,e){return pa(t.databaseId,e.path)}function Ur(t,e){const n=Dh(e);if(n.get(1)!==t.databaseId.projectId)throw new I(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(Ph(n))}function bo(t,e){return pa(t.databaseId,e)}function Vm(t){const e=Dh(t);return e.length===4?ie.emptyPath():Ph(e)}function Eo(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ph(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qc(t,e,n){return{name:wo(t,e),fields:n.value.mapValue.fields}}function Um(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(te(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(te(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:Eh(c.code);return new I(l,c.message||"")}(o);n=new Ah(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ur(t,s.document.name),r=ht(s.document.updateTime),o=s.document.createTime?ht(s.document.createTime):x.min(),a=new qe({mapValue:{fields:s.document.fields}}),c=De.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new fi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ur(t,s.document),r=s.readTime?ht(s.readTime):x.min(),o=De.newNoDocument(i,r),a=s.removedTargetIds||[];n=new fi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ur(t,s.document),r=s.removedTargetIds||[];n=new fi([],r,i,null)}else{if(!("filter"in e))return O();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Am(i),o=s.targetId;n=new Ih(o,r)}}return n}function $m(t,e){let n;if(e instanceof Hs)n={update:qc(t,e.key,e.value)};else if(e instanceof fa)n={delete:wo(t,e.key)};else if(e instanceof Kt)n={update:qc(t,e.key,e.data),updateMask:Ym(e.fieldMask)};else{if(!(e instanceof Im))return O();n={verify:wo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ni)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ks)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ds)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Oi)return{fieldPath:r.field.canonicalString(),increment:o.It};throw O()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Bm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function jm(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ht(s.updateTime):ht(i);return r.isEqual(x.min())&&(r=ht(i)),new Tm(r,s.transformResults||[])}(n,e))):[]}function qm(t,e){return{documents:[bo(t,e.path)]}}function Hm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=bo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Oh(at.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Cn(u.field),direction:Gm(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||sr(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Km(t){let e=Vm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){te(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Nh(u);return h instanceof at&&rh(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Dn(Sn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Pi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Pi(d,h)}(n.endAt)),mm(e,i,o,r,a,"F",c,l)}function zm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Sn(e.unaryFilter.field);return he.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Sn(e.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sn(e.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Sn(e.unaryFilter.field);return he.create(r,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return he.create(Sn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return at.create(e.compositeFilter.filters.map(n=>Nh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function Gm(t){return Lm[t]}function Wm(t){return Mm[t]}function Qm(t){return xm[t]}function Cn(t){return{fieldPath:t.canonicalString()}}function Sn(t){return Pe.fromServerFormat(t.fieldPath)}function Oh(t){return t instanceof he?function(e){if(e.op==="=="){if(Pc(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NAN"}};if(Dc(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pc(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NAN"}};if(Dc(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(e.field),op:Wm(e.op),value:e.value}}}(t):t instanceof at?function(e){const n=e.getFilters().map(s=>Oh(s));return n.length===1?n[0]:{compositeFilter:{op:Qm(e.op),filters:n}}}(t):O()}function Ym(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Cm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ds(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ds(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ch();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=wh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,(n,s)=>Fc(n,s))&&Bn(this.baseMutations,e.baseMutations,(n,s)=>Fc(n,s))}}class ga{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){te(e.mutations.length===s.length);let i=Pm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ga(e,n,s,i)}}/**
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
 */class Jm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sn{constructor(e,n,s,i,r=x.min(),o=x.min(),a=Le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.oe=e}}function ey(t){const e=Km({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yo(e,e.limit,"L"):e}/**
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
 */class ty{constructor(){this.Ze=new ny}addToCollectionParentIndex(e,n){return this.Ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Bt.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class ny{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ye(ie.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ye(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sy{constructor(){this.changes=new Xn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iy{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ds(s.mutation,i,Qe.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,j()).next(()=>s))}getLocalViewOfDocuments(e,n,s=j()){const i=tn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=as();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=tn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,j()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=It();const o=fs(),a=fs();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Kt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ds(u.mutation,l,u.mutation.getFieldMask(),me.now())):o.set(l.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new iy(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fs();let i=new ve((o,a)=>o-a),r=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Qe.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||j()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ch();u.forEach(d=>{if(!r.has(d)){const p=wh(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return N.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):E.resolve(tn());let a=-1,c=r;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,j())).next(u=>({batchId:a,changes:Th(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(s=>{let i=as();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=as();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const c=function(l,u){return new Yn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,De.newInvalidDocument(l)))});let o=as();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ds(l.mutation,c,Qe.empty(),me.now()),or(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return E.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:ey(s.bundledQuery),readTime:ht(s.readTime)}}(n)),E.resolve()}}/**
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
 */class ay{constructor(){this.overlays=new ve(N.comparator),this.ss=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=tn();return E.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const i=tn(),r=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=tn(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=tn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return E.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Jm(n,s));let r=this.ss.get(n);r===void 0&&(r=j(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.rs=new ye(Ee.os),this.us=new ye(Ee.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ee(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ee(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new N(new ie([])),s=new Ee(n,e),i=new Ee(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new N(new ie([])),s=new Ee(n,e),i=new Ee(n,e+1);let r=j();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ee(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return N.comparator(e.key,n.key)||W(e.gs,n.gs)}static cs(e,n){return W(e.gs,n.gs)||N.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ye(Ee.os)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xm(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Ee(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return E.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ee(n,0),i=new Ee(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),E.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ye(W);return n.forEach(i=>{const r=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),E.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;N.isDocumentKey(r)||(r=r.child(""));const o=new Ee(new N(r),0);let a=new ye(W);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),E.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){te(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return E.forEach(n.mutations,i=>{const r=new Ee(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Ee(n,0),i=this.ps.firstAfterOrEqual(s);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.Rs=e,this.docs=new ve(N.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let s=It();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():De.newInvalidDocument(i))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=It();const o=n.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Jg(Xg(u),s)<=0||(i.has(u.key)||or(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,i){O()}bs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new uy(this)}getSize(e){return E.resolve(this.size)}}class uy extends sy{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.persistence=e,this.vs=new Xn(n=>la(n),ua),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ma,this.targetCount=0,this.Ss=jn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),E.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new jn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.xn(n),E.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(r).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new aa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new hy(this),this.indexManager=new ty,this.remoteDocumentCache=function(s){return new ly(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Zm(n),this.Os=new oy(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ay,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new cy(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){D("MemoryPersistence","Starting transaction:",e);const i=new fy(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return E.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class fy extends em{constructor(e){super(),this.currentSequenceNumber=e}}class ya{constructor(e){this.persistence=e,this.Bs=new ma,this.Ls=null}static qs(e){return new ya(e)}get Us(){if(this.Ls)return this.Ls;throw O()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),E.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Us,s=>{const i=N.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,x.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return E.or([()=>E.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=j(),i=j();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new va(e,n.fromCache,s,i)}}/**
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
 */class py{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Mc(n))return E.resolve(null);let s=St(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yo(n,null,"F"),s=St(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=j(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,yo(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return Mc(n)||i.isEqual(x.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(Sc()<=G.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vo(n)),this.qi(e,o,n,Yg(i,-1)))})}Bi(e,n){let s=new ye(dh(e));return n.forEach((i,r)=>{or(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return Sc()<=G.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",vo(n)),this.Oi.getDocumentsMatchingQuery(e,n,Bt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new ve(W),this.Gi=new Xn(r=>la(r),ua),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ry(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function my(t,e,n,s){return new gy(t,e,n,s)}async function Lh(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=j();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function yy(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=E.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const b=c.docVersions.get(p);te(b!==null),m.version.compareTo(b)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=j();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Mh(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function vy(t,e){const n=B(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Le.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,b,v){return m.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=It(),l=j();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(wy(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(x.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function wy(t,e,n){let s=j(),i=j();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=It();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function by(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ey(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,E.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new sn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function _o(t,e,n){const s=B(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qs(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Hc(t,e,n){const s=B(t);let i=x.min(),r=j();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=B(a),h=u.Gi.get(l);return h!==void 0?E.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,St(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:x.min(),n?r:j())).next(a=>(_y(s,ym(e),a),{documents:a,Yi:r})))}function _y(t,e,n){let s=t.Qi.get(e)||x.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Kc{constructor(){this.activeTargetIds=Sh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ty{constructor(){this.Ur=new Kc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Kc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Cy{Gr(e){}shutdown(){}}/**
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
 */class zc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);D("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(D("RestConnection","Received: ",c),c),c=>{throw uo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=Sy[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Ug;a.setWithCredentials(!0),a.listenOnce(Fg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const l=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Vr.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new I(y.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const u=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const b=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(b)>=0?b:y.UNKNOWN}(d.status);o(new I(p,d.message))}else o(new I(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(y.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Mg(),o=xg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Vg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");D("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new Iy({Yr:m=>{h?D("Connection","Not sending because WebChannel is closed:",m):(u||(D("Connection","Opening WebChannel transport."),l.open(),u=!0),D("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),p=(m,b,v)=>{m.listen(b,P=>{try{v(P)}catch(_){setTimeout(()=>{throw _},0)}})};return p(l,ri.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),p(l,ri.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),d.oo())}),p(l,ri.EventType.ERROR,m=>{h||(h=!0,uo("Connection","WebChannel transport errored:",m),d.oo(new I(y.UNAVAILABLE,"The operation could not be completed")))}),p(l,ri.EventType.MESSAGE,m=>{var b;if(!h){const v=m.data[0];te(!!v);const P=v,_=P.error||((b=P[0])===null||b===void 0?void 0:b.error);if(_){D("Connection","WebChannel received error:",_);const M=_.status;let S=function(X){const F=le[X];if(F!==void 0)return Eh(F)}(M),R=_.message;S===void 0&&(S=y.INTERNAL,R="Unknown error status: "+M+" with message "+_.message),h=!0,d.oo(new I(S,R)),l.close()}else D("Connection","WebChannel received:",v),d.uo(v)}}),p(o,Bg.STAT_EVENT,m=>{m.stat===Tc.PROXY?D("Connection","Detected buffering proxy"):m.stat===Tc.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function $r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){return new Fm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new xh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Ct(n.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new I(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ky extends Fh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Um(this.Tt,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?ht(r.readTime):x.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Eo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=go(a)?{documents:qm(i,a)}:{query:Hm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=kh(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Ri(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=zm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Eo(this.Tt),n.removeTarget=e,this.qo(n)}}class Dy extends Fh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=jm(e.writeResults,e.commitTime),s=ht(e.commitTime);return this.listener.eu(s,n)}return te(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Eo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>$m(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new I(y.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(y.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(y.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Ny{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Ct(n),this.cu=!1):D("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{wn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=B(a);c.mu.add(4),await zs(c),c.pu.set("Unknown"),c.mu.delete(4),await hr(c)}(this))})}),this.pu=new Ny(s,i)}}async function hr(t){if(wn(t))for(const e of t.gu)await e(!0)}async function zs(t){for(const e of t.gu)await e(!1)}function Bh(t,e){const n=B(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ea(n)?ba(n):Jn(n).Mo()&&wa(n,e))}function Vh(t,e){const n=B(t),s=Jn(n);n.wu.delete(e),s.Mo()&&Uh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():wn(n)&&n.pu.set("Unknown"))}function wa(t,e){t.Iu.Ft(e.targetId),Jn(t).Jo(e)}function Uh(t,e){t.Iu.Ft(e),Jn(t).Yo(e)}function ba(t){t.Iu=new Rm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Jn(t).start(),t.pu.au()}function Ea(t){return wn(t)&&!Jn(t).Oo()&&t.wu.size>0}function wn(t){return B(t).mu.size===0}function $h(t){t.Iu=void 0}async function Ry(t){t.wu.forEach((e,n)=>{wa(t,e)})}async function Ly(t,e){$h(t),Ea(t)?(t.pu.fu(e),ba(t)):t.pu.set("Unknown")}async function My(t,e,n){if(t.pu.set("Online"),e instanceof Ah&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Li(t,s)}else if(e instanceof fi?t.Iu.Qt(e):e instanceof Ih?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(x.min()))try{const s=await Mh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),Uh(i,a);const l=new sn(c.target,a,1,c.sequenceNumber);wa(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){D("RemoteStore","Failed to raise snapshot:",s),await Li(t,s)}}async function Li(t,e,n){if(!qs(e))throw e;t.mu.add(1),await zs(t),t.pu.set("Offline"),n||(n=()=>Mh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await hr(t)})}function jh(t,e){return e().catch(n=>Li(t,n,e))}async function dr(t){const e=B(t),n=Ut(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;xy(e);)try{const i=await by(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Fy(e,i)}catch(i){await Li(e,i)}qh(e)&&Hh(e)}function xy(t){return wn(t)&&t._u.length<10}function Fy(t,e){t._u.push(e);const n=Ut(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function qh(t){return wn(t)&&!Ut(t).Oo()&&t._u.length>0}function Hh(t){Ut(t).start()}async function By(t){Ut(t).su()}async function Vy(t){const e=Ut(t);for(const n of t._u)e.tu(n.mutations)}async function Uy(t,e,n){const s=t._u.shift(),i=ga.from(s,e,n);await jh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dr(t)}async function $y(t,e){e&&Ut(t).Xo&&await async function(n,s){if(i=s.code,km(i)&&i!==y.ABORTED){const r=n._u.shift();Ut(n).$o(),await jh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await dr(n)}var i}(t,e),qh(t)&&Hh(t)}async function Gc(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const s=wn(n);n.mu.add(3),await zs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await hr(n)}async function jy(t,e){const n=B(t);e?(n.mu.delete(2),await hr(n)):e||(n.mu.add(2),await zs(n),n.pu.set("Unknown"))}function Jn(t){return t.Tu||(t.Tu=function(e,n,s){const i=B(e);return i.ru(),new ky(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Ry.bind(null,t),no:Ly.bind(null,t),Ho:My.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Ea(t)?ba(t):t.pu.set("Unknown")):(await t.Tu.stop(),$h(t))})),t.Tu}function Ut(t){return t.Eu||(t.Eu=function(e,n,s){const i=B(e);return i.ru(),new Dy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:By.bind(null,t),no:$y.bind(null,t),nu:Vy.bind(null,t),eu:Uy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await dr(t)):(await t.Eu.stop(),t._u.length>0&&(D("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new _a(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(t,e){if(Ct("AsyncQueue",`${e}: ${t}`),qs(t))return new I(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||N.comparator(n.key,s.key):(n,s)=>N.comparator(n.key,s.key),this.keyedMap=as(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new Nn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Nn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Nn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.Au=new ve(N.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):O():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class qn{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qn(e,n,Nn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.bu=void 0,this.listeners=[]}}class Hy{constructor(){this.queries=new Xn(e=>hh(e),rr),this.onlineState="Unknown",this.vu=new Set}}async function Kh(t,e){const n=B(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new qy),i)try{r.bu=await n.onListen(s)}catch(o){const a=Ta(o,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&Ca(n)}async function zh(t,e){const n=B(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ky(t,e){const n=B(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&Ca(n)}function zy(t,e,n){const s=B(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ca(t){t.vu.forEach(e=>{e.next()})}class Gh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new qn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=qn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.key=e}}class Qh{constructor(e){this.key=e}}class Gy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=j(),this.mutatedKeys=j(),this.ju=dh(e),this.zu=new Nn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Wc,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=or(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==b&&(s.track({type:3,doc:p}),v=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=b?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new qn(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Wc,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=j(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Qh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Wh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=j();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return qn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Wy{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Qy{constructor(e){this.key=e,this.ic=!1}}class Yy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Xn(a=>hh(a),rr),this.uc=new Map,this.cc=new Set,this.ac=new ve(N.comparator),this.hc=new Map,this.lc=new ma,this.fc={},this.dc=new Map,this._c=jn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Xy(t,e){const n=av(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Ey(n.localStore,St(e));n.isPrimaryClient&&Bh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Jy(n,e,s,a==="current",o.resumeToken)}return i}async function Jy(t,e,n,s,i){t.mc=(h,d,p)=>async function(m,b,v,P){let _=b.view.Hu(v);_.Li&&(_=await Hc(m.localStore,b.query,!1).then(({documents:R})=>b.view.Hu(R,_)));const M=P&&P.targetChanges.get(b.targetId),S=b.view.applyChanges(_,m.isPrimaryClient,M);return Yc(m,b.targetId,S.tc),S.snapshot}(t,h,d,p);const r=await Hc(t.localStore,e,!0),o=new Gy(e,r.Yi),a=o.Hu(r.documents),c=Ks.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Yc(t,n,l.tc);const u=new Wy(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function Zy(t,e){const n=B(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!rr(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Vh(n.remoteStore,s.targetId),To(n,s.targetId)}).catch(js)):(To(n,s.targetId),await _o(n.localStore,s.targetId,!0))}async function ev(t,e,n){const s=cv(t);try{const i=await function(r,o){const a=B(r),c=me.now(),l=o.reduce((d,p)=>d.add(p.key),j());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=It(),m=j();return a.ji.getEntries(d,l).next(b=>{p=b,p.forEach((v,P)=>{P.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(b=>{u=b;const v=[];for(const P of o){const _=Sm(P,u.get(P.key).overlayedDocument);_!=null&&v.push(new Kt(P.key,_,lh(_.value.mapValue),rt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(b=>{h=b;const v=b.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,b.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Th(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new ve(W)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Gs(s,i.changes),await dr(s.remoteStore)}catch(i){const r=Ta(i,"Failed to persist write");n.reject(r)}}async function Yh(t,e){const n=B(t);try{const s=await vy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?te(o.ic):i.removedDocuments.size>0&&(te(o.ic),o.ic=!1))}),await Gs(n,s,e)}catch(s){await js(s)}}function Qc(t,e,n){const s=B(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=B(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Ca(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tv(t,e,n){const s=B(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new ve(N.comparator);o=o.insert(r,De.newNoDocument(r,x.min()));const a=j().add(r),c=new lr(x.min(),new Map,new ye(W),o,a);await Yh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),Sa(s)}else await _o(s.localStore,e,!1).then(()=>To(s,e,n)).catch(js)}async function nv(t,e){const n=B(t),s=e.batch.batchId;try{const i=await yy(n.localStore,e);Jh(n,s,null),Xh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Gs(n,i)}catch(i){await js(i)}}async function sv(t,e,n){const s=B(t);try{const i=await function(r,o){const a=B(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Jh(s,e,n),Xh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Gs(s,i)}catch(i){await js(i)}}function Xh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Jh(t,e,n){const s=B(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function To(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Zh(t,s)})}function Zh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Vh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Sa(t))}function Yc(t,e,n){for(const s of n)s instanceof Wh?(t.lc.addReference(s.key,e),iv(t,s)):s instanceof Qh?(D("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Zh(t,s.key)):O()}function iv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(D("SyncEngine","New document in limbo: "+n),t.cc.add(s),Sa(t))}function Sa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new N(ie.fromString(e)),s=t._c.next();t.hc.set(s,new Qy(n)),t.ac=t.ac.insert(n,s),Bh(t.remoteStore,new sn(St(ha(n.path)),s,2,aa.at))}}async function Gs(t,e,n){const s=B(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=va.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=B(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(c,h=>E.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!qs(u))throw u;D("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,r))}async function rv(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const s=await Lh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new I(y.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gs(n,s.Wi)}}function ov(t,e){const n=B(t),s=n.hc.get(e);if(s&&s.ic)return j().add(s.key);{let i=j();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function av(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ov.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tv.bind(null,e),e.rc.Ho=Ky.bind(null,e.eventManager),e.rc.gc=zy.bind(null,e.eventManager),e}function cv(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sv.bind(null,e),e}class lv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ur(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return my(this.persistence,new py,e.initialUser,this.Tt)}Tc(e){return new dy(ya.qs,this.Tt)}Ic(e){return new Ty}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rv.bind(null,this.syncEngine),await jy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Hy}createDatastore(e){const n=ur(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Ay(i));var i;return function(r,o,a,c){return new Py(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Qc(this.syncEngine,a,0),o=zc.C()?new zc:new Cy,new Oy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new Yy(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);D("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await zs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ed{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=Zu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{D("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(D("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ta(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function dv(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Lh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function fv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pv(t);D("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Gc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Gc(e.remoteStore,r)),t.onlineComponents=e}async function pv(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await dv(t,new lv)),t.offlineComponents}async function td(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await fv(t,new uv)),t.onlineComponents}function gv(t){return td(t).then(e=>e.syncEngine)}async function Co(t){const e=await td(t),n=e.eventManager;return n.onListen=Xy.bind(null,e.syncEngine),n.onUnlisten=Zy.bind(null,e.syncEngine),n}function mv(t,e,n={}){const s=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new ed({next:h=>{r.enqueueAndForget(()=>zh(i,u)),h.fromCache&&a.source==="server"?c.reject(new I(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Gh(o,l,{includeMetadataChanges:!0,Ou:!0});return Kh(i,u)}(await Co(t),t.asyncQueue,e,n,s)),s.promise}const Xc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e,n){if(!n)throw new I(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yv(t,e,n,s){if(e===!0&&s===!0)throw new I(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jc(t){if(!N.isDocumentKey(t))throw new I(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zc(t){if(N.isDocumentKey(t))throw new I(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fr(t);throw new I(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new I(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,yv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $g;switch(n.type){case"gapi":const s=n.client;return new Kg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new I(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xc.get(e);n&&(D("ComponentProvider","Removing Datastore"),Xc.delete(e),n.terminate())}(this),Promise.resolve()}}function vv(t,e,n,s={}){var i;const r=(t=dt(t,pr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&uo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ke.MOCK_USER;else{o=Vl(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new I(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ke(c)}t._authCredentials=new jg(new Ju(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class zt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zt(this.firestore,e,this._query)}}class Mt extends zt{constructor(e,n,s){super(e,n,ha(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new N(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function wt(t,e,...n){if(t=ot(t),nd("collection","path",e),t instanceof pr){const s=ie.fromString(e,...n);return Zc(s),new Mt(t,null,s)}{if(!(t instanceof He||t instanceof Mt))throw new I(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Zc(s),new Mt(t.firestore,null,s)}}function Hn(t,e,...n){if(t=ot(t),arguments.length===1&&(e=Zu.R()),nd("doc","path",e),t instanceof pr){const s=ie.fromString(e,...n);return Jc(s),new He(t,null,new N(s))}{if(!(t instanceof He||t instanceof Mt))throw new I(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Jc(s),new He(t.firestore,t instanceof Mt?t.converter:null,new N(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new xh(this,"async_queue_retry"),this.Hc=()=>{const n=$r();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=$r();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=$r();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Lt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!qs(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ct("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=_a.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&O()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function tl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class hn extends pr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new wv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sd(this),this._firestoreClient.terminate()}}function bv(t,e){const n=typeof t=="object"?t:Gl(),s=typeof t=="string"?t:e||"(default)",i=Hl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Bl("firestore");r&&vv(i,...r)}return i}function Ia(t){return t._firestoreClient||sd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sd(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new tm(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new hv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(Le.fromBase64String(e))}catch(n){throw new I(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kn(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ka{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=/^__.*__$/;class _v{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hs(e,this.data,n,this.fieldTransforms)}}class id{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Da{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Da(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Mi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(rd(this.ra)&&Ev.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Tv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ur(e)}wa(e,n,s,i=!1){return new Da({ra:e,methodName:n,_a:s,path:Pe.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Pa(t){const e=t._freezeSettings(),n=ur(t._databaseId);return new Tv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cv(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Na("Data must be an object, but it was:",o,s);const a=od(s,o);let c,l;if(r.merge)c=new Qe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=So(e,h,n);if(!o.contains(d))throw new I(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);cd(u,d)||u.push(d)}c=new Qe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new _v(new qe(a),c,l)}class mr extends Aa{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mr}}function Sv(t,e,n,s){const i=t.wa(1,e,n);Na("Data must be an object, but it was:",i,s);const r=[],o=qe.empty();vn(s,(c,l)=>{const u=Oa(e,c,n);l=ot(l);const h=i.ha(u);if(l instanceof mr)r.push(u);else{const d=Ws(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Qe(r);return new id(o,a,i.fieldTransforms)}function Iv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[So(e,s,n)],c=[i];if(r.length%2!=0)throw new I(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(So(e,r[d])),c.push(r[d+1]);const l=[],u=qe.empty();for(let d=a.length-1;d>=0;--d)if(!cd(l,a[d])){const p=a[d];let m=c[d];m=ot(m);const b=o.ha(p);if(m instanceof mr)l.push(p);else{const v=Ws(m,b);v!=null&&(l.push(p),u.set(p,v))}}const h=new Qe(l);return new id(u,h,o.fieldTransforms)}function Av(t,e,n,s=!1){return Ws(n,t.wa(s?4:3,e))}function Ws(t,e){if(ad(t=ot(t)))return Na("Unsupported field value:",e,t),od(t,e);if(t instanceof Aa)return function(n,s){if(!rd(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ws(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=me.fromDate(n);return{timestampValue:Ri(s.Tt,i)}}if(n instanceof me){const i=new me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ri(s.Tt,i)}}if(n instanceof ka)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kn)return{bytesValue:kh(s.Tt,n._byteString)};if(n instanceof He){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${fr(n)}`)}(t,e)}function od(t,e){const n={};return eh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vn(t,(s,i)=>{const r=Ws(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function ad(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof ka||t instanceof Kn||t instanceof He||t instanceof Aa)}function Na(t,e,n){if(!ad(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=fr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function So(t,e,n){if((e=ot(e))instanceof gr)return e._internalPath;if(typeof e=="string")return Oa(t,e);throw Mi("Field path arguments must be of type string or ",t,!1,void 0,n)}const kv=new RegExp("[~\\*/\\[\\]]");function Oa(t,e,n){if(e.search(kv)>=0)throw Mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gr(...e.split("."))._internalPath}catch{throw Mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new I(y.INVALID_ARGUMENT,a+t+c)}function cd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dv extends ld{data(){return super.data()}}function yr(t,e){return typeof e=="string"?Oa(t,e):e instanceof gr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new I(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ra{}class hd extends Ra{}function An(t,e,...n){let s=[];e instanceof Ra&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof La).length,o=i.filter(a=>a instanceof vr).length;if(r>1||r>0&&o>0)throw new I(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class vr extends hd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new vr(e,n,s)}_apply(e){const n=this._parse(e);return dd(e._query,n),new zt(e.firestore,e.converter,mo(e._query,n))}_parse(e){const n=Pa(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new I(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){sl(u,l);const d=[];for(const p of u)d.push(nl(a,i,p));h={arrayValue:{values:d}}}else h=nl(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||sl(u,l),h=Av(o,r,u,l==="in"||l==="not-in");return he.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Io(t,e,n){const s=e,i=yr("where",t);return vr._create(i,s,n)}class La extends Ra{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new La(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:at.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)dd(r,a),r=mo(r,a)}(e._query,n),new zt(e.firestore,e.converter,mo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ma extends hd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ma(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new I(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new I(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Dn(i,r);return function(a,c){if(da(a)===null){const l=ir(a);l!==null&&fd(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new zt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Yn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function pi(t,e="asc"){const n=e,s=yr("orderBy",t);return Ma._create(s,n)}function nl(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new I(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uh(e)&&n.indexOf("/")!==-1)throw new I(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ie.fromString(n));if(!N.isDocumentKey(s))throw new I(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return kc(t,new N(s))}if(n instanceof He)return kc(t,n._key);throw new I(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fr(n)}.`)}function sl(t,e){if(!Array.isArray(t)||t.length===0)throw new I(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dd(t,e){if(e.isInequality()){const s=ir(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new I(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=da(t);r!==null&&fd(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new I(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function fd(t,e,n){if(!n.isEqual(e))throw new I(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Pv{convertValue(e,n="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const s={};return vn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new ka(ue(e.latitude),ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=nh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=Vt(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ie.fromString(e);te(Rh(s));const i=new Ss(s.get(1),s.get(3)),r=new N(s.popFirst(5));return i.isEqual(n)||Ct(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pd extends ld{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(yr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class gi extends pd{data(e={}){return super.data(e)}}class gd{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new gi(this._firestore,this._userDataWriter,s.key,s,new cs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new gi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new gi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Ov(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ov(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class xa extends Pv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function Ao(t){t=dt(t,zt);const e=dt(t.firestore,hn),n=Ia(e),s=new xa(e);return ud(t._query),mv(n,t._query).then(i=>new gd(e,s,t,i))}function Fa(t,e,n,...s){t=dt(t,He);const i=dt(t.firestore,hn),r=Pa(i);let o;return o=typeof(e=ot(e))=="string"||e instanceof gr?Iv(r,"updateDoc",t._key,e,n,s):Sv(r,"updateDoc",t._key,e),Ba(i,[o.toMutation(t._key,rt.exists(!0))])}function ko(t){return Ba(dt(t.firestore,hn),[new fa(t._key,rt.none())])}function md(t,e){const n=dt(t.firestore,hn),s=Hn(t),i=Nv(t.converter,e);return Ba(n,[Cv(Pa(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,rt.exists(!1))]).then(()=>s)}function mi(t,...e){var n,s,i;t=ot(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||tl(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(tl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof He)l=dt(t.firestore,hn),u=ha(t._key.path),c={next:h=>{e[o]&&e[o](Rv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=dt(t,zt);l=dt(h.firestore,hn),u=h._query;const d=new xa(l);c={next:p=>{e[o]&&e[o](new gd(l,d,h,p))},error:e[o+1],complete:e[o+2]},ud(t._query)}return function(h,d,p,m){const b=new ed(m),v=new Gh(d,b,p);return h.asyncQueue.enqueueAndForget(async()=>Kh(await Co(h),v)),()=>{b.Pc(),h.asyncQueue.enqueueAndForget(async()=>zh(await Co(h),v))}}(Ia(l),u,a,c)}function Ba(t,e){return function(n,s){const i=new Lt;return n.asyncQueue.enqueueAndForget(async()=>ev(await gv(n),s,i)),i.promise}(Ia(t),e)}function Rv(t,e,n){const s=n.docs.get(e._key),i=new xa(t);return new pd(t,i,e._key,s,new cs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Qn=n})(Kl),ys(new xn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new hn(new qg(n.getProvider("auth-internal")),new Gg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Rt(Cc,"3.8.4",t),Rt(Cc,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="firebasestorage.googleapis.com",Lv="storageBucket",Mv=2*60*1e3,xv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends mn{constructor(e,n,s=0){super(jr(e),`Firebase Storage: ${n} (${jr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pt||(pt={}));function jr(t){return"storage/"+t}function Fv(){const t="An unknown error occurred, please check the error payload for server response.";return new mt(pt.UNKNOWN,t)}function Bv(){return new mt(pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Vv(){return new mt(pt.CANCELED,"User canceled the upload/download.")}function Uv(t){return new mt(pt.INVALID_URL,"Invalid URL '"+t+"'.")}function $v(t){return new mt(pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function il(t){return new mt(pt.INVALID_ARGUMENT,t)}function vd(){return new mt(pt.APP_DELETED,"The Firebase app was deleted.")}function jv(t){return new mt(pt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=it.makeFromUrl(e,n)}catch{return new it(e,"")}if(s.path==="")return s;throw $v(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},b=n===yd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",P=new RegExp(`^https?://${b}/${i}/${v}`,"i"),M=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:P,indices:{bucket:1,path:2},postModify:l}];for(let S=0;S<M.length;S++){const R=M[S],X=R.regex.exec(e);if(X){const F=X[R.indices.bucket];let re=X[R.indices.path];re||(re=""),s=new it(F,re),R.postModify(s);break}}if(s==null)throw Uv(e);return s}}class qv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function d(){r&&clearTimeout(r)}function p(v,...P){if(l){d();return}if(v){d(),u.call(null,v,...P);return}if(c()||o){d(),u.call(null,v,...P);return}s<64&&(s*=2);let M;a===1?(a=2,M=0):M=(s+Math.random())*1e3,h(M)}let m=!1;function b(v){m||(m=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,b(!0)},n),b}function Kv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){return t!==void 0}function rl(t,e,n,s){if(s<e)throw il(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw il(`Invalid value for '${t}'. Expected ${n} or less.`)}function Gv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Wv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ci(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===xi.NO_ERROR,c=r.getStatus();if(!a||Wv(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===xi.ABORT;s(!1,new ci(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ci(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());zv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Fv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?vd():Vv();o(c)}else{const c=Bv();o(c)}};this.canceled_?n(!1,new ci(!1,null,!0)):this.backoffId_=Hv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Kv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ci{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Yv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Xv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Jv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Zv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ew(t,e,n,s,i,r,o=!0){const a=Gv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Jv(l,e),Yv(l,n),Xv(l,r),Zv(l,s),new Qv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Fi{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fi(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nw(this._location.path)}get storage(){return this._service}get parent(){const e=tw(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new Fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jv(e)}}function ol(t,e){const n=e==null?void 0:e[Lv];return n==null?null:it.makeFromBucketSpec(n,t)}function sw(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Vl(i,t.app.options.projectId))}class iw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=yd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Mv,this._maxUploadRetryTime=xv,this._requests=new Set,i!=null?this._bucket=it.makeFromBucketSpec(i,this._host):this._bucket=ol(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=ol(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fi(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new qv(vd());{const o=ew(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const al="@firebase/storage",cl="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="storage";function rw(t=Gl(),e){t=ot(t);const s=Hl(t,wd).getImmediate({identifier:e}),i=Bl("storage");return i&&ow(s,...i),s}function ow(t,e,n,s={}){sw(t,e,n,s)}function aw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new iw(n,s,i,e,Kl)}function cw(){ys(new xn(wd,aw,"PUBLIC").setMultipleInstances(!0)),Rt(al,cl,""),Rt(al,cl,"esm2017")}cw();const lw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},bd=zl(lw);rw(bd);const $e=bv(bd);var uw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Do={},hw={get exports(){return Do},set exports(t){Do=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(uw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(v){v.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(v){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),m=this.options.position=="left"?d:"-"+d,b=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+m+","+b+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(hw);const On=Do,Ed="SweetAlert2:",dw=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Va=t=>t.charAt(0).toUpperCase()+t.slice(1),Je=t=>Array.prototype.slice.call(t),Ke=t=>{console.warn(`${Ed} ${typeof t=="object"?t.join(" "):t}`)},bn=t=>{console.error(`${Ed} ${t}`)},ll=[],fw=t=>{ll.includes(t)||(ll.push(t),Ke(t))},pw=(t,e)=>{fw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},wr=t=>typeof t=="function"?t():t,Ua=t=>t&&typeof t.toPromise=="function",Qs=t=>Ua(t)?t.toPromise():Promise.resolve(t),$a=t=>t&&Promise.resolve(t)===t,Rn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},gw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],mw={},yw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],_d=t=>Object.prototype.hasOwnProperty.call(Rn,t),Td=t=>gw.indexOf(t)!==-1,Po=t=>mw[t],vw=t=>{_d(t)||Ke(`Unknown parameter "${t}"`)},ww=t=>{yw.includes(t)&&Ke(`The parameter "${t}" is incompatible with toasts`)},bw=t=>{Po(t)&&pw(t,Po(t))},Ew=t=>{!t.backdrop&&t.allowOutsideClick&&Ke('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)vw(e),t.toast&&ww(e),bw(e)},_w="swal2-",Cd=t=>{const e={};for(const n in t)e[t[n]]=_w+t[n];return e},f=Cd(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),ps=Cd(["success","warning","info","question","error"]),Me=()=>document.body.querySelector(`.${f.container}`),Ys=t=>{const e=Me();return e?e.querySelector(t):null},st=t=>Ys(`.${t}`),Q=()=>st(f.popup),Xs=()=>st(f.icon),Sd=()=>st(f.title),Bi=()=>st(f["html-container"]),Id=()=>st(f.image),Ad=()=>st(f["progress-steps"]),br=()=>st(f["validation-message"]),ct=()=>Ys(`.${f.actions} .${f.confirm}`),$t=()=>Ys(`.${f.actions} .${f.deny}`),Tw=()=>st(f["input-label"]),Zn=()=>Ys(`.${f.loader}`),dn=()=>Ys(`.${f.actions} .${f.cancel}`),Js=()=>st(f.actions),kd=()=>st(f.footer),Er=()=>st(f["timer-progress-bar"]),ja=()=>st(f.close),Cw=`
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
`,qa=()=>{const t=Je(Q().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=Je(Q().querySelectorAll(Cw)).filter(n=>n.getAttribute("tabindex")!=="-1");return dw(t.concat(e)).filter(n=>Ye(n))},Ha=()=>Et(document.body,f.shown)&&!Et(document.body,f["toast-shown"])&&!Et(document.body,f["no-backdrop"]),_r=()=>Q()&&Et(Q(),f.toast),Sw=()=>Q().hasAttribute("data-loading"),Ln={previousBodyPadding:null},Ne=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");Je(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),Je(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},Et=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Iw=(t,e)=>{Je(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(ps).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},nt=(t,e,n)=>{if(Iw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Ke(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);H(t,e.customClass[n])}},Ka=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},Dd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Pd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},H=(t,e)=>{Pd(t,e,!0)},gt=(t,e)=>{Pd(t,e,!1)},Pt=(t,e)=>{const n=Je(t.childNodes);for(let s=0;s<n.length;s++)if(Et(n[s],e))return n[s]},gs=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Ie=(t,e="flex")=>{t.style.display=e},xe=t=>{t.style.display="none"},ul=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Tr=(t,e,n)=>{e?Ie(t,n):xe(t)},Ye=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Aw=()=>!Ye(ct())&&!Ye($t())&&!Ye(dn()),hl=t=>t.scrollHeight>t.clientHeight,Nd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},za=(t,e=!1)=>{const n=Er();Ye(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},kw=()=>{const t=Er(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Od=()=>typeof window>"u"||typeof document>"u",Dw=100,V={},Pw=()=>{V.previousActiveElement&&V.previousActiveElement.focus?(V.previousActiveElement.focus(),V.previousActiveElement=null):document.body&&document.body.focus()},Nw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;V.restoreFocusTimeout=setTimeout(()=>{Pw(),e()},Dw),window.scrollTo(n,s)}),Ow=`
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
`.replace(/(^|\n)\s*/g,""),Rw=()=>{const t=Me();return t?(t.remove(),gt([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Yt=()=>{V.currentInstance.resetValidationMessage()},Lw=()=>{const t=Q(),e=Pt(t,f.input),n=Pt(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=Pt(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=Pt(t,f.textarea);e.oninput=Yt,n.onchange=Yt,r.onchange=Yt,o.onchange=Yt,a.oninput=Yt,s.oninput=()=>{Yt(),i.value=s.value},s.onchange=()=>{Yt(),s.nextSibling.value=s.value}},Mw=t=>typeof t=="string"?document.querySelector(t):t,xw=t=>{const e=Q();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Fw=t=>{window.getComputedStyle(t).direction==="rtl"&&H(Me(),f.rtl)},Bw=t=>{const e=Rw();if(Od()){bn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&H(n,f["no-transition"]),Ne(n,Ow);const s=Mw(t.target);s.appendChild(n),xw(t),Fw(s),Lw()},Ga=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Vw(t,e):t&&Ne(e,t)},Vw=(t,e)=>{t.jquery?Uw(e,t):Ne(e,t.toString())},Uw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ps=(()=>{if(Od())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),$w=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},jw=(t,e)=>{const n=Js(),s=Zn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?xe(n):Ie(n),nt(n,e,"actions"),qw(n,s,e),Ne(s,e.loaderHtml),nt(s,e,"loader")};function qw(t,e,n){const s=ct(),i=$t(),r=dn();qr(s,"confirm",n),qr(i,"deny",n),qr(r,"cancel",n),Hw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Hw(t,e,n,s){if(!s.buttonsStyling)return gt([t,e,n],f.styled);H([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,H(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,H(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,H(n,f["default-outline"]))}function qr(t,e,n){Tr(t,n[`show${Va(e)}Button`],"inline-block"),Ne(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],nt(t,n,`${e}Button`),H(t,n[`${e}ButtonClass`])}function Kw(t,e){typeof e=="string"?t.style.background=e:e||H([document.documentElement,document.body],f["no-backdrop"])}function zw(t,e){e in f?H(t,f[e]):(Ke('The "position" parameter is not valid, defaulting to "center"'),H(t,f.center))}function Gw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&H(t,f[n])}}const Ww=(t,e)=>{const n=Me();n&&(Kw(n,e.backdrop),zw(n,e.position),Gw(n,e.grow),nt(n,e,"container"))},U={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Qw=["input","file","range","select","radio","checkbox","textarea"],Yw=(t,e)=>{const n=Q(),s=U.innerParams.get(t),i=!s||e.input!==s.input;Qw.forEach(r=>{const o=f[r],a=Pt(n,o);Zw(r,e.inputAttributes),a.className=o,i&&xe(a)}),e.input&&(i&&Xw(e),eb(e))},Xw=t=>{if(!je[t.input])return bn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Rd(t.input),n=je[t.input](e,t);Ie(n),setTimeout(()=>{Dd(n)})},Jw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Zw=(t,e)=>{const n=Ka(Q(),t);if(n){Jw(n);for(const s in e)n.setAttribute(s,e[s])}},eb=t=>{const e=Rd(t.input);t.customClass&&H(e,t.customClass.input)},Wa=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Zs=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,H(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Rd=t=>{const e=f[t]?f[t]:f.input;return Pt(Q(),e)},je={};je.text=je.email=je.password=je.number=je.tel=je.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:$a(e.inputValue)||Ke(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Zs(t,t,e),Wa(t,e),t.type=e.input,t);je.file=(t,e)=>(Zs(t,t,e),Wa(t,e),t);je.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Zs(n,t,e),t};je.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Ne(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Zs(t,t,e),t};je.radio=t=>(t.textContent="",t);je.checkbox=(t,e)=>{const n=Ka(Q(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Ne(s,e.inputPlaceholder),t};je.textarea=(t,e)=>{t.value=e.inputValue,Wa(t,e),Zs(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(Q()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?Q().style.width=`${r}px`:Q().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const tb=(t,e)=>{const n=Bi();nt(n,e,"htmlContainer"),e.html?(Ga(e.html,n),Ie(n,"block")):e.text?(n.textContent=e.text,Ie(n,"block")):xe(n),Yw(t,e)},nb=(t,e)=>{const n=kd();Tr(n,e.footer),e.footer&&Ga(e.footer,n),nt(n,e,"footer")},sb=(t,e)=>{const n=ja();Ne(n,e.closeButtonHtml),nt(n,e,"closeButton"),Tr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},ib=(t,e)=>{const n=U.innerParams.get(t),s=Xs();if(n&&e.icon===n.icon){fl(s,e),dl(s,e);return}if(!e.icon&&!e.iconHtml)return xe(s);if(e.icon&&Object.keys(ps).indexOf(e.icon)===-1)return bn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),xe(s);Ie(s),fl(s,e),dl(s,e),H(s,e.showClass.icon)},dl=(t,e)=>{for(const n in ps)e.icon!==n&&gt(t,ps[n]);H(t,ps[e.icon]),cb(t,e),rb(),nt(t,e,"icon")},rb=()=>{const t=Q(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},ob=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ab=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,fl=(t,e)=>{t.textContent="",e.iconHtml?Ne(t,pl(e.iconHtml)):e.icon==="success"?Ne(t,ob):e.icon==="error"?Ne(t,ab):Ne(t,pl({question:"?",warning:"!",info:"i"}[e.icon]))},cb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ul(t,n,"backgroundColor",e.iconColor);ul(t,".swal2-success-ring","borderColor",e.iconColor)}},pl=t=>`<div class="${f["icon-content"]}">${t}</div>`,lb=(t,e)=>{const n=Id();if(!e.imageUrl)return xe(n);Ie(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),gs(n,"width",e.imageWidth),gs(n,"height",e.imageHeight),n.className=f.image,nt(n,e,"image")},ub=t=>{const e=document.createElement("li");return H(e,f["progress-step"]),Ne(e,t),e},hb=t=>{const e=document.createElement("li");return H(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},db=(t,e)=>{const n=Ad();if(!e.progressSteps||e.progressSteps.length===0)return xe(n);Ie(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Ke("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=ub(s);if(n.appendChild(r),i===e.currentProgressStep&&H(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=hb(e);n.appendChild(o)}})},fb=(t,e)=>{const n=Sd();Tr(n,e.title||e.titleText,"block"),e.title&&Ga(e.title,n),e.titleText&&(n.innerText=e.titleText),nt(n,e,"title")},pb=(t,e)=>{const n=Me(),s=Q();e.toast?(gs(n,"width",e.width),s.style.width="100%",s.insertBefore(Zn(),Xs())):gs(s,"width",e.width),gs(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),xe(br()),gb(s,e)},gb=(t,e)=>{t.className=`${f.popup} ${Ye(t)?e.showClass.popup:""}`,e.toast?(H([document.documentElement,document.body],f["toast-shown"]),H(t,f.toast)):H(t,f.modal),nt(t,e,"popup"),typeof e.customClass=="string"&&H(t,e.customClass),e.icon&&H(t,f[`icon-${e.icon}`])},Ld=(t,e)=>{pb(t,e),Ww(t,e),db(t,e),ib(t,e),lb(t,e),fb(t,e),sb(t,e),tb(t,e),jw(t,e),nb(t,e),typeof e.didRender=="function"&&e.didRender(Q())},es=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),mb=()=>{Je(document.body.children).forEach(e=>{e===Me()||e.contains(Me())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Md=()=>{Je(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},xd=["swal-title","swal-html","swal-footer"],yb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Cb(n),Object.assign(vb(n),wb(n),bb(n),Eb(n),_b(n),Tb(n,xd))},vb=t=>{const e={};return Je(t.querySelectorAll("swal-param")).forEach(n=>{fn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof Rn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof Rn[s]=="object"&&(e[s]=JSON.parse(i))}),e},wb=t=>{const e={};return Je(t.querySelectorAll("swal-button")).forEach(n=>{fn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Va(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},bb=t=>{const e={},n=t.querySelector("swal-image");return n&&(fn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Eb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(fn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},_b=t=>{const e={},n=t.querySelector("swal-input");n&&(fn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},Je(s).forEach(i=>{fn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},Tb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(fn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Cb=t=>{const e=xd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Je(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Ke(`Unrecognized element <${s}>`)})},fn=(t,e)=>{Je(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Ke([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},gl={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Sb(t){t.inputValidator||Object.keys(gl).forEach(e=>{t.input===e&&(t.inputValidator=gl[e])})}function Ib(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Ke('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Ab(t){Sb(t),t.showLoaderOnConfirm&&!t.preConfirm&&Ke(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ib(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Bw(t)}class kb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Db=()=>{Ln.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Ln.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ln.previousBodyPadding+$w()}px`)},Pb=()=>{Ln.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Ln.previousBodyPadding}px`,Ln.previousBodyPadding=null)},Nb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Et(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,H(document.body,f.iosfix),Rb(),Ob()}},Ob=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&Q().scrollHeight>window.innerHeight-44&&(Me().style.paddingBottom=`${44}px`)},Rb=()=>{const t=Me();let e;t.ontouchstart=n=>{e=Lb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Lb=t=>{const e=t.target,n=Me();return Mb(t)||xb(t)?!1:e===n||!hl(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(hl(Bi())&&Bi().contains(e))},Mb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",xb=t=>t.touches&&t.touches.length>1,Fb=()=>{if(Et(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);gt(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Fd=10,Bb=t=>{const e=Me(),n=Q();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;$b(e,n,t),setTimeout(()=>{Vb(e,n)},Fd),Ha()&&(Ub(e,t.scrollbarPadding,i),mb()),!_r()&&!V.previousActiveElement&&(V.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),gt(e,f["no-transition"])},Bd=t=>{const e=Q();if(t.target!==e)return;const n=Me();e.removeEventListener(Ps,Bd),n.style.overflowY="auto"},Vb=(t,e)=>{Ps&&Nd(e)?(t.style.overflowY="hidden",e.addEventListener(Ps,Bd)):t.style.overflowY="auto"},Ub=(t,e,n)=>{Nb(),e&&n!=="hidden"&&Db(),setTimeout(()=>{t.scrollTop=0})},$b=(t,e,n)=>{H(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Ie(e,"grid"),setTimeout(()=>{H(e,n.showClass.popup),e.style.removeProperty("opacity")},Fd),H([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&H([document.documentElement,document.body],f["height-auto"])},zn=t=>{let e=Q();e||new Os,e=Q();const n=Zn();_r()?xe(Xs()):jb(e,t),Ie(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},jb=(t,e)=>{const n=Js(),s=Zn();!e&&Ye(ct())&&(e=ct()),Ie(n),e&&(xe(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),H([t,n],f.loading)},qb=(t,e)=>{e.input==="select"||e.input==="radio"?Wb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Ua(e.inputValue)||$a(e.inputValue))&&(zn(ct()),Qb(t,e))},Hb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Kb(n);case"radio":return zb(n);case"file":return Gb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Kb=t=>t.checked?1:0,zb=t=>t.checked?t.value:null,Gb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Wb=(t,e)=>{const n=Q(),s=i=>Yb[e.input](n,No(i),e);Ua(e.inputOptions)||$a(e.inputOptions)?(zn(ct()),Qs(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):bn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Qb=(t,e)=>{const n=t.getInput();xe(n),Qs(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Ie(n),n.focus(),t.hideLoading()}).catch(s=>{bn(`Error in inputValue promise: ${s}`),n.value="",Ie(n),n.focus(),t.hideLoading()})},Yb={select:(t,e,n)=>{const s=Pt(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Ne(c,o),c.selected=ml(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Pt(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,ml(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Ne(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},No=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=No(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=No(s)),e.push([n,s])}),e},ml=(t,e)=>e&&e.toString()===t.toString();function yl(){const t=U.innerParams.get(this);if(!t)return;const e=U.domCache.get(this);xe(e.loader),_r()?t.icon&&Ie(Xs()):Xb(e),gt([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Xb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Ie(e[0],"inline-block"):Aw()&&xe(t.actions)};function Jb(t){const e=U.innerParams.get(t||this),n=U.domCache.get(t||this);return n?Ka(n.popup,e.input):null}const Ns={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Zb=()=>Ye(Q()),Vd=()=>ct()&&ct().click(),e0=()=>$t()&&$t().click(),t0=()=>dn()&&dn().click(),Ud=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},n0=(t,e,n,s)=>{Ud(e),n.toast||(e.keydownHandler=i=>i0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:Q(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Oo=(t,e,n)=>{const s=qa();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();Q().focus()},$d=["ArrowRight","ArrowDown"],s0=["ArrowLeft","ArrowUp"],i0=(t,e,n)=>{const s=U.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?r0(t,e,s):e.key==="Tab"?o0(e,s):[...$d,...s0].includes(e.key)?a0(e.key):e.key==="Escape"&&c0(e,s,n)))},r0=(t,e,n)=>{if(wr(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Vd(),e.preventDefault()}},o0=(t,e)=>{const n=t.target,s=qa();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Oo(e,i,-1):Oo(e,i,1),t.stopPropagation(),t.preventDefault()},a0=t=>{const e=ct(),n=$t(),s=dn();if(![e,n,s].includes(document.activeElement))return;const i=$d.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Js().children.length;o++){if(r=r[i],!r)return;if(Ye(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},c0=(t,e,n)=>{wr(e.allowEscapeKey)&&(t.preventDefault(),n(es.esc))};function jd(t,e,n,s){_r()?vl(t,s):(Nw(n).then(()=>vl(t,s)),Ud(V)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ha()&&(Pb(),Fb(),Md()),l0()}function l0(){gt([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function li(t){t=f0(t);const e=Ns.swalPromiseResolve.get(this),n=h0(this);this.isAwaitingPromise()?t.isDismissed||(ei(this),e(t)):n&&e(t)}function u0(){return!!U.awaitingPromise.get(this)}const h0=t=>{const e=Q();if(!e)return!1;const n=U.innerParams.get(t);if(!n||Et(e,n.hideClass.popup))return!1;gt(e,n.showClass.popup),H(e,n.hideClass.popup);const s=Me();return gt(s,n.showClass.backdrop),H(s,n.hideClass.backdrop),p0(t,e,n),!0};function d0(t){const e=Ns.swalPromiseReject.get(this);ei(this),e&&e(t)}const ei=t=>{t.isAwaitingPromise()&&(U.awaitingPromise.delete(t),U.innerParams.get(t)||t._destroy())},f0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),p0=(t,e,n)=>{const s=Me(),i=Ps&&Nd(e);typeof n.willClose=="function"&&n.willClose(e),i?g0(t,e,s,n.returnFocus,n.didClose):jd(t,s,n.returnFocus,n.didClose)},g0=(t,e,n,s,i)=>{V.swalCloseEventFinishedCallback=jd.bind(null,t,n,s,i),e.addEventListener(Ps,function(r){r.target===e&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback)})},vl=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function qd(t,e,n){const s=U.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Hd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function m0(){qd(this,["confirmButton","denyButton","cancelButton"],!1)}function y0(){qd(this,["confirmButton","denyButton","cancelButton"],!0)}function v0(){return Hd(this.getInput(),!1)}function w0(){return Hd(this.getInput(),!0)}function b0(t){const e=U.domCache.get(this),n=U.innerParams.get(this);Ne(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&H(e.validationMessage,n.customClass.validationMessage),Ie(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),Dd(s),H(s,f.inputerror))}function E0(){const t=U.domCache.get(this);t.validationMessage&&xe(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),gt(e,f.inputerror))}function _0(){return U.domCache.get(this).progressSteps}function T0(t){const e=Q(),n=U.innerParams.get(this);if(!e||Et(e,n.hideClass.popup))return Ke("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=C0(t),i=Object.assign({},n,s);Ld(this,i),U.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const C0=t=>{const e={};return Object.keys(t).forEach(n=>{Td(n)?e[n]=t[n]:Ke(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function S0(){const t=U.domCache.get(this),e=U.innerParams.get(this);if(!e){Kd(this);return}t.popup&&V.swalCloseEventFinishedCallback&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback),V.deferDisposalTimer&&(clearTimeout(V.deferDisposalTimer),delete V.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),I0(this)}const I0=t=>{Kd(t),delete t.params,delete V.keydownHandler,delete V.keydownTarget,delete V.currentInstance},Kd=t=>{t.isAwaitingPromise()?(Hr(U,t),U.awaitingPromise.set(t,!0)):(Hr(Ns,t),Hr(U,t))},Hr=(t,e)=>{for(const n in t)t[n].delete(e)},zd=Object.freeze(Object.defineProperty({__proto__:null,_destroy:S0,close:li,closeModal:li,closePopup:li,closeToast:li,disableButtons:y0,disableInput:w0,disableLoading:yl,enableButtons:m0,enableInput:v0,getInput:Jb,getProgressSteps:_0,handleAwaitingPromise:ei,hideLoading:yl,isAwaitingPromise:u0,rejectPromise:d0,resetValidationMessage:E0,showValidationMessage:b0,update:T0},Symbol.toStringTag,{value:"Module"})),A0=t=>{const e=U.innerParams.get(t);t.disableButtons(),e.input?Gd(t,"confirm"):Ya(t,!0)},k0=t=>{const e=U.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Gd(t,"deny"):Qa(t,!1)},D0=(t,e)=>{t.disableButtons(),e(es.cancel)},Gd=(t,e)=>{const n=U.innerParams.get(t);if(!n.input)return bn(`The "input" parameter is needed to be set when using returnInputValueOn${Va(e)}`);const s=Hb(t,n);n.inputValidator?P0(t,s,e):t.getInput().checkValidity()?e==="deny"?Qa(t,s):Ya(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},P0=(t,e,n)=>{const s=U.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Qs(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Qa(t,e):Ya(t,e)})},Qa=(t,e)=>{const n=U.innerParams.get(t||globalThis);n.showLoaderOnDeny&&zn($t()),n.preDeny?(U.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Qs(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),ei(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Wd(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},wl=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Wd=(t,e)=>{t.rejectPromise(e)},Ya=(t,e)=>{const n=U.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&zn(),n.preConfirm?(t.resetValidationMessage(),U.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Qs(n.preConfirm(e,n.validationMessage))).then(i=>{Ye(br())||i===!1?(t.hideLoading(),ei(t)):wl(t,typeof i>"u"?e:i)}).catch(i=>Wd(t||globalThis,i))):wl(t,e)},N0=(t,e,n)=>{U.innerParams.get(t).toast?O0(t,e,n):(L0(e),M0(e),x0(t,e,n))},O0=(t,e,n)=>{e.popup.onclick=()=>{const s=U.innerParams.get(t);s&&(R0(s)||s.timer||s.input)||n(es.close)}},R0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Vi=!1;const L0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Vi=!0)}}},M0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Vi=!0)}}},x0=(t,e,n)=>{e.container.onclick=s=>{const i=U.innerParams.get(t);if(Vi){Vi=!1;return}s.target===e.container&&wr(i.allowOutsideClick)&&n(es.backdrop)}},F0=t=>typeof t=="object"&&t.jquery,bl=t=>t instanceof Element||F0(t),B0=t=>{const e={};return typeof t[0]=="object"&&!bl(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||bl(i)?e[n]=i:i!==void 0&&bn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function V0(...t){const e=this;return new e(...t)}function U0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const $0=()=>V.timeout&&V.timeout.getTimerLeft(),Qd=()=>{if(V.timeout)return kw(),V.timeout.stop()},Yd=()=>{if(V.timeout){const t=V.timeout.start();return za(t),t}},j0=()=>{const t=V.timeout;return t&&(t.running?Qd():Yd())},q0=t=>{if(V.timeout){const e=V.timeout.increase(t);return za(e,!0),e}},H0=()=>V.timeout&&V.timeout.isRunning();let El=!1;const Ro={};function K0(t="data-swal-template"){Ro[t]=this,El||(document.body.addEventListener("click",z0),El=!0)}const z0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Ro){const s=e.getAttribute(n);if(s){Ro[n].fire({template:s});return}}},G0=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:B0,bindClickHandler:K0,clickCancel:t0,clickConfirm:Vd,clickDeny:e0,enableLoading:zn,fire:V0,getActions:Js,getCancelButton:dn,getCloseButton:ja,getConfirmButton:ct,getContainer:Me,getDenyButton:$t,getFocusableElements:qa,getFooter:kd,getHtmlContainer:Bi,getIcon:Xs,getImage:Id,getInputLabel:Tw,getLoader:Zn,getPopup:Q,getTimerLeft:$0,getTimerProgressBar:Er,getTitle:Sd,getValidationMessage:br,increaseTimer:q0,isDeprecatedParameter:Po,isLoading:Sw,isTimerRunning:H0,isUpdatableParameter:Td,isValidParameter:_d,isVisible:Zb,mixin:U0,resumeTimer:Yd,showLoading:zn,stopTimer:Qd,toggleTimer:j0},Symbol.toStringTag,{value:"Module"}));let Lo;class ts{constructor(...e){if(typeof window>"u")return;Lo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);U.promise.set(this,s)}_main(e,n={}){Ew(Object.assign({},n,e)),V.currentInstance&&(V.currentInstance._destroy(),Ha()&&Md()),V.currentInstance=this;const s=Q0(e,n);Ab(s),Object.freeze(s),V.timeout&&(V.timeout.stop(),delete V.timeout),clearTimeout(V.restoreFocusTimeout);const i=Y0(this);return Ld(this,s),U.innerParams.set(this,s),W0(this,i,s)}then(e){return U.promise.get(this).then(e)}finally(e){return U.promise.get(this).finally(e)}}const W0=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Ns.swalPromiseResolve.set(t,s),Ns.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>A0(t),e.denyButton.onclick=()=>k0(t),e.cancelButton.onclick=()=>D0(t,r),e.closeButton.onclick=()=>r(es.close),N0(t,e,r),n0(t,V,n,r),qb(t,n),Bb(n),X0(V,n,r),J0(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Q0=(t,e)=>{const n=yb(t),s=Object.assign({},Rn,e,n,t);return s.showClass=Object.assign({},Rn.showClass,s.showClass),s.hideClass=Object.assign({},Rn.hideClass,s.hideClass),s},Y0=t=>{const e={popup:Q(),container:Me(),actions:Js(),confirmButton:ct(),denyButton:$t(),cancelButton:dn(),loader:Zn(),closeButton:ja(),validationMessage:br(),progressSteps:Ad()};return U.domCache.set(t,e),e},X0=(t,e,n)=>{const s=Er();xe(s),e.timer&&(t.timeout=new kb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Ie(s),nt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&za(e.timer)})))},J0=(t,e)=>{if(!e.toast){if(!wr(e.allowEnterKey))return eE();Z0(t,e)||Oo(e,-1,1)}},Z0=(t,e)=>e.focusDeny&&Ye(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ye(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ye(t.confirmButton)?(t.confirmButton.focus(),!0):!1,eE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(ts.prototype,zd);Object.assign(ts,G0);Object.keys(zd).forEach(t=>{ts[t]=function(...e){if(Lo)return Lo[t](...e)}});ts.DismissReason=es;ts.version="11.4.8";const Os=ts;Os.default=Os;const _n=[];function Cr(t,e=pe){let n;const s=new Set;function i(a){if(jt(t,a)&&(t=a,n)){const c=!_n.length;for(const l of s)l[1](),_n.push(l,t);if(c){for(let l=0;l<_n.length;l+=2)_n[l][0](_n[l+1]);_n.length=0}}}function r(a){i(a(t))}function o(a,c=pe){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||pe),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Kr=Cr({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Mo=Cr(""),xo=Cr(""),Ui=Cr(""),tE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},nE=async t=>{try{await Fa(Hn($e,"Pacientes",t.id),t)}catch(e){console.log(e)}};function _l(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function sE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=Tl(_l(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Nl()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);ge(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=_l(i,n,o);s[o]?s[o].p(a,r):(s[o]=Tl(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){$i(s,i),i&&de(e)}}}function iE(t){let e;return{c(){e=A("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){ge(n,e,s)},p:pe,d(n){n&&de(e)}}}function Tl(t){let e,n=`${t[6].apellido}, ${t[6].nombre}${t[6].plan=="particular"?"":" -"+t[6].nroSocio+" - plan "+t[6].plan} `,s;return{c(){e=A("option"),s=ee(n),e.__value=t[8],e.value=e.__value},m(i,r){ge(i,e,r),w(e,s)},p(i,r){r&1&&n!==(n=`${i[6].apellido}, ${i[6].nombre}${i[6].plan=="particular"?"":" -"+i[6].nroSocio+" - plan "+i[6].plan} `)&&tt(s,n)},d(i){i&&de(e)}}}function rE(t){let e,n,s;function i(a,c){return a[0].length==0?iE:sE}let r=i(t),o=r(t);return{c(){e=A("select"),o.c(),g(e,"name","select-pacientes"),g(e,"class","select-Pacientes svelte-2shrp8"),g(e,"id","selectPacientes"),g(e,"size",5),t[1]===void 0&&rn(()=>t[4].call(e))},m(a,c){ge(a,e,c),o.m(e,null),xt(e,t[1]),n||(s=[J(e,"change",t[2]),J(e,"change",t[4])],n=!0)},p(a,[c]){r===(r=i(a))&&o?o.p(a,c):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),c&2&&xt(e,a[1])},i:pe,o:pe,d(a){a&&de(e),o.d(),n=!1,lt(s)}}}function oE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r;const o=Rl(),a=l=>{const u=l.target.value;n(3,i=s[u].plan),o("cambioSelectPaciente",u),console.log("dispatch cambioSelectPaciente, valorindiceSelectPaciente: ",u)};function c(){r=vi(this),n(1,r)}return t.$$set=l=>{"pacientesFiltrada"in l&&n(0,s=l.pacientesFiltrada),"planSelect"in l&&n(3,i=l.planSelect)},[s,r,a,i,c]}class aE extends gn{constructor(e){super(),pn(this,e,oE,rE,jt,{pacientesFiltrada:0,planSelect:3})}}function cE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,b,v,P,_,M,S,R,X,F,re,K,Be,we,be,ze,fe,Ve,Ge,Y,z,ce,ne,yt,C,se,Ze,Gt;return R=new aE({props:{pacientesFiltrada:t[1],planSelect:t[4]}}),R.$on("cambioSelectPaciente",t[15]),C=new gf({props:{planes:t[3],planSeleccionado:t[9],SelectPlanVisible:t[5]}}),C.$on("cambioPlan",t[14]),C.$on("clickCheckPlan",t[16]),{c(){e=A("body"),n=A("div"),s=A("div"),i=A("button"),r=ee("create"),a=Z(),c=A("button"),l=ee("update"),h=Z(),d=A("button"),p=ee("delete"),b=Z(),v=A("div"),P=A("label"),P.textContent="filtrar por apellido",_=A("input"),M=Z(),S=A("div"),Mn(R.$$.fragment),X=Z(),F=A("div"),re=A("label"),re.textContent="nombre",K=A("input"),Be=Z(),we=A("label"),we.textContent="apellido",be=A("input"),ze=Z(),fe=A("div"),Ve=A("label"),Ve.textContent="nº socio",Ge=Z(),Y=A("input"),z=Z(),ce=A("label"),ne=ee(t[10]),yt=Z(),Mn(C.$$.fragment),i.disabled=o=!t[6]||!t[7]||!t[9]||!t[8],g(i,"class","svelte-v8du9y"),c.disabled=u=!t[6]||!t[7]||!t[9]||!t[8]||!t[2],g(c,"class","svelte-v8du9y"),d.disabled=m=!t[2],g(d,"class","svelte-v8du9y"),g(s,"class","buttons svelte-v8du9y"),g(n,"id","botones"),g(n,"class","svelte-v8du9y"),g(P,"for","filterPrefix"),g(P,"class","svelte-v8du9y"),g(_,"name","filterPrefix"),g(_,"placeholder","filter prefix"),g(_,"class","svelte-v8du9y"),g(v,"id","filter"),g(v,"class","svelte-v8du9y"),g(S,"id","selectPacientes"),g(S,"class","svelte-v8du9y"),g(re,"for","nombre"),g(re,"class","svelte-v8du9y"),g(K,"name","nombre"),g(K,"placeholder","nombre"),g(K,"class","svelte-v8du9y"),g(we,"for","apellido"),g(we,"class","svelte-v8du9y"),g(be,"name","apellido"),g(be,"placeholder","apellido"),g(be,"class","svelte-v8du9y"),g(F,"id","formInputsI"),g(F,"class","svelte-v8du9y"),g(Ve,"for","nroSocio"),g(Ve,"class","svelte-v8du9y"),g(Y,"name","nroSocio"),g(Y,"placeholder","nro de Socio"),g(Y,"class","svelte-v8du9y"),g(ce,"id","labelPlan"),g(ce,"for","plan"),g(ce,"class","svelte-v8du9y"),g(fe,"id","formInputsD"),g(fe,"class","svelte-v8du9y"),g(e,"class","svelte-v8du9y")},m(T,$){ge(T,e,$),w(e,n),w(n,s),w(s,i),w(i,r),w(s,a),w(s,c),w(c,l),w(s,h),w(s,d),w(d,p),w(e,b),w(e,v),w(v,P),w(v,_),_e(_,t[0]),w(e,M),w(e,S),on(R,S,null),w(e,X),w(e,F),w(F,re),w(F,K),_e(K,t[6]),w(F,Be),w(F,we),w(F,be),_e(be,t[7]),w(e,ze),w(e,fe),w(fe,Ve),w(fe,Ge),w(fe,Y),_e(Y,t[8]),w(fe,z),w(fe,ce),w(ce,ne),w(fe,yt),on(C,fe,null),se=!0,Ze||(Gt=[J(i,"click",t[11]),J(c,"click",t[12]),J(d,"click",t[13]),J(_,"input",t[19]),J(K,"input",t[20]),J(be,"input",t[21]),J(Y,"input",t[22])],Ze=!0)},p(T,$){(!se||$[0]&960&&o!==(o=!T[6]||!T[7]||!T[9]||!T[8]))&&(i.disabled=o),(!se||$[0]&964&&u!==(u=!T[6]||!T[7]||!T[9]||!T[8]||!T[2]))&&(c.disabled=u),(!se||$[0]&4&&m!==(m=!T[2]))&&(d.disabled=m),$[0]&1&&_.value!==T[0]&&_e(_,T[0]);const Ue={};$[0]&2&&(Ue.pacientesFiltrada=T[1]),$[0]&16&&(Ue.planSelect=T[4]),R.$set(Ue),$[0]&64&&K.value!==T[6]&&_e(K,T[6]),$[0]&128&&be.value!==T[7]&&_e(be,T[7]),$[0]&256&&Y.value!==T[8]&&_e(Y,T[8]),(!se||$[0]&1024)&&tt(ne,T[10]);const We={};$[0]&8&&(We.planes=T[3]),$[0]&512&&(We.planSeleccionado=T[9]),$[0]&32&&(We.SelectPlanVisible=T[5]),C.$set(We)},i(T){se||(_t(R.$$.fragment,T),_t(C.$$.fragment,T),se=!0)},o(T){Ft(R.$$.fragment,T),Ft(C.$$.fragment,T),se=!1},d(T){T&&de(e),an(R),an(C),Ze=!1,lt(Gt)}}}function lE(t,e,n){let s,i,r,o,a;Dt(t,Kr,C=>n(24,i=C)),Dt(t,Ui,C=>n(25,r=C)),Dt(t,xo,C=>n(26,o=C)),Dt(t,Mo,C=>n(27,a=C));let c=[],l=["nombre","apellido","nroSocio","plan","createdAt"],u=[],h="",d,p;Ol(()=>{const C=wt($e,"Pacientes"),Ze=An(C,pi("apellido"));p=mi(Ze,T=>{n(17,c=T.docs.map($=>({...$.data(),id:$.id}))),tE(c,l),c.forEach($=>{nE($)}),document.getElementById("selectPacientes").selected=M},T=>{console.log(T)}),(async()=>{const T=wt($e,"planes"),$=await Ao(T);n(3,u=$.docs.map(Ue=>Ue.data().plan)),u.push("particular"),u.sort(),n(4,h="particular")})()}),sf(p);let m="",b="",v="",P="",_="",M=0,S,R="plan";ss(Kr,i=s,i);const X=C=>{n(6,b=C?C.nombre:""),n(7,v=C?C.apellido:""),n(8,P=C?C.nroSocio:""),n(9,_=C?C.plan:"")},F=async()=>{try{await md(wt($e,"Pacientes"),{nombre:b,apellido:v,nroSocio:P,createdAt:new Date().toLocaleDateString(),plan:_}),On({text:"Nuevo paciente agregado"}).showToast()}catch(C){console.error(C)}},re=()=>{n(17,c=c.concat({nombre:b,apellido:v})),n(18,M=c.length-1),F(),n(6,b=n(7,v=n(9,_=n(8,P=""))))},K=async C=>{try{await Fa(Hn($e,"Pacientes",C.id),C),On({text:`paciente ${C.apellido}, ${C.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(se){console.error(se)}},Be=()=>{n(2,s.nombre=b,s),n(2,s.apellido=v,s),n(9,_=s.plan),n(2,s.nroSocio=P,s),n(2,s),n(1,S),n(18,M),n(0,m),n(17,c),n(17,c),K(s)},we=async C=>{try{await ko(Hn($e,"Pacientes",C.id)),On({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(Ze){console.error(Ze)}const se=An(wt($e,"sesiones"),Io("pacienteID","==",C.id));console.log(`desde delete q=pacientes a borrar ${se} - paciente: ${C.nombre} ${C.apellido} ${C.id}`);try{(await Ao(se)).forEach(Gt=>{ko(Gt.ref)})}catch(Ze){console.log(Ze)}},be=()=>{const C=c.indexOf(s);Os.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(se=>{se.isConfirmed&&(Os.fire("Deleted!","Your file has been deleted.","success"),we(c[M]),n(17,c=[...c.slice(0,C),...c.slice(C+1)]),n(6,b=n(7,v=n(8,P=n(9,_="")))),n(18,M=Math.min(M,S.length-2)))})},ze=C=>{n(2,s.plan=C,s),n(2,s.nombre=b,s),n(2,s.apellido=v,s),n(2,s.nroSocio=P,s),n(1,S[M].plan=C,S),K(s)},fe=C=>{n(9,_=C.detail.valor.planSeleccionado),s.plan!=_&&ze(_)},Ve=C=>{C?(n(10,R="particular"),n(5,d=!1)):(n(10,R="plan"),n(5,d=!0))},Ge=C=>{n(18,M=C.detail),n(9,_=S[M].plan);const se=_=="particular";Ve(se)},Y=C=>{const se=C.detail.valor.SelectPlanVisible;se?se&&_=="particular"&&n(9,_="210"):n(9,_="particular"),ze(_),Ve(!se)};function z(){m=this.value,n(0,m)}function ce(){b=this.value,n(6,b)}function ne(){v=this.value,n(7,v)}function yt(){P=this.value,n(8,P)}return t.$$.update=()=>{t.$$.dirty[0]&131073&&n(1,S=m?c.filter(C=>`${C.apellido}, ${C.nombre}`.toLowerCase().startsWith(m.toLowerCase())):c.map(C=>({nombre:C.nombre,apellido:C.apellido,plan:C.plan,nroSocio:C.nroSocio,id:C.id}))),t.$$.dirty[0]&262146&&n(2,s=S[M]),t.$$.dirty[0]&4&&s&&(ss(Kr,i=s,i),ss(Mo,a=s.apellido,a),ss(xo,o=s.nombre,o),ss(Ui,r=s.id,r)),t.$$.dirty[0]&4&&X(s)},[m,S,s,u,h,d,b,v,P,_,R,re,Be,be,fe,Ge,Y,c,M,z,ce,ne,yt]}class uE extends gn{constructor(e){super(),pn(this,e,lE,cE,jt,{},null,[-1,-1])}}function hE(t){let e,n,s,i,r,o,a=t[1](t[2])+"",c;return{c(){e=A("p"),n=ee("total general:"),s=ee(t[0]),i=Z(),r=A("p"),o=ee("total por paciente:"),c=ee(a),g(e,"id","totalGeneral")},m(l,u){ge(l,e,u),w(e,n),w(e,s),ge(l,i,u),ge(l,r,u),w(r,o),w(r,c)},p(l,[u]){u&1&&tt(s,l[0]),u&6&&a!==(a=l[1](l[2])+"")&&tt(c,a)},i:pe,o:pe,d(l){l&&de(e),l&&de(i),l&&de(r)}}}function dE(t,e,n){let s;Dt(t,Ui,o=>n(2,s=o));let{registrosMesActual:i}=e,{sumaValorPagoPorPaciente:r}=e;return t.$$set=o=>{"registrosMesActual"in o&&n(0,i=o.registrosMesActual),"sumaValorPagoPorPaciente"in o&&n(1,r=o.sumaValorPagoPorPaciente)},[i,r,s]}class fE extends gn{constructor(e){super(),pn(this,e,dE,hE,jt,{registrosMesActual:0,sumaValorPagoPorPaciente:1})}}function Cl(t,e,n){const s=t.slice();return s[40]=e[n],s}function Sl(t,e,n){const s=t.slice();return s[43]=e[n],s}function Il(t){let e,n,s=t[43].diaSesion+"",i,r,o=t[43].valorSesion+"",a,c,l=t[43].fechaPago+"",u,h,d=t[43].valorPago+"",p,m,b;return{c(){e=A("option"),n=ee("dia sesion: "),i=ee(s),r=ee(" - valor sesion: "),a=ee(o),c=ee(`\r
              - dia pago `),u=ee(l),h=ee(" - valor pago "),p=ee(d),m=Z(),g(e,"class"," svelte-1imwuid"),e.__value=b=t[43].id,e.value=e.__value},m(v,P){ge(v,e,P),w(e,n),w(e,i),w(e,r),w(e,a),w(e,c),w(e,u),w(e,h),w(e,p),w(e,m)},p(v,P){P[0]&1&&s!==(s=v[43].diaSesion+"")&&tt(i,s),P[0]&1&&o!==(o=v[43].valorSesion+"")&&tt(a,o),P[0]&1&&l!==(l=v[43].fechaPago+"")&&tt(u,l),P[0]&1&&d!==(d=v[43].valorPago+"")&&tt(p,d),P[0]&1&&b!==(b=v[43].id)&&(e.__value=b,e.value=e.__value)},d(v){v&&de(e)}}}function Al(t){let e=Object.values(t[43]).includes(t[3])&&t[43].diaSesion.slice(5,7)==t[4],n,s=e&&Il(t);return{c(){s&&s.c(),n=Nl()},m(i,r){s&&s.m(i,r),ge(i,n,r)},p(i,r){r[0]&25&&(e=Object.values(i[43]).includes(i[3])&&i[43].diaSesion.slice(5,7)==i[4]),e?s?s.p(i,r):(s=Il(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&de(n)}}}function pE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,b,v,P,_,M,S,R,X,F,re,K,Be,we,be,ze,fe,Ve,Ge=t[12],Y=[];for(let z=0;z<Ge.length;z+=1)Y[z]=kl(Cl(t,Ge,z));return{c(){e=A("div"),n=A("form"),s=A("div"),i=A("div"),r=A("label"),r.textContent="pago",o=A("input"),a=Z(),c=A("label"),c.textContent="valor sesion",l=A("input"),u=Z(),h=A("div"),d=A("label"),d.textContent="Dia Sesion",p=A("input"),m=Z(),b=A("label"),b.textContent="Fecha Pago",v=A("input"),P=Z(),_=A("div"),M=A("button"),M.textContent="update",S=Z(),R=A("button"),R.textContent="delete",X=Z(),F=A("button"),F.textContent="Agregar sesión",re=Z(),K=A("select");for(let z=0;z<Y.length;z+=1)Y[z].c();Be=Z(),we=A("button"),be=ee("registros mes "),ze=ee(t[4]),g(r,"for","valorPago"),g(r,"class","svelte-1imwuid"),g(o,"name","valorPago"),g(o,"type","number"),g(o,"step","100"),g(o,"min","0"),g(o,"placeholder","Valor pago"),g(o,"class","svelte-1imwuid"),g(c,"for","valorSesion"),g(c,"class","svelte-1imwuid"),g(l,"name","valorSesion"),g(l,"type","number"),g(l,"step","100"),g(l,"min","0"),g(l,"placeholder","Valor sesión"),g(l,"class","svelte-1imwuid"),g(i,"id","inputsFormSesionesI"),g(i,"class","svelte-1imwuid"),g(d,"for","diaSesion"),g(d,"class","svelte-1imwuid"),g(p,"name","diaSesion"),g(p,"type","date"),g(p,"placeholder","Día sesión"),g(p,"class","svelte-1imwuid"),g(b,"for","fechaPago"),g(b,"class","svelte-1imwuid"),g(v,"name","fechaPago"),g(v,"type","date"),g(v,"placeholder","Fecha pago"),g(v,"class","svelte-1imwuid"),g(h,"id","inputsFormSesionesD"),g(h,"class","svelte-1imwuid"),g(M,"class","svelte-1imwuid"),g(R,"class","svelte-1imwuid"),g(F,"class","svelte-1imwuid"),g(K,"name","mes"),g(K,"id","mesRegistro"),g(K,"class","svelte-1imwuid"),t[4]===void 0&&rn(()=>t[29].call(K)),g(we,"class","svelte-1imwuid"),g(_,"id","botonesFormSesiones"),g(_,"class","buttons svelte-1imwuid"),g(s,"id","form-Sesiones"),g(s,"class","svelte-1imwuid"),g(n,"class","svelte-1imwuid"),g(e,"id","contenedor-form-sesiones"),g(e,"class","svelte-1imwuid")},m(z,ce){ge(z,e,ce),w(e,n),w(n,s),w(s,i),w(i,r),w(i,o),_e(o,t[6]),w(i,a),w(i,c),w(i,l),_e(l,t[7]),w(s,u),w(s,h),w(h,d),w(h,p),_e(p,t[8]),w(h,m),w(h,b),w(h,v),_e(v,t[9]),w(s,P),w(s,_),w(_,M),w(_,S),w(_,R),w(_,X),w(_,F),w(_,re),w(_,K);for(let ne=0;ne<Y.length;ne+=1)Y[ne]&&Y[ne].m(K,null);xt(K,t[4]),w(_,Be),w(_,we),w(we,be),w(we,ze),fe||(Ve=[J(o,"input",t[23]),J(l,"input",t[24]),J(p,"input",t[25]),J(v,"input",t[26]),J(M,"click",t[27]),J(R,"click",t[28]),J(F,"click",t[14]),J(K,"change",t[17]),J(K,"change",t[29]),J(we,"click",t[30]),J(n,"submit",Zd(t[21]))],fe=!0)},p(z,ce){if(ce[0]&64&&yi(o.value)!==z[6]&&_e(o,z[6]),ce[0]&128&&yi(l.value)!==z[7]&&_e(l,z[7]),ce[0]&256&&_e(p,z[8]),ce[0]&512&&_e(v,z[9]),ce[0]&4096){Ge=z[12];let ne;for(ne=0;ne<Ge.length;ne+=1){const yt=Cl(z,Ge,ne);Y[ne]?Y[ne].p(yt,ce):(Y[ne]=kl(yt),Y[ne].c(),Y[ne].m(K,null))}for(;ne<Y.length;ne+=1)Y[ne].d(1);Y.length=Ge.length}ce[0]&4112&&xt(K,z[4]),ce[0]&16&&tt(ze,z[4])},d(z){z&&de(e),$i(Y,z),fe=!1,lt(Ve)}}}function kl(t){let e,n=`${t[40].nro.toString().padStart(2,"0")} - ${t[40].nombre}`,s;return{c(){e=A("option"),s=ee(n),e.__value=t[40].nro,e.value=e.__value,g(e,"class","svelte-1imwuid")},m(i,r){ge(i,e,r),w(e,s)},p:pe,d(i){i&&de(e)}}}function gE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,b,v,P=t[0],_=[];for(let S=0;S<P.length;S+=1)_[S]=Al(Sl(t,P,S));d=new fE({props:{registrosMesActual:t[5],sumaValorPagoPorPaciente:t[18]}});let M=pE(t);return{c(){e=A("main"),n=A("body"),s=A("h4"),i=ee("Paciente: "),r=ee(t[10]),o=ee(", "),a=ee(t[11]),c=Z(),l=A("div"),u=A("select");for(let S=0;S<_.length;S+=1)_[S].c();h=Z(),Mn(d.$$.fragment),p=Z(),M&&M.c(),g(s,"class","svelte-1imwuid"),g(u,"id","select-sesiones"),g(u,"size",5),g(u,"class","svelte-1imwuid"),t[1]===void 0&&rn(()=>t[22].call(u)),g(l,"id","select"),g(l,"class","svelte-1imwuid"),g(n,"class","svelte-1imwuid"),g(e,"class","svelte-1imwuid")},m(S,R){ge(S,e,R),w(e,n),w(n,s),w(s,i),w(s,r),w(s,o),w(s,a),w(n,c),w(n,l),w(l,u);for(let X=0;X<_.length;X+=1)_[X]&&_[X].m(u,null);xt(u,t[1]),w(l,h),on(d,l,null),w(n,p),M&&M.m(n,null),m=!0,b||(v=[J(u,"change",t[13]),J(u,"change",t[22])],b=!0)},p(S,R){if((!m||R[0]&1024)&&tt(r,S[10]),(!m||R[0]&2048)&&tt(a,S[11]),R[0]&25){P=S[0];let F;for(F=0;F<P.length;F+=1){const re=Sl(S,P,F);_[F]?_[F].p(re,R):(_[F]=Al(re),_[F].c(),_[F].m(u,null))}for(;F<_.length;F+=1)_[F].d(1);_.length=P.length}R[0]&3&&xt(u,S[1]);const X={};R[0]&32&&(X.registrosMesActual=S[5]),d.$set(X),M.p(S,R)},i(S){m||(_t(d.$$.fragment,S),m=!0)},o(S){Ft(d.$$.fragment,S),m=!1},d(S){S&&de(e),$i(_,S),an(d),M&&M.d(),b=!1,lt(v)}}}function mE(t,e,n){let s,i,r;Dt(t,Ui,T=>n(3,s=T)),Dt(t,Mo,T=>n(10,i=T)),Dt(t,xo,T=>n(11,r=T));let{sesiones:o}=e,a,c,l;Ol(()=>{const T=[],$=wt($e,"sesiones"),Ue=wt($e,"Pacientes"),We=wt($e,"planes"),Sr=An($,pi("diaSesion")),At=An(Ue,pi("apellido")),Ir=An(We,pi("plan")),Wt=mi(Sr,et=>{n(0,o=et.docs.map(ns=>({id:ns.id,...ns.data()})));const vt=(ns,Xa)=>ns.diaSesion<Xa.diaSesion?-1:ns.diaSesion>Xa.diaSesion?1:0;o.sort(vt)});console.log("desde onMount CRUDSesiones",o),T.push(Wt);const kt=mi(At,et=>{n(19,a=et.docs.map(vt=>({id:vt.id,...vt.data()})))}),Qt=mi(Ir,et=>{n(20,c=et.docs.map(vt=>({id:vt.id,...vt.data()})))});return T.push(kt),T.push(Qt),()=>{T.forEach(et=>et())}});const u=new Date;let h=u.getMonth()+1,d=u.getFullYear(),p=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}],m,b,v=0;const P=T=>{n(1,m=T.target.value),console.log(o),n(2,b=o.find($=>$.id===m)),console.log("selectedSession",b),n(6,R=b.valorPago),n(7,X=b.valorSesion),n(9,re=b.fechaPago),n(8,F=b.diaSesion)},_=async()=>{console.log("Add sesion",b);try{const T=await md(wt($e,"sesiones"),{valorPago:R,valorSesion:X,diaSesion:F,fechaPago:re,pacienteID:s});console.log("sesion agregada"),On({text:"Nueva sesion agregada"}).showToast(),n(1,m=T.id)}catch(T){console.error(T)}},M=async T=>{console.log("Update sesion",T);try{await Fa(Hn($e,"sesiones",T.id),{valorPago:R,valorSesion:X,fechaPago:re,diaSesion:F}),On({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch($){console.log($)}},S=async T=>{console.log("Delete sesion",T);try{await ko(Hn($e,"sesiones",T.id)),On({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch($){console.error($)}};let R=5e3,X=5e3,F=new Date().toISOString().slice(0,10),re=new Date().toISOString().slice(0,10),K=h.toString().padStart(2,"0"),Be=d.toString(),we=`${Be}-${K}-01`,be=`${Be}-${K}-31`;const ze=async()=>{l||n(4,l=h);const T=wt($e,"sesiones");console.log(`mesActual ${h} - mesSeleccionado ${l} `),K=h.toString().padStart(2,"0");var $=l.toString().padStart(2,"0");console.log(`mesActualFormateado ${K} - mesSeleccionadoFormateado ${$}`),h!=l?(we=`${Be}-${$}-01`,be=`${Be}-${$}-31`):(we=`${Be}-${K}-01`,be=`${Be}-${K}-31`);const Ue=An(T,Io("diaSesion",">=",we),Io("diaSesion","<=",be));try{const We=await Ao(Ue),Sr=We.docs.map(At=>At.data());return console.log("sesiones por mes actual",Sr),n(5,v=0),We.forEach(At=>{let Ir=At.data().pacienteID;const Wt=a.find(et=>et.id==Ir);console.log(Wt);var kt=At.data().valorPago;if(kt==null&&(kt=0),typeof kt=="number")if(Wt.plan=="particular")n(5,v+=kt),console.log(`paciente ${Wt.apellido}, valor pago ${At.data().valorPago}, total acumulado ${v}`);else{const et=Wt.plan;console.log("planPacienteActual",et);var Qt=c.find(vt=>vt.plan==et);console.log(`planActual ${Qt} - pagoSesion ${kt} - planActual.valorOs ${Qt.valorOs}`),n(5,v+=Qt.valorOs+kt),console.log(`paciente ${Wt.apellido}, fechaSesion: ${At.data().diaSesion}, valor Os + Coseguro$${Qt.valorOs+Qt.valorCoseguro}, total acumulado ${v}`)}}),console.log("Total pagos mes actual: ",v),v}catch(We){return console.error("Error al obtener las sesiones y los pagos:",We),[]}},fe=()=>o.reduce((T,$)=>T+$.valorPago,0),Ve=T=>o.filter(Ue=>Ue.pacienteID===T&&Ue.diaSesion.slice(5,7)===l.toString().padStart(2,"0")).reduce((Ue,We)=>Ue+We.valorPago,0);function Ge(T){rf.call(this,t,T)}function Y(){m=vi(this),n(1,m),n(0,o)}function z(){R=yi(this.value),n(6,R)}function ce(){X=yi(this.value),n(7,X)}function ne(){F=this.value,n(8,F)}function yt(){re=this.value,n(9,re)}const C=()=>M(b),se=()=>S(b);function Ze(){l=vi(this),n(4,l),n(12,p)}const Gt=()=>ze();return t.$$set=T=>{"sesiones"in T&&n(0,o=T.sesiones)},t.$$.update=()=>{t.$$.dirty[0]&1572865&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",c),t.$$.dirty[0]&7&&(n(2,b=o.find(T=>T.id===m)),console.log(b||"sin seleccion de sesion")),t.$$.dirty[0]&8&&Ve(s)},fe(),ze(),[o,m,b,s,l,v,R,X,F,re,i,r,p,P,_,M,S,ze,Ve,a,c,Ge,Y,z,ce,ne,yt,C,se,Ze,Gt]}class yE extends gn{constructor(e){super(),pn(this,e,mE,gE,jt,{sesiones:0},null,[-1,-1])}}function vE(t){let e,n,s,i,r,o,a,c,l;return r=new uE({}),c=new yE({props:{sesiones:t[0]}}),{c(){e=A("body"),n=A("div"),s=A("h5"),s.textContent="CRUD Pacientes",i=Z(),Mn(r.$$.fragment),o=Z(),a=A("div"),Mn(c.$$.fragment),g(n,"class","contenedor-pacientes svelte-1y3ujd1"),g(a,"class","contenedor-sesiones svelte-1y3ujd1"),g(e,"class","svelte-1y3ujd1")},m(u,h){ge(u,e,h),w(e,n),w(n,s),w(n,i),on(r,n,null),w(e,o),w(e,a),on(c,a,null),l=!0},p:pe,i(u){l||(_t(r.$$.fragment,u),_t(c.$$.fragment,u),l=!0)},o(u){Ft(r.$$.fragment,u),Ft(c.$$.fragment,u),l=!1},d(u){u&&de(e),an(r),an(c)}}}function wE(t){return[[]]}class bE extends gn{constructor(e){super(),pn(this,e,wE,vE,jt,{})}}function EE(t){let e,n,s;return n=new bE({}),{c(){e=A("div"),Mn(n.$$.fragment),g(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){ge(i,e,r),on(n,e,null),s=!0},p:pe,i(i){s||(_t(n.$$.fragment,i),s=!0)},o(i){Ft(n.$$.fragment,i),s=!1},d(i){i&&de(e),an(n)}}}function _E(t){let e,n,s,i,r,o;return{c(){e=A("div"),n=A("h1"),n.textContent="ingrese la contraseña:",s=Z(),i=A("input"),g(n,"class","svelte-uueu6x"),g(i,"type","password"),g(i,"class","svelte-uueu6x"),g(e,"class","ingreso svelte-uueu6x")},m(a,c){ge(a,e,c),w(e,n),w(e,s),w(e,i),_e(i,t[1]),r||(o=[J(i,"input",t[3]),J(i,"input",t[2])],r=!0)},p(a,c){c&2&&i.value!==a[1]&&_e(i,a[1])},i:pe,o:pe,d(a){a&&de(e),r=!1,lt(o)}}}function TE(t){let e,n,s,i;const r=[_E,EE],o=[];function a(c,l){return c[0]==="nada"?0:c[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=A("main"),s&&s.c(),g(e,"class","svelte-uueu6x")},m(c,l){ge(c,e,l),~n&&o[n].m(e,null),i=!0},p(c,[l]){let u=n;n=a(c),n===u?~n&&o[n].p(c,l):(s&&(uf(),Ft(o[u],1,1,()=>{o[u]=null}),hf()),~n?(s=o[n],s?s.p(c,l):(s=o[n]=r[n](c),s.c()),_t(s,1),s.m(e,null)):s=null)},i(c){i||(_t(s),i=!0)},o(c){Ft(s),i=!1},d(c){c&&de(e),~n&&o[n].d()}}}function CE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class SE extends gn{constructor(e){super(),pn(this,e,CE,TE,jt,{})}}new SE({target:document.getElementById("app")});
