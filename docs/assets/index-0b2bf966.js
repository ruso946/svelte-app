(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ye(){}function vl(t){return t()}function qa(){return Object.create(null)}function rt(t){t.forEach(vl)}function wl(t){return typeof t=="function"}function nn(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $d(t){return Object.keys(t).length===0}function jd(t,...e){if(t==null)return ye;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function jt(t,e,n){t.$$.on_destroy.push(jd(e,n))}function Wn(t,e,n){return t.set(n),e}function w(t,e){t.appendChild(e)}function Fe(t,e,n){t.insertBefore(e,n||null)}function Re(t){t.parentNode&&t.parentNode.removeChild(t)}function Ao(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function ae(t){return document.createTextNode(t)}function ee(){return ae(" ")}function bl(){return ae("")}function te(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function qd(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ci(t){return t===""?null:+t}function Hd(t){return Array.from(t.childNodes)}function at(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function me(t,e){t.value=e??""}function Tn(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function zd(t){for(const e of t.options)if(!e.disabled)return e}function ko(t){const e=t.querySelector(":checked")||zd(t);return e&&e.__value}function Ws(t,e,n){t.classList[n?"add":"remove"](e)}function Kd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let cs;function es(t){cs=t}function Do(){if(!cs)throw new Error("Function called outside component initialization");return cs}function El(t){Do().$$.on_mount.push(t)}function Gd(t){Do().$$.on_destroy.push(t)}function Tl(){const t=Do();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Kd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Wd(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const hn=[],Ha=[];let gn=[];const za=[],Qd=Promise.resolve();let Rr=!1;function Yd(){Rr||(Rr=!0,Qd.then(_l))}function _n(t){gn.push(t)}const pr=new Set;let ln=0;function _l(){if(ln!==0)return;const t=cs;do{try{for(;ln<hn.length;){const e=hn[ln];ln++,es(e),Xd(e.$$)}}catch(e){throw hn.length=0,ln=0,e}for(es(null),hn.length=0,ln=0;Ha.length;)Ha.pop()();for(let e=0;e<gn.length;e+=1){const n=gn[e];pr.has(n)||(pr.add(n),n())}gn.length=0}while(hn.length);for(;za.length;)za.pop()();Rr=!1,pr.clear(),es(t)}function Xd(t){if(t.fragment!==null){t.update(),rt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_n)}}function Jd(t){const e=[],n=[];gn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),gn=e}const si=new Set;let qt;function Zd(){qt={r:0,c:[],p:qt}}function ef(){qt.r||rt(qt.c),qt=qt.p}function Nt(t,e){t&&t.i&&(si.delete(t),t.i(e))}function Qt(t,e,n,s){if(t&&t.o){if(si.has(t))return;si.add(t),qt.c.push(()=>{si.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ls(t){t&&t.c()}function Cn(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||_n(()=>{const o=t.$$.on_mount.map(vl).filter(wl);t.$$.on_destroy?t.$$.on_destroy.push(...o):rt(o),t.$$.on_mount=[]}),r.forEach(_n)}function In(t,e){const n=t.$$;n.fragment!==null&&(Jd(n.after_update),rt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tf(t,e){t.$$.dirty[0]===-1&&(hn.push(t),Yd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Fn(t,e,n,s,i,r,o,a=[-1]){const c=cs;es(t);const l=t.$$={fragment:null,ctx:[],props:r,update:ye,not_equal:i,bound:qa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:qa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&tf(t,h)),d}):[],l.update(),u=!0,rt(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Hd(e.target);l.fragment&&l.fragment.l(h),h.forEach(Re)}else l.fragment&&l.fragment.c();e.intro&&Nt(t.$$.fragment),Cn(t,e.target,e.anchor,e.customElement),_l()}es(c)}class Bn{$destroy(){In(this,1),this.$destroy=ye}$on(e,n){if(!wl(n))return ye;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!$d(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ka(t,e,n){const s=t.slice();return s[12]=e[n],s}function Ga(t){let e,n=t[12]+"",s,i;return{c(){e=I("option"),s=ae(n),e.__value=i=t[12],e.value=e.__value},m(r,o){Fe(r,e,o),w(e,s)},p(r,o){o&4&&n!==(n=r[12]+"")&&at(s,n),o&4&&i!==(i=r[12])&&(e.__value=i,e.value=e.__value)},d(r){r&&Re(e)}}}function nf(t){let e,n,s,i,r,o,a=t[2],c=[];for(let l=0;l<a.length;l+=1)c[l]=Ga(Ka(t,a,l));return{c(){e=I("div"),n=I("input"),s=ee(),i=I("select");for(let l=0;l<c.length;l+=1)c[l].c();g(n,"type","checkbox"),g(n,"name","CheckBoxParticular"),g(n,"id","CheckBoxParticular"),g(i,"name","plan"),g(i,"id","plan"),g(i,"class","svelte-1de4xhy"),t[1]===void 0&&_n(()=>t[7].call(i)),Ws(i,"SelectPlanVisible",t[0]),Ws(i,"SelectPlanHidden",t[3]),g(e,"id","selectPlanContainer"),g(e,"class","svelte-1de4xhy")},m(l,u){Fe(l,e,u),w(e,n),n.checked=t[0],w(e,s),w(e,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null);Tn(i,t[1]),r||(o=[te(n,"change",t[6]),te(n,"change",t[4]),te(i,"change",t[7]),te(i,"change",t[5])],r=!0)},p(l,[u]){if(u&1&&(n.checked=l[0]),u&4){a=l[2];let h;for(h=0;h<a.length;h+=1){const d=Ka(l,a,h);c[h]?c[h].p(d,u):(c[h]=Ga(d),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}u&6&&Tn(i,l[1]),u&1&&Ws(i,"SelectPlanVisible",l[0]),u&8&&Ws(i,"SelectPlanHidden",l[3])},i:ye,o:ye,d(l){l&&Re(e),Ao(c,l),r=!1,rt(o)}}}function sf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,o;const a=m=>{n(0,r=m)},c=()=>{u("clickCheckPlan",{valor:{SelectPlanVisible:r}})},l=m=>{var E=m.target.checked;a(E),c()},u=Tl(),h=()=>{u("cambioPlan",{valor:{planSeleccionado:i}})};function d(){r=this.checked,n(0,r)}function p(){i=ko(this),n(1,i),n(2,s)}return t.$$set=m=>{"planes"in m&&n(2,s=m.planes),"planSeleccionado"in m&&n(1,i=m.planSeleccionado),"SelectPlanVisible"in m&&n(0,r=m.SelectPlanVisible)},t.$$.update=()=>{t.$$.dirty&1&&n(3,o=!r)},[r,i,s,o,l,h,d,p]}class rf extends Bn{constructor(e){super(),Fn(this,e,sf,nf,nn,{planes:2,planSeleccionado:1,SelectPlanVisible:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},of=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):of(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new af;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class af extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cf=function(t){const e=Cl(t);return Il.encodeByteArray(e,!0)},li=function(t){return cf(t).replace(/\./g,"")},lf=function(t){try{return Il.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hf=()=>uf().__FIREBASE_DEFAULTS__,df=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ff=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lf(t[1]);return e&&JSON.parse(e)},Sl=()=>{try{return hf()||df()||ff()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pf=t=>{var e,n;return(n=(e=Sl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Al=t=>{const e=pf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},gf=()=>{var t;return(t=Sl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function kl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[li(JSON.stringify(n)),li(JSON.stringify(o)),a].join(".")}function yf(){try{return typeof indexedDB=="object"}catch{return!1}}function vf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wf,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dl.prototype.create)}}class Dl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?bf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,s)}}function bf(t,e){return t.replace(Ef,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ef=/\{\$([^}]+)}/g;function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Wa(r)&&Wa(o)){if(!Lr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Wa(t){return t!==null&&typeof t=="object"}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class Tf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cf(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_f(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _f(t){return t===$t?void 0:t}function Cf(t){return t.instantiationMode==="EAGER"}/**
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
 */class If{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Sf={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Af=Q.INFO,kf={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Df=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=kf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=Af,this._logHandler=Df,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Nf=(t,e)=>e.some(n=>t instanceof n);let Qa,Ya;function Pf(){return Qa||(Qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Of(){return Ya||(Ya=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pl=new WeakMap,xr=new WeakMap,Ol=new WeakMap,gr=new WeakMap,No=new WeakMap;function Rf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(It(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pl.set(n,t)}).catch(()=>{}),No.set(e,t),e}function Lf(t){if(xr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xr.set(t,e)}let Mr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ol.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xf(t){Mr=t(Mr)}function Mf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mr(this),e,...n);return Ol.set(s,e.sort?e.sort():[e]),It(s)}:Of().includes(t)?function(...e){return t.apply(mr(this),e),It(Pl.get(this))}:function(...e){return It(t.apply(mr(this),e))}}function Ff(t){return typeof t=="function"?Mf(t):(t instanceof IDBTransaction&&Lf(t),Nf(t,Pf())?new Proxy(t,Mr):t)}function It(t){if(t instanceof IDBRequest)return Rf(t);if(gr.has(t))return gr.get(t);const e=Ff(t);return e!==t&&(gr.set(t,e),No.set(e,t)),e}const mr=t=>No.get(t);function Bf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=It(o);return s&&o.addEventListener("upgradeneeded",c=>{s(It(o.result),c.oldVersion,c.newVersion,It(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Vf=["get","getKey","getAll","getAllKeys","count"],Uf=["put","add","delete","clear"],yr=new Map;function Xa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yr.get(e))return yr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Uf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Vf.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return yr.set(e,r),r}xf(t=>({...t,get:(e,n,s)=>Xa(e,n)||t.get(e,n,s),has:(e,n)=>!!Xa(e,n)||t.has(e,n)}));/**
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
 */class $f{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fr="@firebase/app",Ja="0.9.4";/**
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
 */const Yt=new Nl("@firebase/app"),qf="@firebase/app-compat",Hf="@firebase/analytics-compat",zf="@firebase/analytics",Kf="@firebase/app-check-compat",Gf="@firebase/app-check",Wf="@firebase/auth",Qf="@firebase/auth-compat",Yf="@firebase/database",Xf="@firebase/database-compat",Jf="@firebase/functions",Zf="@firebase/functions-compat",ep="@firebase/installations",tp="@firebase/installations-compat",np="@firebase/messaging",sp="@firebase/messaging-compat",ip="@firebase/performance",rp="@firebase/performance-compat",op="@firebase/remote-config",ap="@firebase/remote-config-compat",cp="@firebase/storage",lp="@firebase/storage-compat",up="@firebase/firestore",hp="@firebase/firestore-compat",dp="firebase",fp="9.17.2";/**
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
 */const Br="[DEFAULT]",pp={[Fr]:"fire-core",[qf]:"fire-core-compat",[zf]:"fire-analytics",[Hf]:"fire-analytics-compat",[Gf]:"fire-app-check",[Kf]:"fire-app-check-compat",[Wf]:"fire-auth",[Qf]:"fire-auth-compat",[Yf]:"fire-rtdb",[Xf]:"fire-rtdb-compat",[Jf]:"fire-fn",[Zf]:"fire-fn-compat",[ep]:"fire-iid",[tp]:"fire-iid-compat",[np]:"fire-fcm",[sp]:"fire-fcm-compat",[ip]:"fire-perf",[rp]:"fire-perf-compat",[op]:"fire-rc",[ap]:"fire-rc-compat",[cp]:"fire-gcs",[lp]:"fire-gcs-compat",[up]:"fire-fst",[hp]:"fire-fst-compat","fire-js":"fire-js",[dp]:"fire-js-all"};/**
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
 */const ui=new Map,Vr=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(Vr.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Vr.set(e,t);for(const n of ui.values())gp(n,t);return!0}function Rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const mp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new Dl("app","Firebase",mp);/**
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
 */class yp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const Ll=fp;function xl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Br,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(n||(n=gf()),!n)throw St.create("no-options");const r=ui.get(i);if(r){if(Lr(n,r.options)&&Lr(s,r.config))return r;throw St.create("duplicate-app",{appName:i})}const o=new If(i);for(const c of Vr.values())o.addComponent(c);const a=new yp(n,s,o);return ui.set(i,a),a}function Ml(t=Br){const e=ui.get(t);if(!e&&t===Br)return xl();if(!e)throw St.create("no-app",{appName:t});return e}function At(t,e,n){var s;let i=(s=pp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}us(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vp="firebase-heartbeat-database",wp=1,hs="firebase-heartbeat-store";let vr=null;function Fl(){return vr||(vr=Bf(vp,wp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hs)}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),vr}async function bp(t){try{return(await Fl()).transaction(hs).objectStore(hs).get(Bl(t))}catch(e){if(e instanceof sn)Yt.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function Za(t,e){try{const s=(await Fl()).transaction(hs,"readwrite");return await s.objectStore(hs).put(e,Bl(t)),s.done}catch(n){if(n instanceof sn)Yt.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(s.message)}}}function Bl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ep=1024,Tp=30*24*60*60*1e3;class _p{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ip(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ec();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ec(),{heartbeatsToSend:n,unsentEntries:s}=Cp(this._heartbeatsCache.heartbeats),i=li(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ec(){return new Date().toISOString().substring(0,10)}function Cp(t,e=Ep){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),tc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ip{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yf()?vf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tc(t){return li(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Sp(t){us(new Sn("platform-logger",e=>new $f(e),"PRIVATE")),us(new Sn("heartbeat",e=>new _p(e),"PRIVATE")),At(Fr,Ja,t),At(Fr,Ja,"esm2017"),At("fire-js","")}Sp("");var Ap="firebase",kp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(Ap,kp,"app");var Dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,Po=Po||{},O=Dp||self;function hi(){}function Ni(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ss(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Np(t){return Object.prototype.hasOwnProperty.call(t,wr)&&t[wr]||(t[wr]=++Pp)}var wr="closure_uid_"+(1e9*Math.random()>>>0),Pp=0;function Op(t,e,n){return t.call.apply(t.bind,arguments)}function Rp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=Op:ke=Rp,ke.apply(null,arguments)}function Qs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function _e(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function xt(){this.s=this.s,this.o=this.o}var Lp=0;xt.prototype.s=!1;xt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Lp!=0)&&Np(this)};xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Oo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function nc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ni(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function De(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var xp=function(){if(!O.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{O.addEventListener("test",hi,e),O.removeEventListener("test",hi,e)}catch{}return t}();function di(t){return/^[\s\xa0]*$/.test(t)}var sc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function br(t,e){return t<e?-1:t>e?1:0}function Pi(){var t=O.navigator;return t&&(t=t.userAgent)?t:""}function ot(t){return Pi().indexOf(t)!=-1}function Ro(t){return Ro[" "](t),t}Ro[" "]=hi;function Mp(t){var e=Vp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Fp=ot("Opera"),An=ot("Trident")||ot("MSIE"),Ul=ot("Edge"),Ur=Ul||An,$l=ot("Gecko")&&!(Pi().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge"))&&!(ot("Trident")||ot("MSIE"))&&!ot("Edge"),Bp=Pi().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge");function jl(){var t=O.document;return t?t.documentMode:void 0}var fi;e:{var Er="",Tr=function(){var t=Pi();if($l)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ul)return/Edge\/([\d\.]+)/.exec(t);if(An)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Bp)return/WebKit\/(\S+)/.exec(t);if(Fp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tr&&(Er=Tr?Tr[1]:""),An){var _r=jl();if(_r!=null&&_r>parseFloat(Er)){fi=String(_r);break e}}fi=Er}var Vp={};function Up(){return Mp(function(){let t=0;const e=sc(String(fi)).split("."),n=sc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=br(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||br(i[2].length==0,r[2].length==0)||br(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var $r;if(O.document&&An){var ic=jl();$r=ic||parseInt(fi,10)||void 0}else $r=void 0;var $p=$r;function ds(t,e){if(De.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($l){e:{try{Ro(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ds.X.h.call(this)}}_e(ds,De);var jp={2:"touch",3:"pen",4:"mouse"};ds.prototype.h=function(){ds.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var As="closure_listenable_"+(1e6*Math.random()|0),qp=0;function Hp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++qp,this.ba=this.ea=!1}function Oi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Lo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ql(t){const e={};for(const n in t)e[n]=t[n];return e}const rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hl(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<rc.length;r++)n=rc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ri(t){this.src=t,this.g={},this.h=0}Ri.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=qr(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Hp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function jr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Vl(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Oi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var xo="closure_lm_"+(1e6*Math.random()|0),Cr={};function zl(t,e,n,s,i){if(s&&s.once)return Gl(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)zl(t,e[r],n,s,i);return null}return n=Bo(n),t&&t[As]?t.N(e,n,Ss(s)?!!s.capture:!!s,i):Kl(t,e,n,!1,s,i)}function Kl(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ss(i)?!!i.capture:!!i,a=Fo(t);if(a||(t[xo]=a=new Ri(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=zp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)xp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ql(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zp(){function t(n){return e.call(t.src,t.listener,n)}const e=Kp;return t}function Gl(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gl(t,e[r],n,s,i);return null}return n=Bo(n),t&&t[As]?t.O(e,n,Ss(s)?!!s.capture:!!s,i):Kl(t,e,n,!0,s,i)}function Wl(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Wl(t,e[r],n,s,i);else s=Ss(s)?!!s.capture:!!s,n=Bo(n),t&&t[As]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=qr(r,n,s,i),-1<n&&(Oi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qr(e,n,s,i)),(n=-1<t?e[t]:null)&&Mo(n))}function Mo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[As])jr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ql(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Fo(e))?(jr(n,t),n.h==0&&(n.src=null,e[xo]=null)):Oi(t)}}}function Ql(t){return t in Cr?Cr[t]:Cr[t]="on"+t}function Kp(t,e){if(t.ba)t=!0;else{e=new ds(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Mo(t),t=n.call(s,e)}return t}function Fo(t){return t=t[xo],t instanceof Ri?t:null}var Ir="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bo(t){return typeof t=="function"?t:(t[Ir]||(t[Ir]=function(e){return t.handleEvent(e)}),t[Ir])}function ve(){xt.call(this),this.i=new Ri(this),this.P=this,this.I=null}_e(ve,xt);ve.prototype[As]=!0;ve.prototype.removeEventListener=function(t,e,n,s){Wl(this,t,e,n,s)};function Ee(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new De(e,t);else if(e instanceof De)e.target=e.target||t;else{var i=e;e=new De(s,t),Hl(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ys(o,s,!0,e)&&i}if(o=e.g=t,i=Ys(o,s,!0,e)&&i,i=Ys(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ys(o,s,!1,e)&&i}ve.prototype.M=function(){if(ve.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Oi(n[s]);delete t.g[e],t.h--}}this.I=null};ve.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ve.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ys(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&jr(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Vo=O.JSON.stringify;function Gp(){var t=Jl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Wp{constructor(){this.h=this.g=null}add(e,n){const s=Yl.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Yl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Qp,t=>t.reset());class Qp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Yp(t){O.setTimeout(()=>{throw t},0)}function Xl(t,e){Hr||Xp(),zr||(Hr(),zr=!0),Jl.add(t,e)}var Hr;function Xp(){var t=O.Promise.resolve(void 0);Hr=function(){t.then(Jp)}}var zr=!1,Jl=new Wp;function Jp(){for(var t;t=Gp();){try{t.h.call(t.g)}catch(n){Yp(n)}var e=Yl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zr=!1}function Li(t,e){ve.call(this),this.h=t||1,this.g=e||O,this.j=ke(this.lb,this),this.l=Date.now()}_e(Li,ve);S=Li.prototype;S.ca=!1;S.R=null;S.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ee(this,"tick"),this.ca&&(Uo(this),this.start()))}};S.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}S.M=function(){Li.X.M.call(this),Uo(this),delete this.g};function $o(t,e,n){if(typeof t=="function")n&&(t=ke(t,n));else if(t&&typeof t.handleEvent=="function")t=ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:O.setTimeout(t,e||0)}function Zl(t){t.g=$o(()=>{t.g=null,t.i&&(t.i=!1,Zl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Zp extends xt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zl(this)}M(){super.M(),this.g&&(O.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(t){xt.call(this),this.h=t,this.g={}}_e(fs,xt);var oc=[];function eu(t,e,n,s){Array.isArray(n)||(n&&(oc[0]=n.toString()),n=oc);for(var i=0;i<n.length;i++){var r=zl(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function tu(t){Lo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mo(e)},t),t.g={}}fs.prototype.M=function(){fs.X.M.call(this),tu(this)};fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xi(){this.g=!0}xi.prototype.Aa=function(){this.g=!1};function eg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function tg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function pn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sg(t,n)+(s?" "+s:"")})}function ng(t,e){t.info(function(){return"TIMEOUT: "+e})}xi.prototype.info=function(){};function sg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vo(n)}catch{return e}}var rn={},ac=null;function Mi(){return ac=ac||new ve}rn.Pa="serverreachability";function nu(t){De.call(this,rn.Pa,t)}_e(nu,De);function ps(t){const e=Mi();Ee(e,new nu(e))}rn.STAT_EVENT="statevent";function su(t,e){De.call(this,rn.STAT_EVENT,t),this.stat=e}_e(su,De);function Me(t){const e=Mi();Ee(e,new su(e,t))}rn.Qa="timingevent";function iu(t,e){De.call(this,rn.Qa,t),this.size=e}_e(iu,De);function ks(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return O.setTimeout(function(){t()},e)}var Fi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ru={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function jo(){}jo.prototype.h=null;function cc(t){return t.h||(t.h=t.i())}function ou(){}var Ds={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function qo(){De.call(this,"d")}_e(qo,De);function Ho(){De.call(this,"c")}_e(Ho,De);var Kr;function Bi(){}_e(Bi,jo);Bi.prototype.g=function(){return new XMLHttpRequest};Bi.prototype.i=function(){return{}};Kr=new Bi;function Ns(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new fs(this),this.O=ig,t=Ur?125:void 0,this.T=new Li(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var ig=45e3,Gr={},pi={};S=Ns.prototype;S.setTimeout=function(t){this.O=t};function Wr(t,e,n){t.K=1,t.v=Ui(wt(e)),t.s=n,t.P=!0,cu(t,null)}function cu(t,e){t.F=Date.now(),Ps(t),t.A=wt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),mu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new au,t.g=Fu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Zp(ke(t.La,t,t.g),t.N)),eu(t.S,t.g,"readystatechange",t.ib),e=t.H?ql(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ps(),eg(t.j,t.u,t.A,t.m,t.U,t.s)}S.ib=function(t){t=t.target;const e=this.L;e&&yt(t)==3?e.l():this.La(t)};S.La=function(t){try{if(t==this.g)e:{const u=yt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Ur||this.g&&(this.h.h||this.g.fa()||dc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ps(3):ps(2)),Vi(this);var n=this.g.aa();this.Y=n;t:if(lu(this)){var s=dc(this.g);t="";var i=s.length,r=yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),ts(this);var o="";break t}this.h.i=new O.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,tg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!di(a)){var l=a;break t}}l=null}if(n=l)pn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qr(this,n);else{this.i=!1,this.o=3,Me(12),Ht(this),ts(this);break e}}this.P?(uu(this,u,o),Ur&&this.i&&u==3&&(eu(this.S,this.T,"tick",this.hb),this.T.start())):(pn(this.j,this.m,o,null),Qr(this,o)),u==4&&Ht(this),this.i&&!this.I&&(u==4?Ru(this.l,this):(this.i=!1,Ps(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),Ht(this),ts(this)}}}catch{}finally{}};function lu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function uu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=rg(t,n),i==pi){e==4&&(t.o=4,Me(14),s=!1),pn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Gr){t.o=4,Me(15),pn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else pn(t.j,t.m,i,null),Qr(t,i);lu(t)&&i!=pi&&i!=Gr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Me(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xo(e),e.K=!0,Me(11))):(pn(t.j,t.m,n,"[Invalid Chunked Response]"),Ht(t),ts(t))}S.hb=function(){if(this.g){var t=yt(this.g),e=this.g.fa();this.C<e.length&&(Vi(this),uu(this,t,e),this.i&&t!=4&&Ps(this))}};function rg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?pi:(n=Number(e.substring(n,s)),isNaN(n)?Gr:(s+=1,s+n>e.length?pi:(e=e.substr(s,n),t.C=s+n,e)))}S.cancel=function(){this.I=!0,Ht(this)};function Ps(t){t.V=Date.now()+t.O,hu(t,t.O)}function hu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ks(ke(t.gb,t),e)}function Vi(t){t.B&&(O.clearTimeout(t.B),t.B=null)}S.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ng(this.j,this.A),this.K!=2&&(ps(),Me(17)),Ht(this),this.o=2,ts(this)):hu(this,this.V-t)};function ts(t){t.l.G==0||t.I||Ru(t.l,t)}function Ht(t){Vi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uo(t.T),tu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Qr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yr(n.h,t))){if(!t.J&&Yr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)yi(n),qi(n);else break e;Yo(n),Me(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ks(ke(n.cb,n),6e3));if(1>=wu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else zt(n,11)}else if((t.J||n.g==t)&&yi(n),!di(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(zo(r,r.h),r.h=null))}if(s.D){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,re(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Mu(s,s.H?s.ka:null,s.V),o.J){bu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Vi(a),Ps(a)),s.g=o}else Pu(s);0<n.i.length&&Hi(n)}else l[0]!="stop"&&l[0]!="close"||zt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zt(n,7):Qo(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ps(4)}catch{}}function og(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ni(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ag(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ni(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function du(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ni(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ag(t),s=og(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gt){this.h=e!==void 0?e:t.h,gi(this,t.j),this.s=t.s,this.g=t.g,mi(this,t.m),this.l=t.l,e=t.i;var n=new gs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),lc(this,n),this.o=t.o}else t&&(n=String(t).match(fu))?(this.h=!!e,gi(this,n[1]||"",!0),this.s=Yn(n[2]||""),this.g=Yn(n[3]||"",!0),mi(this,n[4]),this.l=Yn(n[5]||"",!0),lc(this,n[6]||"",!0),this.o=Yn(n[7]||"")):(this.h=!!e,this.i=new gs(null,this.h))}Gt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xn(e,uc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xn(e,uc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xn(n,n.charAt(0)=="/"?hg:ug,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xn(n,fg)),t.join("")};function wt(t){return new Gt(t)}function gi(t,e,n){t.j=n?Yn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function mi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function lc(t,e,n){e instanceof gs?(t.i=e,pg(t.i,t.h)):(n||(e=Xn(e,dg)),t.i=new gs(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Ui(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var uc=/[#\/\?@]/g,ug=/[#\?:]/g,hg=/[#\?]/g,dg=/[#\?@]/g,fg=/#/g;function gs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mt(t){t.g||(t.g=new Map,t.h=0,t.i&&cg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=gs.prototype;S.add=function(t,e){Mt(this),this.i=null,t=Vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pu(t,e){Mt(t),e=Vn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gu(t,e){return Mt(t),e=Vn(t,e),t.g.has(e)}S.forEach=function(t,e){Mt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};S.oa=function(){Mt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};S.W=function(t){Mt(this);let e=[];if(typeof t=="string")gu(this,t)&&(e=e.concat(this.g.get(Vn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};S.set=function(t,e){return Mt(this),this.i=null,t=Vn(this,t),gu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function mu(t,e,n){pu(t,e),0<n.length&&(t.i=null,t.g.set(Vn(t,e),Oo(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pg(t,e){e&&!t.j&&(Mt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(pu(this,s),mu(this,i,n))},t)),t.j=e}var gg=class{constructor(e,n){this.h=e,this.g=n}};function yu(t){this.l=t||mg,O.PerformanceNavigationTiming?(t=O.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(O.g&&O.g.Ga&&O.g.Ga()&&O.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mg=10;function vu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wu(t){return t.h?1:t.g?t.g.size:0}function Yr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zo(t,e){t.g?t.g.add(e):t.h=e}function bu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yu.prototype.cancel=function(){if(this.i=Eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Eu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Oo(t.i)}function Ko(){}Ko.prototype.stringify=function(t){return O.JSON.stringify(t,void 0)};Ko.prototype.parse=function(t){return O.JSON.parse(t,void 0)};function yg(){this.g=new Ko}function vg(t,e,n){const s=n||"";try{du(t,function(i,r){let o=i;Ss(i)&&(o=Vo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function wg(t,e){const n=new xi;if(O.Image){const s=new Image;s.onload=Qs(Xs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qs(Xs,n,s,"TestLoadImage: error",!1,e),s.onabort=Qs(Xs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qs(Xs,n,s,"TestLoadImage: timeout",!1,e),O.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Xs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Os(t){this.l=t.ac||null,this.j=t.jb||!1}_e(Os,jo);Os.prototype.g=function(){return new $i(this.l,this.j)};Os.prototype.i=function(t){return function(){return t}}({});function $i(t,e){ve.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Go,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_e($i,ve);var Go=0;S=$i.prototype;S.open=function(t,e){if(this.readyState!=Go)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ms(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||O).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=Go};S.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof O.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Tu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}S.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Rs(this):ms(this),this.readyState==3&&Tu(this)}};S.Va=function(t){this.g&&(this.response=this.responseText=t,Rs(this))};S.Ua=function(t){this.g&&(this.response=t,Rs(this))};S.ga=function(){this.g&&Rs(this)};function Rs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ms(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ms(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bg=O.JSON.parse;function ce(t){ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_u,this.K=this.L=!1}_e(ce,ve);var _u="",Eg=/^https?$/i,Tg=["POST","PUT"];S=ce.prototype;S.Ka=function(t){this.L=t};S.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kr.g(),this.C=this.u?cc(this.u):cc(Kr),this.g.onreadystatechange=ke(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){hc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=O.FormData&&t instanceof O.FormData,!(0<=Vl(Tg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Su(this),0<this.B&&((this.K=_g(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.qa,this)):this.A=$o(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){hc(this,r)}};function _g(t){return An&&Up()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}S.qa=function(){typeof Po<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))};function hc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cu(t),ji(t)}function Cu(t){t.D||(t.D=!0,Ee(t,"complete"),Ee(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ee(this,"complete"),Ee(this,"abort"),ji(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ji(this,!0)),ce.X.M.call(this)};S.Ha=function(){this.s||(this.F||this.v||this.l?Iu(this):this.fb())};S.fb=function(){Iu(this)};function Iu(t){if(t.h&&typeof Po<"u"&&(!t.C[1]||yt(t)!=4||t.aa()!=2)){if(t.v&&yt(t)==4)$o(t.Ha,0,t);else if(Ee(t,"readystatechange"),yt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(fu)[1]||null;if(!i&&O.self&&O.self.location){var r=O.self.location.protocol;i=r.substr(0,r.length-1)}s=!Eg.test(i?i.toLowerCase():"")}n=s}if(n)Ee(t,"complete"),Ee(t,"success");else{t.m=6;try{var o=2<yt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Cu(t)}}finally{ji(t)}}}}function ji(t,e){if(t.g){Su(t);const n=t.g,s=t.C[0]?hi:null;t.g=null,t.C=null,e||Ee(t,"ready");try{n.onreadystatechange=s}catch{}}}function Su(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(O.clearTimeout(t.A),t.A=null)}function yt(t){return t.g?t.g.readyState:0}S.aa=function(){try{return 2<yt(this)?this.g.status:-1}catch{return-1}};S.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bg(e)}};function dc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _u:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ea=function(){return this.m};S.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Au(t){let e="";return Lo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Wo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Au(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ku(t){this.Ca=0,this.i=[],this.j=new xi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qn("baseRetryDelayMs",5e3,t),this.bb=Qn("retryDelaySeedMs",1e4,t),this.$a=Qn("forwardChannelMaxRetries",2,t),this.ta=Qn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new yu(t&&t.concurrentRequestLimit),this.Fa=new yg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}S=ku.prototype;S.ma=8;S.G=1;function Qo(t){if(Du(t),t.G==3){var e=t.U++,n=wt(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),Ls(t,n),e=new Ns(t,t.j,e,void 0),e.K=2,e.v=Ui(wt(n)),n=!1,O.navigator&&O.navigator.sendBeacon&&(n=O.navigator.sendBeacon(e.v.toString(),"")),!n&&O.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ps(e)}xu(t)}function qi(t){t.g&&(Xo(t),t.g.cancel(),t.g=null)}function Du(t){qi(t),t.u&&(O.clearTimeout(t.u),t.u=null),yi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&O.clearTimeout(t.m),t.m=null)}function Hi(t){vu(t.h)||t.m||(t.m=!0,Xl(t.Ja,t),t.C=0)}function Cg(t,e){return wu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ks(ke(t.Ja,t,e),Lu(t,t.C)),t.C++,!0)}S.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ns(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ql(r),Hl(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nu(this,i,e),n=wt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),Ls(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Au(r)))+"&"+e:this.o&&Wo(n,this.o,r)),zo(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,Wr(i,n,null)):Wr(i,n,e),this.G=2}}else this.G==3&&(t?fc(this,t):this.i.length==0||vu(this.h)||fc(this))};function fc(t,e){var n;e?n=e.m:n=t.U++;const s=wt(t.F);re(s,"SID",t.I),re(s,"RID",n),re(s,"AID",t.T),Ls(t,s),t.o&&t.s&&Wo(s,t.o,t.s),n=new Ns(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Nu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),zo(t.h,n),Wr(n,s,e)}function Ls(t,e){t.ia&&Lo(t.ia,function(n,s){re(e,s,n)}),t.l&&du({},function(n,s){re(e,s,n)})}function Nu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ke(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{vg(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Pu(t){t.g||t.u||(t.Z=1,Xl(t.Ia,t),t.A=0)}function Yo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ks(ke(t.Ia,t),Lu(t,t.A)),t.A++,!0)}S.Ia=function(){if(this.u=null,Ou(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ks(ke(this.eb,this),t)}};S.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Me(10),qi(this),Ou(this))};function Xo(t){t.B!=null&&(O.clearTimeout(t.B),t.B=null)}function Ou(t){t.g=new Ns(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=wt(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),Ls(t,e),t.o&&t.s&&Wo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ui(wt(e)),n.s=null,n.P=!0,cu(n,t)}S.cb=function(){this.v!=null&&(this.v=null,qi(this),Yo(this),Me(19))};function yi(t){t.v!=null&&(O.clearTimeout(t.v),t.v=null)}function Ru(t,e){var n=null;if(t.g==e){yi(t),Xo(t),t.g=null;var s=2}else if(Yr(t.h,e))n=e.D,bu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Mi(),Ee(s,new iu(s,n)),Hi(t)}else Pu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Cg(t,e)||s==2&&Yo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:zt(t,5);break;case 4:zt(t,10);break;case 3:zt(t,6);break;default:zt(t,2)}}}function Lu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function zt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ke(t.kb,t);n||(n=new Gt("//www.google.com/images/cleardot.gif"),O.location&&O.location.protocol=="http"||gi(n,"https"),Ui(n)),wg(n.toString(),s)}else Me(2);t.G=0,t.l&&t.l.va(e),xu(t),Du(t)}S.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function xu(t){if(t.G=0,t.la=[],t.l){const e=Eu(t.h);(e.length!=0||t.i.length!=0)&&(nc(t.la,e),nc(t.la,t.i),t.h.i.length=0,Oo(t.i),t.i.length=0),t.l.ua()}}function Mu(t,e,n){var s=n instanceof Gt?wt(n):new Gt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),mi(s,s.m);else{var i=O.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Gt(null,void 0);s&&gi(r,s),e&&(r.g=e),i&&mi(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&re(s,n,e),re(s,"VER",t.ma),Ls(t,s),s}function Fu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new Os({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function Bu(){}S=Bu.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Ra=function(){};function vi(){if(An&&!(10<=Number($p)))throw Error("Environmental error: no available transport.")}vi.prototype.g=function(t,e){return new We(t,e)};function We(t,e){ve.call(this),this.g=new ku(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!di(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!di(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Un(this)}_e(We,ve);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Me(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Mu(t,null,t.V),Hi(t)};We.prototype.close=function(){Qo(this.g)};We.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vo(t),t=n);e.i.push(new gg(e.ab++,t)),e.G==3&&Hi(e)};We.prototype.M=function(){this.g.l=null,delete this.j,Qo(this.g),delete this.g,We.X.M.call(this)};function Vu(t){qo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_e(Vu,qo);function Uu(){Ho.call(this),this.status=1}_e(Uu,Ho);function Un(t){this.g=t}_e(Un,Bu);Un.prototype.xa=function(){Ee(this.g,"a")};Un.prototype.wa=function(t){Ee(this.g,new Vu(t))};Un.prototype.va=function(t){Ee(this.g,new Uu)};Un.prototype.ua=function(){Ee(this.g,"b")};vi.prototype.createWebChannel=vi.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;Fi.NO_ERROR=0;Fi.TIMEOUT=8;Fi.HTTP_ERROR=6;ru.COMPLETE="complete";ou.EventType=Ds;Ds.OPEN="a";Ds.CLOSE="b";Ds.ERROR="c";Ds.MESSAGE="d";ve.prototype.listen=ve.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var Ig=function(){return new vi},Sg=function(){return Mi()},Sr=Fi,Ag=ru,kg=rn,pc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Dg=Os,Js=ou,Ng=ce;const gc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Nl("@firebase/firestore");function mc(){return Xt.logLevel}function k(t,...e){if(Xt.logLevel<=Q.DEBUG){const n=e.map(Jo);Xt.debug(`Firestore (${$n}): ${t}`,...n)}}function bt(t,...e){if(Xt.logLevel<=Q.ERROR){const n=e.map(Jo);Xt.error(`Firestore (${$n}): ${t}`,...n)}}function Xr(t,...e){if(Xt.logLevel<=Q.WARN){const n=e.map(Jo);Xt.warn(`Firestore (${$n}): ${t}`,...n)}}function Jo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function P(t="Unexpected state"){const e=`FIRESTORE (${$n}) INTERNAL ASSERTION FAILED: `+t;throw bt(e),new Error(e)}function ne(t,e){t||P()}function M(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $u{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ce.UNAUTHENTICATED))}shutdown(){}}class Og{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rg{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ne(typeof s.accessToken=="string"),new $u(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new Ce(e)}}class Lg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class xg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Lg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ne(typeof n.token=="string"),this.A=n.token,new Mg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Bg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Y(t,e){return t<e?-1:t>e?1:0}function kn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ys{constructor(e,n,s){n===void 0?n=0:n>e.length&&P(),s===void 0?s=e.length-n:s>e.length-n&&P(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ys.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ys?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends ys{construct(e,n,s){return new se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new _(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const Vg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends ys{construct(e,n,s){return new Se(e,n,s)}static isValidIdentifier(e){return Vg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new _(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new _(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(n)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(se.fromString(e))}static fromName(e){return new D(se.fromString(e).popFirst(5))}static empty(){return new D(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new se(e.slice()))}}function Ug(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=R.fromTimestamp(s===1e9?new de(n+1,0):new de(n,s));return new Pt(i,D.empty(),e)}function $g(t){return new Pt(t.readTime,t.key,-1)}class Pt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Pt(R.min(),D.empty(),-1)}static max(){return new Pt(R.max(),D.empty(),-1)}}function jg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==qg)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&P(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Zo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class vs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function on(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){return t==null}function wi(t){return t===0&&1/t==-1/0}function Kg(t){return typeof t=="number"&&Number.isInteger(t)&&!wi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Gg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new Gg("Invalid base64 string: "+i):i}}(e);return new Ne(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ne(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const Wg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(t){if(ne(!!t),typeof t=="string"){let e=0;const n=Wg.exec(t);if(ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dn(t){return typeof t=="string"?Ne.fromBase64String(t):Ne.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zu(t){const e=t.mapValue.fields.__previous_value__;return Hu(e)?zu(e):e}function ws(t){const e=Ot(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hu(t)?4:Qg(t)?9007199254740991:10:P()}function ut(t,e){if(t===e)return!0;const n=Jt(t);if(n!==Jt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ws(t).isEqual(ws(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ot(s.timestampValue),o=Ot(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dn(s.bytesValue).isEqual(Dn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ue(s.doubleValue),o=ue(i.doubleValue);return r===o?wi(r)===wi(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return kn(t.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(yc(r)!==yc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ut(r[a],o[a])))return!1;return!0}(t,e);default:return P()}}function bs(t,e){return(t.values||[]).find(n=>ut(n,e))!==void 0}function Nn(t,e){if(t===e)return 0;const n=Jt(t),s=Jt(e);if(n!==s)return Y(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ue(i.integerValue||i.doubleValue),a=ue(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vc(t.timestampValue,e.timestampValue);case 4:return vc(ws(t),ws(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Dn(i),a=Dn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Y(o[c],a[c]);if(l!==0)return l}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Y(ue(i.latitude),ue(r.latitude));return o!==0?o:Y(ue(i.longitude),ue(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Nn(o[c],a[c]);if(l)return l}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Zs.mapValue&&r===Zs.mapValue)return 0;if(i===Zs.mapValue)return 1;if(r===Zs.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=Y(a[u],l[u]);if(h!==0)return h;const d=Nn(o[a[u]],c[l[u]]);if(d!==0)return d}return Y(a.length,l.length)}(t.mapValue,e.mapValue);default:throw P()}}function vc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Ot(t),s=Ot(e),i=Y(n.seconds,s.seconds);return i!==0?i:Y(n.nanos,s.nanos)}function Pn(t){return Jr(t)}function Jr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ot(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Dn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Jr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Jr(s.fields[a])}`;return r+"}"}(t.mapValue):P();var e,n}function wc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zr(t){return!!t&&"integerValue"in t}function ea(t){return!!t&&"arrayValue"in t}function bc(t){return!!t&&"nullValue"in t}function Ec(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ii(t){return!!t&&"mapValue"in t}function ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return on(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ns(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Qg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bi{constructor(e,n){this.position=e,this.inclusive=n}}function Tc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=D.comparator(D.fromName(o.referenceValue),n.key):s=Nn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function _c(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ut(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ku{}class he extends Ku{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Xg(e,n,s):n==="array-contains"?new em(e,s):n==="in"?new tm(e,s):n==="not-in"?new nm(e,s):n==="array-contains-any"?new sm(e,s):new he(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Jg(e,s):new Zg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Nn(n,this.value)):n!==null&&Jt(this.value)===Jt(n)&&this.matchesComparison(Nn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return P()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class st extends Ku{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new st(e,n)}matches(e){return Gu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Gu(t){return t.op==="and"}function Wu(t){return Yg(t)&&Gu(t)}function Yg(t){for(const e of t.filters)if(e instanceof st)return!1;return!0}function eo(t){if(t instanceof he)return t.field.canonicalString()+t.op.toString()+Pn(t.value);if(Wu(t))return t.filters.map(e=>eo(e)).join(",");{const e=t.filters.map(n=>eo(n)).join(",");return`${t.op}(${e})`}}function Qu(t,e){return t instanceof he?function(n,s){return s instanceof he&&n.op===s.op&&n.field.isEqual(s.field)&&ut(n.value,s.value)}(t,e):t instanceof st?function(n,s){return s instanceof st&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Qu(r,s.filters[o]),!0):!1}(t,e):void P()}function Yu(t){return t instanceof he?function(e){return`${e.field.canonicalString()} ${e.op} ${Pn(e.value)}`}(t):t instanceof st?function(e){return e.op.toString()+" {"+e.getFilters().map(Yu).join(" ,")+"}"}(t):"Filter"}class Xg extends he{constructor(e,n,s){super(e,n,s),this.key=D.fromName(s.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class Jg extends he{constructor(e,n){super(e,"in",n),this.keys=Xu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Zg extends he{constructor(e,n){super(e,"not-in",n),this.keys=Xu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>D.fromName(s.referenceValue))}class em extends he{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ea(n)&&bs(n.arrayValue,this.value)}}class tm extends he{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bs(this.value.arrayValue,n)}}class nm extends he{constructor(e,n){super(e,"not-in",n)}matches(e){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bs(this.value.arrayValue,n)}}class sm extends he{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ea(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>bs(this.value.arrayValue,s))}}/**
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
 */class mn{constructor(e,n="asc"){this.field=e,this.dir=n}}function im(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ei(this.root,e,this.comparator,!0)}}class ei{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??be.RED,this.left=i??be.EMPTY,this.right=r??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new be(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw P();const e=this.left.check();if(e!==this.right.check())throw P();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw P()}get value(){throw P()}get color(){throw P()}get left(){throw P()}get right(){throw P()}copy(t,e,n,s,i){return this}insert(t,e,n){return new be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cc(this.data.getIterator())}getIteratorFrom(e){return new Cc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fe(this.comparator);return n.data=e,n}}class Cc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new Ke([])}unionWith(e){let n=new fe(Se.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ke(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ii(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ns(n)}setAll(e){let n=Se.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ns(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ii(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ii(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){on(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ue(ns(this.value))}}function Ju(t){const e=[];return on(t.fields,(n,s)=>{const i=new Se([n]);if(ii(s)){const r=Ju(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,R.min(),R.min(),R.min(),Ue.empty(),0)}static newFoundDocument(e,n,s,i){return new Ie(e,1,n,R.min(),s,i,0)}static newNoDocument(e,n){return new Ie(e,2,n,R.min(),R.min(),Ue.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,R.min(),R.min(),Ue.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Ic(t,e=null,n=[],s=[],i=null,r=null,o=null){return new rm(t,e,n,s,i,r,o)}function ta(t){const e=M(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>eo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),zi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Pn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Pn(s)).join(",")),e._t=n}return e._t}function na(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!im(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_c(t.startAt,e.startAt)&&_c(t.endAt,e.endAt)}function to(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function om(t,e,n,s,i,r,o,a){return new jn(t,e,n,s,i,r,o,a)}function sa(t){return new jn(t)}function Sc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ia(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ki(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Zu(t){return t.collectionGroup!==null}function yn(t){const e=M(t);if(e.wt===null){e.wt=[];const n=Ki(e),s=ia(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new mn(n)),e.wt.push(new mn(Se.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new mn(Se.keyField(),r))}}}return e.wt}function Et(t){const e=M(t);if(!e.gt)if(e.limitType==="F")e.gt=Ic(e.path,e.collectionGroup,yn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of yn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new mn(r.field,o))}const s=e.endAt?new bi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new bi(e.startAt.position,e.startAt.inclusive):null;e.gt=Ic(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function no(t,e){e.getFirstInequalityField(),Ki(t);const n=t.filters.concat([e]);return new jn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function so(t,e,n){return new jn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gi(t,e){return na(Et(t),Et(e))&&t.limitType===e.limitType}function eh(t){return`${ta(Et(t))}|lt:${t.limitType}`}function io(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Yu(s)).join(", ")}]`),zi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Pn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Pn(s)).join(",")),`Target(${n})`}(Et(t))}; limitType=${t.limitType})`}function Wi(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of yn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Tc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,yn(n),s)||n.endAt&&!function(i,r,o){const a=Tc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,yn(n),s))}(t,e)}function am(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function th(t){return(e,n)=>{let s=!1;for(const i of yn(t)){const r=cm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function cm(t,e,n){const s=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Nn(a,c):P()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return P()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(e)?"-0":e}}function sh(t){return{integerValue:""+t}}function lm(t,e){return Kg(e)?sh(e):nh(t,e)}/**
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
 */class Qi{constructor(){this._=void 0}}function um(t,e,n){return t instanceof Ei?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Es?rh(t,e):t instanceof Ts?oh(t,e):function(s,i){const r=ih(s,i),o=Ac(r)+Ac(s.It);return Zr(r)&&Zr(s.It)?sh(o):nh(s.Tt,o)}(t,e)}function hm(t,e,n){return t instanceof Es?rh(t,e):t instanceof Ts?oh(t,e):n}function ih(t,e){return t instanceof Ti?Zr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ei extends Qi{}class Es extends Qi{constructor(e){super(),this.elements=e}}function rh(t,e){const n=ah(e);for(const s of t.elements)n.some(i=>ut(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ts extends Qi{constructor(e){super(),this.elements=e}}function oh(t,e){let n=ah(e);for(const s of t.elements)n=n.filter(i=>!ut(i,s));return{arrayValue:{values:n}}}class Ti extends Qi{constructor(e,n){super(),this.Tt=e,this.It=n}}function Ac(t){return ue(t.integerValue||t.doubleValue)}function ah(t){return ea(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Es&&s instanceof Es||n instanceof Ts&&s instanceof Ts?kn(n.elements,s.elements,ut):n instanceof Ti&&s instanceof Ti?ut(n.It,s.It):n instanceof Ei&&s instanceof Ei}(t.transform,e.transform)}class fm{constructor(e,n){this.version=e,this.transformResults=n}}class tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ri(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yi{}function ch(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ra(t.key,tt.none()):new Fs(t.key,t.data,tt.none());{const n=t.data,s=Ue.empty();let i=new fe(Se.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ft(t.key,s,new Ke(i.toArray()),tt.none())}}function pm(t,e,n){t instanceof Fs?function(s,i,r){const o=s.value.clone(),a=Dc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ft?function(s,i,r){if(!ri(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Dc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(lh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ss(t,e,n,s){return t instanceof Fs?function(i,r,o,a){if(!ri(i.precondition,r))return o;const c=i.value.clone(),l=Nc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ft?function(i,r,o,a){if(!ri(i.precondition,r))return o;const c=Nc(i.fieldTransforms,a,r),l=r.data;return l.setAll(lh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ri(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function gm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ih(s.transform,i||null);r!=null&&(n===null&&(n=Ue.empty()),n.set(s.field,r))}return n||null}function kc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&kn(n,s,(i,r)=>dm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fs extends Yi{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ft extends Yi{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Dc(t,e,n){const s=new Map;ne(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,hm(o,a,n[i]))}return s}function Nc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,um(r,o,e))}return s}class ra extends Yi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mm extends Yi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,H;function vm(t){switch(t){default:return P();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function uh(t){if(t===void 0)return bt("GRPC error has no .code"),y.UNKNOWN;switch(t){case le.OK:return y.OK;case le.CANCELLED:return y.CANCELLED;case le.UNKNOWN:return y.UNKNOWN;case le.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case le.INTERNAL:return y.INTERNAL;case le.UNAVAILABLE:return y.UNAVAILABLE;case le.UNAUTHENTICATED:return y.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case le.NOT_FOUND:return y.NOT_FOUND;case le.ALREADY_EXISTS:return y.ALREADY_EXISTS;case le.PERMISSION_DENIED:return y.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case le.ABORTED:return y.ABORTED;case le.OUT_OF_RANGE:return y.OUT_OF_RANGE;case le.UNIMPLEMENTED:return y.UNIMPLEMENTED;case le.DATA_LOSS:return y.DATA_LOSS;default:return P()}}(H=le||(le={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){on(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return qu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new pe(D.comparator);function Tt(){return wm}const hh=new pe(D.comparator);function Jn(...t){let e=hh;for(const n of t)e=e.insert(n.key,n);return e}function dh(t){let e=hh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Kt(){return is()}function fh(){return is()}function is(){return new qn(t=>t.toString(),(t,e)=>t.isEqual(e))}const bm=new pe(D.comparator),Em=new fe(D.comparator);function j(...t){let e=Em;for(const n of t)e=e.add(n);return e}const Tm=new fe(Y);function ph(){return Tm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Bs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Xi(R.min(),i,ph(),Tt(),j())}}class Bs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Bs(s,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class gh{constructor(e,n){this.targetId=e,this.Rt=n}}class mh{constructor(e,n,s=Ne.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Pc{constructor(){this.bt=0,this.vt=Rc(),this.Pt=Ne.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=j(),n=j(),s=j();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:P()}}),new Bs(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Rc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class _m{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Tt(),this.Kt=Oc(),this.Gt=new fe(Y)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:P()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(to(r))if(s===0){const o=new D(r.path);this.zt(n,o,Ie.newNoDocument(o,R.min()))}else ne(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&to(a.target)){const c=new D(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Ie.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=j();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Xi(e,n,this.Gt,this.Ut,s);return this.Ut=Tt(),this.Kt=Oc(),this.Gt=new fe(Y),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Pc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new fe(Y),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Pc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Oc(){return new pe(D.comparator)}function Rc(){return new pe(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Im=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Sm=(()=>({and:"AND",or:"OR"}))();class Am{constructor(e,n){this.databaseId=e,this.yt=n}}function _i(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function km(t,e){return _i(t,e.toTimestamp())}function ct(t){return ne(!!t),R.fromTimestamp(function(e){const n=Ot(e);return new de(n.seconds,n.nanos)}(t))}function oa(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vh(t){const e=se.fromString(t);return ne(Th(e)),e}function ro(t,e){return oa(t.databaseId,e.path)}function Ar(t,e){const n=vh(e);if(n.get(1)!==t.databaseId.projectId)throw new _(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(wh(n))}function oo(t,e){return oa(t.databaseId,e)}function Dm(t){const e=vh(t);return e.length===4?se.emptyPath():wh(e)}function ao(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wh(t){return ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lc(t,e,n){return{name:ro(t,e),fields:n.value.mapValue.fields}}function Nm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:P()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(ne(l===void 0||typeof l=="string"),Ne.fromBase64String(l||"")):(ne(l===void 0||l instanceof Uint8Array),Ne.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:uh(c.code);return new _(l,c.message||"")}(o);n=new mh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ar(t,s.document.name),r=ct(s.document.updateTime),o=s.document.createTime?ct(s.document.createTime):R.min(),a=new Ue({mapValue:{fields:s.document.fields}}),c=Ie.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new oi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ar(t,s.document),r=s.readTime?ct(s.readTime):R.min(),o=Ie.newNoDocument(i,r),a=s.removedTargetIds||[];n=new oi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ar(t,s.document),r=s.removedTargetIds||[];n=new oi([],r,i,null)}else{if(!("filter"in e))return P();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new ym(i),o=s.targetId;n=new gh(o,r)}}return n}function Pm(t,e){let n;if(e instanceof Fs)n={update:Lc(t,e.key,e.value)};else if(e instanceof ra)n={delete:ro(t,e.key)};else if(e instanceof Ft)n={update:Lc(t,e.key,e.data),updateMask:Um(e.fieldMask)};else{if(!(e instanceof mm))return P();n={verify:ro(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ei)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Es)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ts)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ti)return{fieldPath:r.field.canonicalString(),increment:o.It};throw P()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:km(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:P()}(t,e.precondition)),n}function Om(t,e){return t&&t.length>0?(ne(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ct(s.updateTime):ct(i);return r.isEqual(R.min())&&(r=ct(i)),new fm(r,s.transformResults||[])}(n,e))):[]}function Rm(t,e){return{documents:[oo(t,e.path)]}}function Lm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=oo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Eh(st.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:dn(u.field),direction:Fm(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||zi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function xm(t){let e=Dm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ne(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=bh(u);return h instanceof st&&Wu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new mn(fn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,zi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new bi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new bi(d,h)}(n.endAt)),om(e,i,o,r,a,"F",c,l)}function Mm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return P()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function bh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fn(e.unaryFilter.field);return he.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=fn(e.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fn(e.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fn(e.unaryFilter.field);return he.create(r,"!=",{nullValue:"NULL_VALUE"});default:return P()}}(t):t.fieldFilter!==void 0?function(e){return he.create(fn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return P()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return st.create(e.compositeFilter.filters.map(n=>bh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return P()}}(e.compositeFilter.op))}(t):P()}function Fm(t){return Cm[t]}function Bm(t){return Im[t]}function Vm(t){return Sm[t]}function dn(t){return{fieldPath:t.canonicalString()}}function fn(t){return Se.fromServerFormat(t.fieldPath)}function Eh(t){return t instanceof he?function(e){if(e.op==="=="){if(Ec(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NAN"}};if(bc(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ec(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NAN"}};if(bc(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(e.field),op:Bm(e.op),value:e.value}}}(t):t instanceof st?function(e){const n=e.getFilters().map(s=>Eh(s));return n.length===1?n[0]:{compositeFilter:{op:Vm(e.op),filters:n}}}(t):P()}function Um(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Th(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&pm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ss(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ss(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=fh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=ch(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,(n,s)=>kc(n,s))&&kn(this.baseMutations,e.baseMutations,(n,s)=>kc(n,s))}}class aa{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ne(e.mutations.length===s.length);let i=bm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new aa(e,n,s,i)}}/**
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
 */class jm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wt{constructor(e,n,s,i,r=R.min(),o=R.min(),a=Ne.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.oe=e}}function Hm(t){const e=xm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?so(e,e.limit,"L"):e}/**
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
 */class zm{constructor(){this.Ze=new Km}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Pt.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Km{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new fe(se.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new fe(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new On(0)}static Sn(){return new On(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.changes=new qn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ss(s.mutation,i,Ke.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,j()).next(()=>s))}getLocalViewOfDocuments(e,n,s=j()){const i=Kt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Jn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Kt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,j()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Tt();const o=is(),a=is();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Ft)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ss(u.mutation,l,u.mutation.getFieldMask(),de.now())):o.set(l.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Wm(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=is();let i=new pe((o,a)=>o-a),r=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ke.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||j()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=fh();u.forEach(d=>{if(!r.has(d)){const p=ch(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Zu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(Kt());let a=-1,c=r;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,j())).next(u=>({batchId:a,changes:dh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(s=>{let i=Jn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Jn();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new jn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ie.newInvalidDocument(l)))});let o=Jn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ss(l.mutation,c,Ke.empty(),de.now()),Wi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ct(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Hm(s.bundledQuery),readTime:ct(s.readTime)}}(n)),b.resolve()}}/**
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
 */class Xm{constructor(){this.overlays=new pe(D.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Kt();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=Kt(),r=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Kt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Kt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new jm(n,s));let r=this.ss.get(n);r===void 0&&(r=j(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.rs=new fe(ge.os),this.us=new fe(ge.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new ge(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new ge(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new D(new se([])),s=new ge(n,e),i=new ge(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new D(new se([])),s=new ge(n,e),i=new ge(n,e+1);let r=j();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ge(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ge{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return D.comparator(e.key,n.key)||Y(e.gs,n.gs)}static cs(e,n){return Y(e.gs,n.gs)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new fe(ge.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $m(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new ge(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ge(n,0),i=new ge(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new fe(Y);return n.forEach(i=>{const r=new ge(i,0),o=new ge(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;D.isDocumentKey(r)||(r=r.child(""));const o=new ge(new D(r),0);let a=new fe(Y);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ne(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,i=>{const r=new ge(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new ge(n,0),i=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.Rs=e,this.docs=new pe(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let s=Tt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ie.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Tt();const o=n.path,a=new D(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||jg($g(u),s)<=0||(i.has(u.key)||Wi(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){P()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ey(this)}getSize(e){return b.resolve(this.size)}}class ey extends Gm{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.persistence=e,this.vs=new qn(n=>ta(n),na),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ca,this.targetCount=0,this.Ss=On.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new On(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Zo(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new ty(this),this.indexManager=new zm,this.remoteDocumentCache=function(s){return new Zm(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new qm(n),this.Os=new Ym(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Xm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Jm(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const i=new sy(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class sy extends Hg{constructor(e){super(),this.currentSequenceNumber=e}}class la{constructor(e){this.persistence=e,this.Bs=new ca,this.Ls=null}static qs(e){return new la(e)}get Us(){if(this.Ls)return this.Ls;throw P()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const i=D.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,R.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=j(),i=j();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ua(e,n.fromCache,s,i)}}/**
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
 */class iy{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Sc(n))return b.resolve(null);let s=Et(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=so(n,null,"F"),s=Et(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=j(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,so(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return Sc(n)||i.isEqual(R.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(mc()<=Q.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),io(n)),this.qi(e,o,n,Ug(i,-1)))})}Bi(e,n){let s=new fe(th(e));return n.forEach((i,r)=>{Wi(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return mc()<=Q.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",io(n)),this.Oi.getDocumentsMatchingQuery(e,n,Pt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new pe(Y),this.Gi=new qn(r=>ta(r),na),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qm(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function oy(t,e,n,s){return new ry(t,e,n,s)}async function _h(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=j();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function ay(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const E=c.docVersions.get(p);ne(E!==null),m.version.compareTo(E)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=j();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Ch(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function cy(t,e){const n=M(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ne.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,E,v){return m.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=Tt(),l=j();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ly(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(R.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function ly(t,e,n){let s=j(),i=j();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Tt();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function uy(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function hy(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Wt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function co(t,e,n){const s=M(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ms(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function xc(t,e,n){const s=M(t);let i=R.min(),r=j();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=M(a),h=u.Gi.get(l);return h!==void 0?b.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,Et(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:R.min(),n?r:j())).next(a=>(dy(s,am(e),a),{documents:a,Yi:r})))}function dy(t,e,n){let s=t.Qi.get(e)||R.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Mc{constructor(){this.activeTargetIds=ph()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fy{constructor(){this.Ur=new Mc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Mc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class py{Gr(e){}shutdown(){}}/**
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
 */class Fc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);k("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(k("RestConnection","Received: ",c),c),c=>{throw Xr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+$n,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=gy[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Ng;a.setWithCredentials(!0),a.listenOnce(Ag.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Sr.NO_ERROR:const l=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Sr.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new _(y.DEADLINE_EXCEEDED,"Request time out"));break;case Sr.HTTP_ERROR:const u=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const E=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(E)>=0?E:y.UNKNOWN}(d.status);o(new _(p,d.message))}else o(new _(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(y.UNAVAILABLE,"Connection failed."));break;default:P()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Ig(),o=Sg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Dg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");k("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new my({Yr:m=>{h?k("Connection","Not sending because WebChannel is closed:",m):(u||(k("Connection","Opening WebChannel transport."),l.open(),u=!0),k("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),p=(m,E,v)=>{m.listen(E,A=>{try{v(A)}catch(C){setTimeout(()=>{throw C},0)}})};return p(l,Js.EventType.OPEN,()=>{h||k("Connection","WebChannel transport opened.")}),p(l,Js.EventType.CLOSE,()=>{h||(h=!0,k("Connection","WebChannel transport closed"),d.oo())}),p(l,Js.EventType.ERROR,m=>{h||(h=!0,Xr("Connection","WebChannel transport errored:",m),d.oo(new _(y.UNAVAILABLE,"The operation could not be completed")))}),p(l,Js.EventType.MESSAGE,m=>{var E;if(!h){const v=m.data[0];ne(!!v);const A=v,C=A.error||((E=A[0])===null||E===void 0?void 0:E.error);if(C){k("Connection","WebChannel received error:",C);const U=C.status;let L=function(G){const K=le[G];if(K!==void 0)return uh(K)}(U),$=C.message;L===void 0&&(L=y.INTERNAL,$="Unknown error status: "+U+" with message "+C.message),h=!0,d.oo(new _(L,$)),l.close()}else k("Connection","WebChannel received:",v),d.uo(v)}}),p(o,kg.STAT_EVENT,m=>{m.stat===pc.PROXY?k("Connection","Detected buffering proxy"):m.stat===pc.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function kr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return new Am(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Ih(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(bt(n.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new _(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vy extends Sh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Nm(this.Tt,e),s=function(i){if(!("targetChange"in i))return R.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?R.min():r.readTime?ct(r.readTime):R.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=ao(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=to(a)?{documents:Rm(i,a)}:{query:Lm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=yh(i,r.resumeToken):r.snapshotVersion.compareTo(R.min())>0&&(o.readTime=_i(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Mm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=ao(this.Tt),n.removeTarget=e,this.qo(n)}}class wy extends Sh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Om(e.writeResults,e.commitTime),s=ct(e.commitTime);return this.listener.eu(s,n)}return ne(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=ao(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Pm(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new _(y.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(y.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(y.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Ey{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(bt(n),this.cu=!1):k("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{an(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=M(a);c.mu.add(4),await Vs(c),c.pu.set("Unknown"),c.mu.delete(4),await Zi(c)}(this))})}),this.pu=new Ey(s,i)}}async function Zi(t){if(an(t))for(const e of t.gu)await e(!0)}async function Vs(t){for(const e of t.gu)await e(!1)}function Ah(t,e){const n=M(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),fa(n)?da(n):Hn(n).Mo()&&ha(n,e))}function kh(t,e){const n=M(t),s=Hn(n);n.wu.delete(e),s.Mo()&&Dh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():an(n)&&n.pu.set("Unknown"))}function ha(t,e){t.Iu.Ft(e.targetId),Hn(t).Jo(e)}function Dh(t,e){t.Iu.Ft(e),Hn(t).Yo(e)}function da(t){t.Iu=new _m({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Hn(t).start(),t.pu.au()}function fa(t){return an(t)&&!Hn(t).Oo()&&t.wu.size>0}function an(t){return M(t).mu.size===0}function Nh(t){t.Iu=void 0}async function _y(t){t.wu.forEach((e,n)=>{ha(t,e)})}async function Cy(t,e){Nh(t),fa(t)?(t.pu.fu(e),da(t)):t.pu.set("Unknown")}async function Iy(t,e,n){if(t.pu.set("Online"),e instanceof mh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ci(t,s)}else if(e instanceof oi?t.Iu.Qt(e):e instanceof gh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(R.min()))try{const s=await Ch(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(Ne.EMPTY_BYTE_STRING,c.snapshotVersion)),Dh(i,a);const l=new Wt(c.target,a,1,c.sequenceNumber);ha(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await Ci(t,s)}}async function Ci(t,e,n){if(!Ms(e))throw e;t.mu.add(1),await Vs(t),t.pu.set("Offline"),n||(n=()=>Ch(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Zi(t)})}function Ph(t,e){return e().catch(n=>Ci(t,n,e))}async function er(t){const e=M(t),n=Rt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Sy(e);)try{const i=await uy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Ay(e,i)}catch(i){await Ci(e,i)}Oh(e)&&Rh(e)}function Sy(t){return an(t)&&t._u.length<10}function Ay(t,e){t._u.push(e);const n=Rt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Oh(t){return an(t)&&!Rt(t).Oo()&&t._u.length>0}function Rh(t){Rt(t).start()}async function ky(t){Rt(t).su()}async function Dy(t){const e=Rt(t);for(const n of t._u)e.tu(n.mutations)}async function Ny(t,e,n){const s=t._u.shift(),i=aa.from(s,e,n);await Ph(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await er(t)}async function Py(t,e){e&&Rt(t).Xo&&await async function(n,s){if(i=s.code,vm(i)&&i!==y.ABORTED){const r=n._u.shift();Rt(n).$o(),await Ph(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await er(n)}var i}(t,e),Oh(t)&&Rh(t)}async function Bc(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=an(n);n.mu.add(3),await Vs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Zi(n)}async function Oy(t,e){const n=M(t);e?(n.mu.delete(2),await Zi(n)):e||(n.mu.add(2),await Vs(n),n.pu.set("Unknown"))}function Hn(t){return t.Tu||(t.Tu=function(e,n,s){const i=M(e);return i.ru(),new vy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:_y.bind(null,t),no:Cy.bind(null,t),Ho:Iy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),fa(t)?da(t):t.pu.set("Unknown")):(await t.Tu.stop(),Nh(t))})),t.Tu}function Rt(t){return t.Eu||(t.Eu=function(e,n,s){const i=M(e);return i.ru(),new wy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:ky.bind(null,t),no:Py.bind(null,t),nu:Dy.bind(null,t),eu:Ny.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await er(t)):(await t.Eu.stop(),t._u.length>0&&(k("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new pa(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(t,e){if(bt("AsyncQueue",`${e}: ${t}`),Ms(t))return new _(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||D.comparator(n.key,s.key):(n,s)=>D.comparator(n.key,s.key),this.keyedMap=Jn(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new vn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new vn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.Au=new pe(D.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):P():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rn{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rn(e,n,vn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.bu=void 0,this.listeners=[]}}class Ly{constructor(){this.queries=new qn(e=>eh(e),Gi),this.onlineState="Unknown",this.vu=new Set}}async function Lh(t,e){const n=M(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ry),i)try{r.bu=await n.onListen(s)}catch(o){const a=ga(o,`Initialization of query '${io(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&ma(n)}async function xh(t,e){const n=M(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function xy(t,e){const n=M(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&ma(n)}function My(t,e,n){const s=M(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function ma(t){t.vu.forEach(e=>{e.next()})}class Mh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Rn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.key=e}}class Bh{constructor(e){this.key=e}}class Fy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=j(),this.mutatedKeys=j(),this.ju=th(e),this.zu=new vn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Vc,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Wi(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==E&&(s.track({type:3,doc:p}),v=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=E?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return P()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new Rn(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Vc,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=j(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Bh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Fh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=j();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Rn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class By{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Vy{constructor(e){this.key=e,this.ic=!1}}class Uy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new qn(a=>eh(a),Gi),this.uc=new Map,this.cc=new Set,this.ac=new pe(D.comparator),this.hc=new Map,this.lc=new ca,this.fc={},this.dc=new Map,this._c=On.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function $y(t,e){const n=Xy(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await hy(n.localStore,Et(e));n.isPrimaryClient&&Ah(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await jy(n,e,s,a==="current",o.resumeToken)}return i}async function jy(t,e,n,s,i){t.mc=(h,d,p)=>async function(m,E,v,A){let C=E.view.Hu(v);C.Li&&(C=await xc(m.localStore,E.query,!1).then(({documents:$})=>E.view.Hu($,C)));const U=A&&A.targetChanges.get(E.targetId),L=E.view.applyChanges(C,m.isPrimaryClient,U);return $c(m,E.targetId,L.tc),L.snapshot}(t,h,d,p);const r=await xc(t.localStore,e,!0),o=new Fy(e,r.Yi),a=o.Hu(r.documents),c=Bs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);$c(t,n,l.tc);const u=new By(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function qy(t,e){const n=M(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!Gi(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await co(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),kh(n.remoteStore,s.targetId),lo(n,s.targetId)}).catch(xs)):(lo(n,s.targetId),await co(n.localStore,s.targetId,!0))}async function Hy(t,e,n){const s=Jy(t);try{const i=await function(r,o){const a=M(r),c=de.now(),l=o.reduce((d,p)=>d.add(p.key),j());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Tt(),m=j();return a.ji.getEntries(d,l).next(E=>{p=E,p.forEach((v,A)=>{A.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(E=>{u=E;const v=[];for(const A of o){const C=gm(A,u.get(A.key).overlayedDocument);C!=null&&v.push(new Ft(A.key,C,Ju(C.value.mapValue),tt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(E=>{h=E;const v=E.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,E.batchId,v)})}).then(()=>({batchId:h.batchId,changes:dh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new pe(Y)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Us(s,i.changes),await er(s.remoteStore)}catch(i){const r=ga(i,"Failed to persist write");n.reject(r)}}async function Vh(t,e){const n=M(t);try{const s=await cy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?ne(o.ic):i.removedDocuments.size>0&&(ne(o.ic),o.ic=!1))}),await Us(n,s,e)}catch(s){await xs(s)}}function Uc(t,e,n){const s=M(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=M(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&ma(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zy(t,e,n){const s=M(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new pe(D.comparator);o=o.insert(r,Ie.newNoDocument(r,R.min()));const a=j().add(r),c=new Xi(R.min(),new Map,new fe(Y),o,a);await Vh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),ya(s)}else await co(s.localStore,e,!1).then(()=>lo(s,e,n)).catch(xs)}async function Ky(t,e){const n=M(t),s=e.batch.batchId;try{const i=await ay(n.localStore,e);$h(n,s,null),Uh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Us(n,i)}catch(i){await xs(i)}}async function Gy(t,e,n){const s=M(t);try{const i=await function(r,o){const a=M(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ne(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);$h(s,e,n),Uh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Us(s,i)}catch(i){await xs(i)}}function Uh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function $h(t,e,n){const s=M(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function lo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||jh(t,s)})}function jh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(kh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),ya(t))}function $c(t,e,n){for(const s of n)s instanceof Fh?(t.lc.addReference(s.key,e),Wy(t,s)):s instanceof Bh?(k("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||jh(t,s.key)):P()}function Wy(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.cc.add(s),ya(t))}function ya(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new D(se.fromString(e)),s=t._c.next();t.hc.set(s,new Vy(n)),t.ac=t.ac.insert(n,s),Ah(t.remoteStore,new Wt(Et(sa(n.path)),s,2,Zo.at))}}async function Us(t,e,n){const s=M(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=ua.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=M(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ms(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,r))}async function Qy(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await _h(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new _(y.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Us(n,s.Wi)}}function Yy(t,e){const n=M(t),s=n.hc.get(e);if(s&&s.ic)return j().add(s.key);{let i=j();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function Xy(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zy.bind(null,e),e.rc.Ho=xy.bind(null,e.eventManager),e.rc.gc=My.bind(null,e.eventManager),e}function Jy(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ky.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gy.bind(null,e),e}class Zy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Ji(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return oy(this.persistence,new iy,e.initialUser,this.Tt)}Tc(e){return new ny(la.qs,this.Tt)}Ic(e){return new fy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ev{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Uc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qy.bind(null,this.syncEngine),await Oy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ly}createDatastore(e){const n=Ji(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new yy(i));var i;return function(r,o,a,c){return new by(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Uc(this.syncEngine,a,0),o=Fc.C()?new Fc:new py,new Ty(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new Uy(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=M(e);k("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Vs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ce.UNAUTHENTICATED,this.clientId=ju.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{k("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(k("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ga(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function nv(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await _h(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iv(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Bc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Bc(e.remoteStore,r)),t.onlineComponents=e}async function iv(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await nv(t,new Zy)),t.offlineComponents}async function Hh(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await sv(t,new ev)),t.onlineComponents}function rv(t){return Hh(t).then(e=>e.syncEngine)}async function uo(t){const e=await Hh(t),n=e.eventManager;return n.onListen=$y.bind(null,e.syncEngine),n.onUnlisten=qy.bind(null,e.syncEngine),n}function ov(t,e,n={}){const s=new kt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new qh({next:h=>{r.enqueueAndForget(()=>xh(i,u)),h.fromCache&&a.source==="server"?c.reject(new _(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Mh(o,l,{includeMetadataChanges:!0,Ou:!0});return Lh(i,u)}(await uo(t),t.asyncQueue,e,n,s)),s.promise}const jc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e,n){if(!n)throw new _(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function av(t,e,n,s){if(e===!0&&s===!0)throw new _(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qc(t){if(!D.isDocumentKey(t))throw new _(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hc(t){if(D.isDocumentKey(t))throw new _(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":P()}function lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tr(t);throw new _(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,av("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Pg;switch(n.type){case"gapi":const s=n.client;return new xg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jc.get(e);n&&(k("ComponentProvider","Removing Datastore"),jc.delete(e),n.terminate())}(this),Promise.resolve()}}function cv(t,e,n,s={}){var i;const r=(t=lt(t,nr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Xr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ce.MOCK_USER;else{o=kl(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ce(c)}t._authCredentials=new Og(new $u(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class Bt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Bt(this.firestore,e,this._query)}}class Dt extends Bt{constructor(e,n,s){super(e,n,sa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new D(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function _t(t,e,...n){if(t=nt(t),zh("collection","path",e),t instanceof nr){const s=se.fromString(e,...n);return Hc(s),new Dt(t,null,s)}{if(!(t instanceof $e||t instanceof Dt))throw new _(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(se.fromString(e,...n));return Hc(s),new Dt(t.firestore,null,s)}}function Ln(t,e,...n){if(t=nt(t),arguments.length===1&&(e=ju.R()),zh("doc","path",e),t instanceof nr){const s=se.fromString(e,...n);return qc(s),new $e(t,null,new D(s))}{if(!(t instanceof $e||t instanceof Dt))throw new _(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(se.fromString(e,...n));return qc(s),new $e(t.firestore,t instanceof Dt?t.converter:null,new D(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Ih(this,"async_queue_retry"),this.Hc=()=>{const n=kr();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=kr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=kr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new kt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ms(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw bt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=pa.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&P()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Kc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Zt extends nr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new lv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kh(this),this._firestoreClient.terminate()}}function uv(t,e){const n=typeof t=="object"?t:Ml(),s=typeof t=="string"?t:e||"(default)",i=Rl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Al("firestore");r&&cv(i,...r)}return i}function va(t){return t._firestoreClient||Kh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Kh(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new zg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new tv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Ne.fromBase64String(e))}catch(n){throw new _(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xn(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=/^__.*__$/;class dv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fs(e,this.data,n,this.fieldTransforms)}}class Gh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ft(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Wh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw P()}}class Ea{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ea(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ii(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Wh(this.ra)&&hv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class fv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Ji(e)}wa(e,n,s,i=!1){return new Ea({ra:e,methodName:n,_a:s,path:Se.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Ta(t){const e=t._freezeSettings(),n=Ji(t._databaseId);return new fv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pv(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);_a("Data must be an object, but it was:",o,s);const a=Qh(s,o);let c,l;if(r.merge)c=new Ke(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ho(e,h,n);if(!o.contains(d))throw new _(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Xh(u,d)||u.push(d)}c=new Ke(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new dv(new Ue(a),c,l)}class ir extends wa{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ir}}function gv(t,e,n,s){const i=t.wa(1,e,n);_a("Data must be an object, but it was:",i,s);const r=[],o=Ue.empty();on(s,(c,l)=>{const u=Ca(e,c,n);l=nt(l);const h=i.ha(u);if(l instanceof ir)r.push(u);else{const d=$s(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ke(r);return new Gh(o,a,i.fieldTransforms)}function mv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[ho(e,s,n)],c=[i];if(r.length%2!=0)throw new _(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ho(e,r[d])),c.push(r[d+1]);const l=[],u=Ue.empty();for(let d=a.length-1;d>=0;--d)if(!Xh(l,a[d])){const p=a[d];let m=c[d];m=nt(m);const E=o.ha(p);if(m instanceof ir)l.push(p);else{const v=$s(m,E);v!=null&&(l.push(p),u.set(p,v))}}const h=new Ke(l);return new Gh(u,h,o.fieldTransforms)}function yv(t,e,n,s=!1){return $s(n,t.wa(s?4:3,e))}function $s(t,e){if(Yh(t=nt(t)))return _a("Unsupported field value:",e,t),Qh(t,e);if(t instanceof wa)return function(n,s){if(!Wh(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=$s(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=de.fromDate(n);return{timestampValue:_i(s.Tt,i)}}if(n instanceof de){const i=new de(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_i(s.Tt,i)}}if(n instanceof ba)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xn)return{bytesValue:yh(s.Tt,n._byteString)};if(n instanceof $e){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${tr(n)}`)}(t,e)}function Qh(t,e){const n={};return qu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):on(t,(s,i)=>{const r=$s(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Yh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof ba||t instanceof xn||t instanceof $e||t instanceof wa)}function _a(t,e,n){if(!Yh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=tr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function ho(t,e,n){if((e=nt(e))instanceof sr)return e._internalPath;if(typeof e=="string")return Ca(t,e);throw Ii("Field path arguments must be of type string or ",t,!1,void 0,n)}const vv=new RegExp("[~\\*/\\[\\]]");function Ca(t,e,n){if(e.search(vv)>=0)throw Ii(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sr(...e.split("."))._internalPath}catch{throw Ii(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ii(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new _(y.INVALID_ARGUMENT,a+t+c)}function Xh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wv extends Jh{data(){return super.data()}}function rr(t,e){return typeof e=="string"?Ca(t,e):e instanceof sr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ia{}class ed extends Ia{}function rs(t,e,...n){let s=[];e instanceof Ia&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Sa).length,o=i.filter(a=>a instanceof or).length;if(r>1||r>0&&o>0)throw new _(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class or extends ed{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new or(e,n,s)}_apply(e){const n=this._parse(e);return td(e._query,n),new Bt(e.firestore,e.converter,no(e._query,n))}_parse(e){const n=Ta(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Wc(u,l);const d=[];for(const p of u)d.push(Gc(a,i,p));h={arrayValue:{values:d}}}else h=Gc(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Wc(u,l),h=yv(o,r,u,l==="in"||l==="not-in");return he.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fo(t,e,n){const s=e,i=rr("where",t);return or._create(i,s,n)}class Sa extends Ia{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sa(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:st.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)td(r,a),r=no(r,a)}(e._query,n),new Bt(e.firestore,e.converter,no(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Aa extends ed{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Aa(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new _(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new _(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new mn(i,r);return function(a,c){if(ia(a)===null){const l=Ki(a);l!==null&&nd(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Bt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new jn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function po(t,e="asc"){const n=e,s=rr("orderBy",t);return Aa._create(s,n)}function Gc(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new _(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zu(e)&&n.indexOf("/")!==-1)throw new _(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(se.fromString(n));if(!D.isDocumentKey(s))throw new _(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return wc(t,new D(s))}if(n instanceof $e)return wc(t,n._key);throw new _(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tr(n)}.`)}function Wc(t,e){if(!Array.isArray(t)||t.length===0)throw new _(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function td(t,e){if(e.isInequality()){const s=Ki(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new _(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=ia(t);r!==null&&nd(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new _(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function nd(t,e,n){if(!n.isEqual(e))throw new _(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class bv{convertValue(e,n="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw P()}}convertObject(e,n){const s={};return on(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new ba(ue(e.latitude),ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ws(e));default:return null}}convertTimestamp(e){const n=Ot(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=se.fromString(e);ne(Th(s));const i=new vs(s.get(1),s.get(3)),r=new D(s.popFirst(5));return i.isEqual(n)||bt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sd extends Jh{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(rr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ai extends sd{data(e={}){return super.data(e)}}class id{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ai(this._firestore,this._userDataWriter,s.key,s,new Zn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ai(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ai(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Tv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Tv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return P()}}class ka extends bv{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function go(t){t=lt(t,Bt);const e=lt(t.firestore,Zt),n=va(e),s=new ka(e);return Zh(t._query),ov(n,t._query).then(i=>new id(e,s,t,i))}function Da(t,e,n,...s){t=lt(t,$e);const i=lt(t.firestore,Zt),r=Ta(i);let o;return o=typeof(e=nt(e))=="string"||e instanceof sr?mv(r,"updateDoc",t._key,e,n,s):gv(r,"updateDoc",t._key,e),Na(i,[o.toMutation(t._key,tt.exists(!0))])}function mo(t){return Na(lt(t.firestore,Zt),[new ra(t._key,tt.none())])}function rd(t,e){const n=lt(t.firestore,Zt),s=Ln(t),i=Ev(t.converter,e);return Na(n,[pv(Ta(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,tt.exists(!1))]).then(()=>s)}function yo(t,...e){var n,s,i;t=nt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Kc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Kc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof $e)l=lt(t.firestore,Zt),u=sa(t._key.path),c={next:h=>{e[o]&&e[o](_v(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=lt(t,Bt);l=lt(h.firestore,Zt),u=h._query;const d=new ka(l);c={next:p=>{e[o]&&e[o](new id(l,d,h,p))},error:e[o+1],complete:e[o+2]},Zh(t._query)}return function(h,d,p,m){const E=new qh(m),v=new Mh(d,E,p);return h.asyncQueue.enqueueAndForget(async()=>Lh(await uo(h),v)),()=>{E.Pc(),h.asyncQueue.enqueueAndForget(async()=>xh(await uo(h),v))}}(va(l),u,a,c)}function Na(t,e){return function(n,s){const i=new kt;return n.asyncQueue.enqueueAndForget(async()=>Hy(await rv(n),s,i)),i.promise}(va(t),e)}function _v(t,e,n){const s=n.docs.get(e._key),i=new ka(t);return new sd(t,i,e._key,s,new Zn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){$n=n})(Ll),us(new Sn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Zt(new Rg(n.getProvider("auth-internal")),new Fg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),At(gc,"3.8.4",t),At(gc,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="firebasestorage.googleapis.com",Cv="storageBucket",Iv=2*60*1e3,Sv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends sn{constructor(e,n,s=0){super(Dr(e),`Firebase Storage: ${n} (${Dr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ft.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ht;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ht||(ht={}));function Dr(t){return"storage/"+t}function Av(){const t="An unknown error occurred, please check the error payload for server response.";return new ft(ht.UNKNOWN,t)}function kv(){return new ft(ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Dv(){return new ft(ht.CANCELED,"User canceled the upload/download.")}function Nv(t){return new ft(ht.INVALID_URL,"Invalid URL '"+t+"'.")}function Pv(t){return new ft(ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qc(t){return new ft(ht.INVALID_ARGUMENT,t)}function ad(){return new ft(ht.APP_DELETED,"The Firebase app was deleted.")}function Ov(t){return new ft(ht.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=et.makeFromUrl(e,n)}catch{return new et(e,"")}if(s.path==="")return s;throw Pv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(L){L.path_=decodeURIComponent(L.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},E=n===od?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",A=new RegExp(`^https?://${E}/${i}/${v}`,"i"),U=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let L=0;L<U.length;L++){const $=U[L],G=$.regex.exec(e);if(G){const K=G[$.indices.bucket];let B=G[$.indices.path];B||(B=""),s=new et(K,B),$.postModify(s);break}}if(s==null)throw Nv(e);return s}}class Rv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function d(){r&&clearTimeout(r)}function p(v,...A){if(l){d();return}if(v){d(),u.call(null,v,...A);return}if(c()||o){d(),u.call(null,v,...A);return}s<64&&(s*=2);let U;a===1?(a=2,U=0):U=(s+Math.random())*1e3,h(U)}let m=!1;function E(v){m||(m=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,E(!0)},n),E}function xv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t){return t!==void 0}function Yc(t,e,n,s){if(s<e)throw Qc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Qc(`Invalid value for '${t}'. Expected ${n} or less.`)}function Fv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ti(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Si.NO_ERROR,c=r.getStatus();if(!a||Bv(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Si.ABORT;s(!1,new ti(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ti(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Mv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Av();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?ad():Dv();o(c)}else{const c=kv();o(c)}};this.canceled_?n(!1,new ti(!1,null,!0)):this.backoffId_=Lv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ti{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Uv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $v(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Hv(t,e,n,s,i,r,o=!0){const a=Fv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return jv(l,e),Uv(l,n),$v(l,r),qv(l,s),new Vv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Kv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ai{constructor(e,n){this._service=e,n instanceof et?this._location=n:this._location=et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ai(e,n)}get root(){const e=new et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kv(this._location.path)}get storage(){return this._service}get parent(){const e=zv(this._location.path);if(e===null)return null;const n=new et(this._location.bucket,e);return new Ai(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ov(e)}}function Xc(t,e){const n=e==null?void 0:e[Cv];return n==null?null:et.makeFromBucketSpec(n,t)}function Gv(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:kl(i,t.app.options.projectId))}class Wv{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=od,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Iv,this._maxUploadRetryTime=Sv,this._requests=new Set,i!=null?this._bucket=et.makeFromBucketSpec(i,this._host):this._bucket=Xc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=et.makeFromBucketSpec(this._url,e):this._bucket=Xc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ai(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Rv(ad());{const o=Hv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Jc="@firebase/storage",Zc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="storage";function Qv(t=Ml(),e){t=nt(t);const s=Rl(t,cd).getImmediate({identifier:e}),i=Al("storage");return i&&Yv(s,...i),s}function Yv(t,e,n,s={}){Gv(t,e,n,s)}function Xv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wv(n,s,i,e,Ll)}function Jv(){us(new Sn(cd,Xv,"PUBLIC").setMultipleInstances(!0)),At(Jc,Zc,""),At(Jc,Zc,"esm2017")}Jv();const Zv={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},ld=xl(Zv);Qv(ld);const ze=uv(ld);var ew=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vo={},tw={get exports(){return vo},set exports(t){vo=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(ew,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(v){v.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(v){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),m=this.options.position=="left"?d:"-"+d,E=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+m+","+E+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(tw);const wn=vo,ud="SweetAlert2:",nw=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Pa=t=>t.charAt(0).toUpperCase()+t.slice(1),Qe=t=>Array.prototype.slice.call(t),je=t=>{console.warn(`${ud} ${typeof t=="object"?t.join(" "):t}`)},cn=t=>{console.error(`${ud} ${t}`)},el=[],sw=t=>{el.includes(t)||(el.push(t),je(t))},iw=(t,e)=>{sw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},ar=t=>typeof t=="function"?t():t,Oa=t=>t&&typeof t.toPromise=="function",js=t=>Oa(t)?t.toPromise():Promise.resolve(t),Ra=t=>t&&Promise.resolve(t)===t,bn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},rw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ow={},aw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],hd=t=>Object.prototype.hasOwnProperty.call(bn,t),dd=t=>rw.indexOf(t)!==-1,wo=t=>ow[t],cw=t=>{hd(t)||je(`Unknown parameter "${t}"`)},lw=t=>{aw.includes(t)&&je(`The parameter "${t}" is incompatible with toasts`)},uw=t=>{wo(t)&&iw(t,wo(t))},hw=t=>{!t.backdrop&&t.allowOutsideClick&&je('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)cw(e),t.toast&&lw(e),uw(e)},dw="swal2-",fd=t=>{const e={};for(const n in t)e[t[n]]=dw+t[n];return e},f=fd(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),os=fd(["success","warning","info","question","error"]),Pe=()=>document.body.querySelector(`.${f.container}`),qs=t=>{const e=Pe();return e?e.querySelector(t):null},Ze=t=>qs(`.${t}`),X=()=>Ze(f.popup),Hs=()=>Ze(f.icon),pd=()=>Ze(f.title),ki=()=>Ze(f["html-container"]),gd=()=>Ze(f.image),md=()=>Ze(f["progress-steps"]),cr=()=>Ze(f["validation-message"]),it=()=>qs(`.${f.actions} .${f.confirm}`),Lt=()=>qs(`.${f.actions} .${f.deny}`),fw=()=>Ze(f["input-label"]),zn=()=>qs(`.${f.loader}`),en=()=>qs(`.${f.actions} .${f.cancel}`),zs=()=>Ze(f.actions),yd=()=>Ze(f.footer),lr=()=>Ze(f["timer-progress-bar"]),La=()=>Ze(f.close),pw=`
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
`,xa=()=>{const t=Qe(X().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=Qe(X().querySelectorAll(pw)).filter(n=>n.getAttribute("tabindex")!=="-1");return nw(t.concat(e)).filter(n=>Ge(n))},Ma=()=>vt(document.body,f.shown)&&!vt(document.body,f["toast-shown"])&&!vt(document.body,f["no-backdrop"]),ur=()=>X()&&vt(X(),f.toast),gw=()=>X().hasAttribute("data-loading"),En={previousBodyPadding:null},Ae=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");Qe(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),Qe(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},vt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},mw=(t,e)=>{Qe(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(os).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},Je=(t,e,n)=>{if(mw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return je(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);z(t,e.customClass[n])}},Fa=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},vd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},wd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},z=(t,e)=>{wd(t,e,!0)},dt=(t,e)=>{wd(t,e,!1)},Ct=(t,e)=>{const n=Qe(t.childNodes);for(let s=0;s<n.length;s++)if(vt(n[s],e))return n[s]},as=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Te=(t,e="flex")=>{t.style.display=e},Oe=t=>{t.style.display="none"},tl=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},hr=(t,e,n)=>{e?Te(t,n):Oe(t)},Ge=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),yw=()=>!Ge(it())&&!Ge(Lt())&&!Ge(en()),nl=t=>t.scrollHeight>t.clientHeight,bd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Ba=(t,e=!1)=>{const n=lr();Ge(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},vw=()=>{const t=lr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Ed=()=>typeof window>"u"||typeof document>"u",ww=100,F={},bw=()=>{F.previousActiveElement&&F.previousActiveElement.focus?(F.previousActiveElement.focus(),F.previousActiveElement=null):document.body&&document.body.focus()},Ew=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;F.restoreFocusTimeout=setTimeout(()=>{bw(),e()},ww),window.scrollTo(n,s)}),Tw=`
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
`.replace(/(^|\n)\s*/g,""),_w=()=>{const t=Pe();return t?(t.remove(),dt([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Ut=()=>{F.currentInstance.resetValidationMessage()},Cw=()=>{const t=X(),e=Ct(t,f.input),n=Ct(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=Ct(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=Ct(t,f.textarea);e.oninput=Ut,n.onchange=Ut,r.onchange=Ut,o.onchange=Ut,a.oninput=Ut,s.oninput=()=>{Ut(),i.value=s.value},s.onchange=()=>{Ut(),s.nextSibling.value=s.value}},Iw=t=>typeof t=="string"?document.querySelector(t):t,Sw=t=>{const e=X();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Aw=t=>{window.getComputedStyle(t).direction==="rtl"&&z(Pe(),f.rtl)},kw=t=>{const e=_w();if(Ed()){cn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&z(n,f["no-transition"]),Ae(n,Tw);const s=Iw(t.target);s.appendChild(n),Sw(t),Aw(s),Cw()},Va=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Dw(t,e):t&&Ae(e,t)},Dw=(t,e)=>{t.jquery?Nw(e,t):Ae(e,t.toString())},Nw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},_s=(()=>{if(Ed())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Pw=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Ow=(t,e)=>{const n=zs(),s=zn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Oe(n):Te(n),Je(n,e,"actions"),Rw(n,s,e),Ae(s,e.loaderHtml),Je(s,e,"loader")};function Rw(t,e,n){const s=it(),i=Lt(),r=en();Nr(s,"confirm",n),Nr(i,"deny",n),Nr(r,"cancel",n),Lw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Lw(t,e,n,s){if(!s.buttonsStyling)return dt([t,e,n],f.styled);z([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,z(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,z(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,z(n,f["default-outline"]))}function Nr(t,e,n){hr(t,n[`show${Pa(e)}Button`],"inline-block"),Ae(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],Je(t,n,`${e}Button`),z(t,n[`${e}ButtonClass`])}function xw(t,e){typeof e=="string"?t.style.background=e:e||z([document.documentElement,document.body],f["no-backdrop"])}function Mw(t,e){e in f?z(t,f[e]):(je('The "position" parameter is not valid, defaulting to "center"'),z(t,f.center))}function Fw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&z(t,f[n])}}const Bw=(t,e)=>{const n=Pe();n&&(xw(n,e.backdrop),Mw(n,e.position),Fw(n,e.grow),Je(n,e,"container"))},V={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Vw=["input","file","range","select","radio","checkbox","textarea"],Uw=(t,e)=>{const n=X(),s=V.innerParams.get(t),i=!s||e.input!==s.input;Vw.forEach(r=>{const o=f[r],a=Ct(n,o);qw(r,e.inputAttributes),a.className=o,i&&Oe(a)}),e.input&&(i&&$w(e),Hw(e))},$w=t=>{if(!Ve[t.input])return cn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Td(t.input),n=Ve[t.input](e,t);Te(n),setTimeout(()=>{vd(n)})},jw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},qw=(t,e)=>{const n=Fa(X(),t);if(n){jw(n);for(const s in e)n.setAttribute(s,e[s])}},Hw=t=>{const e=Td(t.input);t.customClass&&z(e,t.customClass.input)},Ua=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Ks=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,z(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Td=t=>{const e=f[t]?f[t]:f.input;return Ct(X(),e)},Ve={};Ve.text=Ve.email=Ve.password=Ve.number=Ve.tel=Ve.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Ra(e.inputValue)||je(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Ks(t,t,e),Ua(t,e),t.type=e.input,t);Ve.file=(t,e)=>(Ks(t,t,e),Ua(t,e),t);Ve.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Ks(n,t,e),t};Ve.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Ae(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Ks(t,t,e),t};Ve.radio=t=>(t.textContent="",t);Ve.checkbox=(t,e)=>{const n=Fa(X(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Ae(s,e.inputPlaceholder),t};Ve.textarea=(t,e)=>{t.value=e.inputValue,Ua(t,e),Ks(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(X()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?X().style.width=`${r}px`:X().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const zw=(t,e)=>{const n=ki();Je(n,e,"htmlContainer"),e.html?(Va(e.html,n),Te(n,"block")):e.text?(n.textContent=e.text,Te(n,"block")):Oe(n),Uw(t,e)},Kw=(t,e)=>{const n=yd();hr(n,e.footer),e.footer&&Va(e.footer,n),Je(n,e,"footer")},Gw=(t,e)=>{const n=La();Ae(n,e.closeButtonHtml),Je(n,e,"closeButton"),hr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},Ww=(t,e)=>{const n=V.innerParams.get(t),s=Hs();if(n&&e.icon===n.icon){il(s,e),sl(s,e);return}if(!e.icon&&!e.iconHtml)return Oe(s);if(e.icon&&Object.keys(os).indexOf(e.icon)===-1)return cn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Oe(s);Te(s),il(s,e),sl(s,e),z(s,e.showClass.icon)},sl=(t,e)=>{for(const n in os)e.icon!==n&&dt(t,os[n]);z(t,os[e.icon]),Jw(t,e),Qw(),Je(t,e,"icon")},Qw=()=>{const t=X(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},Yw=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Xw=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,il=(t,e)=>{t.textContent="",e.iconHtml?Ae(t,rl(e.iconHtml)):e.icon==="success"?Ae(t,Yw):e.icon==="error"?Ae(t,Xw):Ae(t,rl({question:"?",warning:"!",info:"i"}[e.icon]))},Jw=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])tl(t,n,"backgroundColor",e.iconColor);tl(t,".swal2-success-ring","borderColor",e.iconColor)}},rl=t=>`<div class="${f["icon-content"]}">${t}</div>`,Zw=(t,e)=>{const n=gd();if(!e.imageUrl)return Oe(n);Te(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),as(n,"width",e.imageWidth),as(n,"height",e.imageHeight),n.className=f.image,Je(n,e,"image")},eb=t=>{const e=document.createElement("li");return z(e,f["progress-step"]),Ae(e,t),e},tb=t=>{const e=document.createElement("li");return z(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},nb=(t,e)=>{const n=md();if(!e.progressSteps||e.progressSteps.length===0)return Oe(n);Te(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&je("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=eb(s);if(n.appendChild(r),i===e.currentProgressStep&&z(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=tb(e);n.appendChild(o)}})},sb=(t,e)=>{const n=pd();hr(n,e.title||e.titleText,"block"),e.title&&Va(e.title,n),e.titleText&&(n.innerText=e.titleText),Je(n,e,"title")},ib=(t,e)=>{const n=Pe(),s=X();e.toast?(as(n,"width",e.width),s.style.width="100%",s.insertBefore(zn(),Hs())):as(s,"width",e.width),as(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Oe(cr()),rb(s,e)},rb=(t,e)=>{t.className=`${f.popup} ${Ge(t)?e.showClass.popup:""}`,e.toast?(z([document.documentElement,document.body],f["toast-shown"]),z(t,f.toast)):z(t,f.modal),Je(t,e,"popup"),typeof e.customClass=="string"&&z(t,e.customClass),e.icon&&z(t,f[`icon-${e.icon}`])},_d=(t,e)=>{ib(t,e),Bw(t,e),nb(t,e),Ww(t,e),Zw(t,e),sb(t,e),Gw(t,e),zw(t,e),Ow(t,e),Kw(t,e),typeof e.didRender=="function"&&e.didRender(X())},Kn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ob=()=>{Qe(document.body.children).forEach(e=>{e===Pe()||e.contains(Pe())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Cd=()=>{Qe(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Id=["swal-title","swal-html","swal-footer"],ab=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return pb(n),Object.assign(cb(n),lb(n),ub(n),hb(n),db(n),fb(n,Id))},cb=t=>{const e={};return Qe(t.querySelectorAll("swal-param")).forEach(n=>{tn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof bn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof bn[s]=="object"&&(e[s]=JSON.parse(i))}),e},lb=t=>{const e={};return Qe(t.querySelectorAll("swal-button")).forEach(n=>{tn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Pa(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},ub=t=>{const e={},n=t.querySelector("swal-image");return n&&(tn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},hb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(tn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},db=t=>{const e={},n=t.querySelector("swal-input");n&&(tn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},Qe(s).forEach(i=>{tn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},fb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(tn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},pb=t=>{const e=Id.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Qe(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&je(`Unrecognized element <${s}>`)})},tn=(t,e)=>{Qe(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&je([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},ol={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function gb(t){t.inputValidator||Object.keys(ol).forEach(e=>{t.input===e&&(t.inputValidator=ol[e])})}function mb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(je('Target parameter is not valid, defaulting to "body"'),t.target="body")}function yb(t){gb(t),t.showLoaderOnConfirm&&!t.preConfirm&&je(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),mb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),kw(t)}class vb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const wb=()=>{En.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(En.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${En.previousBodyPadding+Pw()}px`)},bb=()=>{En.previousBodyPadding!==null&&(document.body.style.paddingRight=`${En.previousBodyPadding}px`,En.previousBodyPadding=null)},Eb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!vt(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,z(document.body,f.iosfix),_b(),Tb()}},Tb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&X().scrollHeight>window.innerHeight-44&&(Pe().style.paddingBottom=`${44}px`)},_b=()=>{const t=Pe();let e;t.ontouchstart=n=>{e=Cb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Cb=t=>{const e=t.target,n=Pe();return Ib(t)||Sb(t)?!1:e===n||!nl(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(nl(ki())&&ki().contains(e))},Ib=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Sb=t=>t.touches&&t.touches.length>1,Ab=()=>{if(vt(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);dt(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Sd=10,kb=t=>{const e=Pe(),n=X();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Pb(e,n,t),setTimeout(()=>{Db(e,n)},Sd),Ma()&&(Nb(e,t.scrollbarPadding,i),ob()),!ur()&&!F.previousActiveElement&&(F.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),dt(e,f["no-transition"])},Ad=t=>{const e=X();if(t.target!==e)return;const n=Pe();e.removeEventListener(_s,Ad),n.style.overflowY="auto"},Db=(t,e)=>{_s&&bd(e)?(t.style.overflowY="hidden",e.addEventListener(_s,Ad)):t.style.overflowY="auto"},Nb=(t,e,n)=>{Eb(),e&&n!=="hidden"&&wb(),setTimeout(()=>{t.scrollTop=0})},Pb=(t,e,n)=>{z(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Te(e,"grid"),setTimeout(()=>{z(e,n.showClass.popup),e.style.removeProperty("opacity")},Sd),z([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&z([document.documentElement,document.body],f["height-auto"])},Mn=t=>{let e=X();e||new Is,e=X();const n=zn();ur()?Oe(Hs()):Ob(e,t),Te(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Ob=(t,e)=>{const n=zs(),s=zn();!e&&Ge(it())&&(e=it()),Te(n),e&&(Oe(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),z([t,n],f.loading)},Rb=(t,e)=>{e.input==="select"||e.input==="radio"?Bb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Oa(e.inputValue)||Ra(e.inputValue))&&(Mn(it()),Vb(t,e))},Lb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return xb(n);case"radio":return Mb(n);case"file":return Fb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},xb=t=>t.checked?1:0,Mb=t=>t.checked?t.value:null,Fb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Bb=(t,e)=>{const n=X(),s=i=>Ub[e.input](n,bo(i),e);Oa(e.inputOptions)||Ra(e.inputOptions)?(Mn(it()),js(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):cn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Vb=(t,e)=>{const n=t.getInput();Oe(n),js(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Te(n),n.focus(),t.hideLoading()}).catch(s=>{cn(`Error in inputValue promise: ${s}`),n.value="",Te(n),n.focus(),t.hideLoading()})},Ub={select:(t,e,n)=>{const s=Ct(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Ae(c,o),c.selected=al(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Ct(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,al(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Ae(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},bo=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=bo(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=bo(s)),e.push([n,s])}),e},al=(t,e)=>e&&e.toString()===t.toString();function cl(){const t=V.innerParams.get(this);if(!t)return;const e=V.domCache.get(this);Oe(e.loader),ur()?t.icon&&Te(Hs()):$b(e),dt([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const $b=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Te(e[0],"inline-block"):yw()&&Oe(t.actions)};function jb(t){const e=V.innerParams.get(t||this),n=V.domCache.get(t||this);return n?Fa(n.popup,e.input):null}const Cs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},qb=()=>Ge(X()),kd=()=>it()&&it().click(),Hb=()=>Lt()&&Lt().click(),zb=()=>en()&&en().click(),Dd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Kb=(t,e,n,s)=>{Dd(e),n.toast||(e.keydownHandler=i=>Wb(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:X(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Eo=(t,e,n)=>{const s=xa();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();X().focus()},Nd=["ArrowRight","ArrowDown"],Gb=["ArrowLeft","ArrowUp"],Wb=(t,e,n)=>{const s=V.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Qb(t,e,s):e.key==="Tab"?Yb(e,s):[...Nd,...Gb].includes(e.key)?Xb(e.key):e.key==="Escape"&&Jb(e,s,n)))},Qb=(t,e,n)=>{if(ar(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;kd(),e.preventDefault()}},Yb=(t,e)=>{const n=t.target,s=xa();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Eo(e,i,-1):Eo(e,i,1),t.stopPropagation(),t.preventDefault()},Xb=t=>{const e=it(),n=Lt(),s=en();if(![e,n,s].includes(document.activeElement))return;const i=Nd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<zs().children.length;o++){if(r=r[i],!r)return;if(Ge(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},Jb=(t,e,n)=>{ar(e.allowEscapeKey)&&(t.preventDefault(),n(Kn.esc))};function Pd(t,e,n,s){ur()?ll(t,s):(Ew(n).then(()=>ll(t,s)),Dd(F)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ma()&&(bb(),Ab(),Cd()),Zb()}function Zb(){dt([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function ni(t){t=s0(t);const e=Cs.swalPromiseResolve.get(this),n=t0(this);this.isAwaitingPromise()?t.isDismissed||(Gs(this),e(t)):n&&e(t)}function e0(){return!!V.awaitingPromise.get(this)}const t0=t=>{const e=X();if(!e)return!1;const n=V.innerParams.get(t);if(!n||vt(e,n.hideClass.popup))return!1;dt(e,n.showClass.popup),z(e,n.hideClass.popup);const s=Pe();return dt(s,n.showClass.backdrop),z(s,n.hideClass.backdrop),i0(t,e,n),!0};function n0(t){const e=Cs.swalPromiseReject.get(this);Gs(this),e&&e(t)}const Gs=t=>{t.isAwaitingPromise()&&(V.awaitingPromise.delete(t),V.innerParams.get(t)||t._destroy())},s0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),i0=(t,e,n)=>{const s=Pe(),i=_s&&bd(e);typeof n.willClose=="function"&&n.willClose(e),i?r0(t,e,s,n.returnFocus,n.didClose):Pd(t,s,n.returnFocus,n.didClose)},r0=(t,e,n,s,i)=>{F.swalCloseEventFinishedCallback=Pd.bind(null,t,n,s,i),e.addEventListener(_s,function(r){r.target===e&&(F.swalCloseEventFinishedCallback(),delete F.swalCloseEventFinishedCallback)})},ll=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Od(t,e,n){const s=V.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Rd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function o0(){Od(this,["confirmButton","denyButton","cancelButton"],!1)}function a0(){Od(this,["confirmButton","denyButton","cancelButton"],!0)}function c0(){return Rd(this.getInput(),!1)}function l0(){return Rd(this.getInput(),!0)}function u0(t){const e=V.domCache.get(this),n=V.innerParams.get(this);Ae(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&z(e.validationMessage,n.customClass.validationMessage),Te(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),vd(s),z(s,f.inputerror))}function h0(){const t=V.domCache.get(this);t.validationMessage&&Oe(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),dt(e,f.inputerror))}function d0(){return V.domCache.get(this).progressSteps}function f0(t){const e=X(),n=V.innerParams.get(this);if(!e||vt(e,n.hideClass.popup))return je("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=p0(t),i=Object.assign({},n,s);_d(this,i),V.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const p0=t=>{const e={};return Object.keys(t).forEach(n=>{dd(n)?e[n]=t[n]:je(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function g0(){const t=V.domCache.get(this),e=V.innerParams.get(this);if(!e){Ld(this);return}t.popup&&F.swalCloseEventFinishedCallback&&(F.swalCloseEventFinishedCallback(),delete F.swalCloseEventFinishedCallback),F.deferDisposalTimer&&(clearTimeout(F.deferDisposalTimer),delete F.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),m0(this)}const m0=t=>{Ld(t),delete t.params,delete F.keydownHandler,delete F.keydownTarget,delete F.currentInstance},Ld=t=>{t.isAwaitingPromise()?(Pr(V,t),V.awaitingPromise.set(t,!0)):(Pr(Cs,t),Pr(V,t))},Pr=(t,e)=>{for(const n in t)t[n].delete(e)},xd=Object.freeze(Object.defineProperty({__proto__:null,_destroy:g0,close:ni,closeModal:ni,closePopup:ni,closeToast:ni,disableButtons:a0,disableInput:l0,disableLoading:cl,enableButtons:o0,enableInput:c0,getInput:jb,getProgressSteps:d0,handleAwaitingPromise:Gs,hideLoading:cl,isAwaitingPromise:e0,rejectPromise:n0,resetValidationMessage:h0,showValidationMessage:u0,update:f0},Symbol.toStringTag,{value:"Module"})),y0=t=>{const e=V.innerParams.get(t);t.disableButtons(),e.input?Md(t,"confirm"):ja(t,!0)},v0=t=>{const e=V.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Md(t,"deny"):$a(t,!1)},w0=(t,e)=>{t.disableButtons(),e(Kn.cancel)},Md=(t,e)=>{const n=V.innerParams.get(t);if(!n.input)return cn(`The "input" parameter is needed to be set when using returnInputValueOn${Pa(e)}`);const s=Lb(t,n);n.inputValidator?b0(t,s,e):t.getInput().checkValidity()?e==="deny"?$a(t,s):ja(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},b0=(t,e,n)=>{const s=V.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>js(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?$a(t,e):ja(t,e)})},$a=(t,e)=>{const n=V.innerParams.get(t||globalThis);n.showLoaderOnDeny&&Mn(Lt()),n.preDeny?(V.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>js(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Gs(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Fd(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},ul=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Fd=(t,e)=>{t.rejectPromise(e)},ja=(t,e)=>{const n=V.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&Mn(),n.preConfirm?(t.resetValidationMessage(),V.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>js(n.preConfirm(e,n.validationMessage))).then(i=>{Ge(cr())||i===!1?(t.hideLoading(),Gs(t)):ul(t,typeof i>"u"?e:i)}).catch(i=>Fd(t||globalThis,i))):ul(t,e)},E0=(t,e,n)=>{V.innerParams.get(t).toast?T0(t,e,n):(C0(e),I0(e),S0(t,e,n))},T0=(t,e,n)=>{e.popup.onclick=()=>{const s=V.innerParams.get(t);s&&(_0(s)||s.timer||s.input)||n(Kn.close)}},_0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Di=!1;const C0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Di=!0)}}},I0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Di=!0)}}},S0=(t,e,n)=>{e.container.onclick=s=>{const i=V.innerParams.get(t);if(Di){Di=!1;return}s.target===e.container&&ar(i.allowOutsideClick)&&n(Kn.backdrop)}},A0=t=>typeof t=="object"&&t.jquery,hl=t=>t instanceof Element||A0(t),k0=t=>{const e={};return typeof t[0]=="object"&&!hl(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||hl(i)?e[n]=i:i!==void 0&&cn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function D0(...t){const e=this;return new e(...t)}function N0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const P0=()=>F.timeout&&F.timeout.getTimerLeft(),Bd=()=>{if(F.timeout)return vw(),F.timeout.stop()},Vd=()=>{if(F.timeout){const t=F.timeout.start();return Ba(t),t}},O0=()=>{const t=F.timeout;return t&&(t.running?Bd():Vd())},R0=t=>{if(F.timeout){const e=F.timeout.increase(t);return Ba(e,!0),e}},L0=()=>F.timeout&&F.timeout.isRunning();let dl=!1;const To={};function x0(t="data-swal-template"){To[t]=this,dl||(document.body.addEventListener("click",M0),dl=!0)}const M0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in To){const s=e.getAttribute(n);if(s){To[n].fire({template:s});return}}},F0=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:k0,bindClickHandler:x0,clickCancel:zb,clickConfirm:kd,clickDeny:Hb,enableLoading:Mn,fire:D0,getActions:zs,getCancelButton:en,getCloseButton:La,getConfirmButton:it,getContainer:Pe,getDenyButton:Lt,getFocusableElements:xa,getFooter:yd,getHtmlContainer:ki,getIcon:Hs,getImage:gd,getInputLabel:fw,getLoader:zn,getPopup:X,getTimerLeft:P0,getTimerProgressBar:lr,getTitle:pd,getValidationMessage:cr,increaseTimer:R0,isDeprecatedParameter:wo,isLoading:gw,isTimerRunning:L0,isUpdatableParameter:dd,isValidParameter:hd,isVisible:qb,mixin:N0,resumeTimer:Vd,showLoading:Mn,stopTimer:Bd,toggleTimer:O0},Symbol.toStringTag,{value:"Module"}));let _o;class Gn{constructor(...e){if(typeof window>"u")return;_o=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);V.promise.set(this,s)}_main(e,n={}){hw(Object.assign({},n,e)),F.currentInstance&&(F.currentInstance._destroy(),Ma()&&Cd()),F.currentInstance=this;const s=V0(e,n);yb(s),Object.freeze(s),F.timeout&&(F.timeout.stop(),delete F.timeout),clearTimeout(F.restoreFocusTimeout);const i=U0(this);return _d(this,s),V.innerParams.set(this,s),B0(this,i,s)}then(e){return V.promise.get(this).then(e)}finally(e){return V.promise.get(this).finally(e)}}const B0=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Cs.swalPromiseResolve.set(t,s),Cs.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>y0(t),e.denyButton.onclick=()=>v0(t),e.cancelButton.onclick=()=>w0(t,r),e.closeButton.onclick=()=>r(Kn.close),E0(t,e,r),Kb(t,F,n,r),Rb(t,n),kb(n),$0(F,n,r),j0(e,n),setTimeout(()=>{e.container.scrollTop=0})}),V0=(t,e)=>{const n=ab(t),s=Object.assign({},bn,e,n,t);return s.showClass=Object.assign({},bn.showClass,s.showClass),s.hideClass=Object.assign({},bn.hideClass,s.hideClass),s},U0=t=>{const e={popup:X(),container:Pe(),actions:zs(),confirmButton:it(),denyButton:Lt(),cancelButton:en(),loader:zn(),closeButton:La(),validationMessage:cr(),progressSteps:md()};return V.domCache.set(t,e),e},$0=(t,e,n)=>{const s=lr();Oe(s),e.timer&&(t.timeout=new vb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Te(s),Je(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Ba(e.timer)})))},j0=(t,e)=>{if(!e.toast){if(!ar(e.allowEnterKey))return H0();q0(t,e)||Eo(e,-1,1)}},q0=(t,e)=>e.focusDeny&&Ge(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ge(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ge(t.confirmButton)?(t.confirmButton.focus(),!0):!1,H0=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Gn.prototype,xd);Object.assign(Gn,F0);Object.keys(xd).forEach(t=>{Gn[t]=function(...e){if(_o)return _o[t](...e)}});Gn.DismissReason=Kn;Gn.version="11.4.8";const Is=Gn;Is.default=Is;const un=[];function dr(t,e=ye){let n;const s=new Set;function i(a){if(nn(t,a)&&(t=a,n)){const c=!un.length;for(const l of s)l[1](),un.push(l,t);if(c){for(let l=0;l<un.length;l+=2)un[l][0](un[l+1]);un.length=0}}}function r(a){i(a(t))}function o(a,c=ye){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||ye),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Or=dr({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Co=dr(""),Io=dr(""),So=dr(""),z0=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},K0=async t=>{try{await Da(Ln(ze,"Pacientes",t.id),t)}catch(e){console.log(e)}};function fl(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function G0(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=pl(fl(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bl()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);Fe(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=fl(i,n,o);s[o]?s[o].p(a,r):(s[o]=pl(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Ao(s,i),i&&Re(e)}}}function W0(t){let e;return{c(){e=I("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){Fe(n,e,s)},p:ye,d(n){n&&Re(e)}}}function pl(t){let e,n=`${t[6].apellido}, ${t[6].nombre}${t[6].plan=="particular"?"":" -"+t[6].nroSocio+" - plan "+t[6].plan} `,s;return{c(){e=I("option"),s=ae(n),e.__value=t[8],e.value=e.__value},m(i,r){Fe(i,e,r),w(e,s)},p(i,r){r&1&&n!==(n=`${i[6].apellido}, ${i[6].nombre}${i[6].plan=="particular"?"":" -"+i[6].nroSocio+" - plan "+i[6].plan} `)&&at(s,n)},d(i){i&&Re(e)}}}function Q0(t){let e,n,s;function i(a,c){return a[0].length==0?W0:G0}let r=i(t),o=r(t);return{c(){e=I("select"),o.c(),g(e,"name","select-pacientes"),g(e,"class","select-Pacientes svelte-2shrp8"),g(e,"id","selectPacientes"),g(e,"size",5),t[1]===void 0&&_n(()=>t[4].call(e))},m(a,c){Fe(a,e,c),o.m(e,null),Tn(e,t[1]),n||(s=[te(e,"change",t[2]),te(e,"change",t[4])],n=!0)},p(a,[c]){r===(r=i(a))&&o?o.p(a,c):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),c&2&&Tn(e,a[1])},i:ye,o:ye,d(a){a&&Re(e),o.d(),n=!1,rt(s)}}}function Y0(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r;const o=Tl(),a=l=>{const u=l.target.value;n(3,i=s[u].plan),o("cambioSelectPaciente",u),console.log("dispatch cambioSelectPaciente, valorindiceSelectPaciente: ",u)};function c(){r=ko(this),n(1,r)}return t.$$set=l=>{"pacientesFiltrada"in l&&n(0,s=l.pacientesFiltrada),"planSelect"in l&&n(3,i=l.planSelect)},[s,r,a,i,c]}class X0 extends Bn{constructor(e){super(),Fn(this,e,Y0,Q0,nn,{pacientesFiltrada:0,planSelect:3})}}function J0(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,E,v,A,C,U,L,$,G,K,B,W,J,Le,ie,Be,N,oe,Ye,we,pt,qe,gt,Xe,T,q,xe,He;return $=new X0({props:{pacientesFiltrada:t[1],planSelect:t[4]}}),$.$on("cambioSelectPaciente",t[15]),T=new rf({props:{planes:t[3],planSeleccionado:t[9],SelectPlanVisible:t[5]}}),T.$on("cambioPlan",t[14]),T.$on("clickCheckPlan",t[16]),{c(){e=I("body"),n=I("div"),s=I("div"),i=I("button"),r=ae("create"),a=ee(),c=I("button"),l=ae("update"),h=ee(),d=I("button"),p=ae("delete"),E=ee(),v=I("div"),A=I("label"),A.textContent="filtrar por apellido",C=I("input"),U=ee(),L=I("div"),ls($.$$.fragment),G=ee(),K=I("div"),B=I("label"),B.textContent="nombre",W=I("input"),J=ee(),Le=I("label"),Le.textContent="apellido",ie=I("input"),Be=ee(),N=I("div"),oe=I("label"),oe.textContent="nº socio",Ye=ee(),we=I("input"),pt=ee(),qe=I("label"),gt=ae(t[10]),Xe=ee(),ls(T.$$.fragment),i.disabled=o=!t[6]||!t[7]||!t[9]||!t[8],g(i,"class","svelte-v8du9y"),c.disabled=u=!t[6]||!t[7]||!t[9]||!t[8]||!t[2],g(c,"class","svelte-v8du9y"),d.disabled=m=!t[2],g(d,"class","svelte-v8du9y"),g(s,"class","buttons svelte-v8du9y"),g(n,"id","botones"),g(n,"class","svelte-v8du9y"),g(A,"for","filterPrefix"),g(A,"class","svelte-v8du9y"),g(C,"name","filterPrefix"),g(C,"placeholder","filter prefix"),g(C,"class","svelte-v8du9y"),g(v,"id","filter"),g(v,"class","svelte-v8du9y"),g(L,"id","selectPacientes"),g(L,"class","svelte-v8du9y"),g(B,"for","nombre"),g(B,"class","svelte-v8du9y"),g(W,"name","nombre"),g(W,"placeholder","nombre"),g(W,"class","svelte-v8du9y"),g(Le,"for","apellido"),g(Le,"class","svelte-v8du9y"),g(ie,"name","apellido"),g(ie,"placeholder","apellido"),g(ie,"class","svelte-v8du9y"),g(K,"id","formInputsI"),g(K,"class","svelte-v8du9y"),g(oe,"for","nroSocio"),g(oe,"class","svelte-v8du9y"),g(we,"name","nroSocio"),g(we,"placeholder","nro de Socio"),g(we,"class","svelte-v8du9y"),g(qe,"id","labelPlan"),g(qe,"for","plan"),g(qe,"class","svelte-v8du9y"),g(N,"id","formInputsD"),g(N,"class","svelte-v8du9y"),g(e,"class","svelte-v8du9y")},m(x,Z){Fe(x,e,Z),w(e,n),w(n,s),w(s,i),w(i,r),w(s,a),w(s,c),w(c,l),w(s,h),w(s,d),w(d,p),w(e,E),w(e,v),w(v,A),w(v,C),me(C,t[0]),w(e,U),w(e,L),Cn($,L,null),w(e,G),w(e,K),w(K,B),w(K,W),me(W,t[6]),w(K,J),w(K,Le),w(K,ie),me(ie,t[7]),w(e,Be),w(e,N),w(N,oe),w(N,Ye),w(N,we),me(we,t[8]),w(N,pt),w(N,qe),w(qe,gt),w(N,Xe),Cn(T,N,null),q=!0,xe||(He=[te(i,"click",t[11]),te(c,"click",t[12]),te(d,"click",t[13]),te(C,"input",t[19]),te(W,"input",t[20]),te(ie,"input",t[21]),te(we,"input",t[22])],xe=!0)},p(x,Z){(!q||Z[0]&960&&o!==(o=!x[6]||!x[7]||!x[9]||!x[8]))&&(i.disabled=o),(!q||Z[0]&964&&u!==(u=!x[6]||!x[7]||!x[9]||!x[8]||!x[2]))&&(c.disabled=u),(!q||Z[0]&4&&m!==(m=!x[2]))&&(d.disabled=m),Z[0]&1&&C.value!==x[0]&&me(C,x[0]);const Vt={};Z[0]&2&&(Vt.pacientesFiltrada=x[1]),Z[0]&16&&(Vt.planSelect=x[4]),$.$set(Vt),Z[0]&64&&W.value!==x[6]&&me(W,x[6]),Z[0]&128&&ie.value!==x[7]&&me(ie,x[7]),Z[0]&256&&we.value!==x[8]&&me(we,x[8]),(!q||Z[0]&1024)&&at(gt,x[10]);const mt={};Z[0]&8&&(mt.planes=x[3]),Z[0]&512&&(mt.planSeleccionado=x[9]),Z[0]&32&&(mt.SelectPlanVisible=x[5]),T.$set(mt)},i(x){q||(Nt($.$$.fragment,x),Nt(T.$$.fragment,x),q=!0)},o(x){Qt($.$$.fragment,x),Qt(T.$$.fragment,x),q=!1},d(x){x&&Re(e),In($),In(T),xe=!1,rt(He)}}}function Z0(t,e,n){let s,i,r,o,a;jt(t,Or,T=>n(24,i=T)),jt(t,So,T=>n(25,r=T)),jt(t,Io,T=>n(26,o=T)),jt(t,Co,T=>n(27,a=T));let c=[],l=["nombre","apellido","nroSocio","plan","createdAt"],u=[],h="",d,p;El(()=>{const T=_t(ze,"Pacientes"),xe=rs(T,po("apellido"));p=yo(xe,x=>{n(17,c=x.docs.map(Z=>({...Z.data(),id:Z.id}))),z0(c,l),c.forEach(Z=>{K0(Z)}),document.getElementById("selectPacientes").selected=U},x=>{console.log(x)}),(async()=>{const x=_t(ze,"planes"),Z=await go(x);n(3,u=Z.docs.map(Vt=>Vt.data().plan)),u.push("particular"),u.sort(),n(4,h="particular")})()}),Gd(p);let m="",E="",v="",A="",C="",U=0,L,$="plan";Wn(Or,i=s,i);const G=T=>{n(6,E=T?T.nombre:""),n(7,v=T?T.apellido:""),n(8,A=T?T.nroSocio:""),n(9,C=T?T.plan:"")},K=async()=>{try{await rd(_t(ze,"Pacientes"),{nombre:E,apellido:v,nroSocio:A,createdAt:new Date().toLocaleDateString(),plan:C}),wn({text:"Nuevo paciente agregado"}).showToast()}catch(T){console.error(T)}},B=()=>{n(17,c=c.concat({nombre:E,apellido:v})),n(18,U=c.length-1),K(),n(6,E=n(7,v=n(9,C=n(8,A=""))))},W=async T=>{try{await Da(Ln(ze,"Pacientes",T.id),T),wn({text:`paciente ${T.apellido}, ${T.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(q){console.error(q)}},J=()=>{n(2,s.nombre=E,s),n(2,s.apellido=v,s),n(9,C=s.plan),n(2,s.nroSocio=A,s),n(2,s),n(1,L),n(18,U),n(0,m),n(17,c),n(17,c),W(s)},Le=async T=>{try{await mo(Ln(ze,"Pacientes",T.id)),wn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(xe){console.error(xe)}const q=rs(_t(ze,"sesiones"),fo("pacienteID","==",T.id));console.log(`desde delete q=pacientes a borrar ${q} - paciente: ${T.nombre} ${T.apellido} ${T.id}`);try{(await go(q)).forEach(He=>{mo(He.ref)})}catch(xe){console.log(xe)}},ie=()=>{const T=c.indexOf(s);Is.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(q=>{q.isConfirmed&&(Is.fire("Deleted!","Your file has been deleted.","success"),Le(c[U]),n(17,c=[...c.slice(0,T),...c.slice(T+1)]),n(6,E=n(7,v=n(8,A=n(9,C="")))),n(18,U=Math.min(U,L.length-2)))})},Be=T=>{n(2,s.plan=T,s),n(2,s.nombre=E,s),n(2,s.apellido=v,s),n(2,s.nroSocio=A,s),n(1,L[U].plan=T,L),W(s)},N=T=>{n(9,C=T.detail.valor.planSeleccionado),s.plan!=C&&Be(C)},oe=T=>{T?(n(10,$="particular"),n(5,d=!1)):(n(10,$="plan"),n(5,d=!0))},Ye=T=>{n(18,U=T.detail),n(9,C=L[U].plan);const q=C=="particular";oe(q)},we=T=>{const q=T.detail.valor.SelectPlanVisible;q?q&&C=="particular"&&n(9,C="210"):n(9,C="particular"),Be(C),oe(!q)};function pt(){m=this.value,n(0,m)}function qe(){E=this.value,n(6,E)}function gt(){v=this.value,n(7,v)}function Xe(){A=this.value,n(8,A)}return t.$$.update=()=>{t.$$.dirty[0]&131073&&n(1,L=m?c.filter(T=>`${T.apellido}, ${T.nombre}`.toLowerCase().startsWith(m.toLowerCase())):c.map(T=>({nombre:T.nombre,apellido:T.apellido,plan:T.plan,nroSocio:T.nroSocio,id:T.id}))),t.$$.dirty[0]&262146&&n(2,s=L[U]),t.$$.dirty[0]&4&&s&&(Wn(Or,i=s,i),Wn(Co,a=s.apellido,a),Wn(Io,o=s.nombre,o),Wn(So,r=s.id,r)),t.$$.dirty[0]&4&&G(s)},[m,L,s,u,h,d,E,v,A,C,$,B,J,ie,N,Ye,we,c,U,pt,qe,gt,Xe]}class eE extends Bn{constructor(e){super(),Fn(this,e,Z0,J0,nn,{},null,[-1,-1])}}function gl(t,e,n){const s=t.slice();return s[28]=e[n],s}function ml(t){let e,n,s=t[28].diaSesion+"",i,r,o=t[28].valorSesion+"",a,c,l=t[28].fechaPago+"",u,h,d=t[28].valorPago+"",p,m,E;return{c(){e=I("option"),n=ae("dia sesion: "),i=ae(s),r=ae(" - valor sesion: "),a=ae(o),c=ae(`
              - dia pago `),u=ae(l),h=ae(" - valor pago "),p=ae(d),m=ee(),g(e,"class"," svelte-40a4zh"),e.__value=E=t[28].id,e.value=e.__value},m(v,A){Fe(v,e,A),w(e,n),w(e,i),w(e,r),w(e,a),w(e,c),w(e,u),w(e,h),w(e,p),w(e,m)},p(v,A){A&1&&s!==(s=v[28].diaSesion+"")&&at(i,s),A&1&&o!==(o=v[28].valorSesion+"")&&at(a,o),A&1&&l!==(l=v[28].fechaPago+"")&&at(u,l),A&1&&d!==(d=v[28].valorPago+"")&&at(p,d),A&1&&E!==(E=v[28].id)&&(e.__value=E,e.value=e.__value)},d(v){v&&Re(e)}}}function yl(t){let e=Object.values(t[28]).includes(t[3]),n,s=e&&ml(t);return{c(){s&&s.c(),n=bl()},m(i,r){s&&s.m(i,r),Fe(i,n,r)},p(i,r){r&9&&(e=Object.values(i[28]).includes(i[3])),e?s?s.p(i,r):(s=ml(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&Re(n)}}}function tE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,E,v,A,C,U,L,$,G,K,B,W,J,Le;return{c(){e=I("div"),n=I("form"),s=I("div"),i=I("div"),r=I("label"),r.textContent="pago",o=I("input"),a=ee(),c=I("label"),c.textContent="valor sesion",l=I("input"),u=ee(),h=I("div"),d=I("label"),d.textContent="Dia Sesion",p=I("input"),m=ee(),E=I("label"),E.textContent="Fecha Pago",v=I("input"),A=ee(),C=I("div"),U=I("button"),U.textContent="update",L=ee(),$=I("button"),$.textContent="delete",G=ee(),K=I("button"),K.textContent="Agregar sesión",B=ee(),W=I("button"),W.textContent="registros mes actual",g(r,"for","valorPago"),g(r,"class","svelte-40a4zh"),g(o,"name","valorPago"),g(o,"type","number"),g(o,"step","100"),g(o,"min","0"),g(o,"placeholder","Valor pago"),g(o,"class","svelte-40a4zh"),g(c,"for","valorSesion"),g(c,"class","svelte-40a4zh"),g(l,"name","valorSesion"),g(l,"type","number"),g(l,"step","100"),g(l,"min","0"),g(l,"placeholder","Valor sesión"),g(l,"class","svelte-40a4zh"),g(i,"id","inputsFormSesionesI"),g(i,"class","svelte-40a4zh"),g(d,"for","diaSesion"),g(d,"class","svelte-40a4zh"),g(p,"name","diaSesion"),g(p,"type","date"),g(p,"placeholder","Día sesión"),g(p,"class","svelte-40a4zh"),g(E,"for","fechaPago"),g(E,"class","svelte-40a4zh"),g(v,"name","fechaPago"),g(v,"type","date"),g(v,"placeholder","Fecha pago"),g(v,"class","svelte-40a4zh"),g(h,"id","inputsFormSesionesD"),g(h,"class","svelte-40a4zh"),g(U,"class","svelte-40a4zh"),g($,"class","svelte-40a4zh"),g(K,"class","svelte-40a4zh"),g(W,"class","svelte-40a4zh"),g(C,"id","botonesFormSesiones"),g(C,"class","buttons svelte-40a4zh"),g(s,"id","form-Sesiones"),g(s,"class","svelte-40a4zh"),g(n,"class","svelte-40a4zh"),g(e,"id","contenedor-form-sesiones"),g(e,"class","svelte-40a4zh")},m(ie,Be){Fe(ie,e,Be),w(e,n),w(n,s),w(s,i),w(i,r),w(i,o),me(o,t[4]),w(i,a),w(i,c),w(i,l),me(l,t[5]),w(s,u),w(s,h),w(h,d),w(h,p),me(p,t[6]),w(h,m),w(h,E),w(h,v),me(v,t[7]),w(s,A),w(s,C),w(C,U),w(C,L),w(C,$),w(C,G),w(C,K),w(C,B),w(C,W),J||(Le=[te(o,"input",t[19]),te(l,"input",t[20]),te(p,"input",t[21]),te(v,"input",t[22]),te(U,"click",t[23]),te($,"click",t[24]),te(K,"click",t[11]),te(W,"click",t[25]),te(n,"submit",qd(t[17]))],J=!0)},p(ie,Be){Be&16&&ci(o.value)!==ie[4]&&me(o,ie[4]),Be&32&&ci(l.value)!==ie[5]&&me(l,ie[5]),Be&64&&me(p,ie[6]),Be&128&&me(v,ie[7])},d(ie){ie&&Re(e),J=!1,rt(Le)}}}function nE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,m,E,v=t[15](t[3])+"",A,C,U,L,$=t[0],G=[];for(let B=0;B<$.length;B+=1)G[B]=yl(gl(t,$,B));let K=tE(t);return{c(){e=I("main"),n=I("body"),s=I("h4"),i=ae("Paciente: "),r=ae(t[8]),o=ae(", "),a=ae(t[9]),c=ee(),l=I("div"),u=I("select");for(let B=0;B<G.length;B+=1)G[B].c();h=ee(),d=I("p"),d.textContent=`total general:${t[14]()}`,p=ee(),m=I("p"),E=ae("total por paciente:"),A=ae(v),C=ee(),K&&K.c(),g(s,"class","svelte-40a4zh"),g(u,"size",5),g(u,"class","svelte-40a4zh"),t[1]===void 0&&_n(()=>t[18].call(u)),g(d,"id","totalGeneral"),g(d,"class","svelte-40a4zh"),g(m,"class","svelte-40a4zh"),g(l,"id","select"),g(l,"class","svelte-40a4zh"),g(n,"class","svelte-40a4zh"),g(e,"class","svelte-40a4zh")},m(B,W){Fe(B,e,W),w(e,n),w(n,s),w(s,i),w(s,r),w(s,o),w(s,a),w(n,c),w(n,l),w(l,u);for(let J=0;J<G.length;J+=1)G[J]&&G[J].m(u,null);Tn(u,t[1]),w(l,h),w(l,d),w(l,p),w(l,m),w(m,E),w(m,A),w(n,C),K&&K.m(n,null),U||(L=[te(u,"change",t[10]),te(u,"change",t[18])],U=!0)},p(B,[W]){if(W&256&&at(r,B[8]),W&512&&at(a,B[9]),W&9){$=B[0];let J;for(J=0;J<$.length;J+=1){const Le=gl(B,$,J);G[J]?G[J].p(Le,W):(G[J]=yl(Le),G[J].c(),G[J].m(u,null))}for(;J<G.length;J+=1)G[J].d(1);G.length=$.length}W&3&&Tn(u,B[1]),W&8&&v!==(v=B[15](B[3])+"")&&at(A,v),K.p(B,W)},i:ye,o:ye,d(B){B&&Re(e),Ao(G,B),K&&K.d(),U=!1,rt(L)}}}function sE(t,e,n){let s,i,r;jt(t,So,N=>n(3,s=N)),jt(t,Co,N=>n(8,i=N)),jt(t,Io,N=>n(9,r=N));let{sesiones:o}=e,a;El(()=>{const N=[],oe=_t(ze,"sesiones"),Ye=_t(ze,"Pacientes"),we=rs(oe,po("diaSesion")),pt=rs(Ye,po("apellido")),qe=yo(we,Xe=>{n(0,o=Xe.docs.map(q=>({id:q.id,...q.data()})));const T=(q,xe)=>q.diaSesion<xe.diaSesion?-1:q.diaSesion>xe.diaSesion?1:0;o.sort(T)});console.log("desde onMount CRUDSesiones",o),N.push(qe);const gt=yo(pt,Xe=>{n(16,a=Xe.docs.map(T=>({id:T.id,...T.data()})))});return N.push(gt),()=>{N.forEach(Xe=>Xe())}});let c,l;const u=N=>{n(1,c=N.target.value),console.log(o),n(2,l=o.find(oe=>oe.id===c)),console.log("selectedSession",l),n(4,m=l.valorPago),n(5,E=l.valorSesion),n(7,A=l.fechaPago),n(6,v=l.diaSesion)},h=async()=>{console.log("Add sesion",l);try{const N=await rd(_t(ze,"sesiones"),{valorPago:m,valorSesion:E,diaSesion:v,fechaPago:A,pacienteID:s});console.log("sesion agregada"),wn({text:"Nueva sesion agregada"}).showToast(),n(1,c=N.id)}catch(N){console.error(N)}},d=async N=>{console.log("Update sesion",N);try{await Da(Ln(ze,"sesiones",N.id),{valorPago:m,valorSesion:E,fechaPago:A,diaSesion:v}),wn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(oe){console.log(oe)}},p=async N=>{console.log("Delete sesion",N);try{await mo(Ln(ze,"sesiones",N.id)),wn({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(oe){console.error(oe)}};let m=5e3,E=5e3,v=new Date().toISOString().slice(0,10),A=new Date().toISOString().slice(0,10);const C=async()=>{const N=_t(ze,"sesiones"),oe=new Date,Ye=oe.getMonth()+1,we=oe.getFullYear(),pt=(Ye-1).toString().padStart(2,"0"),qe=we.toString(),gt=`${qe}-${pt}-01`,Xe=`${qe}-${pt}-31`,T=rs(N,fo("diaSesion",">=",gt),fo("diaSesion","<=",Xe));try{const q=await go(T),xe=q.docs.map(Z=>Z.data());console.log("sesiones por mes actual",xe);let He=0;q.forEach(Z=>{console.log(a);let Vt=Z.data().pacienteID;const mt=a.find(Ud=>Ud.id==Vt);console.log(mt);const fr=Z.data().valorPago;(typeof fr=="number"||fr==null)&&(mt.plan=="particular"?(He+=fr,console.log(`paciente ${mt.apellido}, valor pago ${Z.data().valorPago}, total acumulado ${He}`)):(He+=2700,console.log(`paciente ${mt.apellido}, valor pago 2700, total acumulado ${He}`)))}),console.log("Total pagos mes actual: ",He);const x=document.querySelector("#totalGeneral");return x.innerHTML="total mes: $"+He.toString(),He}catch(q){return console.error("Error al obtener las sesiones y los pagos:",q),[]}},U=()=>o.reduce((N,oe)=>N+oe.valorPago,0),L=N=>o.filter(Ye=>Ye.pacienteID===N).reduce((Ye,we)=>Ye+we.valorPago,0);function $(N){Wd.call(this,t,N)}function G(){c=ko(this),n(1,c),n(0,o)}function K(){m=ci(this.value),n(4,m)}function B(){E=ci(this.value),n(5,E)}function W(){v=this.value,n(6,v)}function J(){A=this.value,n(7,A)}const Le=()=>d(l),ie=()=>p(l),Be=()=>C();return t.$$set=N=>{"sesiones"in N&&n(0,o=N.sesiones)},t.$$.update=()=>{t.$$.dirty&65537&&console.log("luego de las subscripciones a pacientes y sesiones",o,a),t.$$.dirty&7&&(n(2,l=o.find(N=>N.id===c)),console.log(l||"sin seleccion de sesion")),t.$$.dirty&8&&L(s)},U(),C(),[o,c,l,s,m,E,v,A,i,r,u,h,d,p,C,L,a,$,G,K,B,W,J,Le,ie,Be]}class iE extends Bn{constructor(e){super(),Fn(this,e,sE,nE,nn,{sesiones:0})}}function rE(t){let e,n,s,i,r,o,a,c,l;return r=new eE({}),c=new iE({props:{sesiones:t[0]}}),{c(){e=I("body"),n=I("div"),s=I("h5"),s.textContent="CRUD Pacientes",i=ee(),ls(r.$$.fragment),o=ee(),a=I("div"),ls(c.$$.fragment),g(n,"class","contenedor-pacientes svelte-1y3ujd1"),g(a,"class","contenedor-sesiones svelte-1y3ujd1"),g(e,"class","svelte-1y3ujd1")},m(u,h){Fe(u,e,h),w(e,n),w(n,s),w(n,i),Cn(r,n,null),w(e,o),w(e,a),Cn(c,a,null),l=!0},p:ye,i(u){l||(Nt(r.$$.fragment,u),Nt(c.$$.fragment,u),l=!0)},o(u){Qt(r.$$.fragment,u),Qt(c.$$.fragment,u),l=!1},d(u){u&&Re(e),In(r),In(c)}}}function oE(t){return[[]]}class aE extends Bn{constructor(e){super(),Fn(this,e,oE,rE,nn,{})}}function cE(t){let e,n,s;return n=new aE({}),{c(){e=I("div"),ls(n.$$.fragment),g(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){Fe(i,e,r),Cn(n,e,null),s=!0},p:ye,i(i){s||(Nt(n.$$.fragment,i),s=!0)},o(i){Qt(n.$$.fragment,i),s=!1},d(i){i&&Re(e),In(n)}}}function lE(t){let e,n,s,i,r,o;return{c(){e=I("div"),n=I("h1"),n.textContent="ingrese la contraseña:",s=ee(),i=I("input"),g(n,"class","svelte-uueu6x"),g(i,"type","password"),g(i,"class","svelte-uueu6x"),g(e,"class","ingreso svelte-uueu6x")},m(a,c){Fe(a,e,c),w(e,n),w(e,s),w(e,i),me(i,t[1]),r||(o=[te(i,"input",t[3]),te(i,"input",t[2])],r=!0)},p(a,c){c&2&&i.value!==a[1]&&me(i,a[1])},i:ye,o:ye,d(a){a&&Re(e),r=!1,rt(o)}}}function uE(t){let e,n,s,i;const r=[lE,cE],o=[];function a(c,l){return c[0]==="nada"?0:c[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=I("main"),s&&s.c(),g(e,"class","svelte-uueu6x")},m(c,l){Fe(c,e,l),~n&&o[n].m(e,null),i=!0},p(c,[l]){let u=n;n=a(c),n===u?~n&&o[n].p(c,l):(s&&(Zd(),Qt(o[u],1,1,()=>{o[u]=null}),ef()),~n?(s=o[n],s?s.p(c,l):(s=o[n]=r[n](c),s.c()),Nt(s,1),s.m(e,null)):s=null)},i(c){i||(Nt(s),i=!0)},o(c){Qt(s),i=!1},d(c){c&&Re(e),~n&&o[n].d()}}}function hE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class dE extends Bn{constructor(e){super(),Fn(this,e,hE,uE,nn,{})}}new dE({target:document.getElementById("app")});
